
<<<<<<< HEAD
import React from 'react',
import { SEO } from '@/components/SEO',
import { AppHeader } from '@/layout/AppHeader',
import { Footer } from '@/components/Footer',
import { DisputeDetail } from '@/components/disputes',
import { ProtectedRoute } from '@/components/ProtectedRoute',
function DisputeDetailPage() {
  return (
=======
import React from 'react';

function DisputeDetailPage() {_return (
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
    <ProtectedRoute>
      <>
        <SEO 
          title=&quot;Dispute Details | Zion AI Marketplace&quot; 
          description=&quot;View and manage dispute details&quot;
        />
        <AppHeader />
        <DisputeDetail />
        <Footer />
      </>
    </ProtectedRoute>
<<<<<<< HEAD
  )
}
=======
  );}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13

export default DisputeDetailPage,
