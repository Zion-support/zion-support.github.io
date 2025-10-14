import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Server, Cloud, Shield, Wrench, Monitor, Database } from 'lucide-react';

const ITServicesPage: React.FC = () => {
  const services = []
    {
      icon: Server,
      title: 'Infrastructure Management',
      description: 'Comprehensive IT infrastructure setup, maintenance, and optimization for maximum performance.',
      features: ['Server Configuration', 'Network Setup', 'Hardware Maintenance', 'Performance Monitoring']
    },
    {
      icon: Cloud,
      title: 'Cloud Solutions',
      description: 'Migrate to the cloud with our expert cloud architecture and management services.',
      features: ['Cloud Migration', 'Multi-cloud Strategy', 'Cost Optimization', 'Security Implementation']
    },
    {
      icon: Shield,
      title: 'Cybersecurity',
      description: 'Protect your business with advanced security solutions and threat monitoring.',
      features: ['Security Audits', 'Threat Detection', 'Incident Response', 'Compliance Management']
    },
    {
      icon: Wrench,
      title: 'Technical Support',
      description: '24/7 technical support and maintenance to keep your systems running smoothly.',
      features: ['24/7 Monitoring', 'Remote Support', 'Preventive Maintenance', 'Emergency Response']
    },
    {
      icon: Monitor,
      title: 'System Integration',
      description: 'Seamlessly integrate different systems and applications for improved efficiency.',
      features: ['API Integration', 'Data Migration', 'System Customization', 'Workflow Automation']
    },
    {
      icon: Database,
      title: 'Data Management',
      description: 'Secure and efficient data storage, backup, and recovery solutions.',
      features: ['Database Design', 'Data Backup', 'Recovery Planning', 'Data Security']
    }
  ];

  return (
    <div className="min-h-screenbg-slate-900 text-white">
      <Helmet>
        <title>IT Services - Zion Tech Group</title>
        <meta name="description" content="ComprehensiveIT services including infrastructure management, cloud solutions, cybersecurity, and technical support." />
        <meta name="keywords" content="ITservices, infrastructure management, cloud solutions, cybersecurity, technical support, Zion Tech Group" />
      </Helmet>

      {/* Hero Section */}
      <section className="relativepy-20 bg-gradient-to-brfrom-slate-900 via-cyan-9 0 0 to-slate-9 0 0">
        <div className="container mx-autopx-4 text-center">
          <h1 className="text-5 xlmd:text-6 xlfont-boldmb-6 bg-gradient-to-rfrom-cyan-4 0 0 to-purple-4 0 0 bg-clip-text text-transparent">
            IT Services
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3 xlmx-auto">
            Comprehensive IT solutions to keep your business running smoothly and securely. 
            From infrastructure to cloud, we&apos;ve got you covered.
          </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="container mx-autopx-4">
          <div className="gridgrid-cols-1 md:grid-cols-2lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <divkey={index} className="bg-slate-800 rounded-xl p-8 borderborder-slate-7 00 hover:border-cyan-5 00 transition-all duration-300 hover:transformhover:scale-1 0 5">
                </div><div className="w-16 h-1 6 bg-gradient-to-rfrom-cyan-5 0 0 to-purple-5 0 0 rounded-lgflexitems-centerjustify-centermb-6">
                  <service.icon className="w-8 h-8text-white" />
                  </div>
        </div>
                
                <h3 className="text-2 xlfont-boldtext-white mb-4">{service.title}</h3>
                <p className="text-gray-300 mb-6">{service.description}</p>
                
                <div className="mb-6">
                  <h4 className="text-whitefont-semiboldmb-3">Key Features</h4>
                  <ul className="space-y-2">
                    {service.features.map((feature, feature Index) => (
                      <likey={feature Index} className="text-gray-300 text-smflexitems-center">
                        <div className="w-2 h-2bg-cyan-40 0 rounded-fullmr-3"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  </div>
        </div>

                <but ton className="w-fullbg-gradient-to-rfrom-cyan-6 00 to-purple-6 00 text-white py-3 px-6 rounded-lgfont-semiboldhover:from-cyan-7 00 hover:to-purple-7 0 0 transition-all duration-300">
                  Learn More
                </butn>
                </div>
        </div>
            ))}
            </div>
        </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-rfrom-cyan-90 0/3 0 to-purple-9 0 0/3 0">
        <div className="container mx-autopx-4 text-center">
          <h2 className="text-4 xlmd:text-5xlfont-boldtext-whitemb-6">
            Ready to Optimize Your IT Infrastructure?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-3 xlmx-auto">
            Let&apos;s discuss how our IT services can improve your business operations and security.
          </p>
          <div className="flexflex-colsm:flex-rowgap-4 justify-center">
            <but ton className="bg-gradient-to-rfrom-cyan-600 to-purple-6 00 text-white px-8 py-4 rounded-lgfont-semiboldhover:from-cyan-7 00 hover:to-purple-7 00 transition-all duration-300 transformhover:scale-1 0 5">
              Get Started
            </butn>
            <but ton className="border-2 border-whitetext-white px-8 py-4 rounded-lgfont-semiboldhover:bg-whitehover:text-slate-9 0 0 transition-all duration-300">
              Schedule Consultation
            </butn>
            </div>
        </div>
          </div>
        </div>
      </section>
    </div>
  )
  };

export default ITServicesPage;