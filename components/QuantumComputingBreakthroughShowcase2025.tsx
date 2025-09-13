import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Atom, 
  Zap, 
  Shield, 
  Cpu, 
  Database, 
  Lock, 
  Globe, 
  Rocket,
  ArrowRight,
  CheckCircle,
  Star,
  Lightbulb,
  Target,
  TrendingUp,
  Users,
  Brain
} from 'lucide-react';

const QuantumComputingBreakthroughShowcase2025: React.FC = () => {
  const [activeSection, setActiveSection] = useState('overview');
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const quantumBreakthroughs = {
    overview: {
      title: "Quantum Computing Breakthroughs 2025",
      subtitle: "Revolutionary quantum technologies reshaping computation and cryptography",
      description: "2025 marks the year of practical quantum computing breakthroughs, with real-world applications achieving quantum advantage and transforming industries from finance to healthcare.",
      keyMetrics: [
        { label: "Quantum Qubits", value: "1,000+", icon: Atom, color: "from-blue-500 to-cyan-500" },
        { label: "Processing Speed", value: "10^15x", icon: Zap, color: "from-yellow-500 to-orange-500" },
        { label: "Error Rate", value: "0.001%", icon: Target, color: "from-green-500 to-emerald-500" },
        { label: "Applications", value: "50+", icon: Globe, color: "from-purple-500 to-pink-500" }
      ]
    },
    technologies: {
      title: "Revolutionary Quantum Technologies",
      breakthroughs: [
        {
          name: "Fault-Tolerant Quantum Computing",
          description: "Achievement of quantum error correction enabling reliable quantum computation at scale.",
          impact: "Enables practical quantum algorithms for real-world problems",
          status: "Achieved",
          icon: Shield,
          color: "bg-green-500"
        },
        {
          name: "Quantum Internet Infrastructure",
          description: "First quantum communication networks enabling secure quantum key distribution.",
          impact: "Unbreakable encryption for critical infrastructure",
          status: "Deployed",
          icon: Globe,
          color: "bg-blue-500"
        },
        {
          name: "Quantum Machine Learning",
          description: "Quantum algorithms achieving exponential speedup in machine learning tasks.",
          impact: "Revolutionary improvements in AI training and inference",
          status: "Pilot",
          icon: Brain,
          color: "bg-purple-500"
        },
        {
          name: "Quantum Cryptography",
          description: "Post-quantum cryptographic systems resistant to quantum attacks.",
          impact: "Future-proof security for digital infrastructure",
          status: "Standardized",
          icon: Lock,
          color: "bg-red-500"
        },
        {
          name: "Quantum Simulation",
          description: "Accurate simulation of complex quantum systems for drug discovery and materials science.",
          impact: "Accelerated scientific discovery and innovation",
          status: "Commercial",
          icon: Atom,
          color: "bg-cyan-500"
        },
        {
          name: "Quantum Optimization",
          description: "Quantum algorithms solving optimization problems with exponential speedup.",
          impact: "Revolutionary improvements in logistics and resource allocation",
          status: "Production",
          icon: Target,
          color: "bg-yellow-500"
        }
      ]
    },
    applications: {
      title: "Industry Applications & Impact",
      sectors: [
        {
          industry: "Financial Services",
          applications: [
            "Quantum portfolio optimization achieving 300% better returns",
            "Real-time fraud detection with 99.99% accuracy",
            "Risk modeling for complex financial instruments",
            "High-frequency trading with quantum algorithms"
          ],
          roi: "500%",
          icon: TrendingUp,
          color: "from-green-400 to-emerald-500"
        },
        {
          industry: "Healthcare & Pharmaceuticals",
          applications: [
            "Drug discovery accelerated by 1000x",
            "Protein folding simulation for disease research",
            "Personalized medicine optimization",
            "Quantum-enhanced medical imaging"
          ],
          roi: "2000%",
          icon: Shield,
          color: "from-blue-400 to-cyan-500"
        },
        {
          industry: "Cybersecurity",
          applications: [
            "Unbreakable quantum encryption",
            "Post-quantum security protocols",
            "Quantum key distribution networks",
            "Advanced threat detection systems"
          ],
          roi: "∞",
          icon: Lock,
          color: "from-red-400 to-pink-500"
        },
        {
          industry: "Logistics & Supply Chain",
          applications: [
            "Route optimization with quantum algorithms",
            "Inventory management optimization",
            "Supply chain risk assessment",
            "Real-time logistics coordination"
          ],
          roi: "400%",
          icon: Globe,
          color: "from-purple-400 to-indigo-500"
        },
        {
          industry: "Energy & Utilities",
          applications: [
            "Smart grid optimization",
            "Renewable energy integration",
            "Power distribution optimization",
            "Energy storage management"
          ],
          roi: "350%",
          icon: Zap,
          color: "from-yellow-400 to-orange-500"
        },
        {
          industry: "Research & Development",
          applications: [
            "Quantum simulation of materials",
            "Climate modeling and prediction",
            "Space exploration optimization",
            "Fundamental physics research"
          ],
          roi: "Invaluable",
          icon: Rocket,
          color: "from-cyan-400 to-blue-500"
        }
      ]
    },
    roadmap: {
      title: "Quantum Computing Roadmap 2025-2030",
      timeline: [
        {
          quarter: "Q1 2025",
          milestone: "1000+ Qubit Systems",
          description: "Commercial quantum computers with over 1000 qubits achieving quantum advantage",
          status: "Completed",
          impact: "First practical quantum applications"
        },
        {
          quarter: "Q2 2025",
          milestone: "Quantum Internet Launch",
          description: "First quantum communication networks connecting major cities",
          status: "In Progress",
          impact: "Secure quantum communication infrastructure"
        },
        {
          quarter: "Q3 2025",
          milestone: "Fault-Tolerant Quantum Computing",
          description: "Achievement of quantum error correction enabling reliable computation",
          status: "On Track",
          impact: "Practical quantum algorithms for real problems"
        },
        {
          quarter: "Q4 2025",
          milestone: "Quantum Cloud Services",
          description: "Widespread availability of quantum computing as a service",
          status: "Planned",
          impact: "Democratized access to quantum computing"
        },
        {
          quarter: "2026-2030",
          milestone: "Quantum Supremacy Applications",
          description: "Quantum computers solving problems impossible for classical computers",
          status: "Future",
          impact: "Revolutionary breakthroughs in science and technology"
        }
      ]
    }
  };

  const sections = [
    { id: 'overview', label: 'Overview', icon: Target },
    { id: 'technologies', label: 'Technologies', icon: Atom },
    { id: 'applications', label: 'Applications', icon: Globe },
    { id: 'roadmap', label: 'Roadmap', icon: Rocket }
  ];

  if (!isVisible) return null;

  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="py-20 bg-gradient-to-br from-slate-900 via-indigo-900 to-slate-900"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-cyan-600 to-blue-600 text-white text-sm font-semibold mb-6"
          >
            <Atom className="w-4 h-4 mr-2" />
            Quantum Computing Breakthroughs 2025
          </motion.div>
          
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            {quantumBreakthroughs[activeSection as keyof typeof quantumBreakthroughs].title}
          </h2>
          
          <p className="text-xl text-gray-300 max-w-4xl mx-auto mb-8">
            {quantumBreakthroughs[activeSection as keyof typeof quantumBreakthroughs].subtitle || quantumBreakthroughs[activeSection as keyof typeof quantumBreakthroughs].description}
          </p>
        </div>

        {/* Section Navigation */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {sections.map((section) => (
            <button
              key={section.id}
              onClick={() => setActiveSection(section.id)}
              className={`flex items-center px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                activeSection === section.id
                  ? 'bg-gradient-to-r from-cyan-600 to-blue-600 text-white shadow-lg'
                  : 'bg-white/10 text-gray-300 hover:bg-white/20'
              }`}
            >
              <section.icon className="w-5 h-5 mr-2" />
              {section.label}
            </button>
          ))}
        </div>

        {/* Section Content */}
        <motion.div
          key={activeSection}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10"
        >
          {activeSection === 'overview' && (
            <div className="space-y-12">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {quantumBreakthroughs.overview.keyMetrics.map((metric, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="text-center p-6 bg-gradient-to-br from-white/10 to-white/5 rounded-xl border border-white/20"
                  >
                    <div className={`w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r ${metric.color} flex items-center justify-center`}>
                      <metric.icon className="w-8 h-8 text-white" />
                    </div>
                    <div className="text-3xl font-bold text-white mb-2">{metric.value}</div>
                    <div className="text-gray-300 text-sm">{metric.label}</div>
                  </motion.div>
                ))}
              </div>
              
              <div className="text-center">
                <p className="text-lg text-gray-300 max-w-4xl mx-auto">
                  2025 marks the year of practical quantum computing breakthroughs, with real-world applications 
                  achieving quantum advantage and transforming industries from finance to healthcare.
                </p>
              </div>
            </div>
          )}

          {activeSection === 'technologies' && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {quantumBreakthroughs.technologies.breakthroughs.map((tech, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="p-6 bg-gradient-to-br from-white/10 to-white/5 rounded-xl border border-white/20 hover:border-white/40 transition-all duration-300"
                >
                  <div className="flex items-center mb-4">
                    <div className={`w-12 h-12 ${tech.color} rounded-lg flex items-center justify-center mr-4`}>
                      <tech.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-white">{tech.name}</h3>
                      <span className={`text-xs px-2 py-1 rounded-full ${
                        tech.status === 'Achieved' || tech.status === 'Deployed' || tech.status === 'Commercial' || tech.status === 'Production' || tech.status === 'Standardized'
                          ? 'bg-green-500/20 text-green-400'
                          : 'bg-yellow-500/20 text-yellow-400'
                      }`}>
                        {tech.status}
                      </span>
                    </div>
                  </div>
                  
                  <p className="text-gray-300 mb-4 text-sm">{tech.description}</p>
                  
                  <div className="bg-cyan-500/20 text-cyan-400 px-3 py-2 rounded-lg text-sm font-semibold">
                    {tech.impact}
                  </div>
                </motion.div>
              ))}
            </div>
          )}

          {activeSection === 'applications' && (
            <div className="space-y-8">
              {quantumBreakthroughs.applications.sectors.map((sector, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="p-8 bg-gradient-to-r from-white/10 to-white/5 rounded-xl border border-white/20"
                >
                  <div className="flex items-center mb-6">
                    <div className={`w-16 h-16 rounded-lg bg-gradient-to-r ${sector.color} flex items-center justify-center mr-6`}>
                      <sector.icon className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-white">{sector.industry}</h3>
                      <div className="text-lg text-cyan-400 font-semibold">ROI: {sector.roi}</div>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {sector.applications.map((app, appIndex) => (
                      <div key={appIndex} className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-green-400 mr-3 mt-1 flex-shrink-0" />
                        <span className="text-gray-300">{app}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          )}

          {activeSection === 'roadmap' && (
            <div className="space-y-6">
              {quantumBreakthroughs.roadmap.timeline.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex items-start p-6 bg-gradient-to-r from-white/10 to-white/5 rounded-xl border border-white/20"
                >
                  <div className="flex-shrink-0 mr-6">
                    <div className={`w-12 h-12 rounded-full flex items-center justify-center ${
                      item.status === 'Completed' ? 'bg-green-500' :
                      item.status === 'In Progress' ? 'bg-yellow-500' :
                      item.status === 'On Track' ? 'bg-blue-500' :
                      item.status === 'Planned' ? 'bg-purple-500' :
                      'bg-gray-500'
                    }`}>
                      <span className="text-white font-bold text-sm">{index + 1}</span>
                    </div>
                  </div>
                  
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-xl font-bold text-white">{item.milestone}</h3>
                      <span className="text-sm text-gray-400">{item.quarter}</span>
                    </div>
                    <p className="text-gray-300 mb-3">{item.description}</p>
                    <div className="flex items-center justify-between">
                      <span className={`px-3 py-1 rounded-full text-sm font-semibold ${
                        item.status === 'Completed' ? 'bg-green-500/20 text-green-400' :
                        item.status === 'In Progress' ? 'bg-yellow-500/20 text-yellow-400' :
                        item.status === 'On Track' ? 'bg-blue-500/20 text-blue-400' :
                        item.status === 'Planned' ? 'bg-purple-500/20 text-purple-400' :
                        'bg-gray-500/20 text-gray-400'
                      }`}>
                        {item.status}
                      </span>
                      <span className="text-cyan-400 font-semibold">{item.impact}</span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          )}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-cyan-600/20 to-blue-600/20 rounded-2xl p-8 border border-white/20">
            <h3 className="text-2xl font-bold text-white mb-4">
              Ready to Harness Quantum Power?
            </h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Explore our quantum computing solutions and be among the first to leverage these revolutionary technologies for your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/quantum-computing-solutions"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-600 to-blue-600 text-white font-semibold rounded-lg hover:from-cyan-700 hover:to-blue-700 transition-all duration-300"
              >
                Explore Quantum Solutions
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link
                to="/quantum-consultation"
                className="inline-flex items-center px-8 py-4 bg-white/10 text-white font-semibold rounded-lg hover:bg-white/20 transition-all duration-300 border border-white/20"
              >
                Get Quantum Consultation
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default QuantumComputingBreakthroughShowcase2025;