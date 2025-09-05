import React from 'react';
import Layout from './components/Layout';
import { motion } from 'framer-motion';
import { Shield, Eye, Lock, Database, Users, Mail, Phone, Calendar } from 'lucide-react';

const privacySections = [
  {
    title: "Information We Collect",
    icon: Database,
    content: [
      {
        subtitle: "Personal Information",
        details: [
          "Name, email address, phone number, and company information when you contact us or use our services",
          "Billing and payment information for service subscriptions",
          "Account credentials and preferences for our platforms"
        ]
      },
      {
        subtitle: "Usage Information",
        details: [
          "How you interact with our website and services",
          "Device information, IP address, and browser type",
          "Pages visited, time spent, and features used"
        ]
      },
      {
        subtitle: "Technical Information",
        details: [
          "Log files and analytics data",
          "Cookies and similar tracking technologies",
          "Performance and error reports"
        ]
      }
    ]
  },
  {
    title: "How We Use Your Information",
    icon: Users,
    content: [
      {
        subtitle: "Service Delivery",
        details: [
          "Provide and maintain our services",
          "Process transactions and manage accounts",
          "Deliver customer support and technical assistance"
        ]
      },
      {
        subtitle: "Communication",
        details: [
          "Send important updates about our services",
          "Respond to your inquiries and requests",
          "Provide marketing communications (with your consent)"
        ]
      },
      {
        subtitle: "Improvement and Analytics",
        details: [
          "Analyze usage patterns to improve our services",
          "Develop new features and functionality",
          "Conduct research and analytics"
        ]
      }
    ]
  },
  {
    title: "Information Sharing",
    icon: Shield,
    content: [
      {
        subtitle: "We Do Not Sell Your Data",
        details: [
          "We never sell, rent, or trade your personal information to third parties",
          "We only share information as described in this policy",
          "Your data remains under our control and protection"
        ]
      },
      {
        subtitle: "Limited Sharing",
        details: [
          "With service providers who assist in our operations (under strict confidentiality agreements)",
          "When required by law or to protect our rights",
          "In case of business transfers (with notice to affected users)"
        ]
      },
      {
        subtitle: "Your Consent",
        details: [
          "We will ask for your explicit consent before sharing sensitive information",
          "You can withdraw consent at any time",
          "We respect your privacy choices"
        ]
      }
    ]
  },
  {
    title: "Data Security",
    icon: Lock,
    content: [
      {
        subtitle: "Security Measures",
        details: [
          "Encryption of data in transit and at rest",
          "Regular security audits and assessments",
          "Access controls and authentication protocols"
        ]
      },
      {
        subtitle: "Compliance",
        details: [
          "GDPR compliance for EU users",
          "CCPA compliance for California residents",
          "Industry-standard security practices"
        ]
      },
      {
        subtitle: "Incident Response",
        details: [
          "24/7 security monitoring",
          "Rapid response to security incidents",
          "Notification procedures for data breaches"
        ]
      }
    ]
  }
];

const yourRights = [
  {
    title: "Access Your Data",
    description: "Request a copy of all personal information we have about you",
    icon: Eye
  },
  {
    title: "Correct Information",
    description: "Update or correct any inaccurate personal information",
    icon: Users
  },
  {
    title: "Delete Data",
    description: "Request deletion of your personal information",
    icon: Database
  },
  {
    title: "Data Portability",
    description: "Export your data in a machine-readable format",
    icon: Shield
  },
  {
    title: "Opt-Out",
    description: "Unsubscribe from marketing communications",
    icon: Mail
  },
  {
    title: "Restrict Processing",
    description: "Limit how we process your personal information",
    icon: Lock
  }
];

const contactInfo = {
  email: "privacy@ziontechgroup.com",
  phone: "+1 302 464 0950",
  address: "364 E Main St STE 1008, Middletown DE 19709",
  dpo: "dpo@ziontechgroup.com"
};

export default function PrivacyPage() {
  return (
    <Layout
      title="Privacy Policy - Zion Tech Group"
      description="Learn how Zion Tech Group protects your privacy and handles your personal information. Our comprehensive privacy policy explains our data practices."
      keywords="privacy policy, data protection, GDPR, CCPA, privacy rights, data security"
      canonical="https://ziontechgroup.com/privacy"
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
                Privacy Policy
              </h1>
              <p className="text-xl text-blue-100 max-w-4xl mx-auto">
                Your privacy is important to us. This policy explains how we collect, use, 
                and protect your personal information when you use our services.
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
                Zion Tech Group ("we," "our," or "us") is committed to protecting your privacy. 
                This Privacy Policy explains how we collect, use, disclose, and safeguard your 
                information when you visit our website or use our services.
              </p>
              <p className="text-lg text-gray-600">
                By using our services, you agree to the collection and use of information in 
                accordance with this policy. If you do not agree with our policies and practices, 
                please do not use our services.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Privacy Sections */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="space-y-16">
              {privacySections.map((section, sectionIndex) => {
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

        {/* Your Rights */}
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
                Your Privacy Rights
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                You have certain rights regarding your personal information. Here's how you can exercise them.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {yourRights.map((right, index) => {
                const IconComponent = right.icon;
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
                      {right.title}
                    </h3>
                    <p className="text-gray-600 text-sm">
                      {right.description}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Contact Information */}
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
                Contact Us About Privacy
              </h2>
              
              <div className="bg-gray-50 p-8 rounded-lg">
                <p className="text-lg text-gray-600 mb-6">
                  If you have any questions about this Privacy Policy or want to exercise your privacy rights, 
                  please contact us using the information below:
                </p>
                
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">General Privacy Inquiries</h3>
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
                        <Calendar className="w-5 h-5 text-blue-600 mr-3 mt-1" />
                        <span className="text-gray-600">{contactInfo.address}</span>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">Data Protection Officer</h3>
                    <div className="space-y-3">
                      <div className="flex items-center">
                        <Mail className="w-5 h-5 text-blue-600 mr-3" />
                        <a href={`mailto:${contactInfo.dpo}`} className="text-blue-600 hover:text-blue-700">
                          {contactInfo.dpo}
                        </a>
                      </div>
                      <p className="text-sm text-gray-600">
                        For EU residents, you can also contact our Data Protection Officer directly 
                        for any privacy-related concerns or to exercise your GDPR rights.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Updates */}
        <section className="py-16 bg-gray-100">
          <div className="container mx-auto px-4">
            <motion.div
              className="max-w-4xl mx-auto text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Policy Updates
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                We may update this Privacy Policy from time to time. We will notify you of any changes 
                by posting the new Privacy Policy on this page and updating the "Last updated" date.
              </p>
              <p className="text-lg text-gray-600">
                We encourage you to review this Privacy Policy periodically for any changes. 
                Changes to this Privacy Policy are effective when they are posted on this page.
              </p>
            </motion.div>
          </div>
        </section>
      </div>
    </Layout>
  );
}