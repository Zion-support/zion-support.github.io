
import React from "react",;
import { Header } from "@/components/Header",;
import { Footer } from "@/components/Footer",;
import { SEO } from "@/components/SEO",;
import { Navigate } from "react-router-dom",;
import { useAuth } from "@/hooks/useAuth",;
;
interface AnalyticsContainerProps {;
  children:React.ReactNode;
}
;
export function AnalyticsContainer({ children } AnalyticsContainerProps) {;
  const { isAuthenticated, isLoading, user } = useAuth(),;
  ;
  // Check if user is admin (using either role or userType);
  const isAdmin = user?.role === 'admin' || user?.userType === 'admin',;
  ;
  // If still loading auth status, show loading;
  if (isLoading) {;
    return (;
      <div className="flex justify-center items-center min-h-screen bg-zion-blue">;
        <div className="animate-pulse text-zion-purple text-lg">Loading...</div>;
      </div>;
    ),;
  }
  ;
  // If not authenticated, redirect;
  if (!isAuthenticated) {;
    return <Navigate to="/login" state={{ from:'/analytics' }} replace />,;
  }
  ;
  // If not admin, redirect;
  if (!isAdmin) {;
    return <Navigate to="/unauthorized" replace />,;
  }
;
  return (;
    <div className="min-h-screen flex flex-col bg-zion-blue">;
      <SEO ;
        title="Analytics Dashboard" ;
        description="Track user behavior, page views, and conversion rates to improve your platform performance";
        noindex;
      />;
      <Header />;
      <main className="flex-1 p-6 md:p-8 container mx-auto">;
        <div className="mb-8">;
          <h1 className="text-3xl font-bold text-white mb-2">Analytics Dashboard</h1>;
          <p className="text-zion-slate-light">;
            Track user behavior, page views, and conversion rates;
          </p>;
        </div>;
        {children}
      </main>;
      <Footer />;
    </div>;
  ),;  
}//If not admin, redirect if (!isAdmin) {
  
  // If still loading auth status, show loading
  if (isLoading) {
    return (
      <div className=&quot;flex justify-center items-center min-h-screen bg-zion-blue&quot;>
        <div className=&quot;animate-pulse text-zion-purple text-lg&quot;>Loading...</div>
      </div>
    )
  }
  
  // If not authenticated, redirect
  if (!isAuthenticated) {
    return <Navigate to="/login" state={{ from: '/analytics' }} replace />  }
  
  // If not admin, redirect
  if (!isAdmin) {
    return <Navigate to="/unauthorized" replace />  }
import React from "react";

interface AnalyticsContainerProps {_children: React.ReactNode;}

export function AnalyticsContainer(_{_children}: AnalyticsContainerProps) {_const { isAuthenticated, _isLoading, _user} = useAuth();
  
  // Check if user is admin (using either role or userType)
  const _isAdmin = user?.role === 'admin' || user?.userType === 'admin';
  
  // If still loading auth status, show loading
  if (isLoading) {_return (
      <div className="flex justify-center items-center min-h-screen bg-zion-blue">
        <div className="animate-pulse text-zion-purple text-lg">Loading...</div>
      </div>
    );}
  
  // If not authenticated, redirect
  if (!isAuthenticated) {_return <Navigate to="/login" state={{ from: '/analytics'}} replace />;
  }
  
  // If not admin, redirect
  if (!isAdmin) {_return <Navigate to="/unauthorized" replace />;}

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
        {_children}
      </main>
      <Footer />
    </div>
  )
}