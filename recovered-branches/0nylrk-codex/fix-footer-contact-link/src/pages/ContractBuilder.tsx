
<<<<<<< HEAD
import React from 'react';
<<<<<<< HEAD
import { SEO  } from '@/components/SEO';
import { AppHeader  } from '@/layout/AppHeader';
import { Footer  } from '@/components/Footer';
import { ProtectedRoute  } from '@/components/ProtectedRoute';
import { ContractBuilderContent } from '@/components/contracts/page/ContractBuilderContent';
=======
import {SEO} from '@/components/SEO';
import {AppHeader} from '@/layout/AppHeader';
import {Footer} from '@/components/Footer';
import {ProtectedRoute} from '@/components/ProtectedRoute';
import {ContractBuilderContent} from '@/components/contracts/page/ContractBuilderContent';
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
import React from 'react',
import { SEO } from '@/components/SEO',
import { AppHeader } from '@/layout/AppHeader',
import { Footer } from '@/components/Footer',
import { ProtectedRoute } from '@/components/ProtectedRoute',
import { ContractBuilderContent } from '@/components/contracts/page/ContractBuilderContent',
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
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
<<<<<<< HEAD
<<<<<<< HEAD
=======

=======
;
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
export default ContractBuilderPage;

=======
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
}
export default ContractBuilderPage;
;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
