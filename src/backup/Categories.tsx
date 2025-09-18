import React from 'react';
import SEO from "@/components/SEO";
import { GradientHeading } from "@/components/GradientHeading";

export default function Categories() {
  return (
    <>
      <SEO 
        title="Categories - Zion Tech Group" 
        description="Browse our comprehensive categories of technology solutions and services." 
        keywords="categories, technology solutions, services, Zion Tech Group"
        url="https://ziontechgroup.com/categories"
      />
      <main className="min-h-screen bg-zion-blue pt-24 pb-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <GradientHeading>Categories</GradientHeading>
            <p className="mt-4 text-zion-slate-light text-xl max-w-3xl mx-auto">
              Explore our comprehensive range of technology solutions and services
            </p>
          </div>
          
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-zion-blue-dark border border-zion-cyan rounded-lg p-6">
                <h3 className="text-xl font-bold text-white mb-4">AI & Machine Learning</h3>
                <p className="text-zion-slate-light mb-4">
                  Advanced AI solutions and machine learning platforms
                </p>
                <button className="bg-zion-cyan text-zion-blue-dark px-4 py-2 rounded-lg font-semibold hover:bg-zion-cyan-light transition-colors">
                  Explore AI Solutions
                </button>
              </div>
              
              <div className="bg-zion-blue-dark border border-zion-cyan rounded-lg p-6">
                <h3 className="text-xl font-bold text-white mb-4">Cybersecurity</h3>
                <p className="text-zion-slate-light mb-4">
                  Comprehensive security solutions and protection services
                </p>
                <button className="bg-zion-cyan text-zion-blue-dark px-4 py-2 rounded-lg font-semibold hover:bg-zion-cyan-light transition-colors">
                  Explore Security
                </button>
              </div>
              
              <div className="bg-zion-blue-dark border border-zion-cyan rounded-lg p-6">
                <h3 className="text-xl font-bold text-white mb-4">Cloud Solutions</h3>
                <p className="text-zion-slate-light mb-4">
                  Scalable cloud infrastructure and management services
                </p>
                <button className="bg-zion-cyan text-zion-blue-dark px-4 py-2 rounded-lg font-semibold hover:bg-zion-cyan-light transition-colors">
                  Explore Cloud
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}