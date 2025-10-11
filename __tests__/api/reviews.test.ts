import { createMocks, RequestMethod } from 'node-mocks-http'
import type { NextApiRequest, NextApiResponse } from 'next'
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
