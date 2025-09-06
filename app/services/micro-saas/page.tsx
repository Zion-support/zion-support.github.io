import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Micro SaaS Development | Zion Tech Group - Build & Launch Your SaaS Product',
  description: 'Complete micro SaaS development services including full-stack development, API integration, payment processing, and user management.',
  keywords: 'micro SaaS, SaaS development, full-stack development, API integration, payment processing, user management'
};

export default function MicroSaaSPage() {
  const services = [
    {
      title: 'Full-Stack Development',
      description: 'Complete web application development from frontend to backend.',
      icon: '💻',
      features: ['React/Next.js Frontend', 'Node.js Backend', 'Database Design', 'API Development']
    },
    {
      title: 'API Integration',
      description: 'Integrate with third-party services and APIs for enhanced functionality.',
      icon: '🔗',
      features: ['RESTful APIs', 'GraphQL', 'Webhook Integration', 'Data Synchronization']
    },
    {
      title: 'Payment Processing',
      description: 'Secure payment processing and subscription management.',
      icon: '💳',
      features: ['Stripe Integration', 'PayPal Support', 'Subscription Management', 'Billing Automation']
    },
    {
      title: 'User Management',
      description: 'Complete user authentication and management system.',
      icon: '👥',
      features: ['User Authentication', 'Role Management', 'Profile Management', 'Security Features']
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Micro SaaS Development
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Build and launch your own micro SaaS product with our full-stack development expertise.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {services.map((service, index) => (
            <div
              key={index}
              className="p-8 bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 border border-gray-200"
            >
              <div className="text-5xl mb-6">{service.icon}</div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">{service.title}</h3>
              <p className="text-gray-600 mb-6">{service.description}</p>
              <ul className="space-y-3">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="text-gray-600 flex items-center">
                    <span className="text-green-500 mr-3">✓</span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="bg-white p-8 rounded-lg shadow-md mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">Why Choose Our Micro SaaS Development?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🚀</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Fast Launch</h3>
              <p className="text-gray-600">We help you launch your SaaS product quickly and efficiently.</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">💰</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Cost Effective</h3>
              <p className="text-gray-600">Affordable development solutions that fit your budget.</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🔧</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Scalable</h3>
              <p className="text-gray-600">Built to scale as your business grows and evolves.</p>
            </div>
          </div>
        </div>

        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Ready to Build Your Micro SaaS?</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Let's discuss your SaaS idea and create a product that generates recurring revenue.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              Start Your Project
            </Link>
            <Link
              href="/services"
              className="border border-blue-600 text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
            >
              View All Services
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}