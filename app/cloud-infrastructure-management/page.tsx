import React from 'react';
import { Helmet } from 'react-helmet-async';

export default function CloudInfrastructureManagementPage() {
  return (
    <>
      <Helmet>
        <title>Cloud Infrastructure Management - Zion Tech Group</title>
        <meta name="description" content="Professional cloud infrastructure management solutions for modern businesses." />
      </Helmet>
      
      <div className="min-h-screen bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">Cloud Infrastructure Management</h1>
          <p className="text-lg text-gray-600">
            Professional cloud infrastructure management solutions for modern businesses.
          </p>
        </div>
      </div>
    </>
  );
}