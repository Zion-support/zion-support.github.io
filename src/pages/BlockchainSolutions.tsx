import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Link as LinkIcon, 
  Shield, 
  Users, 
  Globe, 
  Lock, 
  BarChart3,
  ArrowRight,
  CheckCircle,
  Star,
  Rocket,
  Lightbulb,
  Database,
  Network,
  Cloud,
  Server,
  Chip,
  Cpu,
  Brain,
  Zap,
  Target
} from 'lucide-react';

const BlockchainSolutions: React.FC = () => {
  const features = [
    {
      icon: <LinkIcon className="w-6 h-6" />,
      title: "Smart Contracts",
      description: "Automated, self-executing contracts with blockchain verification"
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Decentralized Security",
      description: "Immutable, tamper-proof security through distributed ledger technology"
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Trust & Transparency",
      description: "Complete transparency and verifiable trust in all transactions"
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: "Global Accessibility",
      description: "Borderless transactions and global financial inclusion"
    }
  ];

  const benefits = [
    "Enhanced security through cryptographic protection",
    "Reduced transaction costs and faster processing",
    "Elimination of intermediaries and middlemen",
    "Improved traceability and supply chain visibility",
    "Programmable money and automated compliance",
    "Decentralized governance and decision-making"
  ];

  const useCases = [
    {
      title: "Financial Services",
      description: "Cryptocurrency, DeFi, cross-border payments, and asset tokenization",
      icon: <BarChart3 className="w-5 h-5" />
    },
    {
      title: "Supply Chain",
      description: "Product traceability, authenticity verification, and logistics optimization",
      icon: <Network className="w-5 h-5" />
    },
    {
      title: "Healthcare",
      description: "Patient data security, drug traceability, and medical record management",
      icon: <Users className="w-5 h-5" />
    },
    {
      title: "Real Estate",
      description: "Property tokenization, smart contracts, and automated transactions",
      icon: <Lock className="w-5 h-5" />
    }
  ];

  const technologies = [
    {
      name: "Ethereum",
      description: "Smart contract platform with extensive developer ecosystem",
      icon: <Cpu className="w-8 h-8" />
    },
    {
      name: "Hyperledger",
      description: "Enterprise-grade blockchain framework for business applications",
      icon: <Server className="w-8 h-8" />
    },
    {
      name: "Polkadot",
      description: "Multi-chain network enabling interoperability between blockchains",
      icon: <Network className="w-8 h-8" />
    },
    {
      name: "Solana",
      description: "High-performance blockchain with fast transaction processing",
      icon: <Zap className="w-8 h-8" />
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="flex items-center justify-center mb-6">
              <LinkIcon className="w-16 h-16 text-cyan-400 mr-4" />
              <h1 className="text-5xl md:text-6xl font-bold text-white">
                Blockchain Solutions
              </h1>
            </div>
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto mb-8">
              Transform your business with secure, transparent, and decentralized blockchain technology
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-xl"
              >
                Get Started
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link
                to="/services"
                className="inline-flex items-center px-8 py-4 border-2 border-cyan-400 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
              >
                Explore Services
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Revolutionary Blockchain Features
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our blockchain solutions deliver unprecedented security, transparency, and efficiency
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-6 hover:border-cyan-400 transition-all duration-300"
              >
                <div className="text-cyan-400 mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/20">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Why Choose Blockchain?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Experience the transformative power of decentralized technology
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="flex items-start space-x-3"
              >
                <CheckCircle className="w-6 h-6 text-cyan-400 mt-1 flex-shrink-0" />
                <span className="text-gray-300 text-lg">{benefit}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Industry Applications
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Discover how blockchain is revolutionizing industries and creating new business models
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {useCases.map((useCase, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-6 hover:border-cyan-400 transition-all duration-300"
              >
                <div className="text-cyan-400 mb-4">{useCase.icon}</div>
                <h3 className="text-xl font-semibold text-white mb-2">{useCase.title}</h3>
                <p className="text-gray-300">{useCase.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Stack Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/20">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Advanced Blockchain Platforms
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Built on cutting-edge blockchain technologies for maximum performance and security
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {technologies.map((tech, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-6 hover:border-cyan-400 transition-all duration-300 text-center"
              >
                <div className="text-cyan-400 mb-4 flex justify-center">{tech.icon}</div>
                <h3 className="text-xl font-semibold text-white mb-2">{tech.name}</h3>
                <p className="text-gray-300">{tech.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Development Services Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Blockchain Development Services
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              From concept to deployment, we provide end-to-end blockchain solutions
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-8 mb-6">
                <Brain className="w-16 h-16 text-cyan-400 mx-auto mb-4" />
                <h3 className="text-2xl font-semibold text-white mb-2">Smart Contract Development</h3>
                <p className="text-gray-300">Custom smart contracts for automated business logic and compliance</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-center"
            >
              <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-8 mb-6">
                <Database className="w-16 h-16 text-cyan-400 mx-auto mb-4" />
                <h3 className="text-2xl font-semibold text-white mb-2">DApp Development</h3>
                <p className="text-gray-300">Decentralized applications with intuitive user interfaces</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-center"
            >
              <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-8 mb-6">
                <Target className="w-16 h-16 text-cyan-400 mx-auto mb-4" />
                <h3 className="text-2xl font-semibold text-white mb-2">Blockchain Integration</h3>
                <p className="text-gray-300">Seamless integration with existing enterprise systems</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Build on Blockchain?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Transform your business with secure, transparent, and efficient blockchain solutions
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-xl"
              >
                Start Building
                <Rocket className="ml-2 w-5 h-5" />
              </Link>
              <Link
                to="/services"
                className="inline-flex items-center px-8 py-4 border-2 border-cyan-400 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
              >
                Explore All Services
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default BlockchainSolutions;