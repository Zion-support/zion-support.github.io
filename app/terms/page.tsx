import React from 'react';
import { Helmet } from 'react-helmet-async';

const TermsPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Terms of Service - Zion Tech Group</title>
        <meta name="description" content="Read our terms of service for using Zion Tech Group's AI and IT solutions." />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Terms of <span className="text-cyan-400">Service</span>
            </h1>
            
            <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10">
              <div className="prose prose-invert max-w-none">
                <h2 className="text-2xl font-bold text-white mb-4">Acceptance of Terms</h2>
                <p className="text-gray-300 mb-6">
                  By accessing and using our services, you accept and agree to be bound by the terms 
                  and provision of this agreement.
                </p>
                
                <h2 className="text-2xl font-bold text-white mb-4">Use License</h2>
                <p className="text-gray-300 mb-6">
                  Permission is granted to temporarily download one copy of our materials for personal, 
                  non-commercial transitory viewing only.
                </p>
                
                <h2 className="text-2xl font-bold text-white mb-4">Disclaimer</h2>
                <p className="text-gray-300 mb-6">
                  The materials on our website are provided on an 'as is' basis. Zion Tech Group makes 
                  no warranties, expressed or implied, and hereby disclaims and negates all other warranties.
                </p>
                
                <h2 className="text-2xl font-bold text-white mb-4">Contact Information</h2>
                <p className="text-gray-300">
                  If you have any questions about these Terms of Service, please contact us at 
                  <span className="text-cyan-400"> kleber@ziontechgroup.com</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TermsPage;