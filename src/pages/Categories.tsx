import React from 'react';
import { SEO } from "@/components/SEO";
import { GradientHeading } from "@/components/GradientHeading";

export default function Categories() {
  return (
    <>
      <SEO 
        title="Categories - Zion Tech Group" 
        description="Browse our service categories and solutions." 
        keywords="categories, services, solutions, Zion Tech Group"
        url="https://ziontechgroup.com/categories"
      />
      <main className="min-h-screen bg-zion-blue pt-24 pb-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <GradientHeading>Categories</GradientHeading>
            <p className="mt-4 text-zion-slate-light text-xl max-w-3xl mx-auto">
              Explore our comprehensive range of service categories
            </p>
          </div>
          
          <div className="max-w-6xl mx-auto">
            <div className="text-center">
              <p className="text-zion-slate-light text-lg">
                Service categories coming soon.
              </p>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}