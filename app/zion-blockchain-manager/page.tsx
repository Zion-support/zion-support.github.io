import { ArrowRight, Shield, Link as LinkIcon, Zap, Globe, CheckCircle, Star, Brain, Database, Lock } from "lucide-react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

export default function ZionBlockchainManager() {
  const features = [
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Multi-Chain Support",
      description: "Manage assets across Ethereum, Bitcoin, Polygon, BSC, and 20+ other blockchain networks"
    },
    {
      icon: <Brain className="w-6 h-6" />,
      title: "AI-Powered Analytics",
      description: "Advanced AI algorithms analyze market trends, portfolio performance, and risk factors"
    },
    {
      icon: <Lock className="w-6 h-6" />,
      title: "Enterprise Security",
      description: "Military-grade security with hardware wallet integration and multi-signature support"
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Automated Trading",
      description: "Set up automated trading strategies with smart contracts and DeFi protocols"
    },
    {
      icon: <Database className="w-6 h-6" />,
      title: "Portfolio Management",
      description: "Comprehensive portfolio tracking with real-time P&L, tax reporting, and analytics"
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: "DeFi Integration",
      description: "Access to 100+ DeFi protocols for yield farming, liquidity provision, and staking"
    }
  ];

  const capabilities = [
    "Multi-Chain Wallet Management",
    "AI-Powered Market Analysis",
    "Automated Trading Strategies",
    "DeFi Protocol Integration",
    "NFT Portfolio Management",
    "Tax Reporting & Compliance",
    "Risk Assessment & Alerts",
    "Yield Farming Optimization",
    "Liquidity Pool Management",
    "Cross-Chain Bridge Support",
    "Smart Contract Deployment",
    "Real-time Market Data"
  ];

  const pricingPlans = [
    {
      name: "Individual",
      price: "$29",
      period: "/month",
      description: "Perfect for crypto enthusiasts",
      features: [
        "Up to 5 wallets",
        "Basic portfolio tracking",
        "Standard security features",
        "Email support",
        "Mobile app access",
        "Basic analytics"
      ],
      popular: false
    },
    {
      name: "Professional",
      price: "$79",
      period: "/month",
      description: "Most popular for traders",
      features: [
        "Up to 25 wallets",
        "Advanced portfolio tracking",
        "AI-powered analytics",
        "Priority support",
        "Automated trading",
        "DeFi integration",
        "API access",
        "Advanced security"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: "$299",
      period: "/month",
      description: "For institutions and large teams",
      features: [
        "Unlimited wallets",
        "Custom portfolio management",
        "Advanced AI models",
        "24/7 phone support",
        "White-label solution",
        "Custom integrations",
        "Dedicated account manager",
        "Institutional security"
      ],
      popular: false
    }
  ];

  const testimonials = [
    {
      name: "Michael Chen",
      company: "Crypto Investment Fund",
      role: "Portfolio Manager",
      content: "Zion Blockchain Manager has revolutionized our portfolio management. The AI analytics help us make better investment decisions and reduce risk significantly.",
      rating: 5
    },
    {
      name: "Sarah Johnson",
      company: "DeFi Protocol",
      role: "CTO",
      content: "The multi-chain support and DeFi integration are outstanding. We can manage our entire ecosystem from one platform with enterprise-grade security.",
      rating: 5
    },
    {
      name: "David Rodriguez",
      company: "Crypto Trading Firm",
      role: "Head of Trading",
      content: "The automated trading features and risk management tools have increased our profitability by 40% while reducing manual errors to zero.",
      rating: 5
    }
  ];

  return (
    <>
      <Helmet>
        <title>Zion Blockchain Manager - AI-Powered Crypto Portfolio Platform | Zion Tech Group</title>
        <meta
          name="description"
          content="Manage your crypto portfolio with Zion Blockchain Manager - the ultimate AI-powered blockchain management platform. Multi-chain support, DeFi integration, and automated trading."
        />
        <meta
          name="keywords"
          content="blockchain management, crypto portfolio, DeFi, automated trading, multi-chain wallet, cryptocurrency management, AI trading"
        />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-amber-900 to-slate-900">
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-amber-500/20 to-orange-500/20 border border-amber-500/30 mb-6">
              <LinkIcon className="w-4 h-4 text-amber-400 mr-2" />
              <span className="text-amber-400 text-sm font-medium">AI-Powered Blockchain Management</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-400">
                Zion Blockchain Manager
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Master the blockchain with AI-powered portfolio management. Track, trade, and optimize your crypto assets 
              across multiple chains with enterprise-grade security and intelligent automation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-amber-500 to-orange-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-amber-600 hover:to-orange-700 transition-all duration-300 flex items-center justify-center group"
              >
                Start Free Trial
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/demo"
                className="border border-amber-400 text-amber-400 px-8 py-4 rounded-lg font-semibold hover:bg-amber-400 hover:text-slate-900 transition-all duration-300"
              >
                Watch Demo
              </Link>
            </div>
            
            {/* Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="text-center">
                <div className="text-3xl font-bold text-amber-400 mb-2">20+</div>
                <div className="text-gray-300">Blockchain Networks</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-orange-400 mb-2">$2.5B+</div>
                <div className="text-gray-300">Assets Under Management</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-400 mb-2">99.9%</div>
                <div className="text-gray-300">Security Uptime</div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Advanced Blockchain Management
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Harness the power of AI to manage your crypto portfolio across multiple blockchain networks.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 group"
                >
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-amber-500 to-orange-600 flex items-center justify-center mb-4 text-white group-hover:scale-110 transition-transform">
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

        {/* Capabilities Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Complete Blockchain Solution
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Everything you need to manage, trade, and optimize your blockchain assets.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {capabilities.map((capability, index) => (
                <div
                  key={index}
                  className="flex items-center bg-white/5 backdrop-blur-sm rounded-lg p-4 border border-white/10 hover:bg-white/10 transition-all duration-300"
                >
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                  <span className="text-gray-300">{capability}</span>
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
                Choose Your Blockchain Plan
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Start managing your crypto portfolio today. All plans include 14-day free trial.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pricingPlans.map((plan, index) => (
                <div
                  key={index}
                  className={`relative bg-white/10 backdrop-blur-sm rounded-xl p-8 border transition-all duration-300 hover:scale-105 ${
                    plan.popular
                      ? 'border-amber-400 bg-gradient-to-br from-amber-500/10 to-orange-500/10'
                      : 'border-white/20 hover:border-amber-400'
                  }`}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-amber-500 to-orange-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
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
                        ? 'bg-gradient-to-r from-amber-500 to-orange-600 text-white hover:from-amber-600 hover:to-orange-700'
                        : 'border border-amber-400 text-amber-400 hover:bg-amber-400 hover:text-slate-900'
                    }`}
                  >
                    Start Free Trial
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
                See what blockchain professionals say about Zion Blockchain Manager
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
              Ready to Master the Blockchain?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join thousands of crypto professionals using Zion Blockchain Manager to optimize their portfolios.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-amber-500 to-orange-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-amber-600 hover:to-orange-700 transition-all duration-300 flex items-center justify-center"
              >
                Start Your Free Trial
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link
                to="/demo"
                className="border border-amber-400 text-amber-400 px-8 py-4 rounded-lg font-semibold hover:bg-amber-400 hover:text-slate-900 transition-all duration-300"
              >
                Watch Demo
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}