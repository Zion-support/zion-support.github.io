import { createMocks, RequestMethod } from 'node-mocks-http'
import type { NextApiRequest, NextApiResponse } from 'next'
import handler from '@/pages/api/user/me'
import { describe, it, expect, vi } from 'vitest'
describe('/api/user/me', () => {
  it('should return user data when authenticated', async () => {
    const { req, res } = createMocks({
      method: 'GET' as RequestMethod,
      headers: {
        authorization: 'Bearer valid-token'
      }
    })
    await handler(
      req as unknown as NextApiRequest,
      res as unknown as NextApiResponse
    )
    expect(res._getStatusCode()).toBe(200)
  })
  it('should return 401 when not authenticated', async () => {
    const { req, res } = createMocks({
      method: 'GET' as RequestMethod
    })
    await handler(
      req as unknown as NextApiRequest,
      res as unknown as NextApiResponse
    )
    expect(res._getStatusCode()).toBe(401)
  })
})