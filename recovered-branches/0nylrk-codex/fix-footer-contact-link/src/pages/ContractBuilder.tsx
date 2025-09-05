
<<<<<<< HEAD
import React from 'react',
import { SEO } from '@/components/SEO',
import { AppHeader } from '@/layout/AppHeader',
import { Footer } from '@/components/Footer',
import { ProtectedRoute } from '@/components/ProtectedRoute',
import { ContractBuilderContent } from '@/components/contracts/page/ContractBuilderContent',
function ContractBuilderPage() {
  return (
=======
import React from 'react';

function ContractBuilderPage() {_return (
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
    <ProtectedRoute>
      <>
        <SEO 
          title=&quot;Smart Contract Builder | Zion AI Marketplace&quot; 
          description=&quot;Create and deploy blockchain-backed smart contracts for your projects&quot;
        />
        <AppHeader />
        
        <main className=&quot;container mx-auto py-10 px-4&quot;>
          <ContractBuilderContent />
        </main>
        
        <Footer />
      </>
    </ProtectedRoute>
<<<<<<< HEAD
  )
}
=======
  );}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13

export default ContractBuilderPage,
