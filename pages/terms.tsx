import React from 'react';
import type { NextPage } from 'next';
import MainLayout from '../components/layout/MainLayout';
import { FileText, Scale, AlertCircle, CheckCircle, XCircle } from 'lucide-react';
import { motion } from 'framer-motion';

const Terms: NextPage = () => {
  const termsSections = [
    {
      icon: FileText,
      title: 'Acceptance of Terms',
      content: [
        'By accessing and using Zion Tech Group services, you accept and agree to be bound by these Terms of Service.',
        'If you do not agree to these terms, you may not use our services.',
        'We reserve the right to modify these terms at any time without prior notice.',
        'Your continued use of our services after changes constitutes acceptance of the new terms.'
      ]
    },
    {
      icon: Scale,
      title: 'Service Description',
      content: [
        'Zion Tech Group provides technology consulting, development, and implementation services.',
        'Services include but are not limited to AI development, cloud architecture, cybersecurity, and digital transformation.',
        'We reserve the right to modify, suspend, or discontinue any service at any time.',
        'Service availability is subject to technical limitations and maintenance requirements.'
      ]
    },
    {
      icon: CheckCircle,
      title: 'User Responsibilities',
      content: [
        'Provide accurate and complete information when using our services.',
        'Maintain the confidentiality of your account credentials.',
        'Use our services in compliance with applicable laws and regulations.',
        'Respect intellectual property rights and not engage in unauthorized use of our technology.'
      ]
    },
    {
      icon: XCircle,
      title: 'Prohibited Activities',
      content: [
        'Attempting to gain unauthorized access to our systems or networks.',
        'Using our services for illegal, harmful, or malicious purposes.',
        'Interfering with the proper functioning of our services.',
        'Violating any applicable laws or regulations while using our services.'
      ]
    }
  ];

  return (
    <MainLayout
      title="Terms of Service - Zion Tech Group"
      description="Read Zion Tech Group's Terms of Service to understand your rights and responsibilities when using our technology services."
      keywords="terms of service, user agreement, service terms, legal terms, technology services"
    >
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Scale className="w-16 h-16 mx-auto mb-6 text-blue-400" />
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Terms of Service
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto text-gray-200">
              Please read these terms carefully before using our services. 
              By using our services, you agree to be bound by these terms.
            </p>
            <p className="text-sm text-gray-300">
              Last updated: January 15, 2025
            </p>
          </motion.div>
        </div>
      </section>

      {/* Terms Content */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Introduction */}
            <motion.div
              className="mb-12"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold mb-6 text-gray-800">Introduction</h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-4">
                Welcome to Zion Tech Group. These Terms of Service ("Terms") govern your use of our website, 
                services, and any related applications (collectively, the "Services") provided by Zion Tech Group 
                ("Company," "we," "our," or "us").
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                By accessing or using our Services, you agree to be bound by these Terms. If you disagree with 
                any part of these terms, then you may not access the Services.
              </p>
            </motion.div>

            {/* Terms Sections */}
            <div className="space-y-12">
              {termsSections.map((section, index) => (
                <motion.div
                  key={index}
                  className="bg-gray-50 rounded-lg p-8"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <div className="flex items-center mb-6">
                    <section.icon className="w-8 h-8 text-blue-600 mr-4" />
                    <h3 className="text-2xl font-bold text-gray-800">{section.title}</h3>
                  </div>
                  <ul className="space-y-3">
                    {section.content.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-start">
                        <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        <span className="text-gray-600">{item}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>

            {/* Payment Terms */}
            <motion.div
              className="mt-12 bg-blue-50 rounded-lg p-8"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <h3 className="text-2xl font-bold mb-6 text-gray-800">Payment Terms</h3>
              <div className="space-y-4 text-gray-600">
                <p>
                  <strong>Fees:</strong> Service fees are as specified in your service agreement or proposal. 
                  All fees are non-refundable unless otherwise specified.
                </p>
                <p>
                  <strong>Payment Schedule:</strong> Payment terms will be outlined in your specific service agreement. 
                  Late payments may result in service suspension.
                </p>
                <p>
                  <strong>Taxes:</strong> You are responsible for any applicable taxes based on your location and 
                  the services provided.
                </p>
                <p>
                  <strong>Refunds:</strong> Refund policies are specific to each service and will be detailed 
                  in your service agreement.
                </p>
              </div>
            </motion.div>

            {/* Intellectual Property */}
            <motion.div
              className="mt-12"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <h3 className="text-2xl font-bold mb-6 text-gray-800">Intellectual Property Rights</h3>
              <div className="space-y-4 text-gray-600">
                <p>
                  <strong>Our Content:</strong> All content, trademarks, and intellectual property on our website 
                  and services are owned by Zion Tech Group or our licensors.
                </p>
                <p>
                  <strong>Your Content:</strong> You retain ownership of any content you provide to us. By providing 
                  content, you grant us a license to use it for service delivery purposes.
                </p>
                <p>
                  <strong>Work Product:</strong> Intellectual property rights in work product will be governed by 
                  the terms of your specific service agreement.
                </p>
                <p>
                  <strong>Respect for IP:</strong> You agree not to infringe on the intellectual property rights 
                  of others when using our services.
                </p>
              </div>
            </motion.div>

            {/* Limitation of Liability */}
            <motion.div
              className="mt-12 bg-red-50 rounded-lg p-8"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <div className="flex items-start">
                <AlertCircle className="w-6 h-6 text-red-600 mr-3 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-2xl font-bold mb-4 text-gray-800">Limitation of Liability</h3>
                  <p className="text-gray-600 mb-4">
                    To the maximum extent permitted by law, Zion Tech Group shall not be liable for any indirect, 
                    incidental, special, consequential, or punitive damages, including but not limited to loss of 
                    profits, data, or business opportunities.
                  </p>
                  <p className="text-gray-600">
                    Our total liability for any claims arising from or related to these Terms or our Services 
                    shall not exceed the amount paid by you for the specific service giving rise to the claim.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Termination */}
            <motion.div
              className="mt-12"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
            >
              <h3 className="text-2xl font-bold mb-6 text-gray-800">Termination</h3>
              <div className="space-y-4 text-gray-600">
                <p>
                  <strong>Termination by You:</strong> You may terminate your use of our services at any time 
                  by providing written notice.
                </p>
                <p>
                  <strong>Termination by Us:</strong> We may terminate or suspend your access to our services 
                  immediately, without prior notice, for any reason, including breach of these Terms.
                </p>
                <p>
                  <strong>Effect of Termination:</strong> Upon termination, your right to use the Services will 
                  cease immediately. Provisions that by their nature should survive termination shall remain in effect.
                </p>
              </div>
            </motion.div>

            {/* Governing Law */}
            <motion.div
              className="mt-12 bg-gray-900 text-white rounded-lg p-8"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              <h3 className="text-2xl font-bold mb-6">Governing Law and Dispute Resolution</h3>
              <div className="space-y-4 text-gray-300">
                <p>
                  <strong>Governing Law:</strong> These Terms shall be governed by and construed in accordance 
                  with the laws of the State of California, without regard to conflict of law principles.
                </p>
                <p>
                  <strong>Dispute Resolution:</strong> Any disputes arising from these Terms or our Services 
                  shall be resolved through binding arbitration in accordance with the rules of the American 
                  Arbitration Association.
                </p>
                <p>
                  <strong>Jurisdiction:</strong> Any legal action or proceeding arising under these Terms will 
                  be brought exclusively in the courts of California.
                </p>
              </div>
            </motion.div>

            {/* Contact Information */}
            <motion.div
              className="mt-12 bg-blue-50 rounded-lg p-8"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.9 }}
            >
              <h3 className="text-2xl font-bold mb-6 text-gray-800">Contact Information</h3>
              <p className="text-gray-600 mb-4">
                If you have any questions about these Terms of Service, please contact us:
              </p>
              <div className="space-y-2 text-gray-600">
                <p><strong>Email:</strong> legal@ziontechgroup.com</p>
                <p><strong>Phone:</strong> +1 (555) 123-4567</p>
                <p><strong>Address:</strong> 123 Technology Drive, Innovation City, IC 12345</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default Terms;