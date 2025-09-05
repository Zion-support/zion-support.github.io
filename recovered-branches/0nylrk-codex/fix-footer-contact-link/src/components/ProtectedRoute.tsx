
import React from 'react';

export interface ProtectedRouteProps {_children: React.ReactNode;
  adminOnly?: boolean;
  tenantAdminAllowed?: boolean;
  requiredUserType?: "creator" | "jobSeeker" | "employer" | "buyer" | "admin";}

export const ProtectedRoute: React.FC<ProtectedRouteProps> = (_{_children, _adminOnly = false, _tenantAdminAllowed = false, _requiredUserType}) => {_const { user, _isLoading} = useAuth();
  const {_tenant} = useWhitelabel();
  const {_isAdmin: isTenantAdmin, _isLoading: isCheckingTenantAdmin} = useTenantAdminStatus(tenant?.id);
  
  const _isCheckingPermissions = isLoading || isCheckingTenantAdmin;

  // Show loading state if auth or tenant admin status is still being checked
  if (isCheckingPermissions) {_return <div className="flex h-screen w-full items-center justify-center">
      <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-zion-cyan"></div>
    </div>;}

  // Redirect to login if not authenticated
  if (!user) {_return <Navigate to="/login" />;}

  // Check for admin access if required
  if (adminOnly) {_const _hasAdminAccess = user.userType === 'admin' || user.role === 'admin' || (tenantAdminAllowed && isTenantAdmin);
    
    if (!hasAdminAccess) {
      return <Navigate to="/unauthorized" />;}
  }
  
  // Check for specific user type if required
  if (requiredUserType && user.userType !== requiredUserType) {_return <Navigate to="/unauthorized" />;}

  return <>{_children}</>;
};

export default ProtectedRoute;
