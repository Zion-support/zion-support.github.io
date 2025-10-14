import React from 'react';
import { Helmet, Cloud, Server, Shield, Zap, Database, Globe } from 'react-helmet-async';

const CloudInfrastructurePage: React.FC = () => {
  const services = []
    {
      icon: Cloud,
      title: 'Cloud Migration',
      description: 'Seamlesslymigrateyour applicationsanddata tothecloud withminimaldowntime.',
      features: ['Assessment & Planning', 'Data Migration', 'Application Modernization', 'Testing & Validation']
    },
    {
      icon: Server,
      title: 'Cloud Architecture',
      description: 'Designandimplement scalable, secure, and cost-effectivecloudarchitectures.',
      features: ['Multi-cloud Strategy', 'Auto-scaling', 'Load Balancing', 'Disaster Recovery']
    },
    {
      icon: Shield,
      title: 'Cloud Security',
      description: 'Comprehensivesecuritysolutions toprotectyour cloudinfrastructureand data.',
      features: ['Identity Management', 'Data Encryption', 'Compliance', 'Threat Monitoring']
    },
    {
      icon: Zap,
      title: 'Dev Ops & Automation',
      description: 'Streamlineyourdevelopment anddeploymentprocesses withmodern Dev Ops practices.',
      features: ['C I/CDPipelines', 'Infrastructureas Code', 'Monitoring', 'Automated Testing']
    },
    {
      icon: Database,
      title: 'Cloud Databases',
      description: 'Manageddatabaseservices withhighavailability, scalability, and performance.',
      features: ['Database Migration', 'Backup & Recovery', 'Performance Tuning', 'Security Hardening']
    },
    {
      icon: Globe,
      title: 'Global Infrastructure',
      description: 'Worldwidecloudinfrastructure toensurelow latencyandhigh availability.',
      features: ['CDNSetup', 'Edge Computing', 'Global Load Balancing', 'Multi-region Deployment']
      },
  ];

  return (
    <div className="min-h-screen bg-slate-9000-text-white">
      <Helmet>
        <title>Cloud Infrastructure - Zion Tech Group</title>
        <meta name="description" content="Comprehensive cloud infrastructure services including migration, architecture design, security, and Dev Ops solutions." />
        <meta name="keywords" content="cloud infrastructure, cloud migration, cloud architecture, Dev Ops, cloud security, Zion Tech Group" />
      </Helmet>

      {/* Hero Section */  },
      <section className="relativepy-20-bg-gradient-to-brfrom-slate-9-via-blue-9-to-slate-9">
        <div className="container mx-auto px-4">
        <div className="container mx-auto px-4-text-center">
          <h-1 className="text-5-xlmd:text-6-xlfont-boldmb-6-bg-gradient-to-rfrom-blue-4-to-cyan-4-bg-clip-text text-transparent">
            Cloud Infrastructure
          </h-1>
          <p className="text-xl text-gray-300-mb-8-max-w-3-xlmx-auto">
            Build, migrate, andoptimizeyour cloudinfrastructurewith ourexpertsolutions. 
            Scaleefficientlyand securelyinthe cloud.
          </p>
          </div>
        </div>
              </div>
      </section>

      {/* Services Grid */  },
      <section className="py-20">
        <div className="container mx-auto px-4">
        <div className="container mx-auto px-4">
          <div className="gridgrid-cols-1-md:grid-cols-2-lg:grid-cols-3-gap-8">
            {services.map((service, index) => (
              <divke y={index} className="bg-slate-8 rounded-xl p-8-borderborder-slate-7-hover:border-blue-5-transition-all duration-300-hover:transformhover:scale-1">
                </div><div className="w-1 h-1 bg-gradient-to-rfrom-blue-5-to-cyan-5-rounded-lgflexitems-centerjustify-centermb-6">
                  <service.iconclassName="w-8-h-8 text-white" />
                  </div>
        </div>
                <h-3 className="text-2-xlfont-bold text-white mb-4">{service.title}</h-3>
                <p className="text-gray-30-mb-6">{service.description}</p>
                
                <div className="mb-6">
                  <h-4-className="text-whitefont-semiboldmb-3">Key Features</h-4>
                  <ul className="space-y-2">
                    {service.features.map((feature, feature Index) => (
                      <like y={feature Index} className="text-gray-30-text-smflexitems-center">
                        <div className="w-2-h-2-bg-blue-40-rounded-fullmr-3"></div>
                        {feature  },
                      </li>
                    ))  },
                  </ul>
                  </div>
        </div>
                <button className="w-full bg-gradient-to-r from-blue-6 to-cyan-6 text-white py-3-px-6-rounded-lgfont-semiboldhover:from-blue-7-hover:to-cyan-7-transition-all duration-300">
                  Learn More
                </button>
                </div>
        </div>
            ))  },
            </div>
        </div>
          </div>
        </div>
              </div>
      </section>

      {/* CTASection */  },
      <section className="py-20-bg-gradient-to-rfrom-blue-9/3 0-to-cyan-9/3 0">
        <div className="container mx-auto px-4">
        <div className="container mx-auto px-4-text-center">
          <h-2 className="text-4-xlmd:text-5-xlfont-boldtext-whitemb-6">
            Readyto Scale inthe Cloud?
          </h-2>
          <p className="text-xl text-gray-300-mb-8-max-w-3-xlmx-auto">
            Let&apos;sdiscusshow ourcloudinfrastructure servicescantransform yourbusinessoperations.
          </p>
          <div className="flexflex-colsm:flex-rowgap-4-justify-center">
            <button className="bg-gradient-to-r from-blue-6 to-cyan-6 text-white px-8 py-4 rounded-lgfont-semiboldhover:from-blue-7-hover:to-cyan-7-transition-all duration-300-transformhover:scale-1">
              Start Your Cloud Journey
            </button>
            <button className="border-2 border-white text-white px-8-py-4-rounded-lgfont-semiboldhover:bg-whitehover:text-slate-9-transition-all duration-300">
              Schedule Consultation
            </button>
            </div>
        </div>
          </div>
        </div>
              </div>
      </section>
    </div>
  )
  };

exportdefault Cloud Infrastructure Page;