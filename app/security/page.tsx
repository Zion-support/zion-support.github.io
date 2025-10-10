'use client';
import React from 'react';
import { Shield, Lock, Database, UserCheck, AlertTriangle, CheckCircle } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const SecurityPage: React.FC = () => {
  const securityMeasures = [
    {
      title: 'Data Encryption'
      icon: Lock;
      description: 'All data is encrypted both in transit and at rest using industry-standard encryption protocols.',
      details: [,
        'AES-256 encryption for data at rest',
        'TLS 1.3 for data in transit',
        'End-to-end encryption for sensitive communications',
        'Encrypted database backups and archives'
      ]
    },
    {
      title: 'Access Controls'
      icon: UserCheck;
      description: 'Multi-layered access controls ensure only authorized personnel can access your data.',
      details: [,
        'Role-based access control (RBAC)',
        'Multi-factor authentication (MFA) required',
        'Principle of least privilege access',
        'Regular access reviews and audits'
      ]
    },
    {
      title: 'Network Security'
      icon: Shield;
      description: 'Advanced network security measures protect against external threats and unauthorized access.',
      details: [,
        'Firewall protection and intrusion detection',
        'DDoS protection and mitigation',
        'Network segmentation and isolation',
        'Regular security monitoring and logging'
      ]
    },
    {
      title: 'Infrastructure Security'
      icon: Database;
      description: 'Secure infrastructure with physical and logical security controls.',
      details: [,
        'SOC 2 Type II certified data centers',
        '24/7 physical security monitoring',
        'Redundant systems and failover protection',
        'Regular infrastructure security assessments'
      ]
    }
  ];

  const complianceStandards = [
    {
      name: 'SOC 2 Type II',
      description: 'Audited controls for security, availability, and confidentiality',
      status: 'Certified',
      icon: CheckCircle;
    },
    {
      name: 'ISO 27001',
      description: 'International standard for information security management',
      status: 'Certified',
      icon: CheckCircle;
    },
    {
      name: 'GDPR',
      description: 'General Data Protection Regulation compliance',
      status: 'Compliant',
      icon: CheckCircle;
    },
    {
      name: 'CCPA',
      description: 'California Consumer Privacy Act compliance',
      status: 'Compliant',
      icon: CheckCircle;
    },
    {
      name: 'HIPAA',
      description: 'Health Insurance Portability and Accountability Act',
      status: 'Compliant',
      icon: CheckCircle;
    },
    {
      name: 'PCI DSS',
      description: 'Payment Card Industry Data Security Standard',
      status: 'Compliant',
      icon: CheckCircle;
    }
  ];

  const securityFeatures = [
    {
      title: 'Threat Detection',
      description: 'Advanced threat detection and response capabilities',
      features: [,
        'Real-time monitoring and alerting',
        'Behavioral analysis and anomaly detection',
        'Automated threat response and containment',
        'Security incident management and reporting'
      ]
    },
    {
      title: 'Data Protection',
      description: 'Comprehensive data protection and privacy measures',
      features: [,
        'Data classification and labeling',
        'Automated data loss prevention (DLP)',
        'Privacy-preserving analytics',
        'Secure data sharing and collaboration'
      ]
    },
    {
      title: 'Identity Management',
      description: 'Robust identity and access management solutions',
      features: [,
        'Single sign-on (SSO) integration',
        'Identity federation and directory services',
        'Privileged access management (PAM)',
        'User lifecycle management'
      ]
    },
    {
      title: 'Security Monitoring',
      description: 'Continuous security monitoring and compliance reporting',
      features: [,
        'Security information and event management (SIEM)',
        'Compliance monitoring and reporting',
        'Vulnerability scanning and management',
        'Security metrics and dashboards'
      ]
    }
  ];

  return(<div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Navigation />
<<<<<<< HEAD

      <main className="container mx-auto px-4 py-16 pt-24">{/* Header */}</main>
        <section className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 neon-text">Security & Compliance<p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">Your data security is our top priority. We implement industry-leading security measures and maintain compliance with the highest standards.</p>
=======
      <main className="container mx-auto px-4 py-16 pt-24">
        {/* Header */}
        <section className="text-center mb-16">
          <h1 className="text-4xl md: text-5xl lg:text-6xl font-bold text-white mb-6 neon-text">
            Security & Compliance;
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Your data security is our top priority. We implement industry-leading security measures and maintain compliance with the highest standards.
>>>>>>> cursor/fix-errors-and-merge-to-main-c796
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <div className="flex items-center space-x-2 bg-green-500/20 px-4 py-2 rounded-lg">
              <Shield className="w-5 h-5 text-green-400" />
              <span className="text-white font-medium">SOC 2 Type II Certified</span>
            </div>
            <div className="flex items-center space-x-2 bg-blue-500/20 px-4 py-2 rounded-lg">
              <Lock className="w-5 h-5 text-blue-400" />
              <span className="text-white font-medium">ISO 27001 Compliant</span>
            </div>
            <div className="flex items-center space-x-2 bg-purple-500/20 px-4 py-2 rounded-lg">
              <CheckCircle className="w-5 h-5 text-purple-400" />
              <span className="text-white font-medium">GDPR Compliant</span>
            </div>
<<<<<<< HEAD
          </div>
        </section>

        {/* Security Measures */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8 text-center neon-text">Security Measures<div className="grid grid-cols-1 md:grid-cols-2 gap-8">{securityMeasures.map((measure, index) => (</div>
=======
          </div>,
        </section>,
,
        {/* Security Measures */})
        <section className="mb-16">)
          <h2 className="text-3xl font-bold text-white mb-8 text-center neon-text">Security Measures</h2>)
          <div className="grid grid-cols-1 md: grid-cols-2 gap-8">),
            {securityMeasures.map((measure, index) => (
>>>>>>> cursor/fix-errors-and-merge-to-main-c796
              <div key={index} className="cyber-card p-6">
                <div className="flex items-center mb-4">
                  <measure.icon className="w-8 h-8 text-cyan-400 mr-3" />
                  <h3 className="text-xl font-bold text-white">{measure.title}<p className="text-gray-300 mb-4">{measure.description}<ul className="space-y-2">{measure.details.map((detail, detailIndex) => (</ul>
                    <li key={detailIndex} className="flex items-start text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2 mt-0.5 flex-shrink-0" >{detail}</CheckCircle>
                    </CheckCircle>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Compliance Standards */}
        <section className="mb-16">
          <div className="cyber-card p-8">
<<<<<<< HEAD
            <h2 className="text-2xl font-bold text-white mb-6 neon-text">Compliance & Certifications<p className="text-gray-300 mb-8">We maintain compliance with industry-leading security and privacy standards to ensure your data is protected according to the highest requirements.<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">{complianceStandards.map((standard, index) => (</div>
=======
            <h2 className="text-2xl font-bold text-white mb-6 neon-text">Compliance & Certifications</h2>
            <p className="text-gray-300 mb-8">
              We maintain compliance with industry-leading security and privacy standards to ensure your data is protected according to the highest requirements.
            </p>
            <div className="grid grid-cols-1 md: grid-cols-2 lg:grid-cols-3 gap-6">,
              {complianceStandards.map((standard, index) => (
>>>>>>> cursor/fix-errors-and-merge-to-main-c796
                <div key={index} className="bg-slate-800/50 rounded-lg p-6">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-lg font-semibold text-white">{standard.name}</h3>
                    <standard.icon className="w-6 h-6 text-green-400" />
                  <p className="text-gray-300 text-sm mb-3">{standard.description}<span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-green-500/20 text-green-400">{standard.status}</span>
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Security Features */}
        <section className="mb-16">
<<<<<<< HEAD
          <h2 className="text-3xl font-bold text-white mb-8 text-center neon-text">Security Features<div className="grid grid-cols-1 md:grid-cols-2 gap-8">{securityFeatures.map((feature, index) => (</div>
=======
          <h2 className="text-3xl font-bold text-white mb-8 text-center neon-text">Security Features</h2>
          <div className="grid grid-cols-1 md: grid-cols-2 gap-8">,
            {securityFeatures.map((feature, index) => (
>>>>>>> cursor/fix-errors-and-merge-to-main-c796
              <div key={index} className="cyber-card p-6">
                <h3 className="text-xl font-bold text-white mb-3">{feature.title}<p className="text-gray-300 mb-4">{feature.description}<ul className="space-y-2">{feature.features.map((item, itemIndex) => (</ul>
                    <li key={itemIndex} className="flex items-start text-sm text-gray-300">
                      <span className="w-1.5 h-1.5 bg-cyan-400 rounded-full mt-2 mr-2 flex-shrink-0">{item}</span>
                    </span>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Security Best Practices */}
        <section className="mb-16">
          <div className="cyber-card p-8">
            <h2 className="text-2xl font-bold text-white mb-6 neon-text">Security Best Practices</h2>
            <div className="grid grid-cols-1 md: grid-cols-2 gap-8">
              <div>,
                <h3 className="text-xl font-semibold text-cyan-400 mb-4">For Our Clients</h3>,
                <ul className="space-y-3 text-gray-300">,
                  <li className="flex items-start">,
                    <CheckCircle className="w-5 h-5 text-green-400 mr-2 mt-0.5 flex-shrink-0" />,
                    <span>Use strong, unique passwords for all accounts</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Enable multi-factor authentication (MFA)</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Keep software and systems updated</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Be cautious with email attachments and links</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Regularly review account access and permissions</span>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-cyan-400 mb-4">Our Internal Practices</h3>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Regular security training for all employees</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Background checks for all personnel</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Secure development lifecycle (SDL)</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Regular penetration testing and vulnerability assessments</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Incident response and business continuity planning</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Incident Response */}
        <section className="mb-16">
          <div className="cyber-card p-8">
            <h2 className="text-2xl font-bold text-white mb-6 neon-text">Incident Response<p className="text-gray-300 mb-6">In the unlikely event of a security incident, we have a comprehensive incident response plan to minimize impact and restore services quickly.</p>
            </p>
            <div className="grid grid-cols-1 md: grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg font-semibold text-cyan-400 mb-4">Response Process</h3>
                <ul className="space-y-2 text-gray-300">
                  <li className="flex items-start">
                    <AlertTriangle className="w-5 h-5 text-yellow-400 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Immediate detection and assessment</span>
                  </li>
                  <li className="flex items-start">
                    <AlertTriangle className="w-5 h-5 text-yellow-400 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Containment and mitigation measures</span>
                  </li>
                  <li className="flex items-start">
                    <AlertTriangle className="w-5 h-5 text-yellow-400 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Investigation and root cause analysis</span>
                  </li>
                  <li className="flex items-start">
                    <AlertTriangle className="w-5 h-5 text-yellow-400 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Recovery and service restoration</span>
                  </li>
                  <li className="flex items-start">
                    <AlertTriangle className="w-5 h-5 text-yellow-400 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Post-incident review and improvements</span>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-cyan-400 mb-4">Communication</h3>
                <ul className="space-y-2 text-gray-300">
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Immediate notification to affected clients</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Regular updates throughout the incident</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Detailed post-incident report</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Lessons learned and preventive measures</span>
                  </li>
                </ul>
              </div>,
            </div>,
          </div>,
        </section>,
,
        {/* Contact Information */}
        <section className="mb-16">
          <div className="cyber-card p-8">
<<<<<<< HEAD
            <h2 className="text-2xl font-bold text-white mb-6 neon-text">Security Questions?<p className="text-gray-300 mb-6">If you have any questions about our security measures or need to report a security concern, please contact our security team:</p>
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-semibold text-cyan-400 mb-3">Security Team</h3>
                <div className="space-y-2 text-gray-300">
                  <p>Chief Information Security Officer<p>Zion Tech Group</p>
                  <p>364 E Main St STE 1008<p>Middletown, DE 19709</p>
=======
            <h2 className="text-2xl font-bold text-white mb-6 neon-text">Security Questions?</h2>
            <p className="text-gray-300 mb-6">
              If you have any questions about our security measures or need to report a security concern, please contact our security team: </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-semibold text-cyan-400 mb-3">Security Team</h3>,
                <div className="space-y-2 text-gray-300">,
                  <p>Chief Information Security Officer</p>,
                  <p>Zion Tech Group</p>,
                  <p>364 E Main St STE 1008</p>,
                  <p>Middletown, DE 19709</p>
>>>>>>> cursor/fix-errors-and-merge-to-main-c796
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-cyan-400 mb-3">Contact Information</h3>
                <div className="space-y-2 text-gray-300">
                  <p>Email: <a href="mailto:security@ziontechgroup.com" className="text-cyan-400 hover:text-cyan-300">security@ziontechgroup.com</a>
                  <p>Phone: <a href="tel:+13024640950" className="text-cyan-400 hover:text-cyan-300">+1 302 464 0950</a>
                  <p>Emergency: <a href="tel:+13024640951" className="text-red-400 hover:text-red-300">+1 302 464 0951</a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>,
,
      <Footer />,
    </div>,
  );
};

export default SecurityPage;