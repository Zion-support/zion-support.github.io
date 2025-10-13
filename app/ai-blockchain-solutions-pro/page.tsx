import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { 
  Shield, 
  Zap, 
  BarChart3, 
  Lock, 
  Globe, 
  ArrowRight, 
  CheckCircle, 
  Star,
  Users,
  Award,
  Clock,
  Mail,
  Phone,
  MapPin,
  Database,
  Cpu,
  Smartphone,
  TrendingUp
} from 'lucide-react';

export default function AIBlockchainSolutionsPro() {
  const features = [
    {
      title: "AI-Powered Smart Contracts",
      description: "Intelligent smart contracts that adapt and optimize based on real-time data and market conditions.",
      icon: <Shield className="w-8 h-8" />,
      benefits: ["Self-optimizing contracts", "Real-time adaptation", "Risk mitigation", "Automated execution"]
    },
    {
      title: "Decentralized AI Networks",
      description: "Distributed AI computing networks that ensure privacy, security, and scalability for AI applications.",
      icon: <Globe className="w-8 h-8" />,
      benefits: ["Privacy-preserving AI", "Distributed computing", "Scalable infrastructure", "Cost efficiency"]
    },
    {
      title: "Blockchain Analytics AI",
      description: "Advanced AI algorithms for blockchain data analysis, fraud detection, and market prediction.",
      icon: <BarChart3 className="w-8 h-8" />,
      benefits: ["Real-time analysis", "Fraud detection", "Market prediction", "Risk assessment"]
    },
    {
      title: "AI-Driven DeFi Protocols",
      description: "Decentralized finance protocols enhanced with AI for automated trading, lending, and yield optimization.",
      icon: <TrendingUp className="w-8 h-8" />,
      benefits: ["Automated trading", "Yield optimization", "Risk management", "Liquidity provision"]
    }
  ];

  const solutions = [
    {
      category: "Enterprise Blockchain",
      services: [
        "Supply chain traceability",
        "Digital identity management",
        "Smart contract auditing",
        "Cross-chain interoperability"
      ],
      pricing: "Starting at $5,999/month"
    },
    {
      category: "DeFi Solutions",
      services: [
        "Automated market makers",
        "Lending protocols",
        "Yield farming strategies",
        "Liquidity management"
      ],
      pricing: "Starting at $3,999/month"
    },
    {
      category: "NFT & Metaverse",
      services: [
        "NFT marketplace development",
        "Metaverse integration",
        "Digital asset management",
        "Virtual economy design"
      ],
      pricing: "Starting at $2,999/month"
    },
    {
      category: "Web3 Applications",
      services: [
        "dApp development",
        "Wallet integration",
        "Token economics",
        "Governance systems"
      ],
      pricing: "Starting at $4,999/month"
    }
  ];

  const pricingTiers = [
    {
      name: "Blockchain Starter",
      price: "$2,999",
      period: "month",
      description: "Perfect for small projects exploring blockchain technology",
      features: [
        "Basic smart contract development",
        "Ethereum/Polygon integration",
        "Standard security auditing",
        "API access",
        "Email support"
      ],
      popular: false
    },
    {
      name: "Blockchain Professional",
      price: "$7,999",
      period: "month",
      description: "Ideal for growing businesses with complex blockchain needs",
      features: [
        "Advanced smart contract development",
        "Multi-chain integration",
        "AI-powered analytics",
        "Custom DeFi protocols",
        "Priority support",
        "Security monitoring"
      ],
      popular: true
    },
    {
      name: "Blockchain Enterprise",
      price: "Custom",
      period: "pricing",
      description: "Tailored solutions for large-scale blockchain implementations",
      features: [
        "Custom blockchain development",
        "Private blockchain networks",
        "AI-driven optimization",
        "White-label solutions",
        "Dedicated support team",
        "Training & certification"
      ],
      popular: false
    }
  ];

  const stats = [
    { number: "500+", label: "Smart Contracts Deployed", icon: <Shield className="w-6 h-6" /> },
    { number: "99.9%", label: "Security Audit Score", icon: <Lock className="w-6 h-6" /> },
    { number: "50+", label: "Blockchain Networks", icon: <Globe className="w-6 h-6" /> },
    { number: "24/7", label: "AI Monitoring", icon: <Cpu className="w-6 h-6" /> }
  ];

  return (
    <>
      <Helmet>
        <title>AI Blockchain Solutions Pro - Zion Tech Group | Advanced Blockchain AI</title>
        <meta
          name="description"
          content="Revolutionary AI-powered blockchain solutions including smart contracts, DeFi protocols, NFT marketplaces, and Web3 applications. Transform your business with blockchain AI."
        />
        <meta
          name="keywords"
          content="blockchain AI, smart contracts, DeFi, NFT, Web3, cryptocurrency, blockchain development, decentralized applications, blockchain analytics, AI blockchain"
        />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "AI Blockchain Solutions Pro",
            "description": "Revolutionary AI-powered blockchain solutions including smart contracts, DeFi protocols, NFT marketplaces, and Web3 applications",
            "provider": {
              "@type": "Organization",
              "name": "Zion Tech Group",
              "url": "https://ziontechgroup.com"
            },
            "offers": {
              "@type": "Offer",
              "price": "2999",
              "priceCurrency": "USD",
              "priceSpecification": {
                "@type": "PriceSpecification",
                "price": "2999",
                "priceCurrency": "USD",
                "billingIncrement": "P1M"
              }
            }
          })}
        </script>
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-pink-500/10 animate-pulse"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.3),transparent_50%)]"></div>
        
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-7xl mx-auto text-center">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 mb-6">
              <Shield className="w-4 h-4 text-cyan-400 mr-2" />
              <span className="text-cyan-400 text-sm font-medium">Advanced Blockchain AI</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 relative">
              AI Blockchain Solutions
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 animate-pulse">
                {" "}Pro
              </span>
              <div className="absolute -inset-1 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 rounded-lg blur opacity-30 animate-pulse"></div>
            </h1>
            
            <p className="text-xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
              Revolutionize your business with AI-powered blockchain solutions. From intelligent smart contracts 
              to decentralized AI networks, we provide cutting-edge blockchain technology enhanced with artificial intelligence.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Link
                to="/contact"
                className="group bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center shadow-lg hover:shadow-cyan-500/25 hover:scale-105"
              >
                Start Blockchain Journey
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/demo"
                className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 hover:scale-105"
              >
                View Live Demo
              </Link>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
              {stats.map((stat, index) => (
                <div key={index} className="text-center group">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    {stat.icon}
                  </div>
                  <div className="text-2xl md:text-3xl font-bold text-white mb-2">{stat.number}</div>
                  <div className="text-gray-300 text-sm">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
                  AI Blockchain Capabilities
                </span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Discover the revolutionary capabilities of AI-enhanced blockchain technology
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="group bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10 relative overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  <div className="relative z-10">
                    <div className="w-16 h-16 rounded-lg bg-gradient-to-r from-cyan-500 to-purple-600 flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform duration-300 shadow-lg">
                      {feature.icon}
                    </div>
                    
                    <h3 className="text-2xl font-semibold text-white mb-4 text-center group-hover:text-cyan-300 transition-colors">
                      {feature.title}
                    </h3>
                    
                    <p className="text-gray-300 text-center mb-6 leading-relaxed">
                      {feature.description}
                    </p>
                    
                    <div className="grid grid-cols-2 gap-2">
                      {feature.benefits.map((benefit, idx) => (
                        <div key={idx} className="flex items-center text-sm text-cyan-300">
                          <CheckCircle className="w-4 h-4 mr-2 text-green-400" />
                          {benefit}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Solutions Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800/50 to-purple-800/50 relative z-10">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Blockchain Solutions
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Comprehensive blockchain solutions for every business need
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {solutions.map((solution, index) => (
                <div
                  key={index}
                  className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 group"
                >
                  <h3 className="text-xl font-semibold text-white mb-4 group-hover:text-cyan-300 transition-colors">
                    {solution.category}
                  </h3>
                  
                  <div className="space-y-3 mb-6">
                    {solution.services.map((service, idx) => (
                      <div key={idx} className="flex items-center text-sm text-gray-300">
                        <Zap className="w-3 h-3 mr-2 text-cyan-400" />
                        {service}
                      </div>
                    ))}
                  </div>
                  
                  <div className="text-center">
                    <div className="text-cyan-400 font-bold text-lg">{solution.pricing}</div>
                    <div className="text-gray-400 text-sm">Starting Price</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Blockchain AI Plans
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Choose the perfect blockchain AI solution for your business needs
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pricingTiers.map((tier, index) => (
                <div
                  key={index}
                  className={`relative bg-white/10 backdrop-blur-sm rounded-xl p-8 border transition-all duration-300 hover:scale-105 hover:shadow-2xl ${
                    tier.popular 
                      ? 'border-cyan-500/50 shadow-cyan-500/20 bg-gradient-to-br from-cyan-500/10 to-purple-500/10' 
                      : 'border-white/20 hover:border-cyan-500/30'
                  }`}
                >
                  {tier.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <div className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-semibold flex items-center">
                        <Star className="w-4 h-4 mr-1" />
                        Most Popular
                      </div>
                    </div>
                  )}
                  
                  <div className="text-center mb-6">
                    <h3 className="text-2xl font-bold text-white mb-2">{tier.name}</h3>
                    <p className="text-gray-300 mb-4">{tier.description}</p>
                    <div className="text-4xl font-bold text-cyan-400 mb-2">
                      {tier.price}
                      <span className="text-lg text-gray-400">/{tier.period}</span>
                    </div>
                  </div>
                  
                  <div className="space-y-4 mb-8">
                    {tier.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center text-gray-300">
                        <CheckCircle className="w-5 h-5 mr-3 text-green-400 flex-shrink-0" />
                        {feature}
                      </div>
                    ))}
                  </div>
                  
                  <Link
                    to="/contact"
                    className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center group ${
                      tier.popular
                        ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white hover:from-cyan-600 hover:to-purple-700 shadow-lg hover:shadow-cyan-500/25'
                        : 'border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900'
                    }`}
                  >
                    Get Started
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-cyan-900/30 to-purple-900/30 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              Ready to Transform with Blockchain AI?
            </h2>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Join the blockchain revolution and transform your business with AI-powered blockchain solutions. 
              Contact our blockchain experts today for a personalized consultation.
            </p>
            
            {/* Contact Information */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="text-center">
                <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-white font-semibold mb-2">Email</h3>
                <p className="text-cyan-400">kleber@ziontechgroup.com</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-white font-semibold mb-2">Phone</h3>
                <p className="text-cyan-400">+1 302 464 0950</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-white font-semibold mb-2">Address</h3>
                <p className="text-cyan-400 text-sm">364 E Main St STE 1008<br />Middletown DE 19709</p>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="group bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center shadow-lg hover:shadow-cyan-500/25 hover:scale-105"
              >
                Start Blockchain Journey
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/demo"
                className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 group hover:scale-105"
              >
                Schedule Demo
                <Globe className="w-5 h-5 ml-2 group-hover:rotate-12 transition-transform" />
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}