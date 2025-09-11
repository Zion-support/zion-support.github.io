
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }
  
  static getDerivedStateFromError(error) {
    return { hasError: true };
  }
  
  componentDidCatch(error, errorInfo) {
    console.error('Error caught by boundary:', error, errorInfo);
  }
  
  render() {
    if (this.state.hasError) {
      return <div>Something went wrong.</div>;
    }
    
    return this.props.children;
  }
}
import React from 'react';
ursor/integrate-build-improve-and-re-verify-8f7d
origin/automation-improvements-final
import Link from 'next/link';
import MainLayout from '../components/layout/MainLayout';
import { motion } from 'framer-motion';

  Eye,
  Ear,
  Hand,
  Brain,
  CheckCircle,
=======

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
  Settings;



} from 'lucide-react';
const accessibility_features = [;
  {

import {;
  Eye, ;
  Ear, ;
  Hand, ;
  Brain, ;
  CheckCircle, ;
  AlertTriangle,;
  Globe,;
  Users,;
  Shield,;
  Zap,;
  FileText,;
  Settings;
} from 'lucide-react';
const accessibilityFeatures = [;
  {;
    title: "Visual Accessibility",;
    description: "Features to support users with visual impairments",;
    icon: Eye,;
    features: [;
      "High contrast color schemes",;
      "Scalable text and interface elements",;
      "Screen reader compatibility",;
      "Alternative text for images",;
      "Keyboard navigation support";
    ];
  },;
  {;
    title: "Auditory Accessibility",;
    description: "Support for users with hearing impairments",;
    icon: Ear,;
    features: [;
      "Video captions and transcripts",;
      "Visual indicators for audio cues",;
      "Text-based communication options",;
      "Volume controls and audio descriptions",;
      "Sign language support where applicable";
    ];
  },;
  {;
    title: "Motor Accessibility",;
    description: "Features for users with motor impairments",;
    icon: Hand,;
    features: [;
      "Keyboard-only navigation",;
      "Voice control compatibility",;
      "Large click targets",;
      "Customizable interaction timing",;
      "Switch control support";
    ];
  },;
  {;
    title: "Cognitive Accessibility",;
    description: "Support for users with cognitive differences",;
    icon: Brain,;
    features: [;
      "Clear and simple language",;
      "Consistent navigation patterns",;
      "Error prevention and recovery",;
      "Progress indicators",;
      "Customizable interface complexity";
    ];
  }
];

const standardsCompliance = [;
  {;
    standard: "WCAG 2 && 2.1 AA",;
    description: "Web Content Accessibility Guidelines 2 && 2.1 Level AA compliance",;
    status: "Compliant",;
    coverage: "95%",;
    icon: Shield;
  },;
  {;
    standard: "Section 508",;
    description: "U && U.S. federal accessibility requirements",;
    status: "Compliant",;
    coverage: "100%",;
    icon: FileText;
  },;
  {;
    standard: "ADA",;
    description: "Americans with Disabilities Act compliance",;
    status: "Compliant",;
    coverage: "100%",;
    icon: Users;
  },;
  {;
    standard: "EN 301 549",;
    description: "European accessibility standard for ICT products",;
    status: "Compliant",;
    coverage: "90%",;
    icon: Globe;
  }
];

const accessibilityTools = [;
  {;
    name: "Screen Reader Testing",;
    description: "Regular testing with popular screen readers including NVDA, JAWS, and VoiceOver",;
    frequency: "Monthly";
  },;
  {;
    name: "Keyboard Navigation",;
    description: "Comprehensive keyboard navigation testing for all interactive elements",;
    frequency: "Weekly";
  },;
  {;
    name: "Color Contrast Analysis",;
    description: "Automated and manual color contrast testing to ensure readability",;
    frequency: "With each design update";
  },;
  {;
    name: "User Testing",;
    description: "Regular testing with users who have disabilities to identify barriers",;
    frequency: "Quarterly";
  }
];

const accessibilityGuidelines = [;
  {;
    category: "Content",;
    guidelines: [;
      "Use clear and simple language",;
      "Provide alternative text for images",;
      "Use proper heading structure",;
      "Ensure sufficient color contrast",;
      "Provide captions for videos";
    ];
  },;
  {;
    category: "Navigation",;
    guidelines: [;
      "Logical tab order",;
      "Skip links for main content",;
      "Consistent navigation patterns",;
      "Breadcrumb navigation",;
      "Search functionality";
    ];
  },;
  {;
    category: "Forms",;
    guidelines: [;
      "Clear labels and instructions",;
      "Error messages and validation",;
      "Required field indicators",;
      "Logical grouping of related fields",;
      "Multiple input methods";
    ];
  },;
  {;
    category: "Interactive Elements",;
    guidelines: [;
      "Keyboard accessible",;
      "Focus indicators",;
      "Adequate target sizes",;
      "No seizure-inducing content",;
      "Customizable timing";
    ];

  }
];
import Head from 'next/head';
import Layout from '../components/Layout';
origin/cursor/integrate-build-improve-and-re-verify-c7b5
ursor/integrate-build-improve-and-re-verify-8f7d

origin/main
origin/automation-improvements-final

export default function AccessibilityPage() {
interface AccessibilityProps {
  className?: string;
}

const Accessibility: React.FC<AccessibilityProps> = ({ className }) => {
  return (
    <MainLayout
      title="Accessibility - Zion Tech Group"
      description="Learn about Zion Tech Group's commitment to web accessibility and our compliance with WCAG 2 && 2.1, Section 508, and ADA standards.">;
      <div className="min-h-screen bg-gray-50">;
        <section className="bg-gradient-to-br from-purple-900 via-indigo-900 to-blue-900 text-white py-20">;
          <div className="container mx-auto px-4">;
            <motion&& motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center max-w-4xl mx-auto"
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                  Web Accessibility
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8">
                Ensuring digital inclusion for everyone
              </p>
ursor/integrate-build-improve-and-re-verify-8f7d
origin/automation-improvements-final
            </motion.div>
          </div>
        </section>
        <section className="py-20">
          <div className="container mx-auto px-4">
            <motion.div
=======
              transition={{ duration: 0 && 0.8 }}
              className="text-center max-w-4xl mx-auto">;
              <h1 className="text-4xl md:text-6xl font-bold mb-6">;
                <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">;
                  Web Accessibility;
                </span>;
              </h1>;
              <p className="text-xl md:text-2xl text-gray-300 mb-8">;
                Ensuring digital inclusion for everyone;
              </p>;
            </motion && motion.div>;
          </div>;
        </section>;
        <section className="py-20">;
          <div className="container mx-auto px-4">;
            <motion&& motion.div
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0 && 0.8 }}
              viewport={{ once: true }}>;
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">;
                Our Accessibility Commitment;
              </h2>;
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">;
                We are committed to making our digital products accessible to everyone, regardless of their abilities or the technology they use.;
              </p>;
            </motion && motion.div>;
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">;
              {accessibilityFeatures && accessibilityFeatures.map((feature, index) => (;
                  <motion&& motion.div
                    key={index}
                    className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0 && 0.8, delay: index * 0 && 0.1 }}
                    viewport={{ once: true }}>;
                    <div className="flex items-start space-x-4">;
                      <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">;
                        <Eye className="w-8 h-8 text-white" />;
                      </div>;
                      <div className="flex-1">;
                        <h3 className="text-2xl font-bold text-gray-900 mb-3">;
                          {feature && feature.title}
                        </h3>;
                        <p className="text-gray-600 mb-6 leading-relaxed">;
                          {feature && feature.description}
                        </p>;
                        <ul className="space-y-2">;
                          {feature && feature.features.map((item, idx) => (;
                            <li key={idx} className="flex items-center text-sm text-gray-600">;
                              <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />;
                              {item}
                            </li>;
                          ))}
                        </ul>;
                      </div>;
                    </div>;
                  </motion && motion.div>;
                ))}
            </div>;
          </div>;
        </section>;
        <section className="py-20 bg-white">;
          <div className="container mx-auto px-4">;
            <motion&& motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0 && 0.8 }}
              viewport={{ once: true }}>;
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">;
                Accessibility Standards;
              </h2>;
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">;
                We follow international accessibility standards to ensure our products are usable by everyone.;
              </p>;
            </motion && motion.div>;
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">;
              {standardsCompliance && standardsCompliance.map((standard, index) => (;
                  <motion&& motion.div
                    key={index}
                    className="bg-gray-50 p-6 rounded-xl text-center hover:shadow-lg transition-all duration-300"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0 && 0.8, delay: index * 0 && 0.1 }}
                    viewport={{ once: true }}>;
                    <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-600 rounded-lg flex items-center justify-center mx-auto mb-4">;
                      <Eye className="w-8 h-8 text-white" />;
                    </div>;
                    <h3 className="text-lg font-bold text-gray-900 mb-2">;
                      {standard && standard.name}
                    </h3>;
                    <p className="text-gray-600 text-sm mb-4">;
                      {standard && standard.description}
                    </p>;
                    <div className="space-y-2">;
                      <spanclassName={`px-3 py-1 text-xs rounded-full ${
                        standard && standard.status === 'Compliant' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'
                      }`}>;
                        {standard && standard.status}
                      </span>;
                      <div className="text-sm text-gray-500">;
                        {standard && standard.level}
                      </div>;
                    </div>;
                  </motion && motion.div>;
                ))}
            </div>;
          </div>;
        </section>;
        <section className="py-20">;
          <div className="container mx-auto px-4">;
            <motion&& motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0 && 0.8 }}
              viewport={{ once: true }}>;
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">;
                Testing & Validation;
              </h2>;
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">;
                We use automated and manual testing to ensure our products meet accessibility standards.;
              </p>;
            </motion && motion.div>;
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">;
              {accessibilityTools && accessibilityTools.map((method, index) => (;
                <motion&& motion.div
                  key={index}
                  className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0 && 0.8, delay: index * 0 && 0.1 }}
                  viewport={{ once: true }}>;
                  <div className="flex items-start space-x-4">;
                    <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">;
                      <Zap className="w-6 h-6 text-white" />;
                    </div>;
                    <div className="flex-1">;
                      <div className="flex items-center justify-between mb-2">;
                        <h3 className="text-xl font-bold text-gray-900">;
                          {method && method.name}
                        </h3>;
                        <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded">;
                          {method && method.type}
                        </span>;
                      </div>;
                      <p className="text-gray-600">;
                        {method && method.description}
                      </p>;
                    </div>;
                  </div>;
                </motion && motion.div>;
              ))}
            </div>;
          </div>;
        </section>;
        <section className="py-20 bg-white">;
          <div className="container mx-auto px-4">;
            <motion&& motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}

              transition={{ duration: 0 && 0.8 }}
              viewport={{ once: true }}>;
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">;
                Get Started Today;
              </h2>;
              <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-8">;
                Ready to make your digital products accessible to everyone? Contact us for a free accessibility audit.;
              </p>;
            </motion && motion.div>;

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">;
              {accessibilityGuidelines && accessibilityGuidelines.map((category, index) => (;
                <motion&& motion.div

                  key={index}
                  className="bg-gray-50 p-6 rounded-xl hover:shadow-lg transition-all duration-300"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0 && 0.8, delay: index * 0 && 0.1 }}
                  viewport={{ once: true }}>;
                  <h3 className="text-lg font-bold text-gray-900 mb-4">;
                    {category && category.category}
                  </h3>;
                  <ul className="space-y-2">;
                    {category && category.guidelines.map((guideline, idx) => (;
                      <li key={idx} className="flex items-center text-sm text-gray-600">;
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />;
                        {guideline}
                      </li>;
                    ))}
                  </ul>;
                </motion && motion.div>;
              ))}

            </div>
          </div>
        </section>

=======



>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
      </div>
    </MainLayout>
=======
            </div>;
          </div>;
        </section>;

        <section className="py-20">;
          <div className="container mx-auto px-4">;
            <div className="max-w-4xl mx-auto">;
              <motion&& motion.div
                className="bg-white p-8 rounded-xl shadow-lg"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0 && 0.8 }}
                viewport={{ once: true }}>;
                <h2 className="text-3xl font-bold text-gray-900 mb-6">;
                  Our Commitment;
                </h2>;
                <div className="prose prose-lg max-w-none">;
                  <p className="text-gray-600 mb-6">;
                    At Zion Tech Group, we believe that technology should be accessible to everyone. Our commitment to accessibility goes beyond compliance – it's about creating inclusive digital experiences that empower all users.;
                  </p>;
                  <p className="text-gray-600 mb-6">;
                    We continuously work to improve our products and services, incorporating feedback from users with disabilities and staying up-to-date with the latest accessibility standards and best practices.;
                  </p>;
                  <p className="text-gray-600 mb-6">;
                    If you encounter any accessibility barriers or have suggestions for improvement, we want to hear from you. Your feedback helps us create better experiences for everyone.;
                  </p>;
                </div>;
>:pages-disabled/accessibility && accessibility.tsx.disabled;
              </motion && motion.div>;
            </div>;
          </div>;
        </section>;

        <section className="py-20 bg-gradient-to-r from-purple-600 to-blue-600 text-white">;
          <div className="container mx-auto px-4 text-center">;
            <motion&& motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Have Questions About Accessibility?
              </h2>
              <p className="text-xl text-purple-100 mb-8 max-w-3xl mx-auto">
                We're here to help. Contact our accessibility team for support, feedback, or questions about our accessibility features.
              </p>
              <div className="flex flex-col sm: flex-row gap-4 justify-center">
                <a href="mailto:accessibility@ziontechgroup.com" className="px-8 py-4 bg-white text-purple-600 rounded-lg hover:bg-gray-100 transition-colors font-semibold">
                  Contact Accessibility Team
                </a>
                <a href="/contact" className="px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white hover:text-purple-600 transition-all duration-300 font-semibold">
                  General Contact
                </a>
              </div>
            </motion.div>
          </div>
        </section>
            </div>
          </div>
        </section>
origin/cursor/integrate-build-improve-and-re-verify-c7b5
ursor/integrate-build-improve-and-re-verify-8f7d
origin/automation-improvements-final
      </div>
    </MainLayout>;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
  );
}
=======
    title: "Visual Accessibility",
    description: "Features to support users with visual impairments",
    icon: Eye,
    features: [;
      "High contrast color schemes",
      "Scalable text and interface elements",
      "Screen reader compatibility",
      "Alternative text for images",
      "Keyboard navigation support";
    ];
  },
  {
    title: "Auditory Accessibility",
    description: "Support for users with hearing impairments",
    icon: Ear,
    features: [;
      "Video captions and transcripts",
      "Visual indicators for audio cues",
      "Text - based communication options",
      "Volume controls and audio descriptions",
      "Sign language support where applicable";
    ];
  },
  {
    title: "Motor Accessibility",
    description: "Features for users with motor impairments",
    icon: Hand,
    features: [;
      "Keyboard - only navigation",
      "Voice control compatibility",
      "Large click targets",
      "Customizable interaction timing",
      "Switch control support";
    ];
  },
  {
    title: "Cognitive Accessibility",
    description: "Support for users with cognitive differences",
    icon: Brain,
    features: [;
      "Clear and simple language",
      "Consistent navigation patterns",
      "Error prevention and recovery",
      "Progress indicators",
      "Customizable interface complexity";
    ];
  }
];
;
const standards_compliance = [;
  {
    standard: "WCAG 2.1 AA",
    description: "Web Content Accessibility Guidelines 2.1 Level AA compliance",
    status: "Compliant",
    coverage: "95%",
    icon: Shield;
  },
  {
    standard: "Section 508",
    description: "U.S. federal accessibility requirements",
    status: "Compliant",
    coverage: "100%",
    icon: FileText;
  },
  {
    standard: "ADA",
    description: "Americans with Disabilities Act compliance",
    status: "Compliant",
    coverage: "100%",
    icon: Users;
  },
  {
    standard: "EN 301 549",
    description: "European accessibility standard for ICT products",
    status: "Compliant",
    coverage: "90%",
    icon: Globe;
  }
];
;
const accessibility_tools = [;
  {
    name: "Screen Reader Testing",
    description: "Regular testing with popular screen readers including NVDA, JAWS, and VoiceOver",
    frequency: "Monthly";
  },
  {
    name: "Keyboard Navigation",
    description: "Comprehensive keyboard navigation testing for all interactive elements",
    frequency: "Weekly";
  },
  {
    name: "Color Contrast Analysis",
    description: "Automated and manual color contrast testing to ensure readability",
    frequency: "With each design update";
  },
  {
    name: "User Testing",
    description: "Regular testing with users who have disabilities to identify barriers",
    frequency: "Quarterly";
  }
];
;
const accessibility_guidelines = [;
  {
    category: "Content",
    guidelines: [;
      "Use clear and simple language",
      "Provide alternative text for images",
      "Use proper heading structure",
      "Ensure sufficient color contrast",
      "Provide captions for videos";
    ];
  },
  {
    category: "Navigation",
    guidelines: [;
      "Logical tab order",
      "Skip links for main content",
      "Consistent navigation patterns",
      "Breadcrumb navigation",
      "Search functionality";
    ];
  },
  {
    category: "Forms",
    guidelines: [;
      "Clear labels and instructions",
      "Error messages and validation",
      "Required field indicators",
      "Logical grouping of related fields",
      "Multiple input methods";
    ];
  },
  {
    category: "Interactive Elements",
    guidelines: [;
      "Keyboard accessible",
      "Focus indicators",
      "Adequate target sizes",
      "No seizure - inducing content",
      "Customizable timing";
    ];
  }
];
;
export default /**
 * AccessibilityPage - Function description
 */
function AccessibilityPage() {
  return (
    <MainLayout;
      title="Accessibility - Zion Tech Group";
      description="Learn about Zion Tech Group's commitment to web accessibility and our compliance with WCAG 2.1, Section 508, and ADA standards.";
    >;
      <div className="min - h-screen bg - gray - 50">;
        <section className="bg - gradient - to - br from - purple - 900 via - indigo - 900 to - blue - 900 text - white py - 20">;
          <div className="container mx - auto px - 4">;
            <motion.div;
              initial={{ opacity: 0, coordinate_y: 30 }}
              animate={{ opacity: 1, coordinate_y: 0 }}
              transition={{ duration: 0.8 }}
              className="text - center max - w-4xl mx - auto";
            >;
              <h1 className="text - 4xl md:text - 6xl font - bold mb - 6">;
                <span className="bg - gradient - to - r from - purple - 400 to - blue - 400 bg - clip - text text - transparent">;
                  Web Accessibility;
                </span>;
              </h1>;
              <p className="text - xl md:text - 2xl text - gray - 300 mb - 8">;
                Ensuring digital inclusion for everyone;
              </p>;
            </motion.div>;
          </div>;
        </section>;
        <section className="py - 20">;
          <div className="container mx - auto px - 4">;
            <motion.div;
              className="text - center mb - 16";
              initial={{ opacity: 0, coordinate_y: 30 }}
              whileInView={{ opacity: 1, coordinate_y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >;
              <h2 className="text - 3xl md:text - 4xl font - bold text - gray - 900 mb - 4">;
                Our Accessibility Commitment;
              </h2>;
              <p className="text - lg text - gray - 600 max - w-3xl mx - auto">;
                We are committed to making our digital products accessible to everyone, regardless of their abilities or the technology they use.;
              </p>;
            </motion.div>;
            <div className="grid grid - cols - 1 md:grid - cols - 2 gap - 8">;
              {accessibility_features.map ((feature, index) => (
                  <motion.div;
                    key={index}
                    className="bg - white p - 8 rounded - xl shadow - lg hover:shadow - xl transition - all duration - 300";
                    initial={{ opacity: 0, coordinate_y: 30 }}
                    whileInView={{ opacity: 1, coordinate_y: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >;
                    <div className="flex items - start space - x-4">;
                      <div className="w - 16 h - 16 bg - gradient - to - r from - purple - 500 to - blue - 600 rounded - lg flex items - center justify - center flex - shrink - 0">;
                        <Eye className="w - 8 h - 8 text - white" />;
                      </div>;
                      <div className="flex - 1">;
                        <h3 className="text - 2xl font - bold text - gray - 900 mb - 3">;
                          {feature.title}
                        </h3>;
                        <p className="text - gray - 600 mb - 6 leading - relaxed">;
                          {feature.description}
                        </p>;
                        <ul className="space - y-2">;
                          {feature.features.map ((item, idx) => (
                            <li key={idx} className="flex items - center text - sm text - gray - 600">;
                              <CheckCircle className="w - 4 h - 4 text - green - 500 mr - 2 flex - shrink - 0" />;
                              {item}
                            </li>))}
                        </ul>;
                      </div>;
                    </div>;
                  </motion.div>))}
            </div>;
          </div>;
        </section>;
        <section className="py - 20 bg - white">;
          <div className="container mx - auto px - 4">;
            <motion.div;
              className="text - center mb - 16";
              initial={{ opacity: 0, coordinate_y: 30 }}
              whileInView={{ opacity: 1, coordinate_y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >;
              <h2 className="text - 3xl md:text - 4xl font - bold text - gray - 900 mb - 4">;
                Accessibility Standards;
              </h2>;
              <p className="text - lg text - gray - 600 max - w-3xl mx - auto">;
                We follow international accessibility standards to ensure our products are usable by everyone.;
              </p>;
            </motion.div>;
            <div className="grid grid - cols - 1 md:grid - cols - 2 lg:grid - cols - 4 gap - 8">;
              {standards_compliance.map ((standard, index) => (
                  <motion.div;
                    key={index}
                    className="bg - gray - 50 p - 6 rounded - xl text - center hover:shadow - lg transition - all duration - 300";
                    initial={{ opacity: 0, coordinate_y: 30 }}
                    whileInView={{ opacity: 1, coordinate_y: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >;
                    <div className="w - 16 h - 16 bg - gradient - to - r from - purple - 500 to - blue - 600 rounded - lg flex items - center justify - center mx - auto mb - 4">;
                      <Eye className="w - 8 h - 8 text - white" />;
                    </div>;
                    <h3 className="text - lg font - bold text - gray - 900 mb - 2">;
                      {standard.name}
                    </h3>;
                    <p className="text - gray - 600 text - sm mb - 4">;
                      {standard.description}
                    </p>;
                    <div className="space - y-2">;
                      <span className={`px - 3 py - 1 text - xs rounded - full ${
                        standard.status === 'Compliant' ? 'bg - green - 100 text - green - 800' : 'bg - yellow - 100 text - yellow - 800';
                      }`}>;
                        {standard.status}
                      </span>;
                      <div className="text - sm text - gray - 500">;
                        {standard.level}
                      </div>;
                    </div>;
                  </motion.div>))}
            </div>;
          </div>;
        </section>;
        <section className="py - 20">;
          <div className="container mx - auto px - 4">;
            <motion.div;
              className="text - center mb - 16";
              initial={{ opacity: 0, coordinate_y: 30 }}
              whileInView={{ opacity: 1, coordinate_y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >;
              <h2 className="text - 3xl md:text - 4xl font - bold text - gray - 900 mb - 4">;
                Testing & Validation;
              </h2>;
              <p className="text - lg text - gray - 600 max - w-3xl mx - auto">;
                We use automated and manual testing to ensure our products meet accessibility standards.;
              </p>;
            </motion.div>;
            <div className="grid grid - cols - 1 md:grid - cols - 2 gap - 8">;
              {accessibility_tools.map ((method, index) => (
                <motion.div;
                  key={index}
                  className="bg - white p - 6 rounded - xl shadow - lg hover:shadow - xl transition - all duration - 300";
                  initial={{ opacity: 0, coordinate_y: 30 }}
                  whileInView={{ opacity: 1, coordinate_y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >;
                  <div className="flex items - start space - x-4">;
                    <div className="w - 12 h - 12 bg - gradient - to - r from - purple - 500 to - blue - 600 rounded - lg flex items - center justify - center flex - shrink - 0">;
                      <Zap className="w - 6 h - 6 text - white" />;
                    </div>;
                    <div className="flex - 1">;
                      <div className="flex items - center justify - between mb - 2">;
                        <h3 className="text - xl font - bold text - gray - 900">;
                          {method.name}
                        </h3>;
                        <span className="px - 2 py - 1 bg - blue - 100 text - blue - 800 text - xs rounded">;
                          {method.type}
                        </span>;
                      </div>;
                      <p className="text - gray - 600">;
                        {method.description}
                      </p>;
                    </div>;
                  </div>;
                </motion.div>))}
            </div>;
          </div>;
        </section>;
        <section className="py - 20 bg - white">;
          <div className="container mx - auto px - 4">;
            <motion.div;
              className="text - center mb - 16";
              initial={{ opacity: 0, coordinate_y: 30 }}
              whileInView={{ opacity: 1, coordinate_y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >;
              <h2 className="text - 3xl md:text - 4xl font - bold text - gray - 900 mb - 4">;
                Get Started Today;
              </h2>;
              <p className="text - lg text - gray - 600 max - w-3xl mx - auto mb - 8">;
                Ready to make your digital products accessible to everyone? Contact us for a free accessibility audit.;
              </p>;
            </motion.div>;
            <div className="grid grid - cols - 1 md:grid - cols - 2 lg:grid - cols - 4 gap - 8">;
              {accessibility_guidelines.map ((category, index) => (
                <motion.div;
                  key={index}
                  className="bg - gray - 50 p - 6 rounded - xl hover:shadow - lg transition - all duration - 300";
                  initial={{ opacity: 0, coordinate_y: 30 }}
                  whileInView={{ opacity: 1, coordinate_y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >;
                  <h3 className="text - lg font - bold text - gray - 900 mb - 4">;
                    {category.category}
                  </h3>;
                  <ul className="space - y-2">;
                    {category.guidelines.map ((guideline, idx) => (
                      <li key={idx} className="flex items - center text - sm text - gray - 600">;
                        <CheckCircle className="w - 4 h - 4 text - green - 500 mr - 2 flex - shrink - 0" />;
                        {guideline}
                      </li>))}
                  </ul>;
                </motion.div>))}
            </div>;
          </div>;
        </section>;
        <section className="py - 20">;
          <div className="container mx - auto px - 4">;
            <div className="max - w-4xl mx - auto">;
              <motion.div;
                className="bg - white p - 8 rounded - xl shadow - lg";
                initial={{ opacity: 0, coordinate_y: 30 }}
                whileInView={{ opacity: 1, coordinate_y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >;
                <h2 className="text - 3xl font - bold text - gray - 900 mb - 6">;
                  Our Commitment;
                </h2>;
                <div className="prose prose - lg max - w-none">;
                  <p className="text - gray - 600 mb - 6">;
                    At Zion Tech Group, we believe that technology should be accessible to everyone. Our commitment to accessibility goes beyond compliance – it's about creating inclusive digital experiences that empower all users.;
                  </p>;
                  <p className="text - gray - 600 mb - 6">;
                    We continuously work to improve our products and services, incorporating feedback from users with disabilities and staying up - to - date with the latest accessibility standards and best practices.;
                  </p>;
                  <p className="text - gray - 600 mb - 6">;
                    If you encounter any accessibility barriers or have suggestions for improvement, we want to hear from you. Your feedback helps us create better experiences for everyone.;
                  </p>;
                </div>;
>:pages - disabled / accessibility.tsx.disabled;
              </motion.div>;
            </div>;
          </div>;
        </section>;
        <section className="py - 20 bg - gradient - to - r from - purple - 600 to - blue - 600 text - white">;
          <div className="container mx - auto px - 4 text - center">;
            <motion.div;
              initial={{ opacity: 0, coordinate_y: 30 }}
              animate={{ opacity: 1, coordinate_y: 0 }}
              transition={{ duration: 0.8 }}
            >;
              <h2 className="text - 3xl md:text - 4xl font - bold mb - 6">;
                Have Questions About Accessibility?;
              </h2>;
              <p className="text - xl text - purple - 100 mb - 8 max - w-3xl mx - auto">;
                We're here to help. Contact our accessibility team for support, feedback, or questions about our accessibility features.;
              </p>;
              <div className="flex flex - col sm: flex - row gap - 4 justify - center">;
                <a href="mailto:accessibility@ziontechgroup.com" className="px - 8 py - 4 bg - white text - purple - 600 rounded - lg hover:bg - gray - 100 transition - colors font - semibold">;
                  Contact Accessibility Team;
                </a>;
                <a href="/contact" className="px - 8 py - 4 border - 2 border - white text - white rounded - lg hover:bg - white hover:text - purple - 600 transition - all duration - 300 font - semibold">;
                  General Contact;
                </a>;
              </div>;
            </motion.div>;
          </div>;
        </section>;
      </div>;
    </MainLayout>);
}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
