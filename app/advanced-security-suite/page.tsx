import React from 'react';
import { Helmet } from 'react-helmet-async';

export default function AdvancedSecuritySuitePage() {
  return (
    <>
      <Helmet>
        <title>Advanced Security Suite - Zion Tech Group</title>
        <meta name="description" content="Comprehensive security solutions for enterprise-level protection and threat management." />
      </Helmet>
      
      <div className="min-h-screen bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">Advanced Security Suite</h1>
          <div className="prose max-w-none">
            <p className="text-lg text-gray-600 mb-6">
              Our advanced security suite provides comprehensive protection for your digital infrastructure 
              with cutting-edge threat detection, prevention, and response capabilities.
            </p>
            
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Security Features</h2>
            <ul className="list-disc list-inside text-gray-600 mb-6 space-y-2">
              <li>Real-time threat monitoring</li>
              <li>Advanced firewall protection</li>
              <li>Intrusion detection and prevention</li>
              <li>Security incident response</li>
              <li>Compliance management</li>
              <li>Security awareness training</li>
            </ul>
            
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Why Choose Our Security Suite</h2>
            <p className="text-gray-600 mb-6">
              Our security solutions are designed to protect your business from evolving cyber threats 
              while ensuring compliance with industry standards and regulations.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}