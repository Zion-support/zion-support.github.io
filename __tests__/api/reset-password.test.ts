<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
=======
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
>>>>>>> origin/cursor/automate-test-fix-improve-and-merge-code-7ff0


>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
=======
>>>>>>> d0a9ec4ff3a15c755bf51b53a72e5129849de793
import { createMocks, RequestMethod } from 'node-mocks-http'
import type { NextApiRequest, NextApiResponse } from 'next'
import handler from '@/pages/api/auth/reset'
import { describe, it, expect, vi } from 'vitest'
describe('/api/auth/reset token validation'
  it('returns 400 if token is missing'
      "method"
import type { NextApiRequest, NextApiResponse } from 'next';
import handler from '@/pages/api/auth/reset';
interface ErrorResponse {
  "message": string;
}
describe('/api/auth/reset token validation', () => {
  it('returns 400 if token is missing', async () => {
    const { req, res } = createMocks({
<<<<<<< HEAD
      "method": 'POST' as RequestMethod,
      "body": { newPassword: 'pass12345' }});
=======
      method: 'POST' as RequestMethod,
      body: { newPassword: 'pass12345' },
    });
    // Cast to the specific NextApi types for the handler
>>>>>>> origin/cursor/automate-test-fix-improve-and-merge-code-7ff0
    await handler(
      req as unknown as NextApiRequest,
      res as unknown as NextApiResponse
    );
    expect(res._getStatusCode()).toBe(400);
<<<<<<< HEAD
=======
    // Assuming the response JSON structure is { message: string } for errors
>>>>>>> origin/cursor/automate-test-fix-improve-and-merge-code-7ff0
    expect((res._getJSONData() as ErrorResponse).message).toBe(
      'Token and new password are required.'
    );
  });
  it('returns 400 for invalid token', async () => {
    const { req, res } = createMocks({
<<<<<<< HEAD
      "method": 'POST' as RequestMethod,
      "body": { token: 'invalid', "newPassword": 'pass12345' }});
=======
      method: 'POST' as RequestMethod,
      body: { token: 'invalid', newPassword: 'pass12345' },
    });
>>>>>>> origin/cursor/automate-test-fix-improve-and-merge-code-7ff0
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
=======
      "body": { token: 'invalid', "newPassword"
>>>>>>> ed23a41deefdd5db733dc5d1577e62259b173127
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
=======
=======
>>>>>>> d0a9ec4ff3a15c755bf51b53a72e5129849de793
import { createMocks,RequestMethod } from 'node-mocks-http'; import type { NextApiRequest,NextApiResponse } from 'next'; import handler from '@/pages/api/auth/reset'; import { describe,it,expect,vi } from 'vitest'; interface ErrorResponse { message: string} describe('/api/auth/reset token validation',() => { it('returns 400 if token is missing',async () => { const { req,res } = createMocks({ method: 'POST' as RequestMethod,body: { newPassword: 'pass12345' },}); await handler( req as unknown as NextApiRequest,res as unknown as NextApiResponse ); expect(res._getStatusCode()).toBe(400); expect((res._getJSONData() as ErrorResponse).message).toBe( 'Token and new password are required.' )}); it('returns 400 for invalid token',async () => { const { req,res } = createMocks({ method: 'POST' as RequestMethod,body: { token: 'invalid',newPassword: 'pass12345' },}); await handler( req as unknown as NextApiRequest,res as unknown as NextApiResponse ); expect(res._getStatusCode()).toBe(400); expect((res._getJSONData() as ErrorResponse).message).toBe( 'Invalid or expired password reset token.' )})});
import { createMocks,RequestMethod } from 'node-mocks-http'; import type { NextApiRequest,NextApiResponse } from 'next'; import handler from '@/pages/api/auth/reset'; import { describe,it,expect,vi } from 'vitest'; interface ErrorResponse { message: string} describe('/api/auth/reset token validation',() => { it('returns 400 if token is missing',async () => { const { req,res } = createMocks({ method: 'POST' as RequestMethod,body: { newPassword: 'pass12345' },}); await handler( req as unknown as NextApiRequest,res as unknown as NextApiResponse ); expect(res._getStatusCode()).toBe(400); expect((res._getJSONData() as ErrorResponse).message).toBe( 'Token and new password are required.' )}); it('returns 400 for invalid token',async () => { const { req,res } = createMocks({ method: 'POST' as RequestMethod,body: { token: 'invalid',newPassword: 'pass12345' },}); await handler( req as unknown as NextApiRequest,res as unknown as NextApiResponse ); expect(res._getStatusCode()).toBe(400); expect((res._getJSONData() as ErrorResponse).message).toBe( 'Invalid or expired password reset token.' )})});
<<<<<<< HEAD
>>>>>>> d0b4cabda824e2db66cecb53192832d7e749a326
=======
>>>>>>> 10f43844f89f81084ca8fdce546c59c985174e68
<<<<<<< HEAD
=======
import { createMocks, RequestMethod } from 'node-mocks-http'
import type { NextApiRequest, NextApiResponse } from 'next'
import handler from '@/pages/api/auth/reset'
import { describe, it, expect, vi } from 'vitest'
describe('/api/auth/reset token validation'
  it('returns 400 if token is missing'
      "method"
>>>>>>> c56320a4e91ebfd91859a6eed8c13818d8c9efd6
=======
>>>>>>> main
>>>>>>> 8e2e4d4581f20cdfc8804c591c8c2f9544e58358
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
=======
  // TODO: Add a test case for a successful password reset if this file is to be comprehensive.
  // This would involve mocking Prisma calls within the handler:
  // - prisma.user.findFirst to find a user by a valid (hashed) token
  // - prisma.user.update to update the password and clear reset token fields
  // - (Potentially) supabase.auth.admin.updateUserById if Supabase auth password also needs update
});
>>>>>>> origin/cursor/automate-test-fix-improve-and-merge-code-7ff0
=======
>>>>>>> d0a9ec4ff3a15c755bf51b53a72e5129849de793
