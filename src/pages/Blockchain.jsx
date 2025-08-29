import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Link, 
  Zap, 
  Shield, 
  CheckCircle, 
  ArrowRight, 
  Star,
  Users,
  Award,
  Globe,
  Lock,
  Activity,
  Clock,
  Eye,
  Database,
  Monitor,
  Code,
  FileText,
  Truck,
  Wrench,
  Cpu,
  Brain,
  Target,
  Rocket,
  Lightbulb,
  Gauge,
  Network,
  Server,
  Wallet,
  Key,
  BarChart3,
  TrendingUp,
  Building,
  Car,
  Plane
} from 'lucide-react';

const blockchainSolutions = [
  {
    id: 1,
    title: "Smart Contract Development",
    description: "Custom smart contracts for automated business logic and decentralized applications.",
    icon: Code,
    features: [
      "Custom contract development",
      "Security auditing",
      "Gas optimization",
      "Testing & deployment"
    ],
    price: "From $25,000",
    timeline: "8-16 weeks",
    category: "Development",
    technologies: ["Solidity", "Rust", "Vyper", "Move"]
  },
  {
    id: 2,
    title: "DeFi Platform Development",
    description: "Decentralized finance platforms for lending, trading, and yield farming.",
    icon: TrendingUp,
    features: [
      "Lending protocols",
      "DEX development",
      "Yield farming",
      "Liquidity management"
    ],
    price: "From $80,000",
    timeline: "20-32 weeks",
    category: "DeFi",
    technologies: ["Ethereum", "Polygon", "BSC", "Layer 2"]
  },
  {
    id: 3,
    title: "NFT Marketplace",
    description: "Non-fungible token marketplaces for digital art, collectibles, and gaming assets.",
    icon: Building,
    features: [
      "Marketplace infrastructure",
      "NFT minting",
      "Trading mechanisms",
      "Royalty systems"
    ],
    price: "From $60,000",
    timeline: "16-24 weeks",
    category: "NFT",
    technologies: ["ERC-721", "ERC-1155", "IPFS", "MetaMask"]
  },
  {
    id: 4,
    title: "Supply Chain Tracking",
    description: "Blockchain-based supply chain solutions for transparency and traceability.",
    icon: Truck,
    features: [
      "Product tracking",
      "Authenticity verification",
      "Compliance reporting",
      "Real-time monitoring"
    ],
    price: "From $100,000",
    timeline: "24-36 weeks",
    category: "Supply Chain",
    technologies: ["Hyperledger", "Ethereum", "IoT Integration", "QR Codes"]
  },
  {
    id: 5,
    title: "Identity Management",
    description: "Decentralized identity solutions for secure and privacy-preserving authentication.",
    icon: Key,
    features: [
      "Self-sovereign identity",
      "Zero-knowledge proofs",
      "Credential verification",
      "Privacy protection"
    ],
    price: "From $70,000",
    timeline: "20-28 weeks",
    category: "Identity",
    technologies: ["DID", "Verifiable Credentials", "ZK-SNARKs", "IPFS"]
  },
  {
    id: 6,
    title: "Cross-Chain Solutions",
    description: "Interoperability solutions for seamless communication between different blockchains.",
    icon: Network,
    features: [
      "Cross-chain bridges",
      "Asset transfers",
      "Data sharing",
      "Protocol integration"
    ],
    price: "From $120,000",
    timeline: "28-40 weeks",
    category: "Interoperability",
    technologies: ["Polkadot", "Cosmos", "LayerZero", "Wormhole"]
  }
];

const blockchainTechnologies = [
  {
    name: "Ethereum",
    description: "Smart contract platform with EVM compatibility",
    icon: Link,
    useCase: "DeFi & dApps",
    reliability: "High"
  },
  {
    name: "Hyperledger Fabric",
    description: "Enterprise-grade permissioned blockchain",
    icon: Building,
    useCase: "Enterprise Solutions",
    reliability: "Critical"
  },
  {
    name: "Polkadot",
    description: "Multi-chain network for interoperability",
    icon: Network,
    useCase: "Cross-chain",
    reliability: "High"
  },
  {
    name: "Solana",
    description: "High-performance blockchain with low fees",
    icon: Zap,
    useCase: "High-frequency Trading",
    reliability: "Medium"
  }
];

const successStories = [
  {
    id: 1,
    company: "Global Logistics Corp",
    industry: "Logistics",
    challenge: "Needed transparent tracking of international shipments across 50+ countries",
    solution: "Built blockchain-based supply chain platform with IoT integration",
    results: "100% shipment visibility, 40% reduction in delays, enhanced compliance reporting",
    logo: "GLC"
  },
  {
    id: 2,
    company: "Digital Art Gallery",
    industry: "Art & Entertainment",
    challenge: "Required secure marketplace for digital art with royalty distribution",
    solution: "Developed NFT marketplace with smart contract-based royalty system",
    results: "10,000+ NFTs traded, $2M+ in sales, automated royalty payments",
    logo: "DAG"
  },
  {
    id: 3,
    company: "Microfinance Network",
    industry: "Finance",
    challenge: "Needed decentralized lending platform for underserved communities",
    solution: "Built DeFi lending protocol with credit scoring and collateral management",
    results: "5,000+ loans issued, $15M+ in lending volume, 95% repayment rate",
    logo: "MN"
  }
];

const processSteps = [
  {
    step: 1,
    title: "Blockchain Assessment",
    description: "Evaluate blockchain requirements and platform selection",
    icon: FileText,
    duration: "1-2 weeks"
  },
  {
    step: 2,
    title: "Architecture Design",
    description: "Design blockchain architecture and smart contracts",
    icon: Code,
    duration: "2-4 weeks"
  },
  {
    step: 3,
    title: "Development",
    description: "Build blockchain solution and smart contracts",
    icon: Wrench,
    duration: "8-40 weeks"
  },
  {
    step: 4,
    title: "Testing & Deployment",
    description: "Test smart contracts and deploy to blockchain",
    icon: CheckCircle,
    duration: "2-4 weeks"
  }
];

const blockchainBenefits = [
  {
    title: "Transparency",
    description: "All transactions are visible and verifiable on the blockchain",
    icon: Eye,
    examples: ["Public ledgers", "Audit trails", "Real-time tracking"]
  },
  {
    title: "Security",
    description: "Cryptographic security ensures data integrity and immutability",
    icon: Shield,
    examples: ["Cryptographic hashing", "Digital signatures", "Consensus mechanisms"]
  },
  {
    title: "Decentralization",
    description: "No single point of failure or central authority",
    icon: Network,
    examples: ["Distributed nodes", "Peer-to-peer", "Community governance"]
  },
  {
    title: "Automation",
    description: "Smart contracts execute automatically based on predefined conditions",
    icon: Zap,
    examples: ["Automated payments", "Conditional logic", "Business process automation"]
  }
];

export default function Blockchain() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedSolution, setSelectedSolution] = useState(null);

  const categories = ['All', 'Development', 'DeFi', 'NFT', 'Supply Chain', 'Identity', 'Interoperability'];
  
  const filteredSolutions = selectedCategory === 'All' 
    ? blockchainSolutions 
    : blockchainSolutions.filter(solution => solution.category === selectedCategory);

  return (
    <div className="min-h-screen bg-futuristic">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-zion-cyan/20 via-zion-purple/20 to-zion-blue/20"></div>
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-72 h-72 bg-zion-cyan/30 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-zion-purple/30 rounded-full blur-3xl"></div>
        </div>
        
        <div className="container-responsive relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-zion-cyan to-zion-purple rounded-2xl mb-8"
            >
              <Link className="w-10 h-10 text-white" />
            </motion.div>
            
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Blockchain &
              <span className="text-gradient block">Web3 Solutions</span>
            </h1>
            
            <p className="text-xl text-zion-slate-light leading-relaxed mb-8">
              Transform your business with decentralized technology. From smart contracts to DeFi platforms, 
              we build secure, transparent, and efficient blockchain solutions.
            </p>
            
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <div className="flex items-center gap-2 text-zion-cyan">
                <Link className="w-4 h-4" />
                <span>Smart Contracts</span>
              </div>
              <div className="flex items-center gap-2 text-zion-purple">
                <Shield className="w-4 h-4" />
                <span>DeFi Platforms</span>
              </div>
              <div className="flex items-center gap-2 text-zion-blue">
                <Zap className="w-4 h-4" />
                <span>NFT Marketplaces</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Blockchain Benefits */}
      <section className="py-20 bg-zion-blue-dark/50">
        <div className="container-responsive">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">Blockchain Technology Benefits</h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              Understanding the fundamental advantages that make blockchain revolutionary
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {blockchainBenefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-zion-blue-dark/30 border border-zion-cyan/20 rounded-2xl p-8 hover:border-zion-cyan/40 transition-all duration-300"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-zion-cyan to-zion-purple rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <benefit.icon className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-4 text-center">{benefit.title}</h3>
                <p className="text-zion-slate-light mb-6 leading-relaxed text-center">{benefit.description}</p>
                
                <div className="space-y-2">
                  <h4 className="text-zion-cyan font-semibold mb-3">Examples:</h4>
                  {benefit.examples.map((example, exampleIndex) => (
                    <div key={exampleIndex} className="flex items-center gap-3">
                      <CheckCircle className="w-4 h-4 text-zion-cyan flex-shrink-0" />
                      <span className="text-zion-slate-light text-sm">{example}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Blockchain Technologies */}
      <section className="py-20">
        <div className="container-responsive">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">Blockchain Platforms We Support</h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              Comprehensive support for leading blockchain platforms and technologies
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {blockchainTechnologies.map((technology, index) => (
              <motion.div
                key={technology.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-zion-blue-dark/30 border border-zion-cyan/20 rounded-2xl p-6 text-center hover:border-zion-cyan/40 transition-all duration-300"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-zion-cyan to-zion-purple rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <technology.icon className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-xl font-bold text-white mb-3">{technology.name}</h3>
                <p className="text-zion-slate-light mb-4 leading-relaxed">{technology.description}</p>
                <p className="text-zion-cyan font-semibold mb-2">{technology.useCase}</p>
                
                <span className={`inline-block px-3 py-1 rounded-full text-sm font-semibold ${
                  technology.reliability === 'Critical' 
                    ? 'bg-red-500/20 text-red-400 border border-red-500/30'
                    : technology.reliability === 'High'
                    ? 'bg-yellow-500/20 text-yellow-400 border border-yellow-500/30'
                    : 'bg-green-500/20 text-green-400 border border-green-500/30'
                }`}>
                  {technology.reliability} Reliability
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-zion-blue-dark/50">
        <div className="container-responsive">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">Our Blockchain Development Process</h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              A proven methodology that ensures successful blockchain implementation
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="relative mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-zion-cyan to-zion-purple rounded-2xl flex items-center justify-center mx-auto">
                    <step.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-zion-blue rounded-full flex items-center justify-center text-white text-sm font-bold">
                    {step.step}
                  </div>
                </div>
                
                <h3 className="text-xl font-bold text-white mb-3">{step.title}</h3>
                <p className="text-zion-slate-light mb-4 leading-relaxed">{step.description}</p>
                <span className="inline-block px-3 py-1 bg-zion-cyan/20 text-zion-cyan text-sm rounded-full border border-zion-cyan/30">
                  {step.duration}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section className="py-20">
        <div className="container-responsive">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">Blockchain Solutions</h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              Comprehensive solutions designed for the decentralized future
            </p>
          </motion.div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                  selectedCategory === category
                    ? 'bg-gradient-to-r from-zion-cyan to-zion-purple text-white shadow-lg shadow-zion-cyan/25'
                    : 'bg-zion-blue-dark/30 text-zion-slate-light border border-zion-cyan/20 hover:border-zion-cyan/40'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredSolutions.map((solution, index) => (
              <motion.div
                key={solution.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-zion-blue-dark/30 border border-zion-cyan/20 rounded-2xl p-6 hover:border-zion-cyan/40 transition-all duration-300 cursor-pointer"
                onClick={() => setSelectedSolution(solution)}
              >
                <div className="w-16 h-16 bg-gradient-to-br from-zion-cyan to-zion-purple rounded-2xl flex items-center justify-center mb-6">
                  <solution.icon className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-3">{solution.title}</h3>
                <p className="text-zion-slate-light mb-6 leading-relaxed">{solution.description}</p>
                
                <div className="space-y-3 mb-6">
                  {solution.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-zion-cyan flex-shrink-0" />
                      <span className="text-zion-slate-light text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {solution.technologies.slice(0, 2).map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-2 py-1 bg-zion-purple/20 text-zion-purple text-xs rounded border border-zion-purple/30"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex items-center justify-between mb-4">
                  <span className="text-zion-cyan font-semibold">{solution.price}</span>
                  <span className="text-zion-slate-light text-sm">{solution.timeline}</span>
                </div>
                
                <div className="flex items-center justify-between">
                  <span className="px-3 py-1 bg-zion-cyan/20 text-zion-cyan text-xs rounded-full border border-zion-cyan/30">
                    {solution.category}
                  </span>
                  <button className="inline-flex items-center gap-2 text-zion-cyan hover:text-white transition-colors duration-300">
                    <span className="text-sm font-medium">Learn More</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-20 bg-zion-blue-dark/50">
        <div className="container-responsive">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">Blockchain Success Stories</h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              Organizations that have transformed their operations with blockchain technology
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {successStories.map((story, index) => (
              <motion.div
                key={story.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-zion-blue-dark/30 border border-zion-cyan/20 rounded-2xl p-6 hover:border-zion-cyan/40 transition-all duration-300"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-zion-cyan to-zion-purple rounded-xl flex items-center justify-center text-white font-bold text-lg">
                    {story.logo}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">{story.company}</h3>
                    <p className="text-zion-slate-light text-sm">{story.industry}</p>
                  </div>
                </div>
                
                <div className="space-y-4 mb-6">
                  <div>
                    <h4 className="text-zion-cyan font-semibold mb-2">Challenge</h4>
                    <p className="text-zion-slate-light text-sm">{story.challenge}</p>
                  </div>
                  <div>
                    <h4 className="text-zion-cyan font-semibold mb-2">Solution</h4>
                    <p className="text-zion-slate-light text-sm">{story.solution}</p>
                  </div>
                  <div>
                    <h4 className="text-zion-cyan font-semibold mb-2">Results</h4>
                    <p className="text-zion-slate-light text-sm">{story.results}</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                  ))}
                  <span className="text-zion-slate-light text-sm ml-2">5.0 Rating</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-zion-cyan/10 via-zion-purple/10 to-zion-blue/10">
        <div className="container-responsive">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h2 className="text-4xl font-bold text-white mb-6">Ready for the Blockchain Revolution?</h2>
            <p className="text-xl text-zion-slate-light mb-8 leading-relaxed">
              Let's discuss how blockchain technology can transform your business, 
              enhance security, and create new opportunities in the decentralized economy.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="px-8 py-4 bg-gradient-to-r from-zion-cyan to-zion-purple text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-zion-cyan/25 transition-all duration-300 transform hover:scale-105"
              >
                Start Blockchain Project
              </a>
              <a
                href="/contact"
                className="px-8 py-4 border border-zion-cyan text-zion-cyan font-semibold rounded-xl hover:bg-zion-cyan hover:text-white transition-all duration-300"
              >
                Blockchain Consultation
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}