'use client';
import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import SEOOptimizer from '../components/SEOOptimizer';
import { Users, Brain, Zap, CheckCircle, Phone, Mail, Target, BarChart, Shield, Clock, TrendingUp } from 'lucide-react';

const ITConsultingPage: React.FC = () => {
  const features = [
    {
      icon: Brain,
      title: 'Strategic IT Planning',
      description: 'Comprehensive IT strategy development aligned with your business goals and objectives.',
      benefits: ['IT roadmap', 'Technology assessment', 'Digital transformation']
    },
    {
      icon: Target,
      title: 'Technology Assessment',
      description: 'Thorough evaluation of your current technology stack and recommendations for improvement.',
      benefits: ['Current state analysis', 'Gap identification', 'Optimization recommendations']
    },
    {
      icon: Zap,
      title: 'Digital Transformation',
      description: 'Guide your organization through digital transformation with proven methodologies.',
      benefits: ['Change management', 'Process optimization', 'Technology adoption']
    },
    {
      icon: Shield,
      title: 'Security Consulting',
      description: 'Comprehensive security assessment and implementation of enterprise-grade security measures.',
      benefits: ['Security audit', 'Compliance review', 'Security implementation']
    },
    {
      icon: BarChart,
      title: 'Performance Optimization',
      description: 'Analyze and optimize your IT infrastructure for maximum performance and efficiency.',
      benefits: ['Performance analysis', 'Infrastructure optimization', 'Cost reduction']
    },
    {
      icon: Clock,
      title: '24/7 Support',
      description: 'Round-the-clock IT support and consulting services for your critical business needs.',
      benefits: ['24/7 availability', 'Emergency support', 'Proactive monitoring']
    }
  ];

  const pricingPlans = [
    {
      name: 'Starter',
      price: '$299',
      period: '/hour',
      description: 'Perfect for small projects',
      features: [
        'Basic consultation',
        'Email support',
        'Standard reports',
        '1 consultant',
        'Basic assessment',
        'Phone support'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '$499',
      period: '/hour',
      description: 'Ideal for growing businesses',
      features: [
        'Advanced consultation',
        'Priority support',
        'Detailed reports',
        'Senior consultant',
        'Comprehensive assessment',
        'Video calls',
        'Project management',
        'Follow-up support'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$799',
      period: '/hour',
      description: 'For large organizations',
      features: [
        'Executive consultation',
        'Dedicated support',
        'Custom reports',
        'Expert team',
        'Full assessment',
        'On-site visits',
        'Custom solutions',
        'SLA guarantee',
        'Retainer options'
      ],
      popular: false
    }
  ];

  const stats = [
    { number: '500+', label: 'Projects Completed' },
    { number: '95%', label: 'Client Satisfaction' },
    { number: '50+', label: 'Expert Consultants' },
    { number: '24/7', label: 'Support Available' }
  ];

  return (
    <>
      <SEOOptimizer
        title="IT Consulting Services - Zion Tech Group"
        description="Expert IT consulting with 95% client satisfaction and 500+ projects completed. Strategic planning, digital transformation, and 24/7 support."
        keywords={['IT consulting', 'technology consulting', 'digital transformation', 'IT strategy', 'technology assessment', 'IT planning']}
        canonicalUrl="https://ziontechgroup.com/it-consulting"
      />
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <Navigation />
        
        <main className="pt-16">
          {/* Hero Section */}
          <section className="container mx-auto px-4 py-16 text-center">
            <div className="max-w-4xl mx-auto">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 neon-text">
                IT Consulting Services
              </h1>
              <p className="text-xl md:text-2xl text-cyan-400 mb-8">
                Expert IT consulting with 95% client satisfaction
              </p>
              <p className="text-lg text-gray-300 mb-12 max-w-3xl mx-auto">
                Our expert IT consultants help you navigate complex technology decisions, 
                optimize your IT infrastructure, and drive digital transformation success.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
                <a
                  href="tel:+13024640950"
                  className="cyber-button flex items-center space-x-2"
                >
                  <Phone className="w-5 h-5" />
                  <span>Call (302) 464-0950</span>
                </a>
                <a
                  href="mailto:kleber@ziontechgroup.com"
                  className="cyber-button flex items-center space-x-2"
                  style={{background: 'linear-gradient(45deg, #8b5cf6, #ec4899)'}}
                >
                  <Mail className="w-5 h-5" />
                  <span>Get Free Consultation</span>
                </a>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
                {stats.map((stat, index) => (
                  <div key={index} className="cyber-card p-6 text-center">
                    <div className="text-3xl md:text-4xl font-bold text-cyan-400 mb-2 neon-text">
                      {stat.number}
                    </div>
                    <div className="text-gray-300 font-medium">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Features Section */}
          <section className="container mx-auto px-4 py-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12 neon-text">
              Comprehensive IT Consulting
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="cyber-card p-6 hover:scale-105 transition-all duration-300">
                  <feature.icon className="w-12 h-12 text-cyan-400 mb-4" />
                  <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                  <p className="text-gray-300 mb-4">{feature.description}</p>
                  <ul className="space-y-2">
                    {feature.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-center space-x-2 text-sm text-cyan-400">
                        <CheckCircle className="w-4 h-4" />
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          {/* Pricing Section */}
          <section className="container mx-auto px-4 py-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12 neon-text">
              Transparent Consulting Pricing
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {pricingPlans.map((plan, index) => (
                <div
                  key={index}
                  className={`cyber-card p-8 relative ${
                    plan.popular ? 'ring-2 ring-cyan-400 scale-105' : ''
                  }`}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-cyan-400 text-slate-900 px-4 py-1 rounded-full text-sm font-bold">
                        Most Popular
                      </span>
                    </div>
                  )}
                  <div className="text-center mb-6">
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                    <p className="text-gray-400 mb-4">{plan.description}</p>
                    <div className="flex items-baseline justify-center">
                      <span className="text-4xl font-bold text-cyan-400">{plan.price}</span>
                      <span className="text-gray-400 ml-1">{plan.period}</span>
                    </div>
                  </div>
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center space-x-3">
                        <CheckCircle className="w-5 h-5 text-cyan-400 flex-shrink-0" />
                        <span className="text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <a
                    href="tel:+13024640950"
                    className={`w-full block text-center py-3 px-6 rounded-lg font-medium transition-all duration-300 ${
                      plan.popular
                        ? 'bg-cyan-400 text-slate-900 hover:bg-cyan-300'
                        : 'bg-slate-700 text-white hover:bg-slate-600'
                    }`}
                  >
                    Get Started
                  </a>
                </div>
              ))}
            </div>
          </section>

          {/* CTA Section */}
          <section className="container mx-auto px-4 py-16 text-center">
            <div className="cyber-card p-12 max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 neon-text">
                Ready to Transform Your IT?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Join 300+ businesses already using our consulting services
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="tel:+13024640950"
                  className="cyber-button flex items-center justify-center space-x-2"
                >
                  <Phone className="w-5 h-5" />
                  <span>Call (302) 464-0950</span>
                </a>
                <a
                  href="mailto:kleber@ziontechgroup.com"
                  className="cyber-button flex items-center justify-center space-x-2"
                  style={{background: 'linear-gradient(45deg, #8b5cf6, #ec4899)'}}
                >
                  <Mail className="w-5 h-5" />
                  <span>Schedule Consultation</span>
                </a>
              </div>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default ITConsultingPage;