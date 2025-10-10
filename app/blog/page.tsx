'use client';
import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const BlogPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Navigation />
      
      <main className="container mx-auto px-4 py-16 pt-24">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-8 text-center">
            Blog
          </h1>
          <p className="text-xl text-gray-300 text-center mb-12">
            Insights, tutorials, and updates from the world of AI and technology
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Blog posts will be added here */}
            <div className="cyber-card p-6">
              <h3 className="text-xl font-bold text-white mb-4">Coming Soon</h3>
              <p className="text-gray-300 mb-4">
                We're working on bringing you the latest insights and tutorials.
              </p>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default BlogPage;