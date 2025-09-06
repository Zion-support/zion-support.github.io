
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
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
  }
  return (

=======


=======
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




>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
=======
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
