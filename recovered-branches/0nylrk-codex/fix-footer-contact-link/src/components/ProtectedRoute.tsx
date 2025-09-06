
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/ProtectedRoute.tsx

=======

import React from 'react';




import {Navigate} from 'react-router-dom';

export interface ProtectedRouteProps {
  children: React.ReactNode,;


>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
  adminOnly?: boolean;
  tenantAdminAllowed?: boolean;
  requiredUserType?: "creator" | "jobSeeker" | "employer" | "buyer" | "admin";
}
<<<<<<< HEAD

=======


export const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ ;

  children;

  adminOnly = false;


=======
import React from 'react';
<<<<<<< HEAD
import { Navigate  } from 'react-router-dom';
import { useAuth  } from '@/hooks/useAuth';
import { useTenantAdminStatus  } from '@/hooks/useWhitelabelTenant';
import { useWhitelabel } from '@/context/WhitelabelContext';
export interface ProtectedRouteProps {

  children: React.ReactNode

=======
import {Navigate} from 'react-router-dom';
import {useAuth} from '@/hooks/useAuth';
import {useTenantAdminStatus} from '@/hooks/useWhitelabelTenant';
import {useWhitelabel} from '@/context/WhitelabelContext';
export interface ProtectedRouteProps {
  children: React.ReactNode,;
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
  adminOnly?: boolean;
  tenantAdminAllowed?: boolean;
  requiredUserType?: "creator" | "jobSeeker" | "employer" | "buyer" | "admin"
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
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7

export const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ ;
  children;
  adminOnly = false;
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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

=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
  tenantAdminAllowed = false,
  requiredUserType
}) => {
  const { user, isLoading } = useAuth(),
  const { tenant } = useWhitelabel(),
  const { isAdmin: isTenantAdmin, isLoading: isCheckingTenantAdmin } = useTenantAdminStatus(tenant?.id),
  
  const isCheckingPermissions = isLoading || isCheckingTenantAdmin;

<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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
<<<<<<< HEAD

export default ProtectedRoute;

=======

=======

=======
  }
  return <>{children}</>
}
export default ProtectedRoute;

=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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
<<<<<<< HEAD

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



export default ProtectedRoute;

=======
========
import React from 'react';
import {Navigate} from 'react-router-dom';
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/ProtectedRoute.tsx
import {use_auth} from '@/hooks / use_auth';
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
    return <div className="flex h - screen w - full items - center justify - center">;
      <div className="animate - spin rounded - full h - 12 w - 12 border - t-2 border - b-2 border - zion - cyan"></div>;
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
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/ProtectedRoute.tsx
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
========
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
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
  tenantAdminAllowed = false,;
  requiredUserType;
}) => {;
  const { user, isLoading } = useAuth(),;
  const { tenant } = useWhitelabel(),;
<<<<<<< HEAD
  const { isAdmin:isTenantAdmin, isLoading:isCheckingTenantAdmin } = useTenantAdminStatus(tenant?.id),;
  ;
  const isCheckingPermissions = isLoading || isCheckingTenantAdmin,;
;
=======
  const { isAdmin: isTenantAdmin, isLoading: isCheckingTenantAdmin } = useTenantAdminStatus(tenant?.id),;
  const isCheckingPermissions = isLoading || isCheckingTenantAdmin,;
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
  // Show loading state if auth or tenant admin status is still being checked;
  if (isCheckingPermissions) {;
    return <div className="flex h-screen w-full items-center justify-center">;
      <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-zion-cyan"></div>;
<<<<<<< HEAD
    </div>,;
=======
    </div>;
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
  }
;
  // Redirect to login if not authenticated;
  if (!user) {;
<<<<<<< HEAD
    return <Navigate to="/login" />,;
=======
    return <Navigate to="/login" />;
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
  }
;
  // Check for admin access if required;
  if (adminOnly) {;
    const hasAdminAccess = user.userType === 'admin' || user.role === 'admin' || (tenantAdminAllowed && isTenantAdmin),;
<<<<<<< HEAD
    ;
    if (!hasAdminAccess) {;
      return <Navigate to="/unauthorized" />,;
    }
  }
  ;
  // Check for specific user type if required;
  if (requiredUserType && user.userType !== requiredUserType) {;
    return <Navigate to="/unauthorized" />,;
  }
;
  return <>{children}</>,;
},;
;
export default ProtectedRoute,;}) => {
  const {
  user, isLoading 
}= useAuth ();
const {
  tenant 
}= useWhitelabel ();
const {
  isAdmin: isTenantAdmin, isLoading: isCheckingTenantAdmin 
}= useTenantAdminStatus (tenant?.id);
const isCheckingPermissions = isLoading || isCheckingTenantAdmin;
//Show loading state if auth or tenant admin status is still being checked if (isCheckingPermissions) {
  
  const isCheckingPermissions = isLoading || isCheckingTenantAdmin,

  // Show loading state if auth or tenant admin status is still being checked
  if (isCheckingPermissions) {
    return <div className="flex h-screen w-full items-center justify-center">
      <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-zion-cyan"></div>
    </div>  }

  // Redirect to login if not authenticated
  if (!user) {
    return <Navigate to="/login" />  }

  // Check for admin access if required
  if (adminOnly) {
    const hasAdminAccess = user.userType === 'admin' || user.role === 'admin' || (tenantAdminAllowed && isTenantAdmin),
    
    if (!hasAdminAccess) {
      return <Navigate to="/unauthorized" />    }
  }
  
  // Check for specific user type if required
  if (requiredUserType && user.userType !== requiredUserType) {
    return <Navigate to="/unauthorized" />  }

  return <>{children}</>
},
import React from 'react';

export interface ProtectedRouteProps {_children: React.ReactNode;
  adminOnly?: boolean;
  tenantAdminAllowed?: boolean;
  requiredUserType?: "creator" | "jobSeeker" | "employer" | "buyer" | "admin";}

export const ProtectedRoute: React.FC<ProtectedRouteProps> = (_{_children, _adminOnly = false, _tenantAdminAllowed = false, _requiredUserType}) => {_const { user, _isLoading} = useAuth();
  const {_tenant} = useWhitelabel();
  const {_isAdmin: isTenantAdmin, _isLoading: isCheckingTenantAdmin} = useTenantAdminStatus(tenant?.id);  
}
}//Check for specific user type if required if (requiredUserType && user.userType !== requiredUserType) {
  
}return <> {
  children 
}</> 
};

export default ProtectedRoute,
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/ProtectedRoute.tsx
=======
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
<<<<<<< HEAD
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
export default ProtectedRoute;
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
