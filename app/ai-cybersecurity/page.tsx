'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';


const AiCybersecurityPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>AI Cybersecurity Solutions - Zion Tech Group</title>
        <meta name="description" content="Protect your digital assets with AI-powered cybersecurity solutions for threat detection and prevention." />
      </Helmet>
      <div className="min-h-screen bg-gray-50">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold text-gray-900 mb-6">
              AI Cybersecurity Solutions
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Protect your organization with AI-powered cybersecurity solutions that detect and prevent threats in real-time.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-4">Threat Detection</h3>
              <p className="text-gray-600">AI-powered threat detection and anomaly identification.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-4">Incident Response</h3>
              <p className="text-gray-600">Automated incident response and security orchestration.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-4">Vulnerability Assessment</h3>
              <p className="text-gray-600">Continuous security assessment and vulnerability scanning.</p>
            </div>
          </div>
        </div>
      </div>
    </>
