import React from "react";
import { SEO } from "@/components/SEO";
import { AppHeader } from "@/layout/AppHeader";
import { Footer } from "@/components/Footer";
import { DisputeDashboard } from "@/components/disputes";
import { ProtectedRoute } from "@/components/ProtectedRoute";
function DisputesPage() {
  return (
    <ProtectedRoute>
      <>
        <SEO
          title="Dispute Resolution Center | Zion AI Marketplace"
          description="View and manage disputes between clients and talents"
        />
        <AppHeader />
        <DisputeDashboard />
        <Footer />
      </>
    </ProtectedRoute>
  );
}

        <SEO
          title="Dispute Resolution Center | Zion AI Marketplace"
=======
import {SEO} from '@/components/SEO';
import {AppHeader} from '@/layout/AppHeader';
import {Footer} from '@/components/Footer';
import {DisputeDashboard} from '@/components/disputes';
import {ProtectedRoute} from '@/components/ProtectedRoute';
function DisputesPage() {;
  return (
    <ProtectedRoute>;
      <>;
        <SEO
          title="Dispute Resolution Center | Zion AI Marketplace" 
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
          description="View and manage disputes between clients and talents"
=======
import React from 'react';
import {SEO} from '@/components / SEO';
import {AppHeader} from '@/layout / AppHeader';
import {Footer} from '@/components / Footer';
import {DisputeDashboard} from '@/components / disputes';
import {ProtectedRoute} from '@/components / ProtectedRoute';
/**
 * DisputesPage - Function description
 */
function DisputesPage() {
  return (
    <ProtectedRoute>;
      <>;
        <SEO;
          title="Dispute Resolution Center | Zion AI Marketplace";
          description="View and manage disputes between clients and talents";
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
        />;
        <AppHeader />;
        <DisputeDashboard />;
        <Footer />;
      </>;



=======
;


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
export default DisputesPage;

=======
    </ProtectedRoute>);
}
export default DisputesPage;
;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
