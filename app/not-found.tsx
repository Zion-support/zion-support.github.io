import React from 'react';
import Link from 'next/link';

export default function NotFound() {
  const popularPages = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 flex items-center justify-center px-4">
      <div className="max-w-2xl w-full text-center">
        <div className="mb-8">
          <h1 className="text-9xl font-bold text-gray-300 mb-4">
            404
          </h1>
          <div className="text-6xl mb-4">🔍</div>
        </div>
        
        <div className="mb-8">
          <p className="text-2xl text-gray-200 mb-4">
            The page you are looking for does not exist or has been moved.
          </p>
          <p className="text-lg text-gray-300">
            Do not worry, let us get you back on track!
          </p>
        </div>

        <div className="grid grid-cols-2 gap-4 mb-8">
          {popularPages.map((page) => (
            <Link
              key={page.path}
              href={page.path}
              className="bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20 rounded-xl p-4 transition-all"
            >
              {page.name}
            </Link>
          ))}
        </div>

        <Link
          href="/"
          className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-full transition-all"
        >
          Go Home
        </Link>
      </div>
    </div>
  );
}
