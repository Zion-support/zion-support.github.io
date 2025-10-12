import React from 'react';
'use client'
import { Helmet } from 'react-helmet-async';

import { ArrowRight, Mail, Brain } from 'lucide-react';
const Services Page: React.F C = () => {
  const features = [
    {
      icon: Brain,
      title: 'A I-Powered Solutions',
      description: 'Advanced A I technology to transform your business operations and improve efficiency',
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
  const benefits = [
    'Advanced A I technology integration',
    'Real-time processing and analytics',
    'Enterprise-grade security and compliance',
    'Scalable and flexible solutions',
    '24/7 technical support',
    'Easy integration with existing systems',
    'Cost-effective pricing plans',
    'Proven track record of success'
  ];
  return (

    <d iv class Name="m in-h-screen bg-gradient-to-br from-slate-900via-purple-900to-slate-900">
        </d iv>
      <H elmet>
        <t itle>5 G Data Analytics - Zion Tech Group</t itle>
        <m eta name="description" content="Professional 5 G data analytics services by Zion Tech Group. Transform your business with our expert solutions." />
      </H elmet>
        <t itle>Services | Zion Tech Group</t itle>
        <m eta name="description" content="Professional Services services by Zion Tech Group. Advanced A I and I T solutions for your business." />
        <m eta name="keywords" content="services, A I solutions, I T services, Zion Tech Group, services" />
      </H elmet>
      {/* Hero Section */}

      <s ection class Name="r elative py-20 px-4sm:px-6lg:px-8" />
        <d iv class Name="m ax-w-7xlmx-auto">
        </d iv>
          <d iv class Name="t ext-center" />
            <h1 c lass Name="t ext-4xl md:text-6xl font-boldtext-whitemb-6" />
              <s pan class Name="b g-gradient-to-r from-purple-400 to-blue-400bg-clip-texttext-transparent" />
                Services

              <s pan class Name="t ext-white">Solutions</s pan>
            </h1>
            <p c lass Name="t ext-xl text-gray-300 mb-8max-w-3xlmx-auto">
              Transform your business with our advanced services solutions.
              Powered by cutting-edge A I technology and industry expertise.

            </p>
            <d iv class Name="f lex flex-col sm:flex-rowgap-4justify-center">
        </d iv>
              <b utton class Name="b g-gradient-to-r from-purple-500 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-purple-600 hover:to-blue-700 transition-all duration-300flexitems-center" />
                Get Started

                <A rrow Right class Name="m l-2h-5w-5" />
              </b utton>
              <b utton class Name="b order border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-gray-900transition-allduration-300" />
                Learn More
  </

            </d iv>
        </d iv>
      </s ection>
      {/* Features Section */}

      <s ection class Name="p y-20 px-4sm:px-6lg:px-8" />
        <d iv class Name="m ax-w-7xlmx-auto">
        </d iv>
          <d iv class Name="t ext-centermb-16">
        </d iv>
            <h2 c lass Name="t ext-3xl md:text-4xl font-boldtext-whitemb-4" />
              Why Choose Our Services?

            </h2>
            <p c lass Name="t ext-xl text-gray-300max-w-3xlmx-auto">
              Our services solutions deliver unmatched performance, security, and scalability.

            </p>
          </d iv>
          <d iv class Name="g rid grid-cols-1 md:grid-cols-2lg:grid-cols-4gap-8">
        </d iv>
            {features.map((feature, index) => (

              <d iv key={index} class Name="b g-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20transition-allduration-300" />
                <d iv class Name="f lex items-center justify-center w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-600rounded-lgmb-4">
        </d iv>
                  <f eature.icon class Name="h-6w-6t ext-white" />
                </d iv>
                <h3 c lass Name="t ext-xl font-semiboldtext-white mb-3">{feature.title}</h3>
                <p c lass Name="t ext-gray-300">{feature.description}</p>
              </d iv>
            ))}

          </d iv>
      </s ection>
      {/* Benefits Section */}

      <s ection class Name="p y-20 px-4 sm:px-6lg:px-8bg-white/5" />
        <d iv class Name="m ax-w-7xlmx-auto">
        </d iv>
          <d iv class Name="t ext-centermb-16">
        </d iv>
            <h2 c lass Name="t ext-3xl md:text-4xl font-boldtext-whitemb-4" />
              Key Benefits
  </
            <p c lass Name="t ext-xl text-gray-300max-w-3xlmx-auto">
              Experience the power of our services solutions for your business.

            </p>
          </d iv>
          <d iv class Name="g rid grid-cols-1md:grid-cols-2gap-6">
        </d iv>
            {benefits.map((benefit, index) => (

              <d iv key={index} class Name="f lexitems-startspace-x-3" />
                <C heck Circle class Name="h-6 w-6 t ext-purple-400mt-1flex-shrink-0" />
                <p c lass Name="t ext-gray-300text-lg">{benefit}</p>
              </d iv>
            ))}

          </d iv>
      </s ection>
      {/* C TA Section */}

      <s ection class Name="p y-20 px-4sm:px-6lg:px-8" />
        <d iv class Name="m ax-w-4xlmx-autotext-center">
        </d iv>
          <d iv class Name="b g-gradient-to-r from-purple-600 to-blue-600 rounded-2xlp-8md:p-12">
        </d iv>
            <h2 c lass Name="t ext-3xl md:text-4xl font-boldtext-whitemb-4" />
              Ready to Get Started?

            </h2>
            <p c lass Name="t ext-xltext-purple-100mb-8">
              Contact our experts to discuss your services needs and get a customized solution.

            </p>
            <d iv class Name="f lex flex-col sm:flex-rowgap-4justify-center">
        </d iv>
              <b utton class Name="b g-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 flexitems-centerjustify-center" />
                <P hone class Name="m r-2h-5w-5" />
                Call Now
  </

              <b utton class Name="b order border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-all duration-300 flexitems-centerjustify-center" />
                <M ail class Name="m r-2h-5w-5" />
                Email Us
  </

            </d iv>
        </d iv>
      </s ection>
    </d iv>
  )}
export default Services Page

  </b utton>
  </b utton>
  </h2>
  </b utton>
  </s pan>

    {icon: Brain,
      title: 'A I-Powered Solutions',
      description: 'Advanced A I technology to transform your business operations and improve efficiency'}
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
  ];const benefits = [
    'Advanced A I technology integration',
    'Real-time processing and analytics',
    'Enterprise-grade security and compliance',
    'Scalable and flexible solutions',
    '24/7 technical support',
    'Easy integration with existing systems',
    'Cost-effective pricing plans',
    'Proven track record of success'

  ];return (<d iv class Name="m in-h-screen bg-gradient-to-br from-slate-900via-purple-900to-slate-900">
        </d iv></d iv>
      <H elmet>
        <t itle>5 G Data Analytics - Zion Tech Group</t itle>
        <m eta name="description" content="Professional 5 G data analytics services by Zion Tech Group. Transform your business with our expert solutions." />
      </H elmet>
        <t itle>Services | Zion Tech Group</t itle>
        <m eta name="description" content="Professional Services services by Zion Tech Group. Advanced A I and I T solutions for your business." />
        <m eta name="keywords" content="services, A I solutions, I T services, Zion Tech Group, services" />
      </H elmet>
      {/* Hero Section */}

      <s ection class Name="r elative py-20 px-4sm:px-6lg:px-8" /></s ection>
        <d iv class Name="m ax-w-7xlmx-auto">
        </d iv></d iv>
          <d iv class Name="t ext-center" /></d iv>
            <h1 c lass Name="t ext-4xl md:text-6xl font-boldtext-whitemb-6" />
              <s pan class Name="b g-gradient-to-r from-purple-400 to-blue-400bg-clip-texttext-transparent" />
                Services

              </s pan>
              <b r />
              <s pan class Name="t ext-white">Solutions</s pan>
            </h1>
            <p c lass Name="t ext-xl text-gray-300 mb-8max-w-3xlmx-auto">
              Transform your business with our advanced services solutions.
              Powered by cutting-edge A I technology and industry expertise.

            </p>
            <d iv class Name="f lex flex-col sm:flex-rowgap-4justify-center">
        </d iv></d iv>
              <b utton class Name="b g-gradient-to-r from-purple-500 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-purple-600 hover:to-blue-700 transition-all duration-300flexitems-center" />
                Get Started

                <A rrow Right class Name="m l-2h-5w-5" />
              </b utton>
              <b utton class Name="b order border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-gray-900transition-allduration-300" />
                Learn More

              </b utton>
            </d iv>
        </d iv>
      </s ection>
      {/* Features Section */}

      <s ection class Name="p y-20 px-4sm:px-6lg:px-8" /></s ection>
        <d iv class Name="m ax-w-7xlmx-auto">
        </d iv></d iv>
          <d iv class Name="t ext-centermb-16">
        </d iv></d iv>
            <h2 c lass Name="t ext-3xl md:text-4xl font-boldtext-whitemb-4" />
              Why Choose Our Services?

            </h2>
            <p c lass Name="t ext-xl text-gray-300max-w-3xlmx-auto">
              Our services solutions deliver unmatched performance, security, and scalability.

            </p>
          </d iv>
          <d iv class Name="g rid grid-cols-1 md:grid-cols-2lg:grid-cols-4gap-8">
        </d iv></d iv>
            {features.map((feature, index) => (}

              <d iv key={index} class Name="b g-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20transition-allduration-300" /></d iv>
                <d iv class Name="f lex items-center justify-center w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-600rounded-lgmb-4">
        </d iv></d iv>
                  <f eature.icon class Name="h-6w-6t ext-white" />
                </d iv>
                <h3 c lass Name="t ext-xl font-semiboldtext-white mb-3">{feature.title}</h3>
                <p c lass Name="t ext-gray-300">{feature.description}</p>
              </d iv>))}
          </d iv>
      </s ection>
      {/* Benefits Section */}

      <s ection class Name="p y-20 px-4 sm:px-6lg:px-8bg-white/5" /></s ection>
        <d iv class Name="m ax-w-7xlmx-auto">
        </d iv></d iv>
          <d iv class Name="t ext-centermb-16">
        </d iv></d iv>
            <h2 c lass Name="t ext-3xl md:text-4xl font-boldtext-whitemb-4" />
              Key Benefits

            </h2>
            <p c lass Name="t ext-xl text-gray-300max-w-3xlmx-auto">
              Experience the power of our services solutions for your business.

            </p>
          </d iv>
          <d iv class Name="g rid grid-cols-1md:grid-cols-2gap-6">
        </d iv></d iv>
            {benefits.map((benefit, index) => (}

              <d iv key={index} class Name="f lexitems-startspace-x-3" /></d iv>
                <C heck Circle class Name="h-6 w-6 t ext-purple-400mt-1flex-shrink-0" />
                <p c lass Name="t ext-gray-300text-lg">{benefit}</p>
              </d iv>))}
          </d iv>
      </s ection>
      {/* C TA Section */}

      <s ection class Name="p y-20 px-4sm:px-6lg:px-8" /></s ection>
        <d iv class Name="m ax-w-4xlmx-autotext-center">
        </d iv></d iv>
          <d iv class Name="b g-gradient-to-r from-purple-600 to-blue-600 rounded-2xlp-8md:p-12">
        </d iv></d iv>
            <h2 c lass Name="t ext-3xl md:text-4xl font-boldtext-whitemb-4" />
              Ready to Get Started?

            </h2>
            <p c lass Name="t ext-xltext-purple-100mb-8">
              Contact our experts to discuss your services needs and get a customized solution.

            </p>
            <d iv class Name="f lex flex-col sm:flex-rowgap-4justify-center">
        </d iv></d iv>
              <b utton class Name="b g-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 flexitems-centerjustify-center" />
                <P hone class Name="m r-2h-5w-5" />
                Call Now

              </b utton>
              <b utton class Name="b order border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-all duration-300 flex items-centerjustify-center" />
                <M ail class Name="m r-2h-5w-5" />
                Email Us

              </b utton>
            </d iv>
        </d iv>
      </s ection>
