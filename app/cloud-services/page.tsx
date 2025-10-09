import React from 'react';
import { CheckCircle, Cloud, Zap, Shield, Users, Database } from 'lucide-react';

const CloudServicesPage: React.FC = () => {
  const cloudServices = [
    {
      name: 'Cloud Migration',
      price: '$8,000/month',
      description: 'Seamless migration to cloud platforms with minimal downtime',
      features: [
        'Migration planning',
        'Data migration',
        'Application migration',
        'Testing and validation'
      ],
      icon: Cloud,
      benefits: [
        'Zero downtime migration',
        'Cost optimization',
        'Improved scalability',
        'Enhanced security'
      ]
    },
    {
      name: 'Cloud Infrastructure',
      price: '$6,500/month',
      description: 'Complete cloud infrastructure setup and management',
      features: [
        'Infrastructure design',
        'Auto-scaling setup',
        'Load balancing',
        'Monitoring and alerts'
      ],
      icon: Database,
      benefits: [
        'High availability',
        'Cost efficiency',
        'Scalability',
        'Managed services'
      ]
    },
    {
      name: 'Cloud Security',
      price: '$5,000/month',
      description: 'Comprehensive cloud security and compliance solutions',
      features: [
        'Security assessment',
        'Identity management',
        'Data encryption',
        'Compliance monitoring'
      ],
      icon: Shield,
      benefits: [
        'Enhanced security',
        'Compliance assurance',
        'Risk mitigation',
        '24/7 monitoring'
      ]
    },
    {
      name: 'Cloud Optimization',
      price: '$4,500/month',
      description: 'Cloud cost optimization and performance tuning',
      features: [
        'Cost analysis',
        'Resource optimization',
        'Performance tuning',
        'Automated scaling'
      ],
      icon: Zap,
      benefits: [
        '30% cost reduction',
        'Improved performance',
        'Better resource utilization',
        'Automated optimization'
      ]
    }
  ];

  const platforms = [
    {
      title: 'AWS Solutions',
      description: 'Amazon Web Services cloud solutions and services',
      benefits: ['Global reach', 'Scalability', 'Cost efficiency', 'Comprehensive services']
    },
    {
      title: 'Azure Solutions',
      description: 'Microsoft Azure cloud platform and services',
      benefits: ['Enterprise integration', 'Hybrid cloud', 'Security', 'Compliance']
    },
    {
      title: 'Google Cloud',
      description: 'Google Cloud Platform and services',
      benefits: ['Data analytics', 'AI/ML services', 'Global network', 'Innovation']
    },
    {
      title: 'Multi-Cloud',
      description: 'Multi-cloud strategy and management',
      benefits: ['Vendor independence', 'Risk mitigation', 'Best of breed', 'Flexibility']
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-24">
      <div className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Cloud Services
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Transform your business with our comprehensive cloud services. From migration to optimization, 
            we help you leverage the power of cloud computing for better performance and cost efficiency.
          </p>
          
          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <div className="text-3xl font-bold text-cyan-400 mb-2">300+</div>
              <div className="text-gray-300">Cloud Projects</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <div className="text-3xl font-bold text-green-400 mb-2">30%</div>
              <div className="text-gray-300">Cost Reduction</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <div className="text-3xl font-bold text-purple-400 mb-2">99.9%</div>
              <div className="text-gray-300">Uptime SLA</div>
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
            Cloud Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {cloudServices.map((service, index) => (
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

        {/* Platforms Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            Cloud Platforms
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {platforms.map((platform, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-6 hover:shadow-2xl transition-all duration-300 hover:scale-105">
                <h3 className="text-xl font-bold text-gray-900 mb-3">{platform.title}</h3>
                <p className="text-gray-600 mb-4">{platform.description}</p>
                <ul className="space-y-2">
                  {platform.benefits.map((benefit, benefitIndex) => (
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
            Our Cloud Process
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-cyan-400 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-slate-900">1</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Assessment</h3>
              <p className="text-gray-300">Analyze current infrastructure and cloud readiness</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-400 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-slate-900">2</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Strategy</h3>
              <p className="text-gray-300">Develop cloud strategy and migration plan</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-green-400 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-slate-900">3</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Migration</h3>
              <p className="text-gray-300">Execute migration with minimal downtime</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-400 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-slate-900">4</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Optimization</h3>
              <p className="text-gray-300">Optimize performance and costs</p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg p-8 text-center">
          <h2 className="text-2xl font-bold text-white mb-4">
            Ready to Move to the Cloud?
          </h2>
          <p className="text-purple-100 mb-6">
            Get comprehensive cloud services that improve performance and reduce costs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="bg-white text-purple-600 px-8 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors"
            >
              Get Cloud Consultation
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

export default CloudServicesPage;