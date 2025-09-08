import { motion } from 'framer-motion';
import Head from 'next/head';
import Layout from '../components/Layout';
import { Lock, Users, Shield, Eye, AlertTriangle, CheckCircle } from 'lucide-react';

export default function Security() {
const contact = { phone: '+1 302 464 0950', email: 'kleber@ziontechgroup.com', address: '364 E Main St STE 1008 Middletown DE 19709', site: 'https://ziontechgroup.com'
  };
  const securityMeasures = [
    {
      title: "Data Encryption",
      description: "All data is encrypted both in transit and at rest using industry-standard encryption protocols",
      icon: "🔐",
      details: [
        "AES-256 encryption for data at rest",
        "TLS 1.3 for data in transit",
        "End-to-end encryption for sensitive communications",
        "Regular encryption key rotation"
      ]
    },
    {
      title: "Access Control",
      description: "Multi-layered access control systems ensure only authorized personnel can access sensitive information",
      icon: "🔑",
      details: [
        "Multi-factor authentication (MFA)",
        "Role-based access control (RBAC)",
        "Principle of least privilege",
        "Regular access reviews and audits"
      ]
    },
    {
      title: "Network Security",
      description: "Advanced network security measures protect against external threats and unauthorized access",
      icon: "🛡️",
      details: [
        "Firewall protection and intrusion detection",
        "DDoS protection and mitigation",
        "Network segmentation and isolation",
        "Continuous network monitoring"
      ]
    },
    {
      title: "Compliance & Auditing",
      description: "Regular compliance audits and security assessments ensure adherence to industry standards",
      icon: "📋",
      details: [
        "SOC 2 Type II compliance",
        "ISO 27001 certification",
        "Regular penetration testing",
        "Third-party security audits"
      ]
    }
  ];

  const certifications = [
    { name: "SOC 2 Type II", description: "Security, availability, and confidentiality controls" },
    { name: "ISO 27001", description: "Information security management system" },
    { name: "HIPAA Compliant", description: "Healthcare data protection standards" },
    { name: "GDPR Compliant", description: "European data protection regulations" },
    { name: "PCI DSS", description: "Payment card industry security standards" },
    { name: "NIST Framework", description: "Cybersecurity framework compliance" }
  ];

  const securityFeatures = [
    "24/7 Security Monitoring",
    "Automated Threat Detection",
    "Incident Response Team",
    "Regular Security Updates",
    "Employee Security Training",
    "Vulnerability Management",
    "Data Backup & Recovery",
    "Business Continuity Planning"
  ];

export default function SecurityPage() {
  return (
    <>
      <Head>
        <title>Security - Zion Tech Group | Information Security & Data Protection</title>
        <meta name="description" content="Learn about Zion Tech Group's comprehensive security measures, data protection policies, and compliance certifications." />
        <meta name="keywords" content="security, data protection, encryption, compliance, SOC 2, ISO 27001, cybersecurity, privacy" />
        <link rel="canonical" href={`${contact.site}/security`} />
        <meta property="og:title" content="Security - Zion Tech Group | Information Security & Data Protection" />
        <meta property="og:description" content="Learn about Zion Tech Group's comprehensive security measures, data protection policies, and compliance certifications." />
        <meta property="og:url" content={`${contact.site}/security`} />
        <meta property="og:type" content="website" />
      </Head>

      <div style={{ minHeight: '100vh', background: 'white' }}>
        <div style={{ maxWidth: 1200, margin: '40px 20px' }}>
          <div style={{ textAlign: 'center', marginBottom: 60 }}>
            <h1 style={{ 
              fontSize: '3rem',
              fontWeight: 800, 
              marginBottom: 20,
              background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}>
              Security & Compliance
            </h1>
            <p style={{ fontSize: '1.2rem', color: maxWidth, 600, margin: '0 auto' }}>
              Your data security is our top priority. We implement industry-leading security measures and maintain strict compliance with global standards.
            </p>
          </div>
        </section>

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
            </div>
          </div>
        </section>

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
          </section>

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
          </section>

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
              </motion.div>
            </div>
          </div>
        </section>

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

              <div className="bg-white/5 border border-white/10 rounded-xl p-6">
                <h3 className="text-xl font-semibold mb-4 text-fuchsia-400">Data Protection</h3>
                <ul className="space-y-2 text-white/70">
                  <li>• Data encryption at rest and in transit</li>
                  <li>• Regular security audits and penetration testing</li>
                  <li>• Secure data backup and recovery procedures</li>
                  <li>• Data retention and deletion policies</li>
                  <li>• Privacy by design principles</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Security Certifications */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-8 text-center">Security Certifications</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-400/30 rounded-xl p-6 text-center">
                <h3 className="text-xl font-semibold mb-2">SOC 2 Type II</h3>
                <p className="text-white/70">Service Organization Control 2 compliance for security, availability, and confidentiality.</p>
              </div>
              <div className="bg-gradient-to-r from-fuchsia-500/10 to-purple-500/10 border border-fuchsia-400/30 rounded-xl p-6 text-center">
                <h3 className="text-xl font-semibold mb-2">ISO 27001</h3>
                <p className="text-white/70">International standard for information security management systems.</p>
              </div>
              <div className="bg-gradient-to-r from-green-500/10 to-emerald-500/10 border border-green-400/30 rounded-xl p-6 text-center">
                <h3 className="text-xl font-semibold mb-2">GDPR</h3>
                <p className="text-white/70">General Data Protection Regulation compliance for EU data protection.</p>
              </div>
            </div>
          </section>

          {/* Contact Security Team */}
          <section className="mb-12">
            <div className="bg-gradient-to-r from-red-500/10 to-orange-500/10 border border-red-400/30 rounded-xl p-8 text-center">
              <h2 className="text-2xl font-semibold mb-4 text-red-400">Report Security Issues</h2>
              <p className="text-white/80 mb-6">
                If you discover a security vulnerability or have security concerns, please report them immediately to our security team.
              </p>
              <div className="space-y-2 text-white/70">
                <p>Email: security@zion.tech</p>
                <p>Security Hotline: +1-800-ZION-SEC</p>
                <p>Response Time: Within 24 hours</p>
              </div>
            </div>
          </section>

          {/* Navigation */}
          <div className="mt-12 text-center">
            <Link href="/contact" className="px-6 py-3 bg-cyan-400 hover:bg-cyan-300 text-black font-semibold rounded-lg transition-colors mr-4">
              Contact Security Team
            </Link>
            <Link href="/privacy" className="px-6 py-3 border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black font-semibold rounded-lg transition-colors">
              Privacy Policy
            </Link>
          </div>
        </main>
      </div>
    </Layout>
  );
}
