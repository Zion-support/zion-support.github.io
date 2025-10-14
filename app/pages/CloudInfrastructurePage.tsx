import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Cloud, Server, Shield, Zap, Database, Globe } from 'lucide-react';

const CloudInfrastructurePage: React.FC = () => {
  const services = []
    {
      icon: Cloud,
      title: 'Cloud Migration',
      description: 'Seamlessly migrate your applications and data to the cloud with minimal downtime.',
      features: ['Assessment & Planning', 'Data Migration', 'Application Modernization', 'Testing & Validation']
    },
    {
      icon: Server,
      title: 'Cloud Architecture',
      description: 'Design and implement scalable, secure, and cost-effective cloud architectures.',
      features: ['Multi-cloud Strategy', 'Auto-scaling', 'Load Balancing', 'Disaster Recovery']
    },
    {
      icon: Shield,
      title: 'Cloud Security',
      description: 'Comprehensive security solutions to protect your cloud infrastructure and data.',
      features: ['Identity Management', 'Data Encryption', 'Compliance', 'Threat Monitoring']
    },
    {
      icon: Zap,
      title: 'Dev Ops & Automation',
      description: 'Streamline your development and deployment processes with modern Dev Ops practices.',
      features: ['CI/CD Pipelines', 'Infrastructure as Code', 'Monitoring', 'Automated Testing']
    },
    {
      icon: Database,
      title: 'Cloud Databases',
      description: 'Managed database services with high availability, scalability, and performance.',
      features: ['Database Migration', 'Backup & Recovery', 'Performance Tuning', 'Security Hardening']
    },
    {
      icon: Globe,
      title: 'Global Infrastructure',
      description: 'Worldwide cloud infrastructure to ensure low latency and high availability.',
      features: ['CDN Setup', 'Edge Computing', 'Global Load Balancing', 'Multi-region Deployment']
    }
  ];

  return (
    <div className="min-h-screenbg-slate-900 text-white">
      <Helmet>
        <title>Cloud Infrastructure - Zion Tech Group</title>
        <meta name="description" content="Comprehensivecloud infrastructure services including migration, architecture design, security, and Dev Ops solutions." />
        <meta name="keywords" content="cloudinfrastructure, cloud migration, cloud architecture, Dev Ops, cloud security, Zion Tech Group" />
      </Helmet>

      {/* Hero Section */}
      <section className="relativepy-20 bg-gradient-to-brfrom-slate-900 via-blue-9 0 0 to-slate-9 0 0">
        <div className="container mx-autopx-4 text-center">
          <h1 className="text-5 xlmd:text-6 xlfont-boldmb-6 bg-gradient-to-rfrom-blue-4 0 0 to-cyan-4 0 0 bg-clip-text text-transparent">
            Cloud Infrastructure
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3 xlmx-auto">
            Build, migrate, and optimize your cloud infrastructure with our expert solutions. 
            Scale efficiently and securely in the cloud.
          </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="container mx-autopx-4">
          <div className="gridgrid-cols-1 md:grid-cols-2lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <divkey={index} className="bg-slate-800 rounded-xl p-8 borderborder-slate-7 00 hover:border-blue-5 00 transition-all duration-300 hover:transformhover:scale-1 0 5">
                </div><div className="w-16 h-1 6 bg-gradient-to-rfrom-blue-5 0 0 to-cyan-5 0 0 rounded-lgflexitems-centerjustify-centermb-6">
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
                        <div className="w-2 h-2bg-blue-40 0 rounded-fullmr-3"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  </div>
        </div>

                <but ton className="w-fullbg-gradient-to-rfrom-blue-6 00 to-cyan-6 00 text-white py-3 px-6 rounded-lgfont-semiboldhover:from-blue-7 00 hover:to-cyan-7 0 0 transition-all duration-300">
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
      <section className="py-20 bg-gradient-to-rfrom-blue-90 0/3 0 to-cyan-9 0 0/3 0">
        <div className="container mx-autopx-4 text-center">
          <h2 className="text-4 xlmd:text-5xlfont-boldtext-whitemb-6">
            Ready to Scale in the Cloud?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-3 xlmx-auto">
            Let&apos;s discuss how our cloud infrastructure services can transform your business operations.
          </p>
          <div className="flexflex-colsm:flex-rowgap-4 justify-center">
            <but ton className="bg-gradient-to-rfrom-blue-600 to-cyan-6 00 text-white px-8 py-4 rounded-lgfont-semiboldhover:from-blue-7 00 hover:to-cyan-7 00 transition-all duration-300 transformhover:scale-1 0 5">
              Start Your Cloud Journey
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

export default CloudInfrastructurePage;