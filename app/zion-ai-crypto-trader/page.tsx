import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { 
  TrendingUp, 
  Shield, 
  Zap, 
  BarChart3, 
  DollarSign, 
  Clock, 
  CheckCircle,
  ArrowRight,
  Brain,
  Target,
  Activity,
  Globe
} from "lucide-react";

const ZionAICryptoTraderPage = () => {
  const features = [
    {
      icon: <Brain className="w-8 h-8" />,
      title: "AI-Powered Trading",
      description: "Advanced machine learning algorithms analyze market patterns and execute trades automatically with 99.7% accuracy."
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Risk Management",
      description: "Intelligent risk assessment and portfolio protection with real-time stop-loss and take-profit management."
    },
    {
      icon: <BarChart3 className="w-8 h-8" />,
      title: "Market Analysis",
      description: "Comprehensive technical and fundamental analysis across 500+ cryptocurrencies and 50+ exchanges."
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Real-time Execution",
      description: "Ultra-fast trade execution with sub-millisecond latency and 24/7 market monitoring."
    }
  ];

  const pricingPlans = [
    {
      name: "Starter",
      price: "$99",
      period: "/month",
      description: "Perfect for beginners",
      features: [
        "Up to $10K portfolio",
        "5 trading pairs",
        "Basic AI signals",
        "Email support",
        "Mobile app access"
      ],
      popular: false
    },
    {
      name: "Professional",
      price: "$299",
      period: "/month",
      description: "Most popular choice",
      features: [
        "Up to $100K portfolio",
        "Unlimited trading pairs",
        "Advanced AI algorithms",
        "Priority support",
        "Advanced analytics",
        "Custom strategies"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: "$999",
      period: "/month",
      description: "For serious traders",
      features: [
        "Unlimited portfolio",
        "White-label solution",
        "Dedicated account manager",
        "Custom integrations",
        "API access",
        "24/7 phone support"
      ],
      popular: false
    }
  ];

  const stats = [
    { label: "Average ROI", value: "247%", icon: <TrendingUp className="w-6 h-6" /> },
    { label: "Active Users", value: "50K+", icon: <Activity className="w-6 h-6" /> },
    { label: "Trades Executed", value: "2M+", icon: <Target className="w-6 h-6" /> },
    { label: "Countries", value: "120+", icon: <Globe className="w-6 h-6" /> }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Zion AI Crypto Trader - Advanced AI-Powered Cryptocurrency Trading Platform</title>
        <meta
          name="description"
          content="Revolutionary AI-powered cryptocurrency trading platform with 99.7% accuracy, real-time market analysis, and intelligent risk management. Start trading with confidence."
        />
        <meta
          name="keywords"
          content="AI crypto trading, cryptocurrency bot, automated trading, crypto investment, AI trading algorithms, digital currency trading"
        />
      </Helmet>

      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 text-white text-sm font-medium mb-8">
            <Zap className="w-4 h-4 mr-2" />
            AI-Powered Trading Revolution
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-8 bg-gradient-to-r from-white via-purple-200 to-pink-200 bg-clip-text text-transparent">
            Zion AI Crypto Trader
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto">
            The world's most advanced AI-powered cryptocurrency trading platform. 
            Maximize your profits with intelligent algorithms that never sleep.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Link
              to="/demo"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-lg hover:from-purple-700 hover:to-pink-700 transition-all duration-300 transform hover:scale-105"
            >
              Start Free Trial
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center px-8 py-4 border-2 border-purple-500 text-purple-300 font-semibold rounded-lg hover:bg-purple-500 hover:text-white transition-all duration-300"
            >
              Schedule Demo
            </Link>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg mb-4">
                  {stat.icon}
                </div>
                <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
                <div className="text-gray-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Revolutionary Trading Features
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our AI-powered platform combines cutting-edge technology with proven trading strategies 
              to deliver exceptional results in the volatile cryptocurrency market.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-slate-800 to-slate-900 p-8 rounded-2xl border border-slate-700 hover:border-purple-500 transition-all duration-300 group"
              >
                <div className="text-purple-400 mb-6 group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800 to-slate-900">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              How It Works
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Get started with AI-powered trading in just three simple steps
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full text-white text-2xl font-bold mb-6">
                1
              </div>
              <h3 className="text-2xl font-semibold text-white mb-4">Connect Your Exchange</h3>
              <p className="text-gray-300">
                Securely connect your cryptocurrency exchange account using our bank-level encryption. 
                We support 50+ major exchanges including Binance, Coinbase, and Kraken.
              </p>
            </div>

            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full text-white text-2xl font-bold mb-6">
                2
              </div>
              <h3 className="text-2xl font-semibold text-white mb-4">Configure Your Strategy</h3>
              <p className="text-gray-300">
                Choose from our pre-built AI strategies or create custom ones. 
                Set your risk tolerance, investment amount, and preferred trading pairs.
              </p>
            </div>

            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full text-white text-2xl font-bold mb-6">
                3
              </div>
              <h3 className="text-2xl font-semibold text-white mb-4">Watch AI Trade</h3>
              <p className="text-gray-300">
                Our AI algorithms analyze market data 24/7 and execute trades automatically. 
                Monitor your portfolio performance in real-time through our dashboard.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Choose Your Plan
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Start with our free trial and upgrade as your portfolio grows
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <div
                key={index}
                className={`relative bg-gradient-to-br from-slate-800 to-slate-900 p-8 rounded-2xl border-2 ${
                  plan.popular 
                    ? 'border-purple-500 shadow-2xl shadow-purple-500/20' 
                    : 'border-slate-700'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-2 rounded-full text-sm font-semibold">
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
                  className={`w-full block text-center py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white hover:from-purple-700 hover:to-pink-700'
                      : 'border-2 border-purple-500 text-purple-300 hover:bg-purple-500 hover:text-white'
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
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-purple-900 to-pink-900">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Start AI Trading?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Join thousands of successful traders who trust Zion AI Crypto Trader 
            to maximize their cryptocurrency investments.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/demo"
              className="inline-flex items-center px-8 py-4 bg-white text-purple-900 font-semibold rounded-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105"
            >
              Start Free Trial
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-purple-900 transition-all duration-300"
            >
              Contact Sales
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ZionAICryptoTraderPage;