import React from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Footer - Zion Tech Group',
  description: 'Comprehensive footer solutions for modern businesses.',
  keywords: 'footer, AI solutions, technology services',
  openGraph: {
    title: 'Footer - Zion Tech Group',
    description: 'Comprehensive footer solutions for modern businesses.',
    type: 'website',
    url: 'https://ziontechgroup.com/components',
  },
};

const FooterPage = () => {
  return (
<<<<<<< HEAD
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto py-12 px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">Zion Tech Group</h3>
            <p className="text-gray-400">Advanced AI and IT solutions for modern businesses.</p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Company</h4>
            <ul className="space-y-2">
              <li><Link href="/about" className="text-gray-400 hover:text-white">About</Link></li>
              <li><Link href="/services" className="text-gray-400 hover:text-white">Services</Link></li>
              <li><Link href="/pricing" className="text-gray-400 hover:text-white">Pricing</Link></li>
              <li><Link href="/contact" className="text-gray-400 hover:text-white">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Solutions</h4>
            <ul className="space-y-2">
              <li><Link href="/ai-services" className="text-gray-400 hover:text-white">AI Services</Link></li>
              <li><Link href="/it-services" className="text-gray-400 hover:text-white">IT Services</Link></li>
              <li><Link href="/5g-solutions" className="text-gray-400 hover:text-white">5G Solutions</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <p className="text-gray-400 mb-2">Email: info@ziontech.com</p>
            <p className="text-gray-400">Phone: +1 (555) 123-4567</p>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400">&copy; 2024 Zion Tech Group. All rights reserved.</p>
=======
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">
            Footer
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Comprehensive footer solutions for modern businesses.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/contact" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105">
              Get Started
            </a>
            <a href="/services" className="border border-white text-white hover:bg-white hover:text-gray-900 px-8 py-3 rounded-lg font-semibold transition-colors">
              Learn More
            </a>
          </div>
>>>>>>> origin/main
        </div>
      </div>
    </div>
  );
};

export default FooterPage;
