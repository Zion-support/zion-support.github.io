'use client';

import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { CheckCircle, ArrowRight, Star, Zap, Shield, Users, Clock, Globe, BarChart, Settings, Share, Mail } from 'lucide-react';

interface MicroSaaSProduct {
  id: string;
  name: string;
  description: string;
  price: string;
  period: string;
  features: string[];
  icon: React.ComponentType<{ className?: string }>;
  popular?: boolean;
  category: string;
}

const MicroSaaSPage: React.FC = () => {
  const products: MicroSaaSProduct[] = [
    {
      id: '1',
      name: 'Analytics Dashboard',
      description: 'Comprehensive analytics and reporting dashboard for your business',
      price: '$29',
      period: '/month',
      features: [
        'Real-time data visualization',
        'Custom reports and insights',
        'Multi-platform integration',
        'Automated alerts',
        'White-label options'
      ],
      icon: BarChart,
      popular: true,
      category: 'Analytics'
    },
    {
      id: '2',
      name: 'Email Marketing Suite',
      description: 'Complete email marketing solution with automation and templates',
      price: '$19',
      period: '/month',
      features: [
        'Drag-and-drop email builder',
        'Automation workflows',
        'A/B testing tools',
        'Subscriber management',
        'Performance analytics'
      ],
      icon: Mail,
      category: 'Marketing'
    },
    {
      id: '3',
      name: 'Task Manager Pro',
      description: 'Advanced project and task management with team collaboration',
      price: '$39',
      period: '/month',
      features: [
        'Project tracking and timelines',
        'Team collaboration tools',
        'Time tracking and reporting',
        'Integration with popular tools',
        'Mobile app included'
      ],
      icon: Settings,
      category: 'Productivity'
    },
    {
      id: '4',
      name: 'Customer Support Bot',
      description: 'AI-powered customer support chatbot with natural language processing',
      price: '$49',
      period: '/month',
      features: [
        '24/7 automated support',
        'Natural language understanding',
        'Multi-channel integration',
        'Custom knowledge base',
        'Human handoff capabilities'
      ],
      icon: Users,
      category: 'Support'
    },
    {
      id: '5',
      name: 'SEO Optimizer',
      description: 'Comprehensive SEO analysis and optimization tools',
      price: '$24',
      period: '/month',
      features: [
        'Keyword research and tracking',
        'Site audit and recommendations',
        'Competitor analysis',
        'Rank tracking',
        'Content optimization suggestions'
      ],
      icon: Globe,
      category: 'SEO'
    },
    {
      id: '6',
      name: 'Social Media Manager',
      description: 'All-in-one social media management and scheduling platform',
      price: '$34',
      period: '/month',
      features: [
        'Multi-platform posting',
        'Content calendar',
        'Analytics and insights',
        'Team collaboration',
        'Automated posting'
      ],
      icon: Share,
      category: 'Social Media'
    }
  ];

  const categories = ['All', 'Analytics', 'Marketing', 'Productivity', 'Support', 'SEO', 'Social Media'];

  const benefits = [
    {
      icon: Zap,
      title: 'Quick Setup',
      description: 'Get up and running in minutes with our easy-to-use interface'
    },
    {
      icon: Shield,
      title: 'Secure & Reliable',
      description: 'Enterprise-grade security with 99.9% uptime guarantee'
    },
    {
      icon: Users,
      title: 'Team Collaboration',
      description: 'Work together seamlessly with built-in collaboration tools'
    },
    {
      icon: Clock,
      title: '24/7 Support',
      description: 'Round-the-clock support to help you succeed'
    }
  ];

  const pricingFeatures = [
    'Free trial for all products',
    'Cancel anytime, no long-term contracts',
    'Regular updates and new features',
    '24/7 technical support',
    'Easy integration with existing tools',
    'Free trial for all products',
    'Cancel anytime, no long-term contracts'
  ];

  return (
    <>
      <Helmet>
        <title>Micro SaaS Products - Zion Tech Group | Ready-to-Use Solutions</title>
        <meta name="description" content="Discover our collection of micro SaaS products designed to solve specific business challenges. Analytics, marketing, productivity, and more." />
        <meta name="keywords" content="micro SaaS, SaaS products, business tools, analytics dashboard, email marketing, task management" />
        <meta property="og:title" content="Micro SaaS Products - Zion Tech Group" />
        <meta property="og:description" content="Ready-to-use micro SaaS solutions for your business" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ziontechgroup.com/micro-saas" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Micro SaaS Products
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-12">
              Discover our collection of ready-to-use micro SaaS solutions designed to solve specific business challenges and boost your productivity.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-500 to-blue-500 text-white font-semibold rounded-lg hover:from-purple-600 hover:to-blue-600 transition-all duration-300"
              >
                Get Started
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-12 text-center">Why Choose Our Micro SaaS Products?</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full mb-6">
                    <benefit.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-4">{benefit.title}</h3>
                  <p className="text-gray-300">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Products Grid */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-12 text-center">Our Products</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {products.map((product) => (
                <div key={product.id} className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/20 transition-all duration-300">
                  {product.popular && (
                    <div className="inline-flex items-center px-3 py-1 bg-gradient-to-r from-purple-500 to-blue-500 text-white text-sm font-semibold rounded-full mb-4">
                      <Star className="w-4 h-4 mr-1 fill-current" />
                      Most Popular
                    </div>
                  )}
                  
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full mb-6">
                    <product.icon className="w-8 h-8 text-white" />
                  </div>
                  
                  <h3 className="text-2xl font-bold text-white mb-4">{product.name}</h3>
                  <p className="text-gray-300 mb-6">{product.description}</p>
                  
                  <div className="flex items-baseline mb-6">
                    <span className="text-4xl font-bold text-white">{product.price}</span>
                    <span className="text-gray-400 ml-2">{product.period}</span>
                  </div>
                  
                  <ul className="space-y-3 mb-8">
                    {product.features.map((feature, index) => (
                      <li key={index} className="flex items-center text-gray-300">
                        <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <div className="flex flex-col gap-3">
                    <Link
                      to="/contact"
                      className="w-full py-3 px-6 bg-gradient-to-r from-purple-500 to-blue-500 text-white font-semibold rounded-lg hover:from-purple-600 hover:to-blue-600 transition-all duration-300 text-center"
                    >
                      Get Started
                    </Link>
                    <Link
                      to={`/micro-saas/${product.id}`}
                      className="w-full py-3 px-6 bg-white/20 text-white font-semibold rounded-lg hover:bg-white/30 transition-all duration-300 text-center"
                    >
                      Learn More
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Features */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-12 text-center">What's Included</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {pricingFeatures.map((feature, index) => (
                <div key={index} className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                  {feature}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Start your free trial today and experience the power of our micro SaaS solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-500 to-blue-500 text-white font-semibold rounded-lg hover:from-purple-600 hover:to-blue-600 transition-all duration-300"
              >
                Start Free Trial
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default MicroSaaSPage;