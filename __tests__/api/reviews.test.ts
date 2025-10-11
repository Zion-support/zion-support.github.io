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
  let mockPrisma: any
  let mockSupabase: any

  beforeEach(() => {
    mockPrisma = new PrismaClient()
    mockSupabase = jest.requireMock('@/integrations/supabase/client').supabase
    jest.clearAllMocks()
  })

  describe('POST /api/reviews', () => {
    it('should create a new review', async () => {
      const mockUser = { id: '1', email: 'test@example.com' }
      const mockReview = {
        id: 1,
        productId: 1,
        userId: '1',
        rating: 5,
        comment: 'Great product!'
      }

      mockSupabase.auth.getUser.mockResolvedValue({ data: { user: mockUser } })
      mockPrisma.user.findUnique.mockResolvedValue({ id: '1' })
      mockPrisma.productReview.create.mockResolvedValue(mockReview)

      const { req, res } = createMocks({
        method: 'POST' as RequestMethod,
        body: {
          productId: 1,
          rating: 5,
          comment: 'Great product!'
        }
      })

      await reviewsHandler(req as NextApiRequest, res as NextApiResponse)

      expect(res._getStatusCode()).toBe(201)
      expect(res._getJSONData()).toEqual(mockReview)
    })

    it('should return 401 if user is not authenticated', async () => {
      mockSupabase.auth.getUser.mockResolvedValue({ data: { user: null } })

      const { req, res } = createMocks({
        method: 'POST' as RequestMethod,
        body: {
          productId: 1,
          rating: 5,
          comment: 'Great product!'
        }
      })

      await reviewsHandler(req as NextApiRequest, res as NextApiResponse)

      expect(res._getStatusCode()).toBe(401)
      expect(res._getJSONData()).toEqual({ error: 'Unauthorized' })
    })
  })

  describe('GET /api/reviews/[productId]', () => {
    it('should return reviews for a product', async () => {
      const mockReviews = [
        {
          id: 1,
          productId: 1,
          userId: '1',
          rating: 5,
          comment: 'Great product!',
          user: { name: 'John Doe' }
        }
      ]

      mockPrisma.productReview.findMany.mockResolvedValue(mockReviews)

      const { req, res } = createMocks({
        method: 'GET' as RequestMethod,
        query: { productId: '1' }
      })

      await productReviewsHandler(req as NextApiRequest, res as NextApiResponse)

      expect(res._getStatusCode()).toBe(200)
      expect(res._getJSONData()).toEqual(mockReviews)
    })
  })
})