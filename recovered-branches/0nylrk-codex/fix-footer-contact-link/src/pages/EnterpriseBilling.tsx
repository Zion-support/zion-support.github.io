<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
import React from "react";
import {Header} from "@/components/Header";
import {Footer} from "@/components/Footer";
import {BillingDashboard} from "@/components/enterprise/billing/BillingDashboard";
import {useAuth} from "@/hooks/useAuth";
import {Navigate} from "react-router-dom";
import {SEO} from "@/components/SEO";
import {ProtectedRoute} from "@/components/ProtectedRoute";
export default function EnterpriseBilling() {;
  const { user } = useAuth();
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
  }
  return (

=======

=======
=======

  if (!hasBillingAccess) {
    return <Navigate to="/unauthorized" />
  }
  return (
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
import React from "react",
import { Header } from "@/components/Header",
import { Footer } from "@/components/Footer",
import { BillingDashboard } from "@/components/enterprise/billing/BillingDashboard",
import { useAuth } from "@/hooks/useAuth",
import { Navigate } from "react-router-dom",

  // Check if user has billing permissions
const hasBillingAccess = user?.role === "enterprise_admin" ||
                          (user?.permissions && user.permissions.includes('billing_access')),
import { ProtectedRoute } from "@/components/ProtectedRoute";
export default function EnterpriseBilling() {};
  const { user } = useAuth();

// Check if user has billing permissions
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f

  // Check if user has billing permissions;
  const hasBillingAccess = user?.role === "enterprise_admin" || ;
                          (user?.permissions && user && user.permissions.includes('billing_access'));

  if (!hasBillingAccess) {;
    return <Navigate to="/unauthorized" />;

import { SEO } from "@/components/SEO",
import { ProtectedRoute } from "@/components/ProtectedRoute",
export default function EnterpriseBilling() {
  const { user } = useAuth(),

  // Check if user has billing permissions
  const hasBillingAccess = user?.role === "enterprise_admin" || 
                          (user?.permissions && user.permissions.includes('billing_access')),

>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
  if (!hasBillingAccess) {
    return <Navigate to="/unauthorized" />
  }
  return (
<ProtectedRoute>
      <SEO
        title="Enterprise Billing - Zion AI Marketplace"
        description="Manage your subscription, view invoice history, and download billing statements."
      />
      <Header />
      <main className="min-h-screen bg-background">
        <BillingDashboard />
      </main>
      <Footer />
    </ProtectedRoute>
  )

>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
import React from "react",;
import { Header } from "@/components/Header",;
import { Footer } from "@/components/Footer",;
import { BillingDashboard } from "@/components/enterprise/billing/BillingDashboard",;
import { useAuth } from "@/hooks/useAuth",;
import { Navigate } from "react-router-dom",;
import { SEO } from "@/components/SEO",;
import { ProtectedRoute } from "@/components/ProtectedRoute",;
export default function EnterpriseBilling() {;
  const { user } = useAuth();
  // Check if user has billing permissions;
  const hasBillingAccess = user?.role === "enterprise_admin" ||;
                          (user?.permissions && user.permissions.includes('billing_access'));
  if (!hasBillingAccess) {;
=======
import React from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { BillingDashboard } from "@/components/enterprise/billing/BillingDashboard";
import { useAuth } from "@/hooks/useAuth";
import { Navigate } from "react-router-dom";
import { SEO } from "@/components/SEO";
import { ProtectedRoute } from "@/components/ProtectedRoute";
export default function EnterpriseBilling() {
  const { user } = useAuth();

  // Check if user has billing permissions
  const hasBillingAccess =
    user?.role === "enterprise_admin" ||
    (user?.permissions && user.permissions.includes("billing_access"));
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a

if (!hasBillingAccess) {
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-f3c8
    return <Navigate to="/unauthorized" />;

import { SEO } from "@/components/SEO",
import { ProtectedRoute } from "@/components/ProtectedRoute",
export default function EnterpriseBilling() {
  const { user } = useAuth(),

  // Check if user has billing permissions
  const hasBillingAccess = user?.role === "enterprise_admin" || 
                          (user?.permissions && user.permissions.includes('billing_access')),
  if (!hasBillingAccess) {
    return <Navigate to="/unauthorized" />
  }
  return (

import React from "react",;
import { Header } from "@/components/Header",;
import { Footer } from "@/components/Footer",;
import { BillingDashboard } from "@/components/enterprise/billing/BillingDashboard",;
import { useAuth } from "@/hooks/useAuth",;
import { Navigate } from "react-router-dom",;
import { SEO } from "@/components/SEO",;
import { ProtectedRoute } from "@/components/ProtectedRoute",;
export default function EnterpriseBilling() {;
  const { user } = useAuth();
  // Check if user has billing permissions;
  const hasBillingAccess = user?.role === "enterprise_admin" ||;
                          (user?.permissions && user.permissions.includes('billing_access'));
  if (!hasBillingAccess) {;
    return <Navigate to="/unauthorized" />;
  }
;
  return (;
    <ProtectedRoute>;
<SEO
        title="Enterprise Billing - Zion AI Marketplace"
        description="Manage your subscription, view invoice history, and download billing statements."
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
      />;
      <Header />;
      <main className="min-h-screen bg-background">;
        <BillingDashboard />;
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
      />
      <Header />
      <main className="min-h-screen bg-background">
        <BillingDashboard />
      </main>
      <Footer />
    </ProtectedRoute>
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-f3c8
  );
}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
=======
=======

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
import { BillingDashboard } from '@/components / enterprise / billing / BillingDashboard';'
import { use_auth } from '@/hooks / use_auth';'
import { Navigate } from './react-router-dom';'
import { SEO } from '@/components / SEO';'
import { ProtectedRoute } from '@/components / ProtectedRoute';
export default /**;
 * EnterpriseBilling - Function description;
 */
function EnterpriseBilling() {}
  const { user } = use_auth ();
;
// Check if user has billing permissions;
  const hasBillingAccess = user?.role === "enterprise_admin" ||;
                          (user?.permissions && user.permissions.includes ('billing_access'));
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
        title="Enterprise Billing - Zion AI Marketplace";
        description="Manage your subscription, view invoice history, and download billing statements.";
      />;
      <Header />;
      <main className="min - h-screen bg-background">;
        <BillingDashboard />;
      </main>;
      <Footer />;
    </ProtectedRoute>);
}
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
  ),;}
 export default function EnterpriseBilling () {
  const {
  user 
}= useAuth ();
//Check if user has billing permissions 
}Enterprise Billing - Zion AI Marketplace"description=" Manage your subscription, view invoice history, and download billing statements."/> <Header /> <main className=" min-h-screen bg-background" > <BillingDashboard /> </main> <Footer /> </ProtectedRoute>) 
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
import { BillingDashboard } from "@/components/enterprise/billing/BillingDashboard";""
import { useAuth } from "@/hooks/useAuth";""
import { Navigate } from "react-router-dom";""
import { SEO } from "@/components/SEO";""
import { ProtectedRoute } from "@/components/ProtectedRoute";"
export default function EnterpriseBilling() {
  const { user } = useAuth();

  // Check if user has billing permissions;
  const hasBillingAccess ="
    user?.role === "enterprise_admin" ||""
    (user?.permissions && user.permissions.includes("billing_access"));"
  if (!hasBillingAccess) {"
    return <Navigate to="/unauthorized" />;"

    <ProtectedRoute>

      <SEO;"
        title="Enterprise Billing - Zion AI Marketplace"""
        description="Manage your subscription, view invoice history, and download billing statements.""
      />

      <Header />
"
      <main className="min-h-screen bg-background">"
</main>
        <BillingDashboard />

      <Footer />

    <ProtectedRoute>;

        title="Enterprise Billing - Zion AI Marketplace";""
        description="Manage your subscription, view invoice history, and download billing statements.";"

      />;

      <Header />;
      <main className="min - h-screen bg - background">;"

</Header>"
      <main className="min - h-screen bg - background">;"
</main>

        <BillingDashboard />;

      </main>;
      <Footer />;

    );"
}Enterprise Billing - Zion AI Marketplace"description=" Manage your subscription, view invoice history, and download billing statements."/> <Header /> <main className=" min-h-screen bg-background" > <BillingDashboard /> </main> <Footer /> )"
pr-12325
</Footer>
    </ProtectedRoute>);"
}Enterprise Billing - Zion AI Marketplace"description=" Manage your subscription, view invoice history, and download billing statements."/> <Header /> <main className=" min-h-screen bg-background" > <BillingDashboard /> </main> <Footer /> </ProtectedRoute>)"
</Header>"

>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
