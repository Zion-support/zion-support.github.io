import React from 'react';
import { SEO } from "@/components/SEO";
import { GradientHeading } from "@/components/GradientHeading";

export default function Partners() {
  return (
    <>
      <SEO 
        title="Partners - Zion Tech Group" 
        description="Meet our trusted partners and collaborators." 
        keywords="partners, collaborators, trusted partners, Zion Tech Group"
        url="https://ziontechgroup.com/partners"
      />
      <main className="min-h-screen bg-zion-blue pt-24 pb-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <GradientHeading>Partners</GradientHeading>
            <p className="mt-4 text-zion-slate-light text-xl max-w-3xl mx-auto">
              Meet our trusted partners and collaborators
            </p>
          </div>
          
          <div className="max-w-6xl mx-auto">
            <div className="text-center">
              <p className="text-zion-slate-light text-lg">
                Partner information coming soon.
              </p>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}