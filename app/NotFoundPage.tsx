import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { Home, ArrowLeft, Search } from 'lucide-react';

const NotFoundPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Page Not Found - Zion Tech Group</title>
        <meta name="description" content="The page you're looking for doesn't exist. Return to our homepage to explore our AI and IT services." />
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>

      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-50 via-white to-purple-50">
        <div className="max-w-md w-full text-center px-4">
          {/* 404 Illustration */}
          <div className="mb-8">
            <div className="text-9xl font-bold text-indigo-600 mb-4">404</div>
            <div className="text-6xl mb-4">🔍</div>
          </div>

          {/* Error Message */}
          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            Page Not Found
          </h1>
          <p className="text-lg text-gray-600 mb-8">
            Sorry, we couldn't find the page you're looking for. It might have been moved, deleted, or you entered the wrong URL.
          </p>

          {/* Action Buttons */}
          <div className="space-y-4">
            <Link
              to="/"
              className="inline-flex items-center bg-indigo-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-indigo-700 transition-colors"
            >
              <Home className="w-5 h-5 mr-2" />
              Go Home
            </Link>
            
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <button
                onClick={() => window.history.back()}
                className="inline-flex items-center bg-gray-200 text-gray-800 px-6 py-3 rounded-lg font-semibold hover:bg-gray-300 transition-colors"
              >
                <ArrowLeft className="w-5 h-5 mr-2" />
                Go Back
              </button>
              
              <Link
                to="/contact"
                className="inline-flex items-center bg-white text-indigo-600 px-6 py-3 rounded-lg font-semibold border-2 border-indigo-600 hover:bg-indigo-50 transition-colors"
              >
                <Search className="w-5 h-5 mr-2" />
                Contact Support
              </Link>
            </div>
          </div>

          {/* Helpful Links */}
          <div className="mt-12 pt-8 border-t border-gray-200">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">
              Popular Pages
            </h3>
            <div className="grid grid-cols-2 gap-3 text-sm">
              <Link to="/services" className="text-indigo-600 hover:text-indigo-700 transition-colors">
                Our Services
              </Link>
              <Link to="/ai-services" className="text-indigo-600 hover:text-indigo-700 transition-colors">
                AI Services
              </Link>
              <Link to="/it-services" className="text-indigo-600 hover:text-indigo-700 transition-colors">
                IT Services
              </Link>
              <Link to="/about" className="text-indigo-600 hover:text-indigo-700 transition-colors">
                About Us
              </Link>
            </div>
          </div>

          {/* Contact Info */}
          <div className="mt-8 text-sm text-gray-500">
            <p>Need help? Contact us at</p>
            <a 
              href="tel:+13024640950" 
              className="text-indigo-600 hover:text-indigo-700 font-semibold"
            >
              (302) 464-0950
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default NotFoundPage;