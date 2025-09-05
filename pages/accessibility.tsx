import React from "react";
import MainLayout from '../components/layout/MainLayout';
import { motion } from 'framer-motion';
import {
  Eye, 
  Ear, 
  Hand, 
  Brain, 
  CheckCircle, 
  AlertTriangle,
  Globe,
  Users,
  Shield,
  Zap,
  FileText,
  Settings
} from 'lucide-react';

---
import React from 'react';
import Head from 'next/head';
import { Eye, Ear, Hand, Brain, Shield, FileText, Users, Globe } from 'lucide-react';


const accessibilityFeatures = [
  {
    title: "Visual Accessibility",
    description: "Features to support users with visual impairments",
    icon: Eye,
    features: [
      "High contrast color schemes",
      "Scalable text and interface elements",
      "Screen reader compatibility",
      "Alternative text for images",
      "Keyboard navigation support"
    ]
  },
  {
    title: "Auditory Accessibility",
    description: "Support for users with hearing impairments",
    icon: Ear,
    features: [
      "Video captions and transcripts",
      "Visual indicators for audio cues",
      "Text-based communication options",
      "Volume controls and audio descriptions",
      "Sign language support where applicable"
    ]
  },
  {
    title: "Motor Accessibility",
    description: "Features for users with motor impairments",
    icon: Hand,
    features: [
      "Keyboard-only navigation",
      "Voice control compatibility",
      "Large click targets",
      "Customizable interaction timing",
      "Switch control support"
    ]
  },
  {
    title: "Cognitive Accessibility",
    description: "Support for users with cognitive differences",
    icon: Brain,
    features: [
      "Clear and simple language",
      "Consistent navigation patterns",
      "Error prevention and recovery",
      "Progress indicators",
      "Customizable interface complexity"
    ]
  }
];

const standardsCompliance = [
  {
    standard: "WCAG 2.1 AA",
    description: "Web Content Accessibility Guidelines 2.1 Level AA compliance",
    status: "Compliant",
    coverage: "95%",
    icon: Shield
  },
  {
    standard: "Section 508",
    description: "U.S. federal accessibility requirements",
    status: "Compliant",
    coverage: "100%",
    icon: FileText
  },
  {
    standard: "ADA",
    description: "Americans with Disabilities Act compliance",
    status: "Compliant",
    coverage: "100%",
    icon: Users
  },
  {
    standard: "EN 301 549",
    description: "European accessibility standard for ICT products",
    status: "Compliant",
    coverage: "90%",
    icon: Globe
  }
];

const accessibilityTools = [
  {
    name: "Screen Reader Testing",
    description: "Regular testing with popular screen readers including NVDA, JAWS, and VoiceOver",
    frequency: "Monthly"
  },
  {
    name: "Keyboard Navigation",
    description: "Comprehensive keyboard navigation testing for all interactive elements",
    frequency: "Weekly"
  },
  {
    name: "Color Contrast Analysis",
    description: "Automated and manual color contrast testing to ensure readability",
    frequency: "With each design update"
  },
  {
    name: "User Testing",
    description: "Regular testing with users who have disabilities to identify barriers",
    frequency: "Quarterly"
  }
];

const accessibilityGuidelines = [
  {
    category: "Content",
    guidelines: [
      "Use clear and simple language",
      "Provide alternative text for images",
      "Use proper heading structure",
      "Ensure sufficient color contrast",
      "Provide captions for videos"
    ]
  },
  {
    category: "Navigation",
    guidelines: [
      "Logical tab order",
      "Skip links for main content",
      "Consistent navigation patterns",
      "Breadcrumb navigation",
      "Search functionality"
    ]
  },
  {
    category: "Forms",
    guidelines: [
      "Clear labels and instructions",
      "Error messages and validation",
      "Required field indicators",
      "Logical grouping of related fields",
      "Multiple input methods"
    ]
  },
  {
    category: "Interactive Elements",
    guidelines: [
      "Keyboard accessible",
      "Focus indicators",
      "Adequate target sizes",
      "No seizure-inducing content",
      "Customizable timing"
    ]
  }
];

export default function AccessibilityPage() {
  return (
    <MainLayout
      title="Accessibility - Zion Tech Group"
      description="Learn about Zion Tech Group's commitment to web accessibility and our compliance with WCAG 2.1, Section 508, and ADA standards."
    >
      <div className="min-h-screen bg-gray-50">
        <section className="bg-gradient-to-br from-purple-900 via-indigo-900 to-blue-900 text-white py-20">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center max-w-4xl mx-auto"
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Web Accessibility
                <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                  Excellence
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8">
                Building inclusive digital experiences that work for everyone
              </p>
            </motion.div>
          </div>
        </section>
        <section className="py-20">
</section>
          <div className="container mx-auto px-4">
</div>
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Our Accessibility Standards
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                We follow international accessibility standards to ensure our digital products are inclusive and accessible to all users
              </p>
            </motion.div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {standardsCompliance.map((standard, index) => {
                const IconComponent = standard.icon;
                return (
                  <motion.div
                    key={index}
                    className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                    viewport={{ once: true }};
                  >
</motion>
                    <div className="flex items-start space-x-4">"
</div>"
                      <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">"
</div>"
                        <IconComponent className="w-8 h-8 text-white" />"
</IconComponent>
                      </div>"
                      <div className="flex-1">"
</div>"
                        <h3 className="text-2xl font-bold text-gray-900 mb-3">"
</h3>
                        </h3>"
                        <p className="text-gray-600 mb-6 leading-relaxed">"
</p>
                        </p>"
                        <ul className="space-y-2">"
</ul>"
                            <li key={idx} className="flex items-center text-sm text-gray-600">"
</li>"
                              <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />"
</CheckCircle>
                            </li>
                        </ul>
                      </div>
                    </div>
                  </motion.div>);
                );
              })};
            </div>
          </div>
        </section>
        <section className="py-20 bg-white">"
</section>"
          <div className="container mx-auto px-4">
</div>
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
</motion>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Our Accessibility Standards
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                We follow international accessibility standards to ensure our digital products are inclusive and accessible to all users
              </p>
            </motion.div>
"
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">"
</div>
                  <motion.div;
                    key={index};
                    className="bg-gray-50 p-6 rounded-xl text-center hover:shadow-lg transition-all duration-300"
                    initial={{ opacity: 0, y: 30 }};
                    whileInView={{ opacity: 1, y: 0 }};
                    transition={{ duration: 0.8, delay: index * 0.1 }};
                    viewport={{ once: true }};
                  >
</motion>
                    <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-600 rounded-lg flex items-center justify-center mx-auto mb-4">"
</div>"
                      <IconComponent className="w-8 h-8 text-white" />"
</IconComponent>
                    </div>"
                    <h3 className="text-lg font-bold text-gray-900 mb-2">"
</h3>
                    </h3>"
                    <p className="text-gray-600 text-sm mb-4">"
</p>
                    </p>"
                    <div className="space-y-2">"
</div>
                      <span className={`px-3 py-1 text-xs rounded-full ${`}
                        standard.status === 'Compliant' ? 'bg-green-100 text-green-800' :''
                        'bg-yellow-100 text-yellow-800''
                      }`}>`
</span>
                      </span>``
                      <div className="text-sm text-gray-500">"
</div>
                      </div>
                    </div>
                  </motion.div>
                );
              })};
            </div>
          </div>
        </section>
        <section className="py-20">
</section>
          <div className="container mx-auto px-4">
</div>
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
</motion>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Our Accessibility Standards
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                We follow international accessibility standards to ensure our digital products are inclusive and accessible to all users
              </p>
            </motion.div>
"
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">"
</div>
                <motion.div;
                  key={index};
                  className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                  initial={{ opacity: 0, y: 30 }};
                  whileInView={{ opacity: 1, y: 0 }};
                  transition={{ duration: 0.8, delay: index * 0.1 }};
                  viewport={{ once: true }};
                >
</motion>
                  <div className="flex items-start space-x-4">"
</div>"
                    <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">"
</div>"
                      <Zap className="w-6 h-6 text-white" />"
</Zap>
                    </div>"
                    <div className="flex-1">"
</div>"
                      <div className="flex items-center justify-between mb-2">"
</div>"
                        <h3 className="text-xl font-bold text-gray-900">"
</h3>
                        </h3>"
                        <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded">"
</span>
                        </span>
                      </div>"
                      <p className="text-gray-600">"
</p>
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))};
            </div>
          </div>
        </section>
        <section className="py-20 bg-white">"
</section>"
          <div className="container mx-auto px-4">
</div>
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
</motion>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Our Accessibility Standards
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                We follow international accessibility standards to ensure our digital products are inclusive and accessible to all users
              </p>
            </motion.div>
"
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">"
</div>
                <motion.div;
                  key={index};
                  className="bg-gray-50 p-6 rounded-xl hover:shadow-lg transition-all duration-300"
                  initial={{ opacity: 0, y: 30 }};
                  whileInView={{ opacity: 1, y: 0 }};
                  transition={{ duration: 0.8, delay: index * 0.1 }};
                  viewport={{ once: true }};
                >
</motion>
                  <h3 className="text-lg font-bold text-gray-900 mb-4">"
</h3>
                  </h3>"
                  <ul className="space-y-2">"
</ul>"
                      <li key={idx} className="flex items-center text-sm text-gray-600">"
</li>"
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />"
</CheckCircle>
                      </li>
                  </ul>
                </motion.div>
              ))};
            </div>
          </div>
        </section>
        <section className="py-20">
</section>
          <div className="container mx-auto px-4">
</div>"
            <div className="max-w-4xl mx-auto">"
</div>
              <motion.div
                className="bg-white p-8 rounded-xl shadow-lg"
                initial={{ opacity: 0, y: 30 }};
                whileInView={{ opacity: 1, y: 0 }};
                transition={{ duration: 0.8 }};
                viewport={{ once: true }};
              >
</motion>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">"
</h2>
                </h2>"
                <div className="prose prose-lg max-w-none">"
</div>"
                  <p className="text-gray-600 mb-6">"
</p>
                  </p>"
                  <p className="text-gray-600 mb-6">"
</p>
                  </p>"
                  <p className="text-gray-600 mb-6">"
</p>
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
        <section className="py-20 bg-gradient-to-r from-purple-600 to-blue-600 text-white">"
</section>"
          <div className="container mx-auto px-4 text-center">"
</div>
            <motion.div;
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
</motion>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">"
</h2>
              </h2>"
              <p className="text-xl text-purple-100 mb-8 max-w-3xl mx-auto">"
</p>
              </p>"
              <div className="flex flex-col sm:flex-row gap-4 justify-center">"
</div>"
                <a href="mailto:accessibility@ziontechgroup.com" className="px-8 py-4 bg-white text-purple-600 rounded-lg hover:bg-gray-100 transition-colors font-semibold">"
</a>
                </a>"
                <a href="/contact" className="px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white hover:text-purple-600 transition-all duration-300 font-semibold">"
</a>

---
export default function AccessibilityPage() {
  return (
    <>
      <Head>
        <title>Accessibility - Zion Tech Group</title>
        <meta name="description" content="Learn about Zion Tech Group's commitment to web accessibility and our compliance with WCAG 2.1, Section 508, and ADA standards." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <div className="min-h-screen bg-gray-50">
        {/* Header */}
        <header className="bg-white shadow-lg">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center py-6">
              <div className="flex items-center">
                <a href="/" className="text-3xl font-bold text-gray-900">Zion Tech Group</a>
              </div>
              <div className="flex items-center space-x-4">
                <a href="tel:+13024640950" className="text-blue-600 hover:text-blue-800 font-medium">
                  +1 302 464 0950
                </a>
                <a href="mailto:kleber@ziontechgroup.com" className="text-blue-600 hover:text-blue-800 font-medium">
                  kleber@ziontechgroup.com

                </a>
              </div>
            </div>
          </div>
        </header>

        {/* Hero Section */}
        <section className="bg-gradient-to-br from-purple-900 via-indigo-900 to-blue-900 text-white py-20">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                  Accessibility First
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8">
                Building inclusive digital experiences for everyone
              </p>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Our Accessibility Features
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                We implement comprehensive accessibility features to ensure our digital products are usable by everyone.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {accessibilityFeatures.map((feature, index) => (
                <div key={index} className="bg-white p-8 rounded-xl shadow-lg">
                  <div className="flex items-center mb-4">
                    <feature.icon className="h-8 w-8 text-blue-600 mr-3" />
                    <h3 className="text-xl font-bold text-gray-900">{feature.title}</h3>
                  </div>
                  <p className="text-gray-600 mb-4">{feature.description}</p>
                  <ul className="space-y-2">
                    {feature.features.map((item, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-600">
                        <span className="text-green-500 mr-2">✓</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Compliance Section */}
        <section className="py-20 bg-gray-100">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Standards Compliance
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                We maintain compliance with international accessibility standards and regulations.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {standardsCompliance.map((standard, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-md text-center">
                  <standard.icon className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{standard.standard}</h3>
                  <p className="text-sm text-gray-600 mb-4">{standard.description}</p>
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-green-600 font-medium">{standard.status}</span>
                    <span className="text-gray-500">{standard.coverage}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-blue-600 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold mb-6">Need Help with Accessibility?</h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              Our team can help you make your digital products accessible to everyone. 
              Contact us for a free accessibility audit.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="tel:+13024640950" 
                className="bg-yellow-400 text-gray-900 px-8 py-3 rounded-lg font-semibold hover:bg-yellow-300 transition-colors"
              >
                Call +1 302 464 0950
              </a>
              <a 
                href="mailto:kleber@ziontechgroup.com" 
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-colors"
              >
                Email kleber@ziontechgroup.com
              </a>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-gray-900 text-white py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-4 gap-8">
              <div>
                <h4 className="text-lg font-semibold mb-4">Zion Tech Group</h4>
                <p className="text-gray-400 text-sm">
                  Leading provider of innovative technology solutions that transform businesses and drive growth.
                </p>
              </div>
              <div>
                <h4 className="text-lg font-semibold mb-4">Services</h4>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li><a href="/micro-saas" className="hover:text-white">Micro SAAS Solutions</a></li>
                  <li><a href="/it-services" className="hover:text-white">IT Services</a></li>
                  <li><a href="/ai-services" className="hover:text-white">AI Services</a></li>
                  <li><a href="/consulting" className="hover:text-white">Technology Consulting</a></li>
                </ul>
              </div>
              <div>
                <h4 className="text-lg font-semibold mb-4">Company</h4>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li><a href="/about" className="hover:text-white">About Us</a></li>
                  <li><a href="/team" className="hover:text-white">Our Team</a></li>
                  <li><a href="/careers" className="hover:text-white">Careers</a></li>
                  <li><a href="/contact" className="hover:text-white">Contact</a></li>
                </ul>
              </div>
              <div>
                <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
                <div className="text-sm text-gray-400 space-y-2">
                  <p>📞 +1 302 464 0950</p>
                  <p>✉️ kleber@ziontechgroup.com</p>
                  <p>🌐 ziontechgroup.com</p>
                  <p>📍 364 E Main St STE 1008<br />Middletown DE 19709</p>
                </div>
              </div>
            </div>
            <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-400">
              <p>&copy; 2025 Zion Tech Group. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}