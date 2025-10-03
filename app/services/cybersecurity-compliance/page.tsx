import { CheckCircle, Database, Network, Key } from 'lucide-react';
export default function CybersecurityCompliance() {
  const title = 'Cybersecurity & Compliance — Zion Tech Group';
  const description = 'Enterprise-grade cybersecurity solutions and compliance automation. Protect your business with advanced security measures.';

  const securityServices = [
    {
      name: 'Security Assessment & Penetration Testing',
      description: 'Comprehensive security evaluation and vulnerability testing',
      icon: Shield,
      features: [
        'Automated vulnerability scanning',
        'Manual penetration testing',
        'Social engineering assessments',
        'Mobile and web application testing',
        'Network infrastructure security audit'
      ],
      pricing: '$3,000 - $25,000/project',
      delivery: '2-4 weeks',
      category: 'Security Assessment',
      marketPrice: '$5,000-40,000/project',
      benefits: 'Identify and remediate 95% of security vulnerabilities',
      useCases: ['Pre-compliance audit', 'Security validation', 'Risk assessment', 'Incident response']
    },
    {
      name: 'Compliance Automation (SOC2, GDPR, HIPAA)',
      description: 'Automated compliance monitoring and reporting solutions',
      icon: FileText,
      features: [
        'Automated policy enforcement',
        'Continuous compliance monitoring',
        'Audit trail and documentation',
        'Risk assessment and management',
        'Compliance reporting and dashboards'
      ],
      pricing: '$5,000 - $35,000/month',
      delivery: '4-8 weeks',
      category: 'Compliance',
      marketPrice: '$8,000-50,000/month',
      benefits: 'Maintain 100% compliance with automated monitoring',
      useCases: ['SOC2 Type II', 'GDPR compliance', 'HIPAA validation', 'PCI DSS']
    },
    {
      name: 'Threat Detection & Response',
      description: 'Advanced threat detection and automated incident response',
      icon: AlertTriangle,
      features: [
        'AI-powered threat detection',
        'Behavioral analytics and anomaly detection',
        'Automated incident response',
        'Threat intelligence integration',
        '24/7 security monitoring'
      ],
      pricing: '$4,000 - $20,000/month',
      delivery: '3-6 weeks',
      category: 'Threat Detection',
      marketPrice: '$6,000-30,000/month',
      benefits: 'Detect threats 10x faster and reduce response time by 80%',
      useCases: ['Advanced persistent threats', 'Insider threats', 'Malware detection', 'Data breaches']
    },
    {
      name: 'Identity & Access Management (IAM)',
      description: 'Secure identity management and access control solutions',
      icon: Key,
      features: [
        'Multi-factor authentication (MFA)',
        'Single sign-on (SSO) integration',
        'Role-based access control (RBAC)',
        'Privileged access management',
        'Identity governance and administration'
      ],
      pricing: '$2,500 - $15,000/month',
      delivery: '2-5 weeks',
      category: 'Identity Management',
      marketPrice: '$4,000-25,000/month',
      benefits: 'Reduce unauthorized access by 99% and improve user experience',
      useCases: ['Enterprise SSO', 'Privileged accounts', 'Customer identity', 'API security']
    },
    {
      name: 'Data Protection & Encryption',
      description: 'Comprehensive data protection and encryption solutions',
      icon: Lock,
      features: [
        'End-to-end encryption',
        'Data loss prevention (DLP)',
        'Database encryption and tokenization',
        'Secure file sharing and storage',
        'Key management and rotation'
      ],
      pricing: '$3,500 - $18,000/month',
      delivery: '3-6 weeks',
      category: 'Data Protection',
      marketPrice: '$5,000-30,000/month',
      benefits: 'Protect sensitive data with military-grade encryption',
      useCases: ['Customer data protection', 'Financial data security', 'Healthcare records', 'Intellectual property']
    },
    {
      name: 'Security Operations Center (SOC)',
      description: '24/7 security monitoring and incident response services',
      icon: Monitor,
      features: [
        '24/7 security monitoring',
        'Incident detection and response',
        'Security event correlation',
        'Threat hunting and analysis',
        'Security reporting and metrics'
      ],
      pricing: '$8,000 - $40,000/month',
      delivery: '2-4 weeks',
      category: 'SOC Services',
      marketPrice: '$12,000-60,000/month',
      benefits: 'Provide enterprise-grade security monitoring at fraction of cost',
      useCases: ['Continuous monitoring', 'Incident response', 'Threat hunting', 'Security analytics']
    }
  ];

  const complianceFrameworks = [
    { name: 'SOC 2', icon: Shield, description: 'Service Organization Control 2 compliance' },
    { name: 'GDPR', icon: Globe, description: 'General Data Protection Regulation' },
    { name: 'HIPAA', icon: Users, description: 'Health Insurance Portability and Accountability Act' },
    { name: 'PCI DSS', icon: CreditCard, description: 'Payment Card Industry Data Security Standard' },
    { name: 'ISO 27001', icon: FileText, description: 'Information Security Management System' },
    { name: 'NIST', icon: Settings, description: 'National Institute of Standards and Technology' },
    { name: 'CIS', icon: Shield, description: 'Center for Internet Security Controls' },
    { name: 'FedRAMP', icon: Globe, description: 'Federal Risk and Authorization Management Program' }
  ];

  const securityTechnologies = [
    { name: 'SIEM', icon: Monitor, description: 'Security Information and Event Management' },
    { name: 'EDR', icon: Shield, description: 'Endpoint Detection and Response' },
    { name: 'XDR', icon: Network, description: 'Extended Detection and Response' },
    { name: 'SOAR', icon: Settings, description: 'Security Orchestration, Automation and Response' },
    { name: 'DLP', icon: Lock, description: 'Data Loss Prevention' },
    { name: 'CASB', icon: Cloud, description: 'Cloud Access Security Broker' },
    { name: 'WAF', icon: Shield, description: 'Web Application Firewall' },
    { name: 'PAM', icon: Key, description: 'Privileged Access Management' }
  ];

  const processSteps = [
    {
      step: 1,
      title: 'Security Assessment',
      description: 'Comprehensive evaluation of your current security posture and risks.',
      duration: '1-2 weeks'
    },
    {
      step: 2,
      title: 'Strategy & Planning',
      description: 'Develop customized security strategy and compliance roadmap.',
      duration: '1-2 weeks'
    },
    {
      step: 3,
      title: 'Implementation',
      description: 'Deploy security solutions with minimal business disruption.',
      duration: '2-8 weeks'
    },
    {
      step: 4,
      title: 'Monitoring & Support',
      description: '24/7 monitoring, maintenance, and continuous improvement.',
      duration: 'Ongoing'
    }
  ];

  const benefits = [
    {
      icon: Shield,
      title: 'Risk Reduction',
      description: 'Reduce security risks by 90% with comprehensive protection'
    },
    {
      icon: CheckCircle,
      title: 'Compliance',
      description: 'Maintain 100% compliance with automated monitoring and reporting'
    },
    {
      icon: Clock,
      title: 'Response Time',
      description: 'Reduce incident response time by 80% with automated detection'
    },
    {
      icon: DollarSign,
      title: 'Cost Savings',
      description: 'Reduce security costs by 40% while improving protection'
    },
    {
      icon: Users,
      title: 'Trust',
      description: 'Build customer trust with certified security and compliance'
    },
    {
      icon: BarChart3,
      title: 'Visibility',
      description: 'Gain complete visibility into security posture and threats'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-red-600 to-orange-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Cybersecurity & Compliance
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
              Enterprise-grade cybersecurity solutions and compliance automation. Protect your business with advanced security measures.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="tel:+13024640950" 
                className="bg-white text-red-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Call: +1 302 464 0950
              </a>
              <a 
                href="mailto:kleber@ziontechgroup.com" 
                className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-red-600 transition-colors"
              >
                Email: kleber@ziontechgroup.com
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Services Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Security Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive cybersecurity solutions for modern businesses
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {securityServices.map((service, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
              <div className="flex items-center mb-4">
                <div className="p-3 bg-red-100 rounded-lg mr-4">
                  <service.icon className="w-6 h-6 text-red-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900">{service.name}</h3>
                  <span className="text-sm text-red-600 font-medium">{service.category}</span>
                </div>
              </div>
              
              <p className="text-gray-600 mb-4">{service.description}</p>
              
              <div className="mb-4">
                <h4 className="font-semibold text-gray-900 mb-2">Key Features:</h4>
                <ul className="space-y-1">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-600">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mb-4">
                <h4 className="font-semibold text-gray-900 mb-2">Use Cases:</h4>
                <div className="flex flex-wrap gap-2">
                  {service.useCases.map((useCase, idx) => (
                    <span key={idx} className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs">
                      {useCase}
                    </span>
                  ))}
                </div>
              </div>

              <div className="border-t pt-4">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm text-gray-600">Our Pricing:</span>
                  <span className="font-semibold text-green-600">{service.pricing}</span>
                </div>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm text-gray-600">Market Average:</span>
                  <span className="text-sm text-gray-500">{service.marketPrice}</span>
                </div>
                <div className="flex justify-between items-center mb-4">
                  <span className="text-sm text-gray-600">Delivery Time:</span>
                  <span className="text-sm font-medium text-red-600">{service.delivery}</span>
                </div>
                <div className="bg-green-50 p-3 rounded-lg">
                  <p className="text-sm text-green-800 font-medium">{service.benefits}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Compliance Frameworks */}
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Compliance Frameworks We Support
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Expert knowledge across all major compliance and security frameworks
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {complianceFrameworks.map((framework, index) => (
              <div key={index} className="text-center p-4">
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <framework.icon className="w-8 h-8 text-red-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{framework.name}</h3>
                <p className="text-sm text-gray-600">{framework.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Security Technologies */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Security Technologies
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Advanced security tools and technologies for comprehensive protection
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {securityTechnologies.map((tech, index) => (
              <div key={index} className="text-center p-4">
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <tech.icon className="w-8 h-8 text-red-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{tech.name}</h3>
                <p className="text-sm text-gray-600">{tech.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Benefits Section */}
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Our Security Solutions?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Proven benefits that protect your business and ensure compliance
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-xl">
                <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                  <benefit.icon className="w-6 h-6 text-red-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Process Section */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Security Implementation Process
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A proven methodology for successful security implementation
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-red-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                  {step.step}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{step.title}</h3>
                <p className="text-gray-600 mb-2">{step.description}</p>
                <span className="text-sm text-red-600 font-medium">{step.duration}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-red-600 to-orange-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Secure Your Business Today
          </h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Get a free security assessment and discover how we can protect your business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="tel:+13024640950" 
              className="bg-white text-red-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Call Now: +1 302 464 0950
            </a>
            <a 
              href="mailto:kleber@ziontechgroup.com" 
              className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-red-600 transition-colors"
            >
              Email Us: kleber@ziontechgroup.com
            </a>
          </div>
          <div className="mt-8 text-sm">
            <p>Address: 364 E Main St STE 1008, Middletown, DE 19709</p>
            <p>Website: <a href="https://ziontechgroup.com" className="underline">https://ziontechgroup.com</a></p>
          </div>
        </div>
      </div>
    </div>
  );
}