<<<<<<< HEAD
<<<<<<< HEAD
=======
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
export default function CloudMigration() {
  return (
    <>
      <Helmet>
        <title>Cloud Migration - Zion Tech Group</title>
        <meta
          name="description"
          content="Professional cloud migration services from Zion Tech Group"
        />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-indigo-900 flex items-center justify-center">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold text-white mb-6">Cloud Migration</h1>
          <p className="text-lg text-gray-300 mb-8">
            Professional cloud migration services coming soon.
          </p>

          <Link
            to="/contact"
            className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
          >
            Contact Us
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
=======
'use client';
import React from 'react';
<<<<<<< HEAD
import { Helmet } from 'react-helmet-async'
import { CheckCircle, ArrowRight, Phone, Mail, MapPin, Zap, Shield, Brain, Globe } from 'lucide-react'
const CloudMigrationPage: React.FC = () => {
  const features = [
=======
import { Helmet } from 'react-helmet-async';
import { CheckCircle, ArrowRight, Phone, Mail, MapPin, Zap, Shield, Brain, Globe } from 'lucide-react';
;
const CloudMigrationPage: React.FC = () => {
const features = [
];
};
    {
      icon: Zap,
      title: 'High Performance',
      description: 'Lightning-fast processing and real-time analytics for optimal results'
    },
>>>>>>> cursor/fix-errors-and-merge-to-main-6ce7
    {
      icon: Shield,
      title: 'Secure Cloud Migration',
<<<<<<< HEAD
      description: 'Safe and secure migration of your applications and data to the cloud',},
    {}];
=======
      description: 'Safe and secure migration of your applications and data to the cloud'
    },
    {
icon: Zap,
      title: 'Zero Downtime Migration',
      description: 'Seamless migration with minimal to zero downtime for your business'
    },
    {
      icon: Brain,
      title: 'AI-Powered Migration',
      description: 'Intelligent migration planning and execution powered by AI technology'
    },
    {
      icon: Globe,
<<<<<<< HEAD
      title: 'Multi-Cloud Support',
      description: 'Support for migration to AWS, Azure, GCP, and other cloud platforms'
    }
  ]
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-1247
  const benefits = [
    'Advanced cloud migration technology',
    'Real-time migration monitoring',
=======
      title: 'Global Reach',
      description: 'Worldwide deployment and support for international businesses'
    };
  ];
;
const benefits = [
];
    'Advanced AI technology integration',
    'Real-time processing and analytics',
>>>>>>> cursor/fix-errors-and-merge-to-main-6ce7
    'Enterprise-grade security and compliance',
    'Scalable and flexible migration solutions',
    '24/7 technical support',
    'Easy integration with existing systems',
    'Cost-effective pricing plans',
    'Proven track record of success'
<<<<<<< HEAD
  ]
<<<<<<< HEAD

  return(<div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">)</div>
      <Helmet />
=======
=======
  ];
>>>>>>> cursor/fix-errors-and-merge-to-main-6ce7
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-1247
        <title>Cloud Migration | Zion Tech Group</title>
        <meta name="description" content="Professional Cloud Migration services by Zion Tech Group. Advanced AI and IT solutions for your business." />
<meta name="keywords" content="cloud migration, cloud services, IT services, Zion Tech Group, cloud computing" />
      </Helmet>
<<<<<<< HEAD
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
<<<<<<< HEAD
          <h1 className="text-5xl font-bold text-white mb-6">Cloud Migration;</h1>
=======
          <h1 className="text-5xl font-bold text-white mb-6">
=======
      {/* Hero Section */};
      <section className="relative py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
>>>>>>> cursor/fix-errors-and-merge-to-main-6ce7
            Cloud Migration
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-1247
  </
<<<<<<< HEAD
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">Transform your business with our advanced cloud migration solutions.</p>
=======
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Transform your business with our advanced cloud migration solutions. 
>>>>>>> cursor/website-audit-and-update-with-deployment-c0e8
            Powered by cutting-edge AI technology and industry expertise.
          </p>
<<<<<<< HEAD
      {/* Features Section */} <section className="py-20 px-4 sm: px-6 lg:px-8">,</section>
        <div className="max-w-7xl mx-auto">
=======
        </div>
<<<<<<< HEAD
        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 mb-16">
          <h2 className="text-3xl font-bold text-white text-center mb-8">
            Why Choose Our Cloud Migration Solutions?
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
      {/* Features Section */}
=======
      </section>
      {/* Features Section */};
>>>>>>> cursor/fix-errors-and-merge-to-main-6ce7
      <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-1247
          <div className="text-center mb-16">
            <h2 className="text-3xl md: text-4xl font-bold text-white mb-4">,</h2>
              Why Choose Our Cloud Migration?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">Our cloud migration solutions deliver unmatched performance, security, and scalability.</p>
            </p>
          </div>
          <div className="grid grid-cols-1 md: grid-cols-2 lg:grid-cols-4 gap-8">,</div>
            {features.map((feature, index) => (
              <div key={index}className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover: bg-white/20 transition-all duration-300">,</div>
                <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-600 rounded-lg mb-4">
                  <feature .icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-300">{feature.description</p>}</p>

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900"></div>
      <Helmet></Helmet>
        <title></titl>Cloud Migration | Zion Tech Group</title>
        <meta name="description" content="Professional Cloud Migration services by Zion Tech Group. Advanced AI and IT solutions for your business." /></meta>
<meta name="keywords" content="cloud migration, cloud services, IT services, Zion Tech Group, cloud computing" /></meta>
      </Helmet>
      <div className="container mx-auto px-4 py-16"></div>
        <div className="text-center mb-16"></div>
          <h1 className="text-5xl font-bold text-white mb-6"></h1>
            Cloud Migration
  </

          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto"></p>
            Transform your business with our advanced cloud migration solutions. 
            Powered by cutting-edge AI technology and industry expertise.
          </p>
      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8"></section>
        <div className="max-w-7xl mx-auto"></div>
          <div className="text-center mb-16"></div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4"></h2>
              Why Choose Our Cloud Migration?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto"></p>
              Our cloud migration solutions deliver unmatched performance, security, and scalability.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"></div>
            {features.map((feature, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300"></div>
                <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-600 rounded-lg mb-4"></div>
                  <feature.icon className="h-6 w-6 text-white" /></feature>
                </div>
                <h3 className="text-xl font-semibold text-white mb-3"></h>{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>

              </div>
            ))}
          </div>
        </div>
      </section>
<<<<<<< HEAD

      {/* Benefits Section */} <section className="py-20 px-4 sm: px-6 lg:px-8 bg-white/5">,</section>
=======
<<<<<<< HEAD
      {/* Benefits Section */}
      <section className="py-20 px-4 sm: px-6 lg:px-8 bg-white/5">
          <div className="max-w-7xl mx-auto">
=======
      {/* Benefits Section */};
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-1247
        <div className="max-w-7xl mx-auto">
>>>>>>> cursor/fix-errors-and-merge-to-main-6ce7
          <div className="text-center mb-16">
            <h2 className="text-3xl md: text-4xl font-bold text-white mb-4">,</h2>
              Key Benefits,
  </
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">Experience the power of our cloud migration solutions for your business.</p>
            </p>
          </div>
          <div className="grid grid-cols-1 md: grid-cols-2 gap-6">,</div>
            {benefits.map((benefit, index) => (
              <div key={index}className="flex items-center space-x-3">
                <CheckCircle className="h-6 w-6 text-green-400 flex-shrink-0" />
                <span className="text-gray-300">{benefit</span>}</span>

      {/* Benefits Section */}
      <section className="py-20 px-4 sm: px-6 lg:px-8 bg-white/5"></section>
        <div className="max-w-7xl mx-auto"></div>
          <div className="text-center mb-16"></div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4"></h2>
              Key Benefits,
  </
            <p className="text-xl text-gray-300 max-w-3xl mx-auto"></p>
              Experience the power of our cloud migration solutions for your business.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6"></div>
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-center space-x-3"></div>
                <CheckCircle className="h-6 w-6 text-green-400 flex-shrink-0" /></CheckCircle>
                <span className="text-gray-300"></spa>{benefit}</span>

              </div>
            ))}
          </div>
        </div>
<<<<<<< HEAD
=======
<<<<<<< HEAD
<div className="text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-purple-100 mb-8">
            Contact our experts to discuss your cloud migration needs and get a customized solution.
          </p>
          <div className="flex flex-col sm: flex-row gap-4 justify-center">
            <button className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 flex items-center justify-center">
              <Phone className="mr-2 h-5 w-5" />
              Call Now
  </
            <button className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-all duration-300 flex items-center justify-center">
              <Mail className="mr-2 h-5 w-5" />
              Email Us
  </
=======
      </section>
      {/* CTA Section */};
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-8 md:p-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-purple-100 mb-8">
              Contact our experts to discuss your cloud migration needs and get a customized solution.
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
>>>>>>> cursor/fix-errors-and-merge-to-main-6ce7
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-1247
          </div>
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-1232
        </div>
      </div>
<<<<<<< HEAD
    </>
  );
}
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-0ff3
=======
    </div>
  )
}
export default CloudMigrationPage
  </button>
  </button>
  </h2>
  </section>
  </h1>
  </div>
  </div>
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-1247
