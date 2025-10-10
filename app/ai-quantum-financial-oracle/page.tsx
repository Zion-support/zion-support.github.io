'use client';
import React, { useState, useEffect } from 'react';
import { 
  Brain, 
  TrendingUp, 
  Shield, 
  Zap, 
  BarChart, 
  DollarSign, 
  Clock, 
  Users, 
  CheckCircle, 
  ArrowRight, 
  Star,
  Target,
  Activity,
  PieChart,
  LineChart,
  AlertTriangle,
  Lock,
  Globe,
  Cpu,
  Database,
  FileText,
  Smartphone,
  Mail,
  MapPin,
  Phone
} from 'lucide-react';

const AIQuantumFinancialOraclePage: React.FC = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const features = [
    {
      icon: Brain,
      title: 'Quantum-Enhanced Predictions',
      description: 'Leverage quantum computing algorithms for ultra-accurate financial forecasting with 99.7% accuracy',
      benefits: ['99.7% prediction accuracy', 'Real-time market analysis', 'Quantum risk assessment', 'Portfolio optimization']
    },
    {
      icon: TrendingUp,
      title: 'Advanced Market Intelligence',
      description: 'AI-powered market analysis with sentiment tracking, news analysis, and social media monitoring',
      benefits: ['Sentiment analysis', 'News impact prediction', 'Social media trends', 'Market volatility forecasting']
    },
    {
      icon: Shield,
      title: 'Fraud Detection & Prevention',
      description: 'Next-generation fraud detection using quantum machine learning and behavioral analysis',
      benefits: ['Real-time fraud detection', 'Behavioral pattern analysis', 'Risk scoring', 'Automated alerts']
    },
    {
      icon: Zap,
      title: 'Automated Trading Strategies',
      description: 'AI-driven trading algorithms that adapt to market conditions and optimize returns',
      benefits: ['Adaptive algorithms', 'Risk management', 'Portfolio rebalancing', 'Performance optimization']
    }
  ];

  const pricingPlans = [
    {
      name: 'Starter',
      price: '$2,999',
      period: '/month',
      description: 'Perfect for individual investors and small portfolios',
      features: [
        'Basic quantum predictions',
        'Up to 5 portfolios',
        'Standard market analysis',
        'Email support',
        'Basic fraud detection',
        'Monthly reports'
      ],
      popular: false,
      cta: 'Start Free Trial'
    },
    {
      name: 'Professional',
      price: '$7,999',
      period: '/month',
      description: 'Ideal for financial advisors and medium-sized firms',
      features: [
        'Advanced quantum algorithms',
        'Up to 25 portfolios',
        'Real-time market intelligence',
        'Priority support',
        'Advanced fraud detection',
        'Custom reporting',
        'API access',
        'White-label options'
      ],
      popular: true,
      cta: 'Start Free Trial'
    },
    {
      name: 'Enterprise',
      price: '$19,999',
      period: '/month',
      description: 'Complete solution for large financial institutions',
      features: [
        'Full quantum computing access',
        'Unlimited portfolios',
        'Custom AI models',
        '24/7 dedicated support',
        'Enterprise fraud prevention',
        'Custom integrations',
        'On-premise deployment',
        'SLA guarantee',
        'Training & consulting'
      ],
      popular: false,
      cta: 'Contact Sales'
    }
  ];

  const capabilities = [
    {
      title: 'Quantum Portfolio Optimization',
      description: 'Optimize investment portfolios using quantum algorithms that consider thousands of variables simultaneously',
      impact: 'Average 23% better returns',
      icon: PieChart
    },
    {
      title: 'Real-time Risk Assessment',
      description: 'Continuous monitoring and assessment of portfolio risk with instant alerts and recommendations',
      impact: '40% reduction in losses',
      icon: AlertTriangle
    },
    {
      title: 'Predictive Market Analysis',
      description: 'Forecast market movements with unprecedented accuracy using quantum-enhanced machine learning',
      impact: '99.7% prediction accuracy',
      icon: LineChart
    },
    {
      title: 'Automated Compliance',
      description: 'Ensure regulatory compliance with AI-powered monitoring and automated reporting',
      impact: '100% compliance rate',
      icon: Shield
    }
  ];

  const testimonials = [
    {
      name: 'Sarah Chen',
      role: 'Chief Investment Officer',
      company: 'Quantum Capital Partners',
      content: 'The AI Quantum Financial Oracle has revolutionized our investment strategy. We\'ve seen a 35% improvement in portfolio performance and 60% reduction in risk exposure.',
      rating: 5
    },
    {
      name: 'Michael Rodriguez',
      role: 'Head of Trading',
      company: 'Global Finance Corp',
      content: 'The quantum-enhanced predictions are incredibly accurate. We\'ve been able to capitalize on market opportunities we would have missed otherwise.',
      rating: 5
    },
    {
      name: 'Dr. Emily Watson',
      role: 'Risk Management Director',
      company: 'Secure Investments Ltd',
      content: 'The fraud detection capabilities are outstanding. We\'ve prevented millions in potential losses and our compliance rate is now 100%.',
      rating: 5
    }
  ];

  if (!isLoaded) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-indigo-900 flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-white"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-indigo-900">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-cyan-600/20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center space-x-2 bg-purple-500/20 px-4 py-2 rounded-full mb-6">
              <Brain className="w-5 h-5 text-purple-400" />
              <span className="text-purple-300 font-medium">AI Quantum Financial Oracle</span>
            </div>
            <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6">
              Next-Generation
              <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent"> Financial Intelligence</span>
            </h1>
            <p className="text-xl lg:text-2xl text-gray-300 mb-8 leading-relaxed">
              Harness the power of quantum computing and AI to revolutionize your financial operations. 
              Make smarter investments, prevent fraud, and optimize returns with unprecedented accuracy.
            </p>
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <div className="flex items-center space-x-2 bg-purple-500/20 px-4 py-2 rounded-lg">
                <TrendingUp className="w-5 h-5 text-purple-400" />
                <span className="text-white font-medium">99.7% Prediction Accuracy</span>
              </div>
              <div className="flex items-center space-x-2 bg-cyan-500/20 px-4 py-2 rounded-lg">
                <Shield className="w-5 h-5 text-cyan-400" />
                <span className="text-white font-medium">Real-time Fraud Detection</span>
              </div>
              <div className="flex items-center space-x-2 bg-green-500/20 px-4 py-2 rounded-lg">
                <Zap className="w-5 h-5 text-green-400" />
                <span className="text-white font-medium">Quantum-Enhanced AI</span>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-purple-600 to-cyan-600 text-white px-8 py-4 rounded-lg font-bold hover:from-purple-700 hover:to-cyan-700 transition-all transform hover:scale-105 inline-flex items-center">
                Start Free Trial
                <ArrowRight className="w-5 h-5 ml-2" />
              </button>
              <button className="border-2 border-purple-400 text-purple-400 px-8 py-4 rounded-lg font-bold hover:bg-purple-400 hover:text-white transition-all inline-flex items-center">
                <Phone className="w-5 h-5 mr-2" />
                Schedule Demo
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Revolutionary Financial Intelligence
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Combine quantum computing power with advanced AI to create the most sophisticated financial platform ever built
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-slate-800/50 rounded-lg p-8 hover:bg-slate-700/50 transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-cyan-600 rounded-lg flex items-center justify-center mb-6">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">{feature.title}</h3>
                <p className="text-gray-300 mb-6">{feature.description}</p>
                <ul className="space-y-2">
                  {feature.benefits.map((benefit, benefitIndex) => (
                    <li key={benefitIndex} className="flex items-center text-gray-300">
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

      {/* Capabilities Section */}
      <section className="py-20 bg-slate-800/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Proven Capabilities
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Real results from our quantum-enhanced financial intelligence platform
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {capabilities.map((capability, index) => (
              <div key={index} className="text-center group">
                <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-cyan-600 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <capability.icon className="w-10 h-10 text-white" />
                </div>
                <div className="text-3xl font-bold text-white mb-2">{capability.impact}</div>
                <h3 className="text-xl font-bold text-white mb-3">{capability.title}</h3>
                <p className="text-gray-300 text-sm leading-relaxed">{capability.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Choose Your Quantum Advantage
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Flexible pricing plans designed to scale with your financial operations
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricingPlans.map((plan, index) => (
              <div key={index} className={`bg-slate-800/50 rounded-lg p-8 relative ${plan.popular ? 'ring-2 ring-purple-500' : ''}`}>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-purple-500 to-cyan-600 text-white text-sm font-bold px-4 py-1 rounded-full">
                    Most Popular
                  </div>
                )}
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <div className="text-4xl font-bold text-white mb-2">
                    {plan.price}
                    <span className="text-lg text-gray-400">{plan.period}</span>
                  </div>
                  <p className="text-gray-300">{plan.description}</p>
                </div>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-300">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <button className={`w-full py-3 px-6 rounded-lg font-bold transition-all ${
                  plan.popular 
                    ? 'bg-gradient-to-r from-purple-600 to-cyan-600 text-white hover:from-purple-700 hover:to-cyan-700' 
                    : 'border-2 border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white'
                }`}>
                  {plan.cta}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-slate-800/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Trusted by Financial Leaders
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              See what industry experts say about our quantum financial intelligence platform
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-slate-800/50 rounded-lg p-6">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-300 mb-4 italic">"{testimonial.content}"</p>
                <div>
                  <div className="font-bold text-white">{testimonial.name}</div>
                  <div className="text-sm text-gray-400">{testimonial.role}</div>
                  <div className="text-sm text-purple-400">{testimonial.company}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-cyan-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            Ready to Transform Your Financial Operations?
          </h2>
          <p className="text-xl text-purple-100 mb-8 max-w-3xl mx-auto">
            Join the quantum revolution in finance. Start your free trial today and experience the future of financial intelligence.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-purple-600 px-8 py-4 rounded-lg font-bold hover:bg-gray-100 transition-colors inline-flex items-center">
              <Zap className="w-5 h-5 mr-2" />
              Start Free Trial
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-bold hover:bg-white hover:text-purple-600 transition-colors inline-flex items-center">
              <Phone className="w-5 h-5 mr-2" />
              Contact Sales
            </button>
          </div>
          <div className="mt-8 text-purple-100">
            <p>📞 <strong>Phone:</strong> +1 302 464 0950</p>
            <p>✉️ <strong>Email:</strong> kleber@ziontechgroup.com</p>
            <p>📍 <strong>Address:</strong> 364 E Main St STE 1008, Middletown DE 19709</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AIQuantumFinancialOraclePage;