'use client';
import React from 'react';
import Link from 'next/link';
import { WifiOff, RefreshCw, Home, Phone, Mail } from 'lucide-react';

const OfflinePage: React.FC = () => {
  const handleRefresh = () => {
    window.location.reload();
  };

  const handleGoOnline = () => {
    if (navigator.onLine) {
      window.location.href = '/';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center px-4">
      <div className="max-w-md w-full text-center">
        {/* Offline Icon */}
        <div className="mb-8">
          <div className="w-24 h-24 mx-auto bg-red-500/20 rounded-full flex items-center justify-center mb-4">
            <WifiOff className="w-12 h-12 text-red-400" />
          </div>
          <h1 className="text-3xl font-bold text-white mb-2">You're Offline</h1>
          <p className="text-gray-300">
            It looks like you've lost your internet connection. Don't worry, we've got you covered!
          </p>
        </div>

        {/* Offline Features */}
        <div className="bg-gray-800/50 rounded-lg p-6 mb-8">
          <h2 className="text-xl font-semibold text-white mb-4">What you can still do:</h2>
          <ul className="space-y-3 text-left">
            <li className="flex items-center text-gray-300">
              <div className="w-2 h-2 bg-green-400 rounded-full mr-3"></div>
              View previously visited pages
            </li>
            <li className="flex items-center text-gray-300">
              <div className="w-2 h-2 bg-green-400 rounded-full mr-3"></div>
              Access cached content
            </li>
            <li className="flex items-center text-gray-300">
              <div className="w-2 h-2 bg-green-400 rounded-full mr-3"></div>
              Contact us via phone
            </li>
            <li className="flex items-center text-gray-300">
              <div className="w-2 h-2 bg-green-400 rounded-full mr-3"></div>
              Browse our service catalog
            </li>
          </ul>
        </div>

        {/* Action Buttons */}
        <div className="space-y-4">
          <button
            onClick={handleRefresh}
            className="w-full bg-cyan-600 hover:bg-cyan-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200 flex items-center justify-center"
          >
            <RefreshCw className="w-5 h-5 mr-2" />
            Try Again
          </button>

          <button
            onClick={handleGoOnline}
            className="w-full bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200 flex items-center justify-center"
          >
            <Home className="w-5 h-5 mr-2" />
            Go to Homepage
          </button>

          {/* Contact Information */}
          <div className="bg-gray-800/30 rounded-lg p-4 mt-6">
            <h3 className="text-lg font-semibold text-white mb-3">Need Help?</h3>
            <div className="space-y-2">
              <a
                href="tel:+13024640950"
                className="flex items-center justify-center text-cyan-400 hover:text-cyan-300 transition-colors"
              >
                <Phone className="w-4 h-4 mr-2" />
                (302) 464-0950
              </a>
              <a
                href="mailto:kleber@ziontechgroup.com"
                className="flex items-center justify-center text-cyan-400 hover:text-cyan-300 transition-colors"
              >
                <Mail className="w-4 h-4 mr-2" />
                kleber@ziontechgroup.com
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="mt-6">
            <h3 className="text-lg font-semibold text-white mb-3">Quick Links</h3>
            <div className="grid grid-cols-2 gap-2">
              <Link
                href="/ai-services"
                className="bg-gray-800/50 hover:bg-gray-700/50 text-white py-2 px-4 rounded-lg transition-colors duration-200 text-sm"
              >
                AI Services
              </Link>
              <Link
                href="/it-services"
                className="bg-gray-800/50 hover:bg-gray-700/50 text-white py-2 px-4 rounded-lg transition-colors duration-200 text-sm"
              >
                IT Services
              </Link>
              <Link
                href="/about"
                className="bg-gray-800/50 hover:bg-gray-700/50 text-white py-2 px-4 rounded-lg transition-colors duration-200 text-sm"
              >
                About Us
              </Link>
              <Link
                href="/contact"
                className="bg-gray-800/50 hover:bg-gray-700/50 text-white py-2 px-4 rounded-lg transition-colors duration-200 text-sm"
              >
                Contact
              </Link>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-8 text-gray-400 text-sm">
          <p>Zion Tech Group - Advanced AI and IT Solutions</p>
          <p>This page works offline thanks to our service worker</p>
        </div>
      </div>
    </div>
  );
};

export default OfflinePage;