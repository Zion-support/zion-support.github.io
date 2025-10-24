<<<<<<< HEAD
import React from 'react';

const Page = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Page Under Construction</h1>
        <p className="text-gray-600">This page is being updated. Please check back later.</p>
=======
import React from "react";

interface PageOriginalProps {
  // Add props here
}

const PageOriginal: React.FC<PageOriginalProps> = () => {
  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-6">
          Micro SaaS - Original
        </h1>
        <div className="prose max-w-none">
          <p className="text-lg text-gray-600">
            This is the original micro SaaS page.
          </p>
        </div>
>>>>>>> origin/main
      </div>
    </div>
  );
};

<<<<<<< HEAD
export default Page;
=======
export default PageOriginal;
>>>>>>> origin/main
