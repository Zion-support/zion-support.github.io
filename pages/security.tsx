import React from 'react';
import { Shield, Lock, Eye, AlertTriangle, CheckCircle, Users, Database, Globe, Server, Key, Fingerprint, Activity, Target } from 'lucide-react';

export default function Security() {
  const securityPillars = [
    {
      pillar: 'Infrastructure Security',
      description: 'Secure cloud infrastructure with enterprise-grade protection',
      icon: Server,
      color: 'from-blue-500 to-cyan-500',
      features: [
        'Multi-cloud security architecture',
        'DDoS protection and mitigation',
        'Network segmentation and isolation',
        'Secure data center facilities',
        'Environmental monitoring and controls'
      ]
    },
    {
      pillar: 'Application Security',
      description: 'Secure development practices and continuous security testing',
      icon: Lock,
      color: 'from-green-500 to-emerald-500',
      features: [
        'Secure coding standards and practices',
        'Regular security code reviews',
        'Automated vulnerability scanning',
        'Penetration testing and assessments',
        'Security training for developers'
      ]
    },
    {
      pillar: 'Data Protection',
      description: 'Comprehensive data security and privacy measures',
      icon: Database,
      color: 'from-purple-500 to-indigo-500',
      features: [
        'Encryption at rest and in transit',
        'Data classification and handling',
        'Access controls and authentication',
        'Data backup and recovery',
        'Privacy by design principles'
      ]
    },
    {
      pillar: 'Identity & Access Management',
      description: 'Robust authentication and authorization systems',
      icon: Key,
      color: 'from-orange-500 to-red-500',
      features: [
        'Multi-factor authentication (MFA)',
        'Role-based access control (RBAC)',
        'Single sign-on (SSO) integration',
        'Privileged access management',
        'Session management and monitoring'
      ]
    },
    {
      pillar: 'Monitoring & Response',
      description: '24/7 security monitoring and incident response',
      icon: Activity,
      color: 'from-pink-500 to-rose-500',
      features: [
        'Real-time threat detection',
        'Security information and event management',
        'Incident response procedures',
        'Forensic analysis capabilities',
        'Security metrics and reporting'
      ]
    },
    {
      pillar: 'Compliance & Governance',
      description: 'Security policies and regulatory compliance',
      icon: Shield,
      color: 'from-indigo-500 to-blue-500',
      features: [
        'Security policies and procedures',
        'Regular security audits',
        'Compliance frameworks (SOC 2, ISO 27001)',
        'Risk assessment and management',
        'Security awareness training'
      ]
    }
  ];

  const securityCertifications = [
    {
      certification: 'SOC 2 Type II',
      status: 'Certified',
      description: 'Service Organization Control 2 Type II certification for security, availability, and confidentiality',
      icon: CheckCircle,
      color: 'text-green-600',
      badge: 'bg-green-100 text-green-800'
    },
    {
      certification: 'ISO 27001',
      status: 'In Progress',
      description: 'International standard for information security management systems',
      icon: AlertTriangle,
      color: 'text-yellow-600',
      badge: 'bg-yellow-100 text-yellow-800'
    },
    {
      certification: 'GDPR Compliance',
      status: 'Compliant',
      description: 'General Data Protection Regulation compliance for EU data subjects',
      icon: CheckCircle,
      color: 'text-green-600',
      badge: 'bg-green-100 text-green-800'
    },
    {
      certification: 'CCPA Compliance',
      status: 'Compliant',
      description: 'California Consumer Privacy Act compliance for California residents',
      icon: CheckCircle,
      color: 'text-green-600',
      badge: 'bg-green-100 text-green-800'
    }
  ];

  const threatProtection = [
    {
      threat: 'Malware & Ransomware',
      protection: [
        'Advanced endpoint protection',
        'Behavioral analysis and detection',
        'Sandboxing and isolation',
        'Regular signature updates',
        'Incident response procedures'
      ],
      icon: AlertTriangle,
      color: 'from-red-500 to-pink-500'
    },
    {
      threat: 'Phishing & Social Engineering',
      protection: [
        'Email security and filtering',
        'User awareness training',
        'Multi-factor authentication',
        'Suspicious activity monitoring',
        'Regular security assessments'
      ],
      icon: Users,
      color: 'from-orange-500 to-yellow-500'
    },
    {
      threat: 'DDoS Attacks',
      protection: [
        'Traffic filtering and scrubbing',
        'Rate limiting and throttling',
        'Geographic blocking capabilities',
        'Real-time attack detection',
        'Automatic mitigation responses'
      ],
      icon: Globe,
      color: 'from-blue-500 to-cyan-500'
    },
    {
      threat: 'Data Breaches',
      protection: [
        'Data encryption and tokenization',
        'Access logging and monitoring',
        'Data loss prevention (DLP)',
        'Regular security audits',
        'Incident response planning'
      ],
      icon: Database,
      color: 'from-purple-500 to-indigo-500'
    }
  ];

  const securityMetrics = [
    {
      metric: '99.99%',
      label: 'Uptime SLA',
      description: 'Guaranteed service availability',
      icon: Activity,
      color: 'text-green-600'
    },
    {
      metric: '< 15 min',
      label: 'Response Time',
      description: 'Security incident response',
      icon: AlertTriangle,
      color: 'text-blue-600'
    },
    {
      metric: '24/7',
      label: 'Monitoring',
      description: 'Continuous security oversight',
      icon: Eye,
      color: 'text-purple-600'
    },
    {
      metric: '100%',
      label: 'Encryption',
      description: 'Data encrypted in transit and at rest',
      icon: Lock,
      color: 'text-orange-600'
    }
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-50 to-blue-50 py-20 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-blue-100 mb-6">
              <Shield className="h-8 w-8 text-blue-600" />
            </div>
            <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Security & Trust
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              At Zion Tech Group, security is not just a feature—it's fundamental to everything we do. We protect your data and systems with enterprise-grade security measures.
            </p>
          </div>
        </div>
      </section>

      {/* Security Metrics Section */}
      <section className="py-16 sm:py-20 lg:py-24 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-6">
              Security by the Numbers
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our security performance metrics demonstrate our commitment to protecting your data and maintaining the highest security standards.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {securityMetrics.map((metric, index) => (
              <div key={index} className="text-center">
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-gray-100 mb-4">
                  <metric.icon className={`h-8 w-8 ${metric.color}`} />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">{metric.metric}</div>
                <div className="text-lg font-semibold text-gray-700 mb-2">{metric.label}</div>
                <div className="text-sm text-gray-600">{metric.description}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Security Pillars Section */}
      <section className="py-16 sm:py-20 lg:py-24 bg-gray-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-6">
              Our Security Pillars
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We build security into every layer of our infrastructure, from the physical data center to the application code, ensuring comprehensive protection for your data and systems.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {securityPillars.map((pillar, index) => (
              <div key={index} className="bg-white rounded-2xl border border-gray-200 p-8 shadow-sm">
                <div className={`mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br ${pillar.color} mb-6`}>
                  <pillar.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4 text-center">{pillar.pillar}</h3>
                <p className="text-gray-600 text-center mb-6">{pillar.description}</p>
                <ul className="space-y-2">
                  {pillar.features.map((feature, idx) => (
                    <li key={idx} className="text-sm text-gray-700 flex items-center space-x-2">
                      <div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Security Certifications Section */}
      <section className="py-16 sm:py-20 lg:py-24 bg-white">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-6">
              Security Certifications
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our security practices are validated by independent third-party audits and certifications, demonstrating our commitment to maintaining the highest security standards.
            </p>
          </div>

          <div className="space-y-6">
            {securityCertifications.map((cert, index) => (
              <div key={index} className="border border-gray-200 rounded-xl p-6">
                <div className="flex items-start justify-between">
                  <div className="flex items-center space-x-4">
                    <div className={`p-3 rounded-xl bg-gray-100`}>
                      <cert.icon className={`h-8 w-8 ${cert.color}`} />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900">{cert.certification}</h3>
                      <p className="text-gray-600">{cert.description}</p>
                    </div>
                  </div>
                  <span className={`px-3 py-1 text-sm font-medium rounded-full ${cert.badge}`}>
                    {cert.status}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Threat Protection Section */}
      <section className="py-16 sm:py-20 lg:py-24 bg-gray-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-6">
              Threat Protection
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We protect against a wide range of security threats with multi-layered defense mechanisms and proactive security measures.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {threatProtection.map((threat, index) => (
              <div key={index} className="bg-white rounded-2xl border border-gray-200 p-8 shadow-sm">
                <div className={`mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br ${threat.color} mb-6`}>
                  <threat.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4 text-center">{threat.threat}</h3>
                <ul className="space-y-3">
                  {threat.protection.map((measure, idx) => (
                    <li key={idx} className="text-gray-700 flex items-center space-x-2">
                      <div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
                      <span className="text-sm">{measure}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Security Process Section */}
      <section className="py-16 sm:py-20 lg:py-24 bg-white">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-6">
              Our Security Process
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We follow a comprehensive security process that includes prevention, detection, response, and continuous improvement to ensure your data remains secure.
            </p>
          </div>

          <div className="space-y-8">
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">1</div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Prevention</h3>
                <p className="text-gray-600">
                  We implement proactive security measures including secure coding practices, regular security training, and comprehensive access controls to prevent security incidents before they occur.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center font-bold">2</div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Detection</h3>
                <p className="text-gray-600">
                  Our 24/7 monitoring systems detect potential security threats in real-time using advanced analytics, machine learning, and threat intelligence to identify and respond to security events.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-8 h-8 bg-yellow-600 text-white rounded-full flex items-center justify-center font-bold">3</div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Response</h3>
                <p className="text-gray-600">
                  When security incidents occur, our incident response team follows established procedures to contain, investigate, and remediate threats while maintaining business continuity.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-8 h-8 bg-purple-600 text-white rounded-full flex items-center justify-center font-bold">4</div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Improvement</h3>
                <p className="text-gray-600">
                  We continuously improve our security posture through regular assessments, penetration testing, security audits, and lessons learned from security incidents.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Security Commitment Section */}
      <section className="py-16 sm:py-20 lg:py-24 bg-gray-50">
        <div className="mx-auto max-w-4xl px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-6">
            Our Security Commitment
          </h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            We are committed to maintaining the highest security standards and continuously improving our security practices to protect your data and systems.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <div className="flex items-center space-x-3 mb-4 justify-center">
                <CheckCircle className="h-6 w-6 text-green-600" />
                <h3 className="text-lg font-semibold text-gray-900">What We Do</h3>
              </div>
              <ul className="space-y-2 text-sm text-gray-600 text-left">
                <li>• Regular security assessments and audits</li>
                <li>• Continuous security monitoring</li>
                <li>• Employee security training</li>
                <li>• Incident response planning</li>
                <li>• Security policy development</li>
              </ul>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm">
              <div className="flex items-center space-x-3 mb-4 justify-center">
                <Shield className="h-6 w-6 text-blue-600" />
                <h3 className="text-lg font-semibold text-gray-900">Our Promise</h3>
              </div>
              <ul className="space-y-2 text-sm text-gray-600 text-left">
                <li>• Protect your data at all costs</li>
                <li>• Maintain transparency about security</li>
                <li>• Respond quickly to security issues</li>
                <li>• Continuously improve security</li>
                <li>• Comply with security standards</li>
              </ul>
            </div>
          </div>

          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
            <h3 className="text-xl font-semibold mb-4">Security Questions?</h3>
            <p className="mb-6 text-blue-100">
              Have questions about our security practices or need security documentation for your organization? Our security team is here to help.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="mailto:kleber@ziontechgroup.com?subject=Security%20Inquiry"
                className="px-6 py-3 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-50 transition-colors"
              >
                Contact Security Team
              </a>
              <a
                href="/compliance"
                className="px-6 py-3 border border-white text-white font-semibold rounded-lg hover:bg-white hover:text-blue-600 transition-colors"
              >
                View Compliance
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}