'use client';
import React from 'react';
<<<<<<< HEAD
import { Helmet } from 'react-helmet-async'
import { CheckCircle, ArrowRight, Phone, Mail, MapPin, Zap, Shield, Brain, Globe, Smartphone, Monitor, Cloud } from 'lucide-react'
const BusinessAppsPage: React.FC = () => {
  const features = [
    {
      icon: Smartphone,
      title: 'Mobile Apps',
      description: 'Custom mobile applications for iOS and Android platforms',},
    {icon: Monitor,
      title: 'Web Applications',
      description: 'Responsive web applications with modern UI/UX design',},
    {icon: Cloud,
      title: 'Cloud Integration',
<<<<<<< HEAD
      description: 'Seamless cloud integration and deployment solutions',},
    {icon: Brain,
      description: 'Advanced AI technology to transform your business applications and improve efficiency',},
    {icon: Zap,
      title: 'High Performance',
      description: 'Lightning-fast processing and real-time analytics for optimal business results',},
    {icon: Shield,
      title: 'Enterprise Security',
      description: 'Bank-level security with encryption and compliance standards for your business data',},
    {icon: Globe,
      title: 'Global Reach',
      description: 'Worldwide deployment and support for international business applications',}];
  const benefits = [
=======
      description: 'Seamless cloud integration and deployment solutions'
    },
    {
      icon: Brain,
title: 'AI-Powered Business Apps',
      description: 'Advanced AI technology to transform your business applications and improve efficiency'
=======
import { Helmet } from 'react-helmet-async';
import { CheckCircle, ArrowRight, Phone, Mail, MapPin, Zap, Shield, Brain, Globe, Smartphone, Monitor, Cloud } from 'lucide-react';
;
const BusinessAppsPage: React.FC = () => {
const features = [
];
};
    {
      ico,
    n: Brain,
      title: 'AI-Powered Solutions',
      description: 'Advanced AI technology to transform your business operations and improve efficiency'
>>>>>>> cursor/fix-errors-and-merge-to-main-6ce7
    },
    {
      icon: Zap,
      title: 'High Performance',
<<<<<<< HEAD
      description: 'Lightning-fast processing and real-time analytics for optimal business results'
=======
      description: 'Lightning-fast processing and real-time analytics for optimal results'
>>>>>>> cursor/fix-errors-and-merge-to-main-6ce7
    },
    {
      icon: Shield,
      title: 'Enterprise Security',
<<<<<<< HEAD
      description: 'Bank-level security with encryption and compliance standards for your business data'
=======
      description: 'Bank-level security with encryption and compliance standards'
>>>>>>> cursor/fix-errors-and-merge-to-main-6ce7
    },
    {
      icon: Globe,
      title: 'Global Reach',
<<<<<<< HEAD
      description: 'Worldwide deployment and support for international business applications'
    }
  ]
  const benefits = [
'Advanced AI technology integration',
    'Real-time processing and analytics',
    'Enterprise-grade security and compliance',
    'Scalable and flexible business solutions',
=======
      description: 'Worldwide deployment and support for international businesses'
    };
  ];
;
const benefits = [
];
    'Custom mobile and web applications',
    'Cross-platform compatibility',
    'Modern UI/UX design',
    'Cloud-based deployment',
>>>>>>> cursor/fix-errors-and-merge-to-main-6ce7
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-1247
    '24/7 technical support',
    'Easy integration with existing systems',
    'Cost-effective pricing plans',
    'Proven track record of success'
<<<<<<< HEAD
  ]

  return(<div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">)</div>
      <Helmet />
        <title>Business Apps | Zion Tech Group</title>
        <meta name="keywords" content="business apps, mobile apps, web apps, AI solutions, IT services, Zion Tech Group" />
      </Helmet>
<<<<<<< HEAD
      {/* Hero Section */} <section className="relative py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md: text-6xl font-bold text-white mb-6">,</h1>
=======
      {/* Hero Section */}
      <section className="relative py-20 px-4">
          <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md: text-6xl font-bold text-white mb-6">
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-1247
            Business Apps,
  </
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">Transform your business with our advanced business app solutions.</p>

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900"></div>
      <Helmet></Helmet>
        <title></titl>Business Apps | Zion Tech Group</title>
        <meta name="keywords" content="business apps, mobile apps, web apps, AI solutions, IT services, Zion Tech Group" /></meta>
      </Helmet>
      {/* Hero Section */}
      <section className="relative py-20 px-4"></section>
        <div className="max-w-7xl mx-auto text-center"></div>
          <h1 className="text-4xl md: text-6xl font-bold text-white mb-6"></h1>
            Business Apps,
  </
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto"></p>
            Transform your business with our advanced business app solutions. 

            Powered by cutting-edge AI technology and industry expertise.
          </p>
        </div>
      </section>
<<<<<<< HEAD

      {/* Features Section */} <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
=======
      {/* Features Section */}
      <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-1247
          <div className="text-center mb-12">
            <h2 className="text-3xl md: text-4xl font-bold text-white mb-4">,</h2>
              Why Choose Our Business Apps?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">Our business app solutions deliver unmatched performance, security, and scalability.</p>
            </p>
          </div>
          <div className="grid grid-cols-1 md: grid-cols-2 lg:grid-cols-4 gap-8">,</div>
            {features.map((feature, index) => (
              <div key={index}className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
                <feature.icon className="w-12 h-12 text-purple-400 mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
                <p className="text-gray-300">{feature.description</p>}</p>

      {/* Features Section */}
      <section className="py-16 px-4"></section>
        <div className="max-w-7xl mx-auto"></div>
          <div className="text-center mb-12"></div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4"></h2>
              Why Choose Our Business Apps?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto"></p>
              Our business app solutions deliver unmatched performance, security, and scalability.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"></div>
            {features.map((feature, index) => (
              <div key={index} className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10"></div>
                <feature.icon className="w-12 h-12 text-purple-400 mb-4" /></feature>
                <h3 className="text-xl font-semibold text-white mb-2"></h>{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>

              </div>
            ))}
          </div>
        </div>

      <section className="py-16 px-4 bg-white/5">
          <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md: text-4xl font-bold text-white mb-4">,</h2>
              Key Benefits,
  </
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">Experience the power of our business app solutions for your business.</p>
            </p>
          </div>
          <div className="grid grid-cols-1 md: grid-cols-2 gap-6">,</div>
            {benefits.map((benefit, index) => (
              <div key={index}className="flex items-center space-x-3">
                <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0" />
                <span className="text-gray-300">{benefit</span>}</span>

      <section className="py-16 px-4 bg-white/5"></section>
        <div className="max-w-7xl mx-auto"></div>
          <div className="text-center mb-12"></div>
            <h2 className="text-3xl md: text-4xl font-bold text-white mb-4"></h2>
              Key Benefits,
  </
            <p className="text-xl text-gray-300 max-w-3xl mx-auto"></p>
              Experience the power of our business app solutions for your business.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6"></div>
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-center space-x-3"></div>
                <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0" /></CheckCircle>
                <span className="text-gray-300"></spa>{benefit}</span>

              </div>
            ))}
          </div>
        </div>
      </section>
<<<<<<< HEAD

      {/* CTA Section */} <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md: text-4xl font-bold text-white mb-4">,</h2>
=======
      {/* CTA Section */}
      <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md: text-4xl font-bold text-white mb-4">
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-1247
            Ready to Get Started?
          </h2>
          <p className="text-xl text-purple-100 mb-8">Contact our experts to discuss your business app needs and get a customized solution.</p>
          </p>
          <div className="flex flex-col sm: flex-row gap-4 justify-center">,</div>
            <button className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover: bg-gray-100 transition-all duration-300 flex items-center justify-center">,</button>
              <Phone className="mr-2 h-5 w-5" />
              Call Now;
  </
            <button className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover: bg-white hover:text-purple-600 transition-all duration-300 flex items-center justify-center">,</button>
              <Mail className="mr-2 h-5 w-5" />
<<<<<<< HEAD
<<<<<<< HEAD
              Email Us;
=======
              Email Us
>>>>>>> cursor/website-audit-and-update-with-deployment-c0e8
=======
              Email Us
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-1247
  </
          </div>
        </div>
        <div className="text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Ready to Get Started?</h2>
          </h2>
          <p className="text-xl text-purple-100 mb-8">Contact our experts to discuss your business app needs and get a customized solution.</p>
          </p>
          <div className="flex flex-col sm: flex-row gap-4 justify-center">,</div>
            <button className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover: bg-gray-100 transition-all duration-300 flex items-center justify-center">,</button>
              <Phone className="mr-2 h-5 w-5" />
              Call Now;
  </
            <button className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover: bg-white hover:text-purple-600 transition-all duration-300 flex items-center justify-center">,</button>
              <Mail className="mr-2 h-5 w-5" />
              Email Us;

      {/* CTA Section */}
      <section className="py-16 px-4"></section>
        <div className="max-w-4xl mx-auto text-center"></div>
          <h2 className="text-3xl md: text-4xl font-bold text-white mb-4"></h2>
            Ready to Get Started?
          </h2>
          <p className="text-xl text-purple-100 mb-8"></p>
            Contact our experts to discuss your business app needs and get a customized solution.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center"></div>
            <button className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 flex items-center justify-center"></button>
              <Phone className="mr-2 h-5 w-5" /></Phone>
              Call Now
  </
            <button className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-all duration-300 flex items-center justify-center"></button>
              <Mail className="mr-2 h-5 w-5" /></Mail>
              Email Us
  </

          </div>
        </div>
        <div className="text-center"></div>
          <h2 className="text-3xl font-bold text-white mb-6"></h2>
            Ready to Get Started?
          </h2>
          <p className="text-xl text-purple-100 mb-8"></p>
            Contact our experts to discuss your business app needs and get a customized solution.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center"></div>
            <button className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 flex items-center justify-center"></button>
              <Phone className="mr-2 h-5 w-5" /></Phone>
              Call Now
  </
            <button className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-all duration-300 flex items-center justify-center"></button>
              <Mail className="mr-2 h-5 w-5" /></Mail>
              Email Us

  </
          </div>
        </div>
      </div>
    </div>
<<<<<<< HEAD
  ),
};

export default BusinessAppsPage;
=======
  )
}
export default BusinessAppsPage
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-1247
  </button>
  </button>
  </button>
  </button>
  </section>
  </h2>
  </section>
  </h1>
=======
  ];
  return (<div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <title>Page | Zion Tech Group<
        <meta name="description" content="Professional Page services by Zion Tech Group. Advanced AI and IT solutions for your business." 
        <meta name="keywords" content="page, AI solutions, IT services, Zion Tech Group, page" 
      <
            <
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Transform your business with our advanced page solutions. 
              Powered by cutting-edge AI technology and industry expertise.
            <
            <
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our page solutions deliver unmatched performance, security, and scalability.
            <
          <
          <
        <
      <
            <
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Experience the power of our page solutions for your business.
            <
          <
          <
        <
      <
              Ready to Get Started?
            <
            <p className="text-xl text-purple-100 mb-8">
              Contact our experts to discuss your page needs and get a customized solution.
            <
            <div className="flex flex-col sm: flex-row gap-4 justify-center">
              <button className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hove,
    r:bg-gray-100 transition-all duration-300 flex items-center justify-center">
                <Mail className="mr-2 h-5 w-5" 
                Email Us
              <
            <
          <
        <
      <
    <)
  );
};
export default BusinessAppsPage;
>>>>>>> cursor/fix-errors-and-merge-to-main-6ce7
