import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Lock, Eye, CheckCircle, AlertTriangle, FileText, Users, Globe } from 'lucide-react';

export function SecurityComplianceSection() {
  const securityFeatures = [
    {
      icon: Shield,
      title: "Zero Trust Architecture",
      description: "Implement comprehensive security with continuous verification and least-privilege access",
      benefits: [
        "Multi-factor authentication",
        "Identity verification at every step",
        "Micro-segmentation",
        "Continuous monitoring"
      ]
    },
    {
      icon: Lock,
      title: "Data Encryption",
      description: "End-to-end encryption for data at rest and in transit",
      benefits: [
        "AES-256 encryption",
        "TLS 1.3 protocols",
        "Key management systems",
        "Encrypted backups"
      ]
    },
    {
      icon: Eye,
      title: "Advanced Monitoring",
      description: "Real-time threat detection and response capabilities",
      benefits: [
        "SIEM integration",
        "Behavioral analytics",
        "Threat intelligence",
        "Automated response"
      ]
    },
    {
      icon: CheckCircle,
      title: "Compliance Standards",
      description: "Meet industry and regulatory requirements",
      benefits: [
        "SOC 2 Type II",
        "ISO 27001",
        "GDPR compliance",
        "HIPAA ready"
      ]
    }
  ];

  const complianceFrameworks = [
    {
      name: "SOC 2 Type II",
      status: "Certified",
      description: "Service Organization Control 2 compliance for security, availability, and confidentiality",
      icon: CheckCircle,
      color: "text-green-500"
    },
    {
      name: "ISO 27001",
      status: "Certified",
      description: "International standard for information security management systems",
      icon: CheckCircle,
      color: "text-green-500"
    },
    {
      name: "GDPR",
      status: "Compliant",
      description: "General Data Protection Regulation compliance for EU data protection",
      icon: CheckCircle,
      color: "text-blue-500"
    },
    {
      name: "HIPAA",
      status: "Ready",
      description: "Health Insurance Portability and Accountability Act compliance",
      icon: AlertTriangle,
      color: "text-yellow-500"
    },
    {
      name: "PCI DSS",
      status: "Compliant",
      description: "Payment Card Industry Data Security Standard compliance",
      icon: CheckCircle,
      color: "text-blue-500"
    },
    {
      name: "NIST",
      status: "Aligned",
      description: "National Institute of Standards and Technology cybersecurity framework",
      icon: CheckCircle,
      color: "text-green-500"
    }
  ];

  const securityMetrics = [
    { label: "Uptime", value: "99.99%", description: "System availability" },
    { label: "Response Time", value: "<50ms", description: "Threat detection" },
    { label: "Incident Response", value: "<15min", description: "Average resolution" },
    { label: "Data Breaches", value: "0", description: "In the last 5 years" }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Security & Compliance
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Enterprise-grade security with industry-leading compliance standards. 
            Your data and systems are protected by the most advanced security measures available.
          </p>
        </motion.div>

        {/* Security Features */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {securityFeatures.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -5, scale: 1.02 }}
              className="group"
            >
              <div className="bg-slate-800/50 border border-slate-700 rounded-xl p-8 h-full transition-all duration-300 group-hover:border-slate-500 group-hover:bg-slate-800/70">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-red-500 to-pink-600 rounded-xl mb-6 group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-2xl font-semibold text-white mb-4 group-hover:text-red-400 transition-colors duration-300">
                  {feature.title}
                </h3>
                
                <p className="text-gray-400 text-lg leading-relaxed mb-6">
                  {feature.description}
                </p>
                
                <ul className="space-y-3">
                  {feature.benefits.map((benefit, benefitIndex) => (
                    <li key={benefitIndex} className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                      <span className="text-gray-300">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Compliance Frameworks */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mb-16"
        >
          <div className="bg-slate-800/30 border border-slate-700 rounded-xl p-8">
            <h3 className="text-3xl font-bold text-white text-center mb-8">
              Compliance & Certifications
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {complianceFrameworks.map((framework, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-slate-700/50 border border-slate-600 rounded-lg p-6 hover:border-slate-500 transition-colors duration-300"
                >
                  <div className="flex items-center justify-between mb-4">
                    <h4 className="text-lg font-semibold text-white">{framework.name}</h4>
                    <framework.icon className={`w-6 h-6 ${framework.color}`} />
                  </div>
                  <p className="text-gray-400 text-sm mb-3">{framework.description}</p>
                  <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium ${
                    framework.status === 'Certified' ? 'bg-green-500/20 text-green-400 border border-green-500/30' :
                    framework.status === 'Compliant' ? 'bg-blue-500/20 text-blue-400 border border-blue-500/30' :
                    framework.status === 'Ready' ? 'bg-yellow-500/20 text-yellow-400 border border-yellow-500/30' :
                    'bg-gray-500/20 text-gray-400 border border-gray-500/30'
                  }`}>
                    {framework.status}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Security Metrics */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mb-16"
        >
          <div className="bg-slate-800/30 border border-slate-700 rounded-xl p-8">
            <h3 className="text-3xl font-bold text-white text-center mb-8">
              Security Performance Metrics
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {securityMetrics.map((metric, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="text-4xl font-bold text-green-400 mb-2">{metric.value}</div>
                  <div className="text-lg font-semibold text-white mb-1">{metric.label}</div>
                  <div className="text-gray-400 text-sm">{metric.description}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center"
        >
          <div className="bg-slate-800/30 border border-slate-700 rounded-xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">
              Ready to Secure Your Digital Assets?
            </h3>
            <p className="text-gray-300 mb-6">
              Get a comprehensive security assessment and compliance roadmap tailored to your organization's needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-red-500 to-pink-600 text-white font-semibold rounded-xl hover:from-red-600 hover:to-pink-700 transition-all duration-300 transform hover:scale-105">
                <Shield className="w-5 h-5 mr-2" />
                Security Assessment
              </button>
              <button className="inline-flex items-center px-8 py-3 border border-red-500 text-red-400 font-semibold rounded-xl hover:bg-red-500 hover:text-white transition-all duration-300">
                <FileText className="w-5 h-5 mr-2" />
                Compliance Report
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}