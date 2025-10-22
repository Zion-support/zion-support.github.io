'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';

const AutonomousSystemsPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Autonomous Systems - Zion Tech Group</title>
        <meta name="description" content="Develop intelligent autonomous systems for robotics, vehicles, and smart infrastructure." />
      </Helmet>
      <div className="min-h-screen bg-gray-50">
        <div className="container mx-auto px-4 py-16">
          <h1 className="text-4xl font-bold text-center mb-8">Autonomous Systems</h1>
          <p className="text-lg text-gray-600 text-center max-w-3xl mx-auto">
            Develop intelligent autonomous systems for robotics and smart infrastructure.
          </p>
        </div>
      </div>
    </>
  );
};

export default AutonomousSystemsPage;