import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Accessibility, 
  Eye, 
  Ear, 
  MousePointer, 
  Keyboard, 
  Monitor, 
  Smartphone, 
  CheckCircle,
  Info,
  AlertTriangle,
  ArrowRight,
  Settings,
  HelpCircle,
  Users,
  Globe
} from 'lucide-react';

export default function AccessibilityPage() {
  const [expandedSections, setExpandedSections] = useState({});

  const toggleSection = (sectionId) => {
    setExpandedSections(prev => ({
      ...prev,
      [sectionId]: !prev[sectionId]
    }));
  };

  const accessibilityFeatures = [
    {
      icon: <Eye className="w - 8 h - 8"       />,
      title: 'Visual Accessibility',
      description:
        'Support for screen readers, high contrast modes, and text scaling',
      features: [
        "High contrast mode",
        "Adjustable font sizes",
        "Screen reader compatibility",
        "Alternative text for images",
        "Color-blind friendly design",
        "Focus indicators"
      ]
    },
    {
      icon: <Ear className="w - 8 h - 8"       />,
      title: 'Auditory Accessibility',
      description:
        'Captions, transcripts, and audio alternatives for multimedia content',
      features: [
        "Closed captions for videos",
        "Transcripts for audio content",
        "Visual notifications",
        "Haptic feedback options",
        "Audio descriptions"
      ]
    },
    {
      icon: <Hand className="w - 8 h - 8"       />,
      title: 'Motor Accessibility',
      description:
        'Keyboard navigation, voice control, and assistive technology support',
      features: [
        "Keyboard navigation",
        "Voice control support",
        "Large click targets",
        "Customizable timing",
        "One-handed operation"
      ]
    },
    {
      icon: <Brain className="w - 8 h - 8"       />,
      title: 'Cognitive Accessibility',
      description:
        'Clear navigation, consistent design, and simplified interfaces',
      features: [
        "Clear navigation structure",
        "Consistent design patterns",
        "Readable typography",
        "Logical content flow",
        "Error prevention"
      ]
    }
  ];

  const complianceStandards = [
    {
      name: 'WCAG 2.1 AA',
      description:
        'Web Content Accessibility Guidelines 2.1 Level AA compliance',
      status: 'Compliant',
      icon: <CheckCircle className="w - 6 h - 6 text - green - 500"       />,
    },
    {
      name: 'Section 508',
      description:
        'Federal accessibility requirements for electronic and information technology',
      status: 'Compliant',
      icon: <CheckCircle className="w - 6 h - 6 text - green - 500"       />,
    },
    {
      name: 'ADA Title III',
      description: 'Americans with Disabilities Act accessibility requirements',
      status: 'Compliant',
      icon: <CheckCircle className="w - 6 h - 6 text - green - 500"       />,
    },
    {
      name: 'EN 301 549',
      description:
        'European accessibility requirements for ICT products and services',
      status: 'Compliant',
      icon: <CheckCircle className="w - 6 h - 6 text - green - 500"       />,
    },
  ];

  const accessibilityTools = [
    {
      title: 'Accessibility Checker',
      description: 'Built - in tool to identify and fix accessibility issues',
      link: '/accessibility - checker',
      icon: <CheckCircle className="w - 6 h - 6"       />,
    },
    {
      title: 'High Contrast Mode',
      description: 'Toggle high contrast color schemes for better visibility',
      link: '/high - contrast',
      icon: <Eye className="w - 6 h - 6"       />,
    },
    {
      title: 'Text Size Adjuster',
      description: 'Increase or decrease text size for better readability',
      link: '/text - size',
      icon: <Info className="w - 6 h - 6"       />,
    },
    {
      title: 'Keyboard Navigation Guide',
      description: 'Learn how to navigate using only your keyboard',
      link: '/keyboard - guide',
      icon: <Hand className="w - 6 h - 6"       />,
    },
  ];

  const accessibilityTips = [
    {
      name: 'Screen Readers',
      description: 'NVDA, JAWS, VoiceOver, TalkBack',
      icon: <Eye className="w - 6 h - 6"       />,
    },
    {
      name: 'Voice Control',
      description: 'Dragon NaturallySpeaking, Voice Control',
      icon: <Ear className="w - 6 h - 6"       />,
    },
    {
      name: 'Switch Devices',
      description: 'Head pointers, eye trackers, sip - and - puff',
      icon: <Hand className="w - 6 h - 6"       />,
    },
    {
      name: 'Magnification Software',
      description: 'ZoomText, Magnifier, built - in OS tools',
      icon: <Eye className="w - 6 h - 6"       />,
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-zinc-900 via-zinc-800 to-zinc-700 pt-24">
      <div className="container mx-auto px-4 py-12">
        {/* Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6">
            Digital <span className="bg-gradient-to-r from-zion-cyan to-zion-purple bg-clip-text text-transparent">Accessibility</span>
          </h1>
          <p className="text-xl text-zion-slate-light max-w-3xl mx-auto leading-relaxed">
            Zion Tech Group is committed to ensuring our website and services are accessible to all users, 
            regardless of their abilities or disabilities. We strive to meet and exceed accessibility standards.
          </p>
        </motion.div>

  return (<div className="min - h-screen bg - gradient - to - br from - slate - 900 via - slate - 800 to - slate - 900">
      {/* Hero Section */}
      <section className="relative overflow - hidden py - 20 lg:py - 32">
        <div className="absolute inset - 0 bg - gradient - to - r from - blue - 500 / 10 via - purple - 500 / 10 to - green - 500 / 10"></div>
        <div className="container mx - auto px - 4 relative z - 10">
          <div className="text - center max - w-4xl mx - auto">
            <div className="inline - flex items - center px - 4 py - 2 bg - gradient - to - r from - blue - 500 / 20 to - green - 500 / 20 rounded - full border border - blue - 400 / 30 mb - 6">
              <AccessibilityIcon className="w - 5 h - 5 text - blue - 400 mr - 2"       />
              <span className="text - blue - 300 font - medium">
                Accessibility
              </span>
            </div>

            <h1 className="text - 5xl lg:text - 7xl font - bold text - white mb - 6">
              <span className="bg - gradient - to - r from - blue - 400 via - purple - 500 to - green - 600 bg - clip - text text - transparent">
                Accessibility
              </span>
              <br       />
              <span className="text - white">Statement</span>
            </h1>

            <p className="text - xl lg:text - 2xl text - gray - 300 mb - 8 max - w-3xl mx - auto">
              We are committed to ensuring digital accessibility for people with
              disabilities. We are continually improving the user experience for
              everyone and applying the relevant accessibility standards.
            </p>
          </div>
        </motion.div>

      {/* Accessibility Features */}
      <section className="py - 20">
        <div className="container mx - auto px - 4">
          <div className="text - center mb - 16">
            <h2 className="text - 4xl lg:text - 5xl font - bold text - white mb - 6">
              Accessibility Features
            </h2>
            <p className="text - xl text - gray - 300 max - w-3xl mx - auto">
              Our platform includes comprehensive accessibility features to
              ensure an inclusive experience for all users.
            </p>
          </div>

          <div className="grid grid - cols - 1 md:grid - cols - 2 gap - 8">
            {accessibilityFeatures.map ( (feature, index) => (<div
                key={index}
                className="bg - slate - 800 / 50 border border - slate - 700 / 50 rounded - xl p - 8 hover:border - blue - 400 / 30 transition - all duration - 300"
              >
                <div className="flex items - center mb - 6">
                  <div className="w - 12 h - 12 bg - gradient - to - r from - blue - 500 / 20 to - green - 500 / 20 rounded - lg flex items - center justify - center mr - 4">
                    {feature.icon}
                  </div>
                  <div>
                    <h3 className="text - xl font - semibold text - white">
                      {feature.title}
                    </h3>
                    <p className="text - gray - 400">{feature.description}</p>
                  </div>
                </div>

                <ul className="space - y-3">
                  {feature.features.map ( (item, itemIndex) => (<li key={itemIndex} className="flex items - start">
                      <CheckCircle className="w - 4 h - 4 text - green - 400 mr - 2 mt - 0.5 flex - shrink - 0"       />
                      <span className="text - gray - 300 text - sm">
                        {item}
                      </span>
                    </li>) ) }
                </ul>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Compliance Standards */}
        <motion.div 
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <h2 className="text-3xl font-bold text-white text-center mb-12">Accessibility Compliance</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {complianceStandards.map((standard, index) => (
              <div key={index} className="bg-zinc-800/50 border border-zion-cyan/20 rounded-lg p-6 text-center">
                <div className="flex justify-center mb-4">{standard.icon}</div>
                <h3 className="text-white font-semibold text-lg mb-2">{standard.name}</h3>
                {standard.level && (
                  <div className="text-zion-cyan text-sm mb-2">Level {standard.level}</div>
                )}
                <p className="text-zion-slate-light text-sm mb-3">{standard.description}</p>
                <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium ${
                  standard.status === 'Compliant' 
                    ? 'bg-green-500/20 text-green-400' 
                    : 'bg-yellow-500/20 text-yellow-400'
                }`}>
                  {standard.status}
                </span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Accessibility Tools */}
        <motion.div 
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <h2 className="text-3xl font-bold text-white text-center mb-12">Accessibility Tools & Resources</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {accessibilityTools.map((tool, index) => (
              <div key={index} className="bg-zinc-800/50 border border-zion-cyan/20 rounded-lg p-6 text-center hover:border-zion-cyan/40 transition-all duration-300">
                <div className="text-zion-cyan mb-4 flex justify-center">{tool.icon}</div>
                <h3 className="text-white font-semibold text-lg mb-3">{tool.name}</h3>
                <p className="text-zion-slate-light text-sm mb-4 leading-relaxed">{tool.description}</p>
                <a
                  href={tool.link}
                  className="text-zion-cyan hover:text-zion-cyan-light transition-colors text-sm font-medium inline-flex items-center"
                >
                  Learn More <ArrowRight className="w-3 h-3 ml-1" />
                </a>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Accessibility Tips */}
        <motion.div 
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.0 }}
        >
          <h2 className="text-3xl font-bold text-white text-center mb-12">Accessibility Tips for Users</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {accessibilityTips.map((tip, index) => (
              <div key={index} className="bg-zinc-800/50 border border-zion-cyan/20 rounded-lg p-6 text-center hover:border-zion-cyan/40 transition-all duration-300">
                <div className="text-zion-cyan mb-4 flex justify-center">{tip.icon}</div>
                <h3 className="text-white font-semibold text-lg mb-3">{tip.title}</h3>
                <p className="text-zion-slate-light text-sm leading-relaxed">{tip.description}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Accessibility Resources */}
        <motion.div 
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.2 }}
        >
          <h2 className="text-3xl font-bold text-white text-center mb-12">Additional Resources</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <Link 
              to="/help" 
              className="bg-zinc-800/50 border border-zion-cyan/20 rounded-lg p-6 hover:border-zion-cyan/40 transition-all duration-300 group"
            >
              <div className="text-zion-cyan mb-4 flex justify-center">
                <HelpCircle className="w-8 h-8" />
              </div>
              <h3 className="text-white font-semibold text-lg mb-2">Help Center</h3>
              <p className="text-zion-slate-light mb-4">Accessibility guides and tutorials</p>
              <span className="text-zion-cyan group-hover:text-zion-cyan-light transition-colors font-medium">
                Get Help →
              </span>
            </Link>

            <Link 
              to="/contact" 
              className="bg-zinc-800/50 border border-zion-cyan/20 rounded-lg p-6 hover:border-zion-cyan/40 transition-all duration-300 group"
            >
              <div className="text-zion-cyan mb-4 flex justify-center">
                <Users className="w-8 h-8" />
              </div>
              <h3 className="text-white font-semibold text-lg mb-2">Accessibility Team</h3>
              <p className="text-zion-slate-light mb-4">Contact our accessibility specialists</p>
              <span className="text-zion-cyan group-hover:text-zion-cyan-light transition-colors font-medium">
                Contact Us →
              </span>
            </Link>

            <a 
              href="https://www.w3.org/WAI/WCAG21/quickref/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-zinc-800/50 border border-zion-cyan/20 rounded-lg p-6 hover:border-zion-cyan/40 transition-all duration-300 group"
            >
              <div className="text-zion-cyan mb-4 flex justify-center">
                <Globe className="w-8 h-8" />
              </div>
              <h3 className="text-white font-semibold text-lg mb-2">WCAG Guidelines</h3>
              <p className="text-zion-slate-light mb-4">Learn about accessibility standards</p>
              <span className="text-zion-cyan group-hover:text-zion-cyan-light transition-colors font-medium">
                Visit W3C →
              </span>
            </a>
          </div>
        </motion.div>

        {/* Feedback Section */}
        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.4 }}
        >
          <div className="bg-gradient-to-r from-zion-cyan/10 to-zion-purple/10 border border-zion-cyan/20 rounded-lg p-12 max-w-4xl mx-auto">
            <Info className="w-16 h-16 text-zion-cyan mx-auto mb-6" />
            <h2 className="text-3xl font-bold text-white mb-6">Help Us Improve</h2>
            <p className="text-zion-slate-light text-lg mb-8 leading-relaxed">
              We're committed to continuously improving our accessibility. If you encounter any accessibility 
              barriers or have suggestions for improvement, please let us know. Your feedback helps us create 
              a better experience for all users.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/contact" 
                className="px-8 py-3 bg-gradient-to-r from-zion-cyan to-zion-purple text-white rounded-lg font-medium hover:scale-105 transition-transform inline-flex items-center"
              >
                <div className="w - 12 h - 12 bg - gradient - to - r from - blue - 500 / 20 to - green - 500 / 20 rounded - lg flex items - center justify - center mb - 4">
                  {tech.icon}
                </div>
                <h3 className="text - lg font - semibold text - white mb - 2">
                  {tech.name}
                </h3>
                <p className="text - gray - 400 text - sm">
                  {tech.description}
                </p>
              </div>) ) }
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py - 20">
        <div className="container mx - auto px - 4">
          <div className="text - center mb - 16">
            <h2 className="text - 4xl lg:text - 5xl font - bold text - white mb - 6">
              Get Help & Support
            </h2>
            <p className="text - xl text - gray - 300 max - w-3xl mx - auto">
              Need assistance with accessibility features or have feedback? Our
              accessibility team is here to help.
            </p>
          </div>

          <div className="max - w-4xl mx - auto">
            <div className="grid grid - cols - 1 md:grid - cols - 2 gap - 8">
              {contactInfo.map ( (contact, index) => (<div
                  key={index}
                  className="bg - slate - 800 / 50 border border - slate - 700 / 50 rounded - xl p - 8 hover:border - blue - 400 / 30 transition - all duration - 300"
                >
                  <h3 className="text - xl font - semibold text - white mb - 6">
                    {contact.title}
                  </h3>

                  <div className="space - y-4">
                    <div className="flex items - center">
                      <Mail className="w - 5 h - 5 text - blue - 400 mr - 3"       />
                      <span className="text - gray - 300">{contact.email}</span>
                    </div>
                    <div className="flex items - center">
                      <Phone className="w - 5 h - 5 text - blue - 400 mr - 3"       />
                      <span className="text - gray - 300">{contact.phone}</span>
                    </div>
                    <div className="flex items - center">
                      <Info className="w - 5 h - 5 text - blue - 400 mr - 3"       />
                      <span className="text - gray - 300">
                        Response time: {contact.responseTime}
                      </span>
                    </div>
                  </div>
                </div>) ) }
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}