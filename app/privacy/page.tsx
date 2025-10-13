import React from 'react';
import EnhancedSEO from '../components/EnhancedSEO';

const PrivacyPage = () => {
  return (
    <div className="min-h-screen">
      <EnhancedSEO 
        title="Privacy Policy - Zion Tech Group"
        description="Privacy policy for Zion Tech Group. Learn how we collect, use, and protect your personal information."
        keywords="privacy policy, data protection, personal information, Zion Tech Group privacy"
      />
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-4xl font-bold text-white mb-8">Privacy Policy</h1>
        
        <div className="prose prose-invert max-w-none">
          <p className="text-gray-300 mb-6">
            Last updated: January 1, 2024
          </p>
          
          <h2 className="text-2xl font-bold text-white mb-4">Information We Collect</h2>
          <p className="text-gray-300 mb-6">
            We collect information you provide directly to us, such as when you create an account, 
            contact us, or use our services.
          </p>
          
          <h2 className="text-2xl font-bold text-white mb-4">How We Use Your Information</h2>
          <p className="text-gray-300 mb-6">
            We use the information we collect to provide, maintain, and improve our services, 
            communicate with you, and ensure the security of our platform.
          </p>
          
          <h2 className="text-2xl font-bold text-white mb-4">Information Sharing</h2>
          <p className="text-gray-300 mb-6">
            We do not sell, trade, or otherwise transfer your personal information to third parties 
            without your consent, except as described in this policy.
          </p>
          
          <h2 className="text-2xl font-bold text-white mb-4">Data Security</h2>
          <p className="text-gray-300 mb-6">
            We implement appropriate security measures to protect your personal information against 
            unauthorized access, alteration, disclosure, or destruction.
          </p>
          
          <h2 className="text-2xl font-bold text-white mb-4">Contact Us</h2>
          <p className="text-gray-300 mb-6">
            If you have any questions about this Privacy Policy, please contact us at 
            privacy@ziontechgroup.com
          </p>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPage;
