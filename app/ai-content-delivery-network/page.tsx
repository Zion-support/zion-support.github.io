'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Globe, Zap, Shield, Target, CheckCircle, ArrowRight, Phone, Mail, Star, TrendingUp, Users, Settings, Cloud, Database, Lock, Brain, Cpu, Eye, Activity } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const AIContentDeliveryNetworkPage: React.FC = () => {
  const features = [
    {
      icon: Globe,
      title: 'Global CDN Network',
      description: 'Worldwide content delivery network with AI-powered optimization for maximum performance',
      benefits: ['200+ edge locations', 'Global coverage', 'Low latency', 'High availability']
    },
    {
      icon: Zap,
      title: 'AI-Powered Optimization',
      description: 'Intelligent content optimization and caching strategies based on user behavior and patterns',
      benefits: ['Smart caching', 'Predictive prefetching', 'Dynamic optimization', 'Performance analytics']
    },
    {
      icon: Shield,
      title: 'Advanced Security',
      description: 'Comprehensive security features including DDoS protection and SSL encryption',
      benefits: ['DDoS protection', 'SSL/TLS encryption', 'WAF integration', 'Threat detection']
    },
    {
      icon: Target,
      title: 'Real-Time Analytics',
      description: 'Detailed analytics and monitoring for content delivery performance and user experience',
      benefits: ['Performance metrics', 'User analytics', 'Real-time monitoring', 'Custom dashboards']
    }
  ];

  const services = [
    {
      title: 'Static Content Delivery',
      description: 'Fast delivery of static assets like images, CSS, and JavaScript files',
      icon: Cloud,
      features: ['Image optimization', 'Compression', 'Caching', 'Version control']
    },
    {
      title: 'Video Streaming',
      description: 'High-quality video streaming with adaptive bitrate and global distribution',
      icon: Activity,
      features: ['Adaptive streaming', 'Multiple formats', 'Global distribution', 'Quality optimization']
    },
    {
      title: 'API Acceleration',
      description: 'Accelerate API responses with intelligent caching and optimization',
      icon: Database,
      features: ['API caching', 'Response optimization', 'Rate limiting', 'Load balancing']
    },
    {
      title: 'Mobile Optimization',
      description: 'Specialized optimization for mobile devices and varying network conditions',
      icon: Users,
      features: ['Mobile-first design', 'Network adaptation', 'Battery optimization', 'Offline support']
    }
  ];

  const benefits = [
    'Reduce load times by 70%',
    'Improve user experience',
    'Reduce bandwidth costs by 50%',
    'Increase conversion rates',
    'Enhance SEO performance',
    'Scale globally with ease'
  ];

  const pricing = [
    {
      name: 'Starter',
      price: '$99',
      period: '/month',
      description: 'Perfect for small websites and applications',
      features: [
        '100GB bandwidth',
        'Basic analytics',
        'Email support',
        'Standard security',
        'Up to 10 domains'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '$299',
      period: '/month',
      description: 'Ideal for growing businesses',
      features: [
        '1TB bandwidth',
        'Advanced analytics',
        'Priority support',
        'Enhanced security',
        'Unlimited domains',
        'API access'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      period: '',
      description: 'For large-scale deployments',
      features: [
        'Unlimited bandwidth',
        'Custom analytics',
        'Dedicated support',
        'Advanced security',
        'White-label solutions',
        'SLA guarantee'
      ],
      popular: false
    }
  ];

  return (
    <>
      <Helmet>
        <title>AI Content Delivery Network | Zion Tech Group</title>
        <meta name="description" content="Professional AI content delivery network services by Zion Tech Group. Advanced AI and IT solutions for your business." />
        <meta name="keywords" content="ai content delivery network, CDN, AI solutions, IT services, Zion Tech Group" />
      </Helmet>

      <Navigation />
      <main className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                AI Content Delivery Network
                <span className="block text-purple-400">Solutions</span>
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Professional AI content delivery network services powered by advanced AI and cutting-edge technology. 
                Deliver content faster and more efficiently worldwide.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-purple-700 transition-colors">
                  Get Started
                </button>
                <button className="border border-purple-400 text-purple-400 px-8 py-4 rounded-lg font-semibold hover:bg-purple-50 hover:text-purple-600 transition-colors">
                  View Demo
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                CDN Features
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Advanced AI-powered content delivery capabilities
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20 hover:bg-white/20 transition-colors">
                  <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                    <feature.icon className="w-6 h-6 text-purple-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
                  <p className="text-gray-300 mb-4">{feature.description}</p>
                  <ul className="space-y-2">
                    {feature.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-300">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                CDN Services
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Comprehensive content delivery solutions
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {services.map((service, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20">
                  <div className="w-12 h-12 bg-cyan-100 rounded-lg flex items-center justify-center mb-4">
                    <service.icon className="w-6 h-6 text-cyan-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">{service.title}</h3>
                  <p className="text-gray-300 mb-4">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="text-sm text-gray-300">
                        • {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Why Choose Our CDN?
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Proven results that enhance your content delivery
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-green-400 mr-3 mt-1 flex-shrink-0" />
                  <p className="text-lg text-gray-300">{benefit}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Choose Your Plan
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Flexible pricing for content delivery solutions
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {pricing.map((plan, index) => (
                <div key={index} className={`bg-white/10 backdrop-blur-sm p-8 rounded-xl border ${plan.popular ? 'border-purple-400' : 'border-white/20'}`}>
                  {plan.popular && (
                    <div className="bg-purple-400 text-slate-900 text-sm font-semibold px-3 py-1 rounded-full inline-block mb-4">
                      Most Popular
                    </div>
                  )}
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <div className="mb-4">
                    <span className="text-4xl font-bold text-white">{plan.price}</span>
                    <span className="text-gray-300">{plan.period}</span>
                  </div>
                  <p className="text-gray-300 mb-6">{plan.description}</p>
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center">
                        <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                        <span className="text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <button className={`w-full py-3 px-6 rounded-lg font-semibold transition-colors ${
                    plan.popular 
                      ? 'bg-purple-600 text-white hover:bg-purple-700' 
                      : 'border border-white/30 text-white hover:bg-white/10'
                  }`}>
                    Get Started
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Accelerate Your Content?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Start your CDN journey today and deliver content faster worldwide
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-purple-700 transition-colors">
                Start Free Trial
              </button>
              <button className="border border-purple-400 text-purple-400 px-8 py-4 rounded-lg font-semibold hover:bg-purple-50 hover:text-purple-600 transition-colors">
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

export default AIContentDeliveryNetworkPage;