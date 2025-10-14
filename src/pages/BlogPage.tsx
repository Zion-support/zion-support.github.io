import React from 'react';
import { Helmet } from 'react-helmet-async';

const BlogPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Blog - Zion Tech Group</title>
        <meta name="description" content="Latest insights and updates from Zion Tech Group." />
      </Helmet>
      <div className="min-h-screen bg-gray-900 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold text-center mb-8">Our Blog</h1>
            <section className="mb-12">
              <div className="grid md:grid-cols-2 gap-8">
                <article className="bg-gray-800 p-6 rounded-lg">
                  <div className="flex items-center space-x-2 text-sm text-gray-400 mb-4">
                    <span>January 15, 2024</span>
                    <span>•</span>
                    <span>AI Solutions</span>
                  </div>
                  <h2 className="text-xl font-semibold mb-3">The Future of AI in Business</h2>
                  <p className="text-gray-300 mb-4">
                    Explore how artificial intelligence is transforming modern business operations.
                  </p>
                  <a href="#" className="text-blue-400 hover:text-blue-300">
                    Read more →
                  </a>
                </article>
                
                <article className="bg-gray-800 p-6 rounded-lg">
                  <div className="flex items-center space-x-2 text-sm text-gray-400 mb-4">
                    <span>January 10, 2024</span>
                    <span>•</span>
                    <span>Cloud Computing</span>
                  </div>
                  <h2 className="text-xl font-semibold mb-3">Cloud Migration Best Practices</h2>
                  <p className="text-gray-300 mb-4">
                    Learn the essential steps for a successful cloud migration strategy.
                  </p>
                  <a href="#" className="text-blue-400 hover:text-blue-300">
                    Read more →
                  </a>
                </article>
              </div>
            </section>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogPage;