<<<<<<< HEAD
import { createMocks, RequestMethod } from 'node-mocks-http'; // RequestMethod can be useful;
import type { NextApiRequest, NextApiResponse } from 'next';
import handler from '@/pages/api/auth/reset'; // Adjust path as necessary;
import { describe, it, expect, vi } from 'vitest'; // Import vi for potential mocking if needed later;
// Define expected response structure for error messages
interface ErrorResponse {
  message: string;
  // Add other fields if your API returns more details on error
}
// Define expected success response (if applicable, though this test focuses on errors);
// interface SuccessResponse {
//   success: boolean;
//   message?: string;
// }
origin/cursor/automate-test-fix-improve-and-merge-code-7ff0

<<<<<<< HEAD
origin/cursor/expand-services-advertise-and-build-project-c28b
=======
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
import { createMocks, RequestMethod } from 'node-mocks-http'
import type { NextApiRequest, NextApiResponse } from 'next'
import handler from '@/pages/api/auth/reset'
import { describe, it, expect, vi } from 'vitest'
describe('/api/auth/reset token validation'
  it('returns 400 if token is missing'
      "method"
"body"

      "method"'"body": { token: 'invalid', "newPassword"'"

      "method"
<<<<<<< HEAD
      "body": { token: 'invalid', "newPassword"
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
import { createMocks, RequestMethod } from 'node-mocks-http';

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
      'Token and new password are required.''
    );
  });
  it('returns 400 for invalid token', async () => {'
    }
      "method": 'POST' as RequestMethod,'
      "body": { "token": 'invalid', "newPassword": 'pass12345' }});'
    await handler(
      req as unknown as NextApiRequest,
      res as unknown as NextApiResponse
    );
    expect(res._getStatusCode()).toBe(400);
    expect((res._getJSONData() as ErrorResponse).message).toBe(
      'Invalid or expired password reset token.''
=======
      'Invalid or expired password reset token.'
>>>>>>> origin/chore/fix-lint-and-merge
    );
  });
});
<<<<<<< HEAD
"body": { token: 'invalid', "newPassword"
=======
<<<<<<< HEAD
      "body": { token: 'invalid', "newPassword"
import { createMocks,RequestMethod } from 'node-mocks-http'; import type { NextApiRequest,NextApiResponse } from 'next'; import handler from '@/pages/api/auth/reset'; import { describe,it,expect,vi } from 'vitest'; interface ErrorResponse { message: string} describe('/api/auth/reset token validation',() => { it('returns 400 if token is missing',async () => { const { req,res } = createMocks({ method: 'POST' as RequestMethod,body: { newPassword: 'pass12345' },}); await handler( req as unknown as NextApiRequest,res as unknown as NextApiResponse ); expect(res._getStatusCode()).toBe(400); expect((res._getJSONData() as ErrorResponse).message).toBe( 'Token and new password are required.' )}); it('returns 400 for invalid token',async () => { const { req,res } = createMocks({ method: 'POST' as RequestMethod,body: { token: 'invalid',newPassword: 'pass12345' },}); await handler( req as unknown as NextApiRequest,res as unknown as NextApiResponse ); expect(res._getStatusCode()).toBe(400); expect((res._getJSONData() as ErrorResponse).message).toBe( 'Invalid or expired password reset token.' )})});
import { createMocks,RequestMethod } from 'node-mocks-http'; import type { NextApiRequest,NextApiResponse } from 'next'; import handler from '@/pages/api/auth/reset'; import { describe,it,expect,vi } from 'vitest'; interface ErrorResponse { message: string} describe('/api/auth/reset token validation',() => { it('returns 400 if token is missing',async () => { const { req,res } = createMocks({ method: 'POST' as RequestMethod,body: { newPassword: 'pass12345' },}); await handler( req as unknown as NextApiRequest,res as unknown as NextApiResponse ); expect(res._getStatusCode()).toBe(400); expect((res._getJSONData() as ErrorResponse).message).toBe( 'Token and new password are required.' )}); it('returns 400 for invalid token',async () => { const { req,res } = createMocks({ method: 'POST' as RequestMethod,body: { token: 'invalid',newPassword: 'pass12345' },}); await handler( req as unknown as NextApiRequest,res as unknown as NextApiResponse ); expect(res._getStatusCode()).toBe(400); expect((res._getJSONData() as ErrorResponse).message).toBe( 'Invalid or expired password reset token.' )})});
ursor/add-new-services-and-deploy-updates-0462
ursor/integrate-build-improve-and-re-verify-8f7d
      "body": { token: 'invalid', "newPassword"
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339

<<<<<<< HEAD
=======
<<<<<<< HEAD
import { createMocks, RequestMethod } from 'node-mocks-http'
import type { NextApiRequest, NextApiResponse } from 'next'
import handler from '@/pages/api/auth/reset'
import { describe, it, expect, vi } from 'vitest'
describe('/api/auth/reset token validation'
  it('returns 400 if token is missing'
      "method"
>>>>>>> origin/chore/fix-lint-and-merge

main
  // TODO: Add a test case for a successful password reset if this file is to be comprehensive.
  // This would involve mocking Prisma calls within the handler:
  // - prisma.user.findFirst to find a user by a valid (hashed) token
  // - prisma.user.update to update the password and clear reset token fields
  // - (Potentially) supabase.auth.admin.updateUserById if Supabase auth password also needs update
});
origin/cursor/automate-test-fix-improve-and-merge-code-7ff0
=======
import { createMocks, RequestMethod } from 'node-mocks-http';
import type { NextApiRequest, NextApiResponse } from 'next';
import handler from '@/pages/api/auth/reset';
import { describe, it, expect } from 'vitest';

describe('/api/auth/reset token validation', () => {
  it('returns 400 if token is missing', async () => {
    const { req, res } = createMocks<NextApiRequest, NextApiResponse>({
      method: 'POST' as RequestMethod,
      body: {}
    });

    await handler(req, res);

    expect(res._getStatusCode()).toBe(400);
    expect(JSON.parse(res._getData())).toEqual({
      error: 'Token is required'
    });
  });

  it('returns 400 if new password is missing', async () => {
    const { req, res } = createMocks<NextApiRequest, NextApiResponse>({
      method: 'POST' as RequestMethod,
      body: { token: 'valid-token' }
    });

    await handler(req, res);

    expect(res._getStatusCode()).toBe(400);
    expect(JSON.parse(res._getData())).toEqual({
      error: 'New password is required'
    });
  });

  it('returns 400 if token is invalid', async () => {
    const { req, res } = createMocks<NextApiRequest, NextApiResponse>({
      method: 'POST' as RequestMethod,
      body: { token: 'invalid', newPassword: 'newpass123' }
    });

    await handler(req, res);

    expect(res._getStatusCode()).toBe(400);
    expect(JSON.parse(res._getData())).toEqual({
      error: 'Invalid or expired token'
    });
  });
});
>>>>>>> origin/main
=======
      "body": { token: 'invalid', "newPassword"
>>>>>>> ed23a41deefdd5db733dc5d1577e62259b173127
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
