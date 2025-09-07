<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD


<<<<<<< HEAD
export function AnalyticsContainer(): any ({ children }: AnalyticsContainerProps) {;
<<<<<<< HEAD
=======


=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
import React from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { SEO } from "@/components/SEO";
import { Navigate } from "react-router-dom";
import { useAuth } from "@/hooks/useAuth";
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2

=======

>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======

>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
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
<<<<<<< HEAD
import { Navigate } from "react-router-dom",
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======


import React from "react","
import { Header } from "@/components/Header","
import { Footer } from "@/components/Footer","
import { SEO } from "@/components/SEO",";
import { Navigate } from "react-router-dom";"
import { useAuth } from "@/hooks/useAuth";"
import { Navigate } from "react-router-dom","
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
import { useAuth } from "@/hooks/useAuth",
interface AnalyticsContainerProps {};
  children: React.ReactNode;
}
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======

>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
interface AnalyticsContainerProps {
  children: React.ReactNode
=======

interface AnalyticsContainerProps {}
  children: React.ReactNode;
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
}

<<<<<<< HEAD
interface AnalyticsContainerProps {
  children: React.ReactNode
}
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
=======
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======


<<<<<<< HEAD
=======
import { useAuth } from "@/hooks/useAuth",
interface AnalyticsContainerProps {
  children: React.ReactNode
}

interface AnalyticsContainerProps {
  children: React.ReactNode
}



>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
export function AnalyticsContainer({ children }: AnalyticsContainerProps) {

  const { isAuthenticated, isLoading, user } = useAuth(),
  

  // Check if user is admin (using either role or userType)
  const isAdmin = user?.role === 'admin' || user?.userType === 'admin',
  

<<<<<<< HEAD
<<<<<<< HEAD
=======
export function AnalyticsContainer({ children }: AnalyticsContainerProps) {;
  const { isAuthenticated, isLoading, user } = useAuth();
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc

=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
export function AnalyticsContainer({ children }: AnalyticsContainerProps) {
=======
export function AnalyticsContainer({ children }: AnalyticsContainerProps) {};
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
  const { isAuthenticated, isLoading, user } = useAuth();
  // Check if user is admin (using either role or userType)
"
  const isAdmin = user?.role === "admin" |user?.userType === "admin";

  // Check if user is admin (using either role or userType)
  const isAdmin = user?.role === 'admin' || user?.userType === 'admin',
<<<<<<< HEAD

=======
  
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
  // If still loading auth status, show loading
  if (isLoading) {
=======
import { useAuth } from "@/hooks/useAuth",  if (isLoading) {
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
import { useAuth } from "@/hooks/useAuth",  if (isLoading) {
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
export function AnalyticsContainer({ children }: AnalyticsContainerProps) {
  const { isAuthenticated, isLoading, user } = useAuth();
  // Check if user is admin (using either role or userType)

  const isAdmin = user?.role === "admin" |user?.userType === "admin";

  const { isAuthenticated, isLoading, user } = useAuth(),
  
  // Check if user is admin (using either role or userType)
  const isAdmin = user?.role === 'admin' || user?.userType === 'admin',
  
  // If still loading auth status, show loading
  if (isLoading) {
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======
import { Navigate } from "react-router-dom",;
import { useAuth } from "@/hooks/useAuth",  if (isLoading) {

>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
    return (
      <div className="flex justify-center items-center min-h-screen bg-zion-blue">
=======

  // If still loading auth status, show loading;
  if (isLoading) {}
    return ("
      <div className="flex justify-center items-center min-h-screen bg-zion-blue">"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
        <div className="animate-pulse text-zion-purple text-lg">Loading...</div>
      </div>
    )
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
  }
<<<<<<< HEAD
<<<<<<< HEAD

=======
  
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934



<<<<<<< HEAD
  
  
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
  }


>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
  // If not authenticated, redirect
  if (!isAuthenticated) {
    return <Navigate to="/login" state={{ from: '/analytics' }} replace />
  }
<<<<<<< HEAD
<<<<<<< HEAD

=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
  // If not authenticated, redirect;
  if (!isAuthenticated) {'"
    return <Navigate to="/login" state={{ from: '/analytics' }} replace />
  }
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934



<<<<<<< HEAD
  
  
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
  // If not admin, redirect
  if (!isAdmin) {
=======
  // If not admin, redirect;
  if (!isAdmin) {"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
    return <Navigate to="/unauthorized" replace />
  }
  return ("
    <div className="min-h-screen flex flex-col bg-zion-blue">
<<<<<<< HEAD
      <SEO
        title="Analytics Dashboard"
=======
      <SEO "
        title="Analytics Dashboard" "
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
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
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
        {children}
      </main>
      <Footer />
    </div>
  );
}
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
=======


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
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======
{children}
      </main>
      <Footer />
    </div>
  );
}
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
import React from "react",;
import { Header } from "@/components/Header",;
import { Footer } from "@/components/Footer",;
import { SEO } from "@/components/SEO",;
import { Navigate } from "react-router-dom",;
import { useAuth } from "@/hooks/useAuth",;
interface AnalyticsContainerProps {;
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
  children: React.ReactNode;
}
;
export function AnalyticsContainer({ children }: AnalyticsContainerProps) {;
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
<<<<<<< HEAD
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======


"
import React from "react",;"
import { Header } from "@/components/Header",;"
import { Footer } from "@/components/Footer",;"
import { SEO } from "@/components/SEO",;"
import { Navigate } from "react-router-dom",;"
import { useAuth } from "@/hooks/useAuth",;
interface AnalyticsContainerProps {;

>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
  const { isAuthenticated, isLoading, user } = useAuth();

  // Check if user is admin (using either role or userType);"
=======
  const { isAuthenticated, isLoading, user } = useAuth();

  // Check if user is admin (using either role or userType);
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
  const isAdmin = user?.role === "admin" || user?.userType === "admin";

  // If still loading auth status, show loading;
  if (isLoading) {;
<<<<<<< HEAD
    return ("
      <div className="flex justify-center items-center min-h-screen bg-zion-blue">;"
=======
    return (
      <div className="flex justify-center items-center min-h-screen bg-zion-blue">;
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
        <div className="animate-pulse text-zion-purple text-lg">Loading...</div>;
      </div>;
    );
  }

<<<<<<< HEAD
<<<<<<< HEAD
  // If not authenticated, redirect;
  if (!isAuthenticated) {;"
=======

=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
  // If not authenticated, redirect;
  if (!isAuthenticated) {;
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
    return <Navigate to="/login" state={{ from: "/analytics" }} replace />;
  }

  // If not admin, redirect;
  if (!isAdmin) {;

<<<<<<< HEAD

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
<<<<<<< HEAD
          </h1>;
          <p className="text-zion-slate-light">;
<<<<<<< HEAD
=======
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
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
import React from './react';
import { Header  } from '@/components / Header';
import { Footer  } from '@/components / Footer';
import { SEO  } from '@/components / SEO';
import { Navigate  } from './react-router-dom';
<<<<<<< HEAD
=======
          </h1>;"
          <p className="text-zion-slate-light">;'
import React from './react';'
import { Header  } from '@/components / Header';'
import { Footer  } from '@/components / Footer';'
import { SEO  } from '@/components / SEO';'
import { Navigate  } from './react-router-dom';'
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
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
=======
import { use_auth  } from '@/hooks / use_auth';
export function AnalyticsContainer(): any ({ children }: AnalyticsContainerProps) {;

import React from "react",""
import { Header } from "@/components/Header",""
import { Footer } from "@/components/Footer",""
import { SEO } from "@/components/SEO",""
import { Navigate } from "react-router-dom";""
import { useAuth } from "@/hooks/useAuth";""
import { Navigate } from "react-router-dom",""
import { useAuth } from "@/hooks/useAuth","
interface AnalyticsContainerProps {
  // TODO: Implement
}
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
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
        <div className="animate - pulse text - zion - purple text - lg">Loading...</div>;
      </div>);
  }
  // If not authenticated, redirect;
<<<<<<< HEAD
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
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
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
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
            Track user behavior, page views, and conversion rates;
          </p>;
        </div>;
        {children}
      </main>;
      <Footer />;

<<<<<<< HEAD
<<<<<<< HEAD

<<<<<<< HEAD
}
<<<<<<< HEAD
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
=======
}
;
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934

=======
    </div>);
=======
  // TODO: Implement
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a

}
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
}
;
<<<<<<< HEAD

    </div>);
<<<<<<< HEAD
"
import React from "react",;"
import { Header } from "@/components/Header",;"
import { Footer } from "@/components/Footer",;"
import { SEO } from "@/components/SEO",;"
import { Navigate } from "react-router-dom",;"
=======

import React from "react",;
import { Header } from "@/components/Header",;
import { Footer } from "@/components/Footer",;
import { SEO } from "@/components/SEO",;
import { Navigate } from "react-router-dom",;
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
import { useAuth } from "@/hooks/useAuth",;
;
interface AnalyticsContainerProps {;
  children:React.ReactNode;
}
;
<<<<<<< HEAD
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
=======
export function AnalyticsContainer({ children } AnalyticsContainerProps) {;
  const { isAuthenticated, isLoading, user } = useAuth(),;
  ;
  // Check if user is admin (using either role or userType);
  const isAdmin = user?.role === 'admin' || user?.userType === 'admin',;
  ;
=======
}
;


export function AnalyticsContainer({ children }: AnalyticsContainerProps) {

  const { isAuthenticated, isLoading, user } = useAuth(),

  // Check if user is admin (using either role or userType)"
  const isAdmin = user?.role === 'admin' || user?.userType === 'admin',
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
  const { isAuthenticated, isLoading, user } = useAuth();
  // Check if user is admin (using either role or userType)

  const isAdmin = user?.role === "admin" |user?.userType === "admin";"
  // Check if user is admin (using either role or userType)"
  // If still loading auth status, show loading;
<<<<<<< HEAD
  if (isLoading) {;
    return (;
      <div className="flex justify-center items-center min-h-screen bg-zion-blue">;
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
        <div className="animate-pulse text-zion-purple text-lg">Loading...</div>;
      </div>;
    );
  }
;
  // If not authenticated, redirect;
<<<<<<< HEAD
  if (!isAuthenticated) {;'"
=======
  if (!isAuthenticated) {;
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
    return <Navigate to="/login" state={{ from: '/analytics' }} replace />;
  }
;
  // If not admin, redirect;
<<<<<<< HEAD
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
=======
  if (!isAdmin) {;
    return <Navigate to="/unauthorized" replace />;
  }
;
  return (;
    <div className="min-h-screen flex flex-col bg-zion-blue">;
      <SEO;
        title="Analytics Dashboard";
        description="Track user behavior, page views, and conversion rates to improve your platform performance";
=======
  if (isLoading) {
    return (
      <div className="flex justify-center items-center min-h-screen bg-zion-blue">"
</div>"
        <div className="animate-pulse text-zion-purple text-lg">Loading...</div>"
    return <Navigate to="/login" state={{ from: '/analytics' }} replace />

    return <Navigate to="/unauthorized" replace />"
"
    <div className="min-h-screen flex flex-col bg-zion-blue">"
</div>
      <SEO;"
        title="Analytics Dashboard"""
        description="Track user behavior, page views, and conversion rates to improve your platform performance""
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
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
<<<<<<< HEAD
      <main className="flex-1 p-6 md:p-8 container mx-auto">;
        <div className="mb-8">;
          <h1 className="text-3xl font-bold text-white mb-2">Analytics Dashboard</h1>;
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
          <p className="text-zion-slate-light">;
            Track user behavior, page views, and conversion rates;
=======
      <main className="flex-1 p-6 md:p-8 container mx-auto">;"
        <div className="mb-8">;"
          <h1 className="text-3xl font-bold text-white mb-2">;"
</h1>
          </h1>;"
          <p className="text-zion-slate-light">;"
</p>"
      <div className="flex justify - center items - center min - h-screen bg - zion - blue">;"
        <div className="animate - pulse text - zion - purple text - lg">Loading...</div>;")
      </div>);"
    <div className="min - h-screen flex flex - col bg - zion - blue">;"
        title="Analytics Dashboard";""
        description="Track user behavior, page views, and conversion rates to improve your platform performance";"

      <main className="flex - 1 p - 6 md:p - 8 container mx - auto">;"
        <div className="mb - 8">;"
          <h1 className="text - 3xl font - bold text - white mb - 2">;"
          <p className="text - zion - slate - light">;"
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
          </p>;
        </div>;
      </main>;
      <Footer />;
    </div>;
  );
}
;
<<<<<<< HEAD


}
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
  }
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
  }
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======

'"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
}
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======


    </div>);
    return <Navigate to="/login" state={{ from: '/analytics' }} replace />;


          <h1 className="text-3xl font-bold text-white mb-2">Analytics Dashboard</h1>;""
pr-12325
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
