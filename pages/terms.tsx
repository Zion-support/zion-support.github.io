import { motion } from 'framer-motion';
import Head from 'next/head';
import { 
  FileText, 
  Shield, 
  AlertTriangle, 
  CheckCircle, 
  Users, 
  Database,
  Globe,
  ArrowRight,
  Star,
  Award,
  Lock
} from 'lucide-react';

const termsSections = [
  {
    title: 'Acceptance of Terms',
    description: 'By accessing and using our services, you agree to be bound by these terms and conditions.',
    icon: CheckCircle,
    color: 'from-green-500 to-emerald-500',
    details: [
      'Agreement to terms by using our services',
      'Modifications to terms at any time',
      'Continued use constitutes acceptance',
      'Contact us for questions about terms'
    ]
  },
  {
    title: 'Service Description',
    description: 'We provide technology consulting, development, and support services.',
    icon: Database,
    color: 'from-blue-500 to-cyan-500',
    details: [
      'Technology consulting services',
      'Software development and customization',
      'Cloud solutions and migration',
      'Ongoing support and maintenance'
    ]
  },
  {
    title: 'User Responsibilities',
    description: 'Users are responsible for their use of our services and compliance with applicable laws.',
    icon: Users,
    color: 'from-purple-500 to-violet-500',
    details: [
      'Accurate information provision',
      'Compliance with applicable laws',
      'Respect for intellectual property rights',
      'Appropriate use of our services'
    ]
  },
  {
    title: 'Limitation of Liability',
    description: 'Our liability is limited as described in these terms and applicable law.',
    icon: Shield,
    color: 'from-red-500 to-pink-500',
    details: [
      'Limitation of direct damages',
      'Exclusion of consequential damages',
      'Maximum liability limitations',
      'Force majeure provisions'
    ]
  }
];

const keyPoints = [
  {
    title: 'Service Availability',
    description: 'We strive to maintain high service availability but cannot guarantee 100% uptime.',
    icon: Globe
  },
  {
    title: 'Data Protection',
    description: 'We implement appropriate security measures to protect your data.',
    icon: Lock
  },
  {
    title: 'Intellectual Property',
    description: 'You retain ownership of your data and intellectual property.',
    icon: FileText
  },
  {
    title: 'Termination',
    description: 'Either party may terminate services with appropriate notice.',
    icon: AlertTriangle
  }
];

export default function TermsPage() {
  return (
    <>
      <Head>
        <title>Terms of Service - Zion Tech Group</title>
        <meta name="description" content="Terms and conditions for using our services." />
        <meta name="keywords" content="terms of service, legal, conditions, agreement" />
      </Head>

      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
        {/* Hero Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 opacity-90"></div>
          <div className="absolute inset-0 bg-black opacity-20"></div>
          
          <div className="container mx-auto px-4 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center text-white"
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Terms of{' '}
                <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  Service
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
                Please read these terms and conditions carefully before using our services. 
                By using our services, you agree to be bound by these terms.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Terms Sections */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Terms and Conditions
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                These terms govern your use of our services and outline our mutual rights and responsibilities.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="grid grid-cols-1 md:grid-cols-2 gap-8"
            >
              {termsSections.map((section, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                  className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
                >
                  <div className="flex items-start mb-6">
                    <div className={`w-12 h-12 bg-gradient-to-r ${section.color} rounded-lg flex items-center justify-center mr-4 flex-shrink-0`}>
                      <section.icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-gray-900 mb-2">
                        {section.title}
                      </h3>
                      <p className="text-gray-600 mb-4">
                        {section.description}
                      </p>
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="font-medium text-gray-900 mb-3">Key Points:</h4>
                    <ul className="space-y-2">
                      {section.details.map((detail, detailIndex) => (
                        <li key={detailIndex} className="flex items-center text-sm text-gray-600">
                          <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                          {detail}
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Key Points */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Important Information
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Key points you should know about our terms and your rights.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
            >
              {keyPoints.map((point, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                  className="text-center p-6 rounded-lg hover:shadow-lg transition-shadow"
                >
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <point.icon className="w-8 h-8 text-blue-600" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-3">
                    {point.title}
                  </h3>
                  <p className="text-gray-600">
                    {point.description}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Questions About Our Terms?
              </h2>
              <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
                If you have any questions about these terms and conditions, 
                please don't hesitate to contact our legal team.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="mailto:legal@ziontechgroup.com"
                  className="bg-blue-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors"
                >
                  Contact Legal Team
                </a>
                <a 
                  href="/contact"
                  className="border border-blue-600 text-blue-600 px-8 py-3 rounded-lg font-medium hover:bg-blue-600 hover:text-white transition-colors"
                >
                  General Contact
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
}