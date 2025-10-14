import React from 'react'
import { Helmet } from 'react-helmet-async'
import { Server, Cloud, Shield, Wrench, Monitor, Database } from 'lucide-react'




const IT Services Page: React.FC = () => {
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
    <div className="min-h-screen bg-slate-90 0text-white">
        
      <Helmet>
        <title>I T Services - Zion Tech Group</title>
        <meta name="description" content="Comprehensive I T services including infrastructure management, cloud solutions, cybersecurity, and technical support." />
        <meta name="keywords" content="I T services, infrastructure management, cloud solutions, cybersecurity, technical support, Zion Tech Group" />
      </Helmet>

      {/* Hero Section */}
  )
      <section>
        
        <div className="containermx-autopx-4text-center">
        
          <h1>
          
            I T Services
          </h1>
          <p>
          
            Comprehensive I T solutions to keep your business running smoothly and securely. 
            From infrastructure to cloud, we&apos;ve got you covered.
          </p>
          </div>
      </section>

      {/* Services Grid */}
  )
      <section>
        
        <div className="containermx-autopx-4">
        
          <div className="grid grid-cols-1md:grid-cols-2lg:grid-cols-3 gap-8">
        
            {services.map((service, index) => (
              <div key={index} className="bg-slate-8 00 rounded-xl p-8borderborder-slate-7 00hover:border-cyan-5 00transition-all duration-300hover:transformhover:scale-1 0 5">
                </div><div className="w-1 6 h-1 6 bg-gradient-to-rfrom-cyan-5 0 0to-purple-5 0 0rounded-lgflexitems-center justify-centermb-6">
        
                  <service.icon className="w-8 h-8 text-white" />
                  </div>
                
                <h3 className="text-2xlfont-bold text-white mb-4">{service.title}</h3>
                <p className="text-gray-300mb-6">{service.description}</p>
                
                <div className="mb-6">
        
                  <h4 className="text-white font-semiboldmb-3">Key Features</h4>
                  <ul className="space-y-2">
                    {service.features.map((feature, feature Index) => (
                      <li key={feature Index} className="text-gray-300text-smflexitems-center">
                        <div className="w-2 h-2bg-cyan-40 0rounded-fullmr-3"></div>
                        {feature}
  )
                      </li>
                    ))}
  )
                  </ul>
                  </div>

                <button className="w-full bg-gradient-to-r from-cyan-600 to-purple-600 text-white py-3 px-6rounded-lgfont-semiboldhover:from-cyan-7 00hover:to-purple-700transition-all duration-300">
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
          
            Ready to Optimize Your I T Infrastructure?
          </h2>
          <p>
          
            Let&apos;s discuss how our I T services can improve your business operations and security.
          </p>
          <div className="flex flex-colsm:flex-rowgap-4 justify-center">
        
            <button className="bg-gradient-to-r from-cyan-600 to-purple-600 text-white px-8 py-4 rounded-lgfont-semiboldhover:from-cyan-7 00hover:to-purple-7 00transition-all duration-300transformhover:scale-1 0 5">
              Get Started
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
export default IT;; Services Page
