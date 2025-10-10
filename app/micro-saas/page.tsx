'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { CheckCircle, ArrowRight, Zap, Star, Users, Clock, Shield, Cloud, BarChart, Target, Mail, Settings, Globe, Lock, TrendingUp } from 'lucide-react';

const MicroSaasPage: React.FC = () => {
  const microSaasProducts = [
    {
      icon: BarChart,
      title: 'AI Analytics Dashboard',
      description: 'Real-time business intelligence and predictive analytics for small to medium businesses',
      features: ['Real-time dashboards', 'Predictive analytics', 'Custom reports', 'Mobile app', 'API integration'],
      price: '$99/month',
      users: 'Up to 50 users',
      popular: true,
      category: 'Analytics'
    },
    {
      icon: Users,
      title: 'AI-Powered CRM',
      description: 'Intelligent customer relationship management with automated lead scoring and personalized interactions',
      features: ['Lead management', 'Email automation', 'Sales forecasting', 'Integration APIs', 'Custom fields'],
      price: '$149/month',
      users: 'Up to 100 users',
      popular: false,
      category: 'CRM'
    },
    {
      icon: Shield,
      title: 'Security Monitoring Suite',
      description: 'Comprehensive cybersecurity monitoring and threat detection for growing businesses',
      features: ['Threat detection', 'Vulnerability scanning', 'Compliance reporting', '24/7 monitoring', 'Incident response'],
      price: '$199/month',
      users: 'Up to 200 users',
      popular: false,
      category: 'Security'
    },
    {
      icon: Cloud,
      title: 'Cloud Infrastructure Manager',
      description: 'Automated cloud resource management and cost optimization for multi-cloud environments',
      features: ['Resource optimization', 'Cost tracking', 'Auto-scaling', 'Multi-cloud support', 'Monitoring'],
      price: '$299/month',
      users: 'Unlimited users',
      popular: true,
      category: 'Infrastructure'
    },
    {
      icon: Mail,
      title: 'Email Marketing Automation',
      description: 'AI-powered email campaigns with personalization and advanced analytics',
      features: ['Email automation', 'Personalization', 'A/B testing', 'Analytics', 'Templates'],
      price: '$79/month',
      users: 'Up to 25,000 contacts',
      popular: false,
      category: 'Marketing'
    },
    {
      icon: Settings,
      title: 'Project Management Pro',
      description: 'Advanced project management with AI-powered insights and team collaboration',
      features: ['Task management', 'Team collaboration', 'AI insights', 'Time tracking', 'Reporting'],
      price: '$129/month',
      users: 'Up to 50 users',
      popular: false,
      category: 'Productivity'
    },
    {
      icon: Target,
      title: 'Lead Generation Engine',
      description: 'Automated lead generation and qualification using AI and machine learning',
      features: ['Lead scoring', 'Automated outreach', 'CRM integration', 'Analytics', 'Custom workflows'],
      price: '$179/month',
      users: 'Up to 10,000 leads',
      popular: false,
      category: 'Sales'
    },
    {
      icon: Globe,
      title: 'Website Builder AI',
      description: 'Create professional websites with AI assistance and drag-and-drop functionality',
      features: ['AI design suggestions', 'Drag-and-drop editor', 'SEO optimization', 'Mobile responsive', 'Hosting included'],
      price: '$89/month',
      users: 'Unlimited websites',
      popular: false,
      category: 'Web Development'
    }
  ];

  const benefits = [
    'No upfront costs or setup fees',
    'Quick deployment in minutes',
    'Scalable solutions that grow with you',
    'Regular updates and new features',
    '24/7 customer support',
    'Easy integration with existing tools',
    'Free trial for all products',
    'Cancel anytime, no long-term contracts'
  ];

  const categories = ['All', 'Analytics', 'CRM', 'Security', 'Infrastructure', 'Marketing', 'Productivity', 'Sales', 'Web Development'];

  const stats = [
    { label: 'Active Users', value: '10,000+', icon: Users },
    { label: 'Products Available', value: '50+', icon: Zap },
    { label: 'Uptime', value: '99.9%', icon: Clock },
    { label: 'Customer Satisfaction', value: '4.9/5', icon: Star }
  ];

  return (
    <>
      <Helmet>
        <title>Micro SAAS Solutions - Zion Tech Group | 50+ AI-Powered Tools</title>
        <meta name="description" content="Discover our collection of 50+ micro SAAS solutions. AI-powered tools for analytics, CRM, security, marketing, and more. Start your free trial today." />
        <meta name="keywords" content="micro saas, AI tools, business software, analytics dashboard, CRM, security monitoring, cloud management" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(147,51,234,0.3)_0%,transparent_50%)] animate-pulse" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.3)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }} />
          <div className="relative max-w-7xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              Micro SAAS
              <span className="block bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent">
                Solutions
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              Discover our collection of 50+ AI-powered micro SAAS tools designed to streamline 
              your business operations. No setup fees, quick deployment, and scalable solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#products"
                className="bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 text-white font-semibold py-4 px-8 rounded-lg transition-all duration-300 flex items-center justify-center"
              >
                <Zap className="w-5 h-5 mr-2" />
                Explore Products
              </a>
              <a
                href="/contact"
                className="border border-white/20 text-white font-semibold py-4 px-8 rounded-lg hover:bg-white/10 transition-all duration-300 flex items-center justify-center"
              >
                <Users className="w-5 h-5 mr-2" />
                Get Free Consultation
              </a>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <stat.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
                  <div className="text-gray-300">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Products Grid */}
        <section id="products" className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">Our Micro SAAS Products</h2>
              <p className="text-xl text-gray-300">Choose from 50+ AI-powered tools to transform your business</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              {microSaasProducts.map((product, index) => (
                <div
                  key={index}
                  className={`bg-white/5 backdrop-blur-sm border rounded-2xl p-6 hover:bg-white/10 transition-all duration-300 group ${
                    product.popular ? 'border-cyan-500/50 shadow-2xl shadow-cyan-500/20' : 'border-white/10'
                  }`}
                >
                  {product.popular && (
                    <div className="absolute -top-3 left-6 bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                      Popular
                    </div>
                  )}
                  
                  <div className="text-center mb-4">
                    <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                      <product.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                      {product.title}
                    </h3>
                    <span className="bg-white/10 text-cyan-400 px-2 py-1 rounded text-xs">
                      {product.category}
                    </span>
                  </div>
                  
                  <p className="text-gray-300 mb-4 text-sm leading-relaxed text-center">
                    {product.description}
                  </p>
                  
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-white mb-2">Key Features:</h4>
                    <ul className="space-y-1">
                      {product.features.slice(0, 3).map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-sm text-gray-300">
                          <CheckCircle className="w-3 h-3 text-green-400 mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                      {product.features.length > 3 && (
                        <li className="text-gray-400 text-sm">
                          +{product.features.length - 3} more features
                        </li>
                      )}
                    </ul>
                  </div>
                  
                  <div className="text-center mb-4">
                    <div className="text-2xl font-bold text-cyan-400 mb-1">{product.price}</div>
                    <div className="text-sm text-gray-400">{product.users}</div>
                  </div>
                  
                  <button className="w-full bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 group-hover:scale-105">
                    Start Free Trial
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 px-4 bg-slate-800/50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">Why Choose Our Micro SAAS?</h2>
              <p className="text-xl text-gray-300">Built for modern businesses that need powerful, affordable solutions</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <CheckCircle className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-3">{benefit}</h3>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-gradient-to-r from-cyan-600 to-purple-600 rounded-2xl p-12">
              <h2 className="text-4xl font-bold text-white mb-4">
                Ready to Get Started?
              </h2>
              <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                Choose the micro SAAS solution that fits your business needs. 
                Start with a free trial and scale as you grow.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="bg-white text-cyan-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200 flex items-center justify-center space-x-2"
                >
                  <Zap className="w-5 h-5" />
                  <span>Start Free Trial</span>
                </a>
                <a
                  href="/pricing"
                  className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors duration-200"
                >
                  View All Plans
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default MicroSaasPage;