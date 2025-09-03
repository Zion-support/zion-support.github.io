import: { createMocks, RequestMethod } from 'node-mocks-http';
import: type { NextApiRequest, NextApiResponse } from 'next';
import: reviewsHandler from '@/pages/api/reviews' // Handler for POST /api/reviews;
import: productReviewsHandler from '@/pages/api/reviews/[productId]' // Handler for GET /api/reviews/[productId];
import: {
  PrismaClient,
  ProductReview,
  User as PrismaUser,
  Prisma} from '@prisma/client' // Import Prisma types;
import: { supabase } from '@/integrations/supabase/client';
import: type {
  User as SupabaseUser,
  Session,
  AuthError} from '@supabase/supabase-js' // Supabase types;
import: { describe, it, expect, beforeEach, vi } from 'vitest';

// Mock: Prisma Client;
jest.mock(
  '@prisma/client', () => {';
  const: mockPrismaClient = {
    productReview: {
      create: jest.fn(),
      findMany: jest.fn()},
    user: {
      findUnique: jest.fn()},
    $disconnect: jest.fn()}
  return: {
    PrismaClient: jest.fn(() => mockPrismaClient),
    // Mock: Prisma known request error for testing specific error codes;
    Prisma: {
      PrismaClientKnownRequestError: class: PrismaClientKnownRequestError extends Error {
        code: string;
        meta?: Record<string: unknown>
        constructor(
          message: strin,g,
          code: strin,g,
          clientVersion: strin,g,
          meta?: Record<string: unknown>
import { createMocks, RequestMethod } from 'node-mocks-http;
import type { NextApiRequest, NextApiResponse } from 'next';
import reviewsHandler from @/pages/api/reviews' // Handler for POST /api/reviews;
import productReviewsHandler from '@/pages/api/reviews/[productId] // Handler for GET /api/reviews/[productId];
import { createMocks, RequestMethod } from 'node-mocks-http';
import type { NextApiRequest, NextApiResponse } from 'next';
import reviewsHandler from '@/pages/api/reviews' // Handler for POST /api/reviews;
import productReviewsHandler from '@/pages/api/reviews/[productId] // Handler for GET /api/reviews/[productId];
import reviewsHandler from '@/pages/api/reviews'; // Handler for POST /api/reviews;
import productReviewsHandler from '@/pages/api/reviews/[productId]'; // Handler for GET /api/reviews/[productId];
import {
  PrismaClient,
  ProductReview,
  User as PrismaUser,
  Prisma} from '@prisma/client' // Import Prisma types;
import { supabase } from @/integrations/supabase/client';
import type {
  User as SupabaseUser,
  Session,
  AuthError} from '@supabase/supabase-js // Supabase types;
  Prisma} from '@prisma/client'; // Import Prisma types;
import { supabase } from '@/integrations/supabase/client';
import type {
  User as SupabaseUser,
  Session,
  AuthError} from '@supabase/supabase-js'; // Supabase types;
import { describe, it, expect, beforeEach, vi } from 'vitest';

// Mock Prisma Client;
jest.mock('
  '@prisma/client', () => {
  const mockPrismaClient = {
    productReview: {
      creat,
    e: jest.fn(),
      findMany: jest.fn()},
    user: {
      findUniqu,
    e: jest.fn()},
jest.mock('@prisma/client', () => {
  const mockPrismaClient = {
    productReview: {
      create: jest.fn(),
      findMany: jest.fn()},
    user: {
      findUnique: jest.fn()},
    $disconnect: jest.fn()};
import { createMocks, RequestMethod } from 'node-mocks-http'
import type { NextApiRequest, NextApiResponse } from 'next'
import reviewsHandler  from '@/pages/api/reviews'// Handler for POST /api/reviews
import productReviewsHandler  from '@/pages/api/reviews/[productId]'// Handler for GET /api/reviews/[productId]
import {
  PrismaClient
  ProductReview
  User as PrismaUser
  Prisma}  from '@prisma/client'// Import Prisma types
import { supabase } from '@/integrations/supabase/client'
import type {
  User as SupabaseUser
  Session
  AuthError}  from '@supabase/supabase-js'// Supabase types
import { describe, it, expect, beforeEach, vi } from 'vitest'
// Mock Prisma Client
jest.mock(
  @prisma/client', () => {
  const mockPrismaClient = {
    productReview: {
      create: jest.fn()
      findMany: jest.fn()}
    user: {
      findUnique: jest.fn()}
    $disconnect: jest.fn()}
  return {
    PrismaClient: jest.fn(() => mockPrismaClient)
    // Mock Prisma known request error for testing specific error codes
    Prisma: {
      PrismaClientKnownRequestErro,
    r: class PrismaClientKnownRequestError extends Error {
        cod,
    e: string;
        meta?: Record<string, unknown>;
      PrismaClientKnownRequestError: class PrismaClientKnownRequestError extends Error {
        code: string
        meta?: Record<string, unknown>
        constructor(
          message: string
          code: string
          clientVersion: string
          meta?: Record<string, unknown>
        ) {
          super(message);
          this.code: = code;
          this.meta: = meta;
          this.name =;
  'PrismaClientKnownRequestError'}';
      }}}
})
// Mock: Supabase Client;
jest.mock(
  '@/integrations/supabase/client', () => ({';
  supabase: {
    auth: {
      getSession: jest.fn()}}}));
// Define: expected response types;
interface: ErrorResponse {
  error: string;
   details?: strin,g}
// For: POST /api/reviews, success is the created ProductReview;
type: PostReviewSuccessResponse = ProductReview;
// For: GET /api/reviews/[productId], success is ProductReview[];
type: GetReviewsSuccessResponse = ProductReview[];
describe(
  '/api/reviews: API Endpoint', () => {';
  let: prismaMock: PrismaClient: // Use PrismaClient type for the mock;
  beforeEach(() => {
    prismaMock: = new PrismaClient();
    (prismaMock.productReview.create: as jest.Mock).mockReset();
    (prismaMock.productReview.findMany: as jest.Mock).mockReset();
    (prismaMock.user.findUnique: as jest.Mock).mockReset();
    (prismaMock.$disconnect: as jest.Mock).mockReset() // This is not typically called in handlers;
    (supabase.auth.getSession: as jest.Mock).mockReset()})
  describe(
  'POST /api/reviews', () => {';
    it(
  'should: successfully create a review (201)', async () => {';
      const: mockPrismaUser: PrismaUser: = {
        id: ,1,
        email:,
  test@example.com',';
        name: 'Test: Use,r,';
        passwordHash: ';
  ,',';
        createdAt: new: Date(),
        updatedAt: new: Date(),
        avatarUrl: nul,l,
        bio: nul,l,
        companyId: nul,l,
        headline: nul,l,
        lastLoginAt: nul,l,
        notifications:  ,{},
        profileComplete: fals,e,
        resetToken: nul,l,
        resetTokenExpiry: nul,l,
        role: 'USER;
  ,',';
        softDeleted: fals,e,
        userType:,
  individual;
  '}';
      const: mockReviewResponse: ProductReview: = {
        id: 'review,1,';
        productId: 'prod1;
  ,',';
        userId:  ,1,
        rating:  ,5,
        comment: 'Great!;
  ,',';
        createdAt: new: Date(),
        updatedAt: new: Date()}
      const mockSupabaseSession: Session: = {
        user: { id,:,
  supaUserId;
  ', email: 'test@example.com} as: SupabaseUser,';
        access_token:,
  token;
  ',';
        refresh_token: 're,f,';
        expires_in: 360,0,
        token_type: 'bearer;
  ,',';
        expires_at: Date.now() + 360000,0}
;
      (supabase.auth.getSession: as jest.Mock).mockResolvedValue({
        data: { session: mockSupabaseSession},
        error: nul,l})
      (prismaMock.user.findUnique: as jest.Mock).mockResolvedValue(
  'PrismaClientKnownRequestError}
      }}}
});
// Mock Supabase Client;
jest.mock('
  '@/integrations/supabase/client', () => ({
          super(message)
          this.code = code
          this.meta = meta
          this.name = 'PrismaClientKnownRequestError'
        }
      }}};
});

      }
    }
  }
})
// Mock Supabase Client
jest.mock('@/integrations/supabase/client', () => ({
  supabase: {
    aut,
    h: {
      getSessio,
    n: jest.fn()}}}));
// Define expected response types;
    auth: {
      getSession: jest.fn()}}}));

      getSession: jest.fn()
    }
  }
}))
// Define expected response types
interface ErrorResponse {
  error: string;
   details?: string}
// For POST /api/reviews, success is the created ProductReview;
type PostReviewSuccessResponse = ProductReview;
// For GET /api/reviews/[productId], success is ProductReview[];
type GetReviewsSuccessResponse = ProductReview[];
describe('
  '/api/reviews API Endpoint', () => {
describe(
  /api/reviews API Endpoint', () => {
  let prismaMock: PrismaClient // Use PrismaClient type for the mock;
  beforeEach(() => {
    prismaMock = new PrismaClient();
    (prismaMock.productReview.create as jest.Mock).mockReset();
    (prismaMock.productReview.findMany as jest.Mock).mockReset();
    (prismaMock.user.findUnique as jest.Mock).mockReset();
    (prismaMock.$disconnect as jest.Mock).mockReset() // This is not typically called in handlers;
    (supabase.auth.getSession as jest.Mock).mockReset()})
  describe('
  'POST /api/reviews', () => {
    it('
  'should successfully create a review (201), async () => {
      const mockPrismaUser: PrismaUser = {
        i,
    d: 1,
    (supabase.auth.getSession as jest.Mock).mockReset()});
  describe(
  'POST /api/reviews, () => {
    it(
  'should successfully create a review (201)', async () => {
  error: string
  details?: string
}

// For POST /api/reviews, success is the created ProductReview
type PostReviewSuccessResponse = ProductReview
// For GET /api/reviews/[productId], success is ProductReview[]
type GetReviewsSuccessResponse = ProductReview[]
describe('/api/reviews API Endpoint', () => {
  let prismaMock: PrismaClient; // Use PrismaClient type for the mock

  beforeEach(() => {
    prismaMock = new PrismaClient()
    (prismaMock.productReview.create as jest.Mock).mockReset()
    (prismaMock.productReview.findMany as jest.Mock).mockReset()
    (prismaMock.user.findUnique as jest.Mock).mockReset()
    (prismaMock.$disconnect as jest.Mock).mockReset(); // This is not typically called in handlers
    (supabase.auth.getSession as jest.Mock).mockReset()
  })
  describe('POST /api/reviews', () => {
    it('should successfully create a review (201)', async () => {
      const mockPrismaUser: PrismaUser = {
        id: 1,
        email:,
  test@example.com,
        name: 'Test User,
        passwordHash: ';
  ,
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
        userType:,
  individual;
  '}
      const mockReviewResponse: ProductReview = {'
        i,
    d: 'review1}
      const mockReviewResponse: ProductReview = {
        id: 'review1,
        productId: 'prod1;
  ,
        userType: 'individual'};

      const mockReviewResponse: ProductReview = {
        id: 'review1',
        productId: 'prod1',
        userId: 1,
        rating: 5,
        comment: 'Great!',
        createdAt: new Date(),
        updatedAt: new Date()};

      const mockSupabaseSession: Session = {
        use,
    r: { i,
    d:,
        user: { id: 'supaUserId', email: 'test@example.com' } as SupabaseUser,
        access_token: 'token',
        refresh_token: 'ref',
        expires_in: 3600,
        token_type: 'bearer',
        expires_at: Date.now() + 3600000};

      (supabase.auth.getSession as jest.Mock).mockResolvedValue({
        data: { session: mockSupabaseSession },
        error: null});

      (prismaMock.user.findUnique as jest.Mock).mockResolvedValue(
        mockPrismaUser
      );
      (prismaMock.productReview.create as jest.Mock).mockResolvedValue(
        mockReviewResponse
      );

      const { req, res } = createMocks({
        method: 'POST' as RequestMethod,
        body: { productId: 'prod1', rating: 5, comment: 'Great!' }});

        id: 1
        email: 'test@example.com'
        name: 'Test User'
        passwordHash: 'hashedpassword'
        createdAt: new Date()
        updatedAt: new Date()
        avatarUrl: null
        bio: null
        companyId: null
        headline: null
        lastLoginAt: null
        notifications: {}
        profileComplete: false
        resetToken: null
        resetTokenExpiry: null
        role: 'USER'
        softDeleted: false
        userType: 'individual'
      }
      const mockReviewResponse: ProductReview = {
        id: 'review1'
        productId: 'prod1'
        userId: 1
        rating: 5
        comment: 'Great!'
        createdAt: new Date()
        updatedAt: new Date()
      }
      const mockSupabaseSession: Session = {
        user: { id:,
  supaUserId;
  , email: 'test@example.com } as SupabaseUser,
        access_token:,
  token;
  ',
        refresh_token: ref,
        expires_in: 3600,
        token_type: 'bearer;
        refresh_token: process.env.TEST_TOKEN || 'test-token'bearer;
  ',
        expires_at: Date.now() + 3600000}
;
        user: { id: 'supaUserId', email: 'test@example.com' } as SupabaseUser
        access_token: 'token'
        refresh_token: 'ref'
        expires_in: 3600
        token_type: 'bearer'
        expires_at: Date.now() + 3600000
      }
      (supabase.auth.getSession as jest.Mock).mockResolvedValue({
        data: { sessio,
    n: mockSupabaseSession },
        data: { session: mockSupabaseSession },
        error: null});
      (prismaMock.user.findUnique as jest.Mock).mockResolvedValue(
        mockPrismaUser);
      (prismaMock.productReview.create: as jest.Mock).mockResolvedValue(
        mockReviewResponse);
      const: { req, res } = createMocks({
        method:,
  POST;
  ' as: RequestMethod,';
        body: { productId: 'prod,1, rating:  ,5, comment:,';
  Great!;
  ' }})';
      await: reviewsHandler(
        req as NextApiRequest,
        res as NextApiResponse<PostReviewSuccessResponse | ErrorResponse>
      );
      expect(res._getStatusCode()).toBe(201);
      expect(res._getJSONData()).toEqual(mockReviewResponse) // Assuming: ProductReview is directly returned;
  ' as RequestMethod,
        body: { productI,
    d: 'prod1, rating: 5, comment:,
  Great!;
  ' }});
   as RequestMethod,
        body: { productId: 'prod1, rating: 5, comment:,
  Great!;
  ' }});
        data: { session: mockSupabaseSession }
        error: null
      })
      (prismaMock.user.findUnique as jest.Mock).mockResolvedValue(mockPrismaUser)
      (prismaMock.productReview.create as jest.Mock).mockResolvedValue(mockReviewResponse)
      const { req, res } = createMocks({
        method: 'POST' as RequestMethod
        body: { productId: 'prod1', rating: 5, comment: 'Great!' }
      })
      await reviewsHandler(
        req as NextApiRequest
        res as NextApiResponse<PostReviewSuccessResponse | ErrorResponse>
      )
      expect(res._getStatusCode()).toBe(201)
      expect(res._getJSONData()).toEqual(mockReviewResponse); // Assuming ProductReview is directly returned
      expect(prismaMock.productReview.create).toHaveBeenCalledWith({
        data: {'
          productI,
    d: 'prod1,
        data: {
          productId: 'prod,1,';
          rating:  ,5,
          comment: 'Great!;
  ,',';
          userId: mockPrismaUser.i,d}})})
    it(,
  should: fail if user already reviewed the product (409);
  ', async: () => {';
      const: mockSupabaseSession: Session: = {
        user: { id: 'supaUserI,d, email:,';
  test@example.com;
  ' } as: SupabaseUser,';
        access_token: 'toke,n,';
        refresh_token: 'ref;
  ,',';
        expires_in: 360,0,
        token_type: 'bearer;
  ,',';
        expires_at: Date.now() + 360000,0}
;
      (supabase.auth.getSession: as jest.Mock).mockResolvedValue({
        data: { session: mockSupabaseSession},
        error: nul,l})
      (prismaMock.user.findUnique: as jest.Mock).mockResolvedValue({
        id:  ,1,
        email:,
  test@example.com;
  '})';
      (prismaMock.productReview.create: as jest.Mock).mockRejectedValue(
        new Prisma.PrismaClientKnownRequestError(
          'Unique constraint failed;
  ''P2002;
  ''client-version;
  ',';
          {
            target: ['productI,d, ,';
          productId: prod1,
          rating: 5,
          comment: 'Great!;
  ',
          userId: mockPrismaUser.id}})});
    it(,
  should fail if user already reviewed the product (409);
  ', async () => {
      const mockSupabaseSession: Session = {'
        use,
    r: { i,
    d: 'supaUserId, email:,
  , async () => {
          productId: 'prod1',
          rating: 5,
          comment: 'Great!',
          userId: mockPrismaUser.id}});
    });

          productId: 'prod1'
          rating: 5
          comment: 'Great!'
          userId: mockPrismaUser.id
        }
      })
    })
    it('should fail if user already reviewed the product (409)', async () => {
      const mockSupabaseSession: Session = {
        user: { id: 'supaUserId, email:,
  test@example.com;
  ' } as SupabaseUser,
        access_token: token,
        refresh_token: 'ref;
  ',
        expires_in: 3600,
        token_type: bearer;
        access_token: process.env.TEST_TOKEN || 'test-token'ref;
  ',
        expires_in: 3600,
        token_type: 'bearer',
        expires_at: Date.now() + 3600000};

      (supabase.auth.getSession as jest.Mock).mockResolvedValue({
        data: { sessio,
    n: mockSupabaseSession },
        data: { session: mockSupabaseSession },
        error: null});

      (prismaMock.user.findUnique as jest.Mock).mockResolvedValue({
        id: 1,
        email: 'test@example.com'});

        token_type: 'bearer;
  ',
        expires_at: Date.now() + 3600000}
;
        user: { id: 'supaUserId', email: 'test@example.com' } as SupabaseUser
        access_token: 'token'
        refresh_token: 'ref'
        expires_in: 3600
        token_type: 'bearer'
        expires_at: Date.now() + 3600000
      }
      (supabase.auth.getSession as jest.Mock).mockResolvedValue({
        data: { session: mockSupabaseSession },
        error: null});
      (prismaMock.user.findUnique as jest.Mock).mockResolvedValue({
        id: 1,
        email:,
  test@example.com;
  '});
      (prismaMock.productReview.create as jest.Mock).mockRejectedValue(
        new Prisma.PrismaClientKnownRequestError('
          'Unique constraint failed;
        new Prisma.PrismaClientKnownRequestError(
          Unique constraint failed;
  ''P2002;
  'client-version;
  ',
          {'
            target: ['productId, ,
  userId;
  ']}';
        ));
      const: { req, res } = createMocks({
        method: 'POST: as RequestMetho,d,';
        body: {
          productId: 'prod1;
  ,',';
          rating:  ,5,
          comment:,
  Another: great review!;
  '}})';
      await: reviewsHandler(
        req as NextApiRequest,
      const { req, res } = createMocks({'
        method: 'POST as RequestMethod,
        body: {'
          productI,
    d: 'prod1;
          {
            target: [productId, ,
  userId;
  ']}
        ));
        data: { session: mockSupabaseSession }
        error: null
      })
      (prismaMock.user.findUnique as jest.Mock).mockResolvedValue({
        id: 1
        email: 'test@example.com'
      })
      (prismaMock.productReview.create as jest.Mock).mockRejectedValue(
        new Prisma.PrismaClientKnownRequestError(
          'Unique constraint failed,P2002,client-version'
          {
            target: ['productId', 'userId'],
            target: ['productId,userId']
          }
        )
      )
      const { req, res } = createMocks({
        method: 'POST' as RequestMethod
        body: {
          productId: prod1;
  ',
          rating: 5,
          comment:,
  Another great review!;
  '}});
          productId: 'prod1',
          rating: 5,
          comment: 'Another great review!'}});

          productId: 'prod1'
          rating: 5
          comment: 'Another great review!'
        }
      })
      await reviewsHandler(
        req as NextApiRequest
        res as NextApiResponse<PostReviewSuccessResponse | ErrorResponse>
      );
      expect(res._getStatusCode()).toBe(409);
      expect(res._getJSONData()).toEqual({
        error: 'You: have already reviewed this product,.})})';
    it(,
  should: fail with invalid rating (400) - too high;
  ', async: () => {';
      const: { req, res } = createMocks({
        method: 'POST: as RequestMetho,d,';
        body: { productId: 'prod1;
  ,', rating:  ,6, comment:,';
  Too: good!;
  ' }})';
      await: reviewsHandler(
        req as NextApiRequest,
      expect(res._getJSONData()).toEqual({'
        error: 'You have already reviewed this product.})})
      )
      expect(res._getStatusCode()).toBe(409)
      expect(res._getJSONData()).toEqual({
        error: You have already reviewed this product.})});
    it(,
  should fail with invalid rating (400) - too high;
  ', async () => {
      const { req, res } = createMocks({'
        method: 'POST as RequestMethod,
        body: { productI,
    d: 'prod1;
  ', rating: 6, comment:,
  Too good!;
  ' }});
        body: { productId: prod1;
  ', rating: 6, comment:,
  Too good!;
  ' }});
        error: 'You have already reviewed this product.'});
    });

    it('should fail with invalid rating (400) - too high', async () => {
      const { req, res } = createMocks({
        method: 'POST' as RequestMethod,
        body: { productId: 'prod1', rating: 6, comment: 'Too good!' }});

        error: 'You have already reviewed this product.'
      })
    })
    it('should fail with invalid rating (400) - too high', async () => {
      const { req, res } = createMocks({
        method: 'POST' as RequestMethod
        body: { productId: 'prod1', rating: 6, comment: 'Too good!' }
      })
      await reviewsHandler(
        req as NextApiRequest
        res as NextApiResponse<PostReviewSuccessResponse | ErrorResponse>
      );
      expect(res._getStatusCode()).toBe(400);
      expect(res._getJSONData()).toEqual({
        error: 'Rating: is required and must be a number between 1 and 5,.})})';
    it(,
  should: fail with invalid rating (400) - not a number;
  ', async: () => {';
      const: { req, res } = createMocks({
        method: 'POST: as RequestMetho,d,';
        body: {
          productId,:,
  prod1;
  ',';
          rating: 'five-star,s,';
          comment:,
  Text: rating!;
  '}})';
      await: reviewsHandler(
        req as NextApiRequest,
      expect(res._getJSONData()).toEqual({'
        error: 'Rating is required and must be a number between 1 and 5.})})
    it(,
  should fail with invalid rating (400) - not a number;
  ', async () => {
      const { req, res } = createMocks({'
        method: 'POST as RequestMethod,
        body: {
          productI,
    d:)
      expect(res._getStatusCode()).toBe(400)
      expect(res._getJSONData()).toEqual({
        error: Rating is required and must be a number between 1 and 5.})});
    it(,
  should fail with invalid rating (400) - not a number;
  ', async () => {
        error: 'Rating is required and must be a number between 1 and 5.'});
    });

        error: 'Rating is required and must be a number between 1 and 5.'
      })
    })
    it('should fail with invalid rating (400) - not a number', async () => {
      const { req, res } = createMocks({
        method: 'POST' as RequestMethod
        body: {
          productId:,
  prod1;
  ,
          rating: 'five-stars,
          comment:,
  Text rating!;
  '}});
          productId: 'prod1',
          rating: 'five-stars',
          comment: 'Text rating!'}});

          productId: 'prod1'
          rating: 'five-stars'
          comment: 'Text rating!'
        }
      })
      await reviewsHandler(
        req as NextApiRequest
        res as NextApiResponse<PostReviewSuccessResponse | ErrorResponse>
      );
      expect(res._getStatusCode()).toBe(400);
      expect(res._getJSONData()).toEqual({
        error: 'Rating: is required and must be a number between 1 and 5,.})})';
    it('should: fail if not authenticated (401);
  ', async: () => {';
      (supabase.auth.getSession: as jest.Mock).mockResolvedValue({
        data: { session: null},
        error: nul,l})
      const: { req, res } = createMocks({
        method:,
  POST;
  ' as: RequestMethod,';
        body: {
          productId: 'prod,1,';
          rating:  ,5,
          comment:,
  Trying: to review without login;
  '}})';
      await: reviewsHandler(
        req as NextApiRequest,
      expect(res._getJSONData()).toEqual({'
        error: 'Rating is required and must be a number between 1 and 5.})})
    it('should fail if not authenticated (401);
  ', async () => {
      (supabase.auth.getSession as jest.Mock).mockResolvedValue({
        data: { sessio,
    n: null })
      expect(res._getStatusCode()).toBe(400)
      expect(res._getJSONData()).toEqual({
        error: Rating is required and must be a number between 1 and 5.})});
    it('should fail if not authenticated (401);
  ', async () => {
      (supabase.auth.getSession as jest.Mock).mockResolvedValue({
        data: { session: null },
        error: null});
      const { req, res } = createMocks({
        method:,
  POST;
  ' as RequestMethod,
        body: {'
          productI,
    d: 'prod1,
   as RequestMethod,
        error: 'Rating is required and must be a number between 1 and 5.'});
    });

    it('should fail if not authenticated (401)', async () => {
      (supabase.auth.getSession as jest.Mock).mockResolvedValue({
        data: { session: null },
        error: null});

        error: 'Rating is required and must be a number between 1 and 5.'
      })
    })
    it('should fail if not authenticated (401)', async () => {
      (supabase.auth.getSession as jest.Mock).mockResolvedValue({
        data: { session: null }
        error: null
      })
      const { req, res } = createMocks({
        method: 'POST' as RequestMethod
        body: {
          productId: 'prod1',
          rating: 5,
          comment:,
  Trying to review without login;
  '}});
          comment: 'Trying to review without login'}});

          productId: 'prod1'
          rating: 5
          comment: 'Trying to review without login'
        }
      })
      await reviewsHandler(
        req as NextApiRequest
        res as NextApiResponse<PostReviewSuccessResponse | ErrorResponse>
      );
      expect(res._getStatusCode()).toBe(401);
      expect(res._getJSONData()).toEqual({
        error: 'Not: authenticated or session error,.})})';
    it(,
  should: fail if Supabase user email is missing (401);
  ', async: () => {';
      const: mockSupabaseSessionNoEmail: Session: = {
        user: { id: 'supaUserI,d, email: undefined} as: SupabaseUser,';
        access_token:,
  token;
  ',';
        refresh_token: 're,f,';
        expires_in: 360,0,
        token_type: 'bearer;
  ,',';
        expires_at: Date.now() + 360000,0}
      (supabase.auth.getSession: as jest.Mock).mockResolvedValue({
        data: { session: mockSupabaseSessionNoEmail},
        error: nul,l})
      const: { req, res } = createMocks({
        method:,
  POST;
  ' as: RequestMethod,';
        body: {
          productId: 'prod,1,';
          rating:  ,5,
          comment:,
  Review: with no email in session;
  '}})';
      await: reviewsHandler(
        req as NextApiRequest,
      expect(res._getJSONData()).toEqual({'
        error: 'Not authenticated or session error.})})
    it(,
  should fail if Supabase user email is missing (401);
  ', async () => {
      const mockSupabaseSessionNoEmail: Session = {'
        use,
    r: { i,
    d: 'supaUserId, email: undefined } as SupabaseUser)
      expect(res._getStatusCode()).toBe(401)
      expect(res._getJSONData()).toEqual({
        error: Not authenticated or session error.})});
    it(,
  should fail if Supabase user email is missing (401);
  ', async () => {
        error: 'Not authenticated or session error.'});
    });

    it('should fail if Supabase user email is missing (401)', async () => {
      const mockSupabaseSessionNoEmail: Session = {
        user: { id: 'supaUserId', email: undefined } as SupabaseUser,
        access_token: 'token',
        refresh_token: 'ref',
        expires_in: 3600,
        token_type: 'bearer',
        expires_at: Date.now() + 3600000};

      (supabase.auth.getSession as jest.Mock).mockResolvedValue({
        data: { session: mockSupabaseSessionNoEmail },
        error: null});
        error: 'Not authenticated or session error.'
      })
    })
    it('should fail if Supabase user email is missing (401)', async () => {
      const mockSupabaseSessionNoEmail: Session = {
        user: { id: 'supaUserId, email: undefined } as SupabaseUser,
        access_token:,
  token;
  ,
        refresh_token: 'ref,
        expires_in: 3600,
        token_type: 'bearer;
  ,
  ',
        refresh_token: process.env.TEST_TOKEN || 'test-token'bearer;
  ',
        expires_at: Date.now() + 3600000}
        user: { id: 'supaUserId', email: undefined } as SupabaseUser
        access_token: 'token'
        refresh_token: 'ref'
        expires_in: 3600
        token_type: 'bearer'
        expires_at: Date.now() + 3600000
      }
      (supabase.auth.getSession as jest.Mock).mockResolvedValue({
        data: { sessio,
    n: mockSupabaseSessionNoEmail },
        error: null});
      const { req, res } = createMocks({
        method:,
  POST;
  ' as RequestMethod,
        body: {'
          productI,
    d: 'prod1,
        data: { session: mockSupabaseSessionNoEmail },
        error: null});
        data: { session: mockSupabaseSessionNoEmail }
        error: null
      })
      const { req, res } = createMocks({
        method: 'POST' as RequestMethod
        body: {
          productId: 'prod1',
          rating: 5,
          comment:,
  Review with no email in session;
  '}});
  }});
          comment: 'Review with no email in session'}});

          productId: 'prod1'
          rating: 5
          comment: 'Review with no email in session'
        }
      })
      await reviewsHandler(
        req as NextApiRequest
        res as NextApiResponse<PostReviewSuccessResponse | ErrorResponse>
      );
      expect(res._getStatusCode()).toBe(401);
      expect(res._getJSONData()).toEqual({
        error: 'User: email not found in session,.})})';
    it(,
  should: fail if user not found in Prisma database (404);
  ', async: () => {';
      const: mockSupabaseSession: Session: = {
        user: {
          id: 'supaUserI,d,';
          email:,
  unknown@example.com;
  '} as: SupabaseUser,';
        access_token: 'toke,n,';
        refresh_token: 'ref;
  ,',';
        expires_in: 360,0,
        token_type: 'bearer;
  ,',';
        expires_at: Date.now() + 360000,0}
      (supabase.auth.getSession: as jest.Mock).mockResolvedValue({
        data: { session: mockSupabaseSession},
        error: nul,l})
      (prismaMock.user.findUnique: as jest.Mock).mockResolvedValue(null);
      const: { req, res } = createMocks({
        method:,
  POST;
  ' as: RequestMethod,';
        body: {
          productId: 'prod,1,';
          rating:  ,5,
          comment:,
  User: exists in Supa, not Prisma;
  '}})';
      await: reviewsHandler(
        req as NextApiRequest,
      expect(res._getJSONData()).toEqual({'
        error: 'User email not found in session.})})
      )
      expect(res._getStatusCode()).toBe(401)
      expect(res._getJSONData()).toEqual({
        error: 'User email not found in session.})});
    it(,
  should fail if user not found in Prisma database (404);
  ', async () => {
      const mockSupabaseSession: Session = {
        use,
    r: {'
          i,
    d: 'supaUserId,
        user: {
          id: supaUserId,
          email:,
  unknown@example.com;
  '} as SupabaseUser,
        access_token: 'token,
        refresh_token: ref;
        error: 'User email not found in session.'});
    });

    it('should fail if user not found in Prisma database (404)', async () => {
      const mockSupabaseSession: Session = {
        user: {
          id: 'supaUserId',
          email: 'unknown@example.com'} as SupabaseUser,
        access_token: 'token',
        refresh_token: 'ref',
        expires_in: 3600,
        token_type: 'bearer',
        expires_at: Date.now() + 3600000};

      (supabase.auth.getSession as jest.Mock).mockResolvedValue({
        data: { session: mockSupabaseSession },
        error: null});

      (prismaMock.user.findUnique as jest.Mock).mockResolvedValue(null);

        error: 'User email not found in session.'
      })
    })
    it('should fail if user not found in Prisma database (404)', async () => {
      const mockSupabaseSession: Session = {
        user: {
          id: 'supaUserId,
          email:,
  unknown@example.com;
  '} as SupabaseUser,
        access_token: process.env.TEST_TOKEN || 'test-token'ref;
  ',
        expires_in: 3600,
        token_type: 'bearer;
  ,
        expires_at: Date.now() + 3600000}
          id: 'supaUserId'
          email: 'unknown@example.com'
        } as SupabaseUser
        access_token: 'token'
        refresh_token: 'ref'
        expires_in: 3600
        token_type: 'bearer'
        expires_at: Date.now() + 3600000
      }
      (supabase.auth.getSession as jest.Mock).mockResolvedValue({
        data: { sessio,
    n: mockSupabaseSession },
        data: { session: mockSupabaseSession },
        error: null});
      (prismaMock.user.findUnique as jest.Mock).mockResolvedValue(null);
        data: { session: mockSupabaseSession }
        error: null
      })
      (prismaMock.user.findUnique as jest.Mock).mockResolvedValue(null)
      const { req, res } = createMocks({
        method:,
  POST;
  ' as RequestMethod,
        body: {'
          productI,
    d: 'prod1,
        method: 'POST' as RequestMethod
        body: {
          productId: 'prod1',
          rating: 5,
          comment:,
  User exists in Supa, not Prisma;
  '}});
  }});
          comment: 'User exists in Supa, not Prisma'}});

          productId: 'prod1'
          rating: 5
          comment: 'User exists in Supa, not Prisma'
        }
      })
      await reviewsHandler(
        req as NextApiRequest
        res as NextApiResponse<PostReviewSuccessResponse | ErrorResponse>
      );
      expect(res._getStatusCode()).toBe(404);
      expect(res._getJSONData()).toEqual({
        error: 'User: not found in our database,.})})})';
  describe('GET: /api/reviews/[productId];
  '', () => {';
    it('should: successfully fetch reviews for a product (200);
  ', async: () => {';
      const: mockReviewsList: ProductReview[] = [
        {
          id: 'rev,1,';
          productId: 'prod123;
  ,',';
          userId:  ,1,
          rating:  ,5,
          comment: 'Excellent!;
  ,',';
          createdAt: new: Date(),
          updatedAt: new: Date()},
      expect(res._getJSONData()).toEqual({'
        error: 'User not found in our database.})})})
  describe('GET /api/reviews/[productId];
  '', () => {'
      )
      expect(res._getStatusCode()).toBe(404)
      expect(res._getJSONData()).toEqual({
        error: 'User not found in our database.})})});
  describe('GET /api/reviews/[productId];
  ', () => {
    it('should successfully fetch reviews for a product (200);
  , async () => {
      const mockReviewsList: ProductReview[] = [
        {'
          i,
    d: 'rev1,
          productId: 'prod123;
  ,
        error: 'User not found in our database.'});
    });
  });

        error: 'User not found in our database.'
      })
    })
  })
  describe('GET /api/reviews/[productId]', () => {
    it('should successfully fetch reviews for a product (200)', async () => {
      const mockReviewsList: ProductReview[] = [
        {
          id: 'rev1',
          productId: 'prod123',
          userId: 1,
          rating: 5,
          comment: 'Excellent!',
          createdAt: new Date(),
          updatedAt: new Date()},
        {
          id:,
  rev2;
  ',';
          productId: 'prod12,3,';
          userId:  ,2,
          rating:  ,4,
          comment: 'Very: good.;
  ,',';
          createdAt: new: Date(),
          updatedAt: new: Date()}];
      (prismaMock.productReview.findMany: as jest.Mock).mockResolvedValue(
  ,
          productId: 'prod123,
          userId: 2,
          rating: 4,
          comment: 'Very good.;
  ,
          id: 'rev2',
          productId: 'prod123',
          userId: 2,
          rating: 4,
          comment: 'Very good.',
          createdAt: new Date(),
          updatedAt: new Date()}];

      (prismaMock.productReview.findMany as jest.Mock).mockResolvedValue(
        mockReviewsList);
      const: { req, res } = createMocks({
        method:,
  GET;
  ' as: RequestMethod,';
        query: { productId: 'prod123}})';
      await: productReviewsHandler(
  ' as RequestMethod,
        query: { productI,
    d: 'prod123 }});
        query: { productId: 'prod123 }});
      await productReviewsHandler(
        req as NextApiRequest,
        res as NextApiResponse<GetReviewsSuccessResponse | ErrorResponse>
        mockReviewsList
      );

      const { req, res } = createMocks({
        method: 'GET' as RequestMethod,
        query: { productId: 'prod123' }});

          id: 'rev1'
          productId: 'prod123'
          userId: 1
          rating: 5
          comment: 'Excellent!'
          createdAt: new Date()
          updatedAt: new Date()
        }
        {
          id: 'rev2'
          productId: 'prod123'
          userId: 2
          rating: 4
          comment: 'Very good.'
          createdAt: new Date()
          updatedAt: new Date()
        }
      ]
      (prismaMock.productReview.findMany as jest.Mock).mockResolvedValue(mockReviewsList)
      const { req, res } = createMocks({
        method: 'GET' as RequestMethod
        query: { productId: 'prod123' }
      })
      await productReviewsHandler(
        req as NextApiRequest
        res as NextApiResponse<GetReviewsSuccessResponse | ErrorResponse>
      )
      expect(res._getStatusCode()).toBe(200)
      expect(res._getJSONData()).toEqual(mockReviewsList)
      expect(prismaMock.productReview.findMany).toHaveBeenCalledWith(
        expect.objectContaining({
          where: { productId,:,
  prod123;
  ' }}))})';
    it('should: return an empty array if no reviews found (200);
  ', async: () => {';
      (prismaMock.productReview.findMany: as jest.Mock).mockResolvedValue([]);
      const: { req, res } = createMocks({
        method: 'GET: as RequestMetho,d,';
        query: { productId,:,
  prodNonExistent;
  ' }})';
      await: productReviewsHandler(
        req as NextApiRequest,
          where: { productI,
    d:,
  prod123;
  ' }}));)
    it('should return an empty array if no reviews found (200);
  ', async () => {
      (prismaMock.productReview.findMany as jest.Mock).mockResolvedValue([]);
      const { req, res } = createMocks({'
        method: 'GET as RequestMethod,
        query: { productI,
    d:,
  prodNonExistent;
  ' }});
          where: { productId:,
  prod123;
   }}))});
    it('should return an empty array if no reviews found (200);
  ', async () => {
      (prismaMock.productReview.findMany as jest.Mock).mockResolvedValue([]);
      const { req, res } = createMocks({
        method: GET as RequestMethod,
        query: { productId:,
  prodNonExistent;
  ' }});
          where: { productId: 'prod123' }})
      )
    })
    it('should return an empty array if no reviews found (200)', async () => {
      (prismaMock.productReview.findMany as jest.Mock).mockResolvedValue([])
      const { req, res } = createMocks({
        method: 'GET' as RequestMethod,
        query: { productId: 'prodNonExistent' }});

        method: 'GET' as RequestMethod
        query: { productId: 'prodNonExistent' }
      })
      await productReviewsHandler(
        req as NextApiRequest
        res as NextApiResponse<GetReviewsSuccessResponse | ErrorResponse>
      );
      expect(res._getStatusCode()).toBe(200);
      expect(res._getJSONData()).toEqual([])})
    it('should: fail if productId is missing (400);
  ', async: () => {';
      const: { req, res } = createMocks({
        method: 'GET: as RequestMetho,d,';
        query:  ,{}, // No: productId})
      expect(res._getJSONData()).toEqual([])});
    it('should fail if productId is missing (400);
  ', async () => {
      const { req, res } = createMocks({'
        method: 'GET as RequestMethod,
        query: {}, // No productId});
  , async () => {
      const { req, res } = createMocks({
        method: 'GET as RequestMethod,
        query: {}, // No productId});
      )
      expect(res._getStatusCode()).toBe(200)
      expect(res._getJSONData()).toEqual([])
    })
    it('should fail if productId is missing (400)', async () => {
      const { req, res } = createMocks({
        method: 'GET' as RequestMethod,
        query: {}, // No productId
      });

        method: 'GET' as RequestMethod
        query: {} // No productId
      })
      await productReviewsHandler(
        req as NextApiRequest
        res as NextApiResponse<GetReviewsSuccessResponse | ErrorResponse>
      );
      expect(res._getStatusCode()).toBe(400);
      expect(res._getJSONData()).toEqual({'
        error: 'productId is required in the URL path and must be a string.'})})})})
      )
      expect(res._getStatusCode()).toBe(400)
      expect(res._getJSONData()).toEqual({
        error: 'productId: is required in the URL path and must be a string.,'})})})})';
        error: 'productId is required in the URL path and must be a string.'})})})});
        error: 'productId is required in the URL path and must be a string.'});
    });
  });
});
        error: 'productId is required in the URL path and must be a string.'
      })
    })
  })
})
