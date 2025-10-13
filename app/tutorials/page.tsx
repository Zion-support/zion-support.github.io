import React from 'react';
import { Helmet } from 'react-helmet-async';

export default function TutorialsPage() {
  return (
    <>
      <Helmet>
        <title>Tutorials - Zion Tech Group | Learn AI and IT Technologies</title>
        <meta name="description" content="Learn AI and IT technologies with our comprehensive tutorials and guides." />
      </Helmet>

      <div className="min-h-screen bg-slate-900 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-bold text-white mb-6">Tutorials</h1>
            <p className="text-xl text-gray-300 mb-12">Coming Soon - Learn with our step-by-step guides</p>
          </div>
        </div>
      </div>
    </>
  );
}