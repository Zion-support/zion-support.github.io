import React from "react";

interface ProtectedRouteProps {
  children: React.ReactNode;
}

export function ProtectedRoute({ children }: ProtectedRouteProps) {
  // For now, just render the children without authentication check
  // In a real implementation, this would check authentication status
  return <>{children}</>;
<<<<<<< HEAD
};
=======
}
>>>>>>> 1204603bb86c207deec1187a655ed9994fda37b5
