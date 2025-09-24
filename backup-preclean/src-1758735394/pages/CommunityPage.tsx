import React from 'react';
import { SEO } from "@/components/SEO";
import { GradientHeading } from "@/components/GradientHeading";

export default function CommunityPage() {
  return (
    <>
      <SEO 
        title="Community - Zion Tech Group" 
        description="Join our community of developers and tech enthusiasts." 
        keywords="community, developers, tech enthusiasts, Zion Tech Group"
        url="https://ziontechgroup.com/community"
      />
      <main className="min-h-screen bg-zion-blue pt-24 pb-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <GradientHeading>Community</GradientHeading>
            <p className="mt-4 text-zion-slate-light text-xl max-w-3xl mx-auto">
              Join our vibrant community of developers and tech enthusiasts
            </p>
          </div>
          
          <div className="max-w-6xl mx-auto">
            <div className="text-center">
              <p className="text-zion-slate-light text-lg">
                Community features coming soon.
              </p>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}