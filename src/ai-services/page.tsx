<<<<<<< HEAD
'use client'
import React from 'react';

const page: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">
          Page
        </h1>
        <div className="bg-white rounded-lg shadow-md p-6">
          <p className="text-gray-600">
            This is a placeholder page for Page.
=======
import React from "react";

interface PagePageProps {
  // Add props here
}

const PagePage: React.FC<PagePageProps> = () => {
  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-6">
          
        </h1>
        <div className="prose max-w-none">
          <p className="text-lg text-gray-600">
            This is a placeholder for the  page.
>>>>>>> origin/main
          </p>
        </div>
      </div>
    </div>
  );
};

<<<<<<< HEAD
export default page;
=======
export default PagePage;
>>>>>>> origin/main
