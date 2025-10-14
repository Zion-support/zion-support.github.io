import React from 'react'
import { Helmet } from 'react-helmet-async'
import { Cloud, Server, Shield, Zap, Database, Globe } from 'lucide-react'
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
      title: 'DevOps & Automation',
      description: 'Streamline your development and deployment processes with modern DevOps practices.',
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
  ]
  return (
    <div className="min-h-screenbg-slate-900text-white">
      <Helmet>
        <title>Cloud Infrastructure - Zion Tech Group</title>
        <meta name="description" content="Comprehensive cloud infrastructure services including migration, architecture design, security, and DevOps solutions." />
        <meta name="keywords" content="cloud infrastructure, cloud migration, cloud architecture, DevOps, cloud security, Zion Tech Group" />
      </Helmet>

      {/* Hero Section */}
      <section className="relativepy-20bg-gradient-to-brfrom-slate-900via-blue-900to-slate-900">
        <div className="containermx-autopx-4text-center">
          <h1 className="text-5xlmd:text-6xlfont-boldmb-6bg-gradient-to-rfrom-blue-400to-cyan-400bg-clip-texttext-transparent">
            Cloud Infrastructure
          </h1>
          <p className="text-xl text-gray-300 mb-8max-w-3xlmx-auto">
            Build, migrate, and optimize your cloud infrastructure with our expert solutions. 
            Scale efficiently and securely in the cloud.
          </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="containermx-autopx-4">
          <div className="gridgrid-cols-1md:grid-cols-2lg:grid-cols-3gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-slate-800rounded-xlp-8borderborder-slate-700hover:border-blue-500transition-allduration-300hover:transformhover:scale-105">
                </div><div className="w-16h-16bg-gradient-to-rfrom-blue-500to-cyan-500rounded-lgflexitems-centerjustify-centermb-6">
                  <service.icon className="w-8h-8text-white" />
                  </div>
        </div>
                
                <h3 className="text-2xlfont-boldtext-whitemb-4">{service.title}</h3>
                <p className="text-gray-300mb-6">{service.description}</p>
                <div className="mb-6">
                  <h4 className="text-whitefont-semiboldmb-3">Key Features</h4>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="text-gray-300text-smflexitems-center">
                        <div className="w-2h-2bg-blue-400rounded-fullmr-3"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  </div>
        </div>

                <button className="w-fullbg-gradient-to-rfrom-blue-600to-cyan-600text-whitepy-3px-6rounded-lgfont-semiboldhover:from-blue-700hover:to-cyan-700transition-allduration-300">
                  Learn More
                </button>
                </div>
        </div>
            ))}
            </div>
        </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20bg-gradient-to-rfrom-blue-900/30to-cyan-900/30">
        <div className="containermx-autopx-4text-center">
          <h2 className="text-4xlmd:text-5xlfont-boldtext-whitemb-6">
            Ready to Scale in the Cloud?
          </h2>
          <p className="text-xl text-gray-300 mb-8max-w-3xlmx-auto">
            Let&apos;s discuss how our cloud infrastructure services can transform your business operations.
          </p>
          <div className="flexflex-colsm:flex-rowgap-4justify-center">
            <button className="bg-gradient-to-rfrom-blue-600to-cyan-600text-whitepx-8py-4rounded-lgfont-semiboldhover:from-blue-700hover:to-cyan-700transition-allduration-300transformhover:scale-105">
              Start Your Cloud Journey
            </button>
            <button className="border-2border-whitetext-whitepx-8py-4rounded-lgfont-semiboldhover:bg-whitehover:text-slate-900transition-allduration-300">
              Schedule Consultation
            </button>
            </div>
        </div>
          </div>
        </div>
      </section>
    </div>
  )
}
export default CloudInfrastructurePage