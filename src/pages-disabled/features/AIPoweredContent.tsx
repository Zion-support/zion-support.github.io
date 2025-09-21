import React, { useEffect } from "react",
import Header from "@/components/Header",
import { SEO } from "@/components/SEO",
import { GradientHeading } from "@/components/GradientHeading",
export default function AIPoweredContent() {
  return (
    <div className="min-h-screen bg-zion-blue">
      <Header />
      <SEO title="AI-Powered Content" description="AI content generation" />
      <div className="container mx-auto px-4 py-12">
        <GradientHeading>AI-Powered Content</GradientHeading>
        <p className="text-zion-cyan text-center mt-4">
          AI content generation features coming soon...
        </p>
      </div>
    </div>
  );
}