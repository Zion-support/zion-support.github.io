import React from 'react';
import { Helmet } from 'react-helmet-async';

const PrivacyPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Privacy Policy - Zion Tech Group | Data Protection</title>
        <meta name="description" content="Read our privacy policy to understand how we collect, use, and protect your personal information." />
      </Helmet>
      
      <div className="min-h-screen bg-white">
        <div className="bg-gradient-to-br from-gray-50 to-blue-50 py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-5xl font-bold text-gray-900 mb-6">Privacy Policy</h1>
              <p className="text-xl text-gray-600 max-w-4xl mx-auto mb-8">
                Your privacy is important to us. This policy explains how we collect, use, and protect your information.
              </p>
            </div>
          </div>
        </div>

        <div className="py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="prose max-w-none">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Information We Collect</h2>
              <p className="text-gray-600 mb-6">
                We collect information you provide directly to us, such as when you create an account, 
                contact us, or use our services.
              </p>
              
              <h2 className="text-2xl font-bold text-gray-900 mb-4">How We Use Your Information</h2>
              <p className="text-gray-600 mb-6">
                We use the information we collect to provide, maintain, and improve our services, 
                communicate with you, and ensure security.
              </p>
              
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Information Sharing</h2>
              <p className="text-gray-600 mb-6">
                We do not sell, trade, or otherwise transfer your personal information to third parties 
                without your consent, except as described in this policy.
              </p>
              
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Contact Us</h2>
              <p className="text-gray-600 mb-6">
                If you have any questions about this Privacy Policy, please contact us at 
                <a href="mailto:kleber@ziontechgroup.com" className="text-blue-600 hover:text-blue-800"> kleber@ziontechgroup.com</a> 
                or call us at <a href="tel:+13024640950" className="text-blue-600 hover:text-blue-800">+1 302 464 0950</a>.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PrivacyPage;