import { motion } from 'framer-motion';
import Link from 'next/link';
import { 
  Eye, 
  MousePointer, 
  Volume2, 
  Keyboard, 
  Shield, 
  CheckCircle, 
  ArrowRight,
  Users,
  Settings,
  Globe,
  Heart
} from 'lucide-react';
import Layout from './components/Layout';

const accessibilityFeatures = [
  {
    icon: Eye,
    title: 'Visual Accessibility',
    description: 'High contrast modes, scalable text, and screen reader compatibility',
    features: [
      'High contrast color schemes',
      'Scalable text up to 200%',
      'Screen reader compatibility',
      'Alternative text for images',
      'Clear visual hierarchy'
    ]
  },
  {
    icon: MousePointer,
    title: 'Navigation Accessibility',
    description: 'Keyboard navigation and focus management for all interactive elements',
    features: [
      'Full keyboard navigation support',
      'Visible focus indicators',
      'Skip navigation links',
      'Logical tab order',
      'Consistent navigation patterns'
    ]
  },
  {
    icon: Volume2,
    title: 'Audio Accessibility',
    description: 'Audio alternatives and clear audio content for all users',
    features: [
      'Audio descriptions for videos',
      'Transcripts for audio content',
      'Volume controls',
      'Clear audio quality',
      'Subtitles and captions'
    ]
  },
  {
    icon: Keyboard,
    title: 'Input Accessibility',
    description: 'Multiple input methods and clear form interactions',
    features: [
      'Voice input support',
      'Touch-friendly interfaces',
      'Clear form labels',
      'Error prevention and correction',
      'Multiple input formats'
    ]
  }
];

const complianceStandards = [
  {
    standard: 'WCAG 2.1 AA',
    level: 'Level AA',
    description: 'Web Content Accessibility Guidelines 2.1 Level AA compliance',
    status: 'Fully Compliant',
    icon: CheckCircle
  },
  {
    standard: 'Section 508',
    level: 'Federal Standard',
    description: 'U.S. federal accessibility requirements compliance',
    status: 'Fully Compliant',
    icon: Shield
  },
  {
    standard: 'ADA',
    level: 'Legal Standard',
    description: 'Americans with Disabilities Act compliance',
    status: 'Fully Compliant',
    icon: Users
  }
];

const testingMethods = [
  {
    method: 'Automated Testing',
    description: 'Regular automated scans using industry-standard tools',
    tools: ['axe-core', 'WAVE', 'Lighthouse', 'Pa11y']
  },
  {
    method: 'Manual Testing',
    description: 'Expert manual testing by accessibility specialists',
    tools: ['Screen readers', 'Keyboard-only navigation', 'Voice control']
  },
  {
    method: 'User Testing',
    description: 'Testing with users who have disabilities',
    tools: ['User interviews', 'Usability testing', 'Feedback collection']
  }
];

export default function AccessibilityPage() {
  return (
    <Layout
      title="Accessibility Statement - Zion Tech Group | Inclusive Technology Solutions"
      description="Learn about Zion Tech Group's commitment to accessibility and inclusive design. Our website and services are designed to be accessible to all users."
      keywords="accessibility, inclusive design, WCAG, ADA compliance, accessible technology"
      canonical="https://ziontechgroup.com/accessibility"
    >
      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white py-20">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Accessibility Statement
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
                Zion Tech Group is committed to ensuring digital accessibility for all users. 
                We strive to provide an inclusive experience for everyone.
        {/* Commitment Section */}
              <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
                At Zion Tech Group, we believe that technology should be accessible to everyone. 
                We are committed to ensuring that our website, services, and digital solutions 
                are usable by people of all abilities and disabilities.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <motion.div
                className="text-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1 }}
                viewport={{ once: true }}
              >
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Inclusive Design</h3>
                <p className="text-gray-600">
                  We design our products and services with accessibility in mind from the ground up.
                </p>
              </motion.div>

              <motion.div
                className="text-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Settings className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Continuous Improvement</h3>
                <p className="text-gray-600">
                  We regularly test and improve our accessibility features and compliance.
                </p>
              </motion.div>

              <motion.div
                className="text-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                viewport={{ once: true }}
              >
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Globe className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Global Standards</h3>
                <p className="text-gray-600">
                  We follow international accessibility standards and best practices.
                </p>
              </motion.div>
                Our website and services include comprehensive accessibility features 
                to ensure a great experience for all users.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {accessibilityFeatures.map((feature, index) => {
                const IconComponent = feature.icon;
                return (
                  <motion.div
                    key={index}
                    className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300"
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                        <IconComponent className="w-6 h-6 text-blue-600" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-gray-900">{feature.title}</h3>
                        <p className="text-gray-600">{feature.description}</p>
                      </div>
                    </div>
                    
                    <ul className="space-y-2">
                      {feature.features.map((item, idx) => (
                        <li key={idx} className="flex items-center text-sm text-gray-600">
                          <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                          {item}
                );
              })}
                We adhere to internationally recognized accessibility standards and guidelines.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {complianceStandards.map((standard, index) => {
                const IconComponent = standard.icon;
                return (
                  <motion.div
                    key={index}
                    className="bg-gray-50 rounded-lg p-6 text-center hover:shadow-lg transition-shadow duration-300"
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <IconComponent className="w-8 h-8 text-green-600" />
                    </div>
                    
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      {standard.standard}
                    </h3>
                    
                    <div className="text-blue-600 font-medium mb-2">
                      {standard.level}
                    </div>
                    
                    <p className="text-gray-600 mb-4 text-sm">
                      {standard.description}
                    </p>
                    
                    <div className="bg-green-100 text-green-800 text-sm font-medium px-3 py-1 rounded-full inline-block">
                      {standard.status}
                    </div>
                  </motion.div>
                );
              })}
        {/* Testing Methods */}
                We use multiple testing methods to ensure our accessibility standards are met.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testingMethods.map((method, index) => (
                <motion.div
                  key={index}
                  className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {method.method}
                  </h3>
                  
                  <p className="text-gray-600 mb-4">
                    {method.description}
                  </p>
                  
                  <div className="space-y-2">
                    <h4 className="font-medium text-gray-900">Tools Used:</h4>
                    <div className="flex flex-wrap gap-2">
                      {method.tools.map((tool, idx) => (
                        <span 
                          key={idx}
                          className="bg-blue-100 text-blue-800 text-xs font-medium px-2 py-1 rounded"
                        >
                          {tool}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
        {/* Contact Section */}
        <section className="py-20 bg-blue-600 text-white">
          <div className="container mx-auto px-4 text-center">
            <motion.div
                Report Accessibility Issues
              </h2>
              <p className="text-xl mb-8 text-blue-100 max-w-3xl mx-auto">
                If you encounter any accessibility barriers on our website or services, 
                please let us know. We are committed to addressing these issues promptly.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Link 
                  href="/contact" 
                  className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold transition-colors text-lg"
                >
                  Contact Us
                </Link>
                <Link 
                  href="mailto:accessibility@ziontechgroup.com" 
                  className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 rounded-lg font-semibold transition-colors text-lg"
                >
                  Email Accessibility Team
                </Link>

        {/* Last Updated */}
        <section className="py-8 bg-gray-100">
          <div className="container mx-auto px-4 text-center">
            <p className="text-gray-600">
              This accessibility statement was last updated on{' '}
              <span className="font-medium">
                {new Date().toLocaleDateString('en-US', { 
                  year: 'numeric', 
                  month: 'long', 
                  day: 'numeric' 
                })}
              </span>
            </p>
          </div>
        </section>
      </div>
    </Layout>
