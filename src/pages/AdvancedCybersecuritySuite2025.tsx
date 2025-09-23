import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Shield, 
  Lock, 
  Eye, 
  AlertTriangle, 
  Zap, 
  Globe, 
  Users, 
  Database, 
  Server, 
  CheckCircle,
  ArrowRight,
  Star,
  Play,
  Award,
  Gauge,
  Sparkles,
  Brain,
  Layers,
  Network,
  Activity
} from 'lucide-react';

const AdvancedCybersecuritySuite2025: React.FC = () => {
  const [activeThreat, setActiveThreat] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const securitySolutions = [
    {
      icon: Shield,
      title: 'Zero Trust Architecture',
      description: 'Comprehensive zero trust security model that verifies every access request',
      features: ['Identity Verification', 'Device Trust', 'Network Segmentation', 'Continuous Monitoring'],
      price: 'Starting at $12,999/month',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Brain,
      title: 'AI-Powered Threat Detection',
      description: 'Advanced AI systems that identify and neutralize threats in real-time',
      features: ['Behavioral Analysis', 'Anomaly Detection', 'Predictive Analytics', 'Automated Response'],
      price: 'Starting at $8,999/month',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: Lock,
      title: 'Quantum-Safe Encryption',
      description: 'Post-quantum cryptographic solutions to protect against future quantum attacks',
      features: ['Lattice-Based Crypto', 'Hash-Based Signatures', 'Code-Based Encryption', 'Migration Support'],
      price: 'Starting at $6,999/month',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: Eye,
      title: '24/7 SOC Services',
      description: 'Round-the-clock security operations center with expert analysts',
      features: ['Threat Monitoring', 'Incident Response', 'Forensic Analysis', 'Compliance Reporting'],
      price: 'Starting at $25,000/month',
      color: 'from-orange-500 to-red-500'
    }
  ];

  const securityStats = [
    { number: '99.99%', label: 'Threat Detection Rate', icon: Shield },
    { number: '<2min', label: 'Response Time', icon: Zap },
    { number: '1000+', label: 'Threats Blocked Daily', icon: Lock },
    { number: '24/7', label: 'Security Monitoring', icon: Eye }
  ];

  const threatLandscape = [
    {
      type: 'Advanced Persistent Threats',
      description: 'Sophisticated, long-term cyber attacks targeting specific organizations',
      impact: 'High',
      solution: 'AI-powered behavioral analysis and continuous monitoring'
    },
    {
      type: 'Ransomware Attacks',
      description: 'Malicious software that encrypts data and demands payment for decryption',
      impact: 'Critical',
      solution: 'Proactive backup systems and zero-trust architecture'
    },
    {
      type: 'Supply Chain Attacks',
      description: 'Attacks that target software supply chains to compromise multiple organizations',
      impact: 'High',
      solution: 'Software composition analysis and vendor risk management'
    },
    {
      type: 'Quantum Threats',
      description: 'Future threats from quantum computers that could break current encryption',
      impact: 'Critical',
      solution: 'Post-quantum cryptographic implementations'
    }
  ];

  const complianceFrameworks = [
    {
      name: 'ISO 27001',
      description: 'Information security management system standard',
      coverage: 'Comprehensive security management'
    },
    {
      name: 'SOC 2 Type II',
      description: 'Security, availability, and confidentiality controls',
      coverage: 'Service organization controls'
    },
    {
      name: 'GDPR',
      description: 'General Data Protection Regulation compliance',
      coverage: 'Data privacy and protection'
    },
    {
      name: 'HIPAA',
      description: 'Health Insurance Portability and Accountability Act',
      coverage: 'Healthcare data security'
    },
    {
      name: 'PCI DSS',
      description: 'Payment Card Industry Data Security Standard',
      coverage: 'Payment card data protection'
    },
    {
      name: 'NIST Framework',
      description: 'National Institute of Standards and Technology framework',
      coverage: 'Cybersecurity risk management'
    }
  ];

  const caseStudies = [
    {
      company: 'Global Financial Institution',
      challenge: 'Protecting customer data from sophisticated cyber attacks',
      solution: 'Comprehensive zero trust architecture with AI threat detection',
      results: ['99.9% threat detection rate', 'Zero data breaches in 2 years', '50% reduction in false positives'],
      industry: 'Financial Services'
    },
    {
      company: 'Healthcare Provider Network',
      challenge: 'HIPAA compliance and patient data security',
      solution: 'Healthcare-specific security suite with compliance automation',
      results: ['100% HIPAA compliance', '60% faster incident response', 'Zero compliance violations'],
      industry: 'Healthcare'
    },
    {
      company: 'Manufacturing Enterprise',
      challenge: 'Securing industrial IoT devices and production systems',
      solution: 'Industrial cybersecurity with OT/IT integration',
      results: ['Zero production downtime', 'Real-time threat monitoring', 'Automated incident response'],
      industry: 'Manufacturing'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-indigo-900 text-white overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-indigo-600/20"></div>
        <div className="absolute top-0 left-0 w-full h-full">
          {[...Array(25)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-blue-400 rounded-full opacity-50"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -100, 0],
                opacity: [0.5, 1, 0.5],
                scale: [1, 1.5, 1],
              }}
              transition={{
                duration: 3 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            />
          ))}
        </div>
      </div>

      {/* Navigation */}
      <nav className="relative z-10 container mx-auto px-4 py-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-gradient-to-r from-blue-400 to-indigo-400 rounded-xl flex items-center justify-center">
              <Shield className="w-7 h-7 text-white" />
            </div>
            <div>
              <h1 className="text-2xl font-bold">Zion Tech Group</h1>
              <p className="text-sm text-blue-300">Advanced Cybersecurity</p>
            </div>
          </div>
          <div className="hidden md:flex space-x-8">
            <a href="#solutions" className="hover:text-blue-400 transition-colors">Solutions</a>
            <a href="#threats" className="hover:text-blue-400 transition-colors">Threats</a>
            <a href="#compliance" className="hover:text-blue-400 transition-colors">Compliance</a>
            <a href="#contact" className="hover:text-blue-400 transition-colors">Contact</a>
          </div>
          <button className="px-6 py-2 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-lg hover:shadow-lg transition-all duration-300">
            Get Protected
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative z-10 container mx-auto px-4 py-20 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
          transition={{ duration: 0.8 }}
        >
          <div className="mb-8">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: isVisible ? 1 : 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="inline-flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-blue-500/20 to-indigo-500/20 rounded-full border border-blue-400/30 mb-6"
            >
              <Sparkles className="w-5 h-5 text-blue-400" />
              <span className="text-blue-300">Advanced Security Suite</span>
            </motion.div>
          </div>
          
          <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-indigo-400 to-cyan-400 bg-clip-text text-transparent">
            Secure Future
          </h1>
          
          <p className="text-xl md:text-2xl mb-12 max-w-3xl mx-auto text-gray-300 leading-relaxed">
            Protect your organization with our comprehensive cybersecurity suite featuring 
            AI-powered threat detection, zero trust architecture, and quantum-safe encryption.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-lg hover:shadow-2xl transition-all duration-300 font-semibold text-lg flex items-center space-x-2"
            >
              <Play className="w-5 h-5" />
              <span>Security Demo</span>
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 border-2 border-blue-400 rounded-lg hover:bg-blue-400 hover:text-gray-900 transition-all duration-300 font-semibold text-lg"
            >
              Free Assessment
            </motion.button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {securityStats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
                transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                className="text-center"
              >
                <stat.icon className="w-8 h-8 text-blue-400 mx-auto mb-2" />
                <div className="text-3xl font-bold text-white mb-1">{stat.number}</div>
                <div className="text-sm text-gray-300">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Solutions Section */}
      <section id="solutions" className="relative z-10 py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Security <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">Solutions</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive cybersecurity solutions designed to protect against current and future threats
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {securitySolutions.map((solution, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 hover:border-blue-400/50 transition-all duration-300"
              >
                <div className={`w-16 h-16 bg-gradient-to-r ${solution.color} rounded-xl flex items-center justify-center mb-6`}>
                  <solution.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4">{solution.title}</h3>
                <p className="text-gray-300 mb-6">{solution.description}</p>
                <div className="mb-6">
                  <h4 className="text-lg font-semibold mb-3">Key Features:</h4>
                  <ul className="space-y-2">
                    {solution.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center space-x-2 text-sm">
                        <CheckCircle className="w-4 h-4 text-blue-400" />
                        <span className="text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="text-lg font-semibold text-blue-400 mb-6">{solution.price}</div>
                <button className="w-full bg-gradient-to-r from-blue-500 to-indigo-500 text-white px-6 py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold">
                  Get Protected
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Threat Landscape Section */}
      <section id="threats" className="relative z-10 py-20 bg-black/20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Threat <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-orange-400">Landscape</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Understanding and protecting against the evolving cybersecurity threat landscape
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-8">
            {threatLandscape.map((threat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gradient-to-r from-white/10 to-white/5 backdrop-blur-md rounded-2xl p-8 border border-white/20"
              >
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-xl font-bold">{threat.type}</h3>
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                    threat.impact === 'Critical' ? 'bg-red-500/20 text-red-400' :
                    threat.impact === 'High' ? 'bg-orange-500/20 text-orange-400' :
                    'bg-yellow-500/20 text-yellow-400'
                  }`}>
                    {threat.impact}
                  </span>
                </div>
                <p className="text-gray-300 mb-4">{threat.description}</p>
                <div className="bg-blue-500/10 rounded-lg p-4">
                  <h4 className="text-sm font-semibold text-blue-400 mb-2">Our Solution:</h4>
                  <p className="text-sm text-gray-300">{threat.solution}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Compliance Section */}
      <section id="compliance" className="relative z-10 py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Compliance <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-cyan-400">Frameworks</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Meet regulatory requirements with our comprehensive compliance solutions
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {complianceFrameworks.map((framework, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 hover:border-green-400/50 transition-all duration-300"
              >
                <h3 className="text-xl font-bold mb-3">{framework.name}</h3>
                <p className="text-gray-300 mb-4 text-sm">{framework.description}</p>
                <div className="bg-green-500/10 rounded-lg p-3">
                  <p className="text-sm text-green-400 font-semibold">{framework.coverage}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section className="relative z-10 py-20 bg-black/20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Security <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">Success Stories</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Real-world security implementations with measurable results
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {caseStudies.map((study, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20"
              >
                <div className="mb-4">
                  <h3 className="text-xl font-bold mb-2">{study.company}</h3>
                  <span className="px-2 py-1 bg-blue-500/20 text-blue-300 rounded-full text-xs">
                    {study.industry}
                  </span>
                </div>
                <p className="text-gray-300 mb-4 text-sm">
                  <strong>Challenge:</strong> {study.challenge}
                </p>
                <p className="text-gray-300 mb-4 text-sm">
                  <strong>Solution:</strong> {study.solution}
                </p>
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-blue-400 mb-2">Results:</h4>
                  <ul className="space-y-1">
                    {study.results.map((result, resultIndex) => (
                      <li key={resultIndex} className="flex items-center space-x-2 text-xs">
                        <CheckCircle className="w-3 h-3 text-green-400" />
                        <span className="text-gray-300">{result}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="relative z-10 py-20">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Secure Your Organization Today
            </h2>
            <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto">
              Don't wait for a breach. Protect your organization with our advanced cybersecurity solutions
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-lg hover:shadow-2xl transition-all duration-300 font-semibold text-lg"
              >
                Start Security Assessment
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 border-2 border-blue-400 rounded-lg hover:bg-blue-400 hover:text-gray-900 transition-all duration-300 font-semibold text-lg"
              >
                Schedule Consultation
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 border-t border-white/20 py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="flex items-center space-x-3 mb-6 md:mb-0">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-400 to-indigo-400 rounded-lg flex items-center justify-center">
                <Shield className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold">Zion Tech Group</h3>
                <p className="text-sm text-gray-400">Advanced Cybersecurity</p>
              </div>
            </div>
            <div className="text-center md:text-right">
              <p className="text-gray-400 mb-2">© 2025 Zion Tech Group. All rights reserved.</p>
              <p className="text-sm text-gray-500">Securing the digital future.</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default AdvancedCybersecuritySuite2025;