'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';

const AiCybersecurityPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>AI Cybersecurity Solutions - Zion Tech Group</title>
        <meta name="description" content="Protect your digital assets with AI-powered cybersecurity solutions and threat detection systems." />
      </Helmet>
      <div className="min-h-screen bg-gradient-to-br from-red-50 to-pink-100">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              AI Cybersecurity Solutions
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Protect your digital assets with advanced AI-powered cybersecurity solutions and real-time threat detection.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-semibold mb-4">Threat Detection</h3>
              <p className="text-gray-600">AI-powered systems to detect and respond to cyber threats in real-time.</p>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-semibold mb-4">Behavioral Analysis</h3>
              <p className="text-gray-600">Monitor user behavior patterns to identify potential security risks.</p>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-semibold mb-4">Automated Response</h3>
              <p className="text-gray-600">Automatically respond to security incidents and mitigate threats.</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AiCybersecurityPage;