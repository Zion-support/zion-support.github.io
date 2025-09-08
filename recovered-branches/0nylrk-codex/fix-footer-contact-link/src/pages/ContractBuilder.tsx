import React from "react";
import { SEO } from "@/components/SEO";
import { AppHeader } from "@/layout/AppHeader";
import { Footer } from "@/components/Footer";
import { ProtectedRoute } from "@/components/ProtectedRoute";
import { ContractBuilderContent } from "@/components/contracts/page/ContractBuilderContent";
function ContractBuilderPage() {

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
  return (
    <ProtectedRoute>
      <>
        <SEO"
          title="Smart Contract Builder | Zion AI Marketplace""
          description="Create and deploy blockchain-backed smart contracts for your projects"
        />
        <AppHeader />
"
        <main className="container mx-auto py-10 px-4">
          <ContractBuilderContent />
        </main>

        <Footer />
      </>
    </ProtectedRoute>
  );
}
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
}
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a



;


export default ContractBuilderPage;
import React from 'react';
import {SEO} from '@/components / SEO';
import {AppHeader} from '@/layout / AppHeader';
import {Footer} from '@/components / Footer';
import {ProtectedRoute} from '@/components / ProtectedRoute';
import {ContractBuilderContent} from '@/components / contracts / page / ContractBuilderContent';
/**
 * ContractBuilderPage - Function description
 */
function ContractBuilderPage() {
  return (
    <ProtectedRoute>;
      <>;
        <SEO;
          title="Smart Contract Builder | Zion AI Marketplace";
          description="Create and deploy blockchain - backed smart contracts for your projects";
        />;
        <AppHeader />;
        <main className="container mx - auto py - 10 px - 4">;
          <ContractBuilderContent />;
        </main>;
        <Footer />;
      </>;
    </ProtectedRoute>);
=======
}


;
>>>>>>> origin/cursor/delete-old-data-records-6bba

}
export default ContractBuilderPage;

;

<<<<<<< HEAD



=======
export default ContractBuilderPage;
>>>>>>> origin/cursor/delete-old-data-records-6bba
