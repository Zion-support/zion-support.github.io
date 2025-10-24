'use client';
import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import SEOOptimizer from '../components/SEOOptimizer';
import { Wifi, Smartphone, Shield, Zap, CheckCircle, ArrowRight, Globe, Server, Users, Award, Building, Car, Lightbulb } from 'lucide-react';

const FiveGSmartCitySolutionsPage = () => {
  const solutions = [
    {
      icon: Building,
      title: 'Smart Infrastructure',
      description: 'Intelligent city infrastructure powered by 5G connectivity for enhanced efficiency and sustainability.',
      features: ['Traffic Management', 'Energy Optimization', 'Waste Management', 'Water Systems'],
    },
    {
      icon: Car,
      title: 'Autonomous Transportation',
      description: 'Enable autonomous vehicles and smart transportation systems with ultra-low latency 5G networks.',
      features: ['Vehicle-to-Everything (V2X)', 'Real-time Navigation', 'Fleet Management', 'Safety Systems'],
    },
    {
      icon: Lightbulb,
      title: 'Smart Lighting',
      description: 'Intelligent lighting systems that adapt to conditions and optimize energy usage.',
      features: ['Adaptive Brightness', 'Motion Detection', 'Energy Savings', 'Remote Control'],
    },
    {
      icon: Users,
      title: 'Citizen Services',
      description: 'Enhanced citizen services through connected devices and real-time data processing.',
      features: ['Digital Services', 'Emergency Response', 'Public Safety', 'Health Monitoring'],
    },
  ];

  const benefits = [
    'Reduced Energy Consumption',
    'Improved Traffic Flow',
    'Enhanced Public Safety',
    'Better Resource Management',
    'Increased Citizen Engagement',
    'Sustainable Urban Development',
  ];

  const technologies = [
    'IoT Sensors',
    'Edge Computing',
    'AI Analytics',
    'Real-time Data Processing',
    'Cloud Integration',
    'Mobile Applications',
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <SEOOptimizer
        title="5G Smart City Solutions - ZionTechGroup | AI & IT Solutions"
        description="Transform your city with 5G-powered smart city solutions. Intelligent infrastructure, autonomous transportation, and citizen services."
        keywords="5G smart city, smart infrastructure, autonomous transportation, IoT solutions, urban technology"
      />
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              5G <span className="text-blue-600">Smart City</span> Solutions
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Build the cities of tomorrow with our comprehensive 5G smart city solutions. 
              Transform urban living through intelligent infrastructure and connected technologies.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="inline-flex items-center px-8 py-4 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors">
                Get Started
                <ArrowRight className="ml-2 h-5 w-5" />
              </button>
              <button className="inline-flex items-center px-8 py-4 border border-gray-300 text-gray-700 font-semibold rounded-lg hover:bg-gray-50 transition-colors">
                View Demo
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Smart City Solutions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive solutions to transform your city into a smart, connected, and sustainable urban environment.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {solutions.map((solution, index) => (
              <div key={index} className="bg-gray-50 p-8 rounded-xl hover:shadow-md transition-shadow">
                <div className="flex items-center mb-6">
                  <solution.icon className="h-12 w-12 text-blue-600 mr-4" />
                  <h3 className="text-2xl font-semibold text-gray-900">
                    {solution.title}
                  </h3>
                </div>
                <p className="text-gray-600 mb-6">
                  {solution.description}
                </p>
                <ul className="space-y-2">
                  {solution.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Key Technologies
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our smart city solutions leverage cutting-edge technologies for maximum impact.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {technologies.map((technology, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-sm text-center">
                <div className="text-lg font-semibold text-gray-900">{technology}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Smart City Benefits
            </h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Transform your city with measurable improvements in efficiency, sustainability, and quality of life.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-center space-x-4">
                <CheckCircle className="h-6 w-6 text-green-400 flex-shrink-0" />
                <span className="text-lg text-blue-100">{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Ready to Build Your Smart City?
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Let's discuss how our 5G smart city solutions can transform your urban environment.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="inline-flex items-center px-8 py-4 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors">
              Start Planning
              <ArrowRight className="ml-2 h-5 w-5" />
            </button>
            <button className="inline-flex items-center px-8 py-4 border border-gray-300 text-gray-700 font-semibold rounded-lg hover:bg-gray-50 transition-colors">
              Learn More
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default FiveGSmartCitySolutionsPage;