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
      icon: <Eye className="w-8 h-8" />,
      title: "Visual Accessibility",
      description: "Features to support users with visual impairments",
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
      icon: <Ear className="w-8 h-8" />,
      title: "Auditory Accessibility",
      description: "Support for users with hearing impairments",
      features: [
        "Closed captions for videos",
        "Transcripts for audio content",
        "Visual notifications",
        "Haptic feedback options",
        "Audio descriptions"
      ]
    },
    {
      icon: <MousePointer className="w-8 h-8" />,
      title: "Motor Accessibility",
      description: "Features for users with motor impairments",
      features: [
        "Keyboard navigation",
        "Voice control support",
        "Large click targets",
        "Customizable timing",
        "One-handed operation"
      ]
    },
    {
      icon: <Keyboard className="w-8 h-8" />,
      title: "Cognitive Accessibility",
      description: "Support for users with cognitive differences",
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
      name: "WCAG 2.1",
      level: "AA",
      description: "Web Content Accessibility Guidelines 2.1 Level AA compliance",
      status: "Compliant",
      icon: <CheckCircle className="w-5 h-5 text-green-400" />
    },
    {
      name: "Section 508",
      description: "Federal accessibility requirements for electronic information",
      status: "Compliant",
      icon: <CheckCircle className="w-5 h-5 text-green-400" />
    },
    {
      name: "ADA Title III",
      description: "Americans with Disabilities Act website accessibility",
      status: "Compliant",
      icon: <CheckCircle className="w-5 h-5 text-green-400" />
    },
    {
      name: "EN 301 549",
      description: "European accessibility standard for ICT products",
      status: "In Progress",
      icon: <AlertTriangle className="w-5 h-5 text-yellow-400" />
    }
  ];

  const accessibilityTools = [
    {
      name: "Accessibility Panel",
      description: "Quick access to accessibility settings and features",
      icon: <Settings className="w-6 h-6" />,
      link: "#accessibility-panel"
    },
    {
      name: "Screen Reader Support",
      description: "Full compatibility with popular screen readers",
      icon: <Monitor className="w-6 h-6" />,
      link: "#screen-reader"
    },
    {
      name: "Keyboard Shortcuts",
      description: "Comprehensive keyboard navigation guide",
      icon: <Keyboard className="w-6 h-6" />,
      link: "#keyboard-shortcuts"
    },
    {
      name: "Mobile Accessibility",
      description: "Optimized for mobile assistive technologies",
      icon: <Smartphone className="w-6 h-6" />,
      link: "#mobile-accessibility"
    }
  ];

  const accessibilityTips = [
    {
      title: "Use Keyboard Navigation",
      description: "Navigate through the site using Tab, Enter, and arrow keys for full accessibility.",
      icon: <Keyboard className="w-5 h-5" />
    },
    {
      title: "Enable Screen Reader",
      description: "Use screen readers like NVDA, JAWS, or VoiceOver for audio navigation.",
      icon: <Monitor className="w-5 h-5" />
    },
    {
      title: "Adjust Display Settings",
      description: "Use browser zoom and high contrast modes for better visibility.",
      icon: <Eye className="w-5 h-5" />
    },
    {
      title: "Contact Support",
      description: "Reach out to our accessibility team for personalized assistance.",
      icon: <HelpCircle className="w-5 h-5" />
    }
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

        {/* Accessibility Commitment */}
        <motion.div 
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="bg-gradient-to-r from-zion-cyan/10 to-zion-purple/10 border border-zion-cyan/20 rounded-lg p-12 max-w-6xl mx-auto text-center">
            <Accessibility className="w-20 h-20 text-zion-cyan mx-auto mb-6" />
            <h2 className="text-3xl font-bold text-white mb-6">Our Accessibility Commitment</h2>
            <p className="text-zion-slate-light text-lg mb-8 leading-relaxed max-w-4xl mx-auto">
              We believe that technology should be accessible to everyone. Our team continuously works to improve 
              the accessibility of our platform, ensuring that users with disabilities can fully participate in the 
              digital economy and access our services independently.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              <div className="text-center">
                <div className="text-3xl font-bold text-zion-cyan mb-2">100%</div>
                <div className="text-zion-slate-light">WCAG 2.1 AA Compliant</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-zion-purple mb-2">24/7</div>
                <div className="text-zion-slate-light">Accessibility Support</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-400 mb-2">Continuous</div>
                <div className="text-zion-slate-light">Improvement Process</div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Accessibility Features */}
        <motion.div 
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <h2 className="text-3xl font-bold text-white text-center mb-12">Accessibility Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {accessibilityFeatures.map((feature, index) => (
              <div key={index} className="bg-zinc-800/50 border border-zion-cyan/20 rounded-lg p-8 hover:border-zion-cyan/40 transition-all duration-300">
                <div className="text-zion-cyan mb-6">{feature.icon}</div>
                <h3 className="text-white font-semibold text-2xl mb-4">{feature.title}</h3>
                <p className="text-zion-slate-light mb-6 leading-relaxed">{feature.description}</p>
                <ul className="space-y-2">
                  {feature.features.map((item, idx) => (
                    <li key={idx} className="flex items-center text-zion-slate-light">
                      <CheckCircle className="w-4 h-4 text-zion-cyan mr-3 flex-shrink-0" />
                      <span className="text-sm">{item}</span>
                    </li>
                  ))}
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
                Report Accessibility Issue
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
              <Link 
                to="/help" 
                className="px-8 py-3 border border-zion-cyan text-zion-cyan rounded-lg font-medium hover:bg-zion-cyan hover:text-white transition-colors"
              >
                Accessibility Help
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}