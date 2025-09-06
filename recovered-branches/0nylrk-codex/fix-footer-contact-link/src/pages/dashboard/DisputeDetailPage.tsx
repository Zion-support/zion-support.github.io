
<<<<<<< HEAD
import React from 'react';
import { SEO  } from '@/components/SEO';
import { AppHeader  } from '@/layout/AppHeader';
import { Footer  } from '@/components/Footer';
import { DisputeDetail  } from '@/components/disputes';
import { ProtectedRoute } from '@/components/ProtectedRoute';
=======
import React from 'react',
import { SEO } from '@/components/SEO',
import { AppHeader } from '@/layout/AppHeader',
import { Footer } from '@/components/Footer',
import { DisputeDetail } from '@/components/disputes',
import { ProtectedRoute } from '@/components/ProtectedRoute',
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
function DisputeDetailPage() {
  return (
    <ProtectedRoute>
      <>

        <SEO
          title="Dispute Details | Zion AI Marketplace"
          description="View and manage dispute details"
        />
        <AppHeader />
        <DisputeDetail />
        <Footer />
      </>
    </ProtectedRoute>
  )
}
<<<<<<< HEAD
export default DisputeDetailPage;

=======
;
export default DisputeDetailPage;
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
