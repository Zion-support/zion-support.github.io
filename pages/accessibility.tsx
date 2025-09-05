<<<<<<< HEAD
import React from 'react';
import MainLayout from '../src/components/layout/MainLayout';
import { motion } from 'framer-motion';
import {
  Accessibility,
  Eye,
  Ear,
  Hand,
  Brain,
  CheckCircle,
  ArrowRight,
  Globe,
  Users,
  Shield,
  Zap,
  Heart
} from 'lucide-react';

const accessibilityFeatures = [
  {
    icon: Eye,
    features: [
      "WCAG 2.1 AA compliant color contrast",
      "Scalable text up to 200% without loss of functionality",
      "Alt text for all images and media",
      "Focus indicators for keyboard navigation",
      "Screen reader compatibility",
      "High contrast mode",
      "Text scaling options",
      "Alternative text for images",
      "Keyboard navigation"
    ]
  },
  {
    icon: Ear,
    features: [
      "Closed captions for all video content",
      "Audio descriptions for visual content",
      "Transcript files for audio content",
      "Visual indicators for audio alerts",
      "Closed captions",
      "Visual alerts",
      "Text alternatives for audio",
      "Sign language support",
      "Volume controls",
      "Audio descriptions"
    ]
  },
  {
    icon: Hand,
    features: [
      "Full keyboard navigation support",
      "Customizable click targets",
      "Drag and drop alternatives",
      "Timeout extensions and controls",
      "Keyboard-only navigation",
      "Voice control",
      "Large click targets",
      "Customizable timing",
      "Switch navigation",
      "Gesture alternatives"
    ]
  },
  {
    icon: Brain,
    features: [
      "Consistent navigation patterns",
      "Clear and simple language",
      "Error prevention and recovery",
      "Customizable interface complexity",
      "Clear navigation",
      "Consistent layout",
      "Error prevention",
      "Progress indicators",
      "Help and support",
      "Customizable interface"
    ]
=======
import Head from 'next/head';
import { motion } from 'framer-motion';
import { Heart, Eye, MousePointer, Volume2, CheckCircle, Globe, Shield, Users } from 'lucide-react';
import Layout from '../components/Layout';

const accessibilityFeatures = [
  {
    title: 'Screen Reader Support',
    description: 'Full compatibility with screen readers and assistive technologies',
    icon: Volume2,
    features: ['ARIA labels', 'Semantic HTML', 'Alt text for images', 'Focus management']
  },
  {
    title: 'Keyboard Navigation',
    description: 'Complete keyboard accessibility for all interactive elements',
    icon: MousePointer,
    features: ['Tab navigation', 'Skip links', 'Focus indicators', 'Keyboard shortcuts']
  },
  {
    title: 'Visual Accessibility',
    description: 'High contrast and customizable visual elements',
    icon: Eye,
    features: ['High contrast mode', 'Font size options', 'Color blind support', 'Clear typography']
  },
  {
    title: 'Motor Accessibility',
    description: 'Support for users with motor impairments',
    icon: Heart,
    features: ['Large click targets', 'Voice control', 'Switch navigation', 'Gesture alternatives']
>>>>>>> pr-11913
  }
];

const complianceStandards = [
  {
<<<<<<< HEAD
    name: "WCAG 2.1 AA",
    description: "Web Content Accessibility Guidelines Level AA compliance",
    status: "Compliant",
    icon: Award
  },
  {
    name: "Section 508",
    description: "US Federal accessibility requirements",
    status: "Compliant", 
    icon: FileText
  },
  {
    name: "ADA",
    description: "Americans with Disabilities Act compliance",
    status: "Compliant",
    icon: Users
  },
  {
    name: "EN 301 549",
    description: "European accessibility standard",
    status: "Compliant",
    icon: Globe
  }
];

export default function AccessibilityPage() {
  const accessibilityFeatures = [
    {
      icon: Ear,
      features: [
        'Semantic HTML structure',
        'Alt text for all images',
        'Proper heading hierarchy',
        'ARIA labels and descriptions'
      ]
    },
    {
      icon: Hand,
      features: [
        'Tab navigation support',
        'Skip links for main content',
        'Focus indicators',
        'Keyboard shortcuts'
      ]
    },
    {
      icon: Eye,
      features: [
        'High contrast color schemes',
        'Resizable text up to 200%',
        'Color-blind friendly palettes',
        'Clear visual hierarchy'
      ]
    },
    {
      icon: Brain,
      features: [
        'Plain language content',
        'Consistent navigation',
        'Clear error messages',
        'Logical content flow'
      ]
    }
  ];

  const complianceStandards = [
    {
      standard: 'WCAG 2.1 AA',
      description: 'Web Content Accessibility Guidelines 2.1 Level AA compliance',
      status: 'Compliant',
      icon: CheckCircle
    },
    {
      standard: 'Section 508',
      description: 'U.S. federal accessibility requirements compliance',
      status: 'Compliant',
      icon: CheckCircle
    },
    {
      standard: 'ADA Compliance',
      description: 'Americans with Disabilities Act compliance',
      status: 'Compliant',
      icon: CheckCircle
    },
    {
      standard: 'EN 301 549',
      description: 'European accessibility standard compliance',
      status: 'Compliant',
      icon: CheckCircle
    }
  ];

  const accessibilityTools = [
    {
      name: 'Screen Reader Testing',
      description: 'Regular testing with NVDA, JAWS, and VoiceOver',
      icon: Ear
    },
    {
      name: 'Keyboard Testing',
      description: 'Comprehensive keyboard-only navigation testing',
      icon: Hand
    },
    {
      name: 'Color Contrast Analysis',
      description: 'Automated and manual color contrast verification',
      icon: Eye
    },
    {
      name: 'User Testing',
      description: 'Regular testing with users with disabilities',
      icon: Users
    }
  ];

  const accessibilityCommitments = [
    {
      icon: Zap
    },
    {
      icon: Heart
    },
    {
      icon: Brain
    },
    {
      icon: Shield
    }
  ];

  return (
    <MainLayout
      title="Accessibility Statement - Zion Tech Group"
      description="Learn about our commitment to web accessibility and how we ensure our website is accessible to all users, including those with disabilities."
      keywords="accessibility, WCAG, ADA compliance, screen reader, keyboard navigation, inclusive design"
    >
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 text-white py-20 overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-20 left-10 w-72 h-72 bg-indigo-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
            <div className="absolute top-40 right-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-2000"></div>
          </div>

          <div className="container mx-auto px-4 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <p className="text-xl md:text-2xl text-gray-300 mb-8">
                Building technology that works for everyone, regardless of ability
              </p>
            </motion.div>
          </div>
        </section>

        {/* Commitment Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Accessibility Compliance Standards
                </h2>
                <p className="text-lg text-gray-600 mb-8">
                  We adhere to international accessibility standards to ensure our solutions are inclusive for all users.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Compliance Standards */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Compliance Standards
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Our website complies with internationally recognized accessibility standards 
                and guidelines to ensure the highest level of accessibility.
              </p>
            </motion.div>

            <div className="max-w-4xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {complianceStandards.map((standard, index) => (
                  <motion.div
                    key={standard.standard}
                    className="bg-gray-50 rounded-lg p-6"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-xl font-bold text-gray-900">{standard.standard}</h3>
                      <div className="flex items-center text-green-600">
                        <standard.icon className="w-5 h-5 mr-2" />
                        <span className="font-semibold">{standard.status}</span>
                      </div>
                    </div>
                    <p className="text-gray-600">{standard.description}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Testing & Tools */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Testing & Validation
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                We use a combination of automated tools and manual testing to ensure 
                our website meets accessibility standards and provides a great user experience.
              </p>
            </motion.div>

            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {accessibilityTools.map((tool, index) => (
                  <motion.div
                    key={tool.name}
                    className="bg-white rounded-lg shadow-lg p-6 text-center"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className="bg-indigo-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                      <tool.icon className="w-8 h-8 text-indigo-600" />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      {tool.name}
                    </h3>
                    <p className="text-gray-600 text-sm">{tool.description}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Contact & Feedback */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Contact & Feedback
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                We welcome feedback on the accessibility of our website. If you encounter 
                any accessibility barriers or have suggestions for improvement, please let us know.
              </p>
            </motion.div>

            <div className="max-w-4xl mx-auto">
              <div className="bg-gray-50 rounded-lg p-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4">Report an Issue</h3>
                    <p className="text-gray-600 mb-4">
                      If you encounter any accessibility issues on our website, 
                      please contact us and we will work to resolve them promptly.
                    </p>
                    <div className="space-y-2 text-sm text-gray-600">
                      <p><strong>Email:</strong> accessibility@ziontechgroup.com</p>
                      <p><strong>Phone:</strong> +1 (555) 123-4567</p>
                      <p><strong>Response Time:</strong> Within 48 hours</p>
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4">Provide Feedback</h3>
                    <p className="text-gray-600 mb-4">
                      We value your input and suggestions for improving our accessibility. 
                      Your feedback helps us create a better experience for everyone.
                    </p>
                    <button className="bg-indigo-500 hover:bg-indigo-600 text-white py-2 px-6 rounded-lg transition-colors duration-300 font-semibold flex items-center">
                      Send Feedback
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-indigo-600 to-purple-600 text-white">
=======
    name: 'WCAG 2.1 AA',
    description: 'Web Content Accessibility Guidelines Level AA compliance',
    icon: CheckCircle,
    status: 'Compliant'
  },
  {
    name: 'Section 508',
    description: 'US federal accessibility standards compliance',
    icon: Shield,
    status: 'Compliant'
  },
  {
    name: 'ADA Compliance',
    description: 'Americans with Disabilities Act compliance',
    icon: Globe,
    status: 'Compliant'
  }
];

export default function Accessibility() {
  return (
    <Layout>
      <Head>
        <title>Accessibility Statement - Zion Tech Group</title>
        <meta name="description" content="Our commitment to digital accessibility and inclusive design for all users." />
      </Head>

      <main>
        <section className="bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 text-white py-20">
>>>>>>> pr-11913
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
<<<<<<< HEAD
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Committed to Accessibility
              </h2>
              <p className="text-xl text-indigo-100 mb-8 max-w-3xl mx-auto">
                We are continuously working to improve the accessibility of our website. 
                If you have any questions or need assistance, please don't hesitate to contact us.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="px-8 py-4 bg-white text-indigo-600 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold"
                >
                  Contact Us
                </a>
                <a
                  href="/help"
                  className="px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white hover:text-indigo-600 transition-all duration-300 font-semibold"
                >
                  Get Help
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </MainLayout>
=======
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Accessibility Statement
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
                Zion Tech Group is committed to ensuring digital accessibility for all users.
              </p>
            </motion.div>
          </div>
        </section>

        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {accessibilityFeatures.map((feature, index) => {
                const IconComponent = feature.icon;
                return (
                  <motion.div
                    key={index}
                    className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                      <IconComponent className="w-6 h-6 text-blue-600" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                    <p className="text-gray-600 mb-4">{feature.description}</p>
                    <ul className="space-y-2">
                      {feature.features.map((item, idx) => (
                        <li key={idx} className="flex items-center text-sm text-gray-600">
                          <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Compliance & Standards
              </h2>
              <p className="text-lg text-gray-600 max-w-4xl mx-auto">
                We adhere to internationally recognized accessibility standards.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {complianceStandards.map((standard, index) => {
                const IconComponent = standard.icon;
                return (
                  <motion.div
                    key={index}
                    className="bg-white rounded-lg p-6 text-center hover:shadow-lg transition-shadow duration-300"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <IconComponent className="w-8 h-8 text-green-600" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{standard.name}</h3>
                    <p className="text-gray-600 mb-4">{standard.description}</p>
                    <span className="inline-block px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm font-medium">
                      {standard.status}
                    </span>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>
      </main>
    </Layout>
>>>>>>> pr-11913
  );
}