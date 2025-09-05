import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Shield, Server, Database, Lock, Users, BarChart3, CheckCircle, ArrowRight } from 'lucide-react';
import MainLayout from '../../components/layout/MainLayout';

const features = [
  {
    title: "Scalable Infrastructure",
    description: "Enterprise-grade cloud infrastructure that scales with your business",
    icon: Server,
    benefits: ["Auto-scaling", "High availability", "Global deployment", "Disaster recovery"]
  },
  {
    title: "Advanced Security",
    description: "Multi-layered security with enterprise-grade protection",
    icon: Lock,
    benefits: ["Zero-trust architecture", "End-to-end encryption", "Compliance ready", "24/7 monitoring"]
  },
  {
    title: "Data Management",
    description: "Comprehensive data solutions for enterprise needs",
    icon: Database,
    benefits: ["Big data analytics", "Real-time processing", "Data governance", "Backup & recovery"]
  },
  {
    title: "Team Collaboration",
    description: "Advanced collaboration tools for large teams",
    icon: Users,
    benefits: ["Unified communication", "Project management", "Document sharing", "Workflow automation"]
  }
];

const complianceStandards = [
  "SOC 2 Type II",
  "ISO 27001",
  "GDPR Compliant",
  "HIPAA Ready",
  "PCI DSS",
  "FedRAMP"
];

const enterpriseStats = [
  { number: "99.99%", label: "Uptime SLA" },
  { number: "24/7", label: "Support" },
  { number: "50+", label: "Enterprise Clients" },
  { number: "10+", label: "Years Experience" }
];

export default function EnterpriseSolutionsPage() {
  return (
    <MainLayout
      title="Enterprise Solutions - Zion Tech Group"
      description="Comprehensive enterprise technology solutions with advanced security, scalability, and compliance. Built for large organizations."
      keywords="enterprise solutions, enterprise security, scalable infrastructure, compliance, SOC 2, ISO 27001"
    >
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white py-20 overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
            <div className="absolute top-40 right-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-2000"></div>
          </div>

          <div className="container mx-auto px-4 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Enterprise{' '}
                <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  Technology Solutions
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
                Comprehensive technology solutions designed for large organizations. 
                Scalable, secure, and compliant infrastructure that grows with your business.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact" className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg hover:shadow-lg transition-all duration-300 font-semibold">
                  Schedule Enterprise Demo
                </Link>
                <Link href="/solutions" className="px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white hover:text-gray-900 transition-all duration-300 font-semibold">
                  View All Solutions
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {enterpriseStats.map((stat, index) => (
                <motion.div
                  key={index}
                  className="text-center"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">
                    {stat.number}
                  </div>
                  <div className="text-gray-600 font-medium">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Enterprise-Grade Features
              </h2>
              <p className="text-lg sm:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                Built with enterprise requirements in mind, our solutions provide the scalability, 
                security, and reliability your organization needs.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {features.map((feature, index) => {
                const IconComponent = feature.icon;
                return (
                  <motion.div
                    key={index}
                    className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center mb-6">
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                    
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">
                      {feature.title}
                    </h3>
                    
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      {feature.description}
                    </p>

                    <ul className="space-y-2">
                      {feature.benefits.map((benefit, benefitIndex) => (
                        <li key={benefitIndex} className="flex items-center text-sm text-gray-600">
                          <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Compliance Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                Compliance & Security Standards
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                We maintain the highest standards of security and compliance to protect your data and meet regulatory requirements.
              </p>
            </motion.div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
              {complianceStandards.map((standard, index) => (
                <motion.div
                  key={index}
                  className="bg-gray-50 p-6 rounded-lg text-center hover:bg-blue-50 hover:border-blue-200 border border-transparent transition-all duration-300"
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Shield className="w-8 h-8 text-blue-600 mx-auto mb-3" />
                  <span className="text-sm font-medium text-gray-700">{standard}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
          <div className="container mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Ready to Transform Your Enterprise?
              </h2>
              <p className="text-xl mb-8 max-w-2xl mx-auto">
                Let our enterprise experts design a custom solution that meets your organization's unique requirements.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact" className="px-8 py-4 bg-white text-blue-600 rounded-lg hover:bg-gray-100 transition-all duration-300 font-semibold">
                  Schedule Enterprise Consultation
                </Link>
                <Link href="/solutions" className="px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white hover:text-blue-600 transition-all duration-300 font-semibold">
                  Explore All Solutions
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </MainLayout>
  );
}