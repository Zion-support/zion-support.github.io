
<<<<<<< HEAD
import React from "react",
import { Header } from "@/components/Header",
import { Footer } from "@/components/Footer",
import { EnterpriseHero } from "@/components/enterprise/EnterpriseHero",
import { EnterprisePricingTable } from "@/components/enterprise/EnterprisePricingTable",
import { EnterpriseFeatures } from "@/components/enterprise/EnterpriseFeatures",
import { EnterpriseCTA } from "@/components/enterprise/EnterpriseCTA",
import { EnterpriseTrustBadges } from "@/components/enterprise/EnterpriseTrustBadges",
import { EnterpriseTestimonials } from "@/components/enterprise/EnterpriseTestimonials",
import { SEO } from "@/components/SEO",
=======
import React from &quot;react&quot;;
import { Header } from &quot;@/components/Header&quot;;
import { Footer } from &quot;@/components/Footer&quot;;
import { EnterpriseHero } from &quot;@/components/enterprise/EnterpriseHero&quot;;
import { EnterprisePricingTable } from &quot;@/components/enterprise/EnterprisePricingTable&quot;;
import { EnterpriseFeatures } from &quot;@/components/enterprise/EnterpriseFeatures&quot;;
import { EnterpriseCTA } from &quot;@/components/enterprise/EnterpriseCTA&quot;;
import { EnterpriseTrustBadges } from &quot;@/components/enterprise/EnterpriseTrustBadges&quot;;
import { EnterpriseTestimonials } from &quot;@/components/enterprise/EnterpriseTestimonials&quot;;
import { SEO } from &quot;@/components/SEO&quot;;

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
export default function EnterprisePlans() {
  return (
    <>
      <SEO 
        title=&quot;Enterprise Plans - Zion AI Marketplace&quot;
        description=&quot;Scale your talent acquisition with Zion's enterprise solutions. Custom branded portals, dedicated talent pools, and powerful admin tools.&quot;
      />
      <Header />
      <main className=&quot;min-h-screen bg-background&quot;>
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
}
