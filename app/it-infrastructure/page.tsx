import React from 'react';
import { CheckCircle, Zap, Cloud, Shield, Users, Database } from 'lucide-react';

const ITInfrastructurePage: React.FC = () => {
  const infrastructureServices = [
    {
      name: 'Cloud Infrastructure Setup',
      price: '$8,000/month',
      description: 'Complete cloud infrastructure design, deployment, and management',
      features: [
        'Cloud architecture design',
        'Multi-cloud deployment',
        'Auto-scaling configuration',
        'Cost optimization'
      ],
      icon: Cloud,
      benefits: [
        '40% cost reduction',
        'Improved scalability',
        'Enhanced security',
        'Better performance'
      ]
    },
    {
      name: 'Network Infrastructure',
      price: '$5,500/month',
      description: 'Enterprise-grade network infrastructure design and implementation',
      features: [
        'Network design and planning',
        'Security implementation',
        'Performance optimization',
        'Monitoring and management'
      ],
      icon: Shield,
      benefits: [
        '99.9% network uptime',
        'Enhanced security',
        'Improved performance',
        'Reduced maintenance costs'
      ]
    },
    {
      name: 'Data Center Solutions',
      price: '$12,000/month',
      description: 'Comprehensive data center infrastructure and management',
      features: [
        'Data center design',
        'Server infrastructure',
        'Storage solutions',
        'Backup and disaster recovery'
      ],
      icon: Database,
      benefits: [
        'High availability',
        'Data protection',
        'Scalable infrastructure',
        'Cost optimization'
      ]
    },
    {
      name: 'Infrastructure Monitoring',
      price: '$3,500/month',
      description: '24/7 infrastructure monitoring and management services',
      features: [
        'Real-time monitoring',
        'Performance analytics',
        'Alert management',
        'Proactive maintenance'
      ],
      icon: Users,
      benefits: [
        'Preventive maintenance',
        'Reduced downtime',
        'Improved performance',
        'Cost savings'
      ]
    }
  ];

  const technologies = [
    {
      title: 'Cloud Platforms',
      description: 'AWS, Azure, Google Cloud, and hybrid cloud solutions',
      benefits: ['Scalability', 'Cost efficiency', 'Global reach', 'Security']
    },
    {
      title: 'Virtualization',
      description: 'VMware, Hyper-V, and containerization technologies',
      benefits: ['Resource optimization', 'Flexibility', 'Cost reduction', 'Easier management']
    },
    {
      title: 'Storage Solutions',
      description: 'SAN, NAS, and cloud storage technologies',
      benefits: ['High performance', 'Data protection', 'Scalability', 'Cost optimization']
    },
    {
      title: 'Security Infrastructure',
      description: 'Firewalls, intrusion detection, and security monitoring',
      benefits: ['Enhanced security', 'Threat prevention', 'Compliance', 'Risk mitigation']
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-24">
      <div className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            IT Infrastructure Solutions
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Build robust, scalable, and secure IT infrastructure that supports your business growth. 
            From cloud migration to data center solutions, we provide comprehensive infrastructure services.
          </p>
          
          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <div className="text-3xl font-bold text-cyan-400 mb-2">200+</div>
              <div className="text-gray-300">Infrastructure Projects</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <div className="text-3xl font-bold text-green-400 mb-2">99.9%</div>
              <div className="text-gray-300">Uptime SLA</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <div className="text-3xl font-bold text-purple-400 mb-2">40%</div>
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
            Infrastructure Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {infrastructureServices.map((service, index) => (
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
            Technology Solutions
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
              <p className="text-gray-300">Analyze current infrastructure and identify improvement opportunities</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-400 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-slate-900">2</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Design</h3>
              <p className="text-gray-300">Create optimal infrastructure architecture and implementation plan</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-green-400 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-slate-900">3</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Implementation</h3>
              <p className="text-gray-300">Deploy and configure infrastructure with minimal downtime</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-400 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-slate-900">4</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Management</h3>
              <p className="text-gray-300">Ongoing monitoring, maintenance, and optimization</p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg p-8 text-center">
          <h2 className="text-2xl font-bold text-white mb-4">
            Ready to Build Your Infrastructure?
          </h2>
          <p className="text-purple-100 mb-6">
            Get robust, scalable infrastructure that supports your business growth and success.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="bg-white text-purple-600 px-8 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors"
            >
              Get Infrastructure Consultation
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

export default ITInfrastructurePage;