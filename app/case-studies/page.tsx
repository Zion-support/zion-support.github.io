import React from 'react';
import EnhancedSEO from '../components/EnhancedSEO';

export default function CaseStudies() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <EnhancedSEO
        title="Case Studies - Zion Tech Group | Success Stories"
        description="Discover how Zion Tech Group has helped businesses transform with our AI and technology solutions. Read our success stories and case studies."
        keywords="case studies, success stories, AI transformation, business results, technology solutions"
      />
      
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Success Stories
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Discover how we've helped businesses transform with cutting-edge AI and technology solutions
          </p>
        </div>
        
        <div className="text-center text-white">
          <p className="text-lg">Case studies coming soon...</p>
        </div>
      </div>
    </div>
  );
}