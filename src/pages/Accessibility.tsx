import React from 'react';
import { SEO } from '../components/SEO';
import { motion } from 'framer-motion';
import { Accessibility as AccessibilityIcon, Eye, Ear, Hand, Brain, CheckCircle, AlertTriangle, Info, Shield, Users, Globe, Heart } from 'lucide-react';

export default function Accessibility() {
  const accessibilityFeatures = [
    {
      title: 'Visual Accessibility',
      description: 'High contrast modes, resizable text, and screen reader compatibility',
      icon: Eye,
      features: [
        'High contrast color schemes',
        'Resizable text up to 200%',
        'Screen reader compatibility',
        'Keyboard navigation support',
        'Focus indicators for all interactive elements'
      ],
      color: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'Auditory Accessibility',
      description: 'Audio alternatives and caption support for multimedia content',
      icon: Ear,
      features: [
        'Closed captions for videos',
        'Audio descriptions for visual content',
        'Volume controls for audio elements',
        'Text alternatives for audio content',
        'Hearing aid compatibility'
      ],
      color: 'from-green-500 to-emerald-500'
    },
    {
      title: 'Motor Accessibility',
      description: 'Keyboard navigation and alternative input methods',
      icon: Hand,
      features: [
        'Full keyboard navigation',
        'Voice control compatibility',
        'Alternative input device support',
        'Touch-friendly interface elements',
        'Reduced motion options'
      ],
      color: 'from-purple-500 to-pink-500'
    },
    {
      title: 'Cognitive Accessibility',
      description: 'Clear navigation and simplified user experience',
      icon: Brain,
      features: [
        'Clear and simple language',
        'Consistent navigation patterns',
        'Logical content organization',
        'Error prevention and recovery',
        'Multiple ways to complete tasks'
      ],
      color: 'from-orange-500 to-red-500'
    }
  ];

  const complianceStandards = [
    {
      standard: 'WCAG 2.1',
      level: 'AA',
      status: 'Compliant',
      description: 'Web Content Accessibility Guidelines 2.1 Level AA compliance',
      icon: CheckCircle,
      color: 'text-green-400'
    },
    {
      standard: 'Section 508',
      status: 'Compliant',
      description: 'Federal accessibility requirements for electronic and information technology',
      icon: CheckCircle,
      color: 'text-green-400'
    },
    {
      standard: 'ADA Title III',
      status: 'Compliant',
      description: 'Americans with Disabilities Act compliance for digital accessibility',
      icon: CheckCircle,
      color: 'text-green-400'
    },
    {
      standard: 'EN 301 549',
      status: 'Compliant',
      description: 'European accessibility requirements for ICT products and services',
      icon: CheckCircle,
      color: 'text-green-400'
    }
  ];

  const accessibilityTools = [
    {
      name: 'Screen Reader Testing',
      description: 'Regular testing with JAWS, NVDA, and VoiceOver',
      icon: Eye,
      status: 'Active'
    },
    {
      name: 'Keyboard Navigation',
      description: 'Full keyboard accessibility testing and validation',
      icon: Hand,
      status: 'Active'
    },
    {
      name: 'Color Contrast',
      description: 'Automated color contrast ratio testing',
      icon: AccessibilityIcon,
      status: 'Active'
    },
    {
      name: 'Voice Control',
      description: 'Testing with voice control software and devices',
      icon: Ear,
      status: 'Active'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <SEO 
        title="Accessibility Statement - Zion Tech Group"
        description="Zion Tech Group's commitment to digital accessibility and inclusive design. Learn about our accessibility features and compliance standards."
      />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <div className="flex justify-center mb-6">
              <div className="w-20 h-20 bg-gradient-to-br from-cyan-400 via-blue-500 to-purple-600 rounded-2xl flex items-center justify-center">
                <Accessibility className="w-10 h-10 text-white" />
              </div>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Accessibility
              <span className="block bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                Statement
              </span>
            </h1>
            <p className="text-xl text-slate-300 mb-8 max-w-3xl mx-auto">
              Zion Tech Group is committed to ensuring digital accessibility for people with disabilities. 
              We believe that technology should be inclusive and accessible to everyone.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Commitment Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Our Commitment to Accessibility
            </h2>
            <p className="text-xl text-slate-300 mb-8">
              We are committed to making our website and digital services accessible to all users, 
              including those with disabilities. Our goal is to provide an inclusive experience 
              that meets or exceeds accessibility standards.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  icon: Heart,
                  title: 'Inclusive Design',
                  description: 'We design with accessibility in mind from the start'
                },
                {
                  icon: Shield,
                  title: 'Continuous Improvement',
                  description: 'Regular testing and updates to maintain accessibility'
                },
                {
                  icon: Users,
                  title: 'User Feedback',
                  description: 'We welcome feedback to improve accessibility'
                }
              ].map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-slate-700/50"
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <item.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">{item.title}</h3>
                  <p className="text-slate-300">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Accessibility Features */}
      <section className="py-20 bg-slate-800/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Accessibility Features
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Our website includes various accessibility features to ensure an inclusive user experience.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {accessibilityFeatures.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-slate-700/50"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className={`w-16 h-16 bg-gradient-to-br ${feature.color} rounded-xl flex items-center justify-center`}>
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white">{feature.title}</h3>
                    <p className="text-slate-300">{feature.description}</p>
                  </div>
                </div>
                
                <ul className="space-y-3">
                  {feature.features.map((item, idx) => (
                    <li key={idx} className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                      <span className="text-slate-300">{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Compliance Standards */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Compliance Standards
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              We maintain compliance with international accessibility standards and regulations.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {complianceStandards.map((standard, index) => (
              <motion.div
                key={standard.standard}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-slate-700/50"
              >
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-semibold text-white">{standard.standard}</h3>
                  <div className="flex items-center gap-2">
                    <standard.icon className={`w-6 h-6 ${standard.color}`} />
                    <span className={`font-medium ${standard.color}`}>{standard.status}</span>
                  </div>
                </div>
                <p className="text-slate-300">{standard.description}</p>
                {standard.level && (
                  <div className="mt-3">
                    <span className="inline-block px-3 py-1 bg-slate-700 text-slate-300 text-sm rounded-full">
                      Level {standard.level}
                    </span>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testing and Tools */}
      <section className="py-20 bg-slate-800/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Accessibility Testing
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              We regularly test our website using various accessibility tools and assistive technologies.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {accessibilityTools.map((tool, index) => (
              <motion.div
                key={tool.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-slate-700/50 text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <tool.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{tool.name}</h3>
                <p className="text-slate-300 text-sm mb-3">{tool.description}</p>
                <span className="inline-block px-3 py-1 bg-green-500/20 text-green-400 text-sm rounded-full border border-green-500/30">
                  {tool.status}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Feedback and Contact */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              We Value Your Feedback
            </h2>
            <p className="text-xl text-slate-300 mb-8">
              If you experience any accessibility barriers or have suggestions for improvement, 
              please let us know. Your feedback helps us create a better experience for everyone.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-slate-700/50">
                <div className="flex items-center gap-3 mb-4">
                  <Info className="w-6 h-6 text-blue-400" />
                  <h3 className="text-xl font-semibold text-white">Report Issues</h3>
                </div>
                <p className="text-slate-300 mb-4">
                  Help us identify and fix accessibility issues you encounter.
                </p>
                <a
                  href="/contact"
                  className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500 text-white font-medium rounded-lg hover:bg-blue-600 transition-colors"
                >
                  Report Issue
                </a>
              </div>
              
              <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-slate-700/50">
                <div className="flex items-center gap-3 mb-4">
                  <AlertTriangle className="w-6 h-6 text-yellow-400" />
                  <h3 className="text-xl font-semibold text-white">Suggestions</h3>
                </div>
                <p className="text-slate-300 mb-4">
                  Share ideas for improving accessibility and user experience.
                </p>
                <a
                  href="/contact"
                  className="inline-flex items-center gap-2 px-4 py-2 bg-yellow-500 text-white font-medium rounded-lg hover:bg-yellow-600 transition-colors"
                >
                  Share Suggestion
                </a>
              </div>
            </div>
            
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-slate-700/50">
              <h3 className="text-2xl font-bold text-white mb-4">Contact Information</h3>
              <p className="text-slate-300 mb-4">
                For accessibility-related inquiries, please contact our accessibility team:
              </p>
              <div className="space-y-2 text-slate-300">
                <p>Email: accessibility@ziontechgroup.com</p>
                <p>Phone: +1 302 464 0950</p>
                <p>Response time: Within 48 hours</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-cyan-900/20 to-blue-900/20">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Committed to Inclusive Technology
            </h2>
            <p className="text-xl text-slate-300 mb-8 max-w-3xl mx-auto">
              We believe that technology should empower everyone. Our commitment to accessibility 
              ensures that our solutions are available to users of all abilities.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-cyan-400 to-blue-500 text-white font-semibold rounded-lg hover:from-cyan-500 hover:to-blue-600 transition-all duration-300"
              >
                Contact Us
              </a>
              <a
                href="/help"
                className="inline-flex items-center gap-2 px-6 py-3 bg-slate-700/50 text-white font-semibold rounded-lg border border-slate-600 hover:border-cyan-400/50 transition-all duration-300"
              >
                Get Help
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}