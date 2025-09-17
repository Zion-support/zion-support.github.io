import React from 'react';
import { useParams } from 'react-router-dom';
import SEOHead from '../components/SEOHead';

const BlogPost: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();

  return (
    <div className="min-h-screen bg-gray-50">
      <SEOHead 
        title={`Blog Post - ${slug || 'Article'}`}
        description="Read our latest insights on AI, technology, and innovation."
      />
      
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              {slug ? slug.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase()) : 'Blog Post'}
            </h1>
            
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-600 mb-6">
                This is a placeholder blog post. Content would be dynamically loaded based on the slug parameter.
              </p>
              
              <div className="bg-blue-50 border-l-4 border-blue-400 p-4 mb-6">
                <p className="text-blue-800">
                  <strong>Note:</strong> This is a demo blog post component. In a real application, 
                  you would fetch the actual blog content based on the URL slug.
                </p>
              </div>
              
              <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
                Key Features
              </h2>
              
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>Dynamic routing with React Router</li>
                <li>SEO optimization with meta tags</li>
                <li>Responsive design</li>
                <li>Clean, modern UI</li>
              </ul>
              
              <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
                Technology Stack
              </h2>
              
              <p className="text-gray-700 mb-4">
                This blog post is built using modern web technologies including React, TypeScript, 
                and Tailwind CSS for optimal performance and user experience.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPost;