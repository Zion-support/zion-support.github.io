import React from 'react';
import { Link } from 'react-router-dom';
import { Home, ArrowLeft, Search, Mail } from 'lucide-react';
import SEOOptimizer from '../components/SEOOptimizer';

const NotFoundPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center">
      <SEOOptimizer
        title="404 - Page Not Found | Zion Tech Group"
        description="The page you're looking for doesn't exist. Return to our homepage or contact us for assistance."
        keywords="404, page not found, error, Zion Tech Group"
        noIndex={true}
      />
      
      <div className="text-center max-w-2xl mx-auto px-4">
        {/* 404 Animation */}
        <div className="mb-8">
          <div className="text-9xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400 mb-4">
            404
          </div>
          <div className="w-32 h-1 bg-gradient-to-r from-cyan-400 to-purple-400 mx-auto rounded-full"></div>
        </div>

        {/* Error Message */}
        <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
          Oops! Page Not Found
        </h1>
        <p className="text-xl text-gray-300 mb-8 leading-relaxed">
          The page you're looking for doesn't exist or has been moved. 
          Don't worry, let's get you back on track!
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <Link
            to="/"
            className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center group shadow-lg hover:shadow-cyan-500/25 hover:scale-105"
          >
            <Home className="w-5 h-5 mr-2" />
            Go Home
            <ArrowLeft className="w-5 h-5 ml-2 group-hover:-translate-x-1 transition-transform" />
          </Link>
          <Link
            to="/services"
            className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 group hover:scale-105"
          >
            <Search className="w-5 h-5 mr-2" />
            Browse Services
          </Link>
        </div>

        {/* Help Section */}
        <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
          <h2 className="text-xl font-semibold text-white mb-4">
            Need Help Finding Something?
          </h2>
          <p className="text-gray-300 mb-4">
            Our team is here to help you find what you're looking for.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-600 text-white font-semibold rounded-lg hover:from-purple-600 hover:to-pink-700 transition-all duration-300 group"
            >
              <Mail className="w-5 h-5 mr-2" />
              Contact Support
            </Link>
            <Link
              to="/sitemap"
              className="inline-flex items-center px-6 py-3 border border-gray-400 text-gray-300 font-semibold rounded-lg hover:bg-gray-400 hover:text-slate-900 transition-all duration-300"
            >
              View Sitemap
            </Link>
          </div>
        </div>

        {/* Popular Links */}
        <div className="mt-8">
          <h3 className="text-lg font-semibold text-white mb-4">
            Popular Pages
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <Link
              to="/about"
              className="text-cyan-400 hover:text-cyan-300 transition-colors duration-300 text-sm"
            >
              About Us
            </Link>
            <Link
              to="/services"
              className="text-cyan-400 hover:text-cyan-300 transition-colors duration-300 text-sm"
            >
              Services
            </Link>
            <Link
              to="/pricing"
              className="text-cyan-400 hover:text-cyan-300 transition-colors duration-300 text-sm"
            >
              Pricing
            </Link>
            <Link
              to="/contact"
              className="text-cyan-400 hover:text-cyan-300 transition-colors duration-300 text-sm"
            >
              Contact
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFoundPage;