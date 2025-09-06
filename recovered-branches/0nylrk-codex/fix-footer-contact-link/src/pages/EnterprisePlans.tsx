
import React from "react",
import { Header } from "@/components/Header",
import { Footer } from "@/components/Footer",
import { EnterpriseHero } from "@/components/enterprise/EnterpriseHero",
import { EnterprisePricingTable } from "@/components/enterprise/EnterprisePricingTable",
import { EnterpriseFeatures } from "@/components/enterprise/EnterpriseFeatures",
import { EnterpriseCTA } from "@/components/enterprise/EnterpriseCTA",
import { EnterpriseTrustBadges } from "@/components/enterprise/EnterpriseTrustBadges",
<<<<<<< HEAD
import { EnterpriseTestimonials } from "@/components/enterprise/EnterpriseTestimonials";
import { SEO } from "@/components/SEO";
=======
import { EnterpriseTestimonials } from "@/components/enterprise/EnterpriseTestimonials",
import { SEO } from "@/components/SEO",
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
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
}
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
  return (;
    <>;
      <SEO;
        title="Enterprise Plans - Zion AI Marketplace";
        description="Scale your talent acquisition with Zion's enterprise solutions. Custom branded portals, dedicated talent pools, and powerful admin tools.";
      />;
      <Header />;
      <main className="min-h-screen bg-background">;
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
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
