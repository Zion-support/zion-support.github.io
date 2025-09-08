import React from 'react';
import Head from 'next/head';
import Link from 'next/link';

export default function EventsPage() {
  return (
    <>
      <Head>
        <title>Events | Zion Tech Group</title>
        <meta name="description" content="Explore upcoming events, conferences, and community meetups hosted by Zion Tech Group." />
      </Head>
      <div className="min-h-screen pt-24 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Upcoming Events</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Join us at our latest events to learn about AI, quantum computing, micro SAAS innovations, and more.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            <div className="p-6 rounded-lg bg-white border border-gray-200 shadow-sm">
              <h2 className="text-xl font-semibold mb-3">No events announced yet</h2>
              <p className="text-gray-600 mb-4">
                We are curating our 2025 event calendar. Check back soon or follow our social channels for updates.
              </p>
            </div>
          </div>

          <div className="text-center">
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
