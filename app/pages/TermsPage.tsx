import React from 'react';
import { Helmet } from 'react-helmet-async';

const TermsPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Terms of Service - Zion Tech Group</title>
        <meta name="description" content="Terms of Service for Zion Tech Group - AI and IT Solutions" />
      </Helmet>
      
      <div className="min-h-screen bg-slate-900 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-8 gradient-text">
              Terms of Service
            </h1>
            
            <div className="prose prose-invert max-w-none">
              <p className="text-gray-300 text-lg mb-8">
                Last updated: {new Date().toLocaleDateString()}
              </p>
              
              <div className="space-y-8">
                <section>
                  <h2 className="text-2xl font-bold text-white mb-4">1. Acceptance of Terms</h2>
                  <p className="text-gray-300 leading-relaxed">
                    By accessing and using Zion Tech Group's services, you accept and agree to be bound by the terms and provision of this agreement.
                  </p>
                </section>
                
                <section>
                  <h2 className="text-2xl font-bold text-white mb-4">2. Use License</h2>
                  <p className="text-gray-300 leading-relaxed">
                    Permission is granted to temporarily download one copy of the materials on Zion Tech Group's website for personal, non-commercial transitory viewing only.
                  </p>
                </section>
                
                <section>
                  <h2 className="text-2xl font-bold text-white mb-4">3. Disclaimer</h2>
                  <p className="text-gray-300 leading-relaxed">
                    The materials on Zion Tech Group's website are provided on an 'as is' basis. Zion Tech Group makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties.
                  </p>
                </section>
                
                <section>
                  <h2 className="text-2xl font-bold text-white mb-4">4. Limitations</h2>
                  <p className="text-gray-300 leading-relaxed">
                    In no event shall Zion Tech Group or its suppliers be liable for any damages arising out of the use or inability to use the materials on Zion Tech Group's website.
                  </p>
                </section>
                
                <section>
                  <h2 className="text-2xl font-bold text-white mb-4">5. Contact Information</h2>
                  <p className="text-gray-300 leading-relaxed">
                    If you have any questions about these Terms of Service, please contact us at:
                    <br />
                    Email: kleber@ziontechgroup.com
                    <br />
                    Phone: +1-302-464-0950
                    <br />
                    Address: 364 E Main St STE 1008, Middletown, DE 19709
                  </p>
                </section>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TermsPage;