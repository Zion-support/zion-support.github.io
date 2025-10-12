import React from 'react';
import { CheckCircle, ArrowRight, Link, BarChart3, Shield, Star, Zap, Brain, Target, Globe, TrendingUp, Lock } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import { Link as RouterLink } from 'react-router-dom';

export default function AIBlockchainAnalyticsPage() {
  const features = [
    {
      icon: <Link className="w-8 h-8 text-blue-500" />,
      title: 'Blockchain Data Analysis',
      description: 'Advanced AI algorithms to analyze blockchain transactions, smart contracts, and network behavior.',
      features: ['Transaction analysis', 'Smart contract auditing', 'Network monitoring', 'Anomaly detection', 'Pattern recognition', 'Risk assessment'],
      price: 'Starting at $299/month',
      popular: true
    },
    {
      icon: <BarChart3 className="w-8 h-8 text-green-500" />,
      title: 'DeFi Analytics',
      description: 'Comprehensive DeFi protocol analysis with yield farming optimization and liquidity pool insights.',
      features: ['Yield optimization', 'Liquidity analysis', 'Protocol comparison', 'APY tracking', 'Risk scoring', 'Portfolio management'],
      price: 'Starting at $399/month',
      popular: false
    },
    {
      icon: <Shield className="w-8 h-8 text-purple-500" />,
      title: 'Security Intelligence',
      description: 'AI-powered security monitoring and threat detection for blockchain networks and DeFi protocols.',
      features: ['Threat detection', 'Vulnerability scanning', 'Security scoring', 'Incident response', 'Compliance monitoring', 'Audit trails'],
      price: 'Starting at $499/month',
      popular: true
    }
  ];

  const benefits = [
    {
      icon: <CheckCircle className="w-6 h-6 text-green-500" />,
      title: 'Risk Mitigation',
      description: 'Identify and mitigate blockchain risks with AI-powered analysis and early warning systems.'
    },
    {
      icon: <CheckCircle className="w-6 h-6 text-green-500" />,
      title: 'Investment Optimization',
      description: 'Maximize returns with AI-driven investment strategies and portfolio optimization.'
    },
    {
      icon: <CheckCircle className="w-6 h-6 text-green-500" />,
      title: 'Regulatory Compliance',
      description: 'Ensure compliance with evolving blockchain regulations and reporting requirements.'
    },
    {
      icon: <CheckCircle className="w-6 h-6 text-green-500" />,
      title: 'Real-time Insights',
      description: 'Get instant insights into blockchain activities and market movements.'
    }
  ];

  const useCases = [
    {
      title: 'Cryptocurrency Exchanges',
      description: 'Monitor trading patterns and detect suspicious activities',
      icon: <TrendingUp className="w-6 h-6 text-blue-500" />
    },
    {
      title: 'DeFi Protocols',
      description: 'Optimize liquidity and manage protocol risks',
      icon: <Target className="w-6 h-6 text-green-500" />
    },
    {
      title: 'Investment Funds',
      description: 'Analyze blockchain investments and manage portfolios',
      icon: <BarChart3 className="w-6 h-6 text-purple-500" />
    },
    {
      title: 'Regulatory Bodies',
      description: 'Monitor compliance and detect illicit activities',
      icon: <Shield className="w-6 h-6 text-red-500" />
    }
  ];

  const stats = [
    { number: '1B+', label: 'Transactions Analyzed' },
    { number: '99.9%', label: 'Accuracy Rate' },
    { number: '50+', label: 'Blockchains Supported' },
    { number: '24/7', label: 'Real-time Monitoring' }
  ];

  const pricing = [
    {
      plan: 'Professional',
      price: '$299',
      period: '/month',
      description: 'Perfect for crypto traders and small DeFi protocols',
      features: ['Basic blockchain analysis', 'Transaction monitoring', 'Basic risk scoring', 'Email support', 'Standard reports', 'API access'],
      popular: false
    },
    {
      plan: 'Enterprise',
      price: '$799',
      period: '/month',
      description: 'Ideal for exchanges and large DeFi protocols',
      features: ['Advanced analytics', 'DeFi optimization', 'Security monitoring', 'Priority support', 'Custom dashboards', 'White-label options'],
      popular: true
    },
    {
      plan: 'Institutional',
      price: '$1,999',
      period: '/month',
      description: 'For large institutions and regulatory bodies',
      features: ['Full AI suite', 'Custom models', 'Dedicated support', 'On-premise deployment', 'Compliance tools', 'Custom integrations'],
      popular: false
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Helmet>
        <title>AI Blockchain Analytics - Zion Tech Group</title>
        <meta name="description" content="Revolutionary AI-powered blockchain analytics platform. Analyze transactions, optimize DeFi strategies, and ensure security with advanced AI technology." />
        <meta name="keywords" content="AI blockchain analytics, DeFi analytics, cryptocurrency analysis, blockchain security, smart contract auditing" />
      </Helmet>
      
      {/* Hero Section */}
      <section className="pt-20 px-4 py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
              AI Blockchain Analytics
            </h1>
            <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Unlock the power of blockchain data with AI-powered analytics. Analyze transactions, optimize DeFi strategies, 
              and ensure security with advanced machine learning algorithms.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <RouterLink
                to="/contact"
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 flex items-center justify-center"
              >
                Start Free Trial
                <ArrowRight className="w-5 h-5 ml-2" />
              </RouterLink>
              <RouterLink
                to="/ai-services"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors"
              >
                View All AI Services
              </RouterLink>
            </div>
          </div>

          {/* Stats Section */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 mb-12 sm:mb-16 lg:mb-20 mt-12">
            {stats.map((stat, index) => (
              <div key={index} className="text-center px-2">
                <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-1 sm:mb-2">{stat.number}</div>
                <div className="text-gray-300 text-xs sm:text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-12 sm:py-16 lg:py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Advanced Blockchain AI Features
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Everything you need to analyze and optimize blockchain operations with AI.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-all duration-300 group relative">
                {feature.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-4 py-1 rounded-full text-sm font-semibold flex items-center">
                      <Star className="w-4 h-4 mr-1" />
                      Popular
                    </span>
                  </div>
                )}
                <div className="mb-4 group-hover:scale-110 transition-transform duration-300">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">{feature.title}</h3>
                <p className="text-gray-600 mb-4">{feature.description}</p>
                <ul className="space-y-2 mb-4">
                  {feature.features.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-center text-sm text-gray-600">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
                <div className="text-blue-600 font-semibold mb-4">{feature.price}</div>
                <RouterLink
                  to="/contact"
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 flex items-center justify-center"
                >
                  Get Started
                  <ArrowRight className="w-4 h-4 ml-2" />
                </RouterLink>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-12 sm:py-16 lg:py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Perfect For Every Blockchain Use Case
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our AI blockchain analytics adapts to your specific industry and requirements.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {useCases.map((useCase, index) => (
              <div key={index} className="text-center p-6 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                <div className="flex justify-center mb-4">{useCase.icon}</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">{useCase.title}</h3>
                <p className="text-gray-600">{useCase.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-12 sm:py-16 lg:py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Our AI Blockchain Analytics?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Experience the future of blockchain analysis with intelligent automation and insights.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="flex justify-center mb-4">{benefit.icon}</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-12 sm:py-16 lg:py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Choose Your Plan
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Start free and scale as your blockchain analytics needs grow.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {pricing.map((plan, index) => (
              <div key={index} className={`bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-all duration-300 ${plan.popular ? 'ring-2 ring-blue-500 relative' : ''}`}>
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <span className="bg-blue-500 text-white px-4 py-1 rounded-full text-sm font-medium">Most Popular</span>
                  </div>
                )}
                <div className="text-center mb-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{plan.plan}</h3>
                  <div className="flex items-baseline justify-center mb-2">
                    <span className="text-3xl font-bold text-gray-900">{plan.price}</span>
                    <span className="text-gray-600 ml-1">{plan.period}</span>
                  </div>
                  <p className="text-gray-600 text-sm">{plan.description}</p>
                </div>
                <ul className="space-y-3 mb-6">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <RouterLink
                  to="/contact"
                  className={`w-full block text-center py-3 px-4 rounded-lg font-semibold transition-all duration-300 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700'
                      : 'border-2 border-gray-300 text-gray-700 hover:border-blue-500 hover:text-blue-600'
                  }`}
                >
                  Start Free Trial
                </RouterLink>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-16 lg:py-20 px-4 bg-gradient-to-r from-purple-600 to-pink-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Master Blockchain Analytics?
          </h2>
          <p className="text-lg sm:text-xl text-white/90 mb-8">
            Join leading blockchain companies using AI to gain competitive advantages and optimize their operations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <RouterLink
              to="/contact"
              className="bg-white text-purple-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 flex items-center justify-center"
            >
              <Lock className="w-5 h-5 mr-2" />
              Start Free Trial
            </RouterLink>
            <RouterLink
              to="/ai-services"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors"
            >
              Explore All AI Services
            </RouterLink>
          </div>
        </div>
      </section>
    </div>
  );
}