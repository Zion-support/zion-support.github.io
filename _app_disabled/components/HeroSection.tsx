import React from 'react';
import Link from 'next/link';

export default function HeroSection() {
  return (
    <div className="text-center mb-16">
      <h1 className="text-6xl font-bold text-white mb-6">Welcome to Zion Tech Group</h1>
      <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
        Leading the future of AI, autonomous systems, and innovative technology solutions. We empower businesses with
        cutting-edge technology to drive growth and transformation.
      </p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <Link
          href="/solutions"
          className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg transition duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
        >
          Explore Solutions
        </Link>
        <Link
          href="/services"
          className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-gray-900 font-semibold py-3 px-8 rounded-lg transition duration-300 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2"
        >
          Our Services
        </Link>
      </div>
    </div>
  );
}
