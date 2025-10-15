import React from 'react';
import { Link } from 'react-router-dom';

interface ErrorPageProps {
  statusCode?: number;
  title?: string;
  message?: string;
  showHomeButton?: boolean;
}

const ErrorPage: React.FC<ErrorPageProps> = ({
  statusCode = 404,
  title = 'Page Not Found',
  message = 'The page you are looking for does not exist.',
  showHomeButton = true
}) => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="max-w-md w-full bg-white shadow-lg rounded-lg p-8 text-center">
        <div className="mb-6">
          <div className="text-6xl font-bold text-blue-600 mb-4">
            {statusCode}
          </div>
          <h1 className="text-2xl font-semibold text-gray-900 mb-2">
            {title}
          </h1>
          <p className="text-gray-600">
            {message}
          </p>
        </div>
        
        {showHomeButton && (
          <div className="space-y-4">
            <Link
              to="/"
              className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              Go Home
            </Link>
            <div className="text-sm text-gray-500">
              <button
                onClick={() => window.history.back()}
                className="text-blue-600 hover:text-blue-800 underline"
              >
                Go Back
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ErrorPage;