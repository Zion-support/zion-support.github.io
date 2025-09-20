<<<<<<< HEAD
import React from 'react';

const SEO: React.FC = () => {
  return (
    <div className="p-6 bg-gradient-to-br from-blue-900 to-purple-900 text-white rounded-lg">
      <h3 className="text-xl font-bold mb-4">SEO</h3>
      <p className="text-gray-300">Revolutionary technology component</p>
    </div>
  );
};
export default SEO;
=======
import React from 'react'

interface SEOProps {
  title?: string
  description?: string
  keywords?: string
  url?: string
}

const SEO: React.FC<SEOProps> = ({ title, description, keywords, url }) => {
  return (
    <div>
      {title && <title>{title}</title>}
      {description && <meta name="description" content={description} />}
      {keywords && <meta name="keywords" content={keywords} />}
      {url && <meta property="og:url" content={url} />}
    </div>
  )
}

export default SEO
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-c519
