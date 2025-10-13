<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-13a2
import React from 'react';
<<<<<<< HEAD
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight, Zap, TrendingUp, Shield, Clock } from "lucide-react";

export default function CloudServices() {
=======
<<<<<<< HEAD
import { Helmet } from 'react-helmet-async'
import { CheckCircle, ArrowRight, Phone, Mail, MapPin, Zap, Shield, Brain, Globe, Cloud, Server, Database, Lock } from 'lucide-react'
const CloudServicesPage: React.FC = () => {
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-1247
  const services = [
=======
import { Helmet } from 'react-helmet-async';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { CheckCircle, ArrowRight, Cloud, Shield, Zap, Globe } from 'lucide-react';
const CloudServicesPage: React.FC = () => {
const features = [
];
};
>>>>>>> cursor/fix-errors-and-merge-to-main-6ce7
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: "Scalability",
      description: "Auto-scaling infrastructure that grows with your business needs"
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Security",
      description: "Enterprise-grade security with 24/7 monitoring and threat detection"
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Performance",
      description: "Optimized for speed with global CDN and edge computing"
    },
    {
<<<<<<< HEAD
<<<<<<< HEAD
      icon: <Database className="w-6 h-6" />,
      title: "Data Management",
      description: "Secure data storage, backup, and disaster recovery solutions"
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: "Global Reach",
      description: "Multi-region deployment for worldwide accessibility"
    },
    {
      icon: <Server className="w-6 h-6" />,
      title: "Infrastructure",
      description: "Complete cloud infrastructure setup and management"
=======
      icon: Shield,
<<<<<<< HEAD
      title: 'Cloud Security',
      description: 'Comprehensive security solutions to protect your cloud infrastructure and data.',
      features: ['Identity management', 'Data encryption', 'Compliance auditing', 'Threat detection']

>>>>>>> origin/cursor/analyze-improve-and-deploy-application-1247
=======
'use client';

import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Cloud, Server, Database, Shield, Zap, CheckCircle, ArrowRight } from 'lucide-react';

const CloudServicesPage: React.FC = () => {
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-1460
    }
  ];
<<<<<<< HEAD

  const benefits = [
<<<<<<< HEAD
    "99.9% Uptime Guarantee",
    "24/7 Expert Support",
    "Cost Optimization",
    "Compliance Ready",
    "Disaster Recovery",
    "Real-time Monitoring"
=======
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-1460
  ];

  return (
    <>
      <Helmet>
<<<<<<< HEAD
        <title>Cloud Services - Zion Tech Group</title>
        <meta name="description" content="Comprehensive cloud solutions including infrastructure, security, and scalability services." />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
<<<<<<< HEAD
<<<<<<< HEAD
        <section className="relative py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                Cloud Services
<<<<<<< HEAD
              </h1>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
                Transform your business with our comprehensive cloud solutions. 
                Scalable, secure, and optimized for performance.
=======
        <div className="relative py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Cloud Services
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Transform your business with our comprehensive cloud solutions
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center group"
              >
                Get Started
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/demo"
                className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 group hover:scale-105"
              >
                Free Consultation
              </Link>
            </div>
          </div>
        </div>
        </section>

        {/* Key Benefits */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Why Choose Our Cloud Services?
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                We deliver cloud solutions that provide real business value through innovation, security, and scalability.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <div key={index} className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105">
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-gray-300 leading-relaxed">
                    {service.description}
                  </p>
=======
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-13a2
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};
                  </p>
                </div>
              ))}
=======
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
    {name: 'Professional',
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
      ]}]
  return(<div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">)</div>
      <Helmet />
        <title>Cloud Services - Zion Tech Group | Cloud Solutions & Migration</title>
        <meta name="description" content="Expert cloud services including migration, infrastructure, security, and database solutions. Transform your business with our cloud expertise." />
        <meta name="keywords" content="cloud services, cloud migration, AWS, Azure, GCP, cloud infrastructure, database solutions, cloud security" />
        <meta property="og: title" content="Cloud Services - Zion Tech Group" />,
        <meta property="og: description" content="Expert cloud solutions and migration services" />,
        <meta property="og: type" content="website" />,
        <meta name="twitter: card" content="summary_large_image" />,
        <meta name="twitter: title" content="Cloud Services - Zion Tech Group" />,
        <meta name="twitter: description" content="Expert cloud solutions and migration services" />,
      </Helmet>

      {/* Hero Section */} <section className="relative py-20 px-4 sm: px-6 lg:px-8">,</section>
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-4xl md: text-6xl font-bold text-white mb-6">,</h1>
              <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">Cloud Services;</span>
=======
      ]
    }

  ]
  return (

    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900"></div>
      <Helmet></Helmet>
        <title></titl>Cloud Services - Zion Tech Group | Cloud Solutions & Migration</title>
        <meta name="description" content="Expert cloud services including migration, infrastructure, security, and database solutions. Transform your business with our cloud expertise." /></meta>
        <meta name="keywords" content="cloud services, cloud migration, AWS, Azure, GCP, cloud infrastructure, database solutions, cloud security" /></meta>
        <meta property="og:title" content="Cloud Services - Zion Tech Group" /></meta>
        <meta property="og:description" content="Expert cloud solutions and migration services" /></meta>
        <meta property="og:type" content="website" /></meta>
        <meta name="twitter:card" content="summary_large_image" /></meta>
        <meta name="twitter:title" content="Cloud Services - Zion Tech Group" /></meta>
        <meta name="twitter:description" content="Expert cloud solutions and migration services" /></meta>
      </Helmet>

      {/* Hero Section */}
<<<<<<< HEAD
      <section className="relative py-20 px-4 sm:px-6 lg:px-8"></section>
        <div className="max-w-7xl mx-auto"></div>
          <div className="text-center"></div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6"></h1>
              <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent"></span>
=======
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-1247
                Cloud Services
>>>>>>> cursor/fix-errors-and-merge-to-main-e1a2
              </span>
              <br /></br>
              <span className="text-white"></spa>Solutions</span>
            </h1>
<<<<<<< HEAD
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">Transform your business with our comprehensive cloud services.</p>
              From migration to management, we provide end-to-end cloud solutions.
            </p>
            <div className="flex flex-col sm: flex-row gap-4 justify-center">,</div>
              <button className="bg-gradient-to-r from-purple-500 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover: from-purple-600 hover:to-blue-700 transition-all duration-300 flex items-center">,</button>
                Get Started;
                <ArrowRight className="ml-2 h-5 w-5" />
              </button>
              <button className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover: bg-white hover:text-gray-900 transition-all duration-300">,</button>
                Learn More;
=======
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto"></p>
              Transform your business with our comprehensive cloud services. 
              From migration to management, we provide end-to-end cloud solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center"></div>
              <button className="bg-gradient-to-r from-purple-500 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-purple-600 hover:to-blue-700 transition-all duration-300 flex items-center"></button>
                Get Started
                <ArrowRight className="ml-2 h-5 w-5" /></ArrowRight>
              </button>
              <button className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300"></button>
                Learn More
>>>>>>> cursor/fix-errors-and-merge-to-main-e1a2
              </button>
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-1232
            </div>
          </div>
        </div>

<<<<<<< HEAD
              <p className="text-xl text-gray-300 mb-8">
                Let our cloud experts help you migrate, optimize, and secure your infrastructure.
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-1061
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="group bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center shadow-lg hover:shadow-cyan-500/25 hover:scale-105"
                >
                  Get Started
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  to="/consultation"
                  className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 hover:scale-105"
                >
                  Free Consultation
                </Link>
                <Link
                  to="/demo"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-xl transition-all duration-300 border border-white/20"
                >
                  View Demo
                  <ArrowRight className="w-5 h-5" />
                </Link>
<<<<<<< HEAD
=======
      </section>

<<<<<<< HEAD
<<<<<<< HEAD
      {/* Services Section */} <section className="py-20 px-4 sm: px-6 lg:px-8">,</section>
        <div className="max-w-7xl mx-auto">
=======
      {/* Services Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-1247
          <div className="text-center mb-16">
            <h2 className="text-3xl md: text-4xl font-bold text-white mb-4">,</h2>
              Our Cloud Services;
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">Comprehensive cloud solutions designed to accelerate your digital transformation.</p>
            </p>
          </div>

          <div className="grid md: grid-cols-2 lg:grid-cols-4 gap-8">,</div>
            {services.map((service, index) => (
              <div key={index}className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover: bg-white/20 transition-all duration-300">,</div>
                <div className="flex items-center mb-4">
                  <div className="bg-purple-500 p-3 rounded-lg">
                    <service.icon className="h-6 w-6 text-white" />
                  </div>
=======
      title: 'Security & Compliance',
      description: 'Enterprise-grade security with full compliance and data protection'
    },
    {
      icon: Zap,
      title: 'High Performance',
      description: 'Lightning-fast cloud services with 99.9% uptime guarantee'
    },
    {
      icon: Globe,
      title: 'Global Reach',
      description: 'Worldwide cloud deployment and support for international businesses'
    };
  ];
const benefits = [
];
    'Scalable cloud infrastructure',
    'Enterprise-grade security',
    '24/7 monitoring and support',
    'Cost-effective solutions',
    'Easy migration and integration',
    'Compliance and data protection',
    'High availability and reliability',
    'Expert cloud management'
  ];
  return (<div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <title>Page | Zion Tech Group<
        <meta name="description" content="Professional Page services by Zion Tech Group. Advanced AI and IT solutions for your business." 
        <meta name="keywords" content="page, AI solutions, IT services, Zion Tech Group, page" 
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
              Transform your business with our advanced page solutions. 
              Powered by cutting-edge AI technology and industry expertise.
            <
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-purple-500 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-purple-600 hove,
    r:to-blue-700 transition-all duration-300 flex items-center">
                Get Started
                Learn More
              <
            <
          <
        <
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
            </div>
          </div>
        </section>
        {/* Features Section */};
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
                  <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg mb-4">
                    <feature .icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                  <p className="text-gray-300">{feature.description}</p>
                </div>
              ));
            </div>
          </div>
        </section>
        {/* Benefits Section */};
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-12 text-center">Why Choose Our Cloud Services?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0" />
                  <span className="text-gray-300 text-lg">{benefit}</span>
                </div>
              ));
            </div>
          </div>
        </section>
        {/* CTA Section */};
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
            </div>
          ))}
        </div>

        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 mb-16">
          <h2 className="text-3xl font-bold text-white text-center mb-8">
            Why Choose Our Cloud Services?
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-center space-x-3">
                <CheckCircle className="h-6 w-6 text-green-400 flex-shrink-0" />
                <span className="text-gray-300">{benefit}</span>
              </div>
            ))}
          </div>
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-1460
  );
};
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
                <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-600 rounded-lg mb-4">
                  <feature .icon className="h-6 w-6 text-white" />
>>>>>>> cursor/fix-errors-and-merge-to-main-6ce7
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
                <p className="text-gray-300 mb-4">{service.description</p>}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex}className="flex items-center text-sm text-gray-300">
                      <CheckCircle className="h-4 w-4 text-green-400 mr-2 flex-shrink-0" />
                      {feature} </li>
=======
      {/* Services Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8"></section>
        <div className="max-w-7xl mx-auto"></div>
          <div className="text-center mb-16"></div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4"></h2>
              Our Cloud Services
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto"></p>
              Comprehensive cloud solutions designed to accelerate your digital transformation.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"></div>
            {services.map((service, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all duration-300"></div>
                <div className="flex items-center mb-4"></div>
                  <div className="bg-purple-500 p-3 rounded-lg"></div>
                    <service.icon className="h-6 w-6 text-white" /></service>
                  </div>
                </div>
                <h3 className="text-xl font-bold text-white mb-3"></h>{service.title}</h3>
                <p className="text-gray-300 mb-4">{service.description}</p>
                <ul className="space-y-2"></ul>
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-300"></li>
                      <CheckCircle className="h-4 w-4 text-green-400 mr-2 flex-shrink-0" /></CheckCircle>
                      {feature}
                    </li>
>>>>>>> cursor/fix-errors-and-merge-to-main-e1a2
                  ))}
                </ul>
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-1232
              </div>
<<<<<<< HEAD
            </div>
          </div>
        </section>

<<<<<<< HEAD
        {/* Services Grid */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Our Cloud Solutions
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Comprehensive cloud services designed to accelerate your digital transformation
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <div
                  key={index}
                  className="bg-slate-800/50 backdrop-blur-xl rounded-xl p-6 border border-cyan-500/20 hover:border-cyan-400/40 transition-all duration-300 hover:transform hover:scale-105"
                >
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center text-white mb-4">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
                  <p className="text-gray-300">{service.description}</p>
=======
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Transform your business with our comprehensive cloud solutions. From migration to management, 
              we provide end-to-end cloud services that drive growth and efficiency.
=======
        <div className="relative py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Enterprise Cloud Solutions
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Transform your business with our comprehensive cloud services. 
              We provide scalable, secure, and reliable cloud infrastructure solutions.
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-0ff3
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
              >
                Get Started
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link
                to="/consultation"
                className="inline-flex items-center px-8 py-4 border border-cyan-400 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-400 hover:text-white transition-all duration-300"
              >
                Free Consultation
              </Link>
            </div>
          </div>
        </div>

        {/* Services Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4">Our Cloud Services</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Comprehensive cloud solutions designed to accelerate your digital transformation
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {services.map((service, index) => (
                <div key={index} className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700 hover:border-cyan-400 transition-all duration-300">
                  <div className="text-cyan-400 mb-4">
                    {service.icon}
=======
<<<<<<< HEAD
      {/* Benefits Section */} <section className="py-20 px-4 sm: px-6 lg:px-8 bg-white/5">,</section>
        <div className="max-w-7xl mx-auto">
=======
            ))};
          </div>
        </div>
      </section>
      {/* Benefits Section */};
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
          <div className="max-w-7xl mx-auto">
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-1247
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
=======
      {/* Benefits Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5"></section>
        <div className="max-w-7xl mx-auto"></div>
          <div className="text-center mb-16"></div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4"></h2>
              Why Choose Our Cloud Services?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto"></p>
              Experience the benefits of working with cloud experts who understand your business needs.
            </p>
          </div>
<<<<<<< HEAD

<<<<<<< HEAD
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"></div>
=======
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
=======
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
>>>>>>> cursor/fix-errors-and-merge-to-main-6ce7
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-1247
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center"></div>
                <div className="bg-gradient-to-r from-purple-500 to-blue-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4"></div>
                  <CheckCircle className="h-8 w-8 text-white" /></CheckCircle>
>>>>>>> cursor/fix-errors-and-merge-to-main-e1a2
                </div>
                <p className="text-white font-medium">{benefit</p>}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

<<<<<<< HEAD
<<<<<<< HEAD
      {/* Pricing Section */} <section className="py-20 px-4 sm: px-6 lg:px-8">,</section>
        <div className="max-w-7xl mx-auto">
=======
      {/* Pricing Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-1247
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
=======
      {/* Pricing Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8"></section>
        <div className="max-w-7xl mx-auto"></div>
          <div className="text-center mb-16"></div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4"></h2>
              Flexible Pricing Plans
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto"></p>
              Choose the plan that best fits your business needs and budget.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8"></div>
            {pricing.map((plan, index) => (
              <div key={index} className={`bg-white/10 backdrop-blur-sm rounded-xl p-8 relative ${plan.popular ? 'ring-2 ring-purple-500' : ''}`}></div>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2"></div>
                    <span className="bg-gradient-to-r from-purple-500 to-blue-600 text-white px-4 py-2 rounded-full text-sm font-medium"></span>
                      Most Popular
                    </span>
                  </div>
                )}
                <div className="text-center mb-8"></div>
                  <h3 className="text-2xl font-bold text-white mb-2"></h>{plan.name}</h3>
                  <div className="text-4xl font-bold text-white mb-2"></div>
                    {plan.price}
                    <span className="text-lg text-gray-300 font-normal"></spa>/{plan.period}</span>
>>>>>>> cursor/fix-errors-and-merge-to-main-e1a2
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-1232
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                  <p className="text-gray-300 mb-4">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-400">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-0f9e
                </div>
<<<<<<< HEAD
              ))}
            </div>
          </div>
        </section>

<<<<<<< HEAD
        {/* Benefits Section */}
<<<<<<< HEAD
        <section className="py-16 px-4 sm:px-6 lg:px-8 relative z-10 bg-gradient-to-r from-cyan-900/20 to-purple-900/20">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Why Choose Our Cloud Services?
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Experience the benefits of enterprise-grade cloud infrastructure
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {benefits.map((benefit, index) => (
                <div
                  key={index}
                  className="flex items-center space-x-3 bg-slate-800/30 backdrop-blur-xl rounded-lg p-4 border border-cyan-500/20"
                >
                  <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0" />
                  <span className="text-white font-medium">{benefit}</span>
=======
        <section className="py-20 px-4 bg-gray-800/30">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4">Why Choose Our Cloud Services?</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Experience the benefits of cloud computing with our expert guidance and support
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full mb-4">
                    {benefit.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
                  <p className="text-gray-300">{benefit.description}</p>
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-0f9e
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
<<<<<<< HEAD
        <section className="py-16 px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-7xl mx-auto">
            <div className="text-center bg-gradient-to-r from-cyan-900/30 to-purple-900/30 rounded-2xl p-12 border border-cyan-500/20">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Ready to Scale Your Business?
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Let our cloud experts help you build a robust, scalable infrastructure that grows with your business.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 px-8 py-4 rounded-lg text-white font-semibold transition-all duration-300 flex items-center justify-center space-x-2"
                >
                  <span>Start Your Cloud Journey</span>
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <Link
                  to="/pricing"
                  className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
                >
                  View Pricing
                </Link>
=======
                <ul className="space-y-4 mb-8"></ul>
                  {plan.features.map((feature, featureIndex) => (
<<<<<<< HEAD
                    <li key={featureIndex}className="flex items-center text-gray-300">
                      <CheckCircle className="h-5 w-5 text-green-400 mr-3 flex-shrink-0" />
                      {feature} </li>
                  ))}
                </ul>
                <button className={`w-full py-3 rounded-lg font-semibold transition-all duration-300 ${
                  plan.popular;
                    ? 'bg-gradient-to-r from-purple-500 to-blue-600 text-white hover: from-purple-600 hover:to-blue-700',
                    : 'bg-white/20 text-white hover: bg-white/30',}`}>Get Started;</button>
=======
                    <li key={featureIndex} className="flex items-center text-gray-300"></li>
                      <CheckCircle className="h-5 w-5 text-green-400 mr-3 flex-shrink-0" /></CheckCircle>
                      {feature}
                    </li>
                  ))}
                </ul>
                <button className={`w-full py-3 rounded-lg font-semibold transition-all duration-300 ${
                  plan.popular
                    ? 'bg-gradient-to-r from-purple-500 to-blue-600 text-white hover:from-purple-600 hover:to-blue-700'
                    : 'bg-white/20 text-white hover:bg-white/30'
                }`}></button>
                  Get Started
>>>>>>> cursor/fix-errors-and-merge-to-main-e1a2
                </button>
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-1232
              </div>
<<<<<<< HEAD
=======
        {/* CTA Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Transform Your Cloud Infrastructure?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Let our cloud experts help you migrate, optimize, and secure your infrastructure.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl transition-all duration-300 hover:scale-105"
              >
                Start Your Cloud Journey
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                to="/pricing"
                className="inline-flex items-center gap-2 px-8 py-4 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-xl transition-all duration-300 border border-white/20"
              >
                View Pricing
                <ArrowRight className="w-5 h-5" />
              </Link>
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-0ff3
=======
              </div>
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-13a2
            </div>
=======
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6">Ready to Move to the Cloud?</h2>
            <p className="text-xl text-gray-300 mb-8">
              Let our experts help you migrate to the cloud and unlock new possibilities for your business.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
            >
              Start Your Cloud Journey
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-0f9e
=======
            ))};
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-1247
          </div>
<<<<<<< HEAD
        </section>
      </div>
    </>
  );
}
=======
        </div>
      </section>
<<<<<<< HEAD

<<<<<<< HEAD
<<<<<<< HEAD
      {/* CTA Section */} <section className="py-20 px-4 sm: px-6 lg:px-8">,</section>
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md: text-4xl font-bold text-white mb-6">,</h2>
=======
      {/* CTA Section */}
      <section className="py-20 px-4 sm: px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-1247
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
=======
      {/* CTA Section */}
      <section className="py-20 px-4 sm: px-6 lg:px-8"></section>
        <div className="max-w-4xl mx-auto text-center"></div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6"></h2>
            Ready to Transform Your Business with Cloud?
          </h2>
          <p className="text-xl text-purple-100 mb-8"></p>
            Contact our cloud experts to discuss your needs and get a customized solution.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center"></div>
            <button className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 flex items-center justify-center"></button>
              <Phone className="mr-2 h-5 w-5" /></Phone>
              Call Now
            </button>
            <button className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-all duration-300 flex items-center justify-center"></button>
              <Mail className="mr-2 h-5 w-5" /></Mail>
              Email Us
>>>>>>> cursor/fix-errors-and-merge-to-main-e1a2
            </button>
          </div>
        </div>
      </section>
    </div>

<<<<<<< HEAD
  ),
};

export default CloudServicesPage;
=======
  )
}
export default CloudServicesPage
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-1247
  </button>
  </button>
  </h1>
  </div>
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/fix-errors-and-merge-to-main-e1a2
=======
>>>>>>> cursor/website-audit-and-update-with-deployment-c0e8
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-1232
=======
=======
      {/* CTA Section */};
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
              <button className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300">
                Get Started
              </button>
              <button className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-all duration-300">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};
export default CloudServicesPage;
    </div>)
export default PagePage;
>>>>>>> cursor/fix-errors-and-merge-to-main-6ce7
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-1247
