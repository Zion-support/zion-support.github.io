'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';

export default function MedicalRecordsManagerPage() {
  return (
    <>
      <Helmet>
        <title>Medical Records Manager - Zion Tech Group</title>
        <meta name="description" content="Secure medical records management solutions powered by AI." />
      </Helmet>
      <div className="min-h-screen bg-gray-900 text-white py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-8">Medical Records Manager</h1>
          <p className="text-gray-300 text-lg">
            This page is under development.
          </p>
        </div>
      </div>
    </>
  );
}