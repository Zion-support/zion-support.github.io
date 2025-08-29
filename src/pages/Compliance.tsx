import React from 'react';
import { Link } from 'react-router-dom';
import { SEO } from '../components/SEO';
import { motion } from 'framer-motion';
import { 
  Shield, 
  CheckCircle, 
  FileText, 
  Award, 
  Users, 
  Globe,
  Lock,
  Eye,
  Fingerprint,
  Key,
  Server,
  Network,
  Database,
  Cloud,
  Zap,
  AlertTriangle,
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
  Target,
  TrendingUp,
  Monitor,
  Smartphone,
  Laptop,
  Rocket,
  Award as AwardIcon,
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

const complianceStandards = [
  {
    title: 'SOC 2 Type II',
    description: 'Service Organization Control 2 compliance for security, availability, and confidentiality',
    icon: Shield,
    color: 'from-blue-400 to-cyan-500',
    status: 'Certified',
    scope: 'Security, Availability, Confidentiality',
    frequency: 'Annual',
    benefits: [
      'Customer trust and confidence',
      'Competitive advantage',
      'Risk mitigation',
      'Operational excellence'
    ]
  },
  {
    title: 'ISO 27001',
    description: 'International standard for information security management systems',
    icon: Lock,
    color: 'from-green-400 to-emerald-500',
    status: 'Certified',
    scope: 'Information Security Management',
    frequency: 'Annual',
    benefits: [
      'Global recognition',
      'Systematic security approach',
      'Continuous improvement',
      'Regulatory compliance'
    ]
  },
  {
    title: 'GDPR',
    description: 'General Data Protection Regulation compliance for EU data protection',
    icon: Globe,
    color: 'from-purple-400 to-pink-500',
    status: 'Compliant',
    scope: 'Data Protection & Privacy',
    frequency: 'Continuous',
    benefits: [
      'EU market access',
      'Customer privacy protection',
      'Data governance',
      'Legal compliance'
    ]
  },
  {
    title: 'HIPAA',
    description: 'Health Insurance Portability and Accountability Act compliance',
    icon: Users,
    color: 'from-orange-400 to-red-500',
    status: 'Compliant',
    scope: 'Healthcare Data Protection',
    frequency: 'Continuous',
    benefits: [
      'Healthcare industry access',
      'Patient data protection',
      'Regulatory compliance',
      'Risk management'
    ]
  }
];

const complianceServices = [
  {
    title: 'Compliance Assessment',
    description: 'Comprehensive evaluation of your current compliance status',
    icon: FileText,
    color: 'from-blue-400 to-cyan-500',
    services: [
      'Gap analysis',
      'Risk assessment',
      'Compliance roadmap',
      'Policy review',
      'Process evaluation',
      'Documentation audit'
    ]
  },
  {
    title: 'Implementation Support',
    description: 'Expert guidance on implementing compliance requirements',
    icon: CheckCircle,
    color: 'from-green-400 to-emerald-500',
    services: [
      'Policy development',
      'Process design',
      'Training programs',
      'Technology implementation',
      'Change management',
      'Ongoing support'
    ]
  },
  {
    title: 'Audit & Certification',
    description: 'Support through the audit and certification process',
    icon: Award,
    color: 'from-purple-400 to-pink-500',
    services: [
      'Audit preparation',
      'Documentation support',
      'Audit coordination',
      'Remediation guidance',
      'Certification support',
      'Maintenance planning'
    ]
  },
  {
    title: 'Ongoing Compliance',
    description: 'Continuous monitoring and maintenance of compliance',
    icon: Monitor,
    color: 'from-orange-400 to-red-500',
    services: [
      'Regular assessments',
      'Policy updates',
      'Training refreshers',
      'Incident response',
      'Performance monitoring',
      'Annual reviews'
    ]
  }
];

const complianceIndustries = [
  {
    title: 'Healthcare',
    description: 'HIPAA, HITECH, and healthcare-specific compliance',
    icon: Users,
    color: 'from-blue-400 to-cyan-500',
    standards: ['HIPAA', 'HITECH', 'HITRUST', 'PCI DSS'],
    challenges: ['Patient data protection', 'Interoperability', 'Telehealth compliance']
  },
  {
    title: 'Financial Services',
    description: 'Financial industry regulations and compliance',
    icon: DollarSign,
    color: 'from-green-400 to-emerald-500',
    standards: ['SOX', 'GLBA', 'PCI DSS', 'FFIEC'],
    challenges: ['Data security', 'Transaction monitoring', 'Regulatory reporting']
  },
  {
    title: 'Technology',
    description: 'Tech industry compliance and security standards',
    icon: Code,
    color: 'from-purple-400 to-pink-500',
    standards: ['SOC 2', 'ISO 27001', 'GDPR', 'CCPA'],
    challenges: ['Data privacy', 'Cloud security', 'API compliance']
  },
  {
    title: 'Manufacturing',
    description: 'Industrial and manufacturing compliance',
    icon: Factory,
    color: 'from-orange-400 to-red-500',
    standards: ['ISO 27001', 'NIST', 'Industry 4.0', 'Cybersecurity'],
    challenges: ['OT security', 'Supply chain', 'IoT compliance']
  }
];

const complianceMetrics = [
  {
    metric: '100%',
    label: 'Compliance Rate',
    description: 'Maintained across all standards'
  },
  {
    metric: '24/7',
    label: 'Monitoring',
    description: 'Continuous compliance oversight'
  },
  {
    metric: '< 30 days',
    label: 'Remediation',
    description: 'Average time to fix issues'
  },
  {
    metric: '0',
    label: 'Compliance Violations',
    description: 'No major violations reported'
  }
];

export default function Compliance() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <SEO 
        title="Compliance - Zion Tech Group"
        description="Expert compliance services and solutions. Achieve and maintain compliance with SOC 2, ISO 27001, GDPR, HIPAA, and other industry standards."
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
            <div className="w-20 h-20 bg-gradient-to-r from-emerald-400 to-teal-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Shield className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-emerald-400 via-teal-500 to-cyan-600 bg-clip-text text-transparent">
              Compliance Excellence
            </h1>
            <p className="text-xl md:text-2xl text-slate-300 mb-8 max-w-4xl mx-auto">
              Achieve and maintain compliance with industry standards and regulations. 
              Expert guidance for SOC 2, ISO 27001, GDPR, HIPAA, and more.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="px-8 py-4 bg-gradient-to-r from-emerald-400 to-teal-500 text-white font-semibold rounded-xl hover:from-emerald-500 hover:to-teal-600 transition-all duration-300 shadow-lg shadow-emerald-400/25"
              >
                Get Compliance Assessment
              </Link>
              <Link
                to="/services/compliance"
                className="px-8 py-4 border-2 border-emerald-400 text-emerald-400 font-semibold rounded-xl hover:bg-emerald-400 hover:text-slate-900 transition-colors duration-300"
              >
                View Services
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Compliance Stats */}
      <section className="px-4 mb-20">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Compliance Excellence
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Our proven track record in achieving and maintaining compliance
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {complianceMetrics.map((metric, index) => (
              <motion.div
                key={metric.metric}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                className="bg-slate-800/50 rounded-xl p-6 border border-slate-700/50 text-center"
              >
                <div className="text-3xl md:text-4xl font-bold text-emerald-400 mb-2">
                  {metric.metric}
                </div>
                <div className="text-white font-semibold mb-2">{metric.label}</div>
                <p className="text-slate-400 text-sm">{metric.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Compliance Standards */}
      <section className="px-4 mb-20">
        <div className="container mx-auto max-w-7xl">
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
              Comprehensive compliance with industry-leading standards and regulations
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {complianceStandards.map((standard, index) => (
              <motion.div
                key={standard.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                className="bg-slate-800/50 rounded-xl p-6 border border-slate-700/50 hover:border-emerald-400/50 transition-all duration-300 group"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className={`w-16 h-16 bg-gradient-to-br ${standard.color} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                    <standard.icon className="w-8 h-8 text-white" />
                  </div>
                  <span className="px-3 py-1 bg-emerald-400/10 text-emerald-400 text-sm rounded-full font-medium">
                    {standard.status}
                  </span>
                </div>
                
                <h4 className="text-xl font-semibold text-white mb-3">{standard.title}</h4>
                <p className="text-slate-300 mb-4">{standard.description}</p>
                
                <div className="space-y-3 mb-4">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-slate-400">Scope:</span>
                    <span className="text-white">{standard.scope}</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-slate-400">Frequency:</span>
                    <span className="text-white">{standard.frequency}</span>
                  </div>
                </div>
                
                <div>
                  <h5 className="text-emerald-400 font-medium mb-2 text-sm">Benefits:</h5>
                  <div className="space-y-1">
                    {standard.benefits.map((benefit, benefitIndex) => (
                      <div key={benefitIndex} className="flex items-center text-xs text-slate-300">
                        <CheckCircle className="w-3 h-3 text-emerald-400 mr-2" />
                        {benefit}
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Compliance Services */}
      <section className="px-4 mb-20">
        <div className="container mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.0 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Compliance Services
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              End-to-end compliance services to help you achieve and maintain standards
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {complianceServices.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.2 + index * 0.1 }}
                className="bg-slate-800/50 rounded-xl p-6 border border-slate-700/50 hover:border-emerald-400/50 transition-all duration-300 group"
              >
                <div className={`w-16 h-16 bg-gradient-to-br ${service.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                
                <h4 className="text-xl font-semibold text-white mb-3">{service.title}</h4>
                <p className="text-slate-300 mb-4">{service.description}</p>
                
                <div className="space-y-2">
                  {service.services.map((serv, servIndex) => (
                    <div key={servIndex} className="flex items-center text-sm text-slate-300">
                      <CheckCircle className="w-4 h-4 text-emerald-400 mr-3 flex-shrink-0" />
                      {serv}
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Industry Compliance */}
      <section className="px-4 mb-20">
        <div className="container mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.4 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Industry Compliance
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Specialized compliance solutions for different industries and sectors
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {complianceIndustries.map((industry, index) => (
              <motion.div
                key={industry.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.6 + index * 0.1 }}
                className="bg-slate-800/50 rounded-xl p-6 border border-slate-700/50 hover:border-emerald-400/50 transition-all duration-300 group"
              >
                <div className={`w-16 h-16 bg-gradient-to-br ${industry.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <industry.icon className="w-8 h-8 text-white" />
                </div>
                
                <h4 className="text-xl font-semibold text-white mb-3">{industry.title}</h4>
                <p className="text-slate-300 mb-4">{industry.description}</p>
                
                <div className="mb-4">
                  <h5 className="text-emerald-400 font-medium mb-2 text-sm">Standards:</h5>
                  <div className="flex flex-wrap gap-2">
                    {industry.standards.map((standard, standardIndex) => (
                      <span key={standardIndex} className="px-2 py-1 bg-slate-700/50 text-slate-300 text-xs rounded">
                        {standard}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div>
                  <h5 className="text-emerald-400 font-medium mb-2 text-sm">Challenges:</h5>
                  <div className="space-y-1">
                    {industry.challenges.map((challenge, challengeIndex) => (
                      <div key={challengeIndex} className="flex items-center text-xs text-slate-300">
                        <AlertTriangle className="w-3 h-3 text-amber-400 mr-2" />
                        {challenge}
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Compliance Process */}
      <section className="px-4 mb-20">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Our Compliance Process
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Systematic approach to achieving and maintaining compliance
            </p>
          </motion.div>

          <div className="bg-slate-800/50 rounded-2xl p-8 border border-slate-700/50">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 2.0 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-cyan-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <FileText className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-lg font-semibold text-white mb-2">1. Assessment</h4>
                <p className="text-slate-300 text-sm">
                  Evaluate current compliance status and identify gaps
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 2.2 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-green-400 to-emerald-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-lg font-semibold text-white mb-2">2. Implementation</h4>
                <p className="text-slate-300 text-sm">
                  Implement required policies, processes, and controls
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 2.4 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-purple-400 to-pink-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Award className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-lg font-semibold text-white mb-2">3. Certification</h4>
                <p className="text-slate-300 text-sm">
                  Achieve certification through audit and validation
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 2.6 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-orange-400 to-red-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Monitor className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-lg font-semibold text-white mb-2">4. Maintenance</h4>
                <p className="text-slate-300 text-sm">
                  Ongoing monitoring and continuous improvement
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-4 mb-20">
        <div className="container mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 2.8 }}
            className="bg-gradient-to-r from-slate-800/80 to-slate-700/80 rounded-2xl p-8 md:p-12 border border-slate-600/50 text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Achieve Compliance?
            </h2>
            <p className="text-xl text-slate-300 mb-8">
              Get expert guidance on achieving and maintaining compliance with industry standards.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="px-8 py-4 bg-gradient-to-r from-emerald-400 to-teal-500 text-white font-semibold rounded-xl hover:from-emerald-500 hover:to-teal-600 transition-all duration-300 shadow-lg shadow-emerald-400/25"
              >
                Get Compliance Assessment
              </Link>
              <Link
                to="/services/compliance"
                className="px-8 py-4 border-2 border-emerald-400 text-emerald-400 font-semibold rounded-xl hover:bg-emerald-400 hover:text-slate-900 transition-colors duration-300"
              >
                Learn More
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}