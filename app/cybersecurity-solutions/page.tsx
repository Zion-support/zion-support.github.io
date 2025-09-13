import React from 'react';
import SEO from '../../components/SEO';
import ErrorBoundary from '../../components/ErrorBoundary';
import { motion } from 'framer-motion';
import { ArrowRight, Shield, Lock, Eye, AlertTriangle, CheckCircle, Star, Zap } from 'lucide-react';
import Link from 'next/link';

const securityFeatures = [
  {
    icon: Shield,
    title: "Advanced Threat Detection",
    description: "AI-powered threat detection that identifies and neutralizes security threats in real-time before they can cause damage.",
    benefits: ["90% faster threat detection", "99.9% accuracy rate", "Real-time monitoring"]
  },
  {
    icon: Lock,
    title: "Zero Trust Architecture",
    description: "Implement a zero-trust security model that verifies every user and device, ensuring maximum protection.",
    benefits: ["Complete access control", "Identity verification", "Least privilege access"]
  },
  {
    icon: Eye,
    title: "Continuous Monitoring",
    description: "24/7 security monitoring and incident response to ensure your systems are always protected.",
    benefits: ["24/7 surveillance", "Instant alerts", "Automated response"]
  },
  {
    icon: AlertTriangle,
    title: "Compliance Management",
    description: "Stay compliant with industry regulations including SOC 2, ISO 27001, GDPR, and HIPAA.",
    benefits: ["Automated compliance", "Regular audits", "Documentation"]
  }
];

const securityServices = [
  {
    name: "Security Assessment",
    description: "Comprehensive security evaluation of your current infrastructure and systems.",
    features: ["Vulnerability scanning", "Penetration testing", "Risk assessment", "Compliance review"],
    price: "From $2,500",
    duration: "2-4 weeks"
  },
  {
    name: "Managed Security Services",
    description: "Ongoing security monitoring and management with our expert security team.",
    features: ["24/7 monitoring", "Incident response", "Security updates", "Regular reports"],
    price: "From $899/month",
    duration: "Ongoing"
  },
  {
    name: "Security Implementation",
    description: "Complete implementation of enterprise-grade security solutions and protocols.",
    features: ["Firewall setup", "Identity management", "Encryption", "Backup systems"],
    price: "From $5,000",
    duration: "4-8 weeks"
  }
];

const threatStats = [
  { label: "Threats Blocked Daily", value: "10,000+", icon: Shield },
  { label: "Response Time", value: "< 5 min", icon: Zap },
  { label: "Detection Accuracy", value: "99.9%", icon: Eye },
  { label: "Compliance Rate", value: "100%", icon: CheckCircle }
];

export default function CybersecuritySolutionsPage() {
  return (
    <ErrorBoundary>
      <SEO
        title="Cybersecurity Solutions - Advanced Security Protection for Your Business"
        description="Protect your business with our advanced cybersecurity solutions. 99.9% threat detection accuracy, 24/7 monitoring, and compliance with SOC 2, ISO 27001, GDPR, and HIPAA."
        keywords="cybersecurity, threat detection, security monitoring, compliance, SOC 2, ISO 27001, GDPR, HIPAA, zero trust, security assessment"
        url="/cybersecurity-solutions"
      />
      
      <div className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="relative py-20 bg-gradient-to-br from-red-900 via-purple-900 to-indigo-900 text-white overflow-hidden">
          {/* Background Elements */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute -top-40 -right-40 w-80 h-80 bg-red-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
            <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
          </div>
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                <div className="inline-flex items-center bg-gradient-to-r from-red-500 to-purple-500 rounded-full px-6 py-2 mb-6">
                  <Shield className="w-4 h-4 mr-2" />
                  <span className="text-sm font-semibold">ADVANCED CYBERSECURITY</span>
                </div>
                
                <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                  Protect Your Business with
                  <span className="bg-gradient-to-r from-yellow-400 to-red-400 bg-clip-text text-transparent"> Military-Grade Security</span>
                </h1>
                
                <p className="text-xl text-gray-200 mb-8 leading-relaxed">
                  Defend against cyber threats with our advanced security solutions. 99.9% threat detection accuracy, 
                  24/7 monitoring, and full compliance with industry standards.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link
                    href="/contact"
                    className="bg-gradient-to-r from-red-500 to-purple-600 hover:from-red-600 hover:to-purple-700 text-white px-8 py-4 rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 flex items-center justify-center"
                  >
                    <Shield className="w-5 h-5 mr-2" />
                    Get Security Assessment
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Link>
                  
                  <Link
                    href="/case-studies"
                    className="border-2 border-white/30 hover:border-white/60 text-white px-8 py-4 rounded-xl font-semibold text-lg backdrop-blur-sm hover:bg-white/10 transition-all duration-300 flex items-center justify-center"
                  >
                    <Eye className="w-5 h-5 mr-2" />
                    View Security Cases
                  </Link>
                </div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="relative"
              >
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                  <h3 className="text-2xl font-bold mb-6">Security Metrics</h3>
                  <div className="grid grid-cols-2 gap-4">
                    {threatStats.map((stat, index) => (
                      <div key={index} className="bg-white/20 rounded-lg p-4 text-center">
                        <stat.icon className="w-8 h-8 mx-auto mb-2 text-yellow-400" />
                        <div className="text-2xl font-bold text-white mb-1">{stat.value}</div>
                        <div className="text-xs text-gray-200">{stat.label}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Threat Landscape Section */}
        <section className="py-20 bg-red-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                The Cybersecurity Threat is Real
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Cyber attacks are increasing exponentially. Don't wait until it's too late to protect your business.
              </p>
            </motion.div>
            
            <div className="grid md:grid-cols-3 gap-8 mb-16">
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl shadow-lg p-8 text-center"
              >
                <div className="text-4xl font-bold text-red-600 mb-2">43%</div>
                <div className="text-lg font-semibold text-gray-900 mb-2">of cyber attacks target small businesses</div>
                <div className="text-gray-600">Small businesses are increasingly targeted due to weaker security measures</div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl shadow-lg p-8 text-center"
              >
                <div className="text-4xl font-bold text-red-600 mb-2">$4.45M</div>
                <div className="text-lg font-semibold text-gray-900 mb-2">average cost of a data breach</div>
                <div className="text-gray-600">The financial impact of cyber attacks continues to rise year over year</div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl shadow-lg p-8 text-center"
              >
                <div className="text-4xl font-bold text-red-600 mb-2">287 days</div>
                <div className="text-lg font-semibold text-gray-900 mb-2">average time to identify a breach</div>
                <div className="text-gray-600">Most breaches go undetected for months, causing extensive damage</div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Security Features Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Comprehensive Security Protection
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Our multi-layered security approach provides complete protection against all types of cyber threats.
              </p>
            </motion.div>
            
            <div className="grid lg:grid-cols-2 gap-8">
              {securityFeatures.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-gray-50 rounded-2xl p-8 hover:shadow-lg transition-all duration-300"
                >
                  <div className="flex items-start space-x-4">
                    <div className="bg-gradient-to-r from-red-500 to-purple-600 rounded-xl p-3">
                      <feature.icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                      <p className="text-gray-600 mb-4">{feature.description}</p>
                      <ul className="space-y-2">
                        {feature.benefits.map((benefit, benefitIndex) => (
                          <li key={benefitIndex} className="flex items-center text-sm text-gray-600">
                            <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
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

        {/* Services Section */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Our Security Services
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Choose from our comprehensive range of cybersecurity services designed to protect your business.
              </p>
            </motion.div>
            
            <div className="grid lg:grid-cols-3 gap-8">
              {securityServices.map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-all duration-300"
                >
                  <div className="text-center mb-6">
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">{service.name}</h3>
                    <p className="text-gray-600 mb-4">{service.description}</p>
                    <div className="text-3xl font-bold text-red-600 mb-2">{service.price}</div>
                    <div className="text-sm text-gray-500">{service.duration}</div>
                  </div>
                  
                  <ul className="space-y-3 mb-8">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center">
                        <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <Link
                    href="/contact"
                    className="block w-full bg-gradient-to-r from-red-600 to-purple-600 hover:from-red-700 hover:to-purple-700 text-white text-center py-3 rounded-xl font-semibold transition-all duration-300"
                  >
                    Get Started
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Compliance Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                  Stay Compliant with Industry Standards
                </h2>
                <p className="text-xl text-gray-600 mb-8">
                  Our security solutions ensure compliance with major industry standards and regulations, 
                  giving you peace of mind and protecting your business from legal and financial risks.
                </p>
                
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-gray-50 rounded-lg p-4 text-center">
                    <div className="text-2xl font-bold text-blue-600 mb-2">SOC 2</div>
                    <div className="text-sm text-gray-600">Service Organization Control</div>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-4 text-center">
                    <div className="text-2xl font-bold text-green-600 mb-2">ISO 27001</div>
                    <div className="text-sm text-gray-600">Information Security Management</div>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-4 text-center">
                    <div className="text-2xl font-bold text-purple-600 mb-2">GDPR</div>
                    <div className="text-sm text-gray-600">General Data Protection Regulation</div>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-4 text-center">
                    <div className="text-2xl font-bold text-red-600 mb-2">HIPAA</div>
                    <div className="text-sm text-gray-600">Health Insurance Portability</div>
                  </div>
                </div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="bg-gradient-to-br from-red-50 to-purple-50 rounded-2xl p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">Security Certifications</h3>
                  <div className="space-y-4">
                    <div className="flex items-center">
                      <CheckCircle className="w-6 h-6 text-green-500 mr-3" />
                      <span className="text-gray-700">Certified Security Professionals</span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="w-6 h-6 text-green-500 mr-3" />
                      <span className="text-gray-700">Regular Security Audits</span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="w-6 h-6 text-green-500 mr-3" />
                      <span className="text-gray-700">Continuous Monitoring</span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="w-6 h-6 text-green-500 mr-3" />
                      <span className="text-gray-700">Incident Response Planning</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-red-600 to-purple-600 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Don't Wait for a Cyber Attack
              </h2>
              <p className="text-xl text-red-100 mb-8 max-w-3xl mx-auto">
                Protect your business today with our comprehensive cybersecurity solutions. 
                Get a free security assessment and discover potential vulnerabilities.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="bg-white text-red-600 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-gray-100 transition-colors flex items-center justify-center"
                >
                  <Shield className="w-5 h-5 mr-2" />
                  Get Free Security Assessment
                </Link>
                
                <Link
                  href="/case-studies"
                  className="border-2 border-white/30 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-white/10 transition-colors flex items-center justify-center"
                >
                  <Eye className="w-5 h-5 mr-2" />
                  View Security Cases
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </ErrorBoundary>
  );
}