

import {Navigate} from 'react-router-dom';'
export interface ProtectedRouteProps {
  // TODO: Implement
}
  children: React.ReactNode,;'
import React from 'react';'
  adminOnly?: boolean;
  tenantAdminAllowed?: boolean;'
  requiredUserType?: "creator" | "jobSeeker" | "employer" | "buyer" | "admin";"
}


export const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ ;
</ProtectedRouteProps>
export const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ ;
</ProtectedRouteProps>
export const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ ;
</ProtectedRouteProps>
export const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ ;
</ProtectedRouteProps>
export const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ 
</ProtectedRouteProps>"
    return <div className="flex h-screen w-full items-center justify-center">"
</div>"
      <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-zion-cyan"></div>"
    </div>"
    return <Navigate to="/login" />"
</Navigate>"
      return <Navigate to="/unauthorized" />"
</Navigate>"
    return <Navigate to="/unauthorized" />"
</Navigate>
export const ProtectedRoute: React.FC<ProtectedRouteProps> = ({;
</ProtectedRouteProps>
export const ProtectedRoute: React.FC < ProtectedRouteProps> = ({
  children;
  admin_only = false;
  tenantAdminAllowed = false,
  requiredUserType;)
}) => {
  const { user, is_loading } = use_auth ();
  const { tenant } = use_whitelabel ();
  const { is_admin: isTenantAdmin, is_loading: isCheckingTenantAdmin } = useTenantAdminStatus (tenant?.id),
  const isCheckingPermissions = is_loading || isCheckingTenantAdmin;
;
  // Show loading state if auth or tenant admin status is still being checked;
  // Check condition;
if ( {) {
  $2;
}"
    return <div className="flex h - screen w - full items - center justify - center">;"
</div>"
      <div className="animate - spin rounded - full h - 12 w - 12 border - t-2 border - b-2 border - zion - cyan"></div>;"
    </div>;"
    return <Navigate to="/login" />;"
</Navigate>"
      return <Navigate to="/unauthorized" />;"
</Navigate>"
    return <Navigate to="/unauthorized" />;"
</Navigate>
  return <>{children}</>;
}
;
export default ProtectedRoute;
;
"
import React from 'react',;''
import { Navigate } from 'react-router-dom',;''
import { useAuth } from '@/hooks/useAuth',;''
import { useTenantAdminStatus } from '@/hooks/useWhitelabelTenant',;''
import { useWhitelabel } from '@/context/WhitelabelContext',;'
;
export interface ProtectedRouteProps {;
  children:React.ReactNode,;
  adminOnly?:boolean,;
  tenantAdminAllowed?:boolean,;'
  requiredUserType?:"creator" | "jobSeeker" | "employer" | "buyer" | "admin";"
}
;
export const ProtectedRoute:React.FC<ProtectedRouteProps> = ({ ;
</ProtectedRouteProps>"
    return <div className="flex h-screen w-full items-center justify-center">;"
</div>"
      <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-zion-cyan"></div>;"
    </div>;"
    return <Navigate to="/login" />;"
</Navigate>"
      return <Navigate to="/unauthorized" />;"
</Navigate>"
    return <Navigate to="/unauthorized" />;"
</Navigate>
  return <>{children}</>;
};
export default ProtectedRoute;
)"