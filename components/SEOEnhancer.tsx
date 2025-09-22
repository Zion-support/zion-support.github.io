import React from 'react';

<<<<<<< HEAD
interface SEOEnhancerProps {
  title?: string;
  description?: string;
  keywords?: string;
}

export default function SEOEnhancer({ 
  title, 
  description, 
  keywords 
}: SEOEnhancerProps) {
  return (
    <div className="seo-enhancer">
      {/* SEO enhancement content */}
      {title && <h1 className="sr-only">{title}</h1>}
      {description && <p className="sr-only">{description}</p>}
      {keywords && <div className="sr-only">{keywords}</div>}
    </div>
  );
}

export function generateSEOMetadata(title: string, description: string, keywords?: string) {
  return {
    title,
    description,
    keywords: keywords || '',
  };
=======
export function generateSEOMetadata(title: string, description: string) {
  return {
    title,
    description,
    openGraph: {
      title,
      description,
    },
  };
}

export default function SEOEnhancer() {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <h3 className="text-xl font-bold text-gray-900 mb-4">SEO Enhancer</h3>
      <p className="text-gray-600">Advanced SEO optimization and monitoring tools.</p>
    </div>
  );
>>>>>>> da3c549c14ad0d2a580007f3c8b06256cb24f4aa
}