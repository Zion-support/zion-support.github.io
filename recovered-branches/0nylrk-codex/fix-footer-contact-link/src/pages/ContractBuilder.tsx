
<<<<<<< HEAD
import React from 'react';
import {SEO} from '@/components/SEO';
import {AppHeader} from '@/layout/AppHeader';
import {Footer} from '@/components/Footer';
import {ProtectedRoute} from '@/components/ProtectedRoute';
import {ContractBuilderContent} from '@/components/contracts/page/ContractBuilderContent';
=======
import React from 'react',
import { SEO } from '@/components/SEO',
import { AppHeader } from '@/layout/AppHeader',
import { Footer } from '@/components/Footer',
import { ProtectedRoute } from '@/components/ProtectedRoute',
import { ContractBuilderContent } from '@/components/contracts/page/ContractBuilderContent',
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
function ContractBuilderPage() {
  return (
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
  )
}
<<<<<<< HEAD

=======
;
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
export default ContractBuilderPage;
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
