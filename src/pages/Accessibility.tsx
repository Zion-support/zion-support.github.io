import React from 'react';
import { motion } from 'framer-motion';
import { SEO } from '../components/SEO';
import { 
  Accessibility, 
  Eye, 
  Ear, 
  MousePointer, 
  Keyboard, 
  Smartphone, 
  Monitor, 
  CheckCircle, 
  AlertTriangle,
  Users,
  Settings,
  HelpCircle,
  FileText,
  Globe,
  Shield,
  Heart,
  Award,
  Zap,
  Brain,
  Cloud,
  Database,
  Code,
  Target,
  Star,
  Rocket,
  Lightbulb,
  Car,
  GraduationCap,
  Factory,
  ShoppingCart,
  Camera,
  Gamepad2,
  Microscope
} from 'lucide-react';

export default function Accessibility() {
  const accessibilityFeatures = [
    {
      icon: Eye,
      title: 'Visual Accessibility',
      description: 'High contrast modes, adjustable font sizes, and screen reader compatibility',
      features: [
        'High contrast color schemes',
        'Adjustable font sizes (12px to 24px)',
        'Screen reader compatibility (NVDA, JAWS, VoiceOver)',
        'Alternative text for all images',
        'Semantic HTML structure'
      ]
    },
    {
      icon: Ear,
      title: 'Auditory Accessibility',
      description: 'Closed captions, transcripts, and audio descriptions for multimedia content',
      features: [
        'Closed captions for video content',
        'Transcripts for audio content',
        'Audio descriptions for visual content',
        'Volume controls and audio indicators',
        'Alternative text for audio cues'
      ]
    },
    {
      icon: MousePointer,
      title: 'Motor Accessibility',
      description: 'Keyboard navigation, voice control, and assistive technology support',
      features: [
        'Full keyboard navigation support',
        'Voice control compatibility',
        'Large click targets (minimum 44x44px)',
        'Customizable cursor sizes',
        'Assistive technology integration'
      ]
    },
    {
      icon: Brain,
      title: 'Cognitive Accessibility',
      description: 'Clear navigation, consistent design, and simplified language',
      features: [
        'Clear and consistent navigation',
        'Simplified language and instructions',
        'Logical content organization',
        'Minimal distractions and clutter',
        'Consistent design patterns'
      ]
    }
  ];

  const complianceStandards = [
    {
      standard: 'WCAG 2.1 AA',
      level: 'Level AA',
      description: 'Web Content Accessibility Guidelines 2.1 Level AA compliance',
      status: 'Compliant',
      icon: CheckCircle
    },
    {
      standard: 'Section 508',
      level: 'Federal',
      description: 'U.S. federal accessibility requirements for electronic and information technology',
      status: 'Compliant',
      icon: CheckCircle
    },
    {
      standard: 'ADA Title III',
      level: 'Legal',
      description: 'Americans with Disabilities Act requirements for public accommodations',
      status: 'Compliant',
      icon: CheckCircle
    },
    {
      standard: 'EN 301 549',
      level: 'European',
      description: 'European accessibility requirements for ICT products and services',
      status: 'In Progress',
      icon: AlertTriangle
    }
  ];

  const assistiveTechnologies = [
    {
      name: 'Screen Readers',
      examples: ['NVDA', 'JAWS', 'VoiceOver', 'TalkBack'],
      description: 'Text-to-speech software for visually impaired users'
    },
    {
      name: 'Voice Control',
      examples: ['Dragon NaturallySpeaking', 'Voice Access', 'Voice Control'],
      description: 'Voice recognition software for motor-impaired users'
    },
    {
      name: 'Switch Devices',
      examples: ['Head switches', 'Eye tracking', 'Sip and puff'],
      description: 'Alternative input devices for users with limited mobility'
    },
    {
      name: 'Magnification',
      examples: ['ZoomText', 'MAGic', 'Built-in browser zoom'],
      description: 'Screen magnification software for low vision users'
    }
  ];

  const testingMethods = [
    {
      method: 'Automated Testing',
      tools: ['axe-core', 'WAVE', 'Lighthouse'],
      description: 'Automated accessibility testing using industry-standard tools'
    },
    {
      method: 'Manual Testing',
      tools: ['Keyboard navigation', 'Screen reader testing', 'Color contrast analysis'],
      description: 'Manual testing by accessibility experts and users with disabilities'
    },
    {
      method: 'User Testing',
      tools: ['User interviews', 'Usability testing', 'Feedback collection'],
      description: 'Testing with actual users who rely on assistive technologies'
    },
    {
      method: 'Expert Review',
      tools: ['Accessibility audits', 'Code reviews', 'Design reviews'],
      description: 'Regular reviews by certified accessibility professionals'
    }
  ];

  const improvementAreas = [
    {
      area: 'Mobile Accessibility',
      priority: 'High',
      description: 'Enhancing mobile app accessibility features',
      timeline: 'Q2 2024'
    },
    {
      area: 'Video Content',
      priority: 'Medium',
      description: 'Adding closed captions to all video content',
      timeline: 'Q3 2024'
    },
    {
      area: 'Multilingual Support',
      priority: 'Medium',
      description: 'Ensuring accessibility across all supported languages',
      timeline: 'Q4 2024'
    },
    {
      area: 'Advanced Features',
      priority: 'Low',
      description: 'Implementing advanced accessibility features like ARIA live regions',
      timeline: 'Q1 2025'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <SEO 
        title="Accessibility - Zion Tech Group"
        description="Learn about Zion Tech Group's commitment to web accessibility and the features we provide to ensure our services are accessible to all users."
      />
      
      <div className="container mx-auto px-4 py-16">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="w-24 h-24 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-3xl flex items-center justify-center mx-auto mb-8">
            <Accessibility className="w-12 h-12 text-white" />
          </div>
          <h1 className="text-5xl font-bold text-white mb-6">Web Accessibility</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            We believe that technology should be accessible to everyone. Our commitment to web accessibility 
            ensures that our services can be used by people of all abilities and disabilities.
          </p>
        </motion.div>

        {/* Commitment Statement */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="bg-gradient-to-r from-cyan-600/20 to-blue-600/20 rounded-2xl p-8 mb-16 border border-cyan-500/30"
        >
          <div className="text-center">
            <h2 className="text-3xl font-bold text-white mb-4">Our Commitment</h2>
            <p className="text-lg text-gray-300 max-w-4xl mx-auto">
              Zion Tech Group is committed to making our digital services accessible to all users, 
              including those with disabilities. We continuously work to improve accessibility and 
              ensure compliance with international accessibility standards.
            </p>
          </div>
        </motion.div>

        {/* Accessibility Features */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-white text-center mb-12">Accessibility Features</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {accessibilityFeatures.map((category, index) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                className="bg-slate-800/50 rounded-xl p-6 border border-slate-600/30"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center">
                    <category.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white">{category.title}</h3>
                    <p className="text-gray-400 text-sm">{category.description}</p>
                  </div>
                </div>
                <ul className="space-y-2">
                  {category.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center gap-2 text-gray-300">
                      <CheckCircle className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                      <span className="text-sm">{feature}</span>
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
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-white text-center mb-12">Compliance Standards</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {complianceStandards.map((standard, index) => (
              <motion.div
                key={standard.standard}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                className="bg-slate-800/50 rounded-xl p-6 border border-slate-600/30 text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <standard.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{standard.standard}</h3>
                <p className="text-cyan-400 text-sm font-medium mb-2">{standard.level}</p>
                <p className="text-gray-400 text-sm mb-3">{standard.description}</p>
                <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium ${
                  standard.status === 'Compliant' 
                    ? 'bg-green-500/20 text-green-400 border border-green-500/30'
                    : 'bg-yellow-500/20 text-yellow-400 border border-yellow-500/30'
                }`}>
                  {standard.status}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Assistive Technologies */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-white text-center mb-12">Supported Assistive Technologies</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {assistiveTechnologies.map((tech, index) => (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 1.0 + index * 0.1 }}
                className="bg-slate-800/50 rounded-xl p-6 border border-slate-600/30"
              >
                <h3 className="text-xl font-semibold text-white mb-3">{tech.name}</h3>
                <p className="text-gray-400 mb-4">{tech.description}</p>
                <div className="flex flex-wrap gap-2">
                  {tech.examples.map((example, exampleIndex) => (
                    <span
                      key={exampleIndex}
                      className="px-3 py-1 bg-cyan-500/20 text-cyan-400 rounded-full text-sm border border-cyan-500/30"
                    >
                      {example}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Testing Methods */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.0 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-white text-center mb-12">Accessibility Testing</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {testingMethods.map((method, index) => (
              <motion.div
                key={method.method}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 1.2 + index * 0.1 }}
                className="bg-slate-800/50 rounded-xl p-6 border border-slate-600/30"
              >
                <h3 className="text-xl font-semibold text-white mb-3">{method.method}</h3>
                <p className="text-gray-400 mb-4">{method.description}</p>
                <div className="flex flex-wrap gap-2">
                  {method.tools.map((tool, toolIndex) => (
                    <span
                      key={toolIndex}
                      className="px-3 py-1 bg-blue-500/20 text-blue-400 rounded-full text-sm border border-blue-500/30"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Improvement Areas */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-white text-center mb-12">Continuous Improvement</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {improvementAreas.map((area, index) => (
              <motion.div
                key={area.area}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 1.4 + index * 0.1 }}
                className="bg-slate-800/50 rounded-xl p-6 border border-slate-600/30"
              >
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-xl font-semibold text-white">{area.area}</h3>
                  <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium ${
                    area.priority === 'High' 
                      ? 'bg-red-500/20 text-red-400 border border-red-500/30'
                      : area.priority === 'Medium'
                      ? 'bg-yellow-500/20 text-yellow-400 border border-yellow-500/30'
                      : 'bg-green-500/20 text-green-400 border border-green-500/30'
                  }`}>
                    {area.priority}
                  </span>
                </div>
                <p className="text-gray-400 mb-3">{area.description}</p>
                <p className="text-cyan-400 text-sm font-medium">Timeline: {area.timeline}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Contact Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.4 }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-cyan-600/20 to-blue-600/20 rounded-2xl p-8 border border-cyan-500/30">
            <h2 className="text-3xl font-bold text-white mb-4">Need Help?</h2>
            <p className="text-lg text-gray-300 mb-6">
              If you experience any accessibility issues or have suggestions for improvement, 
              please don't hesitate to contact us.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-3 rounded-lg font-medium hover:from-cyan-600 hover:to-blue-700 transition-all duration-300"
              >
                Contact Us
              </a>
              <a
                href="/support"
                className="bg-slate-700/50 text-white px-8 py-3 rounded-lg font-medium hover:bg-slate-600/50 transition-all duration-300 border border-slate-600/50"
              >
                Get Support
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}