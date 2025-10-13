import React from 'react';
import { Link } from 'react-router-dom';
import { Home, ArrowLeft, Search, AlertTriangle } from 'lucide-react';
import EnhancedSEO from '../components/EnhancedSEO';
// import { AlertTriangle } from 'lucide-react'; // Unused import
// import { Mic } from 'lucide-react'; // Unused import

const NotFoundPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center px-4">
      <EnhancedSEO
        title="404 - Page Not Found | Zion Tech Group"
        description="The page you're looking for doesn't exist. Return to our homepage to explore our AI and IT solutions."
        canonical="https://ziontechgroup.com/404"
      />
      
      <div className="text-center max-w-2xl mx-auto">
        {/* 404 Animation */}
        <div className="mb-8">
          <div className="relative">
            <div className="text-9xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400 animate-pulse">
              404
            </div>
            <div className="absolute -top-4 -right-4">
              <AlertTriangle className="w-16 h-16 text-yellow-400 animate-bounce" />
            </div>
          </div>
        </div>

        {/* Error Message */}
        <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
          Oops! Page Not Found
        </h1>
        <p className="text-xl text-gray-300 mb-8 leading-relaxed">
          The page you're looking for seems to have vanished into the digital void. 
          Don't worry, our AI solutions can help you find what you need!
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <Link
            to="/"
            className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 group shadow-lg hover:shadow-cyan-500/25 hover:scale-105"
          >
            <Home className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
            Go Home
          </Link>
          <button
            onClick={() => window.history.back()}
            className="inline-flex items-center px-6 py-3 border border-cyan-400 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 group hover:scale-105"
          >
            <ArrowLeft className="w-5 h-5 mr-2 group-hover:-translate-x-1 transition-transform" />
            Go Back
          </button>
        </div>

        {/* Popular Links */}
        <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
          <h2 className="text-xl font-semibold text-white mb-4">
            Popular Pages
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Link
              to="/ai-services"
              className="flex items-center p-3 rounded-lg bg-white/5 hover:bg-white/10 transition-colors group"
            >
              <Search className="w-5 h-5 text-cyan-400 mr-3 group-hover:scale-110 transition-transform" />
              <span className="text-gray-300 group-hover:text-white transition-colors">AI Services</span>
            </Link>
            <Link
              to="/micro-saas"
              className="flex items-center p-3 rounded-lg bg-white/5 hover:bg-white/10 transition-colors group"
            >
              <Search className="w-5 h-5 text-cyan-400 mr-3 group-hover:scale-110 transition-transform" />
              <span className="text-gray-300 group-hover:text-white transition-colors">Micro SAAS</span>
            </Link>
            <Link
              to="/5g-solutions"
              className="flex items-center p-3 rounded-lg bg-white/5 hover:bg-white/10 transition-colors group"
            >
              <Search className="w-5 h-5 text-cyan-400 mr-3 group-hover:scale-110 transition-transform" />
              <span className="text-gray-300 group-hover:text-white transition-colors">5G Solutions</span>
            </Link>
            <Link
              to="/contact"
              className="flex items-center p-3 rounded-lg bg-white/5 hover:bg-white/10 transition-colors group"
            >
              <Search className="w-5 h-5 text-cyan-400 mr-3 group-hover:scale-110 transition-transform" />
              <span className="text-gray-300 group-hover:text-white transition-colors">Contact Us</span>
            </Link>
          </div>
        </div>

        {/* Help Text */}
        <div className="mt-8 text-gray-400 text-sm">
          <p>
            Still can't find what you're looking for? 
            <Link to="/contact" className="text-cyan-400 hover:text-cyan-300 transition-colors ml-1">
              Contact our support team
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default NotFoundPage;