
import React from "react";

export default function EnterpriseAdmin() {_const { user} = useAuth();
  
  // Check if user has enterprise admin role
  const _isEnterpriseAdmin = user?.role === "enterprise_admin";
  
  if (!isEnterpriseAdmin) {_return <Navigate to="/unauthorized" />;}

  return (
    <ProtectedRoute>
      <SEO 
        title="Enterprise Admin - Zion AI Marketplace"
        description="Manage your team's access, roles, and usage on the Zion AI Marketplace."
      />
      <Header />
      <main className="min-h-screen bg-background">
        <AdminDashboard />
      </main>
      <Footer />
    </ProtectedRoute>
  );
}
