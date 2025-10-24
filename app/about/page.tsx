import React from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Us - Zion Tech Group | AI & IT Solutions',
  description: 'Learn about Zion Tech Group mission, values, and team. We are dedicated to delivering cutting-edge AI and IT solutions that transform businesses.',
  keywords: ['about us', 'AI solutions', 'IT services', 'technology company', 'digital transformation'],
  openGraph: {
    title: 'About Us - Zion Tech Group',
    description: 'Learn about Zion Tech Group mission, values, and team.',
    type: 'website',
    url: 'https://ziontechgroup.com/about',
  },
};

const Page = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center">
          <h1 className="text-5xl font-bold text-white mb-6">
            About Zion Tech Group
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            We are a leading technology company specializing in AI solutions and IT services.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Page;
