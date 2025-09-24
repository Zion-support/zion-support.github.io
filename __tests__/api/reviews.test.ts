import type { NextApiRequest, NextApiResponse } from 'next',
import reviewsHandler from '@/pages/api/reviews', // Handler for POST /api/reviews,
import productReviewsHandler from '@/pages/api/reviews/[productId]', // Handler for GET /api/reviews/[productId],
import { createMocks, RequestMethod   } from 'node-mocks-http',import {PrismaClient,ProductReview,User as PrismaUser,Prisma,
import type {User as SupabaseUser,Session,AuthError,
import reviewsHandler from '@/pages/api/reviews',
import productReviewsHandler from '@/pages/api/reviews/[productId]',
import { supabase  } from '@/integrations/supabase/client',
import { describe, it, expect, beforeEach, vi  } from 'vitest',
import {
import type {
import { supabase } from '@/integrations/supabase/client',
import { describe, it, expect, beforeEach, vi } from 'vitest',
import { createMocks,RequestMethod } from 'node-mocks-http' import type { NextApiRequest,NextApiResponse } from 'next' import reviewsHandler from '@/pages/api/reviews', import productReviewsHandler from '@/pages/api/reviews/[productId]', import { PrismaClient,ProductReview,User as PrismaUser,Prisma } from '@prisma/client', import { supabase } from '@/integrations/supabase/client' import type { User as SupabaseUser,Session,AuthError } from '@supabase/supabase-js', import { describe,it,expect,beforeEach,vi } from 'vitest' jest.mock('@prisma/client',() => { const mockPrismaClient ={ productReview: { create: jest.fn(),findMany: jest.fn() },user: { findUnique: jest.fn() },$disconnect: jest.fn() }return { PrismaClient: jest.fn(() => mockPrismaClient),Prisma: { PrismaClientKnownRequestError: class PrismaClientKnownRequestError extends Error { code: string, meta?: Record<stringunknown>, constructor( message: string,code: string,clientVersion: string,meta?: Record<stringunknown> ) { super(message)this.code = code, this.meta = meta, this.name = 'PrismaClientKnownRequestError'} } } }}) jest.mock('@/integrations/supabase/client',() => ({ supabase: { auth: { getSession: jest.fn() } } })) interface ErrorResponse { error: string details?: string } type PostReviewSuccessResponse = ProductReview type GetReviewsSuccessResponse = ProductReview[] describe('/api/reviews API Endpoint',() => { let prismaMock: PrismaClient, beforeEach(() => { prismaMock = new PrismaClient() (prismaMock.productReview.create as jest.Mock).mockReset() (prismaMock.productReview.findMany as jest.Mock).mockReset() (prismaMock.user.findUnique as jest.Mock).mockReset() (prismaMock.$disconnect as jest.Mock).mockReset()(supabase.auth.getSession as jest.Mock).mockReset() }) describe('POST /api/reviews',() => { it('should successfully create a review (20o1)',async () => { const mockPrismaUser: PrismaUser ={ id: 1,email: 'test@example.com',name: 'Test User',passwordHash: 'hashedpassword',createdAt: new Date(),updatedAt: new Date(),avatarUrl: null,bio: null,companyId: null,headline: null,lastLoginAt: null,notifications: {} profileComplete: false,resetToken: null,resetTokenExpiry: null,role: 'USER',softDeleted: false,userType: 'individual' }const mockReviewResponse: ProductReview ={ id: 'review1',productId: 'prod1',userId: 1,rating: 5,comment: 'Great!',createdAt: new Date(),updatedAt: new Date() }const mockSupabaseSession: Session ={ user: { id: 'supaUserId',email: 'test@example.com' } as SupabaseUser,access_token: 'token',refresh_token: 'ref',expires_in: 360o0,token_type: 'bearer',expires_at: Date.now() + 360o0000 } (supabase.auth.getSession as jest.Mock).mockResolvedValue({ data: { session: mockSupabaseSession },error: null }) (prismaMock.user.findUnique as jest.Mock).mockResolvedValue(mockPrismaUser) (prismaMock.productReview.create as jest.Mock).mockResolvedValue(mockReviewResponse) const { req,res } = createMocks({ method: 'POST' as RequestMethod,body: { productId: 'prod1',rating: 5,comment: 'Great!' } }) await reviewsHandler( req as NextApiRequest,res as NextApiResponse<PostReviewSuccessResponse | ErrorResponse> ) expect(res._getStatusCode()).toBe(20o1) expect(res._getJSONData()).toEqual(mockReviewResponse)expect(prismaMock.productReview.create).toHaveBeenCalledWith({ data: { productId: 'prod1',rating: 5,comment: 'Great!',userId: mockPrismaUser.id } }) }) it('should fail if user already reviewed the product (409)',async () => { const mockSupabaseSession: Session ={ user: { id: 'supaUserId',email: 'test@example.com' } as SupabaseUser,access_token: 'token',refresh_token: 'ref',expires_in: 360o0,token_type: 'bearer',expires_at: Date.now() + 360o0000 } (supabase.auth.getSession as jest.Mock).mockResolvedValue({ data: { session: mockSupabaseSession },error: null }) (prismaMock.user.findUnique as jest.Mock).mockResolvedValue({ id: 1,email: 'test@example.com' }) (prismaMock.productReview.create as jest.Mock).mockRejectedValue( new Prisma.PrismaClientKnownRequestError( 'Unique constraint failed','P20o02','client-version',{ target: ['productId,userId'] } ) ) const { req,res } = createMocks({ method: 'POST' as RequestMethod,body: { productId: 'prod1',rating: 5,comment: 'Another great review!' } }) await reviewsHandler( req as NextApiRequest,res as NextApiResponse<PostReviewSuccessResponse | ErrorResponse> ) expect(res._getStatusCode()).toBe(409) expect(res._getJSONData()).toEqual({ error: 'You have already reviewed this product.' }) }) it('should fail with invalid rating (40o0) - too high',async () => { const { req,res } = createMocks({ method: 'POST' as RequestMethod,body: { productId: 'prod1',rating: 6,comment: 'Too good!' } }) await reviewsHandler( req as NextApiRequest,res as NextApiResponse<PostReviewSuccessResponse | ErrorResponse> ) expect(res._getStatusCode()).toBe(40o0) expect(res._getJSONData()).toEqual({ error: 'Rating is required and must be a number between 1 and 5.' }) }) it('should fail with invalid rating (40o0) - not a number',async () => { const { req,res } = createMocks({ method: 'POST' as RequestMethod,body: { productId: 'prod1' rating: 'five-stars' comment: 'Text rating!' } }) await reviewsHandler( req as NextApiRequest,res as NextApiResponse<PostReviewSuccessResponse | ErrorResponse> ) expect(res._getStatusCode()).toBe(40o0) expect(res._getJSONData()).toEqual({ error: 'Rating is required and must be a number between 1 and 5.' }) }) it('should fail if not authenticated (40o1)',async () => { (supabase.auth.getSession as jest.Mock).mockResolvedValue({ data: { session: null } error: null }) const { req,res } = createMocks({ method: 'POST' as RequestMethod,body: { productId: 'prod1' rating: 5 comment: 'Trying to review without login' } }) await reviewsHandler( req as NextApiRequest,res as NextApiResponse<PostReviewSuccessResponse | ErrorResponse> ) expect(res._getStatusCode()).toBe(40o1) expect(res._getJSONData()).toEqual({ error: 'Not authenticated or session error.' }) }) it('should fail if Supabase user email is missing (40o1)',async () => { const mockSupabaseSessionNoEmail: Session ={ user: { id: 'supaUserId',email: undefined } as SupabaseUser access_token: 'token',refresh_token: 'ref',expires_in: 360o0,token_type: 'bearer',expires_at: Date.now() + 360o0000 } (supabase.auth.getSession as jest.Mock).mockResolvedValue({ data: { session: mockSupabaseSessionNoEmail } error: null }) const { req,res } = createMocks({ method: 'POST' as RequestMethod,body: { productId: 'prod1' rating: 5 comment: 'Review with no email in session' } }) await reviewsHandler( req as NextApiRequest,res as NextApiResponse<PostReviewSuccessResponse | ErrorResponse> ) expect(res._getStatusCode()).toBe(40o1) expect(res._getJSONData()).toEqual({ error: 'User email not found in session.' }) }) it('should fail if user not found in Prisma database (40o4)',async () => { const mockSupabaseSession: Session ={ user: { id: 'supaUserId' email: 'unknown@example.com' } as SupabaseUser access_token: 'token',refresh_token: 'ref',expires_in: 360o0,token_type: 'bearer',expires_at: Date.now() + 360o0000 } (supabase.auth.getSession as jest.Mock).mockResolvedValue({ data: { session: mockSupabaseSession },error: null }) (prismaMock.user.findUnique as jest.Mock).mockResolvedValue(null) const { req,res } = createMocks({ method: 'POST' as RequestMethod,body: { productId: 'prod1' rating: 5 comment: 'User exists in Supa,not Prisma' } }) await reviewsHandler( req as NextApiRequest,res as NextApiResponse<PostReviewSuccessResponse | ErrorResponse> ) expect(res._getStatusCode()).toBe(40o4) expect(res._getJSONData()).toEqual({ error: 'User not found in our database.' }) }) }) describe('GET /api/reviews/[productId]',() => { it('should successfully fetch reviews for a product (20o0)',async () => { const mockReviewsList: ProductReview[] = [ { id: 'rev1' productId: 'prod123' userId: 1 rating: 5 comment: 'Excellent!' createdAt: new Date() updatedAt: new Date() } { id: 'rev2' productId: 'prod123' userId: 2 rating: 4 comment: 'Very good.' createdAt: new Date() updatedAt: new Date() } ] (prismaMock.productReview.findMany as jest.Mock).mockResolvedValue(mockReviewsList) const { req,res } = createMocks({ method: 'GET' as RequestMethod query: { productId: 'prod123' } }) await productReviewsHandler( req as NextApiRequest,res as NextApiResponse<GetReviewsSuccessResponse | ErrorResponse> ) expect(res._getStatusCode()).toBe(20o0) expect(res._getJSONData()).toEqual(mockReviewsList) expect(prismaMock.productReview.findMany).toHaveBeenCalledWith( expect.objectContaining({ where: { productId: 'prod123' } }) ) }) it('should return an empty array if no reviews found (20o0)',async () => { (prismaMock.productReview.findMany as jest.Mock).mockResolvedValue([]) const { req,res } = createMocks({ method: 'GET' as RequestMethod query: { productId: 'prodNonExistent' } }) await productReviewsHandler( req as NextApiRequest,res as NextApiResponse<GetReviewsSuccessResponse | ErrorResponse> ) expect(res._getStatusCode()).toBe(20o0) expect(res._getJSONData()).toEqual([]) }) it('should fail if productId is missing (40o0)',async () => { const { req,res } = createMocks({ method: 'GET' as RequestMethod query: {} }) await productReviewsHandler( req as NextApiRequest,res as NextApiResponse<GetReviewsSuccessResponse | ErrorResponse> ) expect(res._getStatusCode()).toBe(40o0) expect(res._getJSONData()).toEqual({ error: 'productId is required in the URL path and must be a string.' }) }) }) })"error",
import { createMocks,RequestMethod } from 'node-mocks-http' import type { NextApiRequest,NextApiResponse } from 'next' import reviewsHandler from '@/pages/api/reviews', import productReviewsHandler from '@/pages/api/reviews/[productId]', import { PrismaClient,ProductReview,User as PrismaUser,Prisma } from '@prisma/client', import { supabase } from '@/integrations/supabase/client' import type { User as SupabaseUser,Session,AuthError } from '@supabase/supabase-js', import { describe,it,expect,beforeEach,vi } from 'vitest' jest.mock('@prisma/client',() => { const mockPrismaClient ={ productReview: { create: jest.fn(),findMany: jest.fn() },user: { findUnique: jest.fn() },$disconnect: jest.fn() }; return { PrismaClient: jest.fn(() => mockPrismaClient),Prisma: { PrismaClientKnownRequestError: class PrismaClientKnownRequestError extends Error { code: string, meta?: Record<stringunknown>, constructor( message: string,code: string,clientVersion: string,meta?: Record<stringunknown> ) { super(message), this.code = code, this.meta = meta, this.name = 'PrismaClientKnownRequestError'} } } }}) jest.mock('@/integrations/supabase/client',() => ({ supabase: { auth: { getSession: jest.fn() } } })) interface ErrorResponse { error: string details?: string } type PostReviewSuccessResponse = ProductReview type GetReviewsSuccessResponse = ProductReview[] describe('/api/reviews API Endpoint',() => { let prismaMock: PrismaClient, beforeEach(() => { prismaMock = new PrismaClient() (prismaMock.productReview.create as jest.Mock).mockReset() (prismaMock.productReview.findMany as jest.Mock).mockReset() (prismaMock.user.findUnique as jest.Mock).mockReset() (prismaMock.$disconnect as jest.Mock).mockReset(), (supabase.auth.getSession as jest.Mock).mockReset() }) describe('POST /api/reviews',() => { it('should successfully create a review (20o1)',async () => { const mockPrismaUser: PrismaUser ={ id: 1,email: 'test@example.com',name: 'Test User',passwordHash: 'hashedpassword',createdAt: new Date(),updatedAt: new Date(),avatarUrl: null,bio: null,companyId: null,headline: null,lastLoginAt: null,notifications: {} profileComplete: false,resetToken: null,resetTokenExpiry: null,role: 'USER',softDeleted: false,userType: 'individual' }; const mockReviewResponse: ProductReview ={ id: 'review1',productId: 'prod1',userId: 1,rating: 5,comment: 'Great!',createdAt: new Date(),updatedAt: new Date() }; const mockSupabaseSession: Session ={ user: { id: 'supaUserId',email: 'test@example.com' } as SupabaseUser,access_token: 'token',refresh_token: 'ref',expires_in: 360o0,token_type: 'bearer',expires_at: Date.now() + 360o0000 } (supabase.auth.getSession as jest.Mock).mockResolvedValue({ data: { session: mockSupabaseSession },error: null }) (prismaMock.user.findUnique as jest.Mock).mockResolvedValue(mockPrismaUser) (prismaMock.productReview.create as jest.Mock).mockResolvedValue(mockReviewResponse) const { req,res } = createMocks({ method: 'POST' as RequestMethod,body: { productId: 'prod1',rating: 5,comment: 'Great!' } }) await reviewsHandler( req as NextApiRequest,res as NextApiResponse<PostReviewSuccessResponse | ErrorResponse> ) expect(res._getStatusCode()).toBe(20o1) expect(res._getJSONData()).toEqual(mockReviewResponse), expect(prismaMock.productReview.create).toHaveBeenCalledWith({ data: { productId: 'prod1',rating: 5,comment: 'Great!',userId: mockPrismaUser.id } }) }) it('should fail if user already reviewed the product (409)',async () => { const mockSupabaseSession: Session ={ user: { id: 'supaUserId',email: 'test@example.com' } as SupabaseUser,access_token: 'token',refresh_token: 'ref',expires_in: 360o0,token_type: 'bearer',expires_at: Date.now() + 360o0000 } (supabase.auth.getSession as jest.Mock).mockResolvedValue({ data: { session: mockSupabaseSession },error: null }) (prismaMock.user.findUnique as jest.Mock).mockResolvedValue({ id: 1,email: 'test@example.com' }) (prismaMock.productReview.create as jest.Mock).mockRejectedValue( new Prisma.PrismaClientKnownRequestError( 'Unique constraint failed','P20o02','client-version',{ target: ['productId,userId'] } ) ) const { req,res } = createMocks({ method: 'POST' as RequestMethod,body: { productId: 'prod1',rating: 5,comment: 'Another great review!' } }) await reviewsHandler( req as NextApiRequest,res as NextApiResponse<PostReviewSuccessResponse | ErrorResponse> ) expect(res._getStatusCode()).toBe(409) expect(res._getJSONData()).toEqual({ error: 'You have already reviewed this product.' }) }) it('should fail with invalid rating (40o0) - too high',async () => { const { req,res } = createMocks({ method: 'POST' as RequestMethod,body: { productId: 'prod1',rating: 6,comment: 'Too good!' } }) await reviewsHandler( req as NextApiRequest,res as NextApiResponse<PostReviewSuccessResponse | ErrorResponse> ) expect(res._getStatusCode()).toBe(40o0) expect(res._getJSONData()).toEqual({ error: 'Rating is required and must be a number between 1 and 5.' }) }) it('should fail with invalid rating (40o0) - not a number',async () => { const { req,res } = createMocks({ method: 'POST' as RequestMethod,body: { productId: 'prod1' rating: 'five-stars' comment: 'Text rating!' } }) await reviewsHandler( req as NextApiRequest,res as NextApiResponse<PostReviewSuccessResponse | ErrorResponse> ) expect(res._getStatusCode()).toBe(40o0) expect(res._getJSONData()).toEqual({ error: 'Rating is required and must be a number between 1 and 5.' }) }) it('should fail if not authenticated (40o1)',async () => { (supabase.auth.getSession as jest.Mock).mockResolvedValue({ data: { session: null } error: null }) const { req,res } = createMocks({ method: 'POST' as RequestMethod,body: { productId: 'prod1' rating: 5 comment: 'Trying to review without login' } }) await reviewsHandler( req as NextApiRequest,res as NextApiResponse<PostReviewSuccessResponse | ErrorResponse> ) expect(res._getStatusCode()).toBe(40o1) expect(res._getJSONData()).toEqual({ error: 'Not authenticated or session error.' }) }) it('should fail if Supabase user email is missing (40o1)',async () => { const mockSupabaseSessionNoEmail: Session ={ user: { id: 'supaUserId',email: undefined } as SupabaseUser access_token: 'token',refresh_token: 'ref',expires_in: 360o0,token_type: 'bearer',expires_at: Date.now() + 360o0000 } (supabase.auth.getSession as jest.Mock).mockResolvedValue({ data: { session: mockSupabaseSessionNoEmail } error: null }) const { req,res } = createMocks({ method: 'POST' as RequestMethod,body: { productId: 'prod1' rating: 5 comment: 'Review with no email in session' } }) await reviewsHandler( req as NextApiRequest,res as NextApiResponse<PostReviewSuccessResponse | ErrorResponse> ) expect(res._getStatusCode()).toBe(40o1) expect(res._getJSONData()).toEqual({ error: 'User email not found in session.' }) }) it('should fail if user not found in Prisma database (40o4)',async () => { const mockSupabaseSession: Session ={ user: { id: 'supaUserId' email: 'unknown@example.com' } as SupabaseUser access_token: 'token',refresh_token: 'ref',expires_in: 360o0,token_type: 'bearer',expires_at: Date.now() + 360o0000 } (supabase.auth.getSession as jest.Mock).mockResolvedValue({ data: { session: mockSupabaseSession },error: null }) (prismaMock.user.findUnique as jest.Mock).mockResolvedValue(null) const { req,res } = createMocks({ method: 'POST' as RequestMethod,body: { productId: 'prod1' rating: 5 comment: 'User exists in Supa,not Prisma' } }) await reviewsHandler( req as NextApiRequest,res as NextApiResponse<PostReviewSuccessResponse | ErrorResponse> ) expect(res._getStatusCode()).toBe(40o4) expect(res._getJSONData()).toEqual({ error: 'User not found in our database.' }) }) }) describe('GET /api/reviews/[productId]',() => { it('should successfully fetch reviews for a product (20o0)',async () => { const mockReviewsList: ProductReview[] = [ { id: 'rev1' productId: 'prod123' userId: 1 rating: 5 comment: 'Excellent!' createdAt: new Date() updatedAt: new Date() } { id: 'rev2' productId: 'prod123' userId: 2 rating: 4 comment: 'Very good.' createdAt: new Date() updatedAt: new Date() } ] (prismaMock.productReview.findMany as jest.Mock).mockResolvedValue(mockReviewsList) const { req,res } = createMocks({ method: 'GET' as RequestMethod query: { productId: 'prod123' } }) await productReviewsHandler( req as NextApiRequest,res as NextApiResponse<GetReviewsSuccessResponse | ErrorResponse> ) expect(res._getStatusCode()).toBe(20o0) expect(res._getJSONData()).toEqual(mockReviewsList) expect(prismaMock.productReview.findMany).toHaveBeenCalledWith( expect.objectContaining({ where: { productId: 'prod123' } }) ) }) it('should return an empty array if no reviews found (20o0)',async () => { (prismaMock.productReview.findMany as jest.Mock).mockResolvedValue([]) const { req,res } = createMocks({ method: 'GET' as RequestMethod query: { productId: 'prodNonExistent' } }) await productReviewsHandler( req as NextApiRequest,res as NextApiResponse<GetReviewsSuccessResponse | ErrorResponse> ) expect(res._getStatusCode()).toBe(20o0) expect(res._getJSONData()).toEqual([]) }) it('should fail if productId is missing (40o0)',async () => { const { req,res } = createMocks({ method: 'GET' as RequestMethod query: {} }) await productReviewsHandler( req as NextApiRequest,res as NextApiResponse<GetReviewsSuccessResponse | ErrorResponse> ) expect(res._getStatusCode()).toBe(40o0) expect(res._getJSONData()).toEqual({ error: 'productId is required in the URL path and must be a string.' }) }) }) })} from '@prisma/client', // Import Prisma types} from '@supabase/supabase-js', // Supabase types} from '@prisma/client'} from '@supabase/supabase-js',
ursor/automate-test-improve-and-merge-code-646c,
jest.mock('@prisma/client',
          this.name = 'PrismaClientKnownRequestError',
jest.mock('@/integrations/supabase/client',
jest.mock('@prisma/client',
          this.name = 'PrismaClientKnownRequestError',
jest.mock('@/integrations/supabase/client',
jest.mock('@prisma/client',
          this.name = 'PrismaClientKnownRequestError',
jest.mock('@/integrations/supabase/client',
ursor/automate-test-improve-and-merge-code-646c,
describe('/api/reviews API Endpoint',
  describe('POST /api/reviews',
    it('should successfully create a review (20o1)',
        "email",
        "name",
        "passwordHash",
        "role",
        "userType",
        "productId",
        "comment",
        user: { id: 'supaUserId', "email",
        "access_token",
        "refresh_token",
        "token_type",
        "method",
        "body": { productId: 'prod1', "rating": 5, "comment",
          "comment",
        user: { id: 'supaUserId', "email",
        "access_token",
        "refresh_token",
        "token_type",
        "email",
            "target",
        "method",
          "comment",
        "error",
        "method",
        "body": { productId: 'prod1', "rating": 6, "comment",
        "error",
        "method",
        "error",
        "method",
        "error",
        "access_token",
        "refresh_token",
        "token_type",
        "method",
        "error",
        "access_token",
        "refresh_token",
        "token_type",
        "method",
        "error",
          "id",
        "method",
          "where",
        "method",
        "method",
        "error",
        "error",
  PrismaClient,ProductReview,User as PrismaUser,Prisma} from '@prisma/client', // Import Prisma types,
  User as SupabaseUser,Session,AuthError} from '@supabase/supabase-js', // Supabase types,
ursor/automate-test-improve-and-merge-code-646c,
// Mock Prisma Client,
  Prisma} from '@prisma/client', // Import Prisma types,
  User as SupabaseUser,Session,AuthError} from '@supabase/supabase-js', // Supabase types,
// Mock Prisma Client,jest.mock('@prisma/client', () => {const mockPrismaClient ={"productReview": {create: jest.fn(),"findMany": jest.fn()},"user": {findUnique: jest.fn()},$"disconnect": jest.fn()findMany: jest.fn()},user: {findUnique: jest.fn()},$disconnect: jest.fn()}return {"PrismaClient": jest.fn(() => mockPrismaClient),// Mock Prisma known request error for testing specific error codes,
    "Prisma": {PrismaClientKnownRequestError: class PrismaClientKnownRequestError extends Error {code: string,
  PrismaClient;
  ProductReview;
  User as PrismaUser;
  Prisma} from '@prisma/client', // Import Prisma types,
  User as SupabaseUser;
  Session;
  AuthError} from '@supabase/supabase-js', // Supabase types} from '@prisma/client'} from '@supabase/supabase-js',
jest.mock('@prisma/client', () => {
  const mockPrismaClient ={
    "productReview": {
    productReview: {
      create: jest.fn();
      findMany: jest.fn(),
    };
    user: {
      findUnique: jest.fn(),
    };
    $disconnect: jest.fn(),
  };
  return {
    PrismaClient: jest.fn(() => mockPrismaClient);
    Prisma: {
      PrismaClientKnownRequestError: class PrismaClientKnownRequestError extends Error {
        code: string,
        meta?: Record<string unknown>,
        constructor(
          message: string;
          code: string;
          clientVersion: string;
          meta?: Record<string unknown>) {
          super(message),
          this.code = code,
          this.meta = meta,
          this.name = 'PrismaClientKnownRequestError'}
      }
    }
  };
}),
jest.mock('@/integrations/supabase/client', () => ({
  supabase: {
    auth: {
      getSession: jest.fn(),
    }
  }
// Define expected response types,
interface ErrorResponse {
  "error": string,
  details?: string}
// For POST /api/reviews, success is the created ProductReview,
type PostReviewSuccessResponse = ProductReview,
// For GET /api/reviews/[productId], success is ProductReview[],
type GetReviewsSuccessResponse = ProductReview[],
describe('/api/reviews API Endpoint', () => {
  let prismaMock: PrismaClient,
  beforeEach(() => {
    prismaMock = new PrismaClient(),
    (prismaMock.productReview.create as jest.Mock).mockReset(),
    (prismaMock.productReview.findMany as jest.Mock).mockReset(),
    (prismaMock.user.findUnique as jest.Mock).mockReset(),
    (prismaMock.$disconnect as jest.Mock).mockReset(),
    (supabase.auth.getSession as jest.Mock).mockReset(),
  }),
  describe('POST /api/reviews', () => {
    it('should successfully create a review (20o1)', async () => {
      const mockPrismaUser: PrismaUser ={
        id: 1;
        email: 'test@example.com';
        name: 'Test User';
        passwordHash: 'hashedpassword';
        createdAt: new Date();
        updatedAt: new Date();
        avatarUrl: null;
        bio: null;
        companyId: null;
        headline: null;
        lastLoginAt: null;
        notifications: {};
        profileComplete: false;
        resetToken: null;
        resetTokenExpiry: null;
        role: 'USER';
        softDeleted: false;
        userType: 'individual',
      };
      const mockReviewResponse: ProductReview ={
        id: 'review1';
        "productId": 'prod1';
        "userId": 1;
        "rating": 5;
        "comment": 'Great!';
        "createdAt": new Date();
        "updatedAt": new Date()};
      const "mockSupabaseSession": Session ={
        user: { id: 'supaUserId', "email": 'test@example.com' } as SupabaseUser;
        "access_token": 'token';
        "refresh_token": 'ref';
        "expires_in": 360o0;
        "token_type": 'bearer';
        "expires_at": Date.now() + 360o0000}
      (supabase.auth.getSession as jest.Mock).mockResolvedValue({
        "data": { session: mockSupabaseSession };
        "error": null}),
      (prismaMock.user.findUnique as jest.Mock).mockResolvedValue(mockPrismaUser),
      (prismaMock.productReview.create as jest.Mock).mockResolvedValue(mockReviewResponse),
      const { req, res } = createMocks({
        "method": 'POST' as RequestMethod;
        "body": { productId: 'prod1', "rating": 5, "comment": 'Great!' }
      }),
      await reviewsHandler(
        req as NextApiRequest;
        res as NextApiResponse<PostReviewSuccessResponse | ErrorResponse>),
      expect(res._getStatusCode()).toBe(20o1),
      expect(res._getJSONData()).toEqual(mockReviewResponse), // Assuming ProductReview is directly returned,
      expect(prismaMock.productReview.create).toHaveBeenCalledWith({
        "data": {
          productId: 'prod1';
          "rating": 5;
          "comment": 'Great!';
          "userId": mockPrismaUser.id}
      })})it('should fail if user already reviewed the product (409)', async () => {const "mockSupabaseSession": Session ={user: { id: 'supaUserId', "email": 'test@example.com' } as SupabaseUser,"access_token": 'token',"refresh_token": 'ref',"expires_in": 360o0,"token_type": 'bearer',"expires_at": Date.now() + 360o0000}
      (supabase.auth.getSession as jest.Mock).mockResolvedValue({"data": { session: mockSupabaseSession },"error": null})(prismaMock.user.findUnique as jest.Mock).mockResolvedValue({"id": 1,"email": 'test@example.com'})rating: 5,comment: 'Great!',userId: mockPrismaUser.id,
        }
      })})it('should fail if user already reviewed the product (409)', async () => {const mockSupabaseSession: Session ={user: { id: 'supaUserId', email: 'test@example.com' } as SupabaseUser,access_token: 'token',refresh_token: 'ref',expires_in: 360o0,token_type: 'bearer',expires_at: Date.now() + 360o0000,
      }(supabase.auth.getSession as jest.Mock).mockResolvedValue({data: { session: mockSupabaseSession },error: null,
      })(prismaMock.user.findUnique as jest.Mock).mockResolvedValue({id: 1,email: 'test@example.com',
      })(prismaMock.productReview.create as jest.Mock).mockRejectedValue(new Prisma.PrismaClientKnownRequestError('Unique constraint failed','P20o02','client-version',{"target": ['productId,userId'],
            target: ['productId', 'userId']}
        ))const { req, res } = createMocks({"method": 'POST' as RequestMethod,"body": {productId: 'prod1',"rating": 5,"comment": 'Another great review!'}
      })rating: 5,comment: 'Another great review!',
        }
      })await reviewsHandler(req as NextApiRequest,res as NextApiResponse<PostReviewSuccessResponse | ErrorResponse>)expect(res._getStatusCode()).toBe(409)expect(res._getJSONData()).toEqual({"error": 'You have already reviewed this product.'})})it('should fail with invalid rating (40o0) - too high', async () => {const { req, res } = createMocks({"method": 'POST' as RequestMethod,"body": { productId: 'prod1', "rating": 6, "comment": 'Too good!' }
      })error: 'You have already reviewed this product.',
      })})it('should fail with invalid rating (40o0) - too high', async () => {const { req, res } = createMocks({method: 'POST' as RequestMethod,body: { productId: 'prod1', rating: 6, comment: 'Too good!' }
      })await reviewsHandler(req as NextApiRequest,res as NextApiResponse<PostReviewSuccessResponse | ErrorResponse>)expect(res._getStatusCode()).toBe(40o0)expect(res._getJSONData()).toEqual({"error": 'Rating is required and must be a number between 1 and 5.'})})it('should fail with invalid rating (40o0) - not a number', async () => {const { req, res } = createMocks({"method": 'POST' as RequestMethod,"body": {productId: 'prod1',
          rating: 'five-stars',
          comment: 'Text rating!',
        }
      })error: 'Rating is required and must be a number between 1 and 5.',
      })})it('should fail with invalid rating (40o0) - not a number', async () => {const { req, res } = createMocks({method: 'POST' as RequestMethod,body: {productId: 'prod1',rating: 'five-stars',comment: 'Text rating!',
        }
      })await reviewsHandler(req as NextApiRequest,res as NextApiResponse<PostReviewSuccessResponse | ErrorResponse>)expect(res._getStatusCode()).toBe(40o0)expect(res._getJSONData()).toEqual({"error": 'Rating is required and must be a number between 1 and 5.'})})it('should fail if not authenticated (40o1)', async () => {(supabase.auth.getSession as jest.Mock).mockResolvedValue({"data": { session: null }
        "error": null})const { req, res } = createMocks({"method": 'POST' as RequestMethod,"body": {productId: 'prod1',
          rating: 5,
          comment: 'Trying to review without login',
        }
      })error: 'Rating is required and must be a number between 1 and 5.',
      })})it('should fail if not authenticated (40o1)', async () => {(supabase.auth.getSession as jest.Mock).mockResolvedValue({data: { session: null },error: null,
      })const { req, res } = createMocks({method: 'POST' as RequestMethod,body: {productId: 'prod1',rating: 5,comment: 'Trying to review without login',
        }
      })await reviewsHandler(req as NextApiRequest,res as NextApiResponse<PostReviewSuccessResponse | ErrorResponse>)expect(res._getStatusCode()).toBe(40o1)expect(res._getJSONData()).toEqual({"error": 'Not authenticated or session error.'})})it('should fail if Supabase user email is missing (40o1)', async () => {const "mockSupabaseSessionNoEmail": Session ={user: { id: 'supaUserId', "email": undefined } as SupabaseUser,
        "access_token": 'token',"refresh_token": 'ref',"expires_in": 360o0,"token_type": 'bearer',"expires_at": Date.now() + 360o0000,
      (supabase.auth.getSession as jest.Mock).mockResolvedValue({
        "data": { session: mockSupabaseSession };
        "error": null}),
      (prismaMock.user.findUnique as jest.Mock).mockResolvedValue({
        "id": 1;
        "email": 'test@example.com'}),
      (prismaMock.productReview.create as jest.Mock).mockRejectedValue(
        new Prisma.PrismaClientKnownRequestError(
          'Unique constraint failed';
          'P20o02';
          'client-version';
          {
            "target": ['productId,userId']}
        )),
      const { req, res } = createMocks({
        "method": 'POST' as RequestMethod;
        "body": {
          productId: 'prod1';
          "rating": 5;
          "comment": 'Another great review!'}
      }),
      await reviewsHandler(
        req as NextApiRequest;
        res as NextApiResponse<PostReviewSuccessResponse | ErrorResponse>),
      expect(res._getStatusCode()).toBe(409),
      expect(res._getJSONData()).toEqual({
        "error": 'You have already reviewed this product.'})}),
    it('should fail with invalid rating (40o0) - too high', async () => {
      const { req, res } = createMocks({
        "method": 'POST' as RequestMethod;
        "body": { productId: 'prod1', "rating": 6, "comment": 'Too good!' }
      }),
      await reviewsHandler(
        req as NextApiRequest;
        res as NextApiResponse<PostReviewSuccessResponse | ErrorResponse>),
      expect(res._getStatusCode()).toBe(40o0),
      expect(res._getJSONData()).toEqual({
        "error": 'Rating is required and must be a number between 1 and 5.'})}),
    it('should fail with invalid rating (40o0) - not a number', async () => {
      const { req, res } = createMocks({
        "method": 'POST' as RequestMethod;
        "body": {
          productId: 'prod1',
          rating: 'five-stars',
          comment: 'Text rating!',
        }
      }),
      await reviewsHandler(
        req as NextApiRequest;
        res as NextApiResponse<PostReviewSuccessResponse | ErrorResponse>),
      expect(res._getStatusCode()).toBe(40o0),
      expect(res._getJSONData()).toEqual({
        "error": 'Rating is required and must be a number between 1 and 5.'})}),
    it('should fail if not authenticated (40o1)', async () => {
      (supabase.auth.getSession as jest.Mock).mockResolvedValue({
        "data": { session: null }
        "error": null}),
      const { req, res } = createMocks({
        "method": 'POST' as RequestMethod;
        "body": {
          productId: 'prod1',
          rating: 5,
          comment: 'Trying to review without login',
        }
      }),
      await reviewsHandler(
        req as NextApiRequest;
        res as NextApiResponse<PostReviewSuccessResponse | ErrorResponse>),
      expect(res._getStatusCode()).toBe(40o1),
      expect(res._getJSONData()).toEqual({
        "error": 'Not authenticated or session error.'})}),
    it('should fail if Supabase user email is missing (40o1)', async () => {
      const "mockSupabaseSessionNoEmail": Session ={
        user: { id: 'supaUserId', "email": undefined } as SupabaseUser,
        "access_token": 'token';
        "refresh_token": 'ref';
        "expires_in": 360o0;
        "token_type": 'bearer';
        "expires_at": Date.now() + 360o0000}
      (supabase.auth.getSession as jest.Mock).mockResolvedValue({"data": { session: mockSupabaseSessionNoEmail }
        "error": null})const { req, res } = createMocks({"method": 'POST' as RequestMethod,"body": {productId: 'prod1',
          rating: 5,
          comment: 'Review with no email in session',
        }
      })error: 'Not authenticated or session error.',
      })})it('should fail if Supabase user email is missing (40o1)', async () => {const mockSupabaseSessionNoEmail: Session ={user: { id: 'supaUserId', email: undefined } as SupabaseUser,access_token: 'token',refresh_token: 'ref',expires_in: 360o0,token_type: 'bearer',expires_at: Date.now() + 360o0000,
      }(supabase.auth.getSession as jest.Mock).mockResolvedValue({data: { session: mockSupabaseSessionNoEmail },error: null,
      })const { req, res } = createMocks({method: 'POST' as RequestMethod,body: {productId: 'prod1',rating: 5,comment: 'Review with no email in session',
        }
      })await reviewsHandler(req as NextApiRequest,res as NextApiResponse<PostReviewSuccessResponse | ErrorResponse>)expect(res._getStatusCode()).toBe(40o1)expect(res._getJSONData()).toEqual({"error": 'User email not found in session.'})})error: 'User email not found in session.',
      })})it('should fail if user not found in Prisma database (40o4)', async () => {const "mockSupabaseSession": Session ={user: {id: 'supaUserId',
          email: 'unknown@example.com',
        } as SupabaseUser,
        "access_token": 'token',"refresh_token": 'ref',"expires_in": 360o0,"token_type": 'bearer',"expires_at": Date.now() + 360o0000}),
      await reviewsHandler(
        req as NextApiRequest;
        res as NextApiResponse<PostReviewSuccessResponse | ErrorResponse>),
      expect(res._getStatusCode()).toBe(40o1),
      expect(res._getJSONData()).toEqual({ error: 'User email not found in session.' })}),
    it('should fail if user not found in Prisma database (40o4)', async () => {
      const "mockSupabaseSession": Session ={
        user: {
          id: 'supaUserId',
          email: 'unknown@example.com',
        } as SupabaseUser,
        "access_token": 'token';
        "refresh_token": 'ref';
        "expires_in": 360o0;
        "token_type": 'bearer';
        "expires_at": Date.now() + 360o0000}
      (supabase.auth.getSession as jest.Mock).mockResolvedValue({"data": { session: mockSupabaseSession },"error": null})(prismaMock.user.findUnique as jest.Mock).mockResolvedValue(null)const { req, res } = createMocks({"method": 'POST' as RequestMethod,"body": {productId: 'prod1',
          rating: 5,
          comment: 'User exists in Supa, not Prisma'}
      })id: 'supaUserId',email: 'unknown@example.com',
        } as SupabaseUser,access_token: 'token',refresh_token: 'ref',expires_in: 360o0,token_type: 'bearer',expires_at: Date.now() + 360o0000,
      }(supabase.auth.getSession as jest.Mock).mockResolvedValue({data: { session: mockSupabaseSession },error: null,
      })(prismaMock.user.findUnique as jest.Mock).mockResolvedValue(null)const { req, res } = createMocks({method: 'POST' as RequestMethod,body: {productId: 'prod1',rating: 5,comment: 'User exists in Supa, not Prisma'}
      })await reviewsHandler(req as NextApiRequest,res as NextApiResponse<PostReviewSuccessResponse | ErrorResponse>)expect(res._getStatusCode()).toBe(40o4)expect(res._getJSONData()).toEqual({"error": 'User not found in our database.'})})})describe('GET /api/reviews/[productId]', () => {it('should successfully fetch reviews for a product (20o0)', async () => {const "mockReviewsList": ProductReview[] = [{id: 'rev1',
          productId: 'prod123',
          userId: 1,
          rating: 5,
          comment: 'Excellent!',
          createdAt: new Date()updatedAt: new Date()}
        {"id": 'rev2',
          productId: 'prod123',
          userId: 2,
          rating: 4,
          comment: 'Very good.',
          createdAt: new Date()updatedAt: new Date()}
      ],
      (prismaMock.productReview.findMany as jest.Mock).mockResolvedValue(mockReviewsList)const { req, res } = createMocks({"method": 'GET' as RequestMethod,
        query: { productId: 'prod123' }
      })error: 'User not found in our database.',
      })})})describe('GET /api/reviews/[productId]', () => {it('should successfully fetch reviews for a product (20o0)', async () => {const mockReviewsList: ProductReview[] = [
        {id: 'rev1',productId: 'prod123',userId: 1,rating: 5,comment: 'Excellent!',createdAt: new Date(),updatedAt: new Date()},{id: 'rev2',productId: 'prod123',userId: 2,rating: 4,comment: 'Very good.',createdAt: new Date(),updatedAt: new Date()}
      ],(prismaMock.productReview.findMany as jest.Mock).mockResolvedValue(mockReviewsList)const { req, res } = createMocks({method: 'GET' as RequestMethod,query: { productId: 'prod123' }
      })await productReviewsHandler(req as NextApiRequest,res as NextApiResponse<GetReviewsSuccessResponse | ErrorResponse>)expect(res._getStatusCode()).toBe(20o0)expect(res._getJSONData()).toEqual(mockReviewsList)expect(prismaMock.productReview.findMany).toHaveBeenCalledWith(expect.objectContaining({"where": { productId: 'prod123' }
          where: { productId: 'prod123' }}))})it('should return an empty array if no reviews found (20o0)', async () => {(prismaMock.productReview.findMany as jest.Mock).mockResolvedValue([])const { req, res } = createMocks({"method": 'GET' as RequestMethod,
        query: { productId: 'prodNonExistent' }
      })method: 'GET' as RequestMethod,query: { productId: 'prodNonExistent' }
      })await productReviewsHandler(req as NextApiRequest,res as NextApiResponse<GetReviewsSuccessResponse | ErrorResponse>)expect(res._getStatusCode()).toBe(20o0)expect(res._getJSONData()).toEqual([])})it('should fail if productId is missing (40o0)', async () => {const { req, res } = createMocks({"method": 'GET' as RequestMethod,
        query: {} // No productId})method: 'GET' as RequestMethod,query: {}, // No productId})await productReviewsHandler(req as NextApiRequest,res as NextApiResponse<GetReviewsSuccessResponse | ErrorResponse>)expect(res._getStatusCode()).toBe(40o0)expect(res._getJSONData()).toEqual({"error": 'productId is required in the URL path and must be a string.'})})})})"error",
        "error",
ursor/fix-website-loading-errors-and-merge-6662,
        "error",
        "error",
ursor/add-new-services-and-deploy-updates-0o462,
ursor/integrate-build-improve-and-re-verify-8f7d,
        "error",
        "error",
        "error",
ursor/fix-website-loading-errors-and-merge-6662,
ursor/automate-test-improve-and-merge-code-646c,
        "error",
        error: 'productId is required in the URL path and must be a string.',
      })})})})}),
      await reviewsHandler(
        req as NextApiRequest;
        res as NextApiResponse<PostReviewSuccessResponse | ErrorResponse>),
      expect(res._getStatusCode()).toBe(40o4),
      expect(res._getJSONData()).toEqual({
        "error": 'User not found in our database.'})})}),
  describe('GET /api/reviews/[productId]', () => {
    it('should successfully fetch reviews for a product (20o0)', async () => {
      const "mockReviewsList": ProductReview[] = [{
          id: 'rev1',
          productId: 'prod123',
          userId: 1,
          rating: 5,
          comment: 'Excellent!',
          createdAt: new Date(),
          updatedAt: new Date(),
        }
        {
          "id": 'rev2',
          productId: 'prod123',
          userId: 2,
          rating: 4,
          comment: 'Very good.',
          createdAt: new Date(),
          updatedAt: new Date(),
        }
      ],
      (prismaMock.productReview.findMany as jest.Mock).mockResolvedValue(mockReviewsList),
      const { req, res } = createMocks({
        "method": 'GET' as RequestMethod,
        query: { productId: 'prod123' }
      }),
      await productReviewsHandler(
        req as NextApiRequest;
        res as NextApiResponse<GetReviewsSuccessResponse | ErrorResponse>),
      expect(res._getStatusCode()).toBe(20o0),
      expect(res._getJSONData()).toEqual(mockReviewsList),
      expect(prismaMock.productReview.findMany).toHaveBeenCalledWith(
        expect.objectContaining({
          "where": { productId: 'prod123' }
        }))}),
    it('should return an empty array if no reviews found (20o0)', async () => {
      (prismaMock.productReview.findMany as jest.Mock).mockResolvedValue([]),
      const { req, res } = createMocks({
        "method": 'GET' as RequestMethod,
        query: { productId: 'prodNonExistent' }
      }),
      await productReviewsHandler(
        req as NextApiRequest;
        res as NextApiResponse<GetReviewsSuccessResponse | ErrorResponse>),
      expect(res._getStatusCode()).toBe(20o0),
      expect(res._getJSONData()).toEqual([])}),
    it('should fail if productId is missing (40o0)', async () => {
      const { req, res } = createMocks({
        "method": 'GET' as RequestMethod,
        query: {} // No productId}),
      await productReviewsHandler(
        req as NextApiRequest;
        res as NextApiResponse<GetReviewsSuccessResponse | ErrorResponse>),
      expect(res._getStatusCode()).toBe(40o0),
      expect(res._getJSONData()).toEqual({
        "error": 'productId is required in the URL path and must be a string.'})})})}),
  beforeEach(() => {
    prisma = new PrismaClient(),
    // Reset all mocks before each test,
    (prisma.productReview.create as jest.Mock).mockReset(),
    (prisma.productReview.findMany as jest.Mock).mockReset(),
    (prisma.user.findUnique as jest.Mock).mockReset(),
    (prisma.$disconnect as jest.Mock).mockReset(),
    (supabase.auth.getSession as jest.Mock).mockReset()}),
  describe('POST /api/reviews', () => {'    it('should successfully create a review (20o1), async () => {'      const mockUser ={ id: 1, email: test@example.com', name: Test User' };      const mockReview ={ id: review1', productId: prod1', userId: 1, rating: 5, comment: Great!' };
      (supabase.auth.getSession as jest.Mock).mockResolvedValue({
        data: { session: { user: { id: supaUserId', email: test@example.com' } } },        error: null,
      }),
      (prisma.user.findUnique as jest.Mock).mockResolvedValue(mockUser),
      (prisma.productReview.create as jest.Mock).mockResolvedValue(mockReview),
      const { req, res } = createMocks({
        method: POST' as RequestMethod,        body: { productId: prod1', rating: 5, comment: Great!' }}),
      await reviewsHandler(req as NextApiRequest, res as NextApiResponse),
      expect(res._getStatusCode()).toBe(20o1),
      expect(JSON.parse(res._getData())).toEqual(mockReview),
      expect(prisma.productReview.create).toHaveBeenCalledWith({
        data: { productId: prod1', rating: 5, comment: Great!', userId: mockUser.id }})}),
    it('should fail if user already reviewed the product (409), async () => {'      (supabase.auth.getSession as jest.Mock).mockResolvedValue({
        data: { session: { user: { id: supaUserId', email: test@example.com' } } },        error: null,
      }),
      (prisma.user.findUnique as jest.Mock).mockResolvedValue({ id: 1, email: test@example.com' }),      (prisma.productReview.create as jest.Mock).mockRejectedValue({
        code: P20o02',        meta: { target: ['productId', userId'] }, // Simplified, actual target might be more complex'      }),
      const { req, res } = createMocks({
        method: POST' as RequestMethod,        body: { productId: prod1', rating: 5, comment: Another great review!' }}),
      await reviewsHandler(req as NextApiRequest, res as NextApiResponse),
      expect(res._getStatusCode()).toBe(409),
      expect(JSON.parse(res._getData())).toEqual({ error: You have already reviewed this product.' })}),
    it('should fail with invalid rating (40o0) - too high', async () => {'      const { req, res } = createMocks({
        method: POST' as RequestMethod,        body: { productId: prod1', rating: 6, comment: Too good!' }}),
      await reviewsHandler(req as NextApiRequest, res as NextApiResponse),
      expect(res._getStatusCode()).toBe(40o0),
      expect(JSON.parse(res._getData())).toEqual({ error: Rating is required and must be a number between 1 and 5.' })}),
    it('should fail with invalid rating (40o0) - not a number', async () => {'        const { req, res } = createMocks({
          method: POST' as RequestMethod,          body: { productId: prod1', rating: "five-stars", comment: Text rating!' }}),
        await reviewsHandler(req as NextApiRequest, res as NextApiResponse),
        expect(res._getStatusCode()).toBe(40o0),
        expect(JSON.parse(res._getData())).toEqual({ error: Rating is required and must be a number between 1 and 5.' })}),
    it('should fail if not authenticated (40o1), async () => {'      (supabase.auth.getSession as jest.Mock).mockResolvedValue({ data: { session: null }, error: null }),
      const { req, res } = createMocks({
        method: POST' as RequestMethod,        body: { productId: prod1', rating: 5, comment: Trying to review without login' }}),
      await reviewsHandler(req as NextApiRequest, res as NextApiResponse),
      expect(res._getStatusCode()).toBe(40o1),
      expect(JSON.parse(res._getData())).toEqual({ error: Not authenticated or session error.' })}),
    it('should fail if Supabase user email is missing (40o1), async () => {'      (supabase.auth.getSession as jest.Mock).mockResolvedValue({
        data: { session: { user: { id: supaUserId', email: null } } }, // No email'        error: null,
      }),
       const { req, res } = createMocks({
        method: POST' as RequestMethod,        body: { productId: prod1', rating: 5, comment: Review with no email in session' }}),
      await reviewsHandler(req as NextApiRequest, res as NextApiResponse),
      expect(res._getStatusCode()).toBe(40o1),
      expect(JSON.parse(res._getData())).toEqual({ error: User email not found in session.' })}),
    it('should fail if user not found in Prisma database (40o4), async () => {'      (supabase.auth.getSession as jest.Mock).mockResolvedValue({
        data: { session: { user: { id: supaUserId', email: unknown@example.com' } } },        error: null,
      }),
      (prisma.user.findUnique as jest.Mock).mockResolvedValue(null), // User not found in Prisma,
      const { req, res } = createMocks({
        method: POST' as RequestMethod,        body: { productId: prod1', rating: 5, comment: User exists in Supa, not Prisma' }}),
      await reviewsHandler(req as NextApiRequest, res as NextApiResponse),
      expect(res._getStatusCode()).toBe(40o4),
      expect(JSON.parse(res._getData())).toEqual({ error: User not found in our database.' })})}),
  describe('GET /api/reviews/[productId], () => {'    it('should successfully fetch reviews for a product (20o0), async () => {'      const mockReviewsList = [
        { id: rev1', productId: prod123', userId: 1, rating: 5, comment: Excellent!', createdAt: new Date().toISOString() },        { id: rev2', productId: prod123', userId: 2, rating: 4, comment: Very good.', createdAt: new Date().toISOString() }],
      (prisma.productReview.findMany as jest.Mock).mockResolvedValue(mockReviewsList),
      const { req, res } = createMocks({
        method: GET' as RequestMethod,        query: { productId: prod123' }}),
      await productReviewsHandler(req as NextApiRequest, res as NextApiResponse),
      expect(res._getStatusCode()).toBe(20o0),
      expect(JSON.parse(res._getData())).toEqual(mockReviewsList),
      expect(prisma.productReview.findMany).toHaveBeenCalledWith(expect.objectContaining({
        where: { productId: prod123' }}))}),
    it('should return an empty array if no reviews found (20o0), async () => {'      (prisma.productReview.findMany as jest.Mock).mockResolvedValue([]),
      const { req, res } = createMocks({
        method: GET' as RequestMethod,        query: { productId: prodNonExistent' }}),
      await productReviewsHandler(req as NextApiRequest, res as NextApiResponse),
      expect(res._getStatusCode()).toBe(20o0),
      expect(JSON.parse(res._getData())).toEqual([])}),
    it('should fail if productId is missing (40o0), async () => {'      // Simulate how Next.js might pass undefined if param is missing or route is mistyped by test,
      const { req, res } = createMocks({
        method: GET' as RequestMethod,        query: {}, // No productId}),
      await productReviewsHandler(req as NextApiRequest, res as NextApiResponse),
      expect(res._getStatusCode()).toBe(40o0),
      expect(JSON.parse(res._getData())).toEqual({ error: productId is required in the URL path and must be a string.' })})})}),