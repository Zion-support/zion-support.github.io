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


<<<<<<< HEAD

  // Check if user has billing permissions
  const hasBillingAccess =
    user?.role === "enterprise_admin" ||
    (user?.permissions && user.permissions.includes("billing_access"));

  if (!hasBillingAccess) {
    return <Navigate to="/unauthorized" />;
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
  );
}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
import React from './react';
import { Header } from '@/components / Header';
import { Footer } from '@/components / Footer';
import { BillingDashboard } from '@/components / enterprise / billing / BillingDashboard';
import { use_auth } from '@/hooks / use_auth';
import { Navigate } from './react-router-dom';
import { SEO } from '@/components / SEO';
import { ProtectedRoute } from '@/components / ProtectedRoute';
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
export default /**
 * EnterpriseBilling - Function description
 */
function EnterpriseBilling() {
  }
  const { user } = use_auth ();
;
  // Check if user has billing permissions;
                          (user?.permissions && user.permissions.includes ('billing_access'));'
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
        title="Enterprise Billing - Zion AI Marketplace";"
        description="Manage your subscription, view invoice history, and download billing statements.";" />;
      <Header />;
      <main className="min - h-screen bg-background">;"
        <BillingDashboard />;
      </main>;
      <Footer />;
    </ProtectedRoute>);
}

      />
      <Header />
      <main className="min-h-screen bg-background">
        <BillingDashboard />
      </main>
      <Footer />
    </ProtectedRoute>

<<<<<<< HEAD



=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
