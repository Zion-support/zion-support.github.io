<<<<<<< HEAD
import React from 'react';
import { motion } from 'framer-motion';
import { Shield, CheckCircle, FileText, Globe, Users, Database, Lock, AlertTriangle, Calendar, Award, BarChart3, Zap } from 'lucide-react';

const Compliance: React.FC = () => {
  const lastUpdated = "January 15, 2025";

=======
<<<<<<< HEAD
import React from 'react.ts';
import { motion              } from 'framer-motion.ts';
import { Shield,
  CheckCircle,
  Award,
  FileText,
  Users,
  Globe,
  Lock,
  Eye,
=======
import React from 'react.ts';
import { motion               } from 'framer-motion.ts';
import { Shield, 
  CheckCircle, 
  Award, 
  FileText, 
  Globe, 
  Building, 
  Users, 
  Lock, 
  Eye, 
>>>>>>> 93c877c1f5b152c458bc28f698e09e33b34cdae3
  Database,
  FileText,
  Clock,
  AlertTriangle,
  Info,
  Phone,
  Mail,
  MapPin,
  Star,
  Zap,
  Brain,
  Cloud,
  Rocket,
  Heart,
  Cpu,
  Network,
  Server,
  Key,
  Fingerprint,
  Monitor,
<<<<<<< HEAD
  Smartphone,
  Tablet,
  Laptop,
  ShieldCheck,
  Gauge,
  TrendingUp,
  BarChart3
              } from 'lucide-react.ts';
import { SEO               } from '../components/SEO';
=======
  Clock,
  AlertTriangle,
  Info
<<<<<<< HEAD
import { SEO              } from '../components/SEO';
=======
} from 'lucide-react';
import { SEO              } from '../components/SEO';
>>>>>>> cursor/fix-project-errors-and-automate-future-fixes-53bd
>>>>>>> 93c877c1f5b152c458bc28f698e09e33b34cdae3

export default function Compliance(...args[]: any):  {
>>>>>>> 4cc4a42f69bd95988691b9548650af1405020894
  const complianceFrameworks = [
    {
      name: "ISO 27001",
      description: "Information Security Management System",
      status: "Certified",
      validity: "Valid until December 2026",
      scope: "Information security management for all services",
      color: "from-blue-500 to-cyan-500"
    },
    {
      name: "SOC 2 Type II",
      description: "Service Organization Control 2",
      status: "Compliant",
      validity: "Annual audit completed",
      scope: "Security, availability, and confidentiality controls",
      color: "from-green-500 to-emerald-500"
    },
    {
      name: "GDPR",
      description: "General Data Protection Regulation",
      status: "Compliant",
      validity: "Ongoing compliance",
      scope: "EU data protection and privacy requirements",
      color: "from-purple-500 to-pink-500"
    },
    {
      name: "HIPAA",
      description: "Health Insurance Portability and Accountability Act",
      status: "Compliant",
      validity: "Ongoing compliance",
      scope: "Protected health information handling",
      color: "from-orange-500 to-red-500"
    },
    {
      name: "PCI DSS",
      description: "Payment Card Industry Data Security Standard",
      status: "Compliant",
      validity: "Annual assessment completed",
      scope: "Payment card data security",
      color: "from-indigo-500 to-purple-500"
    },
    {
      name: "SOX",
      description: "Sarbanes-Oxley Act",
      status: "Compliant",
      validity: "Annual audit completed",
      scope: "Financial reporting and internal controls",
      color: "from-teal-500 to-cyan-500"
    }
  ];

  const complianceAreas = [
    {
      area: "Data Protection",
      icon: Shield,
      description: "Comprehensive data protection and privacy controls",
      features: [
        "Data classification and handling",
        "Encryption at rest and in transit",
        "Access controls and authentication",
        "Data retention and disposal policies"
      ]
    },
    {
      area: "Access Control",
      icon: Lock,
      description: "Robust identity and access management",
      features: [
        "Multi-factor authentication",
        "Role-based access control",
        "Privileged access management",
        "Session management and monitoring"
      ]
    },
    {
      area: "Risk Management",
      icon: AlertTriangle,
      description: "Systematic risk assessment and mitigation",
      features: [
        "Regular risk assessments",
        "Vulnerability management",
        "Incident response planning",
        "Business continuity planning"
      ]
    },
    {
      area: "Audit & Monitoring",
      icon: BarChart3,
      description: "Continuous monitoring and regular audits",
      features: [
        "Real-time security monitoring",
        "Regular compliance audits",
        "Performance metrics tracking",
        "Continuous improvement processes"
      ]
    }
  ];

  const complianceProcesses = [
    {
      step: "Assessment",
      description: "Evaluate current compliance status and identify gaps",
      icon: FileText,
      duration: "2-4 weeks"
    },
    {
      step: "Implementation",
      description: "Implement required controls and processes",
      icon: Zap,
      duration: "8-12 weeks"
    },
    {
      step: "Testing",
      description: "Validate controls through testing and validation",
      icon: CheckCircle,
      duration: "2-4 weeks"
    },
    {
      step: "Certification",
      description: "Obtain formal certification or compliance status",
      icon: Award,
      duration: "4-8 weeks"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-blue-500/10" />
        <div className="relative z-10 container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-8"
          >
            <div className="w-20 h-20 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Shield className="w-10 h-10 text-cyan-400" />
            </div>
            <h1 className="text-5xl lg:text-6xl font-bold text-white mb-6">
              Compliance &
              <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                {" "}Certifications
              </span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-6">
              We maintain the highest standards of compliance across multiple frameworks to ensure your data and systems meet regulatory requirements.
            </p>
            <div className="flex items-center justify-center space-x-4 text-gray-400">
              <Shield className="w-5 h-5" />
              <span>Last updated: {lastUpdated}</span>
            </div>
          </motion.div>
        </div>
<<<<<<< HEAD
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="space-y-16">
            {/* Compliance Overview */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center"
            >
=======
      </div>

      {/* Compliance Commitment */}
      <div className="container mx-auto px-4 py-16">
        <motion.div
          initial = {
  { opacity: 0,
  y: 20 






}}
          animate = {
  { opacity: 1,
  y: 0 






}}
          transition = {
  { duration: 0.6,
  delay: 0.2 






}}
          className="bg-gradient-to-r from-green-600/20 to-emerald-600/20 border border-green-500/30 rounded-2xl p-8 text-center"

          <h2 className="text-2xl font-bold text-white mb-4">
            Our Compliance Commitment
          </h2>
          <p className="text-slate-300 max-w-4xl mx-auto">
            Compliance is not just about meeting requirements—it's about building trust and ensuring
            operational excellence. Our comprehensive compliance program covers international standards,
            industry best practices, and regulatory requirements to provide you with confidence in our services.
          </p>
        </motion.div>
      </div>

      {/* Compliance Frameworks */}
      <div className="bg-slate-800/20 py-16">
        <div className="container mx-auto px-4">
          <motion.h2
            initial = {
  { opacity: 0,
  y: 20 






}}
            animate = {
  { opacity: 1,
  y: 0 






}}
            transition = {
  { duration: 0.6,
  delay: 0.3 






}}
            className="text-3xl font-bold text-white text-center mb-12"

            Compliance Frameworks & Certifications
          </motion.h2>

          <div className="grid grid-cols-1 lg: anyanyanyanyanyanyanyanyanyanyanyanyanygrid-cols-2 gap-8">
            {complianceFrameworks.map((framework, index)              => (
              <motion.div
                key={framework.title}
                initial = {
  { opacity: 0,
  y: 20 






}}
                animate = {
  { opacity: 1,
  y: 0 






}}
                transition = {
  { duration: 0.6,
  delay: 0.4 + index * 0.1 






}}
                className="bg-slate-800/30 border border-slate-700 rounded-xl p-6"

                <div className="flex items-center space-x-4 mb-6">
                  <div className={`w-16 h-16 bg-gradient-to-br ${framework.color} rounded-xl flex items-center justify-center`}>
                    <framework.icon className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white">{framework.title}</h3>
                    <p className="text-slate-400 text-sm">{framework.description}</p>
                  </div>
>>>>>>> cursor/fix-project-errors-and-automate-future-fixes-53bd
                </div>
<<<<<<< HEAD

                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-slate-400 text-sm">Status:</span>
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                      framework.status === 'Certified' ? 'bg-green-500/20 text-green-400' :
                      'bg-blue-500/20 text-blue-400'
                    }`}>
                      {framework.status}
                    </span>
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="text-slate-400 text-sm">Validity:</span>
                    <span className="text-slate-300 text-sm">{framework.validity}</span>
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="text-slate-400 text-sm">Scope:</span>
                    <span className="text-slate-300 text-sm">{framework.scope}</span>
                  </div>

                  <div className="pt-4 border-t border-slate-700">
                    <h4 className="text-slate-300 font-medium mb-3">Key Benefits:</h4>
                    <div className="space-y-2">
                      {framework.benefits.map((benefit, idx) => (
                        <div key={idx} className="flex items-center space-x-3">
                          <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                          <span className="text-slate-300 text-sm">{benefit}</span>
                        </div>
                      ))}
=======
                <div className="text-center">
                  <div className="text-3xl font-bold text-cyan-400">98.5%</div>
                  <div className="text-slate-400">Compliance Score</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-cyan-400">100%</div>
                  <div className="text-slate-400">Audit Success Rate</div>
                </div>;
                <div className="text-center">;
                  <div className="text-3xl font-bold text-cyan-400">&lt; 24h</div>
                  <div className = "text-slate-400">Remediation Time</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Compliance Commitment */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-gradient-to-r from-cyan-600/20 to-blue-600/20 border border-cyan-500/30 rounded-2xl p-12">
>>>>>>> 4cc4a42f69bd95988691b9548650af1405020894
              <h2 className="text-3xl font-bold text-white mb-6">
                Our Compliance Commitment
              </h2>
              <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
                Zion Tech Group is committed to maintaining the highest standards of compliance across all our services. 
                We understand that compliance is not just about meeting regulatory requirements—it's about building trust, 
                ensuring security, and protecting our clients' interests.
              </p>
            </motion.div>

<<<<<<< HEAD
            {/* Compliance Frameworks */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <h2 className="text-3xl font-bold text-white text-center mb-12">
                Compliance Frameworks & Certifications
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {complianceFrameworks.map((framework, index) => (
                  <motion.div
                    key={framework.name}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6"
                  >
                    <div className={`w-16 h-16 bg-gradient-to-r ${framework.color} rounded-2xl flex items-center justify-center mb-4`}>
                      <Shield className="w-8 h-8 text-white" />
                    </div>
                    <div className="flex items-center justify-between mb-3">
                      <h3 className="text-lg font-bold text-white">{framework.name}</h3>
                      <span className="px-3 py-1 bg-green-500/20 text-green-400 text-sm font-medium rounded-full border border-green-500/30">
                        {framework.status}
                      </span>
                    </div>
                    <p className="text-gray-300 text-sm mb-3">{framework.description}</p>
                    <div className="space-y-2 text-xs text-gray-400">
                      <div className="flex items-center space-x-2">
                        <Calendar className="w-3 h-3" />
                        <span>{framework.validity}</span>
                      </div>
                      <div className="flex items-start space-x-2">
                        <Globe className="w-3 h-3 mt-0.5" />
                        <span>{framework.scope}</span>
                      </div>
                    </div>
                  </motion.div>
=======
        {/* Compliance Frameworks */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-white mb-4">Compliance Frameworks & Certifications</h2>
              <p className="text-xl text-slate-300">International standards and industry-specific compliance</p>
            </div>
            
            <div className="grid grid-cols-1 lg: anyanyanyanyanyanyanyanyanyanyanyanyanygrid-cols-2 gap-8">
              {complianceFrameworks.map((framework, index)               => (
                <motion.div
                  key={index}
                  initial = {
  { opacity: 0,
  y: 20 

}}
                  whileInView = {
  { opacity: 1,
  y: 0 

}}
                  transition = {
  { duration: 0.6,
  delay: index * 0.1 

}}
                  className="bg-slate-800/50 border border-slate-700/50 rounded-2xl p-8"
                >
                  <div className="flex items-center mb-6">
                    <div className={`w-16 h-16 bg-gradient-to-br ${framework.color} rounded-2xl flex items-center justify-center mr-4`}>
                      <framework.icon className="h-8 w-8 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-white">{framework.name}</h3>
                      <p className="text-slate-300">{framework.description}</p>
                    </div>
                    <div className="text-right">
                      <div className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-semibold ${
                        framework.status === 'Certified' ? 'bg-green-500/20 text-green-400' : 'bg-blue-500/20 text-blue-400'
                      }`}>
                        <CheckCircle className="h-4 w-4 mr-1" />
                        {framework.status}
                      </div>
>>>>>>> 93c877c1f5b152c458bc28f698e09e33b34cdae3
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <p className="text-slate-300 text-sm">{framework.details}</p>
                    
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div>
                        <span className="font-semibold text-cyan-400">Scope:</span>
                        <p className="text-slate-300">{framework.scope}</p>
                      </div>
                      <div>
                        <span className="font-semibold text-cyan-400">Last Audit:</span>
                        <p className="text-slate-300">{framework.lastAudit}</p>
                      </div>
                      <div>
                        <span className="font-semibold text-cyan-400">Next Audit:</span>
                        <p className="text-slate-300">{framework.nextAudit}</p>
                      </div>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-cyan-400 mb-2">Key Benefits:</h4>
                      <ul className="space-y-1">
                        {framework.benefits.map((benefit, idx) => (
                          <li key={idx} className="flex items-center text-sm text-slate-300">
                            <CheckCircle className="h-3 w-3 text-cyan-400 mr-2 flex-shrink-0" />
                            {benefit}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

<<<<<<< HEAD
        {/* Industry Compliance */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-white mb-4">Industry-Specific Compliance</h2>
              <p className="text-xl text-slate-300">Meeting the unique requirements of different industries</p>
            </div>
            
            <div className="grid grid-cols-1 lg: anyanyanyanyanyanyanyanyanyanyanyanyanygrid-cols-2 gap-8">
              {industryCompliance.map((industry, index)               => (
                <motion.div
                  key={index}
                  initial = {
  { opacity: 0,
  y: 20 

}}
                  whileInView = {
  { opacity: 1,
  y: 0 

}}
                  transition = {
  { duration: 0.6,
  delay: index * 0.1 

}}
                  className="bg-slate-800/50 border border-slate-700/50 rounded-2xl p-8"
                >
                  <div className="flex items-center mb-6">
                    <div className={`w-16 h-16 bg-gradient-to-br ${industry.color} rounded-2xl flex items-center justify-center mr-4`}>
                      <industry.icon className="h-8 w-8 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-white">{industry.industry}</h3>
                      <div className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-semibold ${
                        industry.status === 'Compliant' ? 'bg-green-500/20 text-green-400' : 'bg-yellow-500/20 text-yellow-400'
                      }`}>
                        {industry.status}
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-3">
                    <h4 className="font-semibold text-cyan-400">Applicable Regulations:</h4>
                    <ul className="space-y-2">
                      {industry.regulations.map((regulation, idx) => (
                        <li key={idx} className="flex items-start text-sm text-slate-300">
                          <CheckCircle className="h-4 w-4 text-cyan-400 mr-2 mt-0.5 flex-shrink-0" />
                          {regulation}
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Compliance Process */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-white mb-4">Compliance Implementation Process</h2>
              <p className="text-xl text-slate-300">Systematic approach to achieving and maintaining compliance</p>
            </div>
            
            <div className="grid grid-cols-1 md: anyanyanyanyanyanyanyanyanyanyanyanyanygrid-cols-2 lg:grid-cols-4 gap-6">
              {complianceProcesses.map((phase, index)               => (
                <motion.div
                  key={index}
                  initial = {
  { opacity: 0,
  y: 20 

}}
                  whileInView = {
  { opacity: 1,
  y: 0 

}}
                  transition = {
  { duration: 0.6,
  delay: index * 0.1 

}}
                  className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-6"
                >
                  <div className={`w-16 h-16 bg-gradient-to-br ${phase.color} rounded-2xl flex items-center justify-center mx-auto mb-4`}>
                    <phase.icon className="h-8 w-8 text-white" />
                  </div>
                  
                  <h3 className="text-lg font-semibold text-white mb-2 text-center">{phase.phase}</h3>
                  <p className="text-slate-300 text-sm mb-4 text-center">{phase.description}</p>
                  
                  <div className="space-y-3 text-sm">
                    <div className="text-cyan-400 font-semibold">
                      Duration: {phase.duration}
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-white mb-2">Activities:</h4>
                      <ul className="space-y-1">
                        {phase.activities.map((activity, idx) => (
                          <li key={idx} className="text-slate-300">• {activity}</li>
                        ))}
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-white mb-2">Deliverables:</h4>
                      <ul className="space-y-1">
                        {phase.deliverables.map((deliverable, idx) => (
                          <li key={idx} className="text-slate-300">• {deliverable}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Compliance Metrics */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-white mb-4">Compliance Performance Metrics</h2>
              <p className="text-xl text-slate-300">Track our compliance performance and continuous improvement</p>
            </div>
            
            <div className="grid grid-cols-1 md: anyanyanyanyanyanyanyanyanyanyanyanyanygrid-cols-2 lg:grid-cols-4 gap-6">
              {complianceMetrics.map((metric, index)               => (
                <motion.div
                  key={index}
                  initial = {
  { opacity: 0,
  y: 20 

}}
                  whileInView = {
  { opacity: 1,
  y: 0 

}}
                  transition = {
  { duration: 0.6,
  delay: index * 0.1 

}}
                  className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-6 text-center"
                >
                  <div className={`w-16 h-16 bg-gradient-to-br ${metric.color} rounded-2xl flex items-center justify-center mx-auto mb-4`}>
                    <metric.icon className="h-8 w-8 text-white" />
                  </div>
                  
                  <div className="text-3xl font-bold text-white mb-2">{metric.value}</div>
                  <h3 className="text-lg font-semibold text-white mb-2">{metric.metric}</h3>
                  <p className="text-slate-300 text-sm mb-3">{metric.description}</p>
                  
                  <div className={`inline-flex items-center text-sm font-semibold ${
                    metric.trend === 'up' ? 'text-green-400' : 
                    metric.trend === 'down' ? 'text-red-400' : 'text-blue-400'
                  }`}>
                    <TrendingUp className={`h-4 w-4 mr-1 ${metric.trend === 'down' ? 'rotate-180' : ''}`} />
                    {metric.change}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Compliance Tools */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-white mb-4">Compliance Management Tools</h2>
              <p className="text-xl text-slate-300">Advanced tools and platforms for effective compliance management</p>
            </div>
            
            <div className="grid grid-cols-1 lg: anyanyanyanyanyanyanyanyanyanyanyanyanygrid-cols-2 gap-8">
              {complianceTools.map((tool, index)               => (
                <motion.div
                  key={index}
                  initial = {
  { opacity: 0,
  y: 20 

}}
                  whileInView = {
  { opacity: 1,
  y: 0 

}}
                  transition = {
  { duration: 0.6,
  delay: index * 0.1 

}}
                  className="bg-slate-800/50 border border-slate-700/50 rounded-2xl p-8"
                >
                  <div className="flex items-center mb-6">
                    <div className={`w-16 h-16 bg-gradient-to-br ${tool.color} rounded-2xl flex items-center justify-center mr-4`}>
                      <tool.icon className="h-8 w-8 text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-white">{tool.name}</h3>
                      <p className="text-slate-300">{tool.description}</p>
                    </div>
                  </div>
                  
                  <div className="space-y-3">
                    <h4 className="font-semibold text-cyan-400 mb-2">Key Features:</h4>
                    <ul className="space-y-2">
                      {tool.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center text-sm text-slate-300">
                          <CheckCircle className="h-4 w-4 text-cyan-400 mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Compliance Contact */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-gradient-to-r from-cyan-600/20 to-blue-600/20 border border-cyan-500/30 rounded-2xl p-12">
              <h2 className="text-3xl font-bold text-white mb-6">
                Compliance Questions or Support?
              </h2>
              <p className="text-lg text-slate-300 mb-8">
                Our compliance team is here to help you understand our compliance posture and address  questions you may have.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="flex items-center justify-center space-x-3 text-slate-300">
                  <Phone className="h-5 w-5 text-cyan-400" />
                  <span>+1 302 464 0950</span>
                </div>
                <div className="flex items-center justify-center space-x-3 text-slate-300">
                  <Mail className="h-5 w-5 text-cyan-400" />
                  <span>compliance@ziontechgroup.com</span>
                </div>
                <div className="flex items-center justify-center space-x-3 text-slate-300">
                  <Globe className="h-5 w-5 text-cyan-400" />
                  <span>Online Form</span>
=======
      {/* Industry Standards */}
      <div className="container mx-auto px-4 py-16">
        <motion.h2
          initial = {
  { opacity: 0,
  y: 20 






}}
          animate = {
  { opacity: 1,
  y: 0 






}}
          transition = {
  { duration: 0.6,
  delay: 0.5 






}}
          className="text-3xl font-bold text-white text-center mb-12"

          Industry Standards & Best Practices
        </motion.h2>

        <div className="grid grid-cols-1 lg: anyanyanyanyanyanyanyanyanyanyanyanyanygrid-cols-2 gap-8">
          {industryStandards.map((standard, index)              => (
            <motion.div
              key={standard.title}
              initial = {
  { opacity: 0,
  y: 20 






}}
              animate = {
  { opacity: 1,
  y: 0 






}}
              transition = {
  { duration: 0.6,
  delay: 0.6 + index * 0.1 






}}
              className="bg-slate-800/30 border border-slate-700 rounded-xl p-6"

              <div className="text-center mb-6">
                <div className={`w-16 h-16 bg-gradient-to-br ${standard.color} rounded-xl flex items-center justify-center mx-auto mb-4`}>
                  <standard.icon className="w-8 h-8 text-white" />
>>>>>>> cursor/fix-project-errors-and-automate-future-fixes-53bd
                </div>
              </div>
<<<<<<< HEAD

              <div className="space-y-3">
                {standard.standards.map((item, idx) => (
                  <div key={idx} className="flex items-center space-x-3">
                    <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                    <span className="text-slate-300 text-sm">{item}</span>
                  </div>
>>>>>>> 4cc4a42f69bd95988691b9548650af1405020894
                ))}
              </div>
            </motion.div>

<<<<<<< HEAD
            {/* Compliance Areas */}
=======
      {/* Compliance Processes */}
      <div className="bg-slate-800/20 py-16">
        <div className="container mx-auto px-4">
          <motion.h2
            initial = {
  { opacity: 0,
  y: 20 






}}
            animate = {
  { opacity: 1,
  y: 0 






}}
            transition = {
  { duration: 0.6,
  delay: 0.7 






}}
            className="text-3xl font-bold text-white text-center mb-12"

            Compliance Processes & Procedures
          </motion.h2>

          <div className="grid grid-cols-1 lg: anyanyanyanyanyanyanyanyanyanyanyanyanygrid-cols-2 gap-8">
            {complianceProcesses.map((process, index)              => (
              <motion.div
                key={process.title}
                initial = {
  { opacity: 0,
  y: 20 






}}
                animate = {
  { opacity: 1,
  y: 0 






}}
                transition = {
  { duration: 0.6,
  delay: 0.8 + index * 0.1 






}}
                className="bg-slate-800/30 border border-slate-700 rounded-xl p-6"

                <div className="text-center mb-6">
                  <div className={`w-16 h-16 bg-gradient-to-br ${process.color} rounded-xl flex items-center justify-center mx-auto mb-4`}>
                    <process.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">{process.title}</h3>
                  <p className="text-slate-400 text-sm mb-3">{process.description}</p>
                  <span className="px-3 py-1 bg-slate-700 rounded-full text-xs text-slate-300">
                    Frequency: {process.frequency}
                  </span>
                </div>

                <div className="space-y-3">
                  {process.process.map((item, idx) => (
                    <div key={idx} className="flex items-center space-x-3">
                      <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                      <span className="text-slate-300 text-sm">{item}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
>>>>>>> cursor/fix-project-errors-and-automate-future-fixes-53bd
          </div>
        </section>
      </div>
<<<<<<< HEAD
    </>
  )}
=======

      {/* Compliance Tools */}
      <div className="container mx-auto px-4 py-16">
        <motion.h2
          initial = {
  { opacity: 0,
  y: 20 






}}
          animate = {
  { opacity: 1,
  y: 0 






}}
          transition = {
  { duration: 0.6,
  delay: 0.9 






}}
          className="text-3xl font-bold text-white text-center mb-12"

          Compliance Tools & Resources
        </motion.h2>

        <div className="grid grid-cols-1 md: anyanyanyanyanyanyanyanyanyanyanyanyanygrid-cols-2 lg:grid-cols-4 gap-6">
          {complianceTools.map((tool, index)              => (
>>>>>>> 4cc4a42f69bd95988691b9548650af1405020894
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h2 className="text-3xl font-bold text-white text-center mb-12">
                Key Compliance Areas
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {complianceAreas.map((area, index) => (
                  <motion.div
                    key={area.area}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-8"
                  >
                    <div className="flex items-center space-x-4 mb-6">
                      <div className="w-12 h-12 bg-cyan-500/20 rounded-xl flex items-center justify-center">
                        <area.icon className="w-6 h-6 text-cyan-400" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-white">{area.area}</h3>
                        <p className="text-gray-300 text-sm">{area.description}</p>
                      </div>
                    </div>
                    <ul className="space-y-3">
                      {area.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start space-x-3">
                          <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-300 text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                ))}
              </div>
            </motion.div>

<<<<<<< HEAD
            {/* Compliance Process */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-8"
            >
              <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
                <FileText className="w-6 h-6 text-cyan-400 mr-3" />
                Our Compliance Process
              </h2>
              <p className="text-gray-300 mb-8">
                We follow a systematic approach to achieve and maintain compliance across all frameworks and standards.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {complianceProcesses.map((process, index) => (
                  <motion.div
                    key={process.step}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="text-center"
                  >
                    <div className="w-16 h-16 bg-cyan-500/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                      <process.icon className="w-8 h-8 text-cyan-400" />
=======
      {/* Contact Information */}
      <div className="bg-slate-800/20 py-16">
        <div className="container mx-auto px-4">
          <motion.h2
            initial = {
  { opacity: 0,
  y: 20 






}}
            animate = {
  { opacity: 1,
  y: 0 






}}
            transition = {
  { duration: 0.6,
  delay: 1.1 






}}
            className="text-3xl font-bold text-white text-center mb-12"

            Compliance Support & Inquiries
          </motion.h2>

          <div className="grid grid-cols-1 lg: anyanyanyanyanyanyanyanyanyanyanyanyanygrid-cols-2 gap-8">
            {contactInfo.map((contact, index)              => (
              <motion.div
                key={contact.title}
                initial = {
  { opacity: 0,
  x: index % 2 === 0 ? -20 : 20 






}}
                animate = {
  { opacity: 1,
  x: 0 






}}
                transition = {
  { duration: 0.6,
  delay: 1.2 + index * 0.1 






}}
                className="bg-slate-800/30 border border-slate-700 rounded-xl p-6"

                <h3 className="text-xl font-semibold text-white mb-4">{contact.title}</h3>
                <p className="text-slate-400 mb-6">{contact.description}</p>

                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-slate-700 rounded-lg flex items-center justify-center">
                      <span className="text-green-400 text-sm font-medium">@</span>
>>>>>>> 4cc4a42f69bd95988691b9548650af1405020894
                    </div>
                    <h3 className="text-lg font-bold text-white mb-2">{process.step}</h3>
                    <p className="text-gray-300 text-sm mb-3">{process.description}</p>
                    <span className="inline-block px-3 py-1 bg-cyan-500/10 text-cyan-400 text-xs font-medium rounded-full border border-cyan-500/20">
                      {process.duration}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Compliance Benefits */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-8"
            >
              <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
                <Award className="w-6 h-6 text-cyan-400 mr-3" />
                Benefits of Our Compliance Program
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-lg font-semibold text-white mb-4">For Your Business</h3>
                  <ul className="space-y-2 text-gray-300">
                    <li className="flex items-start space-x-2">
                      <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full mt-2 flex-shrink-0"></div>
                      <span>Reduced regulatory risk and penalties</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full mt-2 flex-shrink-0"></div>
                      <span>Enhanced customer trust and confidence</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full mt-2 flex-shrink-0"></div>
                      <span>Competitive advantage in regulated industries</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full mt-2 flex-shrink-0"></div>
                      <span>Streamlined audit and assessment processes</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-4">For Your Data</h3>
                  <ul className="space-y-2 text-gray-300">
                    <li className="flex items-start space-x-2">
                      <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full mt-2 flex-shrink-0"></div>
                      <span>Enhanced data protection and security</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full mt-2 flex-shrink-0"></div>
                      <span>Comprehensive privacy controls</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full mt-2 flex-shrink-0"></div>
                      <span>Regular security assessments and updates</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full mt-2 flex-shrink-0"></div>
                      <span>Incident response and recovery procedures</span>
                    </li>
                  </ul>
                </div>
              </div>
            </motion.div>

            {/* Compliance Monitoring */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-8"
            >
              <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
                <BarChart3 className="w-6 h-6 text-cyan-400 mr-3" />
                Continuous Compliance Monitoring
              </h2>
              <p className="text-gray-300 mb-6">
                Compliance is not a one-time achievement—it's an ongoing process that requires continuous monitoring, 
                assessment, and improvement.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="w-16 h-16 bg-green-500/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <CheckCircle className="w-8 h-8 text-green-400" />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">Regular Audits</h3>
                  <p className="text-gray-300 text-sm">Quarterly internal audits and annual external assessments</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-blue-500/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Zap className="w-8 h-8 text-blue-400" />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">Real-time Monitoring</h3>
                  <p className="text-gray-300 text-sm">Continuous monitoring of compliance controls and metrics</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-purple-500/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Users className="w-8 h-8 text-purple-400" />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">Expert Team</h3>
                  <p className="text-gray-300 text-sm">Dedicated compliance specialists and consultants</p>
                </div>
              </div>
            </motion.div>

            {/* Compliance Support */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border border-cyan-500/30 rounded-2xl p-8"
            >
              <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
                <Shield className="w-6 h-6 text-cyan-400 mr-3" />
                Compliance Support & Resources
              </h2>
              <p className="text-gray-300 mb-6">
                Our compliance team is here to help you understand our compliance status, 
                answer questions, and provide the documentation you need.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-lg font-semibold text-white mb-3">Documentation & Reports</h3>
                  <ul className="space-y-2 text-gray-300">
                    <li className="flex items-start space-x-2">
                      <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full mt-2 flex-shrink-0"></div>
                      <span>Compliance certificates and reports</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full mt-2 flex-shrink-0"></div>
                      <span>Security and privacy documentation</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full mt-2 flex-shrink-0"></div>
                      <span>Audit reports and findings</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full mt-2 flex-shrink-0"></div>
                      <span>Compliance roadmap and updates</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-3">Support & Consultation</h3>
                  <ul className="space-y-2 text-gray-300">
                    <li className="flex items-start space-x-2">
                      <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full mt-2 flex-shrink-0"></div>
                      <span>Compliance consultation services</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full mt-2 flex-shrink-0"></div>
                      <span>Regulatory guidance and updates</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full mt-2 flex-shrink-0"></div>
                      <span>Compliance training and awareness</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full mt-2 flex-shrink-0"></div>
                      <span>Incident response support</span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="mt-6 p-4 bg-cyan-500/10 border border-cyan-500/20 rounded-lg">
                <p className="text-cyan-400 text-sm">
                  <strong>Response Time:</strong> We aim to respond to compliance inquiries within 24 hours and provide detailed documentation within 5 business days.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Compliance;
