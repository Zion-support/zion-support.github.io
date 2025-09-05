
import React from 'react';
import { SEO } from '@/components/SEO';
import { AppHeader } from '@/layout/AppHeader';
import { Footer } from '@/components/Footer';
import { DisputeDetail } from '@/components/disputes';
import { ProtectedRoute } from '@/components/ProtectedRoute';

function DisputeDetailPage() {
  return (
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
  );
}

export default DisputeDetailPage;
