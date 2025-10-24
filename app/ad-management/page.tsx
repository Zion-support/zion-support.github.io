'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';

const AdManagementPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Ad Management - Zion Tech Group</title>
        <meta name="description" content="Advanced AI-powered ad management solutions for digital marketing success" />
        <meta name="keywords" content="ad management, digital marketing, AI advertising, campaign optimization" />
      </Helmet>
      <div className="min-h-screen bg-gray-50">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-6">
              AI-Powered Ad Management
            </h1>
            <p className="text-lg text-gray-600 mb-8">
              Maximize your advertising ROI with intelligent campaign management
            </p>
            <button className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors">
              Get Started Today
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default AdManagementPage;