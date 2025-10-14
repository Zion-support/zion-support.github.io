<<<<<<< HEAD
import React from 'react'
import { Helmet } from 'react-helmet-async'
import { Right, Wifi, Circle, Zap, Globe, Smartphone } from 'lucide-react'
import React from 'react';'
import { Helmet , Right,  Wifi,  Circle,  Zap,  Globe,  Smartphone  } from 'lucide-react';
const FiveGSolutionsPage: React.FC = () => {
  const features = [
    {
      icon: Zap,'
      title: 'Ultra-Fast Speeds','
      description: 'Experience lightning-fast 5G connectivity with speeds up to 10 Gbps','
      benefits: ['10x faster than 4G', 'Low latency', 'High bandwidth', 'Reliable connection']}
    },
    {
      icon: Globe,'
      title: 'Global Coverage','
      description: 'Comprehensive 5G network coverage across multiple regions','
      benefits: ['Wide coverage', 'Seamless roaming', 'International support', 'Network redundancy']}
    },
    {
      icon: Smartphone,'
      title: 'Mobile Optimization','
      description: 'Optimized 5G solutions for mobile devices and applications','
      benefits: ['Mobile-first design', 'App optimization', 'Battery efficiency', 'Device compatibility']}
    },
    {
      icon: Wifi,
      title: 'IoT Connectivity',
      description: 'Connect thousands of IoT devices with 5G technology',
      benefits: ['Massive IoT support', 'Low power consumption', 'Real-time monitoring', 'Scalable solutions']
title: 'IoT Connectivity',
      description: 'Connect thousands of IoT devices with 5G technology',
      benefits: ['Massive IoT support', 'Low power consumption', 'Real-time monitoring', 'Scalable solutions']
'
      title: 'IoT Connectivity','
      description: 'Connect thousands of IoT devices with 5G technology','
      benefits: ['Massive IoT support', 'Low power consumption', 'Real-time monitoring', 'Scalable solutions']
}
    }
  ]
  const solutions = [
    {
      title: '5G Network Infrastructure',      description: 'Complete 5G network setup and optimization',
      description: 'Complete 5G network setup and optimization',
      price: 'Starting at $50,000',
      features: ['Network planning', 'Tower installation', 'Signal optimization', 'Performance monitoring']
'
      title: '5G Network Infrastructure','
      description: 'Complete 5G network setup and optimization','
      price: 'Starting at $50,000','
      features: ['Network planning', 'Tower installation', 'Signal optimization', 'Performance monitoring']}
    },
    {'
      title: '5G Mobile Applications','
      description: 'Custom mobile apps optimized for 5G networks','
      price: 'Starting at $25,000','
      features: ['App development', '5G optimization', 'Testing & QA', 'Deployment support']}
    },
    {'
      title: '5G IoT Solutions','
      description: 'IoT device connectivity and management platform','
      price: 'Starting at $35,000','
      features: ['Device management', 'Data analytics', 'Real-time monitoring', 'Scalable architecture']
}
=======
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { ArrowRight, Zap, Globe, Smartphone, Wifi, CheckCircle } from 'lucide-react';

const FiveGSolutionsPage: React.FC = () => {
  const features = [
    {
      icon: Zap,
      title: 'Ultra-Fast Speeds',
      description: 'Experience lightning-fast 5G connectivity with speeds up to 10 Gbps',
      color: 'from-yellow-400 to-orange-500'
    },
    {
      icon: Globe,
      title: 'Global Coverage',
      description: 'Comprehensive 5G network coverage across multiple countries and regions',
      color: 'from-blue-400 to-cyan-500'
    },
    {
      icon: Smartphone,
      title: 'Mobile Integration',
      description: 'Seamless integration with mobile devices and IoT applications',
      color: 'from-purple-400 to-pink-500'
    },
    {
      icon: Wifi,
      title: 'Low Latency',
      description: 'Ultra-low latency for real-time applications and gaming',
      color: 'from-green-400 to-emerald-500'
>>>>>>> cursor/fix-errors-and-merge-to-main-6ac1
    }
  ];
    }
  ]
  return (
<<<<<<< HEAD
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      <Helmet>
        <title>5G Solutions - Zion Tech Group</title>
        <meta name="description" content="Advanced 5G solutions for ultra-fast connectivity and IoT integration" />
        <meta name="keywords" content="5G, connectivity, IoT, mobile, enterprise, solutions" />
      </Helmet>
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10"></div>
        <div className="container mx-auto px-4 py-20">
          <div className="text-center">
            <div className="flex items-center justify-center mb-6">
              <Wifi className="w-4 h-4 text-blue-400 mr-2" />
              <span className="text-blue-400 text-sm font-medium">Next-Gen Connectivity</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              5G <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Solutions</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-8">
              Transform your business with ultra-fast 5G connectivity. Experience lightning-fast speeds, 
              low latency, and seamless IoT integration for the digital future.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 flex items-center">
                Get Started
                <Right className="w-5 h-5 ml-2" />
              </button>
              <button className="border border-blue-400 text-blue-400 px-8 py-3 rounded-lg font-semibold hover:bg-blue-400 hover:text-white transition-all duration-300">
=======
    <div className="min-h-screen bg-white">
      <Helmet>
        <title>5G Solutions - Zion Tech Group</title>
        <meta name="description" content="Professional 5G solutions and network infrastructure services by Zion Tech Group." />
      </Helmet>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              5G Solutions
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Transform your business with cutting-edge 5G technology and infrastructure solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition-colors">
                Get Started
              </button>
              <button className="border border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white font-bold py-3 px-6 rounded-lg transition-colors">
>>>>>>> cursor/fix-errors-and-merge-to-main-6ac1
                Learn More
              </button>
            </div>
          </div>
        </div>
      </section>
<<<<<<< HEAD
=======

>>>>>>> cursor/fix-errors-and-merge-to-main-6ac1
      {/* Features Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
<<<<<<< HEAD
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Why Choose Our 5G Solutions?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our 5G technology delivers unmatched performance, reliability, and innovation for your business needs.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => {
              const IconComponent = feature.icon
              return (
              const IconComponent = feature.icon;
              return (}
                <div key={index} className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700 hover:border-blue-500 transition-all duration-300">
                  <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg mb-4">
                    <IconComponent className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                  <p className="text-gray-300 mb-4">{feature.description}</p>
                  <ul className="space-y-2">
                    {feature.benefits.map((benefit, idx) => (}
                      <li key={idx} className="flex items-center text-sm text-gray-400">
                        <Circle className="w-3 h-3 text-blue-400 mr-2" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              )})}
          </div>
        </div>
      </section>
      {/* Solutions Section */}
      <section className="py-20 bg-slate-800/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Our 5G Solutions
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose the perfect 5G solution for your business size and requirements.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {solutions.map((solution, index) => (}
              <div key={index} className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 border border-slate-700 hover:border-blue-500 transition-all duration-300">
                <h3 className="text-2xl font-bold text-white mb-4">{solution.title}</h3>
                <p className="text-gray-300 mb-6">{solution.description}</p>
                <ul className="space-y-3">
                  {solution.features.map((feature, idx) => (}
                    <li key={idx} className="flex items-center text-gray-400">
                      <Circle className="w-4 h-4 text-blue-400 mr-3" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <button className="w-full mt-6 bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300">
                  Learn More
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Experience 5G?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Join the 5G revolution and transform your business with ultra-fast connectivity.
          </p>
          <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300">
            Get Started Today
          </button>
=======
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Why Choose Our 5G Solutions?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our comprehensive 5G solutions provide the speed, reliability, and scalability your business needs.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center">
                <div className={`w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-to-r ${feature.color} flex items-center justify-center`}>
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  {feature.title}
                </h3>
                <p className="text-gray-600">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="bg-gray-50 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
              Key Benefits
            </h2>
            
            <div className="space-y-8">
              <div className="flex items-start">
                <CheckCircle className="w-6 h-6 text-green-500 mr-4 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    Enhanced Performance
                  </h3>
                  <p className="text-gray-600">
                    Experience up to 100x faster speeds compared to 4G networks.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <CheckCircle className="w-6 h-6 text-green-500 mr-4 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    Future-Ready Infrastructure
                  </h3>
                  <p className="text-gray-600">
                    Built to support the next generation of connected devices and applications.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <CheckCircle className="w-6 h-6 text-green-500 mr-4 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    Scalable Solutions
                  </h3>
                  <p className="text-gray-600">
                    Easily scale your network capacity as your business grows.
                  </p>
                </div>
              </div>
            </div>
          </div>
>>>>>>> cursor/fix-errors-and-merge-to-main-6ac1
        </div>
      </section>
    </div>
  );
}
export default FiveGSolutionsPage;
  )}
export default FiveGSolutionsPage
};
export default FiveGSolutionsPage;'
