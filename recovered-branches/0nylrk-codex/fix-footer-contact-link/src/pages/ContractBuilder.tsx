
import React from 'react';

function ContractBuilderPage() {_return (
    <ProtectedRoute>
      <>
        <SEO 
          title="Smart Contract Builder | Zion AI Marketplace" 
          description="Create and deploy blockchain-backed smart contracts for your projects"
        />
        <AppHeader />
        
        <main className="container mx-auto py-10 px-4">
          <ContractBuilderContent />
        </main>
        
        <Footer />
      </>
    </ProtectedRoute>
  );}

export default ContractBuilderPage;
