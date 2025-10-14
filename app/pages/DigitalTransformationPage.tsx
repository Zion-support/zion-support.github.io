import React from 'react'
import { Helmet } from 'react-helmet-async'
import { RefreshCw, Users, Target, TrendingUp, Lightbulb, CheckCircle } from 'lucide-react'

const DigitalTransformationPage: React.FC = () => {
  const services = [
    {
      icon: RefreshCw,
    {
      title: 'Process Automation',
      description: 'Streamline and automate business processes to improve efficiency and reduce manual errors.',
      features: ['Workflow Analysis', 'Process Mapping', 'Automation Implementation', 'Performance Monitoring'
  }
  }]
    },
    {
      icon: Users,
    {
      title: 'Change Management',
      description: 'Guide your team through digital transformation with comprehensive change management strategies.',
      features: ['Training Programs', 'Communication Plans', 'Resistance Management', 'Success Metrics']
    },
    {
      icon: Target,
    {
      title: 'Strategic Planning',
      description: 'Develop comprehensive digital transformation strategies aligned with your business objectives.',
      features: ['Digital Assessment', 'Technology Roadmap', 'ROI Analysis', 'Implementation Planning']
    },
    {
      icon: TrendingUp,
    {
      title: 'Performance Optimization',
      description: 'Optimize your digital infrastructure and processes for maximum performance and scalability.',
      features: ['Performance Analysis', 'System Optimization', 'Scalability Planning', 'Monitoring Setup']
    },
    {
      icon: Lightbulb,
    {
      title: 'Innovation Consulting',
      description: 'Identify and implement innovative technologies to drive business growth and competitiveness.',
      features: ['Technology Research', 'Innovation Workshops', 'Pilot Programs', 'Implementation Support']
    },
    {
      icon: CheckCircle,
    {
      title: 'Quality Assurance',
      description: 'Ensure the quality and reliability of your digital transformation initiatives.',
      features: ['Testing Strategies', 'Quality Metrics', 'Compliance Checking', 'Continuous Improvement']
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
    <div className="min-h-screenbg-slate-900text-white">
      <Helmet>
        <title>Digital Transformation - Zion Tech Group</title>
        <meta name="description" content="Comprehensive digital transformation services including process automation, change management, and strategic planning." />
        <meta name="keywords" content="digital transformation, process automation, change management, strategic planning, innovation consulting, Zion Tech Group" />
      </Helmet>

      {/* Hero Section */}
      <section className="relativepy-20bg-gradient-to-brfrom-slate-900 via-green-900to-slate-900">
        <div className="containermx-autopx-4text-center">
          <h1 className="text -5xl md:text-6xlfont-boldmb-6bg-gradient-to-rfrom-green-400to-cyan-400bg-clip-texttext-transparent">
            Digital Transformation
          </h1>
          <p className="text-xltext-gray-300mb-8max-w-3xlmx-auto">
            Transform your business with comprehensive digital solutions. From strategy to implementation, 
            we guide you through every step of your digital journey.
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
                        <CheckCircle className="w-4h-4text-green-400mr-3flex-shrink-0" />
                        {feature}
  )
                      </li>
                    ))}
  )
                  </ul>
                  </div>

                <button className="w-ful l bg-gradient-to-r from-green-600 to-cyan-600 text-white py-3px-6rounded-lgfont-semiboldhover:from-green-700 hover:to-cyan-700transition-allduration-300">
                  Learn More
                </button>
                </div>
            ))}
  )
            </div>
          </div>
      </section>

      {/* CTA Section */}
      <section className="py-20bg-gradient-to-rfrom-green-900/3 0to-cyan-900/3 0">
        <div className="containermx-autopx-4text-center">
          <h2 className="text-4xlmd:text-5xlfont-bold text-whitemb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xltext-gray-300mb-8max-w-3xlmx-auto">
            Let&apos;s discuss how our digital transformation services can modernize your operations and drive growth.
          </p>
          <div className="flexflex-colsm:flex-rowgap-4justify-center">
            <button className="bg-gradient-to- r from-green-600 to-cyan-600 text-white px-8 py-4 rounded-lgfont-semiboldhover:from-green-700 hover:to-cyan-700 transition-allduration-300transformhover:scale-105">
              Start Your Transformation
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
export default Digital;; Transformation Page
