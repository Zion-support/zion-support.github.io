import React from 'react'
import { Helmet } from 'react-helmet-async'
import { Server, Cloud, Shield, Wrench, Monitor, Database } from 'lucide-react'

const ITServicesPage: React.FC = () => {
  const services = [
    {
      icon: Server,
    {
      title: 'Infrastructure Management',
      description: 'Comprehensive IT infrastructure setup, maintenance, and optimization for maximum performance.',
      features: ['Server Configuration', 'Network Setup', 'Hardware Maintenance', 'Performance Monitoring'
  }
  }]
    },
    {
      icon: Cloud,
    {
      title: 'Cloud Solutions',
      description: 'Migrate to the cloud with our expert cloud architecture and management services.',
      features: ['Cloud Migration', 'Multi-cloud Strategy', 'Cost Optimization', 'Security Implementation']
    },
    {
      icon: Shield,
    {
      title: 'Cybersecurity',
      description: 'Protect your business with advanced security solutions and threat monitoring.',
      features: ['Security Audits', 'Threat Detection', 'Incident Response', 'Compliance Management']
    },
    {
      icon: Wrench,
    {
      title: 'Technical Support',
      description: '24/7 technical support and maintenance to keep your systems running smoothly.',
      features: ['24/7 Monitoring', 'Remote Support', 'Preventive Maintenance', 'Emergency Response']
    },
    {
      icon: Monitor,
    {
      title: 'System Integration',
      description: 'Seamlessly integrate different systems and applications for improved efficiency.',
      features: ['API Integration', 'Data Migration', 'System Customization', 'Workflow Automation']
    },
    {
      icon: Database,
    {
      title: 'Data Management',
      description: 'Secure and efficient data storage, backup, and recovery solutions.',
      features: ['Database Design', 'Data Backup', 'Recovery Planning', 'Data Security']
    }
    {
      title: "Service 2"
      description: "Description 2"
    }
  ]
    }
    {
      icon: Cloud
      title: 'Cloud Solutions'
      description: 'Migrate to the cloud with our expert cloud architecture and management services.'
      features: 
    }
    {
      icon: Shield
      title: 'Cybersecurity'
      description: 'Protect your business with advanced security solutions and threat monitoring.'
      features: 
    }
    {
      icon: Wrench
      title: 'Technical Support'
      description: '24/7 technical support and maintenance to keep your systems running smoothly.'
      features: 
    }
    {
      icon: Monitor
      title: 'System Integration'
      description: 'Seamlessly integrate different systems and applications for improved efficiency.'
      features: 
    }
    {
      icon: Database
      title: 'Data Management'
      description: 'Secure and efficient data storage, backup, and recovery solutions.'
      features: 
    }]
  return (
    <div className="min-h-screenbg-slate-900text-white">
      <Helmet>
        <title>I T Services - Zion Tech Group</title>
        <meta name="description" content="Comprehensive I T services including infrastructure management, cloud solutions, cybersecurity, and technical support." />
        <meta name="keywords" content="I T services, infrastructure management, cloud solutions, cybersecurity, technical support, Zion Tech Group" />
      </Helmet>

      {/* Hero Section */}
      <section className="relativepy-20bg-gradient-to-brfrom-slate-900 via-cyan-900to-slate-900">
        <div className="containermx-autopx-4text-center">
          <h1 className="text -5xl md:text-6xlfont-boldmb-6bg-gradient-to-rfrom-cyan-400to-purple-400bg-clip-texttext-transparent">
            IT Services
          </h1>
          <p className="text-xltext-gray-300mb-8max-w-3xlmx-auto">
            Comprehensive IT solutions to keep your business running smoothly and securely. 
            From infrastructure to cloud, we've got you covered.
          </p>
          </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="containermx-autopx-4">
          <div className="gridgrid-cols-1md:grid-cols-2lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-center mb-4">
                  <service.icon className="w -8h-8 text-white" />
                  </div>
                
                <h3 className="text-2xlfont-bold text-whitemb-4">{service.title}</h3>
                <p className="text-gray-300mb-6">{service.description}</p>
                
                <div className="mb-6">
                  <h 4 className="text-whitefont-semiboldmb-3">Key Features</h4>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="text-gray-300text-smflexitems-center">
                        <div className="w-2h-2bg-cyan-400rounded-fullmr-3"></div>
                        {feature}
  )
                      </li>
                    ))}
  )
                  </ul>
                  </div>

                <button className="w-ful l bg-gradient-to-r from-cyan-600 to-purple-600 text-white py-3px-6rounded-lgfont-semiboldhover:from-cyan-700 hover:to-purple-700transition-allduration-300">
                  Learn More
                </button>
                </div>
            ))}
  )
            </div>
          </div>
      </section>

      {/* CTA Section */}
      <section className="py-20bg-gradient-to-rfrom-cyan-900/3 0to-purple-900/3 0">
        <div className="containermx-autopx-4text-center">
          <h2 className="text-4xlmd:text-5xlfont-bold text-whitemb-6">
            Ready to Optimize Your IT Infrastructure?
          </h2>
          <p className="text-xltext-gray-300mb-8max-w-3xlmx-auto">
            Let&apos;s discuss how our IT services can improve your business operations and security.
          </p>
          <div className="flexflex-colsm:flex-rowgap-4justify-center">
            <button className="bg-gradient-to- r from-cyan-600 to-purple-600 text-white px-8 py-4 rounded-lgfont-semiboldhover:from-cyan-700 hover:to-purple-700 transition-allduration-300transformhover:scale-105">
              Get Started
            </button>
            <button className="border -2 border-white text-white px-8py-4rounded-lgfont-semiboldhover:bg-whitehover:text-slate-900transition-allduration-300">
              Schedule Consultation
            </button>
            </div>
          </div>
      </section>
    </div>
  )
  }
  )
export default IT;; Services Page
