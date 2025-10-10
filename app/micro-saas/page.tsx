'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { CheckCircle, ArrowRight, Star, Clock, Zap, Shield, Brain, BarChart, Users, TrendingUp, Cloud, MessageSquare } from 'lucide-react';

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
      title: 'AI Analytics Dashboard',
      description: 'Real-time business intelligence and predictive analytics for small to medium businesses',
      features: ['Real-time dashboards', 'Predictive analytics', 'Custom reports', 'Mobile app', 'API integration'],
      price: '$29/month',
      users: 'Up to 10 users',
      popular: true,
      category: 'Analytics'
    },
    {
      id: '2',
      icon: '🔒',
      title: 'Security Monitor Pro',
      description: 'Comprehensive cybersecurity monitoring and threat detection for growing businesses',
      features: ['24/7 monitoring', 'Threat detection', 'Compliance reports', 'Incident response', 'Security training'],
      price: '$49/month',
      users: 'Up to 25 users',
      popular: false,
      category: 'Security'
    },
    {
      id: '3',
      icon: '📈',
      title: 'Project Management AI',
      description: 'AI-powered project management with intelligent task allocation and progress tracking',
      features: ['Smart task management', 'Team collaboration', 'Progress analytics', 'Resource optimization', 'Time tracking'],
      price: '$39/month',
      users: 'Up to 15 users',
      popular: false,
      category: 'Productivity'
    },
    {
      id: '4',
      icon: '💬',
      title: 'Customer Support Bot',
      description: 'AI-powered customer support automation with natural language processing',
      features: ['Chatbot integration', 'Ticket management', 'Knowledge base', 'Multi-channel support', 'Analytics'],
      price: '$19/month',
      users: 'Unlimited',
      popular: false,
      category: 'Support'
    },
    {
      id: '5',
      icon: '☁️',
      title: 'Cloud Backup Manager',
      description: 'Automated cloud backup and disaster recovery for business data protection',
      features: ['Automated backups', 'Disaster recovery', 'Data encryption', 'Version control', 'Cross-platform sync'],
      price: '$24/month',
      users: 'Up to 50 users',
      popular: false,
      category: 'Storage'
    },
    {
      id: '6',
      icon: '🎯',
      title: 'Marketing Automation',
      description: 'AI-driven marketing automation with personalized campaigns and lead nurturing',
      features: ['Email campaigns', 'Lead scoring', 'A/B testing', 'Social media integration', 'ROI tracking'],
      price: '$59/month',
      users: 'Up to 20 users',
      popular: true,
      category: 'Marketing'
    }
  ];

  const categories = ['All', 'Analytics', 'Security', 'Productivity', 'Support', 'Storage', 'Marketing'];

  const features = [
    {
      icon: Zap,
      title: 'Lightning Fast Setup',
      description: 'Get up and running in minutes with our intuitive setup process and pre-configured templates.'
    },
    {
      icon: Shield,
      title: 'Enterprise Security',
      description: 'Bank-level security with end-to-end encryption, SSO, and compliance with industry standards.'
    },
    {
      icon: Users,
      title: 'Team Collaboration',
      description: 'Seamless collaboration tools that keep your team connected and productive from anywhere.'
    },
    {
      icon: TrendingUp,
      title: 'Scalable Growth',
      description: 'Grow from startup to enterprise with flexible pricing and feature-rich solutions.'
    }
  ];

  const pricingTiers = [
    {
      name: 'Starter',
      price: '$19',
      period: '/month',
      description: 'Perfect for small teams getting started',
      features: ['Up to 5 users', 'Basic analytics', 'Email support', '5GB storage', 'Standard security'],
      popular: false
    },
    {
      name: 'Professional',
      price: '$49',
      period: '/month',
      description: 'Ideal for growing businesses',
      features: ['Up to 25 users', 'Advanced analytics', 'Priority support', '50GB storage', 'Enhanced security', 'API access'],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$99',
      period: '/month',
      description: 'For large organizations',
      features: ['Unlimited users', 'Custom analytics', '24/7 support', 'Unlimited storage', 'Enterprise security', 'Custom integrations', 'Dedicated manager'],
      popular: false
    }
  ];

  return (
    <>
      <Helmet>
        <title>Micro SaaS Solutions - Zion Tech Group | AI-Powered Business Tools</title>
        <meta name="description" content="Discover our collection of micro SaaS solutions designed for modern businesses. AI-powered tools for analytics, security, productivity, and more." />
        <meta name="keywords" content="micro SaaS, business tools, AI solutions, productivity software, analytics dashboard, project management, security monitoring" />
      </Helmet>

      <Navigation />
      
      <main className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Micro SaaS Solutions
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Powerful, focused tools designed for modern businesses. Get the functionality you need without the complexity you don't.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-purple-700 hover:to-blue-700 transition-all duration-300 transform hover:scale-105">
                <Star className="w-5 h-5 inline mr-2" />
                Explore Solutions
              </button>
              <button className="bg-white/10 text-white px-8 py-4 rounded-lg font-semibold border border-white/20 hover:bg-white/20 transition-all duration-300">
                <Clock className="w-5 h-5 inline mr-2" />
                Start Free Trial
              </button>
            </div>
          </div>
        </section>

        {/* Products Grid */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Our Micro SaaS Collection
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Choose from our curated selection of specialized tools designed to solve specific business challenges.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {microSaasProducts.map((product) => (
                <div
                  key={product.id}
                  className={`bg-white/10 backdrop-blur-sm rounded-xl p-8 hover:bg-white/20 transition-all duration-300 ${
                    product.popular ? 'ring-2 ring-purple-500' : ''
                  }`}
                >
                  {product.popular && (
                    <div className="bg-purple-600 text-white text-sm font-semibold px-3 py-1 rounded-full inline-block mb-4">
                      Most Popular
                    </div>
                  )}
                  
                  <div className="text-4xl mb-4">{product.icon}</div>
                  <h3 className="text-2xl font-bold text-white mb-2">{product.title}</h3>
                  <p className="text-gray-300 mb-4">{product.description}</p>
                  
                  <div className="mb-6">
                    <span className="text-3xl font-bold text-white">{product.price}</span>
                    <span className="text-gray-400 ml-2">{product.users}</span>
                  </div>
                  
                  <ul className="space-y-2 mb-6">
                    {product.features.map((feature, index) => (
                      <li key={index} className="flex items-center text-gray-300">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <button className="w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white py-3 rounded-lg font-semibold hover:from-purple-700 hover:to-blue-700 transition-all duration-300">
                    Get Started
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 px-4 bg-white/5">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Why Choose Our Micro SaaS Solutions?
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Built with modern businesses in mind, our solutions offer the perfect balance of power and simplicity.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
                  <p className="text-gray-300">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Simple, Transparent Pricing
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Choose the plan that fits your business needs. All plans include our core micro SaaS solutions.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pricingTiers.map((tier, index) => (
                <div
                  key={index}
                  className={`bg-white/10 backdrop-blur-sm rounded-xl p-8 hover:bg-white/20 transition-all duration-300 ${
                    tier.popular ? 'ring-2 ring-purple-500' : ''
                  }`}
                >
                  {tier.popular && (
                    <div className="bg-purple-600 text-white text-sm font-semibold px-3 py-1 rounded-full inline-block mb-4">
                      Most Popular
                    </div>
                  )}
                  
                  <h3 className="text-2xl font-bold text-white mb-2">{tier.name}</h3>
                  <p className="text-gray-300 mb-4">{tier.description}</p>
                  
                  <div className="mb-6">
                    <span className="text-4xl font-bold text-white">{tier.price}</span>
                    <span className="text-gray-400">{tier.period}</span>
                  </div>
                  
                  <ul className="space-y-3 mb-8">
                    {tier.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-gray-300">
                        <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <button className="w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white py-3 rounded-lg font-semibold hover:from-purple-700 hover:to-blue-700 transition-all duration-300">
                    Choose Plan
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4 bg-white/5">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Start your free trial today and discover how our micro SaaS solutions can streamline your operations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-purple-700 hover:to-blue-700 transition-all duration-300 transform hover:scale-105">
                <Zap className="w-5 h-5 inline mr-2" />
                Start Free Trial
              </button>
              <button className="bg-white/10 text-white px-8 py-4 rounded-lg font-semibold border border-white/20 hover:bg-white/20 transition-all duration-300">
                <MessageSquare className="w-5 h-5 inline mr-2" />
                Contact Sales
              </button>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </>
  );
};

export default MicroSaasPage;