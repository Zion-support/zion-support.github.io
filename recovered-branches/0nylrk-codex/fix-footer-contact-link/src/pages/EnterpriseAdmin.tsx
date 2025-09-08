
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
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

  return (


=======

  }
import React from "react",
import { Header } from "@/components/Header",
import { Footer } from "@/components/Footer",
import { AdminDashboard } from "@/components/enterprise/admin/AdminDashboard",
import { useAuth } from "@/hooks/useAuth",
import { Navigate } from "react-router-dom",

  // Check if user has enterprise admin role

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
import React from "react",
import { Header } from "@/components/Header",
import { Footer } from "@/components/Footer",
import { AdminDashboard } from "@/components/enterprise/admin/AdminDashboard",
import { useAuth } from "@/hooks/useAuth",
import { Navigate } from "react-router-dom",
import { SEO } from "@/components/SEO";
import { ProtectedRoute } from "@/components/ProtectedRoute";
export default function EnterpriseAdmin() {
  const { user } = useAuth($2);
  // Check if user has enterprise admin role
  const isEnterpriseAdmin = $2;
  // Check if user has enterprise admin role

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
>>>>>>> origin/cursor/delete-old-data-records-6bba
  if (!isEnterpriseAdmin) {;
    return <Navigate to="/unauthorized" />;
  }
;
  return (;

<<<<<<< HEAD

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
    <ProtectedRoute>;
      <SEO
        title="Enterprise Admin - Zion AI Marketplace"
        description="Manage your team's access, roles, and usage on the Zion AI Marketplace."

<<<<<<< HEAD

=======
      />;
>>>>>>> origin/cursor/delete-old-data-records-6bba
      <Header />;
      <main className="min-h-screen bg-background">;
        <AdminDashboard />;
      </main>;
      <Footer />;
<<<<<<< HEAD

    </ProtectedRoute>;


=======

>>>>>>> origin/cursor/delete-old-data-records-6bba
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

;



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

    </ProtectedRoute>;
>>>>>>> origin/cursor/delete-old-data-records-6bba
