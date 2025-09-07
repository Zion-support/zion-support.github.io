import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Eye, Lock, Database, UserCheck, AlertTriangle } from 'lucide-react';
import MainLayout from '../components/layout/MainLayout';

const privacyPrinciples = [
  {
    icon: Shield,
    title: "Data Protection",
    description: "We implement industry-standard security measures to protect your personal information from unauthorized access, alteration, or disclosure."
  },
  {
    icon: Eye,
    title: "Transparency",
    description: "We are transparent about what data we collect, how we use it, and who we share it with. You have the right to know and control your data."
  },
  {
    icon: Lock,
    title: "Data Minimization",
    description: "We only collect the minimum amount of personal data necessary to provide our services and improve your experience."
  },
  {
    icon: Database,
    title: "Secure Storage",
    description: "Your data is stored securely using encryption and other security measures, and we regularly audit our systems for vulnerabilities."
  },
  {
    icon: UserCheck,
    title: "User Control",
    description: "You have control over your personal data, including the right to access, correct, delete, or port your information."
  },
  {
    icon: AlertTriangle,
    title: "Breach Notification",
    description: "In the unlikely event of a data breach, we will notify affected users and relevant authorities within 72 hours."
  }
];

const dataTypes = [
  {
    category: "Personal Information",
    description: "Information that can be used to identify you directly",
    examples: [
      "Name and contact information (email, phone, address)",
      "Account credentials and profile information",
      "Payment and billing information",
      "Communication preferences"
    ]
  },
  {
    category: "Usage Data",
    description: "Information about how you interact with our services",
    examples: [
      "Website usage patterns and preferences",
      "Service usage statistics and analytics",
      "Device information and browser details",
      "IP addresses and location data"
    ]
  },
  {
    category: "Technical Data",
    description: "Information collected automatically through our services",
    examples: [
      "Log files and error reports",
      "Performance metrics and system data",
      "Security and authentication logs",
      "Cookies and similar technologies"
    ]
  }
];

const rights = [
  {
    title: "Right to Access",
    description: "You can request a copy of all personal data we hold about you."
  },
  {
    title: "Right to Rectification",
    description: "You can request correction of inaccurate or incomplete personal data."
  },
  {
    title: "Right to Erasure",
    description: "You can request deletion of your personal data under certain circumstances."
  },
  {
    title: "Right to Portability",
    description: "You can request a copy of your data in a machine-readable format."
  },
  {
    title: "Right to Object",
    description: "You can object to processing of your personal data for certain purposes."
  },
  {
    title: "Right to Restrict Processing",
    description: "You can request restriction of processing of your personal data."
  }
];

export default function PrivacyPage() {
  return (
    <MainLayout>
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
                Privacy <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Policy</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Your privacy is important to us. Learn how we collect, use, and protect your personal information.
              </p>
              <p className="text-sm text-gray-400">
                Last updated: January 15, 2024
              </p>
            </motion.div>
          </div>
        </section>

        {/* Privacy Principles */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Our Privacy Principles
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                We are committed to protecting your privacy and handling your personal data with care and respect.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {privacyPrinciples.map((principle, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="text-center p-6"
                >
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <principle.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{principle.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{principle.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Data Collection */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Information We Collect
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                We collect different types of information to provide and improve our services.
              </p>
            </motion.div>

            <div className="space-y-8">
              {dataTypes.map((dataType, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white rounded-xl shadow-lg p-8"
                >
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">{dataType.category}</h3>
                  <p className="text-gray-600 mb-6">{dataType.description}</p>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">Examples include:</h4>
                    <ul className="space-y-2">
                      {dataType.examples.map((example, exampleIndex) => (
                        <li key={exampleIndex} className="flex items-start text-gray-600">
                          <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          {example}
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* How We Use Data */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                How We Use Your Information
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                We use your personal information for legitimate business purposes and to improve our services.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="bg-gray-50 rounded-xl p-8"
              >
                <h3 className="text-xl font-bold text-gray-900 mb-4">Service Delivery</h3>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Provide and maintain our services
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Process transactions and payments
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Communicate with you about our services
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Provide customer support
                  </li>
                </ul>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="bg-gray-50 rounded-xl p-8"
              >
                <h3 className="text-xl font-bold text-gray-900 mb-4">Improvement & Analytics</h3>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Analyze usage patterns and trends
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Improve our services and user experience
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Develop new features and products
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Conduct research and analytics
                  </li>
                </ul>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Your Rights */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Your Privacy Rights
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                You have certain rights regarding your personal information under applicable privacy laws.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {rights.map((right, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white rounded-xl shadow-lg p-6"
                >
                  <h3 className="text-lg font-bold text-gray-900 mb-3">{right.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{right.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Information */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Questions About Privacy?
              </h2>
              <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
                If you have any questions about this Privacy Policy or our data practices, please contact us.
              </p>
              <div className="bg-gray-50 rounded-xl p-8 max-w-2xl mx-auto">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Contact Information</h3>
                <div className="space-y-3 text-gray-600">
                  <p><strong>Email:</strong> privacy@ziontechgroup.com</p>
                  <p><strong>Phone:</strong> +1 302 464 0950</p>
                  <p><strong>Address:</strong> 123 Technology Drive, Suite 100, New York, NY 10001</p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </MainLayout>
  );
}