import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Services | Zion Tech Group',
  description: 'Explore our comprehensive range of AI, micro SaaS, and IT services designed to transform your business.',
};

const services = [
  {
    name: 'AI Solutions',
    description: 'Custom AI models, automation, and intelligent systems that transform your business operations.',
    icon: '🤖',
    color: 'blue',
    features: [
      'Machine Learning Models',
      'Natural Language Processing',
      'Computer Vision',
      'Predictive Analytics',
      'AI Automation'
    ],
    pricing: 'Starting at $99/month',
    href: '/services/ai-services'
  },
  {
    name: 'Micro SaaS Development',
    description: 'End-to-end SaaS product development with modern architecture and scalable infrastructure.',
    icon: '🚀',
    color: 'purple',
    features: [
      'Custom Web Applications',
      'API Development',
      'User Authentication',
      'Payment Integration',
      'Analytics Dashboard'
    ],
    pricing: 'Starting at $5,000',
    href: '/services/micro-saas'
  },
  {
    name: 'IT Services',
    description: 'Comprehensive IT infrastructure, cloud migration, and cybersecurity solutions.',
    icon: '💻',
    color: 'green',
    features: [
      'Cloud Migration',
      'DevOps & CI/CD',
      'Infrastructure Management',
      'Security Solutions',
      '24/7 Support'
    ],
    pricing: 'Starting at $299/month',
    href: '/services/it-services'
  },
  {
    name: 'Blockchain Solutions',
    description: 'Smart contracts, DeFi platforms, and blockchain integration for secure operations.',
    icon: '⛓️',
    color: 'indigo',
    features: [
      'Smart Contract Development',
      'DeFi Protocols',
      'NFT Marketplaces',
      'Token Economics',
      'Security Auditing'
    ],
    pricing: 'Starting at $2,500',
    href: '/services/blockchain'
  },
  {
    name: 'Data Analytics',
    description: 'Transform raw data into actionable insights with advanced analytics and visualization.',
    icon: '📊',
    color: 'orange',
    features: [
      'Data Warehousing',
      'Business Intelligence',
      'Real-time Dashboards',
      'Predictive Modeling',
      'Data Visualization'
    ],
    pricing: 'Starting at $199/month',
    href: '/services/analytics'
  },
  {
    name: 'Cybersecurity',
    description: 'Comprehensive security solutions to protect your digital assets and ensure compliance.',
    icon: '🔒',
    color: 'red',
    features: [
      'Security Audits',
      'Penetration Testing',
      'Compliance Consulting',
      'Incident Response',
      'Security Training'
    ],
    pricing: 'Starting at $999/month',
    href: '/services/security'
  }
];

const addOns = [
  {
    name: 'AI Model Training',
    price: '$299',
    period: '/model',
    description: 'Custom AI model training for your specific use case',
    icon: '⚡'
  },
  {
    name: 'Security Audit',
    price: '$1,999',
    period: '/audit',
    description: 'Comprehensive security assessment and hardening',
    icon: '🛡️'
  },
  {
    name: 'Cloud Migration',
    price: '$4,999',
    period: '/project',
    description: 'Complete cloud infrastructure migration service',
    icon: '☁️'
  },
  {
    name: 'Team Training',
    price: '$199',
    period: '/person',
    description: 'AI and technology training for your team',
    icon: '👥'
  }
];

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-700 text-white py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-6">
            Our Services
          </h1>
          <p className="text-xl sm:text-2xl mb-8 opacity-90 max-w-3xl mx-auto">
            Comprehensive technology solutions designed to accelerate your digital transformation and drive business growth.
          </p>
        </div>
      </section>

      {/* Main Services */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Core Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From AI-powered automation to complete IT infrastructure, we provide end-to-end solutions for your business needs.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow border border-gray-100">
                <div className="text-4xl mb-6">{service.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{service.name}</h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
                
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-600">
                      <span className="text-green-500 mr-2">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <div className="border-t pt-4">
                  <p className="text-lg font-semibold text-blue-600 mb-4">{service.pricing}</p>
                  <Link
                    href={service.href}
                    className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium"
                  >
                    Learn More <span className="ml-1">→</span>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-16 bg-gray-50 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Additional Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {addOns.map((addon, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-6 text-center">
                <div className="text-3xl mb-4">{addon.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{addon.name}</h3>
                <div className="flex items-baseline justify-center mb-4">
                  <span className="text-2xl font-bold text-white">{addon.price}</span>
                  <span className="text-gray-400 ml-1">{addon.period}</span>
                </div>
                <p className="text-gray-300 text-sm mb-6">{addon.description}</p>
                <a
                  href="/contact"
                  className="bg-slate-700 text-white hover:bg-slate-600 px-6 py-2 rounded-lg font-semibold text-sm transition-all"
                >
                  Learn More
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-700 text-white py-16 px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-lg sm:text-xl mb-8 opacity-90">
            Contact us today to discuss your project requirements and get a customized solution.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6">
            <a
              href="tel:+13024640950"
              className="bg-white text-blue-700 hover:bg-gray-100 px-8 py-3 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105"
            >
              Call Us: +1 302 464 0950
            </a>
            <a
              href="mailto:kleber@ziontechgroup.com"
              className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-700 px-8 py-3 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105"
            >
              Email Us
            </a>
          </div>
          <p className="text-sm mt-8 opacity-80">
            364 E Main St STE 1008, Middletown DE 19709
          </p>
        </div>
      </section>
    </div>
  );
}