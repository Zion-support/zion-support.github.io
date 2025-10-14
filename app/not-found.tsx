import React from "react";
import { Helmet } from "react-helmet-async";

const NotFound: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      <Helmet>
        <title>Not Found - Zion Tech Group</title>
        <meta name="description" content="Page not found - Zion Tech Group." />
      </Helmet>
      
      {/* Hero Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            404 - Page Not Found
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            The page you're looking for doesn't exist.
            Let's get you back on track.
          </p>
        </div>
      </section>
      
      {/* Content Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <div className="bg-gray-100 p-8 rounded-lg max-w-md mx-auto">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">What can we do for you?</h2>
            <p className="text-gray-600 mb-6">
              Let us help you find what you're looking for or get you back to our homepage.
            </p>
            <div className="space-y-3">
              <button className="w-full bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors">
                Go Home
              </button>
              <button className="w-full bg-gray-600 text-white px-6 py-3 rounded-lg hover:bg-gray-700 transition-colors">
                Contact Support
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default NotFound;