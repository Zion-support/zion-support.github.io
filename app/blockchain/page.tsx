import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { Link, Shield, Target, Globe, Brain, Cloud, Zap, CheckCircle, ArrowRight, Star, TrendingUp, Building, Clock, Phone, Mail, MapPin, Settings, Database, Smartphone, Lock, FileText, Search, Bot, Palette, Camera, Music, Video, Gamepad2, ShoppingCart, CreditCard, Factory, Car, Plane, Ship, Train, Home, Heart, Stethoscope, GraduationCap, Briefcase, Wrench, Hammer, Paintbrush, Scissors, BookOpen, Calculator, Calendar, Clock3, Compass, PieChart, TrendingDown, Activity, DollarSign, Eye, MessageSquare } from 'lucide-react';

const BlockchainPage: React.FC = () => {
  const blockchainSolutions = [
    {
      icon: Shield,
      title: "Smart Contracts",
      description: "Self-executing contracts with terms directly written into code for automated, secure transactions.",
      features: ["Automated Execution", "Transparent Terms", "Immutable Records", "Cost Reduction"],
      applications: ["Supply Chain", "Real Estate", "Insurance", "Legal Agreements"]
    },
    {
      icon: Database,
      title: "Decentralized Apps (DApps)",
      description: "Applications that run on blockchain networks without central authority control.",
      features: ["Decentralized Control", "User Ownership", "Censorship Resistance", "Open Source"],
      applications: ["Finance", "Social Media", "Gaming", "Marketplaces"]
    },
    {
      icon: DollarSign,
      title: "Cryptocurrency Solutions",
      description: "Custom cryptocurrency and token development for various business needs.",
      features: ["Custom Tokens", "Payment Systems", "Reward Programs", "Asset Tokenization"],
      applications: ["E-commerce", "Loyalty Programs", "Asset Trading", "Cross-border Payments"]
    },
    {
      icon: Link,
      title: "Supply Chain Tracking",
      description: "Transparent, immutable tracking of products from origin to consumer.",
      features: ["Product Provenance", "Quality Assurance", "Fraud Prevention", "Real-time Tracking"],
      applications: ["Food Safety", "Luxury Goods", "Pharmaceuticals", "Manufacturing"]
    },
    {
      icon: FileText,
      title: "Document Verification",
      description: "Secure, tamper-proof document storage and verification systems.",
      features: ["Document Integrity", "Identity Verification", "Access Control", "Audit Trails"],
      applications: ["Certificates", "Legal Documents", "Medical Records", "Academic Credentials"]
    },
    {
      icon: Users,
      title: "Decentralized Identity",
      description: "Self-sovereign identity solutions that give users control over their personal data.",
      features: ["User Control", "Privacy Protection", "Interoperability", "Reduced Identity Theft"],
      applications: ["Digital Identity", "KYC/AML", "Access Management", "Personal Data Control"]
    }
  ];

  const blockchainTechnologies = [
    {
      name: "Ethereum",
      description: "Smart contract platform for building decentralized applications.",
      icon: Brain
    },
    {
      name: "Hyperledger",
      description: "Enterprise-grade blockchain frameworks for business applications.",
      icon: Building
    },
    {
      name: "Polkadot",
      description: "Multi-chain network enabling different blockchains to transfer messages.",
      icon: Globe
    },
    {
      name: "Cosmos",
      description: "Network of independent blockchains that can communicate with each other.",
      icon: Network
    },
    {
      name: "Solana",
      description: "High-performance blockchain for decentralized apps and crypto.",
      icon: Zap
    },
    {
      name: "Polygon",
      description: "Ethereum scaling solution for faster and cheaper transactions.",
      icon: Activity
    }
  ];

  const benefits = [
    {
      icon: Shield,
      title: "Enhanced Security",
      description: "Cryptographic security and decentralized architecture protect against fraud and attacks."
    },
    {
      icon: Eye,
      title: "Transparency",
      description: "Public ledgers provide complete transparency and traceability of all transactions."
    },
    {
      icon: Zap,
      title: "Efficiency",
      description: "Automated processes and smart contracts reduce manual work and errors."
    },
    {
      icon: DollarSign,
      title: "Cost Reduction",
      description: "Eliminate intermediaries and reduce transaction costs significantly."
    },
    {
      icon: Globe,
      title: "Global Access",
      description: "Borderless transactions and services accessible worldwide."
    },
    {
      icon: Lock,
      title: "Immutability",
      description: "Once recorded, data cannot be altered, ensuring data integrity."
    }
  ];

  const industries = [
    {
      name: "Financial Services",
      description: "Banking, payments, lending, and insurance solutions",
      icon: CreditCard
    },
    {
      name: "Healthcare",
      description: "Medical records, drug traceability, and patient data management",
      icon: Stethoscope
    },
    {
      name: "Supply Chain",
      description: "Product tracking, authenticity verification, and logistics",
      icon: Truck
    },
    {
      name: "Real Estate",
      description: "Property ownership, smart contracts, and tokenization",
      icon: Home
    },
    {
      name: "Government",
      description: "Voting systems, identity management, and public records",
      icon: Building
    },
    {
      name: "Entertainment",
      description: "NFTs, gaming, content ownership, and royalty distribution",
      icon: Gamepad2
    }
  ];

  return (
    <>
      <Helmet>
        <title>Blockchain Solutions - Zion Tech Group | AI & IT Solutions</title>
        <meta name="description" content="Implement blockchain solutions for secure, transparent, and decentralized operations. Smart contracts, DApps, cryptocurrency, and supply chain tracking." />
        <meta name="keywords" content="blockchain, smart contracts, DApps, cryptocurrency, decentralized solutions, supply chain, digital identity" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <Navigation />
        
        <main className="pt-24">
          {/* Hero Section */}
          <section className="container mx-auto px-4 py-16">
            <div className="text-center mb-16">
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 cyber-text neon-pulse">
                Blockchain Solutions
              </h1>
              <p className="text-xl text-cyan-400 mb-8 max-w-4xl mx-auto">
                Transform your business with secure, transparent, and decentralized blockchain solutions. 
                From smart contracts to cryptocurrency, we build the future of digital trust.
              </p>
            </div>
          </section>

          {/* Blockchain Solutions */}
          <section className="container mx-auto px-4 py-16">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-white mb-4">Our Blockchain Solutions</h2>
              <p className="text-xl text-gray-300">Comprehensive blockchain services for every business need</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blockchainSolutions.map((solution, index) => (
                <div key={index} className="cyber-card hologram-card p-6 group hover:scale-105 transition-transform duration-300">
                  <div className="flex items-center mb-4">
                    <solution.icon className="w-12 h-12 text-cyan-400 mr-4" />
                    <h3 className="text-xl font-bold text-white">{solution.title}</h3>
                  </div>
                  <p className="text-gray-300 mb-4">{solution.description}</p>
                  
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-white mb-2">Key Features</h4>
                    <ul className="space-y-1">
                      {solution.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-sm text-gray-400">
                          <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-white mb-2">Applications</h4>
                    <div className="flex flex-wrap gap-1">
                      {solution.applications.map((app, appIndex) => (
                        <span key={appIndex} className="px-2 py-1 bg-slate-800 text-cyan-400 text-xs rounded">
                          {app}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Technologies */}
          <section className="container mx-auto px-4 py-16">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-white mb-4">Blockchain Technologies</h2>
              <p className="text-xl text-gray-300">Leading blockchain platforms and frameworks we work with</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blockchainTechnologies.map((tech, index) => (
                <div key={index} className="cyber-card p-6 text-center">
                  <tech.icon className="w-16 h-16 text-purple-400 mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-white mb-3">{tech.name}</h3>
                  <p className="text-gray-300">{tech.description}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Benefits */}
          <section className="container mx-auto px-4 py-16">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-white mb-4">Why Choose Blockchain?</h2>
              <p className="text-xl text-gray-300">The advantages of implementing blockchain solutions</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="cyber-card p-6 text-center">
                  <benefit.icon className="w-16 h-16 text-green-400 mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-white mb-3">{benefit.title}</h3>
                  <p className="text-gray-300">{benefit.description}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Industries */}
          <section className="container mx-auto px-4 py-16">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-white mb-4">Industries We Serve</h2>
              <p className="text-xl text-gray-300">Blockchain solutions across various industries</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {industries.map((industry, index) => (
                <div key={index} className="cyber-card p-6 text-center">
                  <industry.icon className="w-16 h-16 text-blue-400 mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-white mb-3">{industry.name}</h3>
                  <p className="text-gray-300">{industry.description}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Implementation Process */}
          <section className="container mx-auto px-4 py-16">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-white mb-4">Implementation Process</h2>
              <p className="text-xl text-gray-300">How we build and deploy blockchain solutions</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="cyber-card p-6 text-center">
                <div className="w-12 h-12 bg-cyan-400 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-lg">1</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Strategy & Planning</h3>
                <p className="text-gray-300">Define blockchain use cases and develop implementation strategy.</p>
              </div>
              
              <div className="cyber-card p-6 text-center">
                <div className="w-12 h-12 bg-purple-400 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-lg">2</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Development & Testing</h3>
                <p className="text-gray-300">Build and thoroughly test blockchain applications and smart contracts.</p>
              </div>
              
              <div className="cyber-card p-6 text-center">
                <div className="w-12 h-12 bg-green-400 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-lg">3</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Deployment & Integration</h3>
                <p className="text-gray-300">Deploy blockchain solutions and integrate with existing systems.</p>
              </div>
              
              <div className="cyber-card p-6 text-center">
                <div className="w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-lg">4</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Support & Maintenance</h3>
                <p className="text-gray-300">Ongoing support, monitoring, and system maintenance.</p>
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="container mx-auto px-4 py-16">
            <div className="cyber-card text-center p-12">
              <h2 className="text-4xl font-bold text-white mb-6">Ready to Implement Blockchain?</h2>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Let's discuss how blockchain technology can transform your business operations 
                and create new opportunities for growth and innovation.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="cyber-button inline-flex items-center justify-center"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Get Free Consultation
                </a>
                <a
                  href="tel:+13024640950"
                  className="cyber-button inline-flex items-center justify-center"
                  style={{background: 'linear-gradient(45deg, #8b5cf6, #ec4899)'}}
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Call (302) 464-0950
                </a>
              </div>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default BlockchainPage;