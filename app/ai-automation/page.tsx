'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight, Settings, Brain, Zap, Users, BarChart3, Shield, CheckCircle, Star, Award, Clock, TrendingUp, Cpu, Server, Monitor, Lock, Wifi, Package, Calendar, Link as LinkIcon, ShoppingCart, DollarSign, Workflow, Eye, Search, Filter, Download, Upload, Share, Timer, Battery, Wifi2, Signal, Bluetooth, Camera, Mic, Headphones, Speaker, Volume2, VolumeX, Play, Pause, SkipForward, SkipBack, Repeat, Shuffle, Heart, ThumbsUp, ThumbsDown, Bookmark, Flag, AlertTriangle, Info, HelpCircle, Plus, Minus, Edit, Trash2, Save, Copy, Paste, Cut, Undo, Redo, RefreshCw, RotateCcw, RotateCw, Move, Maximize, Minimize, Square, Circle, Triangle, Hexagon, Octagon, Pentagon, Star2, Heart2, Smile, Frown, Meh, Laugh, Angry, Surprised, Confused, Wink, Kiss, Tongue } from 'lucide-react';

const AiAutomationPage: React.FC = () => {
  const features = [
    {
      icon: <Settings className="w-8 h-8 text-blue-500" />,
      title: 'Workflow Automation',
      description: 'Automate complex business processes and workflows with intelligent decision-making capabilities.'
    },
    {
      icon: <Brain className="w-8 h-8 text-purple-500" />,
      title: 'AI-Powered Logic',
      description: 'Smart automation that learns and adapts to your business patterns and requirements.'
    },
    {
      icon: <Zap className="w-8 h-8 text-yellow-500" />,
      title: 'Rapid Deployment',
      description: 'Deploy automation solutions quickly with our drag-and-drop workflow builder.'
    },
    {
      icon: <Users className="w-8 h-8 text-green-500" />,
      title: 'Team Integration',
      description: 'Seamlessly integrate with your existing tools and team workflows.'
    },
    {
      icon: <BarChart3 className="w-8 h-8 text-red-500" />,
      title: 'Performance Monitoring',
      description: 'Track automation performance, efficiency gains, and ROI metrics.'
    },
    {
      icon: <Shield className="w-8 h-8 text-indigo-500" />,
      title: 'Secure & Reliable',
      description: 'Enterprise-grade security with 99.9% uptime and data protection.'
    }
  ];

  const useCases = [
    'Customer service automation',
    'Lead qualification and scoring',
    'Invoice processing and approval',
    'Data entry and validation',
    'Email marketing automation',
    'Social media management',
    'Inventory management',
    'Report generation and distribution'
  ];

  const pricingPlans = [
    {
      name: 'Starter',
      price: '$299',
      period: '/month',
      description: 'Perfect for small businesses',
      features: [
        'Up to 10 automation workflows',
        'Basic AI capabilities',
        'Email support',
        'Standard integrations',
        'Basic analytics'
      ],
      cta: 'Get Started',
      popular: false
    },
    {
      name: 'Professional',
      price: '$799',
      period: '/month',
      description: 'Ideal for growing companies',
      features: [
        'Up to 50 automation workflows',
        'Advanced AI with learning',
        'Priority support',
        'Advanced integrations',
        'Custom workflows',
        'Advanced analytics'
      ],
      cta: 'Most Popular',
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$1,999',
      period: '/month',
      description: 'For large organizations',
      features: [
        'Unlimited workflows',
        'Custom AI training',
        'Dedicated support',
        'White-label solution',
        'Custom development',
        'SLA guarantee',
        'On-premise deployment'
      ],
      cta: 'Contact Sales',
      popular: false
    }
  ];

  const stats = [
    { number: '80%', label: 'Time Savings', icon: <Clock className="w-6 h-6 text-blue-400" /> },
    { number: '95%', label: 'Accuracy Rate', icon: <CheckCircle className="w-6 h-6 text-green-400" /> },
    { number: '500+', label: 'Automations Deployed', icon: <Zap className="w-6 h-6 text-yellow-400" /> },
    { number: '24/7', label: 'Support Available', icon: <Award className="w-6 h-6 text-purple-400" /> }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>AI Automation - Zion Tech Group</title>
        <meta name="description" content="Transform your business with AI-powered automation solutions. Streamline workflows, reduce manual tasks, and boost productivity with intelligent automation." />
        <meta name="keywords" content="AI automation, workflow automation, business process automation, AI solutions, productivity tools" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Intelligent <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">AI Automation</span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Transform your business with AI-powered automation solutions. Streamline workflows, 
            reduce manual tasks, and boost productivity with intelligent automation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="group bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-xl font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-300 flex items-center justify-center"
            >
              Get Started
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              to="/demo"
              className="group border-2 border-purple-400 text-purple-400 px-8 py-4 rounded-xl font-semibold hover:bg-purple-400 hover:text-white transition-all duration-300 flex items-center justify-center"
            >
              View Demo
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="flex justify-center mb-4">
                  {stat.icon}
                </div>
                <div className="text-3xl md:text-4xl font-bold text-white mb-2">{stat.number}</div>
                <div className="text-gray-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Powerful <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">Automation Features</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Everything you need to automate your business processes and workflows
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700 hover:border-purple-500 transition-all duration-300 group">
                <div className="flex items-center mb-6">
                  {feature.icon}
                  <h3 className="text-xl font-bold text-white ml-4">{feature.title}</h3>
                </div>
                <p className="text-gray-300">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Perfect For <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-400">Every Industry</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Discover how AI automation can transform your business operations
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {useCases.map((useCase, index) => (
              <div key={index} className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700 hover:border-purple-500 transition-all duration-300 text-center">
                <div className="text-gray-300">{useCase}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Flexible <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-400">Pricing Plans</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose the perfect plan for your automation needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <div key={index} className={`relative bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border transition-all duration-300 ${
                plan.popular ? 'border-purple-500 scale-105' : 'border-slate-700 hover:border-purple-400'
              }`}>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-2 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <div className="text-4xl font-bold text-white mb-2">{plan.price}</div>
                  <div className="text-gray-400">{plan.period}</div>
                  <p className="text-gray-300 mt-4">{plan.description}</p>
                </div>
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link
                  to="/contact"
                  className={`w-full py-3 px-6 rounded-xl font-semibold text-center transition-all duration-300 flex items-center justify-center ${
                    plan.popular
                      ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white hover:from-purple-700 hover:to-pink-700'
                      : 'border-2 border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white'
                  }`}
                >
                  {plan.cta}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Automate Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">Business Processes?</span>
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Join thousands of businesses already using our AI automation platform to boost productivity and efficiency.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="group bg-gradient-to-r from-emerald-500 to-blue-600 text-white px-10 py-4 rounded-xl font-semibold hover:from-emerald-600 hover:to-blue-700 transition-all duration-300 flex items-center justify-center"
            >
              Start Automating Today
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              to="/pricing"
              className="group border-2 border-emerald-400 text-emerald-400 px-10 py-4 rounded-xl font-semibold hover:bg-emerald-400 hover:text-white transition-all duration-300 flex items-center justify-center"
            >
              View Pricing
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AiAutomationPage;
