<<<<<<< HEAD
import { motion } from 'framer-motion';
import Head from 'next/head';
import Layout from '../components/Layout';
<<<<<<< HEAD
import { Lock, Users, Shield, Eye, AlertTriangle, CheckCircle } from 'lucide-react';
=======
import { Shield, Lock, Eye, CheckCircle } from 'lucide-react';
>>>>>>> pr-11914
=======
import Head from 'next/head';
import { motion } from 'framer-motion';
import { Shield, Lock, Eye, CheckCircle, AlertTriangle, Users } from 'lucide-react';
import Layout from '../components/Layout';
>>>>>>> pr-11913

const securityFeatures = [
  {
    title: 'Data Encryption',
<<<<<<< HEAD
    description: 'All data is encrypted in transit and at rest using industry-standard encryption protocols',
<<<<<<< HEAD
=======
    description: 'All data is encrypted in transit and at rest using industry-standard encryption protocols.',
>>>>>>> pr-11913
    icon: Lock,
    details: [
      'AES-256 encryption for data at rest',
      'TLS 1.3 for data in transit',
<<<<<<< HEAD
      'End-to-end encryption for sensitive communications',
      'Key management with hardware security modules'
=======
      'End-to-end encryption for sensitive data',
      'Regular encryption key rotation'
>>>>>>> pr-11913
    ]
  },
  {
    title: 'Access Control',
<<<<<<< HEAD
    description: 'Multi-factor authentication and role-based access control to protect your systems',
=======
    description: 'Multi-factor authentication and role-based access controls to protect your systems.',
>>>>>>> pr-11913
    icon: Users,
    details: [
      'Multi-factor authentication (MFA)',
      'Role-based access control (RBAC)',
      'Single sign-on (SSO) integration',
      'Privileged access management'
    ]
  },
  {
    title: 'Threat Detection',
<<<<<<< HEAD
    description: 'Advanced threat detection and response capabilities to identify and mitigate security risks',
    icon: Shield,
    details: [
      'Real-time threat monitoring',
      'Behavioral analytics',
=======
    description: 'Advanced threat detection and response capabilities to identify and mitigate security risks.',
    icon: AlertTriangle,
    details: [
      'Real-time threat monitoring',
      'AI-powered anomaly detection',
>>>>>>> pr-11913
      'Automated incident response',
      'Security information and event management (SIEM)'
    ]
  },
  {
<<<<<<< HEAD
    title: 'Compliance',
    description: 'Meet industry standards and regulatory requirements with our compliance framework',
    icon: CheckCircle,
    details: [
      'SOC 2 Type II certification',
      'ISO 27001 compliance',
      'GDPR compliance',
      'HIPAA compliance for healthcare'
=======
    title: 'Compliance & Auditing',
    description: 'Comprehensive compliance monitoring and audit trails to meet regulatory requirements.',
    icon: CheckCircle,
    details: [
      'SOC 2 Type II compliance',
      'GDPR and CCPA compliance',
      'Regular security audits',
      'Comprehensive audit logging'
>>>>>>> pr-11913
    ]
  }
];

const securityStats = [
<<<<<<< HEAD
  { label: 'Security Incidents Prevented', value: '99.9%', icon: Shield },
  { label: 'Uptime Guarantee', value: '99.99%', icon: Lock },
  { label: 'Compliance Certifications', value: '15+', icon: CheckCircle },
  { label: 'Security Experts', value: '50+', icon: Users }
];

export default function SecurityPage() {
  return (
    <Layout
      title="Security - Zion Tech Group"
      description="Enterprise-grade security solutions to protect your data and infrastructure. Learn about our security measures and compliance standards."
      keywords="security, cybersecurity, data protection, compliance, encryption, threat detection"
    >
      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-red-900 via-orange-900 to-yellow-900 text-white py-20">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Enterprise Security
              </h1>
              <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
                Protecting your data and infrastructure with industry-leading security measures and compliance standards
=======
  { number: '99.9%', label: 'Uptime Guarantee' },
  { number: '24/7', label: 'Security Monitoring' },
  { number: '<1s', label: 'Threat Response Time' },
  { number: '100%', label: 'Compliance Rate' }
];

export default function Security() {
  return (
    <Layout>
      <Head>
        <title>Security - Zion Tech Group</title>
        <meta name="description" content="Learn about our comprehensive security measures and commitment to protecting your data and systems." />
      </Head>

      <main>
        <section className="bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 text-white py-20">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Security & Compliance
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
                Your security is our priority. Learn about our comprehensive security measures and compliance standards.
>>>>>>> pr-11913
              </p>
            </motion.div>
          </div>
        </section>

<<<<<<< HEAD
        {/* Security Stats */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {securityStats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <stat.icon className="w-8 h-8 text-red-600" />
                  </div>
                  <div className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
                  <div className="text-gray-600">{stat.label}</div>
                </motion.div>
              ))}
=======
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
                Security Features
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {securityFeatures.map((feature, index) => {
                  const IconComponent = feature.icon;
                  return (
                    <motion.div
                      key={index}
                      className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300"
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.8, delay: index * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <div className="flex items-start mb-6">
                        <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                          <IconComponent className="w-6 h-6 text-blue-600" />
                        </div>
                        <div>
                          <h3 className="text-xl font-bold text-gray-900 mb-2">{feature.title}</h3>
                          <p className="text-gray-600">{feature.description}</p>
                        </div>
                      </div>
                      
                      <ul className="space-y-2">
                        {feature.details.map((detail, detailIndex) => (
                          <li key={detailIndex} className="flex items-start text-sm text-gray-600">
                            <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                            {detail}
                          </li>
                        ))}
                      </ul>
                    </motion.div>
                  );
                })}
              </div>
>>>>>>> pr-11913
            </div>
          </div>
        </section>

<<<<<<< HEAD
        {/* Security Features */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Security Features
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Comprehensive security measures designed to protect your business from modern threats
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {securityFeatures.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow p-8"
                >
                  <div className="flex items-start mb-6">
                    <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mr-4">
                      <feature.icon className="w-6 h-6 text-red-600" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
                      <p className="text-gray-600">{feature.description}</p>
                    </div>
                  </div>
                  
                  <ul className="space-y-2">
                    {feature.details.map((detail, detailIndex) => (
                      <li key={detailIndex} className="flex items-center text-sm text-gray-600">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                        {detail}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Compliance Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Compliance & Certifications
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                We maintain the highest standards of security and compliance to protect your data
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-center"
              >
                <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-10 h-10 text-blue-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">SOC 2 Type II</h3>
                <p className="text-gray-600 text-sm">Security, availability, and confidentiality controls</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="text-center"
              >
                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-10 h-10 text-green-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">ISO 27001</h3>
                <p className="text-gray-600 text-sm">Information security management system</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-center"
              >
                <div className="w-20 h-20 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Lock className="w-10 h-10 text-purple-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">GDPR</h3>
                <p className="text-gray-600 text-sm">General Data Protection Regulation compliance</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="text-center"
              >
                <div className="w-20 h-20 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Eye className="w-10 h-10 text-orange-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">HIPAA</h3>
                <p className="text-gray-600 text-sm">Healthcare data protection compliance</p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Security Best Practices */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="bg-white rounded-xl shadow-lg p-8"
              >
                <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                  <AlertTriangle className="w-6 h-6 text-yellow-500 mr-3" />
                  Security Best Practices
                </h2>
                
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">For Organizations</h3>
                    <ul className="space-y-2 text-gray-600">
                      <li className="flex items-start">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-1" />
                        Implement multi-factor authentication for all accounts
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-1" />
                        Regular security training for employees
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-1" />
                        Keep all software and systems updated
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-1" />
                        Conduct regular security audits and assessments
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">For Individuals</h3>
                    <ul className="space-y-2 text-gray-600">
                      <li className="flex items-start">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-1" />
                        Use strong, unique passwords for each account
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-1" />
                        Enable two-factor authentication where available
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-1" />
                        Be cautious with email attachments and links
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-1" />
                        Regularly backup important data
                      </li>
                    </ul>
                  </div>
                </div>
=======
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
                Security by the Numbers
              </h2>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                {securityStats.map((stat, index) => (
                  <motion.div
                    key={index}
                    className="text-center"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className="text-4xl md:text-5xl font-bold text-blue-600 mb-2">
                      {stat.number}
                    </div>
                    <div className="text-gray-600 font-medium">
                      {stat.label}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <motion.div
                className="bg-white rounded-xl shadow-lg p-8 text-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Shield className="w-8 h-8 text-green-600" />
                </div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Security First Approach
                </h2>
                <p className="text-lg text-gray-600 mb-8">
                  We believe security should be built into every aspect of our solutions, not added as an afterthought. 
                  Our security-first approach ensures your data and systems are protected at every level.
                </p>
                <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors duration-300">
                  Learn More About Our Security
                </button>
>>>>>>> pr-11913
              </motion.div>
            </div>
          </div>
        </section>
<<<<<<< HEAD

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-red-600 to-orange-600 text-white">
          <div className="container mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Secure Your Business Today
              </h2>
              <p className="text-xl mb-8 max-w-2xl mx-auto">
                Get a comprehensive security assessment and learn how to protect your organization from modern threats.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="px-8 py-4 bg-white text-red-600 rounded-lg hover:bg-gray-100 transition-all duration-300 font-semibold">
                  Request Security Audit
                </button>
                <button className="px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white hover:text-red-600 transition-all duration-300 font-semibold">
                  Download Security Guide
                </button>
              </div>
            </motion.div>
=======
    icon: Lock
  },
  {
    title: 'Access Control',
    description: 'Multi-factor authentication and role-based access control for enhanced security',
    icon: Shield
  }
];

export default function SecurityPage() {
  return (
    <Layout title="Security - Zion Tech Group">
      <div className="min-h-screen bg-gray-50">
        <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Security</h1>
            <p className="text-xl text-blue-100">Protecting your data and systems</p>
>>>>>>> pr-11914
          </div>
        </section>
      </div>
=======
      </main>
>>>>>>> pr-11913
    </Layout>
  );
}
