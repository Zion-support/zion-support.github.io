import React from 'react';

export const metadata = {
  title: 'Zion Tech Group - AI & IT Solutions',
  description: 'Leading provider of AI and IT solutions. Transform your business with our cutting-edge technology and expert services.',
  keywords: 'AI solutions, IT services, cybersecurity, cloud infrastructure, business transformation',
};

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-white mb-6">
          Zion Tech Group
        </h1>
        <p className="text-xl text-gray-300 mb-8">
          AI & IT Solutions
        </p>
        <div className="flex gap-4 justify-center">
          <a href="/contact" className="px-8 py-4 bg-gradient-to-r from-purple-500 to-blue-500 text-white rounded-lg font-semibold text-lg hover:from-purple-600 hover:to-blue-600 transition-all duration-300">
            Get Started
          </a>
          <a href="/about" className="px-8 py-4 border border-purple-500 text-purple-400 rounded-lg font-semibold text-lg hover:bg-purple-500/10 transition-all duration-300">
            Learn More
          </a>
        </div>
      </div>
    </div>
  );
}