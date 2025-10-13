import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Shield, Zap, Star, ArrowRight, CheckCircle, Users, Clock, Lock, Brain, Code, Sparkles, BarChart3, Globe, Smartphone } from 'lucide-react';
import SEOOptimizer from '../components/SEOOptimizer';

const BlockchainDevelopment = () => {
  const features = [
    {
      title: "Smart Contract Development",
      description: "Secure, audited smart contracts for DeFi, NFTs, and enterprise applications",
      icon: <Code className="w-6 h-6" />,
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "DApp Development",
      description: "Decentralized applications with intuitive user interfaces and seamless blockchain integration",
      icon: <Globe className="w-6 h-6" />,
      color: "from-green-500 to-emerald-500"
    },
    {
      title: "Blockchain Consulting",
      description: "Strategic guidance on blockchain implementation, tokenomics, and regulatory compliance",
      icon: <Brain className="w-6 h-6" />,
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "Security Audits",
      description: "Comprehensive security audits and penetration testing for blockchain applications",
      icon: <Shield className="w-6 h-6" />,
      color: "from-orange-500 to-red-500"
    }
  ];

  const services = [
    {
      name: "Smart Contract Development",
      price: "From $5,000",
      description: "Custom smart contracts for any blockchain platform",
      features: [
        "Solidity, Rust, or Vyper development",
        "Gas optimization",
        "Security best practices",
        "Testing and deployment",
        "Documentation and maintenance"
      ]
    },
    {
      name: "DApp Development",
      price: "From $15,000",
      description: "Full-stack decentralized applications",
      features: [
        "Frontend and backend development",
        "Wallet integration",
        "Smart contract integration",
        "User authentication",
        "Mobile and web support"
      ]
    },
    {
      name: "Blockchain Consulting",
      price: "From $200/hour",
      description: "Strategic blockchain guidance and implementation",
      features: [
        "Architecture design",
        "Tokenomics planning",
        "Regulatory compliance",
        "Technology selection",
        "Project roadmap"
      ]
    },
    {
      name: "Security Audits",
      price: "From $3,000",
      description: "Comprehensive security analysis and testing",
      features: [
        "Code review and analysis",
        "Penetration testing",
        "Vulnerability assessment",
        "Security recommendations",
        "Compliance verification"
      ]
    }
  ];

  const technologies = [
    {
      title: "Ethereum",
      description: "Smart contracts, DeFi protocols, and NFT marketplaces",
      icon: <Code className="w-8 h-8" />
    },
    {
      title: "Polygon",
      description: "Layer 2 solutions for faster and cheaper transactions",
      icon: <Zap className="w-8 h-8" />
    },
    {
      title: "Solana",
      description: "High-performance blockchain for scalable applications",
      icon: <Sparkles className="w-8 h-8" />
    },
    {
      title: "Binance Smart Chain",
      description: "EVM-compatible blockchain with low transaction costs",
      icon: <Globe className="w-8 h-8" />
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      <SEOOptimizer
        title="Blockchain Development Services - Smart Contracts, DApps & Consulting | Zion Tech Group"
        description="Expert blockchain development services including smart contracts, DApps, DeFi protocols, and security audits. From $5,000. Contact us for a consultation."
        keywords="blockchain development, smart contracts, DApp development, DeFi, NFT development, blockchain consulting, security audits"
      />
      
      <Helmet>
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://ziontechgroup.com/blockchain-development" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 mb-8">
              <Shield className="w-5 h-5 text-blue-400 mr-2" />
              <span className="text-blue-400 font-medium">Blockchain Development Services</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Blockchain Development Services
            </h1>
            
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Transform your business with cutting-edge blockchain solutions. We develop secure smart contracts, 
              decentralized applications, and provide expert consulting for your blockchain projects.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <button className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-8 py-4 rounded-lg font-semibold hover:from-blue-600 hover:to-cyan-600 transition-all duration-300 flex items-center justify-center">
                <Code className="w-5 h-5 mr-2" />
                Get Free Consultation
              </button>
              <button className="border border-blue-500 text-blue-400 px-8 py-4 rounded-lg font-semibold hover:bg-blue-500/10 transition-all duration-300 flex items-center justify-center">
                <Shield className="w-5 h-5 mr-2" />
                View Portfolio
              </button>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
              <div className="text-center">
                <div className="text-3xl font-bold text-white mb-2">50+</div>
                <div className="text-gray-400">Projects Completed</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white mb-2">$2M+</div>
                <div className="text-gray-400">Value Secured</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white mb-2">100%</div>
                <div className="text-gray-400">Security Record</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white mb-2">24/7</div>
                <div className="text-gray-400">Support</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Comprehensive Blockchain Solutions
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              From smart contracts to full DApp development, we provide end-to-end blockchain solutions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700 hover:border-blue-500/50 transition-all duration-300">
                <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${feature.color} flex items-center justify-center mb-4`}>
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Our Blockchain Services
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Professional blockchain development services tailored to your needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 border border-gray-700 hover:border-blue-500/50 transition-all duration-300">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-2xl font-bold text-white">{service.name}</h3>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-blue-400">{service.price}</div>
                  </div>
                </div>
                <p className="text-gray-300 mb-6">{service.description}</p>
                <ul className="space-y-3">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <button className="w-full mt-6 bg-gradient-to-r from-blue-500 to-cyan-500 text-white py-3 px-6 rounded-lg font-semibold hover:from-blue-600 hover:to-cyan-600 transition-all duration-300">
                  Get Quote
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Blockchain Technologies We Work With
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Expertise across all major blockchain platforms and protocols
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {technologies.map((tech, index) => (
              <div key={index} className="text-center group">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  {tech.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{tech.title}</h3>
                <p className="text-gray-300">{tech.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-500/10 to-cyan-500/10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Build on Blockchain?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Let's discuss your blockchain project and create a solution that transforms your business
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-8 py-4 rounded-lg font-semibold hover:from-blue-600 hover:to-cyan-600 transition-all duration-300 flex items-center justify-center">
              Get Free Consultation
              <ArrowRight className="w-5 h-5 ml-2" />
            </button>
            <button className="border border-blue-500 text-blue-400 px-8 py-4 rounded-lg font-semibold hover:bg-blue-500/10 transition-all duration-300">
              View Case Studies
            </button>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-slate-800/50">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-2xl font-bold text-white mb-4">Get in Touch</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-gray-300">
            <div>
              <div className="font-semibold text-white mb-2">Phone</div>
              <a href="tel:+13024640950" className="hover:text-blue-400 transition-colors">
                +1 302 464 0950
              </a>
            </div>
            <div>
              <div className="font-semibold text-white mb-2">Email</div>
              <a href="mailto:kleber@ziontechgroup.com" className="hover:text-blue-400 transition-colors">
                kleber@ziontechgroup.com
              </a>
            </div>
            <div>
              <div className="font-semibold text-white mb-2">Address</div>
              <div>364 E Main St STE 1008<br />Middletown DE 19709</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BlockchainDevelopment;