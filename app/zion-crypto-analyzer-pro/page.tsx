import { ArrowRight, TrendingUp, Shield, Zap, CheckCircle, Star, BarChart3, Globe, Database, Brain } from "lucide-react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

export default function ZionCryptoAnalyzerPro() {
  const features = [
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: "Real-time Market Analysis",
      description: "Advanced AI algorithms analyze cryptocurrency markets 24/7 with millisecond precision and accuracy"
    },
    {
      icon: <BarChart3 className="w-6 h-6" />,
      title: "Predictive Analytics",
      description: "Machine learning models predict price movements, market trends, and trading opportunities"
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Risk Assessment",
      description: "Comprehensive risk analysis and portfolio protection with advanced security monitoring"
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Automated Trading Signals",
      description: "AI-generated buy/sell signals with customizable parameters and risk management"
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: "Multi-Exchange Support",
      description: "Connect to 50+ cryptocurrency exchanges for unified portfolio management and trading"
    },
    {
      icon: <Brain className="w-6 h-6" />,
      title: "Sentiment Analysis",
      description: "AI-powered social media and news sentiment analysis for market intelligence"
    }
  ];

  const pricingPlans = [
    {
      name: "Crypto Starter",
      price: "$39",
      period: "/month",
      description: "Perfect for individual traders",
      features: [
        "Up to 5 portfolio positions",
        "Basic market analysis",
        "Standard trading signals",
        "Email support",
        "Basic risk assessment",
        "1 exchange connection"
      ],
      popular: false
    },
    {
      name: "Crypto Professional",
      price: "$99",
      period: "/month",
      description: "Most popular for active traders",
      features: [
        "Up to 50 portfolio positions",
        "Advanced market analysis",
        "AI trading signals",
        "Priority support",
        "Advanced risk management",
        "Up to 10 exchange connections",
        "Sentiment analysis",
        "Portfolio optimization"
      ],
      popular: true
    },
    {
      name: "Crypto Enterprise",
      price: "$299",
      period: "/month",
      description: "For institutional traders and funds",
      features: [
        "Unlimited portfolio positions",
        "Premium market analysis",
        "Custom AI models",
        "24/7 dedicated support",
        "Advanced security features",
        "Unlimited exchange connections",
        "White-label solution",
        "API access & integrations"
      ],
      popular: false
    }
  ];

  const marketInsights = [
    {
      title: "Bitcoin Analysis",
      description: "Comprehensive BTC price prediction, technical analysis, and market sentiment tracking",
      icon: <TrendingUp className="w-6 h-6" />
    },
    {
      title: "Altcoin Discovery",
      description: "AI-powered discovery of promising altcoins and emerging investment opportunities",
      icon: <Zap className="w-6 h-6" />
    },
    {
      title: "DeFi Analytics",
      description: "Advanced analysis of DeFi protocols, yield farming opportunities, and liquidity pools",
      icon: <Database className="w-6 h-6" />
    },
    {
      title: "NFT Market Intelligence",
      description: "NFT market trends, floor price analysis, and collection valuation insights",
      icon: <Globe className="w-6 h-6" />
    }
  ];

  const testimonials = [
    {
      name: "David Chen",
      company: "Crypto Investment Fund",
      role: "Portfolio Manager",
      content: "Zion Crypto Analyzer Pro increased our trading returns by 45% while reducing risk by 30%. The AI predictions are incredibly accurate.",
      rating: 5
    },
    {
      name: "Sarah Martinez",
      company: "Blockchain Capital",
      role: "Trading Director",
      content: "The real-time analysis and automated signals have transformed our trading strategy. We've never been more profitable.",
      rating: 5
    },
    {
      name: "Michael Rodriguez",
      company: "Digital Asset Management",
      role: "Chief Investment Officer",
      content: "This platform is a game-changer for crypto investing. The risk assessment tools have saved us millions in potential losses.",
      rating: 5
    }
  ];

  return (
    <>
      <Helmet>
        <title>Zion Crypto Analyzer Pro - AI Cryptocurrency Analysis | Zion Tech Group</title>
        <meta
          name="description"
          content="Advanced AI-powered cryptocurrency analysis platform. Real-time market analysis, predictive analytics, and automated trading signals for crypto investors."
        />
        <meta
          name="keywords"
          content="cryptocurrency analysis, crypto trading, bitcoin analysis, altcoin analysis, DeFi analytics, NFT intelligence, crypto AI"
        />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-yellow-500/20 to-orange-500/20 border border-yellow-500/30 mb-6">
              <TrendingUp className="w-4 h-4 text-yellow-400 mr-2" />
              <span className="text-yellow-400 text-sm font-medium">#1 Crypto Analysis Platform</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-400">
                Zion Crypto Analyzer Pro
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-4xl mx-auto">
              The ultimate AI-powered cryptocurrency analysis platform. Make smarter investment decisions with 
              real-time market analysis, predictive analytics, and automated trading signals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-yellow-500 to-orange-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-yellow-600 hover:to-orange-700 transition-all duration-300 flex items-center justify-center group"
              >
                Start Crypto Analysis
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/demo"
                className="border border-yellow-400 text-yellow-400 px-8 py-4 rounded-lg font-semibold hover:bg-yellow-400 hover:text-slate-900 transition-all duration-300"
              >
                Watch Analysis Demo
              </Link>
            </div>
            
            {/* Stats */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
              <div className="text-center">
                <div className="text-3xl font-bold text-yellow-400 mb-2">$2.5B+</div>
                <div className="text-gray-300">Assets Analyzed</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-orange-400 mb-2">95%</div>
                <div className="text-gray-300">Prediction Accuracy</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-400 mb-2">50+</div>
                <div className="text-gray-300">Exchange Connections</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-400 mb-2">24/7</div>
                <div className="text-gray-300">Market Monitoring</div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Advanced Crypto Analysis Features
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Powerful AI-driven tools designed specifically for cryptocurrency analysis and trading.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 group"
                >
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-yellow-500 to-orange-600 flex items-center justify-center mb-4 text-white group-hover:scale-110 transition-transform">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-gray-300">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Market Insights Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800/50 to-yellow-800/50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Comprehensive Market Intelligence
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Get deep insights into all aspects of the cryptocurrency market with our AI analysis.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {marketInsights.map((insight, index) => (
                <div
                  key={index}
                  className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 group"
                >
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-yellow-500 to-orange-600 flex items-center justify-center mb-4 text-white group-hover:scale-110 transition-transform">
                    {insight.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">
                    {insight.title}
                  </h3>
                  <p className="text-gray-300">
                    {insight.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Crypto Analysis Plans
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Choose the crypto analysis solution that matches your trading needs and investment goals.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pricingPlans.map((plan, index) => (
                <div
                  key={index}
                  className={`relative bg-white/10 backdrop-blur-sm rounded-xl p-8 border transition-all duration-300 hover:scale-105 ${
                    plan.popular
                      ? 'border-yellow-400 bg-gradient-to-br from-yellow-500/10 to-orange-500/10'
                      : 'border-white/20 hover:border-yellow-400'
                  }`}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-yellow-500 to-orange-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                        Most Popular
                      </span>
                    </div>
                  )}
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                    <p className="text-gray-300 mb-4">{plan.description}</p>
                    <div className="flex items-baseline justify-center">
                      <span className="text-4xl font-bold text-white">{plan.price}</span>
                      <span className="text-gray-300 ml-1">{plan.period}</span>
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
                        ? 'bg-gradient-to-r from-yellow-500 to-orange-600 text-white hover:from-yellow-600 hover:to-orange-700'
                        : 'border border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-slate-900'
                    }`}
                  >
                    Start Crypto Analysis
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Trusted by Crypto Professionals
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                See what crypto traders and investors say about Zion Crypto Analyzer Pro
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300"
                >
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-300 mb-4 italic">"{testimonial.content}"</p>
                  <div>
                    <div className="font-semibold text-white">{testimonial.name}</div>
                    <div className="text-sm text-gray-400">{testimonial.role}, {testimonial.company}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Master Crypto Markets?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join thousands of crypto traders using AI to make smarter investment decisions and maximize profits.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-yellow-500 to-orange-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-yellow-600 hover:to-orange-700 transition-all duration-300 flex items-center justify-center"
              >
                Start Crypto Analysis
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link
                to="/demo"
                className="border border-yellow-400 text-yellow-400 px-8 py-4 rounded-lg font-semibold hover:bg-yellow-400 hover:text-slate-900 transition-all duration-300"
              >
                Watch Analysis Demo
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}