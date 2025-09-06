<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

<<<<<<< HEAD

=======
<<<<<<< HEAD
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

=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
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
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
<<<<<<< HEAD

<<<<<<< HEAD
  // Check if user has enterprise admin role;
  const isEnterpriseAdmin = user?.role === "enterprise_admin";

  if (!isEnterpriseAdmin) {;
    return <Navigate to="/unauthorized" />;

=======


  if (!isEnterpriseAdmin) {
    return <Navigate to="/unauthorized" />
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
  }
  return (

=======


=======
=======

  if (!isEnterpriseAdmin) {
    return <Navigate to="/unauthorized" />
  }
  return (
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
import React from "react",
import { Header } from "@/components/Header",
import { Footer } from "@/components/Footer",
import { AdminDashboard } from "@/components/enterprise/admin/AdminDashboard",
import { useAuth } from "@/hooks/useAuth",
import { Navigate } from "react-router-dom",

  // Check if user has enterprise admin role
<<<<<<< HEAD
  const isEnterpriseAdmin = user?.role === "enterprise_admin",

=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc

  // Check if user has enterprise admin role;
  const isEnterpriseAdmin = user?.role === "enterprise_admin";

import { SEO } from "@/components/SEO",
import { ProtectedRoute } from "@/components/ProtectedRoute",
export default function EnterpriseAdmin() {
  const { user } = useAuth(),
  
  // Check if user has enterprise admin role
  const isEnterpriseAdmin = user?.role === "enterprise_admin",
  
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
  if (!isEnterpriseAdmin) {
    return <Navigate to="/unauthorized" />
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

>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======



<<<<<<< HEAD
}
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
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
=======
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
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
import React from "react",
import { Header } from "@/components/Header",
import { Footer } from "@/components/Footer",
import { AdminDashboard } from "@/components/enterprise/admin/AdminDashboard",
import { useAuth } from "@/hooks/useAuth",
import { Navigate } from "react-router-dom",import { SEO } from "@/components/SEO";
import { ProtectedRoute } from "@/components/ProtectedRoute";
export default function EnterpriseAdmin() {
  const { user } = useAuth();
  // Check if user has enterprise admin role
  // Check if user has enterprise admin role
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-f3c8
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
  const isEnterpriseAdmin = user?.role === "enterprise_admin";
  if (!isEnterpriseAdmin) {;
    return <Navigate to="/unauthorized" />;
  }
;
  return (;
    <ProtectedRoute>;
      <SEO
        title="Enterprise Admin - Zion AI Marketplace"
        description="Manage your team's access, roles, and usage on the Zion AI Marketplace."
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======

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
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
      />;
      <Header />;
      <main className="min-h-screen bg-background">;
        <AdminDashboard />;
      </main>;
      <Footer />;
    </ProtectedRoute>;
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
  );
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
      />
      <Header />
      <main className="min-h-screen bg-background">
        <AdminDashboard />
      </main>
      <Footer />
    </ProtectedRoute>
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-f3c8
  );
}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
=======
import React from "react";"
import { Header } from "@/components/Header";"
import { Footer } from "@/components/Footer";"
import { AdminDashboard } from "@/components/enterprise/admin/AdminDashboard";"
import { useAuth } from "@/hooks/useAuth";"
import { Navigate } from "react-router-dom";"
import { SEO } from "@/components/SEO";"
import { ProtectedRoute } from "@/components/ProtectedRoute";
export default function EnterpriseAdmin() {};
  const { user } = useAuth();


>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934




=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f

}
  }
  return (
import React from './react';'
import { Header } from '@/components / Header';'
import { Footer } from '@/components / Footer';'
import { AdminDashboard } from '@/components / enterprise / admin / AdminDashboard';'
import { use_auth } from '@/hooks / use_auth';'
import { Navigate } from './react-router-dom';'
import { SEO } from '@/components / SEO';'
import { ProtectedRoute } from '@/components / ProtectedRoute';
export default /**;
 * EnterpriseAdmin - Function description;
 */
function EnterpriseAdmin() {}
  const { user } = use_auth ();
;
<<<<<<< HEAD
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
      <main className="min - h-screen bg-background">;
        <AdminDashboard />;
      </main>;
      <Footer />;
    </ProtectedRoute>);
}
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
=======
  ),;}
 export default function EnterpriseAdmin () {
  const {
  user 
}= useAuth ();
//Check if user has enterprise admin role 
}Enterprise Admin - Zion AI Marketplace"description=" Manage your team's access, roles, and usage on the Zion AI Marketplace."/> <Header /> <main className=" min-h-screen bg-background" > <AdminDashboard /> </main> <Footer /> </ProtectedRoute>) 
}
  );
}
;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======



'"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
