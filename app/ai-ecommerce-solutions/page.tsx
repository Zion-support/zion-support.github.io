'use client';
import React from 'react';
import { CheckCircle, Star, Users, BarChart3, Zap, Shield, ShoppingCart, CreditCard, Package, TrendingUp, Globe, Smartphone } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const AIEcommerceSolutionsPage: React.FC = () => {
  const ecommerceServices = [
    {
      title: 'AI-Powered E-commerce Platform',
      description: 'Complete e-commerce solution with AI-driven personalization, inventory management, and automated customer service.',
      icon: '🛒',
      price: '$1,999/month',
      features: [
        'AI product recommendations',
        'Dynamic pricing optimization',
        'Inventory management',
        'Customer behavior analysis',
        'Automated customer service',
        'Multi-channel selling',
        'Payment processing',
        'Order tracking'
      ],
      benefits: [
        'Increase conversion rates by 35%',
        'Reduce cart abandonment by 50%',
        'Automated inventory management',
        '24/7 customer support'
      ]
    },
    {
      title: 'AI Product Recommendation Engine',
      description: 'Intelligent product recommendations based on customer behavior, preferences, and purchase history.',
      icon: '🎯',
      price: '$499/month',
      features: [
        'Machine learning algorithms',
        'Real-time recommendations',
        'Cross-selling and upselling',
        'Personalized product feeds',
        'A/B testing capabilities',
        'Analytics dashboard'
      ],
      benefits: [
        'Increase average order value by 25%',
        'Improve customer engagement',
        'Higher conversion rates',
        'Reduced bounce rate'
      ]
    },
    {
      title: 'AI Chatbot for E-commerce',
      description: 'Advanced AI chatbot for customer support, product inquiries, and order assistance.',
      icon: '💬',
      price: '$299/month',
      features: [
        'Natural language processing',
        'Multi-language support',
        'Order status tracking',
        'Product information queries',
        'Return and refund assistance',
        'Integration with CRM'
      ],
      benefits: [
        '24/7 customer support',
        'Reduce support tickets by 60%',
        'Faster response times',
        'Improved customer satisfaction'
      ]
    },
    {
      title: 'AI Inventory Management',
      description: 'Smart inventory management with demand forecasting and automated reordering.',
      icon: '📦',
      price: '$399/month',
      features: [
        'Demand forecasting',
        'Automated reordering',
        'Stock level optimization',
        'Supplier management',
        'Cost analysis',
        'Real-time tracking'
      ],
      benefits: [
        'Reduce stockouts by 40%',
        'Lower inventory costs',
        'Improved cash flow',
        'Better supplier relationships'
      ]
    }
  ];

  const features = [
    {
      icon: Users,
      title: 'Customer Analytics',
      description: 'Deep insights into customer behavior and preferences'
    },
    {
      icon: BarChart3,
      title: 'Sales Optimization',
      description: 'AI-driven strategies to maximize sales and revenue'
    },
    {
      icon: Zap,
      title: 'Automation',
      description: 'Streamline operations with intelligent automation'
    },
    {
      icon: Shield,
      title: 'Security',
      description: 'Enterprise-grade security for your e-commerce platform'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Navigation />
      <main className="container mx-auto px-4 py-16 pt-24">
        {/* Hero Section */}
        <section className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            AI E-commerce Solutions
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Transform your online business with AI-powered e-commerce solutions that increase sales, 
            improve customer experience, and optimize operations.
          </p>
        </section>

        {/* Services Grid */}
        <section className="mb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {ecommerceServices.map((service, index) => (
              <div key={index} className="cyber-card p-8 hover:scale-105 transition-all duration-300">
                <div className="flex items-center mb-6">
                  <div className="text-4xl mr-4">{service.icon}</div>
                  <div>
                    <h3 className="text-2xl font-bold text-white">{service.title}</h3>
                    <p className="text-cyan-400 text-lg">{service.price}</p>
                  </div>
                </div>
                
                <p className="text-gray-300 mb-6">{service.description}</p>
                
                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-cyan-400 mb-3">Features:</h4>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-gray-300">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-cyan-400 mb-3">Benefits:</h4>
                  <ul className="space-y-2">
                    {service.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-center text-gray-300">
                        <Star className="w-4 h-4 text-yellow-400 mr-2 flex-shrink-0" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <a 
                  href="/contact" 
                  className="inline-flex items-center bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all"
                >
                  Get Started
                </a>
              </div>
            ))}
          </div>
        </section>

        {/* Features Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Key Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Transform Your E-commerce?</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Let our AI solutions help you build a more profitable and efficient online business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/contact" 
              className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all"
            >
              Get Free Consultation
            </a>
            <a 
              href="/case-studies" 
              className="border-2 border-cyan-400 text-cyan-400 px-8 py-3 rounded-lg font-semibold hover:bg-cyan-400 hover:text-white transition-all"
            >
              View Case Studies
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default AIEcommerceSolutionsPage;