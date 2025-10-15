import React from 'react';
import { Helmet } from 'react-helmet-async';

const PrivacyPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Privacy Policy - Zion Tech Group</title>
        <meta name="description" content="Privacy Policy for Zion Tech Group - AI and IT Solutions" />
      </Helmet>
      
      <div className="min-h-screen bg-slate-900 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-8 gradient-text">
              Privacy Policy
            </h1>
            
            <div className="prose prose-invert max-w-none">
              <p className="text-gray-300 text-lg mb-8">
                Last updated: {new Date().toLocaleDateString()}
              </p>
              
              <div className="space-y-8">
                <section>
                  <h2 className="text-2xl font-bold text-white mb-4">1. Information We Collect</h2>
                  <p className="text-gray-300 leading-relaxed">
                    We collect information you provide directly to us, such as when you create an account, use our services, or contact us for support.
                  </p>
                </section>
                
                <section>
                  <h2 className="text-2xl font-bold text-white mb-4">2. How We Use Your Information</h2>
                  <p className="text-gray-300 leading-relaxed">
                    We use the information we collect to provide, maintain, and improve our services, process transactions, and communicate with you.
                  </p>
                </section>
                
                <section>
                  <h2 className="text-2xl font-bold text-white mb-4">3. Information Sharing</h2>
                  <p className="text-gray-300 leading-relaxed">
                    We do not sell, trade, or otherwise transfer your personal information to third parties without your consent, except as described in this policy.
                  </p>
                </section>
                
                <section>
                  <h2 className="text-2xl font-bold text-white mb-4">4. Data Security</h2>
                  <p className="text-gray-300 leading-relaxed">
                    We implement appropriate security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.
                  </p>
                </section>
                
                <section>
                  <h2 className="text-2xl font-bold text-white mb-4">5. Contact Us</h2>
                  <p className="text-gray-300 leading-relaxed">
                    If you have any questions about this Privacy Policy, please contact us at:
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

export default PrivacyPage;