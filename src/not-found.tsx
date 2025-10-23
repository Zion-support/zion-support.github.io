"use client";
import React from 'react';

const NotFound = () => {
  return (
    <div className="min-h-screen bg-gray-100 py-8">
      <div className="max-w-4xl mx-auto px-4">
        <h1 className="text-3xl font-bold text-gray-900 mb-6">
          404 - Page Not Found
        </h1>
        <div className="bg-white rounded-lg shadow-md p-6">
          <p className="text-gray-600">
            The page you are looking for does not exist.
          </p>
        </div>
      </div>
    </div>
  );
};

export default NotFound;