import React from 'react';
import { Accessibility as AccessibilityIcon, Eye, Ear, Hand, Brain, CheckCircle, Info, Download, Mail, Phone, Globe, Users, Shield, Heart } from 'lucide-react';

export default function Accessibility() {
  const accessibilityFeatures = [
    {
      icon: <Eye className="w-8 h-8" />,
      title: 'Visual Accessibility',
      description: 'Support for screen readers, high contrast modes, and text scaling',
      features: [
        'Screen reader compatibility (NVDA, JAWS, VoiceOver)',
        'High contrast color schemes',
        'Adjustable text sizes (up to 200%)',
        'Alternative text for images',
        'Keyboard navigation support',
        'Focus indicators and landmarks'
      ]
    },
    {
      icon: <Ear className="w-8 h-8" />,
      title: 'Auditory Accessibility',
      description: 'Captions, transcripts, and audio alternatives for multimedia content',
      features: [
        'Closed captions for videos',
        'Audio descriptions for visual content',
        'Transcripts for audio content',
        'Volume controls and audio indicators',
        'Visual alerts and notifications'
      ]
    },
    {
      icon: <Hand className="w-8 h-8" />,
      title: 'Motor Accessibility',
      description: 'Keyboard navigation, voice control, and assistive technology support',
      features: [
        'Full keyboard navigation',
        'Voice control compatibility',
        'Switch device support',
        'Customizable click targets',
        'Gesture alternatives',
        'Timing adjustments'
      ]
    },
    {
      icon: <Brain className="w-8 h-8" />,
      title: 'Cognitive Accessibility',
      description: 'Clear navigation, consistent design, and simplified interfaces',
      features: [
        'Clear and simple language',
        'Consistent navigation patterns',
        'Logical content structure',
        'Error prevention and recovery',
        'Help and support resources',
        'Minimal distractions'
      ]
    }
  ];

  const complianceStandards = [
    {
      name: 'WCAG 2.1 AA',
      description: 'Web Content Accessibility Guidelines 2.1 Level AA compliance',
      status: 'Compliant',
      icon: <CheckCircle className="w-6 h-6 text-green-500" />
    },
    {
      name: 'Section 508',
      description: 'Federal accessibility requirements for electronic and information technology',
      status: 'Compliant',
      icon: <CheckCircle className="w-6 h-6 text-green-500" />
    },
    {
      name: 'ADA Title III',
      description: 'Americans with Disabilities Act accessibility requirements',
      status: 'Compliant',
      icon: <CheckCircle className="w-6 h-6 text-green-500" />
    },
    {
      name: 'EN 301 549',
      description: 'European accessibility requirements for ICT products and services',
      status: 'Compliant',
      icon: <CheckCircle className="w-6 h-6 text-green-500" />
    }
  ];

  const assistiveTechnologies = [
    {
      name: 'Screen Readers',
      description: 'NVDA, JAWS, VoiceOver, TalkBack, and other screen reading software',
      compatibility: 'Full'
    },
    {
      name: 'Voice Control',
      description: 'Dragon NaturallySpeaking, Voice Control, and other voice recognition software',
      compatibility: 'Full'
    },
    {
      name: 'Switch Devices',
      description: 'Single switch, multiple switch, and sip-and-puff devices',
      compatibility: 'Full'
    },
    {
      name: 'Eye Tracking',
      description: 'Tobii Dynavox, EyeGaze, and other eye tracking devices',
      compatibility: 'Supported'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 lg:py-32">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full border border-blue-400/30 mb-6">
              <AccessibilityIcon className="w-5 h-5 text-blue-400 mr-2" />
              <span className="text-blue-300 font-medium">Digital Accessibility</span>
            </div>
            
            <h1 className="text-5xl lg:text-7xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-600 bg-clip-text text-transparent">
                Accessibility
              </span>
              <br />
              <span className="text-white">Statement</span>
            </h1>
            
            <p className="text-xl lg:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
              We are committed to ensuring digital accessibility for people with disabilities. 
              We continually improve the user experience for everyone, and apply the relevant 
              accessibility standards.
            </p>
          </div>
        </div>
      </section>

      {/* Accessibility Features */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Accessibility Features
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our platform includes comprehensive accessibility features designed to support 
              users with diverse abilities and assistive technologies.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {accessibilityFeatures.map((feature, index) => (
              <div key={index} className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-8 hover:border-blue-400/30 transition-all duration-300">
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-400/20 to-purple-500/20 rounded-lg flex items-center justify-center mr-4 text-blue-400">
                    {feature.icon}
                  </div>
                  <div>
                    <h3 className="text-2xl font-semibold text-white mb-2">{feature.title}</h3>
                    <p className="text-gray-300">{feature.description}</p>
                  </div>
                </div>
                
                <ul className="space-y-3">
                  {feature.features.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Compliance Standards */}
      <section className="py-20 bg-slate-800/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Compliance Standards
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We follow internationally recognized accessibility standards and guidelines 
              to ensure our platform is accessible to all users.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {complianceStandards.map((standard, index) => (
              <div key={index} className="bg-slate-700/30 rounded-lg p-6 flex items-center">
                <div className="mr-4">
                  {standard.icon}
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">{standard.name}</h3>
                  <p className="text-gray-300 text-sm mb-2">{standard.description}</p>
                  <span className="text-green-400 font-medium">{standard.status}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Assistive Technologies */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Supported Assistive Technologies
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our platform is tested and optimized for compatibility with various 
              assistive technologies to ensure a seamless experience for all users.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {assistiveTechnologies.map((tech, index) => (
              <div key={index} className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-6 hover:border-blue-400/30 transition-all duration-300">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-semibold text-white">{tech.name}</h3>
                  <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                    tech.compatibility === 'Full' 
                      ? 'bg-green-500/20 text-green-400' 
                      : 'bg-blue-500/20 text-blue-400'
                  }`}>
                    {tech.compatibility}
                  </span>
                </div>
                <p className="text-gray-300">{tech.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact & Feedback */}
      <section className="py-20 bg-slate-800/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Accessibility Feedback
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We welcome feedback on the accessibility of our platform. If you encounter 
              accessibility barriers, please let us know so we can improve your experience.
            </p>
          </div>

          <div className="max-w-2xl mx-auto text-center">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center mb-3">
                  <Mail className="w-6 h-6 text-blue-400" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Email</h3>
                <p className="text-gray-300">accessibility@ziontechgroup.com</p>
              </div>

              <div className="flex flex-col items-center">
                <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center mb-3">
                  <Phone className="w-6 h-6 text-blue-400" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Phone</h3>
                <p className="text-gray-300">+1 302 464 0950</p>
              </div>

              <div className="flex flex-col items-center">
                <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center mb-3">
                  <Globe className="w-6 h-6 text-blue-400" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Online</h3>
                <p className="text-gray-300">Contact Form</p>
              </div>
            </div>

            <p className="text-gray-300 mb-6">
              We aim to respond to accessibility feedback within 2 business days. 
              Your input helps us maintain and improve our accessibility standards.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}