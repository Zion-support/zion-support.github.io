import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Shield, 
  Lock, 
  Eye, 
  Database, 
  Users, 
  Globe, 
  CheckCircle,
  AlertTriangle,
  FileText,
  Mail,
  Phone,
  MapPin,
  Calendar,
  Clock,
  Settings,
  Download,
  ExternalLink,
  ChevronDown,
  ChevronUp,
  Search,
  Filter,
  BookOpen,
  MessageSquare,
  ArrowRight,
  Sparkles,
  Cpu,
  Wifi,
  Bot,
  Workflow,
  Heart,
  Leaf,
  Award,
  Star,
  TrendingUp,
  Zap,
  Brain,
  Cloud,
  BarChart3,
  Code,
  Server,
  Chip,
  ShieldCheck,
  Bot as BotIcon,
  Workflow as WorkflowIcon,
  Eye as EyeIcon,
  Sparkles as SparklesIcon,
  Trash2,
  Pause
} from 'lucide-react';
import { SEO } from '../components/SEO';

export default function Privacy() {
  const [openSections, setOpenSections] = useState<string[]>([]);
  const [searchQuery, setSearchQuery] = useState('');

  const toggleSection = (sectionId: string) => {
    setOpenSections(prev => 
      prev.includes(sectionId) 
        ? prev.filter(id => id !== sectionId)
        : [...prev, sectionId]
    );
  };

  const privacyPrinciples = [
    {
      icon: Shield,
      title: 'Data Protection',
      description: 'We implement industry-standard security measures to protect your personal information.',
      details: 'Our security protocols include encryption, access controls, and regular security audits to ensure your data remains protected at all times.'
    },
    {
      icon: Lock,
      title: 'Privacy by Design',
      description: 'Privacy considerations are built into every aspect of our services and systems.',
      details: 'From the initial design phase to ongoing development, we prioritize privacy and data protection in all our solutions.'
    },
    {
      icon: Eye,
      title: 'Transparency',
      description: 'We are clear about what data we collect, how we use it, and your rights.',
      details: 'We provide clear, understandable information about our data practices and maintain open communication about privacy matters.'
    },
    {
      icon: Users,
      title: 'User Control',
      description: 'You have full control over your personal data and can manage it at any time.',
      details: 'Our user portal provides easy access to view, modify, or delete your personal information as needed.'
    }
  ];

  const dataCategories = [
    {
      title: 'Personal Information',
      description: 'Name, email address, phone number, and company information',
      examples: ['Contact details', 'Account information', 'Business details', 'Professional credentials'],
      retention: '7 years',
      purpose: 'Service delivery and account management'
    },
    {
      title: 'Usage Data',
      description: 'Information about how you use our services and website',
      examples: ['Login times', 'Feature usage', 'Performance metrics', 'User preferences'],
      retention: '3 years',
      purpose: 'Service improvement and user experience optimization'
    },
    {
      title: 'Technical Data',
      description: 'Device information and technical specifications',
      examples: ['IP address', 'Browser type', 'Device information', 'System performance'],
      retention: '1 year',
      purpose: 'Security monitoring and technical support'
    },
    {
      title: 'Communication Data',
      description: 'Records of our interactions and communications',
      examples: ['Support tickets', 'Email correspondence', 'Chat logs', 'Meeting notes'],
      retention: '5 years',
      purpose: 'Customer support and relationship management'
    },
    {
      title: 'Financial Data',
      description: 'Payment information and billing details',
      examples: ['Payment methods', 'Billing history', 'Transaction records', 'Invoice data'],
      retention: '10 years',
      purpose: 'Financial compliance and record keeping'
    },
    {
      title: 'Analytics Data',
      description: 'Aggregated usage statistics and performance metrics',
      examples: ['Service performance', 'User behavior patterns', 'System health metrics', 'Business intelligence'],
      retention: '2 years',
      purpose: 'Business analytics and service optimization'
    }
  ];

  const dataUses = [
    {
      purpose: 'Service Delivery',
      description: 'To provide and maintain our services, process transactions, and deliver support.',
      examples: ['Account creation', 'Service provisioning', 'Payment processing', 'Technical support'],
      legalBasis: 'Contract performance'
    },
    {
      purpose: 'Communication',
      description: 'To send important updates, respond to inquiries, and provide customer support.',
      examples: ['Service notifications', 'Support responses', 'Product updates', 'Marketing communications'],
      legalBasis: 'Legitimate interest'
    },
    {
      purpose: 'Improvement',
      description: 'To analyze usage patterns and improve our services and user experience.',
      examples: ['Feature development', 'Performance optimization', 'User experience enhancement', 'Service innovation'],
      legalBasis: 'Legitimate interest'
    },
    {
      purpose: 'Security',
      description: 'To protect against fraud, abuse, and ensure the security of our services.',
      examples: ['Threat detection', 'Fraud prevention', 'Access control', 'Incident response'],
      legalBasis: 'Legal obligation'
    },
    {
      purpose: 'Compliance',
      description: 'To meet legal and regulatory requirements and industry standards.',
      examples: ['Audit trails', 'Regulatory reporting', 'Compliance monitoring', 'Legal obligations'],
      legalBasis: 'Legal obligation'
    },
    {
      purpose: 'Business Operations',
      description: 'To manage our business operations and strategic planning.',
      examples: ['Financial planning', 'Business analytics', 'Strategic decision making', 'Performance measurement'],
      legalBasis: 'Legitimate interest'
    }
  ];

  const userRights = [
    {
      right: 'Access',
      description: 'Request a copy of your personal data that we hold.',
      process: 'Submit a request through our privacy portal or contact our privacy team directly.',
      timeframe: '30 days',
      icon: Eye
    },
    {
      right: 'Rectification',
      description: 'Request correction of inaccurate or incomplete personal data.',
      process: 'Update your information through your account settings or contact us for assistance.',
      timeframe: '15 days',
      icon: Settings
    },
    {
      right: 'Erasure',
      description: 'Request deletion of your personal data under certain circumstances.',
      process: 'Submit a deletion request through our privacy portal with verification of your identity.',
      timeframe: '30 days',
      icon: Trash2
    },
    {
      right: 'Portability',
      description: 'Request transfer of your data to another service provider.',
      process: 'Request data export in a machine-readable format through our privacy portal.',
      timeframe: '30 days',
      icon: Download
    },
    {
      right: 'Restriction',
      description: 'Request limitation of how we process your personal data.',
      process: 'Contact our privacy team to discuss and implement processing restrictions.',
      timeframe: '15 days',
      icon: Pause
    },
    {
      right: 'Objection',
      description: 'Object to processing of your personal data for specific purposes.',
      process: 'Submit an objection through our privacy portal or contact our privacy team.',
      timeframe: '15 days',
      icon: AlertTriangle
    }
  ];

  const securityMeasures = [
    {
      category: 'Technical Security',
      measures: [
        {
          title: 'Encryption',
          description: 'All data is encrypted in transit and at rest using AES-256 encryption',
          status: 'Active',
          icon: Lock
        },
        {
          title: 'Access Controls',
          description: 'Multi-factor authentication and role-based access controls',
          status: 'Active',
          icon: Shield
        },
        {
          title: 'Network Security',
          description: 'Firewalls, intrusion detection, and DDoS protection',
          status: 'Active',
          icon: Wifi
        }
      ]
    },
    {
      category: 'Operational Security',
      measures: [
        {
          title: 'Regular Audits',
          description: 'Quarterly security assessments and compliance monitoring',
          status: 'Active',
          icon: CheckCircle
        },
        {
          title: 'Employee Training',
          description: 'Regular privacy and security awareness training',
          status: 'Active',
          icon: Users
        },
        {
          title: 'Incident Response',
          description: '24/7 security monitoring and incident response procedures',
          status: 'Active',
          icon: AlertTriangle
        }
      ]
    },
    {
      category: 'Compliance & Standards',
      measures: [
        {
          title: 'SOC 2 Type II',
          description: 'Annual third-party security and availability audits',
          status: 'Certified',
          icon: Award
        },
        {
          title: 'GDPR Compliance',
          description: 'Full compliance with European data protection regulations',
          status: 'Compliant',
          icon: Globe
        },
        {
          title: 'ISO 27001',
          description: 'Information security management system certification',
          status: 'Certified',
          icon: ShieldCheck
        }
      ]
    }
  ];

  const complianceFrameworks = [
    {
      name: 'GDPR (General Data Protection Regulation)',
      region: 'European Union',
      status: 'Fully Compliant',
      lastAudit: '2024-06-15',
      nextAudit: '2025-06-15',
      description: 'Comprehensive data protection and privacy regulation for EU citizens'
    },
    {
      name: 'CCPA (California Consumer Privacy Act)',
      region: 'California, USA',
      status: 'Fully Compliant',
      lastAudit: '2024-05-20',
      nextAudit: '2025-05-20',
      description: 'Consumer privacy protection law for California residents'
    },
    {
      name: 'SOC 2 Type II',
      region: 'Global',
      status: 'Certified',
      lastAudit: '2024-03-10',
      nextAudit: '2025-03-10',
      description: 'Security, availability, and confidentiality controls certification'
    },
    {
      name: 'ISO 27001',
      region: 'Global',
      status: 'Certified',
      lastAudit: '2024-02-28',
      nextAudit: '2025-02-28',
      description: 'Information security management system standard'
    },
    {
      name: 'HIPAA',
      region: 'United States',
      status: 'Compliant',
      lastAudit: '2024-04-12',
      nextAudit: '2025-04-12',
      description: 'Health Insurance Portability and Accountability Act compliance'
    }
  ];

  const dataRetentionPolicies = [
    {
      category: 'Account Data',
      retention: '7 years',
      reason: 'Legal and business record keeping requirements',
      exceptions: 'May be retained longer for active accounts or legal proceedings'
    },
    {
      category: 'Transaction Data',
      retention: '10 years',
      reason: 'Financial and tax compliance requirements',
      exceptions: 'Required for audit and regulatory purposes'
    },
    {
      category: 'Communication Data',
      retention: '5 years',
      reason: 'Customer relationship and support history',
      exceptions: 'May be retained for legal or compliance purposes'
    },
    {
      category: 'Analytics Data',
      retention: '2 years',
      reason: 'Business intelligence and service improvement',
      exceptions: 'Aggregated data may be retained longer for trend analysis'
    },
    {
      category: 'Security Logs',
      retention: '3 years',
      reason: 'Security monitoring and incident investigation',
      exceptions: 'May be retained longer for ongoing security investigations'
    }
  ];

  const contactMethods = [
    {
      method: 'Privacy Team Email',
      contact: 'privacy@ziontechgroup.com',
      response: 'Within 24 hours',
      description: 'Direct communication with our privacy team',
      icon: Mail
    },
    {
      method: 'Privacy Hotline',
      contact: '+1 (302) 464-0950',
      response: 'Immediate',
      description: '24/7 privacy and security incident reporting',
      icon: Phone
    },
    {
      method: 'Privacy Portal',
      contact: 'privacy.ziontechgroup.com',
      response: 'Self-service',
      description: 'Online privacy rights management and requests',
      icon: Globe
    },
    {
      method: 'Data Protection Officer',
      contact: 'dpo@ziontechgroup.com',
      response: 'Within 48 hours',
      description: 'Direct contact with our Data Protection Officer',
      icon: Shield
    }
  ];

  // Filter content based on search query
  const filteredContent = {
    principles: privacyPrinciples.filter(item => 
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.description.toLowerCase().includes(searchQuery.toLowerCase())
    ),
    categories: dataCategories.filter(item => 
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.description.toLowerCase().includes(searchQuery.toLowerCase())
    ),
    uses: dataUses.filter(item => 
      item.purpose.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.description.toLowerCase().includes(searchQuery.toLowerCase())
    ),
    rights: userRights.filter(item => 
      item.right.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.description.toLowerCase().includes(searchQuery.toLowerCase())
    )
  };

  return (
    <>
      <SEO 
        title="Privacy Policy - Zion Tech Group | Data Protection & Privacy"
        description="Learn about Zion Tech Group's comprehensive privacy policy, data protection practices, and your privacy rights. We're committed to protecting your personal information."
        keywords="privacy policy, data protection, GDPR, CCPA, privacy rights, data security, Zion Tech Group"
      />

      <div className="min-h-screen bg-gradient-to-br from-zion-slate-dark via-zion-slate to-zion-slate-light">
        {/* Hero Section */}
        <section className="relative py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
          <div className="absolute inset-0 bg-[linear-gradient(rgba(6,182,212,0.15)_1px,transparent_1px),linear-gradient(90deg,rgba(6,182,212,0.15)_1px,transparent_1px)] bg-[size:50px_50px] animate-pulse"></div>
          
          <div className="relative max-w-7xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border border-cyan-400/30 mb-6">
                <Shield className="w-5 h-5 text-cyan-400 mr-2" />
                <span className="text-cyan-400 font-medium">Privacy & Data Protection</span>
              </div>
              
              <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
                Privacy Policy
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-8">
                Your privacy is our priority. Learn about how we protect your data, your rights, and our commitment to transparency and security.
              </p>
              
              {/* Search Bar */}
              <div className="max-w-2xl mx-auto mb-8">
                <div className="relative">
                  <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-6 h-6 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Search privacy policy..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-14 pr-4 py-4 bg-white/10 backdrop-blur-sm border border-cyan-400/30 rounded-2xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400 text-lg"
                  />
                </div>
              </div>

              {/* Last Updated */}
              <div className="text-center">
                <p className="text-gray-400 mb-2">Last Updated</p>
                <p className="text-cyan-400 font-semibold">August 29, 2024</p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Privacy Principles */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Our Privacy Principles
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                We are committed to protecting your privacy and maintaining the highest standards of data protection.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {filteredContent.principles.map((principle, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="group bg-white/5 backdrop-blur-sm border border-cyan-400/20 rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 hover:border-cyan-400/50"
                >
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 border border-cyan-400/30">
                    <principle.icon className="w-8 h-8 text-cyan-400" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">{principle.title}</h3>
                  <p className="text-gray-300 mb-4">{principle.description}</p>
                  <p className="text-sm text-cyan-400">{principle.details}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Data Categories */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                What Data We Collect
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                We collect only the data necessary to provide our services and improve your experience.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredContent.categories.map((category, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="group bg-white/5 backdrop-blur-sm border border-cyan-400/20 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300 hover:border-cyan-400/50"
                >
                  <h3 className="text-xl font-bold text-white mb-4">{category.title}</h3>
                  <p className="text-gray-300 mb-4">{category.description}</p>
                  
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-cyan-400 mb-2">Examples:</h4>
                    <div className="space-y-2">
                      {category.examples.map((example, exampleIndex) => (
                        <div key={exampleIndex} className="flex items-center text-sm text-gray-400">
                          <CheckCircle className="w-4 h-4 text-cyan-400 mr-2 flex-shrink-0" />
                          {example}
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-4 border-t border-cyan-400/20">
                    <div className="flex justify-between items-center text-sm">
                      <span className="text-gray-400">Retention:</span>
                      <span className="text-cyan-400 font-semibold">{category.retention}</span>
                    </div>
                    <div className="mt-2">
                      <p className="text-xs text-gray-400">{category.purpose}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* How We Use Your Data */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                How We Use Your Information
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                We use your information only for legitimate business purposes and with your consent where required.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredContent.uses.map((use, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="group bg-white/5 backdrop-blur-sm border border-cyan-400/20 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300 hover:border-cyan-400/50"
                >
                  <h3 className="text-xl font-bold text-white mb-4">{use.purpose}</h3>
                  <p className="text-gray-300 mb-4">{use.description}</p>
                  
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-cyan-400 mb-2">Examples:</h4>
                    <div className="space-y-2">
                      {use.examples.map((example, exampleIndex) => (
                        <div key={exampleIndex} className="flex items-center text-sm text-gray-400">
                          <CheckCircle className="w-4 h-4 text-cyan-400 mr-2 flex-shrink-0" />
                          {example}
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-4 border-t border-cyan-400/20">
                    <div className="flex justify-between items-center text-sm">
                      <span className="text-gray-400">Legal Basis:</span>
                      <span className="text-cyan-400 font-semibold">{use.legalBasis}</span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Your Rights */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Your Privacy Rights
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                You have important rights regarding your personal data. We are committed to honoring these rights.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredContent.rights.map((right, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="group bg-white/5 backdrop-blur-sm border border-cyan-400/20 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300 hover:border-cyan-400/50"
                >
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 border border-cyan-400/30">
                    <right.icon className="w-6 h-6 text-cyan-400" />
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-4">{right.right}</h3>
                  <p className="text-gray-300 mb-4">{right.description}</p>
                  
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-cyan-400 mb-2">Process:</h4>
                    <p className="text-sm text-gray-400">{right.process}</p>
                  </div>

                  <div className="pt-4 border-t border-cyan-400/20">
                    <div className="flex justify-between items-center text-sm">
                      <span className="text-gray-400">Response Time:</span>
                      <span className="text-cyan-400 font-semibold">{right.timeframe}</span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Data Security */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Data Security
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                We implement comprehensive security measures to protect your personal information from unauthorized access, alteration, disclosure, or destruction.
              </p>
            </motion.div>

            <div className="space-y-8">
              {securityMeasures.map((category, categoryIndex) => (
                <motion.div
                  key={categoryIndex}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: categoryIndex * 0.2 }}
                  viewport={{ once: true }}
                  className="bg-white/5 backdrop-blur-sm border border-cyan-400/20 rounded-2xl p-8"
                >
                  <h3 className="text-2xl font-bold text-white mb-6 text-center">{category.category}</h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {category.measures.map((measure, measureIndex) => (
                      <div key={measureIndex} className="text-center">
                        <div className="w-16 h-16 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-2xl flex items-center justify-center mx-auto mb-4 border border-cyan-400/30">
                          <measure.icon className="w-8 h-8 text-cyan-400" />
                        </div>
                        <h4 className="text-lg font-semibold text-white mb-2">{measure.title}</h4>
                        <p className="text-gray-300 text-sm mb-3">{measure.description}</p>
                        <span className={`inline-block px-3 py-1 text-xs font-medium rounded-full ${
                          measure.status === 'Active' ? 'bg-green-500/20 text-green-400 border border-green-400/30' :
                          measure.status === 'Certified' ? 'bg-blue-500/20 text-blue-400 border border-blue-400/30' :
                          'bg-yellow-500/20 text-yellow-400 border border-yellow-400/30'
                        }`}>
                          {measure.status}
                        </span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Compliance & Standards */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Compliance & Standards
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                We maintain compliance with major privacy and security frameworks to ensure the highest standards of data protection.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {complianceFrameworks.map((framework, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white/5 backdrop-blur-sm border border-cyan-400/20 rounded-2xl p-6"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-white mb-2">{framework.name}</h3>
                      <p className="text-gray-300 text-sm mb-2">{framework.description}</p>
                      <p className="text-cyan-400 text-sm">{framework.region}</p>
                    </div>
                    <span className={`inline-block px-3 py-1 text-xs font-medium rounded-full ${
                      framework.status === 'Fully Compliant' ? 'bg-green-500/20 text-green-400 border border-green-400/30' :
                      framework.status === 'Certified' ? 'bg-blue-500/20 text-blue-400 border border-blue-400/30' :
                      'bg-yellow-500/20 text-yellow-400 border border-yellow-400/30'
                    }`}>
                      {framework.status}
                    </span>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <span className="text-gray-400">Last Audit:</span>
                      <p className="text-white">{framework.lastAudit}</p>
                    </div>
                    <div>
                      <span className="text-gray-400">Next Audit:</span>
                      <p className="text-white">{framework.nextAudit}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Data Retention */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Data Retention Policies
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                We retain your data only for as long as necessary to provide our services and comply with legal obligations.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {dataRetentionPolicies.map((policy, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white/5 backdrop-blur-sm border border-cyan-400/20 rounded-2xl p-6"
                >
                  <h3 className="text-lg font-bold text-white mb-4">{policy.category}</h3>
                  
                  <div className="mb-4">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-gray-400 text-sm">Retention Period:</span>
                      <span className="text-cyan-400 font-semibold">{policy.retention}</span>
                    </div>
                    <p className="text-gray-300 text-sm">{policy.reason}</p>
                  </div>

                  <div className="pt-4 border-t border-cyan-400/20">
                    <h4 className="text-sm font-semibold text-cyan-400 mb-2">Exceptions:</h4>
                    <p className="text-gray-400 text-sm">{policy.exceptions}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Information */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Contact Us
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                If you have questions about this privacy policy or want to exercise your rights, please contact our privacy team.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {contactMethods.map((method, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center group"
                >
                  <div className="w-20 h-20 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 border border-cyan-400/30">
                    <method.icon className="w-10 h-10 text-cyan-400" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{method.method}</h3>
                  <p className="text-cyan-400 font-semibold mb-2">{method.contact}</p>
                  <p className="text-gray-300 text-sm mb-2">{method.description}</p>
                  <p className="text-cyan-400 text-sm">{method.response}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-cyan-600/20 to-blue-600/20 backdrop-blur-sm border border-cyan-400/30">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border border-cyan-400/30 mb-6">
                <Sparkles className="w-5 h-5 text-cyan-400 mr-2" />
                <span className="text-cyan-400 font-medium">Questions About Privacy?</span>
              </div>
              
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Questions About Privacy?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                We're here to help. Contact our privacy team for any questions about your data or this privacy policy.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="mailto:privacy@ziontechgroup.com"
                  className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-600 transition-all duration-200 flex items-center gap-2"
                >
                  Contact Privacy Team
                  <ArrowRight className="w-5 h-5" />
                </a>
                <a
                  href="/contact"
                  className="px-8 py-4 border-2 border-cyan-400 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-400 hover:text-slate-900 transition-all duration-200 flex items-center gap-2"
                >
                  <MessageSquare className="w-5 h-5" />
                  General Contact
                </a>
              </div>
              
              <div className="mt-8 text-center">
                <p className="text-gray-400 mb-4">Need immediate assistance?</p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center text-sm">
                  <a href="mailto:privacy@ziontechgroup.com" className="text-cyan-400 hover:text-cyan-300 transition-colors flex items-center justify-center gap-2">
                    <Mail className="w-4 h-4" />
                    privacy@ziontechgroup.com
                  </a>
                  <a href="tel:+13024640950" className="text-cyan-400 hover:text-cyan-300 transition-colors flex items-center justify-center gap-2">
                    <Phone className="w-4 h-4" />
                    +1 (302) 464-0950
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
}
