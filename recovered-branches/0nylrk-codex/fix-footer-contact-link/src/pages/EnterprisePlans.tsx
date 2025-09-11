
<<<<<<< HEAD
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
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a



>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
export default function EnterprisePlans() {
  return (
    <>
      <SEO
        title="Enterprise Plans - Zion AI Marketplace"
        description="Scale your talent acquisition with Zion's enterprise solutions. Custom branded portals, dedicated talent pools, and powerful admin tools."
      />
      <Header />
      <main className="min-h-screen bg-background">
        <EnterpriseHero />
        <EnterprisePricingTable />
        <EnterpriseFeatures />
        <EnterpriseTestimonials />
        <EnterpriseTrustBadges />
        <EnterpriseCTA />
      </main>
      <Footer />
    </>
  )

<<<<<<< HEAD
<<<<<<< HEAD

}
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
}

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
=======


=======
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
export default function EnterprisePlans() {;
  return (
    <>;
      <SEO
        title="Enterprise Plans - Zion AI Marketplace"
        description="Scale your talent acquisition with Zion's enterprise solutions. Custom branded portals, dedicated talent pools, and powerful admin tools."
      />;
      <Header />;
      <main className="min-h-screen bg-background">;
=======
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
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    <>;
      <SEO;
        title="Enterprise Plans - Zion AI Marketplace";
        description="Scale your talent acquisition with Zion's enterprise solutions. Custom branded portals, dedicated talent pools, and powerful admin tools.";
      />;
      <Header />;
<<<<<<< HEAD
<<<<<<< HEAD
      <main className="min-h-screen bg-background">;
      <main className="min-h-screen bg-background">;
=======
      <main className="min - h-screen bg - background">;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
      <main className="min - h-screen bg - background">;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
        <EnterpriseHero />;
        <EnterprisePricingTable />;
        <EnterpriseFeatures />;
        <EnterpriseTestimonials />;
        <EnterpriseTrustBadges />;
        <EnterpriseCTA />;
      </main>;
      <Footer />;
<<<<<<< HEAD

    </>);
}

;


<<<<<<< HEAD
    </>);
}
    </>;
  ),;
} export default function EnterprisePlans () {
  return (<> <SEO title="Enterprise Plans - Zion AI Marketplace" description="Scale your talent acquisition with Zion's enterprise solutions. Custom branded portals, dedicated talent pools, and powerful admin tools." min-h-screen bg-background" > <EnterpriseHero /> <EnterprisePricingTable /> <EnterpriseFeatures /> <EnterpriseTestimonials /> <EnterpriseTrustBadges /> <EnterpriseCTA /> </main> <Footer /> </> 
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    </>;
  );
}
;
<<<<<<< HEAD
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
