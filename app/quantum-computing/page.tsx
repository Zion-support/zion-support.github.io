'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';

const QuantumComputingPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Quantum Computing Solutions - Zion Tech Group</title>
        <meta name="description" content="Explore the future of computing with quantum solutions for complex problem-solving and optimization." />
      </Helmet>
      <div className="min-h-screen bg-gray-50">
        <div className="container mx-auto px-4 py-16">
          <h1 className="text-4xl font-bold text-center mb-8">Quantum Computing Solutions</h1>
          <p className="text-lg text-gray-600 text-center max-w-3xl mx-auto">
            Explore the future of computing with quantum solutions for complex problem-solving.
          </p>
        </div>
      </div>
    </>
  );
};

export default QuantumComputingPage;