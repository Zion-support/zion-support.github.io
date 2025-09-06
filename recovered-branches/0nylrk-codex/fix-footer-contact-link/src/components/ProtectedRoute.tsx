
<<<<<<< HEAD

>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======

import {Navigate} from 'react-router-dom';

export interface ProtectedRouteProps {
  children: React.ReactNode,;
import React from 'react';
  adminOnly?: boolean;
  tenantAdminAllowed?: boolean;
  requiredUserType?: "creator" | "jobSeeker" | "employer" | "buyer" | "admin";
}

export const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ ;

  children;

  adminOnly = false;

<<<<<<< HEAD
<<<<<<< HEAD

<<<<<<< HEAD
=======
import React from 'react';
import { Navigate  } from 'react-router-dom';
import { useAuth  } from '@/hooks/useAuth';
import { useTenantAdminStatus  } from '@/hooks/useWhitelabelTenant';
import { useWhitelabel } from '@/context/WhitelabelContext';
export interface ProtectedRouteProps {

  children: React.ReactNode

import {Navigate} from 'react-router-dom';
import {useAuth} from '@/hooks/useAuth';
import {useTenantAdminStatus} from '@/hooks/useWhitelabelTenant';
import {useWhitelabel} from '@/context/WhitelabelContext';
export interface ProtectedRouteProps {
  children: React.ReactNode,;
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
  adminOnly?: boolean;
  tenantAdminAllowed?: boolean;
  requiredUserType?: "creator" | "jobSeeker" | "employer" | "buyer" | "admin"
}
export const ProtectedRoute: React.FC<ProtectedRouteProps> = ({
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
  children;

  adminOnly = false;
  tenantAdminAllowed = false
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
  requiredUserType
}) => {
  const { user, isLoading } = useAuth();
  const { tenant } = useWhitelabel();
  const { isAdmin: isTenantAdmin, isLoading: isCheckingTenantAdmin } = useTenantAdminStatus(tenant?.id)
  const isCheckingPermissions = isLoading |isCheckingTenantAdmin;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a

export const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ ;
  children;
  adminOnly = false;
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD

=======
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======

=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f

export const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ ;

  children;

  adminOnly = false;

export const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ ;
  children;
  adminOnly = false;

<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
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
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
  tenantAdminAllowed = false,
=======
  tenantAdminAllowed = false,
  requiredUserType
}) => {  tenantAdminAllowed = false,
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
  requiredUserType
}) => {  tenantAdminAllowed = false,
  requiredUserType
}) => {
  const { user, isLoading } = useAuth(),
  const { tenant } = useWhitelabel(),
  const { isAdmin: isTenantAdmin, isLoading: isCheckingTenantAdmin } = useTenantAdminStatus(tenant?.id),

  const isCheckingPermissions = isLoading || isCheckingTenantAdmin;

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
=======
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
  tenantAdminAllowed = false,
  requiredUserType
}) => {
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
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
<<<<<<< HEAD
<<<<<<< HEAD
    return <Navigate to="/unauthorized" />
<<<<<<< HEAD

<<<<<<< HEAD
=======
=======

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
  }
  return <>{children}</>
}
export default ProtectedRoute;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df

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
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
;
=======
    return <Navigate to="/unauthorized" />;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
    return <Navigate to="/unauthorized" />;
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
export const ProtectedRoute: React.FC<ProtectedRouteProps> = ({;
  children,;
  adminOnly = false,;
import {useTenantAdminStatus} from '@/hooks / useWhitelabelTenant';
import {use_whitelabel} from '@/context / WhitelabelContext';
export interface ProtectedRouteProps {
  children: React.ReactNode,
  admin_only?: boolean;
  tenantAdminAllowed?: boolean;
  requiredUserType?: "creator" | "job_seeker" | "employer" | "buyer" | "admin";
}
export const ProtectedRoute: React.FC < ProtectedRouteProps> = ({
  children;
  admin_only = false;
  tenantAdminAllowed = false,
  requiredUserType;
}) => {
  const { user, is_loading } = use_auth ();
  const { tenant } = use_whitelabel ();
  const { is_admin: isTenantAdmin, is_loading: isCheckingTenantAdmin } = useTenantAdminStatus (tenant?.id),
  const isCheckingPermissions = is_loading || isCheckingTenantAdmin;
;
  // Show loading state if auth or tenant admin status is still being checked;
  // Check condition
if ( {) {
  $2
}
    return <div className="flex h - screen w - full items - center justify-center">;
      <div className="animate - spin rounded - full h - 12 w - 12 border - t-2 border - b-2 border - zion-cyan"></div>;
    </div>;
  }
  // Redirect to login if not authenticated;
  // Check condition
if ( {) {
  $2
}
    return <Navigate to="/login" />;
  }
  // Check for admin access if required;
  // Check condition
if ( {) {
  $2
}
    const hasAdminAccess = user.user_type === 'admin' || user.role === 'admin' || (tenantAdminAllowed && isTenantAdmin);
;
    // Check condition
if ( {) {
  $2
}
      return <Navigate to="/unauthorized" />;
    }
  }
  // Check for specific user type if required;
  // Check condition
if ( {) {
  $2
}
    return <Navigate to="/unauthorized" />;
  }
  return <>{children}</>;
}
;
export default ProtectedRoute;
;
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
=======

import React from 'react',;
import { Navigate } from 'react-router-dom',;
import { useAuth } from '@/hooks/useAuth',;
import { useTenantAdminStatus } from '@/hooks/useWhitelabelTenant',;
import { useWhitelabel } from '@/context/WhitelabelContext',;
;
export interface ProtectedRouteProps {;
  children:React.ReactNode,;
  adminOnly?:boolean,;
  tenantAdminAllowed?:boolean,;
  requiredUserType?:"creator" | "jobSeeker" | "employer" | "buyer" | "admin";
}
;
export const ProtectedRoute:React.FC<ProtectedRouteProps> = ({ ;
  children,;
  adminOnly = false,;
  tenantAdminAllowed = false,;
  requiredUserType;
}) => {;
  const { user, isLoading } = useAuth(),;
  const { tenant } = useWhitelabel(),;
  const { isAdmin: isTenantAdmin, isLoading: isCheckingTenantAdmin } = useTenantAdminStatus(tenant?.id),;
  const isCheckingPermissions = isLoading || isCheckingTenantAdmin,;
  // Show loading state if auth or tenant admin status is still being checked;
  if (isCheckingPermissions) {;
    return <div className="flex h-screen w-full items-center justify-center">;
      <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-zion-cyan"></div>;
    </div>;
  }
;
  // Redirect to login if not authenticated;
  if (!user) {;
    return <Navigate to="/login" />;
  }
;
  // Check for admin access if required;
  if (adminOnly) {;
    const hasAdminAccess = user.userType === 'admin' || user.role === 'admin' || (tenantAdminAllowed && isTenantAdmin),;
    if (!hasAdminAccess) {;
      return <Navigate to="/unauthorized" />;
    }
  }
;
  // Check for specific user type if required;
  if (requiredUserType && user.userType !== requiredUserType) {;
    return <Navigate to="/unauthorized" />;
  }
;
  return <>{children}</>;
};
export default ProtectedRoute;
<<<<<<< HEAD
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
