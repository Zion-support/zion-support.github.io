'use client';
import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { Zap, Brain, TrendingUp, Battery, CheckCircle, ArrowRight, BarChart, Users, Lock, Eye, Target, Activity, Globe } from 'lucide-react';

const AIEnergyGridManagementPro: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-green-900 to-slate-900">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(34,197,94,0.3)_0%,transparent_50%)] animate-pulse" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.3)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }} />
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-green-500/20 border border-green-500/30 rounded-full text-green-400 text-sm font-medium mb-6">
              <Zap className="w-4 h-4 mr-2" />
              Smart Energy Management
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              AI Energy Grid Management
              <span className="block bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                Pro
              </span>
            </h1>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto mb-8">
              Revolutionize energy grid management with AI-powered optimization that reduces energy waste by 35%, 
              improves grid stability by 50%, and enables smart renewable energy integration.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-green-500 to-blue-600 hover:from-green-600 hover:to-blue-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-green-500/25 inline-flex items-center">
                Start Free Trial
                <ArrowRight className="w-5 h-5 ml-2" />
              </button>
              <button className="border border-gray-600 text-white hover:bg-white/10 font-bold py-4 px-8 rounded-lg transition-all duration-300 inline-flex items-center">
                <Eye className="w-5 h-5 mr-2" />
                Watch Demo
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">
              Intelligent Grid Management
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our AI system optimizes energy distribution, manages renewable sources, and ensures 
              grid stability with real-time monitoring and predictive analytics.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Brain,
                title: 'Smart Load Balancing',
                description: 'AI-powered load distribution across the grid',
                features: ['Real-time Balancing', 'Demand Prediction', 'Peak Shaving']
              },
              {
                icon: Battery,
                title: 'Energy Storage Optimization',
                description: 'Optimize battery storage and renewable energy',
                features: ['Storage Management', 'Renewable Integration', 'Grid Stability']
              },
              {
                icon: Activity,
                title: 'Predictive Maintenance',
                description: 'Predict and prevent grid equipment failures',
                features: ['Failure Prediction', 'Maintenance Scheduling', 'Cost Optimization']
              },
              {
                icon: BarChart,
                title: 'Energy Analytics',
                description: 'Comprehensive energy usage and efficiency analytics',
                features: ['Usage Patterns', 'Efficiency Metrics', 'Cost Analysis']
              },
              {
                icon: Globe,
                title: 'Renewable Integration',
                description: 'Seamless integration of renewable energy sources',
                features: ['Solar Integration', 'Wind Integration', 'Grid Balancing']
              },
              {
                icon: Lock,
                title: 'Grid Security',
                description: 'Advanced cybersecurity for grid infrastructure',
                features: ['Threat Detection', 'Security Monitoring', 'Incident Response']
              }
            ].map((feature, index) => (
              <div key={index} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-8 hover:bg-white/10 transition-all duration-300">
                <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-blue-600 rounded-lg flex items-center justify-center mb-6">
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">{feature.title}</h3>
                <p className="text-gray-300 mb-6">{feature.description}</p>
                <ul className="space-y-2">
                  {feature.features.map((item, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-400">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-slate-800 to-slate-900">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">
              Measurable Impact
            </h2>
            <p className="text-xl text-gray-300">
              Our clients have achieved significant improvements in energy efficiency and grid performance
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { metric: '35%', label: 'Energy Waste Reduction', icon: TrendingUp },
              { metric: '50%', label: 'Grid Stability Improvement', icon: Zap },
              { metric: '25%', label: 'Cost Savings', icon: BarChart },
              { metric: '99.9%', label: 'Uptime Reliability', icon: Activity }
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-4xl font-bold text-white mb-2">{stat.metric}</div>
                <div className="text-gray-300">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">
              Flexible Pricing Plans
            </h2>
            <p className="text-xl text-gray-300">
              Choose the plan that fits your energy grid size and complexity
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: 'Community',
                price: '$3,500',
                period: '/month',
                description: 'Perfect for small communities and towns',
                features: [
                  'Up to 10,000 connections',
                  'Basic grid optimization',
                  'Email support',
                  'Standard reporting',
                  'API access'
                ],
                popular: false
              },
              {
                name: 'Regional',
                price: '$5,500',
                period: '/month',
                description: 'Ideal for regional energy providers',
                features: [
                  'Up to 100,000 connections',
                  'Advanced AI optimization',
                  'Priority support',
                  'Custom reporting',
                  'Real-time monitoring',
                  'Integration support'
                ],
                popular: true
              },
              {
                name: 'National',
                price: 'Custom',
                period: '',
                description: 'For national energy grids',
                features: [
                  'Unlimited connections',
                  'Custom AI models',
                  '24/7 dedicated support',
                  'White-label solution',
                  'Multi-region support',
                  'Custom integrations'
                ],
                popular: false
              }
            ].map((plan, index) => (
              <div key={index} className={`relative bg-white/5 backdrop-blur-sm border rounded-xl p-8 ${plan.popular ? 'border-green-500/50 ring-2 ring-green-500/20' : 'border-white/10'}`}>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-green-500 to-blue-600 text-white px-4 py-2 rounded-full text-sm font-medium">
                      Most Popular
                    </span>
                  </div>
                )}
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <p className="text-gray-300 mb-4">{plan.description}</p>
                  <div className="flex items-baseline justify-center">
                    <span className="text-4xl font-bold text-white">{plan.price}</span>
                    <span className="text-gray-400 ml-1">{plan.period}</span>
                  </div>
                </div>
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <button className={`w-full py-3 px-6 rounded-lg font-medium transition-all duration-300 ${
                  plan.popular 
                    ? 'bg-gradient-to-r from-green-500 to-blue-600 hover:from-green-600 hover:to-blue-700 text-white' 
                    : 'border border-gray-600 text-white hover:bg-white/10'
                }`}>
                  {plan.name === 'National' ? 'Contact Sales' : 'Get Started'}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-slate-800 to-slate-900">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Transform Your Energy Grid?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Join energy providers worldwide who are building smarter, more efficient grids with AI.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-green-500 to-blue-600 hover:from-green-600 hover:to-blue-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-green-500/25 inline-flex items-center">
              Start Free Trial
              <ArrowRight className="w-5 h-5 ml-2" />
            </button>
            <button className="border border-gray-600 text-white hover:bg-white/10 font-bold py-4 px-8 rounded-lg transition-all duration-300 inline-flex items-center">
              <Users className="w-5 h-5 mr-2" />
              Schedule Demo
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AIEnergyGridManagementPro;