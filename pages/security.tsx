import React from 'react';
import Head from 'next/head';
import { motion } from 'framer-motion';
<<<<<<< HEAD
<<<<<<< HEAD
import {
  Shield,
  Lock,
  Eye,
  Database,
  Server,
  Key,
  CheckCircle,
  Mail,
  Phone,
  MapPin,;
} from 'lucide-react';
import EnhancedNavigation from '../components/EnhancedNavigation';
import EnhancedFooter from '../components/EnhancedFooter';

=======
import { Shield, Lock, Eye, Database, Server, Key, CheckCircle, Mail, Phone, MapPin } from 'lucide-react';
import EnhancedNavigation from '../components/EnhancedNavigation';
import EnhancedFooter from '../components/EnhancedFooter';
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
import { Shield, Lock, Eye, Database, Server, Key, CheckCircle, Mail, Phone, MapPin } from 'lucide-react';
import EnhancedNavigation from '../components/EnhancedNavigation';
import EnhancedFooter from '../components/EnhancedFooter';
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
export default function Security() {
  const securityMeasures = [
    {
      id: 'data-protection',
      title: 'Data Protection',
      icon: Database,
      features: [
<<<<<<< HEAD
<<<<<<< HEAD
        'End-to-end encryption for all data in transit',
        'AES-256 encryption for data at rest',
        'Regular automated backups with encryption',
        'Secure data centers with 24/7 monitoring',
        'Data residency compliance for global clients',
      ],
    },
=======
        'End-to-end encryption for all data in transitAES-256 encryption for data at restRegular automated backups with encryptionSecure data centers with 24/7 monitoringData residency compliance for global clients'
      ]
    };
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
        'End-to-end encryption for all data in transitAES-256 encryption for data at restRegular automated backups with encryptionSecure data centers with 24/7 monitoringData residency compliance for global clients'
      ]
    };
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
    {
      id: 'access-control',
      title: 'Access Control',
      icon: Key,
      features: [
<<<<<<< HEAD
<<<<<<< HEAD
        'Multi-factor authentication (MFA) required',
        'Role-based access control (RBAC)',
        'Principle of least privilege implementation',
        'Regular access reviews and deprovisioning',
        'Single sign-on (SSO) integration',
      ],
    },
=======
        'Multi-factor authentication (MFA) requiredRole-based access control (RBAC)Principle of least privilege implementationRegular access reviews and deprovisioningSingle sign-on (SSO) integration'
      ]
    };
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
        'Multi-factor authentication (MFA) requiredRole-based access control (RBAC)Principle of least privilege implementationRegular access reviews and deprovisioningSingle sign-on (SSO) integration'
      ]
    };
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
    {
      id: 'infrastructure',
      title: 'Infrastructure Security',
      icon: Server,
      features: [
<<<<<<< HEAD
<<<<<<< HEAD
        'Network segmentation and firewalls',
        'Intrusion detection and prevention systems',
        'Regular vulnerability assessments',
        'Automated security patching',
        'DDoS protection and rate limiting',
      ],
    },
=======
        'Network segmentation and firewallsIntrusion detection and prevention systemsRegular vulnerability assessmentsAutomated security patchingDDoS protection and rate limiting'
      ]
    };
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
        'Network segmentation and firewallsIntrusion detection and prevention systemsRegular vulnerability assessmentsAutomated security patchingDDoS protection and rate limiting'
      ]
    };
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
    {
      id: 'monitoring',
      title: 'Security Monitoring',
      icon: Eye,
      features: [
<<<<<<< HEAD
<<<<<<< HEAD
        '24/7 security operations center (SOC)',
        'Real-time threat detection and response',
        'Comprehensive audit logging',
        'Security incident response team',
        'Continuous security monitoring tools',
      ],
    },
=======
        '24/7 security operations center (SOC)Real-time threat detection and responseComprehensive audit loggingSecurity incident response teamContinuous security monitoring tools'
      ]
    }
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
        '24/7 security operations center (SOC)Real-time threat detection and responseComprehensive audit loggingSecurity incident response teamContinuous security monitoring tools'
      ]
    }
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
  ];

  const certifications = [
    { name: 'SOC 2 Type II', status: 'Certified' },
    { name: 'ISO 27001', status: 'Certified' },
    { name: 'GDPR', status: 'Compliant' },
    { name: 'HIPAA', status: 'Compliant' },
<<<<<<< HEAD
<<<<<<< HEAD
    { name: 'PCI DSS', status: 'Compliant' },
=======
    { name: 'PCI DSS', status: 'Compliant' }
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
    { name: 'PCI DSS', status: 'Compliant' }
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
  ];

  return (
    <>
      <Head>
        <title>Security | Zion Tech Group</title>
<<<<<<< HEAD
<<<<<<< HEAD
        <meta
          name='description'
          content="Learn about Zion Tech Group's comprehensive security measures, certifications, and commitment to protecting your data and privacy."
        />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
=======
        <meta name="description" content="Learn about Zion Tech Group's comprehensive security measures, certifications, and commitment to protecting your data and privacy." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
      </Head>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        <EnhancedNavigation />

        {/* Hero Section */}
<<<<<<< HEAD
        <section className='pt-32 pb-20 px-6'>
          <div className='max-w-4xl mx-auto text-center'>
=======
        <meta name="description" content="Learn about Zion Tech Group's comprehensive security measures, certifications, and commitment to protecting your data and privacy." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        <EnhancedNavigation />

        {/* Hero Section */}
        <section className="pt-32 pb-20 px-6">
          <div className="max-w-4xl mx-auto text-center">
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
        <section className="pt-32 pb-20 px-6">
          <div className="max-w-4xl mx-auto text-center">
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
<<<<<<< HEAD
<<<<<<< HEAD
              className='flex items-center justify-center mb-6'
=======
              className="flex items-center justify-center mb-6"
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
            >
              <Shield className="w-16 h-16 text-cyan-400" />
            </motion.div>
<<<<<<< HEAD

=======
              className="flex items-center justify-center mb-6"
            >
              <Shield className="w-16 h-16 text-cyan-400" />
            </motion.div>
            
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
            
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
<<<<<<< HEAD
<<<<<<< HEAD
              className='text-5xl md:text-6xl font-bold bg-gradient-to-r from-white to-cyan-100 bg-clip-text text-transparent mb-6'
            >
              Security First
            </motion.h1>

=======
              className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-white to-cyan-100 bg-clip-text text-transparent mb-6"
            >
              Security First
            </motion.h1>
            
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
              className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-white to-cyan-100 bg-clip-text text-transparent mb-6"
            >
              Security First
            </motion.h1>
            
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
<<<<<<< HEAD
<<<<<<< HEAD
              className='text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed'
            >
              Your security and privacy are our top priorities. Learn about our
              comprehensive security measures and industry-leading practices.
=======
              className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
            >
              Your security and privacy are our top priorities. Learn about our comprehensive security measures and industry-leading practices.
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
              className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
            >
              Your security and privacy are our top priorities. Learn about our comprehensive security measures and industry-leading practices.
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
            </motion.p>
          </div>
        </section>

        {/* Security Overview */}
<<<<<<< HEAD
<<<<<<< HEAD
        <section className='py-20 px-6'>
          <div className='max-w-6xl mx-auto'>
=======
        <section className="py-20 px-6">
          <div className="max-w-6xl mx-auto">
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
        <section className="py-20 px-6">
          <div className="max-w-6xl mx-auto">
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
<<<<<<< HEAD
<<<<<<< HEAD
              className='text-center mb-16'
=======
              className="text-center mb-16"
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
            >
              <h2 className="text-4xl font-bold text-white mb-6">Enterprise-Grade Security</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                We implement multiple layers of security controls to protect your data and ensure business continuity.
              </p>
            </motion.div>

<<<<<<< HEAD
            <div className='grid md:grid-cols-2 gap-8 mb-16'>
=======
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-white mb-6">Enterprise-Grade Security</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                We implement multiple layers of security controls to protect your data and ensure business continuity.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8 mb-16">
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
            <div className="grid md:grid-cols-2 gap-8 mb-16">
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
              {securityMeasures.map((measure, index) => (
                <motion.div
                  key={measure.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
<<<<<<< HEAD
<<<<<<< HEAD
                  className='bg-slate-800/50 rounded-2xl p-8 border border-white/10 hover:border-cyan-500/30 transition-colors duration-300'
=======
                  className="bg-slate-800/50 rounded-2xl p-8 border border-white/10 hover:border-cyan-500/30 transition-colors duration-300"
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
                >
                  <div className="flex items-center mb-6">
                    <measure.icon className="w-8 h-8 text-cyan-400 mr-4" />
                    <h3 className="text-2xl font-bold text-white">{measure.title}</h3>
                  </div>
                  
                  <ul className="space-y-3">
                    {measure.features.map((feature, featureIndex) => (
<<<<<<< HEAD
                      <li key={featureIndex} className='flex items-start'>
                        <CheckCircle className='w-5 h-5 text-green-400 mr-3 mt-0.5 flex-shrink-0' />
                        <span className='text-gray-300 leading-relaxed'>
                          {feature}
                        </span>
=======
                  className="bg-slate-800/50 rounded-2xl p-8 border border-white/10 hover:border-cyan-500/30 transition-colors duration-300"
                >
                  <div className="flex items-center mb-6">
                    <measure.icon className="w-8 h-8 text-cyan-400 mr-4" />
                    <h3 className="text-2xl font-bold text-white">{measure.title}</h3>
                  </div>
                  
                  <ul className="space-y-3">
                    {measure.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-green-400 mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-300 leading-relaxed">{feature}</span>
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
                      <li key={featureIndex} className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-green-400 mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-300 leading-relaxed">{feature}</span>
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>

            {/* Certifications */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
<<<<<<< HEAD
<<<<<<< HEAD
              className='bg-gradient-to-r from-cyan-900/20 to-blue-900/20 rounded-2xl p-8 border border-cyan-500/20 mb-16'
            >
              <h3 className='text-3xl font-bold text-white mb-6 text-center'>
                Security Certifications & Compliance
              </h3>

              <div className='grid md:grid-cols-5 gap-6'>
=======
              className="bg-gradient-to-r from-cyan-900/20 to-blue-900/20 rounded-2xl p-8 border border-cyan-500/20 mb-16"
            >
              <h3 className="text-3xl font-bold text-white mb-6 text-center">Security Certifications & Compliance</h3>
              
              <div className="grid md:grid-cols-5 gap-6">
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
              className="bg-gradient-to-r from-cyan-900/20 to-blue-900/20 rounded-2xl p-8 border border-cyan-500/20 mb-16"
            >
              <h3 className="text-3xl font-bold text-white mb-6 text-center">Security Certifications & Compliance</h3>
              
              <div className="grid md:grid-cols-5 gap-6">
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
                {certifications.map((cert, index) => (
                  <motion.div
                    key={cert.name}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
<<<<<<< HEAD
<<<<<<< HEAD
                    className='text-center p-4 bg-slate-800/50 rounded-xl border border-white/10'
                  >
                    <CheckCircle className='w-8 h-8 text-green-400 mx-auto mb-3' />
                    <h4 className='text-white font-semibold mb-1'>
                      {cert.name}
                    </h4>
                    <p className='text-cyan-400 text-sm'>{cert.status}</p>
=======
                    className="text-center p-4 bg-slate-800/50 rounded-xl border border-white/10"
                  >
                    <CheckCircle className="w-8 h-8 text-green-400 mx-auto mb-3" />
                    <h4 className="text-white font-semibold mb-1">{cert.name}</h4>
                    <p className="text-cyan-400 text-sm">{cert.status}</p>
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
                    className="text-center p-4 bg-slate-800/50 rounded-xl border border-white/10"
                  >
                    <CheckCircle className="w-8 h-8 text-green-400 mx-auto mb-3" />
                    <h4 className="text-white font-semibold mb-1">{cert.name}</h4>
                    <p className="text-cyan-400 text-sm">{cert.status}</p>
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Security Incident Response */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
<<<<<<< HEAD
<<<<<<< HEAD
              className='mb-16'
=======
              className="mb-16"
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
            >
              <h3 className="text-3xl font-bold text-white mb-6">Incident Response</h3>
              <div className="bg-slate-800/50 rounded-2xl p-8 border border-white/10">
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="text-white font-semibold mb-4 flex items-center">
                      <Eye className="w-5 h-5 text-cyan-400 mr-2" />
                      Detection & Response
                    </h4>
<<<<<<< HEAD
                    <ul className='space-y-2 text-gray-300'>
=======
              className="mb-16"
            >
              <h3 className="text-3xl font-bold text-white mb-6">Incident Response</h3>
              <div className="bg-slate-800/50 rounded-2xl p-8 border border-white/10">
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="text-white font-semibold mb-4 flex items-center">
                      <Eye className="w-5 h-5 text-cyan-400 mr-2" />
                      Detection & Response
                    </h4>
                    <ul className="space-y-2 text-gray-300">
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
                    <ul className="space-y-2 text-gray-300">
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
                      <li>• 24/7 security monitoring</li>
                      <li>• Automated threat detection</li>
                      <li>• Rapid incident response team</li>
                      <li>• Regular security drills</li>
                    </ul>
                  </div>
<<<<<<< HEAD
<<<<<<< HEAD

=======
                  
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
                  <div>
                    <h4 className="text-white font-semibold mb-4 flex items-center">
                      <Lock className="w-5 h-5 text-cyan-400 mr-2" />
                      Business Continuity
                    </h4>
<<<<<<< HEAD
                    <ul className='space-y-2 text-gray-300'>
=======
                  
                  <div>
                    <h4 className="text-white font-semibold mb-4 flex items-center">
                      <Lock className="w-5 h-5 text-cyan-400 mr-2" />
                      Business Continuity
                    </h4>
                    <ul className="space-y-2 text-gray-300">
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
                    <ul className="space-y-2 text-gray-300">
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
                      <li>• Disaster recovery plans</li>
                      <li>• Regular backup testing</li>
                      <li>• Redundant infrastructure</li>
                      <li>• Recovery time objectives (RTO)</li>
                    </ul>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Vulnerability Management */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
<<<<<<< HEAD
<<<<<<< HEAD
              className='mb-16'
=======
              className="mb-16"
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
            >
              <h3 className="text-3xl font-bold text-white mb-6">Vulnerability Management</h3>
              <div className="bg-slate-800/50 rounded-2xl p-8 border border-white/10">
                <p className="text-gray-300 leading-relaxed mb-6">
                  We maintain a proactive approach to identifying and addressing security vulnerabilities:
                </p>
                
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-cyan-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Eye className="w-8 h-8 text-cyan-400" />
                    </div>
                    <h4 className="text-white font-semibold mb-2">Regular Scanning</h4>
                    <p className="text-gray-300 text-sm">Continuous automated vulnerability scanning</p>
                  </div>
                  
                  <div className="text-center">
                    <div className="w-16 h-16 bg-cyan-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Shield className="w-8 h-8 text-cyan-400" />
                    </div>
                    <h4 className="text-white font-semibold mb-2">Penetration Testing</h4>
                    <p className="text-gray-300 text-sm">Annual third-party security assessments</p>
                  </div>
                  
                  <div className="text-center">
                    <div className="w-16 h-16 bg-cyan-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                      <CheckCircle className="w-8 h-8 text-cyan-400" />
                    </div>
<<<<<<< HEAD
                    <h4 className='text-white font-semibold mb-2'>
                      Rapid Remediation
                    </h4>
                    <p className='text-gray-300 text-sm'>
                      Quick patching and vulnerability resolution
                    </p>
=======
              className="mb-16"
            >
              <h3 className="text-3xl font-bold text-white mb-6">Vulnerability Management</h3>
              <div className="bg-slate-800/50 rounded-2xl p-8 border border-white/10">
                <p className="text-gray-300 leading-relaxed mb-6">
                  We maintain a proactive approach to identifying and addressing security vulnerabilities:
                </p>
                
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-cyan-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Eye className="w-8 h-8 text-cyan-400" />
                    </div>
                    <h4 className="text-white font-semibold mb-2">Regular Scanning</h4>
                    <p className="text-gray-300 text-sm">Continuous automated vulnerability scanning</p>
                  </div>
                  
                  <div className="text-center">
                    <div className="w-16 h-16 bg-cyan-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Shield className="w-8 h-8 text-cyan-400" />
                    </div>
                    <h4 className="text-white font-semibold mb-2">Penetration Testing</h4>
                    <p className="text-gray-300 text-sm">Annual third-party security assessments</p>
                  </div>
                  
                  <div className="text-center">
                    <div className="w-16 h-16 bg-cyan-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                      <CheckCircle className="w-8 h-8 text-cyan-400" />
                    </div>
                    <h4 className="text-white font-semibold mb-2">Rapid Remediation</h4>
                    <p className="text-gray-300 text-sm">Quick patching and vulnerability resolution</p>
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
                    <h4 className="text-white font-semibold mb-2">Rapid Remediation</h4>
                    <p className="text-gray-300 text-sm">Quick patching and vulnerability resolution</p>
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Contact Security Team */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
<<<<<<< HEAD
<<<<<<< HEAD
              className='bg-gradient-to-r from-red-900/20 to-orange-900/20 rounded-2xl p-8 border border-red-500/20'
=======
              className="bg-gradient-to-r from-red-900/20 to-orange-900/20 rounded-2xl p-8 border border-red-500/20"
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
            >
              <h3 className="text-3xl font-bold text-white mb-6 flex items-center">
                <Shield className="w-8 h-8 text-red-400 mr-4" />
                Report Security Issues
              </h3>
              
              <p className="text-gray-300 mb-6 leading-relaxed">
                If you discover a security vulnerability, please report it to our security team immediately: </p>
              
              <div className="grid md:grid-cols-3 gap-6">
                <div className="flex items-center">
                  <Mail className="w-5 h-5 text-red-400 mr-3" />
                  <div>
                    <p className="text-white font-semibold">Security Email</p>
                    <p className="text-gray-300">security@ziontechgroup.com</p>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <Phone className="w-5 h-5 text-red-400 mr-3" />
                  <div>
                    <p className="text-white font-semibold">Emergency Hotline</p>
                    <p className="text-gray-300">+1 (555) 123-HELP</p>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <Key className="w-5 h-5 text-red-400 mr-3" />
                  <div>
<<<<<<< HEAD
                    <p className='text-white font-semibold'>PGP Key</p>
                    <p className='text-gray-300'>Available on request</p>
=======
              className="bg-gradient-to-r from-red-900/20 to-orange-900/20 rounded-2xl p-8 border border-red-500/20"
            >
              <h3 className="text-3xl font-bold text-white mb-6 flex items-center">
                <Shield className="w-8 h-8 text-red-400 mr-4" />
                Report Security Issues
              </h3>
              
              <p className="text-gray-300 mb-6 leading-relaxed">
                If you discover a security vulnerability, please report it to our security team immediately: </p>
              
              <div className="grid md:grid-cols-3 gap-6">
                <div className="flex items-center">
                  <Mail className="w-5 h-5 text-red-400 mr-3" />
                  <div>
                    <p className="text-white font-semibold">Security Email</p>
                    <p className="text-gray-300">security@ziontechgroup.com</p>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <Phone className="w-5 h-5 text-red-400 mr-3" />
                  <div>
                    <p className="text-white font-semibold">Emergency Hotline</p>
                    <p className="text-gray-300">+1 (555) 123-HELP</p>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <Key className="w-5 h-5 text-red-400 mr-3" />
                  <div>
                    <p className="text-white font-semibold">PGP Key</p>
                    <p className="text-gray-300">Available on request</p>
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
                    <p className="text-white font-semibold">PGP Key</p>
                    <p className="text-gray-300">Available on request</p>
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        <EnhancedFooter />
      </div>
    </>
<<<<<<< HEAD
<<<<<<< HEAD
  );
=======
  )
}
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
  )
}
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
