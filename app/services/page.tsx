import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Services | Zion Tech Group - AI, Micro SaaS, FinTech, HealthTech & EdTech Solutions',
  description: 'Comprehensive technology services including AI solutions, micro SaaS development, IT services, and specialized industry solutions.',
  keywords: 'AI services, micro SaaS, IT services, blockchain, cloud solutions, enterprise technology'
};

export default function ServicesOverviewPage() {
  const serviceCategories = [
    {
      title: 'AI Solutions',
      description: 'Transform your business with cutting-edge artificial intelligence technologies.',
      href: '/services/ai-solutions',
      icon: '🤖',
      features: ['Machine Learning', 'Natural Language Processing', 'Computer Vision', 'AI Agents']
    },
    {
      title: 'Micro SaaS Development',
      description: 'Build and launch your own micro SaaS products with our full-stack expertise.',
      href: '/services/micro-saas',
      icon: '💼',
      features: ['Full-Stack Development', 'API Integration', 'Payment Processing', 'User Management']
    },
    {
      title: 'IT Services',
      description: 'Comprehensive IT solutions including cloud migration and cybersecurity.',
      href: '/services/it-solutions',
      icon: '⚙️',
      features: ['Cloud Migration', 'Cybersecurity', 'Infrastructure Management', 'Technical Support']
    },
    {
      title: 'Blockchain Solutions',
      description: 'Leverage blockchain technology for secure and transparent applications.',
      href: '/services/blockchain',
      icon: '⛓️',
      features: ['Smart Contracts', 'DeFi Applications', 'NFT Marketplaces', 'Blockchain Integration']
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Our Services
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive technology solutions designed to transform your business and drive real results.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {serviceCategories.map((service, index) => (
            <Link
              key={index}
              href={service.href}
              className="block p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 border border-gray-200 hover:border-blue-300"
            >
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">{service.title}</h3>
              <p className="text-gray-600 mb-4">{service.description}</p>
              <ul className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="text-sm text-gray-600 flex items-center">
                    <span className="text-green-500 mr-2">✓</span>
                    {feature}
                  </li>
                ))}
              </ul>
            </Link>
          ))}
        </div>

        <div className="bg-white p-8 rounded-lg shadow-md mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">Why Choose Zion Tech Group?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🎯</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Focused Solutions</h3>
              <p className="text-gray-600">We specialize in delivering targeted solutions that address your specific business challenges.</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">⚡</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Fast Delivery</h3>
              <p className="text-gray-600">We deliver high-quality solutions quickly without compromising on performance or security.</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🤝</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Partnership</h3>
              <p className="text-gray-600">We work closely with you as a trusted technology partner for long-term success.</p>
            </div>
          </div>
        </div>

        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Ready to Get Started?</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Let's discuss your project and discover how our solutions can accelerate your business growth.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              Get a Quote
            </Link>
            <Link
              href="/about"
              className="border border-blue-600 text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
            >
              Learn More About Us
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}