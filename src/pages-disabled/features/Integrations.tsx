import React, { useEffect } from "react",
import Header from "@/components/Header",
import { SEO } from "@/components/SEO",
import { GradientHeading } from "@/components/GradientHeading",
export default function Integrations() {
  return (
    <div className="min-h-screen bg-zion-blue">
      <Header />
      <SEO title="Integrations" description="Third-party integrations" />
      <div className="container mx-auto px-4 py-12">
        <GradientHeading>Integrations</GradientHeading>
        <p className="text-zion-cyan text-center mt-4">
          Integration features coming soon...
        </p>
      </div>
    </div>
  );
}