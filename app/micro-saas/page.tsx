'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Zap, CheckCircle, ArrowRight, Star, Users, Clock, Shield, Cloud, BarChart, Mail, Calendar, FileText } from 'lucide-react';

const MicroSaasPage: React.FC = () => {
  const microSaasProducts = [
    {
      icon: BarChart,
      title: 'AI Analytics Dashboard',
      description: 'Real-time business intelligence and predictive analytics for small to medium businesses',
      features: ['Real-time dashboards', 'Predictive analytics', 'Custom reports', 'Mobile app', 'API integration'],
      price: '$99/month',
      users: 'Up to 50 users',
      category: 'Analytics',
      popular: true
    },
    {
      icon: Users,
      title: 'AI-Powered CRM',
      description: 'Intelligent customer relationship management with automated lead scoring and personalized interactions',
      features: ['Lead management', 'Email automation', 'Sales forecasting', 'Integration APIs', 'AI insights'],
      price: '$149/month',
      users: 'Up to 100 users',
      category: 'CRM',
      popular: false
    },
    {
      icon: Shield,
      title: 'Security Monitoring Suite',
      description: 'Comprehensive cybersecurity monitoring and threat detection for growing businesses',
      features: ['Threat detection', 'Vulnerability scanning', 'Compliance reporting', '24/7 monitoring', 'Incident response'],
      price: '$199/month',
      users: 'Up to 200 users',
      category: 'Security',
      popular: false
    },
    {
      icon: Cloud,
      title: 'Cloud Infrastructure Manager',
      description: 'Automated cloud resource management and cost optimization for multi-cloud environments',
      features: ['Resource optimization', 'Cost tracking', 'Auto-scaling', 'Multi-cloud support', 'Performance monitoring'],
      price: '$299/month',
      users: 'Unlimited users',
      category: 'Infrastructure',
      popular: false
    },
    {
      icon: Mail,
      title: 'AI Email Marketing',
      description: 'Intelligent email marketing automation with AI-powered personalization and optimization',
      features: ['Email automation', 'AI personalization', 'A/B testing', 'Analytics', 'Template library'],
      price: '$79/month',
      users: 'Up to 25,000 contacts',
      category: 'Marketing',
      popular: false
    },
    {
      icon: Calendar,
      title: 'Smart Scheduling Assistant',
      description: 'AI-powered scheduling and calendar management with intelligent meeting optimization',
      features: ['Smart scheduling', 'Meeting optimization', 'Calendar sync', 'Team coordination', 'Time zone handling'],
      price: '$49/month',
      users: 'Up to 25 users',
      category: 'Productivity',
      popular: false
    },
    {
      icon: FileText,
      title: 'Document AI Processor',
      description: 'Automated document processing and analysis with AI-powered data extraction and insights',
      features: ['Document processing', 'Data extraction', 'OCR technology', 'Template recognition', 'Workflow automation'],
      price: '$129/month',
      users: 'Up to 1,000 documents/month',
      category: 'Document Management',
      popular: false
    },
    {
      icon: Zap,
      title: 'Workflow Automation Pro',
      description: 'No-code workflow automation platform for business process optimization and efficiency',
      features: ['Visual workflow builder', '500+ integrations', 'Conditional logic', 'Error handling', 'Analytics'],
      price: '$89/month',
      users: 'Up to 50 workflows',
      category: 'Automation',
      popular: false
    }
  ];

  const benefits = [
    'No upfront costs or setup fees',
    'Quick deployment in 24-48 hours',
    'Scalable solutions that grow with you',
    'Regular updates and new features',
    '24/7 technical support included',
    'Easy integration with existing tools',
    'Free data migration assistance',
    '30-day money-back guarantee'
  ];

  const categories = [
    { name: 'All Products', count: microSaasProducts.length },
    { name: 'Analytics', count: microSaasProducts.filter(p => p.category === 'Analytics').length },
    { name: 'CRM', count: microSaasProducts.filter(p => p.category === 'CRM').length },
    { name: 'Security', count: microSaasProducts.filter(p => p.category === 'Security').length },
    { name: 'Infrastructure', count: microSaasProducts.filter(p => p.category === 'Infrastructure').length },
    { name: 'Marketing', count: microSaasProducts.filter(p => p.category === 'Marketing').length },
    { name: 'Productivity', count: microSaasProducts.filter(p => p.category === 'Productivity').length },
    { name: 'Automation', count: microSaasProducts.filter(p => p.category === 'Automation').length }
  ];

  return (
    <>
      <Helmet>
        <title>Micro SAAS Solutions - Zion Tech Group | 50+ AI-Powered Tools</title>
        <meta name="description" content="Discover our collection of 50+ micro SAAS solutions. AI-powered tools for analytics, CRM, security, marketing, and more. Start your free trial today." />
        <meta name="keywords" content="micro saas, AI tools, business software, analytics dashboard, CRM, security monitoring, cloud management, workflow automation" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(147,51,234,0.3)_0%,transparent_50%)] animate-pulse" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.3)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }} />
          <div className="relative max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 neon-text">
              Micro SAAS Solutions
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Discover our collection of 50+ AI-powered micro SAAS tools designed to solve specific business challenges. 
              Start with a free trial and scale as you grow.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="cyber-button text-center py-4 px-8"
              >
                Start Free Trial
              </Link>
              <Link
                to="/pricing"
                className="border-2 border-cyan-500 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-500 hover:text-white transition-all duration-300 text-center"
              >
                View All Plans
              </Link>
            </div>
          </div>
        </section>

        {/* Categories */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-white mb-4 neon-text">Browse by Category</h2>
              <p className="text-xl text-gray-300">Find the perfect solution for your business needs</p>
            </div>
            <div className="flex flex-wrap justify-center gap-4">
              {categories.map((category, index) => (
                <button
                  key={index}
                  className="cyber-card hologram-card px-6 py-3 hover:scale-105 transition-all duration-300"
                >
                  <span className="text-white font-semibold">{category.name}</span>
                  <span className="ml-2 text-cyan-400">({category.count})</span>
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Products */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-white mb-4 neon-text">Featured Products</h2>
              <p className="text-xl text-gray-300">Our most popular micro SAAS solutions</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              {microSaasProducts.map((product, index) => (
                <div key={index} className={`cyber-card hologram-card p-6 hover:scale-105 transition-all duration-300 ${product.popular ? 'ring-2 ring-cyan-500' : ''}`}>
                  {product.popular && (
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                      <div className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-3 py-1 rounded-full text-sm font-semibold flex items-center">
                        <Star className="w-4 h-4 mr-1" />
                        Popular
                      </div>
                    </div>
                  )}
                  
                  <div className="text-center mb-6">
                    <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                      <product.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2">{product.title}</h3>
                    <p className="text-cyan-400 text-sm font-semibold">{product.category}</p>
                  </div>

                  <p className="text-gray-300 mb-6 text-sm">{product.description}</p>

                  <div className="mb-6">
                    <h4 className="text-white font-semibold mb-3 text-sm">Key Features:</h4>
                    <ul className="space-y-2">
                      {product.features.slice(0, 3).map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-sm">
                          <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                          <span className="text-gray-300">{feature}</span>
                        </li>
                      ))}
                      {product.features.length > 3 && (
                        <li className="text-cyan-400 text-sm">
                          +{product.features.length - 3} more features
                        </li>
                      )}
                    </ul>
                  </div>

                  <div className="text-center mb-6">
                    <div className="text-2xl font-bold text-cyan-400 mb-1">{product.price}</div>
                    <div className="text-gray-400 text-sm">{product.users}</div>
                  </div>

                  <Link
                    to="/contact"
                    className="w-full cyber-button text-center py-3 block"
                  >
                    Start Free Trial
                    <ArrowRight className="w-4 h-4 ml-2 inline" />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 px-4 bg-gray-900/50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-white mb-4 neon-text">Why Choose Our Micro SAAS Solutions?</h2>
              <p className="text-xl text-gray-300">Experience the benefits of our AI-powered tools</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="cyber-card hologram-card p-6 text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-teal-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-3">{benefit}</h3>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Comparison */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-white mb-4 neon-text">Simple, Transparent Pricing</h2>
              <p className="text-xl text-gray-300">No hidden fees, no long-term contracts</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="cyber-card hologram-card p-8 text-center">
                <h3 className="text-2xl font-bold text-white mb-4">Starter</h3>
                <div className="text-4xl font-bold text-cyan-400 mb-2">$49</div>
                <div className="text-gray-400 mb-6">per month</div>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                    <span className="text-gray-300">1 Micro SAAS tool</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                    <span className="text-gray-300">Up to 10 users</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                    <span className="text-gray-300">Email support</span>
                  </li>
                </ul>
                <Link to="/contact" className="w-full cyber-button py-3 block">
                  Get Started
                </Link>
              </div>

              <div className="cyber-card hologram-card p-8 text-center ring-2 ring-cyan-500 scale-105">
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                    Most Popular
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Professional</h3>
                <div className="text-4xl font-bold text-cyan-400 mb-2">$149</div>
                <div className="text-gray-400 mb-6">per month</div>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                    <span className="text-gray-300">3 Micro SAAS tools</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                    <span className="text-gray-300">Up to 50 users</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                    <span className="text-gray-300">Priority support</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                    <span className="text-gray-300">API access</span>
                  </li>
                </ul>
                <Link to="/contact" className="w-full cyber-button py-3 block">
                  Get Started
                </Link>
              </div>

              <div className="cyber-card hologram-card p-8 text-center">
                <h3 className="text-2xl font-bold text-white mb-4">Enterprise</h3>
                <div className="text-4xl font-bold text-cyan-400 mb-2">$299</div>
                <div className="text-gray-400 mb-6">per month</div>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                    <span className="text-gray-300">Unlimited tools</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                    <span className="text-gray-300">Unlimited users</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                    <span className="text-gray-300">24/7 support</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                    <span className="text-gray-300">Custom integrations</span>
                  </li>
                </ul>
                <Link to="/contact" className="w-full cyber-button py-3 block">
                  Get Started
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="cyber-card hologram-card p-8">
              <h2 className="text-3xl font-bold text-white mb-4">Ready to Get Started?</h2>
              <p className="text-gray-300 mb-8 text-lg">
                Choose the micro SAAS solution that fits your business needs. 
                Start with a free trial and scale as you grow.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="cyber-button text-center py-4 px-8"
                >
                  Start Free Trial
                </Link>
                <Link
                  to="/pricing"
                  className="border-2 border-cyan-500 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-500 hover:text-white transition-all duration-300 text-center"
                >
                  View All Plans
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