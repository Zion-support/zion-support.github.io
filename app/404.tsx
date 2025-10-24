import Link from 'next/link';
import { Search, Send, ArrowLeft, RefreshCw, Home, AlertTriangle } from 'lucide-react';

const NotFound = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center p-4">
      <div className="max-w-2xl w-full text-center">
        {/* 404 Animation */}
        <div className="relative mb-8">
          <div className="text-9xl font-bold text-transparent bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text animate-pulse">
            404
          </div>
          <div className="absolute -top-4 -right-4 w-8 h-8 bg-red-500/20 rounded-full animate-bounce">
            <AlertTriangle className="w-6 h-6 text-red-400" />
          </div>
        </div>

        {/* Error Message */}
        <h1 className="text-4xl font-bold text-white mb-6">Page Not Found</h1>
        <p className="text-xl text-gray-300 mb-8 leading-relaxed">
          Oops! The page you're looking for seems to have vanished into the digital void. Don't worry, even our AI can't predict everything!
        </p>

        {/* Search Suggestion */}
        <div className="mb-8">
          <div className="flex items-center justify-center mb-4">
            <Search className="w-6 h-6 text-cyan-400 mr-2" />
            <span className="text-gray-300">Try searching for what you need:</span>
          </div>
          <div className="relative max-w-md mx-auto">
            <input
              type="text"
              placeholder="Search our site..."
              className="w-full px-4 py-3 pl-10 bg-slate-800/50 border border-cyan-400/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400/50 focus:border-transparent"
            />
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
          <Link
            href="/"
            className="cyber-button inline-flex items-center justify-center space-x-2"
          >
            <Home className="w-5 h-5" />
            <span>Go Home</span>
          </Link>
          <button
            onClick={() => window.history.back()}
            className="border-2 border-cyan-400 text-cyan-400 px-6 py-3 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 inline-flex items-center justify-center space-x-2"
          >
            <ArrowLeft className="w-5 h-5" />
            <span>Go Back</span>
          </button>
          <button
            onClick={() => window.location.reload()}
            className="border-2 border-purple-400 text-purple-400 px-6 py-3 rounded-lg font-semibold hover:bg-purple-400 hover:text-slate-900 transition-all duration-300 inline-flex items-center justify-center space-x-2"
          >
            <RefreshCw className="w-5 h-5" />
            <span>Refresh</span>
          </button>
        </div>

        {/* Help Section */}
        <div className="cyber-card p-6">
          <h2 className="text-xl font-bold text-white mb-4">Need Help?</h2>
          <p className="text-gray-300 mb-4">
            Our AI support team is here to help you find what you're looking for.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="cyber-button-outline inline-flex items-center justify-center space-x-2"
            >
              <Send className="w-4 h-4" />
              <span>Contact Support</span>
            </Link>
            <Link
              href="/services"
              className="border-2 border-green-400 text-green-400 px-6 py-3 rounded-lg font-semibold hover:bg-green-400 hover:text-slate-900 transition-all duration-300 inline-flex items-center justify-center space-x-2"
            >
              <span>Browse Services</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
