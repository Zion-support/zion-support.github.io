'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Brain, Target, BarChart3, Users, Clock, CheckCircle, ArrowRight, Star, Zap, Calendar, TrendingUp, Globe, Cpu, Database, Settings, AlertTriangle, Lock, Search, FileText, MessageSquare } from 'lucide-react';

const AIProjectManagerProPage: React.FC = () => {
  const features = [
    {
      icon: Brain,
      title: 'AI Project Planning',
      description: 'Intelligent project planning that automatically creates timelines, assigns resources, and identifies potential risks using AI algorithms.',
      benefits: ['Auto timeline generation', 'Resource optimization', 'Risk prediction', 'Smart scheduling']
    },
    {
      icon: Target,
      title: 'Smart Task Management',
      description: 'AI-powered task management that prioritizes work, suggests dependencies, and automates routine project activities.',
      benefits: ['Auto prioritization', 'Dependency mapping', 'Task automation', 'Progress tracking']
    },
    {
      icon: Users,
      title: 'Team Collaboration AI',
      description: 'Advanced collaboration tools with AI that facilitate communication, resolve conflicts, and optimize team performance.',
      benefits: ['Smart notifications', 'Conflict resolution', 'Performance insights', 'Team optimization']
    },
    {
      icon: BarChart3,
      title: 'Predictive Analytics',
      description: 'Real-time project analytics with AI predictions for budget overruns, timeline delays, and resource constraints.',
      benefits: ['Budget forecasting', 'Timeline predictions', 'Resource planning', 'Risk analysis']
    }
  ];

  const benefits = [
    'Increase project success rate by 85% with AI-powered planning',
    'Reduce project delivery time by 40% through intelligent automation',
    'Save 60% on project management overhead with AI assistance',
    'Improve team productivity by 70% with smart collaboration tools',
    'Achieve 95% budget accuracy with predictive analytics'
  ];

  const pricing = [
    {
      name: 'Starter',
      price: '$29/month',
      features: [
        'Up to 5 projects',
        'Basic AI planning',
        'Team of 10 users',
        'Email support',
        'Standard templates'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '$99/month',
      features: [
        'Unlimited projects',
        'Advanced AI features',
        'Unlimited team members',
        'Priority support',
        'Custom templates',
        'API access'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$299/month',
      features: [
        'All AI features',
        'Custom AI models',
        'White-label solution',
        'Dedicated support',
        'On-premise deployment',
        'Custom integrations'
      ],
      popular: false
    }
  ];

  const projectTypes = [
    {
      title: 'Software Development',
      description: 'AI-optimized project management for agile development, sprint planning, and code delivery.',
      icon: Cpu,
      results: '40% faster delivery, 60% fewer bugs'
    },
    {
      title: 'Marketing Campaigns',
      description: 'Intelligent campaign management with AI-driven content planning and performance optimization.',
      icon: Target,
      results: '50% better ROI, 35% higher engagement'
    },
    {
      title: 'Construction Projects',
      description: 'AI-powered construction management with resource optimization and timeline prediction.',
      icon: Globe,
      results: '30% cost savings, 25% time reduction'
    },
    {
      title: 'Event Planning',
      description: 'Smart event management with AI-driven logistics planning and attendee optimization.',
      icon: Calendar,
      results: '45% better attendance, 50% cost efficiency'
    }
  ];

  const aiCapabilities = [
    { feature: 'Auto Resource Allocation', accuracy: '95%', timeSaved: '8 hours/week' },
    { feature: 'Risk Prediction', accuracy: '92%', timeSaved: '12 hours/week' },
    { feature: 'Timeline Optimization', accuracy: '88%', timeSaved: '6 hours/week' },
    { feature: 'Budget Forecasting', accuracy: '94%', timeSaved: '4 hours/week' },
    { feature: 'Team Performance Analysis', accuracy: '90%', timeSaved: '10 hours/week' }
  ];

  return (
    <React.Fragment>
      <Helmet>
        <title>AI Project Manager Pro - Zion Tech Group | Intelligent Project Management Solutions</title>
        <meta name="description" content="Revolutionary AI-powered project management software that automates planning, optimizes resources, and predicts project outcomes. Increase project success by 85% with intelligent automation." />
        <meta name="keywords" content="AI project management, project management software, AI planning, team collaboration, project automation, project analytics" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(59,130,246,0.3)_0%,transparent_50%)] animate-pulse" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(147,51,234,0.3)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }} />
          <div className="relative max-w-7xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              AI Project Manager <span className="text-blue-400">Pro</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              Revolutionary AI-powered project management that automates planning, optimizes resources, and predicts project outcomes. Increase success rates by 85% with intelligent automation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">
                Start Free Trial
              </button>
              <button className="border border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300">
                Watch Demo
              </button>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                AI Project Management Features
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Intelligent project management powered by advanced AI technology
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 group">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">{feature.title}</h3>
                  <p className="text-gray-300 mb-4">{feature.description}</p>
                  {feature.benefits && (
                    <ul className="space-y-2">
                      {feature.benefits.map((benefit, idx) => (
                        <li key={idx} className="flex items-center text-sm text-gray-400">
                          <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* AI Capabilities Performance */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                AI Capabilities Performance
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Proven AI performance that saves time and improves project outcomes
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {aiCapabilities.map((capability, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/10 transition-all duration-300">
                  <h3 className="text-lg font-bold text-white mb-4">{capability.feature}</h3>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-300">Accuracy:</span>
                      <span className="text-green-400 font-bold">{capability.accuracy}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-300">Time Saved:</span>
                      <span className="text-blue-400 font-bold">{capability.timeSaved}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Project Types */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Perfect for Any Project Type
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                AI-powered project management that adapts to your industry and project needs
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {projectTypes.map((project, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 group">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center flex-shrink-0">
                      <project.icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-white mb-3">{project.title}</h3>
                      <p className="text-gray-300 mb-4">{project.description}</p>
                      <div className="bg-green-500/20 text-green-400 px-3 py-1 rounded-full text-sm font-medium inline-block">
                        {project.results}
                      </div>
                    </div>
                  </div>
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
                Why Choose AI Project Manager Pro?
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Revolutionary advantages that transform your project management
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 group">
                  <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <CheckCircle className="w-8 h-8 text-white" />
                  </div>
                  <p className="text-lg text-white font-medium">{benefit}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Simple, Transparent Pricing
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Choose the plan that fits your team size and project needs
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pricing.map((plan, index) => (
                <div key={index} className={`bg-white/5 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 group relative ${
                  plan.popular ? 'ring-2 ring-blue-500' : ''
                }`}>
                  {plan.popular && (
                    <div className="absolute -top-3 left-6 bg-gradient-to-r from-blue-500 to-purple-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                      Most Popular
                    </div>
                  )}
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-white mb-4">{plan.name}</h3>
                    <div className="text-4xl font-bold text-blue-400 mb-2">{plan.price}</div>
                    <p className="text-gray-300">per month</p>
                  </div>
                  
                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-300">
                        <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <button className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white hover:from-blue-600 hover:to-purple-600'
                      : 'border border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white'
                  }`}>
                    Start Free Trial
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
                Ready to Transform Your Projects?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Join thousands of teams already using AI Project Manager Pro to deliver better projects faster.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">
                  Start Free Trial
                </button>
                <button className="border border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300">
                  Schedule Demo
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </React.Fragment>
  );
};

export default AIProjectManagerProPage;