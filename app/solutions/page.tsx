import React from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Solutions - Zion Tech Group',
  description: 'Professional solutions services to help your business grow and succeed.',
  keywords: 'solutions, business solutions, professional services'
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
    <div className="max-w-6xl mx-auto px-4 py-12">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold text-gray-900 mb-6">
          Solutions
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Professional solutions services to help your business grow and succeed.
        </p>
      </div>
      <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 rounded-xl p-8 mb-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
          Coming Soon
        </h2>
        <p className="text-lg text-gray-600 text-center">
          This service is currently under development. Please contact us for more information.
        </p>
      </div>
      <div className="text-center">
        <a
          href="mailto:kleber@ziontechgroup.com?subject=Solutions Inquiry"
          className="inline-block px-8 py-4 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors"
        >
          Contact Us
        </a>
      </div>
    </div>
  );
}
