import React from 'react';
import { Link } from 'react-router-dom';
import { Home, ArrowLeft, Search, AlertTriangle } from 'lucide-react';

const NotFoundPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center px-4">
      <div className="max-w-2xl mx-auto text-center">
        <div className="mb-8">
          <AlertTriangle className="w-24 h-24 text-cyan-400 mx-auto mb-6" />
          <h1 className="text-6xl font-bold text-white mb-4">404</h1>
          <h2 className="text-3xl font-semibold text-gray-300 mb-6">Page Not Found</h2>
          <p className="text-xl text-gray-400 mb-8">
            Sorry, the page you're looking for doesn't exist or has been moved.
          </p>
        </div>

        <div className="space-y-4">
          <Link
            to="/"
            className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"
          >
            <Home className="w-5 h-5 mr-2" />
            Go Home
          </Link>
          
          <button
            onClick={() => window.history.back()}
            className="inline-flex items-center px-6 py-3 bg-slate-800 text-white font-semibold rounded-lg hover:bg-slate-700 transition-all duration-300 ml-4"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Go Back
          </button>
        </div>

        <div className="mt-12">
          <h3 className="text-xl font-semibold text-white mb-4">Popular Pages</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Link
              to="/services"
              className="p-4 bg-slate-800/50 rounded-lg hover:bg-slate-700/50 transition-colors"
            >
              <h4 className="text-cyan-400 font-semibold">Services</h4>
              <p className="text-gray-400 text-sm">Our AI and IT solutions</p>
            </Link>
            <Link
              to="/about"
              className="p-4 bg-slate-800/50 rounded-lg hover:bg-slate-700/50 transition-colors"
            >
              <h4 className="text-cyan-400 font-semibold">About Us</h4>
              <p className="text-gray-400 text-sm">Learn about our company</p>
            </Link>
            <Link
              to="/contact"
              className="p-4 bg-slate-800/50 rounded-lg hover:bg-slate-700/50 transition-colors"
            >
              <h4 className="text-cyan-400 font-semibold">Contact</h4>
              <p className="text-gray-400 text-sm">Get in touch with us</p>
            </Link>
            <Link
              to="/blog"
              className="p-4 bg-slate-800/50 rounded-lg hover:bg-slate-700/50 transition-colors"
            >
              <h4 className="text-cyan-400 font-semibold">Blog</h4>
              <p className="text-gray-400 text-sm">Latest insights and news</p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFoundPage;