import { createMocks, RequestMethod } from 'node-mocks-http'
import type { NextApiRequest, NextApiResponse } from 'next'
import handler from '@/pages/api/auth/login'
import { describe, it, expect, vi } from 'vitest'
describe('/api/auth/login', () => {
  it('should login with valid credentials', async () => {
    const { req, res } = createMocks({
      method: 'POST' as RequestMethod,
      body: {
        email: 'test@example.com',
        password: 'password123'
      }
    })
    await handler(
      req as unknown as NextApiRequest,
      res as unknown as NextApiResponse
    )
    expect(res._getStatusCode()).toBe(200)
  })
  it('should return 401 with invalid credentials', async () => {
    const { req, res } = createMocks({
      method: 'POST' as RequestMethod,
      body: {
        email: 'test@example.com',
        password: 'wrongpassword'
      }
    })
    await handler(
      req as unknown as NextApiRequest,
      res as unknown as NextApiResponse
    )
    expect(res._getStatusCode()).toBe(401)
  })
})