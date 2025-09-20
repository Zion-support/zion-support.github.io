<<<<<<< HEAD
import React from "react";
import { useAuth } from "@/hooks/useAuth";

interface ProtectedRouteProps {
children: React.ReactNode;
}

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

return <>{children}</>
}
=======
import { Navigate,useLocation  } from "react-router-dom",
import { Navigate,useLocation } from &apos;react-router-dom&apos,&apos,&apos;
import { Navigate,useLocation } from "react-router-dom",", ";
>>>>>>> cursor/fix-netlify-build-and-merge-to-main-a97e
