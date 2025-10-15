import { ArrowRight, Link, Zap, Target, BarChart3, CheckCircle, Clock, DollarSign, Users, Settings, Globe, Shield, Coins } from "lucide-react";
import { Helmet } from "react-helmet-async";
import { Link as RouterLink } from "react-router-dom";

export default function AIBlockchainAnalytics() {
  const features = [
    {
      title: "AI-Powered Blockchain Analysis",
      description: "Advanced AI algorithms that analyze blockchain transactions, patterns, and trends in real-time",
      icon: <Link className="w-6 h-6" />,
      included: true
    },
    {
      title: "Smart Contract Intelligence",
      description: "Intelligent analysis of smart contracts with vulnerability detection and optimization suggestions",
      icon: <Zap className="w-6 h-6" />,
      included: true
    },
    {
      title: "DeFi Analytics",
      description: "Comprehensive DeFi protocol analysis with yield farming optimization and risk assessment",
      icon: <Target className="w-6 h-6" />,
      included: true
    },
    {
      title: "Cryptocurrency Tracking",
      description: "Real-time tracking of cryptocurrency prices, market cap, and trading volume across multiple exchanges",
      icon: <Coins className="w-6 h-6" />,
      included: true
    },
    {
      title: "Risk Assessment",
      description: "AI-powered risk assessment for investments, transactions, and smart contract interactions",
      icon: <Shield className="w-6 h-6" />,
      included: true
    },
    {
      title: "Portfolio Management",
      description: "Intelligent portfolio management with automated rebalancing and performance optimization",
      icon: <BarChart3 className="w-6 h-6" />,
      included: true
    }
  ];

  const pricingPlans = [
    {
      name: "Starter",
      price: 79,
      period: "month",
      description: "Perfect for individual traders",
      features: [
        "Up to 5 portfolios",
        "Basic analytics",
        "Email support",
        "1 user account",
        "Standard data feeds",
        "Basic risk assessment"
      ],
      popular: false
    },
    {
      name: "Professional",
      price: 199,
      period: "month",
      description: "Ideal for trading firms",
      features: [
        "Up to 25 portfolios",
        "Advanced analytics",
        "Priority support",
        "Up to 10 user accounts",
        "Premium data feeds",
        "Advanced risk assessment",
        "Smart contract analysis",
        "API access"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: 499,
      period: "month",
      description: "For large organizations",
      features: [
        "Unlimited portfolios",
        "Custom analytics",
        "Dedicated support",
        "Unlimited users",
        "Custom data feeds",
        "White-label solution",
        "Custom integrations",
        "SSO integration"
      ],
      popular: false
    }
  ];

  const blockchainStats = [
    { number: "99.9%", label: "Data Accuracy", icon: <Link className="w-6 h-6" /> },
    { number: "50+", label: "Blockchain Networks", icon: <Globe className="w-6 h-6" /> },
    { number: "95%", label: "Risk Prediction Accuracy", icon: <Shield className="w-6 h-6" /> },
    { number: "24/7", label: "Real-time Analysis", icon: <Clock className="w-6 h-6" /> }
  ];

  const testimonials = [
    {
      name: "Alex Chen",
      company: "Crypto Trading Firm",
      role: "Portfolio Manager",
      content: "AI Blockchain Analytics has transformed our trading strategy. We've improved our risk prediction accuracy to 95% and increased our returns by 40%.",
      rating: 5,
      avatar: "AC"
    },
    {
      name: "Sarah Martinez",
      company: "DeFi Protocol",
      role: "Risk Manager",
      content: "The smart contract analysis and DeFi analytics features are incredible. We can now identify vulnerabilities and optimize our protocols automatically.",
      rating: 5,
      avatar: "SM"
    },
    {
      name: "David Kim",
      company: "Crypto Investment Fund",
      role: "Investment Director",
      content: "The portfolio management and risk assessment features have made our investment decisions so much more data-driven and profitable.",
      rating: 5,
      avatar: "DK"
    }
  ];

  return (
    <>
      <Helmet>
        <title>AI Blockchain Analytics - AI-Powered Blockchain Analysis Platform | Zion Tech Group</title>
        <meta
          name="description"
          content="Analyze blockchain data with AI Blockchain Analytics - the ultimate AI-powered blockchain analysis platform. Smart contract intelligence, DeFi analytics, and risk assessment. Starting at $79/month."
        />
        <meta
          name="keywords"
          content="blockchain analytics, AI blockchain analysis, smart contract analysis, DeFi analytics, cryptocurrency tracking, risk assessment, portfolio management, AI blockchain analytics"
        />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-amber-900 to-slate-900 relative overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-r from-amber-500/10 via-yellow-500/10 to-orange-500/10 animate-pulse"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(245,158,11,0.3),transparent_50%)]"></div>
        
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-7xl mx-auto text-center">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-amber-500/20 to-yellow-500/20 border border-amber-500/30 mb-6">
              <Link className="w-4 h-4 text-amber-400 mr-2" />
              <span className="text-amber-400 text-sm font-medium">#1 Blockchain Analytics Platform 2024</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 relative">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-yellow-400 to-orange-400 animate-pulse">
                AI Blockchain Analytics
              </span>
              <div className="absolute -inset-1 bg-gradient-to-r from-amber-400 via-yellow-400 to-orange-400 rounded-lg blur opacity-30 animate-pulse"></div>
            </h1>
            
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              The ultimate AI-powered blockchain analytics platform that provides intelligent insights into blockchain data. 
              Analyze smart contracts, DeFi protocols, and cryptocurrency markets with 99.9% accuracy.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <RouterLink
                to="/contact"
                className="group bg-gradient-to-r from-amber-500 to-yellow-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-amber-600 hover:to-yellow-700 transition-all duration-300 flex items-center justify-center shadow-lg hover:shadow-amber-500/25 hover:scale-105"
              >
                Start Free Trial
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </RouterLink>
              <RouterLink
                to="/demo"
                className="border border-amber-400 text-amber-400 px-8 py-4 rounded-lg font-semibold hover:bg-amber-400 hover:text-slate-900 transition-all duration-300 hover:scale-105"
              >
                Watch Demo
              </RouterLink>
            </div>

            {/* Blockchain Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
              {blockchainStats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-amber-500/20 to-yellow-500/20 flex items-center justify-center">
                    {stat.icon}
                  </div>
                  <div className="text-3xl font-bold text-amber-400 mb-2">{stat.number}</div>
                  <div className="text-gray-300 text-sm">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-yellow-400">
                  Advanced Blockchain Analytics Features
                </span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Everything you need to analyze blockchain data effectively
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-amber-500/10 relative overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-amber-500/5 to-yellow-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  <div className="relative z-10">
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-amber-500 to-yellow-500 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                      {feature.icon}
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-amber-300 transition-colors">
                      {feature.title}
                    </h3>
                    <p className="text-gray-300 leading-relaxed">
                      {feature.description}
                    </p>
                    <div className="flex items-center mt-4">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-2" />
                      <span className="text-green-400 text-sm font-medium">Included in all plans</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 relative z-10 bg-gradient-to-r from-slate-800/50 to-amber-800/50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-yellow-400">
                  Blockchain Analytics Pricing
                </span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Choose the plan that fits your blockchain analysis needs
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pricingPlans.map((plan, index) => (
                <div
                  key={index}
                  className={`group bg-white/10 backdrop-blur-sm rounded-xl p-8 border transition-all duration-300 hover:scale-105 hover:shadow-2xl relative overflow-hidden ${
                    plan.popular 
                      ? 'border-amber-500/50 bg-gradient-to-br from-amber-500/10 to-yellow-500/10' 
                      : 'border-white/20 hover:border-amber-500/30'
                  }`}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <div className="bg-gradient-to-r from-amber-500 to-yellow-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                        Most Popular
                      </div>
                    </div>
                  )}
                  
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                    <p className="text-gray-300 mb-4">{plan.description}</p>
                    <div className="flex items-baseline justify-center">
                      <span className="text-4xl font-bold text-amber-400">${plan.price}</span>
                      <span className="text-gray-300 ml-2">/{plan.period}</span>
                    </div>
                  </div>
                  
                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center">
                        <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                        <span className="text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <RouterLink
                    to="/contact"
                    className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 text-center block ${
                      plan.popular
                        ? 'bg-gradient-to-r from-amber-500 to-yellow-600 text-white hover:from-amber-600 hover:to-yellow-700 shadow-lg hover:shadow-amber-500/25'
                        : 'border border-amber-400 text-amber-400 hover:bg-amber-400 hover:text-slate-900'
                    }`}
                  >
                    Get Started
                  </RouterLink>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Trusted by Crypto Professionals
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                See what our users say about AI Blockchain Analytics
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-amber-500/10 relative overflow-hidden"
                >
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Link key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-300 mb-4 italic leading-relaxed">"{testimonial.content}"</p>
                  <div className="flex items-center">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-r from-amber-500 to-yellow-500 flex items-center justify-center text-white font-semibold mr-3">
                      {testimonial.avatar}
                    </div>
                    <div>
                      <div className="font-semibold text-white">{testimonial.name}</div>
                      <div className="text-sm text-gray-400">{testimonial.role}, {testimonial.company}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 relative z-10 bg-gradient-to-r from-amber-900/30 to-yellow-900/30">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Start Analyzing Blockchain Data
            </h2>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Join thousands of crypto professionals who use AI Blockchain Analytics to make informed decisions. 
              Start your free trial today - no credit card required.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <RouterLink
                to="/contact"
                className="group bg-gradient-to-r from-amber-500 to-yellow-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-amber-600 hover:to-yellow-700 transition-all duration-300 flex items-center justify-center shadow-lg hover:shadow-amber-500/25 hover:scale-105"
              >
                Start Free Trial
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </RouterLink>
              <RouterLink
                to="/demo"
                className="border border-amber-400 text-amber-400 px-8 py-4 rounded-lg font-semibold hover:bg-amber-400 hover:text-slate-900 transition-all duration-300 hover:scale-105"
              >
                Watch Demo
              </RouterLink>
            </div>
            
            <div className="mt-8 text-sm text-gray-400">
              <p>✓ 14-day free trial • ✓ No setup fees • ✓ Cancel anytime • ✓ 24/7 support</p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}