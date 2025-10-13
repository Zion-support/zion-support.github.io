import React from 'react';
import { Helmet } from 'react-helmet-async';
<<<<<<< HEAD

export default function PagePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Helmet>
        <title>Page - Zion Tech Group</title>
        <meta name="description" content="Advanced Page solutions by Zion Tech Group" />
      </Helmet>
      
      <div className="container mx-auto px-4 py-16">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Page
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            This page is under development. Please check back later.
=======
import { Shield, Lock, Eye } from 'lucide-react';

export default function QuantumDataEncryptionVaultPage() {
  const features = [
    {
      title: "Quantum-Grade Encryption",
      description: "Military-grade encryption using quantum-resistant algorithms",
      icon: <Shield className="w-8 h-8" />
    },
    {
      title: "Zero-Knowledge Architecture",
      description: "Your data is encrypted before it leaves your device",
      icon: <Lock className="w-8 h-8" />
    },
    {
      title: "Advanced Access Control",
      description: "Multi-factor authentication and role-based permissions",
      icon: <Eye className="w-8 h-8" />
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Quantum Data Encryption Vault - Zion Tech Group</title>
        <meta name="description" content="Secure your data with quantum-grade encryption and zero-knowledge architecture." />
      </Helmet>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Quantum Data Encryption Vault
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Protect your most sensitive data with quantum-grade encryption and zero-knowledge architecture.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center text-white mx-auto mb-6">
                {feature.icon}
              </div>
              <h3 className="text-2xl font-semibold text-white mb-4">{feature.title}</h3>
              <p className="text-gray-300">{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            Ready to Secure Your Data?
          </h2>
          <p className="text-xl text-gray-300 mb-8 leading-relaxed">
            Protect your most sensitive data with quantum-grade encryption and zero-knowledge architecture. 
            Start your quantum security journey today.
>>>>>>> cursor/fix-errors-and-merge-to-main-9be1
          </p>
        </div>
      </div>
    </div>
  );
}