import * as React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Eye, Shield, Lock, AlertTriangle, CheckCircle, ArrowRight } from 'lucide-react';

const securityServices = [
  {
    title: "Security Assessment",
    description: "Comprehensive security evaluation of your systems",
    icon: Eye,
    features: ["Vulnerability scanning", "Penetration testing", "Security audit", "Risk assessment"],
    pricing: "$2,000 - $10,000/project"
  },
  {
    title: "Threat Detection",
    description: "AI-powered threat detection and response",
    icon: AlertTriangle,
    features: ["Real-time monitoring", "AI threat detection", "Automated response", "Incident management"],
    pricing: "$1,500 - $8,000/month"
  },
  {
    title: "Data Protection",
    description: "Comprehensive data protection and encryption",
    icon: Lock,
    features: ["Data encryption", "Access control", "Backup & recovery", "Compliance"],
    pricing: "$1,000 - $5,000/month"
  },
  {
    title: "Security Training",
    description: "Employee security awareness and training programs",
    icon: Shield,
    features: ["Security training", "Phishing simulations", "Best practices", "Certification"],
    pricing: "$500 - $2,000/month"
  }
];

export default function CybersecurityPage() {
  return (
    <>
      <Head>
        <title>Cybersecurity Services - Zion Tech Group</title>
        <meta name="description" content="Comprehensive cybersecurity services including threat detection, data protection, security assessment, and training programs." />
      </Head>

      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-20">
          <div className="max-w-7xl mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-6">Cybersecurity</h1>
              <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
                Protect your business with our comprehensive cybersecurity solutions designed 
                to defend against evolving threats.
              </p>
            </motion.div>
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
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <div className="space-y-2 mb-4">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center text-sm text-gray-600">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                        {feature}
                      </div>
                    ))}
                  </div>
                  <div className="text-lg font-semibold text-blue-600 mb-4">{service.pricing}</div>
                  <Link
                    href="/contact"
                    className="w-full inline-flex items-center justify-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                  >
                    Get Quote
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-blue-600">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Secure Your Business Today
              </h2>
              <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
                Let's discuss how our cybersecurity services can protect your business from threats.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center px-8 py-3 bg-white text-blue-600 rounded-lg hover:bg-gray-100 transition-colors font-semibold"
                >
                  Get Started
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
                <Link
                  href="/security"
                  className="inline-flex items-center px-8 py-3 border-2 border-white text-white rounded-lg hover:bg-white hover:text-blue-600 transition-colors font-semibold"
                >
                  View Security
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
}