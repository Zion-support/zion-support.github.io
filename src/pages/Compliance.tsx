import React from 'react';
import { SEO } from '../components/SEO';
import { motion } from 'framer-motion';
import { Shield, CheckCircle, FileText, Users, Globe, Brain, Zap, Heart, Award, Lock, Eye, AlertTriangle } from 'lucide-react';

export default function Compliance() {
  const complianceFrameworks = [
    {
      title: 'ISO 27001',
      description: 'Information Security Management System',
      icon: Shield,
      features: [
        'Risk assessment and management',
        'Security policies and procedures',
        'Asset management and classification',
        'Access control and identity management',
        'Incident management and response'
      ],
      color: 'from-blue-500 to-cyan-500',
      status: 'Certified',
      year: '2024'
    },
    {
      title: 'SOC 2 Type II',
      description: 'Service Organization Control 2',
      icon: CheckCircle,
      features: [
        'Security controls assessment',
        'Availability monitoring',
        'Processing integrity verification',
        'Confidentiality protection',
        'Privacy controls implementation'
      ],
      color: 'from-green-500 to-emerald-500',
      status: 'Compliant',
      year: '2024'
    },
    {
      title: 'GDPR',
      description: 'General Data Protection Regulation',
      icon: Lock,
      features: [
        'Data protection by design',
        'Privacy impact assessments',
        'Data subject rights management',
        'Breach notification procedures',
        'Data processing agreements'
      ],
      color: 'from-purple-500 to-pink-500',
      status: 'Compliant',
      year: '2024'
    },
    {
      title: 'HIPAA',
      description: 'Health Insurance Portability and Accountability Act',
      icon: Eye,
      features: [
        'Protected health information safeguards',
        'Administrative safeguards',
        'Physical safeguards',
        'Technical safeguards',
        'Breach notification requirements'
      ],
      color: 'from-orange-500 to-red-500',
      status: 'Compliant',
      year: '2024'
    }
  ];

  const industryCompliance = [
    {
      industry: 'Healthcare',
      standards: ['HIPAA', 'HITECH', 'FDA 21 CFR Part 11'],
      icon: Shield,
      color: 'from-red-500 to-pink-500'
    },
    {
      industry: 'Financial Services',
      standards: ['PCI DSS', 'SOX', 'GLBA', 'FFIEC'],
      icon: CheckCircle,
      color: 'from-blue-500 to-cyan-500'
    },
    {
      industry: 'Government',
      standards: ['FISMA', 'FedRAMP', 'CMMC', 'NIST'],
      icon: Award,
      color: 'from-green-500 to-emerald-500'
    },
    {
      industry: 'Manufacturing',
      standards: ['ISO 9001', 'ISO 14001', 'IATF 16949'],
      icon: Zap,
      color: 'from-purple-500 to-indigo-500'
    }
  ];

  const complianceProcesses = [
    {
      name: 'Risk Assessment',
      description: 'Comprehensive risk identification and evaluation',
      icon: Brain,
      frequency: 'Quarterly',
      status: 'Active'
    },
    {
      name: 'Policy Management',
      description: 'Development and maintenance of compliance policies',
      icon: FileText,
      frequency: 'Ongoing',
      status: 'Active'
    },
    {
      name: 'Training & Awareness',
      description: 'Regular compliance training for all employees',
      icon: Users,
      frequency: 'Monthly',
      status: 'Active'
    },
    {
      name: 'Monitoring & Auditing',
      description: 'Continuous compliance monitoring and regular audits',
      icon: Eye,
      frequency: 'Continuous',
      status: 'Active'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <SEO 
        title="Compliance - Zion Tech Group"
        description="Zion Tech Group's comprehensive compliance framework covering ISO 27001, SOC 2, GDPR, HIPAA, and industry-specific regulations."
      />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <div className="flex justify-center mb-6">
              <div className="w-20 h-20 bg-gradient-to-br from-cyan-400 via-blue-500 to-purple-600 rounded-2xl flex items-center justify-center">
                <Shield className="w-10 h-10 text-white" />
              </div>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Regulatory
              <span className="block bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                Compliance
              </span>
            </h1>
            <p className="text-xl text-slate-300 mb-8 max-w-3xl mx-auto">
              We maintain comprehensive compliance with international standards and regulations, 
              ensuring your data and systems meet the highest security and privacy requirements.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Compliance Overview */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Comprehensive Compliance Framework
            </h2>
            <p className="text-xl text-slate-300 mb-8">
              Our compliance program covers international standards and industry-specific regulations, 
              providing a solid foundation for secure and compliant operations.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  icon: Shield,
                  title: 'International Standards',
                  description: 'ISO 27001 and SOC 2 compliance'
                },
                {
                  icon: Lock,
                  title: 'Data Protection',
                  description: 'GDPR and privacy regulation compliance'
                },
                {
                  icon: Award,
                  title: 'Industry Specific',
                  description: 'Healthcare, financial, and government compliance'
                }
              ].map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-slate-700/50"
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <item.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">{item.title}</h3>
                  <p className="text-slate-300">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Compliance Frameworks */}
      <section className="py-20 bg-slate-800/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Compliance Frameworks
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Our compliance frameworks ensure we meet and exceed international standards 
              for information security and data protection.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {complianceFrameworks.map((framework, index) => (
              <motion.div
                key={framework.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-slate-700/50"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className={`w-16 h-16 bg-gradient-to-br ${framework.color} rounded-xl flex items-center justify-center`}>
                    <framework.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-2xl font-bold text-white">{framework.title}</h3>
                      <span className="inline-block px-3 py-1 bg-green-500/20 text-green-400 text-sm rounded-full border border-green-500/30">
                        {framework.status}
                      </span>
                    </div>
                    <p className="text-slate-300">{framework.description}</p>
                    <p className="text-sm text-slate-400 mt-1">Year: {framework.year}</p>
                  </div>
                </div>
                
                <ul className="space-y-3">
                  {framework.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                      <span className="text-slate-300">{feature}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Industry Compliance */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Industry-Specific Compliance
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              We understand the unique compliance requirements of different industries 
              and provide tailored solutions to meet these standards.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {industryCompliance.map((industry, index) => (
              <motion.div
                key={industry.industry}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-slate-700/50 text-center"
              >
                <div className={`w-16 h-16 bg-gradient-to-br ${industry.color} rounded-xl flex items-center justify-center mx-auto mb-4`}>
                  <industry.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-3">{industry.industry}</h3>
                <div className="space-y-2">
                  {industry.standards.map((standard, idx) => (
                    <div key={idx} className="text-sm text-slate-300 bg-slate-700/30 rounded px-2 py-1">
                      {standard}
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Compliance Processes */}
      <section className="py-20 bg-slate-800/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Compliance Management Processes
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Our systematic approach to compliance ensures continuous adherence 
              to standards and regulations.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {complianceProcesses.map((process, index) => (
              <motion.div
                key={process.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-slate-700/50 text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <process.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{process.name}</h3>
                <p className="text-slate-300 text-sm mb-3">{process.description}</p>
                <div className="space-y-2">
                  <span className="inline-block px-3 py-1 bg-blue-500/20 text-blue-400 text-sm rounded-full border border-blue-500/30">
                    {process.frequency}
                  </span>
                  <span className="inline-block px-3 py-1 bg-green-500/20 text-green-400 text-sm rounded-full border border-green-500/30">
                    {process.status}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Compliance Benefits */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Benefits of Our Compliance Program
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Our comprehensive compliance approach delivers tangible benefits 
              for your business and stakeholders.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {[
              {
                icon: Shield,
                title: 'Risk Mitigation',
                description: 'Reduced security and compliance risks through systematic controls and monitoring'
              },
              {
                icon: Users,
                title: 'Stakeholder Trust',
                description: 'Enhanced confidence from customers, partners, and regulators'
              },
              {
                icon: Globe,
                title: 'Global Operations',
                description: 'Ability to operate in multiple jurisdictions with confidence'
              },
              {
                icon: Award,
                title: 'Competitive Advantage',
                description: 'Demonstrated commitment to security and compliance excellence'
              }
            ].map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-slate-700/50"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-xl flex items-center justify-center">
                    <benefit.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white">{benefit.title}</h3>
                </div>
                <p className="text-slate-300">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Compliance Commitment */}
      <section className="py-20 bg-slate-800/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Our Compliance Commitment
            </h2>
            <p className="text-xl text-slate-300 mb-8">
              We are committed to maintaining the highest standards of compliance 
              and continuously improving our processes to meet evolving requirements.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-slate-700/50">
                <div className="flex items-center gap-3 mb-4">
                  <AlertTriangle className="w-6 h-6 text-yellow-400" />
                  <h3 className="text-xl font-semibold text-white">Continuous Improvement</h3>
                </div>
                <p className="text-slate-300">
                  Regular assessment and enhancement of our compliance program 
                  to address new regulations and emerging threats.
                </p>
              </div>
              
              <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-slate-700/50">
                <div className="flex items-center gap-3 mb-4">
                  <Heart className="w-6 h-6 text-red-400" />
                  <h3 className="text-xl font-semibold text-white">Client Partnership</h3>
                </div>
                <p className="text-slate-300">
                  Working closely with clients to ensure their specific compliance 
                  requirements are met and exceeded.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-cyan-900/20 to-blue-900/20">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Ensure Your Compliance
            </h2>
            <p className="text-xl text-slate-300 mb-8 max-w-3xl mx-auto">
              Partner with Zion Tech Group to achieve and maintain compliance 
              with international standards and industry regulations.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-cyan-400 to-blue-500 text-white font-semibold rounded-lg hover:from-cyan-500 hover:to-blue-600 transition-all duration-300"
              >
                Get Compliance Assessment
              </a>
              <a
                href="/security"
                className="inline-flex items-center gap-2 px-6 py-3 bg-slate-700/50 text-white font-semibold rounded-lg border border-slate-600 hover:border-cyan-400/50 transition-all duration-300"
              >
                Learn About Security
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}