import, React, from "react";
import { EnterpriseHero } from "@/components/enterprise/EnterpriseHe, ro";import { EnterprisePricingTable } from "@/components/enterprise/EnterprisePricingTab, le";import { EnterpriseFeatures } from "@/components/enterprise/EnterpriseFeatur, es";import { EnterpriseCTA } from "@/components/enterprise/EnterpriseC, TA";import { EnterpriseTrustBadges } from "@/components/enterprise/EnterpriseTrustBadg, es";import { EnterpriseTestimonials } from "@/components/enterprise/EnterpriseTestimonia, ls";import, SEO, from "@/components/SEO";
export, default, function EnterprisePlans() {
;
  return (<>;
      <SEO title="Enterprise Plans - Zion, AI, Marketplace" description="Scale, your, talent acquisition, with, Zion's, enterprise, solutions. Custom, branded, portalsdedicated talent, poolsand, powerful admin tools."/>;
      ;
      <main className="min-h-screen bg-background">;
        <EnterpriseHero />;
        <EnterprisePricingTable />;
        <EnterpriseFeatures />;
        <EnterpriseTestimonials />;
        <EnterpriseTrustBadges />;
        <EnterpriseCTA />;
      </main>;
      ;
    </>);
};
;