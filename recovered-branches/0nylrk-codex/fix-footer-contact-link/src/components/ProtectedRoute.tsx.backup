<<<<<<< HEAD

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
import React from 'react';

  adminOnly?: boolean;
  tenantAdminAllowed?: boolean;
  requiredUserType?: "creator" | "jobSeeker" | "employer" | "buyer" | "admin";
}

  children;

  adminOnly = false;

  children: React.ReactNode

import {Navigate} from 'react-router-dom';
import {useAuth} from '@/hooks/useAuth';
import {useTenantAdminStatus} from '@/hooks/useWhitelabelTenant';
import {useWhitelabel} from '@/context/WhitelabelContext';
export interface ProtectedRouteProps {
  children: React.ReactNode,;

  adminOnly?: boolean;
  tenantAdminAllowed?: boolean;
  requiredUserType?: "creator" | "jobSeeker" | "employer" | "buyer" | "admin"
}
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

export const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ ;
  children;
  adminOnly = false;

export const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ ;

  children;

  adminOnly = false;


export const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ ;
  children;
  adminOnly = false;
<<<<<<< HEAD



=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
import React from 'react',
import { Navigate } from 'react-router-dom',
import { useAuth } from '@/hooks/useAuth',
import { useTenantAdminStatus } from '@/hooks/useWhitelabelTenant',

import { useWhitelabel } from '@/context/WhitelabelContext',

  children: React.ReactNode,
  adminOnly?: boolean,
  tenantAdminAllowed?: boolean,"
  requiredUserType?: "creator" | "jobSeeker" | "employer" | "buyer" | "admin"
}

<<<<<<< HEAD

export const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ 
  children,
  adminOnly = false,
=======
>>>>>>> origin/cursor/delete-old-data-records-6bba

  tenantAdminAllowed = false,

  requiredUserType
}) => {

  const { user, isLoading } = useAuth(),
  const { tenant } = useWhitelabel(),
  const { isAdmin: isTenantAdmin, isLoading: isCheckingTenantAdmin } = useTenantAdminStatus(tenant?.id),

  const isCheckingPermissions = isLoading || isCheckingTenantAdmin;


<<<<<<< HEAD



=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
  // Show loading state if auth or tenant admin status is still being checked
  if (isCheckingPermissions) {
    return <div className="flex h-screen w-full items-center justify-center">

      <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-zion-cyan"></div>
    </div>
  }
  // Redirect to login if not authenticated;
  if (!user) {"
    return <Navigate to="/login" />
  }
  // Check for admin access if required;
  if (adminOnly) {'
    const hasAdminAccess = user.userType === 'admin' |user.role === 'admin' |(tenantAdminAllowed && isTenantAdmin);
    if (!hasAdminAccess) {"
      return <Navigate to="/unauthorized" />
    }
  }

    return <Navigate to="/unauthorized" />


<<<<<<< HEAD
=======
  }
  return <>{children}</>
}
export default ProtectedRoute;
>>>>>>> origin/cursor/delete-old-data-records-6bba


import React from 'react',;
import { Navigate } from 'react-router-dom',;
import { useAuth } from '@/hooks/useAuth',;
import { useTenantAdminStatus } from '@/hooks/useWhitelabelTenant',;

import { useWhitelabel } from '@/context/WhitelabelContext',;
export interface ProtectedRouteProps {;
  children: React.ReactNode,;
  adminOnly?: boolean,;

export const ProtectedRoute: React.FC<ProtectedRouteProps> = ({;
  children,;
  adminOnly = false,;

<<<<<<< HEAD


=======
import {use_auth} from '@/hooks / use_auth';
>>>>>>> origin/cursor/delete-old-data-records-6bba
import {useTenantAdminStatus} from '@/hooks / useWhitelabelTenant';

import {use_whitelabel} from '@/context / WhitelabelContext';
export interface ProtectedRouteProps {}
  children: React.ReactNode,;
  admin_only?: boolean;
  tenantAdminAllowed?: boolean;"
  requiredUserType?: "creator" | "job_seeker" | "employer" | "buyer" | "admin";
}
export const ProtectedRoute: React.FC < ProtectedRouteProps> = ({};
  children;
  admin_only = false;
  tenantAdminAllowed = false,
  requiredUserType;
}) => {}
  const { user, is_loading } = use_auth ();
  const { tenant } = use_whitelabel ();
  const { is_admin: isTenantAdmin, is_loading: isCheckingTenantAdmin } = useTenantAdminStatus (tenant?.id),
  const isCheckingPermissions = is_loading || isCheckingTenantAdmin;
;
  // Show loading state if auth or tenant admin status is still being checked;

    </div>;
  }
  // Redirect to login if not authenticated;
  // Check condition;
if ( {) {}
  $2;
}"
    return <Navigate to="/login" />;
  }
  // Check for admin access if required;
  // Check condition;
if ( {) {}
  $2;
}'
    const hasAdminAccess = user.user_type === 'admin' || user.role === 'admin' || (tenantAdminAllowed && isTenantAdmin);
;
    // Check condition;
if ( {) {}
  $2;
}"
      return <Navigate to="/unauthorized" />;
    }
  }
  // Check for specific user type if required;
  // Check condition;
if ( {) {}
  $2;
}"
    return <Navigate to="/unauthorized" />;
  }
  return <>{children}</>;
}
;
export default ProtectedRoute;
;

<<<<<<< HEAD

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba

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


=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
