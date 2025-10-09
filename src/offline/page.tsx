'use client';

import { WifiOff, RefreshCw, Home, Wifi } from 'lucide-react';


/**
 * Offline Page;
 * Displayed when the user is offline and tries to access a page;
 */
const OfflinePage: React.FC = () => {

  return (
    <div>
      <div>
        <div>
          <WifiOff className="w-8 h-8 text-orange-400" />
        </div>
        <h1 className="text-2xl font-bold text-white mb-4">You're Offline</h1>
        
        <p className="text-gray-300 mb-6">
          It looks like you're not connected to the internet. Please check your connection and try again.
        </p>

        <div>
          <button
            onClick={handleRetry}
            className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-cyan-500 hover:bg-cyan-600 text-white rounded-lg transition-colors duration-200 font-medium"
          >
            <RefreshCw className="w-4 h-4" />Try Again</button>
          
          <button
            onClick={handleGoHome}
            className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-white/10 hover:bg-white/20 text-white rounded-lg transition-colors duration-200 font-medium border border-white/20"
          >
            <Home className="w-4 h-4" />Go Home</button>
        </div>
        <div>
          <p className="flex items-center justify-center gap-2">
            <Wifi className="w-4 h-4" />Check your internet connection</p>
        </div>
        <div>
          <h3 className="text-sm font-medium text-white mb-2">Available Offline</h3>
          <p className="text-xs text-gray-400">
            Some content may be available offline thanks to our service worker. 
            Try refreshing the page once you're back online.
          </p>
        </div>
      </div>
    </div>);
}
export default OfflinePage