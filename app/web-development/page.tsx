'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { CheckCircle, ArrowRight, Phone, Mail, MapPin, Zap, Shield, Brain, Globe, Code, Database, Smartphone } from 'lucide-react';

const WebDevelopmentPage: React.FC = () => {
  const features = [
    {
      icon: <Code className="w-8 h-8 text-cyan-400" />,
      title: "Modern Web Development",
      description: "Build responsive, fast, and scalable web applications using the latest technologies and frameworks."
    },
    {
      icon: <Globe className="w-8 h-8 text-cyan-400" />,
      title: "Full-Stack Solutions",
      description: "Complete web development services from frontend to backend, including database design and API development."
    },
    {
      icon: <Smartphone className="w-8 h-8 text-cyan-400" />,
      title: "Responsive Design",
      description: "Mobile-first, responsive web design that works perfectly across all devices and screen sizes."
    },
    {
      icon: <Shield className="w-8 h-8 text-cyan-400" />,
      title: "Security & Performance",
      description: "Enterprise-grade security and optimized performance for production-ready web applications."
    }
  ];

  const benefits = [
    'Modern React and Next.js development',
    'Responsive and mobile-first design',
    'SEO optimization and performance',
    '24/7 technical support'
  ];

  return (
    <>
      <Helmet>
        <title>Web Development Services | Zion Tech Group</title>
        <meta name="description" content="Professional web development services using modern technologies. React, Next.js, full-stack solutions with responsive design and SEO optimization." />
        <meta name="keywords" content="web development, React development, Next.js, full-stack development, responsive design, web applications" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Web Development
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
                Solutions
              </span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Create powerful, modern web applications with our expert development team. 
              Full-stack solutions built with React, Next.js, and the latest web technologies.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-8 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 flex items-center justify-center">
                <Phone className="mr-2 h-5 w-5" />
                Get Started
              </button>
              <button className="border border-cyan-400 text-cyan-400 px-8 py-3 rounded-lg font-semibold hover:bg-cyan-400 hover:text-white transition-all duration-300 flex items-center justify-center">
                <Mail className="mr-2 h-5 w-5" />
                Learn More
              </button>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Our Web Development Services
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Comprehensive web development solutions using modern technologies and best practices.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {features.map((feature, index) => (
                <div key={index} className="bg-slate-800/50 backdrop-blur-lg rounded-lg p-6 border border-cyan-500/20 hover:border-cyan-400/40 transition-all duration-300">
                  <div className="mb-4">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-300">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 px-4 bg-white/5">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Key Benefits
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Experience professional web development with our expert team.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <CheckCircle className="w-6 h-6 text-cyan-400 flex-shrink-0" />
                  <span className="text-gray-300 text-lg">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Build Your Website?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Contact our web development experts to discuss your project requirements and get started.
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
    </>
  );
};

export default WebDevelopmentPage;