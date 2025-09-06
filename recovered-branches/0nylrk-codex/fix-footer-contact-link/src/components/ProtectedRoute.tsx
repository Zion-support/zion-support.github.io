

  adminOnly?: boolean;
  tenantAdminAllowed?: boolean;
  requiredUserType?: "creator" | "jobSeeker" | "employer" | "buyer" | "admin";
}

  tenantAdminAllowed = false,
  requiredUserType
}) => {
  const { user, isLoading } = useAuth(),
  const { tenant } = useWhitelabel(),
  const { isAdmin: isTenantAdmin, isLoading: isCheckingTenantAdmin } = useTenantAdminStatus(tenant?.id),

  const isCheckingPermissions = isLoading || isCheckingTenantAdmin;

=======
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
  // Show loading state if auth or tenant admin status is still being checked
  if (isCheckingPermissions) {
    return <div className="flex h-screen w-full items-center justify-center">
      <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-zion-cyan"></div>
    </div>
  }
  // Redirect to login if not authenticated
  if (!user) {
    return <Navigate to="/login" />
  }
  // Check for admin access if required
  if (adminOnly) {
    const hasAdminAccess = user.userType === 'admin' |user.role === 'admin' |(tenantAdminAllowed && isTenantAdmin);
    if (!hasAdminAccess) {
      return <Navigate to="/unauthorized" />
    }
  }
  // Check for specific user type if required
  if (requiredUserType && user.userType !== requiredUserType) {
    return <Navigate to="/unauthorized" />

<<<<<<< HEAD
export default ProtectedRoute;
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
