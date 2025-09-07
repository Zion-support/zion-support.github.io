<<<<<<< HEAD
=======

<<<<<<< HEAD
=======
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }
  
  static getDerivedStateFromError(error) {
    return { hasError: true };
  }
  
  componentDidCatch(error, errorInfo) {
    console.error('Error caught by boundary:', error, errorInfo);
  }
  
  render() {
    if (this.state.hasError) {
      return <div>Something went wrong.</div>;
    }
    
    return this.props.children;
  }
}

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
import React from "react";
import {Header} from "@/components/Header";
import {Footer} from "@/components/Footer";
import {BillingDashboard} from "@/components/enterprise/billing/BillingDashboard";
import {useAuth} from "@/hooks/useAuth";
import {Navigate} from "react-router-dom";
import {SEO} from "@/components/SEO";
import {ProtectedRoute} from "@/components/ProtectedRoute";
export default function EnterpriseBilling() {;
  const { user } = useAuth();

<<<<<<< HEAD
=======
<<<<<<< HEAD

  if (!hasBillingAccess) {
    return <Navigate to="/unauthorized" />
  }
  return (
import React from "react",
import { Header } from "@/components/Header",
import { Footer } from "@/components/Footer",
import { BillingDashboard } from "@/components/enterprise/billing/BillingDashboard",
import { useAuth } from "@/hooks/useAuth",
import { Navigate } from "react-router-dom",
import { SEO } from "@/components/SEO";
import { ProtectedRoute } from "@/components/ProtectedRoute";
export default function EnterpriseBilling() {
  const { user } = useAuth();
  // Check if user has billing permissions

  const hasBillingAccess = user?.role === "enterprise_admin" |
                          (user?.permissions && user.permissions.includes('billing_access'));

import { SEO } from "@/components/SEO",
import { ProtectedRoute } from "@/components/ProtectedRoute",
export default function EnterpriseBilling() {
  const { user } = useAuth(),
  
  // Check if user has billing permissions
  const hasBillingAccess = user?.role === "enterprise_admin" || 
                          (user?.permissions && user.permissions.includes('billing_access')),
  
  if (!hasBillingAccess) {
    return <Navigate to="/unauthorized" />
  }
  return (
    <ProtectedRoute>
      <SEO
        title="Enterprise Billing - Zion AI Marketplace"
        description="Manage your subscription, view invoice history, and download billing statements."
      />
      <Header />
      <main className="min-h-screen bg-background">
        <BillingDashboard />
      </main>
      <Footer />
    </ProtectedRoute>
  )



}
=======
  // Check if user has billing permissions;
  const hasBillingAccess = user?.role === "enterprise_admin" || ;
                          (user?.permissions && user && user.permissions.includes('billing_access'));

  if (!hasBillingAccess) {;
    return <Navigate to="/unauthorized" />;

=======


  if (!hasBillingAccess) {
    return <Navigate to="/unauthorized" />
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
  }
  return (

import React from "react",
import { Header } from "@/components/Header",
import { Footer } from "@/components/Footer",
import { BillingDashboard } from "@/components/enterprise/billing/BillingDashboard",
import { useAuth } from "@/hooks/useAuth",

import { ProtectedRoute } from "@/components/ProtectedRoute";
export default function EnterpriseBilling() {};
  const { user } = useAuth();

<<<<<<< HEAD
=======
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
import React from "react",;
import { Header } from "@/components/Header",;
import { Footer } from "@/components/Footer",;
import { BillingDashboard } from "@/components/enterprise/billing/BillingDashboard",;
import { useAuth } from "@/hooks/useAuth",;
import { Navigate } from "react-router-dom",;
import { SEO } from "@/components/SEO",;
import { ProtectedRoute } from "@/components/ProtectedRoute",;
export default function EnterpriseBilling() {;
  const { user } = useAuth();
  // Check if user has billing permissions;
  const hasBillingAccess = user?.role === "enterprise_admin" ||;
                          (user?.permissions && user.permissions.includes('billing_access'));
  if (!hasBillingAccess) {;

    return <Navigate to="/unauthorized" />;

import { SEO } from "@/components/SEO",
import { ProtectedRoute } from "@/components/ProtectedRoute",
export default function EnterpriseBilling() {
<<<<<<< HEAD
  }
=======
  const { user } = useAuth(),
  
>>>>>>> origin/chore/fix-lint-and-merge
  // Check if user has billing permissions
  const hasBillingAccess = user?.role === "enterprise_admin" || 
                          (user?.permissions && user.permissions.includes('billing_access')),

  if (!hasBillingAccess) {
    return <Navigate to="/unauthorized" />
  }
<<<<<<< HEAD
return (;
import { Header } from "@/components/Header";"
import { Footer } from "@/components/Footer",;"
import { BillingDashboard } from "@/components/enterprise/billing/BillingDashboard",;"
import { useAuth } from "@/hooks/useAuth",;"
import { Navigate } from "react-router-dom",;"
import { SEO } from "@/components/SEO",;"
import { ProtectedRoute } from "@/components/ProtectedRoute",;"
export default function EnterpriseBilling() {;
  }
  // Check if user has billing permissions;
                          (user?.permissions && user.permissions.includes('billing_access'));'
=======
  return (

import React from "react",;
import { Header } from "@/components/Header",;
import { Footer } from "@/components/Footer",;
import { BillingDashboard } from "@/components/enterprise/billing/BillingDashboard",;
import { useAuth } from "@/hooks/useAuth",;
import { Navigate } from "react-router-dom",;
import { SEO } from "@/components/SEO",;
import { ProtectedRoute } from "@/components/ProtectedRoute",;
export default function EnterpriseBilling() {;
  const { user } = useAuth();
  // Check if user has billing permissions;
  const hasBillingAccess = user?.role === "enterprise_admin" ||;
                          (user?.permissions && user.permissions.includes('billing_access'));
>>>>>>> origin/chore/fix-lint-and-merge
  if (!hasBillingAccess) {;
    return <Navigate to="/unauthorized" />;
  }
;
  return (;
<<<<<<< HEAD
    <ProtectedRoute>;

=======
<<<<<<< HEAD
  }
  return (
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
    <ProtectedRoute>;
      <SEO
        title="Enterprise Billing - Zion AI Marketplace"
        description="Manage your subscription, view invoice history, and download billing statements."
<<<<<<< HEAD

import React from "react",;
import { Header } from "@/components/Header",;
import { Footer } from "@/components/Footer",;
import { BillingDashboard } from "@/components/enterprise/billing/BillingDashboard",;
import { useAuth } from "@/hooks/useAuth",;
import { Navigate } from "react-router-dom",;
import { SEO } from "@/components/SEO",;
import { ProtectedRoute } from "@/components/ProtectedRoute",;
;
export default function EnterpriseBilling() {;
  const { user } = useAuth(),;
  ;
  // Check if user has billing permissions;
  const hasBillingAccess = user?.role === "enterprise_admin" || ;
                          (user?.permissions && user.permissions.includes('billing_access')),;
  ;
  if (!hasBillingAccess) {;
    return <Navigate to="/unauthorized" />,;
  }
;
  return (;
    <ProtectedRoute>;
      <SEO ;
        title="Enterprise Billing - Zion AI Marketplace";
        description="Manage your subscription, view invoice history, and download billing statements.";
    <ProtectedRoute>;
      <SEO;
        title="Enterprise Billing - Zion AI Marketplace";
        description="Manage your subscription, view invoice history, and download billing statements.";
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
      />;
      <Header />;
      <main className="min-h-screen bg-background">;
        <BillingDashboard />;
      </main>;
      <Footer />;
    </ProtectedRoute>;
<<<<<<< HEAD
=======
<<<<<<< HEAD



}
=======
  );
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339

<<<<<<< HEAD
}
<<<<<<< HEAD
  }
return (;
import React from './react';'
import { Header } from '@/components / Header';'
import { Footer } from '@/components / Footer';'
import { BillingDashboard } from '@/components / enterprise / billing / BillingDashboard';'
import { use_auth } from '@/hooks / use_auth';'
import { Navigate } from './react-router-dom';'
import { SEO } from '@/components / SEO';'
import { ProtectedRoute } from '@/components / ProtectedRoute';'
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
import React from './react';
import { Header } from '@/components / Header';
import { Footer } from '@/components / Footer';
import { BillingDashboard } from '@/components / enterprise / billing / BillingDashboard';
import { use_auth } from '@/hooks / use_auth';
import { Navigate } from './react-router-dom';
import { SEO } from '@/components / SEO';
import { ProtectedRoute } from '@/components / ProtectedRoute';
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
export default /**
 * EnterpriseBilling - Function description
 */
function EnterpriseBilling() {
  }
  const { user } = use_auth ();
;
  // Check if user has billing permissions;
                          (user?.permissions && user.permissions.includes ('billing_access'));'
;
  // Check condition,
if ( {) {
  $2
}
    return <Navigate to="/unauthorized" />;"
  }
return (;
    <ProtectedRoute>;
      <SEO;
        title="Enterprise Billing - Zion AI Marketplace";"
        description="Manage your subscription, view invoice history, and download billing statements.";" />;
      <Header />;
      <main className="min - h-screen bg-background">;"
        <BillingDashboard />;
      </main>;
      <Footer />;
    </ProtectedRoute>);
}
<<<<<<< HEAD
  )
}
}
;
=======
      />
      <Header />
      <main className="min-h-screen bg-background">
        <BillingDashboard />
      </main>
      <Footer />
    </ProtectedRoute>
>>>>>>> origin/chore/fix-lint-and-merge
=======
<<<<<<< HEAD
  ),;}
 export default function EnterpriseBilling () {
  const {
  user 
}= useAuth ();
//Check if user has billing permissions 
}Enterprise Billing - Zion AI Marketplace"description=" Manage your subscription, view invoice history, and download billing statements."/> <Header /> <main className=" min-h-screen bg-background" > <BillingDashboard /> </main> <Footer /> </ProtectedRoute>) 
}
  );
}
;
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
