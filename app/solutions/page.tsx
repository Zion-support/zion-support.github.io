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
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Technology Solutions
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100 max-w-3xl mx-auto">
              Comprehensive technology solutions designed to transform your business 
              and drive sustainable growth
            </p>
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
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Tailored technology solutions to meet your specific business needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {solutions.map((solution, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
                <div className="text-4xl mb-4">{solution.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{solution.title}</h3>
                <p className="text-gray-600 mb-4">{solution.description}</p>
                <ul className="space-y-2">
                  {solution.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-500">
                      <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Process
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              A proven methodology that ensures successful project delivery
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">{step.icon}</span>
                </div>
                <div className="text-sm font-semibold text-blue-600 mb-2">{step.step}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl mb-8 text-blue-100">
            Let&apos;s discuss how our solutions can help you achieve your goals
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
      </section>
    </div>
  );
}