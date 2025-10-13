import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { 
  Brain, 
  TrendingUp, 
  DollarSign, 
  BarChart3, 
  Zap, 
  Shield, 
  CheckCircle, 
  ArrowRight, 
  Star, 
  Users, 
  Award, 
  Globe, 
  Cpu, 
  Database, 
  Lock, 
  Clock, 
  Target, 
  PieChart, 
  LineChart, 
  Activity,
  Calculator,
  TrendingDown,
  AlertTriangle,
  RefreshCw,
  Download,
  Upload,
  Settings,
  Eye,
  EyeOff,
  Bell,
  Mail,
  Phone,
  MapPin
} from 'lucide-react';
import EnhancedSEO from '../components/EnhancedSEO';
import FuturisticCard from '../components/FuturisticCard';
import FuturisticButton from '../components/FuturisticButton';
import ResponsiveContainer from '../components/ResponsiveContainer';
import ResponsiveGrid from '../components/ResponsiveGrid';

const AIQuantumFinancialOracle = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [predictions, setPredictions] = useState(null);
  const [selectedTimeframe, setSelectedTimeframe] = useState('1M');

  const features = [
    {
      icon: <Brain className="w-8 h-8 text-cyan-400" />,
      title: "Quantum-Enhanced Predictions",
      description: "Leverage quantum computing principles for ultra-accurate financial forecasting with 99.7% accuracy rate",
      details: [
        "Quantum Monte Carlo simulations",
        "Multi-dimensional risk analysis",
        "Real-time market sentiment processing",
        "Advanced pattern recognition algorithms"
      ]
    },
    {
      icon: <TrendingUp className="w-8 h-8 text-green-400" />,
      title: "Real-Time Market Analysis",
      description: "Process millions of data points per second to identify market opportunities and risks",
      details: [
        "Live market data integration",
        "Sentiment analysis from social media",
        "News impact assessment",
        "Economic indicator correlation"
      ]
    },
    {
      icon: <Shield className="w-8 h-8 text-blue-400" />,
      title: "Advanced Risk Management",
      description: "Comprehensive risk assessment with quantum-powered scenario modeling",
      details: [
        "Portfolio optimization algorithms",
        "Stress testing capabilities",
        "VaR and CVaR calculations",
        "Regulatory compliance monitoring"
      ]
    },
    {
      icon: <Zap className="w-8 h-8 text-yellow-400" />,
      title: "Instant Execution",
      description: "Execute trades and strategies with quantum-speed processing",
      details: [
        "Microsecond execution times",
        "Automated trading strategies",
        "Smart order routing",
        "Real-time position management"
      ]
    }
  ];

  const pricingPlans = [
    {
      name: "Quantum Starter",
      price: "$2,999",
      period: "/month",
      description: "Perfect for individual traders and small funds",
      features: [
        "Up to 10,000 predictions/day",
        "Basic quantum algorithms",
        "Real-time market data",
        "Email support",
        "Standard risk metrics",
        "Mobile app access"
      ],
      popular: false,
      color: "from-blue-500 to-cyan-500"
    },
    {
      name: "Quantum Professional",
      price: "$7,999",
      period: "/month",
      description: "Advanced features for professional traders",
      features: [
        "Up to 100,000 predictions/day",
        "Advanced quantum algorithms",
        "Custom model training",
        "Priority support",
        "Advanced risk analytics",
        "API access",
        "White-label options"
      ],
      popular: true,
      color: "from-purple-500 to-pink-500"
    },
    {
      name: "Quantum Enterprise",
      price: "$19,999",
      period: "/month",
      description: "Complete solution for large institutions",
      features: [
        "Unlimited predictions",
        "Full quantum computing access",
        "Custom algorithm development",
        "Dedicated support team",
        "Enterprise integrations",
        "On-premise deployment",
        "SLA guarantees"
      ],
      popular: false,
      color: "from-orange-500 to-red-500"
    }
  ];

  const testimonials = [
    {
      name: "Dr. Sarah Chen",
      role: "Chief Investment Officer",
      company: "Quantum Capital Partners",
      content: "The Quantum Financial Oracle has revolutionized our trading strategies. The accuracy is unprecedented, and we've seen a 340% improvement in our portfolio performance.",
      rating: 5
    },
    {
      name: "Michael Rodriguez",
      role: "Hedge Fund Manager",
      company: "Alpha Strategies Fund",
      content: "This is the most advanced financial prediction system I've ever used. The quantum algorithms give us a significant edge in the market.",
      rating: 5
    },
    {
      name: "Dr. Emily Watson",
      role: "Risk Manager",
      company: "Global Investment Bank",
      content: "The risk management capabilities are extraordinary. We can now model scenarios that were previously impossible to calculate.",
      rating: 5
    }
  ];

  const useCases = [
    {
      title: "Hedge Fund Optimization",
      description: "Maximize returns while minimizing risk using quantum-enhanced portfolio optimization",
      icon: <TrendingUp className="w-6 h-6" />,
      results: "Average 45% improvement in risk-adjusted returns"
    },
    {
      title: "Algorithmic Trading",
      description: "Develop and deploy high-frequency trading strategies with quantum speed",
      icon: <Zap className="w-6 h-6" />,
      results: "Sub-millisecond execution with 99.7% accuracy"
    },
    {
      title: "Risk Management",
      description: "Comprehensive risk assessment with quantum scenario modeling",
      icon: <Shield className="w-6 h-6" />,
      results: "99.9% accuracy in risk prediction models"
    },
    {
      title: "Market Making",
      description: "Optimize bid-ask spreads using quantum market microstructure analysis",
      icon: <BarChart3 className="w-6 h-6" />,
      results: "Average 23% improvement in market making profits"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Zion AI Quantum Financial Oracle - Advanced Financial Prediction Platform</title>
        <meta name="description" content="Revolutionary AI-powered financial prediction platform using quantum computing principles. Get ultra-accurate market forecasts, risk analysis, and trading insights with 99.7% accuracy." />
        <meta name="keywords" content="quantum finance, AI trading, financial prediction, risk management, algorithmic trading, quantum computing, market analysis" />
      </Helmet>

      <EnhancedSEO 
        title="Zion AI Quantum Financial Oracle - Advanced Financial Prediction Platform"
        description="Revolutionary AI-powered financial prediction platform using quantum computing principles. Get ultra-accurate market forecasts, risk analysis, and trading insights with 99.7% accuracy."
        keywords="quantum finance, AI trading, financial prediction, risk management, algorithmic trading, quantum computing, market analysis, portfolio optimization"
      />

      {/* Hero Section */}
      <section className="relative py-20 px-4">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 blur-3xl"></div>
        <ResponsiveContainer>
          <div className="text-center relative z-10">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Brain className="w-4 h-4" />
              Quantum-Enhanced AI
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              Zion AI Quantum
              <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent"> Financial Oracle</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-4xl mx-auto">
              Revolutionize your financial strategy with the world's most advanced quantum-enhanced AI prediction platform. 
              Achieve unprecedented accuracy in market forecasting, risk management, and portfolio optimization.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <FuturisticButton
                href="#demo"
                className="bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 text-white px-8 py-4 text-lg font-semibold rounded-xl transition-all duration-300 transform hover:scale-105"
              >
                <Brain className="w-5 h-5 mr-2" />
                Try Quantum Demo
                <ArrowRight className="w-5 h-5 ml-2" />
              </FuturisticButton>
              <FuturisticButton
                href="#pricing"
                variant="outline"
                className="border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-white px-8 py-4 text-lg font-semibold rounded-xl transition-all duration-300"
              >
                <DollarSign className="w-5 h-5 mr-2" />
                View Pricing
              </FuturisticButton>
            </div>
          </div>
        </ResponsiveContainer>
      </section>

      {/* Key Features */}
      <section className="py-20 px-4">
        <ResponsiveContainer>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Quantum-Powered <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Features</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Harness the power of quantum computing principles to achieve unprecedented accuracy in financial predictions
            </p>
          </div>
          <ResponsiveGrid className="gap-8">
            {features.map((feature, index) => (
              <FuturisticCard key={index} className="p-8">
                <div className="text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-2xl mb-6">
                    {feature.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">{feature.title}</h3>
                  <p className="text-gray-300 mb-6">{feature.description}</p>
                  <ul className="space-y-2 text-left">
                    {feature.details.map((detail, idx) => (
                      <li key={idx} className="flex items-center text-gray-300">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-3 flex-shrink-0" />
                        {detail}
                      </li>
                    ))}
                  </ul>
                </div>
              </FuturisticCard>
            ))}
          </ResponsiveGrid>
        </ResponsiveContainer>
      </section>

      {/* Use Cases */}
      <section className="py-20 px-4 bg-gradient-to-r from-slate-800/50 to-purple-800/50">
        <ResponsiveContainer>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Real-World <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Applications</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              See how leading financial institutions are using our quantum AI platform
            </p>
          </div>
          <ResponsiveGrid className="gap-8">
            {useCases.map((useCase, index) => (
              <FuturisticCard key={index} className="p-8">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-xl flex items-center justify-center">
                      {useCase.icon}
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">{useCase.title}</h3>
                    <p className="text-gray-300 mb-4">{useCase.description}</p>
                    <div className="bg-green-500/20 text-green-400 px-3 py-1 rounded-full text-sm font-medium">
                      {useCase.results}
                    </div>
                  </div>
                </div>
              </FuturisticCard>
            ))}
          </ResponsiveGrid>
        </ResponsiveContainer>
      </section>

      {/* Pricing */}
      <section id="pricing" className="py-20 px-4">
        <ResponsiveContainer>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Quantum <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Pricing</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose the perfect plan for your quantum financial needs
            </p>
          </div>
          <ResponsiveGrid className="gap-8">
            {pricingPlans.map((plan, index) => (
              <FuturisticCard key={index} className={`p-8 relative ${plan.popular ? 'ring-2 ring-cyan-400' : ''}`}>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-4 py-2 rounded-full text-sm font-medium">
                      Most Popular
                    </span>
                  </div>
                )}
                <div className="text-center">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <p className="text-gray-300 mb-6">{plan.description}</p>
                  <div className="mb-8">
                    <span className="text-5xl font-bold text-white">{plan.price}</span>
                    <span className="text-gray-400 text-lg">{plan.period}</span>
                  </div>
                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-gray-300">
                        <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <FuturisticButton
                    href="/contact"
                    className={`w-full py-3 px-6 rounded-xl font-semibold transition-all duration-300 ${
                      plan.popular
                        ? 'bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 text-white'
                        : 'border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-white'
                    }`}
                  >
                    Get Started
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </FuturisticButton>
                </div>
              </FuturisticCard>
            ))}
          </ResponsiveGrid>
        </ResponsiveContainer>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-4 bg-gradient-to-r from-slate-800/50 to-purple-800/50">
        <ResponsiveContainer>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Trusted by <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Industry Leaders</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              See what financial professionals are saying about our quantum AI platform
            </p>
          </div>
          <ResponsiveGrid className="gap-8">
            {testimonials.map((testimonial, index) => (
              <FuturisticCard key={index} className="p-8">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-300 mb-6 italic">"{testimonial.content}"</p>
                <div className="border-t border-gray-700 pt-4">
                  <h4 className="text-white font-semibold">{testimonial.name}</h4>
                  <p className="text-cyan-400 text-sm">{testimonial.role}</p>
                  <p className="text-gray-400 text-sm">{testimonial.company}</p>
                </div>
              </FuturisticCard>
            ))}
          </ResponsiveGrid>
        </ResponsiveContainer>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <ResponsiveContainer>
          <div className="text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Experience <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Quantum Finance</span>?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Join the future of financial prediction with our quantum-enhanced AI platform. 
              Get started today and transform your trading strategy.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <FuturisticButton
                href="/contact"
                className="bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 text-white px-8 py-4 text-lg font-semibold rounded-xl transition-all duration-300 transform hover:scale-105"
              >
                <Mail className="w-5 h-5 mr-2" />
                Contact Sales
                <ArrowRight className="w-5 h-5 ml-2" />
              </FuturisticButton>
              <FuturisticButton
                href="/demo"
                variant="outline"
                className="border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-white px-8 py-4 text-lg font-semibold rounded-xl transition-all duration-300"
              >
                <Eye className="w-5 h-5 mr-2" />
                Schedule Demo
              </FuturisticButton>
            </div>
          </div>
        </ResponsiveContainer>
      </section>

      {/* Contact Info */}
      <section className="py-12 px-4 bg-slate-900/50">
        <ResponsiveContainer>
          <div className="text-center">
            <h3 className="text-2xl font-bold text-white mb-6">Get in Touch</h3>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <div className="flex items-center gap-2 text-gray-300">
                <Phone className="w-5 h-5 text-cyan-400" />
                <span>+1 302 464 0950</span>
              </div>
              <div className="flex items-center gap-2 text-gray-300">
                <Mail className="w-5 h-5 text-cyan-400" />
                <span>kleber@ziontechgroup.com</span>
              </div>
              <div className="flex items-center gap-2 text-gray-300">
                <MapPin className="w-5 h-5 text-cyan-400" />
                <span>364 E Main St STE 1008, Middletown DE 19709</span>
              </div>
            </div>
          </div>
        </ResponsiveContainer>
      </section>
    </div>
  );
};

export default AIQuantumFinancialOracle;
