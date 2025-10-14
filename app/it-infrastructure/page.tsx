'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';

export default function ItInfrastructurePage() {
  return (
    <>
      <Helmet>
        <title>IT Infrastructure - Zion Tech Group</title>
        <meta name="description" content="Comprehensive IT infrastructure solutions for your business needs." />
      </Helmet>
      <div className="min-h-screen bg-gray-900 text-white py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-8">IT Infrastructure</h1>
          <p className="text-gray-300 text-lg">
            This page is under development.
          </p>
        </div>
      </div>
    </>
  );
}