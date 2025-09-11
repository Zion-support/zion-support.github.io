import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Link, 
  Coins, 
  Shield, 
  Zap, 
  Database, 
  Globe, 
  TrendingUp, 
  CheckCircle, 
  ArrowRight, 
  Lock, 
  Network, 
  Wallet, 
  BarChart3,
  Star,
  Award,
  Target,
  Rocket,
  Crown,
  Sparkles,
  ChevronRight,
  Users,
  Clock,
  Check
} from 'lucide-react';

const BlockchainServicesPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const blockchainServices = [
    {
      id: "smart-contracts",
      title: "Smart Contract Development",
      description: "Custom smart contract development for DeFi, NFTs, and enterprise blockchain solutions with comprehensive auditing.",
      price: 3500,
      currency: "$",
      period: "/project",
      features: [
        "Custom smart contract development",
        "Security auditing & testing",
        "Gas optimization",
        "Multi-chain deployment",
        "Documentation & training",
        "Ongoing support"
      ],
      icon: Zap,
      category: "Development",
      badge: "Popular",
      image: "https://images.unsplash.com/photo-1639762681057-408e52192e55?auto=format&fit=crop&w=800&h=500"
    },
    {
      id: "defi-platform",
      title: "DeFi Platform Development",
      description: "Complete DeFi platform development including DEX, lending protocols, yield farming, and liquidity management.",
      price: 15000,
      currency: "$",
      period: "/platform",
      features: [
        "DEX development",
        "Lending protocols",
        "Yield farming",
        "Liquidity management",
        "Security audits",
        "UI/UX design"
      ],
      icon: Coins,
      category: "DeFi",
      badge: "Enterprise",
      image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&w=800&h=500"
    },
    {
      id: "nft-marketplace",
      title: "NFT Marketplace Development",
      description: "Custom NFT marketplace with minting, trading, auctions, and royalty distribution systems.",
      price: 8000,
      currency: "$",
      period: "/marketplace",
      features: [
        "NFT minting & trading",
        "Auction system",
        "Royalty distribution",
        "Multi-chain support",
        "Admin dashboard",
        "Analytics & reporting"
      ],
      icon: Database,
      category: "NFTs",
      badge: "Featured",
      image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&w=800&h=500"
    },
    {
      id: "enterprise-blockchain",
      title: "Enterprise Blockchain Solutions",
      description: "Private blockchain networks for enterprise use cases including supply chain, identity management, and asset tracking.",
      price: 25000,
      currency: "$",
      period: "/solution",
      features: [
        "Private blockchain setup",
        "Consensus mechanisms",
        "Identity management",
        "Supply chain tracking",
        "Integration APIs",
        "Training & support"
      ],
      icon: Network,
      category: "Enterprise",
      badge: "Custom",
      image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&w=800&h=500"
    },
    {
      id: "blockchain-security",
      title: "Blockchain Security & Auditing",
      description: "Comprehensive security audits, penetration testing, and vulnerability assessment for blockchain applications.",
      price: 5000,
      currency: "$",
      period: "/audit",
      features: [
        "Smart contract auditing",
        "Penetration testing",
        "Vulnerability assessment",
        "Security best practices",
        "Compliance review",
        "Remediation guidance"
      ],
      icon: Shield,
      category: "Security",
      badge: "Essential",
      image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&w=800&h=500"
    },
    {
      id: "cross-chain",
      title: "Cross-Chain Solutions",
      description: "Interoperability solutions enabling seamless asset and data transfer across different blockchain networks.",
      price: 12000,
      currency: "$",
      period: "/solution",
      features: [
        "Bridge development",
        "Cross-chain messaging",
        "Asset interoperability",
        "Multi-chain wallets",
        "Atomic swaps",
        "Network monitoring"
      ],
      icon: Globe,
      category: "Interoperability",
      badge: "Advanced",
      image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&w=800&h=500"
    }
  ];

  const categories = [
    { id: 'all', name: 'All Services', count: blockchainServices.length },
    { id: 'Development', name: 'Development', count: blockchainServices.filter(s => s.category === 'Development').length },
    { id: 'DeFi', name: 'DeFi', count: blockchainServices.filter(s => s.category === 'DeFi').length },
    { id: 'NFTs', name: 'NFTs', count: blockchainServices.filter(s => s.category === 'NFTs').length },
    { id: 'Enterprise', name: 'Enterprise', count: blockchainServices.filter(s => s.category === 'Enterprise').length },
    { id: 'Security', name: 'Security', count: blockchainServices.filter(s => s.category === 'Security').length },
    { id: 'Interoperability', name: 'Interoperability', count: blockchainServices.filter(s => s.category === 'Interoperability').length }
  ];

  const filteredServices = selectedCategory === 'all' 
    ? blockchainServices 
    : blockchainServices.filter(service => service.category === selectedCategory);

  return (
    <div className="min-h-screen bg-futuristic">
      {/* Hero Section */}
      <section className="relative py-32 bg-gradient-to-br from-zion-slate-dark via-zion-blue-dark to-zion-blue overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-20 w-64 h-64 border border-zion-cyan rounded-full animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-48 h-48 border border-zion-purple rounded-full animate-pulse delay-1000"></div>
        </div>
        
        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="flex justify-center mb-8">
            <div className="w-24 h-24 bg-gradient-to-r from-zion-cyan to-zion-purple rounded-2xl flex items-center justify-center">
              <Network className="w-12 h-12 text-white" />
            </div>
          </div>
          
          <h1 className="text-6xl md:text-7xl font-bold text-white mb-8 leading-tight">
            Blockchain{' '}
            <span className="bg-gradient-to-r from-zion-cyan to-zion-purple bg-clip-text text-transparent">
              Services
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-zion-slate-light mb-12 max-w-4xl mx-auto leading-relaxed">
            Transform your business with cutting-edge blockchain solutions. From smart contracts to DeFi platforms, 
            we build secure, scalable, and innovative blockchain applications.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-gradient-to-r from-zion-cyan to-zion-purple text-white rounded-xl font-semibold text-lg hover:scale-105 transition-all duration-300 shadow-2xl hover:shadow-zion-cyan/25">
              Get Started
            </button>
            <button className="px-8 py-4 border border-zion-cyan text-zion-cyan rounded-xl font-semibold text-lg hover:bg-zion-cyan hover:text-white transition-all duration-300">
              View Services
            </button>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-16 bg-zion-slate-dark">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Our Blockchain Services
              </h2>
              <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
                Choose from our comprehensive range of blockchain development and consulting services
              </p>
            </div>

            {/* Category Tabs */}
            <div className="flex flex-wrap gap-3 justify-center mb-8">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                    selectedCategory === category.id
                      ? 'bg-gradient-to-r from-zion-cyan to-zion-purple text-white shadow-lg'
                      : 'bg-zion-blue-dark/50 text-zion-slate-light hover:bg-zion-cyan/20 hover:text-white border border-zion-cyan/20'
                  }`}
                >
                  {category.name}
                  <span className="bg-white/20 px-2 py-1 rounded-full text-xs">
                    {category.count}
                  </span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-zion-blue-dark">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {filteredServices.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-zion-slate-dark/50 backdrop-blur-sm border border-zion-cyan/20 rounded-xl overflow-hidden hover:border-zion-cyan/40 transition-all duration-300 group"
              >
                {/* Service Image */}
                <div className="h-48 bg-gradient-to-br from-zion-cyan/20 to-zion-purple/20 flex items-center justify-center relative overflow-hidden">
                  <service.icon className="w-16 h-16 text-zion-cyan z-10" />
                  <div className="absolute inset-0 bg-gradient-to-br from-zion-cyan/10 to-zion-purple/10"></div>
                </div>
                
                <div className="p-6">
                  {/* Header */}
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-white mb-2 group-hover:text-zion-cyan transition-colors duration-300">
                        {service.title}
                      </h3>
                      <p className="text-zion-slate-light text-sm leading-relaxed">
                        {service.description}
                      </p>
                    </div>
                  </div>
                  
                  {/* Badge */}
                  <div className="mb-4">
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                      service.badge === 'Popular' ? 'bg-gradient-to-r from-zion-cyan to-zion-purple text-white' :
                      service.badge === 'Enterprise' ? 'bg-gradient-to-r from-zion-purple to-zion-cyan text-white' :
                      service.badge === 'Featured' ? 'bg-gradient-to-r from-zion-cyan to-zion-blue text-white' :
                      service.badge === 'Custom' ? 'bg-gradient-to-r from-zion-purple to-zion-cyan text-white' :
                      service.badge === 'Essential' ? 'bg-gradient-to-r from-zion-cyan to-zion-green text-white' :
                      'bg-gradient-to-r from-zion-cyan to-zion-purple text-white'
                    }`}>
                      {service.badge}
                    </span>
                  </div>
                  
                  {/* Price */}
                  <div className="mb-6">
                    <div className="flex items-baseline gap-2">
                      <span className="text-3xl font-bold text-zion-cyan">
                        {service.currency}{service.price.toLocaleString()}
                      </span>
                      <span className="text-zion-slate-light">{service.period}</span>
                    </div>
                  </div>
                  
                  {/* Features */}
                  <div className="space-y-3 mb-6">
                    {service.features.slice(0, 4).map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center gap-3">
                        <Check className="w-4 h-4 text-zion-cyan flex-shrink-0" />
                        <span className="text-zion-slate-light text-sm">{feature}</span>
                      </div>
                    ))}
                    {service.features.length > 4 && (
                      <div className="text-zion-cyan text-sm font-medium">
                        +{service.features.length - 4} more features
                      </div>
                    )}
                  </div>
                  
                  {/* CTA */}
                  <button className="w-full bg-gradient-to-r from-zion-cyan to-zion-purple text-white py-3 px-6 rounded-lg font-semibold hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2">
                    Get Started
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-zion-slate-dark">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Why Choose Zion Tech Group?
            </h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              We combine deep blockchain expertise with cutting-edge technology to deliver 
              solutions that drive real business value.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                icon: Shield,
                title: "Security First",
                description: "Enterprise-grade security with comprehensive auditing and testing protocols."
              },
              {
                icon: Rocket,
                title: "Scalable Solutions",
                description: "Built for growth with architecture that scales with your business needs."
              },
              {
                icon: Users,
                title: "Expert Team",
                description: "Blockchain specialists with years of experience in DeFi, NFTs, and enterprise solutions."
              },
              {
                icon: Clock,
                title: "Fast Delivery",
                description: "Agile development process ensuring rapid delivery without compromising quality."
              },
              {
                icon: CheckCircle,
                title: "Proven Track Record",
                description: "Successfully delivered blockchain solutions for companies across industries."
              },
              {
                icon: Globe,
                title: "Multi-Chain Support",
                description: "Experience with Ethereum, Polygon, Solana, and other leading blockchain networks."
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-zion-blue-dark/50 backdrop-blur-sm border border-zion-cyan/20 rounded-xl p-6 text-center hover:border-zion-cyan/40 transition-all duration-300"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-zion-cyan to-zion-purple rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-xl font-bold text-white mb-4">{feature.title}</h3>
                <p className="text-zion-slate-light leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-zion-slate-dark to-zion-blue-dark">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Build the Future?
          </h2>
          <p className="text-xl text-zion-slate-light mb-8 max-w-3xl mx-auto">
            Let's discuss how blockchain technology can transform your business. 
            Our experts are ready to help you navigate the blockchain landscape.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-gradient-to-r from-zion-cyan to-zion-purple text-white rounded-xl font-semibold text-lg hover:scale-105 transition-all duration-300 shadow-2xl hover:shadow-zion-cyan/25">
              Start Your Project
            </button>
            <button className="px-8 py-4 border border-zion-cyan text-zion-cyan rounded-xl font-semibold text-lg hover:bg-zion-cyan hover:text-white transition-all duration-300">
              Schedule Consultation
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BlockchainServicesPage;
