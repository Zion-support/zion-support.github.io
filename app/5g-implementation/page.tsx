'use client';
import React from 'react';
import {} from 'react-helmet-async';
import { Wifi, BarChart, Brain, Target, Zap, Shield, CheckCircle } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

export default function FiveGImplementationPage() {
  const services = [
    {
      icon: <Wifi className="w-8 h-8 text-blue-500" />,
      title: '5G Network Design',
      description: 'Design and implement 5G network infrastructure for optimal performance.',
      pricing: 'Starting at $50,000'
    },
    {
      icon: <Smartphone className="w-8 h-8 text-purple-500" />,
      title: 'Mobile App Optimization',
      description: 'Optimize mobile applications for 5G network capabilities.',
      pricing: 'Starting at $15,000'
    },
    {
      icon: <Cpu className="w-8 h-8 text-green-500" />,
      title: 'Edge Computing',
      description: 'Implement edge computing solutions for 5G networks.',
      pricing: 'Starting at $25,000'
    },
    {
      icon: <Zap className="w-8 h-8 text-orange-500" />,
      title: 'IoT Integration',
      description: 'Integrate IoT devices with 5G networks for enhanced connectivity.',
      pricing: 'Starting at $20,000'
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Navigation />
      
      <main className="pt-20 px-4 py-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              5G Implementation
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Professional 5G implementation services delivered by experienced professionals.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
            {features.map((feature, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300">
                <div className="flex items-center mb-4">
                  <div className="text-purple-400 mr-3">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white">{feature.title}</h3>
                </div>
                <p className="text-gray-300 mb-4">
                  {feature.description}
                </p>
                <ul className="space-y-2">
                  {feature.benefits.map((benefit, benefitIndex) => (
                    <li key={benefitIndex} className="flex items-center text-gray-300">
                      <CheckCircle className="h-4 w-4 text-green-400 mr-2" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          
          <div className="text-center">
            <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-3xl p-12">
              <h2 className="text-4xl font-bold text-white mb-4">Ready to Get Started?</h2>
              <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                Contact us today to learn more about our 5G implementation services.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-white text-purple-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                  Contact Us
                </button>
                <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors">
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}