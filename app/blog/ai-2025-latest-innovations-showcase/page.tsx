import React from 'react';
import Link from 'next/link';
import { ArrowRight, Brain, Zap, Shield, Globe, TrendingUp } from 'lucide-react';

export default function AILatestInnovationsShowcase() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="max-w-7xl mx-auto px-4 py-16">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            AI 2025: Latest Innovations Showcase
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover the groundbreaking AI innovations that are reshaping industries and transforming the way we work, live, and interact with technology.
          </p>
          <div className="mt-8 flex justify-center">
            <span className="inline-flex items-center px-4 py-2 rounded-full bg-green-100 text-green-800 text-sm font-medium">
              <TrendingUp className="w-4 h-4 mr-2" />
              Latest Updates • January 2025
            </span>
          </div>
        </div>

        {/* Featured Innovations Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {/* Neural Interface Revolution */}
          <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
            <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-6">
              <Brain className="w-6 h-6 text-purple-600" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Neural Interface Revolution
            </h3>
            <p className="text-gray-600 mb-6">
              Direct brain-computer interfaces enabling seamless communication between human thought and AI systems, revolutionizing accessibility and productivity.
            </p>
            <div className="flex items-center text-purple-600 font-medium">
              <span>Learn More</span>
              <ArrowRight className="w-4 h-4 ml-2" />
            </div>
          </div>

          {/* Quantum AI Fusion */}
          <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
              <Zap className="w-6 h-6 text-blue-600" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Quantum AI Fusion
            </h3>
            <p className="text-gray-600 mb-6">
              Revolutionary combination of quantum computing and AI, delivering unprecedented processing power and solving previously impossible problems.
            </p>
            <div className="flex items-center text-blue-600 font-medium">
              <span>Explore</span>
              <ArrowRight className="w-4 h-4 ml-2" />
            </div>
          </div>

          {/* Autonomous Business Systems */}
          <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
            <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-6">
              <Globe className="w-6 h-6 text-green-600" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Autonomous Business Systems
            </h3>
            <p className="text-gray-600 mb-6">
              Self-managing business operations that adapt, learn, and optimize in real-time, delivering 500%+ efficiency improvements.
            </p>
            <div className="flex items-center text-green-600 font-medium">
              <span>Discover</span>
              <ArrowRight className="w-4 h-4 ml-2" />
            </div>
          </div>

          {/* AI Security Fortress */}
          <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
            <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-6">
              <Shield className="w-6 h-6 text-red-600" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              AI Security Fortress
            </h3>
            <p className="text-gray-600 mb-6">
              Next-generation AI-powered security systems that predict and prevent cyber threats before they occur, with 99.9% accuracy.
            </p>
            <div className="flex items-center text-red-600 font-medium">
              <span>Secure</span>
              <ArrowRight className="w-4 h-4 ml-2" />
            </div>
          </div>

          {/* Synthetic Intelligence */}
          <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
            <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-6">
              <Brain className="w-6 h-6 text-indigo-600" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Synthetic Intelligence
            </h3>
            <p className="text-gray-600 mb-6">
              Artificially created consciousness that rivals human intelligence, capable of creative thinking and emotional understanding.
            </p>
            <div className="flex items-center text-indigo-600 font-medium">
              <span>Experience</span>
              <ArrowRight className="w-4 h-4 ml-2" />
            </div>
          </div>

          {/* Edge AI Acceleration */}
          <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
            <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-6">
              <Zap className="w-6 h-6 text-orange-600" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Edge AI Acceleration
            </h3>
            <p className="text-gray-600 mb-6">
              Ultra-fast AI processing at the edge, enabling real-time decision making and reducing latency by 95%.
            </p>
            <div className="flex items-center text-orange-600 font-medium">
              <span>Accelerate</span>
              <ArrowRight className="w-4 h-4 ml-2" />
            </div>
          </div>
        </div>

        {/* Impact Statistics */}
        <div className="bg-white rounded-2xl p-8 shadow-lg mb-16">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Global Impact in 2025
          </h2>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">500%</div>
              <div className="text-gray-600">Average Productivity Increase</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-green-600 mb-2">$2.5T</div>
              <div className="text-gray-600">Global AI Market Value</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-purple-600 mb-2">85%</div>
              <div className="text-gray-600">Businesses Using AI</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-orange-600 mb-2">99.9%</div>
              <div className="text-gray-600">Accuracy Rate</div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-12 text-white">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Join thousands of companies already leveraging these cutting-edge AI innovations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Get Started Today
            </Link>
            <Link
              href="/case-studies"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
            >
              View Success Stories
            </Link>
          </div>
        </div>

        {/* Related Content */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            Explore More AI Innovations
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            <Link href="/blog/ai-2025-quantum-computing-revolution" className="group">
              <div className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow group-hover:scale-105">
                <h4 className="font-semibold text-gray-900 mb-2">Quantum Computing Revolution</h4>
                <p className="text-gray-600 text-sm">The future of computing is here</p>
              </div>
            </Link>
            <Link href="/blog/ai-2025-neural-interfaces" className="group">
              <div className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow group-hover:scale-105">
                <h4 className="font-semibold text-gray-900 mb-2">Neural Interface Technology</h4>
                <p className="text-gray-600 text-sm">Direct brain-AI communication</p>
              </div>
            </Link>
            <Link href="/case-studies/ai-2025-enterprise-transformation-breakthrough" className="group">
              <div className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow group-hover:scale-105">
                <h4 className="font-semibold text-gray-900 mb-2">Enterprise Transformation</h4>
                <p className="text-gray-600 text-sm">Real-world success stories</p>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}