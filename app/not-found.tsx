import React from 'react';
import Link from 'next/link';

export default function NotFound() {
  const popularPages = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' },
    { name: 'Enterprise', href: '/enterprise' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 flex items-center justify-center px-4">
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
          <p className="text-xl text-gray-600 mb-2">
            The page you are looking for does not exist or has been moved.
            Do not worry, let us get you back on track!
          </p>
        </div>

        <div className="mb-8">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">
            Popular Pages
          </h3>
          <div className="flex flex-wrap gap-4 justify-center">
            {popularPages.map((page) => (
              <Link
                key={page.name}
                href={page.href}
                className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              >
                {page.name}
              </Link>
            ))}
          </div>
        </div>

        <div className="mt-12 bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8">
          <h3 className="text-xl font-bold text-white mb-4">
            Cannot find what you are looking for?
          </h3>
          <p className="text-gray-700 mb-6">
            Our team is here to help. Contact us and we will assist you in finding what you need.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="px-6 py-3 bg-white text-blue-600 rounded-lg hover:bg-gray-100 transition-colors font-semibold"
            >
              Contact Support
            </Link>
            <Link
              href="/"
              className="px-6 py-3 border-2 border-white text-white rounded-lg hover:bg-white/10 transition-colors font-semibold"
            >
              Go to Homepage
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}