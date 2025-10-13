'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';

export default function Page() {
  return (
    <>
      <Helmet>
        <title>AI Voice Assistant Pro - Zion Tech Group</title>
        <meta name="description" content="Professional AI voice assistant pro services by Zion Tech Group." />
      </Helmet>
      
      <div className="min-h-screen bg-white">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-8">
              AI Voice Assistant Pro
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Professional AI voice assistant pro solutions tailored to your business needs.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
