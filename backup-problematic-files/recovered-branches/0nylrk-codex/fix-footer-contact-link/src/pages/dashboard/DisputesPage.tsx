
=======
import React from 'react',;
import { SEO } from '@/components/SEO',;
import { AppHeader } from '@/layout/AppHeader',;
import { Footer } from '@/components/Footer',;
import { DisputeDashboard } from '@/components/disputes',;
import { ProtectedRoute } from '@/components/ProtectedRoute',;
;
function DisputesPage() {;
  return (;
    <ProtectedRoute>;
      <>;
        <SEO ;
          title="Dispute Resolution Center | Zion AI Marketplace" ;
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
          description="View and manage disputes between clients and talents";
        />;
        <AppHeader />;
        <DisputeDashboard />;
        <Footer />;
      </>;
<<<<<<< HEAD
