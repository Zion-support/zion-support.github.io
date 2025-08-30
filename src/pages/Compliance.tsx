// Removed unused: import React from 'react';
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
  Server,
  Network,
  Zap,
  Brain,
  Cloud,
  Rocket,
  Building,
  Monitor,
  Clock,
  AlertTriangle,
  Info
} from 'lucide-react';
import { SEO } from '../components/SEO';

export default function Compliance() {
  const complianceFrameworks = [
    {
      title: 'SOC 2 Type II',
      description: 'Service Organization Control 2 Type II certification for security, availability, and processing integrity',
      icon: Shield,
      color: 'from-blue-500 to-cyan-500',
      status: 'Certified',
      validity: 'Annual renewal',
      scope: 'All cloud services and data processing',
      benefits: [
        'Independent third-party validation',
        'Enhanced customer trust',
        'Competitive advantage',
        'Risk management framework'
      ]
    },
    {
      title: 'ISO 27001',
      description: 'Information Security Management System certification',
      icon: Lock,
      color: 'from-green-500 to-emerald-500',
      status: 'Certified',
      validity: '3-year certification',
      scope: 'Information security management',
      benefits: [
        'International standard recognition',
        'Systematic security approach',
        'Continuous improvement process',
        'Risk-based security management'
      ]
    },
    {
      title: 'GDPR Compliance',
      description: 'General Data Protection Regulation compliance for EU data protection',
      icon: Globe,
      color: 'from-purple-500 to-pink-500',
      status: 'Compliant',
      validity: 'Ongoing compliance',
      scope: 'EU data processing and privacy',
      benefits: [
        'Legal compliance in EU markets',
        'Enhanced data protection',
        'Customer privacy assurance',
        'Transparent data practices'
      ]
    },
    {
      title: 'HIPAA Compliance',
      description: 'Health Insurance Portability and Accountability Act compliance',
      icon: Users,
      color: 'from-orange-500 to-red-500',
      status: 'Compliant',
      validity: 'Ongoing compliance',
      scope: 'Healthcare data protection',
      benefits: [
        'Healthcare industry access',
        'Patient data protection',
        'Regulatory compliance',
        'Trust in healthcare sector'
      ]
    }
  ];

  const industryStandards = [
    {
      title: 'Cloud Security',
      description: 'Cloud Security Alliance (CSA) best practices and controls',
      icon: Cloud,
      color: 'from-blue-500 to-cyan-500',
      standards: [
        'CSA Cloud Controls Matrix',
        'Cloud Security Principles',
        'Data Protection Standards',
        'Identity Management'
      ]
    },
    {
      title: 'Data Protection',
      description: 'Comprehensive data protection and privacy standards',
      icon: Database,
      color: 'from-green-500 to-emerald-500',
      standards: [
        'Data Classification',
        'Encryption Standards',
        'Access Controls',
        'Data Retention Policies'
      ]
    },
    {
      title: 'Network Security',
      description: 'Network security and infrastructure protection standards',
      icon: Network,
      color: 'from-purple-500 to-pink-500',
      standards: [
        'Zero Trust Architecture',
        'Network Segmentation',
        'Intrusion Detection',
        'Firewall Management'
      ]
    },
    {
      title: 'Application Security',
      description: 'Secure software development and application security',
// Fixed missing name:       icon: Code,
      color: 'from-orange-500 to-red-500',
      standards: [
        'OWASP Top 10',
        'Secure SDLC',
        'Code Review Standards',
        'Vulnerability Management'
      ]
    }
  ];

  const complianceProcesses = [
    {
      title: 'Risk Assessment',
      description: 'Comprehensive risk identification and assessment processes',
      icon: Monitor,
      color: 'from-blue-500 to-cyan-500',
      frequency: 'Quarterly',
      process: [
        'Risk identification and classification',
        'Impact and likelihood assessment',
        'Risk treatment planning',
        'Continuous monitoring and review'
      ]
    },
    {
      title: 'Audit & Monitoring',
      description: 'Regular compliance audits and continuous monitoring',
      icon: Eye,
      color: 'from-green-500 to-emerald-500',
      frequency: 'Continuous',
      process: [
        'Automated compliance monitoring',
        'Regular internal audits',
        'Third-party assessments',
        'Real-time compliance dashboards'
      ]
    },
    {
      title: 'Policy Management',
      description: 'Comprehensive policy development and management',
      icon: FileText,
      color: 'from-purple-500 to-pink-500',
      frequency: 'Annual review',
      process: [
        'Policy development and review',
        'Employee training and awareness',
        'Policy enforcement monitoring',
        'Regular policy updates'
      ]
    },
    {
      title: 'Incident Response',
      description: 'Compliance-focused incident response procedures',
      icon: AlertTriangle,
      color: 'from-orange-500 to-red-500',
      frequency: 'As needed',
      process: [
        'Incident detection and reporting',
        'Compliance impact assessment',
        'Regulatory notification procedures',
        'Post-incident compliance review'
      ]
    }
  ];

  const complianceTools = [
    {
      title: 'Compliance Dashboard',
      description: 'Real-time compliance monitoring and reporting',
      icon: Monitor,
      href: '/compliance/dashboard',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'Policy Library',
      description: 'Centralized policy and procedure management',
      icon: FileText,
      href: '/compliance/policies',
      color: 'from-green-500 to-emerald-500'
    },
    {
      title: 'Audit Reports',
      description: 'Comprehensive audit reports and findings',
      icon: Award,
      href: '/compliance/audits',
      color: 'from-purple-500 to-pink-500'
    },
    {
      title: 'Training Portal',
      description: 'Compliance training and certification portal',
      icon: Users,
      href: '/compliance/training',
      color: 'from-orange-500 to-red-500'
    }
  ];

  const contactInfo = [
    {
      title: 'Compliance Team',
      description: 'Contact our compliance team for compliance-related inquiries',
      email: 'compliance@ziontechgroup.com',
      phone: '+1 302 464 0950',
      responseTime: '24-48 hours'
    },
    {
      title: 'Audit Requests',
      description: 'Request compliance audits or assessments',
      email: 'audit@ziontechgroup.com',
      phone: '+1 302 464 0950',
      responseTime: '1-2 business days'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <SEO 
        title="Compliance - Zion Tech Group"
        description="Learn about Zion Tech Group's compliance certifications, frameworks, and commitment to meeting industry standards and regulatory requirements."
      />
      
      {/* Header */}
      <div className="bg-slate-800/50 border-b border-slate-700">
        <div className="container mx-auto px-4 py-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <div className="w-20 h-20 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-6">
              <Award className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Compliance & Certifications
            </h1>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              We maintain the highest standards of compliance and certification to ensure your business 
              operates with confidence and meets all regulatory requirements.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Compliance Commitment */}
      <div className="container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-gradient-to-r from-green-600/20 to-emerald-600/20 border border-green-500/30 rounded-2xl p-8 text-center"
        >
          <h2 className="text-2xl font-bold text-white mb-4">
            Our Compliance Commitment
          </h2>
          <p className="text-slate-300 max-w-4xl mx-auto">
            Compliance is not just about meeting requirements—it's about building trust and ensuring 
            operational excellence. Our comprehensive compliance program covers international standards, 
            industry best practices, and regulatory requirements to provide you with confidence in our services.
          </p>
        </motion.div>
      </div>

      {/* Compliance Frameworks */}
      <div className="bg-slate-800/20 py-16">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-3xl font-bold text-white text-center mb-12"
          >
            Compliance Frameworks & Certifications
          </motion.h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {complianceFrameworks.map((framework, index) => (
              <motion.div
                key={framework.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                className="bg-slate-800/30 border border-slate-700 rounded-xl p-6"
              >
                <div className="flex items-center space-x-4 mb-6">
                  <div className={`w-16 h-16 bg-gradient-to-br ${framework.color} rounded-xl flex items-center justify-center`}>
                    <framework.icon className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white">{framework.title}</h3>
                    <p className="text-slate-400 text-sm">{framework.description}</p>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-slate-400 text-sm">Status:</span>
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                      framework.status === 'Certified' ? 'bg-green-500/20 text-green-400' :
                      'bg-blue-500/20 text-blue-400'
                    }`}>
                      {framework.status}
                    </span>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-slate-400 text-sm">Validity:</span>
                    <span className="text-slate-300 text-sm">{framework.validity}</span>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-slate-400 text-sm">Scope:</span>
                    <span className="text-slate-300 text-sm">{framework.scope}</span>
                  </div>
                  
                  <div className="pt-4 border-t border-slate-700">
                    <h4 className="text-slate-300 font-medium mb-3">Key Benefits:</h4>
                    <div className="space-y-2">
                      {framework.benefits.map((benefit, idx) => (
                        <div key={idx} className="flex items-center space-x-3">
                          <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                          <span className="text-slate-300 text-sm">{benefit}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Industry Standards */}
      <div className="container mx-auto px-4 py-16">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-3xl font-bold text-white text-center mb-12"
        >
          Industry Standards & Best Practices
        </motion.h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {industryStandards.map((standard, index) => (
            <motion.div
              key={standard.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
              className="bg-slate-800/30 border border-slate-700 rounded-xl p-6"
            >
              <div className="text-center mb-6">
                <div className={`w-16 h-16 bg-gradient-to-br ${standard.color} rounded-xl flex items-center justify-center mx-auto mb-4`}>
                  <standard.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{standard.title}</h3>
                <p className="text-slate-400 text-sm">{standard.description}</p>
              </div>
              
              <div className="space-y-3">
                {standard.standards.map((item, idx) => (
                  <div key={idx} className="flex items-center space-x-3">
                    <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                    <span className="text-slate-300 text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Compliance Processes */}
      <div className="bg-slate-800/20 py-16">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="text-3xl font-bold text-white text-center mb-12"
          >
            Compliance Processes & Procedures
          </motion.h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {complianceProcesses.map((process, index) => (
              <motion.div
                key={process.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                className="bg-slate-800/30 border border-slate-700 rounded-xl p-6"
              >
                <div className="text-center mb-6">
                  <div className={`w-16 h-16 bg-gradient-to-br ${process.color} rounded-xl flex items-center justify-center mx-auto mb-4`}>
                    <process.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">{process.title}</h3>
                  <p className="text-slate-400 text-sm mb-3">{process.description}</p>
                  <span className="px-3 py-1 bg-slate-700 rounded-full text-xs text-slate-300">
                    Frequency: {process.frequency}
                  </span>
                </div>
                
                <div className="space-y-3">
                  {process.process.map((item, idx) => (
                    <div key={idx} className="flex items-center space-x-3">
                      <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                      <span className="text-slate-300 text-sm">{item}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Compliance Tools */}
      <div className="container mx-auto px-4 py-16">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.9 }}
          className="text-3xl font-bold text-white text-center mb-12"
        >
          Compliance Tools & Resources
        </motion.h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {complianceTools.map((tool, index) => (
            <motion.div
              key={tool.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.0 + index * 0.1 }}
              className="group"
            >
              <div className="bg-slate-800/30 border border-slate-700 rounded-xl p-6 hover:border-green-400/50 transition-all duration-300 h-full text-center">
                <div className={`w-16 h-16 bg-gradient-to-br ${tool.color} rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <tool.icon className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-lg font-semibold text-white mb-2">{tool.title}</h3>
                <p className="text-slate-400 text-sm">{tool.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Contact Information */}
      <div className="bg-slate-800/20 py-16">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.1 }}
            className="text-3xl font-bold text-white text-center mb-12"
          >
            Compliance Support & Inquiries
          </motion.h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {contactInfo.map((contact, index) => (
              <motion.div
                key={contact.title}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 1.2 + index * 0.1 }}
                className="bg-slate-800/30 border border-slate-700 rounded-xl p-6"
              >
                <h3 className="text-xl font-semibold text-white mb-4">{contact.title}</h3>
                <p className="text-slate-400 mb-6">{contact.description}</p>
                
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-slate-700 rounded-lg flex items-center justify-center">
                      <span className="text-green-400 text-sm font-medium">@</span>
                    </div>
                    <div>
                      <div className="text-white font-medium">{contact.email}</div>
                      <div className="text-slate-400 text-sm">Response time: {contact.responseTime}</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-slate-700 rounded-lg flex items-center justify-center">
                      <span className="text-green-400 text-sm font-medium">📞</span>
                    </div>
                    <div>
                      <div className="text-white font-medium">{contact.phone}</div>
                      <div className="text-slate-400 text-sm">Business hours support</div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Continuous Compliance */}
      <div className="container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.3 }}
          className="bg-gradient-to-r from-blue-600/20 to-cyan-600/20 border border-blue-500/30 rounded-2xl p-8 text-center"
        >
          <h2 className="text-2xl font-bold text-white mb-4">
            Continuous Compliance Excellence
          </h2>
          <p className="text-slate-300 max-w-4xl mx-auto">
            Compliance is an ongoing journey, not a destination. We continuously monitor regulatory changes, 
            update our processes, and enhance our compliance posture to ensure we always meet and exceed 
            industry standards and regulatory requirements.
          </p>
        </motion.div>
      </div>
    </div>
  );
}