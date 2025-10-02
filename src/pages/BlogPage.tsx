import React from 'react';
import SEO from '../components/SEO';

const BlogPage: React.FC = () => {
  return (
    <>
      <SEO 
        title="Blog & Insights - Zion Tech Group"
        description="Latest insights on AI, technology trends, and business transformation from Zion Tech Group experts."
        keywords="AI blog, technology insights, business transformation, AI trends"
      />
      
      <main className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold mb-8 text-center">Blog & Insights</h1>
            
            <div className="space-y-8">
              <article className="bg-white p-6 rounded-lg shadow-lg border">
                <h2 className="text-2xl font-bold mb-4">The Future of AI in Business</h2>
                <p className="text-gray-600 mb-4">
                  Explore how artificial intelligence is transforming business operations and creating new opportunities for growth.
                </p>
                <div className="text-sm text-gray-500">Published: December 2024</div>
              </article>
              
              <article className="bg-white p-6 rounded-lg shadow-lg border">
                <h2 className="text-2xl font-bold mb-4">Micro SaaS: The New Business Model</h2>
                <p className="text-gray-600 mb-4">
                  Discover how micro SaaS solutions are revolutionizing software delivery and customer engagement.
                </p>
                <div className="text-sm text-gray-500">Published: November 2024</div>
              </article>
              
              <article className="bg-white p-6 rounded-lg shadow-lg border">
                <h2 className="text-2xl font-bold mb-4">Cloud Migration Best Practices</h2>
                <p className="text-gray-600 mb-4">
                  Learn the essential strategies for successful cloud migration and optimization.
                </p>
                <div className="text-sm text-gray-500">Published: October 2024</div>
              </article>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default BlogPage;