'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const DocsPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Documentation - Zion Tech Group</title>
        <meta name="description" content="Documentation for Zion Tech Group services. Find guides, tutorials, and API references." />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
        <Navigation />
        
        <main className="pt-20">
          <div className="container mx-auto px-4 py-16">
            <div className="max-w-4xl mx-auto">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">
                Documentation
              </h1>
              
              <div className="prose prose-lg max-w-none">
                <p className="text-xl text-gray-600 mb-8">
                  Welcome to our documentation center. Find everything you need to get started with our services.
                </p>
                
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Getting Started</h2>
                <p className="text-gray-700 mb-6">
                  Learn how to set up and configure our AI and IT services for your business.
                </p>
                
                <h2 className="text-2xl font-bold text-gray-900 mb-4">API Reference</h2>
                <p className="text-gray-700 mb-6">
                  Complete API documentation with examples and code snippets.
                </p>
                
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Tutorials</h2>
                <p className="text-gray-700 mb-6">
                  Step-by-step guides to help you make the most of our platform.
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

export default DocsPage;
