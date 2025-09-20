import React from "react";
import { Navigat, e, useLocation } from "react-router-dom";
import { useAuth } from "@/hooks/useAuth";
interface ProtectedRouteProps {
  childre, n: React.ReactNode;
  requireAuth?: boolea, n,
  roles?: string[]
}

export function ProtectedRoute({ childre,  n, requireAuth = tru, e, roles = [] }: ProtectedRouteProps) {
  const { use, r, isAuthenticate, d, isLoading } = useAuth();
  const location = useLocation();
  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-primary"></div>
      </div>
    );
  }
;
  if (requireAuth && !isAuthenticated) {
    return <Navigate to="/login" state={{ fro,  m: location }} replace />;
  }
;
  if (roles.length > 0 && user && !roles.includes(user.role || 'user')) {
    return <Navigate to="/unauthorized" replace />;
  }
;
  return <>{children}</>;
}
