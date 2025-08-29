import React from 'react';
import { motion } from 'framer-motion';
import { 
  Eye, 
  Ear, 
  Hand, 
  Brain, 
  CheckCircle, 
  AlertTriangle, 
  Info, 
  Users,
  Shield,
  Globe,
  Award,
  Heart,
  Settings
} from 'lucide-react';
import { SEO } from '../components/SEO';

export default function Accessibility() {
  const accessibilityFeatures = [
    {
      title: 'Screen Reader Support',
      description: 'Full compatibility with popular screen readers including JAWS, NVDA, and VoiceOver',
      icon: Ear,
      color: 'from-blue-500 to-cyan-500',
      features: [
        'Semantic HTML structure',
        'ARIA labels and landmarks',
        'Screen reader announcements',
        'Keyboard navigation support'
      ]
    },
    {
      title: 'Visual Accessibility',
      description: 'Enhanced visual experience for users with visual impairments',
      icon: Eye,
      color: 'from-purple-500 to-pink-500',
      features: [
        'High contrast mode',
        'Adjustable font sizes',
        'Color-blind friendly design',
        'Clear visual hierarchy'
      ]
    },
    {
      title: 'Motor Accessibility',
      description: 'Support for users with motor impairments and mobility challenges',
      icon: Hand,
      color: 'from-green-500 to-emerald-500',
      features: [
        'Keyboard-only navigation',
        'Large click targets',
        'Voice control compatibility',
        'Reduced motion options'
      ]
    },
    {
      title: 'Cognitive Accessibility',
      description: 'Clear and simple design for users with cognitive disabilities',
      icon: Brain,
      color: 'from-orange-500 to-red-500',
      features: [
        'Simple language',
        'Consistent navigation',
        'Clear error messages',
        'Logical content flow'
      ]
    }
  ];

  const complianceStandards = [
    {
      title: 'WCAG 2.1 AA',
      description: 'Web Content Accessibility Guidelines 2.1 Level AA compliance',
      icon: Award,
      color: 'from-blue-500 to-cyan-500',
      status: 'Fully Compliant',
      details: [
        'Perceivable: Content is presented in ways users can perceive',
        'Operable: Interface components are operable by all users',
        'Understandable: Content and operation are understandable',
        'Robust: Content can be interpreted by assistive technologies'
      ]
    },
    {
      title: 'Section 508',
      description: 'Federal accessibility requirements for electronic and information technology',
      icon: Shield,
      color: 'from-green-500 to-emerald-500',
      status: 'Compliant',
      details: [
        'Software applications and operating systems',
        'Web-based information and applications',
        'Telecommunications products',
        'Video and multimedia products'
      ]
    },
    {
      title: 'ADA Compliance',
      description: 'Americans with Disabilities Act compliance for digital accessibility',
      icon: Heart,
      color: 'from-purple-500 to-pink-500',
      status: 'Compliant',
      details: [
        'Equal access to digital services',
        'Reasonable accommodations',
        'Effective communication',
        'Integration and participation'
      ]
    }
  ];

  const accessibilityTools = [
    {
      title: 'Accessibility Checker',
      description: 'Built-in tool to identify and fix accessibility issues',
      icon: CheckCircle,
      href: '/accessibility/checker',
      color: 'from-green-500 to-emerald-500'
    },
    {
      title: 'Keyboard Shortcuts',
      description: 'Comprehensive keyboard navigation guide',
      icon: Users,
      href: '/accessibility/keyboard-shortcuts',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'Screen Reader Guide',
      description: 'Instructions for using screen readers with our platform',
      icon: Ear,
      href: '/accessibility/screen-reader-guide',
      color: 'from-purple-500 to-pink-500'
    },
    {
      title: 'Accessibility Settings',
      description: 'Customize your accessibility preferences',
      icon: Settings,
      href: '/accessibility/settings',
      color: 'from-orange-500 to-red-500'
    }
  ];

  const contactInfo = [
    {
      title: 'Accessibility Support',
      description: 'Get help with accessibility issues or request accommodations',
      email: 'accessibility@ziontechgroup.com',
      phone: '+1 302 464 0950',
      responseTime: '24-48 hours'
    },
    {
      title: 'Feedback & Suggestions',
      description: 'Help us improve our accessibility by sharing your feedback',
      email: 'feedback@ziontechgroup.com',
      phone: '+1 302 464 0950',
      responseTime: '48-72 hours'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <SEO 
        title="Accessibility - Zion Tech Group"
        description="Learn about Zion Tech Group's commitment to digital accessibility and our compliance with WCAG 2.1 AA, Section 508, and ADA standards."
      />
      
      {/* Header */}
      <div className="bg-slate-800/50 border-b border-slate-700">
        <div className="container mx-auto px-4 py-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <div className="w-20 h-20 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-6">
              <Globe className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Accessibility Statement
            </h1>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Zion Tech Group is committed to ensuring digital accessibility for people with disabilities. 
              We continually work to improve the user experience for everyone and apply the relevant accessibility standards.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Commitment Statement */}
      <div className="container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-gradient-to-r from-cyan-600/20 to-blue-600/20 border border-cyan-500/30 rounded-2xl p-8 text-center"
        >
          <h2 className="text-2xl font-bold text-white mb-4">
            Our Commitment to Accessibility
          </h2>
          <p className="text-slate-300 max-w-4xl mx-auto">
            We believe that digital accessibility is a fundamental right, not a privilege. Our platform is designed 
            to be inclusive and accessible to users of all abilities. We are committed to meeting and exceeding 
            accessibility standards and continuously improving our platform based on user feedback and best practices.
          </p>
        </motion.div>
      </div>

      {/* Accessibility Features */}
      <div className="bg-slate-800/20 py-16">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-3xl font-bold text-white text-center mb-12"
          >
            Accessibility Features
          </motion.h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {accessibilityFeatures.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                className="bg-slate-800/30 border border-slate-700 rounded-xl p-6"
              >
                <div className="flex items-center space-x-4 mb-6">
                  <div className={`w-16 h-16 bg-gradient-to-br ${feature.color} rounded-xl flex items-center justify-center`}>
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white">{feature.title}</h3>
                    <p className="text-slate-400 text-sm">{feature.description}</p>
                  </div>
                </div>
                
                <div className="space-y-3">
                  {feature.features.map((item, idx) => (
                    <div key={idx} className="flex items-center space-x-3">
                      <CheckCircle className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                      <span className="text-slate-300 text-sm">{item}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Compliance Standards */}
      <div className="container mx-auto px-4 py-16">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-3xl font-bold text-white text-center mb-12"
        >
          Compliance Standards
        </motion.h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {complianceStandards.map((standard, index) => (
            <motion.div
              key={standard.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
              className="bg-slate-800/30 border border-slate-700 rounded-xl p-6"
            >
              <div className="text-center mb-6">
                <div className={`w-20 h-20 bg-gradient-to-br ${standard.color} rounded-xl flex items-center justify-center mx-auto mb-4`}>
                  <standard.icon className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{standard.title}</h3>
                <p className="text-slate-400 text-sm mb-3">{standard.description}</p>
                <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                  standard.status === 'Fully Compliant' ? 'bg-green-500/20 text-green-400' :
                  'bg-blue-500/20 text-blue-400'
                }`}>
                  {standard.status}
                </span>
              </div>
              
              <div className="space-y-3">
                {standard.details.map((detail, idx) => (
                  <div key={idx} className="text-slate-300 text-sm">
                    • {detail}
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Accessibility Tools */}
      <div className="bg-slate-800/20 py-16">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="text-3xl font-bold text-white text-center mb-12"
          >
            Accessibility Tools & Resources
          </motion.h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {accessibilityTools.map((tool, index) => (
              <motion.div
                key={tool.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                className="group"
              >
                <div className="bg-slate-800/30 border border-slate-700 rounded-xl p-6 hover:border-cyan-400/50 transition-all duration-300 h-full text-center">
                  <div className={`w-16 h-16 bg-gradient-to-br ${tool.color} rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <tool.icon className="w-8 h-8 text-white" />
                  </div>
                  
                  <h3 className="text-lg font-semibold text-white mb-2">{tool.title}</h3>
                  <p className="text-slate-400 text-sm">{tool.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Contact Information */}
      <div className="container mx-auto px-4 py-16">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.9 }}
          className="text-3xl font-bold text-white text-center mb-12"
        >
          Get Help & Provide Feedback
        </motion.h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {contactInfo.map((contact, index) => (
            <motion.div
              key={contact.title}
              initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 1.0 + index * 0.1 }}
              className="bg-slate-800/30 border border-slate-700 rounded-xl p-6"
            >
              <h3 className="text-xl font-semibold text-white mb-4">{contact.title}</h3>
              <p className="text-slate-400 mb-6">{contact.description}</p>
              
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-slate-700 rounded-lg flex items-center justify-center">
                    <span className="text-cyan-400 text-sm font-medium">@</span>
                  </div>
                  <div>
                    <div className="text-white font-medium">{contact.email}</div>
                    <div className="text-slate-400 text-sm">Response time: {contact.responseTime}</div>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-slate-700 rounded-lg flex items-center justify-center">
                    <span className="text-cyan-400 text-sm font-medium">📞</span>
                  </div>
                  <div>
                    <div className="text-white font-medium">{contact.phone}</div>
                    <div className="text-slate-400 text-sm">Available during business hours</div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Continuous Improvement */}
      <div className="container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.1 }}
          className="bg-gradient-to-r from-green-600/20 to-emerald-600/20 border border-green-500/30 rounded-2xl p-8 text-center"
        >
          <h2 className="text-2xl font-bold text-white mb-4">
            Continuous Improvement
          </h2>
          <p className="text-slate-300 max-w-4xl mx-auto">
            We are committed to continuously improving the accessibility of our platform. We regularly review 
            our accessibility features, conduct user testing with people with disabilities, and stay updated 
            with the latest accessibility guidelines and best practices. Your feedback is invaluable in helping 
            us create a more inclusive digital experience for everyone.
          </p>
        </motion.div>
      </div>
    </div>
  );
}