import React from 'react';
import { SEO } from '@/components/SEO';
import { GradientHeading } from '@/components/GradientHeading';

export default function Careers() {
  return (
    <>
      <SEO 
        title="Careers - Zion Tech Group" 
        description="Join our team and help build the future of AI and technology."
        canonical="https://ziontechgroup.com/careers"
      />
      <main className="min-h-screen bg-zion-blue pt-24 pb-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <GradientHeading>Careers</GradientHeading>
            <p className="mt-4 text-zion-slate-light text-xl max-w-3xl mx-auto">
              Join our team and help build the future of AI and technology.
            </p>
          </div>
          
          <div className="space-y-6 text-zion-slate-light text-lg">
            <p>
              We're always looking for talented individuals to join our team. If you're passionate about AI, technology, and innovation, we'd love to hear from you.
            </p>
            <p>
              To apply for positions, please send your resume and cover letter to careers@ziontechgroup.com.
            </p>
          </div>
        </div>
      </main>
    </>
  );
}