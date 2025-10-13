import React from 'react';
import { Link } from 'react-router-dom';
import { Home, ArrowLeft, Search } from 'lucide-react';

const NotFoundPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center px-4">
      <div className="max-w-2xl mx-auto text-center">
        {/* 404 Animation */}
        <div className="mb-8">
          <div className="text-9xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent mb-4">
            404
          </div>
          <div className="w-32 h-1 bg-gradient-to-r from-cyan-400 to-purple-400 mx-auto rounded-full"></div>
        </div>

        {/* Error Message */}
        <h1 className="text-4xl font-bold text-white mb-6">
          Page Not Found
        </h1>
        <p className="text-xl text-gray-300 mb-8 leading-relaxed">
          The page you're looking for doesn't exist or has been moved. 
          Don't worry, let's get you back on track!
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link
            to="/"
            className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 px-8 py-4 rounded-lg transition-all duration-300 flex items-center space-x-2 font-semibold shadow-lg hover:shadow-cyan-500/25 group"
          >
            <Home className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
            <span>Go Home</span>
          </Link>
          
          <button
            onClick={() => window.history.back()}
            className="bg-slate-800 hover:bg-slate-700 px-8 py-4 rounded-lg transition-all duration-300 flex items-center space-x-2 font-semibold border border-gray-600 hover:border-gray-500 group"
          >
            <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform duration-300" />
            <span>Go Back</span>
          </button>
        </div>

        {/* Search Suggestion */}
        <div className="mt-12 p-6 bg-slate-800/50 rounded-xl border border-gray-700">
          <div className="flex items-center justify-center mb-4">
            <Search className="w-6 h-6 text-cyan-400 mr-2" />
            <h3 className="text-lg font-semibold text-white">Looking for something specific?</h3>
          </div>
          <p className="text-gray-300 mb-4">
            Try searching our services or browse our main categories:
          </p>
          <div className="flex flex-wrap gap-2 justify-center">
            <Link to="/ai-services" className="px-4 py-2 bg-cyan-500/20 text-cyan-400 rounded-lg hover:bg-cyan-500/30 transition-colors">
              AI Services
            </Link>
            <Link to="/it-services" className="px-4 py-2 bg-green-500/20 text-green-400 rounded-lg hover:bg-green-500/30 transition-colors">
              IT Services
            </Link>
            <Link to="/micro-saas" className="px-4 py-2 bg-purple-500/20 text-purple-400 rounded-lg hover:bg-purple-500/30 transition-colors">
              Micro SAAS
            </Link>
            <Link to="/contact" className="px-4 py-2 bg-orange-500/20 text-orange-400 rounded-lg hover:bg-orange-500/30 transition-colors">
              Contact Us
            </Link>
          </div>
        </div>

        {/* Contact Info */}
        <div className="mt-8 text-gray-400">
          <p>Still can't find what you're looking for?</p>
          <p className="mt-2">
            Contact us at{' '}
            <a href="mailto:kleber@ziontechgroup.com" className="text-cyan-400 hover:text-cyan-300 transition-colors">
              kleber@ziontechgroup.com
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default NotFoundPage;