import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Shield, CheckCircle } from 'lucide-react';

export default function CybersecuritySolutionsPage() {
  const capabilities = [
    {
      title: "AI-Powered Security",
      description: "Advanced threat detection and prevention using artificial intelligence",
      icon: <Shield className="w-8 h-8" />
    },
    {
      title: "Real-time Monitoring",
      description: "24/7 security monitoring and incident response",
      icon: <CheckCircle className="w-8 h-8" />
    }
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Helmet>
        <title>Cybersecurity Solutions - Zion Tech Group</title>
        <meta name="description" content="Advanced cybersecurity solutions by Zion Tech Group" />
      </Helmet>
      <div className="container mx-auto px-4 py-20">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-8">Cybersecurity Solutions</h1>
          <p className="text-xl text-gray-300 mb-8">
            Comprehensive security solutions for modern businesses
          </p>
        </div>
      </div>
    </div>
  );
}