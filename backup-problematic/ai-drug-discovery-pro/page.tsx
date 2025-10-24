import React from 'react';
import { Helmet } from 'react-helmet-async';

export default function Page() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Helmet>
        <title> - Zion Tech Group</title>
        <meta name="description" content=" solutions by Zion Tech Group" />
      </Helmet>
      
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold mb-8"></h1>
        <div className="prose prose-invert max-w-none">
          <p>This page is under construction. Please check back later for  solutions.</p>
        </div>
      </div>
    </div>
  );
}