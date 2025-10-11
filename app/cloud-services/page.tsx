<<<<<<< HEAD
'use client';
import React from 'react';
import {Helmet}}from 'react-helmet-async';

import {CheckCircle, ArrowRight, Phone, Mail, MapPin, Zap, Shield, Brain, Globe, Cloud, Server, Database, Lock}}from 'lucide-react';

const CloudServicesPage: React.FC = () => {,
=======
'use client'
import React from 'react'
import { Helmet } from 'react-helmet-async'
import { CheckCircle, ArrowRight, Phone, Mail, MapPin, Zap, Shield, Brain, Globe, Cloud, Server, Database, Lock } from 'lucide-react'
const CloudServicesPage: React.FC = () => {
>>>>>>> origin/main
  const services = [
    {
      icon: Cloud,
      title: 'Cloud Migration',
      description: 'Seamlessly migrate your infrastructure to the cloud with zero downtime and maximum security.',
<<<<<<< HEAD
<<<<<<< HEAD
      features: ['AWS, Azure, GCP expertise', 'Zero-downtime migration', 'Cost optimization', 'Security compliance']},
    {icon: Server,
=======
      features: ['AWS, Azure, GCP expertise', 'Zero-downtime migration', 'Cost optimization', 'Security compliance'];
=======
      features: ['AWS, Azure, GCP expertise', 'Zero-downtime migration', 'Cost optimization', 'Security compliance'],
>>>>>>> origin/main
    },
    {
      icon: Server,
>>>>>>> origin/main
      title: 'Cloud Infrastructure',
      description: 'Design and deploy scalable, secure, and cost-effective cloud infrastructure solutions.',
<<<<<<< HEAD
      features: ['Auto-scaling', 'Load balancing', 'High availability', 'Disaster recovery']},
    {icon: Database,
      title: 'Database Solutions',
      description: 'Managed database services with automated backups, monitoring, and optimization.',
<<<<<<< HEAD
      features: ['MySQL, PostgreSQL, MongoDB', 'Automated backups', 'Performance tuning', '24/7 monitoring']},
    {icon: Shield,
      title: 'Cloud Security',}];
  const benefits = [
=======
      features: ['MySQL, PostgreSQL, MongoDB', 'Automated backups', 'Performance tuning', '24/7 monitoring']
=======
      features: ['Auto-scaling', 'Load balancing', 'High availability', 'Disaster recovery'],
    },
    {
      icon: Database,
      title: 'Database Solutions',
      description: 'Managed database services with automated backups, monitoring, and optimization.',
      features: ['MySQL, PostgreSQL, MongoDB', 'Automated backups', 'Performance tuning', '24/7 monitoring'],
>>>>>>> origin/main
    },
    {
      icon: Shield,
      title: 'Cloud Security',
    }
<<<<<<< HEAD
  ];];];
  const benefits = [;
>>>>>>> origin/main
  ];
=======
  ]
  const benefits = [
  ]
>>>>>>> origin/main
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
<<<<<<< HEAD
<<<<<<< HEAD
        'Up to 5 users'
      ]},
    {name: 'Professional',
=======
        'Up to 5 users';
      ];
=======
        'Up to 5 users'
      ],
>>>>>>> origin/main
    },
    {
<<<<<<< HEAD
      icon: Globe,
      title: 'Global Reach',
      description: 'Worldwide deployment and support for international businesses'
    }
  ];

  const benefits = [
    'Advanced AI technology integration',
    'Real-time processing and analytics',
    'Enterprise-grade security and compliance',
    'Scalable and flexible solutions',
    '24/7 technical support',
    'Easy integration with existing systems',
    'Cost-effective pricing plans',
    'Proven track record of success'
  ];

=======
      name: 'Professional',
>>>>>>> origin/main
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
<<<<<<< HEAD
<<<<<<< HEAD
      ]}]
  return(<div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">)</div>
      <Helmet />
=======
      ]
=======
      ],
>>>>>>> origin/main
    }

  ]
>>>>>>> origin/main
  return (

    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
<<<<<<< HEAD
      <Helmet>
>>>>>>> origin/main
        <title>Cloud Services - Zion Tech Group | Cloud Solutions & Migration</title>
=======
      </div><Helmet>
        </Helmet><title>Cloud Services - Zion Tech Group | Cloud Solutions & Migration</title>
>>>>>>> origin/main
        <meta name="description" content="Expert cloud services including migration, infrastructure, security, and database solutions. Transform your business with our cloud expertise." />
        <meta name="keywords" content="cloud services, cloud migration, AWS, Azure, GCP, cloud infrastructure, database solutions, cloud security" />
        <meta property="og: title" content="Cloud Services - Zion Tech Group" />,
        <meta property="og: description" content="Expert cloud solutions and migration services" />,
        <meta property="og: type" content="website" />,
        <meta name="twitter: card" content="summary_large_image" />,
        <meta name="twitter: title" content="Cloud Services - Zion Tech Group" />,
        <meta name="twitter: description" content="Expert cloud solutions and migration services" />,
      </Helmet>

<<<<<<< HEAD
      {/* Hero Section */} <section className="relative py-20 px-4 sm: px-6 lg:px-8">,</section>
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-4xl md: text-6xl font-bold text-white mb-6">,</h1>
              <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">Cloud Services;</span>
=======
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        </section>< className="$2 />
          </div><div className="text-center">
            </div><h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              </h1><span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                Cloud Services
>>>>>>> origin/main
              </span>
              <br />
              <span className="text-white">Solutions</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">Transform your business with our comprehensive cloud services.</p>
              From migration to management, we provide end-to-end cloud solutions.
            </p>
<<<<<<< HEAD
            <div className="flex flex-col sm: flex-row gap-4 justify-center">,</div>
              <button className="bg-gradient-to-r from-purple-500 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover: from-purple-600 hover:to-blue-700 transition-all duration-300 flex items-center">,</button>
                Get Started;
                <ArrowRight className="ml-2 h-5 w-5" />
=======
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              </div><button className="bg-gradient-to-r from-purple-500 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-purple-600 hover:to-blue-700 transition-all duration-300 flex items-center">
                Get Started
                </button><ArrowRight className="ml-2 h-5 w-5" />
>>>>>>> origin/main
              </button>
              <button className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover: bg-white hover:text-gray-900 transition-all duration-300">,</button>
                Learn More;
              </button>
            </div>
          </div>
        </div>

      </section>

<<<<<<< HEAD
      {/* Services Section */} <section className="py-20 px-4 sm: px-6 lg:px-8">,</section>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md: text-4xl font-bold text-white mb-4">,</h2>
              Our Cloud Services;
=======
      {/* Services Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        </section>< className="$2 />
          </div><div className="text-center mb-16">
            </div><h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Our Cloud Services
>>>>>>> origin/main
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">Comprehensive cloud solutions designed to accelerate your digital transformation.</p>
            </p>
          </div>

          <div className="grid md: grid-cols-2 lg:grid-cols-4 gap-8">,</div>
            {services.map((service, index) => (
<<<<<<< HEAD
              <div key={index}className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover: bg-white/20 transition-all duration-300">,</div>
                <div className="flex items-center mb-4">
                  <div className="bg-purple-500 p-3 rounded-lg">
                    <service.icon className="h-6 w-6 text-white" />
=======
              </div><div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all duration-300">
                </div><div className="flex items-center mb-4">
                  </div><div className="bg-purple-500 p-3 rounded-lg">
                    </div><service.icon className="h-6 w-6 text-white" />
>>>>>>> origin/main
                  </div>
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
                <p className="text-gray-300 mb-4">{service.description</p>}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
<<<<<<< HEAD
                    <li key={featureIndex}className="flex items-center text-sm text-gray-300">
                      <CheckCircle className="h-4 w-4 text-green-400 mr-2 flex-shrink-0" />
                      {feature} </li>
=======
                    </ul><li key={featureIndex} className="flex items-center text-sm text-gray-300">
                      </li><CheckCircle className="h-4 w-4 text-green-400 mr-2 flex-shrink-0" />
                      {feature}
                    </li>
>>>>>>> origin/main
                  ))}
                </ul>
              </div>
            ))}
          </div>
<<<<<<< HEAD
        </div>
      </section>

      {/* Benefits Section */} <section className="py-20 px-4 sm: px-6 lg:px-8 bg-white/5">,</section>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md: text-4xl font-bold text-white mb-4">,</h2>
              Why Choose Our Cloud Services?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">Experience the benefits of working with cloud experts who understand your business needs.</p>
            </p>
          </div>

          <div className="grid md: grid-cols-2 lg:grid-cols-4 gap-8">,</div>
            {benefits.map((benefit, index) => (
              <div key={index}className="text-center">
                <div className="bg-gradient-to-r from-purple-500 to-blue-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="h-8 w-8 text-white" />
                </div>
                <p className="text-white font-medium">{benefit</p>}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */} <section className="py-20 px-4 sm: px-6 lg:px-8">,</section>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md: text-4xl font-bold text-white mb-4">,</h2>
              Flexible Pricing Plans;
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">Choose the plan that best fits your business needs and budget.</p>
            </p>
          </div>

          <div className="grid md: grid-cols-3 gap-8">,</div>
            {pricing.map((plan, index) => (
              <div key={index}className={`bg-white/10 backdrop-blur-sm rounded-xl p-8 relative ${plan.popular ? 'ring-2 ring-purple-500' : ''}`}>{plan.popular && (</div>
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-purple-500 to-blue-600 text-white px-4 py-2 rounded-full text-sm font-medium">Most Popular;</span>
                    </span>
                  </div>
                )} <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <div className="text-4xl font-bold text-white mb-2">{plan.price</div>} <span className="text-lg text-gray-300 font-normal">/{plan.period</span>}</span>
                  </div>
                  <p className="text-gray-300">{plan.description</p>}</p>
                </div>
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex}className="flex items-center text-gray-300">
                      <CheckCircle className="h-5 w-5 text-green-400 mr-3 flex-shrink-0" />
                      {feature} </li>
                  ))}
                </ul>
                <button className={`w-full py-3 rounded-lg font-semibold transition-all duration-300 ${
                  plan.popular;
                    ? 'bg-gradient-to-r from-purple-500 to-blue-600 text-white hover: from-purple-600 hover:to-blue-700',
                    : 'bg-white/20 text-white hover: bg-white/30',}`}>Get Started;</button>
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */} <section className="py-20 px-4 sm: px-6 lg:px-8">,</section>
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md: text-4xl font-bold text-white mb-6">,</h2>
            Ready to Transform Your Business with Cloud?
          </h2>
          <p className="text-xl text-purple-100 mb-8">Contact our cloud experts to discuss your needs and get a customized solution.</p>
          </p>
          <div className="flex flex-col sm: flex-row gap-4 justify-center">,</div>
            <button className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover: bg-gray-100 transition-all duration-300 flex items-center justify-center">,</button>
              <Phone className="mr-2 h-5 w-5" />
              Call Now;
            </button>
            <button className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover: bg-white hover:text-purple-600 transition-all duration-300 flex items-center justify-center">,</button>
              <Mail className="mr-2 h-5 w-5" />
              Email Us;
            </button>
          </div>
        </div>
      </section>
    </div>

  ),
};

export default CloudServicesPage;
  </button>
  </button>
  </h1>
  </div>
<<<<<<< HEAD
=======
>>>>>>> origin/main
=======
>>>>>>> main
=======

'use client'
import React from 'react'
import { Helmet } from 'react-helmet-async'
import { Cloud, Server, Database, Shield, Zap, CheckCircle, ArrowRight } from 'lucide-react'
const CloudServicesPage: React.FC = () => {
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
    <React.Fragment>
      <Helmet>
<<<<<<< HEAD
        <title>Cloud Services | Zion Tech Group</title>
        <meta name="description" content="Professional cloud services by Zion Tech Group. Advanced cloud solutions for your business." />
        <meta name="keywords" content="cloud services, cloud infrastructure, cloud solutions, Zion Tech Group" />
      </Helmet>

      <Navigation />

      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        </section>
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                Cloud
              </span>
              <br />
              <span className="text-white">Services</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Transform your business with our advanced cloud solutions. 
              Powered by cutting-edge technology and industry expertise.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-purple-500 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-purple-600 hover:to-blue-700 transition-all duration-300 flex items-center">
                Get Started
                <ArrowRight className="ml-2 h-5 w-5" />
              </button>
              <button className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300">
                Learn More
              </button>
>>>>>>> cursor/fix-errors-and-merge-to-main-9d11
            </div>
          </div>
        </section>

<<<<<<< HEAD
=======
<<<<<<< HEAD
        {/* Features Section */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
                  <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg mb-4">
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                  <p className="text-gray-300">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-12 text-center">Why Choose Our Cloud Services?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0" />
                  <span className="text-gray-300 text-lg">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-8 md:p-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Ready to Get Started?
              </h2>
              <p className="text-xl text-purple-100 mb-8">
                Contact our experts to discuss your cloud needs and get a customized solution.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 flex items-center justify-center">
                  <Phone className="w-5 h-5 mr-2" />
                  Call Us
                </button>
                <button className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-all duration-300 flex items-center justify-center">
                  <Mail className="w-5 h-5 mr-2" />
                  Email Us
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
=======
>>>>>>> origin/main
      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
<<<<<<< HEAD
              Why Choose Our Page?
=======
              Why Choose Our Cloud Services?
>>>>>>> origin/main
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our cloud solutions deliver unmatched performance, security, and scalability.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
                <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-600 rounded-lg mb-4">
                  <feature.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Key Benefits
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Experience the power of our cloud solutions for your business.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
=======
<title>Cloud Services | Zion Tech Group
        <meta name="description" content="Professional Cloud Services by Zion Tech Group. Advanced AI and IT solutions for your business." />
        <meta name="keywords" content="cloud services, cloud computing, IT services, Zion Tech Group, cloud solutions" />
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-white mb-6">Cloud Services
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Transform your business with our advanced cloud services. 
            Powered by cutting-edge AI technology and industry expertise.
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Our cloud services deliver unmatched performance, security, and scalability.
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {features.map((feature, index) => (
            <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center hover:bg-white/20 transition-all duration-300">
              <feature.icon className="h-12 w-12 text-purple-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-white mb-3">{feature.title}
              <p className="text-gray-300">{feature.description}
        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 mb-16">
          <h2 className="text-3xl font-bold text-white text-center mb-8">
            Why Choose Our Cloud Services?
          <div className="grid md:grid-cols-2 gap-6">
>>>>>>> origin/main
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-center space-x-3">
                <CheckCircle className="h-6 w-6 text-green-400 flex-shrink-0" />
                <span className="text-gray-300">{benefit}
            ))}
<<<<<<< HEAD
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-8 md:p-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-purple-100 mb-8">
              Contact our experts to discuss your page needs and get a customized solution.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 flex items-center justify-center">
                <Phone className="mr-2 h-5 w-5" />
                Call Now
              </button>
              <button className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-all duration-300 flex items-center justify-center">
                <Mail className="mr-2 h-5 w-5" />
                Email Us
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PagePage;
=======
        {/* Services Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-white mb-6">Our Cloud Services
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Comprehensive cloud solutions designed to accelerate your digital transformation.
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {services.map((service, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300 group">
                  <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg mb-6">
                    <service.icon className="w-8 h-8 text-white" />
                  <h3 className="text-xl font-bold text-white mb-4 group-hover:text-purple-400 transition-colors">
                    {service.title}
                  <p className="text-gray-300 mb-6">{service.description}
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center gap-2 text-gray-300 text-sm">
                        <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                        {feature}
                    ))}
              ))}
        {/* Benefits Section */}
        <section className="py-20 px-4 bg-white/5">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-white mb-6">Why Choose Our Cloud Services?
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Experience the benefits of cloud computing with our expert guidance and support.
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0" />
                  <span className="text-gray-300 text-lg">{benefit}
              ))}
        {/* CTA Section */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-12 border border-white/20">
              <h2 className="text-3xl font-bold text-white mb-6">
                Ready to Move to the Cloud?
              <p className="text-xl text-gray-300 mb-8">
                Let our experts help you plan and execute your cloud migration strategy.
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-gradient-to-r from-purple-500 to-blue-500 text-white px-8 py-4 rounded-lg font-semibold hover:from-purple-600 hover:to-blue-600 transition-all duration-300 transform hover:scale-105">Start Your Cloud Journey
                <button className="border border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300">Schedule Consultation
  )
}
export default CloudServicesPage</div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></span></span></button></button></p></p></p></p></p></p></p></h1></h2></h2></h2></h2></h3></h3></ul></li></section></section></section>
>>>>>>> origin/main
>>>>>>> origin/main
