'use client';
<<<<<<< HEAD
=======

>>>>>>> 95f63d1bffe2d416304750c17f0532b44f8a7886
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { CheckCircle, ArrowRight, Phone, Mail, Zap, Shield, Brain, Globe } from 'lucide-react';

<<<<<<< HEAD
const AdvancedAccessibilityEnhancer: React.FC = () => {
  const features = [
=======
const AdvancedAccessibilityEnhancerPage: React.FC = () => {
    const features = [
>>>>>>> 95f63d1bffe2d416304750c17f0532b44f8a7886
    {
      icon: Brain
      ,
      title: 'AI-Powered Solutions'
      ,
      description: 'Advanced AI technology to transform your business operations and improve efficiency'
    }
    ,
    { icon: Zap
      ,
      title: 'High Performance'
      ,
      description: 'Lightning-fast processing and real-time analytics for optimal results'
    }
    ,
    { icon: Shield
      ,
      title: 'Enterprise Security'
      ,
      description: 'Bank-level security with encryption and compliance standards'
    }
    ,
    { icon: Globe
      ,
      title: 'Global Reach'
      ,
      description: 'Worldwide deployment and support for international businesses'
    }
  ];

  const benefits = [
    'Advanced AI technology integration'
    'Real-time processing and analytics'
    'Enterprise-grade security and compliance'
    'Scalable and flexible solutions'
    '24/7 technical support'
    'Easy integration with existing systems'
    'Cost-effective pricing plans'
    'Proven track record of success'
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Advanced Accessibility Enhancer | Zion Tech Group</title>
<<<<<<< HEAD
        <meta name="description" content="Professional accessibility enhancement services by Zion Tech Group. Advanced AI and IT solutions for your business." />
        <meta name="keywords" content="accessibility, AI solutions, IT services, Zion Tech Group, accessibility enhancement" />
      </Helmet>

      {/* Hero Section */}
        <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
=======
        <meta name="description" content="Professional Advanced Accessibility Enhancer services by Zion Tech Group. Advanced AI and IT solutions for your business." />
        <meta name="keywords" content="Advanced Accessibility Enhancer, AI solutions, IT services, Zion Tech Group, accessibility" />
      </Helmet>

      {/* Hero Section */}
        <section className="py-20">
        <div className="container mx-auto px-4">
>>>>>>> 95f63d1bffe2d416304750c17f0532b44f8a7886
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                Advanced Accessibility
              </span>
              <br />
              <span className="text-white">Enhancer</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
<<<<<<< HEAD
              Transform your business with our advanced accessibility enhancement solutions. 
=======
              Transform your business with our advanced accessibility solutions. 
>>>>>>> 95f63d1bffe2d416304750c17f0532b44f8a7886
              Powered by cutting-edge AI technology and industry expertise.
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
<<<<<<< HEAD
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Our Features</h2>
            <p className="text-xl text-gray-300">Comprehensive accessibility solutions for modern businesses</p>
=======
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Why Choose Our Accessibility Solutions?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our accessibility solutions deliver unmatched performance, security, and scalability.
            </p>
>>>>>>> 95f63d1bffe2d416304750c17f0532b44f8a7886
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-6 hover:bg-white/20 transition-colors">
                <feature.icon className="w-12 h-12 text-blue-400 mb-4" />
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
<<<<<<< HEAD
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Why Choose Us</h2>
            <p className="text-xl text-gray-300">Experience the benefits of our accessibility solutions</p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center">
                  <CheckCircle className="w-6 h-6 text-green-400 mr-3" />
                  <span className="text-gray-300">{benefit}</span>
                </div>
              ))}
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8">
              <h3 className="text-2xl font-bold text-white mb-4">Ready to Get Started?</h3>
              <p className="text-gray-300 mb-6">
                Contact our team to discuss your accessibility needs and get a customized solution.
              </p>
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors">
                Contact Us
=======
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Key Benefits
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Experience the power of our accessibility solutions for your business.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-start space-x-3">
                <CheckCircle className="h-6 w-6 text-purple-400 mt-1 flex-shrink-0" />
                <p className="text-gray-300 text-lg">{benefit}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
        <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-8 md:p-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-purple-100 mb-8">
              Contact our experts to discuss your accessibility needs and get a customized solution.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 flex items-center justify-center">
                <Phone className="mr-2 h-5 w-5" />
                Call Now
              </button>
              <button className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-all duration-300 flex items-center justify-center">
                <Mail className="mr-2 h-5 w-5" />
                Email Us
>>>>>>> 95f63d1bffe2d416304750c17f0532b44f8a7886
              </button>
            </div>
          </div>
        </div>
<<<<<<< HEAD
      </section>

      {/* Contact Section */}
        <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Get In Touch</h2>
            <p className="text-xl text-gray-300">Ready to enhance your accessibility? Let's talk!</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <Phone className="w-12 h-12 text-blue-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">Phone</h3>
              <p className="text-gray-300">+1 (555) 123-4567</p>
            </div>
            <div className="text-center">
              <Mail className="w-12 h-12 text-blue-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">Email</h3>
              <p className="text-gray-300">info@ziontechgroup.com</p>
            </div>
            <div className="text-center">
              <MapPin className="w-12 h-12 text-blue-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">Location</h3>
              <p className="text-gray-300">San Francisco, CA</p>
            </div>
          </div>
        </div>
=======
>>>>>>> 95f63d1bffe2d416304750c17f0532b44f8a7886
      </section>
    </div>
  );
};

<<<<<<< HEAD
export default AdvancedAccessibilityEnhancer;
=======
export default AdvancedAccessibilityEnhancerPage;
>>>>>>> 95f63d1bffe2d416304750c17f0532b44f8a7886
