import React from "react",
import Header from "@/components/Header",
import { SEO } from "@/components/SEO",
import { GradientHeading } from "@/components/GradientHeading",
export default function TalentMarketplace() {
  return (
    <div className="min-h-screen bg-zion-blue">
      <Header />
      <SEO title="Talent Marketplace" description="Find and hire talent" />
      <div className="container mx-auto px-4 py-12">
        <GradientHeading>Talent Marketplace</GradientHeading>
        <p className="text-zion-cyan text-center mt-4">
          Talent marketplace features coming soon...
        </p>
      </div>
    </div>
  );
}