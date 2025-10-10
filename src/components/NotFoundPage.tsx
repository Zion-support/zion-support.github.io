'use client';
import React from 'react';
import { Link } from 'react-router-dom';
import { Home, ArrowLeft, Search } from 'lucide-react';

const NotFoundPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center">
      <div className="text-center max-w-2xl mx-auto px-4">
        {/* 404 Animation */}
        <div className="relative mb-8">
          <h1 className="text-9xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400 animate-pulse">
            404
          </h1>
          <div className="absolute inset-0 text-9xl font-bold text-cyan-400 opacity-20 animate-ping">
            404
          </div>
        </div>

        {/* Error Message */}
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          Page Not Found
        </h2>
        <p className="text-xl text-gray-300 mb-8">
          The page you're looking for seems to have vanished into the digital void.
          Don't worry, even the best AI systems sometimes lose track of things!
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/"
            className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-500 text-white rounded-lg hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 font-semibold group"
          >
            <Home className="w-5 h-5 mr-2 group-hover:animate-bounce" />
            Go Home
          </Link>
          
          <button
            onClick={() => window.history.back()}
            className="inline-flex items-center px-6 py-3 bg-transparent border-2 border-cyan-400 text-cyan-400 rounded-lg hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 font-semibold group"
          >
            <ArrowLeft className="w-5 h-5 mr-2 group-hover:-translate-x-1 transition-transform" />
            Go Back
          </button>
        </div>

        {/* Search Suggestion */}
        <div className="mt-12 p-6 bg-slate-800/50 rounded-lg border border-cyan-400/20 backdrop-blur-sm">
          <h3 className="text-lg font-semibold text-white mb-3 flex items-center">
            <Search className="w-5 h-5 mr-2 text-cyan-400" />
            Looking for something specific?
          </h3>
          <p className="text-gray-300 mb-4">
            Try searching for AI services, IT solutions, or browse our popular pages:
          </p>
          <div className="flex flex-wrap gap-2 justify-center">
            <Link to="/ai-services" className="px-3 py-1 bg-cyan-500/20 text-cyan-300 rounded-full text-sm hover:bg-cyan-500/30 transition-colors">
              AI Services
            </Link>
            <Link to="/it-services" className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-sm hover:bg-purple-500/30 transition-colors">
              IT Services
            </Link>
            <Link to="/contact" className="px-3 py-1 bg-green-500/20 text-green-300 rounded-full text-sm hover:bg-green-500/30 transition-colors">
              Contact Us
            </Link>
            <Link to="/about" className="px-3 py-1 bg-orange-500/20 text-orange-300 rounded-full text-sm hover:bg-orange-500/30 transition-colors">
              About Us
            </Link>
          </div>
        </div>

        {/* Cyber Grid Background */}
        <div className="absolute inset-0 -z-10 opacity-10">
          <div className="cyber-grid h-full"></div>
        </div>
      </div>
    </div>
  );
};

export default NotFoundPage;