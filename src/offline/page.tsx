'use client';
import React from 'react';
import { WifiOff, RefreshCw, Home, Phone, Mail } from 'lucide-react';

const OfflinePage: React.FC = () => {
  const handleRetry = () => {
    window.location.reload();
  };

  const handleGoHome = () => {
    window.location.href = '/';
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center p-4">
      <div className="max-w-2xl w-full bg-slate-800/90 backdrop-blur-lg rounded-2xl p-8 border border-red-400/20 shadow-2xl text-center">
        {/* Offline Icon */}
        <div className="w-20 h-20 bg-red-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
          <WifiOff className="w-10 h-10 text-red-400" />
        </div>

        {/* Title */}
        <h1 className="text-4xl font-bold text-white mb-4">
          You're Offline
        </h1>

        {/* Description */}
        <p className="text-gray-300 mb-8 leading-relaxed">
          It looks like you're not connected to the internet. Please check your connection and try again.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
          <button
            onClick={handleRetry}
            className="flex items-center justify-center px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-purple-600 transition-all duration-300"
          >
            <RefreshCw className="w-5 h-5 mr-2" />
            Try Again
          </button>

          <button
            onClick={handleGoHome}
            className="flex items-center justify-center px-6 py-3 bg-slate-700 text-white font-semibold rounded-lg hover:bg-slate-600 transition-colors duration-300"
          >
            <Home className="w-5 h-5 mr-2" />
            Go Home
          </button>
        </div>

        {/* Contact Information */}
        <div className="bg-slate-700/50 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-white mb-4">
            Need Help?
          </h3>
          <p className="text-gray-300 mb-4">
            If you continue to experience issues, please contact our support team:
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+13024640950"
              className="flex items-center justify-center text-cyan-400 hover:text-cyan-300 transition-colors"
            >
              <Phone className="w-4 h-4 mr-2" />
              +1 302 464 0950
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

        {/* Offline Features */}
        <div className="mt-8 text-sm text-gray-400">
          <p className="mb-2">While offline, you can still:</p>
          <ul className="space-y-1">
            <li>• View cached pages</li>
            <li>• Access previously loaded content</li>
            <li>• Use basic navigation</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default OfflinePage;