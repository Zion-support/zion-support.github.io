import React from "react";
<<<<<<< HEAD
import { useAuth } from "@/hooks/useAuth";
=======
>>>>>>> 8c478e615056772e765dbc204462fa984d447432

interface ProtectedRouteProps {
  children: React.ReactNode;
}

<<<<<<< HEAD
export const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ 
  children, 
  fallback = <div>Please log in to access this page.</div> 
}) => {
  const { user, loading } = useAuth();

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!user) {
    return <>{fallback}</>;
  }

  return <>{children}</>;
};
=======
export function ProtectedRoute({ children }: ProtectedRouteProps) {
  // For now, just render the children without authentication check
  // In a real implementation, this would check authentication status
  return <>{children}</>;
}
>>>>>>> 8c478e615056772e765dbc204462fa984d447432
