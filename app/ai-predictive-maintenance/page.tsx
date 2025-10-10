'use client';
import React from 'react';
import { Wrench, AlertTriangle, BarChart, Clock, Shield, Zap, CheckCircle, Star, ArrowRight, Brain, Settings, TrendingUp, Activity, Gauge } from 'lucide-react';
import SEOOptimizer from '../components/SEOOptimizer';

const AIPredictiveMaintenancePage: React.FC = () => {
  const features = [
    {
      icon: <Brain className="w-6 h-6" />,
      title: 'Machine Learning Algorithms',
      description: 'Advanced ML models predict equipment failures with 95% accuracy up to 30 days in advance'
    },
    {
      icon: <Activity className="w-6 h-6" />,
      title: 'Real-Time Monitoring',
      description: 'Continuous monitoring of equipment health with instant alerts and notifications'
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: 'Performance Analytics',
      description: 'Comprehensive analytics dashboard with predictive insights and trend analysis'
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: 'Preventive Actions',
      description: 'Automated maintenance scheduling and resource optimization recommendations'
    },
    {
      icon: <Gauge className="w-6 h-6" />,
      title: 'IoT Integration',
      description: 'Seamless integration with existing IoT sensors and industrial equipment'
    },
    {
      icon: <Settings className="w-6 h-6" />,
      title: 'Customizable Alerts',
      description: 'Configurable alert thresholds and notification preferences for different teams'
    }
  ];

  const pricingPlans = [
    {
      name: 'Basic',
      price: '$299',
      period: '/month',
      description: 'For small manufacturing operations',
      features: [
        'Up to 50 equipment units',
        'Basic predictive analytics',
        'Email alerts',
        'Standard support',
        'Basic reporting'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '$799',
      period: '/month',
      description: 'For medium-sized facilities',
      features: [
        'Up to 200 equipment units',
        'Advanced ML algorithms',
        'Multi-channel alerts',
        'Priority support',
        'Custom dashboards',
        'API integration',
        'Historical analysis'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$1,999',
      period: '/month',
      description: 'For large industrial operations',
      features: [
        'Unlimited equipment units',
        'AI-powered insights',
        'Custom integrations',
        '24/7 dedicated support',
        'White-label solution',
        'SLA guarantee',
        'On-site training'
      ],
      popular: false
    }
  ];

  const benefits = [
    {
      title: 'Reduce Downtime',
      description: 'Prevent unexpected equipment failures and minimize production interruptions',
      icon: <Clock className="w-8 h-8 text-green-400" />,
      stats: 'Up to 40% reduction in unplanned downtime'
    },
    {
      title: 'Lower Maintenance Costs',
      description: 'Optimize maintenance schedules and reduce unnecessary service calls',
      icon: <BarChart className="w-8 h-8 text-blue-400" />,
      stats: 'Average 25% cost savings on maintenance'
    },
    {
      title: 'Extend Equipment Life',
      description: 'Proactive maintenance extends equipment lifespan and improves ROI',
      icon: <Wrench className="w-8 h-8 text-purple-400" />,
      stats: '20% longer equipment lifespan'
    },
    {
      title: 'Improve Safety',
      description: 'Prevent safety incidents through early detection of potential hazards',
      icon: <Shield className="w-8 h-8 text-red-400" />,
      stats: '60% reduction in safety incidents'
    }
  ];

  const industries = [
    {
      name: 'Manufacturing',
      description: 'Optimize production lines and reduce equipment failures',
      icon: '🏭',
      useCases: ['Production line monitoring', 'Quality control', 'Supply chain optimization']
    },
    {
      name: 'Energy & Utilities',
      description: 'Ensure reliable power generation and distribution',
      icon: '⚡',
      useCases: ['Power plant maintenance', 'Grid monitoring', 'Renewable energy optimization']
    },
    {
      name: 'Transportation',
      description: 'Maintain fleet vehicles and infrastructure',
      icon: '🚛',
      useCases: ['Fleet management', 'Railway maintenance', 'Aviation safety']
    },
    {
      name: 'Oil & Gas',
      description: 'Monitor critical infrastructure and prevent accidents',
      icon: '🛢️',
      useCases: ['Pipeline monitoring', 'Refinery optimization', 'Safety compliance']
    }
  ];

  return (
    <>
      <SEOOptimizer
        title="AI Predictive Maintenance - Zion Tech Group"
        description="Revolutionary AI-powered predictive maintenance solution. Reduce downtime by 40%, cut maintenance costs by 25%, and extend equipment life with machine learning algorithms."
        keywords={['AI predictive maintenance', 'predictive analytics', 'machine learning', 'IoT monitoring', 'equipment maintenance', 'industrial AI']}
        canonicalUrl="https://ziontechgroup.com/ai-predictive-maintenance"
      />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="pt-24 pb-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <div className="inline-flex items-center space-x-2 bg-green-500/10 text-green-400 px-4 py-2 rounded-full text-sm font-medium mb-6">
                <Settings className="w-4 h-4" />
                <span>AI Predictive Maintenance</span>
              </div>
              
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 neon-text">
                AI Predictive Maintenance
              </h1>
              
              <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
                Transform your maintenance operations with AI-powered predictive analytics. 
                Prevent equipment failures, reduce downtime, and optimize maintenance costs.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="tel:+13024640950"
                  className="cyber-button inline-flex items-center space-x-2"
                >
                  <Wrench className="w-5 h-5" />
                  <span>Call: (302) 464-0950</span>
                </a>
                <a
                  href="mailto:kleber@ziontechgroup.com"
                  className="border-2 border-green-400 text-green-400 px-8 py-3 rounded-lg font-semibold hover:bg-green-400 hover:text-slate-900 transition-all duration-300"
                >
                  Get Free Analysis
                </a>
              </div>
            </div>

            {/* Key Stats */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-16">
              <div className="cyber-card hologram-card p-6 text-center">
                <div className="text-3xl font-bold text-green-400 mb-2">40%</div>
                <div className="text-gray-300">Reduction in Downtime</div>
              </div>
              <div className="cyber-card hologram-card p-6 text-center">
                <div className="text-3xl font-bold text-blue-400 mb-2">25%</div>
                <div className="text-gray-300">Cost Savings</div>
              </div>
              <div className="cyber-card hologram-card p-6 text-center">
                <div className="text-3xl font-bold text-purple-400 mb-2">95%</div>
                <div className="text-gray-300">Prediction Accuracy</div>
              </div>
              <div className="cyber-card hologram-card p-6 text-center">
                <div className="text-3xl font-bold text-pink-400 mb-2">30</div>
                <div className="text-gray-300">Days Advance Warning</div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4 neon-text">
                Advanced AI Capabilities
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Powered by cutting-edge machine learning and IoT integration
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="cyber-card hologram-card p-8 hover:scale-105 transition-all duration-300">
                  <div className="text-green-400 mb-4">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">{feature.title}</h3>
                  <p className="text-gray-300">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 px-4 bg-slate-800/50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4 neon-text">
                Proven Business Benefits
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Transform your maintenance operations with measurable results
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="cyber-card hologram-card p-8 text-center">
                  <div className="mb-6 flex justify-center">
                    {benefit.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">{benefit.title}</h3>
                  <p className="text-gray-300 mb-4">{benefit.description}</p>
                  <div className="text-lg font-bold text-green-400">{benefit.stats}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Industries Section */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4 neon-text">
                Industry Applications
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Proven solutions across multiple industries
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {industries.map((industry, index) => (
                <div key={index} className="cyber-card hologram-card p-8">
                  <div className="text-4xl mb-4">{industry.icon}</div>
                  <h3 className="text-xl font-bold text-white mb-4">{industry.name}</h3>
                  <p className="text-gray-300 mb-6">{industry.description}</p>
                  <ul className="space-y-2">
                    {industry.useCases.map((useCase, idx) => (
                      <li key={idx} className="flex items-center space-x-2 text-gray-300">
                        <CheckCircle className="w-4 h-4 text-green-400" />
                        <span className="text-sm">{useCase}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-16 px-4 bg-slate-800/50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4 neon-text">
                Flexible Pricing Plans
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Choose the perfect plan for your maintenance needs
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pricingPlans.map((plan, index) => (
                <div
                  key={index}
                  className={`cyber-card hologram-card p-8 relative ${
                    plan.popular ? 'ring-2 ring-green-400 scale-105' : ''
                  }`}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <div className="bg-green-400 text-slate-900 px-4 py-2 rounded-full text-sm font-bold">
                        Most Popular
                      </div>
                    </div>
                  )}
                  
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                    <p className="text-gray-400 mb-4">{plan.description}</p>
                    <div className="flex items-baseline justify-center">
                      <span className="text-5xl font-bold text-green-400">{plan.price}</span>
                      <span className="text-gray-400 ml-2">{plan.period}</span>
                    </div>
                  </div>

                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center space-x-3">
                        <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                        <span className="text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <a
                    href="tel:+13024640950"
                    className={`w-full py-3 px-6 rounded-lg font-semibold text-center transition-all duration-300 ${
                      plan.popular
                        ? 'bg-green-400 text-slate-900 hover:bg-green-300'
                        : 'border-2 border-green-400 text-green-400 hover:bg-green-400 hover:text-slate-900'
                    }`}
                  >
                    Get Started
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4 bg-gradient-to-r from-green-500/10 to-blue-500/10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-white mb-6 neon-text">
              Ready to Transform Your Maintenance Operations?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join 200+ companies already using our AI predictive maintenance to reduce costs and improve efficiency.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+13024640950"
                className="cyber-button inline-flex items-center space-x-2"
              >
                <Wrench className="w-5 h-5" />
                <span>Call: (302) 464-0950</span>
              </a>
              <a
                href="mailto:kleber@ziontechgroup.com"
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-slate-900 transition-all duration-300"
              >
                Schedule Demo
              </a>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default AIPredictiveMaintenancePage;