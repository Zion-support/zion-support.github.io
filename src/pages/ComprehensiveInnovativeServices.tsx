import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const COMPREHENSIVE_INNOVATIVE_SERVICES = [
  // AI & Machine Learning Services
  {
    id: "ai-powered-crm",
    title: "AI-Powered Customer Relationship Management",
    description: "Intelligent CRM system that uses machine learning to predict customer behavior, automate follow-ups, and optimize sales strategies.",
    category: "AI & Machine Learning",
    price: 1500,
    marketPrice: "$1,500 - $5,000/month",
    features: ["Predictive customer analytics", "Automated lead scoring", "Smart email campaigns", "Sales forecasting"],
    benefits: ["Increase sales conversion by 35%", "Reduce manual follow-up time by 60%", "Improve customer retention"],
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com"
    }
  },
  {
    id: "ai-powered-seo-optimizer",
    title: "AI-Powered SEO Optimization Suite",
    description: "Comprehensive SEO platform that uses artificial intelligence to analyze, optimize, and monitor website performance with predictive analytics.",
    category: "AI & Machine Learning",
    price: 299,
    marketPrice: "$299 - $799/month",
    features: ["AI-powered keyword research", "Content optimization suggestions", "Technical SEO auditing", "Competitor analysis"],
    benefits: ["Improve search rankings by 40-60%", "Reduce SEO management time by 70%", "Increase organic traffic"],
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com"
    }
  },
  {
    id: "autonomous-ai-research-assistant",
    title: "Autonomous AI Research Assistant",
    description: "Self-learning AI research platform that autonomously conducts research, analyzes data, and generates insights across multiple domains.",
    category: "AI & Machine Learning",
    price: 3500,
    marketPrice: "$3,500 - $12,000/month",
    features: ["Autonomous research execution", "Multi-domain knowledge synthesis", "Real-time data analysis", "Insight generation"],
    benefits: ["Accelerate research by 10x", "Reduce research costs", "Discover hidden insights", "Automate literature reviews"],
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com"
    }
  },
  {
    id: "ai-powered-healthcare-diagnostics",
    title: "AI-Powered Healthcare Diagnostics Platform",
    description: "Comprehensive medical diagnostics platform using AI to analyze medical images, patient data, and provide diagnostic recommendations.",
    category: "Healthcare Technology",
    price: 2800,
    marketPrice: "$2,800 - $8,500/month",
    features: ["Medical image analysis", "Patient data analytics", "Diagnostic recommendations", "Risk assessment"],
    benefits: ["Improve diagnostic accuracy by 30%", "Reduce diagnostic time", "Lower healthcare costs", "Better patient outcomes"],
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com"
    }
  },
  {
    id: "ai-powered-creative-design-platform",
    title: "AI-Powered Creative Design Platform",
    description: "Intelligent design platform that uses AI to generate creative content, logos, graphics, and marketing materials.",
    category: "Creative Design",
    price: 180,
    marketPrice: "$180 - $500/month",
    features: ["AI logo generation", "Graphic design automation", "Brand identity creation", "Marketing material design"],
    benefits: ["Reduce design costs by 70%", "Faster design creation", "Consistent brand identity", "Professional quality output"],
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com"
    }
  },
  {
    id: "ai-powered-voice-assistant-platform",
    title: "AI-Powered Voice Assistant Platform",
    description: "Enterprise-grade voice assistant platform with natural language processing, multilingual support, and custom voice applications.",
    category: "Voice AI",
    price: 650,
    marketPrice: "$650 - $2,000/month",
    features: ["Natural language processing", "Multilingual support", "Custom voice applications", "Integration APIs"],
    benefits: ["Improve customer experience", "Reduce support costs", "24/7 availability", "Multilingual support"],
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com"
    }
  },
  {
    id: "ai-powered-education-platform",
    title: "AI-Powered Personalized Education Platform",
    description: "Intelligent learning platform that adapts to individual student needs, providing personalized education experiences and automated tutoring.",
    category: "Education Technology",
    price: 220,
    marketPrice: "$220 - $800/month",
    features: ["Personalized learning paths", "AI tutoring assistance", "Adaptive assessments", "Progress tracking"],
    benefits: ["Improve learning outcomes by 40%", "Personalized education", "24/7 learning support", "Scalable education"],
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com"
    }
  },

  // Quantum Computing Services
  {
    id: "quantum-computing-simulation",
    title: "Quantum Computing Simulation Platform",
    description: "Advanced quantum computing simulation and optimization platform for research institutions and enterprises exploring quantum algorithms.",
    category: "Quantum Computing",
    price: 5000,
    marketPrice: "$5,000 - $15,000/month",
    features: ["Quantum circuit simulator", "Algorithm optimization tools", "Performance benchmarking", "Multi-qubit support"],
    benefits: ["Accelerate quantum research", "Reduce hardware costs", "Faster algorithm development", "Collaborative development"],
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com"
    }
  },
  {
    id: "quantum-cryptography-platform",
    title: "Quantum Cryptography & Security Platform",
    description: "Next-generation cryptographic platform using quantum key distribution for unbreakable encryption and secure communications.",
    category: "Quantum Security",
    price: 8000,
    marketPrice: "$8,000 - $25,000/month",
    features: ["Quantum key distribution", "Post-quantum cryptography", "Secure communication channels", "Quantum-resistant algorithms"],
    benefits: ["Unbreakable encryption", "Future-proof security", "Quantum-resistant protection", "Regulatory compliance"],
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com"
    }
  },
  {
    id: "quantum-machine-learning-platform",
    title: "Quantum Machine Learning Platform",
    description: "Advanced machine learning platform that leverages quantum computing to solve complex optimization problems and accelerate AI training.",
    category: "Quantum Computing",
    price: 12000,
    marketPrice: "$12,000 - $40,000/month",
    features: ["Quantum neural networks", "Quantum optimization algorithms", "Hybrid quantum-classical ML", "Quantum feature selection"],
    benefits: ["Exponential speedup for ML tasks", "Solve previously intractable problems", "Better model accuracy", "Faster training times"],
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com"
    }
  },
  {
    id: "quantum-financial-modeling",
    title: "Quantum Financial Modeling & Risk Assessment",
    description: "Advanced financial modeling platform using quantum computing for portfolio optimization, risk assessment, and market prediction.",
    category: "Quantum Computing",
    price: 15000,
    marketPrice: "$15,000 - $50,000/month",
    features: ["Quantum portfolio optimization", "Risk assessment algorithms", "Market prediction models", "Real-time trading signals"],
    benefits: ["Superior portfolio optimization", "Better risk management", "Faster market analysis", "Regulatory compliance"],
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com"
    }
  },
  {
    id: "quantum-supply-chain-optimization",
    title: "Quantum Supply Chain Optimization Platform",
    description: "Advanced supply chain optimization platform using quantum computing to solve complex logistics and distribution problems.",
    category: "Quantum Computing",
    price: 9000,
    marketPrice: "$9,000 - $30,000/month",
    features: ["Quantum route optimization", "Inventory management", "Demand forecasting", "Supplier optimization"],
    benefits: ["Reduce logistics costs by 25%", "Improve delivery efficiency", "Optimize inventory levels", "Better supplier selection"],
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com"
    }
  },
  {
    id: "quantum-drug-discovery-platform",
    title: "Quantum Drug Discovery Platform",
    description: "Advanced pharmaceutical research platform using quantum computing to accelerate drug discovery and molecular modeling.",
    category: "Quantum Computing",
    price: 20000,
    marketPrice: "$20,000 - $75,000/month",
    features: ["Quantum molecular modeling", "Drug candidate screening", "Protein folding simulation", "Chemical reaction prediction"],
    benefits: ["Accelerate drug discovery by 10x", "Reduce research costs", "Better drug candidates", "Faster time to market"],
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com"
    }
  },
  {
    id: "quantum-energy-optimization",
    title: "Quantum Energy Optimization Platform",
    description: "Advanced energy management platform using quantum computing to optimize power grids, renewable energy, and energy storage.",
    category: "Quantum Computing",
    price: 11000,
    marketPrice: "$11,000 - $35,000/month",
    features: ["Grid optimization algorithms", "Renewable energy integration", "Energy storage optimization", "Demand response management"],
    benefits: ["Reduce energy costs by 30%", "Improve grid efficiency", "Better renewable integration", "Lower carbon emissions"],
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com"
    }
  },
  {
    id: "quantum-climate-modeling",
    title: "Quantum Climate Modeling & Analysis Platform",
    description: "Advanced climate modeling platform using quantum computing for accurate climate predictions and environmental impact analysis.",
    category: "Quantum Computing",
    price: 18000,
    marketPrice: "$18,000 - $60,000/month",
    features: ["Quantum climate simulations", "Environmental impact analysis", "Carbon footprint modeling", "Climate change predictions"],
    benefits: ["More accurate climate models", "Better policy decisions", "Environmental protection", "Scientific advancement"],
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com"
    }
  },
  {
    id: "quantum-logistics-optimization",
    title: "Quantum Logistics & Transportation Optimization",
    description: "Advanced logistics platform using quantum computing to optimize transportation routes, fleet management, and supply chain operations.",
    category: "Quantum Computing",
    price: 8500,
    marketPrice: "$8,500 - $28,000/month",
    features: ["Quantum route optimization", "Fleet management", "Real-time tracking", "Demand forecasting"],
    benefits: ["Reduce transportation costs by 30%", "Improve delivery efficiency", "Optimize fleet utilization", "Better route planning"],
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com"
    }
  },

  // Cybersecurity Services
  {
    id: "cybersecurity-threat-intelligence",
    title: "Cybersecurity Threat Intelligence Platform",
    description: "Advanced threat detection and response system that uses AI to identify, analyze, and mitigate cybersecurity threats in real-time.",
    category: "Cybersecurity",
    price: 1800,
    marketPrice: "$1,800 - $6,000/month",
    features: ["Real-time threat detection", "AI-powered threat analysis", "Automated incident response", "Vulnerability assessment"],
    benefits: ["Reduce security incidents by 90%", "Faster threat response time", "Compliance automation", "Cost-effective security"],
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com"
    }
  },
  {
    id: "autonomous-cybersecurity-operations",
    title: "Autonomous Cybersecurity Operations Center",
    description: "Self-operating cybersecurity platform that autonomously detects, analyzes, and responds to security threats in real-time.",
    category: "Cybersecurity",
    price: 4200,
    marketPrice: "$4,200 - $15,000/month",
    features: ["Autonomous threat detection", "AI-powered incident response", "Behavioral analysis", "Threat hunting automation"],
    benefits: ["Reduce response time by 90%", "Lower security operations costs", "Continuous protection", "Proactive threat prevention"],
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com"
    }
  },

  // Blockchain & Web3 Services
  {
    id: "blockchain-smart-contract-platform",
    title: "Blockchain Smart Contract Development Platform",
    description: "Enterprise-grade blockchain platform for creating, deploying, and managing smart contracts with advanced security and compliance features.",
    category: "Blockchain & Web3",
    price: 2500,
    marketPrice: "$2,500 - $8,000/month",
    features: ["Multi-chain support", "Smart contract templates", "Security auditing tools", "Compliance monitoring"],
    benefits: ["Reduce development time by 80%", "Enhanced security compliance", "Multi-chain interoperability", "Cost-effective deployment"],
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com"
    }
  },

  // IoT Services
  {
    id: "iot-data-analytics-platform",
    title: "IoT Data Analytics & Management Platform",
    description: "Comprehensive IoT platform that collects, processes, and analyzes data from connected devices to provide actionable business insights.",
    category: "Internet of Things",
    price: 1200,
    marketPrice: "$1,200 - $4,000/month",
    features: ["Real-time data collection", "Advanced analytics dashboard", "Predictive maintenance", "Device management"],
    benefits: ["Reduce operational costs by 25%", "Improve efficiency by 40%", "Predictive maintenance", "Real-time monitoring"],
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com"
    }
  },

  // Legal Technology Services
  {
    id: "ai-powered-legal-document-generator",
    title: "AI-Powered Legal Document Generator",
    description: "Intelligent legal document creation platform that generates contracts, agreements, and legal forms with AI-powered compliance checking.",
    category: "Legal Technology",
    price: 450,
    marketPrice: "$450 - $1,200/month",
    features: ["AI-powered document templates", "Compliance checking", "Legal clause suggestions", "Multi-jurisdiction support"],
    benefits: ["Reduce legal document creation time by 80%", "Ensure compliance accuracy", "Lower legal costs", "Standardize document quality"],
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com"
    }
  },

  // Process Automation Services
  {
    id: "autonomous-business-process-automation",
    title: "Autonomous Business Process Automation Platform",
    description: "Self-learning automation platform that continuously optimizes and automates business processes across organizations.",
    category: "Process Automation",
    price: 2800,
    marketPrice: "$2,800 - $10,000/month",
    features: ["Process discovery and mapping", "Automated workflow creation", "Continuous optimization", "Integration with existing systems"],
    benefits: ["Reduce operational costs by 40%", "Improve process efficiency", "Eliminate manual errors", "24/7 operation"],
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com"
    }
  },

  // Data Governance Services
  {
    id: "autonomous-data-governance",
    title: "Autonomous Data Governance & Compliance Platform",
    description: "Self-managing data governance platform that automatically ensures data quality, privacy, and regulatory compliance.",
    category: "Data & Analytics",
    price: 3200,
    marketPrice: "$3,200 - $12,000/month",
    features: ["Automated data quality checks", "Privacy compliance monitoring", "Regulatory reporting", "Data lineage tracking"],
    benefits: ["Ensure data compliance", "Reduce compliance costs", "Improve data quality", "Automated governance"],
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com"
    }
  }
];

export default function ComprehensiveInnovativeServices() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchTerm, setSearchTerm] = useState<string>('');

  const categories = ['all', ...Array.from(new Set(COMPREHENSIVE_INNOVATIVE_SERVICES.map(service => service.category)))];
  
  const filteredServices = COMPREHENSIVE_INNOVATIVE_SERVICES.filter(service => {
    const matchesCategory = selectedCategory === 'all' || service.category === selectedCategory;
    const matchesSearch = service.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <div className="min-h-screen bg-zion-blue-dark text-white relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-quantum-gradient opacity-20 animate-pulse"></div>
      <div className="absolute inset-0 bg-quantum-mesh"></div>
      
      {/* Matrix Rain Effect */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute text-zion-cyan text-xs animate-matrix-rain"
            style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 20}s`,
              animationDuration: `${20 + Math.random() * 10}s`
            }}
          >
            {Math.random() > 0.5 ? '1' : '0'}
          </div>
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-holographic-gradient bg-clip-text text-transparent animate-holographic-shift">
            Comprehensive Innovative Services
          </h1>
          <p className="text-xl md:text-2xl text-zion-slate-light mb-8 max-w-4xl mx-auto">
            Explore our complete portfolio of cutting-edge technology solutions spanning AI, quantum computing, cybersecurity, and autonomous systems
          </p>
          
          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
            <div className="bg-zion-blue-light/20 backdrop-blur-sm rounded-lg p-6 border border-zion-cyan/30">
              <div className="text-3xl font-bold text-zion-cyan mb-2">{COMPREHENSIVE_INNOVATIVE_SERVICES.length}+</div>
              <div className="text-zion-slate-light">Total Services</div>
            </div>
            <div className="bg-zion-blue-light/20 backdrop-blur-sm rounded-lg p-6 border border-zion-cyan/30">
              <div className="text-3xl font-bold text-zion-cyan mb-2">{categories.length - 1}</div>
              <div className="text-zion-slate-light">Categories</div>
            </div>
            <div className="bg-zion-blue-light/20 backdrop-blur-sm rounded-lg p-6 border border-zion-cyan/30">
              <div className="text-3xl font-bold text-zion-cyan mb-2">24/7</div>
              <div className="text-zion-slate-light">Support</div>
            </div>
            <div className="bg-zion-blue-light/20 backdrop-blur-sm rounded-lg p-6 border border-zion-cyan/30">
              <div className="text-3xl font-bold text-zion-cyan mb-2">100%</div>
              <div className="text-zion-slate-light">Satisfaction</div>
            </div>
          </div>
          
          {/* Search Bar */}
          <div className="max-w-2xl mx-auto mb-8">
            <div className="relative">
              <input
                type="text"
                placeholder="Search comprehensive services..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-6 py-4 bg-zion-blue-light/20 border border-zion-cyan/30 rounded-lg text-white placeholder-zion-slate-light focus:outline-none focus:border-zion-cyan focus:ring-2 focus:ring-zion-cyan/20 backdrop-blur-sm"
              />
              <div className="absolute right-4 top-1/2 transform -translate-y-1/2 text-zion-cyan">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
            </div>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                  selectedCategory === category
                    ? 'bg-zion-cyan text-black shadow-lg shadow-zion-cyan/30'
                    : 'bg-zion-blue-light/20 text-zion-slate-light hover:bg-zion-blue-light/30 hover:text-white border border-zion-cyan/30'
                }`}
              >
                {category === 'all' ? 'All Services' : category}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredServices.map((service) => (
            <motion.div
              key={service.id}
              variants={itemVariants}
              className="bg-zion-blue-light/10 backdrop-blur-sm border border-zion-cyan/20 rounded-xl p-6 hover:border-zion-cyan/40 transition-all duration-300 group"
            >
              {/* Service Header */}
              <div className="mb-4">
                <h3 className="text-xl font-bold text-zion-cyan mb-2 group-hover:text-zion-cyan-light transition-colors">
                  {service.title}
                </h3>
                <p className="text-zion-slate-light text-sm mb-3">
                  {service.description}
                </p>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-zion-cyan font-semibold">
                    ${service.price.toLocaleString()}/month
                  </span>
                  <span className="text-zion-slate-light text-sm">
                    Market: {service.marketPrice}
                  </span>
                </div>
              </div>

              {/* Category Badge */}
              <div className="mb-4">
                <span className="inline-block px-3 py-1 bg-zion-cyan/20 text-zion-cyan text-xs font-medium rounded-full">
                  {service.category}
                </span>
              </div>

              {/* Features */}
              <div className="mb-4">
                <h4 className="text-sm font-semibold text-white mb-2">Key Features:</h4>
                <ul className="space-y-1">
                  {service.features.slice(0, 3).map((feature, index) => (
                    <li key={index} className="text-zion-slate-light text-xs flex items-center">
                      <span className="text-zion-cyan mr-2">•</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Benefits */}
              <div className="mb-4">
                <h4 className="text-sm font-semibold text-white mb-2">Benefits:</h4>
                <ul className="space-y-1">
                  {service.benefits.slice(0, 2).map((benefit, index) => (
                    <li key={index} className="text-zion-slate-light text-xs flex items-center">
                      <span className="text-zion-cyan mr-2">✓</span>
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Contact Information */}
              <div className="border-t border-zion-cyan/20 pt-4">
                <div className="text-center">
                  <p className="text-zion-slate-light text-xs mb-2">Ready to get started?</p>
                  <div className="space-y-2 text-xs">
                    <p className="text-zion-cyan">
                      <span className="text-zion-slate-light">Phone:</span> {service.contactInfo.phone}
                    </p>
                    <p className="text-zion-cyan">
                      <span className="text-zion-slate-light">Email:</span> {service.contactInfo.email}
                    </p>
                    <a
                      href={service.contactInfo.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block px-4 py-2 bg-zion-cyan text-black font-medium rounded-lg hover:bg-zion-cyan-light transition-colors"
                    >
                      Learn More
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-center mt-16"
        >
          <div className="bg-zion-blue-light/10 backdrop-blur-sm border border-zion-cyan/20 rounded-xl p-8">
            <h2 className="text-3xl font-bold text-zion-cyan mb-4">
              Ready to Transform Your Business?
            </h2>
            <p className="text-zion-slate-light mb-6 max-w-2xl mx-auto">
              Our comprehensive innovative services combine cutting-edge technology with practical business solutions. 
              Get in touch to discover how we can help you stay ahead of the competition.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+13024640950"
                className="inline-flex items-center px-6 py-3 bg-zion-cyan text-black font-medium rounded-lg hover:bg-zion-cyan-light transition-colors"
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                Call +1 302 464 0950
              </a>
              <a
                href="mailto:kleber@ziontechgroup.com"
                className="inline-flex items-center px-6 py-3 border border-zion-cyan text-zion-cyan font-medium rounded-lg hover:bg-zion-cyan hover:text-black transition-colors"
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                Email kleber@ziontechgroup.com
              </a>
            </div>
            <div className="mt-6">
              <a
                href="https://ziontechgroup.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-zion-cyan hover:text-zion-cyan-light transition-colors"
              >
                Visit our website →
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}