import React from 'react';
import Layout from "../../components/Layout";";
import { motion } from 'framer-motion';
import Layout from '../../components/Layout';
import { Eye, Shield, Lock, AlertTriangle } from 'lucide-react';
export default function CybersecurityPage() {
  const securityServices = [;
    {}
      title: "Security Assessment","
      description: "Comprehensive security evaluation of your systems","
      icon: Eye,
      features: ["Vulnerability Scanning", "Penetration Testing", "Risk Analysis"]"
    },
    {}
      title: "Threat Protection","
      description: "Advanced threat detection and prevention systems","
      icon: Shield,
      features: ["Real-time Monitoring", "AI-Powered Detection", "Incident Response"]"
    },
    {}
      title: "Data Encryption","
      description: "End-to-end encryption for sensitive data","
      icon: Lock,
      features: ["Data at Rest", "Data in Transit", "Key Management"]"
    },
    {}
      title: "Compliance","
      description: "Ensure compliance with industry standards","
      icon: AlertTriangle,
      features: ["GDPR", "HIPAA", "SOC 2", "ISO 27001"]"
    }
;  ];
  return (;
    <Layout );
      title="Cybersecurity Services - Zion Tech Group"";
      description="Advanced cybersecurity solutions to protect your business from evolving threats and ensure compliance."";
    >;
      <div className="min-h-screen bg-gray-50">";
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-red-900 via-purple-900 to-indigo-900 text-white py-20">"
          <div className="container mx-auto px-4">";
            <motion.div;
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center""
            >;
              <h1 className="text-4xl md:text-6xl font-bold mb-6">";
                Cybersecurity Services;
              </h1>;
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">";
                Protect your business with our comprehensive cybersecurity solutions. 
                Stay ahead of threats with advanced security measures and expert support.;
              </p>;
            </motion.div>;
          </div>;
        </section>;
        {/* Services Section */}
        <section className="py-20">"
          <div className="container mx-auto px-4">";
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">";
              {securityServices.map((service, index) => {}
                const IconComponent = service.icon;
                return (;
                  <motion.div);
                    key={index}
                    className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300""
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >,
                    <div className="text-red-600 mb-4">";
                      <IconComponent className="w-10 h-10" />";
                    </div>;
                    <h3 className="text-xl font-bold text-gray-900 mb-4">";
                      {service.title}
                    </h3>,
                    <p className="text-gray-600 mb-4">";
                      {service.description}
                    </p>,
                    <ul className="space-y-2">";
                      {service.features.map((feature, featureIndex) => (,
                        <li key={featureIndex} className="flex items-center text-sm text-gray-600">"
                          <CheckCircle className="w-4 h-4 text-green-500 mr-2" />";
                          {feature}
                        </li>,
                      ))}
                    </ul>,
                  </motion.div>;
                );
              })}
            </div>,
          </div>;
        </section>;
        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-red-600 to-purple-600 text-white">"
          <div className="container mx-auto px-4 text-center">";
            <h2 className="text-3xl md:text-4xl font-bold mb-6">";
              Secure Your Business Today;
            </h2>;
            <p className="text-xl mb-8 max-w-2xl mx-auto">";
              Don't wait for a security breach. Let our experts help you build a robust security framework.';
            </p>;
            <motion.a;
              href="/contact"";
              className="inline-flex items-center px-8 py-4 bg-white text-red-600 rounded-lg hover:bg-gray-100 transition-all duration-300 font-semibold"";
              whileHover={{ scale: 1.05 }}
            >,
              Get Security Assessment;
              <ArrowRight className="w-5 h-5 ml-2" />";
            </motion.a>;
          </div>;
        </section>;
      </div>;
    </Layout>;
import Layout from '../../components/Layout';
import { Shield, Lock, Eye, AlertTriangle, CheckCircle, ArrowRight } from 'lucide-react';
const features = [
  {
    icon: Shield,
    title: 'Security Assessment',
    description: 'Comprehensive security audits and vulnerability assessments'
  },
  {
    icon: Lock,
    title: 'Data Protection',
    description: 'Advanced encryption and data protection solutions'
  },
origin/cursor/integrate-build-improve-and-re-verify-c7b5
import Head from 'next/head';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Eye, Shield, Lock, AlertTriangle, CheckCircle, ArrowRight } from 'lucide-react';
import Head from 'next/head';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Eye, Shield, Lock, AlertTriangle, CheckCircle, ArrowRight } from 'lucide-react';

const securityServices = [
import Layout from "../../components/Layout";";
import { motion } from 'framer-motion';
import Layout from '../../components/Layout';
import { Eye, Shield, Lock, AlertTriangle } from 'lucide-react';
export default function CybersecurityPage() {
  const securityServices = [;
    {}
      title: "Security Assessment","
      description: "Comprehensive security evaluation of your systems","
      icon: Eye,
      features: ["Vulnerability Scanning", "Penetration Testing", "Risk Analysis"]"
    },
    {}
      title: "Threat Protection","
      description: "Advanced threat detection and prevention systems","
      icon: Shield,
      features: ["Real-time Monitoring", "AI-Powered Detection", "Incident Response"]"
    },
    {}
      title: "Data Encryption","
      description: "End-to-end encryption for sensitive data","
      icon: Lock,
      features: ["Data at Rest", "Data in Transit", "Key Management"]"
    },
    {}
      title: "Compliance","
      description: "Ensure compliance with industry standards","
      icon: AlertTriangle,
      features: ["GDPR", "HIPAA", "SOC 2", "ISO 27001"]"
    }
;  ];
  return (;
    <Layout );
      title="Cybersecurity Services - Zion Tech Group"";
      description="Advanced cybersecurity solutions to protect your business from evolving threats and ensure compliance."";
    >;
      <div className="min-h-screen bg-gray-50">";
    description: "Comprehensive security evaluation of your systems",
    icon: Eye,"
    features: ["Vulnerability scanning", "Penetration testing", "Security audit", "Risk assessment"],"
    pricing: "$2,000 - $10,000/project"
  },
  {"
    title: "Threat Detection","
    description: "AI-powered threat detection and response",
    icon: AlertTriangle,"
    features: ["Real-time monitoring", "AI threat detection", "Automated response", "Incident management"],"
    pricing: "$1,500 - $8,000/month"
  },
  {"
    title: "Data Protection","
    description: "Comprehensive data protection and encryption",
    icon: Lock,"
    features: ["Data encryption", "Access control", "Backup & recovery", "Compliance"],"
    pricing: "$1,000 - $5,000/month"
  },
  {"
    title: "Security Training","
    description: "Employee security awareness and training programs",
    icon: Shield,"
    features: ["Security training", "Phishing simulations", "Best practices", "Certification"],"
    pricing: "$500 - $2,000/month"
  }
];

export default function CybersecurityPage() {
ursor/fix-syntax-push-and-merge-to-main-40de
const benefits = [
  'Protection against cyber threats and attacks',
  'Compliance with industry regulations',
  'Reduced risk of data breaches',
  'Enhanced customer trust and confidence',
  'Lower insurance costs and liability',
  'Peace of mind with 24/7 monitoring'
];
export default function CybersecurityServices() {
ursor/add-new-services-and-deploy-updates-0462
ursor/fix-syntax-push-and-merge-to-main-40de
  return (
    <Layout
      title="Cybersecurity Services - Zion Tech Group"
      description="Comprehensive cybersecurity services to protect your business from threats. Advanced security solutions, compliance, and 24/7 monitoring."
      keywords="cybersecurity, security services, data protection, threat monitoring, compliance, security audit"
    >
      <div className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-red-900 via-purple-900 to-indigo-900 text-white py-20">"
          <div className="container mx-auto px-4">";
            <motion.div;
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center""
            >;
              <h1 className="text-4xl md:text-6xl font-bold mb-6">";
                Cybersecurity Services;
              </h1>;
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">";
                Protect your business with our comprehensive cybersecurity solutions.
                Stay ahead of threats with advanced security measures and expert support.;
              </p>;
            </motion.div>;
          </div>;
        </section>;
        {/* Services Section */}
        <section className="py-20">"
          <div className="container mx-auto px-4">";
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">";
              {securityServices.map((service, index) => {}
                const IconComponent = service.icon;
                return (;
                  <motion.div);
                    key={index}
                    className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300""
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >,
                    <div className="text-red-600 mb-4">";
                      <IconComponent className="w-10 h-10" />";
                    </div>;
                    <h3 className="text-xl font-bold text-gray-900 mb-4">";
                      {service.title}
                    </h3>,
                    <p className="text-gray-600 mb-4">";
                      {service.description}
                    </p>,
                    <ul className="space-y-2">";
                      {service.features.map((feature, featureIndex) => (,
                        <li key={featureIndex} className="flex items-center text-sm text-gray-600">"
                          <CheckCircle className="w-4 h-4 text-green-500 mr-2" />";
                          {feature}
                        </li>,
                      ))}
                    </ul>,
                  </motion.div>;
                );
              })}
            </div>,
          </div>;
        </section>;
        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-red-600 to-purple-600 text-white">"
          <div className="container mx-auto px-4 text-center">";
            <h2 className="text-3xl md:text-4xl font-bold mb-6">";
              Secure Your Business Today;
            </h2>;
            <p className="text-xl mb-8 max-w-2xl mx-auto">";
              Don't wait for a security breach. Let our experts help you build a robust security framework.';
            </p>;
            <motion.a;
              href="/contact"";
              className="inline-flex items-center px-8 py-4 bg-white text-red-600 rounded-lg hover:bg-gray-100 transition-all duration-300 font-semibold"";
              whileHover={{ scale: 1.05 }}
            >,
              Get Security Assessment;
              <ArrowRight className="w-5 h-5 ml-2" />";
            </motion.a>;
          </div>;
        </section>;
      </div>;
    </Layout>;
import Layout from '../../components/Layout';
import { Shield, Lock, Eye, AlertTriangle, CheckCircle, ArrowRight } from 'lucide-react';
const features = [
  {
    icon: Shield,
    title: 'Security Assessment',
    description: 'Comprehensive security audits and vulnerability assessments'
  },
  {
    icon: Lock,
    title: 'Data Protection',
    description: 'Advanced encryption and data protection solutions'
  },
  return (
    <Layout
      title="Cybersecurity Services - Zion Tech Group"
      description="Comprehensive cybersecurity services to protect your business from threats. Advanced security solutions, compliance, and 24/7 monitoring."
      keywords="cybersecurity, security services, data protection, threat monitoring, compliance, security audit"
    >
      <div className="min-h-screen bg-white">
        {/* Hero Section */}
origin/cursor/integrate-build-improve-and-re-verify-c7b5
const benefits = [
  'Protection against cyber threats and attacks',
  'Compliance with industry regulations',
  'Reduced risk of data breaches',
  'Enhanced customer trust and confidence',
  'Lower insurance costs and liability',
  'Peace of mind with 24/7 monitoring'
];
export default function CybersecurityServices() {
  return (
    <Layout
      title="Cybersecurity Services - Zion Tech Group"
      description="Comprehensive cybersecurity services to protect your business from threats. Advanced security solutions, compliance, and 24/7 monitoring."
      keywords="cybersecurity, security services, data protection, threat monitoring, compliance, security audit">;
      <div className="min-h-screen bg-white">;
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-red-600 to-orange-700 text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Cybersecurity Services
              </h1>
              <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
                Protect your business with comprehensive cybersecurity solutions.
Advanced threat protection, compliance, and 24/7 monitoring.
  return (
    <Layout
      title="Cybersecurity Services - Zion Tech Group"
      description="Comprehensive cybersecurity services to protect your business from threats. Advanced security solutions, compliance, and 24/7 monitoring."
      keywords="cybersecurity, security services, data protection, threat monitoring, compliance, security audit">;
      <div className="min-h-screen bg-white">;
        {/* Hero Section */}
<section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-20">
          <div className="max-w-7xl mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}"
              className="text-center"
            >"
              <h1 className="text-4xl md:text-6xl font-bold mb-6">Cybersecurity</h1>"
              <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
                Protect your business with our comprehensive cybersecurity solutions designed;
                to defend against evolving threats.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-white text-red-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                  Get Started
                </button>
                <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-red-600 transition-colors">
                  Security Assessment
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {securityServices.map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}

        {/* Services Grid */}"
        <section className="py-16 px-4">"
          <div className="max-w-7xl mx-auto">"
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {securityServices.map((service, index) => (
                <motion.div;
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}"
                  className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow p-6"
                >"
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">"
                    <service.icon className="w-6 h-6 text-blue-600" />
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow p-6"
                >
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                    <service.icon className="w-6 h-6 text-blue-600" />
ursor/fix-syntax-push-and-merge-to-main-40de
        {/* Features Section */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Cybersecurity Solutions
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Comprehensive security services designed to protect your business
                from evolving cyber threats and ensure regulatory compliance.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                  <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-6">
<feature.icon className="w-6 h-6 text-red-600" />
ursor/add-new-services-and-deploy-updates-0462
ursor/fix-syntax-push-and-merge-to-main-40de
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600">
                    {feature.description}
                  </p>
                </div>
                    <feature.icon className="w-6 h-6 text-red-600" />                  </div>
                  <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  </div>"
                  <h3 className="text-xl font-semibold mb-2">{service.title}</h3>"
                  <p className="text-gray-600 mb-4">{service.description}</p>"
                  <div className="space-y-2 mb-4">
                    {service.features.map((feature, featureIndex) => ("
                      <div key={featureIndex} className="flex items-center text-sm text-gray-600">"
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                        {feature}
                      </div>
                    ))}
                  </div>"
                  <div className="text-lg font-semibold text-blue-600 mb-4">{service.pricing}</div>
                  <Link"
                    href="/contact""
                    className="w-full inline-flex items-center justify-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                  >
                    Get Quote"
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                  Why Choose Our Cybersecurity Services?
                </h2>
                <p className="text-xl text-gray-600 mb-8">
                  Our cybersecurity experts provide comprehensive protection against
                  evolving threats while ensuring compliance with industry regulations.
                </p>
                <ul className="space-y-4">
                  {benefits.map((benefit, index) => (
                    <li key={index} className="flex items-start">
                      <CheckCircle className="w-6 h-6 text-green-500 mr-3 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-gradient-to-r from-red-600 to-orange-700 p-8 rounded-xl text-white">
                <h3 className="text-2xl font-bold mb-6">Ready to Secure Your Business?</h3>
                <p className="text-lg mb-6">
                  Let our cybersecurity experts help you implement comprehensive
                  security solutions that protect your business and data.
                </p>
                <button className="bg-white text-red-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors flex items-center">
                  Schedule Security Audit
                  <ArrowRight className="w-5 h-5 ml-2" />
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gray-900 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Protect Your Business?
            </h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              Contact our cybersecurity team to discuss your security requirements
              and discover how we can help protect your business from threats.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-red-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-red-700 transition-colors">
                Contact Security Team
              </button>
              <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-colors">
                Download Security Guide
              </button>
            </div>
          </div>
        </section>
      </div>

    </>
          <div className="max-w-7xl mx-auto px-4 text-center">
            <motion.div;
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >"
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Secure Your Business Today;
              </h2>"
              <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">'
                Let's discuss how our cybersecurity services can protect your business from threats.
              </p>"
              <div className="flex flex-wrap justify-center gap-4">
                <Link"
                  href="/contact""
                  className="inline-flex items-center px-8 py-3 bg-white text-blue-600 rounded-lg hover:bg-gray-100 transition-colors font-semibold"
                >
                  Get Started"
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
                <Link"
                  href="/security""
                  className="inline-flex items-center px-8 py-3 border-2 border-white text-white rounded-lg hover:bg-white hover:text-blue-600 transition-colors font-semibold"
                >
                  View Security;
                </Link>
              </div>
              <div className="bg-gradient-to-r from-red-600 to-orange-700 p-8 rounded-xl text-white">
                <h3 className="text-2xl font-bold mb-6">Ready to Secure Your Business?</h3>
                <p className="text-lg mb-6">
                  Let our cybersecurity experts help you implement comprehensive
                  security solutions that protect your business and data.
                </p>
                <button className="bg-white text-red-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors flex items-center">
                  Schedule Security Audit
                  <ArrowRight className="w-5 h-5 ml-2" />
                </button>
              </div>
            </div>
          </div>
        </section>
</div>
    </>
  );
}
import Head from 'next/head';
import { motion } from 'framer-motion';
import { Shield, Lock, Eye, Zap, Cpu, Database;
  ArrowRight, CheckCircle, Star, Users, Clock, TrendingUp
 } from 'lucide-react';
import EnhancedNavigation from '../../components/EnhancedNavigation';
import EnhancedFooter from '../../components/EnhancedFooter';
export default function CybersecurityServicesPage() {
  const services = null;
origin/cursor/automate-test-improve-and-merge-code-2533
import {
  Shield
  Lock
  Eye
  Zap
  Cpu
  Database
  ArrowRight
  CheckCircle
  Star
  Users
  Clock
  TrendingUp;
} from 'lucide-react';
import EnhancedNavigation from '../../components/EnhancedNavigation';
import EnhancedFooter from '../../components/EnhancedFooter';
export default function CybersecurityServicesPage() {
  const services = [

import React from 'react';
import Head from 'next / head';

import { motion } from 'framer-motion';

import {

  Shield,
  Lock,
  Eye,
  Zap,
  Cpu,
  Database,
  ArrowRight,
  CheckCircle,
  Star,
  Users,
  Clock,
  TrendingUp,

} from 'lucide-react';
import EnhancedNavigation from '../../components / EnhancedNavigation';
import EnhancedFooter from '../../components / EnhancedFooter';
export default /**
 * CybersecurityServicesPage - Function description
 */
function CybersecurityServicesPage() {
  const services = [;
    {
      title: 'Advanced Threat Detection'
      description: 'AI-powered threat detection and response systems'
      features: [
        'Real-time Monitoring'
        'Behavioral Analysis'
        'Automated Response'
        '24/7 Protection'
      ]
      price: 'From $8,000'
      icon: Eye
      color: 'from-red-500 to-orange-500'
    }
    {
      title: 'Quantum-Resistant Encryption'
      description: 'Future-proof security with quantum-resistant cryptography'
      features: [
        'Post-Quantum Algorithms'
        'Key Management'
        'Compliance Ready'
        'Future-Proof'
      ]
      price: 'From $12,000'
      icon: Lock
      color: 'from-purple-500 to-pink-500'
    }
    {
      title: 'Security Auditing & Compliance'
      description:
        'Comprehensive security assessments and compliance solutions'
      features: [
        'Penetration Testing'
        'Vulnerability Assessment'
        'SOC2 Compliance'
        'GDPR Ready'
      ]
      price: 'From $5,000'
      icon: Shield
      color: 'from-blue-500 to-cyan-500'
    }
    {
      title: 'Zero Trust Architecture'
      description: 'Modern security framework for distributed environments'
      features: [
        'Identity Verification'
        'Access Control'
        'Network Segmentation'
        'Continuous Monitoring'
      ]
      price: 'From $15,000'
      icon: Zap
      color: 'from-emerald-500 to-teal-500'
    }
  ];
  const stats = [
    { number: '99.99%', label: 'Threat Detection Rate', icon: Shield }
    { number: '24/7', label: 'Security Monitoring', icon: Eye }
    { number: '0', label: 'Security Breaches', icon: Lock }
    { number: '500+', label: 'Protected Systems', icon: CheckCircle }
  ];
  return (
    <div className='min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white'>
      <Head>
        <title>Cybersecurity Services - Zion Tech Group</title>
        <meta
          name='description'
          content='Advanced cybersecurity solutions from Zion Tech Group. AI-powered threat detection, quantum-resistant encryption, and comprehensive security services.'
        />
        <meta
          property='og:title'
          content='Cybersecurity Services - Zion Tech Group'
        />
        <meta
          property='og:description'
          content='Advanced cybersecurity solutions for comprehensive protection.'
        />
        <link
          rel='canonical'
          href='https://ziontechgroup.com/services/cybersecurity'
        />
      </Head>

      <EnhancedNavigation />
      {/* Hero Section */}
<section className='relative pt-32 pb-20 px-6'>
        <div className='max-w-7xl mx-auto text-center'>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
className='mb-8'
origin/cursor/automate-test-improve-and-merge-code-2533
          >
            <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-red-400 via-orange-400 to-red-400 bg-clip-text text-transparent mb-6">
              Cybersecurity
            </h1>
            <p className='text-xl md:text-2xl text-white/80 max-w-3xl mx-auto leading-relaxed'>
              Advanced security solutions that protect your digital assets and
              ensure business continuity
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
className='mb-12'
          >
            <p className='text-lg text-white/70 max-w-2xl mx-auto mb-8'>
              From AI-powered threat detection to quantum-resistant encryption
origin/cursor/automate-test-improve-and-merge-code-2533
              we provide comprehensive cybersecurity solutions that keep your
              business secure and compliant.
            <p className="text-xl md:text-2xl text-white/80 max-w-3xl mx-auto leading-relaxed">
              Advanced security solutions that protect your digital assets and ensure business continuity
            </p>
            <button className='px-8 py-4 bg-gradient-to-r from-red-600 to-orange-600 hover:from-red-700 hover:to-orange-700 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl flex items-center justify-center gap-2 mx-auto'>
              Secure Your Business
              <ArrowRight className='w-5 h-5' />
            </button>
          </motion.div>
        </div>
      </section>
            transition={{ duration: 0 && 0.8 }}
            className='mb-8'>;
            <h1 className='text-5xl md:text-7xl font-bold bg-gradient-to-r from-red-400 via-orange-400 to-red-400 bg-clip-text text-transparent mb-6'>;
              Cybersecurity;
            </h1>;
            <p className='text-xl md:text-2xl text-white/80 max-w-3xl mx-auto leading-relaxed'>;
              Advanced security solutions that protect your digital assets and;
              ensure business continuity            </p>;
          </motion && motion.div>;

          <motion&& motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0 && 0.8, delay: 0 && 0.2 }}
            className='mb-12'>;
            <p className='text-lg text-white/70 max-w-2xl mx-auto mb-8'>;
              From AI-powered threat detection to quantum-resistant encryption,;
              we provide comprehensive cybersecurity solutions that keep your;
              business secure and compliant.;
            </p>;
            <button className='px-8 py-4 bg-gradient-to-r from-red-600 to-orange-600 hover:from-red-700 hover:to-orange-700 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl flex items-center justify-center gap-2 mx-auto'>;
              Secure Your Business;
              <ArrowRight className='w-5 h-5' />            </button>;
          </motion && motion.div>;
        </div>;
      </section>;

      {/* Stats Section */}
<section className='py-16 px-6'>
        <div className='max-w-7xl mx-auto'>
          <div className='grid grid-cols-2 md:grid-cols-4 gap-8'>
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
className='text-center'
              >
                <div className='w-16 h-16 bg-gradient-to-br from-red-500/20 to-orange-500/20 rounded-2xl flex items-center justify-center mx-auto mb-4'>
                  <stat.icon className='w-8 h-8 text-orange-400' />
                </div>
                <div className='text-3xl font-bold text-white mb-2'>
                  {stat.number}
                </div>
                <div className='text-white/70'>{stat.label}</div>
              </motion.div>
            ))}
          </div>
origin/cursor/automate-test-improve-and-merge-code-2533
        </div>
      </section>
            initial={{ opacity: 0, y: 30 }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
            animate={{ opacity: 1, y: 0 }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
            transition={{ duration: 0.8, delay: 0.2 }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}

              >
                <div className="w-16 h-16 bg-gradient-to-br from-red-500/20 to-orange-500/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="w-8 h-8 text-orange-400" />
                </div>
                <div className="text-3xl font-bold text-white mb-2">{stat.number}</div>
                <div className="text-white/70">{stat.label}</div>
              </motion.div>
            ))}

          </div>;
        </div>;
      </section>;

      {/* Services Grid */}
<section className='py-20 px-6'>
        <div className='max-w-7xl mx-auto'>
          <motion.div
origin/cursor/automate-test-improve-and-merge-code-2533
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0 && 0.8 }}
            viewport={{ once: true }}
className='text-center mb-16'
origin/cursor/automate-test-improve-and-merge-code-2533
          >
            <h2 className="text-4xl font-bold text-white mb-6">Cybersecurity Services</h2>
            <p className="text-xl text-white/70 max-w-3xl mx-auto">
              Comprehensive security solutions designed to protect your business from evolving threats
            </p>
          </motion.div>

          <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
            {services.map((service, index) => (
origin/cursor/automate-test-improve-and-merge-code-2533
              <motion.div

            className='text-center mb-16'>;
            <h2 className='text-4xl font-bold text-white mb-6'>;
              Cybersecurity Services;
            </h2>;
            <p className='text-xl text-white/70 max-w-3xl mx-auto'>;
              Comprehensive security solutions designed to protect your business;
              from evolving threats;
            </p>;
          </motion && motion.div>;

          <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>            {services && services.map((service, index) => (;
              <motion&& motion.div
                key={service && service.title}

                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0 && 0.6, delay: index * 0 && 0.1 }}
                viewport={{ once: true }}
className='bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-xl border border-white/10 rounded-2xl p-8 hover:border-red-500/30 transition-all duration-300'
origin/cursor/automate-test-improve-and-merge-code-2533
              >
                <div className={`w-16 h-16 bg-gradient-to-br ${service.color} rounded-2xl flex items-center justify-center mb-6`}>
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className='text-2xl font-bold text-white mb-4'>
                  {service.title}
                </h3>
                <p className='text-white/70 mb-6'>{service.description}</p>
                <ul className='space-y-3 mb-6'>
                  {service.features.map(feature => (
                    <li
                      key={feature}
                      className='flex items-center text-white/80'
                    >
                      <CheckCircle className='w-5 h-5 text-orange-400 mr-3 flex-shrink-0' />
                      {feature}
                    </li>
                  ))}
                </ul>
<div className='flex items-center justify-between'>
                  <span className='text-2xl font-bold text-orange-400'>
                    {service.price}
                  </span>
                  <button className='px-6 py-3 bg-gradient-to-r from-red-600 to-orange-600 hover:from-red-700 hover:to-orange-700 rounded-full font-semibold text-white transition-all duration-300 transform hover:scale-105'>
origin/cursor/automate-test-improve-and-merge-code-2533
                    Get Started
                  </button>
                </div>
              </motion.div>
            ))  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}

          </div>;
      {/* CTA Section */}
<section className='py-20 px-6'>
        <div className='max-w-4xl mx-auto text-center'>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
<h2 className='text-4xl font-bold text-white mb-6'>
origin/cursor/automate-test-improve-and-merge-code-2533
              Ready to Secure Your Business?
            </h2>
            <p className="text-xl text-white/70 mb-8 max-w-2xl mx-auto">
              Let's discuss how our cybersecurity solutions can protect your digital assets and ensure business continuity.
            </p>
            <div className='flex flex-col sm:flex-row gap-4 justify-center'>
              <button className='px-8 py-4 bg-gradient-to-r from-red-600 to-orange-600 hover:from-red-700 hover:to-orange-700 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105'>
                Security Assessment
              </button>
              <button className='px-8 py-4 border border-white/20 hover:border-white/40 rounded-full font-semibold text-lg transition-all duration-300 backdrop-blur-sm bg-white/5 hover:bg-white/10'>
                Learn More
origin/cursor/automate-test-improve-and-merge-code-2533
              </button>
            </div>
          </motion.div>
        </div>
      </section>
      <EnhancedFooter />
    </div>
);

}</div> </div> </section> > <h2 className="text-4xl font-bold text-white mb-6" >Cybersecurity Services</h2> <p className="text-xl text-white/70 max-w-3xl mx-auto" > Comprehensive security solutions designed to protect your business from evolving threats </p> </motion.div> Get Started </button> </div> </motion.div>) ) 
origin/cursor/automate-test-improve-and-merge-code-2533
}</div> </div> </section> <motion.div initial= {
            transition={{ duration: 0 && 0.8 }}
            viewport={{ once: true }}>;
            <h2 className='text-4xl font-bold text-white mb-6'>;
              Ready to Secure Your Business?;
            </h2>;
            <p className='text-xl text-white/70 mb-8 max-w-2xl mx-auto'>;
              Let's discuss how our cybersecurity solutions can protect your;
              digital assets and ensure business continuity.;
            </p>;
            <div className='flex flex-col sm:flex-row gap-4 justify-center'>;
              <button className='px-8 py-4 bg-gradient-to-r from-red-600 to-orange-600 hover:from-red-700 hover:to-orange-700 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105'>;
                Security Assessment;
              </button>;
              <button className='px-8 py-4 border border-white/20 hover:border-white/40 rounded-full font-semibold text-lg transition-all duration-300 backdrop-blur-sm bg-white/5 hover:bg-white/10'>                Learn More;
              </button>;
            </div>;
          </motion && motion.div>;
        </div>;
      </section>;

      <EnhancedFooter />;
    </div>;
  ),;

}</div> </div> </section> > <h2 className="text-4xl font-bold text-white mb-6" >Cybersecurity Services</h2> <p className="text-xl text-white/70 max-w-3xl mx-auto" > Comprehensive security solutions designed to protect your business from evolving threats </p> </motion && motion.div> Get Started </button> </div> </motion && motion.div>) ) ;
}</div> </div> </section> <motion&& motion.div initial= {
  {
  opacity: 0, y: 30
}whileInView= {
  {
  opacity: 1, y: 0
}transition= {
  {
  duration: 0.8
}viewport= {
  {
  once: true 

}> <h2 className="text-4xl font-bold text-white mb-6" > Ready to Secure Your Business? </h2> <p className="text-xl text-white/70 mb-8 max-w-2xl mx-auto" > Let's discuss how our cybersecurity solutions can protect your digital assets and ensure business continuity. </p> Security Assessment </button> <button className="px-8 py-4 border border-white/20 hover:border-white/40 rounded-full font-semibold text-lg transition-all duration-300 backdrop-blur-sm bg-white/5 hover:bg-white/10" > Learn More </button> </div> </motion.div> </div> </section> <EnhancedFooter /> </div>)
origin/cursor/automate-test-improve-and-merge-code-2533
}'"
