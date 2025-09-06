
import React from 'react';
import { SEO  } from '@/components/SEO';
import { AppHeader  } from '@/layout/AppHeader';
import { Footer  } from '@/components/Footer';
import { ProtectedRoute  } from '@/components/ProtectedRoute';
import { ContractBuilderContent } from '@/components/contracts/page/ContractBuilderContent';
function ContractBuilderPage() {
  return (
    <ProtectedRoute>
      <>
<<<<<<< HEAD
        <SEO 
          title;
=======
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
<<<<<<< HEAD
  )
}
=======
  );
}

>>>>>>> cursor/automate-test-improve-and-merge-code-107b
export default ContractBuilderPage;
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-7db5
