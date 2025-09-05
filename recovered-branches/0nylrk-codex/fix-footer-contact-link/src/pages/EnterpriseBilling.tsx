
import React from &quot;react&quot;;
import { Header } from &quot;@/components/Header&quot;;
import { Footer } from &quot;@/components/Footer&quot;;
import { BillingDashboard } from &quot;@/components/enterprise/billing/BillingDashboard&quot;;
import { useAuth } from &quot;@/hooks/useAuth&quot;;
import { Navigate } from &quot;react-router-dom&quot;;
import { SEO } from &quot;@/components/SEO&quot;;
import { ProtectedRoute } from &quot;@/components/ProtectedRoute&quot;;

export default function EnterpriseBilling() {
  const { user } = useAuth();
  
  // Check if user has billing permissions
  const hasBillingAccess = user?.role === &quot;enterprise_admin&quot; || 
                          (user?.permissions && user.permissions.includes('billing_access'));
  
  if (!hasBillingAccess) {
    return <Navigate to=&quot;/unauthorized&quot; />;
  }

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
  );
}
