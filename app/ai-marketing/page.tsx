'use client';
import React from 'react';
import { Target, BarChart, Users, Zap, TrendingUp, CheckCircle, ArrowRight, Star, Award, Brain, Mail, MessageSquare } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const AIMarketingPage: React.FC = () => {
  const features = [
    {
      icon: Target,
      title: 'Predictive Analytics',
      description: 'Predict customer behavior and optimize marketing campaigns with AI-powered analytics',
      benefits: ['40% higher conversion rates', '60% better targeting accuracy', 'Real-time insights']
    },
    {
      icon: Users,
      title: 'Customer Segmentation',
      description: 'Automatically segment customers based on behavior, preferences, and demographics',
      benefits: ['Personalized experiences', 'Improved engagement', 'Higher retention rates']
    },
    {
      icon: Mail,
      title: 'Email Marketing Automation',
      description: 'AI-driven email campaigns that adapt to customer behavior and preferences',
      benefits: ['3x higher open rates', 'Automated personalization', 'Dynamic content']
    },
    {
      icon: MessageSquare,
      title: 'Chatbot & Customer Service',
      description: 'Intelligent chatbots that provide 24/7 customer support and lead qualification',
      benefits: ['Instant responses', 'Lead qualification', 'Cost reduction']
    },
    {
      icon: BarChart,
      title: 'Performance Optimization',
      description: 'Continuously optimize marketing campaigns for maximum ROI and performance',
      benefits: ['A/B testing automation', 'Real-time optimization', 'ROI improvement']
    },
    {
      icon: TrendingUp,
      title: 'Lead Scoring & Nurturing',
      description: 'AI-powered lead scoring and automated nurturing sequences',
      benefits: ['Higher quality leads', 'Automated nurturing', 'Better sales conversion']
    }
  ];

  const useCases = [
    {
      industry: 'E-commerce',
      challenge: 'Low conversion rates and poor customer engagement',
      solution: 'AI-powered recommendation engine and personalized marketing',
      results: ['55% increase in conversion', '40% higher engagement', '30% boost in AOV']
    },
    {
      industry: 'SaaS',
      challenge: 'High customer churn and low trial-to-paid conversion',
      solution: 'AI-driven onboarding and retention campaigns',
      results: ['35% reduction in churn', '50% higher trial conversion', '25% increase in LTV']
    },
    {
      industry: 'Healthcare',
      challenge: 'Patient engagement and appointment scheduling',
      solution: 'AI-powered patient communication and scheduling system',
      results: ['60% reduction in no-shows', '45% higher patient satisfaction', '30% cost savings']
    },
    {
      industry: 'Financial Services',
      challenge: 'Lead qualification and customer acquisition',
      solution: 'AI-driven lead scoring and personalized financial advice',
      results: ['70% better lead quality', '40% higher conversion', '50% faster processing']
    }
  ];

  const pricing = [
    {
      name: 'Starter',
      price: '$2,500',
      period: '/month',
      description: 'Perfect for small businesses',
      features: [
        'Basic AI Analytics',
        'Email Automation',
        'Customer Segmentation',
        'Up to 10,000 contacts',
        'Email Support',
        'Basic Reporting'
      ]
    },
    {
      name: 'Professional',
      price: '$5,000',
      period: '/month',
      description: 'Ideal for growing businesses',
      features: [
        'Advanced AI Analytics',
        'Multi-channel Automation',
        'Advanced Segmentation',
        'Up to 50,000 contacts',
        'Priority Support',
        'Advanced Reporting',
        'A/B Testing',
        'Lead Scoring'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$10,000',
      period: '/month',
      description: 'For large organizations',
      features: [
        'Full AI Suite',
        'Custom Integrations',
        'Unlimited Contacts',
        '24/7 Support',
        'Custom Reporting',
        'Dedicated Account Manager',
        'API Access',
        'Custom Development'
      ]
    }
  ];

  return (
    <>
      <Navigation />
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4">
          <div className="container mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 neon-text">
              AI Marketing Solutions
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Transform your marketing with AI-powered automation, personalization, and analytics. 
              Drive higher engagement, better conversions, and measurable ROI.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="cyber-button inline-flex items-center px-8 py-4 text-lg"
              >
                <Zap className="w-5 h-5 mr-2" />
                Get Started Today
              </a>
              <a
                href="/case-studies"
                className="cyber-button-secondary inline-flex items-center px-8 py-4 text-lg"
              >
                <Award className="w-5 h-5 mr-2" />
                View Case Studies
              </a>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4">
          <div className="container mx-auto">
            <h2 className="text-4xl font-bold text-white text-center mb-16 neon-text">
              AI Marketing Features
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="cyber-card p-6 hover:scale-105 transition-transform duration-300">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center mr-4">
                      <feature.icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-white">{feature.title}</h3>
                  </div>
                  <p className="text-gray-300 mb-4">{feature.description}</p>
                  <ul className="space-y-2">
                    {feature.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="flex items-center text-sm text-gray-400">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Use Cases Section */}
        <section className="py-20 px-4">
          <div className="container mx-auto">
            <h2 className="text-4xl font-bold text-white text-center mb-16 neon-text">
              Industry Use Cases
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              {useCases.map((useCase, index) => (
                <div key={index} className="cyber-card p-8">
                  <h3 className="text-2xl font-bold text-white mb-4">{useCase.industry}</h3>
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-cyan-400 mb-2">Challenge:</h4>
                    <p className="text-gray-300">{useCase.challenge}</p>
                  </div>
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-cyan-400 mb-2">Solution:</h4>
                    <p className="text-gray-300">{useCase.solution}</p>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-cyan-400 mb-2">Results:</h4>
                    <ul className="space-y-1">
                      {useCase.results.map((result, resultIndex) => (
                        <li key={resultIndex} className="flex items-center text-gray-300">
                          <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                          {result}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-20 px-4">
          <div className="container mx-auto">
            <h2 className="text-4xl font-bold text-white text-center mb-16 neon-text">
              Pricing Plans
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {pricing.map((plan, index) => (
                <div
                  key={index}
                  className={`cyber-card p-8 relative ${
                    plan.popular ? 'ring-2 ring-cyan-500 scale-105' : ''
                  }`}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                        Most Popular
                      </span>
                    </div>
                  )}
                  
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                    <p className="text-gray-300 mb-6">{plan.description}</p>
                    <div className="mb-6">
                      <span className="text-4xl font-bold text-white">{plan.price}</span>
                      <span className="text-gray-400 ml-2">{plan.period}</span>
                    </div>
                    <a
                      href="/contact"
                      className={`w-full inline-flex items-center justify-center px-6 py-3 text-lg font-semibold rounded-lg transition-colors ${
                        plan.popular
                          ? 'cyber-button'
                          : 'bg-slate-800 text-white hover:bg-slate-700 border border-gray-600'
                      }`}
                    >
                      Get Started
                      <ArrowRight className="w-5 h-5 ml-2" />
                    </a>
                  </div>

                  <ul className="space-y-4">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center">
                        <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                        <span className="text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4">
          <div className="container mx-auto text-center">
            <div className="cyber-card p-12 max-w-4xl mx-auto">
              <h2 className="text-4xl font-bold text-white mb-6 neon-text">
                Ready to Transform Your Marketing?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Join hundreds of businesses that have already transformed their marketing with our AI solutions. 
                Let's discuss how we can help you achieve similar results.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="cyber-button inline-flex items-center px-8 py-4 text-lg"
                >
                  <Brain className="w-5 h-5 mr-2" />
                  Start Your AI Marketing Journey
                </a>
                <a
                  href="/pricing"
                  className="cyber-button-secondary inline-flex items-center px-8 py-4 text-lg"
                >
                  <Star className="w-5 h-5 mr-2" />
                  View Pricing
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default AIMarketingPage;