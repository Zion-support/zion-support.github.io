import React from 'react';
import { motion } from 'framer-motion';
import { 
  Shield, 
  CheckCircle, 
  FileText, 
  Globe, 
  Users, 
  Database, 
  Lock, 
  AlertTriangle, 
  Calendar, 
  Award, 
  BarChart3, 
  Zap,
  Building,
  Eye,
  Info,
  Phone,
  Mail,
  MapPin,
  Star,
  Brain,
  Cloud,
  Rocket,
  Heart,
  Cpu,
  Network,
  Server,
  Key,
  Fingerprint,
  Monitor
} from 'lucide-react';

export default function Compliance() {
  const lastUpdated = "January 15, 2025";

  const complianceFrameworks = [
    {
      name: "ISO 27001",
      description: "Information Security Management System",
      status: "Certified",
      validity: "Valid until December 2026",
      scope: "Information security management for all services",
      color: "from-blue-500 to-cyan-500"
    },
    {
      name: "SOC 2 Type II",
      description: "Service Organization Control 2",
      status: "Compliant",
      validity: "Annual audit completed",
      scope: "Security, availability, and confidentiality controls",
      color: "from-green-500 to-emerald-500"
    },
    {
      name: "GDPR",
      description: "General Data Protection Regulation",
      status: "Compliant",
      validity: "Ongoing compliance",
      scope: "EU data protection and privacy requirements",
      color: "from-purple-500 to-pink-500"
    },
    {
      name: "HIPAA",
      description: "Health Insurance Portability and Accountability Act",
      status: "Compliant",
      validity: "Ongoing compliance",
      scope: "Protected health information handling",
      color: "from-orange-500 to-red-500"
    },
    {
      name: "PCI DSS",
      description: "Payment Card Industry Data Security Standard",
      status: "Compliant",
      validity: "Annual assessment completed",
      scope: "Payment card data security",
      color: "from-indigo-500 to-purple-500"
    },
    {
      name: "SOX",
      description: "Sarbanes-Oxley Act",
      status: "Compliant",
      validity: "Annual audit completed",
      scope: "Financial reporting and internal controls",
      color: "from-teal-500 to-cyan-500"
    }
  ];

  const complianceAreas = [
    {
      title: "Data Protection & Privacy",
      icon: Shield,
      description: "Comprehensive data protection measures and privacy controls",
      features: [
        "Data encryption at rest and in transit",
        "Access controls and authentication",
        "Data classification and handling",
        "Privacy impact assessments",
        "Data retention policies"
      ],
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Security Controls",
      icon: Lock,
      description: "Robust security controls and monitoring systems",
      features: [
        "Multi-factor authentication",
        "Intrusion detection systems",
        "Security monitoring and alerting",
        "Vulnerability management",
        "Incident response procedures"
      ],
      color: "from-green-500 to-emerald-500"
    },
    {
      title: "Audit & Monitoring",
      icon: Eye,
      description: "Continuous monitoring and regular audit processes",
      features: [
        "Real-time security monitoring",
        "Regular compliance audits",
        "Performance metrics tracking",
        "Risk assessment frameworks",
        "Compliance reporting"
      ],
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "Business Continuity",
      icon: Rocket,
      description: "Disaster recovery and business continuity planning",
      features: [
        "Backup and recovery systems",
        "Disaster recovery procedures",
        "Business continuity planning",
        "Incident response teams",
        "Regular testing and validation"
      ],
      color: "from-orange-500 to-red-500"
    }
  ];

  const contactInfo = [
    {
      icon: Phone,
      text: '+1 (302) 464-0950',
      href: 'tel:+13024640950'
    },
    {
      icon: Mail,
      text: 'compliance@ziontechgroup.com',
      href: 'mailto:compliance@ziontechgroup.com'
    },
    {
      icon: MapPin,
      text: 'Middletown, DE 19709',
      href: '#'
    }
  ];

  return (
    <div className="min-h-screen bg-slate-900">
      {/* Header */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full flex items-center justify-center mx-auto mb-6">
              <Shield className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Compliance & Security
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              We maintain the highest standards of compliance and security to protect your data and ensure regulatory adherence
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-400">
              <span>ISO 27001 Certified</span>
              <span>•</span>
              <span>SOC 2 Type II Compliant</span>
              <span>•</span>
              <span>GDPR Compliant</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Compliance Frameworks */}
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Compliance Frameworks
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We maintain compliance with major international standards and regulations
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {complianceFrameworks.map((framework, index) => (
              <motion.div
                key={framework.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-slate-800/30 backdrop-blur-sm border border-slate-700/50 rounded-xl p-6 hover:border-green-500/50 transition-all duration-300"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className={`w-12 h-12 bg-gradient-to-r ${framework.color} rounded-xl flex items-center justify-center`}>
                    <CheckCircle className="w-6 h-6 text-white" />
                  </div>
                  <span className={`text-sm px-3 py-1 rounded-full ${
                    framework.status === 'Certified' 
                      ? 'bg-green-500/20 text-green-400' 
                      : 'bg-blue-500/20 text-blue-400'
                  }`}>
                    {framework.status}
                  </span>
                </div>

                <h3 className="text-xl font-semibold text-white mb-2">{framework.name}</h3>
                <p className="text-gray-400 text-sm mb-4">{framework.description}</p>
                
                <div className="space-y-2 mb-4">
                  <div className="flex items-center space-x-2 text-sm">
                    <Calendar className="w-4 h-4 text-gray-400" />
                    <span className="text-gray-300">{framework.validity}</span>
                  </div>
                  <div className="flex items-start space-x-2 text-sm">
                    <Globe className="w-4 h-4 text-gray-400 mt-0.5" />
                    <span className="text-gray-300">{framework.scope}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Compliance Areas */}
      <section className="py-16 px-6 bg-slate-800/30">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Key Compliance Areas
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive coverage across all critical compliance domains
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {complianceAreas.map((area, index) => (
              <motion.div
                key={area.title}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-slate-700/30 backdrop-blur-sm border border-slate-600/50 rounded-xl p-6"
              >
                <div className="flex items-center space-x-4 mb-4">
                  <div className={`w-16 h-16 bg-gradient-to-r ${area.color} rounded-xl flex items-center justify-center`}>
                    <area.icon className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white">{area.title}</h3>
                    <p className="text-gray-400 text-sm">{area.description}</p>
                  </div>
                </div>

                <ul className="space-y-2">
                  {area.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center space-x-2 text-sm">
                      <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-slate-800 to-slate-700 rounded-2xl border border-green-500/20 p-12"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Need Compliance Information?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Get in touch with our compliance team for detailed information about our security measures and compliance status
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <a
                href="tel:+13024640950"
                className="inline-flex items-center space-x-2 bg-gradient-to-r from-green-500 to-emerald-500 text-white px-6 py-3 rounded-lg hover:from-green-600 hover:to-emerald-600 transition-all duration-200 font-medium"
              >
                <Phone className="w-5 h-5" />
                <span>Call Now</span>
              </a>
              <a
                href="mailto:compliance@ziontechgroup.com"
                className="inline-flex items-center space-x-2 bg-slate-700 text-white px-6 py-3 rounded-lg hover:bg-slate-600 transition-all duration-200 font-medium border border-slate-600"
              >
                <Mail className="w-5 h-5" />
                <span>Send Email</span>
              </a>
            </div>

            {/* Contact Information */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-2xl mx-auto">
              {contactInfo.map((contact, index) => (
                <div key={index} className="flex items-center space-x-3 text-gray-300">
                  <contact.icon className="w-5 h-5 text-green-400 flex-shrink-0" />
                  {contact.href !== '#' ? (
                    <a
                      href={contact.href}
                      className="hover:text-green-400 transition-colors"
                    >
                      {contact.text}
                    </a>
                  ) : (
                    <span>{contact.text}</span>
                  )}
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}