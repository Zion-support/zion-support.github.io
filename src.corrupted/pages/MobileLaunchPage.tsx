import React from 'react';
import { SEO } from "@/components/SEO";
import { GradientHeading } from "@/components/GradientHeading";

export default function MobileLaunchPage() {
  return (
    <>
      <SEO 
        title="Mobile Launch - Zion Tech Group" 
        description="Launch your mobile app with our comprehensive solutions." 
        keywords="mobile launch, mobile app, development, Zion Tech Group"
        url="https://ziontechgroup.com/mobile-launch"
      />
      <main className="min-h-screen bg-zion-blue pt-24 pb-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <GradientHeading>Mobile Launch</GradientHeading>
            <p className="mt-4 text-zion-slate-light text-xl max-w-3xl mx-auto">
              Launch your mobile app with our comprehensive development solutions
            </p>
          </div>
          
          <div className="max-w-6xl mx-auto">
            <div className="text-center">
              <p className="text-zion-slate-light text-lg">
                Mobile launch services coming soon.
              </p>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}