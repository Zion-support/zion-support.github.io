'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';

export default function DemoPage() {
  return (
    <div className="min-h-screen bg-white">
      <Helmet>
        <title>Demo - Zion Tech Group</title>
        <meta name="description" content="Demo of Zion Tech Group services." />
      </Helmet>
      
      <div className="container mx-auto px-4 py-16">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">
            Demo
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Experience our AI and IT solutions in action.
          </p>
        </div>
      </div>
    </div>
  );
}
