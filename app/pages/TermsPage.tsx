import React from 'react';
import SEOHead from '../components/SEOHead';

const TermsPage: React.FC = () => {
  return (
    <>
      <SEOHead
        title="Terms of Service - Zion Tech Group"
        description="Read our terms of service and understand the conditions for using Zion Tech Group's website and services."
      />
      <div className="min-h-screen bg-slate-900 text-white py-20">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
              Terms of Service
            </h1>
            <p className="text-xl text-gray-300">
              Last updated: January 15, 2024
            </p>
          </div>

          <div className="prose prose-invert max-w-none">
            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">1. Acceptance of Terms</h2>
              <p className="text-gray-300 mb-4">
                By accessing and using this website and our services, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">2. Use License</h2>
              <p className="text-gray-300 mb-4">
                Permission is granted to temporarily download one copy of the materials on Zion Tech Group's website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:
              </p>
              <ul className="list-disc list-inside text-gray-300 mb-4 space-y-2">
                <li>Modify or copy the materials</li>
                <li>Use the materials for any commercial purpose or for any public display</li>
                <li>Attempt to reverse engineer any software contained on the website</li>
                <li>Remove any copyright or other proprietary notations from the materials</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">3. Service Description</h2>
              <p className="text-gray-300 mb-4">
                Zion Tech Group provides AI solutions, micro-SaaS development, IT services, cloud infrastructure, and cybersecurity services. We reserve the right to modify, suspend, or discontinue any part of our services at any time without notice.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">4. User Responsibilities</h2>
              <p className="text-gray-300 mb-4">
                You agree to:
              </p>
              <ul className="list-disc list-inside text-gray-300 mb-4 space-y-2">
                <li>Provide accurate and complete information when using our services</li>
                <li>Use our services only for lawful purposes</li>
                <li>Not interfere with or disrupt our services or servers</li>
                <li>Not attempt to gain unauthorized access to any part of our services</li>
                <li>Comply with all applicable laws and regulations</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">5. Intellectual Property Rights</h2>
              <p className="text-gray-300 mb-4">
                The content, organization, graphics, design, compilation, magnetic translation, digital conversion, and other matters related to the website are protected under applicable copyrights, trademarks, and other proprietary rights. The copying, redistribution, use, or publication by you of any such matters or any part of the website is strictly prohibited.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">6. Payment Terms</h2>
              <p className="text-gray-300 mb-4">
                Payment for services is due as specified in the service agreement. We reserve the right to suspend or terminate services for non-payment. All fees are non-refundable unless otherwise specified in writing.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">7. Limitation of Liability</h2>
              <p className="text-gray-300 mb-4">
                In no event shall Zion Tech Group, nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential, or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from your use of the service.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">8. Disclaimer</h2>
              <p className="text-gray-300 mb-4">
                The information on this website is provided on an "as is" basis. To the fullest extent permitted by law, Zion Tech Group excludes all representations, warranties, conditions, and terms relating to our website and the use of this website.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">9. Privacy Policy</h2>
              <p className="text-gray-300 mb-4">
                Your privacy is important to us. Please review our Privacy Policy, which also governs your use of the service, to understand our practices.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">10. Termination</h2>
              <p className="text-gray-300 mb-4">
                We may terminate or suspend your access immediately, without prior notice or liability, for any reason whatsoever, including without limitation if you breach the Terms.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">11. Governing Law</h2>
              <p className="text-gray-300 mb-4">
                These Terms shall be interpreted and governed by the laws of the State of Delaware, without regard to its conflict of law provisions.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">12. Changes to Terms</h2>
              <p className="text-gray-300 mb-4">
                We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a revision is material, we will try to provide at least 30 days notice prior to any new terms taking effect.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">13. Contact Information</h2>
              <p className="text-gray-300 mb-4">
                If you have any questions about these Terms of Service, please contact us at:
              </p>
              <div className="bg-slate-800 p-6 rounded-lg">
                <p className="text-gray-300 mb-2">
                  <strong>Email:</strong> legal@ziontechgroup.com
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

export default TermsPage;
