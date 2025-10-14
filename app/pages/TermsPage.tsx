import React from 'react';
import { Helmet } from 'react-helmet-async';

const TermsPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Terms of Service - Zion Tech Group</title>
        <meta name="description" content="Terms of Service for Zion Tech Group. Read our terms and conditions for using our services." />
      </Helmet>
      
      <div className="min-h-screen bg-slate-900 text-white">
        <div className="container mx-auto px-4 py-20 max-w-4xl">
          <h1 className="text-4xl font-bold mb-8 bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
            Terms of Service
          </h1>
          
          <div className="prose prose-invert max-w-none">
            <p className="text-gray-300 mb-6">
              <strong>Last updated:</strong> January 15, 2024
            </p>
            
            <h2 className="text-2xl font-bold text-white mt-8 mb-4">1. Acceptance of Terms</h2>
            <p className="text-gray-300 mb-4">
              By accessing and using our services, you accept and agree to be bound by the terms 
              and provision of this agreement.
            </p>
            
            <h2 className="text-2xl font-bold text-white mt-8 mb-4">2. Use License</h2>
            <p className="text-gray-300 mb-4">
              Permission is granted to temporarily download one copy of our materials for personal, 
              non-commercial transitory viewing only.
            </p>
            
            <h2 className="text-2xl font-bold text-white mt-8 mb-4">3. Disclaimer</h2>
            <p className="text-gray-300 mb-4">
              The materials on our website are provided on an 'as is' basis. Zion Tech Group makes 
              no warranties, expressed or implied, and hereby disclaims and negates all other warranties.
            </p>
            
            <h2 className="text-2xl font-bold text-white mt-8 mb-4">4. Limitations</h2>
            <p className="text-gray-300 mb-4">
              In no event shall Zion Tech Group or its suppliers be liable for any damages arising 
              out of the use or inability to use the materials on our website.
            </p>
            
            <h2 className="text-2xl font-bold text-white mt-8 mb-4">5. Contact Information</h2>
            <p className="text-gray-300 mb-4">
              If you have any questions about these Terms of Service, please contact us at 
              <a href="mailto:legal@ziontechgroup.com" className="text-purple-400 hover:text-purple-300">
                legal@ziontechgroup.com
              </a>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default TermsPage;