import React from 'react';
import { Link } from 'react-router-dom';
import { cn } from '../lib/utils';

interface ErrorPageProps {
  statusCode?: number;
  title?: string;
  message?: string;
  showHomeButton?: boolean;
  showContactButton?: boolean;
}

const ErrorPage: React.FC<ErrorPageProps> = ({
  statusCode = 404,
  title = 'Page Not Found',
  message = "Sorry, we couldn't find the page you're looking for. It might have been moved, deleted, or doesn't exist.",
  showHomeButton = true,
  showContactButton = true,
}) => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="text-center max-w-md mx-auto px-4">
        <div className="mb-8">
          <h1 className="text-6xl font-bold text-gray-900 mb-4 animate-pulse">
            {statusCode}
          </h1>
          <h2 className="text-2xl font-semibold text-gray-700 mb-4">
            {title}
          </h2>
          <p className="text-gray-600 mb-8">
            {message}
          </p>
        </div>
        
        <div className="space-y-4">
          {showHomeButton && (
            <Link 
              to="/" 
              className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            >
              Go Back Home
            </Link>
          )}
          
          {showContactButton && (
            <div className="text-sm text-gray-500">
              <Link 
                to="/contact" 
                className="text-blue-600 hover:text-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded"
              >
                Contact Support
              </Link>
              {' • '}
              <Link 
                to="/services" 
                className="text-blue-600 hover:text-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded"
              >
                Browse Services
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;