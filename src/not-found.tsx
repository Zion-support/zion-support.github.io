<<<<<<< HEAD
'use client'
import React from 'react';

const NotFound: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">
          Page Not Found
        </h1>
        <div className="bg-white rounded-lg shadow-md p-6">
          <p className="text-gray-600">
            The page you are looking for does not exist.
          </p>
        </div>
=======
import React from "react";

interface NotFoundProps {
  // Add props here
}

const NotFound: React.FC<NotFoundProps> = () => {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-gray-900 mb-4">404</h1>
        <p className="text-xl text-gray-600 mb-8">Page not found</p>
        <a href="/" className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700">
          Go Home
        </a>
>>>>>>> origin/main
      </div>
    </div>
  );
};

export default NotFound;