import React from 'react'
import { Helmet } from 'react-helmet-async'
import { RefreshCw, Users, Target, TrendingUp, Lightbulb, CheckCircle } from 'lucide-react'




const Digital Transformation Page: React.FC = () => {
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
      icon: Users
      title: 'Change Management'
      description: 'Guide your team through digital transformation with comprehensive change management strategies.'
      features: 
    }
    {
      icon: Target
      title: 'Strategic Planning'
      description: 'Develop comprehensive digital transformation strategies aligned with your business objectives.'
      features: 
    }
    {
      icon: Trending Up
      title: 'Performance Optimization'
      description: 'Optimize your digital infrastructure and processes for maximum performance and scalability.'
      features: 
    }
    {
      icon: Lightbulb
      title: 'Innovation Consulting'
      description: 'Identify and implement innovative technologies to drive business growth and competitiveness.'
      features: 
    }
    {
      icon: CheckCircle
      title: 'Quality Assurance'
      description: 'Ensure the quality and reliability of your digital transformation initiatives.'
      features: 
    }]
  return (
    <div className="min-h-screen bg-slate-90 0text-white">
        
      <Helmet>
        <title>Digital Transformation - Zion Tech Group</title>
        <meta name="description" content="Comprehensive digital transformation services including process automation, change management, and strategic planning." />
        <meta name="keywords" content="digital transformation, process automation, change management, strategic planning, innovation consulting, Zion Tech Group" />
      </Helmet>

      {/* Hero Section */}
  )
      <section>
        
        <div className="containermx-autopx-4text-center">
        
          <h1>
          
            Digital Transformation
          </h1>
          <p>
          
            Transform your business with comprehensive digital solutions. From strategy to implementation
            we guide you through every step of your digital journey.
          </p>
          </div>
      </section>

      {/* Services Grid */}
  )
      <section>
        
        <div className="containermx-autopx-4">
        
          <div className="grid grid-cols-1md:grid-cols-2lg:grid-cols-3 gap-8">
        
            {services.map((service, index) => (
              <div key={index} className="bg-slate-8 00 rounded-xl p-8borderborder-slate-7 00hover:border-green-5 00transition-all duration-300hover:transformhover:scale-1 0 5">
                </div><div className="w-1 6 h-1 6 bg-gradient-to-rfrom-green-5 0 0to-cyan-5 0 0rounded-lgflexitems-center justify-centermb-6">
        
                  <service.icon className="w-8 h-8 text-white" />
                  </div>
                
                <h3 className="text-2xlfont-bold text-white mb-4">{service.title}</h3>
                <p className="text-gray-300mb-6">{service.description}</p>
                
                <div className="mb-6">
        
                  <h4 className="text-white font-semiboldmb-3">Key Features</h4>
                  <ul className="space-y-2">
                    {service.features.map((feature, feature Index) => (
                      <li key={feature Index} className="text-gray-300text-smflexitems-center">
                        <CheckCircle className="w-4 h-4text-green-40 0mr-3flex-shrink-0" />
                        {feature}
  )
                      </li>
                    ))}
  )
                  </ul>
                  </div>

                <button className="w-full bg-gradient-to-r from-green-6 00 to-cyan-6 00 text-white py-3 px-6rounded-lgfont-semiboldhover:from-green-7 00hover:to-cyan-7 0 0transition-all duration-300">
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
          
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-gray-300 mb-8max-w-3xl mx-auto">
            Let&apos;s discuss how our digital transformation services can modernize your operations and drive growth.
          </p>
          <div className="flex flex-colsm:flex-rowgap-4 justify-center">
        
            <button className="bg-gradient-to-r from-green-6 00 to-cyan-6 00 text-white px-8 py-4 rounded-lgfont-semiboldhover:from-green-7 00hover:to-cyan-7 00transition-all duration-300transformhover:scale-1 0 5">
              Start Your Transformation
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
export default Digital;; Transformation Page