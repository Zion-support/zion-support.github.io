'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const ApiDocsPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>API Documentation - Zion Tech Group</title>
        <meta name="description" content="API Documentation for Zion Tech Group. Complete reference for our REST APIs and SDKs." />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
        <Navigation />
        
        <main className="pt-20">
          <div className="container mx-auto px-4 py-16">
            <div className="max-w-4xl mx-auto">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">
                API Documentation
              </h1>
              
              <div className="prose prose-lg max-w-none">
                <p className="text-xl text-gray-600 mb-8">
                  Complete API reference for integrating with our services.
                </p>
                
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Authentication</h2>
                <p className="text-gray-700 mb-6">
                  Learn how to authenticate with our APIs using API keys and OAuth.
                </p>
                
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Endpoints</h2>
                <p className="text-gray-700 mb-6">
                  Browse our complete list of API endpoints with examples.
                </p>
                
                <h2 className="text-2xl font-bold text-gray-900 mb-4">SDKs</h2>
                <p className="text-gray-700 mb-6">
                  Download our official SDKs for popular programming languages.
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

export default ApiDocsPage;
