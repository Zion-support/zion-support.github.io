import React from 'react';

interface SEOProps {
  title?: string;
  description?: string;
}

const SEO: React.FC<SEOProps> = ({ 
  title = "Zion Tech Group - Advanced AI and IT Solutions",
  description = "Leading provider of advanced AI and IT solutions for enterprise clients"
}) => {
  return (
<<<<<<< HEAD
    <>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
    </>
=======
    <div className="bg-gradient-to-r from-blue-600 to-purple-700 text-white p-8 rounded-lg shadow-lg">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-4">
          S E O
        </h2>
        <p className="text-lg mb-6">
          This component is being restored. Please check back later for full functionality.
        </p>
      </div>
    </div>
>>>>>>> cursor/fix-errors-and-merge-to-main-4daf
  );
};

export default SEO;
