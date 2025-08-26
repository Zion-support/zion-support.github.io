import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Lock, CheckCircle, AlertTriangle, Award, Users, Globe, Server } from 'lucide-react';

const securityFeatures = [
  {
    icon: Shield,
    title: 'Advanced Threat Detection',
    description: 'AI-powered threat detection and real-time monitoring to identify and respond to security incidents.',
    features: ['Machine Learning Algorithms', 'Behavioral Analysis', 'Real-time Alerts'],
    color: 'from-blue-500 to-cyan-500'
  },
  {
    icon: Lock,
    title: 'Zero Trust Architecture',
    description: 'Implement zero-trust security principles with continuous verification and least-privilege access.',
    features: ['Identity Verification', 'Access Control', 'Continuous Monitoring'],
    color: 'from-green-500 to-emerald-500'
  },
  {
    icon: Server,
    title: 'Secure Infrastructure',
    description: 'Enterprise-grade security with encrypted data transmission and secure hosting environments.',
    features: ['End-to-End Encryption', 'Secure Hosting', 'Data Protection'],
    color: 'from-purple-500 to-pink-500'
  },
  {
    icon: Users,
    title: 'Compliance Management',
    description: 'Comprehensive compliance frameworks including SOC 2, ISO 27001, and industry-specific standards.',
    features: ['SOC 2 Type II', 'ISO 27001', 'GDPR Compliance'],
    color: 'from-red-500 to-orange-500'
  }
];

const complianceStandards = [
  {
    name: 'SOC 2 Type II',
    description: 'Service Organization Control 2 compliance for security, availability, and confidentiality.',
    status: 'Certified',
    icon: CheckCircle,
    color: 'text-green-400'
  },
  {
    name: 'ISO 27001',
    description: 'International standard for information security management systems.',
    status: 'Certified',
    icon: CheckCircle,
    color: 'text-green-400'
  },
  {
    name: 'GDPR',
    description: 'General Data Protection Regulation compliance for EU data protection.',
    status: 'Compliant',
    icon: CheckCircle,
    color: 'text-green-400'
  },
  {
    name: 'HIPAA',
    description: 'Health Insurance Portability and Accountability Act compliance.',
    status: 'Compliant',
    icon: CheckCircle,
    color: 'text-green-400'
  },
  {
    name: 'PCI DSS',
    description: 'Payment Card Industry Data Security Standard compliance.',
    status: 'Compliant',
    icon: CheckCircle,
    color: 'text-green-400'
  },
  {
    name: 'FedRAMP',
    description: 'Federal Risk and Authorization Management Program for government cloud services.',
    status: 'In Progress',
    icon: AlertTriangle,
    color: 'text-yellow-400'
  }
];

const securityMetrics = [
  { metric: '99.99%', label: 'Uptime SLA', icon: Server },
  { metric: 'Zero', label: 'Security Breaches', icon: Shield },
  { metric: '24/7', label: 'Security Monitoring', icon: Lock },
  { metric: '< 15min', label: 'Incident Response', icon: AlertTriangle }
];

export function SecurityComplianceSection() {
  return (
    <section className="py-20 bg-gradient-to-br from-zion-slate-dark via-zion-blue-dark to-zion-slate-dark relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 50% 50%, currentColor 1px, transparent 1px)`,
          backgroundSize: '40px 40px'
        }} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Security & <span className="bg-gradient-to-r from-zion-cyan to-zion-purple bg-clip-text text-transparent">Compliance</span>
          </h2>
          <p className="text-zion-slate-light text-lg md:text-xl max-w-4xl mx-auto leading-relaxed">
            Enterprise-grade security with comprehensive compliance frameworks. 
            Your data and systems are protected by industry-leading security measures.
          </p>
        </motion.div>

        {/* Security Features */}
        <div className="mb-20">
          <motion.h3 
            className="text-3xl font-bold text-white text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Security Features
          </motion.h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {securityFeatures.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <motion.div
                  key={feature.title}
                  className="group"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <div className="bg-zion-slate-dark/50 backdrop-blur-sm border border-zion-cyan/20 rounded-2xl p-6 h-full hover:border-zion-cyan/40 hover:bg-zion-slate-dark/70 transition-all duration-300 group-hover:shadow-2xl group-hover:shadow-zion-cyan/25">
                    <div className={`w-16 h-16 bg-gradient-to-r ${feature.color} rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                    
                    <h4 className="text-xl font-bold text-white mb-3 text-center group-hover:text-zion-cyan transition-colors">
                      {feature.title}
                    </h4>
                    
                    <p className="text-zion-slate-light text-sm mb-4 leading-relaxed text-center">
                      {feature.description}
                    </p>
                    
                    <ul className="space-y-2">
                      {feature.features.map((item, itemIndex) => (
                        <li key={itemIndex} className="flex items-center text-sm text-zion-slate-light">
                          <div className="w-2 h-2 bg-zion-cyan rounded-full mr-2 flex-shrink-0"></div>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Compliance Standards */}
        <div className="mb-20">
          <motion.h3 
            className="text-3xl font-bold text-white text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Compliance Standards
          </motion.h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {complianceStandards.map((standard, index) => {
              const IconComponent = standard.icon;
              return (
                <motion.div
                  key={standard.name}
                  className="group"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <div className="bg-zion-slate-dark/30 backdrop-blur-sm border border-zion-cyan/20 rounded-xl p-6 hover:border-zion-cyan/40 hover:bg-zion-slate-dark/50 transition-all duration-300">
                    <div className="flex items-center justify-between mb-3">
                      <h4 className="text-lg font-bold text-white">{standard.name}</h4>
                      <IconComponent className={`w-6 h-6 ${standard.color}`} />
                    </div>
                    
                    <p className="text-zion-slate-light text-sm mb-3 leading-relaxed">
                      {standard.description}
                    </p>
                    
                    <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium ${
                      standard.status === 'Certified' || standard.status === 'Compliant'
                        ? 'bg-green-500/20 text-green-400 border border-green-500/30'
                        : 'bg-yellow-500/20 text-yellow-400 border border-yellow-500/30'
                    }`}>
                      {standard.status}
                    </span>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Security Metrics */}
        <motion.div 
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {securityMetrics.map((metric, index) => {
              const IconComponent = metric.icon;
              return (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-zion-cyan to-zion-purple rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-3xl font-bold text-white mb-2">{metric.metric}</div>
                  <div className="text-zion-slate-light">{metric.label}</div>
                </div>
              );
            })}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="bg-zion-slate-dark/30 backdrop-blur-sm border border-zion-cyan/20 rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">
              Secure Your Business Today
            </h3>
            <p className="text-zion-slate-light mb-6">
              Get enterprise-grade security and compliance without the complexity. 
              Our team handles all security requirements so you can focus on your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-zion-cyan to-zion-purple text-white px-8 py-3 rounded-xl font-medium hover:shadow-lg hover:shadow-zion-cyan/25 transition-all duration-300">
                Security Assessment
              </button>
              <button className="border border-zion-cyan/20 text-zion-cyan px-8 py-3 rounded-xl font-medium hover:bg-zion-cyan/20 transition-all duration-300">
                Compliance Review
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}