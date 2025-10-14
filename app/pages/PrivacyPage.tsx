import React from 'react';
import { Helmet } from 'react-helmet-async';

const PrivacyPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Privacy Policy - Zion Tech Group</title>
        <meta name="description" content="Privacy Policy for Zion Tech Group. Learn how we collect, use, and protect your personal information." />
      </Helmet>

      <div className="min-h-screen bg-slate-900 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-8">
              Privacy <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">Policy</span>
            </h1>
            
            <div className="prose prose-invert max-w-none">
              <p className="text-gray-300 text-lg mb-8">
                Last updated: {new Date().toLocaleDateString()}
              </p>

              <div className="space-y-8">
                <section>
                  <h2 className="text-2xl font-bold text-white mb-4">1. Information We Collect</h2>
                  <p className="text-gray-300 leading-relaxed mb-4">
                    We collect information you provide directly to us, such as when you:
                  </p>
                  <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
                    <li>Create an account or contact us</li>
                    <li>Subscribe to our newsletter</li>
                    <li>Request a consultation or demo</li>
                    <li>Use our services</li>
                  </ul>
                  <p className="text-gray-300 leading-relaxed mt-4">
                    This may include your name, email address, phone number, company information, and any other information you choose to provide.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-white mb-4">2. How We Use Your Information</h2>
                  <p className="text-gray-300 leading-relaxed mb-4">
                    We use the information we collect to:
                  </p>
                  <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
                    <li>Provide, maintain, and improve our services</li>
                    <li>Process transactions and send related information</li>
                    <li>Send technical notices, updates, and support messages</li>
                    <li>Respond to your comments and questions</li>
                    <li>Communicate with you about products, services, and events</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-white mb-4">3. Information Sharing</h2>
                  <p className="text-gray-300 leading-relaxed">
                    We do not sell, trade, or otherwise transfer your personal information to third parties without your consent, except as described in this policy. We may share your information in the following circumstances:
                  </p>
                  <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4 mt-4">
                    <li>With service providers who assist us in operating our website and conducting our business</li>
                    <li>When we believe release is appropriate to comply with the law</li>
                    <li>To protect our rights, property, or safety</li>
                    <li>In connection with a business transfer or acquisition</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-white mb-4">4. Data Security</h2>
                  <p className="text-gray-300 leading-relaxed">
                    We implement appropriate security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the internet or electronic storage is 100% secure.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-white mb-4">5. Cookies and Tracking</h2>
                  <p className="text-gray-300 leading-relaxed">
                    We use cookies and similar tracking technologies to collect and use personal information about you. You can control cookies through your browser settings, but disabling cookies may affect the functionality of our website.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-white mb-4">6. Third-Party Links</h2>
                  <p className="text-gray-300 leading-relaxed">
                    Our website may contain links to third-party websites. We are not responsible for the privacy practices of these other sites. We encourage you to read the privacy statements of each website that collects personally identifiable information.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-white mb-4">7. Your Rights</h2>
                  <p className="text-gray-300 leading-relaxed mb-4">
                    Depending on your location, you may have certain rights regarding your personal information, including:
                  </p>
                  <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
                    <li>The right to access your personal information</li>
                    <li>The right to correct inaccurate information</li>
                    <li>The right to delete your personal information</li>
                    <li>The right to restrict processing of your information</li>
                    <li>The right to data portability</li>
                    <li>The right to object to processing</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-white mb-4">8. Children's Privacy</h2>
                  <p className="text-gray-300 leading-relaxed">
                    Our services are not intended for children under 13 years of age. We do not knowingly collect personal information from children under 13. If we become aware that we have collected personal information from a child under 13, we will take steps to delete such information.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-white mb-4">9. Changes to This Policy</h2>
                  <p className="text-gray-300 leading-relaxed">
                    We may update this privacy policy from time to time. We will notify you of any changes by posting the new privacy policy on this page and updating the "Last updated" date.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-white mb-4">10. Contact Us</h2>
                  <p className="text-gray-300 leading-relaxed">
                    If you have any questions about this privacy policy, please contact us at:
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

export default PrivacyPage;