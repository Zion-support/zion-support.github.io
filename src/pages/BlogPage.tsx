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
          <h1 className="text-4xl font-bold mb-8">Blog</h1>
          <p className="text-gray-300 text-lg mb-8">
            Stay updated with the latest insights, trends, and innovations in AI and technology.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <article className="bg-gray-800 p-6 rounded-lg">
              <h2 className="text-xl font-semibold mb-4">The Future of AI in Enterprise</h2>
              <p className="text-gray-300 mb-4">
                Exploring how artificial intelligence is transforming business operations and decision-making processes.
              </p>
              <span className="text-blue-400 text-sm">Read More</span>
            </article>
            <article className="bg-gray-800 p-6 rounded-lg">
              <h2 className="text-xl font-semibold mb-4">Quantum Computing Breakthroughs</h2>
              <p className="text-gray-300 mb-4">
                Latest developments in quantum computing and their potential impact on various industries.
              </p>
              <span className="text-blue-400 text-sm">Read More</span>
            </article>
            <article className="bg-gray-800 p-6 rounded-lg">
              <h2 className="text-xl font-semibold mb-4">Cybersecurity Best Practices</h2>
              <p className="text-gray-300 mb-4">
                Essential security measures to protect your organization from evolving cyber threats.
              </p>
              <span className="text-blue-400 text-sm">Read More</span>
            </article>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogPage;