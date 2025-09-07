import React from 'react';
import Head from 'next/head';

export default function QuantumLogistics() {
  return (
    <>
      <Head>
        <title>quantum-logistics | Zion Tech Group</title>
        <meta name="description" content="quantum-logistics page" />
      </Head>
      <div className="min-h-screen bg-gray-50 py-20">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-6">
              quantum-logistics
            </h1>
            <p className="text-xl text-gray-600">
              This is the quantum-logistics page.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}