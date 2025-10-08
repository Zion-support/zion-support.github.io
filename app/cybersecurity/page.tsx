import React from 'react';
import { Helmet } from 'react-helmet-async';
import { CheckCircle, Star, Shield, Zap, Lock, Cpu, Brain, Target, BarChart, Settings, Eye } from 'lucide-react';

const CybersecurityPage: React.FC = () => {
  const cyberServices = [
    {
      title: 'Advanced Threat Detection',
      description: 'AI-powered threat detection and response systems with real-time monitoring.',
      icon: '🛡️',
      price: 'Starting at $4,500/month',
      features: ['AI threat detection', 'Real-time monitoring', 'Behavioral analysis', 'Incident response', 'Threat hunting'],
      benefits: ['Detect threats 10x faster', 'Reduce false positives by 80%', 'Prevent 99% of attacks'],
      marketPrice: '$7,000-20,000/month',
      category: 'Threat Detection',
      technologies: ['SIEM', 'SOAR', 'EDR', 'XDR', 'Machine Learning']
    },
    {
      title: 'Penetration Testing & Vulnerability Assessment',
      description: 'Comprehensive security testing to identify and remediate vulnerabilities.',
      icon: '🔍',
      price: 'Starting at $3,000/assessment',
      features: ['Network penetration testing', 'Web application testing', 'Social engineering', 'Physical security', 'Compliance testing'],
      benefits: ['Identify security gaps', 'Meet compliance requirements', 'Improve security posture'],
      marketPrice: '$5,000-15,000/assessment',
      category: 'Security Testing',
      technologies: ['Nmap', 'Burp Suite', 'Metasploit', 'OWASP ZAP', 'Custom Tools']
    },
    {
      title: 'Zero Trust Security Architecture',
      description: 'Implement zero trust security model with identity and access management.',
      icon: '🔐',
      price: 'Starting at $6,000/month',
      features: ['Identity verification', 'Access controls', 'Network segmentation', 'Device trust', 'Continuous monitoring'],
      benefits: ['Eliminate trust assumptions', 'Reduce attack surface', 'Improve compliance'],
      marketPrice: '$10,000-25,000/month',
      category: 'Zero Trust',
      technologies: ['Okta', 'Azure AD', 'Cisco ISE', 'Palo Alto', 'Custom Solutions']
    },
    {
      title: 'Security Operations Center (SOC)',
      description: '24/7 security monitoring and incident response with expert analysts.',
      icon: '🏢',
      price: 'Starting at $8,000/month',
      features: ['24/7 monitoring', 'Incident response', 'Threat intelligence', 'Security analytics', 'Compliance reporting'],
      benefits: ['Round-the-clock protection', 'Faster incident response', 'Reduced security risks'],
      marketPrice: '$15,000-40,000/month',
      category: 'SOC Services',
      technologies: ['SIEM', 'SOAR', 'Threat Intelligence', 'Incident Response', 'Analytics']
    },
    {
      title: 'Cloud Security Solutions',
      description: 'Comprehensive security for cloud environments including AWS, Azure, and GCP.',
      icon: '☁️',
      price: 'Starting at $3,500/month',
      features: ['Cloud security posture', 'Identity management', 'Data protection', 'Compliance monitoring', 'Threat detection'],
      benefits: ['Secure cloud migration', 'Meet compliance requirements', 'Reduce cloud risks'],
      marketPrice: '$6,000-18,000/month',
      category: 'Cloud Security',
      technologies: ['AWS Security', 'Azure Security', 'GCP Security', 'CSPM', 'CWPP']
    },
    {
      title: 'Data Protection & Privacy',
      description: 'Comprehensive data protection solutions with encryption and privacy controls.',
      icon: '🔒',
      price: 'Starting at $2,800/month',
      features: ['Data encryption', 'Privacy controls', 'Data loss prevention', 'Backup security', 'Compliance management'],
      benefits: ['Protect sensitive data', 'Meet privacy regulations', 'Prevent data breaches'],
      marketPrice: '$4,500-12,000/month',
      category: 'Data Protection',
      technologies: ['Encryption', 'DLP', 'Backup Solutions', 'Privacy Tools', 'Compliance Frameworks']
    },
    {
      title: 'Network Security Solutions',
      description: 'Advanced network security with firewalls, intrusion detection, and monitoring.',
      icon: '🌐',
      price: 'Starting at $2,500/month',
      features: ['Next-gen firewalls', 'Intrusion detection', 'Network monitoring', 'VPN solutions', 'Traffic analysis'],
      benefits: ['Protect network perimeter', 'Monitor network traffic', 'Prevent unauthorized access'],
      marketPrice: '$4,000-10,000/month',
      category: 'Network Security',
      technologies: ['Palo Alto', 'Cisco', 'Fortinet', 'Check Point', 'Custom Solutions']
    },
    {
      title: 'Endpoint Security & EDR',
      description: 'Advanced endpoint protection with detection and response capabilities.',
      icon: '💻',
      price: 'Starting at $3,200/month',
      features: ['Endpoint protection', 'Behavioral analysis', 'Threat hunting', 'Incident response', 'Device management'],
      benefits: ['Protect all endpoints', 'Detect advanced threats', 'Respond to incidents quickly'],
      marketPrice: '$5,000-15,000/month',
      category: 'Endpoint Security',
      technologies: ['CrowdStrike', 'SentinelOne', 'Carbon Black', 'Microsoft Defender', 'Custom EDR']
    },
    {
      title: 'Security Awareness Training',
      description: 'Comprehensive security training programs for employees and executives.',
      icon: '🎓',
      price: 'Starting at $1,500/month',
      features: ['Phishing simulation', 'Security training', 'Compliance training', 'Executive briefings', 'Metrics & reporting'],
      benefits: ['Reduce human error', 'Improve security culture', 'Meet compliance requirements'],
      marketPrice: '$2,500-6,000/month',
      category: 'Training',
      technologies: ['Phishing Simulation', 'E-Learning', 'Gamification', 'Compliance Training', 'Analytics']
    },
    {
      title: 'Incident Response & Forensics',
      description: 'Rapid incident response and digital forensics for security breaches.',
      icon: '🚨',
      price: 'Starting at $5,000/incident',
      features: ['Rapid response', 'Digital forensics', 'Evidence collection', 'Recovery planning', 'Lessons learned'],
      benefits: ['Minimize breach impact', 'Preserve evidence', 'Improve future security'],
      marketPrice: '$8,000-25,000/incident',
      category: 'Incident Response',
      technologies: ['Forensic Tools', 'Evidence Collection', 'Recovery Tools', 'Analysis Software', 'Reporting']
    },
    {
      title: 'Compliance & Risk Management',
      description: 'Comprehensive compliance management and risk assessment services.',
      icon: '📋',
      price: 'Starting at $4,000/month',
      features: ['Compliance assessment', 'Risk analysis', 'Policy development', 'Audit support', 'Remediation planning'],
      benefits: ['Meet regulatory requirements', 'Reduce compliance risks', 'Improve governance'],
      marketPrice: '$6,500-18,000/month',
      category: 'Compliance',
      technologies: ['GRC Platforms', 'Risk Assessment', 'Compliance Tools', 'Audit Software', 'Policy Management']
    },
    {
      title: 'Security Consulting & Strategy',
      description: 'Strategic security consulting and roadmap development for organizations.',
      icon: '💡',
      price: 'Starting at $400/hour',
      features: ['Security assessment', 'Strategy development', 'Technology selection', 'Implementation planning', 'ROI analysis'],
      benefits: ['Develop security strategy', 'Optimize security investments', 'Align security with business'],
      marketPrice: '$600-1,500/hour',
      category: 'Consulting',
      technologies: ['Strategic Planning', 'Risk Assessment', 'Technology Evaluation', 'ROI Analysis', 'Best Practices']
    }
  ];

  const categories = [...new Set(cyberServices.map(service => service.category))];

  return (
    <>
      <Helmet>
        <title>Cybersecurity Services - Zion Tech Group</title>
        <meta name="description" content="Advanced cybersecurity services including threat detection, penetration testing, zero trust security, and comprehensive security solutions." />
        <meta name="keywords" content="cybersecurity services, threat detection, penetration testing, zero trust, security consulting, SOC services" />
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
                Protect your business with advanced cybersecurity solutions and expert security services
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
                Expert security professionals delivering comprehensive protection against evolving cyber threats
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-8 h-8 text-red-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Security Experts</h3>
                <p className="text-gray-600">Certified security professionals with advanced threat intelligence</p>
              </div>
              <div className="text-center">
                <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Zap className="w-8 h-8 text-orange-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Rapid Response</h3>
                <p className="text-gray-600">24/7 monitoring and rapid incident response capabilities</p>
              </div>
              <div className="text-center">
                <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Lock className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Proven Protection</h3>
                <p className="text-gray-600">Prevent 99% of cyber attacks with our advanced security solutions</p>
              </div>
              <div className="text-center">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Target className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Compliance Ready</h3>
                <p className="text-gray-600">Meet all regulatory requirements and industry standards</p>
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
                          Save up to 35% vs market rates
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
                        Get Security Consultation
                      </button>
                    </div>
                  ))}
              </div>
            </div>
          </section>
        ))}

        {/* Cybersecurity Capabilities Showcase */}
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
              <div className="text-center p-6 bg-gradient-to-br from-red-50 to-orange-100 rounded-lg">
                <Shield className="w-12 h-12 text-red-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Threat Detection</h3>
                <p className="text-gray-600">AI-powered threat detection and response systems</p>
              </div>
              <div className="text-center p-6 bg-gradient-to-br from-orange-50 to-amber-100 rounded-lg">
                <Eye className="w-12 h-12 text-orange-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Security Testing</h3>
                <p className="text-gray-600">Penetration testing and vulnerability assessments</p>
              </div>
              <div className="text-center p-6 bg-gradient-to-br from-green-50 to-emerald-100 rounded-lg">
                <Lock className="w-12 h-12 text-green-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Zero Trust</h3>
                <p className="text-gray-600">Zero trust security architecture implementation</p>
              </div>
              <div className="text-center p-6 bg-gradient-to-br from-blue-50 to-cyan-100 rounded-lg">
                <Settings className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">SOC Services</h3>
                <p className="text-gray-600">24/7 security monitoring and incident response</p>
              </div>
              <div className="text-center p-6 bg-gradient-to-br from-purple-50 to-violet-100 rounded-lg">
                <Cpu className="w-12 h-12 text-purple-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Cloud Security</h3>
                <p className="text-gray-600">Comprehensive cloud security solutions</p>
              </div>
              <div className="text-center p-6 bg-gradient-to-br from-pink-50 to-rose-100 rounded-lg">
                <BarChart className="w-12 h-12 text-pink-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Compliance</h3>
                <p className="text-gray-600">Compliance management and risk assessment</p>
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