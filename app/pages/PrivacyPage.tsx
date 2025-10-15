import React from 'react';
import SEOHead from '../components/SEOHead';

const PrivacyPage: React.FC = () => {
  return (
    <>
      <SEOHead
        title="Privacy Policy - Zion Tech Group"
        description="Learn about how Zion Tech Group collects, uses, and protects your personal information. Our commitment to your privacy and data security."
      />
      <div className="min-h-screen bg-slate-900 text-white py-20">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
              Privacy Policy
            </h1>
            <p className="text-xl text-gray-300">
              Last updated: January 15, 2024
            </p>
          </div>

          <div className="prose prose-invert max-w-none">
            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">1. Introduction</h2>
              <p className="text-gray-300 mb-4">
                Zion Tech Group ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">2. Information We Collect</h2>
              <h3 className="text-xl font-semibold mb-3">Personal Information</h3>
              <p className="text-gray-300 mb-4">
                We may collect personal information that you voluntarily provide to us, including:
              </p>
              <ul className="list-disc list-inside text-gray-300 mb-4 space-y-2">
                <li>Name and contact information (email address, phone number, mailing address)</li>
                <li>Company information and job title</li>
                <li>Information provided in contact forms or service inquiries</li>
                <li>Payment information (processed securely through third-party providers)</li>
              </ul>

              <h3 className="text-xl font-semibold mb-3">Automatically Collected Information</h3>
              <p className="text-gray-300 mb-4">
                We may automatically collect certain information about your device and usage, including:
              </p>
              <ul className="list-disc list-inside text-gray-300 mb-4 space-y-2">
                <li>IP address and location data</li>
                <li>Browser type and version</li>
                <li>Operating system</li>
                <li>Pages visited and time spent on our website</li>
                <li>Referring website information</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">3. How We Use Your Information</h2>
              <p className="text-gray-300 mb-4">
                We use the information we collect to:
              </p>
              <ul className="list-disc list-inside text-gray-300 mb-4 space-y-2">
                <li>Provide and improve our services</li>
                <li>Respond to your inquiries and provide customer support</li>
                <li>Send you marketing communications (with your consent)</li>
                <li>Process payments and transactions</li>
                <li>Analyze website usage and improve user experience</li>
                <li>Comply with legal obligations</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">4. Information Sharing and Disclosure</h2>
              <p className="text-gray-300 mb-4">
                We do not sell, trade, or otherwise transfer your personal information to third parties except in the following circumstances:
              </p>
              <ul className="list-disc list-inside text-gray-300 mb-4 space-y-2">
                <li>With your explicit consent</li>
                <li>To trusted service providers who assist us in operating our website and conducting our business</li>
                <li>When required by law or to protect our rights</li>
                <li>In connection with a business transfer or acquisition</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">5. Data Security</h2>
              <p className="text-gray-300 mb-4">
                We implement appropriate technical and organizational security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the internet or electronic storage is 100% secure.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">6. Cookies and Tracking Technologies</h2>
              <p className="text-gray-300 mb-4">
                We use cookies and similar tracking technologies to enhance your experience on our website. You can control cookie settings through your browser preferences.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">7. Your Rights</h2>
              <p className="text-gray-300 mb-4">
                Depending on your location, you may have certain rights regarding your personal information, including:
              </p>
              <ul className="list-disc list-inside text-gray-300 mb-4 space-y-2">
                <li>The right to access your personal information</li>
                <li>The right to correct inaccurate information</li>
                <li>The right to delete your personal information</li>
                <li>The right to restrict processing of your information</li>
                <li>The right to data portability</li>
                <li>The right to object to processing</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">8. Children's Privacy</h2>
              <p className="text-gray-300 mb-4">
                Our services are not intended for children under 13 years of age. We do not knowingly collect personal information from children under 13.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">9. Changes to This Privacy Policy</h2>
              <p className="text-gray-300 mb-4">
                We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last updated" date.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">10. Contact Us</h2>
              <p className="text-gray-300 mb-4">
                If you have any questions about this Privacy Policy or our privacy practices, please contact us at:
              </p>
              <div className="bg-slate-800 p-6 rounded-lg">
                <p className="text-gray-300 mb-2">
                  <strong>Email:</strong> privacy@ziontechgroup.com
                </p>
                <p className="text-gray-300 mb-2">
                  <strong>Phone:</strong> +1 302 464 0950
                </p>
                <p className="text-gray-300">
                  <strong>Address:</strong> 364 E Main St STE 1008, Middletown DE 19709
                </p>
              </div>
            </section>
          </div>
        </div>
      </div>
    </>
  );
};

export default PrivacyPage;
