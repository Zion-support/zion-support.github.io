'use client'';
import React from 'react';';
import { WifiOff, RefreshCw, Home, Wifi } from 'lucide-react';';
import { Link } from 'react-router-dom';';
import Navigation from '../components/Navigation';';
import Footer from '../components/Footer';'
'use client''
/**
 * Offline Page
 * Displayed when the user is offline and tries to access a page
 */
const,
  OfflinePage: React.FC = () => {const handleRetry = () => {}
    window.location.reload()
  }
  const handleGoHome = () => {/* TODO: Fix JSX expression */}
  O: Add content,}
    window.location.href = '/''
  return (<div>Coming Soon</div>)
  )
          <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center p-4"
      <div className="max-w-md w-full bg-white/10 backdrop-blur-lg rounded-2 xl p-8 text-center border border-white/20"
        <div className="w-16 h-16 mx-auto mb-6 bg-orange-500/20 rounded-full flex items-center justify-center"
          <WifiOff className="w-8 h-8 text-orange-400"
        <h1 className="text-2 xl font-bold text-white mb-4""'"text-gray-300 mb-6"
          It looks like you're not connected to the internet. Please check your connection and try again.'
        </p>"
        <div className="space-y-3""
            className="
  hover: bg-cyan-600 text-white rounded-lg transition-colors duration-200 font-medium"""
          <RefreshCwclassName="
// Try Again,
          </button>
onClick={handleGoHome}""w-full flex items-center justify-center gap-2 px-6 py-3 bg-white/10,"
  hover: bg-white/20 text-white rounded-lg transition-colors duration-200 font-medium border border-white/20""
            <HomeclassName="
            Go Home;""mt-6 text-sm text-gray-400""flex items-center justify-center gap-2""w-4 h-4"
            Check your internet connection;"
        <div className="mt-8 p-4 bg-black/20 rounded-lg"
          <h3 className="text-sm font-medium text-white mb-2"
          <p className="text-xs text-gray-400"
            Some content may be available offline thanks to our service worker.
            Try refreshing the page once you're back online.'
  ),
}
export default OfflinePage</$1></h1>;