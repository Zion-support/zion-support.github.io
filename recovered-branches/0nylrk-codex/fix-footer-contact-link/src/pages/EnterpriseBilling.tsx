
<<<<<<< HEAD
<<<<<<< HEAD
import React from "react",
import { Header } from "@/components/Header",
import { Footer } from "@/components/Footer",
import { BillingDashboard } from "@/components/enterprise/billing/BillingDashboard",
import { useAuth } from "@/hooks/useAuth",
import { Navigate } from "react-router-dom",
import { SEO } from "@/components/SEO",
import { ProtectedRoute } from "@/components/ProtectedRoute",
=======
import React from &quot;react&quot;;
import { Header } from &quot;@/components/Header&quot;;
import { Footer } from &quot;@/components/Footer&quot;;
import { BillingDashboard } from &quot;@/components/enterprise/billing/BillingDashboard&quot;;
import { useAuth } from &quot;@/hooks/useAuth&quot;;
import { Navigate } from &quot;react-router-dom&quot;;
import { SEO } from &quot;@/components/SEO&quot;;
import { ProtectedRoute } from &quot;@/components/ProtectedRoute&quot;;

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
export default function EnterpriseBilling() {
  const { user } = useAuth(),
  
  // Check if user has billing permissions
<<<<<<< HEAD
  const hasBillingAccess = user?.role === "enterprise_admin" || 
                          (user?.permissions && user.permissions.includes('billing_access')),
  
  if (!hasBillingAccess) {
    return <Navigate to="/unauthorized" />
=======
  const hasBillingAccess = user?.role === &quot;enterprise_admin&quot; || 
                          (user?.permissions && user.permissions.includes('billing_access'));
  
  if (!hasBillingAccess) {
    return <Navigate to=&quot;/unauthorized&quot; />;
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
  }
=======
import React from "react";

export default function EnterpriseBilling() {_const { user} = useAuth();
  
  // Check if user has billing permissions
  const _hasBillingAccess = user?.role === "enterprise_admin" || 
                          (user?.permissions && user.permissions.includes('billing_access'));
  
  if (!hasBillingAccess) {_return <Navigate to="/unauthorized" />;}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13

  return (
    <ProtectedRoute>
      <SEO 
        title=&quot;Enterprise Billing - Zion AI Marketplace&quot;
        description=&quot;Manage your subscription, view invoice history, and download billing statements.&quot;
      />
      <Header />
      <main className=&quot;min-h-screen bg-background&quot;>
        <BillingDashboard />
      </main>
      <Footer />
    </ProtectedRoute>
  )
}
