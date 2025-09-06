
<<<<<<< HEAD
import React from 'react',
import { SEO } from '@/components/SEO',
import { AppHeader } from '@/layout/AppHeader',
import { Footer } from '@/components/Footer',
import { DisputeDetail } from '@/components/disputes',
import { ProtectedRoute } from '@/components/ProtectedRoute',
=======
import React from 'react';
import {SEO} from '@/components/SEO';
import {AppHeader} from '@/layout/AppHeader';
import {Footer} from '@/components/Footer';
import {DisputeDetail} from '@/components/disputes';
import {ProtectedRoute} from '@/components/ProtectedRoute';
>>>>>>> main
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
;
export default DisputeDetailPage;
=======

export default DisputeDetailPage;
>>>>>>> main
