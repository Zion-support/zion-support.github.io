'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const BlogPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Blog | Zion Tech Group - AI & IT Solutions</title>
        <meta name="description" content="Read our latest insights on AI, cloud computing, and digital transformation trends." />
      </Helmet>
      <Navigation />
      <main className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Blog
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Stay updated with the latest trends in AI, cloud computing, and digital transformation.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default BlogPage;
