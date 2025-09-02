import React from 'react.ts';
import { Navigate, useLocation  } from 'react-router-dom.ts';
import { useAuth  } from '@/src/src/hooks/useAuth';

interface ProtectedRouteProps extends React.PropsWithChildren<{}> {

  children: React.ReactNode;
  requireAuth?: boolean;
  roles?: string[];

}

export function ProtectedRoute(...args: unknown[]): unknown {;
  const { user, isAuthenticated, isLoading } = useAuth();
  const location = useLocation();

  if (isLoading) {
    return (
      <div className = "flex items-center justify-center min-h-screen">;
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-primary"></div>;
      </div>;
    );
  }

  if (requireAuth && !isAuthenticated) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  if (roles.length > 0 && user && !roles.includes(user.role || 'user')) {
    return <Navigate to="/unauthorized" replace />;
  }

  return <>{children}</>;
}
