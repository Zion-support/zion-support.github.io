import { Helmet } from "react-helmet-async";
import { ArrowRight, Shield, Zap, Brain, Globe, Lock, Code, BarChart3, Users, Smartphone, Database, Link as LinkIcon } from "lucide-react";
import { Link } from "react-router-dom";

export default function AIBlockchainSmartContracts() {
  const features = [
    {
      title: "AI-Powered Contract Generation",
      description: "Automatically generate smart contracts using natural language descriptions",
      icon: <Brain className="w-6 h-6" />,
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Security Auditing",
      description: "AI-driven vulnerability detection and security analysis",
      icon: <Shield className="w-6 h-6" />,
      color: "from-red-500 to-pink-500"
    },
    {
      title: "Gas Optimization",
      description: "Intelligent gas fee optimization for cost-effective transactions",
      icon: <Zap className="w-6 h-6" />,
      color: "from-yellow-500 to-orange-500"
    },
    {
      title: "Multi-Chain Support",
      description: "Deploy across Ethereum, Polygon, BSC, and other major blockchains",
      icon: <Globe className="w-6 h-6" />,
      color: "from-green-500 to-emerald-500"
    }
  ];

  const useCases = [
    {
      title: "DeFi Protocols",
      description: "Build decentralized finance applications with AI-optimized smart contracts",
      icon: <BarChart3 className="w-8 h-8" />,
      benefits: ["Automated trading", "Yield farming", "Liquidity pools", "Risk management"]
    },
    {
      title: "NFT Marketplaces",
      description: "Create intelligent NFT platforms with advanced trading features",
      icon: <Smartphone className="w-8 h-8" />,
      benefits: ["Dynamic pricing", "Royalty management", "Batch operations", "Metadata handling"]
    },
    {
      title: "Supply Chain",
      description: "Track and verify products through transparent blockchain records",
      icon: <LinkIcon className="w-8 h-8" />,
      benefits: ["Product tracking", "Quality assurance", "Transparency", "Compliance"]
    },
    {
      title: "DAO Governance",
      description: "Implement decentralized autonomous organizations with voting mechanisms",
      icon: <Users className="w-8 h-8" />,
      benefits: ["Voting systems", "Proposal management", "Treasury control", "Community governance"]
    }
  ];

  const pricing = [
    {
      name: "Developer",
      price: "$199/month",
      description: "Perfect for individual developers",
      features: [
        "Up to 10 smart contracts/month",
        "Basic AI contract generation",
        "Ethereum & Polygon support",
        "Community support",
        "Standard security audit"
      ],
      popular: false
    },
    {
      name: "Startup",
      price: "$599/month",
      description: "Ideal for growing blockchain projects",
      features: [
        "Up to 50 smart contracts/month",
        "Advanced AI features",
        "Multi-chain deployment",
        "Priority support",
        "Enhanced security audit",
        "Gas optimization",
        "Custom templates"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: "Custom",
      description: "For large-scale blockchain operations",
      features: [
        "Unlimited smart contracts",
        "Full AI customization",
        "All blockchain networks",
        "24/7 dedicated support",
        "Comprehensive security audit",
        "White-label solutions",
        "On-premise deployment",
        "Custom integrations"
      ],
      popular: false
    }
  ];

  const technologies = [
    { name: "Solidity", icon: "⚡" },
    { name: "Rust", icon: "🦀" },
    { name: "Vyper", icon: "🐍" },
    { name: "Web3.js", icon: "🌐" },
    { name: "Hardhat", icon: "🔨" },
    { name: "Truffle", icon: "🍀" },
    { name: "OpenZeppelin", icon: "🛡️" },
    { name: "Chainlink", icon: "🔗" }
  ];

  return (
    <>
      <Helmet>
        <title>AI Blockchain Smart Contracts - Zion Tech Group | Intelligent Blockchain Solutions</title>
        <meta
          name="description"
          content="Revolutionary AI-powered smart contract development platform. Generate, audit, and deploy secure smart contracts across multiple blockchains with advanced AI assistance."
        />
        <meta
          name="keywords"
          content="AI smart contracts, blockchain development, DeFi, NFT, DAO, smart contract audit, gas optimization, multi-chain deployment, Web3 development"
        />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-pink-500/10 animate-pulse"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.3),transparent_50%)]"></div>
        
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-7xl mx-auto text-center">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 mb-6">
              <Code className="w-4 h-4 text-cyan-400 mr-2" />
              <span className="text-cyan-400 text-sm font-medium">Next-Gen Blockchain Development</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              AI Blockchain
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 animate-pulse">
                {" "}Smart Contracts
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
              Revolutionize blockchain development with our AI-powered smart contract platform. 
              Generate, audit, and deploy secure contracts across multiple blockchains with intelligent automation.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center group shadow-lg hover:shadow-cyan-500/25 hover:scale-105"
              >
                Start Building
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/demo"
                className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 group hover:scale-105"
              >
                View Demo
                <Code className="w-5 h-5 ml-2 group-hover:scale-110 transition-transform" />
              </Link>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                AI-Powered Smart Contract Features
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Leverage cutting-edge AI technology to build, audit, and deploy secure smart contracts 
                with unprecedented efficiency and reliability.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10"
                >
                  <div
                    className={`w-16 h-16 rounded-lg bg-gradient-to-r ${feature.color} flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform duration-300`}
                  >
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3 text-center group-hover:text-cyan-300 transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-gray-300 text-center leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Use Cases Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800/50 to-purple-800/50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Build the Future of Web3
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Create innovative blockchain applications across various industries with our AI-powered platform.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {useCases.map((useCase, index) => (
                <div
                  key={index}
                  className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105"
                >
                  <div className="w-16 h-16 rounded-lg bg-gradient-to-r from-purple-500 to-cyan-500 flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform">
                    {useCase.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-3 text-center group-hover:text-cyan-300 transition-colors">
                    {useCase.title}
                  </h3>
                  <p className="text-gray-300 text-center mb-4 leading-relaxed">
                    {useCase.description}
                  </p>
                  <ul className="space-y-2">
                    {useCase.benefits.map((benefit, idx) => (
                      <li key={idx} className="text-sm text-cyan-300 flex items-center">
                        <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full mr-2"></div>
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Technologies Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Supported Technologies
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Work with the most popular blockchain technologies and frameworks.
              </p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-6">
              {technologies.map((tech, index) => (
                <div
                  key={index}
                  className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 text-center"
                >
                  <div className="text-4xl mb-2">{tech.icon}</div>
                  <div className="text-white font-medium group-hover:text-cyan-300 transition-colors">
                    {tech.name}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800/50 to-purple-800/50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Choose Your Development Plan
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Flexible pricing options designed for developers and enterprises of all sizes.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pricing.map((plan, index) => (
                <div
                  key={index}
                  className={`group bg-white/10 backdrop-blur-sm rounded-xl p-8 border transition-all duration-300 hover:scale-105 relative ${
                    plan.popular 
                      ? 'border-cyan-500/50 shadow-2xl shadow-cyan-500/20' 
                      : 'border-white/20 hover:border-cyan-500/30'
                  }`}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-4 py-1 rounded-full text-sm font-medium">
                        Most Popular
                      </span>
                    </div>
                  )}
                  
                  <div className="text-center mb-6">
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                    <div className="text-4xl font-bold text-cyan-400 mb-2">{plan.price}</div>
                    <p className="text-gray-300">{plan.description}</p>
                  </div>
                  
                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start">
                        <div className="w-5 h-5 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                          <div className="w-2 h-2 bg-white rounded-full"></div>
                        </div>
                        <span className="text-gray-300">{feature}</span>
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
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-cyan-900/30 to-purple-900/30">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Build the Future of Blockchain?
            </h2>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Join the next generation of blockchain developers using AI to create secure, 
              efficient, and innovative smart contracts.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center group shadow-lg hover:shadow-cyan-500/25 hover:scale-105"
              >
                Start Building Today
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/consultation"
                className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 group hover:scale-105"
              >
                Schedule Consultation
                <Code className="w-5 h-5 ml-2 group-hover:scale-110 transition-transform" />
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}