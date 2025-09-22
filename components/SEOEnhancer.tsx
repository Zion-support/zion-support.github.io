import React from 'react';

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
}