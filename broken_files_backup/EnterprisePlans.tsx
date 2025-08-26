import React from "react";
import { EnterpriseHero } from "@/components/enterprise/EnterpriseHero";
import { EnterprisePricingTable } from "@/components/enterprise/EnterprisePricingTable";
import { EnterpriseFeatures } from "@/components/enterprise/EnterpriseFeatures";
import { EnterpriseCTA } from "@/components/enterprise/EnterpriseCTA";
import { EnterpriseTrustBadges } from "@/components/enterprise/EnterpriseTrustBadges";
import { EnterpriseTestimonials } from "@/components/enterprise/EnterpriseTestimonials";
<<<<<<< HEAD:src/pages/EnterprisePlans.tsx
import { NextSeo } from "@/components/NextSeo";

export default function EnterprisePlans() {
  return (
    <>
      <NextSeo 
=======
import { SEO } from "@/components/SEO";
export default function EnterprisePlans() {
  return (
    <>
      <SEO
>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-8896:broken_files_backup/EnterprisePlans.tsx
        title="Enterprise Plans - Zion AI Marketplace"
        description="Scale your talent acquisition with Zion's enterprise solutions. Custom branded portals, dedicated talent pools, and powerful admin tools."
      />
      
      <main className="min-h-screen bg-background">
        <EnterpriseHero />
        <EnterprisePricingTable />
        <EnterpriseFeatures />
        <EnterpriseTestimonials />
        <EnterpriseTrustBadges />
        <EnterpriseCTA />
      </main>
      
    </>
  );
}
