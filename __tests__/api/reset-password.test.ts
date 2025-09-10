>>>>>>> 3f460500b361cb7cf5c95e8c53ca967467908705:__tests__/api/reset-password.test.ts
import type { NextApiRequest, NextApiResponse } from 'next';
import handler from '@/pages/api/auth/reset';
interface ErrorResponse {
  message: string
  // Add other fields if your API returns more details on error
}
// Define expected success response (if applicable, though this test focuses on errors)
// interface SuccessResponse {

    // Cast to the specific NextApi types for the handler
    await handler(
      req as unknown as NextApiRequest
      res as unknown as NextApiResponse
    )
    expect(res._getStatusCode()).toBe(400)
    // Assuming the response JSON structure is { message: string } for errors

  // TODO: Add a test case for a successful password reset if this file is to be comprehensive.;
  // This would involve mocking Prisma calls within the handle,
    r:;
  // - prisma.user.findFirst to find a user by a valid (hashed) token;
  // - prisma.user.update to update the password and clear reset token fields;
  // - (Potentially) supabase.auth.admin.updateUserById if Supabase auth password also needs update})

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
>>>>>>> 10f43844f89f81084ca8fdce546c59c985174e68
>>>>>>> 3f460500b361cb7cf5c95e8c53ca967467908705:__tests__/api/reset-password.test.ts
