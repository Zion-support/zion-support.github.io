import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Accessibility, Eye, MousePointer, Volume2, CheckCircle, ArrowRight, Users, Globe, Settings } from 'lucide-react';
import MainLayout from '../components/layout/MainLayout';

const accessibilityFeatures = [
  {
    title: "Keyboard Navigation",
    description: "Full keyboard accessibility for all interactive elements",
    icon: MousePointer,
    details: [
      "Tab navigation through all elements",
      "Skip links for main content",
      "Keyboard shortcuts for common actions",
      "Focus indicators for all interactive elements"
    ]
  },
  {
    title: "Screen Reader Support",
    description: "Compatible with all major screen readers",
    icon: Volume2,
    details: [
      "Semantic HTML structure",
      "ARIA labels and descriptions",
      "Alternative text for all images",
      "Proper heading hierarchy"
    ]
  },
  {
    title: "Visual Accessibility",
    description: "High contrast and customizable visual elements",
    icon: Eye,
    details: [
      "High contrast color schemes",
      "Scalable text and elements",
      "Color-blind friendly palettes",
      "Customizable font sizes"
    ]
  },
  {
    title: "Motor Accessibility",
    description: "Support for users with motor impairments",
    icon: Accessibility,
    details: [
      "Large click targets",
      "No time-based interactions",
      "Alternative input methods",
      "Error prevention and correction"
    ]
  }
];

const standards = [
  {
    name: "WCAG 2.1 AA",
    description: "Web Content Accessibility Guidelines Level AA compliance",
    status: "Compliant",
    icon: "♿"
  },
  {
    name: "Section 508",
    description: "US federal accessibility standards",
    status: "Compliant",
    icon: "🇺🇸"
  },
  {
    name: "ADA",
    description: "Americans with Disabilities Act compliance",
    status: "Compliant",
    icon: "⚖️"
  },
  {
    name: "EN 301 549",
    description: "European accessibility standard",
    status: "Compliant",
    icon: "🇪🇺"
  }
];

const accessibilityTools = [
  {
    name: "Screen Reader Testing",
    description: "Regular testing with NVDA, JAWS, and VoiceOver",
    icon: Volume2
  },
  {
    name: "Keyboard Testing",
    description: "Comprehensive keyboard navigation testing",
    icon: MousePointer
  },
  {
    name: "Color Contrast Analysis",
    description: "Automated and manual color contrast testing",
    icon: Eye
  },
  {
    name: "User Testing",
    description: "Testing with users who have disabilities",
    icon: Users
  }
];

const accessibilityStatement = {
  commitment: "We are committed to ensuring digital accessibility for people with disabilities. We continually improve the user experience for everyone and apply the relevant accessibility standards.",
  standards: "We aim to conform to the Web Content Accessibility Guidelines (WCAG) 2.1 Level AA. These guidelines help make web content more accessible for people with disabilities and user-friendly for everyone.",
  testing: "We test our website regularly using automated tools and manual testing to ensure accessibility compliance. We also work with users who have disabilities to identify and address accessibility issues.",
  feedback: "We welcome your feedback on the accessibility of our website. If you encounter any accessibility barriers, please contact us and we will work to address them promptly."
};

export default function AccessibilityPage() {
  return (
    <MainLayout
      title="Accessibility - Zion Tech Group"
      description="Learn about our commitment to web accessibility and the features we provide to ensure our website is accessible to all users."
      keywords="accessibility, WCAG, ADA, screen reader, keyboard navigation, inclusive design"
    >
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-green-900 via-blue-900 to-purple-900 text-white py-20 overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-20 left-10 w-72 h-72 bg-green-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
            <div className="absolute top-40 right-10 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-2000"></div>
          </div>

          <div className="container mx-auto px-4 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Web{' '}
                <span className="bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
                  Accessibility
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
                We are committed to making our website accessible to everyone, 
                regardless of ability or technology used.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact" className="px-8 py-4 bg-gradient-to-r from-green-500 to-blue-600 text-white rounded-lg hover:shadow-lg transition-all duration-300 font-semibold">
                  Report Accessibility Issue
                </Link>
                <Link href="/support" className="px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white hover:text-gray-900 transition-all duration-300 font-semibold">
                  Get Support
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Accessibility Features */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center mb-12 md:mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Accessibility Features
              </h2>
              <p className="text-lg sm:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                Our website includes comprehensive accessibility features to ensure 
                all users can access and use our content effectively.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {accessibilityFeatures.map((feature, index) => {
                const IconComponent = feature.icon;
                return (
                  <motion.div
                    key={index}
                    className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ y: -5 }}
                  >
                    <div className="w-16 h-16 bg-gradient-to-r from-green-600 to-blue-600 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                    
                    <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-green-600 transition-colors">
                      {feature.title}
                    </h3>
                    
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      {feature.description}
                    </p>

                    <ul className="space-y-2">
                      {feature.details.map((detail, detailIndex) => (
                        <li key={detailIndex} className="flex items-center text-sm text-gray-600">
                          <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                          {detail}
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Standards Compliance */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center mb-12 md:mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Standards Compliance
              </h2>
              <p className="text-lg sm:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                We adhere to international accessibility standards and guidelines.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {standards.map((standard, index) => (
                <motion.div
                  key={index}
                  className="bg-gray-50 p-6 rounded-lg hover:bg-green-50 transition-colors group text-center"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="text-4xl mb-3">{standard.icon}</div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-green-600 transition-colors">
                    {standard.name}
                  </h3>
                  <p className="text-gray-600 text-sm mb-3">{standard.description}</p>
                  <span className="inline-block px-3 py-1 bg-green-100 text-green-800 rounded-full text-xs font-medium">
                    {standard.status}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Testing Tools */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center mb-12 md:mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Testing & Validation
              </h2>
              <p className="text-lg sm:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                We use multiple testing methods to ensure accessibility compliance.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {accessibilityTools.map((tool, index) => {
                const IconComponent = tool.icon;
                return (
                  <motion.div
                    key={index}
                    className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 group text-center"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className="w-12 h-12 bg-gradient-to-r from-green-600 to-blue-600 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                      <IconComponent className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-green-600 transition-colors">
                      {tool.name}
                    </h3>
                    <p className="text-gray-600 text-sm">{tool.description}</p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Accessibility Statement */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <motion.div
              className="max-w-4xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-8 text-center">
                Accessibility Statement
              </h2>
              
              <div className="prose prose-lg max-w-none">
                <div className="bg-gray-50 p-8 rounded-xl mb-8">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Our Commitment</h3>
                  <p className="text-gray-600 leading-relaxed">
                    {accessibilityStatement.commitment}
                  </p>
                </div>

                <div className="bg-gray-50 p-8 rounded-xl mb-8">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Standards</h3>
                  <p className="text-gray-600 leading-relaxed">
                    {accessibilityStatement.standards}
                  </p>
                </div>

                <div className="bg-gray-50 p-8 rounded-xl mb-8">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Testing</h3>
                  <p className="text-gray-600 leading-relaxed">
                    {accessibilityStatement.testing}
                  </p>
                </div>

                <div className="bg-gray-50 p-8 rounded-xl">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Feedback</h3>
                  <p className="text-gray-600 leading-relaxed">
                    {accessibilityStatement.feedback}
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-green-600 to-blue-600 text-white">
          <div className="container mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl sm:text-4xl font-bold mb-6">
                Need Accessibility Assistance?
              </h2>
              <p className="text-xl mb-8 max-w-3xl mx-auto">
                If you encounter any accessibility barriers or need assistance using our website, 
                please contact us and we will work to address them promptly.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact" className="px-8 py-4 bg-white text-green-600 rounded-lg hover:bg-gray-100 transition-all duration-300 font-semibold">
                  Report an Issue
                </Link>
                <Link href="/support" className="px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white hover:text-green-600 transition-all duration-300 font-semibold">
                  Get Support
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </MainLayout>
  );
}