import React from 'react';
import { Helmet } from 'react-helmet-async';

const TermsPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Terms of Service - Zion Tech Group</title>
        <meta name="description" content="Zion Tech Group Terms of Service - Read our terms and conditions for using our services." />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 cyber-grid neural-network-bg">
        <div className="container mx-auto px-4 py-16 pt-24">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-8 text-center neon-text cyber-text">
              Terms of Service
            </h1>
            
            <div className="cyber-card p-8">
              <p className="text-gray-300 mb-6">
                <strong>Last updated:</strong> January 15, 2024
              </p>
              
              <div className="space-y-8">
                <section>
                  <h2 className="text-2xl font-bold text-cyan-400 mb-4">1. Acceptance of Terms</h2>
                  <p className="text-gray-300 leading-relaxed">
                    By accessing and using Zion Tech Group's services, you accept and agree to be bound by 
                    the terms and provision of this agreement. If you do not agree to abide by the above, 
                    please do not use this service.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-cyan-400 mb-4">2. Use License</h2>
                  <p className="text-gray-300 leading-relaxed mb-4">
                    Permission is granted to temporarily download one copy of the materials on Zion Tech Group's 
                    website for personal, non-commercial transitory viewing only. This is the grant of a license, 
                    not a transfer of title, and under this license you may not:
                  </p>
                  <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
                    <li>Modify or copy the materials</li>
                    <li>Use the materials for any commercial purpose or for any public display</li>
                    <li>Attempt to reverse engineer any software contained on the website</li>
                    <li>Remove any copyright or other proprietary notations from the materials</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-cyan-400 mb-4">3. Service Availability</h2>
                  <p className="text-gray-300 leading-relaxed">
                    We strive to maintain high service availability, but we do not guarantee that our services 
                    will be uninterrupted or error-free. We reserve the right to modify or discontinue our 
                    services at any time without notice.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-cyan-400 mb-4">4. User Responsibilities</h2>
                  <p className="text-gray-300 leading-relaxed mb-4">
                    You agree to:
                  </p>
                  <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
                    <li>Provide accurate and complete information</li>
                    <li>Maintain the security of your account credentials</li>
                    <li>Use our services in compliance with applicable laws</li>
                    <li>Not use our services for any unlawful or prohibited purpose</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-cyan-400 mb-4">5. Intellectual Property</h2>
                  <p className="text-gray-300 leading-relaxed">
                    All content, trademarks, and other intellectual property on this website are owned by 
                    Zion Tech Group or its licensors. You may not use, reproduce, or distribute any content 
                    without our express written permission.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-cyan-400 mb-4">6. Limitation of Liability</h2>
                  <p className="text-gray-300 leading-relaxed">
                    In no event shall Zion Tech Group or its suppliers be liable for any damages (including, 
                    without limitation, damages for loss of data or profit, or due to business interruption) 
                    arising out of the use or inability to use the materials on our website.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-cyan-400 mb-4">7. Contact Information</h2>
                  <p className="text-gray-300 leading-relaxed">
                    If you have any questions about these Terms of Service, please contact us at:
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

export default TermsPage;