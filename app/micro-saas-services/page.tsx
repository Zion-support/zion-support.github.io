import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle, ArrowRight, Zap, Shield, Target } from 'lucide-react';
import Layout from '../layout';

export default function MicroSaasServicesPage() {
  const features = [
    {
      icon: <Zap className="w-6 h-6 text-cyan-400" />,
      title: 'AI-Powered Automation',
      description: 'Intelligent automation that learns and adapts to your business needs'
    },
    {
      icon: <Shield className="w-6 h-6 text-purple-400" />,
      title: 'Enterprise Security',
      description: 'Bank-level security with end-to-end encryption and compliance'
    },
    {
      icon: <Target className="w-6 h-6 text-yellow-400" />,
      title: 'Focused Solutions',
      description: 'Specialized tools designed to solve specific business problems'
    }
  ];

  const services = [
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
    },
    {
      id: '4',
      title: 'AI Inventory Manager',
      description: 'Intelligent inventory management with demand forecasting and optimization.',
      features: ['Demand Forecasting', 'Auto Reordering', 'Analytics', 'Multi-location'],
      price: '$199/month',
      link: '/micro-saas/ai-inventory-manager'
    },
    {
      id: '5',
      title: 'AI Project Manager',
      description: 'Smart project management with AI-powered task prioritization and resource allocation.',
      features: ['Task Automation', 'Resource Planning', 'Progress Tracking', 'Team Collaboration'],
      price: '$129/month',
      link: '/micro-saas/ai-project-manager'
    },
    {
      id: '6',
      title: 'AI Social Media Scheduler',
      description: 'Automated social media posting with AI-optimized timing and content suggestions.',
      features: ['Auto Posting', 'Content Suggestions', 'Analytics', 'Multi-platform'],
      price: '$89/month',
      link: '/micro-saas/ai-social-media-scheduler'
    }
  ];

  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900">
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Micro SAAS
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
                {' '}Services
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Powerful, focused software solutions designed to solve specific business problems 
              with AI-powered automation and intelligent features.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300"
              >
                Get Started
              </Link>
              <Link
                to="/demo"
                className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-gray-900 transition-all duration-300"
              >
                View Demo
              </Link>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">
                Why Choose Our Micro SAAS Solutions
              </h2>
              <p className="text-gray-300 text-lg">
                Focused, powerful tools that solve specific business problems
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700 hover:border-cyan-400 transition-all duration-300">
                  <div className="flex items-center mb-4">
                    {feature.icon}
                    <h3 className="text-xl font-semibold text-white ml-3">{feature.title}</h3>
                  </div>
                  <p className="text-gray-300">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">
                Our Micro SAAS Solutions
              </h2>
              <p className="text-gray-300 text-lg">
                Choose from our range of specialized business tools
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
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-white mb-4">
              Ready to Transform Your Business?
            </h2>
            <p className="text-gray-300 text-lg mb-8">
              Start with one of our micro SAAS solutions and see the difference AI-powered automation can make
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300"
              >
                Get Started Today
              </Link>
              <Link
                to="/demo"
                className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-gray-900 transition-all duration-300"
              >
                Schedule Demo
              </Link>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
}
