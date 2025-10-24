'use client';
import React from 'react';
import Link from 'next/link';
import { ArrowRight, Brain, Shield, Zap, Target } from 'lucide-react';

const services = [
  {
    title: 'AI-Powered Solutions',
    description: 'Cutting-edge artificial intelligence to transform your business operations',
    icon: <Brain className="w-8 h-8" />,
    color: 'from-blue-500 to-cyan-500',
    stats: '40% efficiency boost',
    link: '/ai-services',
  },
  {
    title: 'IT Services',
    description: 'Comprehensive technology solutions including cloud infrastructure and cybersecurity',
    icon: <Shield className="w-8 h-8" />,
    color: 'from-green-500 to-emerald-500',
    stats: '99.9% uptime',
    link: '/it-services',
  },
  {
    title: 'Performance Optimization',
    description: 'Advanced performance monitoring and optimization for maximum efficiency',
    icon: <Zap className="w-8 h-8" />,
    color: 'from-purple-500 to-pink-500',
    stats: '3x faster',
    link: '/performance',
  },
  {
    title: 'Quality Assurance',
    description: 'Rigorous testing and quality assurance to ensure reliable solutions',
    icon: <Target className="w-8 h-8" />,
    color: 'from-yellow-500 to-orange-500',
    stats: '100% tested',
    link: '/quality',
  },
];

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <main className="pt-24 pb-16 px-4">
        <div className="max-w-7xl mx-auto">
          <section className="text-center mb-16">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 neon-text">
              Transform Your Business with <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">AI & Technology</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Leading provider of AI solutions, technology services, and digital transformation 
              for businesses worldwide. Let's build the future together.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105">
                Get Started
                <ArrowRight className="inline ml-2 w-5 h-5" />
              </button>
              <button className="border border-white text-white hover:bg-white hover:text-gray-900 px-8 py-3 rounded-lg font-semibold transition-colors">
                Learn More
              </button>
            </div>
          </section>

          <section className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
              Our Services
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {services.map((service, index) => (
                <div key={index} className="group">
                  <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700 hover:border-gray-600 transition-all duration-300 hover:transform hover:scale-105">
                    <div className={`inline-flex items-center justify-center w-16 h-16 rounded-lg bg-gradient-to-r ${service.color} mb-4`}>
                      {service.icon}
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-3">
                      {service.title}
                    </h3>
                    <p className="text-gray-300 mb-4">
                      {service.description}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium text-blue-400">
                        {service.stats}
                      </span>
                      <Link
                        href={service.link}
                        className="text-blue-400 hover:text-blue-300 font-medium transition-colors"
                      >
                        Learn More →
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section className="text-center">
            <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-2xl p-8 border border-gray-700">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Ready to Get Started?
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Join thousands of businesses that trust us to deliver innovative solutions 
                that drive growth and success.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105">
                  Start Your Project
                  <ArrowRight className="inline ml-2 w-5 h-5" />
                </button>
                <button className="border border-white text-white hover:bg-white hover:text-gray-900 px-8 py-3 rounded-lg font-semibold transition-colors">
                  Contact Us
                </button>
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}