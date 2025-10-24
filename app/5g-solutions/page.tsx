<<<<<<< HEAD
"use client";

import React from "react";
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { ArrowRight, Network, Shield, Zap, Globe, Smartphone, Wifi, Signal } from 'lucide-react';
=======
import React from 'react';
import Link from 'next/link';
import { Wifi, ArrowRight, CheckCircle } from 'lucide-react';
>>>>>>> origin/main

export default function FiveGSolutionsPage() {
  const features = [
    {
<<<<<<< HEAD
      title: "Ultra-Fast Speeds",
      description: "Experience blazing-fast 5G connectivity with speeds up to 10 Gbps",
      icon: <Zap className="w-8 h-8" />
    },
    {
      title: "Low Latency",
      description: "Ultra-low latency of 1ms for real-time applications and IoT",
      icon: <Signal className="w-8 h-8" />
    },
    {
      title: "Massive Connectivity",
      description: "Support for millions of connected devices per square kilometer",
      icon: <Network className="w-8 h-8" />
    },
    {
      title: "Enhanced Security",
      description: "Advanced security protocols for enterprise-grade protection",
      icon: <Shield className="w-8 h-8" />
    }
  ];

  const useCases = [
    {
      title: "Smart Cities",
      description: "Enable smart city infrastructure with 5G connectivity",
      icon: <Globe className="w-6 h-6" />
    },
    {
      title: "IoT Solutions",
      description: "Connect millions of IoT devices with reliable 5G networks",
      icon: <Network className="w-6 h-6" />
    },
    {
      title: "Mobile Applications",
      description: "Power next-generation mobile apps with 5G capabilities",
      icon: <Smartphone className="w-6 h-6" />
    },
    {
      title: "Edge Computing",
      description: "Deploy edge computing solutions with ultra-low latency",
      icon: <Wifi className="w-6 h-6" />
=======
      icon: <Wifi className="w-8 h-8" />,
      title: 'Feature 1',
      description: 'Description of the first key feature.',
      benefits: ['Benefit 1', 'Benefit 2', 'Benefit 3', 'Benefit 4']
    },
    {
      icon: <Wifi className="w-8 h-8" />,
      title: 'Feature 2',
      description: 'Description of the second key feature.',
      benefits: ['Benefit 1', 'Benefit 2', 'Benefit 3', 'Benefit 4']
    },
    {
      icon: <Wifi className="w-8 h-8" />,
      title: 'Feature 3',
      description: 'Description of the third key feature.',
      benefits: ['Benefit 1', 'Benefit 2', 'Benefit 3', 'Benefit 4']
    },
    {
      icon: <Wifi className="w-8 h-8" />,
      title: 'Feature 4',
      description: 'Description of the fourth key feature.',
      benefits: ['Benefit 1', 'Benefit 2', 'Benefit 3', 'Benefit 4']
>>>>>>> origin/main
    }
  ];

  const stats = [
<<<<<<< HEAD
    { number: '10 Gbps', label: 'Peak Speed', icon: <Zap className="w-6 h-6 text-blue-400" /> },
    { number: '1ms', label: 'Latency', icon: <Signal className="w-6 h-6 text-green-400" /> },
    { number: '1M+', label: 'Devices per km²', icon: <Network className="w-6 h-6 text-purple-400" /> },
    { number: '99.9%', label: 'Reliability', icon: <Shield className="w-6 h-6 text-orange-400" /> }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            5G <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Solutions</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Transform your business with next-generation 5G technology. Ultra-fast speeds, ultra-low latency, 
            and massive connectivity for the future of digital innovation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="inline-flex items-center px-8 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
            >
              Get Started
              <ArrowRight className="ml-2 w-5 h-5" />
            </a>
            <a
              href="/ai-services"
              className="inline-flex items-center px-8 py-3 border-2 border-blue-600 text-blue-600 font-semibold rounded-lg hover:bg-blue-600 hover:text-white transition-colors"
            >
              Learn More
            </a>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4">
                  {stat.icon}
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">{stat.number}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose 5G?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Experience the next generation of wireless technology with unprecedented speed, reliability, and connectivity.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-lg border border-gray-200 text-center">
                <div className="inline-flex p-3 rounded-lg bg-blue-100 text-blue-600 mb-4">
                  {feature.icon}
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
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Use Cases
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Discover how 5G technology can transform your industry and business operations.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {useCases.map((useCase, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-lg border border-gray-200">
                <div className="flex items-center mb-4">
                  <div className="p-2 rounded-lg bg-blue-100 text-blue-600 mr-4">
                    {useCase.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900">
                    {useCase.title}
                  </h3>
                </div>
                <p className="text-gray-600">
                  {useCase.description}
                </p>
=======
    { number: '95%', label: 'Success Rate' },
    { number: '80%', label: 'Efficiency Gain' },
    { number: '1000+', label: 'Projects Completed' },
    { number: '99.9%', label: 'Uptime Guarantee' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">
            5G Solutions
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Next-generation 5G connectivity solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors flex items-center justify-center"
            >
              Get Started
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
            <Link
              href="/demo"
              className="border border-gray-300 text-white hover:bg-white hover:text-gray-900 px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              View Demo
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl font-bold text-white mb-2">{stat.number}</div>
              <div className="text-gray-300">{stat.label}</div>
            </div>
          ))}
        </div>

        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Key Features</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                <div className="flex items-center mb-4">
                  <div className="text-blue-400 mr-4">{feature.icon}</div>
                  <h3 className="text-xl font-semibold text-white">{feature.title}</h3>
                </div>
                <p className="text-gray-300 mb-4">{feature.description}</p>
                <ul className="space-y-2">
                  {feature.benefits.map((benefit, benefitIndex) => (
                    <li key={benefitIndex} className="flex items-center text-gray-300">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                      {benefit}
                    </li>
                  ))}
                </ul>
>>>>>>> origin/main
              </div>
            ))}
          </div>
        </div>
<<<<<<< HEAD
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Embrace 5G?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Let's work together to implement 5G solutions that will transform your business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-flex items-center"
            >
              Get Started
              <ArrowRight className="ml-2 w-5 h-5" />
            </a>
            <a
              href="/about"
              className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
            >
              Learn More
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
=======

        <div className="text-center bg-white/10 backdrop-blur-sm rounded-lg p-8">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Get Started?</h2>
          <p className="text-gray-300 mb-6">Contact us today to learn more about our solutions.</p>
          <Link
            href="/contact"
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors inline-flex items-center"
          >
            Get Started Now
            <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </div>
    </div>
  );
}
>>>>>>> origin/main
