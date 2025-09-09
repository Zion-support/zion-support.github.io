import React from 'react';
import { SEO } from "@/components/SEO";

const CaseStudies: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-zion-blue-dark to-zion-blue-darker">
      <SEO 
        title="Case Studies - Zion Tech Group"
        description="Explore our successful case studies and see how we've helped businesses transform with AI and technology solutions."
        keywords="case studies, success stories, AI solutions, technology transformation"
      />
      
      <div className="container mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-white mb-6">Case Studies</h1>
          <p className="text-xl text-zion-blue-light max-w-3xl mx-auto">
            Explore our successful case studies and see how we've helped businesses transform with AI and technology solutions.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
            <h2 className="text-3xl font-bold text-white mb-6">Success Stories</h2>
            <p className="text-lg text-zion-blue-light mb-6">
              Our case studies showcase real-world applications of our AI and technology solutions, 
              demonstrating measurable results and business impact.
            </p>
            <p className="text-lg text-zion-blue-light">
              From small startups to enterprise organizations, we've helped businesses across 
              various industries achieve their technology goals and drive growth.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CaseStudies;