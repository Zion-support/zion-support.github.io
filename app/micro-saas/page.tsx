'use client';
import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { ArrowRight, CheckCircle, Star, Zap, Shield, BarChart, Users, Rocket } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const MicroSaasPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const microSaasProducts = [
    {
      id: 1,
      title: 'AI Content Writer',
      description: 'Generate high-quality content for blogs, social media, and marketing materials using advanced AI.',
      features: [
        'AI-powered content generation',
        'Multiple content formats',
        'SEO optimization',
        'Brand voice customization',
        'Content scheduling',
        'Analytics dashboard'
      ],
      pricing: '$29/month',
      category: 'content',
      icon: Zap,
      popular: true
    },
    {
      id: 2,
      title: 'Social Media Scheduler',
      description: 'Automate your social media posting across all platforms with intelligent scheduling.',
      features: [
        'Multi-platform posting',
        'Optimal timing suggestions',
        'Content calendar',
        'Analytics and insights',
        'Team collaboration',
        'Hashtag optimization'
      ],
      pricing: '$19/month',
      category: 'social',
      icon: BarChart,
      popular: false
    },
    {
      id: 3,
      title: 'Email Marketing Automation',
      description: 'Create and manage email campaigns with advanced automation and personalization.',
      features: [
        'Drag-and-drop editor',
        'Automated workflows',
        'A/B testing',
        'Advanced segmentation',
        'Deliverability optimization',
        'Detailed analytics'
      ],
      pricing: '$39/month',
      category: 'marketing',
      icon: Users,
      popular: true
    },
    {
      id: 4,
      title: 'Project Management Tool',
      description: 'Streamline your projects with AI-powered task management and team collaboration.',
      features: [
        'AI task prioritization',
        'Team collaboration',
        'Time tracking',
        'Progress monitoring',
        'Resource planning',
        'Integration ecosystem'
      ],
      pricing: '$49/month',
      category: 'productivity',
      icon: Rocket,
      popular: false
    },
    {
      id: 5,
      title: 'Analytics Dashboard',
      description: 'Get comprehensive insights into your business performance with real-time analytics.',
      features: [
        'Real-time data visualization',
        'Custom reports',
        'Data integration',
        'Automated alerts',
        'Export capabilities',
        'Team sharing'
      ],
      pricing: '$24/month',
      category: 'analytics',
      icon: BarChart,
      popular: false
    },
    {
      id: 6,
      title: 'Customer Support Chatbot',
      description: 'Provide 24/7 customer support with an intelligent AI-powered chatbot.',
      features: [
        'Natural language processing',
        'Multi-language support',
        'Knowledge base integration',
        'Human handoff',
        'Conversation analytics',
        'Custom branding'
      ],
      pricing: '$34/month',
      category: 'support',
      icon: Shield,
      popular: true
    }
  ];

  const categories = [
    { id: 'all', name: 'All Products', count: microSaasProducts.length },
    { id: 'content', name: 'Content Creation', count: microSaasProducts.filter(p => p.category === 'content').length },
    { id: 'social', name: 'Social Media', count: microSaasProducts.filter(p => p.category === 'social').length },
    { id: 'marketing', name: 'Marketing', count: microSaasProducts.filter(p => p.category === 'marketing').length },
    { id: 'productivity', name: 'Productivity', count: microSaasProducts.filter(p => p.category === 'productivity').length },
    { id: 'analytics', name: 'Analytics', count: microSaasProducts.filter(p => p.category === 'analytics').length },
    { id: 'support', name: 'Support', count: microSaasProducts.filter(p => p.category === 'support').length }
  ];

  const filteredProducts = selectedCategory === 'all' 
    ? microSaasProducts 
    : microSaasProducts.filter(product => product.category === selectedCategory);

  const benefits = [
    {
      icon: Zap,
      title: 'Quick Setup',
      description: 'Get started in minutes with our intuitive setup process'
    },
    {
      icon: Shield,
      title: 'Secure & Reliable',
      description: 'Enterprise-grade security with 99.9% uptime guarantee'
    },
    {
      icon: BarChart,
      title: 'Scalable',
      description: 'Grows with your business from startup to enterprise'
    },
    {
      icon: Users,
      title: '24/7 Support',
      description: 'Round-the-clock support from our expert team'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Micro SaaS Solutions - Zion Tech Group | Powerful Business Tools</title>
        <meta name="description" content="Discover our collection of micro SaaS solutions designed to streamline your business operations. AI-powered tools for content, marketing, analytics, and more." />
        <meta name="keywords" content="micro SaaS, business tools, AI solutions, content creation, social media, email marketing, project management, analytics" />
      </Helmet>
      
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(147,51,234,0.3)_0%,transparent_50%)] animate-pulse" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.3)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="relative max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Micro SaaS
            <span className="block bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Solutions
            </span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            Powerful, focused tools designed to solve specific business challenges. 
            Get started in minutes and scale as you grow.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-purple-500 to-blue-600 hover:from-purple-600 hover:to-blue-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">
              Explore Products
            </button>
            <button className="border border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300">
              Start Free Trial
            </button>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Why Choose Our Micro SaaS Solutions?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Built for modern businesses that need powerful, focused tools without the complexity.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg mx-auto mb-4 flex items-center justify-center">
                  <benefit.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{benefit.title}</h3>
                <p className="text-gray-300">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                  selectedCategory === category.id
                    ? 'bg-gradient-to-r from-purple-500 to-blue-600 text-white'
                    : 'bg-white/10 text-gray-300 hover:bg-white/20'
                }`}
              >
                {category.name} ({category.count})
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((product) => (
              <div key={product.id} className={`bg-white/5 backdrop-blur-sm border rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 ${
                product.popular ? 'border-purple-500/50 ring-2 ring-purple-500/20' : 'border-white/10'
              }`}>
                {product.popular && (
                  <div className="mb-4">
                    <span className="bg-gradient-to-r from-purple-500 to-blue-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                      Popular
                    </span>
                  </div>
                )}
                
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg mr-4 flex items-center justify-center">
                    <product.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">{product.title}</h3>
                    <div className="text-2xl font-bold text-cyan-400">{product.pricing}</div>
                  </div>
                </div>
                
                <p className="text-gray-300 mb-6">{product.description}</p>
                
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-gray-300 mb-3">Key Features</h4>
                  <ul className="space-y-2">
                    {product.features.slice(0, 4).map((feature, index) => (
                      <li key={index} className="flex items-center text-sm">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                        <span className="text-gray-300">{feature}</span>
                      </li>
                    ))}
                    {product.features.length > 4 && (
                      <li className="text-sm text-gray-400">
                        +{product.features.length - 4} more features
                      </li>
                    )}
                  </ul>
                </div>
                
                <button className="w-full bg-gradient-to-r from-purple-500 to-blue-600 hover:from-purple-600 hover:to-blue-700 text-white font-bold py-3 px-6 rounded-lg transition-all duration-300 flex items-center justify-center">
                  Start Free Trial
                  <ArrowRight className="w-4 h-4 ml-2" />
                </button>
              </div>
            ))}
          </div>
          
          {filteredProducts.length === 0 && (
            <div className="text-center py-12">
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-2xl font-bold text-white mb-2">No products found</h3>
              <p className="text-gray-300">Try selecting a different category or check back later for new products.</p>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Start with any of our micro SaaS solutions and see the difference they can make. 
            All plans include a 14-day free trial with no credit card required.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-purple-500 to-blue-600 hover:from-purple-600 hover:to-blue-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">
              Start Free Trial
            </button>
            <button className="border border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300">
              Contact Sales
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default MicroSaasPage;
