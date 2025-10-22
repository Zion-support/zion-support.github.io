'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';

const AiCybersecurityPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>AI Cybersecurity Solutions - Zion Tech Group</title>
        <meta name="description" content="Protect your digital assets with AI-powered cybersecurity solutions, threat detection, and automated response systems." />
      </Helmet>
      <div className="min-h-screen bg-gray-50">
        <div className="container mx-auto px-4 py-16">
          <h1 className="text-4xl font-bold text-center mb-8">AI Cybersecurity Solutions</h1>
          <p className="text-lg text-gray-600 text-center max-w-3xl mx-auto">
            Protect your digital assets with AI-powered threat detection and automated cybersecurity solutions.
          </p>
        </div>
      </div>
    </>
  );
};

export default AiCybersecurityPage;