<<<<<<< HEAD
import React from 'react';

const Page = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Page Under Construction</h1>
        <p className="text-gray-600">This page is being updated. Please check back later.</p>
      </div>
    </div>
  );
};

export default Page;
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
  );
};

export default SEOEnhancer;
>>>>>>> origin/main
