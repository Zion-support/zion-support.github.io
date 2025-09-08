

import {
  PrismaClient,
  ProductReview,
  User as PrismaUser,

import { describe, it, expect, beforeEach, vi } from 'vitest';

// Mock Prisma Client;

    $disconnect: jest.fn()}

  return {
    PrismaClient: jest.fn(() => mockPrismaClient)
    // Mock Prisma known request error for testing specific error codes
    Prisma: {

        constructor(
          message: string
          code: string
          clientVersion: string
          meta?: Record<string, unknown>

        ) {

// Mock Supabase Client
jest.mock('@/integrations/supabase/client', () => ({

  supabase: {

// Define expected response types

interface ErrorResponse {

  let prismaMock: PrismaClient // Use PrismaClient type for the mock;
  beforeEach(() => {
    prismaMock = new PrismaClient();
    (prismaMock.productReview.create as jest.Mock).mockReset();
    (prismaMock.productReview.findMany as jest.Mock).mockReset();
    (prismaMock.user.findUnique as jest.Mock).mockReset();
    (prismaMock.$disconnect as jest.Mock).mockReset() // This is not typically called in handlers;

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

      (supabase.auth.getSession as jest.Mock).mockResolvedValue({

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

      const mockSupabaseSession: Session = {

  ',
        expires_at: Date.now() + 3600000}
;

      (supabase.auth.getSession as jest.Mock).mockResolvedValue({

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

      const { req, res } = createMocks({
        method: 'POST' as RequestMethod
        body: {



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
        method: 'POST' as RequestMethod
        body: {



      await reviewsHandler(
        req as NextApiRequest

        res as NextApiResponse<PostReviewSuccessResponse | ErrorResponse>

        error: null});
      const { req, res } = createMocks({
        method:,
  POST;

      const { req, res } = createMocks({
        method: 'POST' as RequestMethod

        body: {



      await reviewsHandler(
        req as NextApiRequest

        res as NextApiResponse<PostReviewSuccessResponse | ErrorResponse>

      const mockSupabaseSessionNoEmail: Session = {
        user: { id: 'supaUserId', email: undefined } as SupabaseUser,
        access_token: 'token',
        refresh_token: 'ref',
        expires_in: 3600,
        token_type: 'bearer',
        expires_at: Date.now() + 3600000 };

      (supabase.auth.getSession as jest.Mock).mockResolvedValue({
        data: { session: mockSupabaseSessionNoEmail },
        error: null });

      (supabase.auth.getSession as jest.Mock).mockResolvedValue({


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


      const { req, res } = createMocks({

          rating: 5,



      await reviewsHandler(
        req as NextApiRequest

        res as NextApiResponse<PostReviewSuccessResponse | ErrorResponse>

    it('should successfully fetch reviews for a product (200);
  , async () => {
      const mockReviewsList: ProductReview[] = [
        {'
          i,
    d: 'rev1,
          productId: 'prod123;
  ,

        req as NextApiRequest,
        res as NextApiResponse<GetReviewsSuccessResponse | ErrorResponse>

      );

      const { req, res } = createMocks({
        method: 'GET' as RequestMethod,
        query: { productId: 'prod123' } });


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




