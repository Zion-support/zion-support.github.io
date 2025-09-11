
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
  // Check if user has billing permissions;
  const hasBillingAccess = user?.role === "enterprise_admin" || ;
                          (user?.permissions && user && user.permissions.includes('billing_access'));

  if (!hasBillingAccess) {;
    return <Navigate to="/unauthorized" />;
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
  // Check if user has billing permissions;
  const hasBillingAccess = user?.role === "enterprise_admin" || ;
                          (user?.permissions && user && user.permissions.includes('billing_access'));

  if (!hasBillingAccess) {;
    return <Navigate to="/unauthorized" />;



  if (!hasBillingAccess) {
    return <Navigate to="/unauthorized" />
  }
  return (



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
      <SEO ;
        title="Enterprise Billing - Zion AI Marketplace";
        description="Manage your subscription, view invoice history, and download billing statements.";
    <ProtectedRoute>;
      <SEO;
        title="Enterprise Billing - Zion AI Marketplace";
        description="Manage your subscription, view invoice history, and download billing statements.";
      />;
      <Header />;
      <main className="min-h-screen bg-background">;
        <BillingDashboard />;
      </main>;
      <Footer />;
    </ProtectedRoute>;


}




}
import React from './react';
import { Header } from '@/components / Header';
import { Footer } from '@/components / Footer';
import { BillingDashboard } from '@/components / enterprise / billing / BillingDashboard';
import { use_auth } from '@/hooks / use_auth';
import { Navigate } from './react-router-dom';
import { SEO } from '@/components / SEO';
import { ProtectedRoute } from '@/components / ProtectedRoute';
export default /**
 * EnterpriseBilling - Function description
 */
function EnterpriseBilling() {
  const { user } = use_auth ();
;
  // Check if user has billing permissions;
  const hasBillingAccess = user?.role === "enterprise_admin" ||;
                          (user?.permissions && user.permissions.includes ('billing_access'));
;
  // Check condition
if ( {) {
  $2
}
    return <Navigate to="/unauthorized" />;
  }
  return (
    <ProtectedRoute>;
      <SEO;
        title="Enterprise Billing - Zion AI Marketplace";
        description="Manage your subscription, view invoice history, and download billing statements.";
      />;
      <Header />;
      <main className="min - h-screen bg - background">;
        <BillingDashboard />;
      </main>;
      <Footer />;
    </ProtectedRoute>);
}
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
