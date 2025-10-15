import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Shield, 
  Lock, 
  Eye, 
  AlertTriangle, 
  CheckCircle,
  ArrowRight,
  Star,
  Sparkles,
  Clock,
  Users,
  TrendingUp,
  Settings,
  Globe,
  Database,
  Monitor,
  Award,
  Target,
  Rocket,
  Cpu,
  HardDrive,
  Key,
  Fingerprint
} from 'lucide-react';

const CybersecurityPage: React.FC = () => {
  const securityServices = [
    {
      id: 'cybersecurity-consulting',
      name: 'Cybersecurity Consulting',
      price: 'From $2,999',
      description: 'Comprehensive security assessment and implementation to protect your digital assets',
      features: [
        'Security audit and assessment',
        'Penetration testing',
        'Compliance review (GDPR, HIPAA, SOX)',
        'Security policy development',
        'Incident response planning',
        'Employee security training',
        'Vulnerability management',
        'Security monitoring setup'
      ],
      benefits: [
        'Protect against cyber threats',
        'Ensure regulatory compliance',
        'Reduce security risks by 80%',
        'Build customer trust and confidence'
      ],
      icon: <Shield className="w-8 h-8" />,
      color: 'from-red-500 to-pink-600',
      popular: true,
      duration: '1-3 weeks'
    },
    {
      id: 'security-audit-assessment',
      name: 'Security Audit & Assessment',
      price: 'From $1,999',
      description: 'Comprehensive security audit to identify vulnerabilities and security gaps',
      features: [
        'Vulnerability scanning',
        'Penetration testing',
        'Security configuration review',
        'Network security assessment',
        'Application security testing',
        'Compliance gap analysis',
        'Risk assessment report',
        'Remediation recommendations'
      ],
      benefits: [
        'Identify security weaknesses',
        'Improve security posture',
        'Meet compliance requirements',
        'Reduce security risks'
      ],
      icon: <Eye className="w-8 h-8" />,
      color: 'from-orange-500 to-red-600',
      popular: false,
      duration: '1-2 weeks'
    },
    {
      id: 'incident-response-planning',
      name: 'Incident Response Planning',
      price: 'From $1,499',
      description: 'Develop and implement comprehensive incident response procedures',
      features: [
        'Incident response plan development',
        'Response team training',
        'Communication procedures',
        'Recovery strategies',
        'Testing and simulation',
        'Documentation and reporting',
        'Continuous improvement',
        '24/7 support availability'
      ],
      benefits: [
        'Faster incident response',
        'Minimize business impact',
        'Reduce recovery time',
        'Improve security resilience'
      ],
      icon: <AlertTriangle className="w-8 h-8" />,
      color: 'from-yellow-500 to-orange-600',
      popular: false,
      duration: '1-2 weeks'
    },
    {
      id: 'security-monitoring-solutions',
      name: 'Security Monitoring Solutions',
      price: 'From $1,299',
      description: '24/7 security monitoring and threat detection services',
      features: [
        'Real-time threat monitoring',
        'Security event correlation',
        'Automated threat detection',
        'Incident alerting',
        'Log analysis and reporting',
        'Threat intelligence integration',
        'Custom security rules',
        'Expert security analysis'
      ],
      benefits: [
        'Proactive threat detection',
        'Faster incident response',
        'Reduced security risks',
        'Peace of mind'
      ],
      icon: <Monitor className="w-8 h-8" />,
      color: 'from-blue-500 to-cyan-600',
      popular: true,
      duration: '1 week'
    },
    {
      id: 'compliance-management',
      name: 'Compliance Management',
      price: 'From $1,799',
      description: 'Ensure compliance with industry regulations and standards',
      features: [
        'Compliance gap analysis',
        'Policy development',
        'Control implementation',
        'Audit preparation',
        'Documentation management',
        'Training and awareness',
        'Continuous monitoring',
        'Certification support'
      ],
      benefits: [
        'Meet regulatory requirements',
        'Avoid compliance penalties',
        'Improve security posture',
        'Build customer trust'
      ],
      icon: <CheckCircle className="w-8 h-8" />,
      color: 'from-green-500 to-teal-600',
      popular: false,
      duration: '2-4 weeks'
    },
    {
      id: 'identity-access-management',
      name: 'Identity & Access Management',
      price: 'From $1,399',
      description: 'Comprehensive identity and access management solutions',
      features: [
        'User provisioning and deprovisioning',
        'Multi-factor authentication',
        'Single sign-on (SSO)',
        'Role-based access control',
        'Privileged access management',
        'Identity governance',
        'Audit and compliance reporting',
        'Integration with existing systems'
      ],
      benefits: [
        'Enhanced security controls',
        'Improved user experience',
        'Reduced administrative overhead',
        'Better compliance posture'
      ],
      icon: <Key className="w-8 h-8" />,
      color: 'from-purple-500 to-indigo-600',
      popular: false,
      duration: '2-3 weeks'
    }
  ];

  const securityThreats = [
    { name: 'Malware', icon: <AlertTriangle className="w-6 h-6" />, description: 'Malicious software protection' },
    { name: 'Phishing', icon: <Eye className="w-6 h-6" />, description: 'Email and social engineering attacks' },
    { name: 'Ransomware', icon: <Lock className="w-6 h-6" />, description: 'Data encryption and extortion' },
    { name: 'DDoS', icon: <Globe className="w-6 h-6" />, description: 'Distributed denial of service' },
    { name: 'Insider Threats', icon: <Users className="w-6 h-6" />, description: 'Internal security risks' },
    { name: 'Data Breaches', icon: <Database className="w-6 h-6" />, description: 'Unauthorized data access' }
  ];

  const complianceStandards = [
    { name: 'GDPR', icon: <Shield className="w-6 h-6" />, description: 'General Data Protection Regulation' },
    { name: 'HIPAA', icon: <Lock className="w-6 h-6" />, description: 'Health Insurance Portability' },
    { name: 'SOX', icon: <CheckCircle className="w-6 h-6" />, description: 'Sarbanes-Oxley Act' },
    { name: 'PCI DSS', icon: <Key className="w-6 h-6" />, description: 'Payment Card Industry' },
    { name: 'ISO 27001', icon: <Award className="w-6 h-6" />, description: 'Information Security Management' },
    { name: 'NIST', icon: <Settings className="w-6 h-6" />, description: 'National Institute of Standards' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-red-500/20 to-pink-500/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute top-40 right-10 w-96 h-96 bg-gradient-to-r from-orange-500/20 to-red-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-red-500/20 to-pink-500/20 border border-red-500/30 rounded-full text-red-400 text-sm font-medium mb-6 backdrop-blur-sm">
              <Sparkles className="w-4 h-4 mr-2 animate-pulse" />
              Advanced Security Solutions
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-red-400 via-orange-400 to-yellow-400 bg-clip-text text-transparent">
                Cybersecurity
              </span>
            </h1>
            
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Protect your business with comprehensive cybersecurity solutions. From threat detection to compliance, 
              we provide the security foundation your business needs to thrive safely.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-red-500 to-orange-600 text-white px-8 py-4 rounded-xl text-lg font-semibold hover:from-red-600 hover:to-orange-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-red-500/25 flex items-center justify-center"
              >
                <Shield className="w-5 h-5 mr-2" />
                Get Security Assessment
              </Link>
              <Link
                to="/pricing"
                className="border-2 border-red-400 text-red-400 px-8 py-4 rounded-xl text-lg font-semibold hover:bg-red-400 hover:text-slate-900 transition-all duration-300 flex items-center justify-center"
              >
                View Pricing
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-red-400 to-orange-400 bg-clip-text text-transparent">
                Our Security Solutions
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose from our comprehensive suite of cybersecurity services designed to protect your business
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {securityServices.map((service) => (
              <div key={service.id} className={`group relative bg-gradient-to-br from-slate-800/60 to-slate-900/60 backdrop-blur-sm border rounded-3xl p-8 hover:border-red-400/40 transition-all duration-500 hover:transform hover:scale-105 hover:shadow-2xl hover:shadow-red-500/20 ${service.popular ? 'border-red-500/40 ring-2 ring-red-500/20' : 'border-red-500/20'}`}>
                {service.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <div className="bg-gradient-to-r from-red-500 to-orange-600 text-white px-4 py-1 rounded-full text-sm font-semibold flex items-center">
                      <Star className="w-4 h-4 mr-1" />
                      Most Popular
                    </div>
                  </div>
                )}
                
                <div className="relative z-10">
                  <div className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <div className="text-white">{service.icon}</div>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-red-400 transition-colors">
                    {service.name}
                  </h3>
                  
                  <p className="text-gray-300 mb-4 leading-relaxed">
                    {service.description}
                  </p>
                  
                  <div className="flex items-center justify-between mb-6">
                    <div className="text-2xl font-bold text-red-400">
                      {service.price}
                    </div>
                    <div className="text-sm text-gray-400 flex items-center">
                      <Clock className="w-4 h-4 mr-1" />
                      {service.duration}
                    </div>
                  </div>
                  
                  <div className="space-y-3 mb-6">
                    <h4 className="text-lg font-semibold text-white">Key Features:</h4>
                    {service.features.slice(0, 4).map((feature, index) => (
                      <div key={index} className="flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                        <span className="text-gray-300 text-sm">{feature}</span>
                      </div>
                    ))}
                    {service.features.length > 4 && (
                      <div className="text-red-400 text-sm">
                        +{service.features.length - 4} more features
                      </div>
                    )}
                  </div>
                  
                  <div className="space-y-2 mb-6">
                    <h4 className="text-lg font-semibold text-white">Benefits:</h4>
                    {service.benefits.map((benefit, index) => (
                      <div key={index} className="flex items-center space-x-2">
                        <Shield className="w-4 h-4 text-green-400 flex-shrink-0" />
                        <span className="text-gray-300 text-sm">{benefit}</span>
                      </div>
                    ))}
                  </div>
                  
                  <Link
                    to={`/${service.id}`}
                    className="w-full bg-gradient-to-r from-red-500 to-orange-600 text-white py-3 rounded-xl font-semibold hover:from-red-600 hover:to-orange-700 transition-all duration-300 flex items-center justify-center group/btn shadow-lg hover:shadow-red-500/25"
                  >
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Security Threats Section */}
      <section className="py-20 bg-gradient-to-r from-slate-800/50 to-slate-900/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-red-400 to-orange-400 bg-clip-text text-transparent">
                Security Threats We Protect Against
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our solutions protect against the most common and dangerous cybersecurity threats
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {securityThreats.map((threat, index) => (
              <div key={index} className="group text-center p-6 bg-slate-800/50 rounded-2xl hover:bg-slate-700/50 transition-all duration-300 hover:transform hover:scale-105">
                <div className="w-12 h-12 bg-gradient-to-r from-red-500/20 to-orange-500/20 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <div className="text-red-400">{threat.icon}</div>
                </div>
                <h3 className="text-white font-semibold mb-2">{threat.name}</h3>
                <p className="text-gray-400 text-sm">{threat.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Compliance Standards Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-red-400 to-orange-400 bg-clip-text text-transparent">
                Compliance Standards
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We help you meet industry compliance requirements and standards
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {complianceStandards.map((standard, index) => (
              <div key={index} className="group text-center p-6 bg-slate-800/50 rounded-2xl hover:bg-slate-700/50 transition-all duration-300 hover:transform hover:scale-105">
                <div className="w-12 h-12 bg-gradient-to-r from-red-500/20 to-orange-500/20 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <div className="text-red-400">{standard.icon}</div>
                </div>
                <h3 className="text-white font-semibold mb-2">{standard.name}</h3>
                <p className="text-gray-400 text-sm">{standard.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <div className="bg-gradient-to-r from-red-600/20 to-orange-600/20 rounded-3xl p-12 border border-red-500/20 backdrop-blur-sm">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                <span className="bg-gradient-to-r from-red-400 to-orange-400 bg-clip-text text-transparent">
                  Ready to Secure Your Business?
                </span>
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Don't wait for a security breach. Join thousands of businesses already using our cybersecurity solutions 
                to protect their digital assets and maintain customer trust.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <Link
                  to="/contact"
                  className="bg-gradient-to-r from-red-600 to-orange-600 text-white px-10 py-4 rounded-xl text-lg font-semibold hover:from-red-700 hover:to-orange-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-red-500/25 flex items-center justify-center"
                >
                  <Shield className="w-5 h-5 mr-2" />
                  Get Security Assessment
                </Link>
                <Link
                  to="/pricing"
                  className="border-2 border-red-400 text-red-400 px-10 py-4 rounded-xl text-lg font-semibold hover:bg-red-400 hover:text-slate-900 transition-all duration-300 flex items-center justify-center"
                >
                  <Lock className="w-5 h-5 mr-2" />
                  View All Pricing
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CybersecurityPage;