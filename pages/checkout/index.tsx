import React from 'react';
import Head from 'next/head';
import Link from 'next/link';

export default function CheckoutIndexPage() {
  return (
    <>
      <Head>
        <title>Checkout - Zion Tech Group</title>
        <meta name="description" content="Complete your purchase with Zion Tech Group" />
      </Head>
      <div className="min-h-screen pt-24 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold mb-4">Checkout</h1>
            <p className="text-gray-600">Select a service to proceed with checkout.</p>
          </div>
          
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 text-center">
            <h3 className="text-lg font-semibold text-blue-800 mb-2">Contact Us to Get Started</h3>
            <p className="text-blue-700 mb-4">
              Please contact us directly to discuss your needs and complete your purchase.
            </p>
            <div className="space-y-2 text-sm text-blue-600 mb-4">
              <p>📞 <a href="tel:+13024640950" className="hover:underline">+1 302 464 0950</a></p>
              <p>✉️ <a href="mailto:kleber@ziontechgroup.com" className="hover:underline">kleber@ziontechgroup.com</a></p>
              <p>📍 364 E Main St STE 1008 Middletown DE 19709</p>
            </div>
            <Link
              href="/contact"
              className="inline-block px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
