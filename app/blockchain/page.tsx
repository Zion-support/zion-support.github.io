import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Shield, Link as LinkIcon, Lock, Zap, Target, BarChart, Settings, CheckCircle, ArrowRight, Star, Users, Award, Globe, Database, Smartphone, TrendingUp, Calendar, FileText, Search, Code, Cloud, Wrench, Hammer, Paintbrush, Scissors, BookOpen, Calculator, Clock3, Compass, PieChart, TrendingDown, Activity, Zap as Lightning, Target as Crosshair, Shield as Security, Users as People, Star as StarIcon, CheckCircle as Check, ArrowRight as Arrow, Phone as PhoneIcon, Mail as MailIcon, MapPin as Location } from 'lucide-react';

const BlockchainPage: React.FC = () => {
  const features = [
    {
      icon: Shield,
      title: "Decentralized Security",
      description: "Immutable blockchain technology ensures maximum security and transparency for all transactions.",
      benefits: ["Immutable Records", "Cryptographic Security", "Decentralized Control", "Transparent Operations"]
    },
    {
      icon: LinkIcon,
      title: "Smart Contracts",
      description: "Self-executing contracts that automatically enforce terms and conditions without intermediaries.",
      benefits: ["Automated Execution", "Reduced Costs", "Eliminate Intermediaries", "Trustless Operations"]
    },
    {
      icon: Lock,
      title: "Data Integrity",
      description: "Tamper-proof data storage and verification ensuring complete data integrity and authenticity.",
      benefits: ["Tamper-Proof", "Data Verification", "Audit Trails", "Immutable History"]
    },
    {
      icon: Zap,
      title: "Instant Settlements",
      description: "Real-time transaction processing and settlement without traditional banking delays.",
      benefits: ["Real-time Processing", "24/7 Operations", "Global Reach", "Lower Fees"]
    }
  ];

  const solutions = [
    {
      title: "Supply Chain Management",
      description: "End-to-end visibility and traceability of products from origin to consumer using blockchain technology.",
      icon: Globe,
      benefits: ["Product Traceability", "Quality Assurance", "Fraud Prevention", "Transparent Records"],
      useCases: ["Food Safety", "Pharmaceuticals", "Luxury Goods", "Manufacturing"]
    },
    {
      title: "Financial Services",
      description: "Revolutionary financial solutions including digital currencies, cross-border payments, and DeFi applications.",
      icon: BarChart,
      benefits: ["Cross-border Payments", "Digital Currencies", "DeFi Solutions", "Reduced Costs"],
      useCases: ["Remittances", "Trade Finance", "Digital Banking", "Investment Platforms"]
    },
    {
      title: "Identity Management",
      description: "Secure, decentralized identity verification and management systems for individuals and organizations.",
      icon: Users,
      benefits: ["Self-Sovereign Identity", "Privacy Protection", "Fraud Prevention", "Easy Verification"],
      useCases: ["KYC/AML", "Digital Passports", "Access Control", "Credential Verification"]
    },
    {
      title: "Healthcare Records",
      description: "Secure, interoperable healthcare data management with patient-controlled access and privacy.",
      icon: Shield,
      benefits: ["Patient Privacy", "Data Interoperability", "Secure Sharing", "Audit Trails"],
      useCases: ["Medical Records", "Clinical Trials", "Insurance Claims", "Research Data"]
    }
  ];

  const technologies = [
    {
      name: "Ethereum",
      description: "Leading smart contract platform for decentralized applications",
      features: ["Smart Contracts", "DApps", "DeFi", "NFTs"]
    },
    {
      name: "Hyperledger",
      description: "Enterprise-grade blockchain framework for business applications",
      features: ["Private Networks", "Consensus Mechanisms", "Modular Architecture", "Enterprise Integration"]
    },
    {
      name: "Corda",
      description: "Distributed ledger platform designed for financial services",
      features: ["Financial Services", "Privacy", "Interoperability", "Regulatory Compliance"]
    },
    {
      name: "Polkadot",
      description: "Multi-chain network enabling different blockchains to transfer messages",
      features: ["Interoperability", "Scalability", "Governance", "Parachains"]
    }
  ];

  const benefits = [
    {
      icon: TrendingUp,
      title: "Cost Reduction",
      description: "Eliminate intermediaries and reduce transaction costs significantly.",
      metric: "60%"
    },
    {
      icon: Shield,
      title: "Enhanced Security",
      description: "Cryptographic security and decentralized architecture prevent fraud and attacks.",
      metric: "99.9%"
    },
    {
      icon: Target,
      title: "Transparency",
      description: "Complete transparency and immutability of all transactions and records.",
      metric: "100%"
    },
    {
      icon: Zap,
      title: "Faster Processing",
      description: "Real-time processing and settlement without traditional banking delays.",
      metric: "10x"
    }
  ];

  const industries = [
    {
      name: "Financial Services",
      icon: BarChart,
      applications: ["Digital Banking", "Cross-border Payments", "Trade Finance", "DeFi Platforms"]
    },
    {
      name: "Healthcare",
      icon: Shield,
      applications: ["Medical Records", "Drug Traceability", "Clinical Trials", "Insurance Claims"]
    },
    {
      name: "Supply Chain",
      icon: Globe,
      applications: ["Product Tracking", "Quality Assurance", "Logistics", "Compliance"]
    },
    {
      name: "Government",
      icon: Users,
      applications: ["Digital Identity", "Voting Systems", "Public Records", "Transparency"]
    },
    {
      name: "Real Estate",
      icon: Target,
      applications: ["Property Records", "Smart Contracts", "Tokenization", "Transparency"]
    },
    {
      name: "Energy",
      icon: Zap,
      applications: ["Carbon Credits", "Energy Trading", "Grid Management", "Renewable Certificates"]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Blockchain Solutions - Zion Tech Group</title>
        <meta name="description" content="Revolutionary blockchain solutions for secure, transparent, and decentralized applications. Transform your business with cutting-edge blockchain technology." />
        <meta name="keywords" content="blockchain, smart contracts, decentralized, cryptocurrency, DeFi, Zion Tech Group" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">Blockchain</span> Solutions
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Revolutionary blockchain technology for secure, transparent, and decentralized applications. Transform your business with immutable, trustless systems.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="bg-gradient-to-r from-cyan-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-cyan-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
            >
              Get Started
            </a>
            <a
              href="/consultation"
              className="border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
            >
              Free Consultation
            </a>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Key <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">Features</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Advanced blockchain capabilities that ensure security, transparency, and efficiency in all operations.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 hover:border-cyan-400/50 transition-all duration-300 group">
                <div className="text-cyan-400 mb-4 group-hover:text-cyan-300 transition-colors">
                  <feature.icon className="w-12 h-12" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-300 mb-4">{feature.description}</p>
                <ul className="space-y-2">
                  {feature.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-400">
                      <CheckCircle className="w-4 h-4 text-cyan-400 mr-2" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Blockchain <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">Solutions</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive blockchain solutions tailored to your industry and business needs.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {solutions.map((solution, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-lg rounded-xl p-8 border border-white/20 hover:border-cyan-400/50 transition-all duration-300 group">
                <div className="flex items-start space-x-4">
                  <div className="text-cyan-400 group-hover:text-cyan-300 transition-colors">
                    <solution.icon className="w-12 h-12" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-white mb-3">{solution.title}</h3>
                    <p className="text-gray-300 mb-4">{solution.description}</p>
                    <div className="mb-4">
                      <h4 className="text-sm font-semibold text-cyan-400 mb-2">Benefits:</h4>
                      <div className="grid grid-cols-2 gap-2">
                        {solution.benefits.map((benefit, idx) => (
                          <div key={idx} className="flex items-center text-sm text-cyan-400">
                            <CheckCircle className="w-4 h-4 mr-2" />
                            {benefit}
                          </div>
                        ))}
                      </div>
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-cyan-400 mb-2">Use Cases:</h4>
                      <div className="flex flex-wrap gap-1">
                        {solution.useCases.map((useCase, idx) => (
                          <span key={idx} className="px-2 py-1 bg-cyan-400/20 text-cyan-300 text-xs rounded-full">
                            {useCase}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Blockchain <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">Technologies</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We work with leading blockchain platforms to deliver the best solutions for your needs.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {technologies.map((tech, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 hover:border-cyan-400/50 transition-all duration-300 group text-center">
                <h3 className="text-xl font-bold text-white mb-3">{tech.name}</h3>
                <p className="text-gray-300 mb-4">{tech.description}</p>
                <div className="space-y-2">
                  {tech.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center text-sm text-cyan-400">
                      <CheckCircle className="w-4 h-4 mr-2" />
                      {feature}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Industry <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">Applications</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Blockchain solutions across various industries transforming operations and creating new opportunities.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industries.map((industry, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 hover:border-cyan-400/50 transition-all duration-300 group">
                <div className="text-cyan-400 mb-4 group-hover:text-cyan-300 transition-colors">
                  <industry.icon className="w-12 h-12" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{industry.name}</h3>
                <div className="space-y-2">
                  {industry.applications.map((app, idx) => (
                    <div key={idx} className="flex items-center text-sm text-gray-400">
                      <CheckCircle className="w-4 h-4 text-cyan-400 mr-2" />
                      {app}
                    </div>
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
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Why Choose <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">Blockchain</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Transform your business with blockchain technology that delivers measurable results and competitive advantages.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 hover:border-cyan-400/50 transition-all duration-300 group text-center">
                <div className="text-cyan-400 mb-4 group-hover:text-cyan-300 transition-colors">
                  <benefit.icon className="w-12 h-12 mx-auto" />
                </div>
                <div className="text-3xl font-bold text-white mb-2">{benefit.metric}</div>
                <h3 className="text-xl font-bold text-white mb-3">{benefit.title}</h3>
                <p className="text-gray-300">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Go <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">Blockchain</span>?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Transform your business with secure, transparent, and efficient blockchain solutions tailored to your needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+13024640950"
              className="bg-gradient-to-r from-cyan-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-cyan-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2"
            >
              <PhoneIcon className="w-5 h-5" />
              Call (302) 464-0950
            </a>
            <a
              href="/contact"
              className="border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 flex items-center justify-center gap-2"
            >
              <MailIcon className="w-5 h-5" />
              Get Quote
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BlockchainPage;