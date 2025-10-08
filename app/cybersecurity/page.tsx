import React from 'react';
import { Helmet } from 'react-helmet-async';


const CybersecurityPage: React.FC = () => {
  const securityServices = [
    {
      title: 'Advanced Threat Detection',
      description: 'AI-powered threat detection and response systems that identify and neutralize cyber threats in real-time.',
      icon: '🛡️',
      price: 'Starting at $4,500/month',
      features: ['Real-time threat monitoring', 'AI-powered detection', 'Automated response', 'Threat intelligence', 'Incident investigation'],
      benefits: ['Prevent 99% of cyber attacks', 'Reduce response time by 90%', 'Minimize security incidents'],
      marketPrice: '$8,000-25,000/month',
      category: 'Threat Detection',
      technologies: ['SIEM', 'EDR', 'XDR', 'SOAR', 'AI/ML Security']
    },
    {
      title: 'Zero Trust Security Architecture',
      description: 'Comprehensive zero trust implementation with identity verification and micro-segmentation.',
      icon: '🔐',
      price: 'Starting at $6,500/month',
      features: ['Identity verification', 'Micro-segmentation', 'Least privilege access', 'Continuous monitoring', 'Policy enforcement'],
      benefits: ['Eliminate lateral movement', 'Reduce attack surface', 'Ensure compliance'],
      marketPrice: '$12,000-40,000/month',
      category: 'Zero Trust',
      technologies: ['Identity Management', 'Network Segmentation', 'Policy Engines', 'Access Controls']
    },
    {
      title: 'Penetration Testing & Vulnerability Assessment',
      description: 'Comprehensive security testing to identify vulnerabilities and assess security posture.',
      icon: '🔍',
      price: 'Starting at $3,500/assessment',
      features: ['Network penetration testing', 'Web application testing', 'Social engineering', 'Physical security testing', 'Compliance testing'],
      benefits: ['Identify security gaps', 'Prevent data breaches', 'Ensure compliance'],
      marketPrice: '$6,000-20,000/assessment',
      category: 'Security Testing',
      technologies: ['OWASP', 'NIST', 'OSSTMM', 'Custom Tools', 'Automated Scanners']
    },
    {
      title: 'Security Operations Center (SOC)',
      description: '24/7 security monitoring and incident response with dedicated security analysts.',
      icon: '🏢',
      price: 'Starting at $8,000/month',
      features: ['24/7 monitoring', 'Incident response', 'Threat hunting', 'Security analytics', 'Compliance reporting'],
      benefits: ['Round-the-clock protection', 'Faster incident response', 'Proactive threat hunting'],
      marketPrice: '$15,000-50,000/month',
      category: 'SOC Services',
      technologies: ['SIEM', 'SOAR', 'Threat Intelligence', 'Analytics', 'Incident Management']
    },
    {
      title: 'Cloud Security Solutions',
      description: 'Comprehensive cloud security for AWS, Azure, and Google Cloud with compliance monitoring.',
      icon: '☁️',
      price: 'Starting at $3,200/month',
      features: ['Cloud security posture', 'Identity & access management', 'Data encryption', 'Compliance monitoring', 'Threat detection'],
      benefits: ['Secure cloud environments', 'Ensure compliance', 'Prevent data breaches'],
      marketPrice: '$6,000-20,000/month',
      category: 'Cloud Security',
      technologies: ['CSPM', 'CWPP', 'CASB', 'Cloud IAM', 'Encryption']
    },
    {
      title: 'Data Protection & Privacy',
      description: 'Comprehensive data protection solutions including encryption, DLP, and privacy compliance.',
      icon: '🔒',
      price: 'Starting at $2,800/month',
      features: ['Data encryption', 'Data loss prevention', 'Privacy compliance', 'Data classification', 'Access controls'],
      benefits: ['Protect sensitive data', 'Ensure privacy compliance', 'Prevent data leaks'],
      marketPrice: '$5,000-18,000/month',
      category: 'Data Protection',
      technologies: ['DLP', 'Encryption', 'GDPR Tools', 'Data Classification', 'Privacy Management']
    },
    {
      title: 'Network Security & Firewall Management',
      description: 'Advanced network security with next-generation firewalls and intrusion prevention systems.',
      icon: '🌐',
      price: 'Starting at $2,500/month',
      features: ['Next-gen firewalls', 'Intrusion prevention', 'Network segmentation', 'VPN management', 'Traffic analysis'],
      benefits: ['Block malicious traffic', 'Prevent network attacks', 'Improve network performance'],
      marketPrice: '$4,500-15,000/month',
      category: 'Network Security',
      technologies: ['NGFW', 'IPS', 'VPN', 'SD-WAN', 'Network Monitoring']
    },
    {
      title: 'Email Security & Phishing Protection',
      description: 'Advanced email security solutions to prevent phishing, malware, and email-based attacks.',
      icon: '📧',
      price: 'Starting at $1,800/month',
      features: ['Phishing protection', 'Malware scanning', 'Email encryption', 'Spam filtering', 'User training'],
      benefits: ['Prevent email attacks', 'Reduce phishing success', 'Protect sensitive communications'],
      marketPrice: '$3,500-12,000/month',
      category: 'Email Security',
      technologies: ['Email Gateways', 'Sandboxing', 'AI Detection', 'User Training', 'Encryption']
    },
    {
      title: 'Mobile Security Solutions',
      description: 'Comprehensive mobile device security with MDM, app security, and threat protection.',
      icon: '📱',
      price: 'Starting at $2,200/month',
      features: ['Mobile device management', 'App security', 'Threat protection', 'Compliance monitoring', 'Remote wipe'],
      benefits: ['Secure mobile devices', 'Prevent mobile threats', 'Ensure compliance'],
      marketPrice: '$4,000-15,000/month',
      category: 'Mobile Security',
      technologies: ['MDM', 'EMM', 'App Security', 'Threat Detection', 'Compliance Tools']
    },
    {
      title: 'Compliance & Risk Management',
      description: 'Comprehensive compliance management for GDPR, HIPAA, SOX, and other regulatory requirements.',
      icon: '📋',
      price: 'Starting at $3,500/month',
      features: ['Compliance assessment', 'Risk management', 'Policy development', 'Audit support', 'Training programs'],
      benefits: ['Ensure compliance', 'Reduce regulatory risks', 'Avoid penalties'],
      marketPrice: '$6,500-25,000/month',
      category: 'Compliance',
      technologies: ['GRC Platforms', 'Risk Assessment', 'Compliance Tools', 'Audit Management']
    },
    {
      title: 'Security Awareness Training',
      description: 'Comprehensive security awareness training programs to educate employees about cyber threats.',
      icon: '🎓',
      price: 'Starting at $1,500/month',
      features: ['Interactive training modules', 'Phishing simulations', 'Security assessments', 'Progress tracking', 'Custom content'],
      benefits: ['Reduce human error', 'Improve security culture', 'Prevent social engineering'],
      marketPrice: '$2,500-8,000/month',
      category: 'Security Training',
      technologies: ['LMS', 'Phishing Simulators', 'Interactive Content', 'Assessment Tools']
    },
    {
      title: 'Incident Response & Forensics',
      description: 'Rapid incident response and digital forensics services for security breaches and investigations.',
      icon: '🚨',
      price: 'Starting at $5,000/incident',
      features: ['Rapid response', 'Digital forensics', 'Evidence collection', 'Incident analysis', 'Recovery planning'],
      benefits: ['Minimize breach impact', 'Preserve evidence', 'Accelerate recovery'],
      marketPrice: '$10,000-50,000/incident',
      category: 'Incident Response',
      technologies: ['Forensic Tools', 'Incident Management', 'Evidence Collection', 'Recovery Tools']
    }
  ];return (
    <>
      <Helmet>
        <title>Cybersecurity Services - Zion Tech Group</title>
        <meta name="description" content="Advanced cybersecurity services including threat detection, penetration testing, zero trust security, and comprehensive security solutions." />
        <meta name="keywords" content="cybersecurity services, threat detection, penetration testing, zero trust, security consulting, SOC services" />cursor/add-new-services-and-deploy-updates-f159
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-red-50">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-r from-red-600 to-orange-700 text-white py-20">
          <div className="absolute inset-0 bg-black opacity-20"></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Cybersecurity Services
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-red-100 max-w-3xl mx-auto">
                Protect your business with advanced cybersecurity solutions and expert threat protectioncursor/add-new-services-and-deploy-updates-f159
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-white text-red-600 px-8 py-3 rounded-lg font-semibold hover:bg-red-50 transition-colors">
                  Get Security Assessment
                </button>
                <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-red-600 transition-colors">
                  Schedule Consultation
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
                Why Choose Our Cybersecurity Services?
              </h2>
              <p className="text-xl text-gray-600">
                Expert security professionals delivering comprehensive protection against evolving cyber threatscursor/add-new-services-and-deploy-updates-f159
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-8 h-8 text-red-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Advanced Protection</h3>
                <p className="text-gray-600">Cutting-edge security technologies and AI-powered threat detection</p>
              </div>
              <div className="text-center">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Eye className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">24/7 Monitoring</h3>
                <p className="text-gray-600">Round-the-clock security monitoring and incident response</p>cursor/add-new-services-and-deploy-updates-f159
              </div>
              <div className="text-center">
                <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Lock className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Compliance Ready</h3>
                <p className="text-gray-600">Ensure compliance with GDPR, HIPAA, SOX, and other regulations</p>
              </div>
              <div className="text-center">
                <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <AlertTriangle className="w-8 h-8 text-orange-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Rapid Response</h3>
                <p className="text-gray-600">Quick incident response and recovery to minimize business impact</p>cursor/add-new-services-and-deploy-updates-f159
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
                  {category} Solutions
                </h2>
                <p className="text-xl text-gray-600">
                  Specialized {category.toLowerCase()} services for comprehensive security protection
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {cyberServices
                  .filter(service => service.category === category)
                  .map((service, index) => (
                    <div key={index} className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
                      <div className="text-4xl mb-4">{service.icon}</div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-3">{service.title}</h3>
                      <p className="text-gray-600 mb-4">{service.description}</p>
                      
                      <div className="mb-4">
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-2xl font-bold text-red-600">{service.price}</span>
                          <span className="text-sm text-gray-500">Market: {service.marketPrice}</span>
                        </div>
                        <div className="text-sm text-green-600 font-semibold">
                          Save up to 50% vs market ratescursor/add-new-services-and-deploy-updates-f159
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
                        <h4 className="font-semibold text-gray-900 mb-2">Business Benefits:</h4>cursor/add-new-services-and-deploy-updates-f159
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
                        Get Security Consultation
                      </button>
                    </div>
                  ))}
              </div>
            </div>
          </section>
        ))}

        {/* Cybersecurity Capabilities Showcase */}cursor/add-new-services-and-deploy-updates-f159
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Our Cybersecurity Capabilities
              </h2>
              <p className="text-xl text-gray-600">
                Comprehensive security solutions covering all aspects of cyber protection
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="text-center p-6 bg-gradient-to-br from-red-50 to-orange-100 rounded-lg">cursor/add-new-services-and-deploy-updates-f159
                <Shield className="w-12 h-12 text-red-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Threat Detection</h3>
                <p className="text-gray-600">AI-powered threat detection and response systems</p>
              </div>
              <div className="text-center p-6 bg-gradient-to-br from-blue-50 to-cyan-100 rounded-lg">
                <Lock className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Zero Trust</h3>
                <p className="text-gray-600">Comprehensive zero trust security architecture</p>
              </div>
              <div className="text-center p-6 bg-gradient-to-br from-green-50 to-emerald-100 rounded-lg">
                <Eye className="w-12 h-12 text-green-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">SOC Services</h3>
                <p className="text-gray-600">24/7 security operations center monitoring</p>
              </div>
              <div className="text-center p-6 bg-gradient-to-br from-purple-50 to-violet-100 rounded-lg">
                <Database className="w-12 h-12 text-purple-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Data Protection</h3>
                <p className="text-gray-600">Comprehensive data protection and privacy solutions</p>
              </div>
              <div className="text-center p-6 bg-gradient-to-br from-orange-50 to-amber-100 rounded-lg">
                <Globe className="w-12 h-12 text-orange-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Cloud Security</h3>
                <p className="text-gray-600">Advanced cloud security and compliance solutions</p>
              </div>
              <div className="text-center p-6 bg-gradient-to-br from-indigo-50 to-blue-100 rounded-lg">
                <AlertTriangle className="w-12 h-12 text-indigo-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Incident Response</h3>
                <p className="text-gray-600">Rapid incident response and digital forensics</p>cursor/add-new-services-and-deploy-updates-f159
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
              Contact our cybersecurity experts for a free security assessment and custom protection strategy
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