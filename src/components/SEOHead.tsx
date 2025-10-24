<<<<<<< HEAD
'use client'
import React from 'react';

const SEOHead: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">
          S E O Head
        </h1>
        <div className="bg-white rounded-lg shadow-md p-6">
          <p className="text-gray-600">
            This is a placeholder page for S E O Head.
          </p>
        </div>
      </div>
    </div>
=======
import React from "react";

interface SEOHeadProps {
  title?: string;
  description?: string;
  keywords?: string;
}

const SEOHead: React.FC<SEOHeadProps> = ({
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

export default SEOHead;
