'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Wifi, BarChart, CheckCircle, Brain, Target, TrendingUp, FileText, Zap, Shield } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const FiveGImplementationPage: React.FC = () => {
  const features = [
    {
      icon: Wifi,
      title: 'Ultra-Fast Connectivity',
      description: 'Experience lightning-fast 5G speeds with ultra-low latency for seamless operations.',
      benefits: ['10x faster than 4G', 'Ultra-low latency', 'Massive device connectivity', 'Enhanced reliability']
    },
    {
      icon: BarChart,
      title: 'Advanced Analytics',
      description: 'Comprehensive analytics dashboard with real-time data visualization.',
      benefits: ['Real-time dashboards', 'Custom reports', 'Data visualization', 'Performance metrics']
    },
    {
      icon: TrendingUp,
      title: 'Performance Optimization',
      description: 'AI-powered insights to optimize your business performance.',
      benefits: ['Predictive analytics', 'Trend analysis', 'Performance metrics', 'Growth forecasting']
    },
    {
      icon: Target,
      title: 'Precision Targeting',
      description: 'Target specific goals and objectives with precision.',
      benefits: ['Goal tracking', 'Performance optimization', 'Strategic planning', 'Success metrics']
    }
  ];

  const benefits = [
    'Increase efficiency by up to 80%',
    'Reduce costs by 30% with automation',
    'Improve decision-making with AI insights',
    'Scale operations without proportional staff increases',
    'Real-time processing and analysis',
    'Enhanced security and compliance',
    'Seamless integration with existing systems',
    '24/7 monitoring and support'
  ];

  const useCases = [
    {
      title: 'Smart Manufacturing',
      description: 'Implement IoT sensors and real-time monitoring for predictive maintenance and quality control.',
      icon: Shield
    },
    {
      title: 'Autonomous Vehicles',
      description: 'Enable vehicle-to-vehicle communication and real-time traffic optimization.',
      icon: Zap
    },
    {
      title: 'Remote Healthcare',
      description: 'Support telemedicine with high-quality video consultations and remote patient monitoring.',
      icon: Brain
    },
    {
      title: 'Smart Cities',
      description: 'Connect traffic lights, sensors, and infrastructure for intelligent city management.',
      icon: Target
    }
  ];

  return (
    <>
      <Helmet>
        <title>5G Implementation Services | Zion Tech Group</title>
        <meta name="description" content="Transform your business with cutting-edge 5G implementation services. Ultra-fast connectivity, IoT solutions, and smart infrastructure development." />
        <meta name="keywords" content="5G implementation, IoT solutions, smart infrastructure, ultra-fast connectivity, Zion Tech Group" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <Navigation />
        
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                5G Implementation Services
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Transform your business with cutting-edge 5G technology. Ultra-fast connectivity, IoT solutions, and smart infrastructure development.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-cyan-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-cyan-700 transition-colors duration-300">
                  Get Started
                  <ArrowRight className="w-5 h-5 ml-2 inline" />
                </button>
                <button className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-slate-900 transition-all duration-300">
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
                Why Choose 5G?
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Experience the next generation of connectivity with our comprehensive 5G implementation services
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
                  <feature.icon className="w-12 h-12 text-cyan-600 mb-4" />
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
                  <p className="text-gray-600 mb-4">{feature.description}</p>
                  <ul className="space-y-2">
                    {feature.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="flex items-center text-sm text-gray-600">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
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
        <section className="py-20 bg-gradient-to-r from-cyan-600 to-blue-700">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Key Benefits
              </h2>
              <p className="text-xl text-cyan-100 max-w-2xl mx-auto">
                Transform your business operations with 5G technology
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="text-center text-white">
                  <CheckCircle className="w-8 h-8 mx-auto mb-4 text-cyan-200" />
                  <p className="text-cyan-100">{benefit}</p>
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
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Discover how 5G can transform your industry
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {useCases.map((useCase, index) => (
                <div key={index} className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
                  <useCase.icon className="w-16 h-16 text-cyan-600 mb-6" />
                  <h3 className="text-2xl font-semibold text-gray-900 mb-4">{useCase.title}</h3>
                  <p className="text-gray-600 text-lg">{useCase.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-cyan-600 to-blue-700">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Implement 5G?
            </h2>
            <p className="text-xl text-cyan-100 mb-8 max-w-2xl mx-auto">
              Let's discuss how 5G can transform your business operations and drive innovation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-cyan-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-300">
                Get Free Consultation
              </button>
              <button className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-cyan-600 transition-all duration-300">
                View Case Studies
              </button>
            </div>
          </div>
        </section>
      </div>
      
      <Footer />
    </>
  );
};

export default FiveGImplementationPage;