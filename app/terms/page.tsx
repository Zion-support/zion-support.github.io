import React from 'react';
import { Helmet } from 'react-helmet-async';

const TermsPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Terms of Service - Zion Tech Group</title>
        <meta name="description" content="Terms of Service for Zion Tech Group's AI and IT solutions." />
      </Helmet>
      
      <div className="min-h-screen bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-6">Terms of Service</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Please read these terms carefully before using our services
            </p>
          </div>
          
          <div className="prose max-w-none">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">1. Acceptance of Terms</h2>
            <p className="text-gray-600 mb-6">
              By accessing and using Zion Tech Group's services, you accept and agree to be bound by the terms and provision of this agreement.
            </p>
            
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">2. Use License</h2>
            <p className="text-gray-600 mb-6">
              Permission is granted to temporarily download one copy of the materials on Zion Tech Group's website for personal, non-commercial transitory viewing only.
            </p>
            
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">3. Disclaimer</h2>
            <p className="text-gray-600 mb-6">
              The materials on Zion Tech Group's website are provided on an 'as is' basis. Zion Tech Group makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties.
            </p>
            
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">4. Limitations</h2>
            <p className="text-gray-600 mb-6">
              In no event shall Zion Tech Group or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on Zion Tech Group's website.
            </p>
            
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">5. Accuracy of Materials</h2>
            <p className="text-gray-600 mb-6">
              The materials appearing on Zion Tech Group's website could include technical, typographical, or photographic errors. Zion Tech Group does not warrant that any of the materials on its website are accurate, complete, or current.
            </p>
            
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">6. Contact Information</h2>
            <p className="text-gray-600 mb-6">
              If you have any questions about these Terms of Service, please contact us at legal@ziontechgroup.com.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default TermsPage;
