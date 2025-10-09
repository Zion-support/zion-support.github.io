import React from 'react';
import { CheckCircle, Zap, Cloud, Shield, Users, Database } from 'lucide-react';

const ITServicesPage: React.FC = () => {
  const itServices = [
    {
      name: 'IT Infrastructure Management',
      price: '$5,000/month',
      description: 'Comprehensive IT infrastructure management and optimization',
      features: [
        'Server management and monitoring',
        'Network infrastructure setup',
        'Storage and backup solutions',
        'Performance optimization'
      ],
      icon: Cloud,
      benefits: [
        '99.9% uptime guarantee',
        '50% reduction in downtime',
        'Improved performance',
        'Cost optimization'
      ]
    },
    {
      name: 'Cybersecurity Solutions',
      price: '$4,500/month',
      description: 'Advanced cybersecurity protection and threat management',
      features: [
        'Threat detection and prevention',
        'Security monitoring',
        'Incident response',
        'Compliance management'
      ],
      icon: Shield,
      benefits: [
        '99.9% threat detection',
        'Reduced security risks',
        'Compliance assurance',
        '24/7 monitoring'
      ]
    },
    {
      name: 'Cloud Migration & Management',
      price: '$6,000/month',
      description: 'Seamless cloud migration and ongoing cloud management',
      features: [
        'Cloud strategy planning',
        'Migration execution',
        'Cloud optimization',
        'Multi-cloud management'
      ],
      icon: Database,
      benefits: [
        '40% cost reduction',
        'Improved scalability',
        'Enhanced security',
        'Better performance'
      ]
    },
    {
      name: 'IT Support & Helpdesk',
      price: '$3,000/month',
      description: '24/7 IT support and helpdesk services',
      features: [
        '24/7 technical support',
        'Remote assistance',
        'Issue tracking and resolution',
        'User training and guidance'
      ],
      icon: Users,
      benefits: [
        'Faster issue resolution',
        'Reduced downtime',
        'Improved user satisfaction',
        'Proactive support'
      ]
    }
  ];

  const industries = [
    {
      title: 'Healthcare',
      description: 'HIPAA-compliant IT solutions for healthcare organizations',
      benefits: ['HIPAA compliance', 'Patient data security', 'System reliability', 'Regulatory adherence']
    },
    {
      title: 'Financial Services',
      description: 'Secure IT infrastructure for banks and financial institutions',
      benefits: ['Enhanced security', 'Regulatory compliance', 'Data protection', 'Audit readiness']
    },
    {
      title: 'Manufacturing',
      description: 'Industrial IT solutions for manufacturing operations',
      benefits: ['Operational efficiency', 'Quality control', 'Supply chain optimization', 'Cost reduction']
    },
    {
      title: 'Education',
      description: 'IT solutions for schools and educational institutions',
      benefits: ['Student data protection', 'Learning management', 'Resource optimization', 'Accessibility']
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-24">
      <div className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            IT Services
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Comprehensive IT services to keep your business running smoothly. From infrastructure 
            management to cybersecurity, we provide end-to-end IT solutions for modern businesses.
          </p>
          
          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <div className="text-3xl font-bold text-cyan-400 mb-2">500+</div>
              <div className="text-gray-300">IT Projects</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <div className="text-3xl font-bold text-green-400 mb-2">99.9%</div>
              <div className="text-gray-300">Uptime SLA</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <div className="text-3xl font-bold text-purple-400 mb-2">24/7</div>
              <div className="text-gray-300">Support</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <div className="text-3xl font-bold text-orange-400 mb-2">50+</div>
              <div className="text-gray-300">Certifications</div>
            </div>
          </div>
        </div>

        {/* Services Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            IT Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {itServices.map((service, index) => (
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

        {/* Industries Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            Industry Solutions
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {industries.map((industry, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-6 hover:shadow-2xl transition-all duration-300 hover:scale-105">
                <h3 className="text-xl font-bold text-gray-900 mb-3">{industry.title}</h3>
                <p className="text-gray-600 mb-4">{industry.description}</p>
                <ul className="space-y-2">
                  {industry.benefits.map((benefit, benefitIndex) => (
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
            Technology Stack
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-400 rounded-full flex items-center justify-center mx-auto mb-4">
                <Cloud className="w-8 h-8 text-slate-900" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Cloud Platforms</h3>
              <p className="text-gray-300">AWS, Azure, Google Cloud, and hybrid solutions</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-cyan-400 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-slate-900" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Security Tools</h3>
              <p className="text-gray-300">Advanced security tools and monitoring systems</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-green-400 rounded-full flex items-center justify-center mx-auto mb-4">
                <Database className="w-8 h-8 text-slate-900" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Database Systems</h3>
              <p className="text-gray-300">SQL, NoSQL, and cloud database solutions</p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg p-8 text-center">
          <h2 className="text-2xl font-bold text-white mb-4">
            Ready to Optimize Your IT?
          </h2>
          <p className="text-purple-100 mb-6">
            Get comprehensive IT services that keep your business running smoothly and securely.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="bg-white text-purple-600 px-8 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors"
            >
              Get IT Consultation
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

export default ITServicesPage;