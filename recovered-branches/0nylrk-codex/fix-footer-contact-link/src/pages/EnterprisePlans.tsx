<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

<<<<<<< HEAD
=======
<<<<<<< HEAD



>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-f3c8
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
import React from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { EnterpriseHero } from "@/components/enterprise/EnterpriseHero";
import { EnterprisePricingTable } from "@/components/enterprise/EnterprisePricingTable";
import { EnterpriseFeatures } from "@/components/enterprise/EnterpriseFeatures";
import { EnterpriseCTA } from "@/components/enterprise/EnterpriseCTA";
import { EnterpriseTrustBadges } from "@/components/enterprise/EnterpriseTrustBadges";
<<<<<<< HEAD
import { EnterpriseTestimonials } from "@/components/enterprise/EnterpriseTestimonials";
import { SEO } from "@/components/SEO";
<<<<<<< HEAD
import { EnterpriseTestimonials } from "@/components/enterprise/EnterpriseTestimonials",
import { SEO } from "@/components/SEO",
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
<<<<<<< HEAD

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-f3c8
export default function EnterprisePlans() {
=======
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
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
<<<<<<< HEAD
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
import React from "react";"
import { Header } from "@/components/Header";"
import { Footer } from "@/components/Footer";"
import { EnterpriseHero } from "@/components/enterprise/EnterpriseHero";"
import { EnterprisePricingTable } from "@/components/enterprise/EnterprisePricingTable";"
import { EnterpriseFeatures } from "@/components/enterprise/EnterpriseFeatures";"
import { EnterpriseCTA } from "@/components/enterprise/EnterpriseCTA";"
import { EnterpriseTrustBadges } from "@/components/enterprise/EnterpriseTrustBadges";"
import { EnterpriseTestimonials } from "@/components/enterprise/EnterpriseTestimonials";"
import { SEO } from "@/components/SEO";
export default function EnterprisePlans() {}
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
import { EnterpriseTestimonials } from "@/components/enterprise/EnterpriseTestimonials";
import { SEO } from "@/components/SEO";
export default function EnterprisePlans() {
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======

>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
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
    </>
<<<<<<< HEAD
  )
<<<<<<< HEAD
}
=======

<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
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
  }
=======
=======
    </>;
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
  );
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-f3c8
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
import {SEO} from "@/components/SEO";

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD


<<<<<<< HEAD
}
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======

>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======
}
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
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
    <>;
      <main className="min-h-screen bg-background">;    <>;
      <SEO;
        title="Enterprise Plans - Zion AI Marketplace";
=======

"
import React from "react",;"
import { Header } from "@/components/Header",;"
import { Footer } from "@/components/Footer",;"
import { EnterpriseHero } from "@/components/enterprise/EnterpriseHero",;"
import { EnterprisePricingTable } from "@/components/enterprise/EnterprisePricingTable",;"
import { EnterpriseFeatures } from "@/components/enterprise/EnterpriseFeatures",;"
import { EnterpriseCTA } from "@/components/enterprise/EnterpriseCTA",;"
import { EnterpriseTrustBadges } from "@/components/enterprise/EnterpriseTrustBadges",;"
import { EnterpriseTestimonials } from "@/components/enterprise/EnterpriseTestimonials",;"
import { SEO } from "@/components/SEO";




    <>;
      <SEO;"
        title="Enterprise Plans - Zion AI Marketplace";'"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
        description="Scale your talent acquisition with Zion's enterprise solutions. Custom branded portals, dedicated talent pools, and powerful admin tools.";
      />;
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
      <Header />;
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
      <main className="min - h-screen bg - background">;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
<<<<<<< HEAD
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
=======
      <main className="min-h-screen bg-background">;
      <main className="min-h-screen bg-background">;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======



>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
=======
      <Header />;    </>);

import React from "react";""
import { Header } from "@/components/Header";""
import { Footer } from "@/components/Footer";""
import { EnterpriseHero } from "@/components/enterprise/EnterpriseHero";""
import { EnterprisePricingTable } from "@/components/enterprise/EnterprisePricingTable";""
import { EnterpriseFeatures } from "@/components/enterprise/EnterpriseFeatures";""
import { EnterpriseCTA } from "@/components/enterprise/EnterpriseCTA";""
import { EnterpriseTrustBadges } from "@/components/enterprise/EnterpriseTrustBadges";""
import { EnterpriseTestimonials } from "@/components/enterprise/EnterpriseTestimonials";""
import { SEO } from "@/components/SEO";"
export default function EnterprisePlans() {
  return (
    <>
      <SEO;"
        title="Enterprise Plans - Zion AI Marketplace"""
        description="Scale your talent acquisition with Zion's enterprise solutions. Custom branded portals, dedicated talent pools, and powerful admin tools.""

      />

      <Header />
"

</Header>"
      <main className="min-h-screen bg-background">"
</main>

        <EnterpriseHero />

        <EnterprisePricingTable />

        <EnterpriseFeatures />

        <EnterpriseTestimonials />

        <EnterpriseTrustBadges />

        <EnterpriseCTA />

      <Footer />

</Footer>
    </>)
  );
}
import {Header} from "@/components/Header";""
import {Footer} from "@/components/Footer";""
import {EnterpriseHero} from "@/components/enterprise/EnterpriseHero";""
import {EnterprisePricingTable} from "@/components/enterprise/EnterprisePricingTable";""
import {EnterpriseFeatures} from "@/components/enterprise/EnterpriseFeatures";""
import {EnterpriseCTA} from "@/components/enterprise/EnterpriseCTA";""
import {EnterpriseTrustBadges} from "@/components/enterprise/EnterpriseTrustBadges";""
import {EnterpriseTestimonials} from "@/components/enterprise/EnterpriseTestimonials";""
import {SEO} from "@/components/SEO";""
import React from "react",;""
import { Header } from "@/components/Header",;""
import { Footer } from "@/components/Footer",;""
import { EnterpriseHero } from "@/components/enterprise/EnterpriseHero",;""
import { EnterprisePricingTable } from "@/components/enterprise/EnterprisePricingTable",;""
import { EnterpriseFeatures } from "@/components/enterprise/EnterpriseFeatures",;""
import { EnterpriseCTA } from "@/components/enterprise/EnterpriseCTA",;""
import { EnterpriseTrustBadges } from "@/components/enterprise/EnterpriseTrustBadges",;""
import { EnterpriseTestimonials } from "@/components/enterprise/EnterpriseTestimonials",;""
export default function EnterprisePlans() {;
    <>;
      />;

>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
      <Header />;
      <main className="min - h-screen bg - background">;
<main className="min-h-screen bg-background">;
      <main className="min-h-screen bg-background">;
<<<<<<< HEAD
      <main className="min-h-screen bg-background">;
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======
      <main className="min-h-screen bg-background">;"
        title="Enterprise Plans - Zion AI Marketplace";""
        description="Scale your talent acquisition with Zion's enterprise solutions. Custom branded portals, dedicated talent pools, and powerful admin tools.";"

      />;
</SEO>
      <Header />;

</Header>"
      <main className="min - h-screen bg - background">;"
</main>"
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
        <EnterpriseHero />;

        <EnterprisePricingTable />;

        <EnterpriseFeatures />;

        <EnterpriseTestimonials />;

        <EnterpriseTrustBadges />;

        <EnterpriseCTA />;

      </main>;
      <Footer />;

<<<<<<< HEAD
<<<<<<< HEAD
}
;
<<<<<<< HEAD
<<<<<<< HEAD
=======


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
<<<<<<< HEAD
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934


    </>);
}
<<<<<<< HEAD
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
      <Header />;    </>);
;

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
      <Header />;    </>);
;

>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======

'"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
=======
)
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
    </>);
}
pr-12325
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

    </>);
}
<<<<<<< HEAD
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======
"

>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
