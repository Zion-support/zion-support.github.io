import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  Eye,
  Ear,
  MousePointer,
  Keyboard,
  Smartphone,
  CheckCircle,
  ArrowRight,
  Phone,
  Mail,
  Globe,
  Shield,
  Users
} from 'lucide-react';
import MainLayout from '../src/components/layout/MainLayout';

const accessibilityFeatures = [
  {
    icon: Eye,
    title: "Visual Accessibility",
    description: "High contrast themes, scalable fonts, and screen reader compatibility",
    features: [
      "WCAG 2.1 AA compliant color contrast",
      "Scalable text up to 200% without loss of functionality",
      "Alt text for all images and media",
      "Focus indicators for keyboard navigation",
      "Screen reader compatibility",
      "High contrast mode"
    ]
  },
  {
    icon: Ear,
    title: "Auditory Accessibility",
    description: "Features to support users with hearing impairments",
    features: [
      "Closed captions for all video content",
      "Visual indicators for audio cues",
      "Transcripts for audio content",
      "Hearing aid compatibility",
      "Sign language interpretation options"
    ]
  },
  {
    icon: Keyboard,
    title: "Motor Accessibility",
    description: "Keyboard navigation and alternative input methods",
    features: [
      "Full keyboard navigation support",
      "Voice control integration",
      "Switch control compatibility",
      "Customizable keyboard shortcuts",
      "Large click targets (44px minimum)"
    ]
  },
  {
    icon: Smartphone,
    title: "Mobile Accessibility",
    description: "Optimized for mobile devices and assistive technologies",
    features: [
      "Touch-friendly interface design",
      "VoiceOver and TalkBack support",
      "Gesture-based navigation",
      "Responsive design for all screen sizes",
      "Mobile screen reader optimization"
    ]
  }
];

const complianceStandards = [
  {
    standard: "WCAG 2.1 AA",
    description: "Web Content Accessibility Guidelines Level AA compliance",
    coverage: "95%",
    features: ["Color contrast", "Keyboard navigation", "Screen reader support", "Focus management"]
  },
  {
    standard: "Section 508",
    description: "US federal accessibility requirements",
    coverage: "100%",
    features: ["Government compliance", "Assistive technology support", "Document accessibility"]
  },
  {
    standard: "ADA Compliance",
    description: "Americans with Disabilities Act compliance",
    coverage: "100%",
    features: ["Equal access", "Reasonable accommodation", "Non-discrimination"]
  },
  {
    standard: "EN 301 549",
    description: "European accessibility standard",
    coverage: "90%",
    features: ["EU compliance", "Public sector requirements", "Harmonized standards"]
  }
];

const testingMethods = [
  {
    method: "Automated Testing",
    description: "AI-powered accessibility scanning and validation",
    tools: ["axe-core", "WAVE", "Lighthouse", "Pa11y"],
    coverage: "80% of issues detected"
  },
  {
    method: "Manual Testing",
    description: "Human evaluation of accessibility features",
    tools: ["Screen readers", "Keyboard only", "Voice control", "Mobile testing"],
    coverage: "100% of user scenarios"
  },
  {
    method: "User Testing",
    description: "Testing with real users with disabilities",
    tools: ["User interviews", "Usability testing", "Feedback collection", "Iterative improvement"],
    coverage: "Real-world validation"
  },
  {
    method: "Expert Review",
    description: "Accessibility expert evaluation and recommendations",
    tools: ["WCAG audit", "Compliance review", "Best practices", "Training"],
    coverage: "Comprehensive assessment"
  }
];

export default function AccessibilityPage() {
  return (
    <MainLayout
      title="Accessibility - Zion Tech Group"
      description="Comprehensive accessibility services and solutions. We ensure your digital products are accessible to all users, including those with disabilities."
      keywords="accessibility, WCAG compliance, ADA compliance, inclusive design, assistive technology, digital accessibility"
    >
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-green-900 via-teal-900 to-blue-900 text-white py-20 overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-20 left-10 w-72 h-72 bg-green-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
            <div className="absolute top-40 right-10 w-72 h-72 bg-teal-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-2000"></div>
          </div>

          <div className="container mx-auto px-4 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Accessibility That{' '}
                <span className="bg-gradient-to-r from-green-400 to-teal-400 bg-clip-text text-transparent">
                  Includes Everyone
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
                We ensure your digital products are accessible to all users, including those with disabilities. 
                Our comprehensive accessibility services help you create inclusive experiences that comply with 
                international standards and best practices.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact" className="px-8 py-4 bg-gradient-to-r from-green-500 to-teal-600 text-white rounded-lg hover:shadow-lg transition-all duration-300 font-semibold">
                  Get Accessibility Audit
                </Link>
                <Link href="#features" className="px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white hover:text-gray-900 transition-all duration-300 font-semibold">
                  View Features
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Comprehensive Accessibility Features
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                We implement accessibility features across all aspects of your digital products 
                to ensure they work for everyone, regardless of ability.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {accessibilityFeatures.map((feature, index) => {
                const IconComponent = feature.icon;
                return (
                  <motion.div
                    key={index}
                    className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ y: -5 }}
                  >
                    <div className="text-green-600 mb-4">
                      <IconComponent className="w-12 h-12" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 mb-4">
                      {feature.description}
                    </p>
                    <ul className="space-y-2">
                      {feature.features.map((item, idx) => (
                        <li key={idx} className="flex items-center text-sm text-gray-600">
                          <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
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

        {/* Compliance Standards Section */}
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
                We ensure your products meet international accessibility standards 
                and regulatory requirements.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {complianceStandards.map((standard, index) => (
                <motion.div
                  key={index}
                  className="bg-gray-50 p-6 rounded-lg hover:bg-gray-100 transition-colors duration-300"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="text-center mb-4">
                    <div className="text-3xl font-bold text-green-600 mb-2">
                      {standard.coverage}
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{standard.standard}</h3>
                    <p className="text-gray-600 text-sm">{standard.description}</p>
                  </div>
                  <ul className="space-y-1">
                    {standard.features.map((feature, idx) => (
                      <li key={idx} className="text-sm text-gray-600 flex items-center">
                        <ArrowRight className="w-3 h-3 text-green-500 mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Testing Methods Section */}
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
                We use multiple testing methods to ensure comprehensive accessibility 
                coverage and compliance.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {testingMethods.map((method, index) => (
                <motion.div
                  key={index}
                  className="bg-white p-6 rounded-lg shadow-lg"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{method.method}</h3>
                  <p className="text-gray-600 mb-4">{method.description}</p>
                  <div className="mb-4">
                    <span className="text-sm text-green-600 font-semibold">Coverage: {method.coverage}</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Tools:</h4>
                    <ul className="space-y-1">
                      {method.tools.map((tool, idx) => (
                        <li key={idx} className="text-sm text-gray-600 flex items-center">
                          <ArrowRight className="w-3 h-3 text-green-500 mr-2" />
                          {tool}
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-green-600 to-teal-600 text-white">
          <div className="container mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Ready to Make Your Products Accessible?
              </h2>
              <p className="text-xl mb-8 max-w-2xl mx-auto">
                Let's work together to create inclusive digital experiences that work for everyone.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <div className="text-center sm:text-left">
                  <p className="text-green-100 mb-1">📞 <strong>Call:</strong> +1 302 464 0950</p>
                  <p className="text-green-100">📧 <strong>Email:</strong> kleber@ziontechgroup.com</p>
                </div>
                <Link href="/contact" className="px-8 py-4 bg-white text-green-600 rounded-lg hover:bg-gray-100 transition-all duration-300 font-semibold">
                  Get Accessibility Audit
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </MainLayout>
  );
}