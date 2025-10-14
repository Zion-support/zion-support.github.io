import React from 'react';
import { Helmet } from 'react-helmet-async';
import { AlertTriangle, RefreshCw } from 'lucide-react';



const Error Page: React.FC = () => {
  return (
    <>
      <div>
      <Helmet>
        <title>Error - Zion Tech Group</title>
        <meta name="description" content="An error occurred" />
      </Helmet>
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="flex items-center justify-center w-12 h-12 mx-auto bg-red-100 rounded-full mb-4">
            <AlertTriangle className="w-6 h-6 text-red-600" />
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Something went wrong</h1>
          <p className="text-gray-600 mb-6">Please try again later.</p>
          <button
            onClick={() => window.location.reload()}
            className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 flex items-center mx-auto"
          >
            <RefreshCw className="w-4 h-4 mr-2" />
            Try Again
          </button>
        </div>
      </div>
    </div> 
    </>
  );
};

export default ErrorPage;
