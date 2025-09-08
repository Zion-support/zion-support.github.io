import React from 'react';
import Head from 'next/head';
import Layout from '../components/layout/Layout';

const SEO = dynamic(() => import('../src/components/SEO'), { ssr: false })
const PageTransition = dynamic(() => import('../src/components/PageTransition'), { ssr: false })

const CybersecurityPage: React.FC = () => {
  const services = [
    {
      icon: Shield,
      title: 'Security Assessment & Auditing',
      description: 'Comprehensive security evaluations to identify vulnerabilities and compliance gaps.',
      features: ['Penetration testing', 'Vulnerability scanning', 'Compliance audits', 'Risk assessments']
    },
    {
      icon: Lock,
      title: 'Identity & Access Management',
      description: 'Robust IAM solutions to control user access and protect sensitive data.',
      features: ['Multi-factor authentication', 'Single sign-on', 'Role-based access', 'Privileged access management']
    },
    {
      icon: Eye,
      title: 'Security Monitoring & SIEM',
      description: '24/7 security monitoring with advanced threat detection and incident response.',
      features: ['Real-time monitoring', 'Threat intelligence', 'Incident response', 'Forensic analysis']
    },
    {
      icon: AlertTriangle,
      title: 'Threat Detection & Response',
      description: 'Advanced threat hunting and automated response to security incidents.',
      features: ['Behavioral analytics', 'AI-powered detection', 'Automated response', 'Threat hunting']
    },
    {
      icon: Users,
      title: 'Security Training & Awareness',
      description: 'Comprehensive security education programs to build a security-conscious culture.',
      features: ['Phishing simulations', 'Security workshops', 'Compliance training', 'Awareness campaigns']
    },
    {
      icon: Database,
      title: 'Data Protection & Encryption',
      description: 'End-to-end data protection with advanced encryption and backup solutions.',
      features: ['Data encryption', 'Backup solutions', 'Data loss prevention', 'Privacy compliance']
    }
  ];

  return (
    <>
      <SEO title="Cybersecurity Services - Zion Tech Group"
        description="Comprehensive cybersecurity services including security assessments, data protection, monitoring, and incident response. Protect your business with our expert security solutions."
        keywords="cybersecurity, security assessment, data protection, threat monitoring, incident response, compliance"
        canonical="https://ziontechgroup.com/cybersecurity"
       />
      
      <PageTransition>
        <main className="min-h-screen bg-white">
          {/* Hero Section */}
          <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg: p x-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-center"
              >
                <h1 className="text-4xl md: tex t-6xl font-bold text-gray-900 mb-6">
                  Cybersecurity <span className="text-blue-600">Services</span>
                </h1>
                <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
                  Protect your business with comprehensive cybersecurity solutions including security assessments, data protection, and threat monitoring.
                </p>
                <div className="flex flex-col sm: fle x-row gap-4 justify-center">
                  <motion.a
                    href="#services"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold flex items-center gap-2"
                  >
                    <ArrowRight className="w-5 h-5"  />
                    Explore Services
                  </motion.a>
                  <motion.a
                    href="/contact"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-lg font-semibold flex items-center gap-2"
                  >
                    <ArrowRight className="w-5 h-5"  />
                    Get Started
                  </motion.a>
                </div>
              ))}
            </div>
          </section>

          {/* Services Grid */}
          <section id="services" className="py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg: p x-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-center mb-16"
              >
                <h2 className="text-3xl md: tex t-4xl font-bold text-gray-900 mb-4">
                  Our Cybersecurity Services
                </h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  Comprehensive security solutions to protect your business from cyber threats and ensure compliance.
                </p>
              </motion.div>

              <div className="grid grid-cols-1 md: gri d-cols-2 lg: gri d-cols-3 gap-8">
                {services.map((service, index) => (
                  <motion.div
                    key={service.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="bg-white rounded-xl shadow-lg hover: shadow-xl transition-shadow duration-300 overflow-hidden"
                  >
                    <div className="p-8">
                      <div className="flex items-center justify-between mb-4">
                        <div className="text-blue-600">
                          {service.icon}
                        </div>
                        <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                          {service.category}
                        </span>
                      </div>
                      
                      <h3 className="text-xl font-bold text-gray-900 mb-3">
                        {service.title}
                      </h3>
                      
                      <p className="text-gray-600 mb-6">
                        {service.description}
                      </p>
                      
                      <div className="mb-6">
                        <h4 className="font-semibold text-gray-900 mb-3">Key Features:</h4>
                        <ul className="space-y-2">
                          {service.features.map((feature, idx) => (
                            <li key={idx} className="flex items-center gap-2 text-sm text-gray-600">
                              <CheckCircle className="w-4 h-4 text-green-500"  />
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <div className="flex items-center justify-between text-sm text-gray-500 mb-6">
                        <span className="font-semibold text-green-600">{service.pricing}</span>
                        <span>{service.delivery}</span>
                      </div>
                      
                      <motion.button
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold flex items-center justify-center gap-2 hover: b g-blue-700 transition-colors"
                      >
                        <ArrowRight className="w-5 h-5"  />
                        Learn More
                      </motion.button>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* Compliance Standards */}
          <section className="bg-gray-50 py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg: p x-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-center mb-16"
              >
                <h2 className="text-3xl md: tex t-4xl font-bold text-gray-900 mb-4">
                  Compliance Standards
                </h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  We help you meet industry standards and regulatory requirements for data security.
                </p>
              </motion.div>

              <div className="grid grid-cols-2 md: gri d-cols-3 lg: gri d-cols-6 gap-8">
                {complianceStandards.map((standard, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="bg-white rounded-xl p-6 shadow-lg hover: shadow-xl transition-shadow duration-300 text-center"
                  >
                    <h3 className="text-lg font-bold text-gray-900 mb-2">
                      {standard.name}
                    </h3>
                    <p className="text-sm text-gray-600">
                      {standard.description}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg: p x-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-center"
              >
                <h2 className="text-3xl md: tex t-4xl font-bold text-gray-900 mb-6">
                  Secure Your Business Today
                </h2>
                <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
                  Don't wait for a security breach. Protect your business with our comprehensive cybersecurity solutions.
                </p>
                <div className="flex flex-col sm: fle x-row gap-4 justify-center">
                  <motion.a
                    href="/contact"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold flex items-center gap-2"
                  >
                    <ArrowRight className="w-5 h-5"  />
                    Get Started Today
                  </motion.a>
                  <motion.a
                    href="tel:+13024640950"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-lg font-semibold flex items-center gap-2"
                  >
                    <ArrowRight className="w-5 h-5"  />
                    Call Us: +1 302 464 0950
                  </motion.a>
                </div>
              </motion.div>
            </div>
          </section>
        </main>
      </PageTransition>
    </>
  )
}

export default CybersecurityPage