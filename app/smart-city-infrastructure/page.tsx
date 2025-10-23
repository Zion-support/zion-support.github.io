'use client'
import React from 'react'
import { Helmet } from 'react-helmet-async'
import { CheckCircle, ArrowRight, Phone, Mail, MapPin, Zap, Shield, Brain, Globe } from 'lucide-react'
const features = [
    {
      icon: Brain,
      title: 'AI-Powered Solutions',
      description: 'Advanced AI technology to transform your business operations and improve efficiency'
    },
    {
      icon: Zap,
      title: 'High Performance',
      description: 'Lightning-fast processing and real-time analytics for optimal results'
    },
    {
      icon: Shield,
      title: 'Enterprise Security',
      description: 'Bank-level security with encryption and compliance standards'
    },
    {
      icon: Globe,
      title: 'Global Reach',
      description: 'Worldwide deployment and support for international businesses'
    }
  ]
  const benefits = [
    'Advanced AI technology integration',
    'Real-time processing and analytics',
    'Enterprise-grade security and compliance',
    'Scalable and flexible solutions',
    '24/7 technical support',
    'Easy integration with existing systems',
    'Cost-effective pricing plans',
    'Proven track record of success'
  ]
  return (
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8" loading="lazy">
        <div className="max-w-7xl mx-auto" loading="lazy">
          <div className="text-center" loading="lazy">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6" loading="lazy">
              <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent" loading="lazy">Page</span>
              <br />
              <span className="text-white" loading="lazy">Solutions</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto" loading="lazy">Transform your business with our advanced page solutions.</p>
              Powered by cutting-edge AI technology and industry expertise.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center" loading="lazy">
              <button className="bg-gradient-to-r from-purple-500 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-purple-600 hover:to-blue-700 transition-all duration-300 flex items-center" loading="lazy" aria-label="Action button">Get Started</button>
                <ArrowRight className="ml-2 h-5 w-5" loading="lazy" />
              </button>
              <button className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300" loading="lazy" aria-label="Action button">Learn More</button>
            </div>
          </div>
        </div>
      </section>
    }
  ]
  const smartCityServices = [
    {
      icon: Building,
      title: 'Smart Buildings',
      description: 'Intelligent building management systems with IoT integration',
      features: ['Energy optimization', 'Automated controls', 'Predictive maintenance', 'Occupant comfort']
    },
    {
      icon: Wifi,
      title: 'IoT Networks',
      description: 'Comprehensive IoT infrastructure for city-wide connectivity',
      features: ['Sensor networks', 'Data collection', 'Real-time monitoring', 'Edge computing']
    },
    {
      icon: Cpu,
      title: 'Data Analytics',
      description: 'Advanced analytics platform for city data processing',
      features: ['Real-time insights', 'Predictive modeling', 'Traffic optimization', 'Resource management']
    },
    {
      icon: Database,
      title: 'Digital Infrastructure',
      description: 'Robust digital infrastructure for smart city operations',
      features: ['Cloud platforms', 'Data storage', 'API management', 'Security protocols']
    }
  ]
  return (
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8" loading="lazy"></section>
        <div className="max-w-7xl mx-auto" loading="lazy"></div>
          <div className="text-center" loading="lazy"></div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6" loading="lazy">
              <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent" loading="lazy">Page</span>
              <br />
              <span className="text-white" loading="lazy">Solutions</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto" loading="lazy">Transform your business with our advanced page solutions.</p>
              Powered by cutting-edge AI technology and industry expertise.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center" loading="lazy"></div>
              <button className="bg-gradient-to-r from-purple-500 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-purple-600 hover:to-blue-700 transition-all duration-300 flex items-center" loading="lazy" aria-label="Action button">Get Started</button>
                <ArrowRight className="ml-2 h-5 w-5" loading="lazy" />
              </button>
              <button className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300" loading="lazy" aria-label="Action button">Learn More</button>
            </div>
          </div>
        </div>
      </section>
      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8" loading="lazy"></section>
        <div className="max-w-7xl mx-auto" loading="lazy"></div>
          <div className="text-center mb-16" loading="lazy"></div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4" loading="lazy">Why Choose Our Page?</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto" loading="lazy">Our page solutions deliver unmatched performance, security, and scalability.</p>
          </div>
                </div>
                <h3 className="text-xl font-semibold text-white mb-3" loading="lazy">{feature.title}</h3>
                <p className="text-gray-300" loading="lazy">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Benefits Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5" loading="lazy">
        <div className="max-w-7xl mx-auto" loading="lazy">
          <div className="text-center mb-16" loading="lazy">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4" loading="lazy">Key Benefits</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto" loading="lazy">Experience the power of our page solutions for your business.</p>
          </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8" loading="lazy">
        <div className="max-w-4xl mx-auto text-center" loading="lazy">
          <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-8 md:p-12" loading="lazy">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4" loading="lazy">Ready to Get Started?</h2>
            <p className="text-xl text-purple-100 mb-8" loading="lazy">Contact our experts to discuss your page needs and get a customized solution.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center" loading="lazy">
              <button className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 flex items-center justify-center" loading="lazy" aria-label="Action button">
                <Phone className="mr-2 h-5 w-5" loading="lazy" />
                Call Now
  </
              <button className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-all duration-300 flex items-center justify-center" loading="lazy" aria-label="Action button">
                <Mail className="mr-2 h-5 w-5" loading="lazy" />
                Email Us
  </
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
export default PagePage
  </button>
  </button>
  </h2>
  </button>
  </span>
  const benefits = [
    'Advanced AI technology integration',
    'Real-time processing and analytics',
    'Enterprise-grade security and compliance',
    'Scalable and flexible solutions',
    '24/7 technical support',
    'Easy integration with existing systems',
    'Cost-effective pricing plans',
    'Proven track record of success'
  ]
  return (
    <>
      <Helmet>
        <title>Smart City Infrastructure - Zion Tech Group</title>
        <meta name="description" content="Advanced smart city infrastructure solutions including IoT networks, data analytics, and digital transformation for modern cities." />
        <meta name="keywords" content="smart city, infrastructure, IoT, data analytics, digital transformation, urban planning" />
      </Helmet>
      <Navigation />
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900" loading="lazy">>{/* Hero Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8" loading="lazy">
          <div className="max-w-7xl mx-auto" loading="lazy">
            <div className="text-center" loading="lazy">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6" loading="lazy">
                <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent" loading="lazy">Smart City</span>
                <br />
                <span className="text-white" loading="lazy">Infrastructure</span>
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto" loading="lazy">Transform your city with our advanced smart infrastructure solutions.</p>
                Powered by cutting-edge AI technology and industry expertise.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center" loading="lazy">
                <button className="bg-gradient-to-r from-purple-500 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-purple-600 hover:to-blue-700 transition-all duration-300 flex items-center" loading="lazy" aria-label="Action button">Get Started</button>
                  <ArrowRight className="ml-2 h-5 w-5" loading="lazy" />
                </button>
                <button className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300" loading="lazy" aria-label="Action button">Learn More</button>
              </div>
            </div>
          </div>
        </section>
        {/* Features Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8" loading="lazy">
          <div className="max-w-7xl mx-auto" loading="lazy">
            <div className="text-center mb-16" loading="lazy">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4" loading="lazy">Why Choose Our Smart City Solutions?</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto" loading="lazy">Our smart city solutions deliver unmatched performance, security, and scalability.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8" loading="lazy">{features.map((feature, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300" loading="lazy">
                  <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-600 rounded-lg mb-4" loading="lazy">
                    <feature.icon className="h-6 w-6 text-white" loading="lazy" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3" loading="lazy">{feature.title}</h3>
                  <p className="text-gray-300" loading="lazy">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
        {/* Services Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5" loading="lazy">
          <div className="max-w-7xl mx-auto" loading="lazy">
            <div className="text-center mb-16" loading="lazy">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4" loading="lazy">Our Smart City Services</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto" loading="lazy">Comprehensive solutions for modern smart city infrastructure.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8" loading="lazy">{smartCityServices.map((service, index) => (</div>
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300" loading="lazy">
                  <div className="flex items-center mb-6" loading="lazy">
                    <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-600 rounded-lg flex items-center justify-center mr-4" loading="lazy">
                      <service.icon className="h-8 w-8 text-white" loading="lazy" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-2" loading="lazy">{service.title}</h3>
                      <p className="text-gray-300" loading="lazy">{service.description}</p>
                    </div>
                  </div>
                  <div className="space-y-2" loading="lazy">{service.features.map((feature, featureIndex) => (</div>
                      <div key={featureIndex} className="flex items-center text-gray-300" loading="lazy">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-3 flex-shrink-0" loading="lazy" />
                        {feature}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        {/* Benefits Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8" loading="lazy">
          <div className="max-w-7xl mx-auto" loading="lazy">
            <div className="text-center mb-16" loading="lazy">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4" loading="lazy">Key Benefits</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto" loading="lazy">Experience the power of our smart city solutions for your community.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6" loading="lazy">{benefits.map((benefit, index) => (
                <div key={index} className="flex items-start space-x-3" loading="lazy">
                  <CheckCircle className="h-6 w-6 text-purple-400 mt-1 flex-shrink-0" loading="lazy" />
                  <p className="text-gray-300 text-lg" loading="lazy">{benefit}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8" loading="lazy">
          <div className="max-w-4xl mx-auto text-center" loading="lazy">
            <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-8 md:p-12" loading="lazy">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4" loading="lazy">Ready to Build Your Smart City?</h2>
              <p className="text-xl text-purple-100 mb-8" loading="lazy">Contact our experts to discuss your smart city infrastructure needs and get a customized solution.</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center" loading="lazy">
                <button className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 flex items-center justify-center" loading="lazy" aria-label="Action button">
                  <Phone className="mr-2 h-5 w-5" loading="lazy" />
                  Call Now
                </button>
                <button className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-all duration-300 flex items-center justify-center" loading="lazy" aria-label="Action button">
                  <Mail className="mr-2 h-5 w-5" loading="lazy" />
                  Email Us
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  )
}
export default SmartCityInfrastructurePage
