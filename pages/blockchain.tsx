import React from 'react';
import Layout from './components/Layout';
import { motion } from 'framer-motion';
import { Lock, Shield, Database, Zap, Globe, Users, ArrowRight, CheckCircle, Star, Clock, DollarSign, TrendingUp } from 'lucide-react';

const blockchainServices = [
  {
    title: "Smart Contract Development",
    description: "Secure and efficient smart contracts for various blockchain platforms",
    icon: Lock,
    features: ["Ethereum Smart Contracts", "DeFi Protocols", "NFT Marketplaces"],
    pricing: "Starting at $4,000/month",
    timeline: "8-16 weeks"
  },
  {
    title: "Blockchain Platform Development",
    description: "Custom blockchain platforms and distributed ledger solutions",
    icon: Database,
    features: ["Private Blockchains", "Consensus Mechanisms", "Node Management"],
    pricing: "Starting at $6,000/month",
    timeline: "16-32 weeks"
  },
  {
    title: "DeFi Solutions",
    description: "Decentralized finance applications and protocols",
    icon: TrendingUp,
    features: ["DEX Development", "Yield Farming", "Liquidity Pools"],
    pricing: "Starting at $5,500/month",
    timeline: "12-24 weeks"
  },
  {
    title: "NFT Development",
    description: "Non-fungible token platforms and marketplaces",
    icon: Star,
    features: ["NFT Minting", "Marketplace Creation", "Metadata Management"],
    pricing: "Starting at $3,500/month",
    timeline: "6-12 weeks"
  },
  {
    title: "Cryptocurrency Development",
    description: "Custom cryptocurrency and token development",
    icon: Globe,
    features: ["Token Creation", "Wallet Integration", "Exchange Listing"],
    pricing: "Starting at $4,500/month",
    timeline: "8-20 weeks"
  },
  {
    title: "Blockchain Security Audits",
    description: "Comprehensive security audits for blockchain applications",
    icon: Shield,
    features: ["Code Review", "Vulnerability Assessment", "Penetration Testing"],
    pricing: "Starting at $2,500/month",
    timeline: "2-6 weeks"
  }
];

const industries = [
  { name: "Finance", applications: ["Digital Payments", "Cross-border Transfers", "Trade Finance"] },
  { name: "Supply Chain", applications: ["Product Tracking", "Authenticity Verification", "Transparency"] },
  { name: "Healthcare", applications: ["Medical Records", "Drug Traceability", "Patient Data"] },
  { name: "Real Estate", applications: ["Property Ownership", "Smart Contracts", "Tokenization"] },
  { name: "Gaming", applications: ["In-game Assets", "Play-to-Earn", "Virtual Economies"] },
  { name: "Government", applications: ["Digital Identity", "Voting Systems", "Public Records"] }
];

const benefits = [
  {
    title: "Enhanced Security",
    description: "Immutable and tamper-proof data storage with cryptographic security",
    icon: Shield,
    percentage: "99.9%"
  },
  {
    title: "Transparency",
    description: "Complete transparency and traceability of all transactions",
    icon: Globe,
    percentage: "100%"
  },
  {
    title: "Cost Reduction",
    description: "Eliminate intermediaries and reduce transaction costs",
    icon: DollarSign,
    percentage: "60%"
  },
  {
    title: "Decentralization",
    description: "Remove single points of failure with distributed architecture",
    icon: Users,
    percentage: "100%"
  }
];

const platforms = [
  { name: "Ethereum", description: "Smart contracts and DApps development" },
  { name: "Binance Smart Chain", description: "Fast and low-cost transactions" },
  { name: "Polygon", description: "Layer 2 scaling solutions" },
  { name: "Solana", description: "High-performance blockchain platform" },
  { name: "Cardano", description: "Research-driven blockchain development" },
  { name: "Polkadot", description: "Multi-chain interoperability" }
];

const process = [
  {
    step: "1",
    title: "Requirements Analysis",
    description: "Analyze your business needs and blockchain requirements",
    duration: "1-2 weeks"
  },
  {
    step: "2",
    title: "Architecture Design",
    description: "Design blockchain architecture and select appropriate platform",
    duration: "2-3 weeks"
  },
  {
    step: "3",
    title: "Smart Contract Development",
    description: "Develop and test smart contracts for your use case",
    duration: "4-12 weeks"
  },
  {
    step: "4",
    title: "Frontend Development",
    description: "Build user interface and integrate with blockchain",
    duration: "4-8 weeks"
  },
  {
    step: "5",
    title: "Testing & Security Audit",
    description: "Comprehensive testing and security audit of the solution",
    duration: "2-4 weeks"
  },
  {
    step: "6",
    title: "Deployment & Maintenance",
    description: "Deploy to mainnet and provide ongoing support",
    duration: "Ongoing"
  }
];

const stats = [
  { number: "50+", label: "Blockchain Projects" },
  { number: "100+", label: "Smart Contracts Deployed" },
  { number: "99.9%", label: "Security Score" },
  { number: "60%", label: "Cost Reduction" }
];

export default function BlockchainPage() {
  return (
    <Layout
      title="Blockchain Development Services - Zion Tech Group"
      description="Expert blockchain development services including smart contracts, DeFi, NFTs, and custom blockchain solutions. Secure, transparent, and decentralized applications."
      keywords="blockchain development, smart contracts, DeFi, NFTs, cryptocurrency, blockchain consulting, distributed ledger"
      canonical="https://ziontechgroup.com/blockchain"
    >
      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-blue-900 to-purple-900 text-white py-20">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Blockchain Development
              </h1>
              <p className="text-xl md:text-2xl text-blue-100 max-w-4xl mx-auto mb-8">
                Build secure, transparent, and decentralized applications with our blockchain development services. 
                From smart contracts to DeFi platforms, we help you harness the power of blockchain technology.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="#contact" className="px-8 py-4 bg-white text-blue-600 rounded-lg hover:bg-gray-100 transition-colors font-semibold">
                  Get Free Consultation
                </a>
                <a href="#services" className="px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white hover:text-blue-600 transition-colors font-semibold">
                  View Our Services
                </a>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  className="text-center"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="text-4xl font-bold text-blue-600 mb-2">{stat.number}</div>
                  <div className="text-gray-600">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Services */}
        <section id="services" className="py-20">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Our Blockchain Services
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                We provide comprehensive blockchain development services across all major platforms and use cases.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blockchainServices.map((service, index) => {
                const IconComponent = service.icon;
                return (
                  <motion.div
                    key={index}
                    className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className="text-blue-600 mb-4">
                      <IconComponent className="w-12 h-12" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 mb-4">
                      {service.description}
                    </p>
                    <ul className="mb-4 space-y-2">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center text-sm text-gray-600">
                          <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <div className="border-t pt-4">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-sm text-gray-500">Pricing:</span>
                        <span className="font-semibold text-green-600">{service.pricing}</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-gray-500">Timeline:</span>
                        <span className="text-sm font-medium">{service.timeline}</span>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Platforms */}
        <section className="py-20 bg-gray-100">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Blockchain Platforms We Support
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                We develop on all major blockchain platforms and can help you choose the right one for your project.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {platforms.map((platform, index) => (
                <motion.div
                  key={index}
                  className="bg-white p-6 rounded-lg shadow-md"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {platform.name}
                  </h3>
                  <p className="text-gray-600">
                    {platform.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Benefits of Blockchain Technology
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Transform your business with the power of blockchain technology.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => {
                const IconComponent = benefit.icon;
                return (
                  <motion.div
                    key={index}
                    className="bg-white p-6 rounded-lg shadow-md text-center"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className="text-blue-600 mb-4">
                      <IconComponent className="w-12 h-12 mx-auto" />
                    </div>
                    <div className="text-3xl font-bold text-blue-600 mb-2">
                      {benefit.percentage}
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      {benefit.title}
                    </h3>
                    <p className="text-gray-600 text-sm">
                      {benefit.description}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Industries */}
        <section className="py-20 bg-gray-100">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Industries We Serve
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Our blockchain solutions are tailored for various industries and use cases.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {industries.map((industry, index) => (
                <motion.div
                  key={index}
                  className="bg-white p-6 rounded-lg shadow-md"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">
                    {industry.name}
                  </h3>
                  <ul className="space-y-2">
                    {industry.applications.map((app, idx) => (
                      <li key={idx} className="flex items-center text-gray-600">
                        <ArrowRight className="w-4 h-4 text-blue-500 mr-2" />
                        {app}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Process */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Our Blockchain Development Process
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                We follow a proven methodology to deliver secure and efficient blockchain solutions.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {process.map((step, index) => (
                <motion.div
                  key={index}
                  className="bg-white p-6 rounded-lg shadow-md relative"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="absolute -top-4 -left-4 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">
                    {step.step}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-2">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    {step.description}
                  </p>
                  <div className="flex items-center text-sm text-blue-600">
                    <Clock className="w-4 h-4 mr-1" />
                    {step.duration}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section id="contact" className="py-20 bg-blue-600 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Build on Blockchain?
            </h2>
            <p className="text-xl mb-8 text-blue-100 max-w-3xl mx-auto">
              Let's discuss how our blockchain development services can transform your business. 
              Get a free consultation and discover the potential of decentralized technology.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a 
                href="/contact" 
                className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold transition-colors"
              >
                Get Free Consultation
              </a>
              <a 
                href="/pricing" 
                className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 rounded-lg font-semibold transition-colors"
              >
                View Pricing
              </a>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
}