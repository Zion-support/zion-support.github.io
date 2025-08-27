import React from 'react';
import { motion } from 'framer-motion';
import { 
  Brain, 
  Shield, 
  Cloud, 
  Code,
  Database,
  Network,
  Smartphone,
  Globe,
  Zap,
  Cpu,
  Lock,
  BarChart3,
  Users,
  Rocket,
  Target,
  Award,
  Atom,
  Blockchain,
  Eye,
  Search,
  TrendingUp,
  Lightbulb
} from 'lucide-react';

export default function ComprehensiveServicesShowcase() {
  const serviceCategories = [
    {
      title: "AI & Machine Learning",
      description: "Cutting-edge artificial intelligence solutions",
      icon: Brain,
      color: "from-purple-500 to-pink-500",
      services: [
        "AI-Powered Business Intelligence",
        "Machine Learning Models",
        "Natural Language Processing",
        "Computer Vision Solutions",
        "Predictive Analytics",
        "AI Chatbots & Virtual Assistants",
        "Autonomous AI Systems",
        "AI Ethics & Governance"
      ]
    },
    {
      title: "Cybersecurity",
      description: "Advanced security and compliance solutions",
      icon: Shield,
      color: "from-red-500 to-orange-500",
      services: [
        "Zero Trust Architecture",
        "Threat Detection & Response",
        "Penetration Testing",
        "Security Audits & Compliance",
        "Incident Response",
        "Vulnerability Assessment",
        "Security Training",
        "Cloud Security"
      ]
    },
    {
      title: "Cloud & Infrastructure",
      description: "Scalable cloud and infrastructure solutions",
      icon: Cloud,
      color: "from-blue-500 to-cyan-500",
      services: [
        "Cloud Migration",
        "DevOps Automation",
        "Infrastructure as Code",
        "Container Orchestration",
        "Serverless Architecture",
        "Multi-Cloud Management",
        "Disaster Recovery",
        "Performance Optimization"
      ]
    },
    {
      title: "Software Development",
      description: "Custom software and application development",
      icon: Code,
      color: "from-green-500 to-emerald-500",
      services: [
        "Web Applications",
        "Mobile Apps",
        "Enterprise Software",
        "API Development",
        "Microservices Architecture",
        "Legacy System Modernization",
        "Quality Assurance",
        "Technical Consulting"
      ]
    },
    {
      title: "Data Analytics",
      description: "Data-driven insights and business intelligence",
      icon: BarChart3,
      color: "from-indigo-500 to-purple-500",
      services: [
        "Business Intelligence",
        "Data Warehousing",
        "Big Data Processing",
        "Real-time Analytics",
        "Data Visualization",
        "Predictive Modeling",
        "Data Governance",
        "Performance Metrics"
      ]
    },
    {
      title: "IoT & Edge Computing",
      description: "Internet of Things and edge computing solutions",
      icon: Network,
      color: "from-yellow-500 to-orange-500",
      services: [
        "IoT Device Management",
        "Edge Computing Platforms",
        "Sensor Networks",
        "Industrial IoT",
        "Smart Cities",
        "Connected Devices",
        "Data Processing",
        "Real-time Monitoring"
      ]
    },
    {
      title: "Quantum Computing",
      description: "Next-generation quantum computing solutions",
      icon: Atom,
      color: "from-violet-500 to-purple-500",
      services: [
        "Quantum Algorithms",
        "Quantum Machine Learning",
        "Quantum Cryptography",
        "Quantum Simulation",
        "Quantum Optimization",
        "Quantum Security",
        "Research & Development",
        "Consulting Services"
      ]
    },
    {
      title: "Blockchain & Web3",
      description: "Decentralized and blockchain solutions",
      icon: Blockchain,
      color: "from-teal-500 to-green-500",
      services: [
        "Smart Contracts",
        "DeFi Platforms",
        "NFT Marketplaces",
        "Blockchain Infrastructure",
        "Web3 Applications",
        "Token Development",
        "Consensus Mechanisms",
        "Cross-chain Solutions"
      ]
    }
  ];

  const stats = [
    { icon: Users, value: "500+", label: "Global Clients" },
    { icon: Globe, value: "25+", label: "Countries" },
    { icon: Code, value: "1000+", label: "Projects" },
    { icon: Shield, value: "99.9%", label: "Uptime" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-6xl font-bold text-white mb-6"
          >
            Comprehensive
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              {" "}Technology Solutions
            </span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-gray-300 max-w-3xl mx-auto mb-12"
          >
            Empowering businesses with cutting-edge AI, cybersecurity, cloud, and emerging technology solutions. 
            Transform your digital future with Zion Tech Group.
          </motion.p>
          
          {/* Stats */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16"
          >
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="flex justify-center mb-2">
                  <stat.icon className="w-8 h-8 text-cyan-400" />
                </div>
                <div className="text-3xl font-bold text-white">{stat.value}</div>
                <div className="text-gray-400">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Our Service Portfolio
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Comprehensive technology solutions designed to drive innovation and growth
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {serviceCategories.map((category, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/50 hover:border-cyan-500/50 transition-all duration-300 hover:transform hover:scale-105"
              >
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${category.color} flex items-center justify-center mb-6`}>
                  <category.icon className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-3">
                  {category.title}
                </h3>
                
                <p className="text-gray-400 mb-6">
                  {category.description}
                </p>
                
                <ul className="space-y-2">
                  {category.services.map((service, serviceIndex) => (
                    <li key={serviceIndex} className="flex items-center text-gray-300">
                      <div className="w-2 h-2 bg-cyan-400 rounded-full mr-3" />
                      {service}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-3xl p-12 border border-cyan-500/20"
          >
            <h3 className="text-3xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h3>
            <p className="text-xl text-gray-300 mb-8">
              Let's discuss how our comprehensive technology solutions can drive your success
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-8 py-4 rounded-xl font-semibold hover:from-cyan-600 hover:to-blue-600 transition-all duration-300 transform hover:scale-105">
                Get Started Today
              </button>
              <button className="border border-cyan-500 text-cyan-400 px-8 py-4 rounded-xl font-semibold hover:bg-cyan-500/10 transition-all duration-300">
                Learn More
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
