import React from 'react';
import { CheckCircle, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

interface Service {
  id: string;
  title: string;
  description: string;
  features: string[];
  price: string;
  link: string;
  popular?: boolean;
}

interface ServicesProps {
  className?: string;
  services?: Service[];
}

export default function Services({ 
  className = '',
  services = [
    {
      id: '1',
      title: 'AI Customer Support Chatbot',
      description: 'Intelligent chatbot solution for automated customer support and lead generation.',
      features: ['24/7 Support', 'Multi-language', 'CRM Integration', 'Analytics Dashboard'],
      price: '$99/month',
      link: '/micro-saas/ai-customer-support-chatbot',
      popular: true
    },
    {
      id: '2',
      title: 'AI Email Marketing Automation',
      description: 'Automated email campaigns with AI-powered personalization and optimization.',
      features: ['Smart Segmentation', 'A/B Testing', 'Analytics', 'Template Library'],
      price: '$149/month',
      link: '/micro-saas/ai-email-marketing-automation'
    },
    {
      id: '3',
      title: 'AI Expense Tracker',
      description: 'Smart expense tracking with receipt scanning and automated categorization.',
      features: ['Receipt Scanning', 'Auto Categorization', 'Reports', 'Tax Integration'],
      price: '$79/month',
      link: '/micro-saas/ai-expense-tracker'
    }
  ]
}: ServicesProps) {
  return (
    <div className={`py-20 px-4 sm:px-6 lg:px-8 ${className}`}>
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">
            Micro SAAS Services
          </h2>
          <p className="text-gray-300 text-lg max-w-3xl mx-auto">
            Powerful, focused software solutions designed to solve specific business problems with AI-powered automation
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div key={service.id} className={`bg-gray-800 rounded-xl p-6 border transition-all duration-300 hover:border-cyan-400 ${service.popular ? 'border-cyan-400' : 'border-gray-700'}`}>
              {service.popular && (
                <div className="mb-4">
                  <span className="bg-cyan-400 text-gray-900 px-3 py-1 rounded-full text-sm font-semibold">
                    Most Popular
                  </span>
                </div>
              )}
              
              <h3 className="text-xl font-semibold text-white mb-3">{service.title}</h3>
              <p className="text-gray-300 mb-4">{service.description}</p>
              
              <ul className="space-y-2 mb-6">
                {service.features.map((feature, index) => (
                  <li key={index} className="flex items-center text-sm text-gray-300">
                    <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                    {feature}
                  </li>
                ))}
              </ul>
              
              <div className="flex items-center justify-between mb-4">
                <span className="text-2xl font-bold text-cyan-400">{service.price}</span>
              </div>
              
              <Link
                to={service.link}
                className={`w-full block text-center py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                  service.popular
                    ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white hover:from-cyan-600 hover:to-purple-700'
                    : 'border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-gray-900'
                }`}
              >
                Learn More
                <ArrowRight className="w-4 h-4 ml-2 inline" />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
