<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

<<<<<<< HEAD
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
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
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
const isEnterpriseAdmin = user?.role === "enterprise_admin",

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
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { AdminDashboard } from "@/components/enterprise/admin/AdminDashboard";
import { useAuth } from "@/hooks/useAuth";
import { Navigate } from "react-router-dom";
import { SEO } from "@/components/SEO";
=======

>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
import { ProtectedRoute } from "@/components/ProtectedRoute";
export default function EnterpriseAdmin() {
  const { user } = useAuth();

  // Check if user has enterprise admin role
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-f3c8
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
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
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
  );
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
  );
}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
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
=======
  );
}
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31

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
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
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
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======

'"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======

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

>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
