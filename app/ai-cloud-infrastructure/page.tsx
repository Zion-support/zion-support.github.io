'use client';
import React, { useState, useCallback, memo } from 'react';
import { Helmet } from 'react-helmet-async';
import { Cloud, Server, Database, Shield, Zap, Target, CheckCircle, ArrowRight, Phone, Mail, Star, TrendingUp, Users, Lock, Settings, Globe, Brain, Cpu } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const AICloudInfrastructurePage: React.FC = memo(() => {
  const [isLoaded, setIsLoaded] = useState(false);

  React.useEffect(() => {
    setIsLoaded(true);
  }, []);

  const features = [
    {
      icon: Cloud,
      title: 'AI-Powered Cloud Management',
      description: 'Intelligent cloud resource optimization and automated scaling based on demand patterns',
      color: 'text-purple-400'
    },
    {
      icon: Server,
      title: 'Hybrid Cloud Solutions',
      description: 'Seamless integration between on-premises and cloud infrastructure with AI-driven optimization',
      color: 'text-blue-400'
    },
    {
      icon: Database,
      title: 'Smart Data Management',
      description: 'AI-powered data storage, backup, and recovery solutions with predictive analytics',
      color: 'text-green-400'
    },
    {
      icon: Shield,
      title: 'Enterprise Security',
      description: 'Advanced security monitoring and compliance management for cloud infrastructure',
      color: 'text-orange-400'
    }
  ];

  const services = [
    {
      title: 'Cloud Migration',
      description: 'Seamless migration to cloud infrastructure with AI-powered optimization',
      icon: Cloud,
      features: ['Zero-downtime migration', 'Cost optimization', 'Performance tuning', 'Security compliance']
    },
    {
      title: 'Infrastructure Monitoring',
      description: 'Real-time monitoring and alerting for cloud infrastructure performance',
      icon: Target,
      features: ['Performance metrics', 'Resource utilization', 'Anomaly detection', 'Predictive alerts']
    },
    {
      title: 'Auto-Scaling',
      description: 'Intelligent auto-scaling based on demand patterns and predictive analytics',
      icon: Zap,
      features: ['Demand forecasting', 'Resource optimization', 'Cost management', 'Performance optimization']
    },
    {
      title: 'Disaster Recovery',
      description: 'Comprehensive disaster recovery solutions with AI-powered backup strategies',
      icon: Shield,
      features: ['Automated backups', 'Recovery testing', 'RTO optimization', 'Data integrity']
    }
  ];

  const benefits = [
    'Reduce cloud costs by up to 40%',
    'Improve performance by 60%',
    'Enhance security and compliance',
    'Automate infrastructure management',
    'Scale efficiently with demand',
    'Minimize downtime and outages'
  ];

  const pricing = [
    {
      name: 'Starter',
      price: '$299',
      period: '/month',
      description: 'Perfect for small businesses starting their cloud journey',
      features: [
        'Basic cloud management',
        'Standard monitoring',
        'Email support',
        'Up to 5 servers',
        'Basic analytics'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '$999',
      period: '/month',
      description: 'Ideal for growing companies with complex cloud needs',
      features: [
        'Advanced AI features',
        'Priority support',
        'Custom dashboards',
        'Up to 25 servers',
        'Advanced analytics',
        'API access'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      period: '',
      description: 'For large organizations with enterprise requirements',
      features: [
        'Full customization',
        'Dedicated support',
        'Unlimited servers',
        'White-label solutions',
        'On-premise deployment',
        'Custom integrations'
      ],
      popular: false
    }
  ];

  return (
    <>
      <Helmet>
        <title>AI Cloud Infrastructure | Zion Tech Group</title>
        <meta name="description" content="Transform your cloud infrastructure with AI-powered management, optimization, and automation solutions." />
        <meta name="keywords" content="AI cloud infrastructure, cloud management, cloud optimization, cloud automation, Zion Tech Group" />
      </Helmet>

      <Navigation />
      <main className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                AI Cloud Infrastructure
                <span className="block text-blue-400">Solutions</span>
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Transform your cloud infrastructure with AI-powered management, optimization, 
                and automation solutions for maximum efficiency and cost savings.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                  Get Started
                </button>
                <button className="border border-blue-400 text-blue-400 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 hover:text-blue-600 transition-colors">
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
                Cloud Infrastructure Features
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Advanced AI capabilities for cloud management and optimization
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20 hover:bg-white/20 transition-colors">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                    <feature.icon className="w-6 h-6 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
                  <p className="text-gray-300 mb-4">{feature.description}</p>
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
                Our Cloud Services
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Comprehensive cloud infrastructure solutions
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
                Why Choose Our Cloud Solutions?
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Proven results that drive business growth
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
                Flexible pricing for cloud infrastructure solutions
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {pricing.map((plan, index) => (
                <div key={index} className={`bg-white/10 backdrop-blur-sm p-8 rounded-xl border ${plan.popular ? 'border-blue-400' : 'border-white/20'}`}>
                  {plan.popular && (
                    <div className="bg-blue-400 text-slate-900 text-sm font-semibold px-3 py-1 rounded-full inline-block mb-4">
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
                      ? 'bg-blue-600 text-white hover:bg-blue-700' 
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
              Ready to Optimize Your Cloud?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Start your cloud optimization journey today with AI-powered infrastructure management
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                Start Free Trial
              </button>
              <button className="border border-blue-400 text-blue-400 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 hover:text-blue-600 transition-colors">
                Contact Sales
              </button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
});

AICloudInfrastructurePage.displayName = 'AICloudInfrastructurePage';

export default AICloudInfrastructurePage;