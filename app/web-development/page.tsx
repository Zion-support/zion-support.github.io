import React from 'react';
import { Link } from 'react-router-dom';
import { Code, ArrowRight, CheckCircle, Smartphone, Globe, Zap } from 'lucide-react';
import EnhancedSEO from '../components/EnhancedSEO';

const WebDevelopmentPage = () => {
  const services = [
    {
      title: 'Frontend Development',
      description: 'Modern, responsive user interfaces built with React, Next.js, and cutting-edge technologies.',
      icon: Globe,
      features: ['React & Next.js', 'Responsive Design', 'Performance Optimization']
    },
    {
      title: 'Backend Development',
      description: 'Robust server-side solutions with scalable APIs and database integration.',
      icon: Code,
      features: ['API Development', 'Database Design', 'Cloud Integration']
    },
    {
      title: 'Mobile Development',
      description: 'Cross-platform mobile applications for iOS and Android.',
      icon: Smartphone,
      features: ['React Native', 'Native Development', 'App Store Optimization']
    }
  ];

  return (
    <div className="min-h-screen">
      <EnhancedSEO 
        title="Web Development - Zion Tech Group"
        description="Professional web development services including frontend, backend, and mobile applications. Modern, scalable solutions for your business."
        keywords="web development, frontend development, backend development, mobile development, React, Next.js, API development"
      />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Web Development
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Professional web development services that deliver modern, scalable, and high-performance applications for your business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/contact" 
              className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg transition-colors flex items-center justify-center gap-2"
            >
              Get Started <ArrowRight className="w-5 h-5" />
            </Link>
            <Link 
              to="/demo" 
              className="border border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white font-bold py-3 px-8 rounded-lg transition-colors"
            >
              View Portfolio
            </Link>
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div key={index} className="bg-gray-800/50 backdrop-blur-sm rounded-lg border border-gray-700 hover:border-blue-500 transition-colors p-6">
                <IconComponent className="w-12 h-12 text-blue-400 mb-4" />
                <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
                <p className="text-gray-300 mb-4">{service.description}</p>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-400">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>

        {/* Process Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Our Development Process</h2>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 rounded-full mx-auto mb-4 flex items-center justify-center text-white font-bold text-xl">1</div>
              <h3 className="text-lg font-semibold text-white mb-2">Planning</h3>
              <p className="text-gray-300">We analyze your requirements and create a detailed project roadmap</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 rounded-full mx-auto mb-4 flex items-center justify-center text-white font-bold text-xl">2</div>
              <h3 className="text-lg font-semibold text-white mb-2">Design</h3>
              <p className="text-gray-300">We create wireframes and designs that align with your brand</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 rounded-full mx-auto mb-4 flex items-center justify-center text-white font-bold text-xl">3</div>
              <h3 className="text-lg font-semibold text-white mb-2">Development</h3>
              <p className="text-gray-300">We build your application using modern technologies and best practices</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 rounded-full mx-auto mb-4 flex items-center justify-center text-white font-bold text-xl">4</div>
              <h3 className="text-lg font-semibold text-white mb-2">Launch</h3>
              <p className="text-gray-300">We deploy your application and provide ongoing support</p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-blue-900/20 to-purple-900/20 rounded-lg p-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Build Your Next Web Application?</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Let's discuss your project requirements and create a solution that exceeds your expectations.
          </p>
          <Link 
            to="/contact" 
            className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 inline-flex items-center gap-2"
          >
            <Zap className="w-5 h-5" />
            Start Your Project
          </Link>
        </div>
      </div>
    </div>
  );
};

export default WebDevelopmentPage;
