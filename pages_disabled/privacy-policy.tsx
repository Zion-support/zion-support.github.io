import React from 'react';
import Head from 'next/head';
import Link from 'next/link';

export default function PrivacyPolicy() {
  const lastUpdated = 'January 15, 2024';

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50">
      <Head>
        <title>Privacy Policy - Zion Tech Group</title>
        <meta name="description" content="Learn how Zion Tech Group protects your privacy and handles your data." />
      </Head>

      <main className="container mx-auto px-4 py-16 pt-32">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Privacy Policy
          </h1>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto">
            At Zion Tech Group, we are committed to protecting your privacy and ensuring the security of your personal information.
          </p>
        </div>

        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-12 text-center">
          <p className="text-blue-800">
            <strong>Last Updated:</strong> {lastUpdated}
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-8">
          <section className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Information We Collect</h2>
            <p className="text-gray-600 mb-4">
              We may collect personal information that you provide directly to us, including:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-600 ml-4">
              <li>Name, email address, and phone number</li>
              <li>Company name and job title</li>
              <li>Project requirements and business information</li>
              <li>Communication preferences and feedback</li>
            </ul>
          </section>

          <section className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">How We Use Your Information</h2>
            <p className="text-gray-600 mb-4">
              We use the information we collect to:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-600 ml-4">
              <li>Provide and improve our services</li>
              <li>Communicate with you about our services</li>
              <li>Send you technical notices and support messages</li>
              <li>Respond to your comments and questions</li>
            </ul>
          </section>

          <section className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Data Security</h2>
            <p className="text-gray-600 mb-4">
              We implement appropriate security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.
            </p>
          </section>

          <section className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Your Rights</h2>
            <p className="text-gray-600 mb-4">
              You have the right to:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-600 ml-4">
              <li>Access your personal information</li>
              <li>Correct inaccurate information</li>
              <li>Request deletion of your information</li>
              <li>Opt out of marketing communications</li>
            </ul>
          </section>

          <section className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Contact Us</h2>
            <p className="text-gray-600 mb-4">
              If you have questions about this Privacy Policy, please contact us:
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