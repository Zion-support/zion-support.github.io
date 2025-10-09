'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import { Mail, Target, BarChart, Users, Zap, ArrowRight, CheckCircle, Star, TrendingUp, Brain, Send, Eye } from 'lucide-react';

const AIEmailMarketingPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState('overview');

  const features = [
    {
      icon: Mail,
      title: 'AI Email Generation',
      description: 'Create compelling email content that converts with AI-powered copywriting',
      color: 'blue'
    },
    {
      icon: Target,
      title: 'Smart Segmentation',
      description: 'Automatically segment your audience for personalized campaigns',
      color: 'purple'
    },
    {
      icon: BarChart,
      title: 'Predictive Analytics',
      description: 'Predict customer behavior and optimize send times for maximum engagement',
      color: 'green'
    },
    {
      icon: Users,
      title: 'Audience Insights',
      description: 'Deep insights into your subscribers to create targeted content',
      color: 'orange'
    },
    {
      icon: Send,
      title: 'Automated Campaigns',
      description: 'Set up drip campaigns and automated sequences that work 24/7',
      color: 'pink'
    },
    {
      icon: Eye,
      title: 'A/B Testing',
      description: 'Automatically test subject lines, content, and send times',
      color: 'cyan'
    }
  ];

  const pricingPlans = [
    {
      name: 'Starter',
      price: 49,
      description: 'Perfect for small businesses',
      features: [
        'Up to 1,000 subscribers',
        'Unlimited emails',
        'Basic AI features',
        'Email templates',
        'Basic analytics',
        'Email support'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: 99,
      description: 'Ideal for growing businesses',
      features: [
        'Up to 10,000 subscribers',
        'Advanced AI features',
        'Automation workflows',
        'A/B testing',
        'Advanced analytics',
        'Priority support',
        'API access'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: 199,
      description: 'Complete solution for large organizations',
      features: [
        'Unlimited subscribers',
        'Custom AI models',
        'White-label solution',
        'Dedicated support',
        'Advanced reporting',
        'Custom integrations',
        'Team collaboration'
      ],
      popular: false
    }
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      blue: 'from-blue-500 to-blue-600',
      purple: 'from-purple-500 to-purple-600',
      green: 'from-green-500 to-green-600',
      orange: 'from-orange-500 to-orange-600',
      pink: 'from-pink-500 to-pink-600',
      cyan: 'from-cyan-500 to-cyan-600'
    };
    return colors[color as keyof typeof colors] || colors.blue;
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Header */}
      <div className="bg-gradient-to-r from-purple-900 via-blue-900 to-cyan-900 py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 neon-text">
            AI Email Marketing
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Transform your email marketing with AI-powered automation, personalization, 
            and optimization that drives real results.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all flex items-center justify-center"
            >
              <Zap className="w-5 h-5 mr-2" />
              Get Started
            </Link>
            <Link
              href="/demo"
              className="bg-white text-gray-900 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all flex items-center justify-center"
            >
              <Mail className="w-5 h-5 mr-2" />
              View Demo
            </Link>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">AI-Powered Email Marketing</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Everything you need to create, send, and optimize email campaigns that convert
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-gray-800 rounded-lg p-6 hover:bg-gray-700 transition-all duration-300"
              >
                <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${getColorClasses(feature.color)} flex items-center justify-center mb-4`}>
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* How It Works */}
      <div className="bg-gray-800 py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">How AI Email Marketing Works</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Three simple steps to transform your email marketing
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold">1</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">AI Analyzes Your Audience</h3>
              <p className="text-gray-400">
                Our AI studies your subscribers to understand their preferences and behavior patterns
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold">2</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">AI Creates Personalized Content</h3>
              <p className="text-gray-400">
                Generate personalized email content that resonates with each segment of your audience
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-cyan-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold">3</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">AI Optimizes & Sends</h3>
              <p className="text-gray-400">
                Automatically optimize send times, subject lines, and content for maximum engagement
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Pricing Section */}
      <div className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Simple, Transparent Pricing</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Choose the plan that fits your email marketing needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricingPlans.map((plan, index) => (
              <div
                key={index}
                className={`bg-gray-800 rounded-lg p-8 ${
                  plan.popular ? 'ring-2 ring-cyan-500 scale-105' : ''
                } hover:scale-105 transition-all duration-300`}
              >
                {plan.popular && (
                  <div className="text-center mb-4">
                    <span className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                  <p className="text-gray-400 mb-4">{plan.description}</p>
                  <div className="mb-4">
                    <span className="text-4xl font-bold">${plan.price}</span>
                    <span className="text-gray-400 ml-2">/month</span>
                  </div>
                </div>

                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-cyan-400 mr-3 flex-shrink-0" />
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Link
                  href="/contact"
                  className={`w-full py-3 px-6 rounded-lg font-semibold text-center block transition-all ${
                    plan.popular
                      ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white hover:opacity-90'
                      : 'bg-gray-700 text-white hover:bg-gray-600'
                  }`}
                >
                  Get Started
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="bg-gray-800 py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-6xl mx-auto text-center">
            <div>
              <div className="text-4xl font-bold text-cyan-400 mb-2">3x</div>
              <div className="text-gray-400">Higher Open Rates</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-cyan-400 mb-2">5x</div>
              <div className="text-gray-400">Better Click Rates</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-cyan-400 mb-2">40%</div>
              <div className="text-gray-400">Time Saved</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-cyan-400 mb-2">95%</div>
              <div className="text-gray-400">Customer Satisfaction</div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-purple-900 via-blue-900 to-cyan-900 py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Email Marketing?</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Join thousands of businesses already using AI to create better email campaigns.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all flex items-center justify-center"
            >
              <Brain className="w-5 h-5 mr-2" />
              Start Your Campaign
            </Link>
            <Link
              href="/demo"
              className="bg-white text-gray-900 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all flex items-center justify-center"
            >
              <Mail className="w-5 h-5 mr-2" />
              Try Free Demo
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AIEmailMarketingPage;