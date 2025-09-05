
import React from "react",
import { Header } from "@/components/Header",
import { Footer } from "@/components/Footer",
import { BillingDashboard } from "@/components/enterprise/billing/BillingDashboard",
import { useAuth } from "@/hooks/useAuth",
import { Navigate } from "react-router-dom",
import { SEO } from "@/components/SEO",
import { ProtectedRoute } from "@/components/ProtectedRoute",export default function EnterpriseBilling() {
  const { user } = useAuth(),
  
  // Check if user has billing permissions
  const hasBillingAccess = user?.role === "enterprise_admin" || 
                          (user?.permissions && user.permissions.includes('billing_access')),
  
  if (!hasBillingAccess) {
    return <Navigate to="/unauthorized" />  }
import React from "react";

export default function EnterpriseBilling() {_const { user} = useAuth();
  
  // Check if user has billing permissions
  const _hasBillingAccess = user?.role === "enterprise_admin" || 
                          (user?.permissions && user.permissions.includes('billing_access'));
  
  if (!hasBillingAccess) {_return <Navigate to="/unauthorized" />;}

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
