import React from 'react';
import { Helmet } from 'react-helmet-async';
import { CheckCircle, ArrowRight, Workflow, Zap, Shield, Globe, DollarSign, Star, Clock, TrendingUp, Users, Target, Award, Brain, BarChart3, Settings, Play, Pause, RotateCcw } from 'lucide-react';
import { Link } from 'react-router-dom';
import Navigation from '../../components/Navigation';
import Footer from '../../components/Footer';

const AIWorkflowAutomationPage: React.FC = () => {
  const features = [
    {
      icon: <Brain className="w-8 h-8 text-blue-500" />,
      title: 'AI-Powered Automation',
      description: 'Intelligent workflow automation that learns from your processes and automatically optimizes them for maximum efficiency.',
      benefits: ['Process learning', 'Automatic optimization', 'Smart routing', 'Error prevention']
    },
    {
      icon: <Settings className="w-8 h-8 text-green-500" />,
      title: 'Visual Workflow Builder',
      description: 'Drag-and-drop interface to create complex workflows without coding, with AI suggestions for optimal process design.',
      benefits: ['No-code automation', 'Visual design', 'AI suggestions', 'Template library']
    },
    {
      icon: <BarChart3 className="w-8 h-8 text-purple-500" />,
      title: 'Performance Analytics',
      description: 'Comprehensive analytics and insights to track workflow performance, identify bottlenecks, and optimize processes.',
      benefits: ['Performance tracking', 'Bottleneck identification', 'Process optimization', 'ROI analysis']
    },
    {
      icon: <Zap className="w-8 h-8 text-orange-500" />,
      title: 'Smart Integrations',
      description: 'Seamlessly connect with 500+ apps and services to create powerful automated workflows across your entire tech stack.',
      benefits: ['500+ integrations', 'API connections', 'Data synchronization', 'Cross-platform automation']
    }
  ];

  const pricingPlans = [
    {
      name: 'Starter',
      price: '$69',
      period: '/month',
      description: 'Perfect for small teams and simple workflows',
      features: [
        'Up to 5 workflows',
        'Basic automation',
        '10 integrations',
        'Basic analytics',
        'Email support',
        'Template library'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '$179',
      period: '/month',
      description: 'Ideal for growing businesses and complex processes',
      features: [
        'Up to 50 workflows',
        'Advanced AI features',
        '100 integrations',
        'Advanced analytics',
        'Priority support',
        'Custom workflows',
        'API access',
        'Team collaboration'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$449',
      period: '/month',
      description: 'For large organizations with complex needs',
      features: [
        'Unlimited workflows',
        'Custom AI training',
        'Unlimited integrations',
        'Advanced reporting',
        'Dedicated support',
        'White-label solution',
        'Custom development',
        'Advanced security'
      ],
      popular: false
    }
  ];

  const stats = [
    { number: '10K+', label: 'Workflows Created', icon: <Workflow className="w-6 h-6 text-blue-400" /> },
    { number: '75%', label: 'Time Saved', icon: <Clock className="w-6 h-6 text-green-400" /> },
    { number: '90%', label: 'Error Reduction', icon: <Target className="w-6 h-6 text-purple-400" /> },
    { number: '500+', label: 'Integrations', icon: <Settings className="w-6 h-6 text-orange-400" /> }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>AI Workflow Automation - Zion Tech Group</title>
        <meta name="description" content="AI-powered workflow automation platform that streamlines business processes, reduces errors by 90%, and saves 75% of your time." />
        <meta name="keywords" content="AI workflow automation, business process automation, workflow management, process optimization, automation platform" />
      </Helmet>

      <Navigation />

      {/* Hero Section */}
      <section className="pt-20 px-4 py-12 sm:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <div className="flex items-center justify-center mb-6">
              <div className="w-16 h-16 bg-gradient-to-r from-violet-500 to-purple-600 rounded-2xl flex items-center justify-center">
                <Workflow className="w-8 h-8 text-white" />
              </div>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6">
              AI Workflow Automation
            </h1>
            <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto mb-6 sm:mb-8 px-4">
              Streamline your business processes with AI-powered workflow automation that learns, 
              optimizes, and executes tasks automatically. Save 75% of your time.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/contact" 
                className="bg-gradient-to-r from-violet-500 to-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-violet-600 hover:to-purple-700 transition-all duration-300 flex items-center"
              >
                Start Free Trial
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link 
                to="/pricing" 
                className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300"
              >
                View Pricing
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 sm:py-16 lg:py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="mb-4 flex justify-center">{stat.icon}</div>
                <div className="text-3xl md:text-4xl font-bold text-white mb-2">{stat.number}</div>
                <div className="text-gray-300">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-12 sm:py-16 lg:py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">Powerful Features</h2>
            <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto px-4">
              Everything you need to automate and optimize your business processes with AI intelligence
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300 group">
                <div className="mb-6 group-hover:scale-110 transition-transform duration-300">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-white mb-4 group-hover:text-violet-300 transition-colors">{feature.title}</h3>
                <p className="text-gray-300 mb-6">{feature.description}</p>
                <ul className="space-y-2">
                  {feature.benefits.map((benefit, benefitIndex) => (
                    <li key={benefitIndex} className="flex items-center text-gray-300 text-sm">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-12 sm:py-16 lg:py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">Simple, Transparent Pricing</h2>
            <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto px-4">
              Choose the plan that fits your workflow complexity and team size. All plans include our core AI features.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <div key={index} className={`bg-white/10 backdrop-blur-lg rounded-2xl p-8 border transition-all duration-300 group ${
                plan.popular 
                  ? 'border-violet-500 bg-gradient-to-b from-violet-500/20 to-transparent' 
                  : 'border-white/20 hover:bg-white/15'
              }`}>
                {plan.popular && (
                  <div className="text-center mb-4">
                    <span className="bg-gradient-to-r from-violet-500 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <p className="text-gray-300 mb-4">{plan.description}</p>
                  <div className="flex items-baseline justify-center">
                    <span className="text-4xl font-bold text-white">{plan.price}</span>
                    <span className="text-gray-300 ml-1">{plan.period}</span>
                  </div>
                </div>
                
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Link
                  to="/contact"
                  className={`w-full block text-center py-3 rounded-lg font-semibold transition-all duration-300 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-violet-500 to-purple-600 text-white hover:from-violet-600 hover:to-purple-700'
                      : 'bg-white/10 text-white border border-white/20 hover:bg-white/20'
                  }`}
                >
                  Get Started
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-16 lg:py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <div className="bg-gradient-to-r from-violet-600 to-purple-600 rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-12">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">
                Ready to Automate Your Workflows?
              </h2>
              <p className="text-lg sm:text-xl text-white/90 mb-6 sm:mb-8 max-w-2xl mx-auto px-4">
                Join thousands of businesses saving 75% of their time and reducing errors by 90% with our AI-powered automation platform.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  to="/contact" 
                  className="bg-white text-violet-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                >
                  Start Free Trial
                </Link>
                <Link 
                  to="/about" 
                  className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors"
                >
                  Learn More
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AIWorkflowAutomationPage;