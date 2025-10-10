'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { CheckCircle, ArrowRight, Phone, Mail, MapPin, Zap, Shield, Brain, Globe, Eye, Headphones, Smartphone, Monitor } from 'lucide-react';

const ARVRPlatformPage: React.FC = () => {
  const features = [
    {
      icon: Eye,
      title: 'Immersive Experiences',
      description: 'Create stunning AR/VR experiences that engage users and drive business results'
    },
    {
      icon: Headphones,
      title: 'Spatial Audio',
      description: 'Advanced spatial audio technology for realistic and immersive sound experiences'
    },
    {
      icon: Smartphone,
      title: 'Cross-Platform',
      description: 'Deploy across multiple platforms including mobile, desktop, and VR headsets'
    },
    {
      icon: Monitor,
      title: 'Real-time Rendering',
      description: 'High-performance real-time rendering for smooth and responsive experiences'
    }
  ];

  const benefits = [
    'Immersive user experiences',
    'Cross-platform compatibility',
    'Real-time performance optimization',
    'Advanced 3D graphics capabilities',
    '24/7 technical support',
    'Easy integration with existing systems',
    'Cost-effective development solutions',
    'Proven track record of success'
  ];

  const services = [
    {
      title: 'AR Application Development',
      description: 'Custom augmented reality applications for mobile and wearable devices',
      price: 'Starting at $15,000/project',
      features: ['Custom AR apps', '3D object recognition', 'Real-time tracking', 'Cross-platform support']
    },
    {
      title: 'VR Platform Development',
      description: 'Virtual reality experiences for gaming, training, and entertainment',
      price: 'Starting at $25,000/project',
      features: ['VR environments', 'Interactive elements', 'Multi-user support', 'Performance optimization']
    },
    {
      title: 'Mixed Reality Solutions',
      description: 'Combined AR/VR solutions for enterprise and consumer applications',
      price: 'Starting at $35,000/project',
      features: ['Mixed reality apps', 'Spatial computing', 'Hand tracking', 'Voice commands']
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>AR/VR Platform Development | Zion Tech Group</title>
        <meta name="description" content="Professional AR/VR platform development by Zion Tech Group. Create immersive experiences with cutting-edge technology." />
        <meta name="keywords" content="AR VR development, augmented reality, virtual reality, immersive experiences, Zion Tech Group" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                AR/VR Platform
              </span>
              <br />
              <span className="text-white">Development</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Create immersive AR/VR experiences that captivate users and drive business growth. 
              Powered by cutting-edge technology and industry expertise.
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
              Why Choose Our AR/VR Platform?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our AR/VR solutions deliver unmatched performance, immersion, and scalability.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center">
                <feature.icon className="w-12 h-12 text-purple-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Our AR/VR Services
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive AR/VR development solutions for all your immersive experience needs
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                <h3 className="text-xl font-semibold text-white mb-3">{service.title}</h3>
                <p className="text-gray-300 mb-4">{service.description}</p>
                <div className="text-2xl font-bold text-purple-400 mb-4">{service.price}</div>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <button className="w-full bg-purple-600 hover:bg-purple-700 text-white font-semibold py-2 px-4 rounded-lg transition-colors">
                  Learn More
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Why Choose Our AR/VR Solutions?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Experience the benefits of our comprehensive AR/VR development services
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-4">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0" />
                  <span className="text-gray-300">{benefit}</span>
                </div>
              ))}
            </div>
            <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-xl p-8">
              <h3 className="text-2xl font-bold text-white mb-4">Get Started Today</h3>
              <p className="text-purple-100 mb-6">
                Contact our experts to discuss your AR/VR project needs and get a customized solution.
              </p>
              <button className="bg-white text-purple-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 flex items-center">
                Contact Us
                <ArrowRight className="ml-2 h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Create Immersive Experiences?
          </h2>
          <p className="text-xl text-purple-100 mb-8">
            Get started with our AR/VR development services and bring your ideas to life.
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
      </section>
    </div>
  );
};

export default ARVRPlatformPage;