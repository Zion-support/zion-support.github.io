import React from 'react';
import Layout from '../components/layout/Layout';
import { motion } from 'framer-motion';
import { Shield, Lock, Eye, Zap, Brain, Cpu, Globe, Users, Target, Award } from 'lucide-react';
import Layout from '../components/layout/Layout';

export default function Cybersecurity() {
  const services = [
    {
      icon: Shield,
      title: 'Zero Trust Security Platform',
      description: 'Comprehensive zero trust architecture for modern enterprises',
      features: ['Identity verification', 'Continuous monitoring', 'Micro-segmentation', 'Threat prevention'],
      href: '/zero-trust-security-platform'
    },
    {
      icon: Lock,
      title: 'Zero Trust Network Architecture',
      description: 'Advanced network security with zero trust principles',
      features: ['Network segmentation', 'Access control', 'Traffic monitoring', 'Security policies'],
      href: '/zero-trust-network-architecture'
    },
    {
      icon: Eye,
      title: 'Vulnerability Assessment & Penetration Testing',
      description: 'Comprehensive security testing and assessment services',
      features: ['Security audits', 'Penetration testing', 'Vulnerability scanning', 'Risk assessment'],
      href: '/vulnerability-assessment-penetration-testing'
    },
    {
      icon: Brain,
      title: 'AI-Powered Threat Detection',
      description: 'Intelligent security monitoring and threat response',
      features: ['Machine learning', 'Behavioral analysis', 'Real-time alerts', 'Automated response'],
      href: '/ai-powered-threat-detection'
    },
    {
      icon: Cpu,
      title: 'Quantum Cybersecurity Platform',
      description: 'Future-proof security solutions for the quantum era',
      features: ['Post-quantum cryptography', 'Quantum key distribution', 'Threat detection', 'Secure communications'],
      href: '/quantum-cybersecurity-platform'
    },
    {
      icon: Zap,
      title: 'Incident Response & Automation',
      description: 'Rapid incident response with automated security operations',
      features: ['24/7 monitoring', 'Automated response', 'Incident management', 'Recovery planning'],
      href: '/incident-automation-suite'
    }
  ];

  const threats = [
    {
      name: 'Ransomware',
      description: 'Advanced ransomware protection and recovery',
      icon: <AlertTriangle className="w-6 h-6" />
    },
    {
      name: 'Phishing',
      description: 'AI-powered phishing detection and prevention',
      icon: <Eye className="w-6 h-6" />
    },
    {
      name: 'DDoS Attacks',
      description: 'Distributed denial of service protection',
      icon: <Network className="w-6 h-6" />
    },
    {
      name: 'Data Breaches',
      description: 'Comprehensive data protection and encryption',
      icon: <Database className="w-6 h-6" />
    }
  ];

  const benefits = [
    {
      title: '24/7 Protection',
      description: 'Round-the-clock security monitoring and response',
      icon: <Clock className="w-6 h-6 text-green-400" />
    },
    {
      title: 'AI-Powered Detection',
      description: 'Machine learning algorithms for threat detection',
      icon: <Brain className="w-6 h-6 text-purple-400" />
    },
    {
      title: 'Compliance Ready',
      description: 'Meet industry standards and regulatory requirements',
      icon: <CheckCircle className="w-6 h-6 text-blue-400" />
    },
    {
      title: 'Cost Effective',
      description: 'Reduce security incidents and operational costs',
      icon: <TrendingUp className="w-6 h-6 text-yellow-400" />
    }
  ];

  return (
    <Layout 
      title="Cybersecurity Services - Zion Tech Group"
      description="Advanced cybersecurity solutions including quantum security, zero trust architecture, and threat intelligence"
      canonicalUrl="https://ziontechgroup.com/cybersecurity"
    >
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-red-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4">
          <div className="container mx-auto max-w-6xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-red-400 via-orange-500 to-yellow-400 bg-clip-text text-transparent mb-6">
                Cybersecurity
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
                Advanced cybersecurity solutions that protect your digital assets and ensure business continuity. 
                From zero trust architecture to quantum-resistant security.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-red-600 to-orange-600 text-white font-semibold rounded-lg hover:from-red-700 hover:to-orange-700 transition-all duration-300 transform hover:scale-105"
                >
                  Get Protected
                  <ArrowRight className="ml-2 w-5 h-5" />
                </a>
                <a
                  href="/quantum-cybersecurity-platform-2045"
                  className="inline-flex items-center px-8 py-4 border-2 border-red-500 text-red-400 font-semibold rounded-lg hover:bg-red-500 hover:text-white transition-all duration-300"
                >
                  Explore Quantum Security
                </a>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Security Benefits */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-black/20">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-white mb-4">
                Why Choose Our Security?
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our cybersecurity solutions provide comprehensive protection with 
                advanced technologies and expert support.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={benefit.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-red-500/20 to-orange-500/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <stat.icon className="w-8 h-8 text-red-400" />
                  </div>
                  <div className="text-3xl font-bold text-white mb-2">{stat.number}</div>
                  <div className="text-gray-400">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-20 px-4">
          <div className="container mx-auto max-w-6xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Cybersecurity Services
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Comprehensive security solutions designed to protect your organization from evolving threats
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="group"
                >
                  <div className="flex items-center mb-4">
                    {service.icon}
                    <h3 className="text-xl font-semibold text-white ml-3">
                      {service.title}
                    </h3>
                  </div>
                  <p className="text-gray-300 mb-4">
                    {service.description}
                  </p>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-center text-sm text-gray-400">
                        <Star className="w-4 h-4 text-red-400 mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <a
                    href={service.href}
                    className="inline-flex items-center text-red-400 hover:text-red-300 transition-colors duration-300"
                  >
                    Learn More
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </a>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Threat Protection */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-black/20">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-white mb-4">
                Advanced Threat Protection
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Stay ahead of evolving cyber threats with our comprehensive 
                protection and detection capabilities.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {threats.map((threat, index) => (
                <motion.div
                  key={threat.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <div className="bg-white/10 backdrop-blur-lg rounded-full w-20 h-20 mx-auto mb-4 flex items-center justify-center border border-white/20">
                    <div className="text-red-400">
                      {threat.icon}
                    </div>
                  </a>
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
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold text-white mb-6">
                Ready to Secure Your Digital Assets?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Don't wait for a security breach. Get comprehensive protection 
                with our advanced cybersecurity solutions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="px-8 py-4 bg-gradient-to-r from-red-500 to-orange-600 text-white font-semibold rounded-xl hover:from-red-600 hover:to-orange-700 transition-all duration-300 transform hover:scale-105"
                >
                  Get Started
                </a>
                <a
                  href="/services"
                  className="px-8 py-4 border border-red-500 text-red-400 font-semibold rounded-xl hover:bg-red-500/10 transition-all duration-300"
                >
                  View Security Cases
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default CybersecurityPage;