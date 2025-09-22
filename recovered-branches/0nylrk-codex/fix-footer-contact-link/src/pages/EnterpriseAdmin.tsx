
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
  }
  return (



  if (!isEnterpriseAdmin) {
    return <Navigate to="/unauthorized" />
  }
  return (
import React from "react",
import { Header } from "@/components/Header",
import { Footer } from "@/components/Footer",
import { AdminDashboard } from "@/components/enterprise/admin/AdminDashboard",
import { useAuth } from "@/hooks/useAuth",
import { Navigate } from "react-router-dom",

  // Check if user has enterprise admin role
const isEnterpriseAdmin = user?.role === "enterprise_admin",

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
  const isEnterpriseAdmin = user?.role === "enterprise_admin";

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
      />;
      <Header />;
      <main className="min-h-screen bg-background">;
        <AdminDashboard />;
      </main>;
      <Footer />;
    </ProtectedRoute>;
  );
}
  );
}
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


  );
}

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

'"

import React from "react";""
import { Header } from "@/components/Header";""
import { Footer } from "@/components/Footer";""
import { AdminDashboard } from "@/components/enterprise/admin/AdminDashboard";""
import { useAuth } from "@/hooks/useAuth";""
import { Navigate } from "react-router-dom";""
import { SEO } from "@/components/SEO";""
import { ProtectedRoute } from "@/components/ProtectedRoute";"
export default function EnterpriseAdmin() {
  const { user } = useAuth();

  // Check if user has enterprise admin role;"
  const isEnterpriseAdmin = user?.role === "enterprise_admin";"
  if (!isEnterpriseAdmin) {"
    return <Navigate to="/unauthorized" />;"

    <ProtectedRoute>

      <SEO;"
        title="Enterprise Admin - Zion AI Marketplace"""
        description="Manage your team's access, roles, and usage on the Zion AI Marketplace.""
      />

      <Header />
"
      <main className="min-h-screen bg-background">"
</main>
        <AdminDashboard />

      <Footer />

    <ProtectedRoute>;

        title="Enterprise Admin - Zion AI Marketplace";""
        description="Manage your team's access, roles, and usage on the Zion AI Marketplace.";"

      />;

      <Header />;
      <main className="min - h-screen bg - background">;"

</Header>"
      <main className="min - h-screen bg - background">;"
</main>

        <AdminDashboard />;

      </main>;
      <Footer />;

    );"
}Enterprise Admin - Zion AI Marketplace"description=" Manage your team's access, roles, and usage on the Zion AI Marketplace."/> <Header /> <main className=" min-h-screen bg-background" > <AdminDashboard /> </main> <Footer /> )"
pr-12325
</Footer>
    </ProtectedRoute>);"
}Enterprise Admin - Zion AI Marketplace"description=" Manage your team's access, roles, and usage on the Zion AI Marketplace."/> <Header /> <main className=" min-h-screen bg-background" > <AdminDashboard /> </main> <Footer /> </ProtectedRoute>)"
</Header>"

