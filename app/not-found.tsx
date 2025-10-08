import React from 'react';
import Link from 'next/link';

const popularPages = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Contact', path: '/contact' },
  { name: 'Enterprise', path: '/enterprise' },
];

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 flex items-center justify-center p-4">
      <div className="max-w-2xl w-full text-center">
        <div className="mb-8">
          <h1 className="text-9xl font-bold text-gray-300 mb-4">
            404
          </h1>
          <div className="text-6xl mb-4">🔍</div>
        </div>
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Page Not Found
          </h2>
          <p className="text-lg text-gray-600 mb-2">
            The page you are looking for does not exist or has been moved.
            Do not worry, let us get you back on track!
          </p>
        </div>

        <div className="mb-8">
          <h3 className="text-xl font-semibold text-gray-900 mb-4">
            Popular Pages
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            {popularPages.map((page, index) => (
              <Link
                key={index}
                href={page.path}
                className="bg-white hover:bg-gray-50 text-blue-600 font-semibold py-2 px-6 rounded-lg shadow-md transition-all"
              >
                {page.name}
              </Link>
            ))}
          </div>
        </div>

        <div className="mt-12 bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8">
          <h3 className="text-xl font-bold text-gray-900 mb-4">
            Cannot find what you are looking for?
          </h3>
          <p className="text-gray-600 mb-6">
            Our team is here to help. Reach out to us for assistance.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/contact"
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg transition-colors"
            >
              Contact Support
            </Link>
            <Link
              href="/"
              className="bg-white hover:bg-gray-50 text-blue-600 font-semibold py-3 px-8 rounded-lg border-2 border-blue-600 transition-colors"
            >
              Go Home
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}