'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';

import {CheckCircle, ArrowRight, Phone, Mail, MapPin, Zap, Shield, Brain, Globe, Cloud, Server, Database, Lock} from 'lucide-react';

const CloudServicesPage: React.FC = () => {
  const services = [
    {
      icon: Cloud,
      title: 'Cloud Migration',
      description: 'Seamlessly migrate your infrastructure to the cloud with zero downtime and maximum security.',
      features: ['AWS, Azure, GCP expertise', 'Zero-downtime migration', 'Cost optimization', 'Security compliance']},
    {icon: Server},
    {
      icon: Server,
      title: 'Cloud Infrastructure',
      description: 'Design and deploy scalable, secure, and cost-effective cloud infrastructure solutions.',
      features: ['Auto-scaling', 'Load balancing', 'High availability', 'Disaster recovery']},
    {icon: Database,
      title: 'Database Solutions',
      description: 'Managed database services with automated backups, monitoring, and optimization.',
      features: ['MySQL, PostgreSQL, MongoDB', 'Automated backups', 'Performance tuning', '24/7 monitoring']},
    {icon: Shield,
      title: 'Cloud Security'}];
  const benefits = [
    },
    {
      icon: Shield,
      title: 'Cloud Security'}
  ];;
  const benefits = [;
  ];
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
        'Up to 5 users'
      ]},
    {name: 'Professional'},
    {
      icon: Globe,
      title: 'Global Reach',
      description: 'Worldwide deployment and support for international businesses'}
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
      popular: true},
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
      ]}]
  return (<div className="min-h-screenbg-gradient-to-brfrom-slate-900via-purple-900 to-slate-900">
      <Helmet />
    }

  ]
  return (

    <div className="min-h-screenbg-gradient-to-brfrom-slate-900via-purple-900 to-slate-900">
      <Helmet>
        <title>Cloud Services - Zion Tech Group | Cloud Solutions & Migration</title>
      </div><Helmet>
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

      {/* Hero Section */} <section className="relativepy-20px-4sm: px-6 lg:px-8">,</section>
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-4xlmd:text-6xlfont-bold text-white mb-6">,</h1>
              <span className="bg-gradient-to-rfrom-purple-400to-blue-400bg-clip-text text-transparent">Cloud Services;</span>
              </span>
              <br />
              <span className="text-white">Solutions</span>
            </h1>
            <p className="text-xltext-gray-300mb-8max-w-3xl mx-auto">Transform your business with our comprehensive cloud services.</p>
              From migration to management, we provide end-to-end cloud solutions.
            </p>
            <div className="flexflex-colsm:flex-row gap-4 justify-center">,</div>
              <button className="bg-gradient-to-rfrom-purple-500to-blue-600text-white px-8 py-3 rounded-lg font-semibold hover: from-purple-600 hover:to-blue-700 transition-all duration-300 flex items-center">,</button>
                Get Started;
                <ArrowRight className="ml-2h-5w-5" />
              </button>
              <button className="borderborder-whitetext-whitepx-8 py-3 rounded-lg font-semibold hover: bg-white hover:text-gray-900 transition-all duration-300">,</button>
                Learn More;
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */} <section className="py-20px-4sm:px-6 lg:px-8">,<section>
        <div>
          <div>
            <h2>,</h2>
              Our Cloud Services;
            </h2>
            <p className="text-xltext-gray-300max-w-3xlmx-auto">Comprehensive cloud solutions designed to accelerate your digital transformation.</p>
          </div>

          <div className="gridmd:grid-cols-2lg:grid-cols-4 gap-8">,</div>
            {services.map((service, index) => (
              <div key={index}className="bg-white/10backdrop-blur-smrounded-xlp-6 hover: bg-white/20 transition-all duration-300">,</div>
                <div className="flexitems-centermb-4">
                  <div className="bg-purple-500p-3rounded-lg">
                    <service.icon className="h-6w-6text-white" />
                  </div>
                </div>
                <h3 className="text-xlfont-boldtext-whitemb-3">{service.title}</h3>
                <p className="text-gray-300mb-4">{service.description</p>}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex}className="flexitems-centertext-smtext-gray-300">
                      <CheckCircle className="h-4w-4text-green-400mr-2 flex-shrink-0" />
                      {feature} </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */} <section className="py-20px-4sm:px-6 lg:px-8 bg-white/5">,<section>
        <div>
          <div>
            <h2>,</h2>
              Why Choose Our Cloud Services?
            </h2>
            <p className="text-xltext-gray-300max-w-3xlmx-auto">Experience the benefits of working with cloud experts who understand your business needs.</p>
          </div>

          <div className="gridmd:grid-cols-2lg:grid-cols-4 gap-8">,</div>
            {benefits.map((benefit, index) => (
              <div key={index}className="text-center">
                <div className="bg-gradient-to-rfrom-purple-500to-blue-600w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="h-8w-8text-white" />
                </div>
                <p className="text-whitefont-medium">{benefit</p>}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */} <section className="py-20px-4sm:px-6 lg:px-8">,<section>
        <div>
          <div>
            <h2>,</h2>
              Flexible Pricing Plans;
            </h2>
            <p className="text-xltext-gray-300max-w-3xlmx-auto">Choose the plan that best fits your business needs and budget.</p>
          </div>

          <div className="gridmd:grid-cols-3gap-8">,</div>
            {pricing.map((plan, index) => (
              <div key={index}className={`bg-white/10 backdrop-blur-sm rounded-xl p-8 relative ${plan.popular ? 'ring-2 ring-purple-500' : ''}`}>{plan.popular && (</div>
                  <div className="absolute-top-4left-1/2transform -translate-x-1/2">
                    <span className="bg-gradient-to-rfrom-purple-500to-blue-600text-white px-4 py-2 rounded-full text-sm font-medium">Most Popular;</span>
                    </span>
                  </div>
                )} <div className="text-centermb-8">
                  <h3 className="text-2xlfont-boldtext-whitemb-2">{plan.name}</h3>
                  <div className="text-4xl font-boldtext-whitemb-2">{plan.price</div>} <span className="text-lgtext-gray-300font-normal">/{plan.period</span>}</span>
                  </div>
                  <p className="text-gray-300">{plan.description</p>}</p>
                </div>
                <ul className="space-y-4mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex}className="flexitems-centertext-gray-300">
                      <CheckCircle className="h-5w-5text-green-400mr-3 flex-shrink-0" />
                      {feature} </li>
                  ))}
                </ul>
                <button className={`w-full py-3 rounded-lg font-semibold transition-all duration-300 ${
                  plan.popular;
                    ? 'bg-gradient-to-r from-purple-500 to-blue-600 text-white hover: from-purple-600 hover:to-blue-700',
                    : 'bg-white/20 text-white hover: bg-white/30'}`}>Get Started;</button>
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */} <section className="py-20px-4sm:px-6 lg:px-8">,</section>
        <div className="max-w-4xlmx-autotext-center">
          <h2 className="text-3xlmd:text-4xl font-bold text-white mb-6">Ready to Transform Your Business with Cloud?</h2>
          <p className="text-xltext-purple-100mb-8">Contact our cloud experts to discuss your needs and get a customized solution.</p>
          <div className="flexflex-colsm:flex-row gap-4 justify-center">,</div>
            <button className="bg-whitetext-purple-600px-8py-3 rounded-lg font-semibold hover: bg-gray-100 transition-all duration-300 flex items-center justify-center">,</button>
              <Phone className="mr-2h-5w-5" />
              Call Now;
            </button>
            <button className="borderborder-whitetext-whitepx-8 py-3 rounded-lg font-semibold hover: bg-white hover:text-purple-600 transition-all duration-300 flex items-center justify-center">,</button>
              <Mail className="mr-2h-5w-5" />
              Email Us;
            </button>
          </div>
        </div>
      </section>
    </div>

  )};

export default CloudServicesPage;
  </button>
  </button>
  </h1>
  </div>

'use client'
import React from 'react'
import { Helmet } from 'react-helmet-async'
import { Cloud, Server, Database, Shield, Zap, CheckCircle, ArrowRight } from 'lucide-react'
const CloudServicesPage: React.FC = () => {
const features = [
    {
      icon: Shield,
      title: 'Secure Cloud Services',
      description: 'Comprehensive cloud services with enterprise-grade security and reliability'},
    {
      icon: Zap,
      title: 'High Performance',
      description: 'Lightning-fast cloud services with optimized performance and scalability'},
    {
      icon: Brain,
      title: 'AI-Powered Management',
      description: 'Intelligent cloud management powered by advanced AI technology'},
    {
      icon: Globe,
      title: 'Global Deployment',
      description: 'Worldwide cloud services deployment and support'}
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
        <title>Cloud Services | Zion Tech Group</title>
        <meta name="description" content="Professional cloud services by Zion Tech Group. Advanced cloud solutions for your business." />
        <meta name="keywords" content="cloud services, cloud infrastructure, cloud solutions, Zion Tech Group" />
      </Helmet>

      <Navigation />

      {/* Hero Section */}
      <section$1>
        <div$2>
          <div className="text-center">
            <h1 className="text-4xlmd:text-6xlfont-boldtext-white mb-6">
              <span className="bg-gradient-to-rfrom-purple-400to-blue-400bg-clip-text text-transparent">
                Cloud
              </span>
              <br />
              <span className="text-white">Services</span>
            </h1>
            <p className="text-xltext-gray-300mb-8max-w-3xl mx-auto">
              Transform your business with our advanced cloud solutions. 
              Powered by cutting-edge technology and industry expertise.
            </p>
            <div className="flexflex-colsm:flex-rowgap-4 justify-center">
              <button className="bg-gradient-to-rfrom-purple-500to-blue-600text-white px-8 py-3 rounded-lg font-semibold hover:from-purple-600 hover:to-blue-700 transition-all duration-300 flex items-center">
                Get Started
                <ArrowRight className="ml-2h-5w-5" />
              </button>
              <button className="borderborder-whitetext-whitepx-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300">
                Learn More
              </button>
            </div>
        </div>
      </section>

        {/* Features Section */}
        <section className="py-16px-4">
          <div className="max-w-7xl mx-auto">
            <div className="gridgrid-cols-1md:grid-cols-2lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-white/10backdrop-blur-smrounded-xlp-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
                  <div className="flexitems-centerjustify-centerw-12 h-12 bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg mb-4">
                    <feature.icon className="w-6h-6text-white" />
                  </div>
                  <h3 className="text-xlfont-semiboldtext-whitemb-3">{feature.title}</h3>
                  <p className="text-gray-300">{feature.description}</p>
                </div>
              ))}
            </div>
        </div>
      </section>

        {/* Benefits Section */}
        <section className="py-16px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xlfont-boldtext-whitemb-12 text-center">Why Choose Our Cloud Services?</h2>
            <div className="gridgrid-cols-1md:grid-cols-2gap-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="flexitems-centerspace-x-3">
                  <CheckCircle className="w-6h-6text-green-400flex-shrink-0" />
                  <span className="text-gray-300text-lg">{benefit}</span>
                </div>
              ))}
            </div>
        </div>
      </section>

        {/* CTA Section */}
        <section className="py-20px-4sm:px-6lg:px-8">
          <div className="max-w-4xlmx-autotext-center">
            <div className="bg-gradient-to-rfrom-purple-600to-blue-600rounded-2xl p-8 md:p-12">
              <h2 className="text-3xlmd:text-4xl font-boldtext-white mb-4">
                Ready to Get Started?
              </h2>
              <p className="text-xltext-purple-100mb-8">
                Contact our experts to discuss your cloud needs and get a customized solution.
              </p>
              <div className="flexflex-colsm:flex-rowgap-4 justify-center">
                <button className="bg-whitetext-purple-600px-8py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 flex items-center justify-center">
                  <Phone className="w-5h-5mr-2" />
                  Call Us
                </button>
                <button className="bg-transparentborder-2border-whitetext-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-all duration-300 flex items-center justify-center">
                  <Mail className="w-5h-5mr-2" />
                  Email Us
                </button>
              </div>
            </div>
        </div>
      </section>
      </div>
    </>
      {/* Features Section */}
      <section className="py-20px-4sm:px-6lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xlmd:text-4xl font-boldtext-white mb-4">
              Why Choose Our Page?
            </h2>
            <p className="text-xltext-gray-300max-w-3xlmx-auto">
              Our cloud solutions deliver unmatched performance, security, and scalability.
            </p>
          </div>

          <div className="gridgrid-cols-1md:grid-cols-2lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white/10backdrop-blur-smrounded-xlp-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
                <div className="flexitems-centerjustify-centerw-12 h-12 bg-gradient-to-r from-purple-500 to-blue-600 rounded-lg mb-4">
                  <feature.icon className="h-6w-6text-white" />
                </div>
                <h3 className="text-xlfont-semiboldtext-whitemb-3">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20px-4sm:px-6lg:px-8 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xlmd:text-4xl font-boldtext-white mb-4">
              Key Benefits
            </h2>
            <p className="text-xltext-gray-300max-w-3xlmx-auto">
              Experience the power of our cloud solutions for your business.
            </p>
          </div>

          <div className="gridgrid-cols-1md:grid-cols-2gap-6">
<title>Cloud Services | Zion Tech Group
        <meta name="description" content="Professional Cloud Services by Zion Tech Group. Advanced AI and IT solutions for your business." />
        <meta name="keywords" content="cloud services, cloud computing, IT services, Zion Tech Group, cloud solutions" />
      <div className="containermx-autopx-4py-16">
        <div className="text-center mb-16">
          <h1 className="text-5xlfont-boldtext-whitemb-6">Cloud Services
          <p className="text-xltext-gray-300mb-8max-w-3xl mx-auto">
            Transform your business with our advanced cloud services. 
            Powered by cutting-edge AI technology and industry expertise.
          <p className="text-xltext-gray-300max-w-3xlmx-auto">
            Our cloud services deliver unmatched performance, security, and scalability.
        <div className="gridmd:grid-cols-2lg:grid-cols-4gap-8 mb-16">
          {features.map((feature, index) => (
            <div key={index} className="bg-white/10backdrop-blur-smrounded-xlp-6 text-center hover:bg-white/20 transition-all duration-300">
              <feature.icon className="h-12w-12text-purple-400mx-auto mb-4" />
              <h3 className="text-xlfont-semiboldtext-whitemb-3">{feature.title}
              <p className="text-gray-300">{feature.description}
        <div className="bg-white/10backdrop-blur-smrounded-2xlp-8 mb-16">
          <h2 className="text-3xlfont-boldtext-whitetext-center mb-8">
            Why Choose Our Cloud Services?
          <div className="gridmd:grid-cols-2gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="flexitems-centerspace-x-3">
                <CheckCircle className="h-6w-6text-green-400flex-shrink-0" />
                <span className="text-gray-300">{benefit}
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20px-4sm:px-6lg:px-8">
        <div className="max-w-4xlmx-autotext-center">
          <div className="bg-gradient-to-rfrom-purple-600to-blue-600rounded-2xl p-8 md:p-12">
            <h2 className="text-3xlmd:text-4xl font-boldtext-white mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-xltext-purple-100mb-8">
              Contact our experts to discuss your page needs and get a customized solution.
            </p>
            <div className="flexflex-colsm:flex-rowgap-4 justify-center">
              <button className="bg-whitetext-purple-600px-8py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 flex items-center justify-center">
                <Phone className="mr-2h-5w-5" />
                Call Now
              </button>
              <button className="borderborder-whitetext-whitepx-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-all duration-300 flex items-center justify-center">
                <Mail className="mr-2h-5w-5" />
                Email Us
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )};

export default PagePage;
