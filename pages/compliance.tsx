import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  Shield, 
  ArrowRight,
  CheckCircle,
  Award,
  FileText,
  Globe,
  Users,
  Lock,
  Eye,
  Settings,
  BarChart3,
  Zap,
  Building
} from 'lucide-react';
import Layout from '../components/Layout';

const complianceFrameworks = [
  {
    name: 'SOC 2 Type II',
    description: 'Security, availability, and confidentiality controls for service organizations',
    requirements: ['Security', 'Availability', 'Confidentiality', 'Processing Integrity', 'Privacy'],
    icon: Shield
  },
  {
    name: 'ISO 27001',
    description: 'International standard for information security management systems',
    requirements: ['Risk Assessment', 'Security Controls', 'Management System', 'Continuous Improvement'],
    icon: Lock
  },
  {
    name: 'GDPR',
    description: 'General Data Protection Regulation for EU data protection',
    requirements: ['Data Protection', 'Privacy by Design', 'Consent Management', 'Right to be Forgotten'],
    icon: Eye
  },
  {
    name: 'HIPAA',
    description: 'Health Insurance Portability and Accountability Act compliance',
    requirements: ['PHI Protection', 'Administrative Safeguards', 'Physical Safeguards', 'Technical Safeguards'],
    icon: FileText
  }
];

const complianceSteps = [
  {
    step: '01',
    title: 'Assessment & Gap Analysis',
    description: 'We conduct a comprehensive assessment of your current security posture and identify gaps against compliance requirements.',
    icon: BarChart3
  },
  {
    step: '02',
    title: 'Policy Development',
    description: 'Create and implement comprehensive security policies and procedures tailored to your organization.',
    icon: FileText
  },
  {
    step: '03',
    title: 'Implementation',
    description: 'Deploy security controls, monitoring systems, and processes to meet compliance requirements.',
    icon: Settings
  },
  {
    step: '04',
    title: 'Audit & Certification',
    description: 'Prepare for and undergo third-party audits to achieve official compliance certification.',
    icon: Award
  }
];

const benefits = [
  {
    title: 'Risk Reduction',
    description: 'Minimize security risks and protect sensitive data with robust compliance frameworks.',
    icon: Shield
  },
  {
    title: 'Customer Trust',
    description: 'Build customer confidence with verified security and compliance certifications.',
    icon: Users
  },
  {
    title: 'Competitive Advantage',
    description: 'Stand out in the market with industry-recognized compliance standards.',
    icon: Award
  },
  {
    title: 'Regulatory Compliance',
    description: 'Ensure adherence to industry regulations and avoid costly penalties.',
    icon: Globe
  }
];

export default function CompliancePage() {
  return (
    <Layout
      title="Compliance & Security - Zion Tech Group"
      description="Ensure your organization meets industry compliance standards with our comprehensive security and compliance services. SOC 2, ISO 27001, GDPR, and more."
      keywords="compliance, security, SOC 2, ISO 27001, GDPR, HIPAA, audit, certification"
    >
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 text-white py-20">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Compliance & Security
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-4xl mx-auto">
              Ensure your organization meets the highest standards of security and compliance 
              with our comprehensive audit, certification, and implementation services.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="#compliance-frameworks"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-200 transform hover:scale-105"
              >
                View Frameworks
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center px-8 py-4 border-2 border-blue-400 text-blue-100 font-semibold rounded-lg hover:border-blue-300 hover:text-white transition-all duration-200"
              >
                Get Started
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Compliance Frameworks Section */}
      <section id="compliance-frameworks" className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Compliance Frameworks
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-4xl mx-auto">
              We help you achieve compliance with major industry standards and regulations.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {complianceFrameworks.map((framework, index) => (
              <motion.div
                key={index}
                className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center mb-6">
                  <framework.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{framework.name}</h3>
                <p className="text-gray-600 mb-6">{framework.description}</p>
                <div className="space-y-2">
                  {framework.requirements.map((requirement, reqIndex) => (
                    <div key={reqIndex} className="flex items-center text-sm text-gray-600">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                      {requirement}
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
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
              Our Compliance Process
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-4xl mx-auto">
              A structured approach to achieving and maintaining compliance with industry standards.
            </p>
          </motion.div>

          <div className="space-y-12">
            {complianceSteps.map((step, index) => (
              <motion.div
                key={index}
                className="flex items-center"
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8' : 'pl-8'}`}>
                  <div className="bg-white p-8 rounded-xl shadow-lg">
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center mr-4">
                        <step.icon className="w-6 h-6 text-white" />
                      </div>
                      <div className="text-2xl font-bold text-blue-600">{step.step}</div>
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">{step.title}</h3>
                    <p className="text-gray-600">{step.description}</p>
                  </div>
                </div>
                
                <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center relative z-10">
                  <Zap className="w-4 h-4 text-white" />
                </div>
                
                <div className="w-1/2"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Why Choose Our Compliance Services
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-4xl mx-auto">
              Partner with us to achieve and maintain compliance with confidence.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                className="text-center p-6 rounded-lg hover:bg-gray-50 transition-colors duration-300"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <benefit.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {benefit.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {benefit.description}
                </p>
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
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
              Ready to Achieve Compliance?
            </h2>
            <p className="text-lg sm:text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Let our experts guide you through the compliance process and help you achieve 
              the security standards your organization needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center px-8 py-4 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-100 transition-all duration-200 transform hover:scale-105"
              >
                Start Compliance Journey
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-blue-600 transition-all duration-200"
              >
                View All Services
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}