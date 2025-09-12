import React from 'react';
import { SEO } from '@/components/SEO';
import { GradientHeading } from '@/components/GradientHeading';

export default function About() {
  return (
    <>
      <SEO 
        title="About Zion Tech Group" 
        description="Learn about Zion Tech Group, the world's first free marketplace for high-tech and AI solutions."
        canonical="https://ziontechgroup.com/about"
      />
      <main className="min-h-screen bg-zion-blue pt-24 pb-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <GradientHeading>About Zion Tech Group</GradientHeading>
            <p className="mt-4 text-zion-slate-light text-xl max-w-3xl mx-auto">
              We are the world's first free marketplace dedicated to high-tech and artificial intelligence solutions.
            </p>
          </div>
          
          <div className="space-y-6 text-zion-slate-light text-lg">
            <p>
              Zion Tech Group connects talented AI specialists, innovative companies, and cutting-edge technological solutions in one seamless ecosystem.
            </p>
            <p>
              Our mission is to democratize access to advanced technology and create opportunities for collaboration and innovation.
            </p>
          </div>
        </div>
      </main>
    </>
  );
}