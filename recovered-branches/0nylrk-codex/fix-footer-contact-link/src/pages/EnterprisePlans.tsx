



>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
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
    <>;
      <SEO;
        title="Enterprise Plans - Zion AI Marketplace";
        description="Scale your talent acquisition with Zion's enterprise solutions. Custom branded portals, dedicated talent pools, and powerful admin tools.";
      />;
      <Header />;
      <main className="min - h-screen bg - background">;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
        <EnterpriseHero />;
        <EnterprisePricingTable />;
        <EnterpriseFeatures />;
        <EnterpriseTestimonials />;
        <EnterpriseTrustBadges />;
        <EnterpriseCTA />;
      </main>;
      <Footer />;
    </>;
  );
}
;


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
