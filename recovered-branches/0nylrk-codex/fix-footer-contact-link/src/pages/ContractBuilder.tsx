
<<<<<<< HEAD
import React from 'react';
import { SEO  } from '@/components/SEO';
import { AppHeader  } from '@/layout/AppHeader';
import { Footer  } from '@/components/Footer';
import { ProtectedRoute  } from '@/components/ProtectedRoute';
import { ContractBuilderContent } from '@/components/contracts/page/ContractBuilderContent';
=======


>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
import {SEO} from '@/components/SEO';
import {AppHeader} from '@/layout/AppHeader';
import {Footer} from '@/components/Footer';
import {ProtectedRoute} from '@/components/ProtectedRoute';
import {ContractBuilderContent} from '@/components/contracts/page/ContractBuilderContent';
<<<<<<< HEAD
=======

=======
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
import React from 'react',
import { SEO } from '@/components/SEO',
import { AppHeader } from '@/layout/AppHeader',
import { Footer } from '@/components/Footer',
import { ProtectedRoute } from '@/components/ProtectedRoute',
import { ContractBuilderContent } from '@/components/contracts/page/ContractBuilderContent',
<<<<<<< HEAD
=======



>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
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

;
=======



=======
;


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
export default ContractBuilderPage;

;
export default ContractBuilderPage;
