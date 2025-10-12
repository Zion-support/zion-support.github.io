'use client';
import React from 'react';
import { ArrowRight, Brain, Zap, Shield, Globe } from 'lucide-react';
import { Helmet } from 'react-helmet-async';

const FuturisticServiceCard: React.FC = () => {
  const benefits = [
    'Advanced AI technology integration',
    'Real-time processing and analytics',
    'Enterprise-grade security and compliance',
    'Scalable and flexible solutions',
    '24/7 technical support',
    'Easy integration with existing systems',
    'Cost-effective pricing plans',
    'Proven track record of success'
  ];
  
  const features = [
    {
      icon: Brain,
      title: 'AI-Powered Solutions',
      description: 'Advanced AI technology to transform your business operations and improve efficiency',
    },
    {
      icon: Zap,
      title: 'High Performance',
      description: 'Lightning-fast processing and real-time analytics for optimal results',
    },
    {
      icon: Shield,
      title: 'Enterprise Security',
      description: 'Bank-level security with encryption and compliance standards',
    },
    {
      icon: Globe,
      title: 'Global Reach',
      description: 'Worldwide deployment and support for international businesses',
    }
  ];

  return (
<<<<<<< HEAD
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Futuristic Service Card | Zion Tech Group</title>
=======
    <div className="min-h-screen bg-gradient-to-br from-slate-900-via-purple-900to-slate-900">
      <Helmet />
        <title   />Futuristic Service Card | Zion Tech Group</title>
>>>>>>> cursor/fix-errors-and-merge-to-main-bff1
        <meta name="description" content="Professional futuristic service card solutions by Zion Tech Group. Advanced AI and IT solutions for your business." />
        <meta name="keywords" content="futuristic service card, AI solutions, IT services, Zion Tech Group" />
      </Helmet>

      {/* Hero Section */}
<<<<<<< HEAD
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                Futuristic Service Card
=======
      <section className="relative py-20 px-4-sm:px-6 lg:px-8" />
        <div className="max-w-7-xlmx-auto">
          <div className="text-center">
            <h1 className="text-4 xl md:text-6 xl font-boldtext-white mb-6" />
              <span className="bg-gradient-to-r from-purple-400 to-blue-400-bg-clip-texttext-transparent"  />FuturisticServiceCard
>>>>>>> cursor/fix-errors-and-merge-to-main-bff1
              </span>
              <br />
              <span className="text-white">Solutions</span>
            </h1>
<<<<<<< HEAD
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Transform your business with our advanced futuristic service card solutions.
              Powered by cutting-edge AI technology and industry expertise.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-purple-500 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-purple-600 hover:to-blue-700 transition-all duration-300 flex items-center">
                Get Started
                <ArrowRight className="ml-2 h-5 w-5" />
              </button>
              <button className="border border-gray-300 text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300">
                Learn More
=======
            <p className="text-xl text-gray-300 mb-8 max-w-3-xlmx-auto" />
              Transform your business with our advanced futuristic service card solutions.
              Powered by cutting-edge AI technology and industry expertise.
            </p>
            <div className="flex flex-col sm:flex-rowgap-4-justify-center">
              <button className="bg-gradient-to-r from-purple-500 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-purple-600  hover:to-blue-700 transition-all duration-300-flex items-center" />
                Get Started
                <ArrowRight className="ml-2-h-5w-5" />
              </button>
              <button className="border border-gray-300 text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-gray-900-transition-all duration-300"  />Learn More
>>>>>>> cursor/fix-errors-and-merge-to-main-bff1
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
<<<<<<< HEAD
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Our Features
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
=======
      <section className="py-20 px-4-sm:px-6 lg:px-8" />
        <div className="max-w-7-xlmx-auto">
          <div className="text-centermb-16">
            <h2 className="text-3 xl md:text-4 xl font-boldtext-white mb-4"  />Our Features
            </h2>
            <p className="text-xl text-gray-300 max-w-3-xlmx-auto" />
>>>>>>> cursor/fix-errors-and-merge-to-main-bff1
              Discover the powerful features that make our futuristic service card solutions stand out.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-gray-800/50 backdrop-blur-xl rounded-xl p-6 border border-gray-700 hover:border-purple-500 transition-all duration-300">
                <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-600 rounded-lg mb-4">
                  <feature.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default FuturisticServiceCard;
