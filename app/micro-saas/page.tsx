'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { CheckCircle, ArrowRight, Star, Zap, Shield, Users } from 'lucide-react';

const MicroSaasPage: React.FC = () => {
  const microSaasProducts = [
    {
      icon: '📊',
      title: 'AI Analytics Dashboard',
      description: 'Real-time business intelligence and predictive analytics for small to medium businesses',
      features: ['Real-time dashboards', 'Predictive analytics', 'Custom reports', 'Mobile app'],
      price: '$99/month',
      users: 'Up to 50 users',
      category: 'Analytics'
    },
    {
      icon: '👥',
      title: 'AI-Powered CRM',
      description: 'Intelligent customer relationship management with automated lead scoring and personalized interactions',
      features: ['Lead scoring', 'Email automation', 'Sales forecasting', 'Integration hub'],
      price: '$149/month',
      users: 'Up to 100 users',
      category: 'CRM'
    },
    {
      icon: '🔒',
      title: 'Security Monitoring Suite',
      description: 'Comprehensive cybersecurity monitoring and threat detection for small businesses',
      features: ['Threat detection', 'Vulnerability scanning', 'Compliance reporting', 'Incident response'],
      price: '$199/month',
      users: 'Unlimited',
      category: 'Security'
    },
    {
      icon: '☁️',
      title: 'Cloud Infrastructure Manager',
      description: 'Simplified cloud resource management and cost optimization across multiple providers',
      features: ['Multi-cloud support', 'Cost optimization', 'Auto-scaling', 'Monitoring'],
      price: '$79/month',
      users: 'Up to 25 users',
      category: 'Cloud'
    },
    {
      icon: '📧',
      title: 'Email Marketing Automation',
      description: 'Advanced email marketing platform with AI-powered personalization and automation',
      features: ['AI personalization', 'A/B testing', 'Analytics', 'Template library'],
      price: '$59/month',
      users: 'Up to 10,000 contacts',
      category: 'Marketing'
    },
    {
      icon: '📋',
      title: 'Project Management Pro',
      description: 'AI-enhanced project management with intelligent task assignment and progress tracking',
      features: ['AI task assignment', 'Progress tracking', 'Team collaboration', 'Resource planning'],
      price: '$89/month',
      users: 'Up to 30 users',
      category: 'Productivity'
    }
  ];

  const benefits = [
    {
      icon: Zap,
      title: 'Quick Deployment',
      description: 'Get up and running in minutes, not months'
    },
    {
      icon: Shield,
      title: 'Enterprise Security',
      description: 'Bank-level security for all your data'
    },
    {
      icon: Users,
      title: '24/7 Support',
      description: 'Round-the-clock support from our expert team'
    }
  ];

  return (
    <>
      <Helmet>
        <title>Micro SAAS Solutions | Zion Tech Group</title>
        <meta name="description" content="Discover our collection of 50+ AI-powered micro SAAS solutions designed for small to medium businesses. Quick deployment, affordable pricing, enterprise features." />
        <meta name="keywords" content="micro SAAS, AI tools, business software, productivity tools, small business solutions" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Micro <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">SAAS</span> Solutions
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Discover our collection of 50+ AI-powered micro SAAS solutions designed specifically for small to medium businesses. 
              Quick deployment, affordable pricing, enterprise-grade features.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/demo"
                className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 flex items-center justify-center"
              >
                Try Free Demo
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link
                to="/pricing"
                className="border-2 border-cyan-500 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-500/10 transition-all duration-300 flex items-center justify-center"
              >
                View All Plans
              </Link>
            </div>
          </div>
        </section>

        {/* Products Grid */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-white mb-4">Our Micro SAAS Collection</h2>
              <p className="text-gray-300">Choose from our growing library of specialized business tools</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {microSaasProducts.map((product, index) => (
                <div key={index} className="bg-slate-800/50 backdrop-blur-sm rounded-lg p-6 hover:bg-slate-800/70 transition-all duration-300 group">
                  <div className="text-4xl mb-4">{product.icon}</div>
                  
                  <div className="mb-4">
                    <span className="px-3 py-1 bg-cyan-500/20 text-cyan-400 text-sm rounded-full">
                      {product.category}
                    </span>
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                    {product.title}
                  </h3>
                  
                  <p className="text-gray-300 mb-4 text-sm">
                    {product.description}
                  </p>
                  
                  <ul className="space-y-2 mb-6">
                    {product.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-gray-300">
                        <CheckCircle className="w-4 h-4 text-cyan-400 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <div className="flex items-center justify-between mb-4">
                    <div className="text-2xl font-bold text-white">
                      {product.price}
                    </div>
                    <div className="text-sm text-gray-400">
                      {product.users}
                    </div>
                  </div>
                  
                  <button className="w-full bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-medium py-3 rounded-lg hover:from-cyan-600 hover:to-purple-600 transition-all duration-300">
                    Start Free Trial
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-white mb-4">Why Choose Our Micro SAAS?</h2>
              <p className="text-gray-300">Built for modern businesses that need powerful tools without the complexity</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <benefit.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-400">
                    {benefit.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features List */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-cyan-500/20">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-white mb-4">What You Get</h2>
                <p className="text-gray-300">All the benefits of enterprise software without the complexity</p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  'No upfront costs or setup fees',
                  'Quick deployment in minutes',
                  'Scalable solutions that grow with you',
                  'Regular updates and new features',
                  '24/7 customer support',
                  'Easy integration with existing tools',
                  'Mobile apps for all solutions',
                  'Advanced security and compliance',
                  'Custom branding options',
                  'API access for developers',
                  'White-label solutions available',
                  'Multi-language support'
                ].map((feature, index) => (
                  <div key={index} className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-cyan-400 mr-3 flex-shrink-0" />
                    <span className="text-gray-300">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-cyan-500/20">
              <h2 className="text-3xl font-bold text-white mb-4">
                Ready to Transform Your Business?
              </h2>
              <p className="text-gray-300 mb-6">
                Start with a free trial and see how our micro SAAS solutions can boost your productivity and growth.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/demo"
                  className="px-8 py-3 bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-medium rounded-lg hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 flex items-center justify-center"
                >
                  Start Free Trial
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
                <Link
                  to="/contact"
                  className="px-8 py-3 border border-cyan-500 text-cyan-400 font-medium rounded-lg hover:bg-cyan-500/10 transition-all duration-300"
                >
                  Talk to an Expert
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default MicroSaasPage;