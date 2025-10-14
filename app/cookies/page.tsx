import React from 'react';
import EnhancedSEO from '../components/EnhancedSEO';

const CookiesPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <EnhancedSEO
        title="Cookie Policy - Zion Tech Group"
        description="Learn about how we use cookies and similar technologies on our website."
        keywords="cookie policy, cookies, tracking, website analytics"
        canonical="/cookies"
      />
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400">
              Cookie Policy
            </span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Learn about how we use cookies and similar technologies on our website.
          </p>
        </div>
        
        <div className="prose prose-lg max-w-none text-gray-300">
          <p className="text-lg leading-relaxed mb-8">
            Cookie policy content coming soon. We will update this page with our complete cookie policy.
          </p>
        </div>
      </div>
    </div>
  );
};

export default CookiesPage;