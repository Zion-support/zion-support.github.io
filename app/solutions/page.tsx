import React from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Solutions | Zion Tech Group',
  description: 'Comprehensive technology solutions for modern businesses. AI, automation, and digital transformation services.',
  keywords: 'solutions, technology, AI, automation, digital transformation, business',
  authors: [{ name: 'Zion Tech Group' }],
  openGraph: {
    title: 'Solutions | Zion Tech Group',
    description: 'Comprehensive technology solutions for modern businesses.',
    type: 'website',
    locale: 'en_US',
    siteName: 'Zion Tech Group',
  },
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

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Technology Solutions
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100 max-w-3xl mx-auto">
              Comprehensive technology solutions for modern businesses. AI, automation, and digital transformation services.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="bg-white text-blue-900 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
              >
                Get Started
              </a>
              <a
                href="/services"
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-900 transition-colors"
              >
                View Services
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Solutions Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Solutions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We provide end-to-end technology solutions to help your business thrive in the digital age.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {solutions.map((solution, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow">
                <div className="text-4xl mb-4">{solution.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{solution.title}</h3>
                <p className="text-gray-600 mb-6">{solution.description}</p>
                <ul className="space-y-2">
                  {solution.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-600">
                      <span className="text-green-500 mr-2">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-600 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Let's discuss your project and create a custom solution that drives real business value.
          </p>
          <a
            href="/contact"
            className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors inline-block"
          >
            Start Your Project
          </a>
        </div>
      </section>
    </div>
  );
}