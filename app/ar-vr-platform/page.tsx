'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { CheckCircle, ArrowRight, Phone, Mail, MapPin, Zap, Shield, Brain, Globe } from 'lucide-react';

const ARVRPlatformPage: React.FC = () => {
  const features = [
    {
      icon: Brain,
      title: 'AI-Powered AR/VR',
      description: 'Advanced AI technology to create immersive and intelligent augmented and virtual reality experiences'
    },
    {
      icon: Zap,
      title: 'Real-Time Rendering',
      description: 'High-performance rendering for smooth, responsive AR/VR applications'
    },
    {
      icon: Shield,
      title: 'Enterprise Security',
      description: 'Bank-level security with encryption and compliance standards for AR/VR data'
    },
    {
      icon: Globe,
      title: 'Cross-Platform Support',
      description: 'Deploy AR/VR solutions across multiple devices and platforms'
    }
  ];

  const benefits = [
    'Advanced AI-powered AR/VR experiences',
    'Real-time rendering and performance',
    'Enterprise-grade security and compliance',
    'Cross-platform compatibility',
    '24/7 technical support',
    'Easy integration with existing systems',
    'Cost-effective pricing plans',
    'Proven track record of success'
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>AR/VR Platform | Zion Tech Group</title>
        <meta name="description" content="Professional AR/VR Platform services by Zion Tech Group. Advanced AI and IT solutions for your business." />
        <meta name="keywords" content="AR VR platform, AI solutions, IT services, Zion Tech Group, augmented reality, virtual reality" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                AR/VR Platform
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Transform your business with our advanced AR/VR platform solutions. 
              Powered by cutting-edge AI technology and industry expertise.
            </p>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our AR/VR platform delivers unmatched performance, security, and scalability.
            </p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            Why Choose Our AR/VR Platform?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center">
                <feature.icon className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 px-4 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            Key Benefits
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-center space-x-3">
                <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0" />
                <span className="text-gray-300">{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-8">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-purple-100 mb-8">
            Contact our experts to discuss your AR/VR platform needs and get a customized solution.
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