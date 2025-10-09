import React from 'react';
import { Link } from 'react-router-dom';
import { Home, ArrowLeft, Search } from 'lucide-react';

const NotFoundPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center px-4">
      <div className="text-center max-w-2xl mx-auto">
        {/* 404 Animation */}
        <div className="mb-8">
          <div className="text-9xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500 mb-4">
            404
          </div>
          <div className="w-32 h-1 bg-gradient-to-r from-cyan-400 to-purple-500 mx-auto rounded-full"></div>
        </div>

        {/* Error Message */}
        <h1 className="text-4xl font-bold text-white mb-6">
          Page Not Found
        </h1>
        <p className="text-xl text-gray-300 mb-8 leading-relaxed">
          Sorry, the page you're looking for doesn't exist or has been moved. 
          Let's get you back on track with our amazing AI and IT solutions.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <Link
            to="/"
            className="flex items-center space-x-2 bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 hover:scale-105 font-semibold"
          >
            <Home className="w-5 h-5" />
            <span>Go Home</span>
          </Link>
          
          <button
            onClick={() => window.history.back()}
            className="flex items-center space-x-2 bg-slate-800 text-white px-8 py-4 rounded-lg hover:bg-slate-700 transition-all duration-300 font-semibold border border-slate-700"
          >
            <ArrowLeft className="w-5 h-5" />
            <span>Go Back</span>
          </button>
        </div>

        {/* Quick Links */}
        <div className="bg-slate-800/50 rounded-2xl p-8 backdrop-blur-sm border border-slate-700">
          <h3 className="text-xl font-semibold text-white mb-6">Popular Pages</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <Link
              to="/ai-services"
              className="flex items-center space-x-3 p-4 bg-slate-700/50 rounded-lg hover:bg-slate-700 transition-colors group"
            >
              <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
              <span className="text-white group-hover:text-cyan-400 transition-colors">AI Services</span>
            </Link>
            
            <Link
              to="/it-services"
              className="flex items-center space-x-3 p-4 bg-slate-700/50 rounded-lg hover:bg-slate-700 transition-colors group"
            >
              <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
              <span className="text-white group-hover:text-blue-400 transition-colors">IT Services</span>
            </Link>
            
            <Link
              to="/micro-saas"
              className="flex items-center space-x-3 p-4 bg-slate-700/50 rounded-lg hover:bg-slate-700 transition-colors group"
            >
              <div className="w-2 h-2 bg-green-400 rounded-full"></div>
              <span className="text-white group-hover:text-green-400 transition-colors">Micro SAAS</span>
            </Link>
            
            <Link
              to="/about"
              className="flex items-center space-x-3 p-4 bg-slate-700/50 rounded-lg hover:bg-slate-700 transition-colors group"
            >
              <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
              <span className="text-white group-hover:text-yellow-400 transition-colors">About Us</span>
            </Link>
            
            <Link
              to="/contact"
              className="flex items-center space-x-3 p-4 bg-slate-700/50 rounded-lg hover:bg-slate-700 transition-colors group"
            >
              <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
              <span className="text-white group-hover:text-purple-400 transition-colors">Contact</span>
            </Link>
            
            <Link
              to="/blog"
              className="flex items-center space-x-3 p-4 bg-slate-700/50 rounded-lg hover:bg-slate-700 transition-colors group"
            >
              <div className="w-2 h-2 bg-pink-400 rounded-full"></div>
              <span className="text-white group-hover:text-pink-400 transition-colors">Blog</span>
            </Link>
          </div>
        </div>

        {/* Search Suggestion */}
        <div className="mt-8 text-gray-400">
          <p className="mb-4">Looking for something specific?</p>
          <div className="flex items-center justify-center space-x-2">
            <Search className="w-4 h-4" />
            <span>Try searching our site or browse our services above</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFoundPage;