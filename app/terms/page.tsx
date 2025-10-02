import React from 'react';
import Link from 'next/link';

export const metadata = {
  title: 'Terms of Service - Zion Tech Group',
  description: 'Terms of service and usage agreement for Zion Tech Group services.',
  keywords: 'terms of service, terms and conditions, service agreement',
};

export default function TermsPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-50 to-blue-50 py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Terms of Service
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Please read these terms carefully before using our services.
            </p>
            <p className="text-sm text-gray-500">
              Last updated: {new Date().toLocaleDateString()}
            </p>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Acceptance of Terms</h2>
            <p className="text-gray-600 mb-6">
              By accessing and using Zion Tech Group services, you accept and agree to be bound by 
              the terms and provision of this agreement.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-6">Description of Service</h2>
            <p className="text-gray-600 mb-6">
              Zion Tech Group provides AI, micro SaaS, and IT services including but not limited to:
            </p>
            <ul className="list-disc list-inside text-gray-600 mb-8 space-y-2">
              <li>Artificial Intelligence and Machine Learning solutions</li>
              <li>Micro SaaS application development</li>
              <li>IT services and infrastructure management</li>
              <li>Cloud migration and DevOps services</li>
              <li>Consulting and implementation services</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mb-6">User Responsibilities</h2>
            <p className="text-gray-600 mb-6">
              Users are responsible for:
            </p>
            <ul className="list-disc list-inside text-gray-600 mb-8 space-y-2">
              <li>Providing accurate and complete information</li>
              <li>Maintaining the security of their accounts</li>
              <li>Complying with all applicable laws and regulations</li>
              <li>Not using our services for illegal or unauthorized purposes</li>
              <li>Respecting intellectual property rights</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mb-6">Service Availability</h2>
            <p className="text-gray-600 mb-6">
              We strive to maintain high service availability but do not guarantee uninterrupted access. 
              We reserve the right to modify or discontinue services with reasonable notice.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-6">Intellectual Property</h2>
            <p className="text-gray-600 mb-6">
              All content, trademarks, and intellectual property on our platform are owned by 
              Zion Tech Group or our licensors and are protected by copyright and other laws.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-6">Limitation of Liability</h2>
            <p className="text-gray-600 mb-6">
              To the maximum extent permitted by law, Zion Tech Group shall not be liable for any 
              indirect, incidental, special, or consequential damages arising from the use of our services.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-6">Payment Terms</h2>
            <p className="text-gray-600 mb-6">
              Payment terms are specified in individual service agreements. All fees are non-refundable 
              unless otherwise specified in writing.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-6">Termination</h2>
            <p className="text-gray-600 mb-6">
              Either party may terminate services with written notice. Upon termination, 
              all rights and obligations shall cease except for those that by their nature should survive.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-6">Governing Law</h2>
            <p className="text-gray-600 mb-6">
              These terms shall be governed by and construed in accordance with the laws of Delaware, 
              United States.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-6">Contact Information</h2>
            <p className="text-gray-600 mb-6">
              For questions about these Terms of Service, please contact us:
            </p>
            <div className="bg-gray-50 p-6 rounded-lg">
              <p className="text-gray-600 mb-2">
                <strong>Email:</strong> <a href="mailto:kleber@ziontechgroup.com" className="text-blue-600 hover:underline">kleber@ziontechgroup.com</a>
              </p>
              <p className="text-gray-600 mb-2">
                <strong>Phone:</strong> <a href="tel:+13024640950" className="text-blue-600 hover:underline">+1 302 464 0950</a>
              </p>
              <p className="text-gray-600">
                <strong>Address:</strong> 364 E Main St STE 1008, Middletown DE 19709
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Questions About Our Terms?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            We're here to help clarify any questions about our terms of service.
          </p>
          <Link 
            href="/contact" 
            className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
          >
            Contact Us
          </Link>
        </div>
      </section>
    </div>
  );
}