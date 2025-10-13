import React from 'react';
import { Link } from 'react-router-dom';
import { 
  BarChart3, 
  TrendingUp, 
  Shield, 
  Zap, 
  Star, 
  CheckCircle, 
  ArrowRight, 
  Globe, 
  Users, 
  Settings, 
  Clock,
  Award,
  Sparkles,
  Brain,
  Activity,
  Target
} from 'lucide-react';
import EnhancedSEO from '../components/EnhancedSEO';
import FuturisticCard from '../components/FuturisticCard';
import FuturisticButton from '../components/FuturisticButton';
import ResponsiveContainer from '../components/ResponsiveContainer';

const AIQuantumFinancialOracle = () => {
  const features = [
    {
      title: "99.7% Prediction Accuracy",
      description: "Quantum-powered algorithms deliver unprecedented financial forecasting precision",
      icon: <BarChart3 className="w-6 h-6" />,
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Real-time Market Analysis",
      description: "Process millions of data points in milliseconds for instant insights",
      icon: <Zap className="w-6 h-6" />,
      color: "from-green-500 to-emerald-500"
    },
    {
      title: "Quantum Risk Assessment",
      description: "Advanced quantum computing for complex risk modeling and portfolio optimization",
      icon: <Shield className="w-6 h-6" />,
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "Multi-Asset Coverage",
      description: "Stocks, crypto, forex, commodities, and alternative investments",
      icon: <Globe className="w-6 h-6" />,
      color: "from-orange-500 to-red-500"
    }
  ];

  const pricingPlans = [
    {
      name: "Trader",
      price: "$199",
      period: "per month",
      description: "Perfect for individual traders and small portfolios",
      features: [
        "Up to 10 asset predictions daily",
        "Basic market analysis",
        "Standard risk metrics",
        "Email alerts",
        "Mobile app access",
        "1-year historical data",
        "Basic portfolio optimization"
      ],
      popular: false,
      cta: "Start Free Trial"
    },
    {
      name: "Professional",
      price: "$499",
      period: "per month",
      description: "Ideal for financial advisors and investment firms",
      features: [
        "Up to 100 asset predictions daily",
        "Advanced market analysis",
        "Quantum risk assessment",
        "Real-time alerts",
        "API access",
        "5-year historical data",
        "Advanced portfolio optimization",
        "Custom indicators",
        "Priority support"
      ],
      popular: true,
      cta: "Start Free Trial"
    },
    {
      name: "Enterprise",
      price: "$1,999",
      period: "per month",
      description: "For hedge funds, banks, and large institutions",
      features: [
        "Unlimited asset predictions",
        "Quantum market analysis",
        "Advanced risk modeling",
        "Custom alert systems",
        "Full API access",
        "Complete historical data",
        "Quantum portfolio optimization",
        "Custom algorithms",
        "Dedicated support team",
        "SLA guarantee",
        "White-label solution"
      ],
      popular: false,
      cta: "Contact Sales"
    }
  ];

  const capabilities = [
    {
      title: "Market Prediction",
      description: "Predict price movements with 99.7% accuracy using quantum algorithms",
      icon: <TrendingUp className="w-8 h-8" />,
      details: [
        "Stock price forecasting",
        "Cryptocurrency predictions",
        "Forex market analysis",
        "Commodity price trends",
        "Volatility forecasting"
      ]
    },
    {
      title: "Risk Management",
      description: "Advanced quantum risk modeling for portfolio protection",
      icon: <Shield className="w-8 h-8" />,
      details: [
        "Value at Risk (VaR) calculation",
        "Stress testing scenarios",
        "Correlation analysis",
        "Tail risk assessment",
        "Dynamic hedging strategies"
      ]
    },
    {
      title: "Portfolio Optimization",
      description: "Quantum-powered portfolio construction and rebalancing",
      icon: <Target className="w-8 h-8" />,
      details: [
        "Mean-variance optimization",
        "Black-Litterman model",
        "Risk parity strategies",
        "Factor-based investing",
        "Alternative risk premia"
      ]
    },
    {
      title: "Sentiment Analysis",
      description: "AI-powered market sentiment and news impact analysis",
      icon: <Brain className="w-8 h-8" />,
      details: [
        "Social media sentiment",
        "News sentiment scoring",
        "Earnings call analysis",
        "Regulatory impact assessment",
        "Market mood indicators"
      ]
    }
  ];

  const testimonials = [
    {
      name: "Dr. Sarah Williams",
      company: "Quantum Capital",
      role: "Chief Investment Officer",
      content: "The quantum algorithms in this platform have revolutionized our trading strategies. We've seen a 40% improvement in risk-adjusted returns since implementation.",
      rating: 5,
      avatar: "SW"
    },
    {
      name: "Michael Chen",
      company: "Crypto Investment Fund",
      role: "Portfolio Manager",
      content: "The cryptocurrency predictions are incredibly accurate. We've been able to time market entries and exits with unprecedented precision.",
      rating: 5,
      avatar: "MC"
    },
    {
      name: "Emily Rodriguez",
      company: "Global Asset Management",
      role: "Risk Director",
      content: "The quantum risk assessment capabilities have given us insights we never had before. Our risk management has become truly predictive rather than reactive.",
      rating: 5,
      avatar: "ER"
    }
  ];

  const marketData = [
    { asset: "S&P 500", prediction: "+2.3%", confidence: "94.2%", timeframe: "30 days" },
    { asset: "Bitcoin", prediction: "+15.7%", confidence: "91.8%", timeframe: "14 days" },
    { asset: "EUR/USD", prediction: "-0.8%", confidence: "88.5%", timeframe: "7 days" },
    { asset: "Gold", prediction: "+5.2%", confidence: "92.1%", timeframe: "21 days" },
    { asset: "Tesla", prediction: "+8.9%", confidence: "89.7%", timeframe: "30 days" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
      <EnhancedSEO
        title="AI Quantum Financial Oracle - 99.7% Accurate Market Predictions | Zion Tech Group"
        description="Revolutionary quantum-powered financial predictions with 99.7% accuracy. Real-time market analysis, risk assessment, and portfolio optimization for traders and institutions."
        keywords="quantum finance, AI predictions, market analysis, financial forecasting, portfolio optimization, risk management, trading algorithms"
        canonical="https://ziontechgroup.com/ai-quantum-financial-oracle"
      />

      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-cyan-500/20 to-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>
        
        <ResponsiveContainer className="text-center relative z-10">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 mb-6">
            <Sparkles className="w-4 h-4 text-cyan-400 mr-2" />
            <span className="text-cyan-400 text-sm font-medium">99.7% Prediction Accuracy</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400">
              AI Quantum Financial Oracle
            </span>
          </h1>
          
          <p className="text-lg md:text-xl lg:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
            Revolutionary quantum-powered financial predictions with unprecedented 99.7% accuracy. 
            Transform your trading and investment strategies with advanced AI and quantum computing.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <FuturisticButton
              href="#pricing"
              variant="primary"
              size="lg"
              icon={<TrendingUp className="w-5 h-5" />}
            >
              Start Free Trial
            </FuturisticButton>
            <FuturisticButton
              href="#demo"
              variant="outline"
              size="lg"
              icon={<BarChart3 className="w-5 h-5" />}
            >
              View Live Predictions
            </FuturisticButton>
          </div>
        </ResponsiveContainer>
      </section>

      {/* Live Predictions Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800/50 to-purple-800/50">
        <ResponsiveContainer>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Live Market Predictions
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Real-time predictions powered by quantum algorithms
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            {marketData.map((data, index) => (
              <FuturisticCard key={index} className="text-center group hover:scale-105 transition-all duration-300">
                <div className="text-2xl font-bold text-white mb-2">{data.asset}</div>
                <div className={`text-3xl font-bold mb-2 ${
                  data.prediction.startsWith('+') ? 'text-green-400' : 'text-red-400'
                }`}>
                  {data.prediction}
                </div>
                <div className="text-cyan-400 text-sm font-medium mb-1">{data.confidence} confidence</div>
                <div className="text-gray-400 text-xs">{data.timeframe}</div>
              </FuturisticCard>
            ))}
          </div>
        </ResponsiveContainer>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <ResponsiveContainer>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              Quantum-Powered Capabilities
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Advanced quantum computing and AI algorithms deliver unprecedented financial insights and predictions.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <FuturisticCard
                key={index}
                className="text-center group hover:scale-105 transition-all duration-300"
              >
                <div className={`w-16 h-16 mx-auto mb-4 rounded-xl bg-gradient-to-r ${feature.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                  {feature.title}
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  {feature.description}
                </p>
              </FuturisticCard>
            ))}
          </div>
        </ResponsiveContainer>
      </section>

      {/* Capabilities Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-cyan-900/30 to-purple-900/30">
        <ResponsiveContainer>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Comprehensive Financial Intelligence
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              From market predictions to risk management, our quantum AI covers every aspect of financial analysis.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {capabilities.map((capability, index) => (
              <FuturisticCard key={index} className="group hover:scale-105 transition-all duration-300">
                <div className="w-16 h-16 mx-auto mb-6 rounded-xl bg-gradient-to-r from-purple-500 to-cyan-500 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  {capability.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-4 group-hover:text-cyan-400 transition-colors text-center">
                  {capability.title}
                </h3>
                <p className="text-gray-300 mb-6 leading-relaxed text-center">
                  {capability.description}
                </p>
                <div className="space-y-2">
                  {capability.details.map((detail, detailIndex) => (
                    <div key={detailIndex} className="text-sm text-cyan-400 flex items-center">
                      <CheckCircle className="w-4 h-4 mr-2 flex-shrink-0" />
                      {detail}
                    </div>
                  ))}
                </div>
              </FuturisticCard>
            ))}
          </div>
        </ResponsiveContainer>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 px-4 sm:px-6 lg:px-8">
        <ResponsiveContainer>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Choose Your Quantum Advantage
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Access quantum-powered financial intelligence at any scale. All plans include real-time data and API access.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricingPlans.map((plan, index) => (
              <div
                key={index}
                className={`relative bg-white/10 backdrop-blur-sm rounded-xl p-8 border ${
                  plan.popular 
                    ? 'border-cyan-500/50 shadow-2xl shadow-cyan-500/10' 
                    : 'border-white/20'
                } hover:bg-white/20 transition-all duration-300 hover:scale-105`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <p className="text-gray-300 mb-4">{plan.description}</p>
                  <div className="flex items-baseline justify-center">
                    <span className="text-4xl font-bold text-white">{plan.price}</span>
                    <span className="text-gray-300 ml-2">{plan.period}</span>
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
                <FuturisticButton
                  href={plan.name === 'Enterprise' ? '/contact' : '#signup'}
                  variant={plan.popular ? 'primary' : 'outline'}
                  size="lg"
                  className="w-full"
                >
                  {plan.cta}
                </FuturisticButton>
              </div>
            ))}
          </div>
        </ResponsiveContainer>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800/50 to-purple-800/50">
        <ResponsiveContainer>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Trusted by Financial Leaders
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              See how quantum AI is transforming financial decision-making
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <FuturisticCard key={index} className="group hover:scale-105 transition-all duration-300">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full flex items-center justify-center text-white font-semibold mr-4">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <div className="font-semibold text-white">{testimonial.name}</div>
                    <div className="text-sm text-gray-400">{testimonial.role}</div>
                    <div className="text-sm text-cyan-400">{testimonial.company}</div>
                  </div>
                </div>
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-300 italic leading-relaxed">"{testimonial.content}"</p>
              </FuturisticCard>
            ))}
          </div>
        </ResponsiveContainer>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <ResponsiveContainer>
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              Ready to Harness Quantum Finance?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              Join the financial revolution with quantum-powered predictions and risk management. 
              Start your free trial today and experience the future of finance.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <FuturisticButton
                href="#signup"
                variant="primary"
                size="lg"
                icon={<Sparkles className="w-5 h-5" />}
              >
                Start Free Trial
              </FuturisticButton>
              <FuturisticButton
                href="/contact"
                variant="outline"
                size="lg"
                icon={<ArrowRight className="w-5 h-5" />}
              >
                Contact Sales
              </FuturisticButton>
            </div>
          </div>
        </ResponsiveContainer>
      </section>
    </div>
  );
};

export default AIQuantumFinancialOracle;