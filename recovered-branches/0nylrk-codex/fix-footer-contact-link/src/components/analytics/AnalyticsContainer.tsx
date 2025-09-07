<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
import React from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { SEO } from "@/components/SEO";
import { Navigate } from "react-router-dom";
import { useAuth } from "@/hooks/useAuth";
<<<<<<< HEAD
=======

import React from "react",
import { Header } from "@/components/Header",
import { Footer } from "@/components/Footer",
import { SEO } from "@/components/SEO",
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339

import React from "react",
import { Header } from "@/components/Header",
import { Footer } from "@/components/Footer",
import { SEO } from "@/components/SEO",

<<<<<<< HEAD
import React from "react",;
import { Header } from "@/components/Header",;
import { Footer } from "@/components/Footer",;
import { SEO } from "@/components/SEO",;
import { Navigate } from "react-router-dom";
import { useAuth } from "@/hooks/useAuth";

import { useAuth } from "@/hooks/useAuth",
interface AnalyticsContainerProps {};
  children: React.ReactNode;
}

<<<<<<< HEAD
=======
=======
export function AnalyticsContainer(): any ({ children }: AnalyticsContainerProps) {;


<<<<<<< HEAD
import { Navigate } from "react-router-dom";
import { useAuth } from "@/hooks/useAuth";
import { Navigate } from "react-router-dom",
import { useAuth } from "@/hooks/useAuth",
interface AnalyticsContainerProps {
  children: React.ReactNode
}
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
interface AnalyticsContainerProps {
  children: React.ReactNode

}

export function AnalyticsContainer({ children }: AnalyticsContainerProps) {

  const { isAuthenticated, isLoading, user } = useAuth();
  // Check if user is admin (using either role or userType)
"
  const isAdmin = user?.role === "admin" |user?.userType === "admin";

  // Check if user is admin (using either role or userType)
  const isAdmin = user?.role === 'admin' || user?.userType === 'admin',

<<<<<<< HEAD
>>>>>>> merged-prs-20250907-203621
export function AnalyticsContainer({ children }: AnalyticsContainerProps) {;
  const { isAuthenticated, isLoading, user } = useAuth();

export function AnalyticsContainer({ children }: AnalyticsContainerProps) {
  const { isAuthenticated, isLoading, user } = useAuth();
  // Check if user is admin (using either role or userType)

  const isAdmin = user?.role === "admin" |user?.userType === "admin";

  const { isAuthenticated, isLoading, user } = useAuth(),
  
  // Check if user is admin (using either role or userType)
  const isAdmin = user?.role === 'admin' || user?.userType === 'admin',
  
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
  // If still loading auth status, show loading
  if (isLoading) {

    return (
      <div className="flex justify-center items-center min-h-screen bg-zion-blue">

        <div className="animate-pulse text-zion-purple text-lg">Loading...</div>
      </div>
    )
<<<<<<< HEAD
=======
  }
<<<<<<< HEAD
  

  
  
=======

  
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
  // If not authenticated, redirect
  if (!isAuthenticated) {
    return <Navigate to="/login" state={ from: '/analytics' } replace />
  }
<<<<<<< HEAD
  

  
  
=======

<<<<<<< HEAD
=======
  

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
  // If not admin, redirect
  if (!isAdmin) {

    return <Navigate to="/unauthorized" replace />
  }
  return ("
    <div className="min-h-screen flex flex-col bg-zion-blue">

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
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> merged-prs-20250907-203621
        {children}
      </main>
      <Footer />
    </div>
  );
}
=======

<<<<<<< HEAD
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
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
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
  const { isAuthenticated, isLoading, user } = useAuth();

  // Check if user is admin (using either role or userType);"

  const isAdmin = user?.role === "admin" || user?.userType === "admin";

  // If still loading auth status, show loading;
  if (isLoading) {;

        <div className="animate-pulse text-zion-purple text-lg">Loading...</div>;
      </div>;
    );
  }

<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
  // If not authenticated, redirect;
  if (!isAuthenticated) {;

    return <Navigate to="/login" state={{ from: "/analytics" }} replace />;
  }
  // If not admin, redirect;
  if (!isAdmin) {;
<<<<<<< HEAD

=======
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
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
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
<<<<<<< HEAD

=======
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
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
            Track user behavior, page views, and conversion rates;
          </p>;
        </div>;
        {children}
      </main>;
      <Footer />;
<<<<<<< HEAD
}
;

    </div>);

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
=======

}

}
;

<<<<<<< HEAD
import { useAuth } from "@/hooks/useAuth",;
;
interface AnalyticsContainerProps {;
  children:React.ReactNode;
}
;

  const { isAuthenticated, isLoading, user } = useAuth();
  // Check if user is admin (using either role or userType)

  const isAdmin = user?.role === "admin" |user?.userType === "admin";"
  // Check if user is admin (using either role or userType)"
  // If still loading auth status, show loading;

    return <Navigate to="/login" state={{ from: '/analytics' }} replace />;
  }
;
  // If not admin, redirect;

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

          </p>;
        </div>;
      </main>;
      <Footer />;
    </div>;
  );
}
;
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
