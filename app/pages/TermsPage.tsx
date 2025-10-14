import React from 'react';
import { Helmet } from 'react-helmet-async';

const TermsPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Terms of Service - Zion Tech Group</title>
        <meta name="description" content="Terms of Service for Zion Tech Group. Please read our terms and conditions before using our services." />
      </Helmet>

      <div className="min-h-screen bg-slate-900 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-8">
              Terms of <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">Service</span>
            </h1>
            
            <div className="prose prose-invert max-w-none">
              <p className="text-gray-300 text-lg mb-8">
                Last updated: {new Date().toLocaleDateString()}
              </p>

              <div className="space-y-8">
                <section>
                  <h2 className="text-2xl font-bold text-white mb-4">1. Acceptance of Terms</h2>
                  <p className="text-gray-300 leading-relaxed">
                    By accessing and using Zion Tech Group's services, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-white mb-4">2. Use License</h2>
                  <p className="text-gray-300 leading-relaxed mb-4">
                    Permission is granted to temporarily download one copy of the materials on Zion Tech Group's website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:
                  </p>
                  <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
                    <li>modify or copy the materials</li>
                    <li>use the materials for any commercial purpose or for any public display</li>
                    <li>attempt to reverse engineer any software contained on the website</li>
                    <li>remove any copyright or other proprietary notations from the materials</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-white mb-4">3. Service Description</h2>
                  <p className="text-gray-300 leading-relaxed">
                    Zion Tech Group provides AI solutions, IT services, cloud infrastructure, and digital transformation services. We reserve the right to modify, suspend, or discontinue any aspect of our services at any time without notice.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-white mb-4">4. User Responsibilities</h2>
                  <p className="text-gray-300 leading-relaxed mb-4">
                    Users are responsible for:
                  </p>
                  <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
                    <li>Providing accurate and complete information</li>
                    <li>Maintaining the confidentiality of their account credentials</li>
                    <li>Complying with all applicable laws and regulations</li>
                    <li>Not using our services for any illegal or unauthorized purpose</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-white mb-4">5. Privacy Policy</h2>
                  <p className="text-gray-300 leading-relaxed">
                    Your privacy is important to us. Please review our Privacy Policy, which also governs your use of the service, to understand our practices.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-white mb-4">6. Limitation of Liability</h2>
                  <p className="text-gray-300 leading-relaxed">
                    In no event shall Zion Tech Group or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on Zion Tech Group's website, even if Zion Tech Group or a Zion Tech Group authorized representative has been notified orally or in writing of the possibility of such damage.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-white mb-4">7. Accuracy of Materials</h2>
                  <p className="text-gray-300 leading-relaxed">
                    The materials appearing on Zion Tech Group's website could include technical, typographical, or photographic errors. Zion Tech Group does not warrant that any of the materials on its website are accurate, complete, or current.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-white mb-4">8. Links</h2>
                  <p className="text-gray-300 leading-relaxed">
                    Zion Tech Group has not reviewed all of the sites linked to our website and is not responsible for the contents of any such linked site. The inclusion of any link does not imply endorsement by Zion Tech Group of the site.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-white mb-4">9. Modifications</h2>
                  <p className="text-gray-300 leading-relaxed">
                    Zion Tech Group may revise these terms of service for its website at any time without notice. By using this website, you are agreeing to be bound by the then current version of these terms of service.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-white mb-4">10. Governing Law</h2>
                  <p className="text-gray-300 leading-relaxed">
                    These terms and conditions are governed by and construed in accordance with the laws of Delaware, United States, and you irrevocably submit to the exclusive jurisdiction of the courts in that state or location.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-white mb-4">11. Contact Information</h2>
                  <p className="text-gray-300 leading-relaxed">
                    If you have any questions about these Terms of Service, please contact us at:
                  </p>
                  <div className="mt-4 p-4 bg-slate-800 rounded-lg">
                    <p className="text-gray-300">
                      <strong>Zion Tech Group</strong><br />
                      364 E Main St STE 1008<br />
                      Middletown, DE 19709<br />
                      Email: kleber@ziontechgroup.com<br />
                      Phone: +1-302-464-0950
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