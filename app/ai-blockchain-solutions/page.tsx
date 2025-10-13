import { ArrowRight, Link as LinkIcon, Shield, Zap, Brain, BarChart3, Globe, Users, Mail, Smartphone, Lock, Coins } from "lucide-react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

export default function AiBlockchainSolutions() {
  const features = [
    {
      title: "AI-Powered Smart Contracts",
      description: "Intelligent smart contracts that adapt and optimize based on real-time data and machine learning algorithms.",
      icon: <Brain className="w-8 h-8" />,
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Decentralized AI Networks",
      description: "Distributed AI computing networks that ensure privacy, security, and scalability for machine learning models.",
      icon: <LinkIcon className="w-8 h-8" />,
      color: "from-green-500 to-emerald-500"
    },
    {
      title: "Blockchain Data Analytics",
      description: "Advanced analytics for blockchain data with AI-driven insights and predictive modeling for crypto markets.",
      icon: <BarChart3 className="w-8 h-8" />,
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "AI Security Auditing",
      description: "Automated security auditing of smart contracts and blockchain protocols using AI vulnerability detection.",
      icon: <Shield className="w-8 h-8" />,
      color: "from-orange-500 to-red-500"
    }
  ];

  const solutions = [
    {
      title: "DeFi AI Trading",
      description: "Automated decentralized finance trading with AI-powered market analysis and risk management.",
      price: "Starting at $499/month",
      features: ["AI Market Analysis", "Automated Trading", "Risk Management", "Yield Optimization"]
    },
    {
      title: "NFT AI Generator",
      description: "AI-powered NFT creation and marketplace with intelligent rarity scoring and automated generation.",
      price: "Starting at $299/month",
      features: ["AI Art Generation", "Rarity Scoring", "Marketplace Integration", "Royalty Management"]
    },
    {
      title: "Blockchain Identity",
      description: "Decentralized identity management with AI-powered verification and privacy protection.",
      price: "Starting at $199/month",
      features: ["Self-Sovereign Identity", "AI Verification", "Privacy Protection", "Cross-Chain Support"]
    },
    {
      title: "Supply Chain AI",
      description: "Blockchain-based supply chain tracking with AI analytics for transparency and optimization.",
      price: "Starting at $399/month",
      features: ["End-to-End Tracking", "AI Analytics", "Fraud Detection", "Compliance Reporting"]
    }
  ];

  const benefits = [
    {
      title: "Enhanced Security",
      description: "Blockchain's immutable ledger combined with AI threat detection provides unprecedented security.",
      icon: <Lock className="w-6 h-6" />
    },
    {
      title: "Transparency",
      description: "Complete transparency in AI decision-making processes through blockchain verification.",
      icon: <Globe className="w-6 h-6" />
    },
    {
      title: "Decentralization",
      description: "Eliminate single points of failure with distributed AI networks and blockchain infrastructure.",
      icon: <Users className="w-6 h-6" />
    },
    {
      title: "Tokenization",
      description: "Monetize AI services through blockchain tokens and smart contract automation.",
      icon: <Coins className="w-6 h-6" />
    }
  ];

  return (
    <>
      <Helmet>
        <title>AI Blockchain Solutions - Zion Tech Group</title>
        <meta
          name="description"
          content="Revolutionary AI-powered blockchain solutions including smart contracts, DeFi trading, NFT generation, and decentralized AI networks. Transform your business with blockchain AI."
        />
        <meta
          name="keywords"
          content="AI blockchain, smart contracts, DeFi AI, NFT AI, blockchain analytics, decentralized AI, crypto AI, blockchain solutions"
        />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-cyan-500/20 to-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
          </div>
          
          <div className="max-w-7xl mx-auto text-center relative z-10">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 mb-6">
              <LinkIcon className="w-4 h-4 text-cyan-400 mr-2" />
              <span className="text-cyan-400 text-sm font-medium">AI + Blockchain Revolution</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              AI-Powered
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 animate-pulse">
                {" "}Blockchain Solutions
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
              Combine the power of artificial intelligence with blockchain technology to create secure, 
              transparent, and intelligent decentralized solutions. Transform your business with AI-driven 
              smart contracts, DeFi protocols, and decentralized AI networks.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center group shadow-lg hover:shadow-cyan-500/25 hover:scale-105"
              >
                Start Blockchain AI Journey
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/demo"
                className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 group hover:scale-105"
              >
                Watch Demo
                <Zap className="w-5 h-5 ml-2 group-hover:rotate-12 transition-transform" />
              </Link>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
                AI Blockchain Capabilities
              </h2>
              <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
                Our AI-powered blockchain solutions combine cutting-edge artificial intelligence with 
                decentralized technology to create secure, transparent, and intelligent systems.
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
                  <h3 className="text-xl font-semibold text-white mb-3 text-center group-hover:text-cyan-400 transition-colors">
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

        {/* Solutions Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800/50 to-purple-800/50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Our AI Blockchain Solutions
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Comprehensive AI-powered blockchain solutions designed to transform your business operations.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {solutions.map((solution, index) => (
                <div
                  key={index}
                  className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105"
                >
                  <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                    {solution.title}
                  </h3>
                  <p className="text-gray-300 mb-4 leading-relaxed">
                    {solution.description}
                  </p>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-cyan-400 font-bold text-lg">{solution.price}</span>
                    <ArrowRight className="w-5 h-5 text-cyan-400 group-hover:translate-x-1 transition-transform" />
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {solution.features.map((feature, idx) => (
                      <span
                        key={idx}
                        className="text-xs bg-cyan-500/20 text-cyan-300 px-2 py-1 rounded-full border border-cyan-500/30"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Why Choose AI Blockchain?
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Discover the unique advantages of combining artificial intelligence with blockchain technology.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <div
                  key={index}
                  className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 text-center"
                >
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    {benefit.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-cyan-900/30 to-purple-900/30">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              Ready to Transform with AI Blockchain?
            </h2>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Join the revolution of AI-powered blockchain solutions. Contact our experts today 
              for a personalized consultation and discover how to leverage this powerful combination.
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
                  <Smartphone className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-white font-semibold mb-2">Phone</h3>
                <p className="text-cyan-400">+1 302 464 0950</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <Globe className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-white font-semibold mb-2">Address</h3>
                <p className="text-cyan-400 text-sm">364 E Main St STE 1008<br />Middletown DE 19709</p>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center group shadow-lg hover:shadow-cyan-500/25 hover:scale-105"
              >
                Start AI Blockchain Journey
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/consultation"
                className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 group hover:scale-105"
              >
                Free Consultation
                <Zap className="w-5 h-5 ml-2 group-hover:rotate-12 transition-transform" />
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}