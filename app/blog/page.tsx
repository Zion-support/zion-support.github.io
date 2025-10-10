'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const BlogPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Blog - Zion Tech Group | AI & IT Insights</title>
        <meta name="description" content="Stay updated with the latest AI and IT insights, trends, and innovations from Zion Tech Group." />
      </Helmet>
      
      <Navigation />
      
      <main className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-16">
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 text-center">
              Blog
            </h1>
            <p className="text-xl text-gray-300 text-center mb-12">
              Stay updated with the latest AI and IT insights, trends, and innovations.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-slate-800/50 rounded-lg p-6">
                <h3 className="text-xl font-bold text-white mb-4">AI Trends 2024</h3>
                <p className="text-gray-300 mb-4">Explore the latest trends in artificial intelligence and machine learning.</p>
                <a href="#" className="text-cyan-400 hover:text-cyan-300 transition-colors">Read More →</a>
              </div>
              
              <div className="bg-slate-800/50 rounded-lg p-6">
                <h3 className="text-xl font-bold text-white mb-4">Cloud Migration Guide</h3>
                <p className="text-gray-300 mb-4">Best practices for migrating your infrastructure to the cloud.</p>
                <a href="#" className="text-cyan-400 hover:text-cyan-300 transition-colors">Read More →</a>
              </div>
              
              <div className="bg-slate-800/50 rounded-lg p-6">
                <h3 className="text-xl font-bold text-white mb-4">Cybersecurity Tips</h3>
                <p className="text-gray-300 mb-4">Essential cybersecurity practices for modern businesses.</p>
                <a href="#" className="text-cyan-400 hover:text-cyan-300 transition-colors">Read More →</a>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </>
  );
};

export default BlogPage;
