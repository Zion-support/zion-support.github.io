


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



>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
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
=======
import {SEO} from '@/components/SEO';
import {AppHeader} from '@/layout/AppHeader';
import {Footer} from '@/components/Footer';
import {ProtectedRoute} from '@/components/ProtectedRoute';
import {ContractBuilderContent} from '@/components/contracts/page/ContractBuilderContent';
function ContractBuilderPage() {;
  return (
    <ProtectedRoute>;
      <>;
        <SEO
          title="Smart Contract Builder | Zion AI Marketplace" 
          description="Create and deploy blockchain-backed smart contracts for your projects"
        />;
        <AppHeader />;

        <main className="container mx-auto py-10 px-4">;
          <ContractBuilderContent />;
        </main>;

        <Footer />;
      </>;
    </ProtectedRoute>;
  );
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
}



=======
;


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
export default ContractBuilderPage;

;
export default ContractBuilderPage;
