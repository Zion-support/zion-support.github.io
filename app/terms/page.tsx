import React from 'react';
import { Helmet } from 'react-helmet-async';

const TermsPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Terms of Service - Zion Tech Group</title>
        <meta name="description" content="Read Zion Tech Group's terms of service to understand the terms and conditions for using our services." />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 py-20">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-white mb-6">
              Terms of <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">Service</span>
            </h1>
            <p className="text-xl text-gray-300">
              Last updated: {new Date().toLocaleDateString()}
            </p>
          </div>
          
          <div className="prose prose-invert max-w-none">
            <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-8 space-y-6">
              <section>
                <h2 className="text-2xl font-bold text-cyan-400 mb-4">Acceptance of Terms</h2>
                <p className="text-gray-300">
                  By accessing and using our services, you accept and agree to be bound by the terms 
                  and provision of this agreement.
                </p>
              </section>
              
              <section>
                <h2 className="text-2xl font-bold text-cyan-400 mb-4">Use License</h2>
                <p className="text-gray-300">
                  Permission is granted to temporarily download one copy of our materials for personal, 
                  non-commercial transitory viewing only.
                </p>
              </section>
              
              <section>
                <h2 className="text-2xl font-bold text-cyan-400 mb-4">Disclaimer</h2>
                <p className="text-gray-300">
                  The materials on our website are provided on an 'as is' basis. Zion Tech Group makes 
                  no warranties, expressed or implied, and hereby disclaims and negates all other warranties.
                </p>
              </section>
              
              <section>
                <h2 className="text-2xl font-bold text-cyan-400 mb-4">Limitations</h2>
                <p className="text-gray-300">
                  In no event shall Zion Tech Group or its suppliers be liable for any damages arising 
                  out of the use or inability to use the materials on our website.
                </p>
              </section>
              
              <section>
                <h2 className="text-2xl font-bold text-cyan-400 mb-4">Contact Information</h2>
                <p className="text-gray-300">
                  If you have any questions about these Terms of Service, please contact us at 
                  legal@ziontechgroup.com
                </p>
              </section>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TermsPage;