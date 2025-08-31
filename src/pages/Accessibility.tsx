import React from 'react';
import { motion } from 'framer-motion';
import { 
  Accessibility, 
  Eye, 
  MousePointer, 
  Volume2, 
  Keyboard, 
  Smartphone, 
  Monitor, 
  Heart, 
  Users, 
  Shield, 
  CheckCircle, 
  AlertTriangle,
  Phone,
  Mail,
  Globe
} from 'lucide-react';

const Accessibility: React.FC = () => {
  const lastUpdated = "January 15, 2025";

  const accessibilityFeatures = [
    {
      category: "Visual Accessibility",
      icon: Eye,
      features: [
        "High contrast mode support",
        "Adjustable font sizes",
        "Screen reader compatibility",
        "Alternative text for images",
        "Color-blind friendly design"
      ],
      color: "from-blue-500 to-cyan-500"
    },
    {
      category: "Motor Accessibility",
      icon: MousePointer,
      features: [
        "Keyboard navigation support",
        "Large click targets",
        "Voice control compatibility",
        "Switch device support",
        "Reduced motion options"
      ],
      color: "from-green-500 to-emerald-500"
    },
    {
      category: "Auditory Accessibility",
      icon: Volume2,
      features: [
        "Closed captions for videos",
        "Audio descriptions",
        "Visual alerts and notifications",
        "Transcripts for audio content",
        "Volume control options"
      ],
      color: "from-purple-500 to-pink-500"
    },
    {
      category: "Cognitive Accessibility",
      icon: Heart,
      features: [
        "Clear and simple language",
        "Consistent navigation",
        "Logical content structure",
        "Error prevention",
        "Multiple ways to complete tasks"
      ],
      color: "from-orange-500 to-red-500"
    }
  ];

  const complianceStandards = [
    {
      standard: "WCAG 2.1",
      level: "AA",
      description: "Web Content Accessibility Guidelines 2.1 Level AA compliance",
      status: "Compliant",
      color: "bg-green-500/20 text-green-400 border-green-500/30"
    },
    {
      standard: "Section 508",
      description: "Federal accessibility requirements for electronic and information technology",
      status: "Compliant",
      color: "bg-green-500/20 text-green-400 border-green-500/30"
    },
    {
      standard: "ADA Title III",
      description: "Americans with Disabilities Act requirements for public accommodations",
      status: "Compliant",
      color: "bg-green-500/20 text-green-400 border-green-500/30"
    },
    {
      standard: "EN 301 549",
      description: "European accessibility requirements for ICT products and services",
      status: "In Progress",
      color: "bg-yellow-500/20 text-yellow-400 border-yellow-500/30"
    }
  ];

  const assistiveTechnologies = [
    {
      name: "Screen Readers",
      description: "Compatible with JAWS, NVDA, VoiceOver, and other screen readers",
      icon: Monitor
    },
    {
      name: "Voice Control",
      description: "Support for Dragon NaturallySpeaking and built-in voice assistants",
      icon: Volume2
    },
    {
      name: "Switch Devices",
      description: "Compatible with various switch navigation devices and software",
      icon: MousePointer
    },
    {
      name: "Mobile Accessibility",
      description: "Optimized for mobile screen readers and accessibility features",
      icon: Smartphone
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="pt-24 pb-16 px-4 sm:px-6 lg:px-8"
      >
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="w-20 h-20 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-2xl flex items-center justify-center mx-auto mb-8"
          >
            <Accessibility className="w-10 h-10 text-white" />
          </motion.div>
          
          <h1 className="text-5xl lg:text-6xl font-bold text-white mb-6">
            Digital
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              {" "}Accessibility
            </span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-6">
            We're committed to making our website accessible to everyone, regardless of ability or disability.
          </p>
          <div className="flex items-center justify-center space-x-4 text-gray-400">
            <Shield className="w-5 h-5" />
            <span>Last updated: {lastUpdated}</span>
          </div>
        </div>
      </motion.div>

      {/* Main Content */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="px-4 sm:px-6 lg:px-8 pb-16"
      >
        <div className="max-w-6xl mx-auto">
          <div className="space-y-16">
            {/* Commitment Statement */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center"
            >
              <h2 className="text-3xl font-bold text-white mb-6">
                Our Accessibility Commitment
              </h2>
              <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
                Zion Tech Group is committed to ensuring digital accessibility for people with disabilities. 
                We are continually improving the user experience for everyone and applying the relevant 
                accessibility standards to ensure we provide equal access to all users.
              </p>
            </motion.div>

            {/* Accessibility Features */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <h2 className="text-3xl font-bold text-white text-center mb-12">
                Accessibility Features
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {accessibilityFeatures.map((category, index) => (
                  <motion.div
                    key={category.category}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8"
                  >
                    <div className={`w-16 h-16 bg-gradient-to-r ${category.color} rounded-2xl flex items-center justify-center mb-6`}>
                      <category.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-4">{category.category}</h3>
                    <ul className="space-y-3">
                      {category.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start space-x-3">
                          <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-300">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Compliance Standards */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h2 className="text-3xl font-bold text-white text-center mb-12">
                Accessibility Compliance
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {complianceStandards.map((standard, index) => (
                  <motion.div
                    key={standard.standard}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6"
                  >
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-lg font-bold text-white">{standard.standard}</h3>
                      <span className={`px-3 py-1 rounded-full text-sm font-medium border ${standard.color}`}>
                        {standard.status}
                      </span>
                    </div>
                    <p className="text-gray-300 text-sm">{standard.description}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Assistive Technology Support */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <h2 className="text-3xl font-bold text-white text-center mb-12">
                Assistive Technology Support
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {assistiveTechnologies.map((tech, index) => (
                  <motion.div
                    key={tech.name}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6"
                  >
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-cyan-500/20 rounded-xl flex items-center justify-center">
                        <tech.icon className="w-6 h-6 text-cyan-400" />
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-white mb-2">{tech.name}</h3>
                        <p className="text-gray-300 text-sm">{tech.description}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Navigation and Usage */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8"
            >
              <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
                <Keyboard className="w-6 h-6 text-cyan-400 mr-3" />
                Navigation and Usage Tips
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-lg font-semibold text-white mb-4">Keyboard Navigation</h3>
                  <ul className="space-y-2 text-gray-300">
                    <li className="flex items-start space-x-2">
                      <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full mt-2 flex-shrink-0"></div>
                      <span>Use Tab to navigate between interactive elements</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full mt-2 flex-shrink-0"></div>
                      <span>Use Enter or Space to activate buttons and links</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full mt-2 flex-shrink-0"></div>
                      <span>Use arrow keys to navigate within menus and lists</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full mt-2 flex-shrink-0"></div>
                      <span>Press Escape to close modals and menus</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-4">Screen Reader Support</h3>
                  <ul className="space-y-2 text-gray-300">
                    <li className="flex items-start space-x-2">
                      <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full mt-2 flex-shrink-0"></div>
                      <span>All images have descriptive alt text</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full mt-2 flex-shrink-0"></div>
                      <span>Form fields have proper labels and descriptions</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full mt-2 flex-shrink-0"></div>
                      <span>Headings follow a logical hierarchy</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full mt-2 flex-shrink-0"></div>
                      <span>Interactive elements announce their purpose</span>
                    </li>
                  </ul>
                </div>
              </div>
            </motion.div>

            {/* Known Issues and Improvements */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8"
            >
              <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
                <AlertTriangle className="w-6 h-6 text-yellow-400 mr-3" />
                Known Issues and Continuous Improvement
              </h2>
              <p className="text-gray-300 mb-6">
                We are committed to continuously improving the accessibility of our website. While we strive for full compliance, 
                we acknowledge that some areas may need improvement. We regularly review and update our accessibility features.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-lg font-semibold text-white mb-3">Areas of Focus</h3>
                  <ul className="space-y-2 text-gray-300">
                    <li className="flex items-start space-x-2">
                      <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full mt-2 flex-shrink-0"></div>
                      <span>Enhanced keyboard navigation</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full mt-2 flex-shrink-0"></div>
                      <span>Improved screen reader compatibility</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full mt-2 flex-shrink-0"></div>
                      <span>Better color contrast ratios</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full mt-2 flex-shrink-0"></div>
                      <span>Mobile accessibility enhancements</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-3">Testing and Validation</h3>
                  <ul className="space-y-2 text-gray-300">
                    <li className="flex items-start space-x-2">
                      <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full mt-2 flex-shrink-0"></div>
                      <span>Regular accessibility audits</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full mt-2 flex-shrink-0"></div>
                      <span>User testing with assistive technologies</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full mt-2 flex-shrink-0"></div>
                      <span>Automated accessibility testing tools</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full mt-2 flex-shrink-0"></div>
                      <span>Expert accessibility reviews</span>
                    </li>
                  </ul>
                </div>
              </div>
            </motion.div>

            {/* Feedback and Support */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border border-cyan-500/30 rounded-2xl p-8"
            >
              <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
                <Users className="w-6 h-6 text-cyan-400 mr-3" />
                We Value Your Feedback
              </h2>
              <p className="text-gray-300 mb-6">
                Your feedback helps us improve our accessibility. If you encounter accessibility barriers or have suggestions 
                for improvement, please let us know.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-lg font-semibold text-white mb-3">How to Report Issues</h3>
                  <ul className="space-y-2 text-gray-300">
                    <li className="flex items-start space-x-2">
                      <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full mt-2 flex-shrink-0"></div>
                      <span>Email us at kleber@ziontechgroup.com</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full mt-2 flex-shrink-0"></div>
                      <span>Call us at +1 302 464 0950</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full mt-2 flex-shrink-0"></div>
                      <span>Use our contact form on the website</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-3">What to Include</h3>
                  <ul className="space-y-2 text-gray-300">
                    <li className="flex items-start space-x-2">
                      <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full mt-2 flex-shrink-0"></div>
                      <span>Description of the accessibility issue</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full mt-2 flex-shrink-0"></div>
                      <span>Steps to reproduce the problem</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full mt-2 flex-shrink-0"></div>
                      <span>Assistive technology being used</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full mt-2 flex-shrink-0"></div>
                      <span>Your contact information</span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="mt-6 p-4 bg-cyan-500/10 border border-cyan-500/20 rounded-lg">
                <p className="text-cyan-400 text-sm">
                  <strong>Response Time:</strong> We aim to respond to accessibility feedback within 2 business days and provide updates on resolution progress.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Accessibility;