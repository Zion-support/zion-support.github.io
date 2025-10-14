import React from 'react';
import { Helmet } from 'react-helmet-async';

const BlogPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Blog - Zion Tech Group</title>
        <meta name="description" content="Latest insights and updates from Zion Tech Group" />
        <meta name="keywords" content="blog, tech insights, AI, IT solutions" />
      </Helmet>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-white mb-8">Blog</h1>
            <p className="text-xl text-gray-300 mb-8">
              Latest insights and updates from our team
            </p>
            <div className="text-gray-400">
              <p>Blog posts coming soon...</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )};

export default BlogPage;