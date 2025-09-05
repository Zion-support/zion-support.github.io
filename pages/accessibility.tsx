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

export default function AccessibilityPage() {
  const accessibilityFeatures = [
    {
      title: 'Screen Reader Compatibility',
      description: 'Our website is fully compatible with screen readers and assistive technologies',
      icon: Ear,
      features: [
        'Semantic HTML structure',
        'Alt text for all images',
        'Proper heading hierarchy',
        'ARIA labels and descriptions'
      ]
    },
    {
      title: 'Keyboard Navigation',
      description: 'Complete website functionality accessible via keyboard only',
      icon: Hand,
      features: [
        'Tab navigation support',
        'Skip links for main content',
        'Focus indicators',
        'Keyboard shortcuts'
      ]
    },
    {
      title: 'Visual Accessibility',
      description: 'High contrast and customizable visual elements for better visibility',
      icon: Eye,
      features: [
        'High contrast color schemes',
        'Resizable text up to 200%',
        'Color-blind friendly palettes',
        'Clear visual hierarchy'
      ]
    },
    {
      title: 'Cognitive Accessibility',
      description: 'Clear, simple language and intuitive navigation for all users',
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
      title: 'Continuous Improvement',
      description: 'We regularly audit and improve our accessibility features',
      icon: Zap
    },
    {
      title: 'User Feedback',
      description: 'We actively seek and incorporate feedback from users with disabilities',
      icon: Heart
    },
    {
      title: 'Training & Awareness',
      description: 'Our team receives regular accessibility training and education',
      icon: Brain
    },
    {
      title: 'Compliance Monitoring',
      description: 'Ongoing monitoring to ensure continued compliance with standards',
      icon: Shield
    }
  ];

  return (
    <MainLayout
      title="Accessibility Statement - Zion Tech Group"
      description="Learn about our commitment to web accessibility and how we ensure our website is accessible to all users, including those with disabilities."
      keywords="accessibility, WCAG, ADA compliance, screen reader, keyboard navigation, inclusive design"
    >
<<<<<<< HEAD
      <div className="min-h-screen bg-gray-50">
        <section className="bg-gradient-to-br from-purple-900 via-indigo-900 to-blue-900 text-white py-20">
          <div className="container mx-auto px-4">
=======
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 text-white py-20 overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-20 left-10 w-72 h-72 bg-indigo-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
            <div className="absolute top-40 right-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-2000"></div>
          </div>

          <div className="container mx-auto px-4 relative z-10">
>>>>>>> main
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
<<<<<<< HEAD
                <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                  Web Accessibility
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8">
                Ensuring digital inclusion for everyone
=======
                Accessibility{' '}
                <span className="bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
                  Statement
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
                We are committed to ensuring our website is accessible to all users, 
                including those with disabilities. Learn about our accessibility features and compliance.
>>>>>>> main
              </p>
            </motion.div>
          </div>
        </section>
<<<<<<< HEAD
        <section className="py-20">
=======

        {/* Our Commitment */}
        <section className="py-20 bg-white">
>>>>>>> main
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
<<<<<<< HEAD
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Our Accessibility Commitment
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                We are committed to making our digital products accessible to everyone, regardless of their abilities or the technology they use.
              </p>
            </motion.div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {accessibilityFeatures.map((feature, index) => (
                  <motion.div
                    key={index}
                    className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
=======
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Our Accessibility Commitment
              </h2>
              <p className="text-lg text-gray-600 max-w-4xl mx-auto">
                At Zion Tech Group, we believe that technology should be accessible to everyone. 
                We are committed to providing an inclusive digital experience that works for all users, 
                regardless of their abilities or the technologies they use to access our website.
              </p>
            </motion.div>

            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {accessibilityCommitments.map((commitment, index) => (
                  <motion.div
                    key={commitment.title}
                    className="text-center"
>>>>>>> main
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
<<<<<<< HEAD
                    <div className="flex items-start space-x-4">
                      <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                        <IconComponent className="w-8 h-8 text-white" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-2xl font-bold text-gray-900 mb-3">
                          {feature.title}
                        </h3>
                        <p className="text-gray-600 mb-6 leading-relaxed">
                          {feature.description}
                        </p>
                        <ul className="space-y-2">
                          {feature.features.map((item, idx) => (
                            <li key={idx} className="flex items-center text-sm text-gray-600">
                              <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </motion.div>
                ))}
            </div>
          </div>
        </section>
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Accessibility Standards
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                We follow international accessibility standards to ensure our products are usable by everyone.
              </p>
            </motion.div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {standards.map((standard, index) => (
                  <motion.div
                    key={index}
                    className="bg-gray-50 p-6 rounded-xl text-center hover:shadow-lg transition-all duration-300"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">
                      {standard.name}
                    </h3>
                    <p className="text-gray-600 text-sm mb-4">
                      {standard.description}
                    </p>
                    <div className="space-y-2">
                      <span className={`px-3 py-1 text-xs rounded-full ${
                        standard.status === 'Compliant' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'
                      }`}>
                        {standard.status}
                      </span>
                      <div className="text-sm text-gray-500">
                        {standard.level}
                      </div>
=======
                    <div className="bg-indigo-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                      <commitment.icon className="w-8 h-8 text-indigo-600" />
>>>>>>> main
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      {commitment.title}
                    </h3>
                    <p className="text-gray-600">{commitment.description}</p>
                  </motion.div>
                ))}
<<<<<<< HEAD
            </div>
          </div>
        </section>
        <section className="py-20">
=======
              </div>
            </div>
          </div>
        </section>

        {/* Accessibility Features */}
        <section className="py-20 bg-gray-50">
>>>>>>> main
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
<<<<<<< HEAD
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Testing & Validation
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                We use automated and manual testing to ensure our products meet accessibility standards.
              </p>
            </motion.div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {testingMethods.map((method, index) => (
                <motion.div
                  key={index}
                  className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Zap className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="text-xl font-bold text-gray-900">
                          {method.name}
                        </h3>
                        <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded">
                          {method.type}
                        </span>
                      </div>
                      <p className="text-gray-600">
                        {method.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center mb-16"
=======
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Accessibility Features
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Our website includes a comprehensive set of accessibility features 
                designed to meet the needs of users with various disabilities.
              </p>
            </motion.div>

            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {accessibilityFeatures.map((feature, index) => (
                  <motion.div
                    key={feature.title}
                    className="bg-white rounded-lg shadow-lg p-8"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className="flex items-center mb-6">
                      <div className="bg-indigo-100 w-12 h-12 rounded-lg flex items-center justify-center mr-4">
                        <feature.icon className="w-6 h-6 text-indigo-600" />
                      </div>
                      <h3 className="text-2xl font-bold text-gray-900">{feature.title}</h3>
                    </div>
                    <p className="text-gray-600 mb-6">{feature.description}</p>
                    <ul className="space-y-3">
                      {feature.features.map((item, itemIndex) => (
                        <li key={itemIndex} className="flex items-center text-gray-700">
                          <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                ))}
              </div>
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
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center"
>>>>>>> main
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
<<<<<<< HEAD
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Get Started Today
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-8">
                Ready to make your digital products accessible to everyone? Contact us for a free accessibility audit.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact" className="px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-lg hover:shadow-lg transition-all duration-300 font-semibold">
                  Get Free Audit
                </Link>
                <Link href="/services" className="px-8 py-4 border-2 border-purple-600 text-purple-600 rounded-lg hover:bg-purple-600 hover:text-white transition-all duration-300 font-semibold">
                  View Services
                </Link>
=======
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
>>>>>>> main
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </MainLayout>
  );
}