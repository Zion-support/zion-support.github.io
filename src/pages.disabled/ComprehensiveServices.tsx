import React from 'react';
import { SEO } from "@/components/SEO";
import { GradientHeading } from "@/components/GradientHeading";

export default function ComprehensiveServices() {
  return (
    <>
      <SEO 
        title="Comprehensive Services - Zion Tech Group" 
        description="Our comprehensive range of technology services and solutions." 
        keywords="comprehensive services, technology services, solutions, Zion Tech Group"
        url="https://ziontechgroup.com/comprehensive-services"
      />
      <main className="min-h-screen bg-zion-blue pt-24 pb-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <GradientHeading>Comprehensive Services</GradientHeading>
            <p className="mt-4 text-zion-slate-light text-xl max-w-3xl mx-auto">
              Our comprehensive range of technology services and solutions
            </p>
          </div>
          
          <div className="max-w-6xl mx-auto">
            <div className="text-center">
              <p className="text-zion-slate-light text-lg">
                Comprehensive services information coming soon.
              </p>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}