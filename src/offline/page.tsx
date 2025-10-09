import React from 'react';
import { WifiOff, RefreshCw, Home, Wifi } from 'lucide-react';
import { Link } from 'react-router-dom';

/**
 * Offline Page
 * Displayed when the user is offline and tries to access a page
 */
const OfflinePage: React.FC = () => {
  const _handleRetry = () => {
    window.location.reload();
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center">
      <div className="text-center max-w-md mx-auto px-4">
        <div className="mb-8">
          <WifiOff className="h-24 w-24 text-gray-400 mx-auto mb-4" />
          <h1 className="text-3xl font-bold text-white mb-4">You're Offline</h1>
          <p className="text-gray-300 mb-8">
            It looks like you're not connected to the internet. Please check your connection and try again.
          </p>
        </div>

        <div className="space-y-4">
          <button
            onClick={_handleRetry}
            className="w-full bg-cyan-500 text-white px-6 py-3 rounded-lg hover:bg-cyan-600 transition-colors flex items-center justify-center"
          >
            <RefreshCw className="h-5 w-5 mr-2" />
            Try Again
          </button>
          
          <Link
            to="/"
            className="w-full bg-transparent text-cyan-400 px-6 py-3 rounded-lg border-2 border-cyan-400 hover:bg-cyan-400 hover:text-white transition-colors flex items-center justify-center"
          >
            <Home className="h-5 w-5 mr-2" />
            Go Home
          </Link>
        </div>

        <div className="mt-8 text-sm text-gray-400">
          <p>If the problem persists, please contact support.</p>
        </div>
      </div>
    </div>
  );
};

export default OfflinePage;