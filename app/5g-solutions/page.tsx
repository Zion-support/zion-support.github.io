
'use client';
import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import SEOOptimizer from '../components/SEOOptimizer';
import { Wifi, Smartphone, Shield, Zap, CheckCircle, ArrowRight } from 'lucide-react';

const solutions = [
  {
    title: '5G Network Infrastructure',
    description: 'Deploy high-speed 5G networks with ultra-low latency and massive connectivity.',
    icon: <Wifi className="w-8 h-8" />,
  },
  {
    title: 'Edge Computing',
    description: 'Process data at the edge for real-time applications and reduced latency.',
    icon: <Zap className="w-8 h-8" />,
  },
  {
    title: 'IoT Connectivity',
    description: 'Connect millions of devices with reliable 5G IoT solutions.',
    icon: <Smartphone className="w-8 h-8" />,
  },
  {
    title: 'Security Solutions',
    description: 'Comprehensive security for 5G networks and connected devices.',
    icon: <Shield className="w-8 h-8" />,
  },
];


export default function FiveGSolutionsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            5G Solutions
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Next-generation 5G solutions for your business.
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
