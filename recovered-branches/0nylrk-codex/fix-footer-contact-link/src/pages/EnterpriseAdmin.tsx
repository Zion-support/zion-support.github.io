
<<<<<<< HEAD
<<<<<<< HEAD
import React from "react",
import { Header } from "@/components/Header",
import { Footer } from "@/components/Footer",
import { AdminDashboard } from "@/components/enterprise/admin/AdminDashboard",
import { useAuth } from "@/hooks/useAuth",
import { Navigate } from "react-router-dom",
import { SEO } from "@/components/SEO",
import { ProtectedRoute } from "@/components/ProtectedRoute",
=======
import React from &quot;react&quot;;
import { Header } from &quot;@/components/Header&quot;;
import { Footer } from &quot;@/components/Footer&quot;;
import { AdminDashboard } from &quot;@/components/enterprise/admin/AdminDashboard&quot;;
import { useAuth } from &quot;@/hooks/useAuth&quot;;
import { Navigate } from &quot;react-router-dom&quot;;
import { SEO } from &quot;@/components/SEO&quot;;
import { ProtectedRoute } from &quot;@/components/ProtectedRoute&quot;;

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
export default function EnterpriseAdmin() {
  const { user } = useAuth(),
  
  // Check if user has enterprise admin role
<<<<<<< HEAD
  const isEnterpriseAdmin = user?.role === "enterprise_admin",
  
  if (!isEnterpriseAdmin) {
    return <Navigate to="/unauthorized" />
=======
  const isEnterpriseAdmin = user?.role === &quot;enterprise_admin&quot;;
  
  if (!isEnterpriseAdmin) {
    return <Navigate to=&quot;/unauthorized&quot; />;
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
  }
=======
import React from "react";

export default function EnterpriseAdmin() {_const { user} = useAuth();
  
  // Check if user has enterprise admin role
  const _isEnterpriseAdmin = user?.role === "enterprise_admin";
  
  if (!isEnterpriseAdmin) {_return <Navigate to="/unauthorized" />;}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13

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
