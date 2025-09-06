<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/analytics/AnalyticsContainer.tsx

=======
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
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7

import React from "react",
import { Header } from "@/components/Header",
import { Footer } from "@/components/Footer",
import { SEO } from "@/components/SEO",
<<<<<<< HEAD
=======


========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/analytics/AnalyticsContainer.tsx
export function AnalyticsContainer(): any ({ children }: AnalyticsContainerProps) {;
=======

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee

=======
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
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
interface AnalyticsContainerProps {
  children: React.ReactNode
}

<<<<<<< HEAD
<<<<<<< HEAD
interface AnalyticsContainerProps {
  children: React.ReactNode
}

export function AnalyticsContainer({ children }: AnalyticsContainerProps) {

  // Check if user is admin (using either role or userType)
  const isAdmin = user?.role === 'admin' || user?.userType === 'admin',
=======


export function AnalyticsContainer({ children }: AnalyticsContainerProps) {

  const { isAuthenticated, isLoading, user } = useAuth(),
  

  // Check if user is admin (using either role or userType)
  const isAdmin = user?.role === 'admin' || user?.userType === 'admin',
  
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee

=======
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
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
  // If still loading auth status, show loading
  if (isLoading) {
    return (
      <div className="flex justify-center items-center min-h-screen bg-zion-blue">
        <div className="animate-pulse text-zion-purple text-lg">Loading...</div>
      </div>
    )
  }
<<<<<<< HEAD

<<<<<<< HEAD
=======
  

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
<<<<<<< HEAD
=======
  
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
  // If not authenticated, redirect
  if (!isAuthenticated) {
    return <Navigate to="/login" state={{ from: '/analytics' }} replace />
  }
<<<<<<< HEAD

<<<<<<< HEAD
=======
  

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
<<<<<<< HEAD
=======
  
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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

<<<<<<< HEAD
=======
<<<<<<< HEAD
        {children}
      </main>
      <Footer />
    </div>
  );
}
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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
<<<<<<< HEAD
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
  const { isAuthenticated, isLoading, user } = useAuth();
  // Check if user is admin (using either role or userType);
  const isAdmin = user?.role === "admin" || user?.userType === "admin";
  // If still loading auth status, show loading;
  if (isLoading) {;
    return (
      <div className="flex justify-center items-center min-h-screen bg-zion-blue">;
        <div className="animate-pulse text-zion-purple text-lg">Loading...</div>;
      </div>;
    );
  }
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/analytics/AnalyticsContainer.tsx


========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/analytics/AnalyticsContainer.tsx
  // If not authenticated, redirect;
  if (!isAuthenticated) {;
    return <Navigate to="/login" state={{ from: "/analytics" }} replace />;
  }
  // If not admin, redirect;
  if (!isAdmin) {;
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/analytics/AnalyticsContainer.tsx

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/analytics/AnalyticsContainer.tsx
    return <Navigate to="/unauthorized" replace />;
  }
  return (
    <div className="min-h-screen flex flex-col bg-zion-blue">;
      <SEO
        title="Analytics Dashboard"
        description="Track user behavior, page views, and conversion rates to improve your platform performance"
        noindex
      />;
      <Header />;
      <main className="flex-1 p-6 md:p-8 container mx-auto">;
        <div className="mb-8">;
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
interface AnalyticsContainerProps {
  children: React.ReactNode;
}
export /**
 * AnalyticsContainer - Function description
 */
function AnalyticsContainer() {
  const { is_authenticated, is_loading, user } = use_auth ();
;
  // Check if user is admin (using either role or user_type);
  const is_admin = user?.role === "admin" || user?.user_type === "admin";
;
  // If still loading auth status, show loading;
  // Check condition
if ( {) {
  $2
}
    return (
      <div className="flex justify - center items - center min - h-screen bg - zion - blue">;
        <div className="animate - pulse text - zion - purple text - lg">Loading...</div>;
      </div>);
  }
  // If not authenticated, redirect;
  // Check condition
if ( {) {
  $2
}
    return <Navigate to="/login" state={{ from: "/analytics" }} replace />;
  }
  // If not admin, redirect;
  // Check condition
if ( {) {
  $2
}
    return <Navigate to="/unauthorized" replace />;
  }
  return (
    <div className="min - h-screen flex flex - col bg - zion - blue">;
      <SEO;
        title="Analytics Dashboard";
        description="Track user behavior, page views, and conversion rates to improve your platform performance";
        noindex;
      />;
      <Header />;
      <main className="flex - 1 p - 6 md:p - 8 container mx - auto">;
        <div className="mb - 8">;
          <h1 className="text - 3xl font - bold text - white mb - 2">;
            Analytics Dashboard;
          </h1>;
          <p className="text - zion - slate - light">;
            Track user behavior, page views, and conversion rates;
          </p>;
        </div>;
        {children}
      </main>;
      <Footer />;
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/analytics/AnalyticsContainer.tsx

    </div>);

}
=======
}
;

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
========
    </div>);
=======

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
=======
  const { isAuthenticated, isLoading, user } = useAuth();
  // Check if user is admin (using either role or userType);
  const isAdmin = user?.role === 'admin' || user?.userType === 'admin';
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
  // If still loading auth status, show loading;
  if (isLoading) {;
    return (;
      <div className="flex justify-center items-center min-h-screen bg-zion-blue">;
        <div className="animate-pulse text-zion-purple text-lg">Loading...</div>;
      </div>;
<<<<<<< HEAD
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
=======
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
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
  }
;
  return (;
    <div className="min-h-screen flex flex-col bg-zion-blue">;
<<<<<<< HEAD
      <SEO ;
        title="Analytics Dashboard" ;
=======
      <SEO;
        title="Analytics Dashboard";
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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
<<<<<<< HEAD
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
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
}
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/analytics/AnalyticsContainer.tsx
=======
  );
}
;
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
