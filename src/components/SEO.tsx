import React from 'react';

interface SEOProps {
  title: string;
  description: string;
  keywords?: string;
  url?: string;
}

const SEO: React.FC<SEOProps> = ({ title, description, keywords, url }) => {
  return (
    <div className="p-6 bg-gradient-to-br from-blue-900 to-purple-900 text-white rounded-lg">
      <h3 className="text-xl font-bold mb-4">{title}</h3>
      <p className="text-gray-300">{description}</p>
      {keywords && <p className="text-gray-300 mt-2">Keywords: {keywords}</p>}
      {url && <p className="text-gray-300 mt-2">URL: {url}</p>}
    </div>
  );
};

export default SEO;