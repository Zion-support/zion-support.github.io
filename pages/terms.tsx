import React from 'react';
import { motion } from 'framer-motion';
import { FileText, Scale, Shield, AlertTriangle, CheckCircle, Users, Mail, Phone, MapPin } from 'lucide-react';
import MainLayout from '../components/layout/MainLayout';

const termsFeatures = [
  {
    icon: Scale,
    title: 'Fair Terms',
    description: 'Our terms are designed to be fair and transparent for all parties involved.',
    features: ['Clear Language', 'Balanced Rights', 'Reasonable Limits', 'Easy to Understand']
  },
  {
    icon: Shield,
    title: 'Legal Protection',
    description: 'We provide appropriate legal protection while respecting your rights.',
    features: ['Liability Limits', 'Intellectual Property', 'Data Protection', 'Dispute Resolution']
  },
  {
    icon: AlertTriangle,
    title: 'User Responsibilities',
    description: 'Clear guidelines on what we expect from our users and customers.',
    features: ['Acceptable Use', 'Account Security', 'Compliance', 'Reporting Issues']
  },
  {
    icon: CheckCircle,
    title: 'Service Guarantees',
    description: 'We stand behind our services with clear guarantees and commitments.',
    features: ['Service Level Agreements', 'Uptime Guarantees', 'Support Commitments', 'Quality Standards']
  }
];

const contactInfo = [
  {
    icon: Mail,
    title: 'Email',
    value: 'legal@ziontechgroup.com',
    description: 'For legal inquiries and questions'
  },
  {
    icon: Phone,
    title: 'Phone',
    value: '+1 302 464 0950',
    description: 'For urgent legal matters'
  },
  {
    icon: MapPin,
    title: 'Address',
    value: '364 E Main St STE 1008\nMiddletown DE 19709',
    description: 'Our registered office'
  }
];

export default function TermsPage() {
  return (
    <MainLayout
      title="Terms of Service - Zion Tech Group"
      description="Read our terms of service to understand your rights and responsibilities when using Zion Tech Group's services and solutions."
      keywords="terms of service, legal terms, user agreement, service terms, legal rights"
    >
      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white py-20">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center max-w-4xl mx-auto"
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  Terms of Service
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8">
                Please read these terms carefully before using our services
              </p>
            </motion.div>
          </div>
        </section>

        {/* Terms Features */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Terms</h2>
              <p className="text-lg text-gray-600">
                We believe in fair, transparent, and legally sound terms of service.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {termsFeatures.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <div className="flex items-start space-x-4">
                    <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center flex-shrink-0">
                      <feature.icon className="w-8 h-8 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-gray-900 mb-3">
                        {feature.title}
                      </h3>
                      <p className="text-gray-600 mb-6 leading-relaxed">
                        {feature.description}
                      </p>
                      <ul className="space-y-2">
                        {feature.features.map((item, idx) => (
                          <li key={idx} className="flex items-center text-sm text-gray-600">
                            <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                            {item}
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

        {/* Terms of Service Content */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="bg-white rounded-lg shadow-lg p-8"
              >
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Terms of Service</h2>
                
                <div className="space-y-6 text-gray-700">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">1. Acceptance of Terms</h3>
                    <p className="mb-4">
                      By accessing and using Zion Tech Group's services, you accept and agree to be bound by the 
                      terms and provision of this agreement. If you do not agree to abide by the above, please 
                      do not use this service.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">2. Use License</h3>
                    <p className="mb-4">
                      Permission is granted to temporarily download one copy of the materials on Zion Tech Group's 
                      website for personal, non-commercial transitory viewing only. This is the grant of a license, 
                      not a transfer of title, and under this license you may not:
                    </p>
                    <ul className="list-disc list-inside space-y-2 ml-4">
                      <li>Modify or copy the materials</li>
                      <li>Use the materials for any commercial purpose or for any public display</li>
                      <li>Attempt to reverse engineer any software contained on the website</li>
                      <li>Remove any copyright or other proprietary notations from the materials</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">3. Service Availability</h3>
                    <p className="mb-4">
                      We strive to maintain high service availability, but we do not guarantee that our services 
                      will be uninterrupted or error-free. We reserve the right to modify, suspend, or discontinue 
                      any part of our services at any time without notice.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">4. User Responsibilities</h3>
                    <p className="mb-4">
                      You are responsible for:
                    </p>
                    <ul className="list-disc list-inside space-y-2 ml-4">
                      <li>Maintaining the confidentiality of your account credentials</li>
                      <li>All activities that occur under your account</li>
                      <li>Complying with all applicable laws and regulations</li>
                      <li>Using our services in accordance with these terms</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">5. Intellectual Property</h3>
                    <p className="mb-4">
                      The content, organization, graphics, design, compilation, magnetic translation, digital 
                      conversion, and other matters related to the website are protected under applicable 
                      copyrights, trademarks, and other proprietary rights. The copying, redistribution, use, 
                      or publication by you of any such matters or any part of the website is strictly prohibited.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">6. Limitation of Liability</h3>
                    <p className="mb-4">
                      In no event shall Zion Tech Group, nor its directors, employees, partners, agents, suppliers, 
                      or affiliates, be liable for any indirect, incidental, special, consequential, or punitive 
                      damages, including without limitation, loss of profits, data, use, goodwill, or other 
                      intangible losses, resulting from your use of the service.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">7. Indemnification</h3>
                    <p className="mb-4">
                      You agree to defend, indemnify, and hold harmless Zion Tech Group and its licensee and 
                      licensors, and their employees, contractors, agents, officers and directors, from and 
                      against any and all claims, damages, obligations, losses, liabilities, costs or debt, 
                      and expenses (including but not limited to attorney's fees).
                    </p>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">8. Termination</h3>
                    <p className="mb-4">
                      We may terminate or suspend your account and bar access to the service immediately, 
                      without prior notice or liability, under our sole discretion, for any reason whatsoever 
                      and without limitation, including but not limited to a breach of the Terms.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">9. Governing Law</h3>
                    <p className="mb-4">
                      These Terms shall be interpreted and governed by the laws of the State of Delaware, 
                      United States, without regard to its conflict of law provisions. Our failure to enforce 
                      any right or provision of these Terms will not be considered a waiver of those rights.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">10. Changes to Terms</h3>
                    <p className="mb-4">
                      We reserve the right, at our sole discretion, to modify or replace these Terms at any time. 
                      If a revision is material, we will provide at least 30 days notice prior to any new terms 
                      taking effect. What constitutes a material change will be determined at our sole discretion.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">11. Contact Information</h3>
                    <p className="mb-4">
                      If you have any questions about these Terms of Service, please contact us using the 
                      information provided in the contact section below.
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Contact Information */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Contact Us</h2>
              <p className="text-lg text-gray-600">
                Get in touch with our legal team for any questions about these terms
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {contactInfo.map((contact, index) => (
                <motion.div
                  key={contact.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <contact.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{contact.title}</h3>
                  <p className="text-gray-600 mb-2 whitespace-pre-line">{contact.value}</p>
                  <p className="text-sm text-gray-500">{contact.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Last Updated */}
        <section className="py-8 bg-gray-100">
          <div className="container mx-auto px-4">
            <div className="text-center text-gray-600">
              <p>
                These Terms of Service were last updated on January 15, 2024. 
                By continuing to use our services, you acknowledge that you have read, understood, 
                and agree to be bound by these terms. These terms shall remain in effect until 
                modified or terminated in accordance with the provisions herein.
              </p>
            </div>
          </div>
        </section>
      </div>
    </MainLayout>
  );
}