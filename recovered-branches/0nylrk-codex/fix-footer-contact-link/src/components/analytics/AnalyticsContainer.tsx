<<<<<<< HEAD
=======
<<<<<<< HEAD
import React from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { SEO } from "@/components/SEO";
import { Navigate } from "react-router-dom";
import { useAuth } from "@/hooks/useAuth";
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4

import React from "react",
import { Header } from "@/components/Header",
import { Footer } from "@/components/Footer",
import { SEO } from "@/components/SEO",
<<<<<<< HEAD
import { Navigate } from "react-router-dom";
import { useAuth } from "@/hooks/useAuth";
=======
import { Navigate } from "react-router-dom",
import { useAuth } from "@/hooks/useAuth",
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
interface AnalyticsContainerProps {
  children: React.ReactNode
}
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
interface AnalyticsContainerProps {
  children: React.ReactNode
}

<<<<<<< HEAD
export function AnalyticsContainer({ children }: AnalyticsContainerProps) {;
  const { isAuthenticated, isLoading, user } = useAuth();

=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
export function AnalyticsContainer({ children }: AnalyticsContainerProps) {
<<<<<<< HEAD
  const { isAuthenticated, isLoading, user } = useAuth();
  // Check if user is admin (using either role or userType)

  const isAdmin = user?.role === "admin" |user?.userType === "admin";

=======
  const { isAuthenticated, isLoading, user } = useAuth(),
  
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
  // Check if user is admin (using either role or userType)
  const isAdmin = user?.role === 'admin' || user?.userType === 'admin',
  
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
  // If still loading auth status, show loading
  if (isLoading) {
    return (
      <div className="flex justify-center items-center min-h-screen bg-zion-blue">
        <div className="animate-pulse text-zion-purple text-lg">Loading...</div>
      </div>
    )
  }
<<<<<<< HEAD
=======
  
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
  // If not authenticated, redirect
  if (!isAuthenticated) {
    return <Navigate to="/login" state={{ from: '/analytics' }} replace />
  }
<<<<<<< HEAD
=======
  
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
  // If not admin, redirect
  if (!isAdmin) {
    return <Navigate to="/unauthorized" replace />
  }
  return (
    <div className="min-h-screen flex flex-col bg-zion-blue">
      <SEO 
        title="Analytics Dashboard" 
        description="Track user behavior, page views, and conversion rates to improve your platform performance"
        noindex
      />
      <Header />
      <main className="flex-1 p-6 md:p-8 container mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-white mb-2">Analytics Dashboard</h1>
          <p className="text-zion-slate-light">
            Track user behavior, page views, and conversion rates
          </p>
        </div>
<<<<<<< HEAD
        {children}
      </main>
      <Footer />
    </div>
  );
}
=======
import React from "react",;
import { Header } from "@/components/Header",;
import { Footer } from "@/components/Footer",;
import { SEO } from "@/components/SEO",;
import { Navigate } from "react-router-dom",;
import { useAuth } from "@/hooks/useAuth",;
interface AnalyticsContainerProps {;
  children: React.ReactNode;
}
;
export function AnalyticsContainer({ children }: AnalyticsContainerProps) {;
  const { isAuthenticated, isLoading, user } = useAuth();
  // Check if user is admin (using either role or userType);
  const isAdmin = user?.role === 'admin' || user?.userType === 'admin';
  // If still loading auth status, show loading;
  if (isLoading) {;
    return (;
      <div className="flex justify-center items-center min-h-screen bg-zion-blue">;
        <div className="animate-pulse text-zion-purple text-lg">Loading...</div>;
      </div>;
    );
  }
;
  // If not authenticated, redirect;
  if (!isAuthenticated) {;
    return <Navigate to="/login" state={{ from: '/analytics' }} replace />;
  }
;
  // If not admin, redirect;
  if (!isAdmin) {;
    return <Navigate to="/unauthorized" replace />;
  }
;
  return (;
    <div className="min-h-screen flex flex-col bg-zion-blue">;
      <SEO;
        title="Analytics Dashboard";
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
  );
}
;
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
