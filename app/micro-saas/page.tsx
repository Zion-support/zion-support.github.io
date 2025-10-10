'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { CheckCircle, ArrowRight, Zap, Star, Users, TrendingUp, Shield, Cloud, BarChart3, MessageSquare, Target, Rocket } from 'lucide-react';

const MicroSaasPage: React.FC = () => {
  const microSaasProducts = [
    {
      id: '1',
      icon: <Zap className="w-8 h-8 text-blue-500" />,
      title: 'AI Email Optimizer',
      description: 'Automatically optimize email campaigns with AI-powered subject lines, content suggestions, and send-time optimization.',
      features: ['Smart subject line generation', 'Content optimization', 'Send-time optimization', 'A/B testing automation'],
      pricing: '$99/month',
      category: 'Marketing'
    },
    {
      id: '2',
      icon: <BarChart3 className="w-8 h-8 text-green-500" />,
      title: 'Analytics Dashboard Pro',
      description: 'Comprehensive analytics dashboard with real-time data visualization and custom reporting.',
      features: ['Real-time dashboards', 'Custom reports', 'Data visualization', 'Performance metrics'],
      pricing: '$149/month',
      category: 'Analytics'
    },
    {
      id: '3',
      icon: <Shield className="w-8 h-8 text-red-500" />,
      title: 'Security Monitor',
      description: '24/7 security monitoring and threat detection for your applications and infrastructure.',
      features: ['24/7 threat monitoring', 'Automated incident response', 'Compliance tracking', 'Security analytics'],
      pricing: '$199/month',
      category: 'Security'
    },
    {
      id: '4',
      icon: <Users className="w-8 h-8 text-purple-500" />,
      title: 'Team Collaboration Hub',
      description: 'AI-enhanced team collaboration platform with intelligent task management and communication tools.',
      features: ['Smart task management', 'Team collaboration', 'Progress analytics', 'Resource optimization'],
      pricing: '$79/month',
      category: 'Productivity'
    },
    {
      id: '5',
      icon: <Cloud className="w-8 h-8 text-cyan-500" />,
      title: 'Cloud Backup Manager',
      description: 'Automated cloud backup solution with intelligent scheduling and data recovery options.',
      features: ['Automated backups', 'Data recovery', 'Cross-platform sync', 'Encryption'],
      pricing: '$59/month',
      category: 'Storage'
    },
    {
      id: '6',
      icon: <MessageSquare className="w-8 h-8 text-orange-500" />,
      title: 'Customer Support Bot',
      description: 'AI-powered customer support chatbot with natural language processing and ticket management.',
      features: ['Natural language processing', 'Ticket management', 'Multi-language support', 'Analytics'],
      pricing: '$129/month',
      category: 'Support'
    }
  ];

  const categories = ['All', 'Marketing', 'Analytics', 'Security', 'Productivity', 'Storage', 'Support'];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Micro SaaS Solutions | Zion Tech Group | AI-Powered Business Tools</title>
        <meta name="description" content="Discover our collection of micro SaaS solutions designed to streamline your business operations with AI-powered tools and automation." />
        <meta name="keywords" content="micro SaaS, business tools, AI automation, productivity software, business solutions" />
      </Helmet>

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Micro SaaS <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Solutions</span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Powerful, focused tools designed to solve specific business challenges with AI-powered automation and intelligence.
          </p>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category}
                className="px-6 py-3 rounded-full border border-white/20 text-white hover:bg-white/10 transition-all duration-300"
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {microSaasProducts.map((product) => (
              <div
                key={product.id}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all duration-300"
              >
                <div className="flex items-center gap-4 mb-4">
                  {product.icon}
                  <div>
                    <h3 className="text-xl font-semibold text-white">{product.title}</h3>
                    <span className="text-sm text-gray-400">{product.category}</span>
                  </div>
                </div>
                
                <p className="text-gray-300 mb-4">{product.description}</p>
                
                <div className="space-y-2 mb-6">
                  {product.features.map((feature, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                      <span className="text-sm text-gray-300">{feature}</span>
                    </div>
                  ))}
                </div>
                
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-white">{product.pricing}</span>
                  <button className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-4 py-2 rounded-lg font-semibold hover:from-purple-700 hover:to-blue-700 transition-all duration-300 flex items-center gap-2">
                    Try Now
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-4">Why Choose Our Micro SaaS Solutions?</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our micro SaaS tools are designed with modern businesses in mind, offering powerful features without complexity.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">AI-Powered</h3>
              <p className="text-gray-300">Leverage artificial intelligence for smarter automation and insights.</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Focused Solutions</h3>
              <p className="text-gray-300">Each tool solves a specific business problem with precision.</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Rocket className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Quick Setup</h3>
              <p className="text-gray-300">Get up and running in minutes with our intuitive setup process.</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Scalable</h3>
              <p className="text-gray-300">Grow with your business needs with flexible pricing and features.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-8 md:p-12">
            <h2 className="text-3xl font-bold text-white mb-4">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-purple-100 mb-8">
              Start using our micro SaaS solutions today and see the difference AI-powered automation can make.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 flex items-center justify-center gap-2">
                <Star className="w-5 h-5" />
                Start Free Trial
              </button>
              <button className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-all duration-300">
                View All Solutions
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MicroSaasPage;