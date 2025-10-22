'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';

const IoTEdgeComputingPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>IoT & Edge Computing - Zion Tech Group</title>
        <meta name="description" content="Connect and process data at the edge with IoT solutions and edge computing infrastructure." />
      </Helmet>
      <div className="min-h-screen bg-gray-50">
        <div className="container mx-auto px-4 py-16">
          <h1 className="text-4xl font-bold text-center mb-8">IoT & Edge Computing</h1>
          <p className="text-lg text-gray-600 text-center max-w-3xl mx-auto">
            Connect and process data at the edge with IoT solutions and edge computing infrastructure.
          </p>
        </div>
      </div>
    </>
  );
};

export default IoTEdgeComputingPage;