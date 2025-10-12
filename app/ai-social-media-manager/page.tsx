'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight, Share2, BarChart, Users, CheckCircle, Brain, Settings, Target, TrendingUp, Calendar, Zap } from 'lucide-react';

const AISocialMediaManagerPage: React.FC = () => {
  const features = [
    {
      icon: <Share2 className="w-8 h-8 text-cyan-400" />,
      title: 'AI Content Creation',
      description: 'Generate engaging social media content using AI that understands your brand voice and audience preferences.'
    },
    {
      icon: <Calendar className="w-8 h-8 text-purple-400" />,
      title: 'Smart Scheduling',
      description: 'AI-powered optimal posting times and automated content scheduling across all platforms.'
    },
    {
      icon: <BarChart className="w-8 h-8 text-green-400" />,
      title: 'Advanced Analytics',
      description: 'Comprehensive social media analytics with AI insights and performance predictions.'
    },
    {
      icon: <Users className="w-8 h-8 text-orange-400" />,
      title: 'Audience Engagement',
      description: 'AI-driven audience analysis and automated engagement strategies for better reach.'
    }
  ];

  const benefits = [
    'Increase engagement by 50%',
    'Save 10+ hours per week',
    'Boost follower growth by 40%',
    'Improve content performance',
    'Automated posting schedule',
    'Real-time analytics and insights'
  ];

  const pricing = [
    {
      name: 'Starter',
      price: '$39.99',
      period: '/month',
      description: 'Perfect for small businesses and influencers',
      features: [
        'Up to 3 social accounts',
        'Basic AI content generation',
        'Scheduling tools',
        'Basic analytics',
        'Email support'
      ]
    },
    {
      name: 'Professional',
      price: '$99.99',
      period: '/month',
      description: 'Ideal for growing businesses',
      features: [
        'Up to 10 social accounts',
        'Advanced AI features',
        'Advanced analytics',
        'Priority support',
        'API access',
        'Team collaboration'
      ]
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      period: '',
      description: 'For large organizations',
      features: [
        'Unlimited accounts',
        'Full AI suite',
        'Custom integrations',
        'Dedicated support',
        'White-label solution',
        'SLA guarantee'
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900">
      <Helmet>
        <title>AI Social Media Manager - Zion Tech Group | Smart Social Media Management</title>
        <meta name="description" content="Transform your social media presence with AI-powered management. Create, schedule, and analyze content with our intelligent social media platform." />
        <meta name="keywords" content="AI social media manager, social media automation, content creation, social media analytics, social media scheduling" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            AI Social Media <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">Manager</span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Transform your social media presence with AI-powered management. Create, schedule, and analyze content with our intelligent social media platform.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-purple-600 transition-all duration-300"
            >
              Get Started
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
            <Link
              to="/ai-services"
              className="inline-flex items-center px-8 py-3 border-2 border-cyan-400 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-400 hover:text-white transition-all duration-300"
            >
              View All AI Services
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Smart Social Media Management Features
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Our AI social media manager provides everything you need to create, schedule, and optimize your social media presence.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-cyan-400/50 transition-all duration-300 group">
                <div className="mb-6">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-black/20">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Why Choose Our AI Social Media Manager?
              </h2>
              <p className="text-lg text-gray-300 mb-8">
                Our AI-powered social media management helps you grow your audience, increase engagement, and save time on content creation.
              </p>
              <ul className="space-y-4">
                {benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle className="w-6 h-6 text-green-400 mr-3 mt-1 flex-shrink-0" />
                    <span className="text-gray-300">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-2xl p-8 backdrop-blur-sm border border-white/10">
                <div className="text-center">
                  <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full mb-6">
                    <Brain className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">AI-Powered Intelligence</h3>
                  <p className="text-gray-300">
                    Our AI learns from your audience behavior and automatically optimizes content, posting times, and engagement strategies.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Simple, Transparent Pricing
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Choose the plan that fits your social media needs. All plans include our core AI features with no hidden fees.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {pricing.map((plan, index) => (
              <div key={index} className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-cyan-400/50 transition-all duration-300">
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <div className="flex items-baseline justify-center mb-2">
                    <span className="text-4xl font-bold text-white">{plan.price}</span>
                    <span className="text-gray-300 ml-1">{plan.period}</span>
                  </div>
                  <p className="text-gray-300">{plan.description}</p>
                </div>
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  to="/contact"
                  className="w-full inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-purple-600 transition-all duration-300"
                >
                  {plan.name === 'Enterprise' ? 'Contact Sales' : 'Get Started'}
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-cyan-600 to-purple-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Transform Your Social Media?
          </h2>
          <p className="text-xl text-cyan-100 mb-8">
            Join thousands of businesses already using our AI social media manager to grow their online presence.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/contact" 
              className="inline-flex items-center px-8 py-3 bg-white text-cyan-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors duration-300"
            >
              Start Free Trial
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
            <Link 
              to="/ai-services" 
              className="inline-flex items-center px-8 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-cyan-600 transition-colors duration-300"
            >
              Explore All AI Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AISocialMediaManagerPage;