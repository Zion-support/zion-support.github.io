'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { CheckCircle, Code, Smartphone, Globe, Zap, Shield, ArrowRight } from 'lucide-react';

const WebDevelopmentPage: React.FC = () => {
  const features = [
    {
      icon: Code,
      title: 'Custom Web Development',
      description: 'Tailored web applications built with modern technologies and best practices.',
      benefits: ['Custom solutions', 'Modern frameworks', 'Scalable architecture']
    },
    {
      icon: Smartphone,
      title: 'Responsive Design',
      description: 'Mobile-first, responsive web design that works perfectly on all devices.',
      benefits: ['Mobile optimization', 'Cross-browser compatibility', 'Touch-friendly UI']
    },
    {
      icon: Globe,
      title: 'E-commerce Solutions',
      description: 'Complete e-commerce platforms with payment processing and inventory management.',
      benefits: ['Payment integration', 'Inventory management', 'Order processing']
    },
    {
      icon: Zap,
      title: 'Performance Optimization',
      description: 'High-performance web applications with fast loading times and smooth user experience.',
      benefits: ['Fast loading', 'SEO optimization', 'Performance monitoring']
    },
    {
      icon: Shield,
      title: 'Security & Compliance',
      description: 'Secure web applications with enterprise-grade security and compliance features.',
      benefits: ['Data encryption', 'Security audits', 'Compliance ready']
    },
    {
      icon: Code,
      title: 'API Development',
      description: 'RESTful APIs and microservices for seamless integration and scalability.',
      benefits: ['REST APIs', 'Microservices', 'Third-party integration']
    }
  ];

  const benefits = [
    'Increase conversion rates by 40%',
    'Improve page load speed by 60%',
    'Enhance user experience',
    'Boost search engine rankings',
    'Ensure mobile compatibility',
    'Scale with your business'
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Web Development Services | Zion Tech Group</title>
        <meta name="description" content="Professional web development services. Custom websites, e-commerce solutions, and web applications built with modern technologies." />
        <meta name="keywords" content="web development, custom websites, e-commerce, responsive design, web applications, Zion Tech Group" />
      </Helmet>

      <Navigation />

      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                Web Development
              </span>
              <br />
              <span className="text-white">Services</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Create stunning, high-performance web applications that drive business growth. 
              From simple websites to complex web platforms, we deliver exceptional results.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-purple-500 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-purple-600 hover:to-blue-700 transition-all duration-300 flex items-center">
                Get Started
                <ArrowRight className="ml-2 h-5 w-5" />
              </button>
              <button className="border border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300">
                View Portfolio
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Web Development Capabilities
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our web development team creates modern, scalable, and secure web applications 
              using the latest technologies and best practices.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
                <div className="flex items-center mb-4">
                  <feature.icon className="h-8 w-8 text-purple-400 mr-3" />
                  <h3 className="text-xl font-semibold text-white">{feature.title}</h3>
                </div>
                <p className="text-gray-300 mb-4">{feature.description}</p>
                <ul className="space-y-2">
                  {feature.benefits.map((benefit, benefitIndex) => (
                    <li key={benefitIndex} className="flex items-center text-sm text-gray-300">
                      <CheckCircle className="h-4 w-4 text-green-400 mr-2 flex-shrink-0" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Why Choose Our Web Development Services?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We combine technical expertise with creative design to deliver 
              web solutions that exceed expectations and drive business results.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-center bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                <CheckCircle className="h-6 w-6 text-green-400 mr-3 flex-shrink-0" />
                <span className="text-white font-medium">{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Build Your Web Solution?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Let our web development experts help you create a stunning, 
            high-performance website that drives business growth.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-purple-500 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-purple-600 hover:to-blue-700 transition-all duration-300">
              Start Your Project
            </button>
            <button className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300">
              Get Free Quote
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default WebDevelopmentPage;