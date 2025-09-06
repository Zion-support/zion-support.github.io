
<<<<<<< HEAD
import React from "react",
import { Header } from "@/components/Header",
import { Footer } from "@/components/Footer",
import { AdminDashboard } from "@/components/enterprise/admin/AdminDashboard",
import { useAuth } from "@/hooks/useAuth",
import { Navigate } from "react-router-dom",
import { SEO } from "@/components/SEO";
import { ProtectedRoute } from "@/components/ProtectedRoute";
export default function EnterpriseAdmin() {
  const { user } = useAuth();
  // Check if user has enterprise admin role

  const isEnterpriseAdmin = user?.role === "enterprise_admin";

  if (!isEnterpriseAdmin) {
    return <Navigate to="/unauthorized" />
=======
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
import {AdminDashboard} from "@/components/enterprise/admin/AdminDashboard";
import {useAuth} from "@/hooks/useAuth";
import {Navigate} from "react-router-dom";
import {SEO} from "@/components/SEO";
import {ProtectedRoute} from "@/components/ProtectedRoute";
export default function EnterpriseAdmin() {;
  const { user } = useAuth();

  // Check if user has enterprise admin role;
  const isEnterpriseAdmin = user?.role === "enterprise_admin";

  if (!isEnterpriseAdmin) {;
    return <Navigate to="/unauthorized" />;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
  }
  return (
<<<<<<< HEAD
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
  )
}
=======
    <ProtectedRoute>;
      <SEO
        title="Enterprise Admin - Zion AI Marketplace"
        description="Manage your team's access, roles, and usage on the Zion AI Marketplace."
      />;
      <Header />;
      <main className="min-h-screen bg-background">;
        <AdminDashboard />;
      </main>;
      <Footer />;
    </ProtectedRoute>;
  );
}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
