import React from 'react';
import { CheckCircle } from 'lucide-react';

const AICybersecurityPage: React.FC = () => {
  const securityServices = [
    {
      title: 'AI-Powered Threat Detection System',
      description: 'Advanced machine learning-based threat detection and response system that identifies and neutralizes cyber threats in real-time.',
      icon: '🛡️',
      price: '$2,499/month',
      features: [
        'Real-time threat monitoring',
        'Behavioral analysis',
        'Automated incident response',
        'Zero-day attack detection',
        'Network traffic analysis',
        'Endpoint protection',
        'Threat intelligence integration',
        '24/7 SOC monitoring'
      ],
      benefits: [
        'Detect threats 10x faster',
        'Reduce false positives by 80%',
        'Prevent 99.5% of attacks',
        'Save $2M+ annually in prevented breaches'
      ],
      marketPrice: '$4,000-8,000/month',
      category: 'Threat Detection',
      technologies: ['Machine Learning', 'SIEM', 'EDR', 'Python', 'TensorFlow', 'Elasticsearch'],
      compliance: ['SOC 2', 'ISO 27001', 'GDPR', 'HIPAA']
    },
    {
      title: 'AI Security Operations Center (SOC)',
      description: 'Comprehensive AI-driven security operations center providing 24/7 monitoring, incident response, and threat hunting services.',
      icon: '🔍',
      price: '$3,999/month',
      features: [
        '24/7 security monitoring',
        'AI-powered threat hunting',
        'Incident response automation',
        'Vulnerability management',
        'Security orchestration',
        'Compliance reporting',
        'Threat intelligence feeds',
        'Dedicated security analysts'
      ],
      benefits: [
        'Reduce incident response time by 90%',
        'Improve threat detection accuracy',
        'Ensure compliance automatically',
        'Provide expert security guidance'
      ],
      marketPrice: '$6,000-12,000/month',
      category: 'Managed Security',
      technologies: ['SOAR', 'SIEM', 'AI/ML', 'Python', 'Splunk', 'QRadar'],
      compliance: ['SOC 2 Type II', 'ISO 27001', 'NIST', 'PCI DSS']
    },
    {
      title: 'AI-Powered Vulnerability Assessment',
      description: 'Automated vulnerability scanning and risk assessment using AI to identify, prioritize, and remediate security weaknesses.',
      icon: '🔒',
      price: '$1,299/month',
      features: [
        'Automated vulnerability scanning',
        'Risk prioritization AI',
        'Remediation recommendations',
        'Compliance checking',
        'Asset discovery',
        'Configuration management',
        'Patch management',
        'Security reporting'
      ],
      benefits: [
        'Identify vulnerabilities 5x faster',
        'Reduce risk exposure by 70%',
        'Automate compliance reporting',
        'Lower remediation costs'
      ],
      marketPrice: '$2,000-4,000/month',
      category: 'Vulnerability Management',
      technologies: ['Nessus', 'OpenVAS', 'AI/ML', 'Python', 'Nmap', 'Custom Scripts'],
      compliance: ['OWASP', 'NIST', 'CIS Controls', 'ISO 27001']
    },
    {
      title: 'AI Identity & Access Management',
      description: 'Intelligent identity and access management solution with behavioral analytics, risk-based authentication, and automated provisioning.',
      icon: '👤',
      price: '$1,899/month',
      features: [
        'Risk-based authentication',
        'Behavioral analytics',
        'Automated provisioning',
        'Privileged access management',
        'Single sign-on (SSO)',
        'Multi-factor authentication',
        'Access governance',
        'Compliance reporting'
      ],
      benefits: [
        'Reduce identity-related breaches by 85%',
        'Improve user experience',
        'Automate access management',
        'Ensure compliance'
      ],
      marketPrice: '$3,000-6,000/month',
      category: 'Identity Management',
      technologies: ['OAuth 2.0', 'SAML', 'LDAP', 'AI/ML', 'Python', 'Active Directory'],
      compliance: ['SOX', 'GDPR', 'HIPAA', 'SOC 2']
    },
    {
      title: 'AI Data Loss Prevention (DLP)',
      description: 'Advanced data loss prevention system using AI to monitor, detect, and prevent unauthorized data exfiltration and leakage.',
      icon: '📊',
      price: '$1,599/month',
      features: [
        'Content inspection',
        'Data classification',
        'User behavior analysis',
        'Policy enforcement',
        'Incident response',
        'Data discovery',
        'Encryption management',
        'Compliance monitoring'
      ],
      benefits: [
        'Prevent 95% of data breaches',
        'Reduce compliance violations',
        'Protect sensitive data',
        'Automate policy enforcement'
      ],
      marketPrice: '$2,500-5,000/month',
      category: 'Data Protection',
      technologies: ['NLP', 'Machine Learning', 'Python', 'Elasticsearch', 'DLP APIs', 'Encryption'],
      compliance: ['GDPR', 'CCPA', 'HIPAA', 'SOX']
    },
    {
      title: 'AI Cloud Security Platform',
      description: 'Comprehensive cloud security solution providing visibility, compliance, and protection across multi-cloud environments.',
      icon: '☁️',
      price: '$2,199/month',
      features: [
        'Cloud security posture management',
        'Configuration monitoring',
        'Threat detection',
        'Compliance automation',
        'Data encryption',
        'Access control',
        'Security orchestration',
        'Multi-cloud support'
      ],
      benefits: [
        'Secure cloud environments',
        'Automate compliance',
        'Reduce cloud risks',
        'Optimize security costs'
      ],
      marketPrice: '$3,500-7,000/month',
      category: 'Cloud Security',
      technologies: ['AWS Security', 'Azure Security', 'GCP Security', 'Python', 'Terraform', 'CloudFormation'],
      compliance: ['CIS Benchmarks', 'SOC 2', 'ISO 27001', 'FedRAMP']
    }
  ];

  const securityFeatures = [
    {
      title: 'Real-Time Monitoring',
      description: '24/7 AI-powered monitoring of your entire infrastructure',
      icon: <Eye className="w-8 h-8 text-blue-600" />
    },
    {
      title: 'Threat Intelligence',
      description: 'Advanced threat intelligence and behavioral analysis',
      icon: <AlertTriangle className="w-8 h-8 text-red-600" />
    },
    {
      title: 'Automated Response',
      description: 'Instant automated response to security incidents',
      icon: <Zap className="w-8 h-8 text-yellow-600" />
    },
    {
      title: 'Compliance Ready',
      description: 'Built-in compliance with major security standards',
      icon: <ShieldCheck className="w-8 h-8 text-green-600" />
    }
  ];

  const complianceStandards = [
    'SOC 2 Type II', 'ISO 27001', 'NIST Framework', 'GDPR', 'HIPAA', 'PCI DSS', 'SOX', 'FedRAMP'
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-red-50">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-red-600 to-indigo-700 text-white py-20">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              AI Cybersecurity Services
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-red-100 max-w-3xl mx-auto">
              Protect your business with advanced AI-powered cybersecurity solutions and 24/7 monitoring
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="tel:+13024640950"
                className="bg-white text-red-600 px-8 py-3 rounded-lg font-semibold hover:bg-red-50 transition-colors inline-flex items-center"
              >
                📞 +1 302 464 0950
              </a>
              <a 
                href="mailto:kleber@ziontechgroup.com"
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-red-600 transition-colors"
              >
                ✉️ Get Security Assessment
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Security Stats */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-red-600 mb-2">99.5%</div>
              <div className="text-gray-600">Threat Detection Rate</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-blue-600 mb-2">24/7</div>
              <div className="text-gray-600">Security Monitoring</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-green-600 mb-2">90%</div>
              <div className="text-gray-600">Faster Response Time</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-purple-600 mb-2">$2M+</div>
              <div className="text-gray-600">Average Savings</div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Security Solutions
            </h2>
            <p className="text-xl text-gray-600">
              Comprehensive AI-powered cybersecurity services for complete protection
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {securityServices.map((service, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow border border-gray-100">
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                
                <div className="mb-4">
                  <span className="text-2xl font-bold text-red-600">{service.price}</span>
                  <span className="text-sm text-gray-500 ml-2">Market: {service.marketPrice}</span>
                </div>
                
                <div className="mb-4">
                  <span className="inline-block bg-red-100 text-red-800 text-xs font-semibold px-2 py-1 rounded">
                    {service.category}
                  </span>
                </div>
                
                <ul className="space-y-2 mb-6">
                  {service.features.slice(0, 4).map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <div className="space-y-2 mb-6">
                  <h4 className="font-semibold text-gray-900">Key Benefits:</h4>
                  {service.benefits.slice(0, 2).map((benefit, benefitIndex) => (
                    <p key={benefitIndex} className="text-sm text-green-600">✓ {benefit}</p>
                  ))}
                </div>
                
                <a 
                  href="/contact"
                  className="w-full bg-red-600 text-white py-2 px-4 rounded-lg font-semibold hover:bg-red-700 transition-colors inline-flex items-center justify-center"
                >
                  Get Protected
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Our Security Solutions?
            </h2>
            <p className="text-xl text-gray-600">
              Advanced AI technology and expert security professionals
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {securityFeatures.map((feature, index) => (
              <div key={index} className="text-center">
                <div className="flex justify-center mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Compliance Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Compliance & Standards
            </h2>
            <p className="text-xl text-gray-600">
              We help you meet and maintain compliance with major security standards
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {complianceStandards.map((standard, index) => (
              <div key={index} className="bg-white rounded-lg p-4 text-center shadow-md">
                <div className="font-semibold text-gray-900">{standard}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-gradient-to-r from-red-600 to-indigo-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Secure Your Business Today
          </h2>
          <p className="text-xl mb-8 text-red-100">
            Get a free security assessment and protect your business from cyber threats
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="tel:+13024640950"
              className="bg-white text-red-600 px-8 py-3 rounded-lg font-semibold hover:bg-red-50 transition-colors inline-flex items-center"
            >
              📞 +1 302 464 0950
            </a>
            <a 
              href="mailto:kleber@ziontechgroup.com"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-red-600 transition-colors"
            >
              ✉️ kleber@ziontechgroup.com
            </a>
          </div>
          <div className="mt-8 text-sm text-red-200">
            <p>📍 364 E Main St STE 1008, Middletown DE 19709</p>
          </div>
        </div>
      </section>
    </div>
  );
};
=======

export default AICybersecurityPage;
>>>>>>> origin/main
