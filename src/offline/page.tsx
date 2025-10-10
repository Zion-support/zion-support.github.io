import React from 'react';
import { WifiOff, RefreshCw, Home, Phone, Mail } from 'lucide-react';

const OfflinePage: React.FC = () => {
  const handleRefresh = () => {
    window.location.reload();
  };

  const handleGoHome = () => {
    window.location.href = '/';
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center">
      <div className="text-center max-w-md mx-auto p-8">
        <div className="w-24 h-24 bg-red-500 rounded-full flex items-center justify-center mx-auto mb-6">
          <WifiOff className="w-12 h-12 text-white" />
        </div>
        
        <h1 className="text-4xl font-bold text-white mb-4">
          You're Offline
        </h1>
        
        <p className="text-gray-300 mb-8 leading-relaxed">
          It looks like you've lost your internet connection. Don't worry, 
          some features of our website are still available offline.
        </p>
        
        <div className="space-y-4">
          <button
            onClick={handleRefresh}
            className="w-full bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-bold py-3 px-6 rounded-lg hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center"
          >
            <RefreshCw className="w-5 h-5 mr-2" />
            Try Again
          </button>
          
          <button
            onClick={handleGoHome}
            className="w-full bg-slate-800 text-white font-semibold py-3 px-6 rounded-lg hover:bg-slate-700 transition-colors flex items-center justify-center"
          >
            <Home className="w-5 h-5 mr-2" />
            Go to Homepage
          </button>
        </div>
        
        <div className="mt-8 pt-6 border-t border-gray-700">
          <h3 className="text-lg font-semibold text-white mb-4">
            Need Help?
          </h3>
          
          <div className="space-y-3">
            <div className="flex items-center justify-center space-x-3 text-gray-300">
              <Phone className="w-4 h-4 text-cyan-400" />
              <a href="tel:+13024640950" className="hover:text-cyan-400 transition-colors">
                +1 302 464 0950
              </a>
            </div>
            
            <div className="flex items-center justify-center space-x-3 text-gray-300">
              <Mail className="w-4 h-4 text-cyan-400" />
              <a href="mailto:kleber@ziontechgroup.com" className="hover:text-cyan-400 transition-colors">
                kleber@ziontechgroup.com
              </a>
            </div>
          </div>
        </div>
        
        <div className="mt-6 text-sm text-gray-400">
          <p>
            This page is cached for offline viewing. 
            Some features may not be available without an internet connection.
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default OfflinePage;