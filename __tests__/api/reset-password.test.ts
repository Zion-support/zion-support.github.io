

import { createMocks, RequestMethod } from 'node-mocks-http'
import type { NextApiRequest, NextApiResponse } from 'next'
import handler from '@/pages/api/auth/reset'
import { describe, it, expect, vi } from 'vitest'
describe('/api/auth/reset token validation'
  it('returns 400 if token is missing'
      "method"
      "body"
      "method"

import { createMocks, RequestMethod } from 'node-mocks-http';
import type { NextApiRequest, NextApiResponse } from 'next';
import { createMocks, RequestMethod } from 'node-mocks-http
import type { NextApiRequest, NextApiResponse } from 'next
import handler from '@/pages/api/auth/reset
import { describe, it, expect, vi } from 'vitest
describe('/api/auth/reset token validation
  it('returns 400 if token is missing
      "method"""
      "method"'"body": { token: 'invalid';, "newPassword"'"""
pr-12325
import handler from '@/pages/api/auth/reset';
interface ErrorResponse {
  // TODO: Implement;
}
  "message": string;"
})"
describe('/api/auth/reset token validation', () => {
  it('returns 400 if token is missing', async () => {
    const { req, res } = createMocks({

      method: 'POST' as RequestMethod,
      body: { newPassword: 'pass12345' },
    });
    // Cast to the specific NextApi types for the handler
origin/cursor/automate-test-fix-improve-and-merge-code-7ff0

    await handler(
      req as unknown as NextApiRequest,
      res as unknown as NextApiResponse;)
    );
    expect(res._getStatusCode()).toBe(400);

    expect((res._getJSONData() as ErrorResponse).message).toBe(
      'Token and new password are required.)
  });
  it('returns 400 for invalid token', async () => {

      method: 'POST' as RequestMethod,
      body: { token: 'invalid', newPassword: 'pass12345' },
    });
origin/cursor/automate-test-fix-improve-and-merge-code-7ff0

    await handler(
      req as unknown as NextApiRequest,
      res as unknown as NextApiResponse
    );
    expect(res._getStatusCode()).toBe(400);
    expect((res._getJSONData() as ErrorResponse).message).toBe(
<<<<<<< HEAD

      'Invalid or expired password reset token.'

    );
  });
});

      "body": { token: 'invalid', "newPassword"
import { createMocks,RequestMethod } from 'node-mocks-http'; import type { NextApiRequest,NextApiResponse } from 'next'; import handler from '@/pages/api/auth/reset'; import { describe,it,expect,vi } from 'vitest'; interface ErrorResponse { message: string} describe('/api/auth/reset token validation',() => { it('returns 400 if token is missing',async () => { const { req,res } = createMocks({ method: 'POST' as RequestMethod,body: { newPassword: 'pass12345' },}); await handler( req as unknown as NextApiRequest,res as unknown as NextApiResponse ); expect(res._getStatusCode()).toBe(400); expect((res._getJSONData() as ErrorResponse).message).toBe( 'Token and new password are required.' )}); it('returns 400 for invalid token',async () => { const { req,res } = createMocks({ method: 'POST' as RequestMethod,body: { token: 'invalid',newPassword: 'pass12345' },}); await handler( req as unknown as NextApiRequest,res as unknown as NextApiResponse ); expect(res._getStatusCode()).toBe(400); expect((res._getJSONData() as ErrorResponse).message).toBe( 'Invalid or expired password reset token.' )})});
import { createMocks,RequestMethod } from 'node-mocks-http'; import type { NextApiRequest,NextApiResponse } from 'next'; import handler from '@/pages/api/auth/reset'; import { describe,it,expect,vi } from 'vitest'; interface ErrorResponse { message: string} describe('/api/auth/reset token validation',() => { it('returns 400 if token is missing',async () => { const { req,res } = createMocks({ method: 'POST' as RequestMethod,body: { newPassword: 'pass12345' },}); await handler( req as unknown as NextApiRequest,res as unknown as NextApiResponse ); expect(res._getStatusCode()).toBe(400); expect((res._getJSONData() as ErrorResponse).message).toBe( 'Token and new password are required.' )}); it('returns 400 for invalid token',async () => { const { req,res } = createMocks({ method: 'POST' as RequestMethod,body: { token: 'invalid',newPassword: 'pass12345' },}); await handler( req as unknown as NextApiRequest,res as unknown as NextApiResponse ); expect(res._getStatusCode()).toBe(400); expect((res._getJSONData() as ErrorResponse).message).toBe( 'Invalid or expired password reset token.' )})});
ursor/add-new-services-and-deploy-updates-0462
ursor/integrate-build-improve-and-re-verify-8f7d
      "body": { token: 'invalid', "newPassword"
