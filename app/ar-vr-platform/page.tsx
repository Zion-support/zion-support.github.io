<<<<<<< HEAD
=======
'use client';
import React from 'react';
<<<<<<< HEAD
import { Helmet } from 'react-helmet-async'
import { CheckCircle, ArrowRight, Phone, Mail, MapPin, Zap, Shield, Brain, Globe } from 'lucide-react'
const ARVRPlatformPage: React.FC = () => {
  const features = [
=======
import { Helmet } from 'react-helmet-async';
import { CheckCircle, ArrowRight, Phone, Mail, MapPin, Zap, Shield, Brain, Globe } from 'lucide-react';
;
const ARVRPlatformPage: React.FC = () => {
const features = [
];
};
>>>>>>> cursor/fix-errors-and-merge-to-main-6ce7
    {
      icon: Brain,
      title: 'AI-Powered AR/VR',
      description: 'Advanced AI technology to create immersive augmented and virtual reality experiences',},
    {icon: Zap,
      title: 'Real-Time Rendering',
      description: 'Lightning-fast 3D rendering and real-time interaction for optimal user experience',},
    {icon: Shield,
      title: 'Enterprise Security',
<<<<<<< HEAD
      description: 'Bank-level security with encryption and compliance standards for your AR/VR data',},
    {icon: Globe,
=======
      description: 'Bank-level security with encryption and compliance standards for your AR/VR data'
    },
    {
      icon: Globe,
<<<<<<< HEAD
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-1247
      title: 'Cross-Platform Support',
      description: 'Deploy across multiple devices and platforms for maximum reach and accessibility',}];
  const benefits = [
    'Advanced AR/VR technology integration',
    'Real-time 3D rendering and interaction',
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
    'Cross-platform deployment capabilities',
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
        <title>AR/VR Platform | Zion Tech Group</title>
        <meta name="description" content="Professional AR/VR Platform services by Zion Tech Group. Advanced AI and IT solutions for your business." />
      </Helmet>
<<<<<<< HEAD
      {/* Hero Section */} <section className="relative py-20 px-4 sm: px-6 lg:px-8">,</section>
=======
<<<<<<< HEAD
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm: px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
=======
      {/* Hero Section */};
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-1247
        <div className="max-w-7xl mx-auto">
>>>>>>> cursor/fix-errors-and-merge-to-main-6ce7
          <div className="text-center">
            <h1 className="text-4xl md: text-6xl font-bold text-white mb-6">,</h1>
              <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">AR/VR Platform;</span>
  </
              <br />
              <span className="text-white">Solutions</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">Transform your business with our advanced AR/VR platform solutions.</p>
              Powered by cutting-edge AI technology and industry expertise.
            </p>
            <div className="flex flex-col sm: flex-row gap-4 justify-center">,</div>
              <button className="bg-gradient-to-r from-purple-500 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover: from-purple-600 hover:to-blue-700 transition-all duration-300 flex items-center">,</button>
                Get Started;
                <ArrowRight className="ml-2 h-5 w-5" />
              </button>
              <button className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover: bg-white hover:text-gray-900 transition-all duration-300">,</button>
                Learn More,
  </
            </div>
          </div>
        </div>
      </section>
<<<<<<< HEAD
      {/* Features Section */} <section className="py-20 px-4 sm: px-6 lg:px-8">,</section>
        <div className="max-w-7xl mx-auto">
=======
<<<<<<< HEAD
      {/* Features Section */}
=======
      {/* Features Section */};
>>>>>>> cursor/fix-errors-and-merge-to-main-6ce7
      <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-1247
          <div className="text-center mb-16">
            <h2 className="text-3xl md: text-4xl font-bold text-white mb-4">,</h2>
              Why Choose Our AR/VR Platform?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
<<<<<<< HEAD
<<<<<<< HEAD
=======
Our AR/VR solutions deliver unmatched performance, security, and scalability.
            </p>
          </div>
<<<<<<< HEAD
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center hover:bg-white/20 transition-all duration-300">
                <feature.icon className="h-12 w-12 text-purple-400 mx-auto mb-4" />
=======
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
                <feature .icon className="w-12 h-12 text-purple-400 mb-4" />
>>>>>>> cursor/fix-errors-and-merge-to-main-6ce7
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-1247
=======
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-1460
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-300">{feature.description</p>}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
<<<<<<< HEAD
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
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
          <div className="grid grid-cols-1 md: grid-cols-2 gap-6">,</div>
            {benefits.map((benefit, index) => (
              <div key={index}className="flex items-center space-x-3">
                <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0" />
                <span className="text-gray-300">{benefit</span>}</span>
              </div>
            ))}
          </div>
=======

      {/* Benefits Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Key Benefits
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-1460
        </div>
      </section>
<<<<<<< HEAD
      {/* CTA Section */} <section className="py-20 px-4 sm: px-6 lg:px-8">,</section>
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-8 md: p-12">,</div>
            <h2 className="text-3xl md: text-4xl font-bold text-white mb-4">,</h2>
=======
<<<<<<< HEAD
      {/* CTA Section */}
      <section className="py-20 px-4 sm: px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
=======
      {/* CTA Section */};
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
>>>>>>> cursor/fix-errors-and-merge-to-main-6ce7
          <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-8 md:p-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-1247
              Ready to Get Started?
            </h2>
            <p className="text-xl text-purple-100 mb-8">Contact our experts to discuss your AR/VR platform needs and get a customized solution.</p>
            </p>
            <div className="flex flex-col sm: flex-row gap-4 justify-center">,</div>
              <button className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover: bg-gray-100 transition-all duration-300 flex items-center justify-center">,</button>
                <Phone className="mr-2 h-5 w-5" />
                Call Now;
  </
              <button className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover: bg-white hover:text-purple-600 transition-all duration-300 flex items-center justify-center">,</button>
                <Mail className="mr-2 h-5 w-5" />
                Email Us;
  </
            </div>
          </div>
        </div>
      </section>
    </div>
<<<<<<< HEAD
  ),
};

export default ARVRPlatformPage;
=======
  )
}
export default ARVRPlatformPage
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-1247
  </button>
  </button>
  </h2>
  </button>
  </span>
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-1232
