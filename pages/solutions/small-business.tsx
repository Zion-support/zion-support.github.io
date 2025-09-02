import React from 'react';
import type { NextPage } from 'next';
import MainLayout from '../../components/layout/MainLayout';
import { ArrowRight, CheckCircle, DollarSign, Users, Zap, Shield, Globe, TrendingUp, Clock, Target } from 'lucide-react';
import Link from 'next/link';
import { motion } from 'framer-motion';

const SmallBusiness: NextPage = () => {
  const solutions = [
    {
      icon: Globe,
      title: 'Professional Website',
      description: 'Modern, responsive websites that showcase your business and attract customers.',
      features: ['Mobile-Responsive Design', 'SEO Optimization', 'Content Management', 'Analytics Integration']
    },
    {
      icon: Users,
      title: 'Customer Management',
      description: 'Streamline customer relationships with integrated CRM and communication tools.',
      features: ['Contact Management', 'Email Marketing', 'Customer Support', 'Feedback Collection']
    },
    {
      icon: DollarSign,
      title: 'E-commerce Solutions',
      description: 'Complete online store setup with payment processing and inventory management.',
      features: ['Online Store', 'Payment Gateway', 'Inventory Tracking', 'Order Management']
    },
    {
      icon: Zap,
      title: 'Process Automation',
      description: 'Automate routine tasks to save time and reduce errors in daily operations.',
      features: ['Workflow Automation', 'Document Management', 'Scheduling Tools', 'Reporting Systems']
    }
  ];

  const benefits = [
    {
      icon: TrendingUp,
      title: 'Increased Revenue',
      description: 'Grow your business with digital tools that attract and retain customers.'
    },
    {
      icon: Clock,
      title: 'Time Savings',
      description: 'Automate processes to focus on what matters most - growing your business.'
    },
    {
      icon: Shield,
      title: 'Professional Image',
      description: 'Build trust and credibility with professional digital presence and systems.'
    },
    {
      icon: Target,
      title: 'Competitive Advantage',
      description: 'Stay ahead of competitors with modern technology and efficient processes.'
    }
  ];

  const packages = [
    {
      name: 'Starter',
      price: '$299',
      period: '/month',
      description: 'Perfect for new businesses getting started online',
      features: [
        'Professional Website (5 pages)',
        'Mobile-Responsive Design',
        'Basic SEO Setup',
        'Contact Form',
        'Google Analytics',
        'Email Support'
      ],
      popular: false
    },
    {
      name: 'Growth',
      price: '$599',
      period: '/month',
      description: 'Ideal for growing businesses ready to scale',
      features: [
        'Everything in Starter',
        'E-commerce Store (up to 50 products)',
        'Customer Management System',
        'Email Marketing (up to 1,000 contacts)',
        'Social Media Integration',
        'Priority Support'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$999',
      period: '/month',
      description: 'Complete solution for established businesses',
      features: [
        'Everything in Growth',
        'Custom Features & Integrations',
        'Advanced Analytics & Reporting',
        'Multi-location Support',
        'API Integrations',
        'Dedicated Account Manager'
      ],
      popular: false
    }
  ];

  return (
    <MainLayout
      title="Small Business Solutions - Zion Tech Group"
      description="Affordable technology solutions designed specifically for small businesses. From websites to e-commerce, we help small businesses compete and grow in the digital age."
      keywords="small business solutions, small business website, e-commerce for small business, business automation, affordable technology"
    >
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-900 via-blue-900 to-indigo-900 text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-10"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <motion.h1 
            className="text-5xl md:text-6xl font-bold mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Small Business
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-400"> Solutions</span>
          </motion.h1>
          <motion.p 
            className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto text-gray-200"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Affordable technology solutions designed specifically for small businesses. 
            From professional websites to e-commerce platforms, we help you compete 
            and grow in the digital age without breaking the budget.
          </motion.p>
          
          <motion.div 
            className="flex flex-col sm:flex-row justify-center gap-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Link href="/contact" className="group">
              <button className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 cursor-pointer inline-block text-lg hover:scale-105 hover:shadow-lg group-hover:shadow-xl">
                Get Started Today
                <ArrowRight className="inline-block ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </Link>
            <Link href="/solutions" className="group">
              <button className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-green-900 px-8 py-4 rounded-lg font-semibold transition-all duration-300 cursor-pointer inline-block text-lg hover:scale-105">
                View All Solutions
              </button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Solutions Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Complete Business Solutions</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Everything you need to establish and grow your small business online.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {solutions.map((solution, index) => (
              <motion.div
                key={index}
                className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="w-16 h-16 bg-green-100 rounded-lg flex items-center justify-center mb-6">
                  <solution.icon className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">{solution.title}</h3>
                <p className="text-gray-600 mb-6">{solution.description}</p>
                <ul className="space-y-2">
                  {solution.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-600">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Small Businesses Choose Us</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We understand the unique challenges and opportunities facing small businesses today.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                className="text-center"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="w-16 h-16 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-6">
                  <benefit.icon className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Affordable Packages</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose the package that fits your business needs and budget.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {packages.map((pkg, index) => (
              <motion.div
                key={index}
                className={`bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow relative ${
                  pkg.popular ? 'ring-2 ring-green-500' : ''
                }`}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                {pkg.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-green-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{pkg.name}</h3>
                  <p className="text-gray-600 mb-4">{pkg.description}</p>
                  <div className="flex items-baseline justify-center">
                    <span className="text-4xl font-bold text-gray-900">{pkg.price}</span>
                    <span className="text-gray-600 ml-1">{pkg.period}</span>
                  </div>
                </div>

                <ul className="space-y-4 mb-8">
                  {pkg.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                      <span className="text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Link href="/contact" className="block">
                  <button className={`w-full py-3 rounded-lg font-semibold transition-colors ${
                    pkg.popular
                      ? 'bg-green-600 hover:bg-green-700 text-white'
                      : 'bg-gray-200 hover:bg-gray-300 text-gray-900'
                  }`}>
                    Get Started
                  </button>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-green-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Grow Your Business?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto text-gray-200">
            Join hundreds of small businesses that have transformed their operations with our solutions.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/contact" className="group">
              <button className="bg-white text-green-900 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold transition-all duration-300 cursor-pointer inline-block text-lg hover:scale-105 hover:shadow-lg">
                Start Your Journey
                <ArrowRight className="inline-block ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </Link>
            <Link href="/solutions" className="group">
              <button className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-green-900 px-8 py-4 rounded-lg font-semibold transition-all duration-300 cursor-pointer inline-block text-lg hover:scale-105">
                View All Solutions
              </button>
            </Link>
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default SmallBusiness;