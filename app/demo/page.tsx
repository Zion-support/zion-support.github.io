import React from 'react';
import { Helmet } from 'react-helmet-async';

export default function DemoPage() {
  return (
    <>
      <Helmet>
        <title>Demo - Zion Tech Group | See Our Solutions in Action</title>
        <meta name="description" content="Schedule a demo to see our AI and IT solutions in action." />
      </Helmet>

      <div className="min-h-screen bg-slate-900 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-bold text-white mb-6">Schedule a Demo</h1>
            <p className="text-xl text-gray-300 mb-12">See our solutions in action</p>
          </div>
        </div>
      </div>
    </>
  );
}