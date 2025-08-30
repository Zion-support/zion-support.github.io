import React from 'react';
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
  Smartphone,
  Tablet,
  Laptop,
  ShieldCheck,
  Gauge,
  TrendingUp,
  BarChart3
 } from 'lucide-react';
import { SEO  } from '../components/SEO';

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
      icon: Users,
      color: 'from-orange-500 to-red-600',
      details: 'Healthcare data protection standards',
      scope: 'Protected health information (PHI)',
      lastAudit: 'October 2024',
      nextAudit: 'October 2025',
      benefits[
        'Healthcare industry compliance',
        'Patient data protection',
        'Business associate agreements',
        'Regulatory adherence'
      ]
    }
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
      industry: 'Manufacturing',
      icon: Cpu,
      color: 'from-orange-500 to-red-600',
      regulations[
        'NIST Cybersecurity Framework',
        'ISO 27001/27002',
        'Industry-specific standards',
        'Supply chain security requirements'
      ],
      status: 'Compliant'
    }
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
      phase: 'Testing',
      description: 'Validation and testing of controls',
      icon: ShieldCheck,
      color: 'from-purple-500 to-pink-600',
      activities[
        'Control testing and validation',
        'Internal audit preparation',
        'Remediation of findings',
        'Documentation review'
      ],
      duration: '4-6 weeks',
      deliverables['Test results', 'Remediation plan', 'Audit readiness']
    },
    {
      phase: 'Certification',
      description: 'External audit and certification',
      icon: Award,
      color: 'from-orange-500 to-red-600',
      activities[
        'External audit engagement',
        'Evidence collection and presentation',
        'Audit findings resolution',
        'Certification achievement'
      ],
      duration: '6-8 weeks',
      deliverables['Compliance certificate', 'Audit report', 'Ongoing maintenance plan']
    }
  ];

  const complianceMetrics = [
    {
      metric: 'Compliance Score',
      value: '98.5%',
      description: 'Overall compliance with all applicable regulations',
      icon: BarChart3,
      color: 'from-green-500 to-emerald-600',
      trend: 'up',
      change: '+2.3%'
    },
    {
      metric: 'Audit Success Rate',
      value: '100%',
      description: 'Successful completion of all compliance audits',
      icon: CheckCircle,
      color: 'from-blue-500 to-cyan-600',
      trend: 'stable',
      change: '0%'
    },
    {
      metric: 'Remediation Time',
      value: '< 24h',
      description: 'Average time to address compliance findings',
      icon: Clock,
      color: 'from-purple-500 to-pink-600',
      trend: 'down',
      change: '-15%'
    },
    {
      metric: 'Training Completion',
      value: '99.8%',
      description: 'Employee compliance training completion rate',
      icon: Users,
      color: 'from-orange-500 to-red-600',
      trend: 'up',
      change: '+0.5%'
    }
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
      name: 'Audit Management System',
      description: 'Streamlined audit planning and execution',
      icon: ShieldCheck,
      color: 'from-orange-500 to-red-600',
      features[
        'Audit planning and scheduling',
        'Evidence collection',
        'Finding management',
        'Remediation tracking'
      ]
    }
  ];

  return (
    <>
      <SEO 
        title="Compliance - Zion Tech Group"
        description="Zion Tech Group maintains comprehensive compliance with international standards including ISO 27001, SOC 2 Type II, GDPR, and HIPAA. Learn about our compliance framework and certifications."
        canonical="/compliance"
      />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        {/* Hero Section */}
        <section className="relative overflow-hidden py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full mb-6">
                <Shield className="h-10 w-10 text-white" />
              </div>
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                Compliance & Certifications
              </h1>
              <p className="text-xl text-slate-300 mb-8 max-w-3xl mx-auto">
                Zion Tech Group maintains comprehensive compliance with international standards and regulations, ensuring your data and systems meet the highest security and privacy requirements.
              </p>
              
              {/* Compliance Stats */}
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
                <div className="text-center">
                  <div className="text-3xl font-bold text-cyan-400">4+</div>
                  <div className="text-slate-400">Major Certifications</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-cyan-400">98.5%</div>
                  <div className="text-slate-400">Compliance Score</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-cyan-400">100%</div>
                  <div className="text-slate-400">Audit Success Rate</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-cyan-400">&lt; 24h</div>
                  <div className="text-slate-400">Remediation Time</div>
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
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
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

        {/* Industry Compliance */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-white mb-4">Industry-Specific Compliance</h2>
              <p className="text-xl text-slate-300">Meeting the unique requirements of different industries</p>
            </div>
            
            <div className="grid grid-cols-1 lg: grid-cols-2 gap-8">
              {industryCompliance.map((industry, index)  => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-slate-800/50 border border-slate-700/50 rounded-2xl p-8"
                >
                  <div className="flex items-center mb-6">
                    <div className={`w-16 h-16 bg-gradient-to-br ${industry.color} rounded-2xl flex items-center justify-center mr-4`}>
                      <industry.icon className="h-8 w-8 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-white">{industry.industry}</h3>
                      <div className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-semibold ${
                        industry.status === 'Compliant' ? 'bg-green-500/20 text-green-400' : 'bg-yellow-500/20 text-yellow-400'
                      }`}>
                        {industry.status}
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-3">
                    <h4 className="font-semibold text-cyan-400">Applicable Regulations:</h4>
                    <ul className="space-y-2">
                      {industry.regulations.map((regulation, idx) => (
                        <li key={idx} className="flex items-start text-sm text-slate-300">
                          <CheckCircle className="h-4 w-4 text-cyan-400 mr-2 mt-0.5 flex-shrink-0" />
                          {regulation}
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Compliance Process */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-white mb-4">Compliance Implementation Process</h2>
              <p className="text-xl text-slate-300">Systematic approach to achieving and maintaining compliance</p>
            </div>
            
            <div className="grid grid-cols-1 md: grid-cols-2 lg:grid-cols-4 gap-6">
              {complianceProcesses.map((phase, index)  => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-6"
                >
                  <div className={`w-16 h-16 bg-gradient-to-br ${phase.color} rounded-2xl flex items-center justify-center mx-auto mb-4`}>
                    <phase.icon className="h-8 w-8 text-white" />
                  </div>
                  
                  <h3 className="text-lg font-semibold text-white mb-2 text-center">{phase.phase}</h3>
                  <p className="text-slate-300 text-sm mb-4 text-center">{phase.description}</p>
                  
                  <div className="space-y-3 text-sm">
                    <div className="text-cyan-400 font-semibold">
                      Duration: {phase.duration}
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-white mb-2">Activities:</h4>
                      <ul className="space-y-1">
                        {phase.activities.map((activity, idx) => (
                          <li key={idx} className="text-slate-300">• {activity}</li>
                        ))}
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-white mb-2">Deliverables:</h4>
                      <ul className="space-y-1">
                        {phase.deliverables.map((deliverable, idx) => (
                          <li key={idx} className="text-slate-300">• {deliverable}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Compliance Metrics */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-white mb-4">Compliance Performance Metrics</h2>
              <p className="text-xl text-slate-300">Track our compliance performance and continuous improvement</p>
            </div>
            
            <div className="grid grid-cols-1 md: grid-cols-2 lg:grid-cols-4 gap-6">
              {complianceMetrics.map((metric, index)  => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-6 text-center"
                >
                  <div className={`w-16 h-16 bg-gradient-to-br ${metric.color} rounded-2xl flex items-center justify-center mx-auto mb-4`}>
                    <metric.icon className="h-8 w-8 text-white" />
                  </div>
                  
                  <div className="text-3xl font-bold text-white mb-2">{metric.value}</div>
                  <h3 className="text-lg font-semibold text-white mb-2">{metric.metric}</h3>
                  <p className="text-slate-300 text-sm mb-3">{metric.description}</p>
                  
                  <div className={`inline-flex items-center text-sm font-semibold ${
                    metric.trend === 'up' ? 'text-green-400' : 
                    metric.trend === 'down' ? 'text-red-400' : 'text-blue-400'
                  }`}>
                    <TrendingUp className={`h-4 w-4 mr-1 ${metric.trend === 'down' ? 'rotate-180' : ''}`} />
                    {metric.change}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Compliance Tools */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-white mb-4">Compliance Management Tools</h2>
              <p className="text-xl text-slate-300">Advanced tools and platforms for effective compliance management</p>
            </div>
            
            <div className="grid grid-cols-1 lg: grid-cols-2 gap-8">
              {complianceTools.map((tool, index)  => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-slate-800/50 border border-slate-700/50 rounded-2xl p-8"
                >
                  <div className="flex items-center mb-6">
                    <div className={`w-16 h-16 bg-gradient-to-br ${tool.color} rounded-2xl flex items-center justify-center mr-4`}>
                      <tool.icon className="h-8 w-8 text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-white">{tool.name}</h3>
                      <p className="text-slate-300">{tool.description}</p>
                    </div>
                  </div>
                  
                  <div className="space-y-3">
                    <h4 className="font-semibold text-cyan-400 mb-2">Key Features:</h4>
                    <ul className="space-y-2">
                      {tool.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center text-sm text-slate-300">
                          <CheckCircle className="h-4 w-4 text-cyan-400 mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Compliance Contact */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-gradient-to-r from-cyan-600/20 to-blue-600/20 border border-cyan-500/30 rounded-2xl p-12">
              <h2 className="text-3xl font-bold text-white mb-6">
                Compliance Questions or Support?
              </h2>
              <p className="text-lg text-slate-300 mb-8">
                Our compliance team is here to help you understand our compliance posture and address  questions you may have.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="flex items-center justify-center space-x-3 text-slate-300">
                  <Phone className="h-5 w-5 text-cyan-400" />
                  <span>+1 302 464 0950</span>
                </div>
                <div className="flex items-center justify-center space-x-3 text-slate-300">
                  <Mail className="h-5 w-5 text-cyan-400" />
                  <span>compliance@ziontechgroup.com</span>
                </div>
                <div className="flex items-center justify-center space-x-3 text-slate-300">
                  <Globe className="h-5 w-5 text-cyan-400" />
                  <span>Online Form</span>
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
            </div>
          </div>
        </section>
      </div>
    </>
  )}