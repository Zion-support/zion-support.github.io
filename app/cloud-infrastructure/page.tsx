'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';

export default function CloudInfrastructure() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Cloud Infrastructure | Zion Tech Group</title>
        <meta name="description" content="Professional cloud infrastructure services by Zion Tech Group." />
      </Helmet>
      
      <div className="container mx-auto px-4 py-16">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-8">
            Cloud Infrastructure Solutions
          </h1>
          <p className="text-xl text-gray-300 mb-8">
            Professional cloud infrastructure services tailored to your business needs.
          </p>
        </div>
      </div>
    </div>
  );
}