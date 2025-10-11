<<<<<<< HEAD
'use client';
import React from 'react';
<<<<<<< HEAD
import { Helmet } from 'react-helmet-async';
import { CheckCircle, ArrowRight, Phone, Mail, MapPin, Zap, Shield, Brain, Globe } from 'lucide-react';

const PagePage: React.FC = () => {
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

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Page | Zion Tech Group</title>
        <meta name="description" content="Professional Page services by Zion Tech Group. Advanced AI and IT solutions for your business." />
        <meta name="keywords" content="page, AI solutions, IT services, Zion Tech Group, page" />
=======
import {Helmet}}from 'react-helmet-async';
import {CheckCircle, ArrowRight, Phone, Mail, MapPin, Zap, Shield, Brain, Globe}}from 'lucide-react';
const BlockchainWeb3Page: React.FC = () => {,
=======
'use client'
import React from 'react'
import { Helmet } from 'react-helmet-async'
import { CheckCircle, ArrowRight, Phone, Mail, MapPin, Zap, Shield, Brain, Globe } from 'lucide-react'
const BlockchainWeb3Page: React.FC = () => {
>>>>>>> origin/main
    const features = [
    {
      icon: Zap,
      title: 'Smart Contracts',
      description: 'Automated, self-executing contracts with the terms directly written into code.',
<<<<<<< HEAD
<<<<<<< HEAD
      benefits: ['Automated execution', 'Transparent transactions', 'Reduced costs', 'Enhanced security']},
    {icon: Shield,
=======
      benefits: ['Automated execution', 'Transparent transactions', 'Reduced costs', 'Enhanced security'];
=======
      benefits: ['Automated execution', 'Transparent transactions', 'Reduced costs', 'Enhanced security'],
>>>>>>> origin/main
  },
    {
    icon: Shield,
>>>>>>> origin/main
      title: 'Decentralized Security',
      description: 'Enhanced security through decentralized architecture and cryptographic protection.',
<<<<<<< HEAD
      benefits: ['Immutable records', 'Cryptographic security', 'Distributed consensus', 'Tamper-proof data']},
    {icon: Brain,
      title: 'AI Integration',
      description: 'AI-powered blockchain solutions for intelligent automation and optimization.',
      benefits: ['Smart automation', 'Predictive analytics', 'Optimized transactions', 'Intelligent contracts']},
    {icon: Globe,
      title: 'Global Access',
      description: 'Access blockchain services from anywhere in the world with global connectivity.',
<<<<<<< HEAD
      benefits: ['24/7 availability', 'Global reach', 'Cross-border transactions', 'Universal access']}]
return(<>)
      <Helmet />
=======
      benefits: ['24/7 availability', 'Global reach', 'Cross-border transactions', 'Universal access']
  },
  ];];
return (
    <>
  </>
      <Helmet>
>>>>>>> origin/main
        <title>Blockchain & Web3 Solutions - Zion Tech Group</title>
        <meta />
=======
      benefits: ['Immutable records', 'Cryptographic security', 'Distributed consensus', 'Tamper-proof data'],
  },
    {
    icon: Brain,
      title: 'AI Integration',
      description: 'AI-powered blockchain solutions for intelligent automation and optimization.',
      benefits: ['Smart automation', 'Predictive analytics', 'Optimized transactions', 'Intelligent contracts'],
  },
    {
    icon: Globe,
      title: 'Global Access',
      description: 'Access blockchain services from anywhere in the world with global connectivity.',
      benefits: ['24/7 availability', 'Global reach', 'Cross-border transactions', 'Universal access'],
  }
    ]
return (
    <>
      <Helmet>
        </Helmet><title>Blockchain & Web3 Solutions - Zion Tech Group</title>
        <meta>
>>>>>>> origin/main
>>>>>>> origin/main
      </Helmet>
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900"></div>
        <div className="container mx-auto px-4 py-16"></div>
          <div className="text-center mb-16"></div>
            <h1>
              Blockchain & </h1><span className="text-cyan-400">Web3</span>
            </h1>
            <p>Advanced blockchain and Web3 solutions for modern businesses. Smart contracts, DeFi, NFTs, and more.</p>
            </p>
<<<<<<< HEAD
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-purple-500 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-purple-600 hover:to-blue-700 transition-all duration-300 flex items-center">
                Get Started
                <ArrowRight className="ml-2 h-5 w-5" />
              </button>
              <button className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Why Choose Our Page?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our page solutions deliver unmatched performance, security, and scalability.
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
              Experience the power of our page solutions for your business.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-start space-x-3">
                <CheckCircle className="h-6 w-6 text-purple-400 mt-1 flex-shrink-0" />
                <p className="text-gray-300 text-lg">{benefit}</p>
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
          </div>
          <div className="grid grid-cols-1 md: grid-cols-2 lg:grid-cols-4 gap-8"></div>,
            {features.map((feature, index) => (
                <div key={index}className="bg-white/5 backdrop-blur-lg rounded-xl p-8 border border-white/10 hover: bg-white/10 transition-all duration-300"></div>,
                <div className="flex items-start space-x-4 mb-6"></div>
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-lg flex items-center justify-center flex-shrink-0"></div>
                    <feature />
                  <div />
                    <h3 className="text-2xl font-bold text-white mb-2">{feature.title}</h3>
                    <p className="text-gray-300 mb-4">{feature.description</p>}</p>
                  </div>
                </div>
                <ul>
<<<<<<< HEAD
                  {feature.benefits.map((benefit, benefitIndex) => (} <li>
                      <CheckCircle />
=======
                  {
    feature.benefits.map((benefit, benefitIndex) => (
  }
                    </ul><li>
                      </li><CheckCircle>
>>>>>>> origin/main

                      {benefit} </li>
                  ))}
                </ul>
              </div>
            ))}

          </div>
        </div>
      </div>
    </>
  )
}
export default BlockchainWeb3Page
      benefits: ['24/7 availability', 'Global reach', 'Cross-border transactions', 'Universal access']
    }
  ]
  return (
    <React.Fragment>
      <Helmet>
        <title>Blockchain & Web3 Solutions - Zion Tech Group
        <meta name="description" content="Advanced blockchain and Web3 solutions for modern businesses. Smart contracts, DeFi, NFTs, and more." />
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-white mb-6">
              Blockchain & <span className="text-cyan-400">Web3
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Advanced blockchain and Web3 solutions for modern businesses. Smart contracts, DeFi, NFTs, and more.
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white/5 backdrop-blur-lg rounded-xl p-8 border border-white/10 hover:bg-white/10 transition-all duration-300">
                <div className="flex items-start space-x-4 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-lg flex items-center justify-center flex-shrink-0">
                    <feature.icon className="w-6 h-6 text-white" />
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-2">{feature.title}
                    <p className="text-gray-300 mb-4">{feature.description}
                <ul className="space-y-2">
                  {feature.benefits.map((benefit, benefitIndex) => (
                    <li key={benefitIndex} className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-cyan-400 mr-3" />
                      {benefit}
                  ))}
            ))}
<<<<<<< HEAD
          </div>
        ))
      </div>

  );
};

export default BlockchainWeb3Page;
=======
  )
}
export default BlockchainWeb3Page</div></div></div></div></div></div></div></div></span></p></p></h1></h3></ul></li>
>>>>>>> origin/main
>>>>>>> origin/main
