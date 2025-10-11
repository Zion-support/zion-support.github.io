import { createMocks, RequestMethod } from 'node-mocks-http'
import type { NextApiRequest, NextApiResponse } from 'next'
import reviewsHandler from '@/pages/api/reviews'
import productReviewsHandler from '@/pages/api/reviews/[productId]'
import { PrismaClient, ProductReview, User as PrismaUser, Prisma } from '@prisma/client'
import { supabase } from '@/integrations/supabase/client'
import type { User as SupabaseUser, Session, AuthError } from '@supabase/supabase-js'
import { describe, it, expect, beforeEach, vi } from 'vitest'

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
  }
  return { PrismaClient: jest.fn(() => mockPrismaClient) }
})

// Mock Supabase
jest.mock('@/integrations/supabase/client', () => ({
  supabase: {
    auth: {
      getUser: jest.fn()
    }
  }
}))

describe('/api/reviews', () => {
  let mockPrisma: jest.Mocked<PrismaClient>
  let mockSupabase: jest.Mocked<typeof supabase>

  beforeEach(() => {
    mockPrisma = new PrismaClient() as jest.Mocked<PrismaClient>
    mockSupabase = supabase as jest.Mocked<typeof supabase>
    jest.clearAllMocks()
  })

  describe('POST /api/reviews', () => {
    it('should create a new review', async () => {
      const mockUser: SupabaseUser = {
        id: 'user-123',
        email: 'test@example.com',
        created_at: '2023-01-01T00:00:00Z',
        updated_at: '2023-01-01T00:00:00Z',
        aud: 'authenticated',
        role: 'authenticated',
        app_metadata: {},
        user_metadata: {},
        identities: []
      }

      const mockSession: Session = {
        access_token: 'token',
        refresh_token: 'refresh',
        expires_in: 3600,
        expires_at: Date.now() + 3600000,
        token_type: 'bearer',
        user: mockUser
      }

      mockSupabase.auth.getUser.mockResolvedValue({
        data: { user: mockUser },
        error: null
      })

      const mockReview: ProductReview = {
        id: 1,
        productId: 1,
        userId: 'user-123',
        rating: 5,
        comment: 'Great product!',
        createdAt: new Date(),
        updatedAt: new Date()
      }

      mockPrisma.user.findUnique.mockResolvedValue({
        id: 'user-123',
        email: 'test@example.com',
        name: 'Test User',
        createdAt: new Date(),
        updatedAt: new Date()
      } as PrismaUser)

      mockPrisma.productReview.create.mockResolvedValue(mockReview)

      const { req, res } = createMocks<NextApiRequest, NextApiResponse>({
        method: 'POST' as RequestMethod,
        body: {
          productId: 1,
          rating: 5,
          comment: 'Great product!'
        },
        headers: {
          authorization: 'Bearer token'
        }
      })

      await reviewsHandler(req, res)

      expect(res._getStatusCode()).toBe(201)
      expect(JSON.parse(res._getData())).toEqual({
        success: true,
        data: mockReview
      })
    })

    it('should return 401 if user is not authenticated', async () => {
      mockSupabase.auth.getUser.mockResolvedValue({
        data: { user: null },
        error: { message: 'Not authenticated' } as AuthError
      })

      const { req, res } = createMocks<NextApiRequest, NextApiResponse>({
        method: 'POST' as RequestMethod,
        body: {
          productId: 1,
          rating: 5,
          comment: 'Great product!'
        }
      })

      await reviewsHandler(req, res)

      expect(res._getStatusCode()).toBe(401)
      expect(JSON.parse(res._getData())).toEqual({
        success: false,
        error: 'Unauthorized'
      })
    })
  })
})