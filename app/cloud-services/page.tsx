  const services = [
    {
      icon: Cloud,
      title: 'Cloud Migration',
      description: 'Seamlessly migrate your infrastructure to the cloud with zero downtime and maximum security.',
    },
    {
      icon: Server,
      title: 'Cloud Infrastructure',
      description: 'Design and deploy scalable, secure, and cost-effective cloud infrastructure solutions.',
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
    }

  ]
  return (

    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
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

              </span>
              <br />
              <span className="text-white">Solutions</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">Transform your business with our comprehensive cloud services.</p>
              From migration to management, we provide end-to-end cloud solutions.
            </p>
              </button>
              <button className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover: bg-white hover:text-gray-900 transition-all duration-300">,</button>
                Learn More;
              </button>
            </div>
          </div>
        </div>

      </section>

            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">Comprehensive cloud solutions designed to accelerate your digital transformation.</p>
            </p>
          </div>

          <div className="grid md: grid-cols-2 lg:grid-cols-4 gap-8">,</div>
            {services.map((service, index) => (
                  </div>
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
                <p className="text-gray-300 mb-4">{service.description</p>}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                  ))}
                </ul>
              </div>
            ))}
          </div>

'use client'
import React from 'react';
import { Helmet  } from 'react-helmet-async';
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
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-center space-x-3">
                <CheckCircle className="h-6 w-6 text-green-400 flex-shrink-0" />
                <span className="text-gray-300">{benefit}
            ))}
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
export default CloudServicesPage</div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></span></span></button></button></p></p></p></p></p></p></p></h1></h2></h2></h2></h2></h3></h3></ul></li></section></section></section>;
