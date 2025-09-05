
import React from 'react';

function DisputeDetailPage() {_return (
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
  );}

export default DisputeDetailPage;
