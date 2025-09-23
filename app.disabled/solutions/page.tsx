import React from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Solutions - Zion Tech Group',
  description: 'Comprehensive technology solutions for your business needs.',
  keywords: 'solutions, technology, business, AI, automation'
};

export default function SolutionsPage() {
  const solutions = [
    {
      title: 'AI-Powered Automation',
      description: 'Streamline your operations with intelligent automation solutions.',
      icon: '🤖',
      features: ['Process Automation', 'Intelligent Workflows', 'Predictive Analytics']
    },
    {
      title: 'Micro SaaS Development',
      description: 'Build and scale your software-as-a-service business.',
      icon: '💼',
      features: ['Custom SaaS Solutions', 'Scalable Architecture', 'Revenue Optimization']
    },
    {
      title: 'Enterprise IT Services',
      description: 'Complete IT infrastructure and support for large organizations.',
      icon: '🏢',
      features: ['Infrastructure Management', 'Security Solutions', '24/7 Support']
    },
    {
      title: 'Data Analytics',
      description: 'Transform your data into actionable business insights.',
      icon: '📊',
      features: ['Data Visualization', 'Predictive Modeling', 'Business Intelligence']
    },
    {
      title: 'Cloud Migration',
      description: 'Seamlessly move your infrastructure to the cloud.',
      icon: '☁️',
      features: ['Cloud Strategy', 'Migration Planning', 'Cost Optimization']
    },
    {
      title: 'Cybersecurity',
      description: 'Protect your business with advanced security solutions.',
      icon: '🔒',
      features: ['Threat Detection', 'Security Audits', 'Compliance Management']
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      <div className="container mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Our Solutions
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive technology solutions designed to drive your business forward
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {solutions.map((solution, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
              <div className="text-4xl mb-4">{solution.icon}</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">{solution.title}</h3>
              <p className="text-gray-600 mb-6">{solution.description}</p>
              <ul className="space-y-2">
                {solution.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-gray-700">
                    <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}