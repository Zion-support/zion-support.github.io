
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
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
>>>>>>> origin/cursor/delete-old-data-records-6bba
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
>>>>>>> origin/cursor/delete-old-data-records-6bba
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

  const { user } = useAuth(),
  

=======
  }
>>>>>>> origin/cursor/delete-old-data-records-6bba
  // Check if user has billing permissions
  const hasBillingAccess = user?.role === "enterprise_admin" || 
                          (user?.permissions && user.permissions.includes('billing_access')),

  if (!hasBillingAccess) {
    return <Navigate to="/unauthorized" />
  }
<<<<<<< HEAD

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

  if (!hasBillingAccess) {;
    return <Navigate to="/unauthorized" />;
  }
;
  return (;

=======
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
  if (!hasBillingAccess) {;
    return <Navigate to="/unauthorized" />;
    <ProtectedRoute>;
      <SEO
        title="Enterprise Billing - Zion AI Marketplace"
        description="Manage your subscription, view invoice history, and download billing statements."

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

    <ProtectedRoute>;
>>>>>>> origin/cursor/delete-old-data-records-6bba

      />;
      <Header />;
      <main className="min-h-screen bg-background">;
        <BillingDashboard />;
      </main>;
      <Footer />;
    </ProtectedRoute>;

<<<<<<< HEAD

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
import React from './react';
import { Header } from '@/components / Header';
import { Footer } from '@/components / Footer';
import { BillingDashboard } from '@/components / enterprise / billing / BillingDashboard';
import { use_auth } from '@/hooks / use_auth';
import { Navigate } from './react-router-dom';
import { SEO } from '@/components / SEO';
import { ProtectedRoute } from '@/components / ProtectedRoute';
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
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

      />
      <Header />
      <main className="min-h-screen bg-background">
        <BillingDashboard />
      </main>
      <Footer />
    </ProtectedRoute>

<<<<<<< HEAD



=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
