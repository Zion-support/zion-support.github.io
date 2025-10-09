import React from 'react';
import { CheckCircle, Zap, Cloud, Shield, Users, Database } from 'lucide-react';

const ManagedITPage: React.FC = () => {
  const managedServices = [
    {
      name: 'IT Infrastructure Management',
      price: '$8,000/month',
      description: 'Complete IT infrastructure management and support',
      features: [
        'Server management',
        'Network monitoring',
        'Backup and recovery',
        'Performance optimization'
      ],
      icon: Cloud,
      benefits: [
        '99.9% uptime guarantee',
        'Reduced IT costs',
        'Improved performance',
        'Expert support'
      ]
    },
    {
      name: 'Help Desk Support',
      price: '$3,500/month',
      description: '24/7 help desk and technical support services',
      features: [
        '24/7 support',
        'Remote assistance',
        'Issue tracking',
        'User training'
      ],
      icon: Users,
      benefits: [
        'Faster issue resolution',
        'Reduced downtime',
        'Improved productivity',
        'User satisfaction'
      ]
    },
    {
      name: 'Security Management',
      price: '$5,500/month',
      description: 'Comprehensive security management and monitoring',
      features: [
        'Security monitoring',
        'Threat detection',
        'Incident response',
        'Compliance management'
      ],
      icon: Shield,
      benefits: [
        'Enhanced security',
        'Threat prevention',
        'Compliance assurance',
        'Risk mitigation'
      ]
    },
    {
      name: 'Cloud Management',
      price: '$6,500/month',
      description: 'Cloud infrastructure and application management',
      features: [
        'Cloud monitoring',
        'Cost optimization',
        'Security management',
        'Performance tuning'
      ],
      icon: Database,
      benefits: [
        'Cost optimization',
        'Improved performance',
        'Enhanced security',
        'Scalability'
      ]
    }
  ];

  const benefits = [
    {
      title: 'Cost Reduction',
      description: 'Reduce IT costs by up to 40% with managed services',
      icon: Zap
    },
    {
      title: 'Expert Support',
      description: 'Access to certified IT professionals and specialists',
      icon: Users
    },
    {
      title: 'Proactive Maintenance',
      description: 'Prevent issues before they impact your business',
      icon: Shield
    },
    {
      title: 'Scalability',
      description: 'Scale your IT infrastructure as your business grows',
      icon: Cloud
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-24">
      <div className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Managed IT Services
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Focus on your business while we manage your IT infrastructure. Our comprehensive managed IT services 
            provide 24/7 support, monitoring, and maintenance for your technology needs.
          </p>
          
          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <div className="text-3xl font-bold text-cyan-400 mb-2">500+</div>
              <div className="text-gray-300">Clients Served</div>
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
              <div className="text-gray-300">Support</div>
            </div>
          </div>
        </div>

        {/* Services Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            Managed IT Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {managedServices.map((service, index) => (
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

        {/* Benefits Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            Why Choose Managed IT?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-cyan-400 rounded-full flex items-center justify-center mx-auto mb-4">
                  <benefit.icon className="w-8 h-8 text-slate-900" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{benefit.title}</h3>
                <p className="text-gray-300">{benefit.description}</p>
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
              <p className="text-gray-300">Analyze your current IT infrastructure and needs</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-400 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-slate-900">2</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Planning</h3>
              <p className="text-gray-300">Develop customized IT management strategy</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-green-400 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-slate-900">3</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Implementation</h3>
              <p className="text-gray-300">Deploy monitoring and management tools</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-400 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-slate-900">4</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Management</h3>
              <p className="text-gray-300">Ongoing monitoring, maintenance, and support</p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg p-8 text-center">
          <h2 className="text-2xl font-bold text-white mb-4">
            Ready to Simplify Your IT?
          </h2>
          <p className="text-purple-100 mb-6">
            Get comprehensive managed IT services that keep your business running smoothly.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="bg-white text-purple-600 px-8 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors"
            >
              Get Managed IT Consultation
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

export default ManagedITPage;