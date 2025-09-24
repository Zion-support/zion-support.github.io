import React from 'react';
import { SEO } from "@/components/SEO";
import { GradientHeading } from "@/components/GradientHeading";

export default function EnterpriseSolutionsPage() {
  return (
    <>
      <SEO 
        title="Enterprise Solutions - Zion Tech Group" 
        description="Enterprise-grade solutions for large organizations." 
        keywords="enterprise solutions, enterprise software, large organizations, Zion Tech Group"
        url="https://ziontechgroup.com/enterprise-solutions"
      />
      <main className="min-h-screen bg-zion-blue pt-24 pb-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <GradientHeading>Enterprise Solutions</GradientHeading>
            <p className="mt-4 text-zion-slate-light text-xl max-w-3xl mx-auto">
              Enterprise-grade solutions for large organizations
            </p>
          </div>
          
          <div className="max-w-6xl mx-auto">
            <div className="text-center">
              <p className="text-zion-slate-light text-lg">
                Enterprise solutions information coming soon.
              </p>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}