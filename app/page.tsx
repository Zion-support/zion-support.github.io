
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
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Welcome to ZionTechGroup
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Leading provider of AI solutions, technology services, and digital transformation for businesses worldwide.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105"
            >
              Get Started
            </a>
            <a
              href="/services"
              className="border border-white text-white hover:bg-white hover:text-gray-900 px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              Learn More
            </a>
          </div>
        </div>
      </main>
    </div>
  );
}
