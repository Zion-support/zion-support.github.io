import React from 'react';
import { motion } from 'framer-motion';
import { WifiOff, RefreshCw, Home, Signal } from 'lucide-react';
import SEOHead from '../components/SEOHead';

const OfflinePage: React.FC = () => {
  const handleRetry = () => {
    window.location.reload();
  };

  const handleGoHome = () => {
    window.location.href = '/';
  };

          {/* Main Content */}
          <div className="space-y-4">
            <h1 className="text-3xl font-bold text-white">
              You're Offline
            </h1>
            <p className="text-gray-300 leading-relaxed">
              It looks like you've lost your internet connection. Don't worry - some of our content is available offline.
            </p>
          </div>

          {/* Action Buttons */}
          <div className="space-y-4">
            <button
              onClick={handleRefresh}
              className="w-full px-6 py-3 bg-gradient-to-r from-cyan-400 to-blue-500 text-white font-semibold rounded-xl hover:from-cyan-500 hover:to-blue-600 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-cyan-400/50 flex items-center justify-center space-x-2"
            >
              <RefreshCw className="w-5 h-5" />
              <span>Try Again</span>
            </button>

            <div className="grid grid-cols-2 gap-4">
              <Link
                href="/"
                className="px-4 py-3 border-2 border-gray-600 text-gray-300 font-medium rounded-xl hover:border-cyan-400 hover:text-cyan-400 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-cyan-400/50 flex items-center justify-center space-x-2"
              >
                <Home className="w-4 h-4" />
                <span>Home</span>
              </Link>

              <Link
                href="/contact"
                className="px-4 py-3 border-2 border-gray-600 text-gray-300 font-medium rounded-xl hover:border-cyan-400 hover:text-cyan-400 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-cyan-400/50 flex items-center justify-center space-x-2"
              >
                <Phone className="w-4 h-4" />
                <span>Contact</span>
              </Link>
            </div>
          </div>

          {/* Contact Information */}
          <div className="pt-6 border-t border-gray-700">
            <p className="text-sm text-gray-400 mb-3">
              Need immediate assistance?
            </p>
            <div className="space-y-2 text-sm">
              <div className="text-cyan-400">
                <strong>Phone:</strong> +1 302 464 0950
              </div>
              <div className="text-blue-400">
                <strong>Email:</strong> kleber@ziontechgroup.com
              </div>
            </div>
          </div>

          {/* Offline Features Info */}
          <div className="bg-gray-800/50 rounded-xl p-4 border border-gray-700/50">
            <h3 className="text-sm font-semibold text-white mb-2">
              Available Offline
            </h3>
            <ul className="text-xs text-gray-400 space-y-1 text-left">
              <li>• Basic service information</li>
              <li>• Contact details</li>
              <li>• Company overview</li>
              <li>• Cached pages</li>
            </ul>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default OfflinePage;
