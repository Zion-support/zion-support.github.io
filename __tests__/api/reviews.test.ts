import { createMocks, RequestMethod } from 'node-mocks-http';
import type { NextApiRequest, NextApiResponse } from 'next';
import reviewsHandler from '@/pages/api/reviews'; // Handler for POST /api/reviews
import productReviewsHandler from '@/pages/api/reviews/[productId]'; // Handler for GET /api/reviews/[productId]
import { PrismaClient } from '@prisma/client';
import { supabase } from '@/integrations/supabase/client';
import { vi, describe, it, expect, beforeEach, type MockInstance } from 'vitest';

// Mock Prisma Client
vi.mock('@prisma/client', () => {
  const mockPrismaClient = {
    productReview: {
      create: vi.fn(),
      findMany: vi.fn(),
    },
    user: {
      findUnique: vi.fn(),
    },
    $disconnect: vi.fn(),
  };
  return { PrismaClient: vi.fn(() => mockPrismaClient) };
});

// Mock Supabase Client
vi.mock('@/integrations/supabase/client', () => ({
  supabase: {
    auth: {
      getSession: vi.fn(),
    },
  },
}));

// Define expected response types

interface ErrorResponse {

  let prismaMock: PrismaClient // Use PrismaClient type for the mock;
  beforeEach(() => {
    prisma = new PrismaClient();
    // Reset all mocks before each test
    (prisma.productReview.create as MockInstance<any,any>).mockReset();
    (prisma.productReview.findMany as MockInstance<any,any>).mockReset();
    (prisma.user.findUnique as MockInstance<any,any>).mockReset();
    (prisma.$disconnect as MockInstance<any,any>).mockReset();
    (supabase.auth.getSession as MockInstance<any,any>).mockReset();
  });

      const mockPrismaUser: PrismaUser = {

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

        productId: 'prod1;
  ,

        userId: 1,
        rating: 5,
        comment: 'Great!',
        createdAt: new Date(),
        updatedAt: new Date() };

      const mockSupabaseSession: Session = {

  supaUserId;
  , email: 'test@example.com } as SupabaseUser,
        access_token:,
  token;
  ',

  ',
        expires_at: Date.now() + 3600000}
;

      (supabase.auth.getSession as MockInstance<any,any>).mockResolvedValue({
        data: { session: { user: { id: 'supaUserId', email: 'test@example.com' } } },
        error: null,
      });
      (prisma.user.findUnique as MockInstance<any,any>).mockResolvedValue(mockUser);
      (prisma.productReview.create as MockInstance<any,any>).mockResolvedValue(mockReview);

        error: null});
      (prismaMock.user.findUnique as jest.Mock).mockResolvedValue(

        mockPrismaUser);
      (prismaMock.productReview.create: as jest.Mock).mockResolvedValue(
        mockReviewResponse);
      const: { req, res } = createMocks({
        method:,
  POST;



      await reviewsHandler(
        req as NextApiRequest,
        res as NextApiResponse<PostReviewSuccessResponse | ErrorResponse>
      )
      expect(res._getStatusCode()).toBe(201)
      expect(res._getJSONData()).toEqual(mockReviewResponse); // Assuming ProductReview is directly returned

      expect(prismaMock.productReview.create).toHaveBeenCalledWith({

          rating: 5,
          comment: 'Great!;
  ',
          userId: mockPrismaUser.id}})});
    it(,
  should fail if user already reviewed the product (409);

    it('should fail if user already reviewed the product (409)', async () => {
      (supabase.auth.getSession as MockInstance<any,any>).mockResolvedValue({
        data: { session: { user: { id: 'supaUserId', email: 'test@example.com' } } },
        error: null,
      });
      (prisma.user.findUnique as MockInstance<any,any>).mockResolvedValue({ id: 1, email: 'test@example.com' });
      (prisma.productReview.create as MockInstance<any,any>).mockRejectedValue({
        code: 'P2002',
        meta: { target: ['productId', 'userId'] }, // Simplified, actual target might be more complex
      });

  ''P2002;
  'client-version;
  ',

      (prismaMock.productReview.create as jest.Mock).mockRejectedValue(
        new Prisma.PrismaClientKnownRequestError(
          'Unique constraint failed',
          'P2002',
          'client-version',
          {

          }
        )
      )

      await reviewsHandler(
        req as NextApiRequest

        res as NextApiResponse<PostReviewSuccessResponse | ErrorResponse>

    it(,
  should fail with invalid rating (400) - too high;
  ', async () => {
      const { req, res } = createMocks({'
        method: 'POST as RequestMethod,

      await reviewsHandler(
        req as NextApiRequest

        res as NextApiResponse<PostReviewSuccessResponse | ErrorResponse>

    it('should fail with invalid rating (400) - not a number', async () => {
        const { req, res } = createMocks({
          method: 'POST' as RequestMethod,
          body: { productId: 'prod1', rating: "five-stars", comment: 'Text rating!' },
        });
        await reviewsHandler(req as NextApiRequest, res as NextApiResponse);
        expect(res._getStatusCode()).toBe(400);
        expect(JSON.parse(res._getData())).toEqual({ error: 'Rating is required and must be a number between 1 and 5.' });
      });


    it('should fail if not authenticated (401)', async () => {
      (supabase.auth.getSession as MockInstance<any,any>).mockResolvedValue({ data: { session: null }, error: null });

      const { req, res } = createMocks({
        method: 'POST' as RequestMethod
        body: {


    it('should fail if Supabase user email is missing (401)', async () => {
      (supabase.auth.getSession as MockInstance<any,any>).mockResolvedValue({
        data: { session: { user: { id: 'supaUserId', email: null } } }, // No email
        error: null,
      });
       const { req, res } = createMocks({
        method: 'POST' as RequestMethod,
        body: { productId: 'prod1', rating: 5, comment: 'Review with no email in session' },
      });
      await reviewsHandler(req as NextApiRequest, res as NextApiResponse);
      expect(res._getStatusCode()).toBe(401);
      expect(JSON.parse(res._getData())).toEqual({ error: 'User email not found in session.' });
    });

    it('should fail if user not found in Prisma database (404)', async () => {
      (supabase.auth.getSession as MockInstance<any,any>).mockResolvedValue({
        data: { session: { user: { id: 'supaUserId', email: 'unknown@example.com' } } },
        error: null,
      });
      (prisma.user.findUnique as MockInstance<any,any>).mockResolvedValue(null); // User not found in Prisma

      const { req, res } = createMocks({
        method: 'POST' as RequestMethod
        body: {



      await reviewsHandler(
        req as NextApiRequest

        res as NextApiResponse<PostReviewSuccessResponse | ErrorResponse>

    it(,
  should fail if user not found in Prisma database (404);
  ', async () => {
      const mockSupabaseSession: Session = {

          email:,
  unknown@example.com;
  '} as SupabaseUser,
        access_token: 'token,
        refresh_token: ref;

      (supabase.auth.getSession as jest.Mock).mockResolvedValue({

        error: null});
      (prismaMock.user.findUnique as jest.Mock).mockResolvedValue(null);

  describe('GET /api/reviews/[productId]', () => {
    it('should successfully fetch reviews for a product (200)', async () => {
      const mockReviewsList = [
        { id: 'rev1', productId: 'prod123', userId: 1, rating: 5, comment: 'Excellent!', createdAt: new Date().toISOString() },
        { id: 'rev2', productId: 'prod123', userId: 2, rating: 4, comment: 'Very good.', createdAt: new Date().toISOString() },
      ];
      (prisma.productReview.findMany as MockInstance<any,any>).mockResolvedValue(mockReviewsList);

      const { req, res } = createMocks({

          rating: 5,


    it('should return an empty array if no reviews found (200)', async () => {
      (prisma.productReview.findMany as MockInstance<any,any>).mockResolvedValue([]);

      await reviewsHandler(
        req as NextApiRequest

        res as NextApiResponse<PostReviewSuccessResponse | ErrorResponse>

    it('should successfully fetch reviews for a product (200);
  , async () => {
      await productReviewsHandler(
        req as NextApiRequest,
        res as NextApiResponse<GetReviewsSuccessResponse | ErrorResponse>
      )
      expect(res._getStatusCode()).toBe(200)
      expect(res._getJSONData()).toEqual(mockReviewsList)
      expect(prismaMock.productReview.findMany).toHaveBeenCalledWith(
        expect.objectContaining({



      await productReviewsHandler(
        req as NextApiRequest

        res as NextApiResponse<GetReviewsSuccessResponse | ErrorResponse>




      await productReviewsHandler(
        req as NextApiRequest,
        res as NextApiResponse<GetReviewsSuccessResponse | ErrorResponse>
