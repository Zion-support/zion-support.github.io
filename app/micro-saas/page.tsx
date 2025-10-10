'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Zap, CheckCircle, ArrowRight, Star, Users, Shield, Cloud, BarChart3 } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const MicroSaasPage: React.FC = () => {
  const microSaasProducts = [
    {
      icon: BarChart3,
      title: 'AI Analytics Dashboard',
      description: 'Real-time business intelligence and predictive analytics for small to medium businesses',
      features: ['Real-time dashboards', 'Predictive analytics', 'Custom reports', 'Mobile app'],
      price: '$99/month',
      users: 'Up to 50 users',
      popular: true
    },
    {
      icon: Users,
      title: 'AI-Powered CRM',
      description: 'Intelligent customer relationship management with automated lead scoring and personalized interactions',
      features: ['Lead management', 'Email automation', 'Sales forecasting', 'Integration APIs'],
      price: '$149/month',
      users: 'Up to 100 users',
      popular: false
    },
    {
      icon: Shield,
      title: 'Security Monitoring Suite',
      description: 'Comprehensive cybersecurity monitoring and threat detection for growing businesses',
      features: ['Threat detection', 'Vulnerability scanning', 'Compliance reporting', '24/7 monitoring'],
      price: '$199/month',
      users: 'Up to 200 users',
      popular: false
    },
    {
      icon: Cloud,
      title: 'Cloud Infrastructure Manager',
      description: 'Automated cloud resource management and cost optimization for multi-cloud environments',
      features: ['Resource optimization', 'Cost tracking', 'Auto-scaling', 'Multi-cloud support'],
      price: '$299/month',
      users: 'Unlimited users',
      popular: false
    }
  ];

  const benefits = [
    'No upfront costs',
    'Quick deployment',
    'Scalable solutions',
    'Regular updates',
    '24/7 support',
    'Easy integration'
  ];

  const features = [
    {
      icon: Zap,
      title: 'Lightning Fast Setup',
      description: 'Get up and running in minutes, not months'
    },
    {
      icon: CheckCircle,
      title: 'Proven Solutions',
      description: 'Battle-tested tools used by thousands of businesses'
    },
    {
      icon: ArrowRight,
      title: 'Easy Integration',
      description: 'Seamlessly connect with your existing tools'
    }
  ];

  return (
    <>
      <Helmet>
        <title>Micro SaaS Services | Zion Tech Group | Ready-to-Use Solutions</title>
        <meta name="description" content="Discover our micro SaaS solutions - ready-to-use AI and IT tools that can be deployed quickly and scaled as your business grows." />
        <meta name="keywords" content="micro SaaS, ready-to-use solutions, AI tools, business software, quick deployment, scalable solutions" />
      </Helmet>

      <Navigation />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(147,51,234,0.3)_0%,transparent_50%)] animate-pulse" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.3)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }} />
          <div className="relative max-w-7xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              Micro
              <span className="block bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent">
                SaaS Solutions
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              Ready-to-use AI and IT solutions that can be deployed quickly and scaled as your business grows. 
              No complex setup, no lengthy development cycles.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-purple-500 to-cyan-500 text-white py-3 px-8 rounded-lg font-semibold hover:from-purple-600 hover:to-cyan-600 transition-all duration-300 flex items-center justify-center gap-2">
                Start Free Trial
                <Zap className="w-4 h-4" />
              </button>
              <button className="border border-white/20 text-white py-3 px-8 rounded-lg font-semibold hover:bg-white/10 transition-all duration-300">
                View All Solutions
              </button>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">Why Choose Micro SaaS?</h2>
              <p className="text-xl text-gray-300">Get the benefits of enterprise solutions without the complexity</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-cyan-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">{feature.title}</h3>
                  <p className="text-gray-300">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Products Grid */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">Our Micro SaaS Solutions</h2>
              <p className="text-xl text-gray-300">Choose from our range of ready-to-use business solutions</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {microSaasProducts.map((product, index) => (
                <div
                  key={index}
                  className={`bg-white/5 backdrop-blur-sm border rounded-xl p-6 hover:bg-white/10 transition-all duration-300 group relative ${
                    product.popular ? 'border-cyan-400/50 ring-2 ring-cyan-400/20' : 'border-white/10'
                  }`}
                >
                  {product.popular && (
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                      <span className="bg-cyan-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                        Most Popular
                      </span>
                    </div>
                  )}
                  
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 bg-cyan-500/20 rounded-lg flex items-center justify-center">
                      <product.icon className="w-6 h-6 text-cyan-400" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors">
                        {product.title}
                      </h3>
                      <p className="text-gray-400 text-sm">{product.users}</p>
                    </div>
                  </div>
                  
                  <p className="text-gray-300 mb-6">{product.description}</p>
                  
                  <div className="mb-6">
                    <h4 className="text-white font-semibold mb-3">Key Features:</h4>
                    <ul className="space-y-2">
                      {product.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center gap-2 text-gray-300 text-sm">
                          <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="flex items-center justify-between mb-6">
                    <div>
                      <span className="text-3xl font-bold text-white">{product.price}</span>
                      <span className="text-gray-400 text-sm ml-1">/month</span>
                    </div>
                    <div className="flex items-center gap-1">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                      ))}
                      <span className="text-gray-400 text-sm ml-1">(4.9)</span>
                    </div>
                  </div>
                  
                  <button className="w-full bg-gradient-to-r from-purple-500 to-cyan-500 text-white py-3 px-4 rounded-lg font-semibold hover:from-purple-600 hover:to-cyan-600 transition-all duration-300 flex items-center justify-center gap-2">
                    Start Free Trial
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl font-bold text-white mb-6">Why Micro SaaS?</h2>
                <p className="text-xl text-gray-300 mb-8">
                  Traditional enterprise solutions can be expensive, complex, and time-consuming to implement. 
                  Our micro SaaS approach gives you the power of enterprise tools with the simplicity of consumer software.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {benefits.map((benefit, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                      <span className="text-gray-300">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-8">
                <h3 className="text-2xl font-bold text-white mb-6">Ready to Get Started?</h3>
                <p className="text-gray-300 mb-6">
                  All our micro SaaS solutions come with a 14-day free trial. No credit card required. 
                  Start building your business today.
                </p>
                <div className="space-y-4">
                  <button className="w-full bg-gradient-to-r from-purple-500 to-cyan-500 text-white py-3 px-6 rounded-lg font-semibold hover:from-purple-600 hover:to-cyan-600 transition-all duration-300">
                    Start Free Trial
                  </button>
                  <button className="w-full border border-white/20 text-white py-3 px-6 rounded-lg font-semibold hover:bg-white/10 transition-all duration-300">
                    Schedule Demo
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-8">
              <h2 className="text-3xl font-bold text-white mb-4">Ready to Transform Your Business?</h2>
              <p className="text-xl text-gray-300 mb-8">
                Join thousands of businesses that have already transformed their operations with our micro SaaS solutions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="bg-gradient-to-r from-purple-500 to-cyan-500 text-white py-3 px-8 rounded-lg font-semibold hover:from-purple-600 hover:to-cyan-600 transition-all duration-300 flex items-center justify-center gap-2"
                >
                  <Zap className="w-4 h-4" />
                  Start Free Trial
                </Link>
                <Link
                  to="/pricing"
                  className="border border-white/20 text-white py-3 px-8 rounded-lg font-semibold hover:bg-white/10 transition-all duration-300"
                >
                  View All Plans
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
      
      <Footer />
    </>
  );
};

export default MicroSaasPage;