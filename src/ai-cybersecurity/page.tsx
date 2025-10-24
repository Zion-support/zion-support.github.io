'use client';

import React from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Ai Cybersecurity - Zion Tech Group',
  description: 'Professional Ai Cybersecurity solutions for modern businesses.',
  keywords: 'AI solutions, IT services, technology services',
  openGraph: {
    title: 'Ai Cybersecurity - Zion Tech Group',
    description: 'Professional Ai Cybersecurity solutions for modern businesses.',
    type: 'website',
    url: 'https://ziontechgroup.com/',
  },
};

const Page: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">
            Ai Cybersecurity
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Professional Ai Cybersecurity solutions for modern businesses.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/contact" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105">
              Get Started
            </a>
            <a href="/services" className="border border-white text-white hover:bg-white hover:text-gray-900 px-8 py-3 rounded-lg font-semibold transition-colors">
              Learn More
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
