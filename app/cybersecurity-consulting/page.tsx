import React from 'react';
import { Link } from 'react-router-dom';
import { Shield, Lock, Eye, Brain } from 'lucide-react';
import Layout from '../layout';

export default function CybersecurityConsulting() {
  const features = [
    {
      icon: <Shield className="w-6 h-6 text-cyan-400" />,
      title: 'Security Assessment',
      description: 'Comprehensive security audits to identify vulnerabilities and assess your current security posture'
    },
    {
      icon: <Lock className="w-6 h-6 text-purple-400" />,
      title: 'Compliance Management',
      description: 'Ensure compliance with GDPR, HIPAA, SOX, PCI-DSS, and other regulatory requirements'
    },
    {
      icon: <Eye className="w-6 h-6 text-yellow-400" />,
      title: 'Threat Intelligence',
      description: 'Advanced threat detection and response with 24/7 monitoring and incident management'
    },
    {
      icon: <Brain className="w-6 h-6 text-green-400" />,
      title: 'AI-Powered Security',
      description: 'Leverage artificial intelligence for advanced threat detection and automated response'
    }
  ];

  return (
    <Layout>
      <div className="min-h-screen bg-gray-900">
        <div className="container mx-auto px-4 py-20">
          <h1 className="text-4xl font-bold text-white mb-8">Cybersecurity Consulting</h1>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-gray-800 p-6 rounded-lg">
                <div className="flex items-center mb-4">
                  {feature.icon}
                  <h3 className="text-xl font-semibold text-white ml-3">{feature.title}</h3>
                </div>
                <p className="text-gray-300">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
}
