'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { CheckCircle, ArrowRight, Phone, Mail, MapPin, Zap, Shield, Brain, Globe } from 'lucide-react';

<<<<<<< HEAD
const PagePage: React.FC = () => {
  const features = [
    {
      icon: Brain,
      title: 'AI-Powered Solutions',
      description: 'Advanced AI technology to transform your business operations and improve efficiency'
    },
    {
      icon: Zap,
      title: 'High Performance',
      description: 'Lightning-fast processing and real-time analytics for optimal results'
    },
    {
      icon: Shield,
      title: 'Enterprise Security',
      description: 'Bank-level security with encryption and compliance standards'
    },
    {
      icon: Globe,
      title: 'Global Reach',
      description: 'Worldwide deployment and support for international businesses'
    }
  ];

  const benefits = [
    'Advanced AI technology integration',
    'Real-time processing and analytics',
    'Enterprise-grade security and compliance',
    'Scalable and flexible solutions',
    '24/7 technical support',
    'Easy integration with existing systems',
    'Cost-effective pricing plans',
    'Proven track record of success'
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Page | Zion Tech Group</title>
        <meta name="description" content="Professional Page services by Zion Tech Group. Advanced AI and IT solutions for your business." />
        <meta name="keywords" content="page, AI solutions, IT services, Zion Tech Group, page" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                Page
              </span>
              <br />
              <span className="text-white">Solutions</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Transform your business with our advanced page solutions. 
              Powered by cutting-edge AI technology and industry expertise.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-purple-500 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-purple-600 hover:to-blue-700 transition-all duration-300 flex items-center">
                Get Started
                <ArrowRight className="ml-2 h-5 w-5" />
              </button>
              <button className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300">
                Learn More
              </button>
=======
const $1: React.FC = () => {
  const complianceFrameworks = [,
    {,
      name: 'SOC 2 Type II',
      description: 'Audited controls for security, availability, processing integrity, confidentiality, and privacy',
      status: 'Certified'
      icon: Award,
      details: [,
        'Annual third-party audits by independent auditors',
        'Comprehensive control testing and validation',
        'Management attestation and reporting',
        'Continuous monitoring and improvement'
      ]
    },
    {
      name: 'ISO 27001'
      description: 'International standard for information security management systems'
      status: 'Certified'
      icon: Shield,
      details: [,
        'Information security management system (ISMS)',
        'Risk assessment and treatment procedures',
        'Security controls and implementation guidelines',
        'Regular audits and continuous improvement'
      ]
    },
    {
      name: 'GDPR'
      description: 'General Data Protection Regulation compliance for EU data protection'
      status: 'Compliant'
      icon: Lock,
      details: [,
        'Data protection by design and by default',
        'Privacy impact assessments (PIAs)',
        'Data subject rights management',
        'Data breach notification procedures'
      ]
    },
    {
      name: 'CCPA'
      description: 'California Consumer Privacy Act compliance for California residents'
      status: 'Compliant'
      icon: Eye,
      details: [,
        'Consumer privacy rights management',
        'Data collection and processing transparency',
        'Opt-out mechanisms for data sales',
        'Privacy policy and notice requirements'
      ]
    },
    {
      name: 'HIPAA'
      description: 'Health Insurance Portability and Accountability Act for healthcare data'
      status: 'Compliant'
      icon: Database,
      details: [,
        'Protected health information (PHI) safeguards',
        'Administrative, physical, and technical safeguards',
        'Business associate agreements (BAAs)',
        'Workforce training and access controls'
      ]
    },
    {
      name: 'PCI DSS'
      description: 'Payment Card Industry Data Security Standard for payment processing'
      status: 'Compliant'
      icon: UserCheck,
      details: [,
        'Secure payment card data handling',
        'Network security and monitoring',
        'Regular security testing and vulnerability management',
        'Information security policy and procedures'
      ]
    }
  ];

  const complianceAreas = [
    {
      title: 'Data Protection'
      icon: Shield,
      description: 'Comprehensive data protection measures and privacy controls',
      measures: [,
        'Data encryption at rest and in transit',
        'Data classification and handling procedures',
        'Privacy by design principles',
        'Data retention and disposal policies'
      ]
    },
    {
      title: 'Access Controls'
      icon: Lock,
      description: 'Robust access management and authentication systems',
      measures: [,
        'Multi-factor authentication (MFA)',
        'Role-based access control (RBAC)',
        'Privileged access management (PAM)',
        'Regular access reviews and audits'
      ]
    },
    {
      title: 'Security Monitoring'
      icon: Eye,
      description: 'Continuous security monitoring and incident response',
      measures: [,
        'Security information and event management (SIEM)',
        'Real-time threat detection and response',
        'Vulnerability scanning and management',
        'Security incident response procedures'
      ]
    },
    {
      title: 'Audit & Reporting'
      icon: FileText,
      description: 'Regular audits and compliance reporting',
      measures: [,
        'Internal and external security audits',
        'Compliance monitoring and reporting',
        'Risk assessments and management',
        'Continuous improvement processes'
      ]
    }
  ];

  const certifications = [
    {
      name: 'SOC 2 Type II',
      issuer: 'AICPA',
      validUntil: '2025-12-31',
      scope: 'Security, Availability, Confidentiality'
    },
    {
      name: 'ISO 27001:2013',
      issuer: 'ISO',
      validUntil: '2025-06-30',
      scope: 'Information Security Management'},
    {
      name: 'GDPR Compliance',
      issuer: 'Internal Assessment',
      validUntil: 'Ongoing',
      scope: 'Data Protection and Privacy'},
    {
      name: 'CCPA Compliance',
      issuer: 'Internal Assessment',
      validUntil: 'Ongoing',
      scope: 'California Privacy Rights'}
  ];

  return(<div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
  return (</div>
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900"></div>
      <Navigation />

      <main className="container mx-auto px-4 py-16 pt-24">{/* Header */}</main>
        <section className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 neon-text">Compliance & Certifications<p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">We maintain the highest standards of compliance and security to protect your data and ensure regulatory adherence across all industries.</p>
      <main className="container mx-auto px-4 py-16 pt-24">
        {/* Header */}
        <section className="text-center mb-16">
          <h1 className="text-4xl md: text-5xl lg:text-6xl font-bold text-white mb-6 neon-text">
            Compliance & Certifications;</h1>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            We maintain the highest standards of compliance and security to protect your data and ensure regulatory adherence across all industries.
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 neon-text">Compliance & Certifications</h1><p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">We maintain the highest standards of compliance and security to protect your data and ensure regulatory adherence across all industries.</p>
          </p>
          <div className="flex flex-wrap justify-center gap-4"></section>
            <div className="flex items-center space-x-2 bg-green-500/20 px-4 py-2 rounded-lg"></div>
              <Award className="w-5 h-5 text-green-400" />
              <span className="text-white font-medium">SOC 2 Type II</span>
            </div>
            <div className="flex items-center space-x-2 bg-blue-500/20 px-4 py-2 rounded-lg"></div>
              <Shield className="w-5 h-5 text-blue-400" />
              <span className="text-white font-medium">ISO 27001</span>
            </div>
            <div className="flex items-center space-x-2 bg-purple-500/20 px-4 py-2 rounded-lg"></div>
              <CheckCircle className="w-5 h-5 text-purple-400" />
              <span className="text-white font-medium">GDPR Compliant</span>
>>>>>>> cursor/fix-errors-and-merge-to-main-e3dc
            </div>
          </div>
        </div>
      </section>

<<<<<<< HEAD
      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Why Choose Our Page?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our page solutions deliver unmatched performance, security, and scalability.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
                <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-600 rounded-lg mb-4">
                  <feature.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
=======
        {/* Compliance Frameworks */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8 text-center neon-text">Compliance Frameworks<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">{complianceFrameworks.map((framework, index) => (</div>
          </div>,
        </section>,
,
        {/* Compliance Frameworks */})
        <section className="mb-16">)
          <h2 className="text-3xl font-bold text-white mb-8 text-center neon-text">Compliance Frameworks</h2>)
          <div className="grid grid-cols-1 md: grid-cols-2 lg:grid-cols-3 gap-8">),
            {complianceFrameworks.map((framework, index) => (</div>
              <div key={index} className="cyber-card p-6"></div>
                <div className="flex items-center justify-between mb-4"></div>
          <h2 className="text-3xl font-bold text-white mb-8 text-center neon-text">Compliance Frameworks</h2><div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">{complianceFrameworks.map((framework, index) => (</section>
              <div key={index} className="cyber-card p-6"></div>
                <div className="flex items-center justify-between mb-4"></div>
                  <framework.icon className="w-8 h-8 text-cyan-400" />
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-green-500/20 text-green-400">{framework.status}</span><h3 className="text-xl font-bold text-white mb-2">{framework.name}</h3>
                <p className="text-gray-300 mb-4 text-sm">{framework.description}</p><ul className="space-y-2">{framework.details.map((detail, detailIndex) => (</ul>
                    <li key={detailIndex} className="flex items-start text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2 mt-0.5 flex-shrink-0" >{detail}</CheckCircle>
                    </CheckCircle>
                  ))}
                </ul>
>>>>>>> cursor/fix-errors-and-merge-to-main-e3dc
              </div>
            ))}
          </div>
        </div>
      </section>

<<<<<<< HEAD
      {/* Benefits Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Key Benefits
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Experience the power of our page solutions for your business.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-start space-x-3">
                <CheckCircle className="h-6 w-6 text-purple-400 mt-1 flex-shrink-0" />
                <p className="text-gray-300 text-lg">{benefit}</p>
=======
        {/* Compliance Areas */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8 text-center neon-text">Compliance Areas<div className="grid grid-cols-1 md:grid-cols-2 gap-8">{complianceAreas.map((area, index) => (</div>
          <h2 className="text-3xl font-bold text-white mb-8 text-center neon-text">Compliance Areas</h2>
          <div className="grid grid-cols-1 md: grid-cols-2 gap-8">,
            {complianceAreas.map((area, index) => (</div>
              <div key={index} className="cyber-card p-6"></div>
                <div className="flex items-center mb-4"></div>
          <h2 className="text-3xl font-bold text-white mb-8 text-center neon-text">Compliance Areas</h2><div className="grid grid-cols-1 md:grid-cols-2 gap-8">{complianceAreas.map((area, index) => (</section>
              <div key={index} className="cyber-card p-6"></div>
                <div className="flex items-center mb-4"></div>
                  <area.icon className="w-8 h-8 text-cyan-400 mr-3" />
                  <h3 className="text-xl font-bold text-white">{area.title}</h3><p className="text-gray-300 mb-4">{area.description}</p><ul className="space-y-2">{area.measures.map((measure, measureIndex) => (</ul>
                    <li key={measureIndex} className="flex items-start text-sm text-gray-300">
                      <span className="w-1.5 h-1.5 bg-cyan-400 rounded-full mt-2 mr-2 flex-shrink-0">{measure}</span>
                    </span>
                  ))}
                </ul>
>>>>>>> cursor/fix-errors-and-merge-to-main-e3dc
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-8 md:p-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-purple-100 mb-8">
              Contact our experts to discuss your page needs and get a customized solution.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 flex items-center justify-center">
                <Phone className="mr-2 h-5 w-5" />
                Call Now
              </button>
              <button className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-all duration-300 flex items-center justify-center">
                <Mail className="mr-2 h-5 w-5" />
                Email Us
              </button>
            </div>
          </div>
<<<<<<< HEAD
        </div>
      </section>
    </div>
  );
=======
        </section>

        {/* Compliance Process */}
        <section className="mb-16">
          <div className="cyber-card p-8"></section>
            <h2 className="text-2xl font-bold text-white mb-6 neon-text">Our Compliance Process</h2>
            <div className="grid grid-cols-1 md: grid-cols-2 gap-8"></div>
              <div></div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8"></div>
              <div></div>
                <h3 className="text-xl font-semibold text-cyan-400 mb-4">Continuous Monitoring</h3>
                <ul className="space-y-2 text-gray-300">
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Real-time compliance monitoring and alerting</span>
                  </li>
                  <li className="flex items-start"></l>
                    <CheckCircle className="w-5 h-5 text-green-400 mr-2 mt-0.5 flex-shrink-0" /></CheckCircl>
                    <<<<span>Automated</span></<<span>compliance</span> checks and reporting</span>
                  </li>
                  <li className="flex items-start"></l>
                    <CheckCircle className="w-5 h-5 text-green-400 mr-2 mt-0.5 flex-shrink-0" /></CheckCircl>
                    <<<<span>Regular</span></<<span>risk</span> assessments and gap analysis</span>
                  </li>
                  <li className="flex items-start"></l>
                    <CheckCircle className="w-5 h-5 text-green-400 mr-2 mt-0.5 flex-shrink-0" /></CheckCircl>
                    <<<<span>Ongoing</span></<<span>training</span> and awareness programs</span>
                  </li>
                </ul>
              </div>
              <div></div>
                <h3 className="text-xl font-semibold text-cyan-400 mb-4">Audit & Assessment</h3>
                <ul className="space-y-2 text-gray-300">
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Annual third-party security audits</span>
                  </li>
                  <li className="flex items-start"></l>
                    <CheckCircle className="w-5 h-5 text-green-400 mr-2 mt-0.5 flex-shrink-0" /></CheckCircl>
                    <<<<span>Penetration</span></<<span>testing</span> and vulnerability assessments</span>
                  </li>
                  <li className="flex items-start"></l>
                    <CheckCircle className="w-5 h-5 text-green-400 mr-2 mt-0.5 flex-shrink-0" /></CheckCircl>
                    <<<<span>Compliance</span></<<span>gap</span> analysis and remediation</span>
                  </li>
                  <li className="flex items-start"></l>
                    <CheckCircle className="w-5 h-5 text-green-400 mr-2 mt-0.5 flex-shrink-0" /></CheckCircl>
                    <<<<span>Management</span></<<span>review</span> and attestation</span>
                  </li>
                </ul>
              </div>,
            </div>,
          </div>,
        </section>,
,
        {/* Industry-Specific Compliance */}
        <section className="mb-16">
          <div className="cyber-card p-8"></section>
            <h2 className="text-2xl font-bold text-white mb-6 neon-text">Industry-Specific Compliance</h2><p className="text-gray-300 mb-8">We understand that different industries have unique compliance requirements. Our solutions are designed to meet the specific needs of various sectors.</p>
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"></div>
              <div className="bg-slate-800/50 rounded-lg p-6"></div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"></div>
              <div className="bg-slate-800/50 rounded-lg p-6"></div>
                <h3 className="text-lg font-semibold text-cyan-400 mb-3">Healthcare (HIPAA)</h3>
                <ul className="space-y-2 text-sm text-gray-300">
                  <li>• Protected Health Information (PHI) safeguards<li>• Administrative, physical, and technical safeguards</li>
                  <li>• Business Associate Agreements (BAAs)<li>• Workforce training and access controls</li>
            <div className="grid grid-cols-1 md: grid-cols-2 lg:grid-cols-3 gap-6">,</div>
              <div className="bg-slate-800/50 rounded-lg p-6">,</div>
                <h3 className="text-lg font-semibold text-cyan-400 mb-3">Healthcare (HIPAA)</h3>,
                <ul className="space-y-2 text-sm text-gray-300">,
                  <li>• Protected Health Information (PHI) safeguards</li>,
                  <li>• Administrative, physical, and technical safeguards</li>
                  <li>• Business Associate Agreements (BAAs)</li>
                  <li>• Workforce training and access controls</li>
                </ul>
              </div>
              <div className="bg-slate-800/50 rounded-lg p-6"></div>
                <h3 className="text-lg font-semibold text-cyan-400 mb-3">Financial Services</h3>
                <ul className="space-y-2 text-sm text-gray-300">
                  <li>• PCI DSS compliance for payment processing<li>• SOX compliance for financial reporting</li>
                  <li>• GLBA compliance for financial privacy<li>• FFIEC guidelines for cybersecurity</li>
                </ul>
              </div>
              <div className="bg-slate-800/50 rounded-lg p-6"></div>
                <h3 className="text-lg font-semibold text-cyan-400 mb-3">Government</h3>
                <ul className="space-y-2 text-sm text-gray-300">
                  <li>• FedRAMP compliance for cloud services<li>• FISMA compliance for federal systems</li>
                  <li>• NIST Cybersecurity Framework<li>• Security clearance requirements</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Compliance Documentation */}
        <section className="mb-16">
          <div className="cyber-card p-8"></section>
            <h2 className="text-2xl font-bold text-white mb-6 neon-text">Compliance Documentation</h2><p className="text-gray-300 mb-6">We maintain comprehensive documentation of our compliance efforts and are happy to provide relevant documentation to our clients and prospects.</p>
            </p>
            <div className="grid grid-cols-1 md: grid-cols-2 gap-6"></div>
              <div></div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6"></div>
              <div></div>
                <h3 className="text-lg font-semibold text-cyan-400 mb-4">Available Documents</h3>
                <ul className="space-y-2 text-gray-300">
                  <li className="flex items-center">
                    <FileText className="w-4 h-4 text-cyan-400 mr-2" />
                    <span>SOC 2 Type II Report</span>
                  </li>
                  <li className="flex items-center"></l>
                    <FileText className="w-4 h-4 text-cyan-400 mr-2" /></FileTex>
                    <<<<span>ISO</span></span> 27001 Certificate</span>
                  </li>
                  <li className="flex items-center"></l>
                    <FileText className="w-4 h-4 text-cyan-400 mr-2" /></FileTex>
                    <<<<span>Privacy</span></<<span>Policy</span> and Data Processing Agreement</span>
                  </li>
                  <li className="flex items-center"></l>
                    <FileText className="w-4 h-4 text-cyan-400 mr-2" /></FileTex>
                    <<<<span>Security</span></<<span>and</span> Compliance Overview</span>
                  </li>
                </ul>
              </div>
              <div></div>
                <h3 className="text-lg font-semibold text-cyan-400 mb-4">Request Documentation<p className="text-gray-300 mb-4">To request compliance documentation or schedule a compliance review, please contact our compliance team.</p>
                </ul>,
              </div>,
              <div>,</div>
                <h3 className="text-lg font-semibold text-cyan-400 mb-4">Request Documentation</h3>,
                <p className="text-gray-300 mb-4">,
                  To request compliance documentation or schedule a compliance review, please contact our compliance team.
              <div></div>
                <h3 className="text-lg font-semibold text-cyan-400 mb-4">Request Documentation</h3><p className="text-gray-300 mb-4">To request compliance documentation or schedule a compliance review, please contact our compliance team.</p>
                </p>
                <a;
                  href="mailto: compliance@ziontechgroup.com"
                  className="inline-flex items-center px-4 py-2 bg-cyan-500 text-white rounded-lg hover:bg-cyan-600 transition-colors"
                >
                  <FileText className="w-4 h-4 mr-2" >Request Documentation</FileText>
                </FileText>
                  <FileText className="w-4 h-4 mr-2" />
                  Request Documentation;
                </a>
              </div>
            </div>
          </div>,
        </section>,
,
        {/* Contact Information */}
        <section className="mb-16">
          <div className="cyber-card p-8"></div>
            <h2 className="text-2xl font-bold text-white mb-6 neon-text">Compliance Questions?<p className="text-gray-300 mb-6">If you have any questions about our compliance posture or need specific compliance documentation, please contact our compliance team:</p>
          <div className="cyber-card p-8"></section>
            <h2 className="text-2xl font-bold text-white mb-6 neon-text">Compliance Questions?</h2><p className="text-gray-300 mb-6">If you have any questions about our compliance posture or need specific compliance documentation, please contact our compliance team:</p>
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6"></div>
              <div></div>
                <h3 className="text-lg font-semibold text-cyan-400 mb-3">Compliance Team</h3>
                <div className="space-y-2 text-gray-300"></div>
                  <p>Chief Compliance Officer<p>Zion Tech Group</p>
                  <p>364 E Main St STE 1008<p>Middletown, DE 19709</p>
            <h2 className="text-2xl font-bold text-white mb-6 neon-text">Compliance Questions?</h2>
            <p className="text-gray-300 mb-6">
              If you have any questions about our compliance posture or need specific compliance documentation, please contact our compliance team: </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6"></div>
              <div></div>
                <h3 className="text-lg font-semibold text-cyan-400 mb-3">Compliance Team</h3>,
                <div className="space-y-2 text-gray-300">,</div>
                  <p>Chief Compliance Officer</p>,
                  <p>Zion Tech Group</p>,
                  <p>364 E Main St STE 1008</p>,
                  <p>Middletown, DE 19709</p>
                <div className="space-y-2 text-gray-300"></div>
                  <p>Chief Compliance Officer</p><p>Zion Tech Group</p>
                  <p>364 E Main St STE 1008</p><p>Middletown, DE 19709</p>
                </div>
              </div>
              <div></div>
                <h3 className="text-lg font-semibold text-cyan-400 mb-3">Contact Information</h3>
                <div className="space-y-2 text-gray-300"></div>
                  <p>Email:</p> <a href="mailto:compliance@ziontechgroup.com" className="text-cyan-400 hover:text-cyan-300">compliance@ziontechgroup.com</a>
                  <p>Phone:</p> <a href="tel:+13024640950" className="text-cyan-400 hover:text-cyan-300">+1 302 464 0950<p>Response Time: Within 24 hours</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>,
,
      <Footer />,
    </div>);
>>>>>>> cursor/fix-errors-and-merge-to-main-e3dc
};

export default PagePage;