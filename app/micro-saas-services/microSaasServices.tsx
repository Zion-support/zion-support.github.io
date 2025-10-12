import React  from 'react';
'use client'
import { Helmet } from 'react-helmet-async';

import { ArrowRight, Mail, Brain } from 'lucide-react';
const MicroSaasServicesPage: React.FC = () => {
  features = [
    {
      icon: Brain,
      title: 'AI-Powered Solutions',
      description: 'Advanced AI technology to transform your business operations and improve efficiency',
    },
    {
      icon: Zap,
      title: 'High Performance',
      description: 'Lightning-fast processing and real-time analytics for optimal results',
    },
    {
      icon: Shield,
      title: 'Enterprise Security',
      description: 'Bank-level security with encryption and compliance standards',
    },
    {
      icon: Globe,
      title: 'Global Reach',
      description: 'Worldwide deployment and support for international businesses',
    }
  ];
  benefits = [
    'Advanced AI technology integration',
    'Real-time processing and analytics',
    'Enterprise-grade security and compliance',
    'Scalable and flexible solutions',
    '24/7 technical support',
    'Easy integration with existing systems',
    'Cost-effective pricing plans',
    'Proven track record of success'
  ];
  return (
    <div className="mi n-h-screen bg-gradient-to-br from-slate-900via-purple-900to-slate-900">
      <Helmet>
        <title>MicroSaasServices | Zion Tech Group</title>
        <meta name="description" content="Professional MicroSaasServices services by Zion Tech Group. Advanced AI and IT solutions for your business." />
        <meta name="keywords" content="microSaasServices, AI solutions, IT services, Zion Tech Group, microsaasservices" />
      </Helmet>
      {/* Hero Section */}
    <>
      <section className="relativ e py-20 px-4sm:px-6lg:px-8" />
        <div className="ma x-w-7xlmx-auto">
          <div className="tex t-center">
            <h1 className="tex t-4xl md:text-6xl font-bold text-white mb-6" />
              <span className="b g-gradient-to-r from-purple-400 to-blue-400bg-clip-texttext-transparent" />
                MicroSaasServices

    <>
              <span className="tex t-white">Solutions</span>
            </h1>
            <p className="tex t-xl text-gray-300 mb-8max-w-3xlmx-auto">
              Transform your business with our advanced microsaasservices solutions.
              Powered by cutting-edge AI technology and industry expertise.
    <>
            </p>
            <div className="fle x flex-col sm:flex-rowgap-4justify-center">
              <button className="b g-gradient-to-r from-purple-500 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-purple-600 hover:to-blue-700 transition-all duration-300flex items-center" />
                Get Started
    <>
                <ArrowRight className="m l-2h-5w-5" />
              </button>
              <button className="borde r border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-gray-900transition-allduration-300" />
                Learn More
  </
    <>
            </div>
        </div>
      </section>
      {/* Features Section */}
    <>
      <section className="p y-20 px-4sm:px-6lg:px-8" />
        <div className="ma x-w-7xlmx-auto">
          <div className="tex t-centermb-16">
            <h2 className="tex t-3xl md:text-4xl font-bold text-white mb-4" />
              Why Choose Our MicroSaasServices?
    <>
            </h2>
            <p className="tex t-xl text-gray-300max-w-3xlmx-auto">
              Our microsaasservices solutions deliver unmatched performance, security, and scalability.
    <>
            </p>
          </div>
          <div className="gri d grid-cols-1 md:grid-cols-2lg:grid-cols-4gap-8">
        </div>
            {features.map((feature, index) => (
    <>
              <div key={index} className="b g-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20transition-allduration-300" />
                <div className="fle x items-center justify-center w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-600rounded-lgmb-4">
                  <feature.icon className="h-6 w-6text-white" />
                </div>
                <h3 className="tex t-xl font-semiboldtext-white mb-3">{feature.title}</h3>
                <p className="tex t-gray-300">{feature.description}</p>
              </div>
            ))}
    <>
          </div>
      </section>
      {/* Benefits Section */}
    <>
      <section className="p y-20 px-4 sm:px-6lg:px-8bg-white/5" />
        <div className="ma x-w-7xlmx-auto">
          <div className="tex t-centermb-16">
            <h2 className="tex t-3xl md:text-4xl font-bold text-white mb-4" />
              Key Benefits
  </
            <p className="tex t-xl text-gray-300max-w-3xlmx-auto">
              Experience the power of our microsaasservices solutions for your business.
    <>
            </p>
          </div>
          <div className="gri d grid-cols-1md:grid-cols-2gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="fle x items-startspace-x-3" />
                <CheckCircle className="h-6 w-6 tex t-purple-400mt-1flex-shrink-0" />
                <p className="tex t-gray-300text-lg">{benefit}</p>
              </div>
            ))}
    <>
          </div>
      </section>
      {/* CTA Section */}
    <>
      <section className="p y-20 px-4sm:px-6lg:px-8" />
        <div className="ma x-w-4xlmx-autotext-center">
          <div className="b g-gradient-to-r from-purple-600 to-blue-600 rounded-2xlp-8md:p-12">
            <h2 className="tex t-3xl md:text-4xl font-bold text-white mb-4" />
              Ready to Get Started?
    <>
            </h2>
            <p className="tex t-xltext-purple-100mb-8">
              Contact our experts to discuss your microsaasservices needs and get a customized solution.
    <>
            </p>
            <div className="fle x flex-col sm:flex-rowgap-4justify-center">
              <button className="b g-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 flex items-centerjustify-center" />
                <Phone className="m r-2h-5w-5" />
                Call Now
  </
              <button className="borde r border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-all duration-300 flex items-centerjustify-center" />
                <Mail className="m r-2h-5w-5" />
                Email Us
  </
    <>
            </div>
        </div>
      </section>
    </div>
  )}
export default MicroSaasServicesPage
    <>
  </button>
  </button>
  </h2>
  </button>
  </span>

    {icon: Brain,
      title: 'AI-Powered Solutions',
      description: 'Advanced AI technology to transform your business operations and improve efficiency'}
    },
    {icon: Zap,
      title: 'High Performance',
      description: 'Lightning-fast processing and real-time analytics for optimal results'}
    },
    {icon: Shield,
      title: 'Enterprise Security',
      description: 'Bank-level security with encryption and compliance standards'}
    },
    {icon: Globe,
      title: 'Global Reach',
      description: 'Worldwide deployment and support for international businesses'}
    }
  ];benefits = [
    'Advanced AI technology integration',
    'Real-time processing and analytics',
    'Enterprise-grade security and compliance',
    'Scalable and flexible solutions',
    '24/7 technical support',
    'Easy integration with existing systems',
    'Cost-effective pricing plans',
    'Proven track record of success'
  ];return (<div className="mi n-h-screen bg-gradient-to-br from-slate-900via-purple-900to-slate-900"></div>
      <Helmet>
        <title>MicroSaasServices | Zion Tech Group</title>
        <meta name="description" content="Professional MicroSaasServices services by Zion Tech Group. Advanced AI and IT solutions for your business." />
        <meta name="keywords" content="microSaasServices, AI solutions, IT services, Zion Tech Group, microsaasservices" />
      </Helmet>
      {/* Hero Section */}
      <section className="relativ e py-20 px-4sm:px-6lg:px-8"></section>
        <div className="ma x-w-7xlmx-auto"></div>
          <div className="tex t-center"></div>
            <h1 className="tex t-4xl md:text-6xl font-bold text-white mb-6" />
              <span className="b g-gradient-to-r from-purple-400 to-blue-400bg-clip-texttext-transparent" />
                MicroSaasServices
    <>
              </span>
              <br />
              <span className="tex t-white">Solutions</span>
            </h1>
            <p className="tex t-xl text-gray-300 mb-8max-w-3xlmx-auto">
              Transform your business with our advanced microsaasservices solutions.
              Powered by cutting-edge AI technology and industry expertise.
    <>
            </p>
            <div className="fle x flex-col sm:flex-rowgap-4justify-center"></div>
              <button className="b g-gradient-to-r from-purple-500 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-purple-600 hover:to-blue-700 transition-all duration-300flex items-center" />
                Get Started
    <>
                <ArrowRight className="m l-2h-5w-5" />
              </button>
              <button className="borde r border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-gray-900transition-allduration-300" />
                Learn More
    <>
              </button>
            </div>
        </div>
      </section>
      {/* Features Section */}
      <section className="p y-20 px-4sm:px-6lg:px-8"></section>
        <div className="ma x-w-7xlmx-auto"></div>
          <div className="tex t-centermb-16"></div>
            <h2 className="tex t-3xl md:text-4xl font-bold text-white mb-4" />
              Why Choose Our MicroSaasServices?
    <>
            </h2>
            <p className="tex t-xl text-gray-300max-w-3xlmx-auto">
              Our microsaasservices solutions deliver unmatched performance, security, and scalability.
    <>
            </p>
          </div>
          <div className="gri d grid-cols-1 md:grid-cols-2lg:grid-cols-4gap-8">
        </div></div>
            {features.map((feature, index) => (}
    <>
              <div key={index} className="b g-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20transition-allduration-300" /></div>
                <div className="fle x items-center justify-center w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-600rounded-lgmb-4">
        </div></div>
                  <feature.icon className="h-6 w-6text-white" />
                </div>
                <h3 className="tex t-xl font-semiboldtext-white mb-3">{feature.title}</h3>
                <p className="tex t-gray-300">{feature.description}</p>
              </div>))}
          </div>
      </section>
      {/* Benefits Section */}
      <section className="p y-20 px-4 sm:px-6lg:px-8bg-white/5"></section>
        <div className="ma x-w-7xlmx-auto"></div>
          <div className="tex t-centermb-16"></div>
            <h2 className="tex t-3xl md:text-4xl font-bold text-white mb-4" />
              Key Benefits
    <>
            </h2>
            <p className="tex t-xl text-gray-300max-w-3xlmx-auto">
              Experience the power of our microsaasservices solutions for your business.
    <>
            </p>
          </div>
          <div className="gri d grid-cols-1md:grid-cols-2gap-6">
        </div></div>
            {benefits.map((benefit, index) => (}
              <div key={index} className="fle x items-startspace-x-3"></div>
                <CheckCircle className="h-6 w-6 tex t-purple-400mt-1flex-shrink-0" />
                <p className="tex t-gray-300text-lg">{benefit}</p>
              </div>))}
          </div>
      </section>
      {/* CTA Section */}
      <section className="p y-20 px-4sm:px-6lg:px-8"></section>
        <div className="ma x-w-4xlmx-autotext-center"></div>
          <div className="b g-gradient-to-r from-purple-600 to-blue-600 rounded-2xlp-8md:p-12"></div>
            <h2 className="tex t-3xl md:text-4xl font-bold text-white mb-4" />
              Ready to Get Started?
    <>
            </h2>
            <p className="tex t-xltext-purple-100mb-8">
              Contact our experts to discuss your microsaasservices needs and get a customized solution.
    <>
            </p>
            <div className="fle x flex-col sm:flex-rowgap-4justify-center"></div>
              <button className="b g-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 flex items-centerjustify-center" />
                <Phone className="m r-2h-5w-5" />
                Call Now
    <>
              </button>
              <button className="borde r border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-all duration-300 flex items-centerjustify-center" />
                <Mail className="m r-2h-5w-5" />
                Email Us
    <>
              </button>
            </div>
        </div>
      </section>
    </>