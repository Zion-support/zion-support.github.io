import React from 'react';
import SEO from '@/components/SEO';
import { GradientHeading } from '@/components/GradientHeading';

export default function Blog() {
  return (
    <>
      <SEO 
        title="Blog - Zion Tech Group" 
        description="Latest insights, news, and updates from Zion Tech Group." 
        canonical="https://ziontechgroup.com/blog" 
      />
      
      <main className="min-h-screen bg-zion-blue">
        <div className="container mx-auto px-4 py-20">
          <div className="text-center mb-16">
            <GradientHeading>Blog</GradientHeading>
            <p className="text-xl text-zion-slate-light mt-6 max-w-3xl mx-auto">
              Latest insights, news, and updates from Zion Tech Group.
            </p>
          </div>
          
          <div className="max-w-6xl mx-auto">
            <div className="bg-zion-blue-light rounded-lg p-8 border border-zion-blue-lighter">
              <h2 className="text-2xl font-bold text-white mb-6">Coming Soon</h2>
              <p className="text-zion-slate-light mb-6">
                Our blog is currently under development. Check back soon for the latest insights and updates.
              </p>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}