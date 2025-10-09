'use client';
import React from 'react';
import { Wrench, AlertTriangle, TrendingUp, Shield, Clock, CheckCircle, ArrowRight, Star, Users, BarChart } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const AIPredictiveMaintenancePage: React.FC = () => {
  const features = [
    {
      icon: <Wrench className="w-6 h-6" />,
      title: 'Machine Learning Models',
      description: 'Advanced ML algorithms that analyze equipment data to predict failures before they occur.',
      benefits: ['95% accuracy rate', 'Real-time monitoring', 'Pattern recognition']
    },
    {
      icon: <AlertTriangle className="w-6 h-6" />,
      title: 'Early Warning System',
      description: 'Proactive alerts and notifications when equipment shows signs of potential failure.',
      benefits: ['Predictive alerts', 'Risk assessment', 'Maintenance scheduling']
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: 'Performance Analytics',
      description: 'Comprehensive analytics dashboard showing equipment health, efficiency, and optimization opportunities.',
      benefits: ['Performance metrics', 'Trend analysis', 'Optimization insights']
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: 'Asset Protection',
      description: 'Protect your valuable equipment investments with intelligent maintenance scheduling and monitoring.',
      benefits: ['Extended asset life', 'Reduced downtime', 'Cost optimization']
    }
  ];

  const industries = [
    {
      title: 'Manufacturing',
      description: 'Optimize production lines, reduce unplanned downtime, and maximize equipment efficiency.',
      icon: <Wrench className="w-8 h-8 text-blue-500" />,
      metrics: '40% reduction in downtime, 25% cost savings'
    },
    {
      title: 'Energy & Utilities',
      description: 'Monitor power generation equipment, transmission systems, and critical infrastructure.',
      icon: <Shield className="w-8 h-8 text-green-500" />,
      metrics: '99.9% uptime, 30% maintenance cost reduction'
    },
    {
      title: 'Transportation',
      description: 'Predictive maintenance for fleets, rail systems, and aviation equipment.',
      icon: <Clock className="w-8 h-8 text-purple-500" />,
      metrics: '50% fewer breakdowns, 20% fuel efficiency gain'
    },
    {
      title: 'Healthcare',
      description: 'Monitor medical equipment, HVAC systems, and critical facility infrastructure.',
      icon: <AlertTriangle className="w-8 h-8 text-red-500" />,
      metrics: '99.5% equipment availability, 35% maintenance savings'
    }
  ];

  const pricing = [
    {
      name: 'Basic',
      price: '$499',
      period: '/month',
      description: 'For small facilities with basic monitoring needs',
      features: [
        'Up to 10 equipment units',
        'Basic ML models',
        'Email alerts',
        'Standard dashboard',
        'Email support',
        'Monthly reports'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '$1,299',
      period: '/month',
      description: 'For medium-sized operations with advanced needs',
      features: [
        'Up to 50 equipment units',
        'Advanced ML algorithms',
        'Real-time alerts & notifications',
        'Advanced analytics dashboard',
        'Priority support',
        'Custom reporting',
        'API integration',
        'Mobile app access'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$2,999',
      period: '/month',
      description: 'For large organizations with complex infrastructure',
      features: [
        'Unlimited equipment units',
        'Custom ML model development',
        '24/7 monitoring & alerts',
        'Enterprise analytics suite',
        'Dedicated support team',
        'Custom integrations',
        'White-label options',
        'On-premise deployment',
        'SLA guarantees'
      ],
      popular: false
    }
  ];

  const benefits = [
    {
      title: 'Reduce Downtime',
      description: 'Prevent equipment failures before they happen, reducing unplanned downtime by up to 40%.',
      icon: <Clock className="w-6 h-6 text-green-400" />,
      value: '40%'
    },
    {
      title: 'Lower Maintenance Costs',
      description: 'Optimize maintenance schedules and reduce unnecessary repairs, saving up to 30% on maintenance costs.',
      icon: <TrendingUp className="w-6 h-6 text-blue-400" />,
      value: '30%'
    },
    {
      title: 'Extend Asset Life',
      description: 'Proper maintenance scheduling can extend equipment life by 20-30% through predictive care.',
      icon: <Shield className="w-6 h-6 text-purple-400" />,
      value: '25%'
    },
    {
      title: 'Improve Efficiency',
      description: 'Optimize equipment performance and energy consumption for maximum operational efficiency.',
      icon: <BarChart className="w-6 h-6 text-cyan-400" />,
      value: '15%'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Navigation />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="container mx-auto px-4 py-16">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 neon-text">
              AI Predictive Maintenance
            </h1>
            <p className="text-xl md:text-2xl text-cyan-400 mb-8">
              Prevent Equipment Failures Before They Happen
            </p>
            <p className="text-lg text-gray-300 max-w-4xl mx-auto mb-12">
              Transform your maintenance operations with AI-powered predictive analytics. 
              Our advanced machine learning models analyze equipment data to predict failures, 
              optimize maintenance schedules, and reduce costs while maximizing uptime.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+13024640950"
                className="cyber-button inline-flex items-center"
              >
                <Wrench className="w-5 h-5 mr-2" />
                Call: (302) 464-0950
              </a>
              <a
                href="/contact"
                className="border-2 border-cyan-400 text-cyan-400 px-8 py-3 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
              >
                Get Free Assessment
              </a>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="container mx-auto px-4 py-16">
          <h2 className="text-4xl font-bold text-white text-center mb-16 neon-text">
            Proven Business Benefits
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="cyber-card p-6 text-center hover:scale-105 transition-all duration-300">
                <div className="text-6xl font-bold text-cyan-400 mb-4">{benefit.value}</div>
                <div className="text-cyan-400 mb-4 flex justify-center">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-4">{benefit.title}</h3>
                <p className="text-gray-300">{benefit.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Features Section */}
        <section className="container mx-auto px-4 py-16">
          <h2 className="text-4xl font-bold text-white text-center mb-16 neon-text">
            Advanced AI Capabilities
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="cyber-card p-6 hover:scale-105 transition-all duration-300">
                <div className="text-cyan-400 mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-4">{feature.title}</h3>
                <p className="text-gray-300 mb-4">{feature.description}</p>
                <ul className="space-y-2">
                  {feature.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-400">
                      <CheckCircle className="w-4 h-4 mr-2 text-green-400" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Industries Section */}
        <section className="container mx-auto px-4 py-16">
          <h2 className="text-4xl font-bold text-white text-center mb-16 neon-text">
            Industry Applications
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {industries.map((industry, index) => (
              <div key={index} className="cyber-card p-8 hover:scale-105 transition-all duration-300">
                <div className="flex items-center mb-4">
                  {industry.icon}
                  <h3 className="text-2xl font-bold text-white ml-4">{industry.title}</h3>
                </div>
                <p className="text-gray-300 mb-4">{industry.description}</p>
                <div className="bg-cyan-500/20 text-cyan-400 px-4 py-2 rounded-lg text-sm font-medium">
                  {industry.metrics}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Pricing Section */}
        <section className="container mx-auto px-4 py-16">
          <h2 className="text-4xl font-bold text-white text-center mb-16 neon-text">
            Flexible Pricing Plans
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricing.map((plan, index) => (
              <div
                key={index}
                className={`cyber-card p-8 relative ${
                  plan.popular ? 'ring-2 ring-cyan-400 scale-105' : ''
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="bg-cyan-400 text-slate-900 px-4 py-1 rounded-full text-sm font-bold">
                      Most Popular
                    </div>
                  </div>
                )}
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <div className="flex items-baseline justify-center">
                    <span className="text-4xl font-bold text-cyan-400">{plan.price}</span>
                    <span className="text-gray-400 ml-2">{plan.period}</span>
                  </div>
                  <p className="text-gray-400 mt-2">{plan.description}</p>
                </div>
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 mr-3 text-green-400 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <a
                  href="/contact"
                  className={`w-full text-center py-3 rounded-lg font-semibold transition-all duration-300 ${
                    plan.popular
                      ? 'bg-cyan-400 text-slate-900 hover:bg-cyan-300'
                      : 'border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900'
                  }`}
                >
                  Get Started
                </a>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="container mx-auto px-4 py-16">
          <div className="cyber-card p-12 text-center">
            <h2 className="text-4xl font-bold text-white mb-6 neon-text">
              Ready to Transform Your Maintenance Operations?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Join leading companies using AI predictive maintenance to reduce costs, 
              prevent failures, and maximize equipment performance.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+13024640950"
                className="cyber-button inline-flex items-center"
              >
                <Wrench className="w-5 h-5 mr-2" />
                Call: (302) 464-0950
              </a>
              <a
                href="mailto:kleber@ziontechgroup.com"
                className="border-2 border-cyan-400 text-cyan-400 px-8 py-3 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
              >
                Email: kleber@ziontechgroup.com
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default AIPredictiveMaintenancePage;