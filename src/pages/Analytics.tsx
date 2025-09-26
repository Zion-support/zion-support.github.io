import React from 'react';
import { SEO } from "@/components/SEO";
import { GradientHeading } from "@/components/GradientHeading";

export default function Analytics() {
  return (
    <>
      <SEO 
        title="Analytics - Zion Tech Group" 
        description="Advanced analytics and insights for your business." 
        keywords="analytics, insights, business intelligence, Zion Tech Group"
        url="https://ziontechgroup.com/analytics"
      />
      <main className="min-h-screen bg-zion-blue pt-24 pb-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <GradientHeading>Analytics</GradientHeading>
            <p className="mt-4 text-zion-slate-light text-xl max-w-3xl mx-auto">
              Advanced analytics and insights to drive your business forward
            </p>
          </div>
          
          <div className="max-w-6xl mx-auto">
            <div className="text-center">
              <p className="text-zion-slate-light text-lg">
                Analytics dashboard coming soon.
              </p>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}