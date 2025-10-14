import React from 'react';
import { Helmet } from 'react-helmet-async';

<<<<<<< HEAD
const BlogPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Blog - Zion Tech Group</title>
        <meta name="description" content="Latest insights, trends, and updates from Zion Tech Group on AI, technology, and business solutions." />
        <meta name="keywords" content="blog, AI insights, technology trends, business solutions, Zion Tech Group" />
      </Helmet>

      <div className="min-h-screen bg-white">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-8">
              Blog
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Latest insights, trends, and updates from Zion Tech Group on AI, technology, and business solutions.
            </p>
          </div>
=======
const PagePage = () => {
  return (
    <>
      <Helmet>
        <title>PagePage - Zion Tech Group</title>
        <meta name="description" content="PagePage - Zion Tech Group" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="container mx-auto px-4 py-16">
          <h1 className="text-4xl font-bold text-white mb-8">PagePage</h1>
          <p className="text-gray-300 text-lg">
            This page is under construction. Please check back later.
          </p>
>>>>>>> cursor/fix-errors-and-merge-to-main-d09f
        </div>
      </div>
    </>
  );
};

<<<<<<< HEAD
export default BlogPage;
=======
export default PagePage;
>>>>>>> cursor/fix-errors-and-merge-to-main-d09f
