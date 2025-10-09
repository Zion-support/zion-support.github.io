'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const BlogPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Blog - Zion Tech Group</title>
        <meta name="description" content="Read our latest insights on AI, technology, and business solutions. Stay updated with industry trends and best practices." />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
        <Navigation />
        
        <main className="pt-20">
          <div className="container mx-auto px-4 py-16">
            <div className="max-w-4xl mx-auto">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">
                Our Blog
              </h1>
              
              <div className="prose prose-lg max-w-none">
                <p className="text-xl text-gray-600 mb-8">
                  Insights, trends, and best practices in AI and technology.
                </p>
                
                <p className="text-gray-700 mb-6">
                  Coming soon - stay tuned for our latest articles and insights!
                </p>
              </div>
            </div>
          </div>
        </main>
        
        <Footer />
      </div>
    </>
  );
};

export default BlogPage;