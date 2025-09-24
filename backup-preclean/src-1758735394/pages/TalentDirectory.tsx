import React from 'react';
import { SEO } from "@/components/SEO";
import { GradientHeading } from "@/components/GradientHeading";

export default function TalentDirectory() {
  return (
    <>
      <SEO 
        title="Talent Directory - Zion Tech Group" 
        description="Find top talent and professionals for your projects." 
        keywords="talent directory, professionals, hiring, Zion Tech Group"
        url="https://ziontechgroup.com/talent"
      />
      <main className="min-h-screen bg-zion-blue pt-24 pb-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <GradientHeading>Talent Directory</GradientHeading>
            <p className="mt-4 text-zion-slate-light text-xl max-w-3xl mx-auto">
              Connect with top professionals and find the perfect talent for your projects
            </p>
          </div>
          
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-zion-blue-dark border border-zion-blue-light rounded-lg p-6">
                <h3 className="text-xl font-bold text-white mb-3">Software Engineers</h3>
                <p className="text-zion-slate-light mb-4">
                  Expert developers ready to build your next project
                </p>
                <a href="#" className="text-zion-cyan hover:text-zion-cyan-light font-medium">
                  Browse Engineers →
                </a>
              </div>
              
              <div className="bg-zion-blue-dark border border-zion-blue-light rounded-lg p-6">
                <h3 className="text-xl font-bold text-white mb-3">AI Specialists</h3>
                <p className="text-zion-slate-light mb-4">
                  AI experts to help implement cutting-edge solutions
                </p>
                <a href="#" className="text-zion-cyan hover:text-zion-cyan-light font-medium">
                  Browse AI Specialists →
                </a>
              </div>
              
              <div className="bg-zion-blue-dark border border-zion-blue-light rounded-lg p-6">
                <h3 className="text-xl font-bold text-white mb-3">Designers</h3>
                <p className="text-zion-slate-light mb-4">
                  Creative professionals for your design needs
                </p>
                <a href="#" className="text-zion-cyan hover:text-zion-cyan-light font-medium">
                  Browse Designers →
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}