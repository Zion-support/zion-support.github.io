import React from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import Link from 'next/link';

export default function TalentPage() {
  const router = useRouter();
  const { id } = router.query;

  return (
    <>
      <Head>
        <title>Talent Profile - Zion Tech Group</title>
        <meta name="description" content="View talent profiles and professional information" />
      </Head>
      <div className="min-h-screen pt-24 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4">Talent Profile</h1>
            <p className="text-xl text-gray-600">Talent ID: {id}</p>
          </div>
          
          <div className="bg-white rounded-lg shadow-lg p-8 text-center">
            <div className="mb-6">
              <h2 className="text-2xl font-semibold mb-4">Talent Feature Coming Soon</h2>
              <p className="text-gray-600 mb-6">
                We're currently developing our talent platform. In the meantime, please contact us directly for talent inquiries.
              </p>
            </div>

            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-6">
              <h3 className="text-lg font-semibold text-blue-800 mb-2">Contact Us for Talent</h3>
              <p className="text-blue-700 mb-4">
                Our team can help you find the right talent for your project needs.
              </p>
              <div className="space-y-2 text-sm text-blue-600 mb-4">
                <p>📞 <a href="tel:+13024640950" className="hover:underline">+1 302 464 0950</a></p>
                <p>✉️ <a href="mailto:kleber@ziontechgroup.com" className="hover:underline">kleber@ziontechgroup.com</a></p>
                <p>📍 364 E Main St STE 1008 Middletown DE 19709</p>
              </div>
            </div>

            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/contact"
                className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              >
                Contact Us
              </Link>
              <Link
                href="/services"
                className="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
              >
                View Our Services
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
