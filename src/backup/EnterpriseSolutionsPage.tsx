import React from 'react';
import SEO from "@/components/SEO";
import { GradientHeading } from "../components/GradientHeading";

export default function EnterpriseSolutionsPage() {
  return (
    <>
      <SEO 
        title="Enterprise Solutions - Zion Tech Group" 
        description="Comprehensive enterprise technology solutions for large organizations." 
        keywords="enterprise solutions, large organizations, technology, Zion Tech Group"
        url="https://ziontechgroup.com/enterprise-solutions"
      />
      <main className="min-h-screen bg-zion-blue pt-24 pb-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <GradientHeading>Enterprise Solutions</GradientHeading>
            <p className="mt-4 text-zion-slate-light text-xl max-w-3xl mx-auto">
              Comprehensive technology solutions designed for large organizations
            </p>
          </div>
          
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-zion-blue-dark border border-zion-cyan rounded-lg p-6">
                <h3 className="text-xl font-bold text-white mb-4">Enterprise AI</h3>
                <p className="text-zion-slate-light mb-4">
                  Scalable AI solutions for enterprise-level operations and decision making
                </p>
                <button className="bg-zion-cyan text-zion-blue-dark px-4 py-2 rounded-lg font-semibold hover:bg-zion-cyan-light transition-colors">
                  Learn More
                </button>
              </div>
              
              <div className="bg-zion-blue-dark border border-zion-cyan rounded-lg p-6">
                <h3 className="text-xl font-bold text-white mb-4">Cloud Infrastructure</h3>
                <p className="text-zion-slate-light mb-4">
                  Robust cloud infrastructure solutions for enterprise scalability
                </p>
                <button className="bg-zion-cyan text-zion-blue-dark px-4 py-2 rounded-lg font-semibold hover:bg-zion-cyan-light transition-colors">
                  Learn More
                </button>
              </div>
              
              <div className="bg-zion-blue-dark border border-zion-cyan rounded-lg p-6">
                <h3 className="text-xl font-bold text-white mb-4">Security Solutions</h3>
                <p className="text-zion-slate-light mb-4">
                  Enterprise-grade security solutions and compliance management
                </p>
                <button className="bg-zion-cyan text-zion-blue-dark px-4 py-2 rounded-lg font-semibold hover:bg-zion-cyan-light transition-colors">
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}