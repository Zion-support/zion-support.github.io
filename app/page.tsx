'use client';
import React from 'react';
import Link from 'next/link';
import { Brain, Zap, Shield, Target, CheckCircle, ArrowRight } from 'lucide-react';

const services = [
  {
    title: 'AI-Powered Solutions',
    description: 'Cutting-edge artificial intelligence to transform your business operations',
    icon: <Brain className='w-8 h-8' />,
    color: 'from-blue-500 to-cyan-500',
  },
  {
    title: 'Cloud Infrastructure',
    description: 'Scalable and secure cloud solutions for modern businesses',
    icon: <Zap className='w-8 h-8' />,
    color: 'from-purple-500 to-pink-500',
  },
  {
    title: 'Cybersecurity',
    description: 'Advanced security measures to protect your digital assets',
    icon: <Shield className='w-8 h-8' />,
    color: 'from-green-500 to-teal-500',
  },
  {
    title: 'Digital Transformation',
    description: 'Complete digital overhaul to modernize your business processes',
    icon: <Target className='w-8 h-8' />,
    color: 'from-orange-500 to-red-500',
  }
];

const features = [
  'AI-Powered Automation',
  'Cloud Infrastructure',
  'Cybersecurity Solutions',
  'Digital Transformation',
  'Machine Learning',
  'Data Analytics'
];

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Welcome to <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">ZionTechGroup</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Leading provider of AI solutions, technology services, and digital transformation 
            for businesses worldwide.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/contact" className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-3 rounded-lg hover:from-purple-700 hover:to-pink-700 transition-all duration-300 flex items-center">
              Get Started <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link href="/services" className="border border-purple-400 text-purple-400 px-8 py-3 rounded-lg hover:bg-purple-400 hover:text-white transition-all duration-300">
              Our Services
            </Link>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">Our Services</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-6 hover:bg-white/20 transition-all duration-300">
              <div className={`w-12 h-12 mb-4 bg-gradient-to-r ${service.color} rounded-lg flex items-center justify-center`}>
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">{service.title}</h3>
              <p className="text-gray-300">{service.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Features Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">Why Choose Us?</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div key={index} className="flex items-center space-x-3">
              <CheckCircle className="h-6 w-6 text-green-400 flex-shrink-0" />
              <span className="text-gray-300">{feature}</span>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 md:p-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to Transform Your Business?</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Let our experts help you leverage cutting-edge technology to drive growth and innovation.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/contact" className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-lg hover:from-purple-700 hover:to-pink-700 transition-all duration-300 flex items-center text-lg">
              Start Your Project <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link href="/pricing" className="border border-purple-400 text-purple-400 px-8 py-4 rounded-lg hover:bg-purple-400 hover:text-white transition-all duration-300 text-lg">
              View Pricing
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}