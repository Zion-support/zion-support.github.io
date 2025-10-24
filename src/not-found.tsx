<<<<<<< HEAD
import React from 'react';

const SrcPage = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Src</h1>
        <p className="text-gray-600">This page is under construction. Please check back later.</p>
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

<<<<<<< HEAD
export default SrcPage;
=======
export default NotFound;
>>>>>>> origin/main
