'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Leaf, Cloud, Zap, Shield, CheckCircle, ArrowRight, Phone, Mail, MapPin, Globe, TreePine, Droplets, Sun, Wind } from 'lucide-react';

const AIClimateSolutionsProPage: React.FC = () => {
  const features = [
    {
      icon: Leaf,
      title: 'Carbon Footprint Reduction',
      description: 'AI-powered solutions to reduce carbon emissions by up to 40% through smart resource optimization'
    },
    {
      icon: Cloud,
      title: 'Climate Data Analytics',
      description: 'Advanced analytics to predict climate patterns and optimize environmental strategies'
    },
    {
      icon: Zap,
      title: 'Renewable Energy Optimization',
      description: 'AI-driven renewable energy management for maximum efficiency and sustainability'
    },
    {
      icon: Shield,
      title: 'Environmental Compliance',
      description: 'Automated compliance monitoring and reporting for environmental regulations'
    }
  ];

  const benefits = [
    'Reduce carbon footprint by up to 40%',
    'Optimize renewable energy usage',
    'Predict climate patterns with 95% accuracy',
    'Automate environmental compliance',
    'Real-time sustainability monitoring',
    'Cost savings through efficiency gains',
    'Scalable climate solutions',
    'Integration with existing systems'
  ];

  const useCases = [
    {
      title: 'Smart Grid Management',
      description: 'Optimize energy distribution and reduce waste through AI-powered grid management',
      icon: Zap
    },
    {
      title: 'Carbon Tracking',
      description: 'Monitor and track carbon emissions across all business operations in real-time',
      icon: Leaf
    },
    {
      title: 'Weather Prediction',
      description: 'Advanced weather forecasting for better resource planning and risk management',
      icon: Cloud
    },
    {
      title: 'Sustainable Agriculture',
      description: 'AI-driven farming techniques for sustainable crop production and resource conservation',
      icon: TreePine
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-900 via-emerald-900 to-teal-900">
      <Helmet>
        <title>AI Climate Solutions Pro | Zion Tech Group</title>
        <meta name="description" content="Advanced AI-powered climate solutions for sustainable business operations. Reduce carbon footprint, optimize renewable energy, and achieve environmental compliance." />
        <meta name="keywords" content="AI climate solutions, carbon reduction, renewable energy, environmental compliance, sustainability, climate analytics" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
                AI Climate Solutions
              </span>
              <br />
              <span className="text-white">Professional</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Transform your business with cutting-edge AI climate solutions. Reduce carbon footprint, 
              optimize renewable energy, and achieve environmental compliance with our advanced technology.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-green-500 to-emerald-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-green-600 hover:to-emerald-700 transition-all duration-300 flex items-center">
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
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Advanced Climate Solutions
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our AI-powered climate solutions help businesses achieve sustainability goals and environmental compliance.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
                <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-600 rounded-lg mb-4">
                  <feature.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Key Benefits
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Experience the power of AI-driven climate solutions for sustainable business operations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-start space-x-3">
                <CheckCircle className="h-6 w-6 text-green-400 mt-1 flex-shrink-0" />
                <p className="text-gray-300 text-lg">{benefit}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Use Cases
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Discover how AI climate solutions can transform your environmental impact and sustainability efforts.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {useCases.map((useCase, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
                <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-r from-teal-500 to-green-600 rounded-lg mb-4">
                  <useCase.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{useCase.title}</h3>
                <p className="text-gray-300">{useCase.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-r from-green-600 to-emerald-600 rounded-2xl p-8 md:p-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Go Green with AI?
            </h2>
            <p className="text-xl text-green-100 mb-8">
              Contact our experts to discuss your climate solution needs and get a customized sustainability plan.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-green-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 flex items-center justify-center">
                <Phone className="mr-2 h-5 w-5" />
                Call Now
              </button>
              <button className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-green-600 transition-all duration-300 flex items-center justify-center">
                <Mail className="mr-2 h-5 w-5" />
                Email Us
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AIClimateSolutionsProPage;