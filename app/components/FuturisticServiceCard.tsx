'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight, Zap, Brain, CheckCircle, Settings, Target, Users, Calendar, BarChart, Shield } from 'lucide-react';

const FuturisticServiceCard: React.FC = () => {
  const features = [
    {
      icon: <Zap className="w-8 h-8 text-cyan-400" />,
      title: 'Lightning Fast',
      description: 'Ultra-fast performance with cutting-edge technology and optimized algorithms.'
    },
    {
      icon: <Brain className="w-8 h-8 text-purple-400" />,
      title: 'AI-Powered',
      description: 'Intelligent automation and machine learning capabilities for enhanced efficiency.'
    },
    {
      icon: <Shield className="w-8 h-8 text-green-400" />,
      title: 'Secure & Reliable',
      description: 'Enterprise-grade security with 99.9% uptime guarantee and data protection.'
    },
    {
      icon: <Settings className="w-8 h-8 text-orange-400" />,
      title: 'Customizable',
      description: 'Fully customizable solutions tailored to your specific business needs.'
    }
  ];

  const benefits = [
    'Increase productivity by 300%',
    'Reduce operational costs by 50%',
    'Improve customer satisfaction',
    'Scale effortlessly with your business',
    '24/7 monitoring and support',
    'Future-proof technology stack'
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900">
      <Helmet>
        <title>Futuristic Service Card - Zion Tech Group | Advanced Solutions</title>
        <meta name="description" content="Experience the future with our futuristic service card solutions. Cutting-edge technology meets exceptional user experience." />
        <meta name="keywords" content="futuristic solutions, advanced technology, service cards, innovation, cutting-edge" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">Futuristic</span> Service Card
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Experience the future with our futuristic service card solutions. Cutting-edge technology meets exceptional user experience.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-purple-600 transition-all duration-300"
            >
              Get Started
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
            <Link
              to="/it-services"
              className="inline-flex items-center px-8 py-3 border-2 border-cyan-400 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-400 hover:text-white transition-all duration-300"
            >
              View All IT Services
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Our Features
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Discover the powerful features that make our futuristic service card solutions stand out.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-cyan-400/50 transition-all duration-300 group">
                <div className="mb-6">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-black/20">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Why Choose Our Futuristic Solutions?
              </h2>
              <p className="text-lg text-gray-300 mb-8">
                Our futuristic service card solutions combine cutting-edge technology with exceptional user experience to deliver outstanding results.
              </p>
              <ul className="space-y-4">
                {benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle className="w-6 h-6 text-green-400 mr-3 mt-1 flex-shrink-0" />
                    <span className="text-gray-300">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-2xl p-8 backdrop-blur-sm border border-white/10">
                <div className="text-center">
                  <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full mb-6">
                    <Brain className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">Future-Ready Technology</h3>
                  <p className="text-gray-300">
                    Our solutions are built with the latest technologies and designed to adapt to future innovations and requirements.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-cyan-600 to-purple-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Experience the Future?
          </h2>
          <p className="text-xl text-cyan-100 mb-8">
            Join thousands of businesses already using our futuristic solutions to transform their operations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/contact" 
              className="inline-flex items-center px-8 py-3 bg-white text-cyan-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors duration-300"
            >
              Start Your Future Journey
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
            <Link 
              to="/it-services" 
              className="inline-flex items-center px-8 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-cyan-600 transition-colors duration-300"
            >
              Explore All IT Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FuturisticServiceCard;