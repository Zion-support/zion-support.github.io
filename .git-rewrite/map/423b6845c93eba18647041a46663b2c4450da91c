import React from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import Link from 'next/link';

export default function OrderDetailPage() {
  const router = useRouter();
  const { orderId } = router.query;

  return (
    <>
      <Head>
        <title>Order Details - Zion Tech Group</title>
        <meta name="description" content="View your order details and status" />
      </Head>
      <div className="min-h-screen pt-24 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold mb-4">Order Details</h1>
            <p className="text-gray-600">Order ID: {orderId}</p>
          </div>
          
          <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
            <h2 className="text-xl font-semibold mb-4">Order Information</h2>
            <div className="space-y-3 text-gray-600">
              <p>Order ID: {orderId}</p>
              <p>Status: Processing</p>
              <p>Date: {new Date().toLocaleDateString()}</p>
            </div>
          </div>

          <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 text-center">
            <h3 className="text-lg font-semibold text-blue-800 mb-2">Need Help?</h3>
            <p className="text-blue-700 mb-4">
              For questions about your order or to make changes, please contact us directly.
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
