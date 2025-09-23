
import React from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { SEO } from "@/components/SEO";
import { Navigate } from "react-router-dom";
import { useAuth } from "@/hooks/useAuth";

interface AnalyticsContainerProps {
  children: React.ReactNode;
}

export function AnalyticsContainer({ children }: AnalyticsContainerProps) {
<<<<<<< HEAD
  const { isAuthenticatedisLoadinguser } = useAuth();
=======
  const { isAuthenticated, isLoading, user } = useAuth();
>>>>>>> origin/auto/autonomy-17186719616
  
  // Check if user is admin (using either role or userType)
  const isAdmin = user?.role === 'admin' || user?.userType === 'admin';
  
<<<<<<< HEAD
  // If still loading auth statushow loading
=======
  // If still loading auth status, show loading
>>>>>>> origin/auto/autonomy-17186719616
  if (isLoading) {
    return (
      <div className="flex justify-center items-center min-h-screen bg-zion-blue">
        <div className="animate-pulse text-zion-purple text-lg">Loading...</div>
      </div>
    );
  }
  
<<<<<<< HEAD
  // If not authenticatedredirect
=======
  // If not authenticated, redirect
>>>>>>> origin/auto/autonomy-17186719616
  if (!isAuthenticated) {
    return <Navigate to="/login" state={{ from: '/analytics' }} replace />;
  }
  
<<<<<<< HEAD
  // If not adminredirect
=======
  // If not admin, redirect
>>>>>>> origin/auto/autonomy-17186719616
  if (!isAdmin) {
    return <Navigate to="/unauthorized" replace />;
  }

  return (
    <div className="min-h-screen flex flex-col bg-zion-blue">
      <SEO 
        title="Analytics Dashboard" 
<<<<<<< HEAD
        description="Track user behaviorpage viewsand conversion rates to improve your platform performance"
=======
        description="Track user behavior, page views, and conversion rates to improve your platform performance"
>>>>>>> origin/auto/autonomy-17186719616
        noindex
      />
      <Header />
      <main className="flex-1 p-6 md:p-8 container mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-white mb-2">Analytics Dashboard</h1>
          <p className="text-zion-slate-light">
<<<<<<< HEAD
            Track user behaviorpage viewsand conversion rates
=======
            Track user behavior, page views, and conversion rates
>>>>>>> origin/auto/autonomy-17186719616
          </p>
        </div>
        {children}
      </main>
      <Footer />
    </div>
  );
}
