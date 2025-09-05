import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { motion } from 'framer-motion';
import Layout from './components/Layout';
import { 
  Shield, 
  FileText, 
  AlertTriangle, 
  CheckCircle, 
  ArrowRight,
  Calendar,
  Mail,
  Phone
} from 'lucide-react';

const sections = [
  {
    title: 'Acceptance of Terms',
    icon: CheckCircle,
    content: [
      {
        subtitle: 'Agreement to Terms',
        items: [
          'By accessing and using Zion Tech Group services, you accept and agree to be bound by these Terms of Service',
          'If you do not agree to these terms, you may not use our services',
          'These terms apply to all users, including visitors, customers, and clients',
          'We reserve the right to modify these terms at any time with notice'
        ]
      },
      {
        subtitle: 'Eligibility',
        items: [
          'You must be at least 18 years old to use our services',
          'You must have the legal capacity to enter into binding agreements',
          'You must provide accurate and complete information when required',
          'You are responsible for maintaining the security of your account'
        ]
      }
    ]
  },
  {
    title: 'Service Description',
    icon: FileText,
    content: [
      {
        subtitle: 'Our Services',
        items: [
          'AI and machine learning services and solutions',
          'IT infrastructure and cloud computing services',
          'Micro SaaS platform development and hosting',
          'Cybersecurity and data protection services',
          'Consulting and technical support services'
        ]
      },
      {
        subtitle: 'Service Availability',
        items: [
          'We strive to maintain 99.9% uptime for our services',
          'Scheduled maintenance will be announced in advance',
          'We are not liable for service interruptions due to circumstances beyond our control',
          'We reserve the right to modify or discontinue services with notice'
        ]
      }
    ]
  },
  {
    title: 'User Responsibilities',
    icon: Shield,
    content: [
      {
        subtitle: 'Account Security',
        items: [
          'You are responsible for maintaining the confidentiality of your account credentials',
          'You must notify us immediately of any unauthorized use of your account',
          'You are responsible for all activities that occur under your account',
          'You must use strong passwords and enable two-factor authentication when available'
        ]
      },
      {
        subtitle: 'Acceptable Use',
        items: [
          'You may not use our services for illegal or unauthorized purposes',
          'You may not attempt to gain unauthorized access to our systems',
          'You may not interfere with or disrupt our services',
          'You may not use our services to transmit malicious code or harmful content'
        ]
      }
    ]
  },
  {
    title: 'Payment and Billing',
    icon: FileText,
    content: [
      {
        subtitle: 'Payment Terms',
        items: [
          'Payment is due according to the terms specified in your service agreement',
          'We accept various payment methods including credit cards and bank transfers',
          'Late payments may result in service suspension or termination',
          'All prices are subject to change with 30 days notice'
        ]
      },
      {
        subtitle: 'Refunds and Cancellations',
        items: [
          'Refund policies vary by service type and are specified in individual agreements',
          'Cancellation requests must be submitted in writing',
          'Refunds are processed within 30 days of approval',
          'No refunds for services already delivered or consumed'
        ]
      }
    ]
  },
  {
    title: 'Intellectual Property',
    icon: Shield,
    content: [
      {
        subtitle: 'Our Intellectual Property',
        items: [
          'All content, software, and materials provided by us remain our property',
          'You may not copy, modify, or distribute our proprietary materials',
          'Our trademarks and logos are protected and may not be used without permission',
          'We retain all rights to our algorithms, methodologies, and know-how'
        ]
      },
      {
        subtitle: 'Your Content',
        items: [
          'You retain ownership of content you provide to us',
          'You grant us a license to use your content to provide services',
          'You are responsible for ensuring you have rights to any content you provide',
          'We may use anonymized data for service improvement and analytics'
        ]
      }
    ]
  },
  {
    title: 'Privacy and Data Protection',
    icon: Shield,
    content: [
      {
        subtitle: 'Data Handling',
        items: [
          'We handle your data in accordance with our Privacy Policy',
          'We implement appropriate security measures to protect your data',
          'We comply with applicable data protection laws and regulations',
          'You have rights regarding your personal data as specified in our Privacy Policy'
        ]
      },
      {
        subtitle: 'Confidentiality',
        items: [
          'We maintain strict confidentiality of your business information',
          'We do not share your confidential information with third parties without consent',
          'Our employees and contractors are bound by confidentiality agreements',
          'We may be required to disclose information if required by law'
        ]
      }
    ]
  },
  {
    title: 'Limitation of Liability',
    icon: AlertTriangle,
    content: [
      {
        subtitle: 'Service Limitations',
        items: [
          'Our services are provided "as is" without warranties of any kind',
          'We do not guarantee that our services will be error-free or uninterrupted',
          'We are not liable for indirect, incidental, or consequential damages',
          'Our total liability is limited to the amount you paid for the services'
        ]
      },
      {
        subtitle: 'Force Majeure',
        items: [
          'We are not liable for delays or failures due to circumstances beyond our control',
          'This includes natural disasters, government actions, and internet outages',
          'We will make reasonable efforts to minimize the impact of such events',
          'We will notify you of any significant service disruptions'
        ]
      }
    ]
  },
  {
    title: 'Termination',
    icon: FileText,
    content: [
      {
        subtitle: 'Termination by You',
        items: [
          'You may terminate your account at any time by contacting us',
          'Termination does not relieve you of payment obligations for services already provided',
          'You are responsible for backing up your data before termination',
          'We will provide a reasonable period for data export upon request'
        ]
      },
      {
        subtitle: 'Termination by Us',
        items: [
          'We may terminate your account for violation of these terms',
          'We may suspend services for non-payment or other material breaches',
          'We will provide reasonable notice before termination when possible',
          'We may terminate immediately for serious violations or illegal activity'
        ]
      }
    ]
  }
];

export default function TermsPage() {
  return (
    <Layout 
      title="Terms of Service - Zion Tech Group | Legal Terms & Conditions"
      description="Read our Terms of Service to understand the legal terms and conditions for using Zion Tech Group services. Updated January 15, 2024."
      keywords="terms of service, legal terms, conditions, user agreement, service terms"
    >
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white py-20 overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
            <div className="absolute top-40 right-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-2000"></div>
            <div className="absolute -bottom-8 left-20 w-72 h-72 bg-indigo-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-4000"></div>
          </div>

          <div className="container mx-auto px-4 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Terms of Service
                <span className="block text-blue-400">Legal Terms & Conditions</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
                Please read these terms carefully before using our services. 
                By using our services, you agree to be bound by these terms.
              </p>
              <div className="text-sm text-blue-200">
                Last updated: January 15, 2024
              </div>
            </motion.div>
          </div>
        </section>

        {/* Terms Overview */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Important Information
              </h2>
              <p className="text-xl text-gray-600 max-w-4xl mx-auto">
                These terms govern your use of Zion Tech Group services. 
                We recommend reading them carefully and keeping a copy for your records.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Shield className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Legally Binding</h3>
                <p className="text-gray-600">These terms form a legally binding agreement between you and Zion Tech Group.</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckCircle className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Fair & Transparent</h3>
                <p className="text-gray-600">We believe in clear, fair terms that protect both parties' interests.</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <FileText className="w-8 h-8 text-purple-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Regular Updates</h3>
                <p className="text-gray-600">We may update these terms and will notify you of significant changes.</p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Terms Sections */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              {sections.map((section, sectionIndex) => (
                <motion.div
                  key={section.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: sectionIndex * 0.1 }}
                  className="bg-white rounded-xl shadow-lg p-8 mb-8"
                >
                  <div className="flex items-center mb-8">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                      <section.icon className="w-6 h-6 text-blue-600" />
                    </div>
                    <h2 className="text-2xl font-bold text-gray-900">{section.title}</h2>
                  </div>

                  <div className="space-y-8">
                    {section.content.map((subsection, subsectionIndex) => (
                      <div key={subsectionIndex}>
                        <h3 className="text-xl font-semibold text-gray-900 mb-4">{subsection.subtitle}</h3>
                        <ul className="space-y-3">
                          {subsection.items.map((item, itemIndex) => (
                            <li key={itemIndex} className="flex items-start">
                              <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                              <span className="text-gray-700">{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Information */}
        <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center max-w-4xl mx-auto"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Questions About These Terms?
              </h2>
              <p className="text-xl text-blue-100 mb-8">
                If you have any questions about these Terms of Service or need clarification on any point, 
                please don't hesitate to contact us.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                <div className="text-center">
                  <Mail className="w-8 h-8 text-blue-200 mx-auto mb-4" />
                  <div className="font-semibold mb-2">Email Us</div>
                  <div className="text-blue-100">legal@ziontechgroup.com</div>
                </div>
                <div className="text-center">
                  <Phone className="w-8 h-8 text-blue-200 mx-auto mb-4" />
                  <div className="font-semibold mb-2">Call Us</div>
                  <div className="text-blue-100">+1 302 464 0950</div>
                </div>
                <div className="text-center">
                  <Calendar className="w-8 h-8 text-blue-200 mx-auto mb-4" />
                  <div className="font-semibold mb-2">Response Time</div>
                  <div className="text-blue-100">Within 48 hours</div>
                </div>
              </div>

              <div className="bg-white bg-opacity-10 rounded-lg p-6 mb-8">
                <div className="flex items-center justify-center mb-4">
                  <AlertTriangle className="w-6 h-6 text-yellow-300 mr-2" />
                  <h3 className="text-lg font-semibold">Important Notice</h3>
                </div>
                <p className="text-blue-100">
                  These Terms of Service may be updated from time to time. We will notify you of any material changes 
                  by posting the new terms on this page and updating the "Last updated" date. Your continued use of 
                  our services after such changes constitutes acceptance of the new terms.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact" className="px-8 py-4 bg-white text-blue-600 rounded-lg hover:bg-gray-100 transition-all duration-300 font-semibold">
                  Contact Legal Team
                </Link>
                <Link href="/privacy" className="px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white hover:text-blue-600 transition-all duration-300 font-semibold">
                  Privacy Policy
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </Layout>
  );
}