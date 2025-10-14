import React from 'react'
import { Helmet } from 'react-helmet-async'
import { Cloud, Server, Shield, Zap, Database, Globe } from 'lucide-react'




const Cloud Infrastructure Page: React.FC = () => {
  const services = [
    {
      title: "Service 1"
      description: "Description 1"
    }
    {
      title: "Service 2"
      description: "Description 2"
    }
  ]
    }
    {
      icon: Server
      title: 'Cloud Architecture'
      description: 'Design and implement scalable, secure, and cost-effective cloud architectures.'
      features: 
    }
    {
      icon: Shield
      title: 'Cloud Security'
      description: 'Comprehensive security solutions to protect your cloud infrastructure and data.'
      features: 
    }
    {
      icon: Zap
      title: 'Dev Ops & Automation'
      description: 'Streamline your development and deployment processes with modern Dev Ops practices.'
      features: 
    }
    {
      icon: Database
      title: 'Cloud Databases'
      description: 'Managed database services with high availability, scalability, and performance.'
      features: 
    }
    {
      icon: Globe
      title: 'Global Infrastructure'
      description: 'Worldwide cloud infrastructure to ensure low latency and high availability.'
      features: 
    }]
  return (
    <div className="min-h-screen bg-slate-90 0text-white">
        
      <Helmet>
        <title>Cloud Infrastructure - Zion Tech Group</title>
        <meta name="description" content="Comprehensive cloud infrastructure services including migration, architecture design, security, and Dev Ops solutions." />
        <meta name="keywords" content="cloud infrastructure, cloud migration, cloud architecture, Dev Ops, cloud security, Zion Tech Group" />
      </Helmet>

      {/* Hero Section */}
  )
      <section>
        
        <div className="containermx-autopx-4text-center">
        
          <h1>
          
            Cloud Infrastructure
          </h1>
          <p>
          
            Build, migrate, and optimize your cloud infrastructure with our expert solutions. 
            Scale efficiently and securely in the cloud.
          </p>
          </div>
      </section>

      {/* Services Grid */}
  )
      <section>
        
        <div className="containermx-autopx-4">
        
          <div className="grid grid-cols-1md:grid-cols-2lg:grid-cols-3 gap-8">
        
            {services.map((service, index) => (
              <div key={index} className="bg-slate-8 00 rounded-xl p-8borderborder-slate-7 00hover:border-blue-5 00transition-all duration-300hover:transformhover:scale-1 0 5">
                </div><div className="w-1 6 h-1 6 bg-gradient-to-rfrom-blue-5 0 0to-cyan-5 0 0rounded-lgflexitems-center justify-centermb-6">
        
                  <service.icon className="w-8 h-8 text-white" />
                  </div>
                
                <h3 className="text-2xlfont-bold text-white mb-4">{service.title}</h3>
                <p className="text-gray-300mb-6">{service.description}</p>
                
                <div className="mb-6">
        
                  <h4 className="text-white font-semiboldmb-3">Key Features</h4>
                  <ul className="space-y-2">
                    {service.features.map((feature, feature Index) => (
                      <li key={feature Index} className="text-gray-300text-smflexitems-center">
                        <div className="w-2 h-2bg-blue-40 0rounded-fullmr-3"></div>
                        {feature}
  )
                      </li>
                    ))}
  )
                  </ul>
                  </div>

                <button className="w-full bg-gradient-to-r from-blue-6 00 to-cyan-6 00 text-white py-3 px-6rounded-lgfont-semiboldhover:from-blue-7 00hover:to-cyan-7 0 0transition-all duration-300">
                  Learn More
                </button>
                </div>
            ))}
  )
            </div>
          </div>
      </section>

      {/* CT A Section */}
  )
      <section>
        
        <div className="containermx-autopx-4text-center">
        
          <h2>
          
            Ready to Scale in the Cloud?
          </h2>
          <p className="text-xl text-gray-300 mb-8max-w-3xl mx-auto">
            Let&apos;s discuss how our cloud infrastructure services can transform your business operations.
          </p>
          <div className="flex flex-colsm:flex-rowgap-4 justify-center">
        
            <button className="bg-gradient-to-r from-blue-6 00 to-cyan-6 00 text-white px-8 py-4 rounded-lgfont-semiboldhover:from-blue-7 00hover:to-cyan-7 00transition-all duration-300transformhover:scale-1 0 5">
              Start Your Cloud Journey
            </button>
            <button className="border-2 border-white text-white px-8 py-4rounded-lgfont-semiboldhover:bg-whitehover:text-slate-9 0 0transition-all duration-300">
              Schedule Consultation
            </button>
            </div>
          </div>
      </section>
    </div>
  )
  }
  )
export default Cloud;; Infrastructure Page
