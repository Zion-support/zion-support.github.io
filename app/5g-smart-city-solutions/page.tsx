'use client';
import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import SEOOptimizer from '../components/SEOOptimizer';
import { Wifi, Smartphone, Shield, Zap, CheckCircle, ArrowRight } from 'lucide-react';

const features = [
  {
    icon: Wifi,
    title: 'Smart Infrastructure',
    description: 'Connect and manage city infrastructure with 5G-powered IoT solutions.',
  },
  {
    icon: Smartphone,
    title: 'Citizen Services',
    description: 'Enhanced mobile services and real-time communication for residents.',
  },
  {
    icon: Shield,
    title: 'Security & Safety',
    description: 'Advanced monitoring and emergency response systems powered by 5G.',
  },
  {
    icon: Zap,
    title: 'Energy Management',
    description: 'Smart grid solutions for efficient energy distribution and consumption.',
  },
];

export default function FiveGSmartCitySolutionsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <SEOOptimizer
        title="5G Smart City Solutions - ZionTechGroup"
        description="Transform your city with 5G-powered smart city solutions. IoT infrastructure, citizen services, and sustainable urban development."
        keywords="5G smart city, IoT solutions, smart infrastructure, urban technology"
      />
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            5G Smart City <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">Solutions</span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Transform your city into a smart, connected, and sustainable urban environment with our comprehensive 5G smart city solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-600 transition-all duration-300">
              Get Started
              <ArrowRight className="ml-2 h-5 w-5" />
            </button>
            <button className="inline-flex items-center px-8 py-3 border border-white/20 text-white font-semibold rounded-lg hover:bg-white/10 transition-all duration-300">
              Learn More
            </button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Smart City Features</h2>
            <p className="text-xl text-gray-300">Comprehensive solutions for modern urban development</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="p-6 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 hover:bg-white/20 transition-all duration-300">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full mb-4">
                  <feature.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Build Your Smart City?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Let's discuss how 5G smart city solutions can transform your urban environment.
          </p>
          <button className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-600 transition-all duration-300">
            Start Your Smart City Journey
            <ArrowRight className="ml-2 h-5 w-5" />
          </button>
        </div>
      </section>

      <Footer />
    </div>
  );
}