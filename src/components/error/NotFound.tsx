import React from 'react';
import { Link } from 'react-router-dom';
import { Home, Search, ArrowLeft } from 'lucide-react';

const NotFound: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900/20 via-gray-900 to-blue-900/20 flex items-center justify-center p-4">
      <div className="max-w-2xl w-full text-center">
        {/* 404 Animation */}
        <div className="mb-8">
          <div className="text-8xl md:text-9xl font-bold bg-gradient-to-r from-zion-cyan to-zion-purple bg-clip-text text-transparent animate-pulse">
            404
          </div>
          <div className="mt-4 text-2xl md:text-3xl text-white font-semibold">
            Page Not Found
          </div>
        </div>

        {/* Description */}
        <div className="mb-8">
          <p className="text-gray-300 text-lg mb-4">
            Oops! The page you're looking for seems to have vanished into the digital void.
          </p>
          <p className="text-gray-400">
            Don't worry, even the best explorers sometimes take a wrong turn in cyberspace.
          </p>
        </div>

        {/* Search Suggestion */}
        <div className="mb-8 p-6 bg-white/10 backdrop-blur-sm rounded-lg border border-white/20">
          <div className="flex items-center justify-center mb-4">
            <Search className="w-8 h-8 text-zion-cyan" />
          </div>
          <h3 className="text-xl font-semibold text-white mb-2">
            Looking for something specific?
          </h3>
          <p className="text-gray-300 mb-4">
            Try searching for what you need or explore our main sections.
          </p>
        </div>

        {/* Action Buttons */}
        <div className="space-y-4 md:space-y-0 md:space-x-4 md:flex md:justify-center">
          <Link
            to="/"
            className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-zion-cyan to-zion-purple hover:from-zion-cyan-dark hover:to-zion-purple-dark text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105"
          >
            <Home className="w-5 h-5" />
            Go Home
          </Link>
          
          <button
            onClick={() => window.history.back()}
            className="inline-flex items-center justify-center gap-2 border border-white/30 hover:bg-white/10 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300"
          >
            <ArrowLeft className="w-5 h-5" />
            Go Back
          </button>
          
          <Link
            to="/services"
            className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300"
          >
            <Search className="w-5 h-5" />
            Explore Services
          </Link>
        </div>

        {/* Popular Links */}
        <div className="mt-12 pt-8 border-t border-white/20">
          <h4 className="text-lg font-semibold text-white mb-4">
            Popular Destinations
          </h4>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              { to: '/about', label: 'About Us' },
              { to: '/services', label: 'Services' },
              { to: '/contact', label: 'Contact' },
              { to: '/blog', label: 'Blog' }
            ].map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className="text-zion-cyan hover:text-zion-cyan-light transition-colors duration-200"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;