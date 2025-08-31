import React from 'react';
import { motion } from 'framer-motion';
import { SEO } from '../components/SEO';
import { 
  Shield, 
  Lock, 
  CheckCircle, 
  AlertTriangle,
  BadgeCheck,
  Clock,
  TrendingUp,
  BarChart3,
  FileText,
  Users,
  Settings,
  HelpCircle,
  Globe,
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
  Microscope,
  Building2,
  Scale,
  Gavel,
  BookOpen,
  Clipboard,
  Eye,
  Key,
  Server,
  Network
} from 'lucide-react';

export default function Compliance() {
  const complianceFrameworks = [
    {
      name: 'ISO 27001',
      category: 'Information Security',
      status: 'Certified',
      description: 'International standard for information security management systems',
      scope: 'Global',
      lastAudit: '2024-01-15',
      nextAudit: '2025-01-15',
      icon: BadgeCheck,
      level: 'Level 3'
    },
    {
      name: 'SOC 2 Type II',
      category: 'Security & Privacy',
      status: 'Certified',
      description: 'Service Organization Control 2 compliance for security and privacy',
      scope: 'North America',
      lastAudit: '2024-06-30',
      nextAudit: '2025-06-30',
      icon: BadgeCheck,
      level: 'Type II'
    },
    {
      name: 'GDPR',
      category: 'Data Protection',
      status: 'Compliant',
      description: 'General Data Protection Regulation compliance for EU data handling',
      scope: 'European Union',
      lastAudit: '2024-03-01',
      nextAudit: 'Ongoing',
      icon: CheckCircle,
      level: 'Full Compliance'
    },
    {
      name: 'HIPAA',
      category: 'Healthcare',
      status: 'Compliant',
      description: 'Health Insurance Portability and Accountability Act compliance',
      scope: 'United States',
      lastAudit: '2024-02-15',
      nextAudit: 'Ongoing',
      icon: CheckCircle,
      level: 'Full Compliance'
    },
    {
      name: 'PCI DSS',
      category: 'Payment Security',
      status: 'Compliant',
      description: 'Payment Card Industry Data Security Standard compliance',
      scope: 'Global',
      lastAudit: '2024-04-01',
      nextAudit: '2025-04-01',
      icon: CheckCircle,
      level: 'Level 1'
    },
    {
      name: 'SOX',
      category: 'Financial Reporting',
      status: 'Compliant',
      description: 'Sarbanes-Oxley Act compliance for financial reporting',
      scope: 'United States',
      lastAudit: '2024-01-31',
      nextAudit: '2025-01-31',
      icon: CheckCircle,
      level: 'Full Compliance'
    }
  ];

  const industryCompliance = [
    {
      industry: 'Healthcare',
      frameworks: ['HIPAA', 'HITECH', 'FDA', 'ISO 13485'],
      status: 'Compliant',
      description: 'Full compliance with healthcare industry regulations and standards',
      icon: Heart
    },
    {
      industry: 'Financial Services',
      frameworks: ['PCI DSS', 'SOX', 'GLBA', 'Basel III'],
      status: 'Compliant',
      description: 'Comprehensive compliance with financial industry regulations',
      icon: Building2
    },
    {
      industry: 'Government',
      frameworks: ['FedRAMP', 'FISMA', 'CJIS', 'ITAR'],
      status: 'In Progress',
      description: 'Working towards government security and compliance certifications',
      icon: Shield
    },
    {
      industry: 'Education',
      frameworks: ['FERPA', 'COPPA', 'CIPA', 'ISO 27001'],
      status: 'Compliant',
      description: 'Full compliance with educational institution requirements',
      icon: GraduationCap
    }
  ];

  const complianceProcesses = [
    {
      process: 'Risk Assessment',
      description: 'Regular risk assessments to identify and mitigate compliance risks',
      frequency: 'Quarterly',
      lastCompleted: '2024-01-15',
      nextDue: '2024-04-15',
      icon: Eye
    },
    {
      process: 'Policy Review',
      description: 'Comprehensive review and updates of compliance policies',
      frequency: 'Semi-annually',
      lastCompleted: '2024-01-30',
      nextDue: '2024-07-30',
      icon: FileText
    },
    {
      process: 'Training & Awareness',
      description: 'Regular compliance training for all employees',
      frequency: 'Annually',
      lastCompleted: '2024-01-15',
      nextDue: '2025-01-15',
      icon: Users
    },
    {
      process: 'Audit & Monitoring',
      description: 'Continuous monitoring and regular compliance audits',
      frequency: 'Continuous',
      lastCompleted: 'Ongoing',
      nextDue: 'Ongoing',
      icon: Clipboard
    }
  ];

  const complianceMetrics = [
    {
      metric: 'Overall Compliance',
      value: '98.5%',
      description: 'Overall compliance score across all frameworks',
      trend: 'Improving',
      icon: TrendingUp
    },
    {
      metric: 'Audit Success Rate',
      value: '100%',
      description: 'Successful completion of compliance audits',
      trend: 'Stable',
      icon: CheckCircle
    },
    {
      metric: 'Policy Coverage',
      value: '95%',
      description: 'Coverage of required compliance policies',
      trend: 'Improving',
      icon: FileText
    },
    {
      metric: 'Training Completion',
      value: '100%',
      description: 'Employee compliance training completion rate',
      trend: 'Stable',
      icon: Users
    }
  ];

  const upcomingCompliance = [
    {
      framework: 'FedRAMP Authorization',
      targetDate: '2024-Q4',
      status: 'In Progress',
      description: 'Federal Risk and Authorization Management Program authorization',
      priority: 'High'
    },
    {
      framework: 'ISO 27001:2022',
      targetDate: '2024-Q3',
      status: 'In Progress',
      description: 'Upgrade to latest ISO 27001 standard',
      priority: 'Medium'
    },
    {
      framework: 'SOC 2 Type II Renewal',
      targetDate: '2025-Q2',
      status: 'Planned',
      description: 'Annual SOC 2 Type II compliance renewal',
      priority: 'Medium'
    },
    {
      framework: 'GDPR Enhanced Compliance',
      targetDate: '2024-Q4',
      status: 'Planned',
      description: 'Enhanced GDPR compliance measures',
      priority: 'Low'
    }
  ];

  const complianceResources = [
    {
      name: 'Compliance Handbook',
      description: 'Comprehensive guide to our compliance framework',
      type: 'Documentation',
      lastUpdated: '2024-01-15',
      icon: BookOpen
    },
    {
      name: 'Policy Templates',
      description: 'Standardized policy templates for common requirements',
      type: 'Templates',
      lastUpdated: '2024-02-01',
      icon: FileText
    },
    {
      name: 'Training Materials',
      description: 'Compliance training materials and resources',
      type: 'Training',
      lastUpdated: '2024-01-30',
      icon: Users
    },
    {
      name: 'Audit Checklists',
      description: 'Comprehensive audit checklists for each framework',
      type: 'Tools',
      lastUpdated: '2024-01-20',
      icon: Clipboard
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <SEO 
        title="Compliance - Zion Tech Group"
        description="Learn about Zion Tech Group's comprehensive compliance framework, certifications, and regulatory adherence across multiple industries."
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
            <Scale className="w-12 h-12 text-white" />
          </div>
          <h1 className="text-5xl font-bold text-white mb-6">Compliance & Governance</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            We maintain the highest standards of compliance across multiple regulatory frameworks 
            and industry standards to ensure your business meets all legal and regulatory requirements.
          </p>
        </motion.div>

        {/* Compliance Overview */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="bg-gradient-to-r from-cyan-600/20 to-blue-600/20 rounded-2xl p-8 mb-16 border border-cyan-500/30"
        >
          <div className="text-center">
            <h2 className="text-3xl font-bold text-white mb-4">Comprehensive Compliance Framework</h2>
            <p className="text-lg text-gray-300 max-w-4xl mx-auto">
              Our compliance program is built on a foundation of industry best practices, 
              continuous monitoring, and regular audits. We ensure adherence to international 
              standards and regulatory requirements across multiple jurisdictions and industries.
            </p>
          </div>
        </motion.div>

        {/* Compliance Frameworks */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-white text-center mb-12">Compliance Frameworks</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {complianceFrameworks.map((framework, index) => (
              <motion.div
                key={framework.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                className="bg-slate-800/50 rounded-xl p-6 border border-slate-600/30"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center">
                    <framework.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white">{framework.name}</h3>
                    <p className="text-cyan-400 text-sm">{framework.category}</p>
                  </div>
                </div>
                <p className="text-gray-400 text-sm mb-4">{framework.description}</p>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-500">Status:</span>
                    <span className={`${
                      framework.status === 'Certified' || framework.status === 'Compliant'
                        ? 'text-green-400'
                        : 'text-yellow-400'
                    }`}>
                      {framework.status}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-500">Level:</span>
                    <span className="text-white">{framework.level}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-500">Scope:</span>
                    <span className="text-white">{framework.scope}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-500">Next Audit:</span>
                    <span className="text-white">{framework.nextAudit}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Industry Compliance */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-white text-center mb-12">Industry Compliance</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {industryCompliance.map((industry, index) => (
              <motion.div
                key={industry.industry}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                className="bg-slate-800/50 rounded-xl p-6 border border-slate-600/30"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-600 rounded-lg flex items-center justify-center">
                    <industry.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white">{industry.industry}</h3>
                    <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium ${
                      industry.status === 'Compliant' 
                        ? 'bg-green-500/20 text-green-400 border border-green-500/30'
                        : 'bg-yellow-500/20 text-yellow-400 border border-yellow-500/30'
                    }`}>
                      {industry.status}
                    </span>
                  </div>
                </div>
                <p className="text-gray-400 mb-4">{industry.description}</p>
                <div className="space-y-2">
                  <h4 className="text-sm font-medium text-cyan-400">Frameworks:</h4>
                  <div className="flex flex-wrap gap-2">
                    {industry.frameworks.map((framework, frameworkIndex) => (
                      <span
                        key={frameworkIndex}
                        className="px-3 py-1 bg-cyan-500/20 text-cyan-400 rounded-full text-sm border border-cyan-500/30"
                      >
                        {framework}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Compliance Processes */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-white text-center mb-12">Compliance Processes</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {complianceProcesses.map((process, index) => (
              <motion.div
                key={process.process}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 1.0 + index * 0.1 }}
                className="bg-slate-800/50 rounded-xl p-6 border border-slate-600/30"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-600 rounded-lg flex items-center justify-center">
                    <process.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white">{process.process}</h3>
                    <p className="text-green-400 text-sm">{process.frequency}</p>
                  </div>
                </div>
                <p className="text-gray-400 mb-4">{process.description}</p>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <span className="text-gray-500">Last Completed:</span>
                    <p className="text-white">{process.lastCompleted}</p>
                  </div>
                  <div>
                    <span className="text-gray-500">Next Due:</span>
                    <p className="text-white">{process.nextDue}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Compliance Metrics */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.0 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-white text-center mb-12">Compliance Metrics</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {complianceMetrics.map((metric, index) => (
              <motion.div
                key={metric.metric}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 1.2 + index * 0.1 }}
                className="bg-slate-800/50 rounded-xl p-6 border border-slate-600/30 text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <metric.icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-3xl font-bold text-white mb-2">{metric.value}</div>
                <h3 className="text-lg font-semibold text-white mb-2">{metric.metric}</h3>
                <p className="text-gray-400 text-sm mb-3">{metric.description}</p>
                <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium ${
                  metric.trend === 'Improving' 
                    ? 'bg-green-500/20 text-green-400 border border-green-500/30'
                    : 'bg-blue-500/20 text-blue-400 border border-blue-500/30'
                }`}>
                  {metric.trend}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Upcoming Compliance */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-white text-center mb-12">Upcoming Compliance Initiatives</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {upcomingCompliance.map((initiative, index) => (
              <motion.div
                key={initiative.framework}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 1.4 + index * 0.1 }}
                className="bg-slate-800/50 rounded-xl p-6 border border-slate-600/30"
              >
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-xl font-semibold text-white">{initiative.framework}</h3>
                  <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium ${
                    initiative.priority === 'High' 
                      ? 'bg-red-500/20 text-red-400 border border-red-500/30'
                      : initiative.priority === 'Medium'
                      ? 'bg-yellow-500/20 text-yellow-400 border border-yellow-500/30'
                      : 'bg-green-500/20 text-green-400 border border-green-500/30'
                  }`}>
                    {initiative.priority}
                  </span>
                </div>
                <p className="text-gray-400 mb-4">{initiative.description}</p>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <span className="text-gray-500">Target Date:</span>
                    <p className="text-white">{initiative.targetDate}</p>
                  </div>
                  <div>
                    <span className="text-gray-500">Status:</span>
                    <p className="text-white">{initiative.status}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Compliance Resources */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.4 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-white text-center mb-12">Compliance Resources</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {complianceResources.map((resource, index) => (
              <motion.div
                key={resource.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 1.6 + index * 0.1 }}
                className="bg-slate-800/50 rounded-xl p-6 border border-slate-600/30 text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <resource.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{resource.name}</h3>
                <p className="text-gray-400 text-sm mb-3">{resource.description}</p>
                <span className="inline-block px-3 py-1 bg-orange-500/20 text-orange-400 rounded-full text-xs font-medium border border-orange-500/30 mb-3">
                  {resource.type}
                </span>
                <p className="text-gray-500 text-xs">Updated: {resource.lastUpdated}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Contact Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.6 }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-cyan-600/20 to-blue-600/20 rounded-2xl p-8 border border-cyan-500/30">
            <h2 className="text-3xl font-bold text-white mb-4">Compliance Questions?</h2>
            <p className="text-lg text-gray-300 mb-6">
              Our compliance team is available to answer your questions and provide 
              detailed information about our compliance status and processes.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-3 rounded-lg font-medium hover:from-cyan-600 hover:to-blue-700 transition-all duration-300"
              >
                Contact Compliance Team
              </a>
              <a
                href="/support"
                className="bg-slate-700/50 text-white px-8 py-3 rounded-lg font-medium hover:bg-slate-600/50 transition-all duration-300 border border-slate-600/50"
              >
                Compliance Support
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
