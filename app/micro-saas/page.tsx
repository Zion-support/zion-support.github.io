'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Zap, Brain, Users, DollarSign, CheckCircle, ArrowRight, Star, Shield, Clock, Globe, Code, BarChart, Settings, Smartphone, Database, Cloud } from 'lucide-react';

const MicroSAASPage: React.FC = () => {
  const microSaasProducts = [
    {
      title: 'AI Project Manager Pro',
      description: 'Intelligent project management with AI-powered task prioritization and deadline prediction.',
      icon: '🎯',
      price: '$49/month',
      originalPrice: '$79/month',
      features: ['AI task prioritization', 'Deadline prediction', 'Team collaboration', 'Progress tracking'],
      benefits: ['60% productivity boost', 'Zero missed deadlines', 'Smart resource allocation', 'Real-time insights'],
      category: 'Productivity',
      rating: 4.8,
      users: '15,000+',
      popular: true
    },
    {
      title: 'AI Content Writer Pro',
      description: 'Advanced AI content generation with SEO optimization and brand voice consistency.',
      icon: '✍️',
      price: '$39/month',
      originalPrice: '$59/month',
      features: ['SEO optimization', 'Brand voice training', 'Multi-language support', 'Content templates'],
      benefits: ['90% faster content creation', 'SEO-optimized content', 'Consistent brand voice', 'Multi-language support'],
      category: 'Content',
      rating: 4.7,
      users: '25,000+',
      popular: true
    },
    {
      title: 'AI CRM Intelligence',
      description: 'Smart CRM with AI-powered lead scoring and automated follow-up sequences.',
      icon: '📊',
      price: '$69/month',
      originalPrice: '$99/month',
      features: ['AI lead scoring', 'Automated follow-ups', 'Sales forecasting', 'Customer insights'],
      benefits: ['40% higher conversion', 'Automated follow-ups', 'Predictive analytics', 'Better customer insights'],
      category: 'Sales',
      rating: 4.9,
      users: '12,000+',
      popular: false
    },
    {
      title: 'AI Analytics Dashboard',
      description: 'Real-time business analytics with AI-powered insights and predictive forecasting.',
      icon: '📈',
      price: '$59/month',
      originalPrice: '$89/month',
      features: ['Real-time analytics', 'Predictive forecasting', 'Custom dashboards', 'Automated reports'],
      benefits: ['Data-driven decisions', 'Predictive insights', 'Custom dashboards', 'Automated reporting'],
      category: 'Analytics',
      rating: 4.6,
      users: '8,500+',
      popular: false
    },
    {
      title: 'AI Email Assistant',
      description: 'Smart email management with AI-powered responses and intelligent scheduling.',
      icon: '📧',
      price: '$29/month',
      originalPrice: '$49/month',
      features: ['AI email responses', 'Smart scheduling', 'Email templates', 'Sentiment analysis'],
      benefits: ['50% faster email handling', 'Professional responses', 'Smart scheduling', 'Sentiment insights'],
      category: 'Communication',
      rating: 4.5,
      users: '18,000+',
      popular: true
    },
    {
      title: 'AI Social Media Manager',
      description: 'Automated social media management with AI content creation and optimal posting times.',
      icon: '📱',
      price: '$45/month',
      originalPrice: '$75/month',
      features: ['AI content creation', 'Optimal posting times', 'Engagement analytics', 'Multi-platform support'],
      benefits: ['300% audience growth', 'Optimal posting times', 'Engaging content', 'Multi-platform management'],
      category: 'Marketing',
      rating: 4.8,
      users: '22,000+',
      popular: true
    }
  ];

  const categories = [
    { name: 'Productivity', icon: Zap, count: 12 },
    { name: 'Content & Marketing', icon: Brain, count: 15 },
    { name: 'Sales & CRM', icon: Users, count: 8 },
    { name: 'Analytics', icon: BarChart, count: 6 },
    { name: 'Communication', icon: Smartphone, count: 10 },
    { name: 'Development', icon: Code, count: 7 }
  ];

  const benefits = [
    {
      icon: DollarSign,
      title: 'Cost Effective',
      description: 'Start with affordable micro-SaaS solutions that scale with your business growth.',
      stats: 'Up to 80% cost savings'
    },
    {
      icon: Clock,
      title: 'Quick Deployment',
      description: 'Deploy AI-powered solutions in minutes, not months. Get started immediately.',
      stats: 'Deploy in under 5 minutes'
    },
    {
      icon: Shield,
      title: 'Enterprise Security',
      description: 'Bank-level security with SOC 2 compliance and end-to-end encryption.',
      stats: '99.9% security uptime'
    },
    {
      icon: Globe,
      title: 'Global Scale',
      description: 'Built for global businesses with multi-region deployment and localization.',
      stats: 'Available in 50+ countries'
    }
  ];

  return (
    <>
      <Helmet>
        <title>Micro SAAS Solutions - Zion Tech Group | AI-Powered Business Tools</title>
        <meta name="description" content="Discover our collection of AI-powered micro-SaaS solutions. Boost productivity, automate workflows, and scale your business with affordable, intelligent tools." />
        <meta name="keywords" content="micro saas, AI business tools, productivity software, AI automation, business intelligence, SaaS solutions" />
        <link rel="canonical" href="https://ziontechgroup.com/micro-saas" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <div className="relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-pink-500/20"></div>
          <div className="relative container mx-auto px-4 py-24">
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                AI-Powered <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">Micro SAAS</span>
              </h1>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Transform your business with our collection of intelligent micro-SaaS solutions. 
                Affordable, powerful, and designed to scale with your growth.
              </p>
              <div className="flex flex-wrap justify-center gap-8 mt-12">
                <div className="text-center">
                  <div className="text-4xl font-bold text-white mb-2">50+</div>
                  <div className="text-gray-300">AI Tools Available</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-white mb-2">100K+</div>
                  <div className="text-gray-300">Active Users</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-white mb-2">99.9%</div>
                  <div className="text-gray-300">Uptime Guarantee</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-white mb-2">24/7</div>
                  <div className="text-gray-300">Support Available</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Categories Section */}
        <div className="container mx-auto px-4 py-20">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Explore by Category</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Find the perfect AI-powered tools for your business needs across different categories.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {categories.map((category, index) => (
              <div key={index} className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 text-center border border-purple-500/20 hover:border-purple-400/40 transition-all duration-300 group cursor-pointer">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg mx-auto mb-4 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <category.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-white font-semibold mb-2">{category.name}</h3>
                <p className="text-gray-400 text-sm">{category.count} tools</p>
              </div>
            ))}
          </div>
        </div>

        {/* Featured Products */}
        <div className="bg-slate-800/30 py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">Featured Micro SAAS Products</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our most popular AI-powered tools trusted by thousands of businesses worldwide.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {microSaasProducts.map((product, index) => (
                <div key={index} className={`bg-slate-900/50 backdrop-blur-sm rounded-2xl p-8 border transition-all duration-300 group hover:scale-105 ${
                  product.popular ? 'border-purple-400/40 ring-2 ring-purple-400/20' : 'border-purple-500/20 hover:border-purple-400/40'
                }`}>
                  {product.popular && (
                    <div className="bg-gradient-to-r from-purple-500 to-pink-500 text-white text-xs font-semibold px-3 py-1 rounded-full inline-block mb-4">
                      Most Popular
                    </div>
                  )}
                  
                  <div className="flex items-center mb-4">
                    <span className="text-4xl mr-4">{product.icon}</span>
                    <div>
                      <h3 className="text-xl font-bold text-white">{product.title}</h3>
                      <div className="flex items-center text-sm text-gray-400">
                        <Star className="w-4 h-4 text-yellow-400 mr-1" />
                        {product.rating} ({product.users})
                      </div>
                    </div>
                  </div>

                  <p className="text-gray-300 mb-6 leading-relaxed">
                    {product.description}
                  </p>

                  <div className="space-y-3 mb-6">
                    {product.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center text-sm text-gray-300">
                        <CheckCircle className="w-4 h-4 text-purple-400 mr-2 flex-shrink-0" />
                        {feature}
                      </div>
                    ))}
                  </div>

                  <div className="border-t border-gray-700 pt-6">
                    <div className="flex items-center justify-between mb-4">
                      <div>
                        <span className="text-2xl font-bold text-white">{product.price}</span>
                        <span className="text-gray-400 line-through ml-2">{product.originalPrice}</span>
                      </div>
                      <span className="bg-purple-500/20 text-purple-300 px-2 py-1 rounded text-xs">
                        {product.category}
                      </span>
                    </div>
                    <button className="w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white py-3 rounded-lg font-semibold hover:from-purple-600 hover:to-pink-600 transition-all duration-300 flex items-center justify-center">
                      Start Free Trial
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Benefits Section */}
        <div className="container mx-auto px-4 py-20">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Why Choose Our Micro SAAS?</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Built for modern businesses that need powerful, affordable, and scalable AI solutions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mx-auto mb-6 flex items-center justify-center">
                  <benefit.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">{benefit.title}</h3>
                <p className="text-gray-300 mb-4 leading-relaxed">
                  {benefit.description}
                </p>
                <div className="text-purple-400 font-semibold">
                  {benefit.stats}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="container mx-auto px-4 py-20">
          <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl p-12 text-center">
            <h2 className="text-4xl font-bold text-white mb-4">Ready to Transform Your Business?</h2>
            <p className="text-xl text-purple-100 mb-8 max-w-2xl mx-auto">
              Join thousands of businesses already using our AI-powered micro-SaaS solutions. 
              Start your free trial today and see the difference AI can make.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="bg-white text-purple-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Start Free Trial
              </a>
              <a
                href="/ai-services"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-colors"
              >
                View All AI Services
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MicroSAASPage;