import React from 'react'
import { Helmet } from 'react-helmet-async'
import { Shield, AlertTriangle, Eye, Lock, BarChart3, CheckCircle, ArrowRight, Star, DollarSign, Clock, Target, Zap, Cpu, Database, TrendingUp } from 'lucide-react'

const AiFraudDetectionPage: React.FC = () => {
  const features = [
    {
      icon: <Shield className="w-8 h-8 text-red-500" />,
      title: 'Real-Time Detection',
      description: 'Advanced AI algorithms detect fraudulent transactions in real-time with 99.7% accuracy and minimal false positives.'
    },
    {
      icon: <Eye className="w-8 h-8 text-blue-500" />,
      title: 'Behavioral Analysis',
      description: 'Analyze user behavior patterns, device fingerprints, and transaction patterns to identify suspicious activities.'
    },
    {
      icon: <AlertTriangle className="w-8 h-8 text-yellow-500" />,
      title: 'Risk Scoring',
      description: 'Comprehensive risk scoring system that evaluates multiple factors to determine transaction risk levels.'
    },
    {
      icon: <Lock className="w-8 h-8 text-green-500" />,
      title: 'Multi-Layer Security',
      description: 'Multiple security layers including machine learning, rule-based systems, and anomaly detection.'
    },
    {
      icon: <BarChart3 className="w-8 h-8 text-purple-500" />,
      title: 'Advanced Analytics',
      description: 'Detailed fraud analytics and reporting to understand patterns and improve detection strategies.'
    },
    {
      icon: <Zap className="w-8 h-8 text-cyan-500" />,
      title: 'Instant Response',
      description: 'Automated response system that blocks suspicious transactions and alerts security teams instantly.'
    }
  ]

  const pricingPlans = [
    {
      name: 'Starter',
      price: '$299',
      period: '/month',
      description: 'Perfect for small businesses',
      features: [
        'Up to 10,000 transactions/month',
        'Basic fraud detection',
        'Email alerts',
        'Standard reporting',
        '1 user account',
        'Basic integrations'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '$799',
      period: '/month',
      description: 'Ideal for growing businesses',
      features: [
        'Up to 100,000 transactions/month',
        'Advanced AI models',
        'Real-time alerts',
        'Advanced analytics',
        '5 user accounts',
        'API access',
        'Custom rules',
        'Priority support'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$1999',
      period: '/month',
      description: 'For large organizations',
      features: [
        'Unlimited transactions',
        'Custom AI models',
        '24/7 monitoring',
        'White-label solution',
        'Unlimited users',
        'Advanced API',
        'Custom development',
        'Dedicated support',
        'Compliance reporting'
      ],
      popular: false
    }
  ]

  const industries = [
    {
      title: 'E-commerce',
      description: 'Protect online stores from payment fraud, account takeover, and chargeback fraud.',
      icon: <Target className="w-6 h-6 text-blue-500" />,
      savings: '90% fraud reduction'
    },
    {
      title: 'Banking & Finance',
      description: 'Secure financial transactions and prevent money laundering with advanced AI detection.',
      icon: <DollarSign className="w-6 h-6 text-green-500" />,
      savings: '95% accuracy rate'
    },
    {
      title: 'Insurance',
      description: 'Detect fraudulent claims and prevent insurance fraud with behavioral analysis.',
      icon: <Shield className="w-6 h-6 text-purple-500" />,
      savings: '80% cost savings'
    },
    {
      title: 'Healthcare',
      description: 'Protect patient data and prevent medical identity fraud with AI-powered monitoring.',
      icon: <Lock className="w-6 h-6 text-red-500" />,
      savings: '99.9% security'
    }
  ]

  const benefits = [
    {
      title: 'Reduce Fraud Losses',
      description: 'Minimize financial losses from fraudulent transactions by up to 90%.',
      icon: <DollarSign className="w-6 h-6 text-green-500" />
    },
    {
      title: 'Improve Customer Trust',
      description: 'Enhance customer confidence with robust fraud protection and secure transactions.',
      icon: <Shield className="w-6 h-6 text-blue-500" />
    },
    {
      title: 'Compliance Ready',
      description: 'Meet regulatory requirements with built-in compliance reporting and audit trails.',
      icon: <CheckCircle className="w-6 h-6 text-purple-500" />
    },
    {
      title: 'Real-Time Protection',
      description: 'Block fraudulent transactions instantly before they can cause damage.',
      icon: <Zap className="w-6 h-6 text-red-500" />
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>AI Fraud Detection | Zion Tech Group - Advanced Security Solutions</title>
        <meta name="description" content="Protect your business from fraud with AI-powered detection. 99.7% accuracy, real-time monitoring, and 90% fraud reduction for secure transactions." />
        <meta name="keywords" content="fraud detection, AI security, payment fraud, fraud prevention, cybersecurity, risk management" />
        <link rel="canonical" href="https://ziontechgroup.com/ai-services/ai-fraud-detection" />
      </Helmet>
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_70%,rgba(239,68,68,0.3)_0%,transparent_50%)] animate-pulse" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(59,130,246,0.3)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }} />
        
        <div className="relative max-w-7xl mx-auto text-center">
          <div className="inline-flex items-center space-x-2 bg-red-500/20 text-red-400 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Shield className="w-4 h-4" />
            <span>AI Fraud Detection</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            AI Fraud
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-pink-400">
              Detection Platform
            </span>
          </h1>
          
          <p className="text-xl text-gray-300 max-w-4xl mx-auto mb-8 leading-relaxed">
            Protect your business from fraud with our advanced AI-powered detection system. 
            Achieve 99.7% accuracy, reduce fraud losses by 90%, and secure every transaction in real-time.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <button className="bg-gradient-to-r from-red-500 to-pink-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-red-600 hover:to-pink-700 transition-all flex items-center justify-center space-x-2 group">
              <span>Start Free Trial</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="border border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-all">
              Watch Demo
            </button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-red-400 mb-2">99.7%</div>
              <div className="text-gray-300 text-sm">Detection Accuracy</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-400 mb-2">90%</div>
              <div className="text-gray-300 text-sm">Fraud Reduction</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-400 mb-2">0.1s</div>
              <div className="text-gray-300 text-sm">Response Time</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-400 mb-2">24/7</div>
              <div className="text-gray-300 text-sm">Monitoring</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Advanced Fraud Protection
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive fraud detection powered by cutting-edge AI technology
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300 group">
                <div className="mb-6 group-hover:scale-110 transition-transform duration-300">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-white mb-4 group-hover:text-red-300 transition-colors">{feature.title}</h3>
                <p className="text-gray-300 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-20 px-4 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Industry Applications
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Proven fraud protection across multiple industries
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {industries.map((industry, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300">
                <div className="flex items-center mb-6">
                  {industry.icon}
                  <h3 className="text-xl font-semibold text-white ml-3">{industry.title}</h3>
                </div>
                <p className="text-gray-300 mb-4 leading-relaxed">{industry.description}</p>
                <div className="inline-flex items-center bg-green-500/20 text-green-400 px-3 py-1 rounded-full text-sm font-medium">
                  <CheckCircle className="w-4 h-4 mr-2" />
                  {industry.savings}
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
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Why Choose AI Fraud Detection?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Protect your business with intelligent fraud prevention
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300 text-center group">
                <div className="mb-6 flex justify-center group-hover:scale-110 transition-transform duration-300">{benefit.icon}</div>
                <h3 className="text-xl font-semibold text-white mb-4">{benefit.title}</h3>
                <p className="text-gray-300 leading-relaxed">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 px-4 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Flexible Pricing Plans
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose the plan that fits your security needs
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <div key={index} className={`relative bg-white/10 backdrop-blur-lg rounded-2xl p-8 border transition-all duration-300 hover:scale-105 ${
                plan.popular 
                  ? 'border-red-500/50 bg-gradient-to-br from-red-500/10 to-pink-500/10' 
                  : 'border-white/20 hover:border-white/30'
              }`}>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="bg-gradient-to-r from-red-500 to-pink-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                      Most Popular
                    </div>
                  </div>
                )}
                
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <p className="text-gray-300 mb-4">{plan.description}</p>
                  <div className="flex items-baseline justify-center">
                    <span className="text-4xl font-bold text-white">{plan.price}</span>
                    <span className="text-gray-400 ml-1">{plan.period}</span>
                  </div>
                </div>
                
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <button className={`w-full py-3 rounded-lg font-semibold transition-all duration-300 ${
                  plan.popular
                    ? 'bg-gradient-to-r from-red-500 to-pink-600 text-white hover:from-red-600 hover:to-pink-700'
                    : 'border border-white text-white hover:bg-white hover:text-gray-900'
                }`}>
                  {plan.popular ? 'Start Free Trial' : 'Get Started'}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <div className="bg-gradient-to-r from-red-600 to-pink-600 rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-12">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">
                Ready to Secure Your Business?
              </h2>
              <p className="text-lg sm:text-xl text-white/90 mb-6 sm:mb-8 max-w-2xl mx-auto px-4">
                Join hundreds of companies already using AI Fraud Detection to protect their transactions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-white text-red-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                  Start Free Trial
                </button>
                <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors">
                  Contact Sales
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default AiFraudDetectionPage