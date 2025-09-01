import React from 'react';
import { motion } from 'framer-motion';
import { SEO } from '../components/SEO';
import { CheckCircle, Monitor, Volume2, Mouse, Smartphone, Contrast, ZoomIn, Type, Palette, Accessibility as AccessibilityIcon, Eye, Ear, Hand, Brain, Heart } from 'lucide-react';

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
      benefits: ['Personalized experience', 'Reduced eye strain', 'Better visibility']
    }
  ];

  const keyboardNavigation = [
    {
      feature: 'Tab Navigation',
      description: 'Full keyboard navigation support with visible focus indicators',
      key: 'Tab, Shift+Tab'
    },
    {
      feature: 'Skip Links',
      description: 'Quick navigation to main content areas',
      key: 'Enter'
    },
    {
      feature: 'Menu Navigation',
      description: 'Arrow keys for menu navigation and selection',
      key: 'Arrow Keys, Enter, Escape'
    },
    {
      feature: 'Form Navigation',
      description: 'Complete form interaction via keyboard',
      key: 'Tab, Space, Enter'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <SEO
        title="Accessibility - Zion Tech Group"
        description="Our commitment to digital accessibility and inclusive design for all users."
        keywords="accessibility, WCAG, inclusive design, assistive technology, Zion Tech Group"
      />

      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-900 to-purple-900 py-20">
        <div className="container mx-auto px-4 text-center">
          <div className="flex justify-center mb-6">
            <div className="p-4 bg-cyan-500/20 rounded-full">
              <AccessibilityIcon className="w-16 h-16 text-cyan-400" />
            </div>
          </div>
          <h1 className="text-5xl font-bold text-white mb-6">
            Accessibility
          </h1>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Our commitment to digital accessibility and inclusive design ensures
            that our technology solutions are usable by everyone.
          </p>
        </div>
      </div>

      {/* Compliance Standards */}
      <div className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-white text-center mb-12">
              Accessibility Compliance
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {complianceStandards.map((standard, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-slate-800 border border-slate-600 rounded-lg p-6 text-center"
                >
                  <div className="flex justify-center mb-4">
                    <div className="p-3 bg-green-500/20 rounded-full">
                      <standard.icon className="w-8 h-8 text-green-400" />
                    </div>
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">
                    {standard.standard}
                  </h3>
                  <p className="text-slate-300 text-sm mb-3">
                    {standard.description}
                  </p>
                  <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium ${standard.color} bg-green-500/20`}>
                    {standard.status}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Assistive Technologies */}
      <div className="py-16 bg-slate-800/30">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-white text-center mb-12">
              Assistive Technology Support
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {assistiveTechnologies.map((tech, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-slate-800 border border-slate-600 rounded-lg p-6"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-3 bg-cyan-500/20 rounded-lg">
                      <tech.icon className="w-8 h-8 text-cyan-400" />
                    </div>
                    <h3 className="text-xl font-semibold text-white">
                      {tech.name}
                    </h3>
                  </div>
                  <p className="text-slate-300 mb-4">
                    {tech.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {tech.examples.map((example, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 bg-slate-700 text-slate-300 text-sm rounded-full"
                      >
                        {example}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Accessibility Features */}
      <div className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-white text-center mb-12">
              Key Accessibility Features
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {accessibilityFeatures.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-slate-800 border border-slate-600 rounded-lg p-6"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-3 bg-cyan-500/20 rounded-lg">
                      <feature.icon className="w-8 h-8 text-cyan-400" />
                    </div>
                    <h3 className="text-xl font-semibold text-white">
                      {feature.title}
                    </h3>
                  </div>
                  <p className="text-slate-300 mb-4">
                    {feature.description}
                  </p>
                  <ul className="space-y-2">
                    {feature.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-slate-300 text-sm">
                        <CheckCircle className="w-4 h-4 text-cyan-400" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Keyboard Navigation */}
      <div className="py-16 bg-slate-800/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-white text-center mb-12">
              Keyboard Navigation
            </h2>
            <div className="space-y-4">
              {keyboardNavigation.map((nav, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-slate-800 border border-slate-600 rounded-lg p-6"
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-2">
                        {nav.feature}
                      </h3>
                      <p className="text-slate-300">
                        {nav.description}
                      </p>
                    </div>
                    <div className="text-right">
                      <span className="text-sm text-slate-400 mb-2 block">Keyboard Shortcut</span>
                      <kbd className="px-3 py-2 bg-slate-700 text-cyan-400 rounded-lg font-mono text-sm">
                        {nav.key}
                      </kbd>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Commitment Statement */}
      <div className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-white mb-8">
              Our Accessibility Commitment
            </h2>
            <p className="text-slate-300 text-lg mb-8">
              We believe that technology should be accessible to everyone, regardless of ability.
              Our commitment to accessibility is ongoing, and we continuously work to improve
              the user experience for all users.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-slate-800 border border-slate-600 rounded-lg p-6">
                <div className="flex justify-center mb-4">
                  <div className="p-3 bg-blue-500/20 rounded-full">
                    <Eye className="w-8 h-8 text-blue-400" />
                  </div>
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">
                  Visual Accessibility
                </h3>
                <p className="text-slate-300 text-sm">
                  High contrast, scalable text, and color customization options
                </p>
              </div>
              
              <div className="bg-slate-800 border border-slate-600 rounded-lg p-6">
                <div className="flex justify-center mb-4">
                  <div className="p-3 bg-green-500/20 rounded-full">
                    <Ear className="w-8 h-8 text-green-400" />
                  </div>
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">
                  Audio Accessibility
                </h3>
                <p className="text-slate-300 text-sm">
                  Screen reader compatibility and audio description support
                </p>
              </div>
              
              <div className="bg-slate-800 border border-slate-600 rounded-lg p-6">
                <div className="flex justify-center mb-4">
                  <div className="p-3 bg-purple-500/20 rounded-full">
                    <Hand className="w-8 h-8 text-purple-400" />
                  </div>
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">
                  Motor Accessibility
                </h3>
                <p className="text-slate-300 text-sm">
                  Full keyboard navigation and alternative input device support
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div className="py-16 bg-gradient-to-r from-blue-900 to-purple-900">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Need Accessibility Support?
          </h2>
          <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
            If you encounter any accessibility issues or have suggestions for improvement,
            please contact our accessibility team.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="bg-cyan-500 text-slate-900 px-8 py-3 rounded-lg font-semibold hover:bg-cyan-400 transition-colors inline-flex items-center gap-2"
            >
              <AccessibilityIcon className="w-5 h-5" />
              Contact Us
            </a>
            <a
              href="mailto:accessibility@ziontechgroup.com"
              className="border border-cyan-500 text-cyan-400 px-8 py-3 rounded-lg font-semibold hover:bg-cyan-500 hover:text-slate-900 transition-colors"
            >
              Send Email
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Accessibility;