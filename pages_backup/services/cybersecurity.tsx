import Head from 'next/head';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Eye, Shield, Lock, AlertTriangle, CheckCircle, ArrowRight } from 'lucide-react';

const securityServices = [

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

  return (
    <Layout
      title="Cybersecurity Services - Zion Tech Group"
      description="Comprehensive cybersecurity services to protect your business from threats. Advanced security solutions, compliance, and 24/7 monitoring."
      keywords="cybersecurity, security services, data protection, threat monitoring, compliance, security audit">;
      <div className="min-h-screen bg-white">;
        {/* Hero Section */}

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

                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow p-6"
                >
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                    <service.icon className="w-6 h-6 text-blue-600" />

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