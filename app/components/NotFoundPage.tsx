import React from 'react';
import { Link } from 'react-router-dom';
import { Home, ArrowLeft, Search } from 'lucide-react';

const NotFoundPage: React.FC = () => {
  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="max-w-md w-full text-center">
        <div className="mb-8">
          <h1 className="text-9xl font-bold text-white mb-4">404</h1>
          <h2 className="text-2xl font-semibold text-white mb-4">Page Not Found</h2>
          <p className="text-gray-300 mb-8">
            Sorry, we couldn't find the page you're looking for. It might have been moved, deleted, or doesn't exist.
          </p>
        </div>
        
        <div className="space-y-4">
          <Link
            to="/"
            className="inline-flex items-center bg-gradient-to-r from-purple-600 to-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-purple-700 hover:to-blue-700 transition-all duration-300"
          >
            <Home className="w-5 h-5 mr-2" />
            Go Home
          </Link>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => window.history.back()}
              className="inline-flex items-center border border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white/10 transition-colors"
            >
              <ArrowLeft className="w-5 h-5 mr-2" />
              Go Back
            </button>
            
            <Link
              to="/contact"
              className="inline-flex items-center border border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white/10 transition-colors"
            >
              <Search className="w-5 h-5 mr-2" />
              Contact Support
            </Link>
          </div>
        </div>
        
        <div className="mt-12">
          <h3 className="text-lg font-semibold text-white mb-4">Popular Pages</h3>
          <div className="grid grid-cols-2 gap-4 text-sm">
            <Link to="/ai-services" className="text-gray-300 hover:text-white transition-colors">
              AI Services
            </Link>
            <Link to="/it-services" className="text-gray-300 hover:text-white transition-colors">
              IT Services
            </Link>
            <Link to="/cloud-services" className="text-gray-300 hover:text-white transition-colors">
              Cloud Services
            </Link>
            <Link to="/about" className="text-gray-300 hover:text-white transition-colors">
              About Us
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFoundPage;