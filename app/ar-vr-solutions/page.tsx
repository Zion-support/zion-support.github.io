'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';

const ARVRSolutionsPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>AR/VR Solutions - Zion Tech Group</title>
        <meta name="description" content="Create immersive experiences with augmented and virtual reality solutions for training, marketing, and entertainment." />
      </Helmet>
      <div className="min-h-screen bg-gray-50">
        <div className="container mx-auto px-4 py-16">
          <h1 className="text-4xl font-bold text-center mb-8">AR/VR Solutions</h1>
          <p className="text-lg text-gray-600 text-center max-w-3xl mx-auto">
            Create immersive experiences with augmented and virtual reality solutions.
          </p>
        </div>
      </div>
    </>
  );
};

export default ARVRSolutionsPage;