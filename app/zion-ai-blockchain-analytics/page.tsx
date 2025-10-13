import React from 'react';
import { Brain, Shield, TrendingUp, BarChart3, Zap, Star, ArrowRight, Target, Users, Clock, CheckCircle, Database, Lock, Eye, Activity, DollarSign, PieChart, LineChart } from 'lucide-react';
import EnhancedSEO from '../components/EnhancedSEO';
import FuturisticBackgroundEnhanced from '../components/FuturisticBackgroundEnhanced';
import FuturisticCardEnhanced from '../components/FuturisticCardEnhanced';
import FuturisticButtonEnhanced from '../components/FuturisticButtonEnhanced';
import FuturisticTextEnhanced from '../components/FuturisticTextEnhanced';

const ZionAIBlockchainAnalyticsPage = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "Zion AI Blockchain Analytics",
    "description": "Advanced AI-powered blockchain analytics platform that provides real-time insights, transaction monitoring, and risk assessment for cryptocurrency and DeFi protocols.",
    "url": "https://ziontechgroup.com/zion-ai-blockchain-analytics",
    "applicationCategory": "BusinessApplication",
    "operatingSystem": "Web, API",
    "offers": {
      "@type": "Offer",
      "price": "199",
      "priceCurrency": "USD",
      "priceValidUntil": "2025-12-31"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.7",
      "reviewCount": "892"
    }
  };

  const features = [
    {
      title: "Real-time Transaction Monitoring",
      description: "Track and analyze blockchain transactions across multiple networks in real-time",
      icon: <Activity className="w-8 h-8" />,
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "AI-Powered Risk Assessment",
      description: "Identify suspicious activities and potential security threats using machine learning",
      icon: <Shield className="w-8 h-8" />,
      color: "from-green-500 to-emerald-500"
    },
    {
      title: "DeFi Protocol Analysis",
      description: "Monitor liquidity pools, yield farming, and DeFi protocol health metrics",
      icon: <TrendingUp className="w-8 h-8" />,
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "Portfolio Tracking",
      description: "Track cryptocurrency portfolios across multiple wallets and exchanges",
      icon: <PieChart className="w-8 h-8" />,
      color: "from-orange-500 to-red-500"
    },
    {
      title: "Market Intelligence",
      description: "Get AI-generated insights on market trends and trading opportunities",
      icon: <BarChart3 className="w-8 h-8" />,
      color: "from-yellow-500 to-amber-500"
    },
    {
      title: "Compliance Reporting",
      description: "Generate automated compliance reports for regulatory requirements",
      icon: <Database className="w-8 h-8" />,
      color: "from-indigo-500 to-blue-500"
    }
  ];

  const pricingPlans = [
    {
      name: "Starter",
      price: "$99",
      period: "/month",
      description: "Perfect for individual traders and small portfolios",
      features: [
        "Up to 5 wallet addresses",
        "Basic transaction monitoring",
        "Standard risk alerts",
        "Email support",
        "7-day data retention"
      ],
      popular: false
    },
    {
      name: "Professional",
      price: "$199",
      period: "/month",
      description: "Ideal for crypto businesses and DeFi protocols",
      features: [
        "Up to 50 wallet addresses",
        "Advanced AI analytics",
        "Real-time risk assessment",
        "DeFi protocol monitoring",
        "Priority support",
        "30-day data retention",
        "API access"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: "$499",
      period: "/month",
      description: "For large institutions and exchanges",
      features: [
        "Unlimited wallet addresses",
        "Full AI suite",
        "Custom risk models",
        "White-label dashboard",
        "Dedicated support",
        "Unlimited data retention",
        "Custom integrations"
      ],
      popular: false
    }
  ];

  const supportedChains = [
    { name: "Ethereum", icon: "ETH", color: "from-blue-500 to-blue-600" },
    { name: "Bitcoin", icon: "BTC", color: "from-orange-500 to-orange-600" },
    { name: "Binance Smart Chain", icon: "BNB", color: "from-yellow-500 to-yellow-600" },
    { name: "Polygon", icon: "MATIC", color: "from-purple-500 to-purple-600" },
    { name: "Avalanche", icon: "AVAX", color: "from-red-500 to-red-600" },
    { name: "Solana", icon: "SOL", color: "from-green-500 to-green-600" },
    { name: "Cardano", icon: "ADA", color: "from-blue-600 to-blue-700" },
    { name: "Polkadot", icon: "DOT", color: "from-pink-500 to-pink-600" }
  ];

  const testimonials = [
    {
      name: "James Wilson",
      company: "Crypto Investment Fund",
      role: "Portfolio Manager",
      content: "Zion AI Blockchain Analytics has transformed how we monitor our investments. The AI risk assessment has prevented several potential losses.",
      rating: 5,
      avatar: "JW"
    },
    {
      name: "Sarah Kim",
      company: "DeFi Protocol",
      role: "Security Lead",
      content: "The real-time monitoring capabilities are incredible. We can now detect and respond to threats before they become major issues.",
      rating: 5,
      avatar: "SK"
    },
    {
      name: "Michael Chen",
      company: "Crypto Exchange",
      role: "Compliance Officer",
      content: "The compliance reporting features have made our regulatory requirements much easier to manage. Highly recommended!",
      rating: 5,
      avatar: "MC"
    }
  ];

  const stats = [
    { number: "50+", label: "Blockchain Networks", icon: <Database className="w-6 h-6" /> },
    { number: "99.9%", label: "Uptime SLA", icon: <Shield className="w-6 h-6" /> },
    { number: "1M+", label: "Transactions Analyzed", icon: <Activity className="w-6 h-6" /> },
    { number: "24/7", label: "AI Monitoring", icon: <Brain className="w-6 h-6" /> }
  ];

  return (
    <FuturisticBackgroundEnhanced>
      <EnhancedSEO
        title="Zion AI Blockchain Analytics - Advanced Crypto & DeFi Intelligence Platform"
        description="AI-powered blockchain analytics platform providing real-time insights, risk assessment, and compliance reporting for cryptocurrency and DeFi protocols. Monitor 50+ blockchain networks."
        keywords="blockchain analytics, crypto analytics, DeFi monitoring, cryptocurrency intelligence, blockchain security, crypto risk assessment, DeFi protocol analysis"
        canonical="https://ziontechgroup.com/zion-ai-blockchain-analytics"
        structuredData={structuredData}
      />

      <main className="min-h-screen pt-20">
        {/* Hero Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 mb-6">
                <Brain className="w-4 h-4 text-cyan-400 mr-2" />
                <span className="text-cyan-400 text-sm font-medium">AI-Powered Blockchain Intelligence</span>
              </div>
              
              <FuturisticTextEnhanced
                variant="display"
                size="5xl"
                gradient={true}
                animated={true}
                glow={true}
                neon={true}
                className="mb-6"
              >
                Zion AI Blockchain Analytics
              </FuturisticTextEnhanced>
              
              <p className="text-xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
                Advanced AI-powered blockchain analytics platform that provides real-time insights, 
                risk assessment, and compliance reporting for cryptocurrency and DeFi protocols. 
                Monitor 50+ blockchain networks with intelligent threat detection.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
                <FuturisticButtonEnhanced
                  href="#pricing"
                  variant="primary"
                  size="lg"
                  icon={BarChart3}
                  iconPosition="left"
                  glowColor="cyan"
                  neon={true}
                  animated={true}
                >
                  Start Free Trial
                </FuturisticButtonEnhanced>
                <FuturisticButtonEnhanced
                  href="#demo"
                  variant="outline"
                  size="lg"
                  icon={ArrowRight}
                  iconPosition="right"
                  glowColor="purple"
                  neon={true}
                  animated={true}
                >
                  View Demo
                </FuturisticButtonEnhanced>
              </div>
              
              {/* Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center group">
                    <div className="w-12 h-12 md:w-16 md:h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      {stat.icon}
                    </div>
                    <div className="text-xl md:text-2xl font-bold text-white mb-2">{stat.number}</div>
                    <div className="text-gray-300 text-xs md:text-sm">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Advanced AI Analytics
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Leverage cutting-edge artificial intelligence to gain deep insights into blockchain 
                activities, detect threats, and optimize your crypto operations.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <FuturisticCardEnhanced
                  key={index}
                  glowColor={index % 2 === 0 ? 'cyan' : 'purple'}
                  hoverEffect={true}
                  animated={true}
                  neon={true}
                  className="h-full"
                >
                  <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${feature.color} flex items-center justify-center mb-4`}>
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-gray-300 leading-relaxed">
                    {feature.description}
                  </p>
                </FuturisticCardEnhanced>
              ))}
            </div>
          </div>
        </section>

        {/* Supported Chains Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800/50 to-purple-800/50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Support for 50+ Blockchain Networks
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Monitor and analyze transactions across all major blockchain networks 
                and DeFi protocols from a single dashboard.
              </p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-6">
              {supportedChains.map((chain, index) => (
                <FuturisticCardEnhanced
                  key={index}
                  glowColor="cyan"
                  hoverEffect={true}
                  animated={true}
                  neon={true}
                  className="text-center p-4"
                >
                  <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${chain.color} flex items-center justify-center mx-auto mb-3 text-white font-bold`}>
                    {chain.icon}
                  </div>
                  <h3 className="text-sm font-semibold text-white">
                    {chain.name}
                  </h3>
                </FuturisticCardEnhanced>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section id="pricing" className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Choose Your Analytics Plan
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Start monitoring your blockchain activities today. All plans include our core AI features 
                and 30-day money-back guarantee.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pricingPlans.map((plan, index) => (
                <FuturisticCardEnhanced
                  key={index}
                  glowColor={plan.popular ? 'cyan' : 'purple'}
                  hoverEffect={true}
                  animated={true}
                  neon={true}
                  className={`relative ${plan.popular ? 'ring-2 ring-cyan-500/50' : ''}`}
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
                    <div className="flex items-baseline justify-center mb-2">
                      <span className="text-4xl font-bold text-white">{plan.price}</span>
                      <span className="text-gray-300 ml-1">{plan.period}</span>
                    </div>
                    <p className="text-gray-300">{plan.description}</p>
                  </div>
                  
                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center">
                        <CheckCircle className="w-5 h-5 text-cyan-400 mr-3 flex-shrink-0" />
                        <span className="text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <FuturisticButtonEnhanced
                    href="/contact"
                    variant={plan.popular ? "primary" : "outline"}
                    size="lg"
                    className="w-full"
                    glowColor={plan.popular ? "cyan" : "purple"}
                    neon={true}
                    animated={true}
                  >
                    Get Started
                  </FuturisticButtonEnhanced>
                </FuturisticCardEnhanced>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800/50 to-purple-800/50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Trusted by Crypto Professionals
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                See what our users say about Zion AI Blockchain Analytics
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <FuturisticCardEnhanced
                  key={index}
                  glowColor="cyan"
                  hoverEffect={true}
                  animated={true}
                  neon={true}
                  className="h-full"
                >
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-300 mb-6 italic leading-relaxed">
                    "{testimonial.content}"
                  </p>
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full flex items-center justify-center text-white font-semibold mr-3">
                      {testimonial.avatar}
                    </div>
                    <div>
                      <div className="font-semibold text-white">{testimonial.name}</div>
                      <div className="text-sm text-gray-400">{testimonial.role}, {testimonial.company}</div>
                    </div>
                  </div>
                </FuturisticCardEnhanced>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-cyan-900/30 to-purple-900/30">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Master Blockchain Analytics?
            </h2>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Join thousands of crypto professionals already using AI to gain insights and 
              protect their investments. Start your free trial today.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <FuturisticButtonEnhanced
                href="/contact"
                variant="primary"
                size="lg"
                icon={ArrowRight}
                iconPosition="right"
                glowColor="cyan"
                neon={true}
                animated={true}
              >
                Start Free Trial
              </FuturisticButtonEnhanced>
              <FuturisticButtonEnhanced
                href="/demo"
                variant="outline"
                size="lg"
                icon={BarChart3}
                iconPosition="left"
                glowColor="purple"
                neon={true}
                animated={true}
              >
                View Demo
              </FuturisticButtonEnhanced>
            </div>
          </div>
        </section>
      </main>
    </FuturisticBackgroundEnhanced>
  );
};

export default ZionAIBlockchainAnalyticsPage;