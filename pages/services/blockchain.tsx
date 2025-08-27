import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { 
  Link as LinkIcon, 
  Shield, 
  Zap, 
  Users, 
  Database, 
  Globe,
  CheckCircle,
  BarChart3,
  Network,
  Server,
  Cpu,
  Cloud,
  ArrowRight
} from 'lucide-react';

const Blockchain = () => {
  const features = [
    {
      icon: LinkIcon,
      title: "Smart Contracts",
      description: "Self-executing contracts with automated business logic and trustless execution"
    },
    {
      icon: Shield,
      title: "Decentralized Security",
      description: "Immutable, tamper-proof records with cryptographic verification"
    },
    {
      icon: Zap,
      title: "Instant Transactions",
      description: "Fast, borderless transactions with minimal fees and global reach"
    },
    {
      icon: Users,
      title: "Consensus Mechanisms",
      description: "Robust agreement protocols ensuring network integrity and reliability"
    },
    {
      icon: Database,
      title: "Distributed Ledger",
      description: "Transparent, shared database accessible to all network participants"
    },
    {
      icon: Globe,
      title: "Cross-Border Solutions",
      description: "Seamless international transactions and global business operations"
    }
  ];

  const benefits = [
    "Eliminate intermediaries and reduce transaction costs by 40-80%",
    "Increase transparency and trust in business operations",
    "Enable automated, self-executing business processes",
    "Provide immutable audit trails and compliance records",
    "Facilitate global trade and cross-border transactions",
    "Enhance security with cryptographic protection"
  ];

  const industrySolutions = [
    {
      industry: "Finance",
      description: "DeFi platforms, cross-border payments, and asset tokenization",
      features: ["DeFi protocols", "Cross-border payments", "Asset tokenization"]
    },
    {
      industry: "Supply Chain",
      description: "End-to-end traceability, authenticity verification, and logistics optimization",
      features: ["Product traceability", "Authenticity verification", "Logistics tracking"]
    },
    {
      industry: "Healthcare",
      description: "Patient data management, drug traceability, and medical records",
      features: ["Patient data security", "Drug traceability", "Medical records"]
    },
    {
      industry: "Real Estate",
      description: "Property tokenization, smart contracts, and automated transactions",
      features: ["Property tokens", "Smart contracts", "Automated transactions"]
    },
    {
      industry: "Government",
      description: "Digital identity, voting systems, and public records",
      features: ["Digital identity", "Voting systems", "Public records"]
    },
    {
      industry: "Energy",
      description: "Renewable energy trading, carbon credits, and grid management",
      features: ["Energy trading", "Carbon credits", "Grid management"]
    }
  ];

  const technologyStack = [
    {
      category: "Blockchain Platforms",
      technologies: ["Ethereum", "Hyperledger", "Polkadot", "Solana", "Cardano"]
    },
    {
      category: "Smart Contracts",
      technologies: ["Solidity", "Rust", "Go", "JavaScript", "Python"]
    },
    {
      category: "Consensus Mechanisms",
      technologies: ["Proof of Work", "Proof of Stake", "Delegated PoS", "Byzantine Fault Tolerance"]
    },
    {
      category: "Development Tools",
      technologies: ["Truffle", "Hardhat", "Web3.js", "OpenZeppelin", "IPFS"]
    },
    {
      category: "DeFi Protocols",
      technologies: ["Uniswap", "Compound", "Aave", "MakerDAO", "Yearn Finance"]
    },
    {
      category: "Security",
      technologies: ["Multi-signature wallets", "Hardware security modules", "Audit tools", "Penetration testing"]
    }
  ];

  const useCases = [
    {
      title: "Supply Chain Transparency",
      description: "Track products from source to consumer with immutable records",
      benefits: ["Reduce fraud", "Improve efficiency", "Enhance trust"]
    },
    {
      title: "Digital Identity",
      description: "Self-sovereign identity management with privacy protection",
      benefits: ["Eliminate duplication", "Enhance security", "User control"]
    },
    {
      title: "Smart Contracts",
      description: "Automated business processes with conditional execution",
      benefits: ["Reduce costs", "Increase speed", "Eliminate errors"]
    },
    {
      title: "Asset Tokenization",
      description: "Convert real-world assets into digital tokens",
      benefits: ["Liquidity", "Fractional ownership", "Global access"]
    }
  ];

  const testimonials = [
    {
      name: "David Kim",
      role: "CTO, FinTech Solutions",
      content: "Zion Tech Group's blockchain implementation reduced our transaction costs by 60% and eliminated settlement delays.",
      rating: 5
    },
    {
      name: "Maria Rodriguez",
      role: "Supply Chain Director, Global Retail",
      content: "The blockchain traceability system gave us complete visibility into our supply chain, improving efficiency and trust.",
      rating: 5
    },
    {
      name: "James Wilson",
      role: "CEO, HealthTech Innovations",
      content: "Their blockchain solution for medical records transformed our data management and patient privacy protection.",
      rating: 5
    }
  ];

  return (
    <>
      <Head>
        <title>Blockchain Services | Zion Tech Group</title>
        <meta name="description" content="Transform your business with Zion Tech Group's cutting-edge Blockchain services. Smart contracts, DeFi, and decentralized solutions." />
        <meta name="keywords" content="blockchain, smart contracts, DeFi, cryptocurrency, distributed ledger, decentralized applications" />
      </Head>

      <div className="min-h-screen bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-orange-600/20 to-yellow-600/20"></div>
          <div className="relative container mx-auto text-center">
            <div className="max-w-4xl mx-auto">
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                Blockchain
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-yellow-400">
                  Innovation
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
                Transform your business with decentralized technology. Smart contracts, DeFi, and blockchain solutions 
                that create trust, transparency, and efficiency.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  href="/contact"
                  className="bg-gradient-to-r from-orange-600 to-yellow-600 hover:from-orange-700 hover:to-yellow-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105"
                >
                  Explore Blockchain Solutions
                </Link>
                <a 
                  href="tel:+13024640950"
                  className="border-2 border-white/30 hover:border-white/50 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:bg-white/10"
                >
                  📞 Call +1 (302) 464-0950
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4">
          <div className="container mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">
                Blockchain Features
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our comprehensive blockchain platform provides cutting-edge features for modern business needs
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div 
                  key={index}
                  className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 hover:border-white/40 transition-all duration-300 hover:transform hover:scale-105"
                >
                  <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-yellow-500 rounded-lg flex items-center justify-center mb-6">
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-4">{feature.title}</h3>
                  <p className="text-gray-300 leading-relaxed">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 px-4 bg-white/5">
          <div className="container mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">
                Transform Your Business
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Experience the revolutionary benefits of blockchain technology
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <CheckCircle className="w-6 h-6 text-orange-400 mt-1 flex-shrink-0" />
                  <p className="text-lg text-gray-300">{benefit}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Industry Solutions Section */}
        <section className="py-20 px-4">
          <div className="container mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">
                Industry Solutions
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Tailored blockchain solutions for your industry's unique challenges
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {industrySolutions.map((solution, index) => (
                <div 
                  key={index}
                  className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 hover:border-white/40 transition-all duration-300"
                >
                  <h3 className="text-2xl font-semibold text-white mb-4">{solution.industry}</h3>
                  <p className="text-gray-300 leading-relaxed mb-6">{solution.description}</p>
                  <ul className="space-y-2">
                    {solution.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4 text-orange-400" />
                        <span className="text-gray-300 text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Use Cases Section */}
        <section className="py-20 px-4 bg-white/5">
          <div className="container mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">
                Blockchain Use Cases
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Real-world applications that demonstrate blockchain's transformative power
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              {useCases.map((useCase, index) => (
                <div 
                  key={index}
                  className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20"
                >
                  <h3 className="text-2xl font-semibold text-white mb-4">{useCase.title}</h3>
                  <p className="text-gray-300 leading-relaxed mb-6">{useCase.description}</p>
                  <div>
                    <h4 className="text-lg font-semibold text-orange-400 mb-3">Key Benefits</h4>
                    <ul className="space-y-2">
                      {useCase.benefits.map((benefit, idx) => (
                        <li key={idx} className="flex items-center space-x-2">
                          <CheckCircle className="w-4 h-4 text-orange-400" />
                          <span className="text-gray-300 text-sm">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Technology Stack Section */}
        <section className="py-20 px-4">
          <div className="container mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">
                Technology Stack
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Built with cutting-edge blockchain technologies for maximum performance and security
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {technologyStack.map((tech, index) => (
                <div 
                  key={index}
                  className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20"
                >
                  <h3 className="text-xl font-semibold text-white mb-4">{tech.category}</h3>
                  <div className="space-y-2">
                    {tech.technologies.map((technology, idx) => (
                      <div key={idx} className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-orange-400 rounded-full"></div>
                        <span className="text-gray-300">{technology}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-20 px-4 bg-white/5">
          <div className="container mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">
                Client Success Stories
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Real results from businesses using our blockchain solutions
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div 
                  key={index}
                  className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20"
                >
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <span key={i} className="text-yellow-400">⭐</span>
                    ))}
                  </div>
                  <p className="text-gray-300 mb-6 italic">"{testimonial.content}"</p>
                  <div>
                    <p className="font-semibold text-white">{testimonial.name}</p>
                    <p className="text-gray-400">{testimonial.role}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4">
          <div className="container mx-auto text-center">
            <div className="max-w-4xl mx-auto bg-gradient-to-r from-orange-600/20 to-yellow-600/20 rounded-2xl p-12 border border-white/20">
              <h2 className="text-4xl font-bold text-white mb-6">
                Ready to Go Blockchain?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Transform your business with decentralized technology. Our blockchain experts are ready 
                to help you build the future of trust and transparency.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  href="/contact"
                  className="bg-gradient-to-r from-orange-600 to-yellow-600 hover:from-orange-700 hover:to-yellow-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105"
                >
                  Start Blockchain Journey
                </Link>
                <a 
                  href="tel:+13024640950"
                  className="border-2 border-white/30 hover:border-white/50 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:bg-white/10"
                >
                  📞 +1 (302) 464-0950
                </a>
              </div>
              <div className="mt-8 text-gray-400">
                <p>📍 364 E Main St STE 1008, Middletown DE 19709</p>
                <p>✉️ kleber@ziontechgroup.com</p>
                <p>🌐 https://ziontechgroup.com</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Blockchain;