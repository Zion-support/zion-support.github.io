import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  Eye, 
  Ear, 
  MousePointer, 
  Keyboard, 
  Shield, 
  CheckCircle,
  Users,
  Globe
} from 'lucide-react';
import Layout from '../components/Layout';

const standards = [
  {
    name: 'WCAG 2.1 AA',
    description: 'Web Content Accessibility Guidelines Level AA compliance',
    icon: CheckCircle
  },
  {
    name: 'Screen Reader Support',
    description: 'Full compatibility with screen reading software',
    icon: Ear
  },
  {
    name: 'Keyboard Navigation',
    description: 'Complete keyboard accessibility for all functions',
    icon: Keyboard
  },
  {
    name: 'Color Contrast',
    description: 'High contrast ratios for better visibility',
    icon: Eye
  }
];

const features = [
  {
    title: 'Screen Reader Compatibility',
    description: 'All content is properly structured with semantic HTML and ARIA labels for screen readers.',
    icon: Ear
  },
  {
    title: 'Keyboard Navigation',
    description: 'Every interactive element can be accessed and operated using only the keyboard.',
    icon: Keyboard
  },
  {
    title: 'High Contrast Mode',
    description: 'Support for high contrast mode and customizable color schemes.',
    icon: Eye
  },
  {
    title: 'Focus Management',
    description: 'Clear focus indicators and logical tab order throughout the interface.',
    icon: MousePointer
  },
  {
    title: 'Alternative Text',
    description: 'All images include descriptive alternative text for screen readers.',
    icon: Shield
  },
  {
    title: 'Responsive Design',
    description: 'Fully responsive design that works on all devices and screen sizes.',
    icon: Globe
  }
];

export default function AccessibilityPage() {
  return (
    <Layout
      title="Accessibility - Zion Tech Group"
      description="We are committed to making our digital products accessible to everyone. Learn about our accessibility features and standards."
    >
      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white py-20">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Accessibility{' '}
                <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  First
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
                We believe technology should be accessible to everyone. Our commitment to accessibility ensures our digital products work for all users.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact" className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg hover:shadow-lg transition-all duration-300 font-semibold">
                  Contact Us
                </Link>
                <Link href="#standards" className="px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white hover:text-gray-900 transition-all duration-300 font-semibold">
                  Our Standards
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Standards Section */}
        <section id="standards" className="py-20 bg-white">
          <div className="container mx-auto px-4">
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
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {standards.map((standard, index) => {
                const IconComponent = standard.icon;
                return (
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
                    <h3 className="text-lg font-bold text-gray-900 mb-2">{standard.name}</h3>
                    <p className="text-gray-600 text-sm">{standard.description}</p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 bg-gray-50">
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
                Our digital products include comprehensive accessibility features to ensure an inclusive user experience
              </p>
            </motion.div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => {
                const IconComponent = feature.icon;
                return (
                  <motion.div
                    key={index}
                    className="bg-white p-6 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                      <IconComponent className="w-6 h-6 text-blue-600" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
                    <p className="text-gray-600">{feature.description}</p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
          <div className="container mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Need Help with Accessibility?
              </h2>
              <p className="text-xl mb-8 max-w-2xl mx-auto">
                Our team can help you make your digital products more accessible. Contact us for a consultation.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="px-8 py-4 bg-white text-blue-600 rounded-lg hover:bg-gray-100 transition-all duration-300 font-semibold"
                >
                  Get Accessibility Audit
                </Link>
                <Link
                  href="/contact"
                  className="px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white hover:text-blue-600 transition-all duration-300 font-semibold"
                >
                  Contact Our Team
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </Layout>
  );
}