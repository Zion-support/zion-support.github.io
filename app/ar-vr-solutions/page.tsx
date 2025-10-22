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
      <div className="min-h-screen bg-gradient-to-br from-pink-50 to-rose-100">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              AR/VR Solutions
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Create immersive experiences with augmented and virtual reality solutions for training, marketing, and entertainment.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-semibold mb-4">Virtual Training</h3>
              <p className="text-gray-600">Create immersive training experiences for employees and customers.</p>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-semibold mb-4">AR Applications</h3>
              <p className="text-gray-600">Develop augmented reality apps for mobile and wearable devices.</p>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-semibold mb-4">VR Experiences</h3>
              <p className="text-gray-600">Build virtual reality experiences for marketing and entertainment.</p>
            </div>
          </div>        </div>
      </div>
    </>
  );
};

export default ARVRSolutionsPage;