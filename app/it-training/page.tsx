<<<<<<< HEAD
'use client';
import React from 'react';
import {Helmet}}from 'react-helmet-async';
import {CheckCircle, ArrowRight, Phone, Mail, MapPin, Zap, Shield, Brain, Globe}}from 'lucide-react';
const PagePage: React.FC = () => {,
=======
'use client'
import React from 'react'
import { Helmet } from 'react-helmet-async'
import { CheckCircle, ArrowRight, Phone, Mail, MapPin, Zap, Shield, Brain, Globe } from 'lucide-react'
const PagePage: React.FC = () => {
>>>>>>> origin/main
    const features = [
    {
      icon: Brain,
      title: 'AI-Powered Solutions',
      description: 'Advanced AI technology to transform your business operations and improve efficiency',},
    {icon: Zap,
      title: 'High Performance',
      description: 'Lightning-fast processing and real-time analytics for optimal results',},
    {icon: Shield,
      title: 'Enterprise Security',
      description: 'Bank-level security with encryption and compliance standards',},
    {icon: Globe,
      title: 'Global Reach',
<<<<<<< HEAD
      description: 'Worldwide deployment and support for international businesses',}}
  ]
=======
      description: 'Worldwide deployment and support for international businesses'
  }
    }
<<<<<<< HEAD
  ];];];
>>>>>>> origin/main
const benefits = [
=======
  ]
  const benefits = [
>>>>>>> origin/main
    'Advanced AI technology integration',
    'Real-time processing and analytics',
    'Enterprise-grade security and compliance',
    'Scalable and flexible solutions',

    '24/7 technical support',

    'Easy integration with existing systems',

    'Cost-effective pricing plans',

<<<<<<< HEAD
<<<<<<< HEAD
    'Proven track record of success'
  ]
return(<div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900"></div>)
      <Helmet />
=======
    'Proven track record of success';
  ];
<<<<<<< HEAD

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
=======
return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900"></div>
>>>>>>> origin/main
      <Helmet>
>>>>>>> origin/main
        <title>Page | Zion Tech Group</title>
=======
    'Proven track record of success'
  ]
return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900"></div>
      <Helmet>
        </Helmet><title>Page | Zion Tech Group</title>
>>>>>>> origin/main
        <meta name="description" content="AI-powered solution" />
        <meta name="keywords" content="AI, artificial intelligence, business solutions" />
      </Helmet>
<<<<<<< HEAD

      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                Page
              </span>
              <br />
              <span className="text-white">Solutions</span>
=======
>>>>>>> origin/main
            </h1>
<<<<<<< HEAD
            <p>Transform your business with our advanced page solutions.;</p>
=======
            <p>
              Transform your business with our advanced page solutions.
>>>>>>> origin/main
              Powered by cutting-edge AI technology and industry expertise.
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
=======
            </h2>
            <p>Our page solutions deliver unmatched performance, security, and scalability.</p>
            </p>
          </div>
          </div>
        </div>
      </section>
>>>>>>> origin/main
            </h2>
<<<<<<< HEAD
            <p>Experience the power of our page solutions for your business.</p>
            </p>
          </div>
<<<<<<< HEAD

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
=======
          </div>
        </div>
      </section>
=======
            <p>
              Experience the power of our page solutions for your business.
>>>>>>> origin/main
>>>>>>> origin/main
              Ready to Get Started?
            </h2>
            <p>Contact our experts to discuss your page needs and get a customized solution.</p>
            </p>
            <div className="flex flex-col sm: flex-row gap-4 justify-center"></div>,
              <button>
<<<<<<< HEAD
                <Phone>
                Call Now;
              </button>
              <button>
                <Mail>
                Email Us;
=======
                </button><Phone>
                Call Now
              </button>
              <button>
                </button><Mail>
                Email Us
>>>>>>> origin/main
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
<<<<<<< HEAD
  );
};

export default PagePage;
=======
  ),
}
export default PagePage
            <p className="text-xl text-purple-100 mb-8">
              Contact our experts to discuss your page needs and get a customized solution.
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 flex items-center justify-center">
                <Phone className="mr-2 h-5 w-5" />
                Call Now
              <button className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-all duration-300 flex items-center justify-center">
                <Mail className="mr-2 h-5 w-5" />
                Email Us
  )
}
export default PagePage</div></div></button></button></p></p></p></p>
>>>>>>> origin/main
