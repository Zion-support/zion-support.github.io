import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { 
  Brain, 
  TrendingUp, 
  DollarSign, 
  BarChart3, 
  Shield, 
  Zap, 
  Target, 
  CheckCircle, 
  Star, 
  ArrowRight,
  Cpu,
  Activity,
  PieChart,
  LineChart,
  Calculator,
  Clock,
  Globe,
  Lock,
  Award,
  Rocket
} from 'lucide-react';

export default function AIQuantumFinancialOracle() {
  const features = [
    {
      icon: <Brain className="w-6 h-6" />,
      title: "Quantum Neural Networks",
      description: "Advanced quantum computing algorithms for ultra-fast financial modeling and prediction"
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: "Real-time Market Analysis",
      description: "Instant processing of global market data with quantum speed and accuracy"
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Risk Assessment Matrix",
      description: "Quantum-powered risk analysis with 99.97% accuracy in predicting market volatility"
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: "Portfolio Optimization",
      description: "AI-driven portfolio rebalancing using quantum optimization algorithms"
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "High-Frequency Trading",
      description: "Microsecond-level trading decisions powered by quantum computing"
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: "Global Market Integration",
      description: "Seamless integration with 200+ global exchanges and financial institutions"
    }
  ];

  const pricingPlans = [
    {
      name: "Quantum Starter",
      price: "$2,999",
      period: "/month",
      description: "Perfect for small investment firms",
      features: [
        "Up to 10 portfolios",
        "Real-time market data",
        "Basic quantum algorithms",
        "Email support",
        "Standard API access"
      ],
      popular: false
    },
    {
      name: "Quantum Professional",
      price: "$7,999",
      period: "/month",
      description: "Ideal for mid-size financial institutions",
      features: [
        "Up to 100 portfolios",
        "Advanced quantum algorithms",
        "Custom risk models",
        "Priority support",
        "Advanced API access",
        "White-label options"
      ],
      popular: true
    },
    {
      name: "Quantum Enterprise",
      price: "Custom",
      period: "",
      description: "For large financial institutions",
      features: [
        "Unlimited portfolios",
        "Custom quantum hardware",
        "Dedicated support team",
        "On-premise deployment",
        "Full customization",
        "24/7 monitoring"
      ],
      popular: false
    }
  ];

  const benefits = [
    {
      metric: "99.97%",
      description: "Prediction Accuracy",
      icon: <Target className="w-8 h-8" />
    },
    {
      metric: "10,000x",
      description: "Faster Processing",
      icon: <Zap className="w-8 h-8" />
    },
    {
      metric: "35%",
      description: "ROI Improvement",
      icon: <TrendingUp className="w-8 h-8" />
    },
    {
      metric: "24/7",
      description: "Market Monitoring",
      icon: <Clock className="w-8 h-8" />
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>AI Quantum Financial Oracle - Zion Tech Group</title>
        <meta name="description" content="Revolutionary quantum-powered financial prediction platform with 99.97% accuracy. Advanced AI algorithms for portfolio optimization, risk assessment, and high-frequency trading." />
        <meta name="keywords" content="quantum computing, financial AI, portfolio optimization, risk assessment, high-frequency trading, quantum algorithms" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-purple-500/20 to-cyan-500/20 border border-purple-500/30 mb-6">
              <Cpu className="w-5 h-5 mr-2 text-purple-400" />
              <span className="text-purple-300 font-medium">Quantum AI Technology</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              AI Quantum Financial Oracle
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Revolutionize your financial strategy with quantum-powered AI that delivers 99.97% prediction accuracy and processes market data 10,000x faster than traditional systems.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-600 to-cyan-600 text-white font-semibold rounded-lg hover:from-purple-700 hover:to-cyan-700 transition-all duration-300 transform hover:scale-105"
              >
                Get Started Today
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link
                to="/demo"
                className="inline-flex items-center px-8 py-4 border border-purple-500 text-purple-300 font-semibold rounded-lg hover:bg-purple-500/10 transition-all duration-300"
              >
                Watch Demo
              </Link>
            </div>
          </div>

          {/* Benefits Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-purple-500/20 to-cyan-500/20 rounded-full mb-4">
                  {benefit.icon}
                </div>
                <div className="text-3xl font-bold text-white mb-2">{benefit.metric}</div>
                <div className="text-gray-400">{benefit.description}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Quantum-Powered Features
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Harness the power of quantum computing to transform your financial operations with unprecedented speed and accuracy.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border border-slate-700/50 rounded-xl p-6 hover:border-purple-500/50 transition-all duration-300">
                <div className="text-purple-400 mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Quantum Pricing Plans
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose the perfect quantum computing power for your financial operations
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <div key={index} className={`relative bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border rounded-xl p-8 ${plan.popular ? 'border-purple-500/50 ring-2 ring-purple-500/20' : 'border-slate-700/50'}`}>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-purple-600 to-cyan-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <p className="text-gray-400 mb-4">{plan.description}</p>
                  <div className="flex items-baseline justify-center">
                    <span className="text-5xl font-bold text-white">{plan.price}</span>
                    <span className="text-gray-400 ml-2">{plan.period}</span>
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
                <Link
                  to="/contact"
                  className={`w-full inline-flex items-center justify-center px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-purple-600 to-cyan-600 text-white hover:from-purple-700 hover:to-cyan-700'
                      : 'border border-slate-600 text-slate-300 hover:bg-slate-700/50'
                  }`}
                >
                  Get Started
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-r from-purple-600/20 to-cyan-600/20 backdrop-blur-sm border border-purple-500/30 rounded-2xl p-12">
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Revolutionize Your Financial Strategy?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join leading financial institutions using quantum AI to gain competitive advantages in today's fast-paced markets.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-600 to-cyan-600 text-white font-semibold rounded-lg hover:from-purple-700 hover:to-cyan-700 transition-all duration-300 transform hover:scale-105"
              >
                Schedule Consultation
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link
                to="/demo"
                className="inline-flex items-center px-8 py-4 border border-purple-500 text-purple-300 font-semibold rounded-lg hover:bg-purple-500/10 transition-all duration-300"
              >
                View Live Demo
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
