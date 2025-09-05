#!/usr/bin/env node

const fs = require('fs');

console.log('🔧 Comprehensive syntax fix...');

// Fix accessibility.tsx - rewrite the problematic section
const accessibilityContent = `import Head from 'next/head';
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
  }
];

const complianceStandards = [
  {
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
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 text-white py-20">
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
              </p>
            </motion.div>
          </div>
        </section>

        {/* Commitment Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
                At Zion Tech Group, we believe that technology should be accessible to everyone. 
                We are committed to ensuring that our website, services, and digital solutions 
                are usable by people of all abilities and disabilities.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
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
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Compliance Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Compliance & Standards
              </h2>
              <p className="text-lg text-gray-600 max-w-4xl mx-auto">
                We adhere to internationally recognized accessibility standards and guidelines.
              </p>
            </motion.div>

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
  );
}`;

fs.writeFileSync('/workspace/pages/accessibility.tsx', accessibilityContent);
console.log('✅ Fixed accessibility.tsx');

// Fix cookies.tsx
const cookiesContent = `import Head from 'next/head';
import { motion } from 'framer-motion';
import { Cookie, Shield, Settings, CheckCircle } from 'lucide-react';
import Layout from '../components/Layout';

const cookieTypes = [
  {
    name: 'Essential Cookies',
    description: 'These cookies are necessary for the website to function properly.',
    icon: Shield,
    color: 'from-blue-500 to-cyan-500',
    examples: [
      'Authentication cookies',
      'Security cookies',
      'Load balancing cookies'
    ]
  },
  {
    name: 'Analytics Cookies',
    description: 'These cookies help us understand how visitors interact with our website.',
    icon: Settings,
    color: 'from-green-500 to-emerald-500',
    examples: [
      'Google Analytics',
      'Page view tracking',
      'User behavior analysis'
    ]
  },
  {
    name: 'Functional Cookies',
    description: 'These cookies enable enhanced functionality and personalization.',
    icon: CheckCircle,
    color: 'from-purple-500 to-pink-500',
    examples: [
      'Language preferences',
      'Theme settings',
      'User preferences'
    ]
  }
];

export default function Cookies() {
  return (
    <Layout>
      <Head>
        <title>Cookie Policy - Zion Tech Group</title>
        <meta name="description" content="Learn about our cookie policy and how we use cookies to improve your experience." />
      </Head>

      <main>
        <section className="bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 text-white py-20">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Cookie Policy
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
                Learn about how we use cookies to enhance your experience on our website.
              </p>
            </motion.div>
          </div>
        </section>

        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {cookieTypes.map((cookie, index) => {
                  const IconComponent = cookie.icon;
                  return (
                    <motion.div
                      key={index}
                      className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300"
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.8, delay: index * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <div className={`w-16 h-16 bg-gradient-to-r ${cookie.color} rounded-lg flex items-center justify-center mb-6`}>
                        <IconComponent className="w-8 h-8 text-white" />
                      </div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-4">{cookie.name}</h3>
                      <p className="text-gray-600 mb-6">{cookie.description}</p>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-3">Examples:</h4>
                        <ul className="list-disc list-inside text-gray-600 space-y-1">
                          {cookie.examples.map((example, exampleIndex) => (
                            <li key={exampleIndex}>{example}</li>
                          ))}
                        </ul>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="bg-white rounded-xl shadow-lg p-8 mb-8"
              >
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Managing Your Cookie Preferences
                </h2>
                <p className="text-gray-600 mb-6">
                  You can control and manage cookies in various ways. Please note that removing or 
                  blocking cookies can impact your user experience and parts of our website may 
                  not function properly.
                </p>
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-gray-900">Browser Settings</h3>
                  <p className="text-gray-600">
                    Most web browsers allow you to control cookies through their settings preferences. 
                    You can set your browser to refuse cookies or delete certain cookies.
                  </p>
                  <h3 className="text-xl font-semibold text-gray-900">Cookie Consent</h3>
                  <p className="text-gray-600">
                    When you first visit our website, you'll see a cookie consent banner where you can 
                    choose which types of cookies you want to accept.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}`;

fs.writeFileSync('/workspace/pages/cookies.tsx', cookiesContent);
console.log('✅ Fixed cookies.tsx');

console.log('🎉 Comprehensive syntax fix completed!');