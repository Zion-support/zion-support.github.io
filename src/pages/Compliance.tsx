import React from 'react';
import { motion } from 'framer-motion';
import { SEO } from '../components/SEO';
import { 
  Shield, 
  CheckCircle, 
  FileText, 
  Lock, 
  Users, 
  Globe,
  Award,
  Database,
  Network,
  Server,
  Cloud,
  Zap,
  Heart,
  Brain,
  Rocket
} from 'lucide-react';

export default function Compliance() {
  const standards = [
    {
      icon: Shield,
      title: 'ISO 27001',
      description: 'Information Security Management System',
      features: ['Risk assessment', 'Security controls', 'Incident management', 'Business continuity'],
      status: 'Certified'
    },
    {
      icon: Lock,
      title: 'SOC 2 Type II',
      description: 'Service Organization Control 2',
      features: ['Security', 'Availability', 'Processing integrity', 'Confidentiality'],
      status: 'Compliant'
    },
    {
      icon: Globe,
      title: 'GDPR',
      description: 'General Data Protection Regulation',
      features: ['Data protection', 'Privacy rights', 'Consent management', 'Breach notification'],
      status: 'Compliant'
    },
    {
      icon: Users,
      title: 'HIPAA',
      description: 'Health Insurance Portability and Accountability Act',
      features: ['Patient privacy', 'Data security', 'Administrative safeguards', 'Physical safeguards'],
      status: 'Compliant'
    }
  ];

  const frameworks = [
    {
      icon: Database,
      title: 'NIST Cybersecurity Framework',
      description: 'National Institute of Standards and Technology cybersecurity framework',
      coverage: 'Identify, Protect, Detect, Respond, Recover'
    },
    {
      icon: Network,
      title: 'COBIT',
      description: 'Control Objectives for Information and Related Technologies',
      coverage: 'Governance, Risk Management, Compliance, Performance'
    },
    {
      icon: Server,
      title: 'ITIL',
      description: 'Information Technology Infrastructure Library',
      coverage: 'Service Strategy, Design, Transition, Operation, Continual Improvement'
    },
    {
      icon: Cloud,
      title: 'Cloud Security Alliance',
      description: 'Cloud security best practices and controls',
      coverage: 'Data Security, Identity Management, Application Security, Infrastructure'
    }
  ];

  const industries = [
    {
      icon: Heart,
      title: 'Healthcare',
      description: 'HIPAA, HITECH, FDA compliance for medical technology',
      services: ['Medical device security', 'Patient data protection', 'Clinical system compliance']
    },
    {
      icon: Zap,
      title: 'Financial Services',
      description: 'SOX, PCI DSS, GLBA compliance for financial technology',
      services: ['Payment security', 'Financial data protection', 'Regulatory reporting']
    },
    {
      icon: Brain,
      title: 'Education',
      description: 'FERPA, COPPA compliance for educational technology',
      services: ['Student data protection', 'Educational app security', 'Privacy compliance']
    },
    {
      icon: Rocket,
      title: 'Government',
      description: 'FedRAMP, FISMA, StateRAMP compliance for government contracts',
      services: ['Federal security', 'State compliance', 'Contract requirements']
    }
  ];

  const complianceServices = [
    {
      icon: FileText,
      title: 'Compliance Assessment',
      description: 'Comprehensive evaluation of current compliance status',
      deliverables: ['Gap analysis', 'Risk assessment', 'Remediation roadmap', 'Compliance report']
    },
    {
      icon: Shield,
      title: 'Security Implementation',
      description: 'Implementation of required security controls and measures',
      deliverables: ['Security architecture', 'Control implementation', 'Testing and validation', 'Documentation']
    },
    {
      icon: CheckCircle,
      title: 'Audit Support',
      description: 'Support during compliance audits and assessments',
      deliverables: ['Audit preparation', 'Evidence collection', 'Auditor support', 'Remediation assistance']
    },
    {
      icon: Users,
      title: 'Training & Awareness',
      description: 'Employee training on compliance requirements and best practices',
      deliverables: ['Training materials', 'Awareness programs', 'Compliance policies', 'Regular updates']
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <SEO 
        title="Compliance & Regulatory Services - Zion Tech Group"
        description="Zion Tech Group provides comprehensive compliance services for ISO 27001, SOC 2, GDPR, HIPAA, and industry-specific regulations. Expert guidance for regulatory compliance."
      />
      
      {/* Hero Section */}
      <section className="relative py-20 px-4">
        <div className="container mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex justify-center mb-6">
              <div className="w-20 h-20 bg-gradient-to-br from-cyan-400 via-blue-500 to-purple-600 rounded-2xl flex items-center justify-center">
                <Shield className="w-10 h-10 text-white" />
              </div>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Compliance & Regulatory Services
            </h1>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto mb-8">
              Expert guidance and implementation support for industry-leading compliance standards. 
              From ISO 27001 to GDPR, we ensure your organization meets all regulatory requirements.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="px-8 py-4 bg-gradient-to-r from-cyan-400 to-blue-500 text-white font-semibold rounded-lg hover:from-cyan-500 hover:to-blue-600 transition-all duration-300 transform hover:scale-105"
              >
                Get Compliance Assessment
              </a>
              <a
                href="/services-overview"
                className="px-8 py-4 border-2 border-cyan-400 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-400 hover:text-white transition-all duration-300"
              >
                View All Services
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Standards Compliance */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Industry Standards Compliance
            </h2>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto">
              We maintain compliance with the most rigorous industry standards, 
              ensuring your data and systems meet global security requirements.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {standards.map((standard, index) => (
              <motion.div
                key={standard.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700/50 hover:border-cyan-400/50 transition-all duration-300"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-xl flex items-center justify-center">
                    <standard.icon className="w-8 h-8 text-white" />
                  </div>
                  <span className="px-3 py-1 bg-green-500/20 text-green-400 text-sm font-medium rounded-full border border-green-500/30">
                    {standard.status}
                  </span>
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{standard.title}</h3>
                <p className="text-slate-300 mb-4">{standard.description}</p>
                <ul className="space-y-2">
                  {standard.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-slate-400">
                      <CheckCircle className="w-4 h-4 text-cyan-400 mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Frameworks Section */}
      <section className="py-20 px-4 bg-slate-800/30">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Industry Frameworks & Best Practices
            </h2>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto">
              We follow established industry frameworks and best practices to ensure 
              comprehensive security and compliance coverage.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {frameworks.map((framework, index) => (
              <motion.div
                key={framework.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700/50"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-purple-400 to-pink-500 rounded-xl flex items-center justify-center mb-4">
                  <framework.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{framework.title}</h3>
                <p className="text-slate-300 mb-4">{framework.description}</p>
                <div className="bg-slate-700/50 rounded-lg p-3">
                  <p className="text-sm text-cyan-400 font-medium">Coverage Areas:</p>
                  <p className="text-sm text-slate-300">{framework.coverage}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Industry Compliance */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Industry-Specific Compliance
            </h2>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto">
              Specialized compliance services tailored to your industry's unique 
              regulatory requirements and challenges.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {industries.map((industry, index) => (
              <motion.div
                key={industry.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700/50"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-green-400 to-emerald-500 rounded-xl flex items-center justify-center mb-4">
                  <industry.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{industry.title}</h3>
                <p className="text-slate-300 mb-4">{industry.description}</p>
                <ul className="space-y-2">
                  {industry.services.map((service, idx) => (
                    <li key={idx} className="flex items-center text-sm text-slate-400">
                      <CheckCircle className="w-4 h-4 text-cyan-400 mr-2 flex-shrink-0" />
                      {service}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Compliance Services */}
      <section className="py-20 px-4 bg-gradient-to-r from-cyan-900/20 to-blue-900/20">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Our Compliance Services
            </h2>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto">
              End-to-end compliance services to help your organization achieve 
              and maintain regulatory compliance across all requirements.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {complianceServices.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700/50"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-xl flex items-center justify-center mb-4">
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{service.title}</h3>
                <p className="text-slate-300 mb-4">{service.description}</p>
                <div className="bg-slate-700/50 rounded-lg p-3">
                  <p className="text-sm text-cyan-400 font-medium mb-2">Deliverables:</p>
                  <ul className="space-y-1">
                    {service.deliverables.map((deliverable, idx) => (
                      <li key={idx} className="text-sm text-slate-300">• {deliverable}</li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Achieve Compliance?
            </h2>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto mb-8">
              Let our compliance experts help you navigate complex regulatory requirements 
              and implement the necessary controls to achieve and maintain compliance.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="px-8 py-4 bg-gradient-to-r from-cyan-400 to-blue-500 text-white font-semibold rounded-lg hover:from-cyan-500 hover:to-blue-600 transition-all duration-300 transform hover:scale-105"
              >
                Start Compliance Journey
              </a>
              <a
                href="/services/ai-compliance-copilot"
                className="px-8 py-4 border-2 border-cyan-400 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-400 hover:text-white transition-all duration-300"
              >
                AI Compliance Assistant
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}