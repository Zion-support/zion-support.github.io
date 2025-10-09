import React from 'react';
import Head from 'next/head';
import { CheckCircle, TrendingUp, Phone, Mail, MapPin, Shield, Lock, Eye, AlertTriangle } from 'lucide-react';

const AICybersecurityPage: React.FC = () => {
  const securityServices = [
    {
      title: 'AI-Powered Threat Detection',
      description: 'Advanced threat detection using machine learning to identify and prevent cyber attacks in real-time.',
      icon: '🛡️',
      price: '$1,200/month',
      features: [
        'Real-time Threat Detection',
        'Behavioral Analysis',
        'Anomaly Detection',
        'Threat Intelligence',
        'Automated Response',
        'Incident Forensics'
      ],
      benefits: [
        'Detect 99.9% of threats',
        'Reduce false positives by 80%',
        'Prevent attacks before damage',
        'Enable proactive security'
      ],
      marketPrice: '$2,500-5,000/month',
      category: 'Threat Detection',
      technologies: ['Machine Learning', 'SIEM', 'Log Analysis', 'Behavioral Analytics', 'Threat Intelligence', 'APIs']
    },
    {
      title: 'AI Fraud Prevention',
      description: 'Intelligent fraud detection and prevention using advanced AI algorithms and pattern recognition.',
      icon: '🔍',
      price: '$1,500/month',
      features: [
        'Transaction Monitoring',
        'Pattern Recognition',
        'Risk Scoring',
        'Real-time Alerts',
        'Fraud Analytics',
        'Compliance Reporting'
      ],
      benefits: [
        'Prevent 95% of fraud attempts',
        'Reduce false positives by 70%',
        'Save millions in fraud losses',
        'Ensure compliance automatically'
      ],
      marketPrice: '$3,000-6,000/month',
      category: 'Fraud Prevention',
      technologies: ['Machine Learning', 'Pattern Recognition', 'Risk Models', 'Real-time Processing', 'APIs', 'Analytics']
    },
    {
      title: 'AI Security Monitoring',
      description: 'Comprehensive security monitoring with AI-powered analysis and automated incident response.',
      icon: '👁️',
      price: '$1,000/month',
      features: [
        '24/7 Security Monitoring',
        'AI-Powered Analysis',
        'Automated Alerts',
        'Incident Response',
        'Security Dashboards',
        'Compliance Tracking'
      ],
      benefits: [
        'Monitor all systems continuously',
        'Respond to threats in seconds',
        'Reduce security incidents by 90%',
        'Ensure compliance automatically'
      ],
      marketPrice: '$2,000-4,000/month',
      category: 'Security Monitoring',
      technologies: ['SIEM', 'AI/ML', 'Real-time Analytics', 'Automation', 'APIs', 'Dashboards']
    },
    {
      title: 'AI Vulnerability Assessment',
      description: 'Intelligent vulnerability scanning and assessment with automated remediation recommendations.',
      icon: '🔧',
      price: '$800/month',
      features: [
        'Automated Vulnerability Scanning',
        'Risk Prioritization',
        'Remediation Guidance',
        'Compliance Checking',
        'Security Scoring',
        'Trend Analysis'
      ],
      benefits: [
        'Identify 100% of vulnerabilities',
        'Prioritize risks intelligently',
        'Reduce remediation time by 60%',
        'Improve security posture'
      ],
      marketPrice: '$1,500-3,000/month',
      category: 'Vulnerability Management',
      technologies: ['Vulnerability Scanners', 'AI/ML', 'Risk Assessment', 'Automation', 'APIs', 'Reporting']
    },
    {
      title: 'AI Identity & Access Management',
      description: 'Intelligent identity verification and access control with behavioral analytics and risk assessment.',
      icon: '🔐',
      price: '$1,300/month',
      features: [
        'Identity Verification',
        'Access Control',
        'Behavioral Analytics',
        'Risk Assessment',
        'Multi-factor Authentication',
        'Privilege Management'
      ],
      benefits: [
        'Prevent 99% of unauthorized access',
        'Reduce identity fraud by 95%',
        'Automate access management',
        'Ensure compliance'
      ],
      marketPrice: '$2,500-5,000/month',
      category: 'Identity Management',
      technologies: ['IAM', 'Behavioral Analytics', 'Risk Models', 'MFA', 'APIs', 'Machine Learning']
    },
    {
      title: 'AI Data Protection',
      description: 'Intelligent data protection with automated classification, encryption, and privacy compliance.',
      icon: '🔒',
      price: '$1,400/month',
      features: [
        'Data Classification',
        'Automated Encryption',
        'Privacy Compliance',
        'Data Loss Prevention',
        'Access Controls',
        'Audit Logging'
      ],
      benefits: [
        'Protect 100% of sensitive data',
        'Ensure privacy compliance',
        'Prevent data breaches',
        'Automate data protection'
      ],
      marketPrice: '$2,800-5,500/month',
      category: 'Data Protection',
      technologies: ['Encryption', 'DLP', 'Privacy Tools', 'Compliance', 'APIs', 'Machine Learning']
    },
    {
      title: 'AI Network Security',
      description: 'Intelligent network security with AI-powered traffic analysis and automated threat response.',
      icon: '🌐',
      price: '$1,100/month',
      features: [
        'Network Traffic Analysis',
        'Intrusion Detection',
        'DDoS Protection',
        'Network Segmentation',
        'Threat Hunting',
        'Performance Monitoring'
      ],
      benefits: [
        'Detect network threats instantly',
        'Prevent DDoS attacks',
        'Optimize network performance',
        'Ensure network security'
      ],
      marketPrice: '$2,200-4,500/month',
      category: 'Network Security',
      technologies: ['Network Analysis', 'AI/ML', 'Intrusion Detection', 'DDoS Protection', 'APIs', 'Monitoring']
    },
    {
      title: 'AI Cloud Security',
      description: 'Comprehensive cloud security with AI-powered monitoring and automated compliance management.',
      icon: '☁️',
      price: '$1,600/month',
      features: [
        'Cloud Security Monitoring',
        'Compliance Management',
        'Configuration Management',
        'Threat Detection',
        'Data Protection',
        'Access Controls'
      ],
      benefits: [
        'Secure all cloud environments',
        'Ensure cloud compliance',
        'Prevent cloud breaches',
        'Automate cloud security'
      ],
      marketPrice: '$3,200-6,500/month',
      category: 'Cloud Security',
      technologies: ['Cloud Security', 'Compliance', 'Configuration Management', 'AI/ML', 'APIs', 'Monitoring']
    },
    {
      title: 'AI Security Analytics',
      description: 'Advanced security analytics with AI-powered insights and predictive security intelligence.',
      icon: '📊',
      price: '$1,200/month',
      features: [
        'Security Analytics',
        'Predictive Intelligence',
        'Threat Hunting',
        'Risk Assessment',
        'Compliance Reporting',
        'Security Dashboards'
      ],
      benefits: [
        'Gain security insights',
        'Predict security threats',
        'Improve security posture',
        'Ensure compliance'
      ],
      marketPrice: '$2,400-4,800/month',
      category: 'Security Analytics',
      technologies: ['Analytics', 'AI/ML', 'Predictive Models', 'Dashboards', 'APIs', 'Reporting']
    },
    {
      title: 'AI Incident Response',
      description: 'Intelligent incident response with automated detection, analysis, and remediation capabilities.',
      icon: '🚨',
      price: '$1,800/month',
      features: [
        'Automated Detection',
        'Incident Analysis',
        'Response Automation',
        'Forensic Investigation',
        'Recovery Planning',
        'Lessons Learned'
      ],
      benefits: [
        'Respond to incidents instantly',
        'Minimize damage and downtime',
        'Automate response processes',
        'Improve security posture'
      ],
      marketPrice: '$3,600-7,200/month',
      category: 'Incident Response',
      technologies: ['Incident Response', 'Automation', 'Forensics', 'AI/ML', 'APIs', 'Recovery']
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Head>
        <title>AI Cybersecurity Services - Zion Tech Group</title>
        <meta name="description" content="Advanced AI-powered cybersecurity solutions with threat detection, fraud prevention, and automated security monitoring. Protect your business with AI security starting at $800/month." />
        <meta name="keywords" content="ai cybersecurity, threat detection, fraud prevention, security monitoring, ai security, cyber protection" />
      </Head>

      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">
            AI Cybersecurity Services
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Protect your business with advanced AI-powered cybersecurity solutions that detect threats, prevent fraud, and ensure compliance automatically.
          </p>
          
          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <div className="text-3xl font-bold text-cyan-400 mb-2">99.9%</div>
              <div className="text-gray-300">Threat Detection</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <div className="text-3xl font-bold text-green-400 mb-2">$800</div>
              <div className="text-gray-300">Starting Price</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <div className="text-3xl font-bold text-purple-400 mb-2">24/7</div>
              <div className="text-gray-300">Monitoring</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <div className="text-3xl font-bold text-orange-400 mb-2">95%</div>
              <div className="text-gray-300">Fraud Prevention</div>
            </div>
          </div>

          {/* Contact Info */}
          <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg p-6 mb-12">
            <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-8">
              <div className="flex items-center space-x-2">
                <Phone className="w-5 h-5" />
                <span className="text-white font-medium">+1 302 464 0950</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-5 h-5" />
                <span className="text-white font-medium">kleber@ziontechgroup.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="w-5 h-5" />
                <span className="text-white font-medium">Middletown, DE</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            Choose Your Security Solution
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {securityServices.map((service, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-6 hover:shadow-2xl transition-all duration-300 hover:scale-105">
                <div className="text-center mb-6">
                  <div className="text-5xl mb-4">{service.icon}</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{service.title}</h3>
                  <p className="text-gray-600 text-sm">{service.description}</p>
                </div>
                
                <div className="mb-6">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-2xl font-bold text-green-600">{service.price}</span>
                    <span className="text-sm text-gray-500">Market: {service.marketPrice}</span>
                  </div>
                  <div className="bg-purple-100 text-purple-800 text-xs px-2 py-1 rounded-full inline-block">
                    {service.category}
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-3">Key Features:</h4>
                  <ul className="space-y-2">
                    {service.features.slice(0, 4).map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                    {service.features.length > 4 && (
                      <li className="text-sm text-gray-500">
                        +{service.features.length - 4} more features
                      </li>
                    )}
                  </ul>
                </div>

                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-3">Benefits:</h4>
                  <ul className="space-y-1">
                    {service.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="text-sm text-gray-600 flex items-center">
                        <TrendingUp className="w-3 h-3 text-blue-500 mr-2 flex-shrink-0" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-3">Technologies:</h4>
                  <div className="flex flex-wrap gap-2">
                    {service.technologies.map((tech, techIndex) => (
                      <span key={techIndex} className="bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="text-center">
                  <a
                    href={`mailto:kleber@ziontechgroup.com?subject=Interest in ${service.title}`}
                    className="w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white py-2 px-4 rounded-lg font-medium hover:from-purple-700 hover:to-blue-700 transition-all inline-block"
                  >
                    Get Started Now
                  </a>
                  <p className="text-xs text-gray-500 mt-2">
                    Contact: kleber@ziontechgroup.com | +1 302 464 0950
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-purple-600 to-blue-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Ready to Secure Your Business?
          </h2>
          <p className="text-xl text-purple-100 mb-8">
            Get started with our AI cybersecurity services today and protect your business from cyber threats.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+13024640950"
              className="bg-white text-purple-600 px-8 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors"
            >
              Call (302) 464-0950
            </a>
            <a
              href="mailto:kleber@ziontechgroup.com"
              className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg font-medium hover:bg-white hover:text-purple-600 transition-colors"
            >
              Email Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AICybersecurityPage;