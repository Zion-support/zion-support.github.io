<<<<<<< HEAD
'use client'
import React from 'react';

const MicroSAASPageOriginal: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">
          Micro SAAS Page Original
        </h1>
        <div className="bg-white rounded-lg shadow-md p-6">
          <p className="text-gray-600">
            This is a placeholder page for Micro SAAS Page Original.
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
>>>>>>> origin/main
          </p>
        </div>
      </div>
    </div>
  );
};

<<<<<<< HEAD
export default MicroSAASPageOriginal;
=======
export default PageOriginal;
>>>>>>> origin/main
