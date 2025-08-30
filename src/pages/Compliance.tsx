import React from 'react';
import { motion } from 'framer-motion';
import {
  Shield,
  CheckCircle,
  Award,
  FileText,
  Users,
  Globe,
  Lock,
  Eye,
  Database,
  Clock,
  AlertTriangle,
  Info,
  Phone,
  Mail,
  MapPin,
  Star,
  Zap,
  Brain,
  Cloud,
  Rocket,
  Heart,
  Cpu,
  Network,
  Server,
  Key,
  Fingerprint,
  Monitor,
  Smartphone,
  Tablet,
  Laptop,
  ShieldCheck,
  Gauge,
  TrendingUp,
  BarChart3
} from 'lucide-react';

export default function Compliance() {
  const complianceFrameworks = [
    {
      name: 'ISO 27001',
      description: 'Information Security Management System',
      status: 'Certified',
      icon: FileText,
      color: 'from-green-500 to-emerald-600',
      details: 'International standard for information security management',
      scope: 'Information security management system',
      lastAudit: 'December 2024',
      nextAudit: 'December 2025',
      benefits: [
        'Systematic approach to information security',
        'Risk assessment and management',
        'Continuous improvement process',
        'International recognition'
      ]
    },
    {
      name: 'SOC 2 Type II',
      description: 'Service Organization Control 2',
      status: 'Compliant',
      icon: Award,
      color: 'from-blue-500 to-cyan-600',
      details: 'AICPA trust services criteria compliance',
      scope: 'Security, availability, processing integrity, confidentiality, privacy',
      lastAudit: 'November 2024',
      nextAudit: 'November 2025',
      benefits: [
        'Independent third-party validation',
        'Trust services criteria compliance',
        'Customer confidence and trust',
        'Operational effectiveness'
      ]
    },
    {
      name: 'GDPR',
      description: 'General Data Protection Regulation',
      status: 'Compliant',
      icon: Shield,
      color: 'from-purple-500 to-violet-600',
      details: 'EU regulation on data protection and privacy',
      scope: 'Data protection and privacy for EU individuals',
      lastAudit: 'October 2024',
      nextAudit: 'October 2025',
      benefits: [
        'Enhanced data protection',
        'Individual privacy rights',
        'Global recognition',
        'Trust and transparency'
      ]
    },
    {
      name: 'HIPAA',
      description: 'Health Insurance Portability and Accountability Act',
      status: 'Compliant',
      icon: Heart,
      color: 'from-red-500 to-pink-600',
      details: 'US regulation for protecting sensitive health information',
      scope: 'Protected health information (PHI)',
      lastAudit: 'September 2024',
      nextAudit: 'September 2025',
      benefits: [
        'Healthcare data protection',
        'Patient privacy rights',
        'Secure data transmission',
        'Administrative safeguards'
      ]
    }
  ];

  const complianceMetrics = [
    {
      title: 'Security Incidents',
      value: '0',
      change: 'No incidents this year',
      icon: Shield,
      color: 'text-green-500'
    },
    {
      title: 'Compliance Score',
      value: '98.7%',
      change: '+2.1% from last quarter',
      icon: Gauge,
      color: 'text-blue-500'
    },
    {
      title: 'Audit Readiness',
      value: '100%',
      change: 'All frameworks current',
      icon: CheckCircle,
      color: 'text-emerald-500'
    },
    {
      title: 'Training Completion',
      value: '95.2%',
      change: '+5.8% this quarter',
      icon: Users,
      color: 'text-purple-500'
    }
  ];

  const securityMeasures = [
    {
      category: 'Data Protection',
      measures: [
        'End-to-end encryption',
        'Data loss prevention',
        'Backup and recovery',
        'Data classification'
      ],
      icon: Database,
      color: 'from-blue-500 to-cyan-600'
    },
    {
      category: 'Access Control',
      measures: [
        'Multi-factor authentication',
        'Role-based access control',
        'Privileged access management',
        'Regular access reviews'
      ],
      icon: Lock,
      color: 'from-green-500 to-emerald-600'
    },
    {
      category: 'Network Security',
      measures: [
        'Firewall protection',
        'Intrusion detection',
        'VPN connections',
        'Network segmentation'
      ],
      icon: Network,
      color: 'from-purple-500 to-violet-600'
    },
    {
      category: 'Monitoring',
      measures: [
        '24/7 security monitoring',
        'Log analysis',
        'Threat intelligence',
        'Incident response'
      ],
      icon: Eye,
      color: 'from-orange-500 to-red-600'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 lg:py-32">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-green-500/10"></div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-500/20 to-green-500/20 rounded-full border border-blue-400/30 mb-6">
              <Shield className="w-5 h-5 text-blue-400 mr-2" />
              <span className="text-blue-300 font-medium">Compliance & Security</span>
            </div>
            
            <h1 className="text-5xl lg:text-7xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-green-600 bg-clip-text text-transparent">
                Compliance
              </span>
              <br />
              <span className="text-white">Center</span>
            </h1>
            
            <p className="text-xl lg:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
              We maintain the highest standards of compliance and security to protect your data 
              and ensure regulatory requirements are met across all our services.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Compliance Metrics */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {complianceMetrics.map((metric, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-6 hover:border-blue-400/30 transition-all duration-300"
              >
                <div className="flex items-center justify-between mb-4">
                  <metric.icon className={`w-8 h-8 ${metric.color}`} />
                  <span className="text-2xl font-bold text-white">{metric.value}</span>
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{metric.title}</h3>
                <p className="text-gray-400 text-sm">{metric.change}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Compliance Frameworks */}
      <section className="py-20 bg-slate-800/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Compliance Frameworks
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We adhere to internationally recognized compliance frameworks and standards 
              to ensure the highest levels of security and data protection.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {complianceFrameworks.map((framework, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-8 hover:border-blue-400/30 transition-all duration-300"
              >
                <div className="flex items-center mb-6">
                  <div className={`w-12 h-12 bg-gradient-to-r ${framework.color} rounded-lg flex items-center justify-center mr-4`}>
                    <framework.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white">{framework.name}</h3>
                    <p className="text-gray-400">{framework.description}</p>
                  </div>
                  <span className="ml-auto px-3 py-1 bg-green-500/20 text-green-400 rounded-full text-sm font-medium">
                    {framework.status}
                  </span>
                </div>

                <div className="space-y-4 mb-6">
                  <div>
                    <span className="text-gray-400 text-sm">Scope:</span>
                    <p className="text-white">{framework.scope}</p>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <span className="text-gray-400 text-sm">Last Audit:</span>
                      <p className="text-white">{framework.lastAudit}</p>
                    </div>
                    <div>
                      <span className="text-gray-400 text-sm">Next Audit:</span>
                      <p className="text-white">{framework.nextAudit}</p>
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="text-white font-medium mb-3">Key Benefits:</h4>
                  <ul className="space-y-2">
                    {framework.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="flex items-start">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-300 text-sm">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Security Measures */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Security Measures
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive security controls and measures implemented across all 
              aspects of our infrastructure and operations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {securityMeasures.map((category, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-6 hover:border-blue-400/30 transition-all duration-300"
              >
                <div className={`w-12 h-12 bg-gradient-to-r ${category.color} rounded-lg flex items-center justify-center mb-4`}>
                  <category.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-4">{category.category}</h3>
                <ul className="space-y-2">
                  {category.measures.map((measure, measureIndex) => (
                    <li key={measureIndex} className="flex items-start">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-300 text-sm">{measure}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-slate-800/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Compliance Inquiries
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Have questions about our compliance practices or need specific documentation? 
              Our compliance team is here to help.
            </p>
          </div>

          <div className="max-w-2xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <Mail className="w-6 h-6 text-blue-400" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Email</h3>
                <p className="text-gray-300">compliance@ziontechgroup.com</p>
              </div>

              <div className="text-center">
                <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <Phone className="w-6 h-6 text-blue-400" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Phone</h3>
                <p className="text-gray-300">+1 302 464 0950</p>
              </div>

              <div className="text-center">
                <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <MapPin className="w-6 h-6 text-blue-400" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Address</h3>
                <p className="text-gray-300">364 E Main St STE 1008<br />Middletown DE 19709</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
