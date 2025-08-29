import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Accessibility,
  Eye,
  Ear,
  Hand,
  Brain,
  CheckCircle,
  AlertCircle,
  Info,
  Search,
  Filter,
  ChevronRight,
  ChevronDown,
  ExternalLink,
  Download,
  FileText,
  Video,
  BookOpen,
  Users,
  Globe,
  MapPin,
  Calendar,
  User,
  Building,
  Zap,
  Shield,
  Brain as BrainIcon,
  Cloud,
  Lock,
  ArrowRight,
  Settings,
  HelpCircle,
  MessageSquare,
  VideoIcon,
  FileCode,
  Terminal,
  Database,
  Shield as ShieldIcon,
  Rocket,
  Target,
  TrendingUp,
  Award,
  Clock3,
  MessageCircle,
  Phone,
  Mail,
  Star,
  Globe as GlobeIcon,
  Monitor,
  Smartphone,
  Tablet,
  Laptop,
  Headphones,
  Volume2,
  VolumeX,
  Contrast,
  Type,
  MousePointer,
  Keyboard,
  Touchpad,
  Wifi,
  WifiOff,
  Battery,
  BatteryCharging,
  Sun,
  Moon,
  Palette,
  Languages,
  Translate,
  Braille,
  SignLanguage,
  Wheelchair,
  Heart,
  Shield as ShieldIcon2,
  Users as UsersIcon,
  Award as AwardIcon,
  Clock as ClockIcon
} from 'lucide-react';
import { SEO } from '../components/SEO';

export default function Accessibility() {
  const [searchQuery, setSearchQuery] = React.useState('');
  const [selectedCategory, setSelectedCategory] = React.useState('all');
  const [expandedSections, setExpandedSections] = React.useState<string[]>(['features']);

  const accessibilityCategories = [
    { id: 'all', name: 'All Accessibility', count: 24, color: 'from-cyan-500 to-blue-600' },
    { id: 'features', name: 'Accessibility Features', count: 8, color: 'from-green-500 to-emerald-600' },
    { id: 'compliance', name: 'Compliance & Standards', count: 6, color: 'from-blue-500 to-cyan-600' },
    { id: 'tools', name: 'Accessibility Tools', count: 5, color: 'from-purple-500 to-pink-600' },
    { id: 'support', name: 'Support & Resources', count: 5, color: 'from-orange-500 to-red-600' }
  ];

  const accessibilityFeatures = [
    {
      id: 'screen-reader',
      title: 'Screen Reader Support',
      description: 'Full compatibility with popular screen readers including JAWS, NVDA, and VoiceOver',
      icon: Eye,
      color: 'from-blue-500 to-cyan-600',
      featured: true,
      status: 'fully-supported',
      details: [
        'Semantic HTML structure',
        'ARIA labels and landmarks',
        'Keyboard navigation support',
        'Alternative text for images',
        'Form labels and descriptions'
      ]
    },
    {
      id: 'keyboard-navigation',
      title: 'Keyboard Navigation',
      description: 'Complete keyboard accessibility for all interactive elements and navigation',
      icon: Keyboard,
      color: 'from-green-500 to-emerald-600',
      featured: true,
      status: 'fully-supported',
      details: [
        'Tab order management',
        'Skip navigation links',
        'Keyboard shortcuts',
        'Focus indicators',
        'Escape key functionality'
      ]
    },
    {
      id: 'high-contrast',
      title: 'High Contrast Mode',
      description: 'Enhanced contrast options for better visibility and readability',
      icon: Contrast,
      color: 'from-purple-500 to-pink-600',
      featured: false,
      status: 'fully-supported',
      details: [
        'Multiple contrast themes',
        'Customizable color schemes',
        'Dark mode support',
        'High contrast text',
        'Background alternatives'
      ]
    },
    {
      id: 'text-resize',
      title: 'Text Resizing',
      description: 'Flexible text sizing options without breaking layout or functionality',
      icon: Type,
      color: 'from-orange-500 to-red-600',
      featured: false,
      status: 'fully-supported',
      details: [
        'Up to 200% text scaling',
        'Responsive layout adaptation',
        'Line height adjustment',
        'Font family options',
        'Spacing controls'
      ]
    },
    {
      id: 'audio-descriptions',
      title: 'Audio Descriptions',
      description: 'Comprehensive audio descriptions for video content and multimedia',
      icon: Volume2,
      color: 'from-indigo-500 to-purple-600',
      featured: false,
      status: 'partially-supported',
      details: [
        'Video content descriptions',
        'Audio-only alternatives',
        'Transcript availability',
        'Caption synchronization',
        'Volume controls'
      ]
    },
    {
      id: 'mobility-support',
      title: 'Mobility Support',
      description: 'Features designed for users with motor and mobility impairments',
      icon: Wheelchair,
      color: 'from-teal-500 to-cyan-600',
      featured: false,
      status: 'fully-supported',
      details: [
        'Large click targets',
        'Touch-friendly interfaces',
        'Voice command support',
        'Gesture alternatives',
        'Timing adjustments'
      ]
    },
    {
      id: 'cognitive-support',
      title: 'Cognitive Support',
      description: 'Features to assist users with cognitive and learning disabilities',
      icon: Brain,
      color: 'from-yellow-500 to-orange-600',
      featured: false,
      status: 'fully-supported',
      details: [
        'Clear navigation structure',
        'Consistent design patterns',
        'Error prevention',
        'Helpful instructions',
        'Progress indicators'
      ]
    },
    {
      id: 'multilingual',
      title: 'Multilingual Support',
      description: 'Multiple language options with proper localization and cultural adaptation',
      icon: Languages,
      color: 'from-pink-500 to-rose-600',
      featured: false,
      status: 'fully-supported',
      details: [
        '20+ language options',
        'Right-to-left support',
        'Cultural adaptations',
        'Localized content',
        'Translation tools'
      ]
    }
  ];

  const complianceStandards = [
    {
      title: 'WCAG 2.1 AA Compliance',
      description: 'Full compliance with Web Content Accessibility Guidelines 2.1 Level AA',
      status: 'compliant',
      lastAudit: 'Dec 1, 2024',
      nextAudit: 'Jun 1, 2025',
      icon: CheckCircle,
      color: 'from-green-500 to-emerald-600',
      details: [
        'Perceivable: Content is presented in ways users can perceive',
        'Operable: Interface components are operable by all users',
        'Understandable: Information and operation are understandable',
        'Robust: Content can be interpreted by assistive technologies'
      ]
    },
    {
      title: 'Section 508 Compliance',
      description: 'Compliance with Section 508 of the Rehabilitation Act for federal accessibility',
      status: 'compliant',
      lastAudit: 'Nov 15, 2024',
      nextAudit: 'May 15, 2025',
      icon: Shield,
      color: 'from-blue-500 to-cyan-600',
      details: [
        'Electronic and Information Technology accessibility',
        'Federal procurement requirements',
        'Government accessibility standards',
        'Assistive technology compatibility'
      ]
    },
    {
      title: 'ADA Title III Compliance',
      description: 'Compliance with Americans with Disabilities Act for public accommodations',
      status: 'compliant',
      lastAudit: 'Oct 30, 2024',
      nextAudit: 'Apr 30, 2025',
      icon: Building,
      color: 'from-purple-500 to-pink-600',
      details: [
        'Public accommodation requirements',
        'Effective communication standards',
        'Reasonable accommodation policies',
        'Accessibility barrier removal'
      ]
    },
    {
      title: 'EN 301 549 Compliance',
      description: 'European standard for Information and Communication Technology accessibility',
      status: 'compliant',
      lastAudit: 'Nov 1, 2024',
      nextAudit: 'May 1, 2025',
      icon: Globe,
      color: 'from-indigo-500 to-purple-600',
      details: [
        'European accessibility requirements',
        'Public procurement standards',
        'ICT accessibility guidelines',
        'International compliance'
      ]
    }
  ];

  const accessibilityTools = [
    {
      title: 'Accessibility Checker',
      description: 'Built-in tool to identify and fix accessibility issues',
      type: 'tool',
      availability: 'Free',
      icon: Search,
      color: 'from-green-500 to-emerald-600',
      features: [
        'Real-time accessibility scanning',
        'Issue identification and reporting',
        'Fix suggestions and guidance',
        'Compliance checking',
        'Report generation'
      ]
    },
    {
      title: 'Keyboard Navigation Tester',
      description: 'Test and verify keyboard accessibility across all features',
      type: 'tool',
      availability: 'Free',
      icon: Keyboard,
      color: 'from-blue-500 to-cyan-600',
      features: [
        'Tab order verification',
        'Focus management testing',
        'Keyboard shortcut validation',
        'Navigation flow testing',
        'Accessibility reporting'
      ]
    },
    {
      title: 'Color Contrast Analyzer',
      description: 'Analyze and improve color contrast for better visibility',
      type: 'tool',
      availability: 'Free',
      icon: Contrast,
      color: 'from-purple-500 to-pink-600',
      features: [
        'Contrast ratio calculation',
        'Color combination testing',
        'WCAG compliance checking',
        'Accessibility recommendations',
        'Color scheme optimization'
      ]
    },
    {
      title: 'Screen Reader Simulator',
      description: 'Experience your site as screen reader users do',
      type: 'tool',
      availability: 'Free',
      icon: Eye,
      color: 'from-orange-500 to-red-600',
      features: [
        'Screen reader simulation',
        'Audio output testing',
        'Navigation experience testing',
        'Content structure validation',
        'Accessibility improvement tips'
      ]
    },
    {
      title: 'Accessibility Documentation',
      description: 'Comprehensive guides and resources for accessibility',
      type: 'resource',
      availability: 'Free',
      icon: BookOpen,
      color: 'from-indigo-500 to-purple-600',
      features: [
        'Implementation guides',
        'Best practices documentation',
        'Compliance checklists',
        'Testing procedures',
        'Training materials'
      ]
    }
  ];

  const supportResources = [
    {
      title: 'Accessibility Support Team',
      description: 'Dedicated team of accessibility experts ready to help',
      type: 'support',
      availability: '24/7',
      icon: Users,
      color: 'from-green-500 to-emerald-600',
      contact: 'accessibility@ziontechgroup.com',
      responseTime: '< 4 hours'
    },
    {
      title: 'Accessibility Training',
      description: 'Comprehensive training programs for developers and content creators',
      type: 'training',
      availability: 'By appointment',
      icon: BookOpen,
      color: 'from-blue-500 to-cyan-600',
      contact: 'training@ziontechgroup.com',
      responseTime: '< 24 hours'
    },
    {
      title: 'Accessibility Audit Services',
      description: 'Professional accessibility audits and compliance verification',
      type: 'service',
      availability: 'By appointment',
      icon: CheckCircle,
      color: 'from-purple-500 to-pink-600',
      contact: 'audits@ziontechgroup.com',
      responseTime: '< 48 hours'
    },
    {
      title: 'Accessibility Community',
      description: 'Join our community of accessibility advocates and experts',
      type: 'community',
      availability: '24/7',
      icon: Globe,
      color: 'from-orange-500 to-red-600',
      contact: 'community@ziontechgroup.com',
      responseTime: 'Varies'
    },
    {
      title: 'Accessibility Feedback',
      description: 'Submit feedback and suggestions for accessibility improvements',
      type: 'feedback',
      availability: '24/7',
      icon: MessageCircle,
      color: 'from-indigo-500 to-purple-600',
      contact: 'feedback@ziontechgroup.com',
      responseTime: '< 24 hours'
    }
  ];

  const toggleSection = (sectionId: string) => {
    setExpandedSections(prev => 
      prev.includes(sectionId) 
        ? prev.filter(id => id !== sectionId)
        : [...prev, sectionId]
    );
  };

  const getStatusColor = (status: string) => {
    switch (status.toLowerCase()) {
      case 'fully-supported': return 'text-green-400 bg-green-400/10';
      case 'partially-supported': return 'text-yellow-400 bg-yellow-400/10';
      case 'not-supported': return 'text-red-400 bg-red-400/10';
      case 'compliant': return 'text-green-400 bg-green-400/10';
      case 'non-compliant': return 'text-red-400 bg-red-400/10';
      default: return 'text-slate-400 bg-slate-400/10';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status.toLowerCase()) {
      case 'fully-supported':
      case 'compliant':
        return <CheckCircle className="w-4 h-4 text-green-400" />;
      case 'partially-supported':
        return <AlertCircle className="w-4 h-4 text-yellow-400" />;
      case 'not-supported':
      case 'non-compliant':
        return <AlertCircle className="w-4 h-4 text-red-400" />;
      default:
        return <Info className="w-4 h-4 text-slate-400" />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <SEO 
        title="Accessibility - Zion Tech Group"
        description="Zion Tech Group is committed to digital accessibility. Learn about our accessibility features, compliance standards, and support resources."
      />
      
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/20 to-purple-500/20"></div>
        <div className="relative container mx-auto px-4 py-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="flex justify-center mb-6">
              <div className="w-20 h-20 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-2xl flex items-center justify-center">
                <Accessibility className="w-10 h-10 text-white" />
              </div>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Digital
              <span className="block bg-gradient-to-r from-indigo-400 to-purple-500 bg-clip-text text-transparent">
                Accessibility
              </span>
            </h1>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto mb-8">
              Committed to making our digital experiences accessible to everyone. We believe technology should work for all users, regardless of ability.
            </p>
            
            {/* Search Bar */}
            <div className="max-w-2xl mx-auto mb-8">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-6 h-6 text-slate-400" />
                <input
                  type="text"
                  placeholder="Search accessibility features, compliance info, or support resources..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 bg-slate-800/50 border border-slate-600 rounded-xl text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent text-lg"
                />
              </div>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
              <div className="text-center">
                <div className="text-3xl font-bold text-white mb-2">WCAG 2.1 AA</div>
                <div className="text-slate-400 text-sm">Compliance Level</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white mb-2">8+</div>
                <div className="text-slate-400 text-sm">Accessibility Features</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white mb-2">24/7</div>
                <div className="text-slate-400 text-sm">Accessibility Support</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white mb-2">100%</div>
                <div className="text-slate-400 text-sm">Commitment</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="container mx-auto px-4 pb-20">
        {/* Accessibility Features */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-16"
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Accessibility Features</h2>
            <p className="text-slate-400 max-w-3xl mx-auto">
              Comprehensive accessibility features designed to ensure our platform is usable by everyone
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {accessibilityFeatures.map((feature, index) => (
              <div
                key={feature.id}
                className={`bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border transition-all duration-300 hover:transform hover:scale-105 ${
                  feature.featured 
                    ? 'border-indigo-500/50 shadow-lg shadow-indigo-500/20' 
                    : 'border-slate-700 hover:border-slate-600'
                }`}
              >
                {feature.featured && (
                  <div className="flex items-center gap-2 mb-4">
                    <Star className="w-4 h-4 text-yellow-400 fill-current" />
                    <span className="text-yellow-400 text-sm font-medium">Featured Feature</span>
                  </div>
                )}
                
                <div className="flex items-center gap-3 mb-4">
                  <div className={`w-12 h-12 bg-gradient-to-br ${feature.color} rounded-xl flex items-center justify-center`}>
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white">{feature.title}</h3>
                    <p className="text-slate-400 text-sm">{feature.description}</p>
                  </div>
                </div>
                
                <div className="mb-4">
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(feature.status)}`}>
                    {feature.status.replace('-', ' ')}
                  </span>
                </div>
                
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-white mb-2">Key Features:</h4>
                  <ul className="space-y-1">
                    {feature.details.map((detail, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-xs text-slate-400">
                        <CheckCircle className="w-3 h-3 text-green-400" />
                        {detail}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <button className="w-full py-2 px-4 bg-slate-700 text-white rounded-lg hover:bg-slate-600 transition-colors text-sm font-medium">
                  Learn More
                </button>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Compliance Standards */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mb-16"
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Compliance & Standards</h2>
            <p className="text-slate-400 max-w-3xl mx-auto">
              We maintain the highest standards of accessibility compliance across all our digital platforms
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {complianceStandards.map((standard, index) => (
              <div
                key={index}
                className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-slate-700 hover:border-slate-600 transition-all duration-300"
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className={`w-12 h-12 bg-gradient-to-br ${standard.color} rounded-xl flex items-center justify-center flex-shrink-0`}>
                    <standard.icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-white mb-2">{standard.title}</h3>
                    <p className="text-slate-400 text-sm mb-3">{standard.description}</p>
                    
                    <div className="flex items-center gap-3 mb-3">
                      {getStatusIcon(standard.status)}
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(standard.status)}`}>
                        {standard.status}
                      </span>
                    </div>
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-4 mb-4 text-sm text-slate-400">
                  <div>
                    <span className="block text-xs text-slate-500">Last Audit</span>
                    {standard.lastAudit}
                  </div>
                  <div>
                    <span className="block text-xs text-slate-500">Next Audit</span>
                    {standard.nextAudit}
                  </div>
                </div>
                
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-white mb-2">Compliance Areas:</h4>
                  <ul className="space-y-1">
                    {standard.details.map((detail, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-xs text-slate-400">
                        <CheckCircle className="w-3 h-3 text-green-400" />
                        {detail}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <button className="w-full py-2 px-4 bg-slate-700 text-white rounded-lg hover:bg-slate-600 transition-colors text-sm font-medium">
                  View Compliance Report
                </button>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Accessibility Tools */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mb-16"
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Accessibility Tools</h2>
            <p className="text-slate-400 max-w-3xl mx-auto">
              Free tools and resources to help you test and improve accessibility
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {accessibilityTools.map((tool, index) => (
              <div
                key={index}
                className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-slate-700 hover:border-slate-600 transition-all duration-300"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className={`w-12 h-12 bg-gradient-to-br ${tool.color} rounded-xl flex items-center justify-center`}>
                    <tool.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white">{tool.title}</h3>
                    <p className="text-slate-400 text-sm">{tool.description}</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-3 mb-4 text-sm">
                  <span className="px-2 py-1 bg-slate-700 text-slate-300 rounded-full">
                    {tool.type}
                  </span>
                  <span className="text-green-400">{tool.availability}</span>
                </div>
                
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-white mb-2">Features:</h4>
                  <ul className="space-y-1">
                    {tool.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-xs text-slate-400">
                        <CheckCircle className="w-3 h-3 text-green-400" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <button className="w-full py-2 px-4 bg-slate-700 text-white rounded-lg hover:bg-slate-600 transition-colors text-sm font-medium">
                  Access Tool
                </button>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Support & Resources */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mb-16"
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Support & Resources</h2>
            <p className="text-slate-400 max-w-3xl mx-auto">
              Get help, training, and resources to ensure your digital experiences are accessible
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {supportResources.map((resource, index) => (
              <div
                key={index}
                className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-slate-700 hover:border-slate-600 transition-all duration-300"
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className={`w-12 h-12 bg-gradient-to-br ${resource.color} rounded-xl flex items-center justify-center flex-shrink-0`}>
                    <resource.icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-white mb-2">{resource.title}</h3>
                    <p className="text-slate-400 text-sm mb-3">{resource.description}</p>
                    
                    <div className="grid grid-cols-2 gap-4 mb-3 text-sm text-slate-400">
                      <div>
                        <span className="block text-xs text-slate-500">Type</span>
                        {resource.type}
                      </div>
                      <div>
                        <span className="block text-xs text-slate-500">Availability</span>
                        {resource.availability}
                      </div>
                      <div>
                        <span className="block text-xs text-slate-500">Contact</span>
                        {resource.contact}
                      </div>
                      <div>
                        <span className="block text-xs text-slate-500">Response Time</span>
                        {resource.responseTime}
                      </div>
                    </div>
                  </div>
                </div>
                
                <button className="w-full py-2 px-4 bg-slate-700 text-white rounded-lg hover:bg-slate-600 transition-colors text-sm font-medium">
                  Contact Support
                </button>
              </div>
            ))}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.0 }}
          className="bg-gradient-to-r from-indigo-500/20 to-purple-500/20 backdrop-blur-sm rounded-2xl p-12 border border-indigo-500/30 text-center"
        >
          <h2 className="text-4xl font-bold text-white mb-6">Need Accessibility Help?</h2>
          <p className="text-xl text-slate-300 mb-8 max-w-3xl mx-auto">
            Our accessibility team is here to help you create inclusive digital experiences
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <button className="px-8 py-4 bg-gradient-to-r from-indigo-500 to-purple-500 text-white rounded-lg font-semibold hover:from-indigo-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105">
              Contact Accessibility Team
            </button>
            <button className="px-8 py-4 border-2 border-indigo-500 text-indigo-400 rounded-lg font-semibold hover:bg-indigo-500 hover:text-white transition-all duration-300">
              Request Accessibility Audit
            </button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="w-12 h-12 bg-indigo-500/20 rounded-xl flex items-center justify-center mx-auto mb-3">
                <Users className="w-6 h-6 text-indigo-400" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Expert Team</h3>
              <p className="text-slate-400 text-sm">Accessibility specialists ready to help</p>
            </div>
            
            <div className="text-center">
              <div className="w-12 h-12 bg-purple-500/20 rounded-xl flex items-center justify-center mx-auto mb-3">
                <BookOpen className="w-6 h-6 text-purple-400" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Training & Resources</h3>
              <p className="text-slate-400 text-sm">Comprehensive accessibility education</p>
            </div>
            
            <div className="text-center">
              <div className="w-12 h-12 bg-blue-500/20 rounded-xl flex items-center justify-center mx-auto mb-3">
                <CheckCircle className="w-6 h-6 text-blue-400" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Compliance Support</h3>
              <p className="text-slate-400 text-sm">Meet accessibility standards</p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}