import React from 'react';
import { CheckCircle, Zap, Cloud, Shield, Users, Database } from 'lucide-react';

const NetworkingPage: React.FC = () => {
  const networkingServices = [
    {
      name: 'Network Design & Implementation',
      price: '$7,000/month',
      description: 'Complete network infrastructure design and implementation',
      features: [
        'Network architecture design',
        'Hardware selection',
        'Configuration and setup',
        'Testing and validation'
      ],
      icon: Cloud,
      benefits: [
        'Optimized performance',
        'Scalable architecture',
        'Reduced downtime',
        'Cost efficiency'
      ]
    },
    {
      name: 'Network Security',
      price: '$5,500/month',
      description: 'Comprehensive network security solutions and monitoring',
      features: [
        'Firewall configuration',
        'Intrusion detection',
        'VPN setup',
        'Security monitoring'
      ],
      icon: Shield,
      benefits: [
        'Enhanced security',
        'Threat prevention',
        'Compliance assurance',
        '24/7 monitoring'
      ]
    },
    {
      name: 'Network Monitoring',
      price: '$4,000/month',
      description: '24/7 network monitoring and management services',
      features: [
        'Real-time monitoring',
        'Performance analytics',
        'Alert management',
        'Proactive maintenance'
      ],
      icon: Database,
      benefits: [
        'Preventive maintenance',
        'Reduced downtime',
        'Improved performance',
        'Cost savings'
      ]
    },
    {
      name: 'Wireless Solutions',
      price: '$3,500/month',
      description: 'Enterprise wireless network design and management',
      features: [
        'Wi-Fi design',
        'Access point deployment',
        'Security configuration',
        'Performance optimization'
      ],
      icon: Zap,
      benefits: [
        'Seamless connectivity',
        'Enhanced security',
        'Better performance',
        'Easy management'
      ]
    }
  ];

  const technologies = [
    {
      title: 'Cisco Solutions',
      description: 'Cisco networking equipment and solutions',
      benefits: ['Enterprise grade', 'Reliability', 'Security', 'Scalability']
    },
    {
      title: 'Juniper Networks',
      description: 'Juniper networking and security solutions',
      benefits: ['High performance', 'Security', 'Automation', 'Cloud integration']
    },
    {
      title: 'Fortinet Security',
      description: 'Fortinet security and networking solutions',
      benefits: ['Integrated security', 'Threat protection', 'Performance', 'Cost efficiency']
    },
    {
      title: 'SD-WAN Solutions',
      description: 'Software-defined wide area networking',
      benefits: ['Flexibility', 'Cost reduction', 'Performance', 'Cloud integration']
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-24">
      <div className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Networking Solutions
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Build robust, secure, and scalable network infrastructure with our comprehensive networking solutions. 
            From design to management, we provide end-to-end networking services.
          </p>
          
          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <div className="text-3xl font-bold text-cyan-400 mb-2">200+</div>
              <div className="text-gray-300">Networks Deployed</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <div className="text-3xl font-bold text-green-400 mb-2">99.9%</div>
              <div className="text-gray-300">Uptime SLA</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <div className="text-3xl font-bold text-purple-400 mb-2">50%</div>
              <div className="text-gray-300">Cost Reduction</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <div className="text-3xl font-bold text-orange-400 mb-2">24/7</div>
              <div className="text-gray-300">Monitoring</div>
            </div>
          </div>
        </div>

        {/* Services Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            Networking Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {networkingServices.map((service, index) => (
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

        {/* Technologies Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            Technology Partners
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {technologies.map((tech, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-6 hover:shadow-2xl transition-all duration-300 hover:scale-105">
                <h3 className="text-xl font-bold text-gray-900 mb-3">{tech.title}</h3>
                <p className="text-gray-600 mb-4">{tech.description}</p>
                <ul className="space-y-2">
                  {tech.benefits.map((benefit, benefitIndex) => (
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

        {/* Process Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            Our Process
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-cyan-400 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-slate-900">1</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Assessment</h3>
              <p className="text-gray-300">Analyze current network infrastructure and requirements</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-400 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-slate-900">2</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Design</h3>
              <p className="text-gray-300">Create optimal network architecture and design</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-green-400 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-slate-900">3</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Implementation</h3>
              <p className="text-gray-300">Deploy and configure network infrastructure</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-400 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-slate-900">4</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Management</h3>
              <p className="text-gray-300">Monitor, maintain, and optimize network performance</p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg p-8 text-center">
          <h2 className="text-2xl font-bold text-white mb-4">
            Ready to Build Your Network?
          </h2>
          <p className="text-purple-100 mb-6">
            Get robust, secure networking solutions that support your business growth.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="bg-white text-purple-600 px-8 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors"
            >
              Get Networking Consultation
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

export default NetworkingPage;