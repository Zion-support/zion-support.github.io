
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
  const { isAuthenticated, isLoading, user } = useAuth();
=======
  const { isAuthenticatedisLoadinguser } = useAuth();
>>>>>>> origin/cursor/check-fix-push-and-merge-to-main-2982
  
  // Check if user is admin (using either role or userType)
  const isAdmin = user?.role === 'admin' || user?.userType === 'admin';
  
<<<<<<< HEAD
  // If still loading auth status, show loading
=======
  // If still loading auth statushow loading
>>>>>>> origin/cursor/check-fix-push-and-merge-to-main-2982
  if (isLoading) {
    return (
      <div className="flex justify-center items-center min-h-screen bg-zion-blue">
        <div className="animate-pulse text-zion-purple text-lg">Loading...</div>
      </div>
    );
  }
  
<<<<<<< HEAD
  // If not authenticated, redirect
=======
  // If not authenticatedredirect
>>>>>>> origin/cursor/check-fix-push-and-merge-to-main-2982
  if (!isAuthenticated) {
    return <Navigate to="/login" state={{ from: '/analytics' }} replace />;
  }
  
<<<<<<< HEAD
  // If not admin, redirect
=======
  // If not adminredirect
>>>>>>> origin/cursor/check-fix-push-and-merge-to-main-2982
  if (!isAdmin) {
    return <Navigate to="/unauthorized" replace />;
  }

  return (
    <div className="min-h-screen flex flex-col bg-zion-blue">
      <SEO 
        title="Analytics Dashboard" 
<<<<<<< HEAD
        description="Track user behavior, page views, and conversion rates to improve your platform performance"
=======
        description="Track user behaviorpage viewsand conversion rates to improve your platform performance"
>>>>>>> origin/cursor/check-fix-push-and-merge-to-main-2982
        noindex
      />
      <Header />
      <main className="flex-1 p-6 md:p-8 container mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-white mb-2">Analytics Dashboard</h1>
          <p className="text-zion-slate-light">
<<<<<<< HEAD
            Track user behavior, page views, and conversion rates
=======
            Track user behaviorpage viewsand conversion rates
>>>>>>> origin/cursor/check-fix-push-and-merge-to-main-2982
          </p>
        </div>
        {children}
      </main>
      <Footer />
    </div>
  );
}
