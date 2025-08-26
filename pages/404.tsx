import React from 'react';
import { Link } from 'react-router-dom';
import { Home, ArrowLeft, Search } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 flex items-center justify-center px-4">
      <div className="text-center text-white max-w-2xl mx-auto">
        <div className="mb-8">
          <h1 className="text-9xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400 mb-4">
            404
          </h1>
          <h2 className="text-3xl font-semibold mb-4">Page Not Found</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-md mx-auto">
            The page you're looking for doesn't exist or has been moved.
          </p>
        </div>
        
        <div className="space-y-4">
          <Link 
            to="/"
            className="inline-flex items-center bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-semibold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105"
          >
            <Home className="w-5 h-5 mr-2" />
            Go Home
          </Link>
          
          <div className="text-sm text-gray-400">
            <p className="mb-4">Or try one of these pages:</p>
            <div className="flex flex-col sm:flex-row justify-center space-y-2 sm:space-y-0 sm:space-x-6">
              <Link 
                to="/about" 
                className="hover:text-blue-400 transition-colors flex items-center justify-center sm:justify-start"
              >
                <ArrowLeft className="w-4 h-4 mr-2 rotate-180" />
                About Us
              </Link>
              <Link 
                to="/services" 
                className="hover:text-blue-400 transition-colors flex items-center justify-center sm:justify-start"
              >
                <Search className="w-4 h-4 mr-2" />
                Our Services
              </Link>
              <Link 
                to="/contact" 
                className="hover:text-blue-400 transition-colors flex items-center justify-center sm:justify-start"
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                Contact
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-700">
          <p className="text-gray-400 text-sm">
            If you believe this is an error, please{' '}
            <Link to="/contact" className="text-blue-400 hover:text-blue-300 underline">
              contact our support team
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
