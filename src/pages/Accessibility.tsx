import React from 'react.ts';
import { motion  } from 'framer-motion.ts';
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
  ZoomOut
 } from 'lucide-react.ts';
import { SEO  } from '../components/SEO';

export default function Accessibility() {
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

  const complianceStandards = [
    {
      standard: 'WCAG 2.1 AA',
      description: 'Web Content Accessibility Guidelines 2.1 Level AA compliance',
      status: 'Fully Compliant',
      icon: CheckCircle,
      color: 'text-green-400'
    },
    {
      standard: 'Section 508',
      description: 'Federal accessibility requirements for electronic and information technology',
      status: 'Fully Compliant',
      icon: CheckCircle,
      color: 'text-green-400'
    },
    {
      standard: 'ADA Title III',
      description: 'Americans with Disabilities Act requirements for public accommodations',
      status: 'Fully Compliant',
      icon: CheckCircle,
      color: 'text-green-400'
    },
    {
      standard: 'EN 301 549',
      description: 'European accessibility requirements for ICT products and services',
      status: 'Fully Compliant',
      icon: CheckCircle,
      color: 'text-green-400'
    }
  ];

  const assistiveTechnologies = [
    {
      name: 'Screen Readers',
      description: 'Compatible with JAWS, NVDA, VoiceOver, and TalkBack',
      icon: Monitor,
      examples: ['JAWS', 'NVDA', 'VoiceOver', 'TalkBack', 'Narrator']
    },
    {
      name: 'Voice Control',
      description: 'Voice recognition software support for hands-free navigation',
      icon: Volume2,
      examples: ['Dragon NaturallySpeaking', 'Voice Control (macOS)', 'Windows Speech Recognition']
    },
    {
      name: 'Switch Devices',
      description: 'Alternative input devices for users with limited mobility',
      icon: Mouse,
      examples: ['Head switches', 'Eye tracking', 'Sip and puff devices', 'Foot pedals']
    },
    {
      name: 'Mobile Accessibility',
      description: 'Optimized for mobile assistive technologies',
      icon: Smartphone,
      examples: ['iOS VoiceOver', 'Android TalkBack', 'Switch Control', 'AssistiveTouch']
    }
  ];

  const accessibilityTools = [
    {
      name: 'High Contrast Mode',
      icon: Contrast,
      description: 'Toggle high contrast color schemes for better visibility',
      shortcut: 'Ctrl + Shift + H'
    },
    {
      name: 'Font Size Adjuster',
      icon: Type,
      description: 'Increase or decrease text size for better readability',
      shortcut: 'Ctrl + Plus/Minus'
    },
    {
      name: 'Zoom Controls',
      icon: ZoomIn,
      description: 'Zoom in and out of content for better visibility',
      shortcut: 'Ctrl + Scroll or Ctrl + Plus/Minus'
    },
    {
      name: 'Focus Highlighter',
      icon: CheckCircle,
      description: 'Highlight keyboard focus for better navigation',
      shortcut: 'Tab key navigation'
    }
  ];

  return (
    <>
      <SEO 
        title="Accessibility - Zion Tech Group"
        description="Zion Tech Group is committed to digital accessibility. Learn about our accessibility features, compliance standards, and commitment to inclusive design."
        canonical="/accessibility"
      />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        {/* Hero Section */}
        <section className="relative overflow-hidden py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full mb-6">
                <Accessibility className="h-10 w-10 text-white" />
              </div>
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                Accessibility Statement
              </h1>
              <p className="text-xl text-slate-300 mb-8 max-w-3xl mx-auto">
                Zion Tech Group is committed to ensuring digital accessibility for people with disabilities. We are continually improving the user experience for everyone and applying the relevant accessibility standards.
              </p>
              
              {/* Quick Stats */}
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
                <div className="text-center">
                  <div className="text-3xl font-bold text-cyan-400">WCAG 2.1 AA</div>
                  <div className="text-slate-400">Compliance Level</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-cyan-400">100%</div>
                  <div className="text-slate-400">Screen Reader Compatible</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-cyan-400">24/7</div>
                  <div className="text-slate-400">Accessibility Support</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-cyan-400">4+</div>
                  <div className="text-slate-400">Input Methods Supported</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Commitment Statement */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-gradient-to-r from-cyan-600/20 to-blue-600/20 border border-cyan-500/30 rounded-2xl p-12">
              <h2 className="text-3xl font-bold text-white mb-6">
                Our Commitment to Accessibility
              </h2>
              <p className="text-lg text-slate-300 mb-6">
                At Zion Tech Group, we believe that technology should be accessible to everyone, regardless of their abilities or disabilities. Our commitment to accessibility is not just about compliance—it's about creating an inclusive digital experience that empowers all users.
              </p>
              <p className="text-lg text-slate-300">
                We continuously work to improve the accessibility of our website and services, ensuring that all users can access our information, services, and tools effectively and independently.
              </p>
            </div>
          </div>
        </section>

        {/* Accessibility Features */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-white mb-4">Accessibility Features</h2>
              <p className="text-xl text-slate-300">Comprehensive accessibility features designed for all users</p>
            </div>
            
            <div className="grid grid-cols-1 lg: grid-cols-2 gap-8">
              {accessibilityFeatures.map((category, index)  => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-slate-800/50 border border-slate-700/50 rounded-2xl p-8"
                >
                  <div className="flex items-center mb-6">
                    <div className={`w-16 h-16 bg-gradient-to-br ${category.color} rounded-2xl flex items-center justify-center mr-4`}>
                      <category.icon className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-white">{category.category}</h3>
                  </div>
                  
                  <div className="space-y-3">
                    {category.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center text-slate-300">
                        <CheckCircle className="h-5 w-5 text-cyan-400 mr-3 flex-shrink-0" />
                        {feature}
                      </div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Compliance Standards */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-white mb-4">Compliance Standards</h2>
              <p className="text-xl text-slate-300">We meet and exceed international accessibility standards</p>
            </div>
            
            <div className="grid grid-cols-1 md: grid-cols-2 lg:grid-cols-4 gap-6">
              {complianceStandards.map((standard, index)  => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-6 text-center"
                >
                  <div className={`w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center mx-auto mb-4`}>
                    <standard.icon className="h-8 w-8 text-white" />
                  </div>
                  
                  <h3 className="text-lg font-semibold text-white mb-2">{standard.standard}</h3>
                  <p className="text-slate-300 text-sm mb-3">{standard.description}</p>
                  
                  <div className={`inline-flex items-center text-sm font-semibold ${standard.color}`}>
                    <CheckCircle className="h-4 w-4 mr-1" />
                    {standard.status}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Assistive Technologies */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-white mb-4">Assistive Technology Support</h2>
              <p className="text-xl text-slate-300">Compatible with a wide range of assistive technologies</p>
            </div>
            
            <div className="grid grid-cols-1 lg: grid-cols-2 gap-8">
              {assistiveTechnologies.map((tech, index)  => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-slate-800/50 border border-slate-700/50 rounded-2xl p-8"
                >
                  <div className="flex items-center mb-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-600 rounded-2xl flex items-center justify-center mr-4">
                      <tech.icon className="h-8 w-8 text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-white">{tech.name}</h3>
                      <p className="text-slate-300">{tech.description}</p>
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <h4 className="font-semibold text-cyan-400 mb-2">Supported Technologies:</h4>
                    <div className="flex flex-wrap gap-2">
                      {tech.examples.map((example, idx) => (
                        <span key={idx} className="px-3 py-1 bg-slate-700/50 rounded-full text-sm text-slate-300">
                          {example}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Accessibility Tools */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-white mb-4">Built-in Accessibility Tools</h2>
              <p className="text-xl text-slate-300">Use these tools to customize your experience</p>
            </div>
            
            <div className="grid grid-cols-1 md: grid-cols-2 lg:grid-cols-4 gap-6">
              {accessibilityTools.map((tool, index)  => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-6 text-center hover:border-cyan-500/50 transition-all duration-300"
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <tool.icon className="h-8 w-8 text-white" />
                  </div>
                  
                  <h3 className="text-lg font-semibold text-white mb-2">{tool.name}</h3>
                  <p className="text-slate-300 text-sm mb-3">{tool.description}</p>
                  
                  <div className="text-cyan-400 text-xs font-mono bg-slate-700/50 rounded px-2 py-1">
                    {tool.shortcut}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact & Feedback */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-gradient-to-r from-cyan-600/20 to-blue-600/20 border border-cyan-500/30 rounded-2xl p-12">
              <h2 className="text-3xl font-bold text-white mb-6">
                Help Us Improve Accessibility
              </h2>
              <p className="text-lg text-slate-300 mb-8">
                We welcome your feedback on the accessibility of our website and services. If you experience accessibility barriers or have suggestions for improvement, please let us know.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="flex items-center justify-center space-x-3 text-slate-300">
                  <Phone className="h-5 w-5 text-cyan-400" />
                  <span>+1 302 464 0950</span>
                </div>
                <div className="flex items-center justify-center space-x-3 text-slate-300">
                  <Mail className="h-5 w-5 text-cyan-400" />
                  <span>accessibility@ziontechgroup.com</span>
                </div>
                <div className="flex items-center justify-center space-x-3 text-slate-300">
                  <Globe className="h-5 w-5 text-cyan-400" />
                  <span>Online Form</span>
                </div>
              </div>
              
              <div className="bg-slate-700/50 rounded-lg p-6 text-left">
                <h3 className="text-lg font-semibold text-white mb-3">Accessibility Feedback Form</h3>
                <p className="text-slate-300 text-sm mb-4">
                  Please include the following information in your feedback:
                </p>
                <ul className="text-slate-300 text-sm space-y-1">
                  <li>• The specific page or feature you're experiencing issues with</li>
                  <li>• A description of the accessibility barrier</li>
                  <li>• Your preferred method of contact for follow-up</li>
                  <li>• Any assistive technology you're using</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Continuous Improvement */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-white mb-6">
              Continuous Improvement
            </h2>
            <p className="text-lg text-slate-300 mb-8">
              We are committed to continuously improving the accessibility of our website and services. Our accessibility team regularly reviews and updates our accessibility features based on user feedback, technological advances, and evolving accessibility standards.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Regular Audits</h3>
                <p className="text-slate-300 text-sm">Monthly accessibility audits and testing</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">User Testing</h3>
                <p className="text-slate-300 text-sm">Regular testing with users with disabilities</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Globe className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Standards Updates</h3>
                <p className="text-slate-300 text-sm">Stay current with accessibility standards</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  )}