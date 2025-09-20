import React from 'react';
import { motion } from 'framer-motion';
import { FileText, Scale, Shield, Clock, CheckCircle, AlertTriangle } from 'lucide-react';
import Layout from '../components/layout/Layout';

const Terms: React.FC = () => {
  const termsSections = [
    {
      id: 'user-agreement',
      title: 'User Agreement',
      icon: <FileText className="w-6 h-6" />,
      content: [
        'By using our services, you agree to these terms and conditions',
        'You must be at least 18 years old to use our platform',
        'You are responsible for maintaining the security of your account',
        'You agree not to use our services for illegal activities'
      ]
    },
    {
      id: 'service-usage',
      title: 'Service Usage',
      icon: <Scale className="w-6 h-6" />,
      content: [
        'Services are provided "as is" without warranties',
        'We reserve the right to modify or discontinue services',
        'Users must comply with all applicable laws and regulations',
        'Prohibited activities include spam, harassment, and fraud'
      ]
    },
    {
      id: 'privacy-data',
      title: 'Privacy & Data',
      icon: <Shield className="w-6 h-6" />,
      content: [
        'We collect and process data according to our Privacy Policy',
        'User data is protected using industry-standard security measures',
        'We do not sell personal information to third parties',
        'Users can request data deletion at any time'
      ]
    },
    {
      id: 'liability',
      title: 'Liability & Limitations',
      icon: <AlertTriangle className="w-6 h-6" />,
      content: [
        'Our liability is limited to the amount paid for services',
        'We are not liable for indirect or consequential damages',
        'Force majeure events may affect service availability',
        'Users assume responsibility for their use of our services'
      ]
    }
  ];

  const prohibitedActivities = [
    'Unauthorized access to our systems or networks',
    'Interference with service operation',
    'Distribution of malware or harmful code',
    'Violation of intellectual property rights',
    'Spam or unsolicited communications',
    'Harassment or abusive behavior',
    'Fraud or deceptive practices',
    'Violation of applicable laws or regulations'
  ];

  const userObligations = [
    'Provide accurate and complete information',
    'Maintain the confidentiality of account credentials',
    'Use services only for lawful purposes',
    'Respect intellectual property rights',
    'Report security vulnerabilities responsibly',
    'Comply with all applicable terms and policies'
  ];

  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900">
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 px-4">
          <div className="max-w-7xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full text-sm font-bold mb-6">
                <FileText className="w-5 h-5 mr-2" />
                LEGAL DOCUMENTS
              </div>
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                Terms of Service
              </h1>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
                Please read these terms carefully before using our services. By accessing or using our platform, you agree to be bound by these terms.
              </p>
              <div className="flex items-center justify-center text-sm text-gray-400">
                <Clock className="w-4 h-4 mr-2" />
                Last updated: January 2025
              </div>
            </motion.div>
          </div>
        </section>

        {/* Terms Overview */}
        <section id="terms-sections" className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Key Terms & Conditions
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Understanding your rights and responsibilities when using our services
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {termsSections.map((section, index) => (
                <motion.div
                  key={section.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50 hover:border-blue-500/50 transition-all duration-300"
                >
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl flex items-center justify-center mr-4">
                      {section.icon}
                    </div>
                    <h3 className="text-2xl font-bold text-white">{section.title}</h3>
                  </div>
                  <ul className="space-y-3">
                    {section.content.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-green-400 mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-300">{item}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* User Obligations */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                User Obligations
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Your responsibilities as a user of our platform
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {userObligations.map((obligation, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-gradient-to-r from-blue-900/30 to-purple-900/30 backdrop-blur-sm rounded-xl p-6 border border-blue-500/20"
                >
                  <div className="flex items-center">
                    <CheckCircle className="w-6 h-6 text-green-400 mr-3" />
                    <span className="text-white font-medium">{obligation}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Prohibited Activities */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Prohibited Activities
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Activities that are strictly forbidden on our platform
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {prohibitedActivities.map((activity, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-gradient-to-r from-red-900/30 to-orange-900/30 backdrop-blur-sm rounded-xl p-6 border border-red-500/20"
                >
                  <div className="flex items-center">
                    <AlertTriangle className="w-6 h-6 text-red-400 mr-3" />
                    <span className="text-white font-medium">{activity}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-20 px-4 bg-white/5">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Questions About These Terms?
              </h2>
              <p className="text-xl text-gray-400 mb-8">
                If you have any questions about these terms of service, please contact our legal team.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all duration-300"
                >
                  Contact Legal Team
                </a>
                <a
                  href="/support"
                  className="inline-flex items-center px-8 py-4 border-2 border-white text-white font-semibold rounded-xl hover:bg-white hover:text-gray-900 transition-all duration-300"
                >
                  General Contact
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default Terms;