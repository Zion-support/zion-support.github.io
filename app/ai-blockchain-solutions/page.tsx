import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { 
  Shield, 
  Zap, 
  Globe, 
  BarChart3, 
  Sparkles, 
  CheckCircle, 
  ArrowRight,
  Star,
  Clock,
  Users,
  Target,
  Brain,
  Lock,
  Database,
  Cpu
} from 'lucide-react';

const AIBlockchainSolutionsPage = () => {
  const features = [
    {
      title: "AI-Powered Smart Contracts",
      description: "Intelligent smart contracts that adapt and optimize based on real-time data and conditions",
      icon: <Brain className="w-6 h-6" />,
      details: "Self-executing contracts with AI decision-making capabilities"
    },
    {
      title: "Blockchain Analytics & Intelligence",
      description: "Advanced analytics for blockchain transactions, patterns, and security threats",
      icon: <BarChart3 className="w-6 h-6" />,
      details: "Real-time monitoring and analysis of blockchain networks"
    },
    {
      title: "Decentralized AI Networks",
      description: "Distributed AI computing networks powered by blockchain technology",
      icon: <Globe className="w-6 h-6" />,
      details: "Scalable AI processing across decentralized infrastructure"
    },
    {
      title: "NFT Intelligence Platform",
      description: "AI-powered NFT creation, analysis, and trading optimization",
      icon: <Target className="w-6 h-6" />,
      details: "Smart NFT generation and market analysis tools"
    },
    {
      title: "DeFi Risk Management",
      description: "AI-driven risk assessment and management for decentralized finance protocols",
      icon: <Shield className="w-6 h-6" />,
      details: "Automated risk monitoring and mitigation strategies"
    },
    {
      title: "Blockchain Security AI",
      description: "Advanced threat detection and prevention for blockchain networks",
      icon: <Lock className="w-6 h-6" />,
      details: "AI-powered security monitoring and incident response"
    }
  ];

  const pricingPlans = [
    {
      name: "Developer",
      price: "$299",
      period: "/month",
      description: "Perfect for blockchain developers and startups",
      features: [
        "Smart contract templates",
        "Basic analytics dashboard",
        "API access",
        "Email support",
        "Testnet deployment",
        "Documentation"
      ],
      popular: false
    },
    {
      name: "Enterprise",
      price: "$999",
      period: "/month",
      description: "Ideal for established companies and DeFi projects",
      features: [
        "Custom smart contracts",
        "Advanced analytics",
        "AI model training",
        "Priority support",
        "Mainnet deployment",
        "Team collaboration (10 users)",
        "Custom integrations",
        "24/7 monitoring"
      ],
      popular: true
    },
    {
      name: "Institution",
      price: "$2,999",
      period: "/month",
      description: "For large institutions and financial services",
      features: [
        "White-label solutions",
        "Full AI suite",
        "Custom blockchain networks",
        "Dedicated support",
        "Compliance tools",
        "Unlimited users",
        "Advanced security",
        "Dedicated account manager"
      ],
      popular: false
    }
  ];

  const useCases = [
    {
      title: "DeFi Protocols",
      description: "Build and optimize decentralized finance applications with AI-powered features",
      icon: <Zap className="w-8 h-8" />,
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Supply Chain",
      description: "Track and verify products through transparent blockchain networks",
      icon: <Globe className="w-8 h-8" />,
      color: "from-green-500 to-emerald-500"
    },
    {
      title: "Digital Identity",
      description: "Secure, verifiable digital identity solutions for individuals and organizations",
      icon: <Shield className="w-8 h-8" />,
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "Asset Tokenization",
      description: "Convert real-world assets into tradeable digital tokens",
      icon: <Target className="w-8 h-8" />,
      color: "from-orange-500 to-red-500"
    }
  ];

  const stats = [
    { number: "50+", label: "Blockchain Networks", icon: <Globe className="w-6 h-6" /> },
    { number: "99.9%", label: "Uptime SLA", icon: <Shield className="w-6 h-6" /> },
    { number: "1000+", label: "Smart Contracts Deployed", icon: <Brain className="w-6 h-6" /> },
    { number: "24/7", label: "Security Monitoring", icon: <Lock className="w-6 h-6" /> }
  ];

  const benefits = [
    {
      title: "Enhanced Security",
      description: "Leverage blockchain's immutable nature with AI-powered security",
      icon: <Shield className="w-6 h-6" />,
      stat: "99.9% security"
    },
    {
      title: "Cost Efficiency",
      description: "Reduce operational costs through automated smart contracts",
      icon: <Target className="w-6 h-6" />,
      stat: "60% cost reduction"
    },
    {
      title: "Transparency",
      description: "Complete transparency and traceability of all transactions",
      icon: <Globe className="w-6 h-6" />,
      stat: "100% transparent"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>AI Blockchain Solutions - Advanced Blockchain & AI Integration | Zion Tech Group</title>
        <meta name="description" content="Revolutionary AI-powered blockchain solutions including smart contracts, DeFi protocols, and decentralized AI networks. Transform your business with cutting-edge technology." />
        <meta name="keywords" content="AI blockchain, smart contracts, DeFi, decentralized AI, blockchain analytics, NFT intelligence, blockchain security" />
      </Helmet>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 mb-6">
            <Sparkles className="w-4 h-4 text-cyan-400 mr-2" />
            <span className="text-cyan-400 text-sm font-medium">AI-Powered Blockchain Technology</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400">
              AI Blockchain Solutions
            </span>
          </h1>
          
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-8">
            Revolutionize your business with the power of AI and blockchain technology. 
            Build secure, intelligent, and decentralized solutions that transform industries.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center group shadow-lg hover:shadow-cyan-500/25 hover:scale-105"
            >
              Start Your Project
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              to="/demo"
              className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 group hover:scale-105"
            >
              View Case Studies
              <BarChart3 className="w-5 h-5 ml-2 group-hover:scale-110 transition-transform" />
            </Link>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
          {stats.map((stat, index) => (
            <div key={index} className="text-center group">
              <div className="w-16 h-16 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                {stat.icon}
              </div>
              <div className="text-2xl font-bold text-white mb-2">{stat.number}</div>
              <div className="text-gray-300 text-sm">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Benefits */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {benefits.map((benefit, index) => (
            <div key={index} className="text-center group">
              <div className="w-16 h-16 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                {benefit.icon}
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">{benefit.title}</h3>
              <p className="text-gray-300 mb-3">{benefit.description}</p>
              <div className="text-2xl font-bold text-cyan-400">{benefit.stat}</div>
            </div>
          ))}
        </div>

        {/* Features */}
        <div className="mb-20">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
            Advanced AI Blockchain Features
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10">
                <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                  {feature.title}
                </h3>
                <p className="text-gray-300 mb-3">{feature.description}</p>
                <p className="text-sm text-cyan-400">{feature.details}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Use Cases */}
        <div className="mb-20">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
            Industry Applications
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {useCases.map((useCase, index) => (
              <div key={index} className="group text-center">
                <div className={`w-16 h-16 rounded-lg bg-gradient-to-r ${useCase.color} flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  {useCase.icon}
                </div>
                <h3 className="text-lg font-semibold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                  {useCase.title}
                </h3>
                <p className="text-gray-300 text-sm">{useCase.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Pricing */}
        <div className="mb-20">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
            Choose Your Solution
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <div key={index} className={`group bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10 relative ${plan.popular ? 'ring-2 ring-cyan-500' : ''}`}>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-4 py-1 rounded-full text-sm font-semibold flex items-center">
                      <Star className="w-4 h-4 mr-1" />
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <p className="text-gray-300 mb-4">{plan.description}</p>
                  <div className="flex items-baseline justify-center">
                    <span className="text-4xl font-bold text-cyan-400">{plan.price}</span>
                    <span className="text-gray-300 ml-1">{plan.period}</span>
                  </div>
                </div>
                
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-cyan-400 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <Link
                  to="/contact"
                  className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center group ${
                    plan.popular
                      ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white hover:from-cyan-600 hover:to-purple-700 shadow-lg hover:shadow-cyan-500/25'
                      : 'border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900'
                  }`}
                >
                  Get Started
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-cyan-500/10 to-purple-500/10 rounded-xl p-8 border border-cyan-500/20">
            <h2 className="text-3xl font-bold text-white mb-4">
              Ready to Build the Future?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Join the blockchain revolution with AI-powered solutions that are secure, 
              intelligent, and built for the future of decentralized technology.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center group shadow-lg hover:shadow-cyan-500/25 hover:scale-105"
              >
                Start Your Project
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/demo"
                className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 group hover:scale-105"
              >
                View Case Studies
                <BarChart3 className="w-5 h-5 ml-2 group-hover:scale-110 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AIBlockchainSolutionsPage;