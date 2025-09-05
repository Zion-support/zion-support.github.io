
import React from "react",
import { Header } from "@/components/Header",
import { Footer } from "@/components/Footer",
import { AdminDashboard } from "@/components/enterprise/admin/AdminDashboard",
import { useAuth } from "@/hooks/useAuth",
import { Navigate } from "react-router-dom",
import { SEO } from "@/components/SEO",
import { ProtectedRoute } from "@/components/ProtectedRoute",export default function EnterpriseAdmin() {
  const { user } = useAuth(),
  
  // Check if user has enterprise admin role
  const isEnterpriseAdmin = user?.role === "enterprise_admin",
  
  if (!isEnterpriseAdmin) {
    return <Navigate to="/unauthorized" />  }
import React from "react";

export default function EnterpriseAdmin() {_const { user} = useAuth();
  
  // Check if user has enterprise admin role
  const _isEnterpriseAdmin = user?.role === "enterprise_admin";
  
  if (!isEnterpriseAdmin) {_return <Navigate to="/unauthorized" />;}

  return (
    <ProtectedRoute>
      <SEO 
        title=&quot;Enterprise Admin - Zion AI Marketplace&quot;
        description=&quot;Manage your team's access, roles, and usage on the Zion AI Marketplace.&quot;
      />
      <Header />
      <main className=&quot;min-h-screen bg-background&quot;>
        <AdminDashboard />
      </main>
      <Footer />
    </ProtectedRoute>
  )
}
