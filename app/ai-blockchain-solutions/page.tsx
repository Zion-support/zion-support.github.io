import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Shield, Zap, Brain, BarChart3, Lock, Globe, ArrowRight, CheckCircle, Star, Users, Award, Database } from 'lucide-react';
import { Link } from 'react-router-dom';
import ResponsiveContainer from '../components/ResponsiveContainer';
import FuturisticCard from '../components/FuturisticCard';
import FuturisticButton from '../components/FuturisticButton';

const AIBlockchainSolutionsPage = () => {
  const features = [
    {
      title: "Smart Contract AI",
      description: "AI-powered smart contracts that can adapt, learn, and optimize based on real-world conditions and user behavior",
      icon: <Brain className="w-8 h-8" />,
      benefits: ["Self-optimizing contracts", "AI decision making", "Adaptive logic"]
    },
    {
      title: "Blockchain Analytics",
      description: "Advanced AI algorithms for analyzing blockchain transactions, detecting fraud, and identifying patterns",
      icon: <BarChart3 className="w-8 h-8" />,
      benefits: ["Fraud detection", "Pattern analysis", "Risk assessment"]
    },
    {
      title: "Decentralized AI Networks",
      description: "Distributed AI computing networks that leverage blockchain for secure, decentralized machine learning",
      icon: <Globe className="w-8 h-8" />,
      benefits: ["Decentralized computing", "Secure AI training", "Global network"]
    },
    {
      title: "Crypto Security AI",
      description: "AI-powered security systems for cryptocurrency wallets, exchanges, and blockchain applications",
      icon: <Shield className="w-8 h-8" />,
      benefits: ["Advanced threat detection", "Real-time monitoring", "Automated response"]
    }
  ];

  const pricing = [
    {
      name: "Blockchain Starter",
      price: "$1,999",
      period: "per month",
      description: "Basic AI blockchain solutions for small projects",
      features: [
        "Smart contract development",
        "Basic analytics",
        "Standard security",
        "Email support"
      ],
      popular: false
    },
    {
      name: "Blockchain Professional",
      price: "$7,999",
      period: "per month",
      description: "Advanced AI blockchain for enterprise applications",
      features: [
        "Advanced smart contracts",
        "AI analytics suite",
        "Enhanced security",
        "Priority support",
        "API access"
      ],
      popular: true
    },
    {
      name: "Blockchain Enterprise",
      price: "Custom",
      period: "pricing",
      description: "Complete AI blockchain infrastructure for large organizations",
      features: [
        "Custom blockchain solutions",
        "Full AI integration",
        "Dedicated support team",
        "White-label options",
        "On-premise deployment"
      ],
      popular: false
    }
  ];

  const useCases = [
    {
      title: "DeFi Applications",
      description: "AI-powered decentralized finance solutions with intelligent trading and risk management",
      icon: <BarChart3 className="w-6 h-6" />
    },
    {
      title: "Supply Chain",
      description: "Blockchain-based supply chain tracking with AI-powered optimization and fraud detection",
      icon: <Globe className="w-6 h-6" />
    },
    {
      title: "Digital Identity",
      description: "AI-enhanced digital identity management with blockchain security and privacy",
      icon: <Shield className="w-6 h-6" />
    },
    {
      title: "NFT Marketplaces",
      description: "Intelligent NFT platforms with AI-powered valuation and recommendation systems",
      icon: <Zap className="w-6 h-6" />
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>AI Blockchain Solutions | Zion Tech Group</title>
        <meta name="description" content="Revolutionary AI-powered blockchain solutions. Smart contracts, decentralized AI, blockchain analytics, and crypto security." />
        <meta name="keywords" content="AI blockchain, smart contracts, blockchain AI, DeFi, crypto AI, blockchain analytics, decentralized AI" />
        <link rel="canonical" href="https://ziontechgroup.com/ai-blockchain-solutions" />
      </Helmet>

      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <ResponsiveContainer className="text-center">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-orange-500/20 to-purple-500/20 border border-orange-500/30 mb-6">
            <Shield className="w-4 h-4 text-orange-400 mr-2" />
            <span className="text-orange-400 text-sm font-medium">AI-Powered Blockchain</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-purple-400 to-cyan-400">
              AI Blockchain Solutions
            </span>
          </h1>
          
          <p className="text-lg md:text-xl lg:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
            Combine the power of artificial intelligence with blockchain technology to create 
            secure, intelligent, and decentralized solutions for the future.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <FuturisticButton
              href="/contact"
              variant="primary"
              size="lg"
              icon={<Shield className="w-5 h-5" />}
            >
              Start Building
            </FuturisticButton>
            <FuturisticButton
              href="#features"
              variant="outline"
              size="lg"
              icon={<BarChart3 className="w-5 h-5" />}
            >
              Explore Features
            </FuturisticButton>
          </div>
        </ResponsiveContainer>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-4 sm:px-6 lg:px-8">
        <ResponsiveContainer>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              AI Blockchain Capabilities
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Revolutionary AI-powered blockchain solutions that combine the security of 
              blockchain with the intelligence of artificial intelligence.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <FuturisticCard key={index} className="group">
                <div className="w-16 h-16 rounded-xl bg-gradient-to-r from-orange-500 to-purple-500 flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-4 text-center group-hover:text-orange-400 transition-colors">
                  {feature.title}
                </h3>
                <p className="text-gray-300 text-center mb-6 leading-relaxed">
                  {feature.description}
                </p>
                <div className="space-y-2">
                  {feature.benefits.map((benefit, benefitIndex) => (
                    <div key={benefitIndex} className="flex items-center text-sm text-cyan-400">
                      <CheckCircle className="w-4 h-4 mr-2 flex-shrink-0" />
                      <span>{benefit}</span>
                    </div>
                  ))}
                </div>
              </FuturisticCard>
            ))}
          </div>
        </ResponsiveContainer>
      </section>

      {/* Use Cases Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800/50 to-orange-800/50">
        <ResponsiveContainer>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Blockchain Applications
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Discover how AI blockchain solutions are transforming industries
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {useCases.map((useCase, index) => (
              <div key={index} className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-orange-500 to-purple-500 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  {useCase.icon}
                </div>
                <h3 className="text-lg font-semibold text-white mb-3 group-hover:text-orange-400 transition-colors">
                  {useCase.title}
                </h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  {useCase.description}
                </p>
              </div>
            ))}
          </div>
        </ResponsiveContainer>
      </section>

      {/* Pricing Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <ResponsiveContainer>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Blockchain AI Pricing
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose the perfect AI blockchain solution for your project
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricing.map((plan, index) => (
              <div key={index} className={`relative bg-white/10 backdrop-blur-sm rounded-xl p-8 border transition-all duration-300 hover:scale-105 ${
                plan.popular 
                  ? 'border-orange-500/50 shadow-2xl shadow-orange-500/25' 
                  : 'border-white/20 hover:border-orange-500/30'
              }`}>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-orange-500 to-purple-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <div className="flex items-baseline justify-center mb-2">
                    <span className="text-4xl font-bold text-white">{plan.price}</span>
                    <span className="text-gray-300 ml-2">{plan.period}</span>
                  </div>
                  <p className="text-gray-300 text-sm">{plan.description}</p>
                </div>
                
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <FuturisticButton
                  href="/contact"
                  variant={plan.popular ? "primary" : "outline"}
                  size="lg"
                  className="w-full"
                >
                  Get Started
                </FuturisticButton>
              </div>
            ))}
          </div>
        </ResponsiveContainer>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-orange-900/30 to-purple-900/30">
        <ResponsiveContainer className="text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            Ready to Build the Future?
          </h2>
          <p className="text-xl text-gray-300 mb-8 leading-relaxed max-w-3xl mx-auto">
            Join the AI blockchain revolution and create the next generation of 
            decentralized applications with intelligent capabilities.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <FuturisticButton
              href="/contact"
              variant="primary"
              size="lg"
              icon={<Shield className="w-5 h-5" />}
            >
              Start Building
            </FuturisticButton>
            <FuturisticButton
              href="/it-services"
              variant="outline"
              size="lg"
              icon={<ArrowRight className="w-5 h-5" />}
            >
              Explore IT Services
            </FuturisticButton>
          </div>
        </ResponsiveContainer>
      </section>
    </div>
  );
};

export default AIBlockchainSolutionsPage;