import React from 'react';
import Layout from './components/Layout';
import { motion } from 'framer-motion';
import { Accessibility, Eye, Ear, MousePointer, Keyboard, Smartphone, CheckCircle, AlertTriangle, Users, Settings } from 'lucide-react';

const accessibilityFeatures = [
  {
    title: "Screen Reader Support",
    description: "Our website is fully compatible with screen readers and assistive technologies",
    icon: Eye,
    details: [
      "Semantic HTML structure for proper content hierarchy",
      "Alt text for all images and visual content",
      "ARIA labels and roles for interactive elements",
      "Proper heading structure (H1, H2, H3, etc.)"
    ]
  },
  {
    title: "Keyboard Navigation",
    description: "Full website functionality accessible via keyboard only",
    icon: Keyboard,
    details: [
      "Tab navigation through all interactive elements",
      "Skip links for main content areas",
      "Visible focus indicators on all focusable elements",
      "Logical tab order throughout the site"
    ]
  },
  {
    title: "Visual Accessibility",
    description: "High contrast and clear visual design for better readability",
    icon: Eye,
    details: [
      "High contrast color schemes",
      "Scalable text and interface elements",
      "Clear typography and sufficient spacing",
      "Color is not the only means of conveying information"
    ]
  },
  {
    title: "Mobile Accessibility",
    description: "Responsive design that works on all devices and screen sizes",
    icon: Smartphone,
    details: [
      "Responsive design for all screen sizes",
      "Touch-friendly interface elements",
      "Proper viewport configuration",
      "Accessible mobile navigation"
    ]
  }
];

const standards = [
  {
    title: "WCAG 2.1 AA Compliance",
    description: "We follow Web Content Accessibility Guidelines 2.1 Level AA standards",
    level: "AA",
    coverage: "95%"
  },
  {
    title: "Section 508 Compliance",
    description: "Compliant with Section 508 of the Rehabilitation Act",
    level: "Federal",
    coverage: "100%"
  },
  {
    title: "ADA Compliance",
    description: "Americans with Disabilities Act compliance for digital accessibility",
    level: "Legal",
    coverage: "100%"
  }
];

const testingMethods = [
  {
    title: "Automated Testing",
    description: "Regular automated accessibility scans using industry-standard tools",
    tools: ["axe-core", "WAVE", "Lighthouse", "Pa11y"]
  },
  {
    title: "Manual Testing",
    description: "Human testing with assistive technologies and real users",
    tools: ["Screen Readers", "Voice Control", "Keyboard Only", "High Contrast"]
  },
  {
    title: "User Testing",
    description: "Testing with users who have disabilities to ensure real-world usability",
    tools: ["User Interviews", "Usability Testing", "Feedback Collection", "Iterative Improvement"]
  }
];

const improvements = [
  {
    title: "Ongoing Monitoring",
    description: "Continuous monitoring and improvement of accessibility features",
    icon: Settings
  },
  {
    title: "User Feedback",
    description: "We welcome feedback from users with disabilities",
    icon: Users
  },
  {
    title: "Regular Updates",
    description: "Regular updates to maintain and improve accessibility",
    icon: CheckCircle
  }
];

const contactInfo = {
  email: "accessibility@ziontechgroup.com",
  phone: "+1 302 464 0950",
  address: "364 E Main St STE 1008, Middletown DE 19709"
};

export default function AccessibilityPage() {
  return (
    <Layout
      title="Accessibility Statement - Zion Tech Group"
      description="Zion Tech Group is committed to digital accessibility. Learn about our accessibility features, compliance standards, and how we ensure our website is accessible to all users."
      keywords="accessibility, WCAG, ADA compliance, screen reader, keyboard navigation, digital accessibility"
      canonical="https://ziontechgroup.com/accessibility"
    >
      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-blue-900 to-purple-900 text-white py-20">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Accessibility Statement
              </h1>
              <p className="text-xl text-blue-100 max-w-4xl mx-auto">
                Zion Tech Group is committed to ensuring digital accessibility for all users. 
                We strive to provide an inclusive experience for everyone, regardless of ability.
              </p>
              <div className="mt-8 text-sm text-blue-200">
                Last updated: January 15, 2024
              </div>
            </motion.div>
          </div>
        </section>

        {/* Introduction */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <motion.div
              className="max-w-4xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Our Commitment
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                At Zion Tech Group, we believe that technology should be accessible to everyone. 
                We are committed to providing a website that is accessible to all users, including 
                those with disabilities. We continuously work to improve the accessibility of our 
                website and ensure that all users can access our content and services.
              </p>
              <p className="text-lg text-gray-600">
                This accessibility statement outlines our efforts to make our website accessible 
                and provides information about how to contact us if you encounter any accessibility barriers.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Accessibility Features */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Accessibility Features
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Our website includes various accessibility features to ensure a better user experience for all visitors.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8">
              {accessibilityFeatures.map((feature, index) => {
                const IconComponent = feature.icon;
                return (
                  <motion.div
                    key={index}
                    className="bg-white p-6 rounded-lg shadow-lg"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className="flex items-start mb-4">
                      <div className="text-blue-600 mr-4">
                        <IconComponent className="w-8 h-8" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-gray-900 mb-2">
                          {feature.title}
                        </h3>
                        <p className="text-gray-600 mb-4">
                          {feature.description}
                        </p>
                      </div>
                    </div>
                    <ul className="space-y-2">
                      {feature.details.map((detail, idx) => (
                        <li key={idx} className="flex items-start">
                          <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-1 flex-shrink-0" />
                          <span className="text-sm text-gray-600">{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Compliance Standards */}
        <section className="py-20 bg-gray-100">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Compliance Standards
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                We adhere to recognized accessibility standards and guidelines.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              {standards.map((standard, index) => (
                <motion.div
                  key={index}
                  className="bg-white p-6 rounded-lg shadow-md text-center"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="text-3xl font-bold text-blue-600 mb-2">
                    {standard.level}
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {standard.title}
                  </h3>
                  <p className="text-gray-600 mb-4 text-sm">
                    {standard.description}
                  </p>
                  <div className="text-sm font-medium text-green-600">
                    {standard.coverage} Coverage
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Testing Methods */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                How We Test Accessibility
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                We use multiple testing methods to ensure our website meets accessibility standards.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              {testingMethods.map((method, index) => (
                <motion.div
                  key={index}
                  className="bg-white p-6 rounded-lg shadow-lg"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {method.title}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    {method.description}
                  </p>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Tools Used:</h4>
                    <div className="flex flex-wrap gap-2">
                      {method.tools.map((tool, idx) => (
                        <span key={idx} className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
                          {tool}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Ongoing Improvements */}
        <section className="py-20 bg-gray-100">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Ongoing Improvements
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Accessibility is an ongoing process, and we continuously work to improve our website.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              {improvements.map((improvement, index) => {
                const IconComponent = improvement.icon;
                return (
                  <motion.div
                    key={index}
                    className="bg-white p-6 rounded-lg shadow-md text-center"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className="text-blue-600 mb-4">
                      <IconComponent className="w-12 h-12 mx-auto" />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      {improvement.title}
                    </h3>
                    <p className="text-gray-600 text-sm">
                      {improvement.description}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Contact for Accessibility Issues */}
        <section className="py-20 bg-blue-600 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Report Accessibility Issues
            </h2>
            <p className="text-xl mb-8 text-blue-100 max-w-3xl mx-auto">
              If you encounter any accessibility barriers on our website, please let us know. 
              We are committed to addressing accessibility issues promptly.
            </p>
            
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="flex items-center justify-center">
                <Accessibility className="w-6 h-6 mr-2" />
                <span>Accessibility Team</span>
              </div>
              <div className="flex items-center justify-center">
                <CheckCircle className="w-6 h-6 mr-2" />
                <span>Quick Response</span>
              </div>
              <div className="flex items-center justify-center">
                <Users className="w-6 h-6 mr-2" />
                <span>User-Focused</span>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a 
                href={`mailto:${contactInfo.email}`} 
                className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold transition-colors"
              >
                Email Us
              </a>
              <a 
                href={`tel:${contactInfo.phone}`} 
                className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 rounded-lg font-semibold transition-colors"
              >
                Call Us
              </a>
            </div>
            
            <div className="mt-8 text-sm text-blue-200">
              <p>Email: {contactInfo.email}</p>
              <p>Phone: {contactInfo.phone}</p>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
}