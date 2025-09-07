import React from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { EnterpriseHero } from "@/components/enterprise/EnterpriseHero";
import { EnterprisePricingTable } from "@/components/enterprise/EnterprisePricingTable";
import { EnterpriseFeatures } from "@/components/enterprise/EnterpriseFeatures";
import { EnterpriseCTA } from "@/components/enterprise/EnterpriseCTA";
import { EnterpriseTrustBadges } from "@/components/enterprise/EnterpriseTrustBadges";

<<<<<<< HEAD
=======
<<<<<<< HEAD
import React from "react";
import {Header} from "@/components/Header";
import {Footer} from "@/components/Footer";
import {EnterpriseHero} from "@/components/enterprise/EnterpriseHero";
import {EnterprisePricingTable} from "@/components/enterprise/EnterprisePricingTable";
import {EnterpriseFeatures} from "@/components/enterprise/EnterpriseFeatures";
import {EnterpriseCTA} from "@/components/enterprise/EnterpriseCTA";
import {EnterpriseTrustBadges} from "@/components/enterprise/EnterpriseTrustBadges";
import {EnterpriseTestimonials} from "@/components/enterprise/EnterpriseTestimonials";
import {SEO} from "@/components/SEO";
import React from "react",
import { Header } from "@/components/Header",
import { Footer } from "@/components/Footer",
import { EnterpriseHero } from "@/components/enterprise/EnterpriseHero",
import { EnterprisePricingTable } from "@/components/enterprise/EnterprisePricingTable",
import { EnterpriseFeatures } from "@/components/enterprise/EnterpriseFeatures",
import { EnterpriseCTA } from "@/components/enterprise/EnterpriseCTA",
import { EnterpriseTrustBadges } from "@/components/enterprise/EnterpriseTrustBadges",


import { EnterpriseTestimonials } from "@/components/enterprise/EnterpriseTestimonials";
import { SEO } from "@/components/SEO";
import { EnterpriseTestimonials } from "@/components/enterprise/EnterpriseTestimonials",
import { SEO } from "@/components/SEO",
=======



>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
export default function EnterprisePlans() {

import React from "react",
import { Header } from "@/components/Header",
import { Footer } from "@/components/Footer",
import { EnterpriseHero } from "@/components/enterprise/EnterpriseHero",
import { EnterprisePricingTable } from "@/components/enterprise/EnterprisePricingTable",
import { EnterpriseFeatures } from "@/components/enterprise/EnterpriseFeatures",
import { EnterpriseCTA } from "@/components/enterprise/EnterpriseCTA",
import { EnterpriseTrustBadges } from "@/components/enterprise/EnterpriseTrustBadges",
import { EnterpriseTestimonials } from "@/components/enterprise/EnterpriseTestimonials";
import { SEO } from "@/components/SEO";
import { EnterpriseTestimonials } from "@/components/enterprise/EnterpriseTestimonials",
import { SEO } from "@/components/SEO",export default function EnterprisePlans() {

  return (
    <>
      <SEO"
        title="Enterprise Plans - Zion AI Marketplace""
        description="Scale your talent acquisition with Zion's enterprise solutions. Custom branded portals, dedicated talent pools, and powerful admin tools."
      />
      <Header />"
      <main className="min-h-screen bg-background">
        <EnterpriseHero />
        <EnterprisePricingTable />
        <EnterpriseFeatures />
        <EnterpriseTestimonials />
        <EnterpriseTrustBadges />
        <EnterpriseCTA />
      </main>
      <Footer />

<<<<<<< HEAD

}
=======
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }
  
  static getDerivedStateFromError(error) {
    return { hasError: true };
  }
  
  componentDidCatch(error, errorInfo) {
    console.error('Error caught by boundary:', error, errorInfo);
  }
  
  render() {
    if (this.state.hasError) {
      return <div>Something went wrong.</div>;
    }
    
    return this.props.children;
  });

}
"
import React from "react";"
import {Header} from "@/components/Header";"
import {Footer} from "@/components/Footer";"
import {EnterpriseHero} from "@/components/enterprise/EnterpriseHero";"
import {EnterprisePricingTable} from "@/components/enterprise/EnterprisePricingTable";"
import {EnterpriseFeatures} from "@/components/enterprise/EnterpriseFeatures";"
import {EnterpriseCTA} from "@/components/enterprise/EnterpriseCTA";"
import {EnterpriseTrustBadges} from "@/components/enterprise/EnterpriseTrustBadges";"
import {EnterpriseTestimonials} from "@/components/enterprise/EnterpriseTestimonials";"
<<<<<<< HEAD
import {SEO} from "@/components/SEO";"
import { Header } from "@/components/Header";"
import { Footer } from "@/components/Footer",;"
import { EnterpriseHero } from "@/components/enterprise/EnterpriseHero",;"
import { EnterprisePricingTable } from "@/components/enterprise/EnterprisePricingTable",;"
import { EnterpriseFeatures } from "@/components/enterprise/EnterpriseFeatures",;"
import { EnterpriseCTA } from "@/components/enterprise/EnterpriseCTA",;"
import { EnterpriseTrustBadges } from "@/components/enterprise/EnterpriseTrustBadges",;"
import { EnterpriseTestimonials } from "@/components/enterprise/EnterpriseTestimonials",;"
=======
import {SEO} from "@/components/SEO";

<<<<<<< HEAD
=======

=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
import React from "react",;
import { Header } from "@/components/Header",;
import { Footer } from "@/components/Footer",;
import { EnterpriseHero } from "@/components/enterprise/EnterpriseHero",;
import { EnterprisePricingTable } from "@/components/enterprise/EnterprisePricingTable",;
import { EnterpriseFeatures } from "@/components/enterprise/EnterpriseFeatures",;
import { EnterpriseCTA } from "@/components/enterprise/EnterpriseCTA",;
import { EnterpriseTrustBadges } from "@/components/enterprise/EnterpriseTrustBadges",;
import { EnterpriseTestimonials } from "@/components/enterprise/EnterpriseTestimonials",;
import { SEO } from "@/components/SEO";

<<<<<<< HEAD
>>>>>>> origin/chore/fix-lint-and-merge
=======
<<<<<<< HEAD
import React from "react",;
import { Header } from "@/components/Header",;
import { Footer } from "@/components/Footer",;
import { EnterpriseHero } from "@/components/enterprise/EnterpriseHero",;
import { EnterprisePricingTable } from "@/components/enterprise/EnterprisePricingTable",;
import { EnterpriseFeatures } from "@/components/enterprise/EnterpriseFeatures",;
import { EnterpriseCTA } from "@/components/enterprise/EnterpriseCTA",;
import { EnterpriseTrustBadges } from "@/components/enterprise/EnterpriseTrustBadges",;
import { EnterpriseTestimonials } from "@/components/enterprise/EnterpriseTestimonials",;
import { SEO } from "@/components/SEO",;
;
export default function EnterprisePlans() {;
  return (;
    <>;
      <SEO ;
export default function EnterprisePlans() {;
  return (;
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
export default function EnterprisePlans() {;
  return (
    <>;
      <SEO
        title="Enterprise Plans - Zion AI Marketplace"
        description="Scale your talent acquisition with Zion's enterprise solutions. Custom branded portals, dedicated talent pools, and powerful admin tools."
      />;
      <Header />;
      <main className="min-h-screen bg-background">;
import React from './react';
import { Header } from '@/components / Header';
import { Footer } from '@/components / Footer';
import { EnterpriseHero } from '@/components / enterprise / EnterpriseHero';
import { EnterprisePricingTable } from '@/components / enterprise / EnterprisePricingTable';
import { EnterpriseFeatures } from '@/components / enterprise / EnterpriseFeatures';
import { EnterpriseCTA } from '@/components / enterprise / EnterpriseCTA';
import { EnterpriseTrustBadges } from '@/components / enterprise / EnterpriseTrustBadges';
import { EnterpriseTestimonials } from '@/components / enterprise / EnterpriseTestimonials';
import { SEO } from '@/components / SEO';
export default /**
 * EnterprisePlans - Function description
 */
function EnterprisePlans() {
  return (
<<<<<<< HEAD
import React from "react",;
import { Header } from "@/components/Header",;
import { Footer } from "@/components/Footer",;
import { EnterpriseHero } from "@/components/enterprise/EnterpriseHero",;
import { EnterprisePricingTable } from "@/components/enterprise/EnterprisePricingTable",;
import { EnterpriseFeatures } from "@/components/enterprise/EnterpriseFeatures",;
import { EnterpriseCTA } from "@/components/enterprise/EnterpriseCTA",;
import { EnterpriseTrustBadges } from "@/components/enterprise/EnterpriseTrustBadges",;
import { EnterpriseTestimonials } from "@/components/enterprise/EnterpriseTestimonials",;
import { SEO } from "@/components/SEO",;
;
export default function EnterprisePlans() {;
  return (;
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
    <>;
      <SEO ;
export default function EnterprisePlans() {;
  return (;
    <>;
      <main className="min-h-screen bg-background">;    <>;
      <SEO;
        title="Enterprise Plans - Zion AI Marketplace";

        description="Scale your talent acquisition with Zion's enterprise solutions. Custom branded portals, dedicated talent pools, and powerful admin tools.";
      />;

      <Header />;
<<<<<<< HEAD
      <main className="min-h-screen bg-background">;
      <main className="min-h-screen bg-background">;
=======
      <main className="min - h-screen bg - background">;
<<<<<<< HEAD
<main className="min-h-screen bg-background">;
      <main className="min-h-screen bg-background">;

=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
        <EnterpriseHero />;

        <EnterprisePricingTable />;

        <EnterpriseFeatures />;

        <EnterpriseTestimonials />;

        <EnterpriseTrustBadges />;

        <EnterpriseCTA />;

      </main>;
      <Footer />;

    </>);
}

<<<<<<< HEAD
    </>);
}
pr-12325
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
;

    </>);
}
    </>;
  ),;
} export default function EnterprisePlans () {
  return (<> <SEO title="Enterprise Plans - Zion AI Marketplace" description="Scale your talent acquisition with Zion's enterprise solutions. Custom branded portals, dedicated talent pools, and powerful admin tools." min-h-screen bg-background" > <EnterpriseHero /> <EnterprisePricingTable /> <EnterpriseFeatures /> <EnterpriseTestimonials /> <EnterpriseTrustBadges /> <EnterpriseCTA /> </main> <Footer /> </> 
    </>;
  );
}
;

<<<<<<< HEAD
    </>);
}
=======
<<<<<<< HEAD
    </>);
}
    </>;
  ),;
} export default function EnterprisePlans () {
  return (<> <SEO title="Enterprise Plans - Zion AI Marketplace" description="Scale your talent acquisition with Zion's enterprise solutions. Custom branded portals, dedicated talent pools, and powerful admin tools." min-h-screen bg-background" > <EnterpriseHero /> <EnterprisePricingTable /> <EnterpriseFeatures /> <EnterpriseTestimonials /> <EnterpriseTrustBadges /> <EnterpriseCTA /> </main> <Footer /> </> 
    </>;
  );
}
;
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
