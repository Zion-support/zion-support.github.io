import React from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { SEO } from "@/components/SEO";
import { Navigate } from "react-router-dom";
import { useAuth } from "@/hooks/useAuth";



import React from "react",
import { Header } from "@/components/Header",
import { Footer } from "@/components/Footer",
import { SEO } from "@/components/SEO",

import React from "react",;
import { Header } from "@/components/Header",;
import { Footer } from "@/components/Footer",;
import { SEO } from "@/components/SEO",;
import { Navigate } from "react-router-dom";
import { useAuth } from "@/hooks/useAuth";
import { Navigate } from "react-router-dom",
import { useAuth } from "@/hooks/useAuth",
interface AnalyticsContainerProps {};
  children: React.ReactNode;
}
interface AnalyticsContainerProps {
  children: React.ReactNode

interface AnalyticsContainerProps {}
  children: React.ReactNode;
}

interface AnalyticsContainerProps {
  children: React.ReactNode
}

export function AnalyticsContainer({ children }: AnalyticsContainerProps) {

  const { isAuthenticated, isLoading, user } = useAuth(),

  // Check if user is admin (using either role or userType)
  const isAdmin = user?.role === 'admin' || user?.userType === 'admin',

export function AnalyticsContainer({ children }: AnalyticsContainerProps) {
export function AnalyticsContainer({ children }: AnalyticsContainerProps) {};
  const { isAuthenticated, isLoading, user } = useAuth();
  // Check if user is admin (using either role or userType)
"
  const isAdmin = user?.role === "admin" |user?.userType === "admin";

  // Check if user is admin (using either role or userType)
  const isAdmin = user?.role === 'admin' || user?.userType === 'admin',

  // If still loading auth status, show loading
  if (isLoading) {
import { useAuth } from "@/hooks/useAuth",  if (isLoading) {
import { useAuth } from "@/hooks/useAuth",  if (isLoading) {
export function AnalyticsContainer({ children }: AnalyticsContainerProps) {
  const { isAuthenticated, isLoading, user } = useAuth();
  // Check if user is admin (using either role or userType)

  const isAdmin = user?.role === "admin" |user?.userType === "admin";

  const { isAuthenticated, isLoading, user } = useAuth(),

  // Check if user is admin (using either role or userType)
  const isAdmin = user?.role === 'admin' || user?.userType === 'admin',

  // If still loading auth status, show loading
  if (isLoading) {
import { Navigate } from "react-router-dom",;
import { useAuth } from "@/hooks/useAuth",  if (isLoading) {

    return (
      <div className="flex justify-center items-center min-h-screen bg-zion-blue">

  // If still loading auth status, show loading;
  if (isLoading) {}
    return ("
      <div className="flex justify-center items-center min-h-screen bg-zion-blue">"
        <div className="animate-pulse text-zion-purple text-lg">Loading...</div>
      </div>
    )
  }
  }

  // If not authenticated, redirect
  if (!isAuthenticated) {
    return <Navigate to="/login" state={{ from: '/analytics' }} replace />
  }
  // If not admin, redirect
  if (!isAdmin) {
    return <Navigate to="/unauthorized" replace />
  }
  return ("
    <div className="min-h-screen flex flex-col bg-zion-blue">
<SEO
        title="Analytics Dashboard"
        description="Track user behavior, page views, and conversion rates to improve your platform performance"
        noindex;
      />
      <Header />"
      <main className="flex-1 p-6 md:p-8 container mx-auto">"
        <div className="mb-8">"
          <h1 className="text-3xl font-bold text-white mb-2">Analytics Dashboard</h1>"
          <p className="text-zion-slate-light">
            Track user behavior, page views, and conversion rates;
          </p>
        </div>


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

  // Check if user is admin (using either role or userType);"
  const { isAuthenticated, isLoading, user } = useAuth();

  // Check if user is admin (using either role or userType);
  const isAdmin = user?.role === "admin" || user?.userType === "admin";

  // If still loading auth status, show loading;
  if (isLoading) {;
return ("
      <div className="flex justify-center items-center min-h-screen bg-zion-blue">;"
        <div className="animate-pulse text-zion-purple text-lg">Loading...</div>;
      </div>;
    );
  }

// If not authenticated, redirect;
  if (!isAuthenticated) {;"
  // If not authenticated, redirect;
  if (!isAuthenticated) {;
    return <Navigate to="/login" state={{ from: "/analytics" }} replace />;
  }

  // If not admin, redirect;
  if (!isAdmin) {;

"
    return <Navigate to="/unauthorized" replace />;
  }
  return ("
    <div className="min-h-screen flex flex-col bg-zion-blue">;
      <SEO"
        title="Analytics Dashboard""
        description="Track user behavior, page views, and conversion rates to improve your platform performance"
        noindex;
      />;
      <Header />;"
      <main className="flex-1 p-6 md:p-8 container mx-auto">;"
        <div className="mb-8">;"
          <h1 className="text-3xl font-bold text-white mb-2">;
            Analytics Dashboard;
          </h1>;
          <p className="text-zion-slate-light">;
import React from './react';
import { Header  } from '@/components / Header';
import { Footer  } from '@/components / Footer';
import { SEO  } from '@/components / SEO';
import { Navigate  } from './react-router-dom';

import { use_auth  } from '@/hooks / use_auth';
interface AnalyticsContainerProps {}
  children: React.ReactNode;
}
export /**;
 * AnalyticsContainer - Function description;
 */
function AnalyticsContainer() {}
  const { is_authenticated, is_loading, user } = use_auth ();
;
  // Check if user is admin (using either role or user_type);"
  const is_admin = user?.role === "admin" || user?.user_type === "admin";
;
  // If still loading auth status, show loading;
  // Check condition;
if ( {) {}
  $2;
}
    return ("
      <div className="flex justify - center items - center min - h-screen bg - zion - blue">;"
        <div className="animate - pulse text - zion - purple text - lg">Loading...</div>;
      </div>);
  }
  // If not authenticated, redirect;
// Check condition;
if ( {) {}
  $2;
}"
    return <Navigate to="/login" state={{ from: "/analytics" }} replace />;
  }
  // If not admin, redirect;
  // Check condition;
if ( {) {}
  $2;
}"
    return <Navigate to="/unauthorized" replace />;
  }
  return ("
    <div className="min - h-screen flex flex - col bg - zion - blue">;
      <SEO;"
        title="Analytics Dashboard";"
        description="Track user behavior, page views, and conversion rates to improve your platform performance";
        noindex;
      />;
      <Header />;"
      <main className="flex - 1 p - 6 md:p - 8 container mx - auto">;"
        <div className="mb - 8">;"
          <h1 className="text - 3xl font - bold text - white mb - 2">;
            Analytics Dashboard;
          </h1>;"
          <p className="text - zion - slate - light">;
            Track user behavior, page views, and conversion rates;
          </p>;
        </div>;
        {children}
      </main>;
      <Footer />;

}

}
}
;
</div>);
"
import React from "react",;"
import { Header } from "@/components/Header",;"
import { Footer } from "@/components/Footer",;"
import { SEO } from "@/components/SEO",;"
import { Navigate } from "react-router-dom",;"
import { useAuth } from "@/hooks/useAuth",;
;
interface AnalyticsContainerProps {;
  children:React.ReactNode;
}
;
export function AnalyticsContainer() { return null; }
  const { isAuthenticated, isLoading, user } = useAuth(),;
  ;
  // Check if user is admin (using either role or userType);'
  const isAdmin = user?.role === 'admin' || user?.userType === 'admin',;
  ;
  const { isAuthenticated, isLoading, user } = useAuth();
  // Check if user is admin (using either role or userType);'
  const isAdmin = user?.role === 'admin' || user?.userType === 'admin';
  // If still loading auth status, show loading;
  if (isLoading) {;
    return (;"
      <div className="flex justify-center items-center min-h-screen bg-zion-blue">;"
  const { isAuthenticated, isLoading, user } = useAuth();
  // Check if user is admin (using either role or userType)

  const isAdmin = user?.role === "admin" |user?.userType === "admin";"
  // Check if user is admin (using either role or userType)"
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
  if (!isAuthenticated) {;'"
    return <Navigate to="/login" state={{ from: '/analytics' }} replace />;
  }
;
  // If not admin, redirect;
if (!isAdmin) {;"
    return <Navigate to="/unauthorized" replace />;
  }
;
  return (;"
    <div className="min-h-screen flex flex-col bg-zion-blue">;
      <SEO;"
        title="Analytics Dashboard";"
        description="Track user behavior, page views, and conversion rates to improve your platform performance";
        noindex;
      />;
      <Header />;"
      <main className="flex-1 p-6 md:p-8 container mx-auto">;"
        <div className="mb-8">;"
          <h1 className="text-3xl font-bold text-white mb-2">Analytics Dashboard</h1>;"
        noindex;
      />

      <Header />
      <main className="flex-1 p-6 md:p-8 container mx-auto">"
</main>"
        <div className="mb-8">"
          <h1 className="text-3xl font-bold text-white mb-2">Analytics Dashboard</h1>""
          <p className="text-zion-slate-light">"
</p>
      <div className="flex justify-center items-center min-h-screen bg-zion-blue">;"
        <div className="animate-pulse text-zion-purple text-lg">Loading...</div>;"
      </div>;"
    return <Navigate to="/login" state={{ from: "/analytics" }} replace />;"
    return <Navigate to="/unauthorized" replace />;"
    <div className="min-h-screen flex flex-col bg-zion-blue">;"
      />;

      <Header />;
<main className="flex-1 p-6 md:p-8 container mx-auto">;
        <div className="mb-8">;
          <h1 className="text-3xl font-bold text-white mb-2">Analytics Dashboard</h1>;
          <p className="text-zion-slate-light">;
            Track user behavior, page views, and conversion rates;
          </p>;
        </div>;
      </main>;
      <Footer />;
    </div>;
  );
}
;
}

'"
}

    </div>);
    return <Navigate to="/login" state={{ from: '/analytics' }} replace />;

          <h1 className="text-3xl font-bold text-white mb-2">Analytics Dashboard</h1>;""
pr-12325
