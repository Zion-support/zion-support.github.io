
import React from "react";

export default function EnterpriseBilling() {_const { user} = useAuth();
  
  // Check if user has billing permissions
  const _hasBillingAccess = user?.role === "enterprise_admin" || 
                          (user?.permissions && user.permissions.includes('billing_access'));
  
  if (!hasBillingAccess) {_return <Navigate to="/unauthorized" />;}

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
  );
}
