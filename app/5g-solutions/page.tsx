'use client';
import React from 'react';
import Link from 'next/link';
import { Wifi, Smartphone, Shield, Zap, CheckCircle, ArrowRight, Globe, Server, Users, Award } from 'lucide-react';

const FiveGSolutionsPage = () => {
  const features = [
    {
      icon: Wifi,
      title: 'Ultra-Fast Connectivity',
      description: 'Experience lightning-fast 5G speeds with ultra-low latency for real-time applications.',
    },
    {
      icon: Smartphone,
      title: 'Mobile-First Solutions',
      description: 'Optimized mobile experiences that leverage 5G capabilities for enhanced performance.',
    },
    {
      icon: Shield,
      title: 'Enhanced Security',
      description: 'Advanced security protocols designed for 5G networks and IoT devices.',
    },
    {
      icon: Zap,
      title: 'Real-Time Processing',
      description: 'Process data in real-time with 5G\'s ultra-low latency capabilities.',
    },
  ];

  const useCases = [
    'Smart City Infrastructure',
    'Autonomous Vehicles',
    'Industrial IoT',
    'Remote Healthcare',
    'Augmented Reality',
    'Edge Computing',
  ];

  const benefits = [
    '10x faster than 4G',
    'Ultra-low latency',
    'Massive device connectivity',
    'Enhanced reliability',
    'Energy efficient',
    'Future-proof technology',
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      <main className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Hero Section */}
          <section className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              5G <span className="text-blue-600">Solutions</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Transform your business with cutting-edge 5G technology. Experience ultra-fast connectivity, 
              real-time processing, and next-generation mobile solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center px-8 py-4 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
              >
                Get Started
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center px-8 py-4 border border-gray-300 text-gray-700 font-semibold rounded-lg hover:bg-gray-50 transition-colors"
              >
                Learn More
              </Link>
            </div>
          </section>

          {/* Features Section */}
          <section className="py-16 bg-white rounded-xl shadow-sm mb-16">
            <div className="max-w-7xl mx-auto px-8">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  Key Features
                </h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  Harness the power of 5G technology with our comprehensive solutions.
                </p>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                {features.map((feature, index) => (
                  <div key={index} className="text-center">
                    <div className="flex justify-center mb-4">
                      <feature.icon className="h-12 w-12 text-blue-600" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600">
                      {feature.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Use Cases Section */}
          <section className="py-16 bg-gray-50 rounded-xl mb-16">
            <div className="max-w-7xl mx-auto px-8">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  Use Cases
                </h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  Discover how 5G can transform various industries and applications.
                </p>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {useCases.map((useCase, index) => (
                  <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
                    <div className="flex items-center">
                      <CheckCircle className="h-6 w-6 text-green-500 mr-3 flex-shrink-0" />
                      <span className="text-lg text-gray-700">{useCase}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Benefits Section */}
          <section className="py-16 bg-blue-600 rounded-xl text-white">
            <div className="max-w-7xl mx-auto px-8">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  Why Choose 5G?
                </h2>
                <p className="text-xl text-blue-100 max-w-3xl mx-auto">
                  Experience the next generation of connectivity with these key advantages.
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
          <section className="py-16 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Ready to Embrace 5G?
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Let's discuss how 5G solutions can transform your business operations.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center px-8 py-4 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
            >
              Start Your 5G Journey
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </section>
        </div>
      </main>
    </div>
  );
};

export default FiveGSolutionsPage;