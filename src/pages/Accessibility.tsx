import React from 'react';
import { motion } from 'framer-motion';
import { 
  Accessibility, 
  Eye, 
  Ear, 
  MousePointer, 
  Keyboard, 
  CheckCircle, 
  AlertTriangle,
  ArrowRight,
  Heart,
  Users,
  Globe
} from 'lucide-react';

const Accessibility: React.FC = () => {
  const accessibilityFeatures = [
    {
      category: 'Visual Accessibility',
      features: [
        'High contrast color schemes',
        'Resizable text and zoom support',
        'Alternative text for images',
        'Clear typography and spacing',
        'Consistent visual hierarchy'
      ],
      icon: Eye
    },
    {
      category: 'Auditory Accessibility',
      features: [
        'Closed captions for videos',
        'Transcripts for audio content',
        'Visual alerts and notifications',
        'Volume controls and audio options',
        'Alternative text descriptions'
      ],
      icon: Ear
    },
    {
      category: 'Motor Accessibility',
      features: [
        'Keyboard navigation support',
        'Large click targets',
        'Voice control compatibility',
        'Customizable timeouts',
        'Alternative input methods'
      ],
      icon: MousePointer
    },
    {
      category: 'Cognitive Accessibility',
      features: [
        'Clear and simple language',
        'Consistent navigation patterns',
        'Logical content organization',
        'Minimal distractions',
        'Multiple ways to find content'
      ],
      icon: Heart
    }
  ];

  const standards = [
    {
      name: 'WCAG 2.1 AA',
      description: 'Web Content Accessibility Guidelines 2.1 Level AA compliance',
      status: 'Compliant'
    },
    {
      name: 'Section 508',
      description: 'Federal accessibility requirements for electronic information',
      status: 'Compliant'
    },
    {
      name: 'ADA Compliance',
      description: 'Americans with Disabilities Act accessibility standards',
      status: 'Compliant'
    },
    {
      name: 'EN 301 549',
      description: 'European accessibility requirements for ICT products',
      status: 'In Progress'
    }
  ];

  const assistiveTechnologies = [
    'Screen readers (JAWS, NVDA, VoiceOver)',
    'Screen magnification software',
    'Voice recognition software',
    'Switch devices and alternative keyboards',
    'Braille displays and refreshable displays',
    'High contrast and color modification tools'
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="flex justify-center mb-6">
              <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-pink-600 rounded-2xl flex items-center justify-center">
                <Accessibility className="w-10 h-10 text-white" />
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Digital
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">
                {' '}Accessibility
              </span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              We are committed to making our website accessible to everyone, 
              regardless of ability or disability. Learn about our accessibility features 
              and how we ensure inclusive digital experiences.
            </p>
            <div className="text-sm text-gray-400">
              Last updated: {new Date().toLocaleDateString()}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Commitment Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 border border-slate-700/50"
          >
            <h2 className="text-2xl font-bold text-white mb-6">Our Accessibility Commitment</h2>
            <p className="text-gray-300 mb-4">
              At Zion Tech Group, we believe that digital accessibility is not just a legal requirement, 
              but a fundamental human right. We are committed to creating inclusive digital experiences 
              that work for everyone.
            </p>
            <p className="text-gray-300">
              Our team continuously works to improve accessibility by following industry best practices, 
              conducting regular audits, and incorporating feedback from users with disabilities.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Accessibility Features */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Accessibility Features
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              We implement comprehensive accessibility features across our website 
              to support users with various needs and preferences.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {accessibilityFeatures.map((category, index) => (
              <motion.div
                key={category.category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700/50"
              >
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-xl flex items-center justify-center">
                    <category.icon className="w-6 h-6 text-purple-400" />
                  </div>
                  <h3 className="text-xl font-semibold text-white">{category.category}</h3>
                </div>
                <ul className="space-y-2">
                  {category.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start space-x-3">
                      <CheckCircle className="w-4 h-4 text-green-400 mt-1 flex-shrink-0" />
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Standards Compliance */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/20">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Accessibility Standards
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              We strive to meet and exceed international accessibility standards 
              to ensure the highest level of digital inclusion.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {standards.map((standard, index) => (
              <motion.div
                key={standard.name}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700/50"
              >
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-lg font-semibold text-white">{standard.name}</h3>
                  <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                    standard.status === 'Compliant' 
                      ? 'bg-green-500/20 text-green-400' 
                      : 'bg-yellow-500/20 text-yellow-400'
                  }`}>
                    {standard.status}
                  </span>
                </div>
                <p className="text-gray-300 text-sm">{standard.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Assistive Technologies */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Compatible Technologies
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Our website is designed to work seamlessly with a wide range of 
              assistive technologies and accessibility tools.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {assistiveTechnologies.map((technology, index) => (
              <motion.div
                key={technology}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex items-center space-x-3"
              >
                <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                <span className="text-gray-300">{technology}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Keyboard Navigation */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/20">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Keyboard Navigation
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Navigate our website entirely using your keyboard for enhanced accessibility.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700/50"
            >
              <div className="flex items-center space-x-3 mb-4">
                <Keyboard className="w-6 h-6 text-blue-400" />
                <h3 className="text-xl font-semibold text-white">Navigation Keys</h3>
              </div>
              <ul className="space-y-2 text-gray-300">
                <li>• <kbd className="px-2 py-1 bg-slate-700 rounded text-sm">Tab</kbd> - Navigate between interactive elements</li>
                <li>• <kbd className="px-2 py-1 bg-slate-700 rounded text-sm">Enter</kbd> - Activate buttons and links</li>
                <li>• <kbd className="px-2 py-1 bg-slate-700 rounded text-sm">Space</kbd> - Toggle checkboxes and radio buttons</li>
                <li>• <kbd className="px-2 py-1 bg-slate-700 rounded text-sm">Arrow Keys</kbd> - Navigate within components</li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700/50"
            >
              <div className="flex items-center space-x-3 mb-4">
                <MousePointer className="w-6 h-6 text-green-400" />
                <h3 className="text-xl font-semibold text-white">Skip Links</h3>
              </div>
              <ul className="space-y-2 text-gray-300">
                <li>• Skip to main content</li>
                <li>• Skip to navigation</li>
                <li>• Skip to footer</li>
                <li>• Skip to search</li>
              </ul>
              <p className="text-sm text-gray-400 mt-3">
                Press Tab at the beginning of any page to access skip links.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Feedback Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Help Us Improve
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              We value your feedback on accessibility. If you encounter any accessibility 
              barriers or have suggestions for improvement, please let us know.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-600 text-white font-semibold rounded-lg hover:from-purple-600 hover:to-pink-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-purple-500/25"
              >
                Report Accessibility Issue
              </a>
              <a
                href="/contact"
                className="px-8 py-4 border border-purple-500 text-purple-400 font-semibold rounded-lg hover:bg-purple-500 hover:text-white transition-all duration-300"
              >
                Contact Us
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Accessibility;