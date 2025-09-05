
import React from 'react';

function DisputesPage() {_return (
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
  );}

export default DisputesPage;
