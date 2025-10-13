import React from 'react';
import { Helmet } from 'react-helmet-async';

const BlogPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Blog - Zion Tech Group</title>
        <meta name="description" content="Zion Tech Group blog page" />
      </Helmet>

      <div className="min-h-screen pt-16">
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Blog
            </h1>
            <p className="text-xl text-gray-300">
              This page is under construction. Please check back later.
            </p>
          </div>
        </section>
      </div>
    </>
  );
};

export default BlogPage;
