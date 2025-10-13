<<<<<<< HEAD
=======
'use client';
import React from 'react';
<<<<<<< HEAD:app-disabled/iot-edge-computing/page.tsx
<<<<<<< HEAD:app/iot-edge-computing/page.tsx
import { Helmet } from 'react-helmet-async';
import { CheckCircle, ArrowRight, Phone, Mail, MapPin, Zap, Shield, Brain, Globe } from 'lucide-react';
=======
=======

>>>>>>> origin/cursor/analyze-improve-and-deploy-application-08e3:app/iot-edge-computing/page.tsx
import { CheckCircle, Star, Wifi, Cpu, Shield, Zap, Target, BarChart, Brain, Settings, Globe, Database } from 'lucide-react';
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-084e:app-disabled/iot-edge-computing/page.tsx

const PagePage: React.FC = () => {
  const features = [
    {
      icon: Brain,
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
<<<<<<< HEAD:app-disabled/iot-edge-computing/page.tsx

      description: 'Worldwide deployment and support for international businesses',}}
  ]
  ];];];
const benefits = [
    'Proven track record of success'
  ]
return(<div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900"></div>)
      <Helmet />

  return (
<<<<<<< HEAD:app/iot-edge-computing/page.tsx
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900"></div>
      <Helmet>
        <title>Page | Zion Tech Group</title>
        <meta name="description" content="Professional Page services by Zion Tech Group. Advanced AI and IT solutions for your business." />
        <meta name="keywords" content="page, AI solutions, IT services, Zion Tech Group, page" />
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                Page
              </span>
              <br />
              <span className="text-white">Solutions</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Transform your business with our advanced page solutions. 
              Powered by cutting-edge AI technology and industry expertise.
=======
    <>

=======
  const categories = [...new Set(iotServices.map(service => service.category))];
  return (
    <>
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-08e3:app/iot-edge-computing/page.tsx
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-cyan-50">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-r from-cyan-600 to-blue-700 text-white py-20">
          <div className="absolute inset-0 bg-black opacity-20"></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                IoT & Edge Computing Services
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-cyan-100 max-w-3xl mx-auto">
                Connect the physical and digital worlds with intelligent IoT solutions and edge computing
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-white text-cyan-600 px-8 py-3 rounded-lg font-semibold hover:bg-cyan-50 transition-colors">
                  Explore IoT Solutions
                </button>
                <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-cyan-600 transition-colors">
                  Schedule Demo
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Key Benefits */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Why Choose Our IoT Services?
              </h2>
              <p className="text-xl text-gray-600">
                Comprehensive IoT solutions that transform your business with connected intelligence
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="bg-cyan-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Wifi className="w-8 h-8 text-cyan-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Connected Intelligence</h3>
                <p className="text-gray-600">Transform data into actionable insights with IoT</p>
              </div>
              <div className="text-center">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Cpu className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Edge Processing</h3>
                <p className="text-gray-600">Real-time processing at the edge for instant decisions</p>
              </div>
              <div className="text-center">
                <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Enterprise Security</h3>
                <p className="text-gray-600">Bank-level security for all IoT devices and networks</p>
              </div>
              <div className="text-center">
                <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Zap className="w-8 h-8 text-orange-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Scalable Solutions</h3>
                <p className="text-gray-600">Solutions that grow with your business needs</p>
              </div>
            </div>
          </div>
        </section>

        {/* Services by Category */}
        {_categories.map(category => (
          <section key={category} className="py-16 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  {category} Services
                </h2>
                <p className="text-xl text-gray-600">
                  Specialized {category.toLowerCase()} solutions for connected environments
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {iotServices
                  .filter(service => service.category === category)
                  .map((service, index) => (
                    <div key={index} className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
                      <div className="text-4xl mb-4">{service.icon}</div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-3">{service.title}</h3>
                      <p className="text-gray-600 mb-4">{service.description}</p>
                      
                      <div className="mb-4">
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-2xl font-bold text-cyan-600">{service.price}</span>
                          <span className="text-sm text-gray-500">Market: {service.marketPrice}</span>
                        </div>
                        <div className="text-sm text-green-600 font-semibold">
                          Save up to 45% vs market rates
                        </div>
                      </div>

                      <div className="mb-4">
                        <h4 className="font-semibold text-gray-900 mb-2">Key Features:</h4>
                        <ul className="space-y-1">
                          {service.features.map((feature, featureIndex) => (
                            <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                              <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="mb-4">
                        <h4 className="font-semibold text-gray-900 mb-2">Technologies:</h4>
                        <div className="flex flex-wrap gap-2">
                          {service.technologies.map((tech, techIndex) => (
                            <span key={techIndex} className="bg-cyan-100 text-cyan-800 text-xs px-2 py-1 rounded">
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div className="mb-6">
                        <h4 className="font-semibold text-gray-900 mb-2">Business Benefits:</h4>
                        <ul className="space-y-1">
                          {service.benefits.map((benefit, benefitIndex) => (
                            <li key={benefitIndex} className="flex items-center text-sm text-gray-600">
                              <Star className="w-4 h-4 text-yellow-500 mr-2 flex-shrink-0" />
                              {benefit}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <button className="w-full bg-cyan-600 text-white py-2 px-4 rounded-lg font-semibold hover:bg-cyan-700 transition-colors">
                        Get IoT Consultation
                      </button>
                    </div>
                  ))}
              </div>
            </div>
          </section>
        ))}

        {/* IoT Capabilities Showcase */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Our IoT Capabilities
              </h2>
              <p className="text-xl text-gray-600">
                Comprehensive IoT technologies and edge computing expertise
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="text-center p-6 bg-gradient-to-br from-cyan-50 to-blue-100 rounded-lg">
                <Wifi className="w-12 h-12 text-cyan-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Sensor Networks</h3>
                <p className="text-gray-600">Comprehensive sensor network design and deployment</p>
              </div>
              <div className="text-center p-6 bg-gradient-to-br from-blue-50 to-indigo-100 rounded-lg">
                <Cpu className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Edge Computing</h3>
                <p className="text-gray-600">Real-time processing and decision making at the edge</p>
              </div>
              <div className="text-center p-6 bg-gradient-to-br from-green-50 to-emerald-100 rounded-lg">
                <Shield className="w-12 h-12 text-green-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">IoT Security</h3>
                <p className="text-gray-600">Comprehensive security for IoT devices and networks</p>
              </div>
              <div className="text-center p-6 bg-gradient-to-br from-purple-50 to-violet-100 rounded-lg">
                <BarChart className="w-12 h-12 text-purple-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Data Analytics</h3>
                <p className="text-gray-600">Real-time analytics and machine learning for IoT data</p>
              </div>
              <div className="text-center p-6 bg-gradient-to-br from-orange-50 to-amber-100 rounded-lg">
                <Globe className="w-12 h-12 text-orange-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Smart Cities</h3>
                <p className="text-gray-600">Comprehensive smart city infrastructure solutions</p>
              </div>
              <div className="text-center p-6 bg-gradient-to-br from-pink-50 to-rose-100 rounded-lg">
                <Database className="w-12 h-12 text-pink-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Device Management</h3>
                <p className="text-gray-600">Centralized management and monitoring of IoT devices</p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-16 bg-gradient-to-r from-cyan-600 to-blue-600 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Connect Your World?
            </h2>
            <p className="text-xl mb-8 text-cyan-100">
              Contact our IoT experts for a free consultation and custom connected solution strategy
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-084e:app-disabled/iot-edge-computing/page.tsx
            </p>
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

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
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
      {/* Benefits Section */} <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">Section Title</h2>
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
        </section>
              </div>
            ))}
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
      {/* CTA Section */} <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">Section Title</h2>
      <section className="py-20 px-4 sm:px-6 lg:px-8">
  );
};

export default PagePage;
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-01d9
