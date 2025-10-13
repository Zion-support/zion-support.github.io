import React from 'react';
import { Shield, Lock, Eye, AlertTriangle } from 'lucide-react';

export default function CybersecuritySolutionsPage() {
  const capabilities = [
    {
      title: "AI-Powered Security",
      description: "Advanced threat detection and prevention using artificial intelligence",
      icon: <Shield className="w-8 h-8" />
    },
    {
      title: "Data Protection",
      description: "Comprehensive data encryption and privacy protection solutions",
      icon: <Lock className="w-8 h-8" />
    },
    {
      title: "Network Monitoring",
      description: "Real-time network security monitoring and threat analysis",
      icon: <Eye className="w-8 h-8" />
    },
    {
      title: "Incident Response",
      description: "Rapid response and recovery from security incidents",
      icon: <AlertTriangle className="w-8 h-8" />
    }
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-8 text-center">
          Cybersecurity Solutions
        </h1>
        <p className="text-xl text-gray-300 mb-12 text-center max-w-3xl mx-auto">
          Protect your business with our comprehensive cybersecurity solutions
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {capabilities.map((capability, index) => (
            <div
              key={index}
              className="bg-gray-800 p-6 rounded-lg hover:bg-gray-700 transition-colors"
            >
              <div className="inline-flex p-3 rounded-lg bg-gradient-to-r from-red-500 to-orange-500 mb-4">
                {capability.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3">{capability.title}</h3>
              <p className="text-gray-300">{capability.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}