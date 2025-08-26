import React from 'react';
import Head from 'next/head';
import Link from 'next/link';

export default function TermsOfService() {
  const lastUpdated = 'January 15, 2024';

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50">
      <Head>
        <title>Terms of Service - Zion Tech Group</title>
        <meta name="description" content="Read Zion Tech Group's Terms of Service and understand our service terms and conditions." />
      </Head>

      <main className="container mx-auto px-4 py-16 pt-32">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Terms of Service
          </h1>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto">
            These terms and conditions govern your use of Zion Tech Group's services and website.
          </p>
        </div>

        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-12 text-center">
          <p className="text-blue-800">
            <strong>Last Updated:</strong> {lastUpdated}
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-8">
          <section className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Acceptance of Terms</h2>
            <p className="text-gray-600 mb-4">
              By accessing and using Zion Tech Group's website and services, you accept and agree to be bound by the terms and provision of this agreement.
            </p>
          </section>

          <section className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Services Description</h2>
            <p className="text-gray-600 mb-4">
              Zion Tech Group provides technology consulting, software development, and digital transformation services including AI solutions, cybersecurity, and cloud services.
            </p>
          </section>

          <section className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">3. User Obligations</h2>
            <p className="text-gray-600 mb-4">
              Users must be at least 18 years old and are responsible for maintaining the confidentiality of their account information.
            </p>
          </section>

          <section className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Intellectual Property</h2>
            <p className="text-gray-600 mb-4">
              All content, software, and materials on this website are the property of Zion Tech Group and are protected by intellectual property laws.
            </p>
          </section>

          <section className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Payment Terms</h2>
            <p className="text-gray-600 mb-4">
              Payment terms are specified in individual service agreements. All fees are due upon receipt of invoice unless otherwise specified.
            </p>
          </section>

          <section className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Limitation of Liability</h2>
            <p className="text-gray-600 mb-4">
              Zion Tech Group's liability is limited to the amount paid for services. We are not liable for indirect, incidental, or consequential damages.
            </p>
          </section>

          <section className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Contact Information</h2>
            <p className="text-gray-600 mb-4">
              If you have questions about these Terms of Service, please contact us:
            </p>
            <div className="bg-gray-50 p-6 rounded-lg">
              <div className="space-y-2 text-gray-600">
                <p><strong>Email:</strong> kleber@ziontechgroup.com</p>
                <p><strong>Phone:</strong> +1 302 464 0950</p>
                <p><strong>Address:</strong> 364 E Main St STE 1008 Middletown DE 19709</p>
              </div>
            </div>
          </section>
        </div>

        <div className="text-center mt-16">
          <Link
            href="/contact"
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors duration-300"
          >
            Contact Us
          </Link>
        </div>
      </main>
    </div>
  );
}