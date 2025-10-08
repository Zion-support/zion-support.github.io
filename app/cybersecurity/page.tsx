import React from 'react';
import { Helmet } from 'react-helmet-async';
import { CheckCircle, Star, Shield, Lock, Eye, AlertTriangle, Users, Globe, Database, Server, Smartphone, Cloud, Key, Search, FileText, Zap, Target, Award, Clock, BarChart, Settings, Bell, Heart, Eye as EyeIcon, Download, Upload, Share, Edit, Trash, Plus, Minus, ArrowRight, Rocket } from 'lucide-react';

const CybersecurityPage: React.FC = () => {
  const cybersecurityServices = [
    {
      title: 'Advanced Threat Detection & Response',
      description: 'AI-powered threat detection system that identifies and responds to cyber attacks in real-time.',
      icon: '🛡️',
      price: 'Starting at $2,500/month',
      features: ['Real-time threat monitoring', 'AI-powered analysis', 'Automated response', '24/7 SOC monitoring', 'Incident investigation'],
      benefits: ['Prevent 99% of cyber attacks', 'Reduce response time by 80%', 'Minimize business disruption'],
      marketPrice: '$5,000-12,000/month',
      category: 'Threat Detection',
      technologies: ['SIEM', 'AI/ML', 'Behavioral Analytics', 'Threat Intelligence', 'Automation'],
      popular: true
    },
    {
      title: 'Zero Trust Security Architecture',
      description: 'Implement zero trust security model with continuous verification and least privilege access.',
      icon: '🔐',
      price: 'Starting at $3,500/month',
      features: ['Identity verification', 'Device trust scoring', 'Network segmentation', 'Policy enforcement', 'Access monitoring'],
      benefits: ['Eliminate security perimeters', 'Reduce breach risk by 90%', 'Improve compliance posture'],
      marketPrice: '$7,000-18,000/month',
      category: 'Zero Trust',
      technologies: ['IAM', 'PAM', 'SDP', 'Micro-segmentation', 'Policy Engine']
    },
    {
      title: 'Penetration Testing & Vulnerability Assessment',
      description: 'Comprehensive security testing to identify vulnerabilities before attackers do.',
      icon: '🔍',
      price: 'Starting at $1,500/project',
      features: ['Automated vulnerability scanning', 'Manual penetration testing', 'Social engineering tests', 'Compliance testing', 'Remediation guidance'],
      benefits: ['Identify security gaps', 'Meet compliance requirements', 'Prevent data breaches'],
      marketPrice: '$3,000-8,000/project',
      category: 'Testing',
      technologies: ['OWASP', 'NIST', 'Custom Tools', 'Automation', 'Reporting']
    },
    {
      title: 'Security Operations Center (SOC)',
      description: '24/7 security monitoring and incident response with expert analysts.',
      icon: '🏢',
      price: 'Starting at $4,000/month',
      features: ['24/7 monitoring', 'Expert analysts', 'Incident response', 'Threat hunting', 'Security reporting'],
      benefits: ['Round-the-clock protection', 'Expert security team', 'Rapid incident response'],
      marketPrice: '$8,000-25,000/month',
      category: 'SOC Services',
      technologies: ['SIEM', 'SOAR', 'Threat Intelligence', 'Analytics', 'Communication']
    },
    {
      title: 'Cloud Security Management',
      description: 'Comprehensive security for cloud environments including AWS, Azure, and Google Cloud.',
      icon: '☁️',
      price: 'Starting at $2,000/month',
      features: ['Cloud security posture management', 'Identity and access management', 'Data protection', 'Compliance monitoring', 'Threat detection'],
      benefits: ['Secure cloud migration', 'Maintain compliance', 'Reduce cloud risks'],
      marketPrice: '$4,000-12,000/month',
      category: 'Cloud Security',
      technologies: ['CSPM', 'CASB', 'CWPP', 'Cloud IAM', 'Data Loss Prevention']
    },
    {
      title: 'Data Loss Prevention (DLP)',
      description: 'Protect sensitive data from unauthorized access, use, or transmission.',
      icon: '📄',
      price: 'Starting at $1,800/month',
      features: ['Data discovery', 'Content inspection', 'Policy enforcement', 'Incident response', 'Compliance reporting'],
      benefits: ['Prevent data breaches', 'Ensure compliance', 'Protect intellectual property'],
      marketPrice: '$3,500-10,000/month',
      category: 'Data Protection',
      technologies: ['DLP Software', 'Content Analysis', 'Policy Engine', 'Encryption', 'Monitoring']
    },
    {
      title: 'Identity & Access Management (IAM)',
      description: 'Comprehensive identity management with single sign-on and multi-factor authentication.',
      icon: '👤',
      price: 'Starting at $2,200/month',
      features: ['Single sign-on (SSO)', 'Multi-factor authentication', 'User provisioning', 'Access governance', 'Audit logging'],
      benefits: ['Simplify user management', 'Enhance security', 'Improve productivity'],
      marketPrice: '$4,500-15,000/month',
      category: 'Identity Management',
      technologies: ['SSO', 'MFA', 'PAM', 'Directory Services', 'API Management']
    },
    {
      title: 'Network Security & Firewall Management',
      description: 'Advanced network security with next-generation firewalls and intrusion prevention.',
      icon: '🌐',
      price: 'Starting at $1,500/month',
      features: ['Next-gen firewall', 'Intrusion prevention', 'Network segmentation', 'VPN management', 'Traffic analysis'],
      benefits: ['Block malicious traffic', 'Secure network perimeter', 'Monitor network activity'],
      marketPrice: '$3,000-8,000/month',
      category: 'Network Security',
      technologies: ['NGFW', 'IPS/IDS', 'SD-WAN', 'VPN', 'Network Monitoring']
    },
    {
      title: 'Email Security & Phishing Protection',
      description: 'Advanced email security to prevent phishing, malware, and spam attacks.',
      icon: '📧',
      price: 'Starting at $800/month',
      features: ['Email filtering', 'Phishing detection', 'Malware scanning', 'URL protection', 'User training'],
      benefits: ['Prevent email attacks', 'Reduce spam', 'Educate users'],
      marketPrice: '$1,500-4,000/month',
      category: 'Email Security',
      technologies: ['Email Gateway', 'AI/ML', 'URL Analysis', 'Sandboxing', 'Training Platform']
    },
    {
      title: 'Mobile Device Security',
      description: 'Comprehensive security for mobile devices including BYOD management.',
      icon: '📱',
      price: 'Starting at $1,200/month',
      features: ['Mobile device management', 'App security', 'Data encryption', 'Remote wipe', 'Compliance monitoring'],
      benefits: ['Secure mobile workforce', 'Protect corporate data', 'Enable BYOD safely'],
      marketPrice: '$2,500-6,000/month',
      category: 'Mobile Security',
      technologies: ['MDM', 'MAM', 'Mobile VPN', 'App Wrapping', 'Containerization']
    },
    {
      title: 'Security Awareness Training',
      description: 'Comprehensive security training program to educate employees about cyber threats.',
      icon: '🎓',
      price: 'Starting at $500/month',
      features: ['Interactive training modules', 'Phishing simulations', 'Security assessments', 'Compliance training', 'Progress tracking'],
      benefits: ['Reduce human error', 'Improve security culture', 'Meet compliance requirements'],
      marketPrice: '$1,000-3,000/month',
      category: 'Training',
      technologies: ['LMS', 'Simulation Platform', 'Analytics', 'Gamification', 'Reporting']
    },
    {
      title: 'Compliance & Risk Management',
      description: 'Comprehensive compliance management for GDPR, HIPAA, SOX, and other regulations.',
      icon: '📋',
      price: 'Starting at $2,800/month',
      features: ['Compliance assessment', 'Risk analysis', 'Policy management', 'Audit support', 'Reporting'],
      benefits: ['Ensure compliance', 'Reduce audit costs', 'Minimize regulatory risks'],
      marketPrice: '$5,000-15,000/month',
      category: 'Compliance',
      technologies: ['GRC Platform', 'Risk Assessment', 'Policy Management', 'Audit Tools', 'Reporting']
    },
    {
      title: 'Incident Response & Forensics',
      description: 'Rapid incident response and digital forensics to minimize damage and recover quickly.',
      icon: '🚨',
      price: 'Starting at $3,500/month',
      features: ['24/7 incident response', 'Digital forensics', 'Evidence collection', 'Recovery planning', 'Legal support'],
      benefits: ['Minimize breach impact', 'Preserve evidence', 'Accelerate recovery'],
      marketPrice: '$7,000-20,000/month',
      category: 'Incident Response',
      technologies: ['Forensics Tools', 'Evidence Management', 'Recovery Systems', 'Legal Hold', 'Communication']
    },
    {
      title: 'Security Architecture & Design',
      description: 'Design and implement comprehensive security architecture for your organization.',
      icon: '🏗️',
      price: 'Starting at $4,500/month',
      features: ['Security architecture design', 'Technology selection', 'Implementation planning', 'Integration support', 'Documentation'],
      benefits: ['Build secure foundation', 'Align with business goals', 'Reduce implementation risks'],
      marketPrice: '$9,000-25,000/month',
      category: 'Architecture',
      technologies: ['Architecture Frameworks', 'Security Patterns', 'Integration Tools', 'Documentation', 'Validation']
    },
    {
      title: 'Managed Security Services',
      description: 'Complete outsourced security management with 24/7 monitoring and support.',
      icon: '🔧',
      price: 'Starting at $5,000/month',
      features: ['Complete security management', '24/7 monitoring', 'Incident response', 'Vulnerability management', 'Compliance support'],
      benefits: ['Reduce security burden', 'Access expert team', 'Improve security posture'],
      marketPrice: '$10,000-30,000/month',
      category: 'Managed Services',
      technologies: ['SIEM', 'SOAR', 'Threat Intelligence', 'Automation', 'Analytics']
    },
    {
      title: 'Security Consulting & Strategy',
      description: 'Strategic security consulting to develop comprehensive security programs.',
      icon: '💡',
      price: 'Starting at $300/hour',
      features: ['Security strategy development', 'Risk assessment', 'Technology evaluation', 'Implementation planning', 'Training'],
      benefits: ['Develop security roadmap', 'Align with business objectives', 'Optimize security investments'],
      marketPrice: '$500-1,000/hour',
      category: 'Consulting',
      technologies: ['Strategic Planning', 'Risk Assessment', 'Technology Evaluation', 'Implementation', 'Training']
    },
    {
      title: 'Endpoint Detection & Response (EDR)',
      description: 'Advanced endpoint security with behavioral analysis and automated response.',
      icon: '💻',
      price: 'Starting at $2,000/month',
      features: ['Endpoint monitoring', 'Behavioral analysis', 'Threat hunting', 'Automated response', 'Forensics'],
      benefits: ['Detect advanced threats', 'Prevent malware execution', 'Accelerate investigation'],
      marketPrice: '$4,000-12,000/month',
      category: 'Endpoint Security',
      technologies: ['EDR Platform', 'Behavioral Analytics', 'Machine Learning', 'Automation', 'Forensics']
    },
    {
      title: 'Security Information & Event Management (SIEM)',
      description: 'Centralized security monitoring and log management with advanced analytics.',
      icon: '📊',
      price: 'Starting at $3,000/month',
      features: ['Log collection', 'Event correlation', 'Threat detection', 'Incident response', 'Compliance reporting'],
      benefits: ['Centralize security monitoring', 'Improve threat detection', 'Meet compliance requirements'],
      marketPrice: '$6,000-20,000/month',
      category: 'SIEM',
      technologies: ['SIEM Platform', 'Log Management', 'Correlation Engine', 'Analytics', 'Reporting']
    },
    {
      title: 'Web Application Security',
      description: 'Comprehensive security for web applications including WAF and vulnerability scanning.',
      icon: '🌐',
      price: 'Starting at $1,800/month',
      features: ['Web application firewall', 'Vulnerability scanning', 'Code analysis', 'Penetration testing', 'Monitoring'],
      benefits: ['Protect web applications', 'Prevent OWASP attacks', 'Ensure secure development'],
      marketPrice: '$3,500-10,000/month',
      category: 'Web Security',
      technologies: ['WAF', 'DAST', 'SAST', 'IAST', 'RASP']
    },
    {
      title: 'Cryptography & Key Management',
      description: 'Advanced encryption and key management solutions for data protection.',
      icon: '🔑',
      price: 'Starting at $2,500/month',
      features: ['Encryption services', 'Key management', 'Certificate management', 'HSM integration', 'Compliance support'],
      benefits: ['Protect sensitive data', 'Manage encryption keys', 'Meet compliance requirements'],
      marketPrice: '$5,000-15,000/month',
      category: 'Cryptography',
      technologies: ['HSM', 'Key Management', 'Certificate Authority', 'Encryption', 'PKI']
    }
  ];

  const categories = [...new Set(cybersecurityServices.map(service => service.category))];

  return (
    <>
      <Helmet>
        <title>Cybersecurity Solutions - Zion Tech Group</title>
        <meta name="description" content="Comprehensive cybersecurity services including threat detection, zero trust security, penetration testing, and 24/7 SOC monitoring." />
        <meta name="keywords" content="cybersecurity, threat detection, zero trust, penetration testing, SOC, security consulting, compliance" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-red-50">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-r from-red-600 to-orange-700 text-white py-20">
          <div className="absolute inset-0 bg-black opacity-20"></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Cybersecurity Solutions
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-red-100 max-w-3xl mx-auto">
                Protect your business with enterprise-grade cybersecurity solutions and 24/7 monitoring
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-white text-red-600 px-8 py-3 rounded-lg font-semibold hover:bg-red-50 transition-colors">
                  Get Security Assessment
                </button>
                <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-red-600 transition-colors">
                  View Security Solutions
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Key Benefits */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Why Choose Our Cybersecurity Solutions?
              </h2>
              <p className="text-xl text-gray-600">
                Enterprise-grade security delivered by certified experts with proven track records
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-8 h-8 text-red-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Certified Experts</h3>
                <p className="text-gray-600">CISSP, CISM, and other industry certifications</p>
              </div>
              <div className="text-center">
                <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Eye className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">24/7 Monitoring</h3>
                <p className="text-gray-600">Round-the-clock security monitoring and response</p>
              </div>
              <div className="text-center">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Target className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Proactive Defense</h3>
                <p className="text-gray-600">AI-powered threat detection and prevention</p>
              </div>
              <div className="text-center">
                <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="w-8 h-8 text-orange-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Proven Results</h3>
                <p className="text-gray-600">99% threat prevention rate for our clients</p>
              </div>
            </div>
          </div>
        </section>

        {/* Services by Category */}
        {categories.map(category => (
          <section key={category} className="py-16 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  {category} Services
                </h2>
                <p className="text-xl text-gray-600">
                  Comprehensive {category.toLowerCase()} solutions to protect your organization
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {cybersecurityServices
                  .filter(service => service.category === category)
                  .map((service, index) => (
                    <div key={index} className={`bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow relative ${service.popular ? 'ring-2 ring-red-500' : ''}`}>
                      {service.popular && (
                        <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                          <span className="bg-red-500 text-white px-4 py-1 rounded-full text-sm font-semibold flex items-center">
                            <Star className="w-4 h-4 mr-1" />
                            Most Popular
                          </span>
                        </div>
                      )}
                      <div className="text-4xl mb-4">{service.icon}</div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-3">{service.title}</h3>
                      <p className="text-gray-600 mb-4">{service.description}</p>
                      
                      <div className="mb-4">
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-2xl font-bold text-red-600">{service.price}</span>
                          <span className="text-sm text-gray-500">Market: {service.marketPrice}</span>
                        </div>
                        <div className="text-sm text-green-600 font-semibold">
                          Save up to 50% vs market rates
                        </div>
                      </div>

                      <div className="mb-4">
                        <h4 className="font-semibold text-gray-900 mb-2">Key Features:</h4>
                        <ul className="space-y-1">
                          {service.features.map((feature, featureIndex) => (
                            <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                              <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="mb-4">
                        <h4 className="font-semibold text-gray-900 mb-2">Technologies:</h4>
                        <div className="flex flex-wrap gap-2">
                          {service.technologies.map((tech, techIndex) => (
                            <span key={techIndex} className="bg-red-100 text-red-800 text-xs px-2 py-1 rounded">
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div className="mb-6">
                        <h4 className="font-semibold text-gray-900 mb-2">Security Benefits:</h4>
                        <ul className="space-y-1">
                          {service.benefits.map((benefit, benefitIndex) => (
                            <li key={benefitIndex} className="flex items-center text-sm text-gray-600">
                              <Star className="w-4 h-4 text-yellow-500 mr-2 flex-shrink-0" />
                              {benefit}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <button className="w-full bg-red-600 text-white py-2 px-4 rounded-lg font-semibold hover:bg-red-700 transition-colors">
                        Get Security Quote
                      </button>
                    </div>
                  ))}
              </div>
            </div>
          </section>
        ))}

        {/* Security Statistics */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Our Security Track Record
              </h2>
              <p className="text-xl text-gray-600">
                Proven results in protecting organizations from cyber threats
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-4xl font-bold text-red-600 mb-2">99%</div>
                <div className="text-gray-600">Threat Prevention Rate</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-green-600 mb-2">500+</div>
                <div className="text-gray-600">Organizations Protected</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-blue-600 mb-2">24/7</div>
                <div className="text-gray-600">Security Monitoring</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-purple-600 mb-2">5min</div>
                <div className="text-gray-600">Average Response Time</div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-16 bg-gradient-to-r from-red-600 to-orange-600 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Secure Your Business?
            </h2>
            <p className="text-xl mb-8 text-red-100">
              Contact our cybersecurity experts for a free security assessment and custom protection plan
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
    </>
  );
};

export default CybersecurityPage;