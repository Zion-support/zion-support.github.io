import React from 'react';
import { Helmet } from 'react-helmet-async';

export default function SupportPage() {
  return (
    <>
      <Helmet>
        <title>Support - Zion Tech Group</title>
        <meta name="description" content="Get support for your AI and IT solutions from our expert team." />
      </Helmet>
      
      <div className="min-h-screen bg-gray-900 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-8">Support</h1>
            <p className="text-xl text-gray-300">
              Get help from our expert support team.
            </p>
          </div>
        </div>
      </div>
    </>;
);
}