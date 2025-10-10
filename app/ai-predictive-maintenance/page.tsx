'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Settings, Brain, Zap, Shield, TrendingUp, AlertTriangle, CheckCircle, ArrowRight, Star, Clock, Phone, Mail, BarChart } from 'lucide-react';

const AIPredictiveMaintenancePage: React.FC = () => {
  const features = [
    {
      icon: Brain,
      title: 'AI-Powered Predictions',
      description: 'Machine learning algorithms predict equipment failures before they happen',
      benefits: ['99.5% accuracy rate', 'Real-time monitoring', 'Pattern recognition', 'Anomaly detection']
    },
    {
      icon: BarChart,
      title: 'Advanced Analytics',
      description: 'Comprehensive data analysis with predictive insights and recommendations',
      benefits: ['Historical data analysis', 'Performance trends', 'Cost optimization', 'ROI tracking']
    },
    {
      icon: AlertTriangle,
      title: 'Early Warning System',
      description: 'Proactive alerts and notifications to prevent unexpected downtime',
      benefits: ['Custom alert thresholds', 'Multi-channel notifications', 'Priority-based alerts', 'Escalation protocols']
    },
    {
      icon: Settings,
      title: 'Automated Scheduling',
      description: 'Intelligent maintenance scheduling based on predicted failure times',
      benefits: ['Optimal timing', 'Resource allocation', 'Minimal disruption', 'Cost efficiency']
    }
  ];

  const industries = [
    {
      title: 'Manufacturing',
      description: 'Prevent production line failures and optimize manufacturing processes',
      icon: Settings,
      benefits: ['Reduce downtime by 70%', 'Increase production efficiency', 'Lower maintenance costs', 'Improve product quality']
    },
    {
      title: 'Energy & Utilities',
      description: 'Monitor power plants, wind turbines, and electrical infrastructure',
      icon: Zap,
      benefits: ['Prevent blackouts', 'Optimize energy production', 'Reduce environmental impact', 'Ensure grid stability']
    },
    {
      title: 'Transportation',
      description: 'Maintain fleets, aircraft, and railway systems with predictive insights',
      icon: TrendingUp,
      benefits: ['Improve safety', 'Reduce delays', 'Lower fuel costs', 'Extend asset life']
    },
    {
      title: 'Healthcare',
      description: 'Monitor medical equipment and ensure patient safety',
      icon: Shield,
      benefits: ['Prevent equipment failures', 'Ensure patient safety', 'Reduce costs', 'Improve reliability']
    }
  ];

  const pricing = [
    {
      name: 'Starter',
      price: '$599/month',
      description: 'Perfect for small facilities',
      features: [
        'Up to 50 connected devices',
        'Basic predictive analytics',
        'Email alerts',
        'Standard reporting',
        'Email support'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '$1,299/month',
      description: 'Ideal for medium enterprises',
      features: [
        'Up to 200 connected devices',
        'Advanced AI predictions',
        'Multi-channel alerts',
        'Custom dashboards',
        'Priority support',
        'API integrations',
        'Mobile app access'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      description: 'For large organizations',
      features: [
        'Unlimited devices',
        'Custom AI models',
        'White-label solution',
        'Dedicated support',
        'Custom integrations',
        'Advanced analytics',
        'On-premise deployment'
      ],
      popular: false
    }
  ];

  const stats = [
    { value: '70%', label: 'Downtime Reduction', description: 'Average reduction in unplanned downtime' },
    { value: '40%', label: 'Cost Savings', description: 'Reduction in maintenance costs' },
    { value: '99.5%', label: 'Accuracy Rate', description: 'Prediction accuracy for equipment failures' },
    { value: '24/7', label: 'Monitoring', description: 'Continuous equipment monitoring' }
  ];

  const benefits = [
    'Reduce unplanned downtime by up to 70%',
    'Lower maintenance costs by 40%',
    'Extend equipment lifespan by 25%',
    'Improve safety and compliance',
    'Optimize maintenance schedules',
    'Increase operational efficiency',
    'Reduce energy consumption',
    'Minimize environmental impact'
  ];

  return (
    <>
      <Helmet>
        <title>AI Predictive Maintenance - Zion Tech Group | Prevent Equipment Failures with AI</title>
        <meta name="description" content="Prevent equipment failures with AI-powered predictive maintenance. Real-time monitoring, failure prediction, and automated scheduling for maximum uptime and cost savings." />
        <meta name="keywords" content="AI predictive maintenance, equipment monitoring, failure prediction, maintenance scheduling, IoT sensors, industrial AI" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(147,51,234,0.3)_0%,transparent_50%)] animate-pulse" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.3)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }} />
          <div className="relative max-w-7xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              AI Predictive Maintenance
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              Prevent equipment failures with AI-powered predictive maintenance. Real-time monitoring, failure prediction, and automated scheduling for maximum uptime and cost savings.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <button className="bg-gradient-to-r from-purple-500 to-blue-600 hover:from-purple-600 hover:to-blue-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">
                Get Free Assessment
              </button>
              <button className="border border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300">
                View Case Studies
              </button>
            </div>
            
            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-cyan-400 mb-2">{stat.value}</div>
                  <div className="text-white font-semibold mb-1">{stat.label}</div>
                  <div className="text-gray-400 text-sm">{stat.description}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Advanced Predictive Technology
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Powered by machine learning and IoT sensors for accurate failure prediction
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 group">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">{feature.title}</h3>
                  <p className="text-gray-300 mb-4">{feature.description}</p>
                  <ul className="space-y-2">
                    {feature.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-400">
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

        {/* Industries Section */}
        <section className="py-20 px-4 bg-white/5">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Industry Applications
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Proven results across multiple industries and equipment types
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {industries.map((industry, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/20 transition-all duration-300">
                  <div className="flex items-start mb-6">
                    <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-lg flex items-center justify-center mr-4">
                      <industry.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white mb-2">{industry.title}</h3>
                      <p className="text-gray-300">{industry.description}</p>
                    </div>
                  </div>
                  <ul className="space-y-3">
                    {industry.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-center text-gray-300">
                        <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Why Choose AI Predictive Maintenance?
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Transform your maintenance operations with proven AI technology
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-sm rounded-xl p-6 hover:bg-white/10 transition-all duration-300">
                  <div className="flex items-center">
                    <CheckCircle className="w-6 h-6 text-green-400 mr-3 flex-shrink-0" />
                    <span className="text-gray-300 font-medium">{benefit}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-20 px-4 bg-white/5">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Flexible Pricing Plans
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Choose the perfect plan for your maintenance needs
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pricing.map((plan, index) => (
                <div key={index} className={`relative bg-white/10 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/20 transition-all duration-300 ${
                  plan.popular ? 'ring-2 ring-purple-500 scale-105' : ''
                }`}>
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <div className="bg-gradient-to-r from-purple-500 to-blue-500 text-white px-4 py-2 rounded-full text-sm font-semibold flex items-center gap-2">
                        <Star className="w-4 h-4 fill-current" />
                        Most Popular
                      </div>
                    </div>
                  )}
                  
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                    <p className="text-gray-400 mb-4">{plan.description}</p>
                    <div className="text-4xl font-bold text-cyan-400 mb-2">{plan.price}</div>
                    {plan.price !== 'Custom' && <p className="text-gray-400">per month</p>}
                  </div>

                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-gray-300">
                        <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <button className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-purple-500 to-blue-500 text-white hover:from-purple-600 hover:to-blue-600'
                      : 'bg-white/10 text-white border border-white/20 hover:bg-white/20'
                  }`}>
                    {plan.price === 'Custom' ? 'Contact Sales' : 'Get Started'}
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-12">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Ready to Prevent Equipment Failures?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Get a free assessment of your current maintenance operations and discover how AI can transform your business.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-gradient-to-r from-purple-500 to-blue-600 hover:from-purple-600 hover:to-blue-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">
                  Get Free Assessment
                </button>
                <button className="border border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300">
                  Schedule Demo
                </button>
              </div>
              
              <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-6 text-gray-300">
                <div className="flex items-center">
                  <Phone className="w-5 h-5 mr-2 text-cyan-400" />
                  <span>+1 (302) 464-0950</span>
                </div>
                <div className="flex items-center">
                  <Mail className="w-5 h-5 mr-2 text-cyan-400" />
                  <span>kleber@ziontechgroup.com</span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default AIPredictiveMaintenancePage;