import React from 'react';
import { Helmet } from 'react-helmet-async';

const PrivacyPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Privacy Policy - Zion Tech Group</title>
        <meta name="description" content="Zion Tech Group Privacy Policy - Learn how we protect and handle your personal information." />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 cyber-grid neural-network-bg">
        <div className="container mx-auto px-4 py-16 pt-24">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-8 text-center neon-text cyber-text">
              Privacy Policy
            </h1>
            
            <div className="cyber-card p-8">
              <p className="text-gray-300 mb-6">
                <strong>Last updated:</strong> January 15, 2024
              </p>
              
              <div className="space-y-8">
                <section>
                  <h2 className="text-2xl font-bold text-cyan-400 mb-4">1. Information We Collect</h2>
                  <p className="text-gray-300 leading-relaxed">
                    We collect information you provide directly to us, such as when you create an account, 
                    contact us, or use our services. This may include your name, email address, phone number, 
                    company information, and any other information you choose to provide.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-cyan-400 mb-4">2. How We Use Your Information</h2>
                  <p className="text-gray-300 leading-relaxed mb-4">
                    We use the information we collect to:
                  </p>
                  <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
                    <li>Provide, maintain, and improve our services</li>
                    <li>Process transactions and send related information</li>
                    <li>Send technical notices, updates, and support messages</li>
                    <li>Respond to your comments and questions</li>
                    <li>Monitor and analyze trends and usage</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-cyan-400 mb-4">3. Information Sharing</h2>
                  <p className="text-gray-300 leading-relaxed">
                    We do not sell, trade, or otherwise transfer your personal information to third parties 
                    without your consent, except as described in this privacy policy. We may share your 
                    information in certain limited circumstances, such as with service providers who assist 
                    us in operating our website and conducting our business.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-cyan-400 mb-4">4. Data Security</h2>
                  <p className="text-gray-300 leading-relaxed">
                    We implement appropriate security measures to protect your personal information against 
                    unauthorized access, alteration, disclosure, or destruction. However, no method of 
                    transmission over the internet or electronic storage is 100% secure.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-cyan-400 mb-4">5. Your Rights</h2>
                  <p className="text-gray-300 leading-relaxed mb-4">
                    You have the right to:
                  </p>
                  <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
                    <li>Access and update your personal information</li>
                    <li>Request deletion of your personal information</li>
                    <li>Opt-out of certain communications</li>
                    <li>Request data portability</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-cyan-400 mb-4">6. Contact Us</h2>
                  <p className="text-gray-300 leading-relaxed">
                    If you have any questions about this Privacy Policy, please contact us at:
                  </p>
                  <div className="mt-4 p-4 bg-slate-800 rounded-lg">
                    <p className="text-gray-300">
                      <strong>Email:</strong> kleber@ziontechgroup.com<br />
                      <strong>Phone:</strong> (302) 464-0950<br />
                      <strong>Address:</strong> 364 E Main St STE 1008, Middletown, DE 19709
                    </p>
                  </div>
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