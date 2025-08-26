import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  Shield,
  Lock,
  Eye,
  AlertTriangle,
  Zap,
  TrendingUp,
  Users,
  Globe,
  BarChart3,
  Target,
  Lightbulb,
  Rocket,
  Network,
  Monitor,
  Key,
  Database
} from 'lucide-react';
const Cybersecurity: React.FC = () => {
  const securityServices = [
    {
      title: 'Threat Detection & Response',
      description: 'Advanced threat detection and rapid incident response capabilities',
      icon: <AlertTriangle className="w-8 h-8" />,
      features: ['24/7 Monitoring', 'Real-time Alerts', 'Incident Response', 'Threat Intelligence']
    },
    {
      title: 'Identity & Access Management',
      description: 'Comprehensive identity management and access control solutions',
      icon: <Key className="w-8 h-8" />,
      features: ['Single Sign-On', 'Multi-Factor Authentication', 'Role-Based Access', 'Privileged Access Management']
    },
    {
      title: 'Data Protection & Encryption',
      description: 'End-to-end data encryption and protection strategies',
      icon: <Lock className="w-8 h-8" />,
      features: ['Data Encryption', 'Data Loss Prevention', 'Backup Security', 'Compliance Management']
    },
    {
      title: 'Network Security',
      description: 'Advanced network security and perimeter protection',
      icon: <Network className="w-8 h-8" />,
      features: ['Firewall Management', 'Intrusion Detection', 'VPN Solutions', 'Network Segmentation']
    }
  ];
  const securitySolutions = [
    { name: 'Zero Trust Architecture', description: 'Never trust, always verify security model' },
    { name: 'SOC 2 Compliance', description: 'Security and compliance framework implementation' },
    { name: 'Penetration Testing', description: 'Regular security assessments and vulnerability testing' },
    { name: 'Security Awareness Training', description: 'Employee cybersecurity education programs' }
  ];
  const benefits = [
    {
      title: 'Enhanced Protection',
      description: 'Multi-layered security approach for comprehensive protection',
      icon: <Shield className="w-6 h-6" />
    },
    {
      title: 'Compliance Ready',
      description: 'Meet industry standards and regulatory requirements',
      icon: <Target className="w-6 h-6" />
    },
    {
      title: '24/7 Monitoring',
      description: 'Continuous security monitoring and threat detection',
      icon: <Monitor className="w-6 h-6" />
    },
    {
      title: 'Rapid Response',
      description: 'Quick incident response and recovery capabilities',
      icon: <Zap className="w-6 h-6" />
    }
  ];
  const complianceFrameworks = [
    { name: 'SOC 2', category: 'Security' },
    { name: 'ISO 27001', category: 'Information Security' },
    { name: 'GDPR', category: 'Data Protection' },
    { name: 'HIPAA', category: 'Healthcare' },
    { name: 'PCI DSS', category: 'Payment Security' },
    { name: 'NIST', category: 'Cybersecurity' },
    { name: 'FedRAMP', category: 'Government' },
    { name: 'SOX', category: 'Financial' }
  ];
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white pt-20">
      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <motion.div
          className="max-w-7xl mx-auto text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-8">
            Cyber
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400 block">
              Security
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-12">
            Protect your digital assets with enterprise-grade cybersecurity solutions and expert threat intelligence
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 transform hover:scale-105"
            >
              Get Started
            </Link>
            <Link
              to="/services"
              className="border border-white/20 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white/10 transition-all duration-300"
            >
              View All Services
            </Link>
          </div>
        </motion.div>
      </section>
      {/* Security Services Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Our Cybersecurity Services
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive security solutions designed to protect your organization from evolving threats
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {securityServices.map((service, index) => (
              <motion.div
                key={service.title}
                className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 hover:border-blue-500/50 transition-all duration-300"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1 * index }}
                whileHover={{ y: -5 }}
              >
                <div className="flex items-center mb-6">
                  <div className="bg-gradient-to-r from-blue-600 to-cyan-600 p-3 rounded-xl mr-4">
                    {service.icon}
                  </div>
                  <h3 className="text-2xl font-bold">{service.title}</h3>
                </div>
                <p className="text-gray-300 mb-6 text-lg">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-300">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      {/* Security Solutions Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Advanced Security Solutions
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Cutting-edge security approaches and methodologies
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {securitySolutions.map((solution, index) => (
              <motion.div
                key={solution.name}
                className="text-center"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1 * index }}
              >
                <div className="bg-gradient-to-r from-blue-600 to-cyan-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-2">{solution.name}</h3>
                <p className="text-gray-300 text-sm">{solution.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      {/* Compliance Frameworks Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Compliance & Standards
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Meet industry standards and regulatory requirements with our compliance expertise
            </p>
          </motion.div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {complianceFrameworks.map((framework, index) => (
              <motion.div
                key={framework.name}
                className="bg-white/5 backdrop-blur-lg rounded-xl p-6 text-center border border-white/10 hover:border-blue-500/50 transition-all duration-300"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.05 * index }}
                whileHover={{ y: -3 }}
              >
                <div className="bg-gradient-to-r from-blue-600 to-cyan-600 w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <Target className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-bold mb-1">{framework.name}</h3>
                <p className="text-sm text-gray-400">{framework.category}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      {/* Benefits Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Why Choose Our Cybersecurity Solutions?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Experience enterprise-grade security with proven expertise and cutting-edge technology
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                className="text-center"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1 * index }}
              >
                <div className="bg-gradient-to-r from-blue-600 to-cyan-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-bold mb-2">{benefit.title}</h3>
                <p className="text-gray-300 text-sm">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="bg-gradient-to-r from-blue-600/20 to-cyan-600/20 backdrop-blur-lg rounded-3xl p-12 text-center border border-white/10"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.0 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Secure Your Digital Assets?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Let's discuss how our cybersecurity solutions can protect your organization from evolving threats
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 transform hover:scale-105"
              >
                Schedule a Security Assessment
              </Link>
              <Link
                to="/services"
                className="border border-white/20 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white/10 transition-all duration-300"
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
export default Cybersecurity;