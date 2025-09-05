
import React from &quot;react&quot;;
import { Header } from &quot;@/components/Header&quot;;
import { Footer } from &quot;@/components/Footer&quot;;
import { AdminDashboard } from &quot;@/components/enterprise/admin/AdminDashboard&quot;;
import { useAuth } from &quot;@/hooks/useAuth&quot;;
import { Navigate } from &quot;react-router-dom&quot;;
import { SEO } from &quot;@/components/SEO&quot;;
import { ProtectedRoute } from &quot;@/components/ProtectedRoute&quot;;

export default function EnterpriseAdmin() {
  const { user } = useAuth();
  
  // Check if user has enterprise admin role
  const isEnterpriseAdmin = user?.role === &quot;enterprise_admin&quot;;
  
  if (!isEnterpriseAdmin) {
    return <Navigate to=&quot;/unauthorized&quot; />;
  }

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
  );
}
