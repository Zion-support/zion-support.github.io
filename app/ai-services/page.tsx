import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Brain, Zap, Shield, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom'
;
export default function AIServicesPage() {}
  // TODO: implement
}
  const services = [
    {}
      icon: <Brain className="w-8 h-8 text-blue-500" />,
      title: 'AI Content Generation',
      description: 'Generate high-quality content for blogs, social media, marketing materials, and more using advanced AI models.',
      features: ['Multi-language support', 'SEO optimization', 'Brand voice customization', 'Content templates'],
      pricing: 'Starting at $29/month'
    },
    {}
      icon: <Zap className="w-8 h-8 text-purple-500" />,
      title: 'AI Automation',
      description: 'Automate repetitive tasks and workflows with intelligent AI-powered automation solutions.',
      features: ['Workflow automation', 'Process optimization', 'Custom integrations', 'Real-time monitoring'],
      pricing: 'Starting at $49/month'
    },
    {}
      icon: <Shield className="w-8 h-8 text-red-500" />,
      title: 'AI Cybersecurity',
      description: 'Advanced AI-powered security solutions to protect your digital assets and detect threats.',
      features: ['Threat detection', 'Anomaly monitoring', 'Automated response', 'Compliance reporting'],
      pricing: 'Starting at $99/month'
    }
  ]

  return ()
    <>
      <Helmet></Helmet>
        <title>AI Services - Zion Tech Group</title>
        <meta name="description" content="Discover our comprehensive AI services including content generation, automation, cybersecurity, and more. Transform your business with artificial intelligence." /></meta>
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900"></div>
        {/* Hero Section */}
        <section className="pt-20 pb-16"></section>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center"></div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6"></h1>
              AI <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Services</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto"></p>
              Transform your business with our comprehensive AI solutions designed to automate, optimize, and enhance your operations.
            </p>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-16 bg-white"></section>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"></div>
            <div className="text-center mb-12"></div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Our AI Services</h2>
              <p className="text-xl text-gray-600">Choose from our range of AI-powered solutions</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8"></div>
              {services.map((service, index) => ()
                <div key={index} className="bg-gray-50 rounded-xl p-8 hover:shadow-lg transition-shadow duration-300"></div>
                  <div className="mb-4"></div>
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3"></h3>
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-4"></p>
                    {service.description}
                  </p>
                  <div className="mb-4"></div>
                    <h4 className="font-semibold text-gray-900 mb-2">Features:</h4>
                    <ul className="text-sm text-gray-600 space-y-1"></ul>
                      {service.features.map((feature, idx) => ()
                        <li key={idx}>• {feature}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="mb-4"></div>
                    <span className="text-lg font-semibold text-blue-600">{service.pricing}</span>
                  </div>
                  <Link
                    to="/contact"
                    className="inline-flex items-center text-blue-600 hover:text-blue-700 font-semibold"
                  ></Link>
                    Get Started
                    <ArrowRight className="ml-1 w-4 h-4" /></ArrowRight>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </>
  )
}