import React from 'react';
import { CheckCircle, ArrowRight, Zap, Shield, Globe, Cloud, Database, Smartphone } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import Navigation from './components/Navigation';
import Footer from './components/Footer';

export default function HomePage() {
  const features = [
    {
      icon: <Zap className="w-8 h-8 text-blue-500" />,
      title: 'AI-Powered Solutions',
      description: 'Transform your business with our comprehensive AI services including content generation, chatbots, and automation.'
    },
    {
      icon: <Shield className="w-8 h-8 text-green-500" />,
      title: 'Enterprise Security',
      description: 'Bank-level security with encryption, compliance standards, and advanced threat protection.'
    },
    {
      icon: <Globe className="w-8 h-8 text-purple-500" />,
      title: 'Global Reach',
      description: 'Worldwide deployment and support for international businesses with 24/7 technical assistance.'
    },
    {
      icon: <Database className="w-8 h-8 text-orange-500" />,
      title: 'Data Analytics',
      description: 'Advanced data processing and analytics to drive informed business decisions.'
    },
    {
      icon: <Cloud className="w-8 h-8 text-red-500" />,
      title: 'Cloud Solutions',
      description: 'Scalable cloud infrastructure and services for modern business needs.'
    },
    {
      icon: <Smartphone className="w-8 h-8 text-cyan-500" />,
      title: '5G Implementation',
      description: 'Next-generation 5G network solutions for ultra-fast connectivity and IoT applications.'
    }
  ];

  const services = [
    {
      title: 'AI Services',
      description: 'Advanced artificial intelligence solutions',
      href: '/ai-services',
      icon: <Zap className="w-6 h-6" />
    },
    {
      title: 'IT Services',
      description: 'Comprehensive IT solutions and support',
      href: '/it-services',
      icon: <Database className="w-6 h-6" />
    },
    {
      title: 'Cloud Services',
      description: 'Scalable cloud infrastructure and migration',
      href: '/cloud-services',
      icon: <Cloud className="w-6 h-6" />
    },
    {
      title: '5G Implementation',
      description: 'Next-generation network solutions',
      href: '/5g-implementation',
      icon: <Smartphone className="w-6 h-6" />
    }
  ];

  const benefits = [
    'Advanced AI technology integration',
    'Real-time processing and analytics',
    'Enterprise-grade security and compliance',
    'Scalable and flexible solutions',
    '24/7 technical support',
    'Easy integration with existing systems'
  ];

  return (
    <>
      <Helmet>
        <title>Zion Tech Group - Advanced AI and IT Solutions</title>
        <meta name="description" content="Leading provider of AI and IT solutions for modern businesses. Transform your operations with cutting-edge technology and expert support." />
        <meta name="keywords" content="AI solutions, IT services, cloud computing, 5G implementation, digital transformation, Zion Tech Group" />
      </Helmet>
      
      <Navigation />
      
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
                Transform Your Business with
                <span className="text-blue-600"> Advanced Technology</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
                Leading provider of AI and IT solutions for modern businesses. 
                We help companies transform their operations with cutting-edge technology and expert support.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors inline-flex items-center justify-center"
                >
                  Get Started
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
                <Link
                  to="/about"
                  className="border border-blue-600 text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors inline-flex items-center justify-center"
                >
                  Learn More
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Why Choose Zion Tech Group?
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                We deliver cutting-edge solutions that drive real business results.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 p-8">
                  <div className="flex items-center mb-4">
                    {feature.icon}
                    <h3 className="text-xl font-semibold text-gray-900 ml-3">
                      {feature.title}
                    </h3>
                  </div>
                  <p className="text-gray-600">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Our Services
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Comprehensive technology solutions tailored to your business needs.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {services.map((service, index) => (
                <Link
                  key={index}
                  to={service.href}
                  className="bg-gray-50 rounded-lg p-6 hover:bg-gray-100 transition-colors group"
                >
                  <div className="flex items-center mb-3">
                    <div className="text-blue-600 group-hover:text-blue-700">
                      {service.icon}
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 ml-3">
                      {service.title}
                    </h3>
                  </div>
                  <p className="text-gray-600 text-sm">
                    {service.description}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Key Benefits
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Experience the advantages of working with our expert team.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center">
                  <CheckCircle className="h-6 w-6 text-green-500 mr-3 flex-shrink-0" />
                  <span className="text-gray-700">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-blue-600">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Join thousands of businesses already using our solutions to drive growth and innovation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-flex items-center justify-center"
              >
                Get Started Today
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link
                to="/about"
                className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors inline-flex items-center justify-center"
              >
                Learn More About Us
              </Link>
            </div>
          </div>
        </section>
      </div>
      
      <Footer />
    </>
  );
}
