import React from 'react';
import { SEO } from "@/components/SEO";
import { GradientHeading } from "@/components/GradientHeading";

export default function TalentsPage() {
  return (
    <>
      <SEO 
        title="Talents - Zion Tech Group" 
        description="Discover our talented professionals and their expertise." 
        keywords="talents, professionals, expertise, Zion Tech Group"
        url="https://ziontechgroup.com/talents"
      />
      <main className="min-h-screen bg-zion-blue pt-24 pb-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <GradientHeading>Our Talents</GradientHeading>
            <p className="mt-4 text-zion-slate-light text-xl max-w-3xl mx-auto">
              Meet our team of skilled professionals ready to help with your projects
            </p>
          </div>
          
          <div className="max-w-6xl mx-auto">
            <div className="text-center">
              <p className="text-zion-slate-light text-lg">
                Our talented team is ready to bring your ideas to life.
              </p>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}