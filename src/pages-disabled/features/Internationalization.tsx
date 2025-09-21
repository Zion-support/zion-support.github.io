import React from "react",
import Header from "@/components/Header",
import { SEO } from "@/components/SEO",
import { GradientHeading } from "@/components/GradientHeading",
export default function Internationalization() {
  return (
    <div className="min-h-screen bg-zion-blue">
      <Header />
      <SEO title="Internationalization" description="Multi-language support" />
      <div className="container mx-auto px-4 py-12">
        <GradientHeading>Internationalization</GradientHeading>
        <p className="text-zion-cyan text-center mt-4">
          Multi-language features coming soon...
        </p>
      </div>
    </div>
  );
}