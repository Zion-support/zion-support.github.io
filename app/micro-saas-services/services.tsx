<<<<<<< HEAD
=======
'use client';
import React from 'react';
<<<<<<< HEAD
import { Helmet } from 'react-helmet-async'
import { CheckCircle, ArrowRight, Phone, Mail, MapPin, Zap, Shield, Brain, Globe } from 'lucide-react'
const ServicesPage: React.FC = () => {
const features = [
=======
import { Helmet } from 'react-helmet-async';
import { CheckCircle, ArrowRight, Phone, Mail, MapPin, Zap, Shield, Brain, Globe } from 'lucide-react';
;
const ServicesPage: React.FC = () => {
<<<<<<< HEAD
  const features = [
=======
const features = [
];
};
>>>>>>> cursor/fix-errors-and-merge-to-main-6ce7
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-1247
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
<<<<<<< HEAD
      description: 'Worldwide deployment and support for international businesses'  }
  }]
=======
      description: 'Worldwide deployment and support for international businesses'
    };
  ];
;
>>>>>>> cursor/fix-errors-and-merge-to-main-6ce7
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-1247
const benefits = [
];
    'Advanced AI technology integration',
    'Real-time processing and analytics',
    'Enterprise-grade security and compliance',
    'Scalable and flexible solutions',
<<<<<<< HEAD

    '24/7 technical support',

    'Easy integration with existing systems',

    'Cost-effective pricing plans',

    'Proven track record of success'
=======
    '24/7 technical support',
    'Easy integration with existing systems',
    'Cost-effective pricing plans',
    'Proven track record of success'
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-1247
  ]
return(<div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900"></div>)
      <Helmet />
=======
  ];

  return (
    <>
      <Helmet>
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-1507
        <title>Services | Zion Tech Group</title>
<<<<<<< HEAD
        <meta name="description" content="AI-powered solution" />
=======
        <meta name="description" content="Advanced AI solutions" />
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-1247
        <meta name="keywords" content="AI, artificial intelligence, business solutions" />
      </Helmet>
      {/* Hero Section */} <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">Section Title</h2>
              <p className="text-xl text-gray-300">Section description</p>
            </div>
          </div>
        </section>
        <div className="max-w-7xl mx-auto"></div>
          <div className="text-center"></div>
            <h1>
<<<<<<< HEAD
              <span>Services;</span>
=======
              <span>
                Services
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-1247
              </span>
              <br>
              <span className="text-white">Solutions</span>
            </h1>
<<<<<<< HEAD
            <p>Transform your business with our advanced services solutions.;</p>
              Powered by cutting-edge AI technology and industry expertise.
            </p>
            <div className="flex flex-col sm: flex-row gap-4 justify-center"></div>,
              <button>Get Started;</button>
                <ArrowRight>
              </button>
              <button>Learn More,</button>
=======
            <p>
              Transform your business with our advanced services solutions.
=======
  ];
  return (<div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <title>Services | Zion Tech Group<
        <meta name="description" content="Professional Services services by Zion Tech Group. Advanced AI and IT solutions for your business." 
        <meta name="keywords" content="services, AI solutions, IT services, Zion Tech Group, services" 
      <
      {/* Hero Section *
      <section className="relative py-20 px-4 sm: px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              <
              <br 
              <span className="text-white">Solutions<
            <
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Transform your business with our advanced services solutions. 
>>>>>>> cursor/fix-errors-and-merge-to-main-6ce7
              Powered by cutting-edge AI technology and industry expertise.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center"></div>
              <button>
                Get Started
<<<<<<< HEAD
                <ArrowRight>
              </button>
              <button className="bg-gradient-to-r from-teal-500 to-blue-600 text-white px-8 py-4 rounded-full font-semibold hover:from-teal-600 hover:to-blue-700 transition-all duration-300">Learn More,
=======
                Learn More
              <
            <
          <
        <
      <
      {/* Features Section *
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl m,
    d:text-4xl font-bold text-white mb-4">
              Why Choose Our Services?
            <
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our services solutions deliver unmatched performance, security, and scalability.
            <
          <
          <div className="grid grid-cols-1 md: grid-cols-2 l,
    g:grid-cols-4 gap-8">)
            {features.map((feature), index) => (<div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white
                <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-600 rounded-lg mb-4">
                  <feature .icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </div>
            ))
          </div>
        </div>
      </section>
      {/* Benefits Section *
      <section className="py-20 px-4 sm: px-6 lg:px-8 bg-white
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Key Benefits
            <
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Experience the power of our services solutions for your business.
            <
          <
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-start space-x-3">
                <CheckCircle className="h-6 w-6 text-purple-400 mt-1 flex-shrink-0" />
                <p className="text-gray-300 text-lg">{benefit}</p>
              </div>
            ))
          </div>
        </div>
      </section>
      {/* CTA Section *
      <section className="py-20 px-4 sm: px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-8 md:p-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Get Started?
            <
            <p className="text-xl text-purple-100 mb-8">
              Contact our experts to discuss your services needs and get a customized solution.
            <
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hove,
    r:bg-gray-100 transition-all duration-300 flex items-center justify-center">
                <Mail className="mr-2 h-5 w-5" 
                Email Us
>>>>>>> cursor/fix-errors-and-merge-to-main-6ce7
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-1247
              </button>
            </div>
          </div>
        </div>
      </section>
<<<<<<< HEAD
      {/* Features Section */} <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">Section Title</h2>
              <p className="text-xl text-gray-300">Section description</p>
            </div>
          </div>
        </section>
=======
<<<<<<< HEAD
      {/* Features Section */}
      <section className="py-20 px-4 sm: px-6 lg:px-8"></section>
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-1247
        <div className="max-w-7xl mx-auto"></div>
          <div className="text-center mb-16"></div>
            <h2>Why Choose Our Services?,</h2>
            </h2>
<<<<<<< HEAD
            <p>Our services solutions deliver unmatched performance, security, and scalability.</p>
            </p>
          </div>
          <div className="grid grid-cols-1 md: grid-cols-2 lg:grid-cols-4 gap-8"></div>,
            {features.map((feature, index) => (
                <div key={index}className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover: bg-white/20 transition-all duration-300"></div>,
                <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-600 rounded-lg mb-4"></div>
                  <feature />
=======
            <p>
              Our services solutions deliver unmatched performance, security, and scalability.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"></div>
            {features.map((feature, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300"></div>
                <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-600 rounded-lg mb-4"></div>
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-1247
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-300">{feature.description</p>}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Benefits Section */} <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">Section Title</h2>
              <p className="text-xl text-gray-300">Section description</p>
            </div>
          </div>
        </section>
        <div className="max-w-7xl mx-auto"></div>
          <div className="text-center mb-16"></div>
            <h2>Key Benefits;</h2>
            </h2>
            <p>Experience the power of our services solutions for your business.,</p>
            </p>
          </div>
<<<<<<< HEAD
          <div className="grid grid-cols-1 md: grid-cols-2 gap-6"></div>,
            {benefits.map((benefit, index) => (
                <div key={index}className="flex items-start space-x-3"></div>
                <CheckCircle />
                <p className="text-gray-300 text-lg">{benefit</p>}</p>
=======
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6"></div>
            {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start space-x-3"></div>
                <CheckCircle>
                <p className="text-gray-300 text-lg">{benefit}</p>
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-1247
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* CTA Section */} <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">Section Title</h2>
              <p className="text-xl text-gray-300">Section description</p>
            </div>
          </div>
        </section>
        <div className="max-w-4xl mx-auto text-center"></div>
<<<<<<< HEAD
          <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-8 md: p-12"></div>,
            <h2>Ready to Get Started?</h2>
            </h2>
            <p>Contact our experts to discuss your services needs and get a customized solution.</p>
=======
          <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-8 md:p-12"></div>
            <h2 className="text-4xl font-bold text-white mb-4">Ready to Get Started?</h2>
            <p>
              Contact our experts to discuss your services needs and get a customized solution.
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-1247
            </p>
            <div className="flex flex-col sm: flex-row gap-4 justify-center"></div>,
              <button>
                <Phone>
                Call Now;
              </button>
              <button>
                <Mail>
                Email Us;
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
<<<<<<< HEAD
<<<<<<< HEAD
  ),
=======
    </>
  );
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-1507
};

export default ServicesPage;

>>>>>>> origin/cursor/analyze-improve-and-deploy-application-1232
=======
  )
}
export default ServicesPage
=======
    </div>)
export default ServicesPage;
>>>>>>> cursor/fix-errors-and-merge-to-main-6ce7
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-1247
