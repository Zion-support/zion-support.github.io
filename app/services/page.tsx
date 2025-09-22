import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Services - Zion Tech Group',
  description: 'Comprehensive AI solutions, micro SaaS development, and IT services by Zion Tech Group.',
  keywords: 'AI services, micro SaaS, IT solutions, technology consulting, automation',
};

export default function ServicePage() {
  const serviceCategories = [
    {
      title: 'AI Solutions',
      description: 'Cutting-edge artificial intelligence services',
      services: [
        'AI Chatbot Development',
        'AI Content Generation',
        'AI Data Analytics',
        'AI Customer Support',
        'AI Marketing Automation',
        'AI Project Management',
        'AI Financial Analytics',
        'AI Healthcare Solutions',
        'AI Testing Automation',
        'AI Video Generation',
      ],
      color: 'from-blue-500 to-blue-700',
      href: '/services/ai-services',
    },
    {
      title: 'Micro SaaS',
      description: 'Scalable micro software-as-a-service applications',
      services: [
        'Custom SaaS Development',
        'API Development',
        'Cloud Migration',
        'Database Optimization',
        'Automation Tools',
        'Workflow Builders',
        'Project Management Suites',
        'CRM Solutions',
        'Analytics Dashboards',
        'Email Automation',
      ],
      color: 'from-purple-500 to-purple-700',
      href: '/services/micro-saas',
    },
    {
      title: 'IT Services',
      description: 'Comprehensive information technology solutions',
      services: [
        'Cybersecurity Solutions',
        'Cloud Services',
        'DevOps Automation',
        'Software Development',
        'Mobile App Development',
        'Web Development',
        'IT Consulting',
        'System Integration',
        'Network Security',
        'Data Analytics',
      ],
      color: 'from-green-500 to-green-700',
      href: '/services/it-services',
    },
  ];

  const featuredServices = [
    {
      name: 'AI-Powered Analytics Dashboard',
      description: 'Transform your data into actionable insights with our advanced AI analytics platform.',
      href: '/services/ai-analytics-dashboard',
      icon: '📊',
    },
    {
      name: 'Intelligent Chatbot Builder',
      description: 'Create sophisticated chatbots that enhance customer experience and automate support.',
      href: '/services/ai-chatbot-builder',
      icon: '🤖',
    },
    {
      name: 'Cloud Migration Services',
      description: 'Seamlessly migrate your infrastructure to the cloud with minimal downtime.',
      href: '/services/cloud-migration',
      icon: '☁️',
    },
    {
      name: 'Cybersecurity Solutions',
      description: 'Protect your business with comprehensive cybersecurity and compliance services.',
      href: '/services/cybersecurity',
      icon: '🔒',
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Header */}
      <section className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Our{' '}
            <span className="bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
              Services
            </span>
          </h1>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            We offer comprehensive technology solutions to help your business thrive in the digital age. 
            From AI-powered automation to scalable SaaS applications, we've got you covered.
          </p>
        </div>

        {/* Featured Services */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {featuredServices.map((service, index) => (
            <Link
              key={index}
              href={service.href}
              className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700 hover:border-blue-500 transition-colors duration-200 group"
            >
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-blue-400 transition-colors">
                {service.name}
              </h3>
              <p className="text-slate-300 text-sm">{service.description}</p>
            </Link>
          ))}
        </div>

        {/* Service Categories */}
        <div className="space-y-12">
          {serviceCategories.map((category, index) => (
            <div key={index} className="bg-slate-800/30 backdrop-blur-sm rounded-xl p-8 border border-slate-700">
              <div className="flex flex-col lg:flex-row gap-8">
                <div className="lg:w-1/3">
                  <div className={`w-16 h-16 bg-gradient-to-r ${category.color} rounded-lg flex items-center justify-center mb-4`}>
                    <span className="text-2xl">⚡</span>
                  </div>
                  <h2 className="text-2xl font-bold text-white mb-2">{category.title}</h2>
                  <p className="text-slate-300 mb-4">{category.description}</p>
                  <Link
                    href={category.href}
                    className="text-blue-400 hover:text-blue-300 font-semibold transition-colors"
                  >
                    Explore {category.title} →
                  </Link>
                </div>
                <div className="lg:w-2/3">
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                    {category.services.map((service, serviceIndex) => (
                      <div
                        key={serviceIndex}
                        className="bg-slate-700/50 rounded-lg p-3 text-sm text-slate-300 hover:text-white transition-colors"
                      >
                        {service}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl p-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
            Contact us today to discuss your project requirements and discover how we can help you achieve your goals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-white text-blue-600 hover:bg-gray-100 font-semibold py-3 px-8 rounded-lg transition-colors duration-200"
            >
              Get a Quote
            </Link>
            <Link
              href="/about"
              className="border-2 border-white text-white hover:bg-white hover:text-blue-600 font-semibold py-3 px-8 rounded-lg transition-colors duration-200"
            >
              Learn More
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}