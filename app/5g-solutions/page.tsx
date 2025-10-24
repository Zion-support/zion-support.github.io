'use client';
import React from 'react';
import Link from 'next/link';
import { ArrowRight, Zap, Globe, Shield, Target, CheckCircle } from 'lucide-react';

const features = [
  {
    icon: Zap,
    title: 'Ultra-Fast Connectivity',
    description: 'Experience lightning-fast 5G speeds for seamless data transfer and real-time communication.',
  },
  {
    icon: Globe,
    title: 'Global Coverage',
    description: 'Comprehensive 5G network coverage across multiple regions and countries.',
  },
  {
    icon: Shield,
    title: 'Enhanced Security',
    description: 'Advanced security protocols to protect your 5G network and data transmission.',
  },
  {
    icon: Target,
    title: 'IoT Integration',
    description: 'Seamless integration with IoT devices and smart city infrastructure.',
  },
];

export default function FiveGSolutionsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            5G <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">Solutions</span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Transform your business with cutting-edge 5G technology. Experience ultra-fast connectivity, low latency, and massive IoT capabilities.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-600 transition-all duration-300"
            >
              Get Started
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link
              href="/services"
              className="inline-flex items-center px-8 py-3 border border-white/20 text-white font-semibold rounded-lg hover:bg-white/10 transition-all duration-300"
            >
              View All Services
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">5G Capabilities</h2>
            <p className="text-xl text-gray-300">Unlock the full potential of 5G technology</p>
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
            Ready to Deploy 5G?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Let's discuss how 5G solutions can transform your business operations.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-600 transition-all duration-300"
          >
            Start Your 5G Journey
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}