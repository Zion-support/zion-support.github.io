import React from 'react';
import { Shield, Zap, Globe, ArrowRight, Star, CheckCircle, DollarSign, Clock, Users, Cpu, Lock, Database } from 'lucide-react';
import EnhancedSEO from '../components/EnhancedSEO';
import FuturisticCard from '../components/FuturisticCard';
import FuturisticButton from '../components/FuturisticButton';
import ResponsiveContainer from '../components/ResponsiveContainer';

const ITBlockchainInfrastructurePage = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Blockchain Infrastructure Solutions",
    "description": "Enterprise-grade blockchain infrastructure services including node management, smart contract deployment, and DeFi integration",
    "provider": {
      "@type": "Organization",
      "name": "Zion Tech Group",
      "url": "https://ziontechgroup.com"
    },
    "offers": {
      "@type": "Offer",
      price: "15000",
      "priceCurrency": "USD",
      "availability": "https://schema.org/InStock"
    }
  };

  const features = [
    {
      title: "Blockchain Node Management",
      description: "Fully managed blockchain nodes with 99.9% uptime guarantee and automatic failover",
      icon: <Database className="w-8 h-8" />,
      benefits: ["99.9% uptime", "Auto-scaling", "Multi-chain support"]
    },
    {
      title: "Smart Contract Development",
      description: "Custom smart contract development and deployment with comprehensive security auditing",
      icon: <Shield className="w-8 h-8" />,
      benefits: ["Security audited", "Gas optimized", "Multi-platform"]
    },
    {
      title: "DeFi Integration",
      description: "Seamless integration with DeFi protocols and decentralized applications",
      icon: <Globe className="w-8 h-8" />,
      benefits: ["Protocol integration", "Yield farming", "Liquidity management"]
    },
    {
      title: "Blockchain Security",
      description: "Advanced security solutions including multi-signature wallets and key management",
      icon: <Lock className="w-8 h-8" />,
      benefits: ["Hardware security", "Key management", "Audit trails"]
    }
  ];

  const blockchainNetworks = [
    {
      name: "Ethereum",
      description: "Full Ethereum node management and smart contract deployment",
      icon: "⟠",
      features: ["Mainnet & Testnet", "Smart contracts", "DeFi protocols"]
    },
    {
      name: "Bitcoin",
      description: "Bitcoin node management and Lightning Network integration",
      icon: "₿",
      features: ["Full node", "Lightning Network", "Payment processing"]
    },
    {
      name: "Polygon",
      description: "Polygon network infrastructure for scalable applications",
      icon: "⬟",
      features: ["Layer 2 scaling", "Low fees", "EVM compatible"]
    },
    {
      name: "Binance Smart Chain",
      description: "BSC infrastructure for high-performance applications",
      icon: "🟡",
      features: ["High throughput", "Low costs", "Cross-chain"]
    },
    {
      name: "Solana",
      description: "Solana blockchain infrastructure for high-speed applications",
      icon: "◎",
      features: ["High speed", "Low latency", "Scalable"]
    },
    {
      name: "Polkadot",
      description: "Polkadot parachain development and management",
      icon: "●",
      features: ["Parachain slots", "Interoperability", "Governance"]
    }
  ];

  const pricingPlans = [
    {
      name: "Blockchain Starter",
      price: "$15,000",
      period: "month",
      description: "Basic blockchain infrastructure for small projects",
      features: [
        "Single blockchain network",
        "Basic node management",
        "Standard security",
        "Email support",
        "Monthly reports"
      ],
      popular: false
    },
    {
      name: "Blockchain Professional",
      price: "$50,000",
      period: "month",
      description: "Advanced blockchain solutions for growing businesses",
      features: [
        "Multiple blockchain networks",
        "Advanced node management",
        "Smart contract development",
        "Priority support",
        "Custom integrations",
        "API access"
      ],
      popular: true
    },
    {
      name: "Blockchain Enterprise",
      price: "$150,000",
      period: "month",
      description: "Enterprise-grade blockchain infrastructure",
      features: [
        "All blockchain networks",
        "Custom blockchain development",
        "Advanced security",
        "24/7 support",
        "On-site deployment",
        "White-label solutions"
      ],
      popular: false
    }
  ];

  const useCases = [
    {
      industry: "Finance",
      application: "DeFi Platform",
      description: "Build and deploy decentralized finance applications with our infrastructure",
      results: "50% faster time-to-market"
    },
    {
      industry: "Supply Chain",
      application: "Traceability System",
      description: "Implement blockchain-based supply chain tracking and verification",
      results: "100% transparency and traceability"
    },
    {
      industry: "Gaming",
      application: "NFT Marketplace",
      description: "Create and manage NFT marketplaces with blockchain infrastructure",
      results: "Seamless NFT trading experience"
    },
    {
      industry: "Healthcare",
      application: "Medical Records",
      description: "Secure medical record management using blockchain technology",
      results: "Enhanced data security and privacy"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-amber-900 to-slate-900">
      <EnhancedSEO
        title="Blockchain Infrastructure Solutions | IT Services | Zion Tech Group"
        description="Enterprise-grade blockchain infrastructure services including node management, smart contracts, and DeFi integration. Starting at $15,000/month."
        keywords="blockchain infrastructure, smart contracts, DeFi, cryptocurrency, blockchain development, node management"
        structuredData={structuredData}
      />
      
      <ResponsiveContainer>
        {/* Hero Section */}
        <div className="text-center py-20">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-amber-500/20 border border-amber-500/30 mb-6">
            <Star className="w-5 h-5 text-amber-400 mr-2" />
            <span className="text-amber-300 font-medium">IT Services</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-amber-400 via-yellow-400 to-orange-400 bg-clip-text text-transparent">
            Blockchain Infrastructure
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
            Build the future of decentralized applications with our enterprise-grade blockchain 
            infrastructure services. Secure, scalable, and reliable blockchain solutions.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <FuturisticButton
              href="/contact"
              className="bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-700 hover:to-orange-700"
            >
              Build Your Blockchain
              <ArrowRight className="w-5 h-5 ml-2" />
            </FuturisticButton>
            <FuturisticButton
              href="#pricing"
              variant="outline"
              className="border-amber-500 text-amber-300 hover:bg-amber-500/10"
            >
              View Pricing
            </FuturisticButton>
          </div>
        </div>

        {/* Features Section */}
        <div className="py-20">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Blockchain Infrastructure Services
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Complete blockchain solutions for modern businesses
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <FuturisticCard key={index} className="group hover:scale-105 transition-all duration-300">
                <div className="text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r from-amber-500 to-orange-500 mb-6 group-hover:scale-110 transition-transform">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">{feature.title}</h3>
                  <p className="text-gray-300 mb-4">{feature.description}</p>
                  <ul className="space-y-2">
                    {feature.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-center text-sm text-green-400">
                        <CheckCircle className="w-4 h-4 mr-2" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              </FuturisticCard>
            ))}
          </div>
        </div>

        {/* Blockchain Networks Section */}
        <div className="py-20">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Supported Blockchain Networks
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Multi-chain infrastructure for maximum flexibility
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {blockchainNetworks.map((network, index) => (
              <FuturisticCard key={index} className="p-6">
                <div className="text-center">
                  <div className="text-4xl mb-4">{network.icon}</div>
                  <h3 className="text-xl font-semibold text-white mb-2">{network.name}</h3>
                  <p className="text-gray-300 mb-4">{network.description}</p>
                  <ul className="space-y-2">
                    {network.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm text-amber-400">
                        <CheckCircle className="w-4 h-4 mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </FuturisticCard>
            ))}
          </div>
        </div>

        {/* Use Cases Section */}
        <div className="py-20">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Industry Applications
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Blockchain solutions across various industries
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {useCases.map((useCase, index) => (
              <FuturisticCard key={index} className="p-8">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-amber-500 to-orange-500 flex items-center justify-center">
                      <Cpu className="w-6 h-6 text-white" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center space-x-2 mb-2">
                      <span className="text-sm font-medium text-amber-400">{useCase.industry}</span>
                      <span className="text-gray-400">•</span>
                      <span className="text-sm text-gray-300">{useCase.application}</span>
                    </div>
                    <h3 className="text-lg font-semibold text-white mb-2">{useCase.description}</h3>
                    <p className="text-green-400 font-medium">{useCase.results}</p>
                  </div>
                </div>
              </FuturisticCard>
            ))}
          </div>
        </div>

        {/* Pricing Section */}
        <div id="pricing" className="py-20">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Blockchain Infrastructure Pricing
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose the blockchain solution for your project
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <FuturisticCard 
                key={index} 
                className={`relative ${plan.popular ? 'ring-2 ring-amber-500 scale-105' : ''}`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-amber-500 to-orange-500 text-white px-4 py-1 rounded-full text-sm font-medium">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center p-8">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <p className="text-gray-300 mb-6">{plan.description}</p>
                  
                  <div className="mb-8">
                    <span className="text-4xl font-bold text-white">{plan.price}</span>
                    <span className="text-gray-400">/{plan.period}</span>
                  </div>
                  
                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-gray-300">
                        <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <FuturisticButton
                    href="/contact"
                    className={`w-full ${
                      plan.popular 
                        ? 'bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-700 hover:to-orange-700' 
                        : 'border border-amber-500 text-amber-300 hover:bg-amber-500/10'
                    }`}
                  >
                    Get Started
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </FuturisticButton>
                </div>
              </FuturisticCard>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="py-20 text-center">
          <FuturisticCard className="max-w-4xl mx-auto p-12">
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Build on Blockchain?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Transform your business with blockchain technology. 
              Contact our blockchain infrastructure experts today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <FuturisticButton
                href="/contact"
                className="bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-700 hover:to-orange-700"
              >
                Schedule Blockchain Consultation
                <ArrowRight className="w-5 h-5 ml-2" />
              </FuturisticButton>
              <FuturisticButton
                href="tel:+13024640950"
                variant="outline"
                className="border-amber-500 text-amber-300 hover:bg-amber-500/10"
              >
                <Phone className="w-5 h-5 mr-2" />
                Call +1 302 464 0950
              </FuturisticButton>
            </div>
          </FuturisticCard>
        </div>
      </ResponsiveContainer>
    </div>
  );
};

export default ITBlockchainInfrastructurePage;