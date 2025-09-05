
<<<<<<< HEAD
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
export default ContractBuilderPage,;
=======
import React from 'react',
import { SEO } from '@/components/SEO',
import { AppHeader } from '@/layout/AppHeader',
import { Footer } from '@/components/Footer',
import { ProtectedRoute } from '@/components/ProtectedRoute',
import { ContractBuilderContent } from '@/components/contracts/page/ContractBuilderContent',
function ContractBuilderPage() {
  return (    <ProtectedRoute>
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
  )
}
export default ContractBuilderPage,
>>>>>>> 44ad963ad5fd406e68f84735bc739a2e0258901d
