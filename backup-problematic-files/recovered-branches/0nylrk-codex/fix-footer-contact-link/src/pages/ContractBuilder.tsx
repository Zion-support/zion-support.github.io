
<<<<<<< HEAD
=======
import React from 'react',;
import { SEO } from '@/components/SEO',;
import { AppHeader } from '@/layout/AppHeader',;
import { Footer } from '@/components/Footer',;
import { ProtectedRoute } from '@/components/ProtectedRoute',;
import { ContractBuilderContent } from '@/components/contracts/page/ContractBuilderContent',;
;
function ContractBuilderPage() {;
  return (;
    <ProtectedRoute>;
      <>;
        <SEO ;
          title="Smart Contract Builder | Zion AI Marketplace" ;
          description="Create and deploy blockchain-backed smart contracts for your projects";
        />;
        <AppHeader />;
        ;
        <main className="container mx-auto py-10 px-4">;
          <ContractBuilderContent />;
        </main>;
        ;
        <Footer />;
      </>;
    </ProtectedRoute>;
  ),;
}
;
export default ContractBuilderPage,; <ProtectedRoute> <> <SEO title="Smart Contract Builder | Zion AI Marketplace" description="Create and deploy blockchain-backed smart contracts for your projects" /> <AppHeader /> <main className="container mx-auto py-10 px-4" > <ContractBuilderContent /> </main> <Footer /> </> </ProtectedRoute> export default ContractBuilderPage;
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
