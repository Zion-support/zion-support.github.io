import React from 'react';
import type { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import { ArrowRight, CheckCircle, Brain, Zap, Users, Shield, TrendingUp, BarChart3, MessageCircle, Star } from 'lucide-react';

const AICustomerSentimentAnalyzerPage: NextPage = () => {
  const features = [
    'Real-time sentiment monitoring across all channels',
    'Multi-channel data integration (social media, reviews, surveys, support tickets)',
    'Advanced emotion detection and classification',
    'Trend analysis and predictive insights',
    'Automated alert system for negative sentiment spikes',
    'Custom dashboard with KPI tracking',
    'API integration with CRM systems',
    'White-label reporting capabilities'
  ];

  const benefits = [
    'Improve customer satisfaction by 40%',
    'Reduce churn through early warning system',
    'Enhance brand reputation management',
    'Data-driven customer experience decisions',
    'Competitive advantage through sentiment insights'
  ];

  const useCases = [
    'Brand reputation monitoring',
    'Product feedback analysis',
    'Customer service optimization',
    'Marketing campaign effectiveness',
    'Competitor sentiment tracking'
  ];

  const pricingPlans = [
    {
      name: 'Starter',
      price: 199,
      period: 'month',
      description: 'Perfect for small businesses',
      features: [
        'Up to 10,000 mentions/month',
        '3 social media channels',
        'Basic sentiment analysis',
        'Email alerts',
        'Standard dashboard',
        'Email support'
      ]
    },
    {
      name: 'Professional',
      price: 499,
      period: 'month',
      description: 'Ideal for growing companies',
      features: [
        'Up to 50,000 mentions/month',
        'Unlimited social media channels',
        'Advanced emotion detection',
        'Real-time alerts',
        'Custom dashboard',
        'API access',
        'Priority support'
      ]
    },
    {
      name: 'Enterprise',
      price: 1299,
      period: 'month',
      description: 'For large organizations',
      features: [
        'Unlimited mentions',
        'All data sources',
        'AI-powered insights',
        'Custom integrations',
        'White-label reporting',
        'Dedicated account manager',
        '24/7 phone support'
      ]
    }
  ];

  return (
    <>
      <Head>
        <title>AI Customer Sentiment Analyzer Pro - Zion Tech Group</title>
        <meta name="description" content="Advanced AI-powered sentiment analysis platform that monitors customer feedback across all channels in real-time, providing actionable insights for customer experience optimization." />
        <meta name="keywords" content="AI sentiment analysis, customer feedback, brand monitoring, social media analytics, customer experience" />
        <link rel="canonical" href="https://ziontechgroup.com/services/ai-customer-sentiment-analyzer" />
      </Head>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex items-center justify-center mb-6">
              <Brain className="h-12 w-12 text-blue-400 mr-4" />
              <span className="text-2xl font-bold">AI Customer Sentiment Analyzer Pro</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Monitor Customer Sentiment in Real-Time
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-200 leading-relaxed">
              Advanced AI-powered sentiment analysis platform that monitors customer feedback across all channels, 
              providing actionable insights for customer experience optimization.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <span className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors cursor-pointer inline-flex items-center">
                  Get Free Demo
                  <ArrowRight className="ml-2 w-5 h-5" />
                </span>
              </Link>
              <Link href="#pricing">
                <span className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-900 px-8 py-4 rounded-lg font-semibold text-lg transition-colors cursor-pointer">
                  View Pricing
                </span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Powerful Features</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive sentiment analysis capabilities designed to give you complete visibility into customer feedback.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center p-6 rounded-lg hover:shadow-lg transition-shadow">
                <div className="text-blue-600 mb-4 flex justify-center">
                  {index === 0 && <MessageCircle className="w-8 h-8" />}
                  {index === 1 && <BarChart3 className="w-8 h-8" />}
                  {index === 2 && <Brain className="w-8 h-8" />}
                  {index === 3 && <TrendingUp className="w-8 h-8" />}
                  {index === 4 && <Zap className="w-8 h-8" />}
                  {index === 5 && <BarChart3 className="w-8 h-8" />}
                  {index === 6 && <Shield className="w-8 h-8" />}
                  {index === 7 && <Star className="w-8 h-8" />}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">{feature}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose Our Sentiment Analyzer?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Transform your customer experience with data-driven insights and proactive sentiment management.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow">
                <div className="flex items-center gap-3 mb-4">
                  <CheckCircle className="w-6 h-6 text-green-500" />
                  <h3 className="text-xl font-semibold text-gray-900">{benefit}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Use Cases</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover how businesses across industries use our sentiment analysis platform.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {useCases.map((useCase, index) => (
              <div key={index} className="text-center p-6 rounded-lg border border-gray-200 hover:border-blue-300 transition-colors">
                <div className="text-blue-600 mb-4 flex justify-center">
                  <Users className="w-8 h-8" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">{useCase}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Simple, Transparent Pricing</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose the plan that fits your business needs. All plans include our core sentiment analysis features.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricingPlans.map((plan, index) => (
              <div key={index} className={`bg-white rounded-lg shadow-lg p-8 ${index === 1 ? 'ring-2 ring-blue-500 relative' : ''}`}>
                {index === 1 && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-blue-500 text-white px-4 py-2 rounded-full text-sm font-semibold">Most Popular</span>
                  </div>
                )}
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                  <p className="text-gray-600 mb-4">{plan.description}</p>
                  <div className="text-4xl font-bold text-blue-600">
                    ${plan.price}
                    <span className="text-lg text-gray-500">/{plan.period}</span>
                  </div>
                </div>
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-green-500" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link href="/contact">
                  <span className={`w-full py-3 px-6 rounded-lg font-semibold text-center transition-colors cursor-pointer block ${
                    index === 1 
                      ? 'bg-blue-600 text-white hover:bg-blue-700' 
                      : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                  }`}>
                    Get Started
                  </span>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-600 py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Transform Your Customer Experience?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Get started with our AI Customer Sentiment Analyzer and gain valuable insights into your customer feedback.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <span className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold text-lg transition-colors cursor-pointer inline-flex items-center">
                Start Free Trial
                <ArrowRight className="ml-2 w-5 h-5" />
              </span>
            </Link>
            <Link href="tel:+13024640950">
              <span className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg transition-colors cursor-pointer">
                Call +1 302 464 0950
              </span>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default AICustomerSentimentAnalyzerPage;