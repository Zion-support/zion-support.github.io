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
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Welcome to Zion Tech Group
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            We provide cutting-edge AI and IT solutions to help your business thrive in the digital age.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors text-center">
              Get Started
            </Link>
            <Link href="/about" className="border border-blue-600 text-blue-600 px-8 py-3 rounded-lg hover:bg-blue-50 transition-colors text-center">
              Learn More
            </Link>
          </div>
        </div>
        
        <div className="mt-20">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">AI Services</h3>
              <p className="text-gray-600 mb-4">
                Advanced artificial intelligence solutions including machine learning, natural language processing, and computer vision.
              </p>
              <Link href="/ai-services" className="text-blue-600 hover:text-blue-800 font-medium">Learn More →</Link>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Cloud Infrastructure</h3>
              <p className="text-gray-600 mb-4">
                Scalable cloud solutions that provide reliability, security, and performance for your business applications.
              </p>
              <Link href="/cloud-infrastructure" className="text-blue-600 hover:text-blue-800 font-medium">Learn More →</Link>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Digital Transformation</h3>
              <p className="text-gray-600 mb-4">
                Complete digital transformation services to modernize your business processes and systems.
              </p>
              <Link href="/digital-transformation" className="text-blue-600 hover:text-blue-800 font-medium">Learn More →</Link>
            </div>
          </div>
        </div>
        
        <div className="mt-20">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">AI-Powered Tools</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Content Moderator</h3>
              <p className="text-gray-600 text-sm mb-3">Automated content moderation using AI</p>
              <Link href="/zion-ai-content-moderator" className="text-blue-600 hover:text-blue-800 text-sm font-medium">Try Now →</Link>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Sales Predictor</h3>
              <p className="text-gray-600 text-sm mb-3">Predict sales trends with AI</p>
              <Link href="/zion-ai-sales-predictor" className="text-blue-600 hover:text-blue-800 text-sm font-medium">Try Now →</Link>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Workflow Automator</h3>
              <p className="text-gray-600 text-sm mb-3">Automate business workflows</p>
              <Link href="/zion-ai-workflow-automator" className="text-blue-600 hover:text-blue-800 text-sm font-medium">Try Now →</Link>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Financial Forecaster</h3>
              <p className="text-gray-600 text-sm mb-3">AI-powered financial predictions</p>
              <Link href="/zion-ai-financial-forecaster" className="text-blue-600 hover:text-blue-800 text-sm font-medium">Try Now →</Link>
            </div>
          </div>
          <div className="text-center mt-8">
            <Link href="/services" className="text-blue-600 hover:text-blue-800 font-medium">View All Services →</Link>
          </div>
        </div>
      </div>
    </div>
  );
}