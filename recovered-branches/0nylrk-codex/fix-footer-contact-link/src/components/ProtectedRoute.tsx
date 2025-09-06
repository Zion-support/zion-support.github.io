
import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '@/hooks/useAuth';
import { useTenantAdminStatus } from '@/hooks/useWhitelabelTenant';
import { useWhitelabel } from '@/context/WhitelabelContext';
export interface ProtectedRouteProps {
  children: React.ReactNode,
  adminOnly?: boolean,
  tenantAdminAllowed?: boolean,
  requiredUserType?: "creator" | "jobSeeker" | "employer" | "buyer" | "admin"
}

export const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ 
  children,
  adminOnly = $2;
  tenantAdminAllowed = $2;
  requiredUserType
}) => {
  const { user, isLoading } = useAuth($2);
  const { tenant } = useWhitelabel($2);
  const { isAdmin: isTenantAdmin, isLoading: isCheckingTenantAdmin} = useTenantAdminStatus($2);
  const isCheckingPermissions = $2;
  // Show loading state if auth or tenant admin status is still being checked
  if (isCheckingPermissions) {
    return <div className = $2;
    if (!hasAdminAccess) {
      return <Navigate to = $2;
export default ProtectedRoute,
