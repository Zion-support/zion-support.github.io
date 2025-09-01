import React from 'react';
import Link from 'next/link';
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
  Users,
  Globe,
  Settings,
  Shield,
  Heart,
  Star,
  Zap
} from 'lucide-react';

export default function Accessibility() {
  const accessibilityFeatures = [
    {
      name: 'Screen Reader Support',
      description: 'Full compatibility with screen readers including JAWS, NVDA, and VoiceOver.',
      icon: Ear,
      status: 'implemented'
    },
    {
      name: 'Keyboard Navigation',
      description: 'Complete website functionality accessible via keyboard navigation.',
      icon: Keyboard,
      status: 'implemented'
    },
    {
      name: 'High Contrast Mode',
      description: 'High contrast color schemes for better visibility.',
      icon: Eye,
      status: 'implemented'
    },
    {
      name: 'Font Size Adjustment',
      description: 'Ability to increase text size up to 200% without loss of functionality.',
      icon: Settings,
      status: 'implemented'
    },
    {
      name: 'Alt Text for Images',
      description: 'Descriptive alt text for all images and graphics.',
      icon: Eye,
      status: 'implemented'
    },
    {
      name: 'Focus Indicators',
      description: 'Clear visual indicators for keyboard focus and navigation.',
      icon: MousePointer,
      status: 'implemented'
    }
  ];

  const complianceStandards = [
    {
      name: 'WCAG 2.1 AA',
      description: 'Web Content Accessibility Guidelines 2.1 Level AA compliance',
      status: 'compliant',
      icon: CheckCircle
    },
    {
      name: 'Section 508',
      description: 'Federal accessibility requirements for electronic and information technology',
      status: 'compliant',
      icon: CheckCircle
    },
    {
      name: 'ADA Compliance',
      description: 'Americans with Disabilities Act accessibility requirements',
      status: 'compliant',
      icon: CheckCircle
    },
    {
      name: 'EN 301 549',
      description: 'European accessibility requirements for ICT products and services',
      status: 'compliant',
      icon: CheckCircle
    }
  ];

  const assistiveTechnologies = [
    'Screen Readers (JAWS, NVDA, VoiceOver, TalkBack)',
    'Screen Magnifiers',
    'Voice Recognition Software',
    'Switch Devices',
    'Braille Displays',
    'High Contrast Software',
    'Text-to-Speech Tools',
    'Keyboard-Only Navigation'
  ];

  const accessibilityTools = [
    {
      name: 'Accessibility Checker',
      description: 'Built-in tool to identify and fix accessibility issues.',
      icon: Shield
    },
    {
      name: 'Color Contrast Analyzer',
      description: 'Ensures text meets minimum contrast requirements.',
      icon: Eye
    },
    {
      name: 'Keyboard Navigation Tester',
      description: 'Test and verify keyboard accessibility.',
      icon: Keyboard
    },
    {
      name: 'Screen Reader Simulator',
      description: 'Preview how content appears to screen readers.',
      icon: Ear
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Hero Section */}
      <section className="py-20 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center justify-center mb-6">
                <Accessibility className="w-16 h-16 text-blue-600" />
              </div>
              <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl">
                Accessibility Statement
              </h1>
              <p className="mt-6 text-lg leading-8 text-gray-600 lg:text-xl">
                Zion Tech Group is committed to ensuring digital accessibility for people with disabilities. 
                We are continually improving the user experience for everyone and applying the relevant 
                accessibility standards.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Commitment Section */}
      <section className="py-24 sm:py-32 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-8">
              Our Commitment to Accessibility
            </h2>
            <p className="text-lg text-gray-600 mb-12">
              We believe that digital accessibility is a fundamental right and essential for creating an 
              inclusive digital experience for all users.
            </p>
            
            <div className="grid gap-8 md:grid-cols-3">
              <div className="text-center">
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-blue-100 mb-6">
                  <Heart className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Inclusive Design</h3>
                <p className="text-gray-600">
                  We design our digital experiences with accessibility in mind from the very beginning.
                </p>
              </div>
              <div className="text-center">
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-blue-100 mb-6">
                  <Users className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">User-Centered</h3>
                <p className="text-gray-600">
                  We actively seek feedback from users with disabilities to improve our accessibility.
                </p>
              </div>
              <div className="text-center">
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-blue-100 mb-6">
                  <Zap className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Continuous Improvement</h3>
                <p className="text-gray-600">
                  We regularly audit and update our accessibility features and compliance.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Accessibility Features */}
      <section className="py-24 sm:py-32 bg-gray-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-4xl">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-6">
                Accessibility Features
              </h2>
              <p className="text-lg text-gray-600">
                Our website includes a comprehensive set of accessibility features to ensure 
                an inclusive user experience for all visitors.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              {accessibilityFeatures.map((feature, index) => (
                <motion.div
                  key={feature.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white rounded-lg shadow-sm border border-gray-200 p-6"
                >
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                        <feature.icon className="w-6 h-6 text-green-600" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center space-x-3 mb-2">
                        <h3 className="text-xl font-semibold text-gray-900">{feature.name}</h3>
                        <span className="px-2 py-1 bg-green-100 text-green-800 text-xs font-medium rounded-full">
                          {feature.status === 'implemented' ? 'Implemented' : 'In Progress'}
                        </span>
                      </div>
                      <p className="text-gray-600">{feature.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Compliance Standards */}
      <section className="py-24 sm:py-32 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-4xl">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-6">
                Accessibility Compliance
              </h2>
              <p className="text-lg text-gray-600">
                We maintain compliance with major accessibility standards and regulations to ensure 
                our digital experiences are accessible to all users.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              {complianceStandards.map((standard, index) => (
                <motion.div
                  key={standard.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-gray-50 rounded-lg p-6 border border-gray-200"
                >
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                      <standard.icon className="w-6 h-6 text-green-600" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900">{standard.name}</h3>
                      <p className="text-gray-600 text-sm">{standard.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Assistive Technologies */}
      <section className="py-24 sm:py-32 bg-gray-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-4xl">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-6">
                Compatible Assistive Technologies
              </h2>
              <p className="text-lg text-gray-600">
                Our website is designed to work seamlessly with a wide range of assistive technologies 
                and accessibility tools.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8">
              <div className="grid gap-4 md:grid-cols-2">
                {assistiveTechnologies.map((technology, index) => (
                  <motion.div
                    key={technology}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4, delay: index * 0.05 }}
                    className="flex items-center space-x-3"
                  >
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700">{technology}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Accessibility Tools */}
      <section className="py-24 sm:py-32 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-4xl">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-6">
                Built-in Accessibility Tools
              </h2>
              <p className="text-lg text-gray-600">
                We provide built-in tools to help users customize their experience and test accessibility features.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              {accessibilityTools.map((tool, index) => (
                <motion.div
                  key={tool.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-gray-50 rounded-lg p-6 border border-gray-200"
                >
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                      <tool.icon className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900">{tool.name}</h3>
                      <p className="text-gray-600 text-sm">{tool.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Known Issues and Improvements */}
      <section className="py-24 sm:py-32 bg-gray-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-4xl">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-6">
                Continuous Improvement
              </h2>
              <p className="text-lg text-gray-600">
                We are committed to continuously improving our accessibility and welcome feedback 
                from users to help us identify areas for enhancement.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                <div className="flex items-center space-x-3 mb-4">
                  <CheckCircle className="w-8 h-8 text-green-600" />
                  <h3 className="text-xl font-semibold text-gray-900">What We're Doing Well</h3>
                </div>
                <ul className="space-y-2 text-gray-600">
                  <li>• Full keyboard navigation support</li>
                  <li>• Comprehensive screen reader compatibility</li>
                  <li>• High contrast and font size options</li>
                  <li>• Semantic HTML structure</li>
                  <li>• Alternative text for all images</li>
                </ul>
              </div>

              <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                <div className="flex items-center space-x-3 mb-4">
                  <AlertTriangle className="w-8 h-8 text-yellow-600" />
                  <h3 className="text-xl font-semibold text-gray-900">Areas for Improvement</h3>
                </div>
                <ul className="space-y-2 text-gray-600">
                  <li>• Enhanced video captioning</li>
                  <li>• More advanced ARIA labels</li>
                  <li>• Improved form validation feedback</li>
                  <li>• Enhanced mobile accessibility</li>
                  <li>• Additional language support</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact and Feedback */}
      <section className="py-24 sm:py-32 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-8">
              Help Us Improve
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              We value your feedback on accessibility. If you encounter any accessibility barriers 
              or have suggestions for improvement, please let us know.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
              <Link
                href="/contact"
                className="rounded-md bg-blue-600 px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
              >
                Report Accessibility Issue
              </Link>
              <Link
                href="/contact"
                className="text-sm font-semibold leading-6 text-gray-900 hover:text-blue-600"
              >
                Provide Feedback <ArrowRight className="ml-2 h-5 w-5 inline" />
              </Link>
            </div>

            <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Contact Information</h3>
              <p className="text-gray-600 mb-4">
                For accessibility-related questions or concerns, please contact us:
              </p>
              <div className="text-sm text-gray-600 space-y-1">
                <p>Email: accessibility@ziontechgroup.com</p>
                <p>Phone: +1 302 464 0950</p>
                <p>Address: 364 E Main St STE 1008, Middletown, DE 19709</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Policy Updates */}
      <section className="py-24 sm:py-32 bg-gray-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Accessibility Statement Updates</h3>
              <p className="text-gray-600 text-sm">
                This accessibility statement was last updated on January 15, 2024. We regularly review 
                and update our accessibility policies and practices to ensure continued compliance 
                and improvement. Any significant changes will be communicated through our website.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}