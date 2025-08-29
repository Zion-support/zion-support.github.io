import React from 'react';
import { SEO } from '../components/SEO';
import { motion } from 'framer-motion';
import { 
  Accessibility, 
  Eye, 
  Ear, 
  Hand, 
  Brain, 
  CheckCircle,
  ArrowRight,
  ExternalLink,
  Download,
  Play,
  Pause,
  SkipBack,
  SkipForward,
  Volume2,
  VolumeX,
  Maximize,
  Minimize,
  RotateCcw,
  RotateCw,
  ZoomIn,
  ZoomOut,
  Move,
  Crop,
  Scissors,
  Type,
  Bold,
  Italic,
  Underline,
  Strikethrough,
  AlignLeft,
  AlignCenter,
  AlignRight,
  AlignJustify,
  List,
  ListOrdered,
  Quote,
  Code2,
  Link2,
  Image,
  File,
  Folder,
  FolderOpen,
  FolderPlus,
  FolderMinus,
  FilePlus,
  FileMinus,
  FileEdit,
  FileX,
  FileCheck,
  FileSearch,
  FileText2,
  FileCode,
  FileImage,
  FileVideo,
  FileAudio,
  FileArchive,
  FilePdf,
  FileWord,
  FileExcel,
  FilePowerpoint,
  Calendar,
  MapPin,
  Globe,
  Mail,
  Phone,
  Building,
  Heart,
  Sparkles,
  Infinity,
  Layers,
  GitBranch,
  Workflow,
  Command,
  Terminal,
  Wifi,
  Bluetooth,
  Satellite,
  Radio,
  Signal,
  DollarSign,
  Factory,
  ShoppingCart,
  Truck,
  Robot,
  Lightbulb,
  Code,
  Palette,
  MessageSquare,
  BarChart3,
  Settings,
  HelpCircle,
  Brain,
  Cloud,
  Shield,
  Server,
  Database,
  Zap,
  Target,
  TrendingUp,
  Monitor,
  Smartphone,
  Laptop,
  Fingerprint,
  Key,
  Rocket,
  Award,
  Trophy,
  Medal,
  Certificate,
  Badge,
  Ribbon,
  Crown,
  Gem,
  Diamond,
  Ruby,
  Emerald,
  Sapphire,
  Amethyst,
  Topaz,
  Opal,
  Pearl,
  Jade,
  Onyx,
  Quartz,
  Marble,
  Granite,
  Limestone,
  Sandstone,
  Shale,
  Clay,
  Silt,
  Loam,
  Peat,
  Chalk,
  Gypsum,
  Halite,
  Calcite,
  Dolomite,
  Feldspar,
  Mica,
  Hornblende,
  Pyroxene,
  Olivine,
  Garnet,
  Staurolite,
  Kyanite,
  Sillimanite,
  Andalusite,
  Chiastolite,
  Cordierite,
  Tourmaline,
  Beryl,
  Spinel,
  Corundum,
  Zircon,
  Rutile,
  Brookite,
  Anatase,
  Perovskite,
  Ilmenite,
  Magnetite,
  Hematite,
  Goethite,
  Limonite,
  Siderite,
  Pyrite,
  Marcasite,
  Chalcopyrite,
  Bornite,
  Covellite,
  Chalcocite,
  Galena,
  Sphalerite,
  Cinnabar,
  Realgar,
  Orpiment,
  Stibnite,
  Bismuthinite,
  Molybdenite,
  Wolframite,
  Scheelite,
  Cassiterite,
  Columbite,
  Tantalite,
  Uraninite,
  Pitchblende,
  Carnotite,
  Autunite,
  Torbernite,
  Zeunerite,
  Rocket
} from 'lucide-react';

const accessibilityFeatures = [
  {
    title: 'Visual Accessibility',
    description: 'Features designed for users with visual impairments',
    icon: Eye,
    color: 'from-blue-400 to-cyan-500',
    features: [
      'High contrast mode',
      'Adjustable font sizes',
      'Screen reader compatibility',
      'Alternative text for images',
      'Keyboard navigation support',
      'Focus indicators'
    ]
  },
  {
    title: 'Auditory Accessibility',
    description: 'Features designed for users with hearing impairments',
    icon: Ear,
    color: 'from-green-400 to-emerald-500',
    features: [
      'Closed captions for videos',
      'Transcripts for audio content',
      'Visual alerts and notifications',
      'Volume controls',
      'Audio descriptions',
      'Sign language support'
    ]
  },
  {
    title: 'Motor Accessibility',
    description: 'Features designed for users with motor impairments',
    icon: Hand,
    color: 'from-purple-400 to-pink-500',
    features: [
      'Voice control support',
      'Large click targets',
      'Keyboard shortcuts',
      'Mouse alternatives',
      'Touch-friendly interfaces',
      'Gesture recognition'
    ]
  },
  {
    title: 'Cognitive Accessibility',
    description: 'Features designed for users with cognitive impairments',
    icon: Brain,
    color: 'from-orange-400 to-red-500',
    features: [
      'Clear and simple language',
      'Consistent navigation',
      'Error prevention',
      'Help and guidance',
      'Reduced distractions',
      'Logical content flow'
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
    description: 'European standard for accessibility requirements for ICT products and services',
    status: 'Fully Compliant',
    icon: CheckCircle,
    color: 'text-green-400'
  }
];

const accessibilityTools = [
  {
    title: 'Screen Reader Testing',
    description: 'Comprehensive testing with leading screen readers',
    tools: ['NVDA', 'JAWS', 'VoiceOver', 'TalkBack', 'Narrator'],
    icon: Eye,
    color: 'from-blue-400 to-cyan-500'
  },
  {
    title: 'Keyboard Navigation',
    description: 'Full keyboard accessibility testing',
    tools: ['Tab navigation', 'Arrow keys', 'Enter/Space', 'Escape', 'Function keys'],
    icon: Hand,
    color: 'from-green-400 to-emerald-500'
  },
  {
    title: 'Color Contrast',
    description: 'Color contrast ratio analysis',
    tools: ['WCAG AA compliance', 'High contrast mode', 'Color blindness support'],
    icon: Palette,
    color: 'from-purple-400 to-pink-500'
  },
  {
    title: 'Mobile Accessibility',
    description: 'Mobile device accessibility testing',
    tools: ['Touch targets', 'Gesture support', 'Voice control', 'Screen readers'],
    icon: Smartphone,
    color: 'from-orange-400 to-red-500'
  }
];

const accessibilityCommitments = [
  {
    title: 'Continuous Improvement',
    description: 'We regularly review and enhance our accessibility features based on user feedback and emerging standards.',
    icon: TrendingUp,
    color: 'from-blue-400 to-cyan-500'
  },
  {
    title: 'User Testing',
    description: 'We conduct regular accessibility testing with users who have disabilities to ensure our solutions meet real needs.',
    icon: Users,
    color: 'from-green-400 to-emerald-500'
  },
  {
    title: 'Training & Awareness',
    description: 'Our development team receives regular training on accessibility best practices and inclusive design principles.',
    icon: BookOpen,
    color: 'from-purple-400 to-pink-500'
  },
  {
    title: 'Standards Compliance',
    description: 'We maintain compliance with international accessibility standards and regularly audit our compliance status.',
    icon: Shield,
    color: 'from-orange-400 to-red-500'
  }
];

export default function Accessibility() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <SEO 
        title="Accessibility - Zion Tech Group"
        description="Zion Tech Group is committed to digital accessibility. Learn about our accessibility features, compliance standards, and commitment to inclusive design."
      />
      
      {/* Hero Section */}
      <section className="relative py-20 px-4">
        <div className="container mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <div className="w-20 h-20 bg-gradient-to-r from-green-400 to-emerald-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Accessibility className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-green-400 via-emerald-500 to-teal-600 bg-clip-text text-transparent">
              Accessibility
            </h1>
            <p className="text-xl md:text-2xl text-slate-300 mb-8 max-w-4xl mx-auto">
              We believe technology should be accessible to everyone. Zion Tech Group is committed to 
              creating inclusive digital experiences that work for users of all abilities.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#features"
                className="px-8 py-4 bg-gradient-to-r from-green-400 to-emerald-500 text-white font-semibold rounded-xl hover:from-green-500 hover:to-emerald-600 transition-all duration-300 shadow-lg shadow-green-400/25"
              >
                Explore Features
              </a>
              <a
                href="#compliance"
                className="px-8 py-4 border-2 border-green-400 text-green-400 font-semibold rounded-xl hover:bg-green-400 hover:text-slate-900 transition-colors duration-300"
              >
                View Compliance
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Accessibility Features */}
      <section id="features" className="px-4 mb-20">
        <div className="container mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Accessibility Features
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Comprehensive accessibility features designed to meet diverse user needs
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {accessibilityFeatures.map((category, index) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                className="bg-slate-800/50 rounded-xl p-6 border border-slate-700/50 hover:border-green-400/50 transition-all duration-300 group"
              >
                <div className={`w-16 h-16 bg-gradient-to-br ${category.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <category.icon className="w-8 h-8 text-white" />
                </div>
                
                <h4 className="text-xl font-semibold text-white mb-3">{category.title}</h4>
                <p className="text-slate-300 mb-4">{category.description}</p>
                
                <div className="space-y-2">
                  {category.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center text-sm text-slate-300">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-3 flex-shrink-0" />
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
      <section id="compliance" className="px-4 mb-20">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Compliance Standards
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              We maintain compliance with international accessibility standards and regulations
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {complianceStandards.map((standard, index) => (
              <motion.div
                key={standard.standard}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                className="bg-slate-800/50 rounded-xl p-6 border border-slate-700/50 hover:border-green-400/50 transition-all duration-300"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <h4 className="text-lg font-semibold text-white mb-2">{standard.standard}</h4>
                    <p className="text-slate-300 text-sm mb-3">{standard.description}</p>
                  </div>
                  <div className={`flex items-center ${standard.color}`}>
                    <standard.icon className="w-6 h-6 mr-2" />
                    <span className="text-sm font-medium">{standard.status}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Accessibility Tools */}
      <section className="px-4 mb-20">
        <div className="container mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.0 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Testing & Tools
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Comprehensive testing and validation tools ensure our accessibility standards
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {accessibilityTools.map((tool, index) => (
              <motion.div
                key={tool.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.2 + index * 0.1 }}
                className="bg-slate-800/50 rounded-xl p-6 border border-slate-700/50 hover:border-green-400/50 transition-all duration-300 group"
              >
                <div className={`w-16 h-16 bg-gradient-to-br ${tool.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <tool.icon className="w-8 h-8 text-white" />
                </div>
                
                <h4 className="text-xl font-semibold text-white mb-3">{tool.title}</h4>
                <p className="text-slate-300 mb-4">{tool.description}</p>
                
                <div className="space-y-2">
                  {tool.tools.map((toolName, toolIndex) => (
                    <div key={toolIndex} className="flex items-center text-sm text-slate-300">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-3 flex-shrink-0" />
                      {toolName}
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Commitments */}
      <section className="px-4 mb-20">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.4 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Our Commitments
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              We are committed to maintaining and improving accessibility across all our digital products
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {accessibilityCommitments.map((commitment, index) => (
              <motion.div
                key={commitment.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.6 + index * 0.1 }}
                className="bg-slate-800/50 rounded-xl p-6 border border-slate-700/50 hover:border-green-400/50 transition-all duration-300 group"
              >
                <div className={`w-16 h-16 bg-gradient-to-br ${commitment.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <commitment.icon className="w-8 h-8 text-white" />
                </div>
                
                <h4 className="text-xl font-semibold text-white mb-3">{commitment.title}</h4>
                <p className="text-slate-300">{commitment.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Accessibility Statement */}
      <section className="px-4 mb-20">
        <div className="container mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.8 }}
            className="bg-gradient-to-r from-slate-800/80 to-slate-700/80 rounded-2xl p-8 md:p-12 border border-slate-600/50"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 text-center">
              Accessibility Statement
            </h2>
            
            <div className="space-y-4 text-slate-300">
              <p>
                Zion Tech Group is committed to ensuring digital accessibility for people with disabilities. 
                We are continually improving the user experience for everyone and applying the relevant 
                accessibility standards.
              </p>
              
              <p>
                Our commitment to accessibility reflects our belief that technology should be inclusive 
                and usable by people of all abilities. We strive to meet or exceed the Web Content 
                Accessibility Guidelines (WCAG) 2.1 Level AA standards.
              </p>
              
              <p>
                We welcome your feedback on the accessibility of our digital products. If you experience 
                accessibility barriers or have suggestions for improvement, please contact our accessibility 
                team.
              </p>
            </div>
            
            <div className="mt-8 text-center">
              <p className="text-sm text-slate-400 mb-4">
                Last updated: {new Date().toLocaleDateString('en-US', { 
                  year: 'numeric', 
                  month: 'long', 
                  day: 'numeric' 
                })}
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact & Feedback */}
      <section className="px-4 mb-20">
        <div className="container mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 2.0 }}
            className="bg-gradient-to-r from-slate-800/80 to-slate-700/80 rounded-2xl p-8 md:p-12 border border-slate-600/50 text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Help Us Improve
            </h2>
            <p className="text-xl text-slate-300 mb-8">
              Your feedback helps us make our digital products more accessible for everyone.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:accessibility@ziontechgroup.com"
                className="px-8 py-4 bg-gradient-to-r from-green-400 to-emerald-500 text-white font-semibold rounded-xl hover:from-green-500 hover:to-emerald-600 transition-all duration-300 shadow-lg shadow-green-400/25"
              >
                Contact Accessibility Team
              </a>
              <a
                href="/contact"
                className="px-8 py-4 border-2 border-green-400 text-green-400 font-semibold rounded-xl hover:bg-green-400 hover:text-slate-900 transition-colors duration-300"
              >
                General Contact
              </a>
            </div>
            
            <div className="mt-8 text-sm text-slate-400">
              <p>For accessibility-related inquiries:</p>
              <p className="text-green-400 font-medium">accessibility@ziontechgroup.com</p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}