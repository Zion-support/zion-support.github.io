import React from 'react';
import { SEO } from '@/components/SEO';
import { GradientHeading } from '@/components/GradientHeading';

export default function AIServicesPage() {
  return (
    <>
      <SEO 
        title="AI Services - Zion Tech Group" 
        description="Explore our comprehensive range of artificial intelligence services and solutions."
        canonical="https://ziontechgroup.com/ai-services"
      />
      <main className="min-h-screen bg-zion-blue pt-24 pb-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <GradientHeading>AI Services</GradientHeading>
            <p className="mt-4 text-zion-slate-light text-xl max-w-3xl mx-auto">
              Discover our cutting-edge artificial intelligence services designed to transform your business.
            </p>
          </div>
          
          <div className="space-y-6 text-zion-slate-light text-lg">
            <p>
              Our AI services include machine learning solutions, natural language processing, computer vision, and automated decision-making systems.
            </p>
            <p>
              Contact us to learn more about how our AI services can help accelerate your digital transformation.
            </p>
          </div>
        </div>
      </main>
    </>
  );
}