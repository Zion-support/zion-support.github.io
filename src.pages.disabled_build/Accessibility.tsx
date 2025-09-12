import React from 'react';
import { motion } from 'framer-motion';
import { Accessibility, 
  Eye, 
  Ear, 
  Hand, 
  Brain, 
  CheckCircle, 
  AlertTriangle, 
  Info, 
  Phone, 
  Mail, 
  Globe,
  Monitor,
  Smartphone,
  Tablet,
  Keyboard,
  Mouse,
  Headphones,
  Volume2,
  VolumeX,
  Contrast,
  Type,
  ZoomIn,
  ZoomOut,
  Users
} from 'lucide-react';
import { SEO } from '../components/SEO';

export default function AccessibilityPage() {
  const accessibilityFeatures = [
    {
      category: 'Visual Accessibility',
      icon: Eye,
      color: 'from-blue-500 to-cyan-600',
      features: [
        'High contrast mode support',
        'Adjustable font sizes (12px to 24px)',
        'Color-blind friendly color schemes',
        'Screen reader compatibility',
        'Keyboard navigation support',
        'Focus indicators for all interactive elements'
      ]
    },
    {
      category: 'Auditory Accessibility',
      icon: Ear,
      color: 'from-green-500 to-emerald-600',
      features: [
        'Closed captions for all video content',
        'Audio descriptions for visual content',
        'Volume controls for audio elements',
        'Alternative text for audio content',
        'Hearing aid compatibility',
        'Speech-to-text functionality'
      ]
    },
    {
      category: 'Motor Accessibility',
      icon: Hand,
      color: 'from-purple-500 to-pink-600',
      features: [
        'Full keyboard navigation',
        'Voice control support',
        'Switch device compatibility',
        'Large click targets (minimum 44px)',
        'Customizable mouse sensitivity',
        'Gesture recognition alternatives'
      ]
    },
    {
      category: 'Cognitive Accessibility',
      icon: Brain,
      color: 'from-orange-500 to-red-600',
      features: [
        'Clear, simple language',
        'Consistent navigation structure',
        'Logical content organization',
        'Error prevention and recovery',
        'Multiple ways to complete tasks',
        'Reduced distractions mode'
      ]
    }
  ];

  const accessibilityTools = [
    {
      name: 'Screen Reader',
      description: 'Compatible with JAWS, NVDA, VoiceOver, and TalkBack',
      icon: Monitor,
      status: 'Fully Supported'
    },
    {
      name: 'Keyboard Navigation',
      description: 'Complete keyboard accessibility with visible focus indicators',
      icon: Keyboard,
      status: 'Fully Supported'
    },
    {
      name: 'High Contrast',
      description: 'High contrast mode for better visibility',
      icon: Contrast,
      status: 'Available'
    },
    {
      name: 'Font Scaling',
      description: 'Adjustable text sizes from 12px to 24px',
      icon: Type,
      status: 'Available'
    }
  ];

  const complianceStandards = [
    {
      standard: 'WCAG 2.1 AA',
      description: 'Web Content Accessibility Guidelines 2.1 Level AA',
      status: 'Compliant',
      icon: CheckCircle
    },
    {
      standard: 'Section 508',
      description: 'Federal accessibility requirements for electronic information',
      status: 'Compliant',
      icon: CheckCircle
    },
    {
      standard: 'ADA Title III',
      description: 'Americans with Disabilities Act accessibility requirements',
      status: 'Compliant',
      icon: CheckCircle
    }
  ];

  return (
    <>
      <SEO 
        title="Accessibility - Zion Tech Group"
        description="Our commitment to inclusive, accessible experiences that meet WCAG 2.1 AA standards."
        keywords="accessibility, WCAG, inclusive design, screen reader, keyboard navigation"
      />
      
      <div className="min-h-screen bg-gradient-to-br from-zinc-900 via-zinc-800 to-black text-white">
        {/* Header Section */}
        <div className="container mx-auto px-4 py-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-2xl mb-6">
              <Accessibility className="w-10 h-10 text-blue-400" />
            </div>
            <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Accessibility
            </h1>
            <p className="text-xl text-zinc-300 max-w-3xl mx-auto">
              We are committed to ensuring our website and services are accessible to everyone, 
              regardless of their abilities or disabilities.
            </p>
          </motion.div>

          {/* Accessibility Features */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-8 text-center">Accessibility Features</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {accessibilityFeatures.map((feature, index) => (
                <motion.div
                  key={feature.category}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white/5 backdrop-blur-sm border border-white/20 rounded-xl p-6 hover:bg-white/10 transition-all duration-300"
                >
                  <div className={`w-16 h-16 bg-gradient-to-r ${feature.color} rounded-xl flex items-center justify-center mb-4`}>
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-4">{feature.category}</h3>
                  <ul className="space-y-2">
                    {feature.features.map((item, idx) => (
                      <li key={idx} className="text-sm text-zinc-300 flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-green-400" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Accessibility Tools */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-8 text-center">Accessibility Tools</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {accessibilityTools.map((tool, index) => (
                <motion.div
                  key={tool.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white/5 backdrop-blur-sm border border-white/20 rounded-xl p-6 hover:bg-white/10 transition-all duration-300"
                >
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-xl flex items-center justify-center mb-4">
                    <tool.icon className="w-8 h-8 text-purple-400" />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">{tool.name}</h3>
                  <p className="text-sm text-zinc-300 mb-3">{tool.description}</p>
                  <span className="inline-flex items-center px-2 py-1 bg-green-500/20 text-green-400 text-xs rounded-full">
                    {tool.status}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Compliance Standards */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-8 text-center">Compliance Standards</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {complianceStandards.map((standard, index) => (
                <motion.div
                  key={standard.standard}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white/5 backdrop-blur-sm border border-white/20 rounded-xl p-6 hover:bg-white/10 transition-all duration-300"
                >
                  <div className="w-16 h-16 bg-gradient-to-r from-green-500/20 to-emerald-500/20 rounded-xl flex items-center justify-center mb-4">
                    <standard.icon className="w-8 h-8 text-green-400" />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">{standard.standard}</h3>
                  <p className="text-sm text-zinc-300 mb-3">{standard.description}</p>
                  <span className="inline-flex items-center px-2 py-1 bg-green-500/20 text-green-400 text-xs rounded-full">
                    {standard.status}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Contact Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-center"
          >
            <h2 className="text-3xl font-bold mb-6">Need Help?</h2>
            <p className="text-zinc-300 mb-8 max-w-2xl mx-auto">
              If you experience any accessibility issues or have suggestions for improvement, 
              please don't hesitate to contact us.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-3 rounded-lg font-medium transition-colors duration-200">
                Report Issue
              </button>
              <button className="border border-cyan-400 text-cyan-400 hover:bg-cyan-400/10 px-8 py-3 rounded-lg font-medium transition-colors duration-200">
                Contact Support
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
}