import { createMocks, RequestMethod } from 'node-mocks-http';''
import type { NextApiRequest, NextApiResponse } from 'next';''
import handler from '@/pages/api/auth/reset';''
import { describe, it, expect, vi } from 'vitest';'
interface ErrorResponse {
<<<<<<< HEAD
<<<<<<< HEAD
=======
  "message": string;
import { describe, it, expect } from 'vitest';
interface ErrorResponse {
>>>>>>> 9cdb1ba2fcd2f1643402e1f0bd1771f058239fee
  message: string;
}
describe('/api/auth/reset token validation', () => {
  it('returns 400 if token is missing', async () => {
    const { req, res } = createMocks({
      "method": 'POST' as RequestMethod,
      "body": { newPassword: 'pass12345' }});
      method: 'POST' as RequestMethod,
      body: { newPassword: 'pass12345' }
=======
  // TODO: Implement
}

  message: string;
}'
describe('/api/auth/reset token validation', () => {''
  it('returns 400 if token is missing', async () => {'
    const { req, res } = createMocks({'
      method: 'POST' as RequestMethod,''
      body: { newPassword: 'pass12345' }')
>>>>>>> cursor/automate-test-improve-and-merge-code-10c5
    });
    await handler(
      req as unknown as NextApiRequest,
      res as unknown as NextApiResponse;)
    );
    expect(res._getStatusCode()).toBe(400);
    expect((res._getJSONData() as ErrorResponse).message).toBe('
      'Token and new password are required.'')
    );
<<<<<<< HEAD
    expect((res._getJSONData() as ErrorResponse).message).toBe('Token and new password are required.');
  });
  it('returns 400 for invalid token', async () => {
    const { req, res } = createMocks({
      "method": 'POST' as RequestMethod,
      "body": { token: 'invalid', "newPassword": 'pass12345' }});
      method: 'POST' as RequestMethod,
      body: { token: 'invalid', newPassword: 'pass12345' }
=======
  });'
  it('returns 400 for invalid token', async () => {'
    const { req, res } = createMocks({'
      method: 'POST' as RequestMethod,''
      body: { token: 'invalid', newPassword: 'pass12345' }')
>>>>>>> cursor/automate-test-improve-and-merge-code-10c5
    });
    await handler(
      req as unknown as NextApiRequest,
      res as unknown as NextApiResponse;)
    );
    expect(res._getStatusCode()).toBe(400);
    expect((res._getJSONData() as ErrorResponse).message).toBe('
      'Invalid or expired password reset token.'')
    );
  });
});
<<<<<<< HEAD
<<<<<<< HEAD
=======
import { createMocks,RequestMethod } from 'node-mocks-http'; import type { NextApiRequest,NextApiResponse } from 'next'; import handler from '@/pages/api/auth/reset'; import { describe,it,expect,vi } from 'vitest'; interface ErrorResponse { message: string} describe('/api/auth/reset token validation',() => { it('returns 400 if token is missing',async () => { const { req,res } = createMocks({ method: 'POST' as RequestMethod,body: { newPassword: 'pass12345' },}); await handler( req as unknown as NextApiRequest,res as unknown as NextApiResponse ); expect(res._getStatusCode()).toBe(400); expect((res._getJSONData() as ErrorResponse).message).toBe( 'Token and new password are required.' )}); it('returns 400 for invalid token',async () => { const { req,res } = createMocks({ method: 'POST' as RequestMethod,body: { token: 'invalid',newPassword: 'pass12345' },}); await handler( req as unknown as NextApiRequest,res as unknown as NextApiResponse ); expect(res._getStatusCode()).toBe(400); expect((res._getJSONData() as ErrorResponse).message).toBe( 'Invalid or expired password reset token.' )})});
    expect((res._getJSONData() as ErrorResponse).message).toBe('Invalid or expired password reset token.');
  });
});
cursor/website-audit-and-update-with-deployment-76dc
cursor/fix-lint-push-and-merge-to-main-f3c1
>>>>>>> 9cdb1ba2fcd2f1643402e1f0bd1771f058239fee
=======
'
>>>>>>> cursor/automate-test-improve-and-merge-code-10c5
