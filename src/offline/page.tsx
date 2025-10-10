'use client';
import React from 'react';
import { WifiOff, RefreshCw, Home, Wifi } from 'lucide-react';
import { Link } from 'react-router-dom';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
'use client';
/**
 * Offline Page;
 * Displayed when the user is offline and tries to access a page;
 */
const,
<<<<<<< HEAD
  OfflinePage: React.FC = () => {const handleRetry = () => {}
    window.location.reload();
  }
  const handleGoHome = () => {/* TODO: Fix JSX expression */}
  O: Add content,}
}
=======
  OfflinePage: React.FC = () => {const handleRetry = () => {};
    window.location.reload()};
  const handleGoHome = () => {/* TODO: Fix JSX expression */};
  O: Add content};
};
>>>>>>> cursor/fix-errors-and-merge-to-main-6ce7
    window.location.href = '/';
  return (<div>Coming Soon</div>)
  )
          <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center p-4"></div>"
      <div className="max-w-md w-full bg-white/10 backdrop-blur-lg rounded-2xl p-8 text-center border border-white/20"></div>"
        <div className="w-16 h-16 mx-auto mb-6 bg-orange-500/20 rounded-full flex items-center justify-center"></div>"
          <WifiOff className="w-8 h-8 text-orange-400" /></WifiOff>
        </div>"
        <h1 className="text-2xl font-bold text-white mb-4"></h1>
// You're Offline;
          </h1>"
        <p className="text-gray-300 mb-6"></p>
          It looks like you're not connected to the internet. Please check your connection and try again.
        </p>"
        <div className="space-y-3"></div>
          <button></button>
            onClick={handleRetry}"
            className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-cyan-500,"
  hover: bg-cyan-600 text-white rounded-lg transition-colors duration-200 font-medium"
// >
          "
          <RefreshCw className="w-4 h-4" /></RefreshCw>
// Try Again,
          </button>
onClick={handleGoHome}"
            className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-white/10,"
  hover: bg-white/20 text-white rounded-lg transition-colors duration-200 font-medium border border-white/20""
            <Home className="w-4 h-4" /></Home>
            Go Home;"
        <div className="mt-6 text-sm text-gray-400"></div>"
          <p className="flex items-center justify-center gap-2"></p>"
            <Wifi className="w-4 h-4" /></Wifi>
            Check your internet connection;"
        <div className="mt-8 p-4 bg-black/20 rounded-lg"></div>"
          <h3 className="text-sm font-medium text-white mb-2">Available Offline</h3>"
          <p className="text-xs text-gray-400"></p>
            Some content may be available offline thanks to our service worker.
            Try refreshing the page once you're back online.
<<<<<<< HEAD
  ),
}
=======
  )};
>>>>>>> cursor/fix-errors-and-merge-to-main-6ce7
export default OfflinePage;
