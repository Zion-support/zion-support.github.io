import { createMocks, RequestMethod } from 'node-mocks-http';
import type { NextApiRequest, NextApiResponse } from 'next';
import handler from '@/pages/api/auth/reset';
import { describe, it, expect, vi } from 'vitest';

interface ErrorResponse {
  message: string;
}

describe('/api/auth/reset token validation', () => {
  it('returns 400 if token is missing', async () => {
    const { req, res } = createMocks<NextApiRequest, NextApiResponse>({
      method: 'POST' as RequestMethod,
      body: {
        email: 'test@example.com'
      }
    });

    await handler(req, res);

    expect(res._getStatusCode()).toBe(400);
    const data = JSON.parse(res._getData()) as ErrorResponse;
    expect(data.message).toContain('token');
  });

  it('returns 400 if email is missing', async () => {
    const { req, res } = createMocks<NextApiRequest, NextApiResponse>({
      method: 'POST' as RequestMethod,
      body: {
        token: 'valid-token'
      }
    });

    await handler(req, res);

    expect(res._getStatusCode()).toBe(400);
    const data = JSON.parse(res._getData()) as ErrorResponse;
    expect(data.message).toContain('email');
  });

  it('returns 200 for valid token and email', async () => {
    const { req, res } = createMocks<NextApiRequest, NextApiResponse>({
      method: 'POST' as RequestMethod,
      body: {
        token: 'valid-token',
        email: 'test@example.com'
      }
    });

    await handler(req, res);

    expect(res._getStatusCode()).toBe(200);
  });
});