'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Phone, Mail, MapPin, ArrowRight, CheckCircle, Star, Users, Globe, Brain, Zap, Shield } from 'lucide-react';
import Navigation from './components/Navigation';
import Footer from './components/Footer';

const HomePage: React.FC = () => {
  const features = [
    {
      icon: Brain,
      title: 'AI-Powered Solutions',
      description: 'Transform your business with cutting-edge artificial intelligence and machine learning technologies.'
    },
    {
      icon: Zap,
      title: 'Rapid Implementation',
      description: 'Get up and running quickly with our streamlined deployment and integration processes.'
    },
    {
      icon: Shield,
      title: 'Enterprise Security',
      description: 'Bank-grade security and compliance to protect your most sensitive data and operations.'
    },
    {
      icon: Users,
      title: 'Expert Support',
      description: '24/7 support from our team of certified professionals and industry experts.'
    }
  ];

  const stats = [
    { number: '10,000+', label: 'Happy Customers' },
    { number: '99.9%', label: 'Uptime Guarantee' },
    { number: '50+', label: 'Countries Served' },
    { number: '4.9/5', label: 'Customer Rating' }
  ];

  return (
    <>
      <Helmet>
        <title>Zion Tech Group - AI & IT Solutions</title>
        <meta name="description" content="Leading provider of AI-powered enterprise solutions and digital transformation services. Achieve 300% ROI with our cutting-edge AI technology." />
        <meta name="keywords" content="AI, artificial intelligence, enterprise solutions, digital transformation, IT services" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
        <Navigation />
        
        <main>
          {/* Hero Section */}
          <section className="pt-20 pb-16">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto text-center">
                <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6">
                  Transform Your Business with{' '}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                    AI & IT Solutions
                  </span>
                </h1>
                <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
                  Achieve 300% ROI with our cutting-edge AI technology, enterprise-grade security, 
                  and expert support that drives real business results.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a
                    href="/contact"
                    className="bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors inline-flex items-center"
                  >
                    Get Started Today
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </a>
                  <a
                    href="/pricing"
                    className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition-all duration-300 inline-flex items-center"
                  >
                    View Pricing
                  </a>
                </div>
              </div>
            </div>
          </section>

          {/* Stats Section */}
          <section className="bg-blue-600 py-16">
            <div className="container mx-auto px-4">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                {stats.map((stat, index) => (
                  <div key={index} className="text-white">
                    <div className="text-4xl md:text-5xl font-bold mb-2">{stat.number}</div>
                    <div className="text-lg">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Features Section */}
          <section className="py-20">
            <div className="container mx-auto px-4">
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                  Why Choose Zion Tech Group?
                </h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  We combine cutting-edge technology with deep industry expertise to deliver 
                  solutions that drive measurable business outcomes.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {features.map((feature, index) => (
                  <div key={index} className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow">
                    <feature.icon className="w-12 h-12 text-blue-600 mb-6" />
                    <h3 className="text-xl font-bold text-gray-900 mb-4">{feature.title}</h3>
                    <p className="text-gray-600">{feature.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Services Preview */}
          <section className="bg-gray-100 py-20">
            <div className="container mx-auto px-4">
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                  Our Services
                </h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  Comprehensive AI and IT solutions designed to accelerate your digital transformation
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="bg-white rounded-xl p-8 shadow-lg">
                  <Brain className="w-12 h-12 text-blue-600 mb-6" />
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">AI Services</h3>
                  <p className="text-gray-600 mb-6">
                    Transform your business with intelligent automation, predictive analytics, 
                    and AI-powered decision making.
                  </p>
                  <a href="/ai-services" className="text-blue-600 font-semibold hover:underline">
                    Learn More →
                  </a>
                </div>

                <div className="bg-white rounded-xl p-8 shadow-lg">
                  <Zap className="w-12 h-12 text-blue-600 mb-6" />
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">IT Services</h3>
                  <p className="text-gray-600 mb-6">
                    Robust infrastructure, cloud solutions, and expert support to keep your 
                    systems running smoothly.
                  </p>
                  <a href="/it-services" className="text-blue-600 font-semibold hover:underline">
                    Learn More →
                  </a>
                </div>

                <div className="bg-white rounded-xl p-8 shadow-lg">
                  <Globe className="w-12 h-12 text-blue-600 mb-6" />
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Micro SaaS</h3>
                  <p className="text-gray-600 mb-6">
                    Purpose-built applications that solve specific business challenges 
                    with elegant, focused solutions.
                  </p>
                  <a href="/micro-saas" className="text-blue-600 font-semibold hover:underline">
                    Learn More →
                  </a>
                </div>
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="bg-blue-600 py-20">
            <div className="container mx-auto px-4 text-center">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Ready to Transform Your Business?
              </h2>
              <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
                Join thousands of businesses that trust Zion Tech Group for their AI and IT needs. 
                Start your transformation journey today.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="bg-white text-blue-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors inline-flex items-center"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Contact Us
                </a>
                <a
                  href="tel:+13024640950"
                  className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-all duration-300 inline-flex items-center"
                >
                  Call (302) 464-0950
                </a>
              </div>
            </div>
          </section>
        </main>
        
        <Footer />
      </div>
    </>
  );
};

export default HomePage;