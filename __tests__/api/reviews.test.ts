import { createMocks, RequestMethod } from 'node-mocks-http';
import type { NextApiRequest, NextApiResponse } from 'next';
import reviewsHandler from '@/pages/api/reviews'; // Handler for POST /api/reviews
import productReviewsHandler from '@/pages/api/reviews/[productId]'; // Handler for GET /api/reviews/[productId]
import { PrismaClient } from '@prisma/client';
import { supabase } from '@/integrations/supabase/client';

// Mock Prisma Client
jest.mock('@prisma/client', () => {
  const mockPrismaClient = {
    productReview: {
      create: jest.fn(),
      findMany: jest.fn(),
      findUnique: jest.fn(),
      update: jest.fn(),
      delete: jest.fn(),
    },
    $disconnect: jest.fn(),
  };
  return {
    PrismaClient: jest.fn(() => mockPrismaClient),
  };
});

// Mock Supabase
jest.mock('@/integrations/supabase/client', () => ({
  supabase: {
    auth: {
      getUser: jest.fn(),
    },
  },
}));

describe('/api/reviews', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  describe('POST /api/reviews', () => {
    it('should create a new review', async () => {
      const { req, res } = createMocks<NextApiRequest, NextApiResponse>({
        method: 'POST' as RequestMethod,
        body: {
          productId: 'test-product-id',
          rating: 5,
          comment: 'Great product!',
        },
      });

      // Mock user authentication
      (supabase.auth.getUser as jest.Mock).mockResolvedValue({
        data: { user: { id: 'test-user-id' } },
        error: null,
      });

      // Mock Prisma create
      const mockPrisma = new PrismaClient();
      (mockPrisma.productReview.create as jest.Mock).mockResolvedValue({
        id: 'review-id',
        productId: 'test-product-id',
        userId: 'test-user-id',
        rating: 5,
        comment: 'Great product!',
        createdAt: new Date(),
      });

      await reviewsHandler(req, res);

      expect(res._getStatusCode()).toBe(201);
      expect(JSON.parse(res._getData())).toMatchObject({
        productId: 'test-product-id',
        rating: 5,
        comment: 'Great product!',
      });
    });

    it('should return 401 if user is not authenticated', async () => {
      const { req, res } = createMocks<NextApiRequest, NextApiResponse>({
        method: 'POST' as RequestMethod,
        body: {
          productId: 'test-product-id',
          rating: 5,
          comment: 'Great product!',
        },
      });

      // Mock unauthenticated user
      (supabase.auth.getUser as jest.Mock).mockResolvedValue({
        data: { user: null },
        error: null,
      });

      await reviewsHandler(req, res);

      expect(res._getStatusCode()).toBe(401);
    });
  });
});

describe('/api/reviews/[productId]', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  describe('GET /api/reviews/[productId]', () => {
    it('should return reviews for a product', async () => {
      const { req, res } = createMocks<NextApiRequest, NextApiResponse>({
        method: 'GET' as RequestMethod,
        query: {
          productId: 'test-product-id',
        },
      });

      // Mock Prisma findMany
      const mockPrisma = new PrismaClient();
      (mockPrisma.productReview.findMany as jest.Mock).mockResolvedValue([
        {
          id: 'review-1',
          productId: 'test-product-id',
          userId: 'user-1',
          rating: 5,
          comment: 'Great product!',
          createdAt: new Date(),
        },
        {
          id: 'review-2',
          productId: 'test-product-id',
          userId: 'user-2',
          rating: 4,
          comment: 'Good product!',
          createdAt: new Date(),
        },
      ]);

      await productReviewsHandler(req, res);

      expect(res._getStatusCode()).toBe(200);
      const data = JSON.parse(res._getData());
      expect(data).toHaveLength(2);
      expect(data[0]).toMatchObject({
        productId: 'test-product-id',
        rating: 5,
        comment: 'Great product!',
      });
    });
  });
});