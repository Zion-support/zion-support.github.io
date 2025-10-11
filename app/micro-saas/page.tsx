'use client';

import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { CheckCircle, ArrowRight, Zap, Star, Users, TrendingUp, Shield, Cloud, BarChart3, MessageSquare, Brain, Settings, Globe, Database, Smartphone, Lock, Calendar, FileText, Heart, DollarSign, Award, Rocket, Layers, Workflow, BarChart3 as Analytics, MessageSquare as Chat, Headphones, Monitor, HardDrive, Wifi, Printer, Router, Package } from 'lucide-react';

interface MicroSaasProduct {
  id: string;
  name: string;
  description: string;
  price: string;
  marketPrice: string;
  features: string[];
  benefits: string[];
  category: string;
  popular: boolean;
  icon: React.ComponentType<any>;
}

const MicroSaasPage: React.FC = () => {
  const microSaasProducts: MicroSaasProduct[] = [
    {
      id: '1',
      name: 'Zion Analytics Pro',
      description: 'Advanced business intelligence platform with AI-powered insights and real-time dashboards',
      price: '$299/month',
      marketPrice: '$500-2000/month',
      features: ['Real-time dashboards', 'AI-powered insights', 'Custom reports', 'Data visualization', 'API integration'],
      benefits: ['30% faster decision making', 'Reduced reporting time', 'Better data insights', 'Cost savings'],
      category: 'Analytics',
      popular: true,
      icon: BarChart3
    },
    {
      id: '2',
      name: 'Zion Chat AI',
      description: 'Intelligent customer support chatbot with natural language processing and multi-channel support',
      price: '$199/month',
      marketPrice: '$400-1500/month',
      features: ['Natural language processing', 'Multi-channel support', 'Sentiment analysis', 'CRM integration', '24/7 availability'],
      benefits: ['60% reduction in support costs', 'Improved customer satisfaction', 'Faster response times', 'Scalable support'],
      category: 'Customer Service',
      popular: true,
      icon: MessageSquare
    },
    {
      id: '3',
      name: 'Zion Security Shield',
      description: 'Comprehensive cybersecurity monitoring and threat detection platform for small to medium businesses',
      price: '$399/month',
      marketPrice: '$800-3000/month',
      features: ['Real-time threat detection', 'Automated incident response', 'Compliance monitoring', 'Security reporting', 'Vulnerability scanning'],
      benefits: ['Enhanced security posture', 'Reduced security incidents', 'Compliance assurance', 'Peace of mind'],
      category: 'Cybersecurity',
      popular: false,
      icon: Shield
    },
    {
      id: '4',
      name: 'Zion Cloud Vault',
      description: 'Secure cloud backup and disaster recovery solution with automated data protection',
      price: '$149/month',
      marketPrice: '$300-1200/month',
      features: ['Automated backups', 'Disaster recovery', 'Data encryption', 'Multi-cloud support', 'Version control'],
      benefits: ['Data protection', 'Business continuity', 'Reduced downtime', 'Cost-effective backup'],
      category: 'Cloud Storage',
      popular: false,
      icon: Cloud
    },
    {
      id: '5',
      name: 'Zion Content Studio',
      description: 'AI-powered content creation platform for blogs, social media, and marketing materials',
      price: '$179/month',
      marketPrice: '$350-1500/month',
      features: ['AI content generation', 'Multi-platform publishing', 'SEO optimization', 'Brand voice customization', 'Content calendar'],
      benefits: ['80% faster content creation', 'Consistent brand voice', 'SEO optimization', 'Time savings'],
      category: 'Content Marketing',
      popular: true,
      icon: FileText
    },
    {
      id: '6',
      name: 'Zion CRM Intelligence',
      description: 'AI-enhanced customer relationship management with predictive analytics and automation',
      price: '$249/month',
      marketPrice: '$500-2000/month',
      features: ['AI-powered lead scoring', 'Automated follow-ups', 'Predictive analytics', 'Sales forecasting', 'Customer insights'],
      benefits: ['25% increase in sales', 'Better lead qualification', 'Automated processes', 'Improved customer relationships'],
      category: 'CRM',
      popular: false,
      icon: Users
    },
    {
      id: '7',
      name: 'Zion Data Sync',
      description: 'Automated data integration platform connecting all your business applications and databases',
      price: '$199/month',
      marketPrice: '$400-1800/month',
      features: ['Real-time data sync', 'Multiple integrations', 'Data transformation', 'Error handling', 'Monitoring dashboard'],
      benefits: ['Eliminated data silos', 'Improved data accuracy', 'Reduced manual work', 'Better insights'],
      category: 'Data Integration',
      popular: false,
      icon: Database
    },
    {
      id: '8',
      name: 'Zion Lead Magnet',
      description: 'Lead generation platform with AI-powered targeting and automated nurturing campaigns',
      price: '$229/month',
      marketPrice: '$450-2000/month',
      features: ['AI lead scoring', 'Automated campaigns', 'Landing page builder', 'A/B testing', 'Analytics dashboard'],
      benefits: ['40% more qualified leads', 'Automated nurturing', 'Better conversion rates', 'ROI optimization'],
      category: 'Lead Generation',
      popular: true,
      icon: TrendingUp
    },
    {
      id: '9',
      name: 'Zion Project Master',
      description: 'AI-powered project management platform with intelligent scheduling and resource optimization',
      price: '$279/month',
      marketPrice: '$600-2500/month',
      features: ['AI scheduling', 'Resource optimization', 'Risk prediction', 'Progress tracking', 'Team collaboration'],
      benefits: ['25% faster project delivery', 'Better resource utilization', 'Risk mitigation', 'Improved collaboration'],
      category: 'Project Management',
      popular: false,
      icon: Calendar
    },
    {
      id: '10',
      name: 'Zion Email Automation',
      description: 'Intelligent email marketing platform with AI personalization and automated campaign management',
      price: '$159/month',
      marketPrice: '$300-1200/month',
      features: ['AI personalization', 'Automated campaigns', 'A/B testing', 'Analytics', 'List management'],
      benefits: ['40% higher open rates', 'Automated campaigns', 'Better targeting', 'ROI optimization'],
      category: 'Email Marketing',
      popular: false,
      icon: Mail
    },
    {
      id: '11',
      name: 'Zion Inventory Smart',
      description: 'AI-powered inventory management with demand forecasting and automated reordering',
      price: '$199/month',
      marketPrice: '$400-1800/month',
      features: ['Demand forecasting', 'Automated reordering', 'Inventory optimization', 'Real-time tracking', 'Analytics'],
      benefits: ['30% reduction in stockouts', 'Optimized inventory levels', 'Reduced carrying costs', 'Better planning'],
      category: 'Inventory Management',
      popular: false,
      icon: Package
    },
    {
      id: '12',
      name: 'Zion Invoice Genius',
      description: 'Automated invoice generation and management with AI-powered error detection and payment tracking',
      price: '$129/month',
      marketPrice: '$250-1000/month',
      features: ['Automated generation', 'Error detection', 'Payment tracking', 'Multi-currency support', 'Integration'],
      benefits: ['90% faster invoicing', 'Reduced errors', 'Faster payments', 'Better cash flow'],
      category: 'Financial Management',
      popular: false,
      icon: DollarSign
    }
  ];

  const categories = ['All', 'Analytics', 'Customer Service', 'Cybersecurity', 'Cloud Storage', 'Content Marketing', 'CRM', 'Data Integration', 'Lead Generation', 'Project Management', 'Email Marketing', 'Inventory Management', 'Financial Management'];

  const pricingPlans = [
    {
      name: 'Starter',
      price: '$99/month',
      description: 'Perfect for small businesses starting with automation',
      features: [
        'Up to 3 AI tools',
        'Basic automation',
        'Email support',
        'Standard templates',
        'Up to 10 users'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '$299/month',
      description: 'Comprehensive solution for growing businesses',
      features: [
        'Up to 10 AI tools',
        'Advanced automation',
        'Priority support',
        'Custom workflows',
        'Up to 50 users',
        'API access'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$799/month',
      description: 'Complete AI automation suite for large organizations',
      features: [
        'All AI tools included',
        'Custom AI development',
        '24/7 dedicated support',
        'Unlimited users',
        'White-label solutions',
        'On-premise deployment'
      ],
      popular: false
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Helmet>
        <title>Micro SAAS Solutions - Zion Tech Group | AI-Powered Business Tools</title>
        <meta name="description" content="Discover our collection of AI-powered micro SAAS solutions designed to automate and optimize your business processes. Ready-to-use tools with real market value." />
        <meta name="keywords" content="micro saas, AI tools, business automation, software as a service, productivity tools, business intelligence" />
        <meta property="og:title" content="Micro SAAS Solutions - Zion Tech Group" />
        <meta property="og:description" content="AI-powered micro SAAS solutions for business automation" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ziontechgroup.com/micro-saas" />
      </Helmet>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 to-purple-900 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Micro <span className="text-cyan-400">SAAS</span> Solutions
            </h1>
            <p className="text-xl mb-8 text-gray-300">
              Ready-to-use AI-powered business tools that automate your processes and boost productivity. 
              No complex setup, just powerful solutions that work.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="#products" 
                className="bg-cyan-500 hover:bg-cyan-600 text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-300 inline-flex items-center justify-center"
              >
                Explore Products
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link 
                to="/contact" 
                className="border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-300"
              >
                Get Custom Solution
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section id="products" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                AI-Powered Business Tools
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Choose from our comprehensive collection of micro SAAS solutions designed to solve specific business challenges with AI and automation.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {microSaasProducts.map((product) => (
                <div key={product.id} className={`bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300 ${product.popular ? 'ring-2 ring-cyan-500' : ''}`}>
                  {product.popular && (
                    <div className="flex items-center mb-4">
                      <Star className="w-5 h-5 text-yellow-500 mr-2" />
                      <span className="text-yellow-600 font-semibold">Popular Choice</span>
                    </div>
                  )}
                  
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg flex items-center justify-center mr-4">
                      <product.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900">{product.name}</h3>
                      <span className="text-cyan-600 text-sm font-medium">{product.category}</span>
                    </div>
                  </div>
                  
                  <p className="text-gray-600 mb-6">{product.description}</p>
                  
                  <div className="mb-6">
                    <div className="flex items-center justify-between mb-2">
                      <div className="text-2xl font-bold text-cyan-600">{product.price}</div>
                      <div className="text-sm text-gray-500">Market: {product.marketPrice}</div>
                    </div>
                    <div className="text-sm text-green-600 font-medium">Save up to 40%</div>
                  </div>
                  
                  <div className="space-y-3 mb-6">
                    <h4 className="font-semibold text-gray-900">Key Features:</h4>
                    {product.features.slice(0, 3).map((feature, index) => (
                      <div key={index} className="flex items-center text-gray-600">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <div className="space-y-3 mb-6">
                    <h4 className="font-semibold text-gray-900">Benefits:</h4>
                    {product.benefits.slice(0, 2).map((benefit, index) => (
                      <div key={index} className="flex items-center text-gray-600">
                        <Star className="w-4 h-4 text-yellow-500 mr-2 flex-shrink-0" />
                        <span className="text-sm">{benefit}</span>
                      </div>
                    ))}
                  </div>

                  <button className="w-full bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300">
                    Get Started
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Plans */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Choose Your Plan
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Flexible pricing plans designed to meet your business needs and budget requirements.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pricingPlans.map((plan, index) => (
                <div key={index} className={`bg-white rounded-2xl p-8 hover:shadow-xl transition-shadow duration-300 relative ${plan.popular ? 'ring-2 ring-cyan-500 scale-105' : ''}`}>
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                        Most Popular
                      </span>
                    </div>
                  )}
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                    <div className="text-4xl font-bold text-cyan-600 mb-2">{plan.price}</div>
                    <p className="text-gray-600">{plan.description}</p>
                  </div>
                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-600">
                        <CheckCircle className="w-5 h-5 text-cyan-500 mr-3 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <button className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                    plan.popular 
                      ? 'bg-gradient-to-r from-cyan-500 to-blue-500 text-white hover:from-cyan-600 hover:to-blue-600' 
                      : 'border border-cyan-500 text-cyan-500 hover:bg-cyan-500 hover:text-white'
                  }`}>
                    Get Started
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-900 to-purple-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Automate Your Business?
          </h2>
          <p className="text-xl mb-8 text-gray-300 max-w-3xl mx-auto">
            Join thousands of businesses using our micro SAAS solutions to streamline operations and boost productivity. 
            Start your automation journey today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/contact" 
              className="bg-cyan-500 hover:bg-cyan-600 text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-300 inline-flex items-center justify-center"
            >
              <Zap className="w-5 h-5 mr-2" />
              Get Started Today
            </Link>
            <Link 
              to="/pricing" 
              className="border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-300"
            >
              View Pricing
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MicroSaasPage;