import { createMocks, RequestMethod } from 'node-mocks-http'
import type { NextApiRequest, NextApiResponse } from 'next'
<<<<<<< HEAD
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
    mockSupabase = supabase
    jest.clearAllMocks()
  })

  afterEach(() => {
    jest.resetAllMocks()
  })

  it('should create a review successfully', async () => {
    const mockUser = { id: '1', email: 'test@example.com' }
    const mockReview = { id: 1, rating: 5, comment: 'Great product!' }

    mockSupabase.auth.getUser.mockResolvedValue({ data: { user: mockUser } })
    mockPrisma.user.findUnique.mockResolvedValue(mockUser)
    mockPrisma.productReview.create.mockResolvedValue(mockReview)

    const { req, res } = createMocks<NextApiRequest, NextApiResponse>({
      method: 'POST',
      body: {
        productId: 1,
        rating: 5,
        comment: 'Great product!'
      }
    })

    await reviewsHandler(req, res)

    expect(res._getStatusCode()).toBe(201)
    expect(res._getJSONData()).toEqual(mockReview)
  })

  it('should handle unauthorized requests', async () => {
    mockSupabase.auth.getUser.mockResolvedValue({ data: { user: null } })

    const { req, res } = createMocks<NextApiRequest, NextApiResponse>({
      method: 'POST',
      body: {
        productId: 1,
        rating: 5,
        comment: 'Great product!'
      }
    })

    await reviewsHandler(req, res)

    expect(res._getStatusCode()).toBe(401)
    expect(res._getJSONData()).toHaveProperty('error')
  })
})
<<<<<<< HEAD
=======
import handler from '@/pages/api/reviews'
import { describe, it, expect, vi } from 'vitest'

describe('/api/reviews', () => {
  it('should return reviews for a product', async () => {
    const { req, res } = createMocks({
      method: 'GET' as RequestMethod,
      query: { productId: '1' }
    })

    await handler(
      req as unknown as NextApiRequest,
      res as unknown as NextApiResponse
    )

    expect(res._getStatusCode()).toBe(200)
  })

  it('should create a new review', async () => {
    const { req, res } = createMocks({
      method: 'POST' as RequestMethod,
      body: {
        productId: '1',
        rating: 5,
        comment: 'Great product!'
      }
    })

    await handler(
      req as unknown as NextApiRequest,
      res as unknown as NextApiResponse
    )

    expect(res._getStatusCode()).toBe(201)
  })
})
>>>>>>> cursor/fix-errors-and-merge-to-main-54d7
=======
>>>>>>> cursor/fix-errors-and-merge-to-main-6fdd
