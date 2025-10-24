<<<<<<< HEAD
'use client'
import React from 'react';

const SEOEnhancer: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">
          S E O Enhancer
        </h1>
        <div className="bg-white rounded-lg shadow-md p-6">
          <p className="text-gray-600">
            This is a placeholder page for S E O Enhancer.
          </p>
        </div>
      </div>
    </div>
=======
import React from "react";

interface SEOEnhancerProps {
  title?: string;
  description?: string;
  keywords?: string;
}

const SEOEnhancer: React.FC<SEOEnhancerProps> = ({
  title = "Default Title",
  description = "Default Description",
  keywords = "default, keywords"
}) => {
  return (
    <>
      <title>{title}</title>
      <meta name="description" content="{description}" />
      <meta name="keywords" content="{keywords}" />
    </>
>>>>>>> origin/main
  );
};

export default SEOEnhancer;
