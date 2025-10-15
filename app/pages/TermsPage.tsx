import React from 'react';
import SEOHead from '../components/SEOHead';

const TermsPage: React.FC = () => {
  return (
    <>
      <SEOHead
        title="Terms of Service - Zion Tech Group"
        description="Terms of service for Zion Tech Group. Read our terms and conditions for using our services."
      />
      <div className="min-h-screen bg-slate-900 text-white">
        <div className="max-w-4xl mx-auto py-20 px-4">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
              Terms of Service
            </h1>
            <p className="text-xl text-gray-300">
              Last updated: January 1, 2024
            </p>
          </div>

          <div className="prose prose-invert max-w-none">
            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">Acceptance of Terms</h2>
              <p className="text-gray-300 mb-4">
                By accessing and using Zion Tech Group's services, you accept and agree to be bound by 
                the terms and provision of this agreement. If you do not agree to abide by the above, 
                please do not use this service.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">Description of Service</h2>
              <p className="text-gray-300 mb-4">
                Zion Tech Group provides AI solutions, IT services, cybersecurity, cloud infrastructure, 
                and digital transformation services. Our services include but are not limited to:
              </p>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li>Artificial Intelligence and Machine Learning solutions</li>
                <li>IT consulting and infrastructure management</li>
                <li>Cybersecurity services and threat protection</li>
                <li>Cloud migration and management</li>
                <li>Custom software development</li>
                <li>Digital transformation consulting</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">User Responsibilities</h2>
              <p className="text-gray-300 mb-4">
                Users are responsible for:
              </p>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li>Providing accurate and complete information</li>
                <li>Maintaining the confidentiality of account credentials</li>
                <li>Complying with all applicable laws and regulations</li>
                <li>Not using our services for illegal or unauthorized purposes</li>
                <li>Respecting intellectual property rights</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">Service Availability</h2>
              <p className="text-gray-300 mb-4">
                We strive to maintain high service availability but do not guarantee uninterrupted access. 
                We reserve the right to modify, suspend, or discontinue any part of our services at any time 
                with or without notice.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">Intellectual Property</h2>
              <p className="text-gray-300 mb-4">
                All content, trademarks, and intellectual property on our website and in our services 
                are owned by Zion Tech Group or our licensors. You may not use, reproduce, or distribute 
                any content without our written permission.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">Limitation of Liability</h2>
              <p className="text-gray-300 mb-4">
                To the maximum extent permitted by law, Zion Tech Group shall not be liable for any 
                indirect, incidental, special, consequential, or punitive damages, including but not 
                limited to loss of profits, data, or use, arising out of or relating to your use of our services.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">Governing Law</h2>
              <p className="text-gray-300 mb-4">
                These terms shall be governed by and construed in accordance with the laws of the State of Delaware, 
                without regard to its conflict of law provisions.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">Changes to Terms</h2>
              <p className="text-gray-300 mb-4">
                We reserve the right to modify these terms at any time. We will notify users of any 
                material changes by posting the new terms on our website. Your continued use of our 
                services after such modifications constitutes acceptance of the updated terms.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">Contact Information</h2>
              <p className="text-gray-300 mb-4">
                If you have any questions about these Terms of Service, please contact us at:
              </p>
              <div className="bg-slate-800 p-6 rounded-lg">
                <p className="text-gray-300">
                  <strong>Email:</strong> legal@ziontechgroup.com<br />
                  <strong>Phone:</strong> +1 302 464 0950<br />
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
