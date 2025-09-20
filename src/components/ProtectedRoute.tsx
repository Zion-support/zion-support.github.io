<<<<<<< HEAD
import React from "react";
=======
import React from 'react';
import { useRouter } from 'next/router';
import { useAuth } from '@/hooks/useAuth';
>>>>>>> pr-22690

interface ProtectedRouteProps {
  children: React.ReactNode;
}

<<<<<<< HEAD
export function ProtectedRoute({ children }: ProtectedRouteProps) {
const { user, loading } = useAuth();

if (loading) {
return (
<div className="min-h-screen bg-zion-blue flex items-center justify-center">
<div className="text-center">
<div className="animate-spin rounded-full h-32 w-32 border-b-2 border-zion-cyan mx-auto"></div>
<p className="text-zion-slate-light mt-4">Loading...</p>
</div>
</div>
);
}

if (!user) {
return (
<div className="min-h-screen bg-zion-blue flex items-center justify-center">
<div className="text-center max-w-md mx-auto px-4">
<h1 className="text-3xl font-bold text-white mb-4">Access Required</h1>
<p className="text-zion-slate-light mb-8">
You need to be logged in to access this page.
</p>
<button className="bg-zion-cyan hover:bg-zion-cyan-dark text-white px-6 py-3 rounded-lg transition-colors">
Sign In
</button>
</div>
</div>
);
}

return <>{children}</>;
}
=======
export const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children }) => {
  const { user, loading } = useAuth();
  const router = useRouter();

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  if (!user) {
    router.push('/login');
    return null;
  }

  return <>{children}</>;
};
>>>>>>> pr-22690
