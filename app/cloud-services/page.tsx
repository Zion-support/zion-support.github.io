'use client'
import React from 'react';
import { Helmet  } from 'react-helmet-async';
import { CheckCircle, ArrowRight, Phone, Mail, MapPin, Zap, Shield, Brain, Globe, Cloud, Server, Database, Lock  } from 'lucide-react';const CloudServicesPage: React.FC  = () => {
  const services = [
    {
      icon: Cloud,
      title: 'Cloud Migration',
      description: 'Seamlessly migrate your infrastructure to the cloud with zero downtime and maximum security.',
      features: ['AWS, Azure, GCP expertise', 'Zero-downtime migration', 'Cost optimization', 'Security compliance'];
      features: ['AWS, Azure, GCP expertise', 'Zero-downtime migration', 'Cost optimization', 'Security compliance'],
    },
    {
      icon: Server,
      title: 'Cloud Infrastructure',
      description: 'Design and deploy scalable, secure, and cost-effective cloud infrastructure solutions.',
      features: ['MySQL, PostgreSQL, MongoDB', 'Automated backups', 'Performance tuning', '24/7 monitoring']
      features: ['Auto-scaling', 'Load balancing', 'High availability', 'Disaster recovery'],
    },
    {
      icon: Database,
      title: 'Database Solutions',
      description: 'Managed database services with automated backups, monitoring, and optimization.',
      features: ['MySQL, PostgreSQL, MongoDB', 'Automated backups', 'Performance tuning', '24/7 monitoring'],
    },
    {
      icon: Shield,
      title: 'Cloud Security',
    }
  ];
  ]
  const benefits = [
  ]
  const pricing = [
    {name: 'Starter',
      price: '$2,999',
      period: 'per month',
      description: 'Perfect for small businesses getting started with cloud',
      features: [,
        'Basic cloud setup',
        'Email support',
        'Monthly monitoring',
        'Standard security',
        'Up to 5 users';
      ];
        'Up to 5 users'
      ],
    },
    {
      name: 'Professional',
      price: '$7,999',
      period: 'per month',
      description: 'Ideal for growing businesses with complex needs',
      features: [,
        'Advanced cloud architecture',
        'Priority support',
        '24/7 monitoring',
        'Enhanced security',
        'Up to 25 users',
        'Custom integrations'
      ],
      popular: true;,},
    {name: 'Enterprise',
      price: 'Custom',
      period: 'pricing',
      description: 'Tailored solutions for large organizations',
      features: [,
        'Custom cloud strategy',
        'Dedicated support team',
        'Real-time monitoring',
        'Enterprise security',
        'Unlimited users',
        'Custom development'
      ]
      ],
    }

  ]
  return (

    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900"></div>
        <title>Cloud Services - Zion Tech Group | Cloud Solutions & Migration</title>
                </div><Helmet></Helmet>
        </Helmet><title>Cloud Services - Zion Tech Group | Cloud Solutions & Migration</title>
        <meta name="description" content="Expert cloud services including migration, infrastructure, security, and database solutions. Transform your business with our cloud expertise." />
        <meta name="keywords" content="cloud services, cloud migration, AWS, Azure, GCP, cloud infrastructure, database solutions, cloud security" />
        <meta property="og: title" content="Cloud Services - Zion Tech Group" />,
        <meta property="og: description" content="Expert cloud solutions and migration services" />,
        <meta property="og: type" content="website" />,
        <meta name="twitter: card" content="summary_large_image" />,
        <meta name="twitter: title" content="Cloud Services - Zion Tech Group" />,
        <meta name="twitter: description" content="Expert cloud solutions and migration services" />,
      </Helmet>
                {/* Hero Section */}
                <section className="relative py-20 px-4 sm:px-6 lg:px-8"></section>
        </section>< className="$2 />
          </div><div className="text-center"></div>
            </div><h1 className="text-4xl md:text-6xl font-bold text-white mb-6"></h1>
              </h1><span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent"></span>
                Cloud Services
              </span>
              <br />
              <span className="text-white">Solutions</span>
                </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">Transform your business with our comprehensive cloud services.</p>
              From migration to management, we provide end-to-end cloud solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center"></div>
              </div><button className="bg-gradient-to-r from-purple-500 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-purple-600 hover:to-blue-700 transition-all duration-300 flex items-center"></button>
                Get Started
                </button><ArrowRight className="ml-2 h-5 w-5" />
              </button>
              <button className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover: bg-white hover:text-gray-900 transition-all duration-300">,</button>
                Learn More;
              </button>
                </div>
          </div>
                </div>

      </section>
                {/* Services Section */}
                <section className="py-20 px-4 sm:px-6 lg:px-8"></section>
        </section>< className="$2 />
          </div><div className="text-center mb-16"></div>
            </div><h2 className="text-3xl md:text-4xl font-bold text-white mb-4"></h2>
              Our Cloud Services
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">Comprehensive cloud solutions designed to accelerate your digital transformation.</p>
                </p>
          </div>

          <div className="grid md: grid-cols-2 lg:grid-cols-4 gap-8">,</div>
                {services.map((service, index) => (
              </div><div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all duration-300"></div>
                </div><div className="flex items-center mb-4"></div>
                  </div><div className="bg-purple-500 p-3 rounded-lg"></div>
                    </div><service.icon className="h-6 w-6 text-white" />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-white mb-3"></h3>
                {service.title}
                </h3>
                <p className="text-gray-300 mb-4"></p>
                {service.description</p>}
                </p>
                <ul className="space-y-2"></ul>
                {service.features.map((feature, featureIndex) => (
                    </ul><li key={featureIndex} className="flex items-center text-sm text-gray-300"></li>
                      </li><CheckCircle className="h-4 w-4 text-green-400 mr-2 flex-shrink-0" />
                {feature}
                </li>
                  ))}
                </ul>
                </div>
            ))}
                </div>

'use client'
import React from 'react';
import { Helmet  } from 'react-helmet-async';
import { Cloud, Server, Database, Shield, Zap, CheckCircle, ArrowRight  } from 'lucide-react';const CloudServicesPage: React.FC  = () => {
const features = [
    {
      icon: Shield,
      title: 'Secure Cloud Services',
      description: 'Comprehensive cloud services with enterprise-grade security and reliability'
    },
    {
      icon: Zap,
      title: 'High Performance',
      description: 'Lightning-fast cloud services with optimized performance and scalability'
    },
    {
      icon: Brain,
      title: 'AI-Powered Management',
      description: 'Intelligent cloud management powered by advanced AI technology'
    },
    {
      icon: Globe,
      title: 'Global Deployment',
      description: 'Worldwide cloud services deployment and support'
    }
  ]
  const benefits = [
'Advanced cloud technology integration',
    'Real-time monitoring and analytics',
    'Enterprise-grade security and compliance',
    'Scalable and flexible cloud solutions',
    '24/7 technical support',
    'Easy integration with existing systems',
    'Cost-effective pricing plans',
    'Proven track record of success'
  ]
  return (
    <React.Fragment></React.Fragment>
      <Helmet></Helmet>
            </div>
                </div>
        </section>
                {/* Features Section */}
                <section className="py-20 px-4 sm:px-6 lg:px-8"></section>
        <div className="max-w-7xl mx-auto"></div>
          <div className="text-center mb-16"></div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4"></h2>
              Why Choose Our Cloud Services?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto"></p>
              Our cloud solutions deliver unmatched performance, security, and scalability.
            </p>
                </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"></div>
                {features.map((feature, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300"></div>
                <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-600 rounded-lg mb-4"></div>
                  <feature.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3"></h3>
                {feature.title}
                </h3>
                <p className="text-gray-300"></p>
                {feature.description}
                </p>
                </div>
            ))}
                </div>
                </div>
      </section>
                {/* Benefits Section */}
                <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5"></section>
        <div className="max-w-7xl mx-auto"></div>
          <div className="text-center mb-16"></div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4"></h2>
              Key Benefits
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto"></p>
              Experience the power of our cloud solutions for your business.
            </p>
                </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6"></div>
<title>Cloud Services | Zion Tech Group
        <meta name="description" content="Professional Cloud Services by Zion Tech Group. Advanced AI and IT solutions for your business." />
        <meta name="keywords" content="cloud services, cloud computing, IT services, Zion Tech Group, cloud solutions" />
      <div className="container mx-auto px-4 py-16"></div>
        <div className="text-center mb-16"></div>
          <h1 className="text-5xl font-bold text-white mb-6">Cloud Services
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto"></p>
            Transform your business with our advanced cloud services. 
            Powered by cutting-edge AI technology and industry expertise.
          <p className="text-xl text-gray-300 max-w-3xl mx-auto"></p>
            Our cloud services deliver unmatched performance, security, and scalability.
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16"></div>
                {features.map((feature, index) => (
            <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center hover:bg-white/20 transition-all duration-300"></div>
              <feature.icon className="h-12 w-12 text-purple-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-white mb-3"></h3>
                {feature.title}
                <p className="text-gray-300"></p>
                {feature.description}
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 mb-16"></div>
          <h2 className="text-3xl font-bold text-white text-center mb-8"></h2>
            Why Choose Our Cloud Services?
          <div className="grid md:grid-cols-2 gap-6"></div>
                {benefits.map((benefit, index) => (
              <div key={index} className="flex items-center space-x-3"></div>
                <CheckCircle className="h-6 w-6 text-green-400 flex-shrink-0" />
                <span className="text-gray-300"></span>
                {benefit}
            ))}
        {/* Services Section */}
                <section className="py-20 px-4"></section>
          <div className="max-w-7xl mx-auto"></div>
            <div className="text-center mb-16"></div>
              <h2 className="text-3xl font-bold text-white mb-6">Our Cloud Services
              <p className="text-xl text-gray-300 max-w-3xl mx-auto"></p>
                Comprehensive cloud solutions designed to accelerate your digital transformation.
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"></div>
                {services.map((service, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300 group"></div>
                  <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg mb-6"></div>
                    <service.icon className="w-8 h-8 text-white" />
                  <h3 className="text-xl font-bold text-white mb-4 group-hover:text-purple-400 transition-colors"></h3>
                {service.title}
                <p className="text-gray-300 mb-6"></p>
                {service.description}
                <ul className="space-y-2"></ul>
                {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center gap-2 text-gray-300 text-sm"></li>
                        <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                {feature}
                    ))}
              ))}
        {/* Benefits Section */}
                <section className="py-20 px-4 bg-white/5"></section>
          <div className="max-w-7xl mx-auto"></div>
            <div className="text-center mb-16"></div>
              <h2 className="text-3xl font-bold text-white mb-6">Why Choose Our Cloud Services?
              <p className="text-xl text-gray-300 max-w-3xl mx-auto"></p>
                Experience the benefits of cloud computing with our expert guidance and support.
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"></div>
                {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center gap-3"></div>
                  <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0" />
                  <span className="text-gray-300 text-lg"></span>
                {benefit}
              ))}
        {/* CTA Section */}
                <section className="py-20 px-4"></section>
          <div className="max-w-4xl mx-auto text-center"></div>
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-12 border border-white/20"></div>
              <h2 className="text-3xl font-bold text-white mb-6"></h2>
                Ready to Move to the Cloud?
              <p className="text-xl text-gray-300 mb-8"></p>
                Let our experts help you plan and execute your cloud migration strategy.
              <div className="flex flex-col sm:flex-row gap-4 justify-center"></div>
                <button className="bg-gradient-to-r from-purple-500 to-blue-500 text-white px-8 py-4 rounded-lg font-semibold hover:from-purple-600 hover:to-blue-600 transition-all duration-300 transform hover:scale-105">Start Your Cloud Journey
                <button className="border border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300">Schedule Consultation
  )
}
export default CloudServicesPage</div>
                </div></div>
                </div></div>
                </div></div>
                </div></div>
                </div></div>
                </div></div>
                </div></div>
                </div></div>
                </div></div>
                </span></span>
                </button></button>
                </p></p>
                </p></p>
                </p></p>
                </p></h1>
                </h2></h2>
                </h2></h2>
                </h3></h3>
                </ul></li>
                </section></section>
                </section>
