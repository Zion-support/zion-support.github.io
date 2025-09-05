<<<<<<< HEAD
import React from 'react',
import Head from 'next/head',
import { motion } from 'framer-motion',
import { Shield, Lock, Eye, Database, Server, Key, CheckCircle, Mail, Phone, MapPin } from 'lucide-react',
import EnhancedNavigation from '../components/EnhancedNavigation',
import EnhancedFooter from '../components/EnhancedFooter',
export default function Security() {
  const securityMeasures = [
    {
      id: 'data-protection',
      title: 'Data Protection',
      icon: Database,
      features: [
        'End-to-end encryption for all data in transitAES-256 encryption for data at restRegular automated backups with encryptionSecure data centers with 24/7 monitoringData residency compliance for global clients'
      ]
    },
    {
      id: 'access-control',
      title: 'Access Control',
      icon: Key,
      features: [
        'Multi-factor authentication (MFA) requiredRole-based access control (RBAC)Principle of least privilege implementationRegular access reviews and deprovisioningSingle sign-on (SSO) integration'
      ]
    },
    {
      id: 'infrastructure',
      title: 'Infrastructure Security',
      icon: Server,
      features: [
        'Network segmentation and firewallsIntrusion detection and prevention systemsRegular vulnerability assessmentsAutomated security patchingDDoS protection and rate limiting'
      ]
    },
    {
      id: 'monitoring',
      title: 'Security Monitoring',
      icon: Eye,
      features: [
        '24/7 security operations center (SOC)Real-time threat detection and responseComprehensive audit loggingSecurity incident response teamContinuous security monitoring tools'
      ]
    }
  ],

  const certifications = [
    { name: 'SOC 2 Type II', status: 'Certified' },
    { name: 'ISO 27001', status: 'Certified' },
    { name: 'GDPR', status: 'Compliant' },
    { name: 'HIPAA', status: 'Compliant' },
    { name: 'PCI DSS', status: 'Compliant' }
  ],
=======
import React from 'react';
import Head from 'next/head';
import EnhancedNavigation from '../components/EnhancedNavigation';
import EnhancedFooter from '../components/EnhancedFooter';

export default function Security() {_const _securityMeasures = [
    {
      id: 'data-protection', _title: 'Data Protection', _icon: Database, _features: [
        'End-to-end encryption for all data in transit', _'AES-256 encryption for data at rest', _'Regular automated backups with encryption', _'Secure data centers with 24/7 monitoring', _'Data residency compliance for global clients'
      ]},
    {_id: 'access-control', _title: 'Access Control', _icon: Key, _features: [
        'Multi-factor authentication (MFA) required', _'Role-based access control (RBAC)', _'Principle of least privilege implementation', _'Regular access reviews and deprovisioning', _'Single sign-on (SSO) integration'
      ]},
    {_id: 'infrastructure', _title: 'Infrastructure Security', _icon: Server, _features: [
        'Network segmentation and firewalls', _'Intrusion detection and prevention systems', _'Regular vulnerability assessments', _'Automated security patching', _'DDoS protection and rate limiting'
      ]},
    {_id: 'monitoring', _title: 'Security Monitoring', _icon: Eye, _features: [
        '24/7 security operations center (SOC)', _'Real-time threat detection and response', _'Comprehensive audit logging', _'Security incident response team', _'Continuous security monitoring tools'
      ]}
  ];

  const _certifications = [
    {_name: 'SOC 2 Type II', _status: 'Certified'},
    {_name: 'ISO 27001', _status: 'Certified'},
    {_name: 'GDPR', _status: 'Compliant'},
    {_name: 'HIPAA', _status: 'Compliant'},
    {_name: 'PCI DSS', _status: 'Compliant'}
  ];
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13

  return (_<>
      <Head>
        <title>Security | Zion Tech Group</title>
<<<<<<< HEAD
        <meta name=&quot;description&quot; content=&quot;Learn about Zion Tech Group's comprehensive security measures, certifications, and commitment to protecting your data and privacy.&quot; />
        <meta name=&quot;viewport&quot; content=&quot;width=device-width, initial-scale=1&quot; />
        <link rel=&quot;icon&quot; href=&quot;/favicon.ico&quot; />
=======
        <meta name="description" content="Learn about Zion Tech Group's comprehensive security measures, _certifications, _and commitment to protecting your data and privacy." />
        <meta name="viewport" content="width=device-width, _initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
      </Head>

      <div className=&quot;min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900&quot;>
        <EnhancedNavigation />

<<<<<<< HEAD
        {/* Hero Section */}
        <section className=&quot;pt-32 pb-20 px-6&quot;>
          <div className=&quot;max-w-4xl mx-auto text-center&quot;>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className=&quot;flex items-center justify-center mb-6&quot;
=======
        {_/* Hero Section */}
        <section className="pt-32 pb-20 px-6">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={_{ opacity: 0, _y: 20}}
              animate={_{ opacity: 1, _y: 0}}
              transition={_{ duration: 0.8}}
              className="flex items-center justify-center mb-6"
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
            >
              <Shield className=&quot;w-16 h-16 text-cyan-400&quot; />
            </motion.div>
            
            <motion.h1
<<<<<<< HEAD
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className=&quot;text-5xl md:text-6xl font-bold bg-gradient-to-r from-white to-cyan-100 bg-clip-text text-transparent mb-6&quot;
=======
              initial={_{ opacity: 0, _y: 20}}
              animate={_{ opacity: 1, _y: 0}}
              transition={_{ duration: 0.8, _delay: 0.1}}
              className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-white to-cyan-100 bg-clip-text text-transparent mb-6"
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
            >
              Security First
            </motion.h1>
            
            <motion.p
<<<<<<< HEAD
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className=&quot;text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed&quot;
=======
              initial={_{ opacity: 0, _y: 20}}
              animate={_{ opacity: 1, _y: 0}}
              transition={_{ duration: 0.8, _delay: 0.2}}
              className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
            >
              Your security and privacy are our top priorities. Learn about our comprehensive security measures and industry-leading practices.
            </motion.p>
          </div>
        </section>

<<<<<<< HEAD
        {/* Security Overview */}
        <section className=&quot;py-20 px-6&quot;>
          <div className=&quot;max-w-6xl mx-auto&quot;>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className=&quot;text-center mb-16&quot;
=======
        {_/* Security Overview */}
        <section className="py-20 px-6">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={_{ opacity: 0, _y: 20}}
              animate={_{ opacity: 1, _y: 0}}
              transition={_{ duration: 0.8}}
              className="text-center mb-16"
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
            >
              <h2 className=&quot;text-4xl font-bold text-white mb-6&quot;>Enterprise-Grade Security</h2>
              <p className=&quot;text-xl text-gray-300 max-w-3xl mx-auto&quot;>
                We implement multiple layers of security controls to protect your data and ensure business continuity.
              </p>
            </motion.div>

<<<<<<< HEAD
            <div className=&quot;grid md:grid-cols-2 gap-8 mb-16&quot;>
              {securityMeasures.map((measure, index) => (
                <motion.div
                  key={measure.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className=&quot;bg-slate-800/50 rounded-2xl p-8 border border-white/10 hover:border-cyan-500/30 transition-colors duration-300&quot;
                >
                  <div className=&quot;flex items-center mb-6&quot;>
                    <measure.icon className=&quot;w-8 h-8 text-cyan-400 mr-4&quot; />
                    <h3 className=&quot;text-2xl font-bold text-white&quot;>{measure.title}</h3>
                  </div>
                  
                  <ul className=&quot;space-y-3&quot;>
                    {measure.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className=&quot;flex items-start&quot;>
                        <CheckCircle className=&quot;w-5 h-5 text-green-400 mr-3 mt-0.5 flex-shrink-0&quot; />
                        <span className=&quot;text-gray-300 leading-relaxed&quot;>{feature}</span>
=======
            <div className="grid md:grid-cols-2 gap-8 mb-16">
              {_securityMeasures.map((measure, _index) => (_<motion.div
                  key={measure.id}
                  initial={_{ opacity: 0, _y: 20}}
                  animate={_{ opacity: 1, _y: 0}}
                  transition={_{ duration: 0.8, _delay: index * 0.1}}
                  className="bg-slate-800/50 rounded-2xl p-8 border border-white/10 hover:border-cyan-500/30 transition-colors duration-300"
                >
                  <div className="flex items-center mb-6">
                    <measure.icon className="w-8 h-8 text-cyan-400 mr-4" />
                    <h3 className="text-2xl font-bold text-white">{_measure.title}</h3>
                  </div>
                  
                  <ul className="space-y-3">
                    {_measure.features.map((feature, _featureIndex) => (
                      <li key={featureIndex} className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-green-400 mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-300 leading-relaxed">{_feature}</span>
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>

            {_/* Certifications */}
            <motion.div
<<<<<<< HEAD
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className=&quot;bg-gradient-to-r from-cyan-900/20 to-blue-900/20 rounded-2xl p-8 border border-cyan-500/20 mb-16&quot;
=======
              initial={_{ opacity: 0, _y: 20}}
              animate={_{ opacity: 1, _y: 0}}
              transition={_{ duration: 0.8, _delay: 0.5}}
              className="bg-gradient-to-r from-cyan-900/20 to-blue-900/20 rounded-2xl p-8 border border-cyan-500/20 mb-16"
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
            >
              <h3 className=&quot;text-3xl font-bold text-white mb-6 text-center&quot;>Security Certifications & Compliance</h3>
              
<<<<<<< HEAD
              <div className=&quot;grid md:grid-cols-5 gap-6&quot;>
                {certifications.map((cert, index) => (
                  <motion.div
                    key={cert.name}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className=&quot;text-center p-4 bg-slate-800/50 rounded-xl border border-white/10&quot;
                  >
                    <CheckCircle className=&quot;w-8 h-8 text-green-400 mx-auto mb-3&quot; />
                    <h4 className=&quot;text-white font-semibold mb-1&quot;>{cert.name}</h4>
                    <p className=&quot;text-cyan-400 text-sm&quot;>{cert.status}</p>
=======
              <div className="grid md:grid-cols-5 gap-6">
                {_certifications.map(_(cert, _index) => (
                  <motion.div
                    key={cert.name}
                    initial={_{ opacity: 0, _scale: 0.9}}
                    animate={_{ opacity: 1, _scale: 1}}
                    transition={_{ duration: 0.5, _delay: index * 0.1}}
                    className="text-center p-4 bg-slate-800/50 rounded-xl border border-white/10"
                  >
                    <CheckCircle className="w-8 h-8 text-green-400 mx-auto mb-3" />
                    <h4 className="text-white font-semibold mb-1">{_cert.name}</h4>
                    <p className="text-cyan-400 text-sm">{_cert.status}</p>
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {_/* Security Incident Response */}
            <motion.div
<<<<<<< HEAD
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className=&quot;mb-16&quot;
=======
              initial={_{ opacity: 0, _y: 20}}
              animate={_{ opacity: 1, _y: 0}}
              transition={_{ duration: 0.8, _delay: 0.6}}
              className="mb-16"
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
            >
              <h3 className=&quot;text-3xl font-bold text-white mb-6&quot;>Incident Response</h3>
              <div className=&quot;bg-slate-800/50 rounded-2xl p-8 border border-white/10&quot;>
                <div className=&quot;grid md:grid-cols-2 gap-8&quot;>
                  <div>
                    <h4 className=&quot;text-white font-semibold mb-4 flex items-center&quot;>
                      <Eye className=&quot;w-5 h-5 text-cyan-400 mr-2&quot; />
                      Detection & Response
                    </h4>
                    <ul className=&quot;space-y-2 text-gray-300&quot;>
                      <li>• 24/7 security monitoring</li>
                      <li>• Automated threat detection</li>
                      <li>• Rapid incident response team</li>
                      <li>• Regular security drills</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className=&quot;text-white font-semibold mb-4 flex items-center&quot;>
                      <Lock className=&quot;w-5 h-5 text-cyan-400 mr-2&quot; />
                      Business Continuity
                    </h4>
                    <ul className=&quot;space-y-2 text-gray-300&quot;>
                      <li>• Disaster recovery plans</li>
                      <li>• Regular backup testing</li>
                      <li>• Redundant infrastructure</li>
                      <li>• Recovery time objectives (RTO)</li>
                    </ul>
                  </div>
                </div>
              </div>
            </motion.div>

            {_/* Vulnerability Management */}
            <motion.div
<<<<<<< HEAD
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className=&quot;mb-16&quot;
=======
              initial={_{ opacity: 0, _y: 20}}
              animate={_{ opacity: 1, _y: 0}}
              transition={_{ duration: 0.8, _delay: 0.7}}
              className="mb-16"
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
            >
              <h3 className=&quot;text-3xl font-bold text-white mb-6&quot;>Vulnerability Management</h3>
              <div className=&quot;bg-slate-800/50 rounded-2xl p-8 border border-white/10&quot;>
                <p className=&quot;text-gray-300 leading-relaxed mb-6&quot;>
                  We maintain a proactive approach to identifying and addressing security vulnerabilities:
                </p>
                
                <div className=&quot;grid md:grid-cols-3 gap-6&quot;>
                  <div className=&quot;text-center&quot;>
                    <div className=&quot;w-16 h-16 bg-cyan-900/30 rounded-full flex items-center justify-center mx-auto mb-4&quot;>
                      <Eye className=&quot;w-8 h-8 text-cyan-400&quot; />
                    </div>
                    <h4 className=&quot;text-white font-semibold mb-2&quot;>Regular Scanning</h4>
                    <p className=&quot;text-gray-300 text-sm&quot;>Continuous automated vulnerability scanning</p>
                  </div>
                  
                  <div className=&quot;text-center&quot;>
                    <div className=&quot;w-16 h-16 bg-cyan-900/30 rounded-full flex items-center justify-center mx-auto mb-4&quot;>
                      <Shield className=&quot;w-8 h-8 text-cyan-400&quot; />
                    </div>
                    <h4 className=&quot;text-white font-semibold mb-2&quot;>Penetration Testing</h4>
                    <p className=&quot;text-gray-300 text-sm&quot;>Annual third-party security assessments</p>
                  </div>
                  
                  <div className=&quot;text-center&quot;>
                    <div className=&quot;w-16 h-16 bg-cyan-900/30 rounded-full flex items-center justify-center mx-auto mb-4&quot;>
                      <CheckCircle className=&quot;w-8 h-8 text-cyan-400&quot; />
                    </div>
                    <h4 className=&quot;text-white font-semibold mb-2&quot;>Rapid Remediation</h4>
                    <p className=&quot;text-gray-300 text-sm&quot;>Quick patching and vulnerability resolution</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {_/* Contact Security Team */}
            <motion.div
<<<<<<< HEAD
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className=&quot;bg-gradient-to-r from-red-900/20 to-orange-900/20 rounded-2xl p-8 border border-red-500/20&quot;
=======
              initial={_{ opacity: 0, _y: 20}}
              animate={_{ opacity: 1, _y: 0}}
              transition={_{ duration: 0.8, _delay: 0.8}}
              className="bg-gradient-to-r from-red-900/20 to-orange-900/20 rounded-2xl p-8 border border-red-500/20"
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
            >
              <h3 className=&quot;text-3xl font-bold text-white mb-6 flex items-center&quot;>
                <Shield className=&quot;w-8 h-8 text-red-400 mr-4&quot; />
                Report Security Issues
              </h3>
              
<<<<<<< HEAD
              <p className="text-gray-300 mb-6 leading-relaxed">
                If you discover a security vulnerability, please report it to our security team immediately: </p>
=======
              <p className=&quot;text-gray-300 mb-6 leading-relaxed&quot;>
                If you discover a security vulnerability, please report it to our security team immediately:
              </p>
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
              
              <div className=&quot;grid md:grid-cols-3 gap-6&quot;>
                <div className=&quot;flex items-center&quot;>
                  <Mail className=&quot;w-5 h-5 text-red-400 mr-3&quot; />
                  <div>
                    <p className=&quot;text-white font-semibold&quot;>Security Email</p>
                    <p className=&quot;text-gray-300&quot;>security@ziontechgroup.com</p>
                  </div>
                </div>
                
                <div className=&quot;flex items-center&quot;>
                  <Phone className=&quot;w-5 h-5 text-red-400 mr-3&quot; />
                  <div>
                    <p className=&quot;text-white font-semibold&quot;>Emergency Hotline</p>
                    <p className=&quot;text-gray-300&quot;>+1 (555) 123-HELP</p>
                  </div>
                </div>
                
                <div className=&quot;flex items-center&quot;>
                  <Key className=&quot;w-5 h-5 text-red-400 mr-3&quot; />
                  <div>
                    <p className=&quot;text-white font-semibold&quot;>PGP Key</p>
                    <p className=&quot;text-gray-300&quot;>Available on request</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        <EnhancedFooter />
      </div>
    </>
  )
}