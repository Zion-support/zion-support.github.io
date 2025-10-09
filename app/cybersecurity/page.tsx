import React from 'react';
import { CheckCircle, Shield, Lock, Users, Database, Zap } from 'lucide-react';

const CybersecurityPage: React.FC = () => {
  const securityServices = [
    {
      name: 'Security Assessment',
      price: '$5,000/month',
      description: 'Comprehensive security assessment and vulnerability analysis',
      features: [
        'Penetration testing',
        'Vulnerability scanning',
        'Security audit',
        'Risk assessment'
      ],
      icon: Shield,
      benefits: [
        'Identify security gaps',
        'Reduce risk exposure',
        'Compliance assurance',
        'Improved security posture'
      ]
    },
    {
      name: 'Managed Security Services',
      price: '$8,000/month',
      description: '24/7 security monitoring and incident response',
      features: [
        'Security monitoring',
        'Incident response',
        'Threat detection',
        'Security updates'
      ],
      icon: Lock,
      benefits: [
        '24/7 protection',
        'Faster incident response',
        'Reduced security risks',
        'Expert security team'
      ]
    },
    {
      name: 'Identity & Access Management',
      price: '$4,500/month',
      description: 'Secure identity management and access control solutions',
      features: [
        'Multi-factor authentication',
        'Single sign-on',
        'Access control',
        'Identity governance'
      ],
      icon: Users,
      benefits: [
        'Enhanced security',
        'Improved user experience',
        'Compliance support',
        'Reduced administrative overhead'
      ]
    },
    {
      name: 'Data Protection & Encryption',
      price: '$6,000/month',
      description: 'Comprehensive data protection and encryption services',
      features: [
        'Data encryption',
        'Backup and recovery',
        'Data loss prevention',
        'Compliance management'
      ],
      icon: Database,
      benefits: [
        'Data security',
        'Regulatory compliance',
        'Business continuity',
        'Risk mitigation'
      ]
    }
  ];

  const threats = [
    {
      title: 'Ransomware Protection',
      description: 'Advanced protection against ransomware attacks and data encryption',
      benefits: ['Real-time detection', 'Automated response', 'Data recovery', 'Prevention strategies']
    },
    {
      title: 'Phishing Prevention',
      description: 'Email security and phishing attack prevention',
      benefits: ['Email filtering', 'User training', 'Threat detection', 'Incident response']
    },
    {
      title: 'Network Security',
      description: 'Network infrastructure protection and monitoring',
      benefits: ['Firewall management', 'Intrusion detection', 'Traffic monitoring', 'Access control']
    },
    {
      title: 'Cloud Security',
      description: 'Cloud infrastructure and data protection',
      benefits: ['Cloud monitoring', 'Data encryption', 'Access control', 'Compliance management']
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-24">
      <div className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Cybersecurity Solutions
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Protect your business from evolving cyber threats with our comprehensive cybersecurity solutions. 
            From threat detection to incident response, we provide end-to-end security services.
          </p>
          
          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <div className="text-3xl font-bold text-cyan-400 mb-2">99.9%</div>
              <div className="text-gray-300">Threat Detection</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <div className="text-3xl font-bold text-green-400 mb-2">24/7</div>
              <div className="text-gray-300">Monitoring</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <div className="text-3xl font-bold text-purple-400 mb-2">5min</div>
              <div className="text-gray-300">Response Time</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <div className="text-3xl font-bold text-orange-400 mb-2">SOC 2</div>
              <div className="text-gray-300">Certified</div>
            </div>
          </div>
        </div>

        {/* Services Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            Cybersecurity Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {securityServices.map((service, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-8 hover:bg-white/20 transition-all duration-300">
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 bg-cyan-400/20 rounded-lg flex items-center justify-center mr-4">
                    <service.icon className="w-8 h-8 text-cyan-400" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white">{service.name}</h3>
                    <div className="text-2xl font-bold text-green-400">{service.price}</div>
                  </div>
                </div>
                
                <p className="text-gray-300 mb-6">{service.description}</p>
                
                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-cyan-400 mb-3">Features:</h4>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-gray-300">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-cyan-400 mb-3">Benefits:</h4>
                  <ul className="space-y-2">
                    {service.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="flex items-center text-sm text-gray-300">
                        <Zap className="w-4 h-4 text-yellow-400 mr-2 flex-shrink-0" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>

                <button className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white py-3 px-6 rounded-lg font-medium hover:from-cyan-600 hover:to-blue-700 transition-all">
                  Learn More
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Threats Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            Threat Protection
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {threats.map((threat, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-6 hover:shadow-2xl transition-all duration-300 hover:scale-105">
                <h3 className="text-xl font-bold text-gray-900 mb-3">{threat.title}</h3>
                <p className="text-gray-600 mb-4">{threat.description}</p>
                <ul className="space-y-2">
                  {threat.benefits.map((benefit, benefitIndex) => (
                    <li key={benefitIndex} className="flex items-center text-sm text-gray-600">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Technology Stack */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            Security Technology
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-400 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-slate-900" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Threat Detection</h3>
              <p className="text-gray-300">Advanced threat detection and prevention systems</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-cyan-400 rounded-full flex items-center justify-center mx-auto mb-4">
                <Lock className="w-8 h-8 text-slate-900" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Encryption</h3>
              <p className="text-gray-300">End-to-end encryption and data protection</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-green-400 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-slate-900" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Access Control</h3>
              <p className="text-gray-300">Identity and access management solutions</p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg p-8 text-center">
          <h2 className="text-2xl font-bold text-white mb-4">
            Ready to Secure Your Business?
          </h2>
          <p className="text-purple-100 mb-6">
            Get comprehensive cybersecurity protection that keeps your business safe from evolving threats.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="bg-white text-purple-600 px-8 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors"
            >
              Get Security Consultation
            </a>
            <a
              href="/demo"
              className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg font-medium hover:bg-white hover:text-purple-600 transition-colors"
            >
              Schedule Demo
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CybersecurityPage;