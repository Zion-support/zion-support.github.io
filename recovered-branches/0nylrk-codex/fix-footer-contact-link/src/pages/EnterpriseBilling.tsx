






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

    <ProtectedRoute>;
      <SEO
        title="Enterprise Billing - Zion AI Marketplace"
        description="Manage your subscription, view invoice history, and download billing statements."
      />;
      <Header />;
      <main className="min-h-screen bg-background">;
        <BillingDashboard />;
      </main>;
      <Footer />;
    </ProtectedRoute>;
  );







>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-71ba



>>>>>>> cursor/fix-website-loading-errors-and-merge-6662

>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4



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


