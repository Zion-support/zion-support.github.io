'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-white">
      <Helmet>
        <title>Terms of Service - Zion Tech Group</title>
        <meta name="description" content="Terms of Service for Zion Tech Group services." />
      </Helmet>
      
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">
            Terms of Service
          </h1>
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-600 mb-6">
              These terms of service govern your use of our website and services. By using our services, you agree to these terms.
            </p>
            
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Acceptance of Terms</h2>
            <p className="text-gray-600 mb-6">
              By accessing and using our services, you accept and agree to be bound by the terms and provision of this agreement.
            </p>
            
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Use License</h2>
            <p className="text-gray-600 mb-6">
              Permission is granted to temporarily download one copy of the materials on our website for personal, non-commercial transitory viewing only.
            </p>
            
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Contact Information</h2>
            <p className="text-gray-600 mb-6">
              If you have any questions about these terms, please contact us.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}