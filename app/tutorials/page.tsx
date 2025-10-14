import React from 'react';
import { Helmet } from 'react-helmet-async';

const TutorialsPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      <Helmet>
        <title>Tutorials - Zion Tech Group</title>
        <meta name="description" content="Zion Tech Group tutorials page." />
      </Helmet>
      
      <div className="container mx-auto px-4 py-16">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">Tutorials</h1>
          <p className="text-xl text-gray-600">
            Welcome to our tutorials page.
          </p>
        </div>
      </div>
    </div>
  );
};

export default TutorialsPage;
