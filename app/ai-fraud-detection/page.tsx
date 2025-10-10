'use client';
import React, { memo } from 'react';
import { Helmet } from 'react-helmet-async';
import { Shield, AlertTriangle, CheckCircle, Zap, ArrowRight, Phone, MessageSquare, Star, TrendingUp, Settings, Database, Globe, Lock, Activity, Eye, Target } from 'lucide-react';

const AIFraudDetectionPage: React.FC = memo(() => {
  const features = [
    {
      icon: Shield,
      title: 'Real-time Detection',
      description: 'AI-powered fraud detection that analyzes transactions in milliseconds to prevent fraudulent activities',
      color: 'text-blue-400'
    },
    {
      icon: AlertTriangle,
      title: 'Advanced Analytics',
      description: 'Machine learning algorithms that identify suspicious patterns and behaviors across multiple data points',
      color: 'text-red-400'
    },
    {
      icon: Eye,
      title: 'Behavioral Analysis',
      description: 'Continuous monitoring of user behavior patterns to detect anomalies and potential fraud attempts',
      color: 'text-purple-400'
    },
    {
      icon: Target,
      title: 'Risk Scoring',
      description: 'Intelligent risk assessment that assigns scores to transactions based on multiple risk factors',
      color: 'text-orange-400'
    },
    {
      icon: Zap,
      title: 'Automated Response',
      description: 'Instant automated responses to fraud attempts including blocking, flagging, and alerting',
      color: 'text-cyan-400'
    },
    {
      icon: Lock,
      title: 'Compliance Ready',
      description: 'Built-in compliance features for PCI DSS, GDPR, and other regulatory requirements',
      color: 'text-green-400'
    }
  ];

  const pricingPlans = [
    {
      name: 'Starter',
      price: '$199',
      period: '/month',
      description: 'Perfect for small businesses and startups',
      features: [
        'Up to 10,000 transactions/month',
        'Basic fraud detection',
        'Email alerts',
        'Standard reporting',
        'Email support'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '$499',
      period: '/month',
      description: 'Ideal for growing businesses and e-commerce',
      features: [
        'Up to 100,000 transactions/month',
        'Advanced AI detection',
        'Real-time alerts',
        'Custom rules engine',
        'Priority support',
        'API access'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$1,299',
      period: '/month',
      description: 'For large organizations with high transaction volumes',
      features: [
        'Unlimited transactions',
        'Custom AI models',
        'Advanced analytics',
        'Dedicated support',
        'Custom integrations',
        'White-label options'
      ],
      popular: false
    }
  ];

  const benefits = [
    {
      metric: '99.7%',
      label: 'Detection Accuracy',
      description: 'Industry-leading fraud detection accuracy'
    },
    {
      metric: '85%',
      label: 'False Positive Reduction',
      description: 'Significantly reduce false positives'
    },
    {
      metric: '60%',
      label: 'Cost Savings',
      description: 'Reduce fraud-related losses and operational costs'
    },
    {
      metric: '24/7',
      label: 'Monitoring',
      description: 'Continuous real-time fraud monitoring'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-red-900 to-slate-900">
      <Helmet>
        <title>AI Fraud Detection - Advanced Security Solutions | Zion Tech Group</title>
        <meta name="description" content="Advanced AI-powered fraud detection system with 99.7% accuracy, real-time monitoring, and automated response. Protect your business from financial fraud." />
        <meta name="keywords" content="AI fraud detection, fraud prevention, security analytics, risk management, financial security" />
        <meta property="og:title" content="AI Fraud Detection - Advanced Security Solutions" />
        <meta property="og:description" content="Advanced AI-powered fraud detection system with 99.7% accuracy and real-time monitoring." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ziontechgroup.com/ai-fraud-detection" />
      </Helmet>

      <div className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <section className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-red-600/20 text-red-400 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Shield className="w-4 h-4" />
            <span>AI Fraud Detection</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            AI Fraud Detection
          </h1>
          
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Protect your business from financial fraud with our advanced AI-powered detection system. 
            99.7% accuracy, real-time monitoring, and automated response to keep your assets secure.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+13024640950"
              className="bg-gradient-to-r from-red-600 to-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-red-700 hover:to-blue-700 transition-all duration-300 flex items-center justify-center"
            >
              <Phone className="w-5 h-5 mr-2" />
              Call: (302) 464-0950
            </a>
            <a
              href="/contact"
              className="border-2 border-red-400 text-red-400 px-8 py-4 rounded-lg font-semibold hover:bg-red-400 hover:text-slate-900 transition-all duration-300"
            >
              Get Free Assessment
            </a>
          </div>
        </section>

        {/* Benefits Stats */}
        <section className="mb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-slate-800/50 p-6 rounded-lg border border-red-500/20 text-center">
                <div className="text-3xl font-bold text-red-400 mb-2">{benefit.metric}</div>
                <div className="text-white font-semibold mb-2">{benefit.label}</div>
                <div className="text-sm text-gray-400">{benefit.description}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Features Section */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Advanced Fraud Detection Features</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our AI fraud detection system uses cutting-edge machine learning to protect your business
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-slate-800/30 p-6 rounded-lg border border-gray-700 hover:border-red-500/50 transition-all duration-300">
                <div className={`w-12 h-12 rounded-lg bg-slate-700/50 flex items-center justify-center mb-4`}>
                  <feature.icon className={`w-6 h-6 ${feature.color}`} />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* How It Works */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">How Our AI Fraud Detection Works</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our system continuously learns and adapts to new fraud patterns
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-red-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">1</div>
              <h3 className="text-xl font-semibold text-white mb-3">Data Collection</h3>
              <p className="text-gray-400">Collect transaction data, user behavior, and contextual information</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-red-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">2</div>
              <h3 className="text-xl font-semibold text-white mb-3">AI Analysis</h3>
              <p className="text-gray-400">AI algorithms analyze patterns and identify suspicious activities</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-red-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">3</div>
              <h3 className="text-xl font-semibold text-white mb-3">Risk Scoring</h3>
              <p className="text-gray-400">Assign risk scores based on multiple factors and patterns</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-red-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">4</div>
              <h3 className="text-xl font-semibold text-white mb-3">Automated Response</h3>
              <p className="text-gray-400">Take immediate action to prevent or investigate fraud</p>
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Protect Your Business</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose the fraud detection plan that fits your business needs
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <div key={index} className={`bg-slate-800/30 p-8 rounded-lg border transition-all duration-300 ${
                plan.popular 
                  ? 'border-red-500/50 scale-105' 
                  : 'border-gray-700 hover:border-red-500/30'
              }`}>
                {plan.popular && (
                  <div className="bg-red-600 text-white text-sm font-semibold px-3 py-1 rounded-full inline-block mb-4">
                    Most Popular
                  </div>
                )}
                
                <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                <p className="text-gray-400 mb-6">{plan.description}</p>
                
                <div className="mb-6">
                  <span className="text-4xl font-bold text-white">{plan.price}</span>
                  <span className="text-gray-400">{plan.period}</span>
                </div>
                
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center space-x-2 text-gray-300">
                      <CheckCircle className="w-4 h-4 text-red-400 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <a
                  href="/contact"
                  className={`w-full block text-center py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-red-600 to-blue-600 text-white hover:from-red-700 hover:to-blue-700'
                      : 'border-2 border-red-400 text-red-400 hover:bg-red-400 hover:text-slate-900'
                  }`}
                >
                  Get Started
                </a>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center bg-gradient-to-r from-red-600/20 to-blue-600/20 p-12 rounded-lg border border-red-500/30">
          <h2 className="text-3xl font-bold text-white mb-4">Don't Wait for Fraud to Strike</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Protect your business today with our advanced AI fraud detection system. 
            Get a free security assessment and see how much you can save.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+13024640950"
              className="bg-gradient-to-r from-red-600 to-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-red-700 hover:to-blue-700 transition-all duration-300 flex items-center justify-center"
            >
              <Phone className="w-5 h-5 mr-2" />
              Call: (302) 464-0950
            </a>
            <a
              href="mailto:kleber@ziontechgroup.com"
              className="border-2 border-red-400 text-red-400 px-8 py-4 rounded-lg font-semibold hover:bg-red-400 hover:text-slate-900 transition-all duration-300 flex items-center justify-center"
            >
              <MessageSquare className="w-5 h-5 mr-2" />
              Email Us
            </a>
          </div>
        </section>
      </div>
    </div>
  );
});

AIFraudDetectionPage.displayName = 'AIFraudDetectionPage';

export default AIFraudDetectionPage;