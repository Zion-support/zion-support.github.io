<<<<<<< HEAD


=======

import React from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { SEO } from "@/components/SEO";
import { Navigate } from "react-router-dom";
import { useAuth } from "@/hooks/useAuth";

>>>>>>> origin/cursor/delete-old-data-records-6bba

import React from "react",
import { Header } from "@/components/Header",
import { Footer } from "@/components/Footer",
import { SEO } from "@/components/SEO",


<<<<<<< HEAD
=======
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

export function AnalyticsContainer({ children }: AnalyticsContainerProps) {;
  const { isAuthenticated, isLoading, user } = useAuth();

export function AnalyticsContainer({ children }: AnalyticsContainerProps) {
  const { isAuthenticated, isLoading, user } = useAuth();
  // Check if user is admin (using either role or userType)

  const isAdmin = user?.role === "admin" |user?.userType === "admin";

  const { isAuthenticated, isLoading, user } = useAuth(),
  
  // Check if user is admin (using either role or userType)
  const isAdmin = user?.role === 'admin' || user?.userType === 'admin',
  
  // If still loading auth status, show loading
  if (isLoading) {

    return (
      <div className="flex justify-center items-center min-h-screen bg-zion-blue">

        <div className="animate-pulse text-zion-purple text-lg">Loading...</div>
      </div>
    )


  // If not authenticated, redirect
  if (!isAuthenticated) {
    return <Navigate to="/login" state={ from: '/analytics' } replace />
  }

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

  const { isAuthenticated, isLoading, user } = useAuth();

  // Check if user is admin (using either role or userType);"

  const isAdmin = user?.role === "admin" || user?.userType === "admin";

  // If still loading auth status, show loading;
  if (isLoading) {;

        <div className="animate-pulse text-zion-purple text-lg">Loading...</div>;
      </div>;
    );
  }

  // If not authenticated, redirect;
  if (!isAuthenticated) {;

    return <Navigate to="/login" state={{ from: "/analytics" }} replace />;
  }

  // If not admin, redirect;
  if (!isAdmin) {;

import React from './react';
import { Header  } from '@/components / Header';
import { Footer  } from '@/components / Footer';
import { SEO  } from '@/components / SEO';
import { Navigate  } from './react-router-dom';

import { use_auth  } from '@/hooks / use_auth';
interface AnalyticsContainerProps {}
  children: React.ReactNode;
}
        {children}
      </main>
      <Footer />
    </div>
  );
}


  const { isAuthenticated, isLoading, user } = useAuth();

  // Check if user is admin (using either role or userType);"

  const isAdmin = user?.role === "admin" || user?.userType === "admin";

  // If still loading auth status, show loading;
  if (isLoading) {;

        <div className="animate-pulse text-zion-purple text-lg">Loading...</div>;
      </div>;
    );
  }

>>>>>>> origin/cursor/delete-old-data-records-6bba

  // If not authenticated, redirect;
  if (!isAuthenticated) {;

    return <Navigate to="/login" state={{ from: "/analytics" }} replace />;
  }
  // If not admin, redirect;
  if (!isAdmin) {;

<<<<<<< HEAD
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
=======
>>>>>>> origin/cursor/delete-old-data-records-6bba

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

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba

            Track user behavior, page views, and conversion rates;
          </p>;
        </div>;
        {children}
      </main>;
      <Footer />;
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba

}

}
;

<<<<<<< HEAD
=======

import { useAuth } from "@/hooks/useAuth",;
;
interface AnalyticsContainerProps {;
  children:React.ReactNode;
}
;
>>>>>>> origin/cursor/delete-old-data-records-6bba



<<<<<<< HEAD
=======
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
>>>>>>> origin/cursor/delete-old-data-records-6bba
