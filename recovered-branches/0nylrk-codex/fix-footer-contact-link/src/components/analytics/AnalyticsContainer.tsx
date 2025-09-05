
import React from &quot;react&quot;;
import { Header } from &quot;@/components/Header&quot;;
import { Footer } from &quot;@/components/Footer&quot;;
import { SEO } from &quot;@/components/SEO&quot;;
import { Navigate } from &quot;react-router-dom&quot;;
import { useAuth } from &quot;@/hooks/useAuth&quot;;

interface AnalyticsContainerProps {
  children: React.ReactNode;
}

export function AnalyticsContainer({ children }: AnalyticsContainerProps) {
  const { isAuthenticated, isLoading, user } = useAuth();
  
  // Check if user is admin (using either role or userType)
  const isAdmin = user?.role === 'admin' || user?.userType === 'admin';
  
  // If still loading auth status, show loading
  if (isLoading) {
    return (
      <div className=&quot;flex justify-center items-center min-h-screen bg-zion-blue&quot;>
        <div className=&quot;animate-pulse text-zion-purple text-lg&quot;>Loading...</div>
      </div>
    );
  }
  
  // If not authenticated, redirect
  if (!isAuthenticated) {
    return <Navigate to=&quot;/login&quot; state={{ from: '/analytics' }} replace />;
  }
  
  // If not admin, redirect
  if (!isAdmin) {
    return <Navigate to=&quot;/unauthorized&quot; replace />;
  }

  return (
    <div className=&quot;min-h-screen flex flex-col bg-zion-blue&quot;>
      <SEO 
        title=&quot;Analytics Dashboard&quot; 
        description=&quot;Track user behavior, page views, and conversion rates to improve your platform performance&quot;
        noindex
      />
      <Header />
      <main className=&quot;flex-1 p-6 md:p-8 container mx-auto&quot;>
        <div className=&quot;mb-8&quot;>
          <h1 className=&quot;text-3xl font-bold text-white mb-2&quot;>Analytics Dashboard</h1>
          <p className=&quot;text-zion-slate-light&quot;>
            Track user behavior, page views, and conversion rates
          </p>
        </div>
        {children}
      </main>
      <Footer />
    </div>
  );
}
