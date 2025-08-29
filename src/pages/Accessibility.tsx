import React from 'react';
import { motion } from 'framer-motion';
import { SEO } from '../components/SEO';
import { 
  Eye, 
  Ear, 
  Hand, 
  Brain, 
  CheckCircle, 
  Shield,
  Users,
  Globe,
  Monitor,
  Smartphone,
  Tablet,
  Laptop,
  Accessibility as AccessibilityIcon,
  Heart,
  Award
} from 'lucide-react';

export default function Accessibility() {
  const standards = [
    {
      icon: Shield,
      title: 'WCAG 2.1 AA Compliance',
      description: 'Web Content Accessibility Guidelines 2.1 Level AA compliance',
      features: ['Perceivable content', 'Operable interface', 'Understandable information', 'Robust technology']
    },
    {
      icon: Globe,
      title: 'Section 508 Compliance',
      description: 'Federal accessibility standards for electronic and information technology',
      features: ['Federal requirements', 'Government compliance', 'Accessibility standards', 'Technology accessibility']
    },
    {
      icon: Users,
      title: 'ADA Compliance',
      description: 'Americans with Disabilities Act compliance for digital accessibility',
      features: ['Equal access', 'Non-discrimination', 'Reasonable accommodation', 'Digital inclusion']
    },
    {
      icon: Award,
      title: 'ISO 30071-1',
      description: 'International standard for accessible user interface design',
      features: ['Global standards', 'Best practices', 'User experience', 'Inclusive design']
    }
  ];

  const features = [
    {
      icon: Eye,
      title: 'Visual Accessibility',
      description: 'Support for users with visual impairments',
      details: ['High contrast modes', 'Screen reader compatibility', 'Text scaling', 'Color blind friendly']
    },
    {
      icon: Ear,
      title: 'Auditory Accessibility',
      description: 'Support for users with hearing impairments',
      details: ['Closed captions', 'Transcripts', 'Visual alerts', 'Audio descriptions']
    },
    {
      icon: Hand,
      title: 'Motor Accessibility',
      description: 'Support for users with motor impairments',
      details: ['Keyboard navigation', 'Voice control', 'Large click targets', 'Customizable controls']
    },
    {
      icon: Brain,
      title: 'Cognitive Accessibility',
      description: 'Support for users with cognitive impairments',
      details: ['Clear navigation', 'Simple language', 'Consistent layout', 'Error prevention']
    }
  ];

  const technologies = [
    {
      icon: Monitor,
      title: 'Desktop Accessibility',
      description: 'Full keyboard navigation and screen reader support'
    },
    {
      icon: Laptop,
      title: 'Laptop Accessibility',
      description: 'Touchpad and keyboard accessibility features'
    },
    {
      icon: Tablet,
      title: 'Tablet Accessibility',
      description: 'Touch screen and gesture accessibility'
    },
    {
      icon: Smartphone,
      title: 'Mobile Accessibility',
      description: 'Mobile-specific accessibility features and gestures'
    }
  ];

  const commitment = [
    {
      icon: Heart,
      title: 'Inclusive Design',
      description: 'We believe technology should be accessible to everyone'
    },
    {
      icon: Users,
      title: 'User Testing',
      description: 'Regular testing with users who have disabilities'
    },
    {
      icon: CheckCircle,
      title: 'Continuous Improvement',
      description: 'Ongoing accessibility audits and updates'
    },
    {
      icon: Award,
      title: 'Industry Leadership',
      description: 'Setting standards for accessible technology'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <SEO 
        title="Accessibility Statement - Zion Tech Group"
        description="Zion Tech Group is committed to digital accessibility. Learn about our WCAG 2.1 AA compliance, accessibility features, and commitment to inclusive technology."
      />
      
      {/* Hero Section */}
      <section className="relative py-20 px-4">
        <div className="container mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex justify-center mb-6">
                              <div className="w-20 h-20 bg-gradient-to-br from-cyan-400 via-blue-500 to-purple-600 rounded-2xl flex items-center justify-center">
                  <AccessibilityIcon className="w-10 h-10 text-white" />
                </div>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Accessibility Statement
            </h1>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto mb-8">
              Zion Tech Group is committed to ensuring digital accessibility for people with disabilities. 
              We are continually improving the user experience for everyone and applying the relevant accessibility standards.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="px-8 py-4 bg-gradient-to-r from-cyan-400 to-blue-500 text-white font-semibold rounded-lg hover:from-cyan-500 hover:to-blue-600 transition-all duration-300 transform hover:scale-105"
              >
                Report Accessibility Issues
              </a>
              <a
                href="/help"
                className="px-8 py-4 border-2 border-cyan-400 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-400 hover:text-white transition-all duration-300"
              >
                Get Help & Support
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Standards Compliance */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Accessibility Standards Compliance
            </h2>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto">
              Our commitment to accessibility is demonstrated through compliance with 
              international standards and best practices.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {standards.map((standard, index) => (
              <motion.div
                key={standard.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700/50 hover:border-cyan-400/50 transition-all duration-300"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-xl flex items-center justify-center mb-4">
                  <standard.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{standard.title}</h3>
                <p className="text-slate-300 mb-4">{standard.description}</p>
                <ul className="space-y-2">
                  {standard.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-slate-400">
                      <CheckCircle className="w-4 h-4 text-cyan-400 mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Accessibility Features */}
      <section className="py-20 px-4 bg-slate-800/30">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Accessibility Features
            </h2>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto">
              We provide comprehensive accessibility features to ensure our technology 
              is usable by people with diverse abilities and needs.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700/50"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-purple-400 to-pink-500 rounded-xl flex items-center justify-center mb-4">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-slate-300 mb-4">{feature.description}</p>
                <ul className="space-y-2">
                  {feature.details.map((detail, idx) => (
                    <li key={idx} className="flex items-center text-sm text-slate-400">
                      <CheckCircle className="w-4 h-4 text-cyan-400 mr-2 flex-shrink-0" />
                      {detail}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Support */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Multi-Platform Accessibility
            </h2>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto">
              Our accessibility features work across all devices and platforms, 
              ensuring consistent experience regardless of how you access our services.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {technologies.map((tech, index) => (
              <motion.div
                key={tech.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700/50 text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-green-400 to-emerald-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <tech.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{tech.title}</h3>
                <p className="text-slate-300 text-sm">{tech.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Commitment */}
      <section className="py-20 px-4 bg-gradient-to-r from-purple-900/20 to-pink-900/20">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Our Accessibility Commitment
            </h2>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto">
              We are committed to making our technology accessible to everyone, 
              regardless of their abilities or the technology they use.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {commitment.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <item.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{item.title}</h3>
                <p className="text-slate-300 text-sm">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Help Us Improve Accessibility
            </h2>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto mb-8">
              We welcome your feedback on the accessibility of our website and services. 
              If you experience accessibility barriers, please let us know.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="px-8 py-4 bg-gradient-to-r from-cyan-400 to-blue-500 text-white font-semibold rounded-lg hover:from-cyan-500 hover:to-blue-600 transition-all duration-300 transform hover:scale-105"
              >
                Report Accessibility Issues
              </a>
              <a
                href="mailto:accessibility@ziontechgroup.com"
                className="px-8 py-4 border-2 border-cyan-400 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-400 hover:text-white transition-all duration-300"
              >
                Email Accessibility Team
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}