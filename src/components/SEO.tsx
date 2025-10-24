<<<<<<< HEAD
import React from 'react';

const SEO = () => {
  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold text-gray-900 mb-2">SEO</h2>
      <p className="text-gray-600">This component is under construction.</p>
    </div>
=======
import React from "react";

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
}

const SEO: React.FC<SEOProps> = ({
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

export default SEO;
