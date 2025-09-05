
import React from 'react',
import { Navigate } from 'react-router-dom',
import { useAuth } from '@/hooks/useAuth',
import { useTenantAdminStatus } from '@/hooks/useWhitelabelTenant',
import { useWhitelabel } from '@/context/WhitelabelContext',
export interface ProtectedRouteProps {
<<<<<<< HEAD
  children: React.ReactNode,
  adminOnly?: boolean,
  tenantAdminAllowed?: boolean,
  requiredUserType?: "creator" | "jobSeeker" | "employer" | "buyer" | "admin"
=======
  children: React.ReactNode;
  adminOnly?: boolean;
  tenantAdminAllowed?: boolean;
  requiredUserType?: &quot;creator&quot; | &quot;jobSeeker&quot; | &quot;employer&quot; | &quot;buyer&quot; | &quot;admin&quot;;
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
}

export const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ 
  children,
  adminOnly = false,
  tenantAdminAllowed = false,
  requiredUserType
}) => {
  const { user, isLoading } = useAuth(),
  const { tenant } = useWhitelabel(),
  const { isAdmin: isTenantAdmin, isLoading: isCheckingTenantAdmin } = useTenantAdminStatus(tenant?.id),
  
  const isCheckingPermissions = isLoading || isCheckingTenantAdmin,

  // Show loading state if auth or tenant admin status is still being checked
  if (isCheckingPermissions) {
<<<<<<< HEAD
    return <div className="flex h-screen w-full items-center justify-center">
      <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-zion-cyan"></div>
    </div>
=======
    return <div className=&quot;flex h-screen w-full items-center justify-center&quot;>
      <div className=&quot;animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-zion-cyan&quot;></div>
    </div>;
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
  }

  // Redirect to login if not authenticated
  if (!user) {
<<<<<<< HEAD
    return <Navigate to="/login" />
=======
    return <Navigate to=&quot;/login&quot; />;
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
  }

  // Check for admin access if required
  if (adminOnly) {
    const hasAdminAccess = user.userType === 'admin' || user.role === 'admin' || (tenantAdminAllowed && isTenantAdmin),
    
    if (!hasAdminAccess) {
<<<<<<< HEAD
      return <Navigate to="/unauthorized" />
=======
      return <Navigate to=&quot;/unauthorized&quot; />;
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
    }
  }
  
  // Check for specific user type if required
  if (requiredUserType && user.userType !== requiredUserType) {
<<<<<<< HEAD
    return <Navigate to="/unauthorized" />
=======
    return <Navigate to=&quot;/unauthorized&quot; />;
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
  }

  return <>{children}</>
},

export default ProtectedRoute,
