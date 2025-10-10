'use client';

import React from 'react';
import { Helmet } from 'react-helmet-async';

export default function HomePage() {
  return (
    <>
      <Helmet>
        <title>Zion Tech Group - AI & IT Solutions | Enterprise AI Services</title>
        <meta 
          name="description" 
          content="Leading provider of AI-powered enterprise solutions, quantum computing, autonomous systems, and digital transformation services. Achieve 300% ROI with our cutting-edge AI technology." 
        />
        <meta 
          name="keywords" 
          content="AI, artificial intelligence, enterprise solutions, digital transformation, IT services, quantum computing, automation, micro SAAS, machine learning, business intelligence" 
        />
      </Helmet>
      
      <div className="min-h-screen">
        {/* This will be handled by the main App component with lazy loading */}
        <div className="text-center py-20">
          <h1 className="text-4xl font-bold text-white mb-4">Welcome to Zion Tech Group</h1>
          <p className="text-gray-300">Loading our amazing content...</p>
        </div>
      </div>
    </>
  );
}