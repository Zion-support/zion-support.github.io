'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';

const AutonomousSystemsPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Autonomous Systems - Zion Tech Group</title>
        <meta name="description" content="Develop intelligent autonomous systems with AI-powered robotics and automation solutions." />
      </Helmet>
      <div className="min-h-screen bg-gradient-to-br from-cyan-50 to-blue-100">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Autonomous Systems
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Develop intelligent autonomous systems with AI-powered robotics and automation solutions.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-semibold mb-4">Robotic Systems</h3>
              <p className="text-gray-600">Develop autonomous robots for various industrial applications.</p>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-semibold mb-4">Self-Driving Vehicles</h3>
              <p className="text-gray-600">Create autonomous vehicle systems with advanced AI.</p>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-semibold mb-4">Drones</h3>
              <p className="text-gray-600">Build autonomous drone systems for various use cases.</p>
            </div>
          </div>
        </div> (Fix merge conflicts in TypeScript files)
      </div>
    </>
  );
};

export default AutonomousSystemsPage;