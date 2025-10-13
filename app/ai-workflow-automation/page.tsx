import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Brain, Shield, Zap } from 'lucide-react';

export default function PagePage() {
  const features = [
    {
      title: 'Intelligent Process Mapping',
      description: 'AI-powered workflow analysis and optimization',
      icon: Brain
    },
    {
      title: 'Automated Task Assignment',
      description: 'Smart task distribution based on team capabilities',
      icon: Shield
    },
    {
      title: 'Real-time Monitoring',
      description: 'Continuous workflow performance tracking',
      icon: Zap
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <Helmet>
        <title>AI Workflow Automation - Zion AI</title>
        <meta name="description" content="Transform your business processes with AI-powered workflow automation solutions" />
      </Helmet>
      
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            AI Workflow Automation
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Streamline your business processes with intelligent automation solutions
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <div key={index} className="bg-white rounded-lg p-6 shadow-lg">
              <feature.icon className="w-12 h-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
