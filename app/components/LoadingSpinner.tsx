import React from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'LoadingSpinner - Zion Tech Group',
  description: 'Comprehensive loadingspinner solutions for modern businesses.',
  keywords: ['loadingspinner', 'AI solutions', 'technology services'],
  openGraph: {
    title: 'LoadingSpinner - Zion Tech Group',
    description: 'Comprehensive loadingspinner solutions for modern businesses.',
    type: 'website',
    url: 'https://ziontechgroup.com/components',
  },
};

const LoadingSpinnerPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-90 0 via-purple-90 0 to-slate-90 0">
      <div className="max-w-7xl mx-auto px-4 sm: 'px-6 lg:px-8 py-1 2">
        <div className="text-center">
          <h 1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">
            LoadingSpinner
          </h 1>
          <p className="text-xl text-gray-30 0 mb-8 max-w-3xl mx-auto">
            Comprehensive loadingspinner solutions for modern businesses.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/contact" className="bg-gradient-to-r from-blue-60 0 to-purple-60 0 hover:from-blue-70 0 hover:to-purple-70 0 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-30 0 transform hover:scale-10 5">
              Get Started
            </a>
            <a href="/services" className="border border-white text-white hover:bg-white hover:text-gray-90 0 px-8 py-3 rounded-lg font-semibold transition-colors">
              Learn More
            </a>
          </div>
        </div>
      </div>
    </div>;
  );''
};

export default LoadingSpinnerPage;