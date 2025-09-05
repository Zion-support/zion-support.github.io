import type { NextApiRequest, NextApiResponse } from 'next';
import handler from '@/pages/api/auth/reset';
interface ErrorResponse {
  "message": string;
}
describe('/api/auth/reset token validation', () => {
  it('returns 400 if token is missing', async () => {
    const { req, res } = createMocks({
      "method": 'POST' as RequestMethod,
      "body": { newPassword: 'pass12345' }});
    await handler(
      req as unknown as NextApiRequest,
      res as unknown as NextApiResponse
    );
    expect(res._getStatusCode()).toBe(400);
    expect((res._getJSONData() as ErrorResponse).message).toBe(
      'Token and new password are required.'
    );
  });
  it('returns 400 for invalid token', async () => {
    const { req, res } = createMocks({
      "method": 'POST' as RequestMethod,
      "body": { token: 'invalid', "newPassword": 'pass12345' }});
    await handler(
      req as unknown as NextApiRequest,
      res as unknown as NextApiResponse
    );
    expect(res._getStatusCode()).toBe(400);
    expect((res._getJSONData() as ErrorResponse).message).toBe(
      'Invalid or expired password reset token.'
    );
  });
});
import { createMocks,RequestMethod } from 'node-mocks-http'; import type { NextApiRequest,NextApiResponse } from 'next'; import handler from '@/pages/api/auth/reset'; import { describe,it,expect,vi } from 'vitest'; interface ErrorResponse { message: string} describe('/api/auth/reset token validation',() => { it('returns 400 if token is missing',async () => { const { req,res } = createMocks({ method: 'POST' as RequestMethod,body: { newPassword: 'pass12345' },}); await handler( req as unknown as NextApiRequest,res as unknown as NextApiResponse ); expect(res._getStatusCode()).toBe(400); expect((res._getJSONData() as ErrorResponse).message).toBe( 'Token and new password are required.' )}); it('returns 400 for invalid token',async () => { const { req,res } = createMocks({ method: 'POST' as RequestMethod,body: { token: 'invalid',newPassword: 'pass12345' },}); await handler( req as unknown as NextApiRequest,res as unknown as NextApiResponse ); expect(res._getStatusCode()).toBe(400); expect((res._getJSONData() as ErrorResponse).message).toBe( 'Invalid or expired password reset token.' )})});
>>>>>>> 0aea86df97524e9f0bb14202f48b4e4eee196229
import { createMocks,RequestMethod } from 'node-mocks-http'; import type { NextApiRequest,NextApiResponse } from 'next'; import handler from '@/pages/api/auth/reset'; import { describe,it,expect,vi } from 'vitest'; interface ErrorResponse { message: string} describe('/api/auth/reset token validation',() => { it('returns 400 if token is missing',async () => { const { req,res } = createMocks({ method: 'POST' as RequestMethod,body: { newPassword: 'pass12345' },}); await handler( req as unknown as NextApiRequest,res as unknown as NextApiResponse ); expect(res._getStatusCode()).toBe(400); expect((res._getJSONData() as ErrorResponse).message).toBe( 'Token and new password are required.' )}); it('returns 400 for invalid token',async () => { const { req,res } = createMocks({ method: 'POST' as RequestMethod,body: { token: 'invalid',newPassword: 'pass12345' },}); await handler( req as unknown as NextApiRequest,res as unknown as NextApiResponse ); expect(res._getStatusCode()).toBe(400); expect((res._getJSONData() as ErrorResponse).message).toBe( 'Invalid or expired password reset token.' )})});
>>>>>>> d0b4cabda824e2db66cecb53192832d7e749a326
