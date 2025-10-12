import React from 'react';
import { Helmet } from 'react-helmet-async';
import Layout from '../layout';
import { Shield, AlertTriangle, BarChart, Clock, CheckCircle, Star, ArrowRight, Brain, Eye, Zap, DollarSign, Users, Settings, Lock } from 'lucide-react';

const ZionAIFraudDetector: React.FC = () => {
  const features = [
    {
      icon: Shield,
      title: 'Real-time Fraud Detection',
      description: 'Advanced ML algorithms detect fraudulent transactions in milliseconds with 99.9% accuracy',
      price: '$0.01/transaction'
    },
    {
      icon: Eye,
      title: 'Behavioral Analysis',
      description: 'Analyze user behavior patterns to identify suspicious activities and anomalies',
      price: '$0.05/user/month'
    },
    {
      icon: BarChart,
      title: 'Risk Scoring',
      description: 'Comprehensive risk assessment with detailed scoring and explanation',
      price: '$0.02/assessment'
    },
    {
      icon: AlertTriangle,
      title: 'Instant Alerts',
      description: 'Real-time notifications for high-risk transactions and suspicious activities',
      price: '$0.10/alert'
    },
    {
      icon: Clock,
      title: 'Historical Analysis',
      description: 'Deep dive into transaction history to identify patterns and trends',
      price: '$0.03/analysis'
    },
    {
      icon: Settings,
      title: 'Custom Rules Engine',
      description: 'Create custom fraud detection rules tailored to your business needs',
      price: '$0.50/rule/month'
    }
  ];

  const pricingTiers = [
    {
      name: 'Starter',
      price: '$99',
      period: '/month',
      description: 'Perfect for small businesses',
      features: [
        'Up to 10K transactions/month',
        'Basic fraud detection',
        'Email alerts',
        'Standard support',
        'Basic reporting'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '$299',
      period: '/month',
      description: 'Ideal for growing companies',
      features: [
        'Up to 100K transactions/month',
        'Advanced ML models',
        'Real-time alerts',
        'Priority support',
        'Custom rules',
        'API access',
        'Advanced analytics'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$999',
      period: '/month',
      description: 'For large organizations',
      features: [
        'Unlimited transactions',
        'All ML models',
        'Custom model training',
        'Dedicated support',
        'White-label solution',
        'Advanced security',
        'SLA guarantee',
        'Custom integrations'
      ],
      popular: false
    }
  ];

  const stats = [
    { number: '99.9%', label: 'Detection Accuracy', icon: Shield },
    { number: '< 50ms', label: 'Response Time', icon: Zap },
    { number: '99.99%', label: 'Uptime SLA', icon: Clock },
    { number: '50+', label: 'Fraud Types Detected', icon: Eye }
  ];

  return (
    <Layout
      title="Zion AI Fraud Detector - Advanced Fraud Prevention"
      description="Protect your business with AI-powered fraud detection. Real-time analysis, behavioral insights, and 99.9% accuracy in detecting fraudulent transactions."
      keywords="fraud detection, AI security, transaction monitoring, risk assessment, fraud prevention, ML fraud detection"
    >
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-red-500/10 via-orange-500/10 to-yellow-500/10"></div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-red-500/20 to-orange-500/20 rounded-full mb-6">
                <Shield className="w-5 h-5 text-red-400 mr-2" />
                <span className="text-red-400 font-medium">Advanced Fraud Protection</span>
              </div>
              
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
                <span className="bg-gradient-to-r from-red-400 via-orange-400 to-yellow-400 bg-clip-text text-transparent">
                  Zion AI Fraud Detector
                </span>
              </h1>
              
              <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
                Protect your business with cutting-edge AI that detects fraudulent transactions in real-time. 
                Our advanced machine learning models provide 99.9% accuracy with sub-50ms response times.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                <button className="bg-gradient-to-r from-red-500 to-orange-500 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-red-600 hover:to-orange-600 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-red-500/25 flex items-center justify-center group">
                  Start Free Trial
                  <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                </button>
                <button className="border border-red-500 text-red-400 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-red-500/10 transition-all duration-300 transform hover:scale-105">
                  View Demo
                </button>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center group">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-red-500/20 to-orange-500/20 rounded-full mb-4 group-hover:scale-110 transition-transform duration-300">
                      <stat.icon className="w-8 h-8 text-red-400" />
                    </div>
                    <div className="text-3xl font-bold text-white mb-2">{stat.number}</div>
                    <div className="text-gray-400 text-sm">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Advanced <span className="bg-gradient-to-r from-red-400 to-orange-400 bg-clip-text text-transparent">Security Features</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Comprehensive fraud detection powered by state-of-the-art machine learning and behavioral analysis
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div 
                  key={index}
                  className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border border-gray-700/50 rounded-xl p-6 hover:border-red-400/40 transition-all duration-300 group hover:transform hover:scale-105"
                >
                  <div className="w-12 h-12 bg-gradient-to-r from-red-500 to-orange-500 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-red-400 transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-gray-300 mb-4 text-sm leading-relaxed">
                    {feature.description}
                  </p>
                  <div className="text-red-400 font-semibold text-sm">
                    {feature.price}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section className="py-20 bg-gradient-to-r from-slate-800/30 to-slate-900/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                How It <span className="bg-gradient-to-r from-red-400 to-orange-400 bg-clip-text text-transparent">Works</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our AI-powered fraud detection system analyzes transactions in real-time using multiple data points
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              <div className="text-center group">
                <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-red-500/20 to-orange-500/20 rounded-full mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Eye className="w-10 h-10 text-red-400" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">1. Data Collection</h3>
                <p className="text-gray-300 leading-relaxed">
                  Collect transaction data, user behavior, device information, and contextual data points for comprehensive analysis.
                </p>
              </div>

              <div className="text-center group">
                <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-orange-500/20 to-yellow-500/20 rounded-full mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Brain className="w-10 h-10 text-orange-400" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">2. AI Analysis</h3>
                <p className="text-gray-300 leading-relaxed">
                  Advanced ML models analyze patterns, detect anomalies, and calculate risk scores in real-time.
                </p>
              </div>

              <div className="text-center group">
                <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-yellow-500/20 to-red-500/20 rounded-full mb-6 group-hover:scale-110 transition-transform duration-300">
                  <AlertTriangle className="w-10 h-10 text-yellow-400" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">3. Action & Alert</h3>
                <p className="text-gray-300 leading-relaxed">
                  Automatically block suspicious transactions and send instant alerts to your security team.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Flexible <span className="bg-gradient-to-r from-red-400 to-orange-400 bg-clip-text text-transparent">Pricing</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Choose the plan that fits your transaction volume and security requirements
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {pricingTiers.map((tier, index) => (
                <div 
                  key={index}
                  className={`relative bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border rounded-xl p-8 hover:transform hover:scale-105 transition-all duration-300 ${
                    tier.popular 
                      ? 'border-red-500/50 shadow-lg shadow-red-500/25' 
                      : 'border-gray-700/50'
                  }`}
                >
                  {tier.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <div className="bg-gradient-to-r from-red-500 to-orange-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                        Most Popular
                      </div>
                    </div>
                  )}
                  
                  <div className="text-center mb-6">
                    <h3 className="text-2xl font-bold text-white mb-2">{tier.name}</h3>
                    <p className="text-gray-400 text-sm mb-4">{tier.description}</p>
                    <div className="flex items-baseline justify-center">
                      <span className="text-4xl font-bold text-white">{tier.price}</span>
                      <span className="text-gray-400 ml-1">{tier.period}</span>
                    </div>
                  </div>

                  <ul className="space-y-4 mb-8">
                    {tier.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center">
                        <CheckCircle className="w-5 h-5 text-red-400 mr-3 flex-shrink-0" />
                        <span className="text-gray-300 text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <button className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                    tier.popular
                      ? 'bg-gradient-to-r from-red-500 to-orange-500 text-white hover:from-red-600 hover:to-orange-600'
                      : 'border border-red-500 text-red-400 hover:bg-red-500/10'
                  }`}>
                    {tier.popular ? 'Get Started' : 'Choose Plan'}
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="bg-gradient-to-r from-red-900/50 to-orange-900/50 backdrop-blur-sm border border-red-500/20 rounded-2xl p-12 text-center relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-red-500/5 to-orange-500/5"></div>
              <div className="relative z-10">
                <h2 className="text-4xl font-bold text-white mb-6">
                  Protect Your Business Today
                </h2>
                <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                  Don't wait for fraud to happen. Get started with Zion AI Fraud Detector and secure your transactions with industry-leading accuracy.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <button className="bg-gradient-to-r from-red-500 to-orange-500 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-red-600 hover:to-orange-600 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-red-500/25">
                    Start Free Trial
                  </button>
                  <button className="border border-red-500 text-red-400 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-red-500/10 transition-all duration-300 transform hover:scale-105">
                    Contact Security Team
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default ZionAIFraudDetector;