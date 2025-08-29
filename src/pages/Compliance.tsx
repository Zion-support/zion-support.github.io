import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Shield, 
  CheckCircle, 
  AlertTriangle, 
  FileText, 
  Lock, 
  Users, 
  Database, 
  Globe,
  Zap,
  Brain,
  Cloud,
  Rocket,
  Award,
  TrendingUp,
  Eye,
  Key,
  Server,
  Network,
  CreditCard,
  Cookie,
  ChevronRight
} from 'lucide-react';
import { SEO } from '../components/SEO';

export default function Compliance() {
  const complianceFrameworks = [
    {
      name: 'SOC 2 Type II',
      icon: Shield,
      color: 'from-green-600 to-emerald-600',
      description: 'Service Organization Control 2 compliance for data security',
      status: 'Certified',
      features: ['Data Security', 'Availability', 'Processing Integrity', 'Confidentiality', 'Privacy']
    },
    {
      name: 'ISO 27001',
      icon: Lock,
      color: 'from-blue-600 to-cyan-600',
      description: 'Information Security Management System certification',
      status: 'Certified',
      features: ['Risk Management', 'Security Controls', 'Continuous Improvement', 'Documentation']
    },
    {
      name: 'GDPR',
      icon: Users,
      color: 'from-purple-600 to-pink-600',
      description: 'General Data Protection Regulation compliance',
      status: 'Compliant',
      features: ['Data Privacy', 'User Rights', 'Data Processing', 'Breach Notification']
    },
    {
      name: 'HIPAA',
      icon: Database,
      color: 'from-red-600 to-pink-600',
      description: 'Health Insurance Portability and Accountability Act',
      status: 'Compliant',
      features: ['PHI Protection', 'Security Standards', 'Privacy Rules', 'Breach Protocol']
    },
    {
      name: 'PCI DSS',
      icon: CreditCard,
      color: 'from-orange-600 to-red-600',
      description: 'Payment Card Industry Data Security Standard',
      status: 'Compliant',
      features: ['Card Data Security', 'Network Security', 'Access Control', 'Monitoring']
    },
    {
      name: 'FedRAMP',
      icon: Globe,
      color: 'from-indigo-600 to-purple-600',
      description: 'Federal Risk and Authorization Management Program',
      status: 'In Progress',
      features: ['Cloud Security', 'Government Standards', 'Risk Assessment', 'Continuous Monitoring']
    }
  ];

  const securityFeatures = [
    {
      title: 'Zero Trust Architecture',
      icon: Shield,
      description: 'Never trust, always verify security model',
      features: ['Identity Verification', 'Device Trust', 'Network Segmentation', 'Continuous Monitoring']
    },
    {
      title: 'AI-Powered Security',
      icon: Brain,
      description: 'Machine learning for threat detection and response',
      features: ['Behavioral Analysis', 'Threat Intelligence', 'Automated Response', 'Risk Scoring']
    },
    {
      title: 'Data Encryption',
      icon: Lock,
      description: 'End-to-end encryption for data protection',
      features: ['At Rest Encryption', 'In Transit Encryption', 'Key Management', 'Hardware Security']
    },
    {
      title: 'Access Control',
      icon: Key,
      description: 'Multi-factor authentication and role-based access',
      features: ['MFA', 'RBAC', 'SSO Integration', 'Privileged Access Management']
    }
  ];

  const complianceTools = [
    {
      name: 'AI Compliance Copilot',
      href: '/services/ai-compliance-copilot',
      icon: Brain,
      description: 'Automated compliance monitoring and reporting',
      features: ['Real-time Monitoring', 'Automated Reports', 'Risk Assessment', 'Compliance Dashboards']
    },
    {
      name: 'SOC 2 Compliance Tracker',
      href: '/services/soc2-compliance-tracker',
      icon: CheckCircle,
      description: 'SOC 2 compliance management and tracking',
      features: ['Control Monitoring', 'Evidence Collection', 'Audit Preparation', 'Compliance Scoring']
    },
    {
      name: 'GDPR Cookie Compliance',
      href: '/services/gdpr-cookie-compliance',
      icon: Cookie,
      description: 'Cookie consent and privacy management',
      features: ['Consent Management', 'Cookie Tracking', 'Privacy Notices', 'Data Subject Rights']
    },
    {
      name: 'Vendor Risk Management',
      href: '/services/vendor-risk-management',
      icon: Users,
      description: 'Third-party vendor security assessment',
      features: ['Risk Scoring', 'Compliance Monitoring', 'Contract Management', 'Performance Tracking']
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100">
      <SEO 
        title="Compliance - Zion Tech Group"
        description="Learn about Zion Tech Group's compliance certifications, frameworks, and commitment to meeting industry standards and regulatory requirements."
      />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <div className="flex justify-center mb-6">
              <div className="w-20 h-20 bg-gradient-to-br from-green-400 to-emerald-500 rounded-2xl flex items-center justify-center">
                <Shield className="w-10 h-10 text-white" />
              </div>
            </div>
            <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-green-400 to-emerald-500 bg-clip-text text-transparent">
              Compliance & Security
            </h1>
            <p className="text-xl text-slate-300 mb-8">
              Enterprise-grade security and regulatory compliance for your business
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                to="/contact"
                className="px-8 py-4 bg-gradient-to-r from-green-500 to-emerald-500 text-white font-semibold rounded-lg hover:from-green-600 hover:to-emerald-600 transition-all duration-200 transform hover:scale-105"
              >
                Get Compliance Report
              </Link>
              <Link
                to="/services/ai-compliance-copilot"
                className="px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-slate-900 transition-colors"
              >
                Learn About AI Compliance
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Compliance Frameworks */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-slate-900 mb-4">
              Compliance Frameworks
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              We maintain compliance with major industry standards and regulations
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {complianceFrameworks.map((framework, index) => (
              <motion.div
                key={framework.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-slate-200"
              >
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${framework.color} flex items-center justify-center`}>
                      <framework.icon className="w-6 h-6 text-white" />
                    </div>
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                      framework.status === 'Certified' ? 'bg-green-100 text-green-800' :
                      framework.status === 'Compliant' ? 'bg-blue-100 text-blue-800' :
                      'bg-yellow-100 text-yellow-800'
                    }`}>
                      {framework.status}
                    </span>
                  </div>
                  
                  <h3 className="text-xl font-bold text-slate-900 mb-2">{framework.name}</h3>
                  <p className="text-slate-600 mb-4">{framework.description}</p>
                  
                  <div className="space-y-2">
                    {framework.features.map((feature) => (
                      <div key={feature} className="flex items-center text-sm text-slate-600">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                        {feature}
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Security Features */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-slate-900 mb-4">
              Security Features
            </h2>
            <p className="text-xl text-slate-600">
              Advanced security measures to protect your data and systems
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {securityFeatures.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-2xl shadow-lg p-8 border border-slate-200"
              >
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center mr-4">
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-slate-900">{feature.title}</h3>
                    <p className="text-slate-600">{feature.description}</p>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 gap-3">
                  {feature.features.map((item) => (
                    <div key={item} className="flex items-center text-slate-700">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                      {item}
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Compliance Tools */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-slate-900 mb-4">
              Compliance Tools & Solutions
            </h2>
            <p className="text-xl text-slate-600">
              AI-powered tools to automate and streamline your compliance processes
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {complianceTools.map((tool, index) => (
              <motion.div
                key={tool.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-slate-200"
              >
                <div className="p-8">
                  <div className="flex items-center mb-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mr-4">
                      <tool.icon className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-slate-900">{tool.name}</h3>
                      <p className="text-slate-600">{tool.description}</p>
                    </div>
                  </div>
                  
                  <div className="space-y-3 mb-6">
                    {tool.features.map((feature) => (
                      <div key={feature} className="flex items-center text-slate-700">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                        {feature}
                      </div>
                    ))}
                  </div>
                  
                  <Link
                    to={tool.href}
                    className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold rounded-lg hover:from-purple-600 hover:to-pink-600 transition-all duration-200 transform hover:scale-105"
                  >
                    Learn More
                    <ChevronRight className="w-4 h-4 ml-2" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-r from-green-500 to-emerald-500 rounded-2xl p-12 text-center text-white"
          >
            <h2 className="text-4xl font-bold mb-4">
              Ready to Achieve Compliance?
            </h2>
            <p className="text-xl mb-8 text-green-100">
              Let us help you navigate the complex world of regulatory compliance
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                to="/contact"
                className="px-8 py-4 bg-white text-green-600 font-semibold rounded-lg hover:bg-slate-100 transition-colors"
              >
                Schedule Consultation
              </Link>
              <Link
                to="/services/ai-compliance-copilot"
                className="px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-green-600 transition-colors"
              >
                View Compliance Solutions
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}