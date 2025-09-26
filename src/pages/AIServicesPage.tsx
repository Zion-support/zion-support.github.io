import React from 'react';
import { SEO } from "@/components/SEO";
import { GradientHeading } from "@/components/GradientHeading";

export default function AIServicesPage() {
  return (
    <>
      <SEO 
        title="AI Services - Zion Tech Group" 
        description="Advanced AI services and solutions for your business." 
        keywords="AI services, artificial intelligence, AI solutions, Zion Tech Group"
        url="https://ziontechgroup.com/ai-services"
      />
      <main className="min-h-screen bg-zion-blue pt-24 pb-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <GradientHeading>AI Services</GradientHeading>
            <p className="mt-4 text-zion-slate-light text-xl max-w-3xl mx-auto">
              Advanced AI services and solutions for your business
            </p>
          </div>
          
          <div className="max-w-6xl mx-auto">
            <div className="text-center">
              <p className="text-zion-slate-light text-lg">
                AI services information coming soon.
              </p>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}