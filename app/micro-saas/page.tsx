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
      id: 'ai-analytics',
      icon: 'BarChart3',
      title: 'AI Analytics Dashboard',
      description: 'Comprehensive business intelligence with AI-powered insights and real-time analytics.',
      features: ['Real-time data visualization', 'AI-powered insights', 'Custom dashboards', 'Automated reporting'],
      price: '$299',
      users: 'Up to 10 users',
      popular: true,
      category: 'Analytics'
    },
    {
      id: 'security-monitor',
      icon: 'Shield',
      title: 'Security Monitoring Suite',
      description: 'Advanced cybersecurity monitoring with threat detection and automated response.',
      features: ['24/7 threat monitoring', 'Automated incident response', 'Compliance tracking', 'Security analytics'],
      price: '$499',
      users: 'Up to 25 users',
      popular: false,
      category: 'Security'
    },
    {
      id: 'project-manager',
      icon: 'Users',
      title: 'Project Management Pro',
      description: 'AI-enhanced project management with intelligent task allocation and progress tracking.',
      features: ['Smart task management', 'Team collaboration', 'Progress analytics', 'Resource optimization'],
      price: '$199',
      users: 'Up to 15 users',
      popular: false,
      category: 'Productivity'
    },
    {
      id: 'customer-chat',
      icon: 'MessageSquare',
      title: 'AI Customer Support',
      description: 'Intelligent chatbot solution for automated customer service and support.',
      features: ['Natural language processing', 'Multi-channel support', 'Analytics dashboard', 'Custom responses'],
      price: '$399',
      users: 'Unlimited',
      popular: true,
      category: 'Customer Service'
    },
    {
      id: 'cloud-manager',
      icon: 'Cloud',
      title: 'Cloud Infrastructure Manager',
      description: 'Streamlined cloud resource management with cost optimization and monitoring.',
      features: ['Resource monitoring', 'Cost optimization', 'Auto-scaling', 'Multi-cloud support'],
      price: '$599',
      users: 'Up to 50 users',
      popular: false,
      category: 'Infrastructure'
    },
    {
      id: 'trend-analyzer',
      icon: 'TrendingUp',
      title: 'Market Trend Analyzer',
      description: 'AI-powered market analysis and trend prediction for business intelligence.',
      features: ['Market analysis', 'Trend prediction', 'Competitor tracking', 'Custom reports'],
      price: '$799',
      users: 'Up to 20 users',
      popular: false,
      category: 'Analytics'
    }
  ];

  const categories = ['All', 'Analytics', 'Security', 'Productivity', 'Customer Service', 'Infrastructure'];

  return (
    <>
      <Helmet>
        <title>Micro SaaS Solutions | Zion Tech Group - AI-Powered Business Tools</title>
        <meta name="description" content="Discover our collection of micro SaaS solutions designed to streamline your business operations with AI-powered tools and automation." />
        <meta name="keywords" content="micro saas, business tools, AI solutions, automation, productivity, analytics" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Micro <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">SaaS</span> Solutions
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-12">
              Powerful, focused tools designed to solve specific business challenges with AI-powered automation and intelligence.
            </p>
            
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              {categories.map((category) => (
                <button
                  key={category}
                  className="px-6 py-3 bg-white/10 backdrop-blur-lg border border-white/20 rounded-lg text-white hover:bg-white/20 transition-all duration-300"
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Products Grid */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {microSaasProducts.map((product) => {
                const iconMap = {
                  BarChart3,
                  Shield,
                  Users,
                  MessageSquare,
                  Cloud,
                  TrendingUp
                };
                const IconComponent = iconMap[product.icon as keyof typeof iconMap];

                return (
                  <div
                    key={product.id}
                    className={`bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:border-purple-400 transition-all duration-300 relative ${
                      product.popular ? 'ring-2 ring-purple-400' : ''
                    }`}
                  >
                    {product.popular && (
                      <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                        <span className="bg-gradient-to-r from-purple-500 to-blue-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                          Most Popular
                        </span>
                      </div>
                    )}

                    <div className="text-center mb-6">
                      <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                        <IconComponent className="w-8 h-8 text-white" />
                      </div>
                      <h3 className="text-2xl font-bold text-white mb-2">{product.title}</h3>
                      <p className="text-gray-300 mb-4">{product.description}</p>
                      <div className="flex items-center justify-center gap-2 mb-4">
                        <span className="text-3xl font-bold text-white">{product.price}</span>
                        <span className="text-gray-400">/month</span>
                      </div>
                      <p className="text-sm text-gray-400">{product.users}</p>
                    </div>

                    <div className="space-y-3 mb-8">
                      {product.features.map((feature, index) => (
                        <div key={index} className="flex items-center gap-3">
                          <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                          <span className="text-gray-300">{feature}</span>
                        </div>
                      ))}
                    </div>

                    <div className="space-y-3">
                      <button className="w-full bg-gradient-to-r from-purple-500 to-blue-500 text-white py-3 rounded-lg font-semibold hover:from-purple-600 hover:to-blue-600 transition-all duration-300 transform hover:scale-105">
                        Start Free Trial
                      </button>
                      <button className="w-full bg-white/10 text-white py-3 rounded-lg font-semibold border border-white/20 hover:bg-white/20 transition-all duration-300">
                        Learn More
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-white mb-6">Why Choose Our Micro SaaS Solutions?</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our micro SaaS tools are designed with modern businesses in mind, offering powerful features without the complexity.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Zap className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">Quick Setup</h3>
                <p className="text-gray-300">Get up and running in minutes with our intuitive setup process and comprehensive documentation.</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Shield className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">Enterprise Security</h3>
                <p className="text-gray-300">Bank-level security with encryption, access controls, and compliance with industry standards.</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-6">
                  <BarChart3 className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">Advanced Analytics</h3>
                <p className="text-gray-300">Comprehensive analytics and reporting to help you make data-driven decisions.</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">Team Collaboration</h3>
                <p className="text-gray-300">Built-in collaboration features to keep your team connected and productive.</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-12 border border-white/20">
              <h2 className="text-3xl font-bold text-white mb-6">Ready to Transform Your Business?</h2>
              <p className="text-xl text-gray-300 mb-8">
                Start your free trial today and experience the power of AI-driven micro SaaS solutions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-500 to-blue-500 text-white px-8 py-4 rounded-lg font-semibold hover:from-purple-600 hover:to-blue-600 transition-all duration-300 transform hover:scale-105">
                  Start Free Trial
                  <ArrowRight className="w-5 h-5" />
                </button>
                <button className="inline-flex items-center gap-2 bg-white/10 text-white px-8 py-4 rounded-lg font-semibold border border-white/20 hover:bg-white/20 transition-all duration-300">
                  Schedule Demo
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default MicroSaasPage;