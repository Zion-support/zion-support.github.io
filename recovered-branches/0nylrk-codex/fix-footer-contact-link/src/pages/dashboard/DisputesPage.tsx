
<<<<<<< HEAD
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
          description="View and manage disputes between clients and talents";
        />;
        <AppHeader />;
        <DisputeDashboard />;
        <Footer />;
      </>;
    </ProtectedRoute>;
  ),;
}
;
export default DisputesPage,;
=======
import React from 'react',
import { SEO } from '@/components/SEO',
import { AppHeader } from '@/layout/AppHeader',
import { Footer } from '@/components/Footer',
import { DisputeDashboard } from '@/components/disputes',
import { ProtectedRoute } from '@/components/ProtectedRoute',
function DisputesPage() {
  return (    <ProtectedRoute>
      <>
        <SEO 
          title=&quot;Dispute Resolution Center | Zion AI Marketplace&quot; 
          description=&quot;View and manage disputes between clients and talents&quot;
        />
        <AppHeader />
        <DisputeDashboard />
        <Footer />
      </>
    </ProtectedRoute>
  )
}
export default DisputesPage,
>>>>>>> 44ad963ad5fd406e68f84735bc739a2e0258901d
