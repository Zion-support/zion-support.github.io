import React from 'react';
import MainLayout from '../components/layout/MainLayout';
import { motion } from 'framer-motion';
import { 
  Eye, 
  Ear, 
  MousePointer, 
  Keyboard, 
  CheckCircle, 
  ArrowRight,
  Shield,
  Users,
  Globe,
  Settings,
  Award,
  Heart
} from 'lucide-react';

const accessibilityFeatures = [
  {
    icon: Eye,
    title: "Visual Accessibility",
    description: "High contrast themes, scalable fonts, and screen reader compatibility",
    features: [
      "WCAG 2.1 AA compliant color contrast",
      "Scalable text up to 200% without loss of functionality",
      "Alt text for all images and media",
      "Screen reader compatibility",
      "High contrast mode",
      "Text scaling options",
      "Focus indicators for keyboard navigation"
    ]
  },
  {
    icon: Ear,
    title: "Auditory Accessibility",
    description: "Audio alternatives and visual cues for hearing-impaired users",
    features: [
      "Closed captions for all video content",
      "Audio descriptions for visual elements",
      "Visual alerts for audio notifications",
      "Transcripts for audio content",
      "Sign language interpretation options"
    ]
  },
  {
    icon: MousePointer,
    title: "Motor Accessibility",
    description: "Alternative input methods and navigation options",
    features: [
      "Voice control integration",
      "Switch navigation support",
      "Large click targets (minimum 44px)",
      "Drag and drop alternatives",
      "Customizable interaction timeouts"
    ]
  },
  {
    icon: Keyboard,
    title: "Keyboard Navigation",
    description: "Full keyboard accessibility and navigation support",
    features: [
      "Tab order follows logical sequence",
      "Skip links for main content",
      "Keyboard shortcuts for common actions",
      "Focus management and trapping",
      "No keyboard traps or dead ends"
    ]
  }
];

const complianceStandards = [
  {
    standard: "WCAG 2.1 AA",
    level: "Level AA",
    description: "Web Content Accessibility Guidelines 2.1 Level AA compliance",
    features: [
      "Perceivable content",
      "Operable interface",
      "Understandable information",
      "Robust technology"
    ]
  },
  {
    standard: "Section 508",
    level: "Federal Compliance",
    description: "U.S. federal accessibility standards compliance",
    features: [
      "Government accessibility requirements",
      "Public sector compliance",
      "Federal procurement standards"
    ]
  },
  {
    standard: "ADA Compliance",
    level: "Legal Requirement",
    description: "Americans with Disabilities Act compliance",
    features: [
      "Equal access requirements",
      "Reasonable accommodations",
      "Legal compliance standards"
    ]
  }
];

const toolsAndTechnologies = [
  {
    name: "Screen Readers",
    description: "Compatible with major screen reading software",
    tools: ["NVDA", "JAWS", "VoiceOver", "TalkBack", "Orca"]
  },
  {
    name: "Browser Support",
    description: "Cross-browser accessibility features",
    tools: ["Chrome", "Firefox", "Safari", "Edge", "Opera"]
  },
  {
    name: "Testing Tools",
    description: "Automated and manual accessibility testing",
    tools: ["axe-core", "WAVE", "Lighthouse", "Pa11y", "Manual Testing"]
  }
];

export default function AccessibilityPage() {
  return (
    <MainLayout>
      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-20">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Accessibility & Inclusion
              </h1>
              <p className="text-xl text-blue-100 max-w-3xl mx-auto">
                We are committed to making our digital experiences accessible to everyone, 
                ensuring equal access to information and services for all users.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Accessibility Features */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Our Accessibility Features
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                We implement comprehensive accessibility features to ensure our digital 
                products are usable by people with diverse abilities and needs.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {accessibilityFeatures.map((feature, index) => {
                const IconComponent = feature.icon;
                return (
                  <motion.div
                    key={feature.title}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="bg-white rounded-lg shadow-lg p-6"
                  >
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center mr-4">
                        <IconComponent className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-gray-900">{feature.title}</h3>
                        <p className="text-gray-600">{feature.description}</p>
                      </div>
                    </div>
                    <ul className="space-y-2">
                      {feature.features.map((item, itemIndex) => (
                        <li key={itemIndex} className="flex items-center text-sm text-gray-700">
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

        {/* Compliance Standards */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Compliance Standards
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                We adhere to international accessibility standards and guidelines 
                to ensure our products meet the highest accessibility requirements.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {complianceStandards.map((standard, index) => (
                <motion.div
                  key={standard.standard}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-gray-50 rounded-lg p-6 text-center"
                >
                  <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Award className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{standard.standard}</h3>
                  <p className="text-blue-600 font-semibold mb-3">{standard.level}</p>
                  <p className="text-gray-600 mb-4">{standard.description}</p>
                  <ul className="space-y-2 text-sm text-gray-700">
                    {standard.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Tools and Technologies */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Tools & Technologies
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                We use industry-standard tools and technologies to ensure 
                comprehensive accessibility testing and implementation.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {toolsAndTechnologies.map((tool, index) => (
                <motion.div
                  key={tool.name}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-lg shadow-lg p-6"
                >
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{tool.name}</h3>
                  <p className="text-gray-600 mb-4">{tool.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {tool.tools.map((item, itemIndex) => (
                      <span
                        key={itemIndex}
                        className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
          <div className="container mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold mb-6">
                Need Accessibility Support?
              </h2>
              <p className="text-xl mb-8 max-w-2xl mx-auto">
                If you encounter any accessibility barriers or need assistance 
                using our services, please contact us immediately.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="px-8 py-4 bg-white text-blue-600 rounded-lg hover:bg-gray-100 transition-colors font-semibold"
                >
                  Contact Us
                </a>
                <a
                  href="/support"
                  className="px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white hover:text-blue-600 transition-colors font-semibold"
                >
                  Get Support
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </MainLayout>
  );
}