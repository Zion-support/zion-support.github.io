import React from 'react';
import { ArrowRight, CheckCircle, Star, Shield, TrendingUp, Database, Zap, Globe, Users, Clock, Award, Sparkles, BarChart3, Lock, Cpu, Network } from 'lucide-react';
import EnhancedSEO from '../components/EnhancedSEO';
import FuturisticBackground from '../components/FuturisticBackground';
import FuturisticCard from '../components/FuturisticCard';
import FuturisticButton from '../components/FuturisticButton';

const ZionAIBlockchainAnalyticsPro: React.FC = () => {
  const features = [
    {
      title: "Real-time Blockchain Monitoring",
      description: "Monitor all major blockchains with sub-second latency and comprehensive transaction tracking",
      icon: <Network className="w-6 h-6" />,
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "AI-Powered Risk Assessment",
      description: "Advanced machine learning models to detect suspicious activities and predict market risks",
      icon: <Shield className="w-6 h-6" />,
      color: "from-red-500 to-pink-500"
    },
    {
      title: "DeFi Protocol Analysis",
      description: "Comprehensive analysis of DeFi protocols, yield farming opportunities, and liquidity pools",
      icon: <TrendingUp className="w-6 h-6" />,
      color: "from-green-500 to-emerald-500"
    },
    {
      title: "Smart Contract Auditing",
      description: "Automated smart contract vulnerability detection and security analysis",
      icon: <Lock className="w-6 h-6" />,
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "Cross-Chain Analytics",
      description: "Unified view across multiple blockchains with bridge monitoring and cross-chain transactions",
      icon: <Globe className="w-6 h-6" />,
      color: "from-orange-500 to-red-500"
    },
    {
      title: "NFT Market Intelligence",
      description: "Advanced NFT analytics including floor prices, rarity scores, and market trends",
      icon: <BarChart3 className="w-6 h-6" />,
      color: "from-yellow-500 to-amber-500"
    }
  ];

  const useCases = [
    {
      title: "Crypto Trading Firms",
      description: "Advanced analytics for high-frequency trading, arbitrage opportunities, and market making strategies",
      icon: <TrendingUp className="w-8 h-8" />,
      benefits: ["Increase trading profits by 35%", "Reduce risk exposure", "Real-time market insights"]
    },
    {
      title: "DeFi Protocols",
      description: "Monitor protocol health, TVL changes, and user behavior for optimal protocol management",
      icon: <Database className="w-8 h-8" />,
      benefits: ["Optimize protocol parameters", "Prevent exploits", "Improve user experience"]
    },
    {
      title: "Investment Funds",
      description: "Comprehensive portfolio tracking, risk management, and due diligence for crypto investments",
      icon: <BarChart3 className="w-8 h-8" />,
      benefits: ["Better investment decisions", "Risk mitigation", "Performance optimization"]
    },
    {
      title: "Regulatory Compliance",
      description: "Automated compliance monitoring, transaction reporting, and regulatory risk assessment",
      icon: <Shield className="w-8 h-8" />,
      benefits: ["Ensure compliance", "Reduce regulatory risk", "Automated reporting"]
    }
  ];

  const pricing = [
    {
      name: "Starter",
      price: "$299",
      period: "/month",
      description: "Perfect for small crypto projects and individual traders",
      features: [
        "Up to 5 blockchain networks",
        "Basic analytics dashboard",
        "Standard API access",
        "Email support",
        "Historical data (30 days)"
      ],
      popular: false
    },
    {
      name: "Professional",
      price: "$799",
      period: "/month",
      description: "Ideal for growing crypto businesses and trading firms",
      features: [
        "Up to 20 blockchain networks",
        "Advanced AI analytics",
        "Real-time alerts & notifications",
        "Priority support",
        "Historical data (1 year)",
        "Custom dashboards",
        "API rate limits: 10,000/hour"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: "$1,999",
      period: "/month",
      description: "For large institutions and crypto exchanges",
      features: [
        "Unlimited blockchain networks",
        "Custom AI model training",
        "White-label solutions",
        "24/7 dedicated support",
        "Unlimited historical data",
        "Custom integrations",
        "SLA guarantees",
        "On-premise deployment"
      ],
      popular: false
    }
  ];

  const testimonials = [
    {
      name: "Alex Chen",
      company: "CryptoFlow Capital",
      role: "Portfolio Manager",
      content: "Zion AI Blockchain Analytics Pro has transformed our trading operations. We've increased our alpha by 40% and significantly reduced our risk exposure through their advanced analytics.",
      rating: 5,
      avatar: "AC"
    },
    {
      name: "Sarah Martinez",
      company: "DeFi Innovations",
      role: "CTO",
      content: "The smart contract auditing features are incredible. We've prevented multiple potential exploits and our protocol security has improved dramatically.",
      rating: 5,
      avatar: "SM"
    },
    {
      name: "Dr. James Wilson",
      company: "Blockchain Research Institute",
      role: "Research Director",
      content: "This platform provides the most comprehensive blockchain analytics I've seen. The AI-powered insights have revolutionized our research capabilities.",
      rating: 5,
      avatar: "JW"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
      <FuturisticBackground />
      <EnhancedSEO
        title="Zion AI Blockchain Analytics Pro - Advanced Crypto Intelligence | Zion Tech Group"
        description="Revolutionary blockchain analytics platform with AI-powered insights, real-time monitoring, and comprehensive DeFi analysis. Transform your crypto operations with cutting-edge intelligence."
        keywords="blockchain analytics, crypto intelligence, DeFi analytics, smart contract auditing, NFT analytics, crypto trading, blockchain monitoring, cryptocurrency analysis"
        canonical="https://ziontechgroup.com/zion-ai-blockchain-analytics-pro"
      />

      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-7xl mx-auto text-center">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 mb-6">
            <Sparkles className="w-4 h-4 text-cyan-400 mr-2" />
            <span className="text-cyan-400 text-sm font-medium">#1 Blockchain Analytics Platform 2024</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400">
              Zion AI Blockchain Analytics Pro
            </span>
          </h1>
          
          <p className="text-lg md:text-xl lg:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
            Revolutionary blockchain intelligence platform with AI-powered analytics, real-time monitoring, 
            and comprehensive DeFi analysis. Transform your crypto operations with cutting-edge insights.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <FuturisticButton
              href="/contact"
              variant="primary"
              size="lg"
              icon={<ArrowRight className="w-5 h-5" />}
            >
              Start Free Trial
            </FuturisticButton>
            <FuturisticButton
              href="/demo"
              variant="outline"
              size="lg"
              icon={<BarChart3 className="w-5 h-5" />}
            >
              View Demo
            </FuturisticButton>
          </div>
          
          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            <div className="text-center group">
              <div className="w-12 h-12 md:w-16 md:h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <Network className="w-6 h-6 text-cyan-400" />
              </div>
              <div className="text-xl md:text-2xl lg:text-3xl font-bold text-white mb-2">50+</div>
              <div className="text-gray-300 text-xs md:text-sm">Blockchains</div>
            </div>
            <div className="text-center group">
              <div className="w-12 h-12 md:w-16 md:h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <Zap className="w-6 h-6 text-cyan-400" />
              </div>
              <div className="text-xl md:text-2xl lg:text-3xl font-bold text-white mb-2">&lt;100ms</div>
              <div className="text-gray-300 text-xs md:text-sm">Latency</div>
            </div>
            <div className="text-center group">
              <div className="w-12 h-12 md:w-16 md:h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <Shield className="w-6 h-6 text-cyan-400" />
              </div>
              <div className="text-xl md:text-2xl lg:text-3xl font-bold text-white mb-2">99.9%</div>
              <div className="text-gray-300 text-xs md:text-sm">Accuracy</div>
            </div>
            <div className="text-center group">
              <div className="w-12 h-12 md:w-16 md:h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <Cpu className="w-6 h-6 text-cyan-400" />
              </div>
              <div className="text-xl md:text-2xl lg:text-3xl font-bold text-white mb-2">24/7</div>
              <div className="text-gray-300 text-xs md:text-sm">AI Monitoring</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              Advanced Blockchain Intelligence
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Cutting-edge blockchain analytics technology designed to provide comprehensive insights, 
              real-time monitoring, and AI-powered intelligence for the crypto ecosystem.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <FuturisticCard
                key={index}
                className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10"
              >
                <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${feature.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-cyan-300 transition-colors">
                  {feature.title}
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  {feature.description}
                </p>
              </FuturisticCard>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800/50 to-purple-800/50 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Transform Your Crypto Operations
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Discover how Zion AI Blockchain Analytics Pro can revolutionize your crypto business across multiple use cases and industries.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {useCases.map((useCase, index) => (
              <FuturisticCard
                key={index}
                className="group bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10"
              >
                <div className="flex items-start space-x-4">
                  <div className="w-16 h-16 rounded-lg bg-gradient-to-r from-cyan-500 to-purple-600 flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300 flex-shrink-0">
                    {useCase.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-cyan-300 transition-colors">
                      {useCase.title}
                    </h3>
                    <p className="text-gray-300 mb-4 leading-relaxed">
                      {useCase.description}
                    </p>
                    <ul className="space-y-2">
                      {useCase.benefits.map((benefit, idx) => (
                        <li key={idx} className="flex items-center text-sm text-gray-300">
                          <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                          <span>{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </FuturisticCard>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Choose Your Plan
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Flexible pricing options designed to scale with your crypto operations. Start with a free trial and upgrade as you grow.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricing.map((plan, index) => (
              <FuturisticCard
                key={index}
                className={`relative bg-white/10 backdrop-blur-sm rounded-xl p-8 border transition-all duration-300 hover:scale-105 hover:shadow-2xl ${
                  plan.popular 
                    ? 'border-cyan-500/50 hover:shadow-cyan-500/25' 
                    : 'border-white/20 hover:border-white/40'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <p className="text-gray-300 text-sm mb-4">{plan.description}</p>
                  <div className="flex items-baseline justify-center">
                    <span className="text-4xl font-bold text-white">{plan.price}</span>
                    <span className="text-gray-300 ml-1">{plan.period}</span>
                  </div>
                </div>
                
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <FuturisticButton
                  href="/contact"
                  variant={plan.popular ? "primary" : "outline"}
                  size="lg"
                  className="w-full"
                >
                  {plan.popular ? 'Start Free Trial' : 'Get Started'}
                </FuturisticButton>
              </FuturisticCard>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Trusted by Crypto Leaders
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              See what our clients say about Zion AI Blockchain Analytics Pro
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <FuturisticCard
                key={index}
                className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10"
              >
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-300 mb-4 italic leading-relaxed">"{testimonial.content}"</p>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-sm mr-3">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <div className="font-semibold text-white">{testimonial.name}</div>
                    <div className="text-sm text-gray-400">{testimonial.role}, {testimonial.company}</div>
                  </div>
                </div>
              </FuturisticCard>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-cyan-900/30 to-purple-900/30 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            Ready to Master Blockchain Intelligence?
          </h2>
          <p className="text-xl text-gray-300 mb-8 leading-relaxed">
            Join thousands of crypto professionals already using Zion AI Blockchain Analytics Pro to gain competitive advantage and maximize their crypto operations. 
            Start your free trial today - no credit card required.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <FuturisticButton
              href="/contact"
              variant="primary"
              size="lg"
              icon={<ArrowRight className="w-5 h-5" />}
            >
              Start Free Trial
            </FuturisticButton>
            <FuturisticButton
              href="/demo"
              variant="outline"
              size="lg"
              icon={<BarChart3 className="w-5 h-5" />}
            >
              View Demo
            </FuturisticButton>
          </div>
          
          <div className="mt-8 text-sm text-gray-400">
            <p>Questions? Contact us at <a href="mailto:kleber@ziontechgroup.com" className="text-cyan-400 hover:text-cyan-300">kleber@ziontechgroup.com</a> or call <a href="tel:+13024640950" className="text-cyan-400 hover:text-cyan-300">+1 302 464 0950</a></p>
            <p className="mt-2">Address: 364 E Main St STE 1008, Middletown DE 19709</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ZionAIBlockchainAnalyticsPro;
