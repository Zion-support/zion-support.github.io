import React from 'react';
import { Helmet } from 'react-helmet-async';

export default function TutorialsPage() {
  return (
    <>
      <Helmet>
        <title>Tutorials - Zion Tech Group</title>
        <meta name="description" content="Learn with our comprehensive tutorials on AI and IT solutions." />
      </Helmet>
      
      <div className="min-h-screen bg-gray-900 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-8">Tutorials</h1>
            <p className="text-xl text-gray-300">
              Learn with our step-by-step tutorials.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}