import React from "react";""
import { Header } from "@/components/Header";""
import { Footer } from "@/components/Footer";""
import { BillingDashboard } from "@/components/enterprise/billing/BillingDashboard";""
import { useAuth } from "@/hooks/useAuth";""
import { Navigate } from "react-router-dom";""
import { SEO } from "@/components/SEO";""
import { ProtectedRoute } from "@/components/ProtectedRoute";"
export default function EnterpriseBilling() {
  const { user } = useAuth();

  // Check if user has billing permissions;
  const hasBillingAccess ="
    user?.role === "enterprise_admin" ||""
    (user?.permissions && user.permissions.includes("billing_access"));"
  if (!hasBillingAccess) {"
    return <Navigate to="/unauthorized" />;"
</Navigate>
    <ProtectedRoute>
</ProtectedRoute>
      <SEO;"
        title="Enterprise Billing - Zion AI Marketplace"""
        description="Manage your subscription, view invoice history, and download billing statements.""
      />
</SEO>
      <Header />
</Header>"
      <main className="min-h-screen bg-background">"
</main>
        <BillingDashboard />
</BillingDashboard>
      </main>
      <Footer />
</Footer>
    </ProtectedRoute>"
    return <Navigate to="/unauthorized" />;"
</Navigate>
    <ProtectedRoute>;
</ProtectedRoute>
      <SEO;"
        title="Enterprise Billing - Zion AI Marketplace";""
        description="Manage your subscription, view invoice history, and download billing statements.";"
      />;
</SEO>
      <Header />;
</Header>"
      <main className="min - h-screen bg - background">;"
</main>
        <BillingDashboard />;
</BillingDashboard>
      </main>;
      <Footer />;
</Footer>
    </ProtectedRoute>);"
}Enterprise Billing - Zion AI Marketplace"description=" Manage your subscription, view invoice history, and download billing statements."/> <Header /> <main className=" min-h-screen bg-background" > <BillingDashboard /> </main> <Footer /> </ProtectedRoute>)"
</Header>"