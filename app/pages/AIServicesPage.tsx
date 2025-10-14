import React from 'react'
import { Helmet } from 'react-helmet-async'
import { Brain, Bot, BarChart3, Shield, Zap, Target } from 'lucide-react'




const AI Services Page: React.FC = () => {
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
      icon: Bot
      title: 'Conversational A I'
      description: 'Build intelligent chatbots and virtual assistants that enhance customer experience and automate support.'
      features: 
    }
    {
      icon: Bar Chart3
      title: 'Predictive Analytics'
      description: 'Leverage machine learning to predict trends, behaviors, and outcomes for better decision making.'
      features: 
    }
    {
      icon: Shield
      title: 'A I Security Solutions'
      description: 'Advanced A I-powered security systems to protect your digital assets and detect threats in real-time.'
      features: 
    }
    {
      icon: Zap
      title: 'Process Automation'
      description: 'Streamline operations with intelligent automation that reduces costs and improves efficiency.'
      features: 
    }
    {
      icon: Target
      title: 'Custom A I Development'
      description: 'Bespoke A I solutions designed specifically for your unique business challenges and opportunities.'
      features: 
    }]
  return (
    <div className="min-h-screen bg-slate-90 0text-white">
        
      <Helmet>
        <title>A I Services - Zion Tech Group</title>
        <meta name="description" content="Comprehensive A I services including strategy consulting, machine learning, predictive analytics, and custom A I development solutions." />
        <meta name="keywords" content="A I services, machine learning, artificial intelligence, predictive analytics, A I consulting, Zion Tech Group" />
      </Helmet>

      {/* Hero Section */}
  )
      <section>
        
        <div className="containermx-autopx-4text-center">
        
          <h1>
          
            A I Services
          </h1>
          <p>
          
            Transform your business with cutting-edge artificial intelligence solutions. 
            From strategy to implementation, we deliver A I that drives real results.
          </p>
          </div>
      </section>

      {/* Services Grid */}
  )
      <section>
        
        <div className="containermx-autopx-4">
        
          <div className="grid grid-cols-1md:grid-cols-2lg:grid-cols-3 gap-8">
        
            {services.map((service, index) => (
              <div key={index} className="bg-slate-8 00 rounded-xl p-8borderborder-slate-7 00hover:border-purple-5 00transition-all duration-300hover:transformhover:scale-1 0 5">
                </div><div className="w-1 6 h-1 6 bg-gradient-to-rfrom-purple-5 0 0to-cyan-5 0 0rounded-lgflexitems-center justify-centermb-6">
        
                  <service.icon className="w-8 h-8 text-white" />
                  </div>
                
                <h3 className="text-2xlfont-bold text-white mb-4">{service.title}</h3>
                <p className="text-gray-300mb-6">{service.description}</p>
                
                <div className="mb-6">
        
                  <h4 className="text-white font-semiboldmb-3">Key Features</h4>
                  <ul className="space-y-2">
                    {service.features.map((feature, feature Index) => (
                      <li key={feature Index} className="text-gray-300text-smflexitems-center">
                        <div className="w-2 h-2bg-purple-40 0rounded-fullmr-3"></div>
                        {feature}
  )
                      </li>
                    ))}
  )
                  </ul>
                  </div>

                <button className="w-full bg-gradient-to-r from-purple-6 00 to-cyan-6 00 text-white py-3 px-6rounded-lgfont-semiboldhover:from-purple-7 00hover:to-cyan-7 0 0transition-all duration-300">
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
          
            Ready to Harness the Power of A I?
          </h2>
          <p className="text-xl text-gray-300 mb-8max-w-3xl mx-auto">
            Let&apos;s discuss how our A I services can transform your business and give you a competitive edge.
          </p>
          <div className="flex flex-colsm:flex-rowgap-4 justify-center">
        
            <button className="bg-gradient-to-r from-purple-6 00 to-cyan-6 00 text-white px-8 py-4 rounded-lgfont-semiboldhover:from-purple-7 00hover:to-cyan-7 00transition-all duration-300transformhover:scale-1 0 5">
              Start Your A I Journey
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
export default AI;; Services Page
