<<<<<<< HEAD
=======
<<<<<<< HEAD
=======

<<<<<<< HEAD
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

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
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

<<<<<<< HEAD
  }
<<<<<<< HEAD
=======
  return (

=======
<<<<<<< HEAD

  if (!isEnterpriseAdmin) {
    return <Navigate to="/unauthorized" />
  }
  return (
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> merged-prs-20250907-203621
import React from "react",
import { Header } from "@/components/Header",
import { Footer } from "@/components/Footer",
import { AdminDashboard } from "@/components/enterprise/admin/AdminDashboard",
import { useAuth } from "@/hooks/useAuth",
import { Navigate } from "react-router-dom",
<<<<<<< HEAD
import { SEO } from "@/components/SEO";
import { ProtectedRoute } from "@/components/ProtectedRoute";
export default function EnterpriseAdmin() {
  const { user } = useAuth($2);
  // Check if user has enterprise admin role
  const isEnterpriseAdmin = $2;
=======
<<<<<<< HEAD

>>>>>>> origin/chore/fix-lint-and-merge
  // Check if user has enterprise admin role

=======
import { SEO } from "@/components/SEO";
import { ProtectedRoute } from "@/components/ProtectedRoute";
export default function EnterpriseAdmin() {
  const { user } = useAuth();
  // Check if user has enterprise admin role

  const isEnterpriseAdmin = user?.role === "enterprise_admin";

import { SEO } from "@/components/SEO",
import { ProtectedRoute } from "@/components/ProtectedRoute",
export default function EnterpriseAdmin() {
  const { user } = useAuth(),
  
  // Check if user has enterprise admin role
  const isEnterpriseAdmin = user?.role === "enterprise_admin",
  
>>>>>>> merged-prs-20250907-203621
  if (!isEnterpriseAdmin) {
    return <Navigate to="/unauthorized" />
  }
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
  )
<<<<<<< HEAD
=======



}
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
  // Check if user has enterprise admin role;
  const isEnterpriseAdmin = user?.role === "enterprise_admin";

import { SEO } from "@/components/SEO",
import { ProtectedRoute } from "@/components/ProtectedRoute",
export default function EnterpriseAdmin() {
  const { user } = useAuth(),
  
  // Check if user has enterprise admin role
  const isEnterpriseAdmin = user?.role === "enterprise_admin",

  if (!isEnterpriseAdmin) {
    return <Navigate to="/unauthorized" />
  }
<<<<<<< HEAD
return (;
import { Header } from "@/components/Header";"
import { Footer } from "@/components/Footer",;"
import { AdminDashboard } from "@/components/enterprise/admin/AdminDashboard",;"
import { useAuth } from "@/hooks/useAuth",;"
import { Navigate } from "react-router-dom",;"
import { SEO } from "@/components/SEO",;"
import { ProtectedRoute } from "@/components/ProtectedRoute",;"
export default function EnterpriseAdmin() {;
  }
  // Check if user has enterprise admin role;
=======
  return (

import React from "react",;
import { Header } from "@/components/Header",;
import { Footer } from "@/components/Footer",;
import { AdminDashboard } from "@/components/enterprise/admin/AdminDashboard",;
import { useAuth } from "@/hooks/useAuth",;
import { Navigate } from "react-router-dom",;
import { SEO } from "@/components/SEO",;
import { ProtectedRoute } from "@/components/ProtectedRoute",;
export default function EnterpriseAdmin() {;
  const { user } = useAuth();
  // Check if user has enterprise admin role;

import React from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { AdminDashboard } from "@/components/enterprise/admin/AdminDashboard";
import { useAuth } from "@/hooks/useAuth";
import { Navigate } from "react-router-dom";
import { SEO } from "@/components/SEO";

import { ProtectedRoute } from "@/components/ProtectedRoute";
export default function EnterpriseAdmin() {
  const { user } = useAuth();

  // Check if user has enterprise admin role

  if (!isEnterpriseAdmin) {
    return <Navigate to="/unauthorized" />
  }
  return (

<<<<<<< HEAD
=======
=======


=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
import React from "react",;
import { Header } from "@/components/Header",;
import { Footer } from "@/components/Footer",;
import { AdminDashboard } from "@/components/enterprise/admin/AdminDashboard",;
import { useAuth } from "@/hooks/useAuth",;
import { Navigate } from "react-router-dom",;
import { SEO } from "@/components/SEO",;
import { ProtectedRoute } from "@/components/ProtectedRoute",;
export default function EnterpriseAdmin() {;
  const { user } = useAuth();
  // Check if user has enterprise admin role;
  const isEnterpriseAdmin = user?.role === "enterprise_admin";
>>>>>>> origin/chore/fix-lint-and-merge
  if (!isEnterpriseAdmin) {;
    return <Navigate to="/unauthorized" />;
  }
;
  return (;
<<<<<<< HEAD
=======
<<<<<<< HEAD
  }
  return (
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
    <ProtectedRoute>;
      <SEO
        title="Enterprise Admin - Zion AI Marketplace"
        description="Manage your team's access, roles, and usage on the Zion AI Marketplace."
<<<<<<< HEAD

<<<<<<< HEAD
}
  }
return (;
import React from './react';'
import { Header } from '@/components / Header';'
import { Footer } from '@/components / Footer';'
import { AdminDashboard } from '@/components / enterprise / admin / AdminDashboard';'
import { use_auth } from '@/hooks / use_auth';'
import { Navigate } from './react-router-dom';'
import { SEO } from '@/components / SEO';'
import { ProtectedRoute } from '@/components / ProtectedRoute';'
export default /**
 * EnterpriseAdmin - Function description
 */
function EnterpriseAdmin() {
  }
  const { user } = use_auth ();
;
  // Check if user has enterprise admin role;
;
  // Check condition,
if ( {) {
  $2
}
    return <Navigate to="/unauthorized" />;"
  }
return (;
    <ProtectedRoute>;
      <SEO;
        title="Enterprise Admin - Zion AI Marketplace";"
        description="Manage your team's access, roles, and usage on the Zion AI Marketplace.";" />;
=======
=======
<<<<<<< HEAD

import React from "react",;
import { Header } from "@/components/Header",;
import { Footer } from "@/components/Footer",;
import { AdminDashboard } from "@/components/enterprise/admin/AdminDashboard",;
import { useAuth } from "@/hooks/useAuth",;
import { Navigate } from "react-router-dom",;
import { SEO } from "@/components/SEO",;
import { ProtectedRoute } from "@/components/ProtectedRoute",;
;
export default function EnterpriseAdmin() {;
  const { user } = useAuth(),;
  ;
  // Check if user has enterprise admin role;
  const isEnterpriseAdmin = user?.role === "enterprise_admin",;
  ;
  if (!isEnterpriseAdmin) {;
    return <Navigate to="/unauthorized" />,;
  }
;
  return (;
    <ProtectedRoute>;
      <SEO ;
        title="Enterprise Admin - Zion AI Marketplace";
        description="Manage your team's access, roles, and usage on the Zion AI Marketplace.";
    <ProtectedRoute>;
      <SEO;
        title="Enterprise Admin - Zion AI Marketplace";
        description="Manage your team's access, roles, and usage on the Zion AI Marketplace.";
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
      />;
>>>>>>> origin/chore/fix-lint-and-merge
      <Header />;
      <main className="min-h-screen bg-background">;
        <AdminDashboard />;
      </main>;
      <Footer />;
<<<<<<< HEAD
    </ProtectedRoute>;
=======
    </ProtectedRoute>;
<<<<<<< HEAD



}
=======
  );




>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
import React from './react';
import { Header } from '@/components / Header';
import { Footer } from '@/components / Footer';
import { AdminDashboard } from '@/components / enterprise / admin / AdminDashboard';
import { use_auth } from '@/hooks / use_auth';
import { Navigate } from './react-router-dom';
import { SEO } from '@/components / SEO';
import { ProtectedRoute } from '@/components / ProtectedRoute';
export default /**
 * EnterpriseAdmin - Function description
 */
function EnterpriseAdmin() {
  const { user } = use_auth ();
;
  // Check if user has enterprise admin role;
  const isEnterpriseAdmin = user?.role === "enterprise_admin";
;
  // Check condition
if ( {) {
  $2
}
    return <Navigate to="/unauthorized" />;
  }
  return (
    <ProtectedRoute>;
      <SEO;
        title="Enterprise Admin - Zion AI Marketplace";
        description="Manage your team's access, roles, and usage on the Zion AI Marketplace.";
      />;
      <Header />;
      <main className="min - h-screen bg - background">;
        <AdminDashboard />;
      </main>;
      <Footer />;
    </ProtectedRoute>);
}
<<<<<<< HEAD
  ),;}
 export default function EnterpriseAdmin () {
  const {
  user 
}= useAuth ();
//Check if user has enterprise admin role 
}Enterprise Admin - Zion AI Marketplace"description=" Manage your team's access, roles, and usage on the Zion AI Marketplace."/> <Header /> <main className=" min-h-screen bg-background" > <AdminDashboard /> </main> <Footer /> </ProtectedRoute>) 
>>>>>>> merged-prs-20250907-203621
}
  );
}
<<<<<<< HEAD
;
=======
;
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> merged-prs-20250907-203621
