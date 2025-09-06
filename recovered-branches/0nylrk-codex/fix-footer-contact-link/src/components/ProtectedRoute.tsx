
import React from 'react';
<<<<<<< HEAD
import { Navigate  } from 'react-router-dom';
import { useAuth  } from '@/hooks/useAuth';
import { useTenantAdminStatus  } from '@/hooks/useWhitelabelTenant';
import { useWhitelabel } from '@/context/WhitelabelContext';
export interface ProtectedRouteProps {


<<<<<<< HEAD
=======
=======
>>>>>>> 6ec30c26c0294cd39ef2c2dddb0e1600b3891ed1
import {Navigate} from 'react-router-dom';

export interface ProtectedRouteProps {
  children: React.ReactNode,;
<<<<<<< HEAD
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
=======




import {Navigate} from 'react-router-dom';

export interface ProtectedRouteProps {
  children: React.ReactNode,;


>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> 6ec30c26c0294cd39ef2c2dddb0e1600b3891ed1
  adminOnly?: boolean;
  tenantAdminAllowed?: boolean;
  requiredUserType?: "creator" | "jobSeeker" | "employer" | "buyer" | "admin";
}
<<<<<<< HEAD
export const ProtectedRoute: React.FC<ProtectedRouteProps> = ({
  children;

  adminOnly = false;
  tenantAdminAllowed = false
  requiredUserType
}) => {
  const { user, isLoading } = useAuth();
  const { tenant } = useWhitelabel();
  const { isAdmin: isTenantAdmin, isLoading: isCheckingTenantAdmin } = useTenantAdminStatus(tenant?.id)
  const isCheckingPermissions = isLoading |isCheckingTenantAdmin;
<<<<<<< HEAD
=======
=======
>>>>>>> 6ec30c26c0294cd39ef2c2dddb0e1600b3891ed1

export const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ ;
  children;
  adminOnly = false;
<<<<<<< HEAD
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
>>>>>>> 6ec30c26c0294cd39ef2c2dddb0e1600b3891ed1
=======


export const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ ;

  children;

  adminOnly = false;



export const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ ;
  children;
  adminOnly = false;

=======
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
import React from 'react',
import { Navigate } from 'react-router-dom',
import { useAuth } from '@/hooks/useAuth',
import { useTenantAdminStatus } from '@/hooks/useWhitelabelTenant',
import { useWhitelabel } from '@/context/WhitelabelContext',
export interface ProtectedRouteProps {
  children: React.ReactNode,
  adminOnly?: boolean,
  tenantAdminAllowed?: boolean,
  requiredUserType?: "creator" | "jobSeeker" | "employer" | "buyer" | "admin"
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
  
  const isCheckingPermissions = isLoading || isCheckingTenantAdmin;

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
  }
  return <>{children}</>
}
export default ProtectedRoute;

import React from 'react',;
import { Navigate } from 'react-router-dom',;
import { useAuth } from '@/hooks/useAuth',;
import { useTenantAdminStatus } from '@/hooks/useWhitelabelTenant',;
import { useWhitelabel } from '@/context/WhitelabelContext',;
export interface ProtectedRouteProps {;
  children: React.ReactNode,;
  adminOnly?: boolean,;
  tenantAdminAllowed?: boolean,;
  requiredUserType?: "creator" | "jobSeeker" | "employer" | "buyer" | "admin";
}
;
export const ProtectedRoute: React.FC<ProtectedRouteProps> = ({;
  children,;
  adminOnly = false,;

  tenantAdminAllowed = false,;
  requiredUserType;
}) => {;
  const { user, isLoading } = useAuth();
  const { tenant } = useWhitelabel();
  const { isAdmin: isTenantAdmin, isLoading: isCheckingTenantAdmin } = useTenantAdminStatus(tenant?.id),;

  const isCheckingPermissions = isLoading || isCheckingTenantAdmin;

  // Show loading state if auth or tenant admin status is still being checked;
  if (isCheckingPermissions) {;
    return <div className="flex h-screen w-full items-center justify-center">;
      <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-zion-cyan"></div>;
    </div>;
  }

  // Redirect to login if not authenticated;
  if (!user) {;
    return <Navigate to="/login" />;
  }

  // Check for admin access if required;
  if (adminOnly) {;
    const hasAdminAccess = user && user.userType === 'admin' || user && user.role === 'admin' || (tenantAdminAllowed && isTenantAdmin);

    if (!hasAdminAccess) {;
      return <Navigate to="/unauthorized" />;
    }
  }

  // Check for specific user type if required;
  if (requiredUserType && user && user.userType !== requiredUserType) {;
    return <Navigate to="/unauthorized" />;
  }

  return <>{children}</>;
};
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======



>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> 6ec30c26c0294cd39ef2c2dddb0e1600b3891ed1
export default ProtectedRoute;
