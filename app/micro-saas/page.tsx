'use client';

import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { CheckCircle, ArrowRight, Zap, Star, Users, TrendingUp, Shield, Cloud, BarChart3, MessageSquare } from 'lucide-react';

interface MicroSaasProduct {
  id: string;
  icon: string;
  title: string;
  description: string;
  features: string[];
  price: string;
  users: string;
  popular: boolean;
  category: string;
}

const MicroSaasPage: React.FC = () => {
  const microSaasProducts: MicroSaasProduct[] = [
    {
      id: '1',
      icon: '📊',
      title: 'Analytics Dashboard',
      description: 'Comprehensive analytics and reporting tool for small businesses',
      features: [
        'Real-time data visualization',
        'Custom report generation',
        'Email alerts and notifications',
        'Multi-platform integration',
        'Export to PDF/Excel'
      ],
      price: '$29/month',
      users: 'Up to 5 users',
      popular: true,
      category: 'Analytics'
    },
    {
      id: '2',
      icon: '📅',
      title: 'Appointment Scheduler',
      description: 'Streamline booking and scheduling for service-based businesses',
      features: [
        'Online booking system',
        'Calendar integration',
        'Automated reminders',
        'Payment processing',
        'Client management'
      ],
      price: '$19/month',
      users: 'Unlimited users',
      popular: false,
      category: 'Scheduling'
    },
    {
      id: '3',
      icon: '💬',
      title: 'Chat Analytics',
      description: 'Advanced analytics for customer support and chat interactions',
      features: [
        'Response time tracking',
        'Customer satisfaction scores',
        'Agent performance metrics',
        'Chat transcript analysis',
        'Real-time monitoring'
      ],
      price: '$39/month',
      users: 'Up to 10 users',
      popular: false,
      category: 'Analytics'
    },
    {
      id: '4',
      icon: '📝',
      title: 'Content Generator',
      description: 'AI-powered content creation tool for marketing and social media',
      features: [
        'AI content generation',
        'Multiple content formats',
        'Brand voice customization',
        'SEO optimization',
        'Content calendar'
      ],
      price: '$49/month',
      users: 'Up to 3 users',
      popular: true,
      category: 'Content'
    },
    {
      id: '5',
      icon: '📄',
      title: 'Document Processor',
      description: 'Automated document processing and data extraction tool',
      features: [
        'OCR text recognition',
        'Data extraction',
        'Document classification',
        'Batch processing',
        'API integration'
      ],
      price: '$59/month',
      users: 'Up to 5 users',
      popular: false,
      category: 'Productivity'
    },
    {
      id: '6',
      icon: '📧',
      title: 'Email Marketing',
      description: 'Complete email marketing solution for small businesses',
      features: [
        'Drag-and-drop editor',
        'Email automation',
        'Subscriber management',
        'A/B testing',
        'Analytics and reporting'
      ],
      price: '$25/month',
      users: 'Up to 1,000 contacts',
      popular: false,
      category: 'Marketing'
    }
  ];

  const categories = ['All', 'Analytics', 'Scheduling', 'Content', 'Productivity', 'Marketing'];

  const features = [
    {
      icon: Zap,
      title: 'Quick Setup',
      description: 'Get started in minutes with our easy-to-use interface and pre-built templates.'
    },
    {
      icon: Shield,
      title: 'Secure & Reliable',
      description: 'Enterprise-grade security with 99.9% uptime guarantee and data encryption.'
    },
    {
      icon: Cloud,
      title: 'Cloud-Based',
      description: 'Access your tools from anywhere with our cloud-based infrastructure.'
    },
    {
      icon: BarChart3,
      title: 'Analytics & Insights',
      description: 'Built-in analytics to help you understand usage and optimize performance.'
    }
  ];

  const benefits = [
    'No complex setup or technical knowledge required',
    'Affordable pricing starting from $19/month',
    'Regular updates and new features',
    '24/7 customer support',
    'Free trial available for all products',
    'Easy integration with existing tools',
    'Scalable solutions that grow with your business',
    'White-label options available'
  ];

  return (
    <>
      <Helmet>
        <title>Micro SaaS Solutions - Zion Tech Group | Small Business Tools</title>
        <meta name="description" content="Powerful micro SaaS solutions for small businesses. Analytics, scheduling, content generation, and more. Affordable tools that scale with your business." />
        <meta name="keywords" content="micro SaaS, small business tools, analytics dashboard, appointment scheduler, content generator, business software" />
        <meta property="og:title" content="Micro SaaS Solutions - Zion Tech Group" />
        <meta property="og:description" content="Powerful micro SaaS solutions for small businesses" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ziontechgroup.com/micro-saas" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                Micro SaaS Solutions
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Powerful, affordable tools designed specifically for small businesses. 
              Get the functionality you need without the complexity or high costs.
            </p>
            <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-400">
              <div className="flex items-center gap-2">
                <Zap className="w-4 h-4" />
                <span>Quick Setup</span>
              </div>
              <div className="flex items-center gap-2">
                <Shield className="w-4 h-4" />
                <span>Secure & Reliable</span>
              </div>
              <div className="flex items-center gap-2">
                <Cloud className="w-4 h-4" />
                <span>Cloud-Based</span>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-white mb-4">Why Choose Our Micro SaaS Solutions?</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Built with small businesses in mind, our tools are simple, powerful, and affordable.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                  <p className="text-gray-300">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Products Section */}
        <section className="py-16 px-4 bg-slate-800/30">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-white mb-4">Our Micro SaaS Products</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
                Choose from our range of specialized tools designed for different business needs.
              </p>
              
              {/* Category Filter */}
              <div className="flex flex-wrap justify-center gap-2">
                {categories.map((category) => (
                  <button
                    key={category}
                    className="px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 bg-slate-800/50 text-gray-300 hover:bg-slate-700/50"
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {microSaasProducts.map((product) => (
                <div
                  key={product.id}
                  className={`relative bg-slate-800/50 backdrop-blur-sm border rounded-xl p-6 transition-all duration-300 hover:scale-105 ${
                    product.popular
                      ? 'border-cyan-400/50 shadow-lg shadow-cyan-500/25'
                      : 'border-slate-700 hover:border-slate-600'
                  }`}
                >
                  {product.popular && (
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-3 py-1 rounded-full text-xs font-semibold flex items-center">
                        <Star className="w-3 h-3 mr-1" />
                        Popular
                      </span>
                    </div>
                  )}
                  
                  <div className="text-center mb-6">
                    <div className="text-4xl mb-4">{product.icon}</div>
                    <h3 className="text-xl font-bold text-white mb-2">{product.title}</h3>
                    <p className="text-gray-300 text-sm mb-4">{product.description}</p>
                    <div className="flex items-center justify-center gap-4 text-sm text-gray-400 mb-4">
                      <div className="flex items-center gap-1">
                        <Users className="w-4 h-4" />
                        <span>{product.users}</span>
                      </div>
                      <div className="text-2xl font-bold text-cyan-400">{product.price}</div>
                    </div>
                    <span className="bg-cyan-500/20 text-cyan-300 px-2 py-1 rounded-full text-xs font-medium">
                      {product.category}
                    </span>
                  </div>

                  <ul className="space-y-2 mb-6">
                    {product.features.map((feature, index) => (
                      <li key={index} className="flex items-center text-sm text-gray-400">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <button className="w-full bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white font-semibold py-2 px-4 rounded-lg transition-all duration-200 flex items-center justify-center">
                    Start Free Trial
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-white mb-4">Benefits of Our Micro SaaS Solutions</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Why thousands of small businesses trust our tools
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 text-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <CheckCircle className="w-6 h-6 text-white" />
                  </div>
                  <p className="text-gray-300">{benefit}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-white mb-6">Ready to Get Started?</h2>
            <p className="text-xl text-gray-300 mb-8">
              Choose your tools and start transforming your business today. All plans include a free trial.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-cyan-400 to-purple-400 text-slate-900 font-semibold py-3 px-8 rounded-lg hover:from-cyan-300 hover:to-purple-300 transition-all duration-200">
                Start Free Trial
              </button>
              <Link
                to="/contact"
                className="border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900 font-semibold py-3 px-8 rounded-lg transition-all duration-200"
              >
                Contact Sales
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default MicroSaasPage;