'use client';
import React from 'react';
import {Helmet} from 'react-helmet-async';
import {ArrowRight, CheckCircle, Target, BarChart, Zap, Shield, Brain, Eye, Hand, Users} from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const ZionInvoiceGeniusPage: React.FC = () => {
  const features = [
    {
      icon: Zap,
      title: 'Advanced Technology',
      description: 'Cutting-edge solutions powered by the latest technology and innovation.'
    },
    {
      icon: Shield,
      title: 'Secure & Reliable',
      description: 'Enterprise-grade security and reliability for your peace of mind.'
    },
    {
      icon: Target,
      title: 'Focused Solutions',
      description: 'Tailored solutions designed specifically for your business needs.'
    },
    {
      icon: BarChart,
      title: 'Performance Analytics',
      description: 'Comprehensive analytics and insights to optimize your operations.'
    }
  ];

  const services = [
    {
      icon: Brain,
      title: 'AI-Powered Solutions',
      description: 'Leverage artificial intelligence to automate and optimize your processes.'
    },
    {
      icon: Eye,
      title: 'Visual Intelligence',
      description: 'Advanced visual processing and analysis capabilities for better insights.'
    },
    {
      icon: Hand,
      title: 'Custom Development',
      description: 'Bespoke solutions tailored to your specific requirements and goals.'
    },
    {
      icon: Users,
      title: 'Team Collaboration',
      description: 'Enhanced collaboration tools to improve team productivity and efficiency.'
    }
  ];

  const benefits = [
    {
      icon: CheckCircle,
      title: 'Proven Results',
      description: 'Track record of delivering successful projects and satisfied clients.'
    },
    {
      icon: ArrowRight,
      title: 'Scalable Solutions',
      description: 'Solutions that grow with your business and adapt to changing needs.'
    },
    {
      icon: Shield,
      title: '24/7 Support',
      description: 'Round-the-clock support to ensure your systems run smoothly.'
    },
    {
      icon: Target,
      title: 'ROI Focused',
      description: 'Solutions designed to deliver measurable return on investment.'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Helmet>
        <title>Zion Invoice Genius - Zion Tech Group</title>
        <meta name="description" content="Professional zion invoice genius solutions by Zion Tech Group. Expert services and cutting-edge technology." />
      </Helmet>
      
      <Navigation />
      
      <main className="pt-16">
        {/* Hero Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Zion Invoice Genius
              <span className="block text-blue-600">Solutions</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Professional zion invoice genius services designed to help your business succeed. 
              We provide expert solutions tailored to your specific needs and goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                Get Started
              </button>
              <button className="border border-blue-600 text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors">
                Learn More
              </button>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Our Features
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Comprehensive features designed to meet your business requirements.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="text-center p-6 rounded-lg border border-gray-200 hover:shadow-lg transition-shadow">
                  <feature.icon className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Our Services
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Professional services to help you achieve your business objectives.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {services.map((service, index) => (
                <div key={index} className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                  <service.icon className="w-12 h-12 text-blue-600 mb-4" />
                  <h3 className="text-2xl font-semibold text-gray-900 mb-4">{service.title}</h3>
                  <p className="text-gray-600 mb-6">{service.description}</p>
                  <button className="text-blue-600 font-semibold hover:text-blue-700 flex items-center">
                    Learn More <ArrowRight className="w-4 h-4 ml-2" />
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Why Choose Us
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                We deliver exceptional value through our expertise and commitment to excellence.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <benefit.icon className="w-8 h-8 text-blue-600 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">{benefit.title}</h3>
                    <p className="text-gray-600">{benefit.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-blue-600">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Contact us today to discuss your zion invoice genius requirements and how we can help.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                Contact Us
              </button>
              <button className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                View Portfolio
              </button>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default ZionInvoiceGeniusPage;
