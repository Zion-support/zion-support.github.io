import { Navigate, useLocation } from "react-router-dom";
import { useAuthContext } from "@/context/AuthContext";
import { useEffect, useState } from "react";

interface ProtectedRouteProps {
  children: React.ReactNode;
}

export function ProtectedRoute({ children }: ProtectedRouteProps) {
<<<<<<< HEAD
  const [isClient, setIsClient] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setIsClient(true);
  }, []);

  // During SSR/build time, just render children
  if (!isClient) {
    return <>{children}</>;
  }

  try {
    const { user, loading } = useAuthContext();

    if (loading) {
      return (
        <div className="min-h-screen flex items-center justify-center">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-600"></div>
        </div>
      );
    }

    if (!user) {
      return <Navigate to="/login" state={{ from: location }} replace />;
    }

    return <>{children}</>;
  } catch (error) {
    // If context is not available, just render children
    return <>{children}</>;
  }
}

export default ProtectedRoute;
=======
  // For now, just render the children without authentication check
  // In a real implementation, this would check authentication status
  return <>{children}</>;
<<<<<<< HEAD
};
=======
}
>>>>>>> 1204603bb86c207deec1187a655ed9994fda37b5
>>>>>>> fa217cbfb4549abecf73c2d4ba24f5825051d65e
