import React from 'react';
import Layout from './components/Layout';
import { motion } from 'framer-motion';
import { FileText, Shield, AlertTriangle, Users, DollarSign, Clock, Phone, Mail } from 'lucide-react';

const termsSections = [
  {
    title: "Acceptance of Terms",
    icon: FileText,
    content: [
      {
        subtitle: "Agreement to Terms",
        details: [
          "By accessing and using Zion Tech Group services, you accept and agree to be bound by the terms and provision of this agreement",
          "If you do not agree to abide by the above, please do not use this service",
          "These terms apply to all visitors, users, and others who access or use the service"
        ]
      },
      {
        subtitle: "Modifications",
        details: [
          "We reserve the right to modify these terms at any time",
          "We will notify users of any material changes via email or through our service",
          "Continued use of the service after changes constitutes acceptance of the new terms"
        ]
      }
    ]
  },
  {
    title: "Use of Service",
    icon: Users,
    content: [
      {
        subtitle: "Permitted Use",
        details: [
          "Use our services for lawful purposes only",
          "Comply with all applicable laws and regulations",
          "Respect the rights and privacy of other users",
          "Provide accurate and truthful information"
        ]
      },
      {
        subtitle: "Prohibited Activities",
        details: [
          "Violate any applicable laws or regulations",
          "Infringe on intellectual property rights",
          "Transmit malicious code or harmful content",
          "Attempt to gain unauthorized access to our systems",
          "Use our services for any illegal or unauthorized purpose"
        ]
      }
    ]
  },
  {
    title: "Intellectual Property",
    icon: Shield,
    content: [
      {
        subtitle: "Our Rights",
        details: [
          "All content, features, and functionality of our services are owned by Zion Tech Group",
          "Our trademarks, logos, and service marks are protected by intellectual property laws",
          "You may not use our intellectual property without written permission"
        ]
      },
      {
        subtitle: "Your Content",
        details: [
          "You retain ownership of content you submit to our services",
          "You grant us a license to use, modify, and display your content as necessary to provide our services",
          "You are responsible for ensuring you have the right to submit any content"
        ]
      }
    ]
  },
  {
    title: "Payment and Billing",
    icon: DollarSign,
    content: [
      {
        subtitle: "Payment Terms",
        details: [
          "Fees are due in advance for subscription services",
          "All fees are non-refundable unless otherwise specified",
          "We may change our fees with 30 days' notice",
          "Late payments may result in service suspension"
        ]
      },
      {
        subtitle: "Billing Disputes",
        details: [
          "Contact us within 30 days of the disputed charge",
          "We will investigate and resolve billing disputes promptly",
          "Refunds will be issued for valid disputes",
          "Service will continue during dispute resolution"
        ]
      }
    ]
  },
  {
    title: "Service Availability",
    icon: Clock,
    content: [
      {
        subtitle: "Uptime Commitment",
        details: [
          "We strive for 99.9% uptime for our services",
          "Scheduled maintenance will be announced in advance",
          "We are not liable for downtime due to circumstances beyond our control",
          "Service level agreements may vary by service type"
        ]
      },
      {
        subtitle: "Support",
        details: [
          "Technical support is available during business hours",
          "Emergency support is available 24/7 for critical issues",
          "Response times vary based on service level agreements",
          "Support is provided via email, phone, and online chat"
        ]
      }
    ]
  },
  {
    title: "Limitation of Liability",
    icon: AlertTriangle,
    content: [
      {
        subtitle: "Disclaimer",
        details: [
          "Our services are provided 'as is' without warranties of any kind",
          "We disclaim all warranties, express or implied",
          "We do not guarantee that our services will be error-free or uninterrupted",
          "Your use of our services is at your own risk"
        ]
      },
      {
        subtitle: "Limitation",
        details: [
          "Our liability is limited to the amount you paid for our services",
          "We are not liable for indirect, incidental, or consequential damages",
          "Some jurisdictions may not allow limitation of liability",
          "This limitation applies to the fullest extent permitted by law"
        ]
      }
    ]
  }
];

const contactInfo = {
  email: "legal@ziontechgroup.com",
  phone: "+1 302 464 0950",
  address: "364 E Main St STE 1008, Middletown DE 19709",
  businessHours: "Monday - Friday, 9:00 AM - 6:00 PM EST"
};

const importantPoints = [
  {
    title: "Governing Law",
    description: "These terms are governed by the laws of Delaware, United States",
    icon: FileText
  },
  {
    title: "Dispute Resolution",
    description: "Disputes will be resolved through binding arbitration",
    icon: Shield
  },
  {
    title: "Severability",
    description: "If any provision is invalid, the remaining terms remain in effect",
    icon: AlertTriangle
  },
  {
    title: "Entire Agreement",
    description: "These terms constitute the entire agreement between the parties",
    icon: Users
  }
];

export default function TermsPage() {
  return (
    <Layout
      title="Terms of Service - Zion Tech Group"
      description="Read our terms of service to understand your rights and obligations when using Zion Tech Group services. Clear, comprehensive terms for all users."
      keywords="terms of service, user agreement, legal terms, service conditions, user rights"
      canonical="https://ziontechgroup.com/terms"
    >
      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-blue-900 to-purple-900 text-white py-20">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Terms of Service
              </h1>
              <p className="text-xl text-blue-100 max-w-4xl mx-auto">
                These terms govern your use of Zion Tech Group services. Please read them carefully 
                before using our services.
              </p>
              <div className="mt-8 text-sm text-blue-200">
                Last updated: January 15, 2024
              </div>
            </motion.div>
          </div>
        </section>

        {/* Introduction */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <motion.div
              className="max-w-4xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Introduction
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Welcome to Zion Tech Group. These Terms of Service ("Terms") govern your use of our 
                website, services, and applications (collectively, the "Service") operated by Zion Tech Group 
                ("us", "we", or "our").
              </p>
              <p className="text-lg text-gray-600">
                By accessing or using our Service, you agree to be bound by these Terms. If you disagree 
                with any part of these terms, then you may not access the Service.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Terms Sections */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="space-y-16">
              {termsSections.map((section, sectionIndex) => {
                const IconComponent = section.icon;
                return (
                  <motion.div
                    key={sectionIndex}
                    className="bg-white rounded-lg shadow-lg overflow-hidden"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: sectionIndex * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className="bg-blue-50 p-6 border-b">
                      <div className="flex items-center">
                        <IconComponent className="w-8 h-8 text-blue-600 mr-4" />
                        <h2 className="text-2xl font-bold text-gray-900">
                          {section.title}
                        </h2>
                      </div>
                    </div>
                    <div className="p-6">
                      <div className="space-y-8">
                        {section.content.map((subsection, subsectionIndex) => (
                          <div key={subsectionIndex}>
                            <h3 className="text-xl font-semibold text-gray-900 mb-4">
                              {subsection.subtitle}
                            </h3>
                            <ul className="space-y-3">
                              {subsection.details.map((detail, detailIndex) => (
                                <li key={detailIndex} className="flex items-start">
                                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                                  <span className="text-gray-600">{detail}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Important Points */}
        <section className="py-20 bg-gray-100">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Important Legal Points
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Key legal provisions that govern our relationship with you.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {importantPoints.map((point, index) => {
                const IconComponent = point.icon;
                return (
                  <motion.div
                    key={index}
                    className="bg-white p-6 rounded-lg shadow-md"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className="text-blue-600 mb-4">
                      <IconComponent className="w-8 h-8" />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">
                      {point.title}
                    </h3>
                    <p className="text-gray-600 text-sm">
                      {point.description}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Termination */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <motion.div
              className="max-w-4xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
                Termination
              </h2>
              
              <div className="bg-gray-50 p-8 rounded-lg">
                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">
                      Termination by You
                    </h3>
                    <p className="text-gray-600">
                      You may terminate your account at any time by contacting us or using the account 
                      termination features in our service. Upon termination, your right to use the service 
                      will cease immediately.
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">
                      Termination by Us
                    </h3>
                    <p className="text-gray-600">
                      We may terminate or suspend your account immediately, without prior notice or liability, 
                      for any reason whatsoever, including without limitation if you breach the Terms.
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">
                      Effect of Termination
                    </h3>
                    <p className="text-gray-600">
                      Upon termination, your right to use the service will cease immediately. All provisions 
                      of the Terms which by their nature should survive termination shall survive termination.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Contact Information */}
        <section className="py-20 bg-gray-100">
          <div className="container mx-auto px-4">
            <motion.div
              className="max-w-4xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
                Contact Us About These Terms
              </h2>
              
              <div className="bg-white p-8 rounded-lg shadow-md">
                <p className="text-lg text-gray-600 mb-6 text-center">
                  If you have any questions about these Terms of Service, please contact us:
                </p>
                
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">Legal Department</h3>
                    <div className="space-y-3">
                      <div className="flex items-center">
                        <Mail className="w-5 h-5 text-blue-600 mr-3" />
                        <a href={`mailto:${contactInfo.email}`} className="text-blue-600 hover:text-blue-700">
                          {contactInfo.email}
                        </a>
                      </div>
                      <div className="flex items-center">
                        <Phone className="w-5 h-5 text-blue-600 mr-3" />
                        <a href={`tel:${contactInfo.phone}`} className="text-blue-600 hover:text-blue-700">
                          {contactInfo.phone}
                        </a>
                      </div>
                      <div className="flex items-start">
                        <Clock className="w-5 h-5 text-blue-600 mr-3 mt-1" />
                        <span className="text-gray-600">{contactInfo.businessHours}</span>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">Mailing Address</h3>
                    <div className="space-y-3">
                      <div className="flex items-start">
                        <FileText className="w-5 h-5 text-blue-600 mr-3 mt-1" />
                        <span className="text-gray-600">{contactInfo.address}</span>
                      </div>
                      <p className="text-sm text-gray-600">
                        For legal notices and formal correspondence, please use our mailing address. 
                        We will respond to all inquiries within 5 business days.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </Layout>
  );
}