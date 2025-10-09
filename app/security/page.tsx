import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Shield, Lock, Eye, AlertTriangle, CheckCircle, Server, Key, Database, Globe, Users } from 'lucide-react';

const SecurityPage: React.FC = () => {
  const securityFeatures = [
    {
      title: 'End-to-End Encryption',
      description: 'All data is encrypted in transit and at rest using industry-standard encryption protocols.',
      icon: Lock,
      color: 'text-blue-600',
      bgColor: 'bg-blue-50',
      details: [
        'TLS 1.3 for data in transit',
        'AES-256 encryption for data at rest',
        'Perfect Forward Secrecy',
        'Certificate pinning'
      ]
    },
    {
      title: 'Multi-Factor Authentication',
      description: 'Enhanced security with multiple authentication factors for all user accounts.',
      icon: Key,
      color: 'text-green-600',
      bgColor: 'bg-green-50',
      details: [
        'SMS and email verification',
        'Authenticator app support',
        'Hardware security keys',
        'Biometric authentication'
      ]
    },
    {
      title: 'Access Controls',
      description: 'Granular access controls ensure only authorized personnel can access sensitive data.',
      icon: Users,
      color: 'text-purple-600',
      bgColor: 'bg-purple-50',
      details: [
        'Role-based access control (RBAC)',
        'Principle of least privilege',
        'Regular access reviews',
        'Automated access provisioning'
      ]
    },
    {
      title: 'Network Security',
      description: 'Advanced network security measures protect against external threats.',
      icon: Globe,
      color: 'text-orange-600',
      bgColor: 'bg-orange-50',
      details: [
        'Firewall protection',
        'DDoS mitigation',
        'Intrusion detection systems',
        'Network segmentation'
      ]
    },
    {
      title: 'Data Monitoring',
      description: 'Continuous monitoring and logging of all data access and modifications.',
      icon: Eye,
      color: 'text-red-600',
      bgColor: 'bg-red-50',
      details: [
        'Real-time security monitoring',
        'Comprehensive audit logs',
        'Anomaly detection',
        'Automated threat response'
      ]
    },
    {
      title: 'Infrastructure Security',
      description: 'Secure infrastructure with regular updates and vulnerability management.',
      icon: Server,
      color: 'text-indigo-600',
      bgColor: 'bg-indigo-50',
      details: [
        'Regular security updates',
        'Vulnerability scanning',
        'Penetration testing',
        'Secure configuration management'
      ]
    }
  ];

  const complianceStandards = [
    {
      name: 'SOC 2 Type II',
      description: 'Comprehensive security and availability controls',
      status: 'Certified',
      icon: Shield,
      color: 'text-green-600'
    },
    {
      name: 'ISO 27001',
      description: 'Information security management system',
      status: 'Certified',
      icon: Database,
      color: 'text-blue-600'
    },
    {
      name: 'GDPR',
      description: 'General Data Protection Regulation compliance',
      status: 'Compliant',
      icon: Lock,
      color: 'text-purple-600'
    },
    {
      name: 'CCPA',
      description: 'California Consumer Privacy Act compliance',
      status: 'Compliant',
      icon: Eye,
      color: 'text-orange-600'
    }
  ];

  const securityIncidents = [
    {
      year: '2024',
      incidents: 0,
      description: 'Zero security incidents reported',
      status: 'Excellent'
    },
    {
      year: '2023',
      incidents: 0,
      description: 'Zero security incidents reported',
      status: 'Excellent'
    },
    {
      year: '2022',
      incidents: 0,
      description: 'Zero security incidents reported',
      status: 'Excellent'
    }
  ];

  const securityMeasures = [
    {
      category: 'Physical Security',
      measures: [
        '24/7 monitored data centers',
        'Biometric access controls',
        'Video surveillance',
        'Environmental monitoring',
        'Secure disposal of hardware'
      ]
    },
    {
      category: 'Application Security',
      measures: [
        'Secure coding practices',
        'Regular security testing',
        'Dependency vulnerability scanning',
        'Input validation and sanitization',
        'Output encoding'
      ]
    },
    {
      category: 'Data Protection',
      measures: [
        'Data classification and labeling',
        'Data loss prevention (DLP)',
        'Backup and recovery procedures',
        'Data retention policies',
        'Secure data destruction'
      ]
    },
    {
      category: 'Incident Response',
      measures: [
        '24/7 security operations center',
        'Incident response procedures',
        'Forensic analysis capabilities',
        'Communication protocols',
        'Recovery procedures'
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Security - Zion Tech Group</title>
        <meta name="description" content="Learn about Zion Tech Group's comprehensive security measures, compliance certifications, and data protection practices." />
        <meta name="keywords" content="security, data protection, encryption, compliance, SOC 2, ISO 27001, cybersecurity" />
      </Helmet>

      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">
            Security & Compliance
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Your data security is our top priority. We implement industry-leading security measures and maintain the highest compliance standards.
          </p>
          
          {/* Security Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <div className="text-3xl font-bold text-green-400 mb-2">0</div>
              <div className="text-gray-300">Security Incidents</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <div className="text-3xl font-bold text-blue-400 mb-2">99.9%</div>
              <div className="text-gray-300">Uptime</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <div className="text-3xl font-bold text-purple-400 mb-2">256-bit</div>
              <div className="text-gray-300">Encryption</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <div className="text-3xl font-bold text-orange-400 mb-2">24/7</div>
              <div className="text-gray-300">Monitoring</div>
            </div>
          </div>
        </div>
      </section>

      {/* Security Features */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">Security Features</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {securityFeatures.map((feature, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-6 hover:shadow-2xl transition-all duration-300">
                <div className="flex items-center mb-4">
                  <div className={`w-12 h-12 ${feature.bgColor} rounded-lg flex items-center justify-center mr-4`}>
                    <feature.icon className={`w-6 h-6 ${feature.color}`} />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">{feature.title}</h3>
                </div>
                <p className="text-gray-600 mb-4">{feature.description}</p>
                <ul className="space-y-2">
                  {feature.details.map((detail, detailIndex) => (
                    <li key={detailIndex} className="flex items-start text-sm text-gray-600">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                      {detail}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Compliance Standards */}
      <section className="py-16 px-4 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">Compliance & Certifications</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {complianceStandards.map((standard, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-6 text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <standard.icon className={`w-8 h-8 ${standard.color}`} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{standard.name}</h3>
                <p className="text-gray-600 mb-4">{standard.description}</p>
                <div className={`inline-flex px-3 py-1 rounded-full text-sm font-medium ${
                  standard.status === 'Certified' ? 'bg-green-100 text-green-800' : 'bg-blue-100 text-blue-800'
                }`}>
                  {standard.status}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Security Track Record */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">Security Track Record</h2>
          
          <div className="bg-white rounded-xl shadow-lg p-8">
            <div className="text-center mb-8">
              <div className="text-4xl font-bold text-green-600 mb-2">Zero Security Incidents</div>
              <p className="text-gray-600">Since our founding in 2020</p>
            </div>
            
            <div className="space-y-6">
              {securityIncidents.map((year, index) => (
                <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                  <div>
                    <div className="font-semibold text-gray-900">{year.year}</div>
                    <div className="text-sm text-gray-600">{year.description}</div>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-green-600">{year.incidents}</div>
                    <div className="text-sm text-green-600">{year.status}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Security Measures */}
      <section className="py-16 px-4 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">Comprehensive Security Measures</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {securityMeasures.map((category, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">{category.category}</h3>
                <ul className="space-y-3">
                  {category.measures.map((measure, measureIndex) => (
                    <li key={measureIndex} className="flex items-start text-sm text-gray-600">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                      {measure}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Security Contact */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Security Contact</h2>
          <p className="text-xl text-gray-300 mb-8">
            Report security vulnerabilities or concerns to our security team.
          </p>
          <div className="bg-white rounded-xl shadow-lg p-8">
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-semibold text-gray-900">Security Team</h3>
                <p className="text-gray-600">Zion Tech Group Security</p>
              </div>
              <div className="space-y-2 text-sm text-gray-600">
                <p>Email: <a href="mailto:security@ziontechgroup.com" className="text-purple-600 hover:underline">security@ziontechgroup.com</a></p>
                <p>Phone: <a href="tel:+13024640950" className="text-purple-600 hover:underline">+1 (302) 464-0950</a></p>
                <p>Address: 364 E Main St STE 1008, Middletown, DE 19709</p>
              </div>
              <div className="mt-6 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
                <div className="flex items-center">
                  <AlertTriangle className="w-5 h-5 text-yellow-600 mr-2" />
                  <span className="text-sm text-yellow-800">
                    For security vulnerabilities, please use our responsible disclosure process.
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SecurityPage;