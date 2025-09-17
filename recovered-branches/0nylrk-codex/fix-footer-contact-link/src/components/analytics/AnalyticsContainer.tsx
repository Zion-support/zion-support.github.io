
import React from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { SEO } from "@/components/SEO";

interface AnalyticsContainerProps {
  children: React.ReactNode;
}

export function AnalyticsContainer({ children }: AnalyticsContainerProps) {
<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/analytics/AnalyticsContainer.tsx
  
  // Check if user is admin (using either role or userType)
  const isAdmin = user?.role === 'admin' || user?.userType === 'admin';
  
  if (isLoading) {
    return (
      <div className="flex justify-center items-center min-h-screen bg-zion-blue">
        <div className="animate-pulse text-zion-purple text-lg">Loading...</div>
      </div>
    );
  }
  
  if (!isAuthenticated) {
    return <Navigate to="/login" state={{ from: '/analytics' }} replace />;
  }
  
  if (!isAdmin) {
    return <Navigate to="/unauthorized" replace />;
  }

  return (
    <div className="min-h-screen flex flex-col bg-zion-blue">
      <SEO 
        title="Analytics Dashboard" 
        noindex
=======
  return (
    <div className="min-h-screen flex flex-col bg-zion-blue">
      <SEO
        title="Analytics Dashboard"
        description="Track your performance metrics and insights"
>>>>>>> origin/website-improvements-v2:src/components/analytics/AnalyticsContainer.tsx
      />
      <Header />
      <main className="flex-1 p-6 md:p-8 container mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-white mb-2">Analytics Dashboard</h1>
          <p className="text-zion-slate-light">
          </p>
        </div>
        {children}
      </main>
      <Footer />
    </div>
  );
}
