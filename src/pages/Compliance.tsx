import React from 'react.ts';
import { motion  } from 'framer-motion.ts';
import { Shield, 
  CheckCircle, 
  Award, 
  FileText, 
  Globe, 
  Building, 
  Users, 
  Lock, 
  Eye, 
  Database,
  FileText,
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
  Clock,
  AlertTriangle,
  Info
} from 'lucide-react';
import { SEO } from "../components/SEO";

export default function Compliance(...args[]):  {
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
      benefits[
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
      benefits[
        'Independent third-party validation',
        'Trust services criteria compliance',
        'Customer confidence and trust',
        'Competitive advantage'
      ]
    },
    {
      name: 'GDPR',
      description: 'General Data Protection Regulation',
      status: 'Compliant',
      icon: Shield,
      color: 'from-purple-500 to-pink-600',
      details: 'EU data protection and privacy regulation',
      scope: 'Personal data processing and protection',
      lastAudit: 'Ongoing',
      nextAudit: 'Continuous monitoring',
      benefits[
        'EU market access',
        'Enhanced data protection',
        'Customer privacy rights',
        'Regulatory compliance'
      ]
    },
    {
      name: 'HIPAA',
      description: 'Health Insurance Portability and Accountability Act',
      status: 'Compliant',
    }
      validity: 'Ongoing compliance',
      scope: 'Healthcare data protection',
      benefits: [;
        'Healthcare industry access',;
        'Patient data protection',;
        'Regulatory compliance',;
        'Trust in healthcare sector';
      ];
    };
  ];

  const industryCompliance = [
    {
      industry: 'Financial Services',
      icon: Building,
      color: 'from-blue-500 to-cyan-600',
      regulations[
        'PCI DSS (Payment Card Industry Data Security Standard)',
        'SOX (Sarbanes-Oxley Act)',
        'GLBA (Gramm-Leach-Bliley Act)',
        'FFIEC Guidelines'
      ],
      status: 'Compliant'
    },
    {
      industry: 'Healthcare',
      icon: Heart,
      color: 'from-green-500 to-emerald-600',
      regulations[
        'HIPAA (Health Insurance Portability and Accountability Act)',
        'HITECH Act',
        'FDA Cybersecurity Guidelines',
        'State-specific healthcare regulations'
      ],
      status: 'Compliant'
    },
    {
      industry: 'Government',
      icon: Shield,
      color: 'from-purple-500 to-pink-600',
      regulations[
        'FedRAMP (Federal Risk and Authorization Management Program)',
        'FISMA (Federal Information Security Management Act)',
        'CJIS (Criminal Justice Information Services)',
        'State and local government requirements'
      ],
      status: 'In Progress'
    },
    {
      title: 'Application Security',
      description: 'Secure software development and application security',
      icon: Code,
      color: 'from-orange-500 to-red-500',
      standards: [;
        'OWASP Top 10',;
        'Secure SDLC',;
        'Code Review Standards',;
        'Vulnerability Management';
      ];
    };
  ];

  const complianceProcesses = [
    {
      phase: 'Assessment',
      description: 'Comprehensive compliance gap analysis',
      icon: Eye,
      color: 'from-blue-500 to-cyan-600',
      activities[
        'Regulatory requirement analysis',
        'Current state assessment',
        'Gap identification',
        'Risk assessment'
      ],
      duration: '2-4 weeks',
      deliverables['Gap analysis report', 'Risk assessment', 'Compliance roadmap']
    },
    {
      phase: 'Implementation',
      description: 'Systematic implementation of controls',
      icon: Zap,
      color: 'from-green-500 to-emerald-600',
      activities[
        'Control design and implementation',
        'Policy and procedure development',
        'Training and awareness',
        'Technology deployment'
      ],
      duration: '8-16 weeks',
      deliverables['Implemented controls', 'Policies and procedures', 'Training materials']
    },
    {
      title: 'Incident Response',
      description: 'Compliance-focused incident response procedures',
      icon: AlertTriangle,
      color: 'from-orange-500 to-red-500',
      frequency: 'As needed',
      process: [;
        'Incident detection and reporting',;
        'Compliance impact assessment',;
        'Regulatory notification procedures',;
        'Post-incident compliance review';
      ];
    };
  ];

  const complianceTools = [
    {
      name: 'Compliance Management Platform',
      description: 'Centralized compliance tracking and management',
      icon: Monitor,
      color: 'from-blue-500 to-cyan-600',
      features[
        'Automated compliance monitoring',
        'Real-time dashboards',
        'Automated reporting',
        'Integration with GRC tools'
      ]
    },
    {
      name: 'Policy Management System',
      description: 'Automated policy creation, distribution, and tracking',
      icon: FileText,
      color: 'from-green-500 to-emerald-600',
      features[
        'Policy lifecycle management',
        'Automated distribution',
        'Acknowledgment tracking',
        'Version control'
      ]
    },
    {
      name: 'Risk Assessment Tools',
      description: 'Comprehensive risk assessment and management',
      icon: AlertTriangle,
      color: 'from-purple-500 to-pink-600',
      features[
        'Risk identification and assessment',
        'Mitigation planning',
        'Risk monitoring and reporting',
        'Integration with compliance frameworks'
      ]
    },
    {
      title: 'Training Portal',
      description: 'Compliance training and certification portal',;
      icon: Users,;
      href: '/compliance/training',;
      color: 'from-orange-500 to-red-500';
    };
  ];

  const contactInfo = [
    {
      title: 'Compliance Team',
      description: 'Contact our compliance team for compliance-related inquiries',
      email: 'compliance@ziontechgroup.com',
      phone: '+1 302 464 0950',
      responseTime: '24-48 hours'
    },
    {;
      title: 'Audit Requests',;
      description: 'Request compliance audits or assessments',;
      email: 'audit@ziontechgroup.com',;
      phone: '+1 302 464 0950',;
      responseTime: '1-2 business days';
    };
  ];

  return (
    <div className = "min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <SEO 
        title="Compliance - Zion Tech Group"
        description="Zion Tech Group maintains comprehensive compliance with international standards including ISO 27001, SOC 2 Type II, GDPR, and HIPAA. Learn about our compliance framework and certifications."
        canonical="/compliance"
      />
      
      {/* Header */}
      <div className="bg-slate-800/50 border-b border-slate-700">
        <div className="container mx-auto px-4 py-16">
          <motion.div
            initial = {
  { opacity: 0,
  y: 20 






}}
            animate = {
  { opacity: 1,
  y: 0 






}}
            transition={{ duration: 0.6 }}
            className="text-center"

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
          initial = {
  { opacity: 0,
  y: 20 






}}
          animate = {
  { opacity: 1,
  y: 0 






}}
          transition = {
  { duration: 0.6,
  delay: 0.2 






}}
          className="bg-gradient-to-r from-green-600/20 to-emerald-600/20 border border-green-500/30 rounded-2xl p-8 text-center"

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
            initial = {
  { opacity: 0,
  y: 20 






}}
            animate = {
  { opacity: 1,
  y: 0 






}}
            transition = {
  { duration: 0.6,
  delay: 0.3 






}}
            className="text-3xl font-bold text-white text-center mb-12"

            Compliance Frameworks & Certifications
          </motion.h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {complianceFrameworks.map((framework, index) => (
              <motion.div
                key={framework.title}
                initial = {
  { opacity: 0,
  y: 20 






}}
                animate = {
  { opacity: 1,
  y: 0 






}}
                transition = {
  { duration: 0.6,
  delay: 0.4 + index * 0.1 






}}
                className="bg-slate-800/30 border border-slate-700 rounded-xl p-6"

                <div className="flex items-center space-x-4 mb-6">
                  <div className={`w-16 h-16 bg-gradient-to-br ${framework.color} rounded-xl flex items-center justify-center`}>
                    <framework.icon className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white">{framework.title}</h3>
                    <p className="text-slate-400 text-sm">{framework.description}</p>
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-cyan-400">98.5%</div>
                  <div className="text-slate-400">Compliance Score</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-cyan-400">100%</div>
                  <div className="text-slate-400">Audit Success Rate</div>
                </div>;
                <div className="text-center">;
                  <div className="text-3xl font-bold text-cyan-400">&lt; 24h</div>
                  <div className = "text-slate-400">Remediation Time</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Compliance Commitment */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-gradient-to-r from-cyan-600/20 to-blue-600/20 border border-cyan-500/30 rounded-2xl p-12">
              <h2 className="text-3xl font-bold text-white mb-6">
                Our Compliance Commitment
              </h2>
              <p className="text-lg text-slate-300 mb-6">
                At Zion Tech Group, compliance is not just about meeting regulatory requirements—it's about building trust, ensuring security, and demonstrating our commitment to protecting your data and systems.
              </p>
              <p className="text-lg text-slate-300">
                We maintain a proactive approach to compliance, continuously monitoring regulatory changes and implementing best practices to ensure we meet and exceed all applicable standards.
              </p>
            </div>
          </div>
        </section>

        {/* Compliance Frameworks */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-white mb-4">Compliance Frameworks & Certifications</h2>
              <p className="text-xl text-slate-300">International standards and industry-specific compliance</p>
            </div>
            
            <div className="grid grid-cols-1 lg: grid-cols-2 gap-8">
              {complianceFrameworks.map((framework, index)  => (
                <motion.div
                  key={index}
                  initial = {
  { opacity: 0,
  y: 20 

}}
                  whileInView = {
  { opacity: 1,
  y: 0 

}}
                  transition = {
  { duration: 0.6,
  delay: index * 0.1 

}}
                  className="bg-slate-800/50 border border-slate-700/50 rounded-2xl p-8"
                >
                  <div className="flex items-center mb-6">
                    <div className={`w-16 h-16 bg-gradient-to-br ${framework.color} rounded-2xl flex items-center justify-center mr-4`}>
                      <framework.icon className="h-8 w-8 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-white">{framework.name}</h3>
                      <p className="text-slate-300">{framework.description}</p>
                    </div>
                    <div className="text-right">
                      <div className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-semibold ${
                        framework.status === 'Certified' ? 'bg-green-500/20 text-green-400' : 'bg-blue-500/20 text-blue-400'
                      }`}>
                        <CheckCircle className="h-4 w-4 mr-1" />
                        {framework.status}
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <p className="text-slate-300 text-sm">{framework.details}</p>
                    
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div>
                        <span className="font-semibold text-cyan-400">Scope:</span>
                        <p className="text-slate-300">{framework.scope}</p>
                      </div>
                      <div>
                        <span className="font-semibold text-cyan-400">Last Audit:</span>
                        <p className="text-slate-300">{framework.lastAudit}</p>
                      </div>
                      <div>
                        <span className="font-semibold text-cyan-400">Next Audit:</span>
                        <p className="text-slate-300">{framework.nextAudit}</p>
                      </div>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-cyan-400 mb-2">Key Benefits:</h4>
                      <ul className="space-y-1">
                        {framework.benefits.map((benefit, idx) => (
                          <li key={idx} className="flex items-center text-sm text-slate-300">
                            <CheckCircle className="h-3 w-3 text-cyan-400 mr-2 flex-shrink-0" />
                            {benefit}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

      {/* Industry Standards */}
      <div className="container mx-auto px-4 py-16">
        <motion.h2
          initial = {
  { opacity: 0,
  y: 20 






}}
          animate = {
  { opacity: 1,
  y: 0 






}}
          transition = {
  { duration: 0.6,
  delay: 0.5 






}}
          className="text-3xl font-bold text-white text-center mb-12"

          Industry Standards & Best Practices
        </motion.h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {industryStandards.map((standard, index) => (
            <motion.div
              key={standard.title}
              initial = {
  { opacity: 0,
  y: 20 






}}
              animate = {
  { opacity: 1,
  y: 0 






}}
              transition = {
  { duration: 0.6,
  delay: 0.6 + index * 0.1 






}}
              className="bg-slate-800/30 border border-slate-700 rounded-xl p-6"

              <div className="text-center mb-6">
                <div className={`w-16 h-16 bg-gradient-to-br ${standard.color} rounded-xl flex items-center justify-center mx-auto mb-4`}>
                  <standard.icon className="w-8 h-8 text-white" />
                </div>
              </div>
              
              <div className="bg-slate-700/50 rounded-lg p-6 text-left">
                <h3 className="text-lg font-semibold text-white mb-3">Compliance Documentation Request</h3>
                <p className="text-slate-300 text-sm mb-4">
                  Need specific compliance documentation or certificates? Contact us for:
                </p>
                <ul className="text-slate-300 text-sm space-y-1">
                  <li>• Compliance certificates and reports</li>
                  <li>• Audit documentation and evidence</li>
                  <li>• Compliance questionnaires and assessments</li>
                  <li>• Custom compliance reports</li>
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Compliance Processes */}
      <div className="bg-slate-800/20 py-16">
        <div className="container mx-auto px-4">
          <motion.h2
            initial = {
  { opacity: 0,
  y: 20 






}}
            animate = {
  { opacity: 1,
  y: 0 






}}
            transition = {
  { duration: 0.6,
  delay: 0.7 






}}
            className="text-3xl font-bold text-white text-center mb-12"

            Compliance Processes & Procedures
          </motion.h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {complianceProcesses.map((process, index) => (
              <motion.div
                key={process.title}
                initial = {
  { opacity: 0,
  y: 20 






}}
                animate = {
  { opacity: 1,
  y: 0 






}}
                transition = {
  { duration: 0.6,
  delay: 0.8 + index * 0.1 






}}
                className="bg-slate-800/30 border border-slate-700 rounded-xl p-6"

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
        </section>
      </div>

      {/* Compliance Tools */}
      <div className="container mx-auto px-4 py-16">
        <motion.h2
          initial = {
  { opacity: 0,
  y: 20 






}}
          animate = {
  { opacity: 1,
  y: 0 






}}
          transition = {
  { duration: 0.6,
  delay: 0.9 






}}
          className="text-3xl font-bold text-white text-center mb-12"

          Compliance Tools & Resources
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {complianceTools.map((tool, index) => (
            <motion.div
              key={tool.title}
              initial = {
  { opacity: 0,
  y: 20 






}}
              animate = {
  { opacity: 1,
  y: 0 






}}
              transition = {
  { duration: 0.6,
  delay: 1.0 + index * 0.1 






}}
              className="group"

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
            initial = {
  { opacity: 0,
  y: 20 






}}
            animate = {
  { opacity: 1,
  y: 0 






}}
            transition = {
  { duration: 0.6,
  delay: 1.1 






}}
            className="text-3xl font-bold text-white text-center mb-12"

            Compliance Support & Inquiries
          </motion.h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {contactInfo.map((contact, index) => (
              <motion.div
                key={contact.title}
                initial = {
  { opacity: 0,
  x: index % 2 === 0 ? -20 : 20 






}}
                animate = {
  { opacity: 1,
  x: 0 






}}
                transition = {
  { duration: 0.6,
  delay: 1.2 + index * 0.1 






}}
                className="bg-slate-800/30 border border-slate-700 rounded-xl p-6"

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
          initial = {
  { opacity: 0,
  y: 20 






}}
          animate = {
  { opacity: 1,
  y: 0 






}}
          transition = {
  { duration: 0.6,
  delay: 1.3 






}}
          className="bg-gradient-to-r from-blue-600/20 to-cyan-600/20 border border-blue-500/30 rounded-2xl p-8 text-center"

          <h2 className="text-2xl font-bold text-white mb-4">
            Continuous Compliance Excellence
          </h2>
          <p className="text-slate-300 max-w-4xl mx-auto">
            Compliance is an ongoing journey, not a destination. We continuously monitor regulatory changes, ;
            update our processes, and enhance our compliance posture to ensure we always meet and exceed ;
            industry standards and regulatory requirements.;
          </p>;
        </motion.div>;
      </div>;
    </div>;
  );
}
