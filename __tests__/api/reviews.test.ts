import { createMocks, RequestMethod } from 'node-mocks-http';
import type { NextApiRequest, NextApiResponse } from 'next';
import reviewsHandler from '@/pages/api/reviews'; // Handler for POST /api/reviews
import productReviewsHandler from '@/pages/api/reviews/[productId]'; // Handler for GET /api/reviews/[productId]
import {
  PrismaClient,
  ProductReview,
  User as PrismaUser,
  Prisma
} from '@prisma/client'; // Import Prisma types
import { supabase } from '@/integrations/supabase/client';
import type {
  User as SupabaseUser,
  Session,
  AuthError
} from '@supabase/supabase-js'; // Supabase types
import { describe, it, expect, beforeEach, vi } from 'vitest';

// Mock Prisma Client
jest.mock('@prisma/client', () => {
  const mockPrismaClient = {
    productReview: {
      create: jest.fn(),
      findMany: jest.fn()
    },
    user: {
      findUnique: jest.fn()
    },
    $disconnect: jest.fn()
  };
  return {
    PrismaClient: jest.fn(() => mockPrismaClient),
    // Mock Prisma known request error for testing specific error codes
    Prisma: {
      PrismaClientKnownRequestError: class PrismaClientKnownRequestError extends Error {
        code: string;
        meta?: Record<string, unknown>;
        constructor(
          message: string,
          code: string,
          clientVersion: string,
          meta?: Record<string, unknown>
        ) {
          super(message);
          this.code = code;
          this.meta = meta;
          this.name = 'PrismaClientKnownRequestError';
        }
      }
    }
  };
});

// Mock Supabase Client
jest.mock('@/integrations/supabase/client', () => ({
  supabase: {
    auth: {
      getSession: jest.fn()
    }
  }
}));

// Define expected response types
interface ErrorResponse {
  error: string;
  details?: string;
}

// For POST /api/reviews, success is the created ProductReview
type PostReviewSuccessResponse = ProductReview;
// For GET /api/reviews/[productId], success is ProductReview[]
type GetReviewsSuccessResponse = ProductReview[];

describe('/api/reviews API Endpoint', () => {
  let prismaMock: PrismaClient; // Use PrismaClient type for the mock

  beforeEach(() => {
    prismaMock = new PrismaClient();
    (prismaMock.productReview.create as jest.Mock).mockReset();
    (prismaMock.productReview.findMany as jest.Mock).mockReset();
    (prismaMock.user.findUnique as jest.Mock).mockReset();
    (prismaMock.$disconnect as jest.Mock).mockReset(); // This is not typically called in handlers
    (supabase.auth.getSession as jest.Mock).mockReset();
  });

  describe('POST /api/reviews', () => {
    it('should successfully create a review (201)', async () => {
      const mockPrismaUser: PrismaUser = {
        id: 1,
        email: 'test@example.com',
        name: 'Test User',
        passwordHash: 'hashedpassword',
        createdAt: new Date(),
        updatedAt: new Date(),
        avatarUrl: null,
        bio: null,
        companyId: null,
        headline: null,
        lastLoginAt: null,
        notifications: {},
        profileComplete: false,
        resetToken: null,
        resetTokenExpiry: null,
        role: 'USER',
        softDeleted: false,
        userType: 'individual'
      };

      const mockReviewResponse: ProductReview = {
        id: 'review1',
        productId: 'product1',
        userId: 1,
        rating: 5,
        title: 'Great product!',
        content: 'This product exceeded my expectations.',
        createdAt: new Date(),
        updatedAt: new Date()
      };

      // Mock successful session
      (supabase.auth.getSession as jest.Mock).mockResolvedValue({
        data: {
          session: {
            user: { id: 'user1' }
          }
        },
        error: null
      });

      // Mock user lookup
      (prismaMock.user.findUnique as jest.Mock).mockResolvedValue(mockPrismaUser);

      // Mock review creation
      (prismaMock.productReview.create as jest.Mock).mockResolvedValue(mockReviewResponse);

      const { req, res } = createMocks({
        method: 'POST' as RequestMethod,
        body: {
          productId: 'product1',
          rating: 5,
          title: 'Great product!',
          content: 'This product exceeded my expectations.'
        }
      });

      await reviewsHandler(
        req as unknown as NextApiRequest,
        res as unknown as NextApiResponse
      );

      expect(res._getStatusCode()).toBe(201);
      const responseData = res._getJSONData();
      expect(responseData.id).toBe('review1');
      expect(responseData.rating).toBe(5);
    });

    it('should return 401 if user is not authenticated', async () => {
      // Mock no session
      (supabase.auth.getSession as jest.Mock).mockResolvedValue({
        data: { session: null },
        error: null
      });

      const { req, res } = createMocks({
        method: 'POST' as RequestMethod,
        body: {
          productId: 'product1',
          rating: 5,
          title: 'Great product!',
          content: 'This product exceeded my expectations.'
        }
      });

      await reviewsHandler(
        req as unknown as NextApiRequest,
        res as unknown as NextApiResponse
      );

      expect(res._getStatusCode()).toBe(401);
      const responseData = res._getJSONData() as ErrorResponse;
      expect(responseData.error).toBe('Unauthorized');
    });

    it('should return 400 for invalid rating', async () => {
      // Mock successful session
      (supabase.auth.getSession as jest.Mock).mockResolvedValue({
        data: {
          session: {
            user: { id: 'user1' }
          }
        },
        error: null
      });

      const { req, res } = createMocks({
        method: 'POST' as RequestMethod,
        body: {
          productId: 'product1',
          rating: 6, // Invalid rating (should be 1-5)
          title: 'Great product!',
          content: 'This product exceeded my expectations.'
        }
      });

      await reviewsHandler(
        req as unknown as NextApiRequest,
        res as unknown as NextApiResponse
      );

      expect(res._getStatusCode()).toBe(400);
      const responseData = res._getJSONData() as ErrorResponse;
      expect(responseData.error).toBe('Invalid rating');
    });
  });

  describe('GET /api/reviews/[productId]', () => {
    it('should return reviews for a product', async () => {
      const mockReviews: ProductReview[] = [
        {
          id: 'review1',
          productId: 'product1',
          userId: 1,
          rating: 5,
          title: 'Great product!',
          content: 'This product exceeded my expectations.',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: 'review2',
          productId: 'product1',
          userId: 2,
          rating: 4,
          title: 'Good product',
          content: 'Pretty good overall.',
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ];

      (prismaMock.productReview.findMany as jest.Mock).mockResolvedValue(mockReviews);

      const { req, res } = createMocks({
        method: 'GET' as RequestMethod,
        query: { productId: 'product1' }
      });

      await productReviewsHandler(
        req as unknown as NextApiRequest,
        res as unknown as NextApiResponse
      );

      expect(res._getStatusCode()).toBe(200);
      const responseData = res._getJSONData() as GetReviewsSuccessResponse;
      expect(responseData).toHaveLength(2);
      expect(responseData[0].id).toBe('review1');
      expect(responseData[1].id).toBe('review2');
    });

    it('should return empty array for product with no reviews', async () => {
      (prismaMock.productReview.findMany as jest.Mock).mockResolvedValue([]);

      const { req, res } = createMocks({
        method: 'GET' as RequestMethod,
        query: { productId: 'product1' }
      });

      await productReviewsHandler(
        req as unknown as NextApiRequest,
        res as unknown as NextApiResponse
      );

      expect(res._getStatusCode()).toBe(200);
      const responseData = res._getJSONData() as GetReviewsSuccessResponse;
      expect(responseData).toHaveLength(0);
    });
  });
});