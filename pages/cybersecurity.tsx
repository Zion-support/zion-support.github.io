import React from 'react';
import Head from 'next/head';
const Layout = ({ children }: { children: React.ReactNode }) => <>
  {children}
</>;

const SEO = dynamic(() => import('../src/components/SEO'), { ssr: false })
const PageTransition = dynamic(() => import('../src/components/PageTransition'), { ssr: false })

const CybersecurityPage: React.FC = () => {
  const services = [
    {
      icon: Shield,
      title: 'Security Assessment',
      description: 'Comprehensive security audits and vulnerability assessments to identify and mitigate risks.',
      features: ['Penetration Testing', 'Vulnerability Scanning', 'Security Audits', 'Risk Assessment']
    }, {
      icon: Lock,
      title: 'Data Protection',
      description: 'Advanced encryption and data protection solutions to safeguard your sensitive information.',
      features: ['Data Encryption', 'Backup Solutions', 'Access Controls', 'Data Loss Prevention']
    }, {
      icon: Eye,
      title: 'Monitoring & Detection',
      description: '24/7 security monitoring and threat detection to protect against cyber attacks.',
      features: ['SIEM Solutions', 'Threat Detection', 'Incident Response', 'Security Analytics']
    }, {
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

  const complianceFrameworks = [
    { name: 'SOC 2', description: 'Service Organization Control 2 compliance' }, { name: 'ISO 27001', description: 'Information security management systems' }, { name: 'GDPR', description: 'General Data Protection Regulation compliance' }, { name: 'HIPAA', description: 'Health Insurance Portability and Accountability Act' }, { name: 'PCI DSS', description: 'Payment Card Industry Data Security Standard' }, { name: 'NIST', description: 'National Institute of Standards and Technology framework' }
  ];

  const stats = [
    { number: '99.9%', label: 'Security Uptime', icon: Shield }, { number: '24/7', label: 'Monitoring', icon: Clock }, { number: '50+', label: 'Security Experts', icon: Users }, { number: '15+', label: 'Years Experience', icon: Award }
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

      {/* Services Section */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Comprehensive Security Solutions
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our cybersecurity services cover every aspect of your security needs, from assessment to incident response.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-gray-800/50 border border-gray-700 rounded-xl p-8 hover:border-red-500/50 transition-all duration-300">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-red-500/20 to-orange-500/20 rounded-lg flex items-center justify-center mr-4">
                    <service.icon className="w-6 h-6 text-red-400" />
                  </div>
                  <h3 className="text-2xl font-semibold">{service.title}</h3>
                </div>
                <p className="text-gray-300 mb-6">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-400">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-3" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Compliance Section */}
      <section className="py-20 bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Compliance & Standards
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We help you meet industry standards and regulatory requirements with our compliance expertise.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {complianceFrameworks.map((framework, index) => (
              <div key={index} className="bg-gray-900/50 border border-gray-700 rounded-lg p-6 text-center hover:border-red-500/50 transition-all duration-300">
                <h3 className="text-lg font-semibold text-white mb-2">{framework.name}</h3>
                <p className="text-gray-400 text-sm">{framework.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-red-900/20 to-orange-900/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Secure Your Business?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Don't wait for a security breach. Contact our cybersecurity experts today for a comprehensive security assessment.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="px-8 py-4 bg-gradient-to-r from-red-500 to-orange-500 text-white font-semibold rounded-lg hover:from-red-600 hover:to-orange-600 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-red-500/25"
            >
              Get Started Today
              <ArrowRight className="w-5 h-5 ml-2 inline" />
            </Link>
            <a
              href="tel:+13024640950"
              className="px-8 py-4 border border-gray-600 text-white font-semibold rounded-lg hover:bg-gray-800 transition-all duration-300 flex items-center justify-center"
            >
              <Phone className="w-5 h-5 mr-2" />
              Call Now
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )}