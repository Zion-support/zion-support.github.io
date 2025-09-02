<<<<<<< HEAD
import React from 'react';
import { motion } from 'framer-motion';
import { SEO } from '@/components/SEO';
import { 
  CheckCircle, 
  Monitor, 
  Volume2, 
  Mouse, 
  Smartphone, 
  Contrast, 
  ZoomIn, 
  Type, 
  Palette, 
  Accessibility as AccessibilityIcon, 
  Eye, 
  Ear, 
  Hand, 
  Brain, 
  Heart 
} from 'lucide-react';

const Accessibility: React.FC = () => {
  const complianceStandards = [
    {
      standard: 'WCAG 2.1 AA',
      description: 'Web Content Accessibility Guidelines 2.1 Level AA compliance',
      status: 'Fully Compliant',
      icon: CheckCircle,
      color: 'text-green-400'
    },
    {
      standard: 'Section 508',
      description: 'Federal accessibility requirements for electronic and information technology',
      status: 'Fully Compliant',
      icon: CheckCircle,
      color: 'text-green-400'
    },
    {
      standard: 'ADA Title III',
      description: 'Americans with Disabilities Act requirements for public accommodations',
      status: 'Fully Compliant',
      icon: CheckCircle,
      color: 'text-green-400'
    },
    {
      standard: 'EN 301 549',
      description: 'European accessibility requirements for ICT products and services',
      status: 'Fully Compliant',
      icon: CheckCircle,
      color: 'text-green-400'
    }
  ];

  const assistiveTechnologies = [
    {
      name: 'Screen Readers',
      description: 'Compatible with JAWS, NVDA, VoiceOver, and TalkBack',
      icon: Monitor,
      examples: ['JAWS', 'NVDA', 'VoiceOver', 'TalkBack', 'Narrator']
    },
    {
      name: 'Voice Control',
      description: 'Voice recognition software support for hands-free navigation',
      icon: Volume2,
      examples: [
        'Dragon NaturallySpeaking',
        'Voice Control (macOS)',
        'Windows Speech Recognition'
      ]
    },
    {
      name: 'Switch Devices',
      description: 'Alternative input devices for users with limited mobility',
      icon: Mouse,
      examples: [
        'Head switches',
        'Eye tracking',
        'Sip and puff devices',
        'Foot pedals'
      ]
    },
    {
      name: 'Mobile Accessibility',
      description: 'Optimized for mobile assistive technologies',
      icon: Smartphone,
      examples: [
        'iOS VoiceOver',
        'Android TalkBack',
        'Switch Control',
        'AssistiveTouch'
      ]
    }
  ];

  const accessibilityFeatures = [
    {
      icon: Contrast,
      title: 'High Contrast Mode',
      description: 'Enhanced color contrast options for better visibility',
      benefits: ['Improved readability', 'Reduced eye strain', 'Better focus']
    },
    {
      icon: ZoomIn,
      title: 'Zoom & Scaling',
      description: 'Text and interface scaling up to 200% without loss of functionality',
      benefits: ['Better readability', 'Flexible viewing options', 'Maintained layout']
    },
    {
      icon: Type,
      title: 'Typography Options',
      description: 'Customizable font sizes, spacing, and line heights',
      benefits: ['Improved readability', 'Personalized experience', 'Better comprehension']
    },
    {
      icon: Palette,
      title: 'Color Customization',
      description: 'Adjustable color schemes and contrast options',
      benefits: ['Personalized experience', 'Better visibility', 'Reduced eye strain']
    }
  ];

  const keyboardNavigation = [
    {
      icon: Eye,
      title: 'Tab Navigation',
      description: 'Full keyboard navigation support with visible focus indicators',
      key: 'Tab, Shift+Tab'
    },
    {
      icon: Ear,
      title: 'Skip Links',
      description: 'Quick navigation to main content areas',
      key: 'Enter'
    },
    {
      icon: Hand,
      title: 'Shortcut Keys',
      description: 'Keyboard shortcuts for common actions',
      key: 'Ctrl/Cmd + S, Ctrl/Cmd + F'
    },
    {
      icon: Brain,
      title: 'Logical Order',
      description: 'Logical tab order that follows visual layout',
      key: 'Tab navigation'
    }
  ];

  const testingResults = [
    {
      category: 'Screen Reader Testing',
      tools: ['JAWS', 'NVDA', 'VoiceOver', 'TalkBack'],
      status: 'Passed',
      details: 'All content properly announced and navigable'
    },
    {
      category: 'Keyboard Navigation',
      tools: ['Manual testing', 'Keyboard-only navigation'],
      status: 'Passed',
      details: 'Full functionality accessible via keyboard'
    },
    {
      category: 'Color Contrast',
      tools: ['WebAIM Contrast Checker', 'Lighthouse'],
      status: 'Passed',
      details: 'All text meets WCAG AA contrast requirements'
    },
    {
      category: 'Mobile Accessibility',
      tools: ['iOS VoiceOver', 'Android TalkBack'],
      status: 'Passed',
      details: 'Optimized for mobile assistive technologies'
    }
  ];

  return (
    <>
      <SEO 
        title="Accessibility - Zion Tech Group"
        description="Learn about Zion Tech Group's commitment to digital accessibility and inclusive design for all users."
        keywords="accessibility, WCAG, ADA compliance, inclusive design, assistive technology"
      />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white">
        {/* Header */}
        <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="w-20 h-20 bg-gradient-to-r from-green-500 to-blue-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <AccessibilityIcon className="w-10 h-10 text-white" />
              </div>
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Digital <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-400">Accessibility</span>
              </h1>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                We are committed to making our digital experiences accessible to everyone, 
                regardless of their abilities or the technology they use.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Compliance Standards */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Accessibility Compliance</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                We maintain the highest standards of digital accessibility compliance 
                to ensure our services are available to all users.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {complianceStandards.map((standard, index) => (
                <motion.div
                  key={standard.standard}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-xl p-6 text-center"
                >
                  <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-blue-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <standard.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">{standard.standard}</h3>
                  <p className="text-gray-300 text-sm mb-3">{standard.description}</p>
                  <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium ${standard.color}`}>
                    {standard.status}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Assistive Technologies */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Assistive Technology Support</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our platform is designed to work seamlessly with a wide range of 
                assistive technologies and accessibility tools.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {assistiveTechnologies.map((tech, index) => (
                <motion.div
                  key={tech.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-xl p-6"
                >
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center mr-4">
                      <tech.icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-white">{tech.name}</h3>
                  </div>
                  <p className="text-gray-300 mb-4">{tech.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {tech.examples.map((example, idx) => (
                      <span key={idx} className="px-3 py-1 bg-slate-700/50 text-cyan-400 rounded-full text-sm">
                        {example}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Accessibility Features */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Accessibility Features</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Built-in accessibility features that enhance the user experience 
                for everyone, regardless of their abilities.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {accessibilityFeatures.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-xl p-6 text-center"
                >
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">{feature.title}</h3>
                  <p className="text-gray-300 text-sm mb-4">{feature.description}</p>
                  <ul className="space-y-1">
                    {feature.benefits.map((benefit, idx) => (
                      <li key={idx} className="text-xs text-cyan-400">
                        • {benefit}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Keyboard Navigation */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Keyboard Navigation</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Full keyboard accessibility ensures that users can navigate and interact 
                with our platform without requiring a mouse.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {keyboardNavigation.map((nav, index) => (
                <motion.div
                  key={nav.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-xl p-6 text-center"
                >
                  <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <nav.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">{nav.title}</h3>
                  <p className="text-gray-300 text-sm mb-3">{nav.description}</p>
                  <div className="bg-slate-700/50 rounded-lg p-2">
                    <code className="text-cyan-400 text-sm font-mono">{nav.key}</code>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Testing Results */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Accessibility Testing</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Regular testing with real assistive technologies ensures our platform 
                meets the highest accessibility standards.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {testingResults.map((test, index) => (
                <motion.div
                  key={test.category}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-xl p-6"
                >
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-xl font-bold text-white">{test.category}</h3>
                    <span className="inline-flex items-center px-3 py-1 bg-green-500/20 text-green-400 rounded-full text-sm font-medium">
                      <CheckCircle className="w-4 h-4 mr-1" />
                      {test.status}
                    </span>
                  </div>
                  <div className="mb-4">
                    <h4 className="text-sm font-medium text-gray-300 mb-2">Testing Tools:</h4>
                    <div className="flex flex-wrap gap-2">
                      {test.tools.map((tool, idx) => (
                        <span key={idx} className="px-2 py-1 bg-slate-700/50 text-cyan-400 rounded text-xs">
                          {tool}
                        </span>
                      ))}
                    </div>
                  </div>
                  <p className="text-gray-300 text-sm">{test.details}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Accessibility Feedback</h2>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                We're committed to continuous improvement. If you encounter any 
                accessibility issues, please let us know so we can address them.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-green-500 to-blue-500 text-white font-semibold rounded-lg hover:from-green-600 hover:to-blue-600 transition-all duration-300 transform hover:scale-105"
                >
                  <Heart className="w-5 h-5 mr-2" />
                  Report Accessibility Issue
                </a>
                <a
                  href="mailto:accessibility@ziontechgroup.com"
                  className="inline-flex items-center px-8 py-3 border-2 border-blue-400 text-blue-400 font-semibold rounded-lg hover:bg-blue-400 hover:text-white transition-all duration-300"
                >
                  <AccessibilityIcon className="w-5 h-5 mr-2" />
                  Accessibility Team
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Accessibility;
=======
>>>>>>> origin/main
