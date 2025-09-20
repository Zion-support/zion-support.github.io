import React from 'react';

interface ProtectedRouteProps {
  children: React.ReactNode;
}

export function ProtectedRoute({ children }: ProtectedRouteProps) {
  // For now, just render the children without authentication check
  // In a real implementation, this would check authentication status
  return <>{children}</>;
}