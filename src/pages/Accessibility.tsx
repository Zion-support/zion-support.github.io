import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { SEO } from '@/components/SEO';
import {
  Accessibility,
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
  Users,
  Shield,
  Lock,
  Database,
  Zap,
  BarChart3,
  Code,
  Server,
  Network,
  BarChart,
  PieChart,
  LineChart,
  Calendar,
  Settings,
  Tool,
  Briefcase,
  Home,
  Building,
  Car,
  Truck,
  Plane,
  Ship,
  Leaf,
  Gauge,
  ShieldAlert,
  UserCheck,
  Users2,
  UserPlus,
  UserMinus,
  UserX,
  UserCog,
  UserEdit,
  UserSearch,
  UserVoice,
  UserCheck2,
  UserClock,
  UserStar,
  UserHeart,
  UserShield,
  UserZap,
  UserTrendingUp,
  UserTrendingDown,
  UserPlus2,
  UserMinus2,
  UserX2,
  UserCog2,
  UserEdit2,
  UserSearch2,
  UserVoice2,
  UserCheck3,
  UserClock2,
  UserStar2,
  UserHeart2,
  UserShield2,
  UserZap2,
  UserTrendingUp2,
  UserTrendingDown2
} from 'lucide-react';

const AccessibilityPage: React.FC = () => {
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
      status: 'Compliant',
      icon: CheckCircle,
      color: 'text-green-400'
    },
    {
      standard: 'ADA Title III',
      description: 'Americans with Disabilities Act requirements for public accommodations',
      status: 'Compliant',
      icon: CheckCircle,
      color: 'text-green-400'
    },
    {
      standard: 'EN 301 549',
      description: 'European accessibility requirements for ICT products and services',
      status: 'Compliant',
      icon: CheckCircle,
      color: 'text-green-400'
    }
  ];

  const assistiveTechnologies = [
    {
      name: 'Screen Readers',
      description: 'Compatible with JAWS, NVDA, VoiceOver, and TalkBack',
      icon: Monitor,
      examples: ['JAWS', 'NVDA', 'VoiceOver', 'TalkBack']
    },
    {
      name: 'Voice Control',
      description: 'Support for voice recognition software and commands',
      icon: Volume2,
      examples: ['Dragon NaturallySpeaking', 'Windows Speech Recognition', 'Voice Control (macOS)']
    },
    {
      name: 'Switch Devices',
      description: 'Compatible with various switch input devices',
      icon: Mouse,
      examples: ['Single switch', 'Multiple switches', 'Eye tracking devices']
    },
    {
      name: 'Magnification',
      description: 'Works with screen magnification software',
      icon: ZoomIn,
      examples: ['ZoomText', 'Windows Magnifier', 'macOS Zoom']
    }
  ];

  const contactMethods = [
    {
      method: 'Email',
      value: 'accessibility@ziontechgroup.com',
      icon: Mail,
      description: 'Send us detailed accessibility feedback or questions'
    },
    {
      method: 'Phone',
      value: '+1 302 464 0950',
      icon: Phone,
      description: 'Call us for immediate accessibility support'
    },
    {
      method: 'Online Form',
      value: 'Accessibility Feedback Form',
      icon: Globe,
      description: 'Submit accessibility issues through our feedback form'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <SEO
        title="Accessibility - Zion Tech Group"
        description="Zion Tech Group is committed to making our website and services accessible to all users. Learn about our accessibility features and compliance standards."
        keywords="accessibility, WCAG, ADA compliance, screen reader, keyboard navigation, Zion Tech Group"
      />

      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 25% 25%, currentColor 1px, transparent 1px)`,
            backgroundSize: '50px 50px'
          }} />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Accessibility
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              We are committed to making our website and services accessible to all users, 
              regardless of their abilities or the technology they use.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Accessibility Features */}
      <section className="px-4 sm:px-6 lg:px-8 py-16">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-white mb-4">Accessibility Features</h2>
            <p className="text-gray-300 max-w-3xl mx-auto">
              Our website includes comprehensive accessibility features to ensure all users can access our content and services.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {accessibilityFeatures.map((category, index) => (
              <motion.div
                key={category.category}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                className="bg-slate-800/80 backdrop-blur-sm rounded-2xl p-6 border border-slate-600/20"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className={`w-12 h-12 bg-gradient-to-r ${category.color} rounded-xl flex items-center justify-center`}>
                    <category.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white">{category.category}</h3>
                </div>

                <ul className="space-y-3">
                  {category.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Compliance Standards */}
      <section className="px-4 sm:px-6 lg:px-8 py-16">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-white mb-4">Compliance Standards</h2>
            <p className="text-gray-300 max-w-3xl mx-auto">
              We maintain compliance with international accessibility standards to ensure our services are accessible to everyone.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {complianceStandards.map((standard, index) => (
              <motion.div
                key={standard.standard}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                className="bg-slate-800/80 backdrop-blur-sm rounded-2xl p-6 border border-slate-600/20 text-center"
              >
                <div className={`w-12 h-12 bg-green-500/20 rounded-xl flex items-center justify-center mx-auto mb-4`}>
                  <standard.icon className={`w-6 h-6 ${standard.color}`} />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">{standard.standard}</h3>
                <p className="text-gray-300 text-sm mb-3">{standard.description}</p>
                <span className="inline-block px-3 py-1 bg-green-500/20 text-green-400 text-sm font-medium rounded-full">
                  {standard.status}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Assistive Technologies */}
      <section className="px-4 sm:px-6 lg:px-8 py-16">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.0 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-white mb-4">Assistive Technology Support</h2>
            <p className="text-gray-300 max-w-3xl mx-auto">
              Our website is designed to work seamlessly with a wide range of assistive technologies.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {assistiveTechnologies.map((tech, index) => (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.2 + index * 0.1 }}
                className="bg-slate-800/80 backdrop-blur-sm rounded-2xl p-6 border border-slate-600/20"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl flex items-center justify-center">
                    <tech.icon className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-white">{tech.name}</h3>
                </div>
                <p className="text-gray-300 text-sm mb-4">{tech.description}</p>
                <div className="flex flex-wrap gap-2">
                  {tech.examples.map((example, exampleIndex) => (
                    <span
                      key={exampleIndex}
                      className="px-2 py-1 bg-slate-700/50 text-gray-300 text-xs rounded"
                    >
                      {example}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="px-4 sm:px-6 lg:px-8 py-16">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.4 }}
            className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-3xl p-8 text-center"
          >
            <h2 className="text-3xl font-bold text-white mb-4">
              Report Accessibility Issues
            </h2>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
              We are committed to continuous improvement. If you encounter any accessibility issues, 
              please let us know so we can address them promptly.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              {contactMethods.map((method, index) => (
                <div key={method.method} className="flex flex-col items-center gap-3">
                  <method.icon className="w-8 h-8 text-blue-400" />
                  <h3 className="text-white font-semibold">{method.method}</h3>
                  <p className="text-gray-300 text-sm text-center">{method.description}</p>
                  <span className="text-blue-400 font-medium">{method.value}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:accessibility@ziontechgroup.com?subject=Accessibility Feedback"
                className="inline-flex items-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl transition-colors"
              >
                <Mail className="w-5 h-5 mr-2" />
                Send Feedback
              </a>
              <Link
                to="/contact"
                className="inline-flex items-center px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white font-semibold rounded-xl transition-colors"
              >
                <Phone className="w-5 h-5 mr-2" />
                Contact Us
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Commitment Statement */}
      <section className="px-4 sm:px-6 lg:px-8 pb-20">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 1.6 }}
            className="text-center"
          >
            <div className="bg-slate-800/80 backdrop-blur-sm rounded-2xl p-8 border border-slate-600/20">
              <Accessibility className="w-16 h-16 text-blue-400 mx-auto mb-6" />
              <h3 className="text-2xl font-bold text-white mb-4">Our Accessibility Commitment</h3>
              <p className="text-gray-300 leading-relaxed">
                Zion Tech Group is committed to ensuring digital accessibility for people with disabilities. 
                We are continually improving the user experience for everyone and applying the relevant 
                accessibility standards. We believe that technology should be accessible to all users, 
                regardless of their abilities or the assistive technologies they use.
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default AccessibilityPage;
