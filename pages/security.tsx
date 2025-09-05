<<<<<<< HEAD
import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Shield, Lock, Eye, Database, Users, AlertTriangle, CheckCircle, Clock } from 'lucide-react';
import Layout from '../components/Layout';
=======
<<<<<<< HEAD
import { motion } from 'framer-motion';
import Head from 'next/head';
import { Lock, Users, Shield, Eye, AlertTriangle, CheckCircle } from 'lucide-react';

const securityFeatures = [
  {
    title: 'Data Encryption',
    description: 'All data is encrypted in transit and at rest using industry-standard encryption protocols.',
    icon: Lock,
    color: 'from-blue-500 to-cyan-500',
    details: ['AES-256 encryption', 'TLS 1.3 for data in transit', 'End-to-end encryption', 'Key management']
  },
  {
    title: 'Access Control',
    description: 'Multi-factor authentication and role-based access control to protect sensitive data.',
    icon: Users,
    color: 'from-green-500 to-emerald-500',
    details: ['MFA required', 'Role-based permissions', 'Single sign-on (SSO)', 'Regular access reviews']
  },
  {
    title: 'Network Security',
    description: 'Advanced network security measures including firewalls and intrusion detection.',
    icon: Shield,
    color: 'from-purple-500 to-pink-500',
    details: ['Firewall protection', 'Intrusion detection', 'DDoS protection', 'Network monitoring']
  },
  {
    title: 'Monitoring & Logging',
    description: 'Comprehensive monitoring and logging of all system activities and security events.',
    icon: Eye,
    color: 'from-orange-500 to-red-500',
    details: ['Real-time monitoring', 'Security event logging', 'Audit trails', 'Alert systems']
  },
  {
    title: 'Compliance',
    description: 'Full compliance with industry standards and regulations including SOC 2, GDPR, and HIPAA.',
    icon: CheckCircle,
    color: 'from-indigo-500 to-blue-500',
    details: ['SOC 2 Type II', 'GDPR compliance', 'HIPAA compliance', 'Regular audits']
  },
  {
    title: 'Incident Response',
    description: 'Rapid response to security incidents with 24/7 monitoring and incident management.',
    icon: AlertTriangle,
    color: 'from-red-500 to-pink-500',
    details: ['24/7 monitoring', 'Incident response team', 'Automated alerts', 'Recovery procedures']
  }
];

export default function Security() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Head>
        <title>Security - Zion Tech Group</title>
        <meta name="description" content="Comprehensive security measures to protect your data and business" />
      </Head>

      <div className="container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Security & Compliance
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Your data security is our top priority. We implement industry-leading security measures to protect your business.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {securityFeatures.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex items-center mb-4">
                <div className={`p-3 rounded-lg bg-gradient-to-r ${feature.color} mr-4`}>
                  <feature.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900">{feature.title}</h3>
              </div>
              
              <p className="text-gray-600 mb-4">{feature.description}</p>
              
              <div className="mb-4">
                <h4 className="font-semibold text-gray-900 mb-2">Key Features:</h4>
                <ul className="space-y-1">
                  {feature.details.map((detail, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-600">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                      {detail}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
=======
>>>>>>> b00d294d536ffa13ab6811db6a392cfd8c423409

const securityFeatures = [
  {
    title: 'Data Encryption',
    description: 'All data is encrypted in transit and at rest using industry-standard encryption protocols',
    icon: Lock,
<<<<<<< HEAD
    details: ['AES-256 encryption', 'TLS 1.3 for data in transit', 'End-to-end encryption', 'Key management']
  },
  {
    title: 'Access Controls',
    description: 'Multi-factor authentication and role-based access controls ensure only authorized users can access your data',
    icon: Users,
    details: ['Multi-factor authentication', 'Role-based permissions', 'Single sign-on (SSO)', 'Session management']
  },
  {
    title: 'Security Monitoring',
    description: '24/7 security monitoring and threat detection to protect against cyber attacks',
    icon: Eye,
    details: ['Real-time monitoring', 'Threat detection', 'Incident response', 'Security alerts']
  },
  {
    title: 'Compliance',
    description: 'We maintain compliance with industry standards and regulations to protect your data',
    icon: Shield,
    details: ['SOC 2 Type II', 'ISO 27001', 'GDPR compliance', 'HIPAA compliance']
  },
  {
    title: 'Data Backup',
    description: 'Regular automated backups ensure your data is always protected and recoverable',
    icon: Database,
    details: ['Automated backups', 'Multiple backup locations', 'Point-in-time recovery', 'Data retention policies']
  },
  {
    title: 'Incident Response',
    description: 'Comprehensive incident response procedures to quickly address any security issues',
    icon: AlertTriangle,
    details: ['24/7 incident response', 'Security team on standby', 'Rapid containment', 'Post-incident analysis']
=======
    color: 'from-blue-500 to-cyan-500',
    details: ['AES-256 encryption', 'TLS 1.3 for data in transit', 'End-to-end encryption', 'Key management']
  },
  {
    title: 'Access Control',
    description: 'Multi-factor authentication and role-based access control to protect sensitive data',
    icon: Users,
    color: 'from-green-500 to-emerald-500',
    details: ['MFA required', 'Role-based permissions', 'Single sign-on (SSO)', 'Regular access reviews']
  },
  {
    title: 'Network Security',
    description: 'Advanced network security measures including firewalls and intrusion detection',
    icon: Shield,
    color: 'from-purple-500 to-pink-500',
    details: ['Web Application Firewall', 'DDoS protection', 'Intrusion detection', 'Network segmentation']
  },
  {
    title: 'Monitoring & Logging',
    description: 'Comprehensive security monitoring and audit logging for all activities',
    icon: Eye,
    color: 'from-orange-500 to-red-500',
    details: ['24/7 security monitoring', 'Real-time threat detection', 'Comprehensive audit logs', 'Incident response']
>>>>>>> b00d294d536ffa13ab6811db6a392cfd8c423409
  }
];

<<<<<<< HEAD
const securityStats = [
  { number: '99.9%', label: 'Uptime Guarantee' },
  { number: '24/7', label: 'Security Monitoring' },
  { number: '0', label: 'Security Breaches' },
  { number: '100%', label: 'Data Encryption' }
];
=======
const complianceStandards = [
  {
    name: 'SOC 2 Type II',
    description: 'Audited controls for security, availability, and confidentiality',
    status: 'Compliant',
    icon: CheckCircle,
    color: 'text-green-600'
  },
  {
    name: 'HIPAA',
    description: 'Healthcare data protection and privacy compliance',
    status: 'Compliant',
    icon: CheckCircle,
    color: 'text-green-600'
  },
  {
    name: 'GDPR',
    description: 'European data protection and privacy regulation',
    status: 'Compliant',
    icon: CheckCircle,
    color: 'text-green-600'
  },
  {
    name: 'ISO 27001',
    description: 'Information security management system standard',
    status: 'In Progress',
    icon: Clock,
    color: 'text-yellow-600'
  }
;];

const securityPractices = [;
  {}
    category: 'Data Protection,',
    practices: [;
      'Regular data backups with encryption,',
      'Secure data deletion procedures',',
      'Data minimization principles',',
      'Privacy by design approach'';
    ];
  },
  {}
    category: 'Infrastructure Security,',
    practices: [;
      'Regular security updates and patches,',
      'Secure configuration management',',
      'Vulnerability assessments',',
      'Penetration testing'';
    ];
  },
  {}
    category: 'Employee Security,',
    practices: [;
      'Background checks for all employees,',
      'Security awareness training',',
      'Confidentiality agreements',',
      'Regular security briefings'';
    ];
  },
  {}
    category: 'Incident Response,',
    practices: [;
      '24/7 security monitoring,',
      'Rapid incident response procedures',',
      'Regular security drills',',
      'Post-incident analysis and improvement'';
    ];
  }
;];

const securityMetrics = [;
  { label: 'Uptime, value: '99.9%, description: 'System availability' },',
  { label: 'Response Time, value: '< 1 min, description: 'Security incident response' },',
  { label: 'Audit Score, value: '98%, description: 'Last security audit' },',
  { label: 'Vulnerabilities, value: '0, description: 'Critical vulnerabilities' }',
;];
>>>>>>> b00d294d536ffa13ab6811db6a392cfd8c423409

export default function SecurityPage() {
  return (
    <Layout
      title="Security - Zion Tech Group"
      description="Learn about our comprehensive security measures and how we protect your data and systems."
      keywords="security, data protection, encryption, compliance, cybersecurity"
    >
      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
<<<<<<< HEAD
        <section className="relative bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white py-20 overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
            <div className="absolute top-40 right-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-2000"></div>
            <div className="absolute -bottom-8 left-20 w-72 h-72 bg-indigo-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-4000"></div>
          </div>
          
=======
        <section className="relative bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white py-20 overflow-hidden">"
          <div className="absolute inset-0">";
            <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>";
            <div className="absolute top-40 right-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-2000"></div>";
          </div>;

>>>>>>> b00d294d536ffa13ab6811db6a392cfd8c423409
          <div className="container mx-auto px-4 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Security & <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Protection</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Your security is our top priority. Learn about our comprehensive security measures and how we protect your data.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Security Stats */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {securityStats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">
                    {stat.number}
                  </div>
                  <div className="text-gray-600 font-medium">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Security Features */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Security Features
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                We implement multiple layers of security to protect your data and ensure business continuity.
              </p>
            </motion.div>

<<<<<<< HEAD
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {securityFeatures.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-6"
                >
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                      <feature.icon className="w-6 h-6 text-blue-600" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900">{feature.title}</h3>
                  </div>
                  
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {feature.description}
                  </p>
                  
                  <div className="space-y-2">
                    <h4 className="font-semibold text-gray-900 text-sm">Key Features:</h4>
                    <ul className="space-y-1">
                      {feature.details.map((detail, idx) => (
                        <li key={idx} className="flex items-center text-sm text-gray-600">
                          <CheckCircle className="w-3 h-3 text-green-500 mr-2 flex-shrink-0" />
                          {detail}
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
=======
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {securityFeatures.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  className="bg-white rounded-2xl shadow-xl p-8""
                >;
                  <div className="flex items-center mb-6">";
                    <div className={`w-16 h-16 bg-gradient-to-r ${feature.color} rounded-xl flex items-center justify-center mr-4`}>,
                      <feature.icon className="w-8 h-8 text-white" />";
                    </div>;
                    <div>;
                      <h3 className="text-2xl font-bold text-gray-900">{feature.title}</h3>"
                      <p className="text-gray-600">{feature.description}</p>"
                    </div>;
                  </div>;

                  <ul className="space-y-3">";
                    {feature.details.map((detail, detailIndex) => (,
                      <li key={detailIndex} className="flex items-center text-gray-600">"
                        <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />";
                        {detail}
                      </li>
                    ))}
                  </ul>,
                </motion.div>;
>>>>>>> b00d294d536ffa13ab6811db6a392cfd8c423409
              ))}
            </div>
          </div>
        </section>

        {/* Compliance Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Compliance & Certifications
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                We maintain compliance with industry standards and regulations to ensure your data is protected.
              </p>
            </motion.div>

<<<<<<< HEAD
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">SOC 2 Type II</h3>
                <p className="text-gray-600 text-sm">Service Organization Control 2 Type II compliance</p>
              </div>
=======
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {complianceStandards.map((standard, index) => (
                <motion.div
                  key={standard.name}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300""
                >;
                  <div className="flex items-center justify-between mb-4">";
                    <Database className="w-8 h-8 text-blue-600" />";
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${}
                      standard.status === 'Compliant' ? 'bg-green-100 text-green-600' : 'bg-yellow-100 text-yellow-600',
                    }`}>,
                      {standard.status}
                    </span>,
                  </div>;
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{standard.name}</h3>"
                  <p className="text-gray-600 text-sm">{standard.description}</p>"
                </motion.div>;
              ))}
            </div>,
          </div>;
        </section>;
>>>>>>> b00d294d536ffa13ab6811db6a392cfd8c423409

              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Lock className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">ISO 27001</h3>
                <p className="text-gray-600 text-sm">Information Security Management System</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Eye className="w-8 h-8 text-purple-600" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">GDPR</h3>
                <p className="text-gray-600 text-sm">General Data Protection Regulation compliance</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Database className="w-8 h-8 text-orange-600" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">HIPAA</h3>
                <p className="text-gray-600 text-sm">Health Insurance Portability and Accountability Act</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
          <div className="container mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
<<<<<<< HEAD
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Questions About Our Security?
              </h2>
              <p className="text-xl mb-8 max-w-2xl mx-auto">
                Our security team is available to answer any questions about our security measures and compliance.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="px-8 py-4 bg-white text-blue-600 rounded-lg hover:bg-gray-100 transition-all duration-300 font-semibold inline-flex items-center justify-center"
                >
                  Contact Security Team
                </Link>
                <Link
                  href="/compliance"
                  className="px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white hover:text-blue-600 transition-all duration-300 font-semibold"
                >
                  View Compliance Details
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </Layout>
=======
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16""
            >;
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">";
                Security <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Practices</span>";
              </h2>;
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">";
                Our comprehensive approach to security across all aspects of our operations;
              </p>;
            </motion.div>;

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {securityPractices.map((category, index) => (
                <motion.div
                  key={category.category}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="bg-white rounded-xl p-6 shadow-lg""
                >;
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{category.category}</h3>"
                  <ul className="space-y-3">";
                    {category.practices.map((practice, practiceIndex) => (,
                      <li key={practiceIndex} className="flex items-start text-gray-600">"
                        <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0 mt-0.5" />";
                        {practice}
                      </li>
                    ))}
                  </ul>,
                </motion.div>;
              ))}
            </div>,
          </div>;
        </section>;

        {/* Incident Response */}
        <section className="py-20 bg-white">"
          <div className="container mx-auto px-4">";
            <div className="max-w-4xl mx-auto">";
              <motion.div;
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-center mb-12""
              >;
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">";
                  Incident <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Response</span>";
                </h2>;
                <p className="text-xl text-gray-600">";
                  Our commitment to rapid and effective incident response;
                </p>;
              </motion.div>;

              <div className="bg-gradient-to-r from-red-50 to-orange-50 rounded-2xl p-8 border border-red-200">";
                <div className="flex items-center mb-6">";
                  <AlertTriangle className="w-8 h-8 text-red-600 mr-4" />";
                  <h3 className="text-2xl font-bold text-gray-900">Security Incident Response</h3>";
                </div>;
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">";
                  <div className="text-center">";
                    <div className="text-3xl font-bold text-red-600 mb-2">&lt; 1 min</div>";
                    <div className="text-gray-600">Detection Time</div>";
                  </div>;
                  <div className="text-center">";
                    <div className="text-3xl font-bold text-red-600 mb-2">15 min</div>";
                    <div className="text-gray-600">Response Time</div>";
                  </div>;
                  <div className="text-center">";
                    <div className="text-3xl font-bold text-red-600 mb-2">24/7</div>";
                    <div className="text-gray-600">Monitoring</div>";
                  </div>;
                </div>;
                <p className="text-gray-600 mt-6">";
                  Our security team is available 24/7 to respond to any security incidents. We have established;
                  procedures for rapid detection, containment, and resolution of security issues.,
                </p>;
              </div>;
            </div>;
          </div>;
        </section>;

        {/* Contact Section */}
        <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">"
          <div className="container mx-auto px-4 text-center">";
            <motion.div;
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
>>>>>>> main
>>>>>>> b00d294d536ffa13ab6811db6a392cfd8c423409
  );
}