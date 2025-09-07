import React from 'react'
import { Metadata } from 'next'
export const metadata: Metadata = {
  title: 'Solutions - Zion Tech Group',
  description: 'Professional solutions services to help your business grow and succeed.',
  keywords: 'solutions, business solutions, professional services'
};

export default function SolutionsPage() {
  const solutions = [
    {
      title: 'AI & Machine Learning',
      description: 'Intelligent solutions powered by artificial intelligence and machine learning',
      icon: '🤖',
      features: ['Custom AI models', 'Natural language processing', 'Computer vision', 'Predictive analytics']
    },
    {
      title: 'Cloud Solutions',
      description: 'Scalable cloud infrastructure and migration services',
      icon: '☁️',
      features: ['Cloud migration', 'Infrastructure as Code', 'DevOps automation', 'Cost optimization']
    },
    {
      title: 'Web Development',
      description: 'Modern web applications and e-commerce platforms',
      icon: '🌐',
      features: ['React/Next.js apps', 'E-commerce platforms', 'API development', 'Performance optimization']
    },
    {
      title: 'Mobile Development',
      description: 'Native and cross-platform mobile applications',
      icon: '📱',
      features: ['iOS & Android apps', 'React Native', 'Flutter', 'App store deployment']
    },
    {
      title: 'Blockchain Solutions',
      description: 'Decentralized applications and smart contracts',
      icon: '⛓️',
      features: ['Smart contracts', 'DeFi protocols', 'NFT platforms', 'Web3 applications']
    },
    {
      title: 'Data Analytics',
      description: 'Business intelligence and data visualization tools',
      icon: '📊',
      features: ['Data pipelines', 'Real-time analytics', 'Custom dashboards', 'Machine learning insights']
    }
  ];

  ]
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
