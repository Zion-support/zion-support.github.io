import React from 'react';
import Link from 'next/link';
import { ArrowRightIcon } from '@heroicons/react/24/outline';

export const metadata = {
  title: "Solutions | Zion Tech Group",
  description: "Professional solutions for your business needs.",
  keywords: "solutions, business, technology"
};

const solutions = [
  {
    icon: '🤖',
    title: 'AI Solutions',
    description: 'Advanced artificial intelligence solutions to automate and optimize your business processes.',
    features: [
      'Machine Learning Models',
      'Natural Language Processing',
      'Computer Vision',
      'Predictive Analytics',
      'Automated Decision Making'
    ]
  },
  {
    icon: '⚡',
    title: 'Automation',
    description: 'Streamline your operations with intelligent automation solutions.',
    features: [
      'Workflow Automation',
      'Process Optimization',
      'Data Integration',
      'Task Scheduling',
      'Performance Monitoring'
    ]
  },
  {
    icon: '🔧',
    title: 'Custom Development',
    description: 'Tailored software solutions built specifically for your business needs.',
    features: [
      'Web Applications',
      'Mobile Apps',
      'API Development',
      'Database Design',
      'System Integration'
    ]
  },
  {
    icon: '📊',
    title: 'Analytics & Insights',
    description: 'Data-driven insights to help you make informed business decisions.',
    features: [
      'Business Intelligence',
      'Data Visualization',
      'Performance Metrics',
      'Trend Analysis',
      'Custom Dashboards'
    ]
  },
  {
    icon: '☁️',
    title: 'Cloud Solutions',
    description: 'Scalable cloud infrastructure and services for modern businesses.',
    features: [
      'Cloud Migration',
      'Infrastructure as Code',
      'Container Orchestration',
      'Auto-scaling',
      'Disaster Recovery'
    ]
  },
  {
    icon: '🔒',
    title: 'Security & Compliance',
    description: 'Comprehensive security solutions to protect your business and data.',
    features: [
      'Security Audits',
      'Compliance Management',
      'Threat Detection',
      'Data Encryption',
      'Access Control'
    ]
  }
];

export default function SolutionsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Our Solutions
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive AI and technology solutions designed to transform your business operations and drive growth.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {solutions.map((solution, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow">
              <div className="text-4xl mb-4">{solution.icon}</div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">{solution.title}</h3>
              <p className="text-gray-600 mb-6">{solution.description}</p>
              <ul className="space-y-2">
                {solution.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="text-gray-600 flex items-center">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Let's discuss how our solutions can help transform your business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors inline-flex items-center"
            >
              Contact Us
              <ArrowRightIcon className="h-5 w-5 ml-2" />
            </Link>
            <Link
              href="/services"
              className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition-colors"
            >
              View Services
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}