// Define expected response structure for error messages
interface ErrorResponse {/* content */}
  message: string
  // Add other fields if your API returns more details on error
}
// Define expected success response (if applicable, though this test focuses on errors)
// interface SuccessResponse {/* content */}
    // Cast to the specific NextApi types for the handler
    await handler(
      req as unknown as NextApiRequest
      res as unknown as NextApiResponse
  </div>
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

  // TODO: Add a test case for a successful password reset if this file is to be comprehensive.
  // This would involve mocking Prisma calls within the handler:
  // - prisma.user.findFirst to find a user by a valid (hashed) token
  // - prisma.user.update to update the password and clear reset token fields
  // - (Potentially) supabase.auth.admin.updateUserById if Supabase auth password also needs update



