import React from 'react';
import EnhancedSEO from '../components/EnhancedSEO';

const PrivacyPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <EnhancedSEO
        title="Privacy Policy - Zion Tech Group"
        description="Learn about how Zion Tech Group protects your privacy and handles your personal information."
        keywords="privacy policy, data protection, privacy, personal information"
        canonical="/privacy"
      />
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400">
              Privacy Policy
            </span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Learn about how we protect your privacy and handle your personal information.
          </p>
        </div>
        
        <div className="prose prose-lg max-w-none text-gray-300">
          <p className="text-lg leading-relaxed mb-8">
            Privacy policy content coming soon. We are committed to protecting your privacy and will update this page with our complete privacy policy.
          </p>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPage;