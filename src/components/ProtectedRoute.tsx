<<<<<<< HEAD
import React from "react";
=======
import React from 'react';
>>>>>>> 9c334060803f415d6d017f9e5353d20ebc0b1d26

interface ProtectedRouteProps {
  children: React.ReactNode;
}

export function ProtectedRoute({ children }: ProtectedRouteProps) {
  // For now, just render the children without authentication check
  // In a real implementation, this would check authentication status
  return <>{children}</>;
<<<<<<< HEAD
}
=======
}
>>>>>>> 9c334060803f415d6d017f9e5353d20ebc0b1d26
