<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD:backup-merge-conflicts/reset-password.test.ts.backup
import { createMocks, RequestMethod } from 'node-mocks-http';
=======
>>>>>>> 3f460500b361cb7cf5c95e8c53ca967467908705:__tests__/api/reset-password.test.ts
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c
<<<<<<< HEAD
=======


>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> 64929ba0aca90db53d3fc12fa49c90c7c2110f3c
=======
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
=======
=======
>>>>>>> 61d39dd026fe5549161165ead85b131541010508
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


origin/cursor/expand-services-advertise-and-build-project-c28b


<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
=======
>>>>>>> d0a9ec4ff3a15c755bf51b53a72e5129849de793
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
>>>>>>> 61d39dd026fe5549161165ead85b131541010508
import { createMocks, RequestMethod } from 'node-mocks-http'
import type { NextApiRequest, NextApiResponse } from 'next'
import handler from '@/pages/api/auth/reset'
import { describe, it, expect, vi } from 'vitest'
describe('/api/auth/reset token validation'
  it('returns 400 if token is missing'
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
      "method"
<<<<<<< HEAD
=======
      "body"
<<<<<<< HEAD
      "method"'"body": { token: 'invalid', "newPassword"'"
=======
      "method"

import { createMocks, RequestMethod } from 'node-mocks-http';
=======
>>>>>>> main
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> 8e2e4d4581f20cdfc8804c591c8c2f9544e58358
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c
=======
      "method"
>>>>>>> 64929ba0aca90db53d3fc12fa49c90c7c2110f3c
import type { NextApiRequest, NextApiResponse } from 'next';
import handler from '@/pages/api/auth/reset';
interface ErrorResponse {
  "message": string;
}
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
      res as unknown as NextApiResponse
    );
    expect(res._getStatusCode()).toBe(400);
    // Assuming the response JSON structure is { message: string } for errors
origin/cursor/automate-test-fix-improve-and-merge-code-7ff0
    expect((res._getJSONData() as ErrorResponse).message).toBe(
      'Token and new password are required.'
    );
  });
  it('returns 400 for invalid token', async () => {
    const { req, res } = createMocks({
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
      'Invalid or expired password reset token.'
    );
  });
});
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD:backup-merge-conflicts/reset-password.test.ts.backup
:backup-merge-conflicts/reset-password.test.ts.backup

      "body": { token: 'invalid', "newPassword"

origin/cursor/expand-services-advertise-and-build-project-c28b

import { createMocks,RequestMethod } from 'node-mocks-http'; import type { NextApiRequest,NextApiResponse } from 'next'; import handler from '@/pages/api/auth/reset'; import { describe,it,expect,vi } from 'vitest'; interface ErrorResponse { message: string} describe('/api/auth/reset token validation',() => { it('returns 400 if token is missing',async () => { const { req,res } = createMocks({ method: 'POST' as RequestMethod,body: { newPassword: 'pass12345' },}); await handler( req as unknown as NextApiRequest,res as unknown as NextApiResponse ); expect(res._getStatusCode()).toBe(400); expect((res._getJSONData() as ErrorResponse).message).toBe( 'Token and new password are required.' )}); it('returns 400 for invalid token',async () => { const { req,res } = createMocks({ method: 'POST' as RequestMethod,body: { token: 'invalid',newPassword: 'pass12345' },}); await handler( req as unknown as NextApiRequest,res as unknown as NextApiResponse ); expect(res._getStatusCode()).toBe(400); expect((res._getJSONData() as ErrorResponse).message).toBe( 'Invalid or expired password reset token.' )})});

=======
=======
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c

=======
      "body": { token: 'invalid', "newPassword"
>>>>>>> ed23a41deefdd5db733dc5d1577e62259b173127
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
=======
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c
=======

>>>>>>> 64929ba0aca90db53d3fc12fa49c90c7c2110f3c
import { createMocks,RequestMethod } from 'node-mocks-http'; import type { NextApiRequest,NextApiResponse } from 'next'; import handler from '@/pages/api/auth/reset'; import { describe,it,expect,vi } from 'vitest'; interface ErrorResponse { message: string} describe('/api/auth/reset token validation',() => { it('returns 400 if token is missing',async () => { const { req,res } = createMocks({ method: 'POST' as RequestMethod,body: { newPassword: 'pass12345' },}); await handler( req as unknown as NextApiRequest,res as unknown as NextApiResponse ); expect(res._getStatusCode()).toBe(400); expect((res._getJSONData() as ErrorResponse).message).toBe( 'Token and new password are required.' )}); it('returns 400 for invalid token',async () => { const { req,res } = createMocks({ method: 'POST' as RequestMethod,body: { token: 'invalid',newPassword: 'pass12345' },}); await handler( req as unknown as NextApiRequest,res as unknown as NextApiResponse ); expect(res._getStatusCode()).toBe(400); expect((res._getJSONData() as ErrorResponse).message).toBe( 'Invalid or expired password reset token.' )})});
<<<<<<< HEAD
<<<<<<< HEAD
import { createMocks,RequestMethod } from 'node-mocks-http'; import type { NextApiRequest,NextApiResponse } from 'next'; import handler from '@/pages/api/auth/reset'; import { describe,it,expect,vi } from 'vitest'; interface ErrorResponse { message: string} describe('/api/auth/reset token validation',() => { it('returns 400 if token is missing',async () => { const { req,res } = createMocks({ method: 'POST' as RequestMethod,body: { newPassword: 'pass12345' },}); await handler( req as unknown as NextApiRequest,res as unknown as NextApiResponse ); expect(res._getStatusCode()).toBe(400); expect((res._getJSONData() as ErrorResponse).message).toBe( 'Token and new password are required.' )}); it('returns 400 for invalid token',async () => { const { req,res } = createMocks({ method: 'POST' as RequestMethod,body: { token: 'invalid',newPassword: 'pass12345' },}); await handler( req as unknown as NextApiRequest,res as unknown as NextApiResponse ); expect(res._getStatusCode()).toBe(400); expect((res._getJSONData() as ErrorResponse).message).toBe( 'Invalid or expired password reset token.' )})});
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
<<<<<<< HEAD
>>>>>>> d0b4cabda824e2db66cecb53192832d7e749a326
=======
>>>>>>> 10f43844f89f81084ca8fdce546c59c985174e68
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 3f460500b361cb7cf5c95e8c53ca967467908705:__tests__/api/reset-password.test.ts
=======
>>>>>>> main
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
=======

>>>>>>> 61d39dd026fe5549161165ead85b131541010508
import { createMocks, RequestMethod } from 'node-mocks-http'
import type { NextApiRequest, NextApiResponse } from 'next'
import handler from '@/pages/api/auth/reset'
import { describe, it, expect, vi } from 'vitest'
describe('/api/auth/reset token validation'
  it('returns 400 if token is missing'
      "method"
<<<<<<< HEAD
>>>>>>> c56320a4e91ebfd91859a6eed8c13818d8c9efd6
=======
>>>>>>> main
>>>>>>> 8e2e4d4581f20cdfc8804c591c8c2f9544e58358
<<<<<<< HEAD
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c
=======
      "method"import { createMocks,RequestMethod } from 'node-mocks-http'; import type { NextApiRequest,NextApiResponse } from 'next'; import handler from '@/pages/api/auth/reset'; import { describe,it,expect,vi } from 'vitest'; interface ErrorResponse { message: string} describe('/api/auth/reset token validation',() => { it('returns 400 if token is missing',async () => { const { req,res } = createMocks({ method: 'POST' as RequestMethod,body: { newPassword: 'pass12345' },}); await handler( req as unknown as NextApiRequest,res as unknown as NextApiResponse ); expect(res._getStatusCode()).toBe(400); expect((res._getJSONData() as ErrorResponse).message).toBe( 'Token and new password are required.' )}); it('returns 400 for invalid token',async () => { const { req,res } = createMocks({ method: 'POST' as RequestMethod,body: { token: 'invalid',newPassword: 'pass12345' },}); await handler( req as unknown as NextApiRequest,res as unknown as NextApiResponse ); expect(res._getStatusCode()).toBe(400); expect((res._getJSONData() as ErrorResponse).message).toBe( 'Invalid or expired password reset token.' )})});
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> 64929ba0aca90db53d3fc12fa49c90c7c2110f3c
=======
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
=======
=======

main


>>>>>>> 61d39dd026fe5549161165ead85b131541010508
  // TODO: Add a test case for a successful password reset if this file is to be comprehensive.
  // This would involve mocking Prisma calls within the handler:
  // - prisma.user.findFirst to find a user by a valid (hashed) token
  // - prisma.user.update to update the password and clear reset token fields
  // - (Potentially) supabase.auth.admin.updateUserById if Supabase auth password also needs update
});
<<<<<<< HEAD
>>>>>>> origin/cursor/automate-test-fix-improve-and-merge-code-7ff0
=======
>>>>>>> d0a9ec4ff3a15c755bf51b53a72e5129849de793
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
origin/cursor/automate-test-fix-improve-and-merge-code-7ff0

>>>>>>> 61d39dd026fe5549161165ead85b131541010508
