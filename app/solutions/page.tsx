import React from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Solutions - Zion Tech Group',
  description: 'Professional solutions services to help your business grow and succeed.',
  keywords: 'solutions, business solutions, professional services'
};

export default function SolutionsPage() {
  const solutions = [
    {
      title: 'AI-Powered Analytics',
      description: 'Transform your data into actionable insights with our advanced AI analytics platform.',
      icon: '📊',
      features: ['Real-time data processing', 'Predictive analytics', 'Custom dashboards', 'Automated reporting']
    },
    {
      title: 'Micro SaaS Development',
      description: 'Build and scale your software-as-a-service platform with our proven development framework.',
      icon: '⚡',
      features: ['Rapid prototyping', 'Scalable architecture', 'Cloud deployment', 'API integration']
    },
    {
      title: 'Digital Transformation',
      description: 'Modernize your business processes with our comprehensive digital transformation services.',
      icon: '🔄',
      features: ['Process automation', 'Legacy system migration', 'Cloud adoption', 'Change management']
    },
    {
      title: 'Blockchain Solutions',
      description: 'Leverage blockchain technology to enhance security, transparency, and efficiency.',
      icon: '⛓️',
      features: ['Smart contracts', 'DeFi integration', 'NFT platforms', 'Security auditing']
    }
  ];

  const steps = [
    {
      step: '01',
      title: 'Discovery & Assessment',
      description: 'We analyze your current systems, identify opportunities, and develop a comprehensive strategy.',
      icon: '🔍'
    },
    {
      step: '02',
      title: 'Design & Planning',
      description: 'Our team creates detailed technical specifications and project roadmaps tailored to your needs.',
      icon: '📋'
    },
    {
      step: '03',
      title: 'Development & Implementation',
      description: 'We build and deploy your solution using cutting-edge technologies and best practices.',
      icon: '⚙️'
    },
    {
      step: '04',
      title: 'Support & Optimization',
      description: 'Ongoing maintenance, monitoring, and continuous improvement to ensure optimal performance.',
      icon: '🚀'
    }
  ];

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