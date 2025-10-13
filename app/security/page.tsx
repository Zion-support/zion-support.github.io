import React from 'react';
import { Shield, Lock, Eye, AlertTriangle, CheckCircle, Server, Key, Database, Users, Globe, FileText, Clock, Target, Edit, Trash2, Pause, Download } from 'lucide-react';

const SecurityPage: React.FC = () => {
  const securityFeatures = [
    {
      title: 'End-to-End Encryption',
      description: 'All data is encrypted using industry-standard AES-256 encryption both in transit and at rest.',
      icon: <Lock className="w-6 h-6" />,
      status: 'Active'
    },
    {
      title: 'Multi-Factor Authentication',
      description: 'Enhanced security with MFA for all user accounts and administrative access.',
      icon: <Key className="w-6 h-6" />,
      status: 'Active'
    },
    {
      title: 'Regular Security Audits',
      description: 'Comprehensive security assessments conducted by third-party experts quarterly.',
      icon: <Shield className="w-6 h-6" />,
      status: 'Active'
    },
    {
      title: 'Intrusion Detection',
      description: 'Advanced monitoring systems that detect and prevent unauthorized access attempts.',
      icon: <Eye className="w-6 h-6" />,
      status: 'Active'
    },
    {
      title: 'Data Backup & Recovery',
      description: 'Automated daily backups with secure off-site storage and rapid recovery capabilities.',
      icon: <Database className="w-6 h-6" />,
      status: 'Active'
    },
    {
      title: 'Access Controls',
      description: 'Role-based access controls ensuring users only access data they need for their work.',
      icon: <Users className="w-6 h-6" />,
      status: 'Active'
    }
  ];

  const complianceStandards = [
    {
      name: 'SOC 2 Type II',
      description: 'Audited controls for security, availability, and confidentiality',
      status: 'Certified',
      icon: <CheckCircle className="w-5 h-5 text-green-400" />
    },
    {
      name: 'ISO 27001',
      description: 'Information security management system certification',
      status: 'Certified',
      icon: <CheckCircle className="w-5 h-5 text-green-400" />
    },
    {
      name: 'GDPR Compliance',
      description: 'Full compliance with European data protection regulations',
      status: 'Compliant',
      icon: <CheckCircle className="w-5 h-5 text-green-400" />
    },
    {
      name: 'CCPA Compliance',
      description: 'California Consumer Privacy Act compliance',
      status: 'Compliant',
      icon: <CheckCircle className="w-5 h-5 text-green-400" />
    },
    {
      name: 'HIPAA Ready',
      description: 'Healthcare data protection capabilities',
      status: 'Ready',
      icon: <CheckCircle className="w-5 h-5 text-green-400" />
    },
    {
      name: 'PCI DSS',
      description: 'Payment card industry data security standards',
      status: 'Compliant',
      icon: <CheckCircle className="w-5 h-5 text-green-400" />
    }
  ];

  const securityMeasures = [
    {
      category: 'Infrastructure Security',
      measures: [
        'Secure data centers with 24/7 monitoring',
        'Redundant systems and failover capabilities',
        'Physical security controls and access restrictions',
        'Environmental controls and fire suppression'
      ]
    },
    {
      category: 'Network Security',
      measures: [
        'Firewall protection and intrusion prevention',
        'DDoS protection and traffic filtering',
        'Secure VPN access for remote workers',
        'Network segmentation and isolation'
      ]
    },
    {
      category: 'Application Security',
      measures: [
        'Regular security testing and vulnerability assessments',
        'Secure coding practices and code reviews',
        'Automated security scanning in CI/CD pipeline',
        'Penetration testing by certified professionals'
      ]
    },
    {
      category: 'Data Protection',
      measures: [
        'Data classification and handling procedures',
        'Secure data deletion and retention policies',
        'Data loss prevention (DLP) systems',
        'Regular data backup and recovery testing'
      ]
    }
  ];

  const incidentResponse = [
    {
      phase: 'Detection',
      description: 'Automated monitoring systems detect potential security incidents',
      timeframe: 'Immediate',
      icon: <Eye className="w-5 h-5" />
    },
    {
      phase: 'Assessment',
      description: 'Security team assesses the scope and impact of the incident',
      timeframe: 'Within 1 hour',
      icon: <AlertTriangle className="w-5 h-5" />
    },
    {
      phase: 'Containment',
      description: 'Immediate steps taken to contain and prevent further damage',
      timeframe: 'Within 2 hours',
      icon: <Shield className="w-5 h-5" />
    },
    {
      phase: 'Investigation',
      description: 'Thorough investigation to understand root cause and impact',
      timeframe: 'Within 24 hours',
      icon: <FileText className="w-5 h-5" />
    },
    {
      phase: 'Recovery',
      description: 'Restore systems and services to normal operation',
      timeframe: 'Within 48 hours',
      icon: <Server className="w-5 h-5" />
    },
    {
      phase: 'Lessons Learned',
      description: 'Post-incident review and improvement of security measures',
      timeframe: 'Within 1 week',
      icon: <CheckCircle className="w-5 h-5" />
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 py-16">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent mb-6">
            Security & Compliance
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Your data security is our top priority. We implement industry-leading security measures 
            and maintain compliance with the highest standards.
          </p>
        </div>

        {/* Security Overview */}
        <div className="bg-gradient-to-r from-green-500/10 to-cyan-500/10 rounded-xl p-8 border border-green-500/20 mb-16">
          <div className="flex items-start">
            <Shield className="w-8 h-8 text-green-400 mr-4 mt-1" />
            <div>
              <h2 className="text-2xl font-bold text-white mb-4">Security First Approach</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                At Zion Tech Group, security is not an afterthought—it's built into every aspect of our operations. 
                We employ a defense-in-depth strategy with multiple layers of security controls to protect your data 
                and ensure business continuity.
              </p>
              <div className="flex items-center text-green-400">
                <CheckCircle className="w-5 h-5 mr-2" />
                <span className="font-semibold">99.9% Uptime • Zero Data Breaches • 24/7 Monitoring</span>
              </div>
            </div>
          </div>
        </div>

        {/* Security Features */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8">Security Features</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {securityFeatures.map((feature, index) => (
              <div key={index} className="bg-slate-800/50 rounded-xl p-6 border border-gray-700 hover:border-green-500/50 transition-all duration-300">
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 bg-gradient-to-r from-green-500/20 to-cyan-500/20 rounded-lg flex items-center justify-center text-green-400">
                    {feature.icon}
                  </div>
                  <span className="px-3 py-1 bg-green-500/20 text-green-400 text-xs font-semibold rounded-full">
                    {feature.status}
                  </span>
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{feature.title}</h3>
                <p className="text-gray-300 text-sm">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Compliance Standards */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8">Compliance & Certifications</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {complianceStandards.map((standard, index) => (
              <div key={index} className="bg-slate-800/50 rounded-xl p-6 border border-gray-700 hover:border-blue-500/50 transition-all duration-300">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-semibold text-white">{standard.name}</h3>
                  {standard.icon}
                </div>
                <p className="text-gray-300 text-sm mb-3">{standard.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-blue-400 text-sm font-medium">{standard.status}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Security Measures */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8">Comprehensive Security Measures</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {securityMeasures.map((category, index) => (
              <div key={index} className="bg-slate-800/50 rounded-xl p-6 border border-gray-700">
                <h3 className="text-xl font-semibold text-cyan-400 mb-4">{category.category}</h3>
                <ul className="space-y-3">
                  {category.measures.map((measure, measureIndex) => (
                    <li key={measureIndex} className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-300 text-sm">{measure}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Incident Response */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8">Incident Response Plan</h2>
          <div className="bg-slate-800/50 rounded-xl p-8 border border-gray-700">
            <p className="text-gray-300 mb-8 text-center">
              Our comprehensive incident response plan ensures rapid detection, containment, and recovery from security incidents.
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {incidentResponse.map((phase, index) => (
                <div key={index} className="text-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-orange-500/20 to-red-500/20 rounded-full flex items-center justify-center mx-auto mb-4 text-orange-400">
                    {phase.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">{phase.phase}</h3>
                  <p className="text-gray-300 text-sm mb-2">{phase.description}</p>
                  <div className="inline-block px-3 py-1 bg-orange-500/20 text-orange-400 text-xs font-semibold rounded-full">
                    {phase.timeframe}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Security Contact */}
        <div className="bg-gradient-to-r from-slate-800/50 to-purple-900/50 rounded-xl p-8 border border-gray-700">
          <h2 className="text-2xl font-bold text-white mb-6">Security Contact</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-semibold text-cyan-400 mb-4">Report Security Issues</h3>
              <p className="text-gray-300 mb-4">
                If you discover a security vulnerability or have concerns about our security practices, 
                please contact our security team immediately.
              </p>
              <div className="space-y-2">
                <p className="text-white">
                  <strong>Email:</strong> security@ziontechgroup.com
                </p>
                <p className="text-white">
                  <strong>Phone:</strong> +1 302 464 0950
                </p>
                <p className="text-white">
                  <strong>Emergency:</strong> Available 24/7
                </p>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-purple-400 mb-4">Security Resources</h3>
              <div className="space-y-3">
                <a href="/docs/security" className="block text-cyan-400 hover:text-cyan-300 transition-colors">
                  Security Documentation →
                </a>
                <a href="/privacy" className="block text-cyan-400 hover:text-cyan-300 transition-colors">
                  Privacy Policy →
                </a>
                <a href="/gdpr" className="block text-cyan-400 hover:text-cyan-300 transition-colors">
                  GDPR Compliance →
                </a>
                <a href="/contact" className="block text-cyan-400 hover:text-cyan-300 transition-colors">
                  Contact Security Team →
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Last Updated */}
        <div className="text-center mt-12">
          <p className="text-gray-400 text-sm">
            Security information last updated: {new Date().toLocaleDateString('en-US', { 
              year: 'numeric', 
              month: 'long', 
              day: 'numeric' 
            })}
          </p>
        </div>
      </div>
    </div>
  );
};

export default SecurityPage;