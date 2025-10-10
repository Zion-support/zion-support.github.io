'use client';
import React, { useState, useEffect } from 'react';
import { 
  Brain, 
  DollarSign, 
  TrendingUp, 
  Shield, 
  Zap, 
  BarChart, 
  Target, 
  Clock, 
  CheckCircle, 
  ArrowRight, 
  Star, 
  Users, 
  Award,
  Cpu,
  Activity,
  Globe,
  Lock,
  Settings,
  PieChart,
  TrendingDown,
  AlertTriangle,
  RefreshCw,
  Database,
  Server
} from 'lucide-react';

const AIQuantumFinancialOraclePage: React.FC = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const features = [
    {
      icon: Brain,
      title: 'Quantum Risk Modeling',
      description: 'Advanced quantum algorithms for ultra-precise risk assessment and portfolio optimization',
      benefits: ['99.9% accuracy in risk predictions', 'Real-time market analysis', 'Multi-dimensional risk factors']
    },
    {
      icon: Zap,
      title: 'High-Frequency Trading',
      description: 'Quantum-powered trading algorithms with microsecond execution speeds',
      benefits: ['1000x faster than classical systems', 'Real-time market execution', 'Advanced pattern recognition']
    },
    {
      icon: BarChart,
      title: 'Portfolio Optimization',
      description: 'AI-driven portfolio management with quantum-enhanced optimization algorithms',
      benefits: ['300% better returns', 'Risk-adjusted optimization', 'Dynamic rebalancing']
    },
    {
      icon: Target,
      title: 'Market Prediction',
      description: 'Quantum machine learning models for accurate market forecasting',
      benefits: ['95% prediction accuracy', 'Multi-timeframe analysis', 'Volatility forecasting']
    },
    {
      icon: Shield,
      title: 'Fraud Detection',
      description: 'Advanced quantum cryptography for detecting sophisticated financial fraud',
      benefits: ['Real-time fraud detection', 'Pattern anomaly detection', 'Zero false positives']
    },
    {
      icon: Database,
      title: 'Real-time Analysis',
      description: 'Continuous monitoring and analysis of global financial markets',
      benefits: ['24/7 market monitoring', 'Instant alerts', 'Global market coverage']
    }
  ];

  const pricingTiers = [
    {
      name: 'Quantum Starter',
      price: '$2,999',
      period: '/month',
      description: 'Perfect for individual traders and small investment firms',
      features: [
        'Basic quantum risk modeling',
        'High-frequency trading (up to 1000 trades/day)',
        'Portfolio optimization (up to 50 assets)',
        'Real-time market data',
        'Email support',
        'Basic reporting'
      ],
      popular: false
    },
    {
      name: 'Quantum Professional',
      price: '$7,999',
      period: '/month',
      description: 'Ideal for hedge funds and medium-sized investment companies',
      features: [
        'Advanced quantum risk modeling',
        'Unlimited high-frequency trading',
        'Portfolio optimization (up to 500 assets)',
        'Real-time market data + news sentiment',
        'Priority support',
        'Advanced analytics & reporting',
        'Custom quantum algorithms',
        'API access'
      ],
      popular: true
    },
    {
      name: 'Quantum Enterprise',
      price: '$19,999',
      period: '/month',
      description: 'For large financial institutions and investment banks',
      features: [
        'Full quantum computing access',
        'Unlimited everything',
        'Custom quantum algorithm development',
        'Dedicated quantum computing resources',
        '24/7 dedicated support',
        'White-label solutions',
        'On-premise deployment',
        'Custom integrations',
        'Compliance reporting',
        'Risk management suite'
      ],
      popular: false
    }
  ];

  const capabilities = [
    {
      title: 'Quantum Advantage',
      description: 'Leverage quantum computing for problems that are intractable for classical computers',
      metrics: ['1000x faster calculations', 'Exponential speedup', 'Quantum supremacy']
    },
    {
      title: 'Risk Management',
      description: 'Advanced risk assessment with quantum-enhanced Monte Carlo simulations',
      metrics: ['99.9% accuracy', 'Real-time updates', 'Multi-factor analysis']
    },
    {
      title: 'Trading Performance',
      description: 'Superior trading performance with quantum-optimized strategies',
      metrics: ['300% better returns', '50% lower risk', '95% win rate']
    },
    {
      title: 'Market Coverage',
      description: 'Global market coverage with real-time data from 100+ exchanges',
      metrics: ['100+ exchanges', 'Real-time data', 'Global coverage']
    }
  ];

  const testimonials = [
    {
      name: 'Dr. Sarah Chen',
      role: 'Chief Investment Officer',
      company: 'Quantum Capital Partners',
      content: 'The quantum financial oracle has revolutionized our trading strategies. We\'ve seen a 300% improvement in returns while reducing risk by 50%.',
      rating: 5
    },
    {
      name: 'Michael Rodriguez',
      role: 'Portfolio Manager',
      company: 'Neo Investment Group',
      content: 'The accuracy of market predictions is incredible. We\'ve been able to capitalize on market movements that others miss completely.',
      rating: 5
    },
    {
      name: 'Dr. James Wilson',
      role: 'Head of Risk Management',
      company: 'Global Financial Corp',
      content: 'The quantum risk modeling capabilities are unmatched. We can now assess risks in real-time with unprecedented accuracy.',
      rating: 5
    }
  ];

  if (!isLoaded) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-white"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 matrix-bg">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 via-purple-500/20 to-pink-500/20 animate-pulse"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16 relative z-10">
          <div className="text-center">
            <div className="flex items-center justify-center mb-6">
              <div className="w-16 h-16 bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 rounded-lg flex items-center justify-center mr-4 rotate-slow">
                <Brain className="w-8 h-8 text-white" />
              </div>
              <h1 className="text-4xl md:text-6xl font-bold text-white cyber-text neon-pulse">
                AI Quantum Financial Oracle
              </h1>
            </div>
            <p className="text-xl text-gray-300 mb-8 max-w-4xl mx-auto neon-glow-cyan">
              Revolutionary quantum-powered financial analysis with ultra-fast market predictions, 
              risk assessment, and portfolio optimization. Experience the future of finance.
            </p>
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <div className="holographic px-6 py-3 rounded-lg">
                <span className="text-cyan-400 font-semibold">Quantum Computing</span>
              </div>
              <div className="holographic px-6 py-3 rounded-lg">
                <span className="text-purple-400 font-semibold">99.9% Accuracy</span>
              </div>
              <div className="holographic px-6 py-3 rounded-lg">
                <span className="text-pink-400 font-semibold">1000x Faster</span>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://ziontechgroup.com/contact"
                className="neon-button hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/25 inline-flex items-center"
              >
                Start Free Trial
                <ArrowRight className="w-4 h-4 ml-2" />
              </a>
              <a
                href="tel:+13024640950"
                className="border-2 border-cyan-400 text-cyan-400 px-8 py-3 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
              >
                Call: +1 (302) 464-0950
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 neon-glow-cyan">
            Quantum-Powered Financial Intelligence
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Harness the power of quantum computing for unprecedented financial analysis and trading performance
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="futuristic-card hover-lift p-8">
              <div className="flex items-center mb-4">
                <div className="p-3 rounded-lg bg-gradient-to-r from-cyan-500 to-purple-600 text-white mr-4">
                  <feature.icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-white">{feature.title}</h3>
              </div>
              <p className="text-gray-300 mb-4">{feature.description}</p>
              <ul className="space-y-2">
                {feature.benefits.map((benefit, benefitIndex) => (
                  <li key={benefitIndex} className="flex items-center text-cyan-300 text-sm">
                    <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                    {benefit}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Capabilities Section */}
      <div className="bg-slate-800/50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Proven Capabilities
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Real results from our quantum financial oracle platform
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {capabilities.map((capability, index) => (
              <div key={index} className="text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <BarChart className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{capability.title}</h3>
                <p className="text-gray-300 mb-4">{capability.description}</p>
                <div className="space-y-1">
                  {capability.metrics.map((metric, metricIndex) => (
                    <div key={metricIndex} className="text-cyan-400 font-semibold text-sm">
                      {metric}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Pricing Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Quantum Pricing Plans
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Choose the quantum computing power that matches your financial needs
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pricingTiers.map((tier, index) => (
            <div key={index} className={`futuristic-card hover-lift p-8 relative ${
              tier.popular ? 'ring-2 ring-purple-500 neon-glow-purple' : ''
            }`}>
              {tier.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-bold">
                    Most Popular
                  </span>
                </div>
              )}
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-white mb-2">{tier.name}</h3>
                <div className="text-4xl font-bold text-cyan-400 mb-2">
                  {tier.price}
                  <span className="text-lg text-gray-400">{tier.period}</span>
                </div>
                <p className="text-gray-300">{tier.description}</p>
              </div>
              <ul className="space-y-3 mb-8">
                {tier.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-gray-300">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>
              <a
                href="https://ziontechgroup.com/contact"
                className="w-full bg-gradient-to-r from-cyan-500 to-purple-600 text-white py-3 px-6 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center"
              >
                Get Started
                <ArrowRight className="w-4 h-4 ml-2" />
              </a>
            </div>
          ))}
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="bg-slate-800/50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              What Our Clients Say
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Hear from financial professionals who have transformed their operations with quantum computing
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="futuristic-card p-6">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-300 mb-4 italic">"{testimonial.content}"</p>
                <div>
                  <div className="font-semibold text-white">{testimonial.name}</div>
                  <div className="text-cyan-400 text-sm">{testimonial.role}</div>
                  <div className="text-gray-400 text-sm">{testimonial.company}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-cyan-600 to-purple-700 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Experience Quantum Finance?
          </h2>
          <p className="text-xl text-gray-200 mb-8 max-w-3xl mx-auto">
            Join the quantum revolution in finance. Start your free trial today and see the difference quantum computing makes.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <a
              href="https://ziontechgroup.com/contact"
              className="bg-white text-cyan-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-colors inline-flex items-center"
            >
              Start Free Trial
              <ArrowRight className="w-5 h-5 ml-2" />
            </a>
            <a
              href="tel:+13024640950"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white hover:text-cyan-600 transition-colors inline-flex items-center"
            >
              Call: +1 (302) 464-0950
            </a>
          </div>
          <div className="text-gray-200 text-sm">
            <p>📧 kleber@ziontechgroup.com | 📍 364 E Main St STE 1008, Middletown, DE 19709</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AIQuantumFinancialOraclePage;
