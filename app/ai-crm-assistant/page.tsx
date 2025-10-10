'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Users, Target, BarChart, CheckCircle, ArrowRight, Phone, Mail, MapPin, Star, TrendingUp, Shield, Settings, Globe, Brain, Cpu, Database, Cloud, Lock, Eye, Activity, Zap } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const AICRMAssistantPage: React.FC = () => {
  const features = [
    {
      icon: Users,
      title: 'Customer Insights',
      description: 'AI-powered customer analysis and behavior prediction for better relationship management',
      benefits: ['Customer segmentation', 'Behavior prediction', 'Churn prevention', 'Personalization']
    },
    {
      icon: Target,
      title: 'Lead Scoring',
      description: 'Intelligent lead scoring and qualification to prioritize high-value prospects',
      benefits: ['Automated scoring', 'Lead prioritization', 'Conversion prediction', 'ROI optimization']
    },
    {
      icon: BarChart,
      title: 'Sales Analytics',
      description: 'Advanced analytics and reporting for sales performance optimization',
      benefits: ['Performance tracking', 'Trend analysis', 'Forecasting', 'Custom reports']
    },
    {
      icon: Brain,
      title: 'AI Recommendations',
      description: 'Smart recommendations for next best actions and opportunities',
      benefits: ['Action suggestions', 'Opportunity identification', 'Risk assessment', 'Strategy optimization']
    }
  ];

  const capabilities = [
    {
      title: 'Automated Data Entry',
      description: 'AI-powered data entry and contact management automation',
      icon: Database,
      features: ['Contact enrichment', 'Data validation', 'Duplicate detection', 'Auto-updates']
    },
    {
      title: 'Email Automation',
      description: 'Intelligent email campaigns and follow-up sequences',
      icon: Mail,
      features: ['Personalized emails', 'Send time optimization', 'A/B testing', 'Performance tracking']
    },
    {
      title: 'Task Management',
      description: 'AI-driven task prioritization and workflow automation',
      icon: Activity,
      features: ['Task prioritization', 'Workflow automation', 'Deadline tracking', 'Team coordination']
    },
    {
      title: 'Integration Hub',
      description: 'Seamless integration with existing business tools and platforms',
      icon: Settings,
      features: ['API integrations', 'Data synchronization', 'Custom connectors', 'Real-time updates']
    }
  ];

  const benefits = [
    'Increase sales productivity by 40%',
    'Improve lead conversion by 60%',
    'Reduce data entry time by 80%',
    'Enhance customer satisfaction',
    'Optimize sales processes',
    'Scale CRM operations efficiently'
  ];

  const pricing = [
    {
      name: 'Starter',
      price: '$199',
      period: '/month',
      description: 'Perfect for small sales teams',
      features: [
        'Basic AI features',
        'Up to 1,000 contacts',
        'Email support',
        'Standard integrations',
        'Basic analytics'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '$499',
      period: '/month',
      description: 'Ideal for growing sales organizations',
      features: [
        'Advanced AI capabilities',
        'Unlimited contacts',
        'Priority support',
        'Advanced integrations',
        'Custom analytics',
        'Team collaboration'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      period: '',
      description: 'For large organizations with complex needs',
      features: [
        'Full customization',
        'Dedicated support',
        'On-premise deployment',
        'White-label solutions',
        'Custom integrations',
        'SLA guarantee'
      ],
      popular: false
    }
  ];

  return (
    <>
      <Helmet>
        <title>AI CRM Assistant | Zion Tech Group</title>
        <meta name="description" content="Professional AI CRM assistant services by Zion Tech Group. Advanced AI and IT solutions for your business." />
        <meta name="keywords" content="ai crm assistant, CRM automation, AI solutions, IT services, Zion Tech Group" />
      </Helmet>

      <Navigation />
      <main className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                AI CRM Assistant
                <span className="block text-purple-400">for Sales Teams</span>
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Professional AI CRM assistant services powered by advanced AI and cutting-edge technology. 
                Transform your sales process with intelligent automation and insights.
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
                CRM Assistant Features
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Advanced AI capabilities for CRM optimization
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

        {/* Capabilities Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                CRM Capabilities
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Comprehensive CRM automation and optimization
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {capabilities.map((capability, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20">
                  <div className="w-12 h-12 bg-cyan-100 rounded-lg flex items-center justify-center mb-4">
                    <capability.icon className="w-6 h-6 text-cyan-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">{capability.title}</h3>
                  <p className="text-gray-300 mb-4">{capability.description}</p>
                  <ul className="space-y-2">
                    {capability.features.map((feature, idx) => (
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
                Why Choose Our CRM Assistant?
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Proven results that transform your sales process
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
                Flexible pricing for CRM assistant solutions
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
              Ready to Transform Your CRM?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Start your AI-powered CRM journey today
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

export default AICRMAssistantPage;