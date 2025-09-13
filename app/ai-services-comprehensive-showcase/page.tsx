import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Comprehensive AI Services Showcase - Revolutionary AI Solutions 2025',
  description: 'Discover our comprehensive suite of AI services including machine learning, natural language processing, computer vision, automation, and quantum computing solutions. Transform your business with cutting-edge AI technology.',
  keywords: 'AI services, machine learning, NLP, computer vision, automation, quantum computing, AI consulting, artificial intelligence solutions, business transformation',
};

const AI Services Comprehensive Showcase: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/30 to-purple-600/30"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center bg-blue-600/20 backdrop-blur-sm rounded-full px-6 py-2 mb-6 border border-blue-400/30">
              <span className="text-blue-300 text-sm font-medium">🚀 COMPREHENSIVE AI SERVICES</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Revolutionary AI Services Showcase
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
              Transform your business with our comprehensive suite of AI services, from machine learning and natural language processing to quantum computing and autonomous automation
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/contact"
                className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-3 rounded-lg font-semibold transition-all hover:from-blue-600 hover:to-purple-700"
              >
                Get AI Consultation
              </Link>
              <Link 
                href="/case-studies"
                className="bg-white/10 hover:bg-white/20 text-white px-8 py-3 rounded-lg font-semibold transition-colors border border-white/30"
              >
                View Success Stories
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Core AI Services */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Core AI Services
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our comprehensive AI service portfolio covers every aspect of artificial intelligence implementation
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Machine Learning */}
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 hover:border-blue-400/50 transition-all">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center mb-6">
                <span className="text-3xl">🧠</span>
              </div>
              <h3 className="text-2xl font-semibold text-white mb-4">Machine Learning</h3>
              <p className="text-gray-300 mb-6">
                Advanced ML algorithms and models for predictive analytics, pattern recognition, and intelligent decision-making systems.
              </p>
              <ul className="text-gray-300 space-y-2 mb-6">
                <li>• Predictive Analytics</li>
                <li>• Pattern Recognition</li>
                <li>• Recommendation Systems</li>
                <li>• Anomaly Detection</li>
                <li>• Model Optimization</li>
              </ul>
              <Link 
                href="/services/machine-learning"
                className="inline-flex items-center text-blue-400 hover:text-blue-300 font-medium"
              >
                Learn More →
              </Link>
            </div>

            {/* Natural Language Processing */}
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 hover:border-green-400/50 transition-all">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-teal-500 rounded-xl flex items-center justify-center mb-6">
                <span className="text-3xl">💬</span>
              </div>
              <h3 className="text-2xl font-semibold text-white mb-4">Natural Language Processing</h3>
              <p className="text-gray-300 mb-6">
                Advanced NLP solutions for text analysis, language understanding, sentiment analysis, and conversational AI.
              </p>
              <ul className="text-gray-300 space-y-2 mb-6">
                <li>• Text Analysis & Mining</li>
                <li>• Sentiment Analysis</li>
                <li>• Language Translation</li>
                <li>• Conversational AI</li>
                <li>• Document Processing</li>
              </ul>
              <Link 
                href="/services/natural-language-processing"
                className="inline-flex items-center text-green-400 hover:text-green-300 font-medium"
              >
                Learn More →
              </Link>
            </div>

            {/* Computer Vision */}
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 hover:border-purple-400/50 transition-all">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center mb-6">
                <span className="text-3xl">👁️</span>
              </div>
              <h3 className="text-2xl font-semibold text-white mb-4">Computer Vision</h3>
              <p className="text-gray-300 mb-6">
                Advanced image and video analysis solutions for object detection, facial recognition, and visual intelligence.
              </p>
              <ul className="text-gray-300 space-y-2 mb-6">
                <li>• Object Detection</li>
                <li>• Facial Recognition</li>
                <li>• Image Classification</li>
                <li>• Video Analytics</li>
                <li>• Medical Imaging</li>
              </ul>
              <Link 
                href="/services/computer-vision"
                className="inline-flex items-center text-purple-400 hover:text-purple-300 font-medium"
              >
                Learn More →
              </Link>
            </div>

            {/* Automation & Robotics */}
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 hover:border-orange-400/50 transition-all">
              <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-500 rounded-xl flex items-center justify-center mb-6">
                <span className="text-3xl">🤖</span>
              </div>
              <h3 className="text-2xl font-semibold text-white mb-4">Automation & Robotics</h3>
              <p className="text-gray-300 mb-6">
                Intelligent automation solutions for process optimization, robotic process automation, and autonomous systems.
              </p>
              <ul className="text-gray-300 space-y-2 mb-6">
                <li>• Process Automation</li>
                <li>• Robotic Process Automation</li>
                <li>• Autonomous Systems</li>
                <li>• Workflow Optimization</li>
                <li>• Smart Manufacturing</li>
              </ul>
              <Link 
                href="/services/automation-robotics"
                className="inline-flex items-center text-orange-400 hover:text-orange-300 font-medium"
              >
                Learn More →
              </Link>
            </div>

            {/* Quantum Computing */}
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 hover:border-yellow-400/50 transition-all">
              <div className="w-16 h-16 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-xl flex items-center justify-center mb-6">
                <span className="text-3xl">⚛️</span>
              </div>
              <h3 className="text-2xl font-semibold text-white mb-4">Quantum Computing</h3>
              <p className="text-gray-300 mb-6">
                Revolutionary quantum computing solutions for complex problem-solving, optimization, and advanced simulations.
              </p>
              <ul className="text-gray-300 space-y-2 mb-6">
                <li>• Quantum Algorithms</li>
                <li>• Optimization Problems</li>
                <li>• Cryptography</li>
                <li>• Drug Discovery</li>
                <li>• Financial Modeling</li>
              </ul>
              <Link 
                href="/services/quantum-computing"
                className="inline-flex items-center text-yellow-400 hover:text-yellow-300 font-medium"
              >
                Learn More →
              </Link>
            </div>

            {/* AI Consulting */}
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 hover:border-indigo-400/50 transition-all">
              <div className="w-16 h-16 bg-gradient-to-r from-indigo-500 to-blue-500 rounded-xl flex items-center justify-center mb-6">
                <span className="text-3xl">🎯</span>
              </div>
              <h3 className="text-2xl font-semibold text-white mb-4">AI Strategy & Consulting</h3>
              <p className="text-gray-300 mb-6">
                Expert AI consulting services for strategy development, implementation planning, and digital transformation.
              </p>
              <ul className="text-gray-300 space-y-2 mb-6">
                <li>• AI Strategy Development</li>
                <li>• Implementation Planning</li>
                <li>• Digital Transformation</li>
                <li>• Technology Assessment</li>
                <li>• Training & Support</li>
              </ul>
              <Link 
                href="/services/ai-consulting"
                className="inline-flex items-center text-indigo-400 hover:text-indigo-300 font-medium"
              >
                Learn More →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Industry Applications */}
      <section className="py-20 bg-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Industry Applications
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our AI solutions are transforming industries across the globe with proven results
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20 text-center">
              <div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🏥</span>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Healthcare</h3>
              <p className="text-gray-300 text-sm">Medical diagnosis, drug discovery, and patient care optimization</p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20 text-center">
              <div className="w-12 h-12 bg-green-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🏦</span>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Finance</h3>
              <p className="text-gray-300 text-sm">Risk assessment, fraud detection, and algorithmic trading</p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20 text-center">
              <div className="w-12 h-12 bg-purple-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🏭</span>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Manufacturing</h3>
              <p className="text-gray-300 text-sm">Quality control, predictive maintenance, and supply chain optimization</p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20 text-center">
              <div className="w-12 h-12 bg-orange-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🛒</span>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">E-commerce</h3>
              <p className="text-gray-300 text-sm">Personalization, inventory management, and customer service</p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20 text-center">
              <div className="w-12 h-12 bg-red-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🚗</span>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Automotive</h3>
              <p className="text-gray-300 text-sm">Autonomous vehicles, predictive maintenance, and smart manufacturing</p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20 text-center">
              <div className="w-12 h-12 bg-teal-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🌾</span>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Agriculture</h3>
              <p className="text-gray-300 text-sm">Precision farming, crop monitoring, and yield optimization</p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20 text-center">
              <div className="w-12 h-12 bg-pink-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🎓</span>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Education</h3>
              <p className="text-gray-300 text-sm">Personalized learning, assessment, and educational analytics</p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20 text-center">
              <div className="w-12 h-12 bg-indigo-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🔒</span>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Cybersecurity</h3>
              <p className="text-gray-300 text-sm">Threat detection, anomaly analysis, and security automation</p>
            </div>
          </div>
        </div>
      </section>

      {/* Success Metrics */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Proven Results
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our AI services have delivered measurable results across hundreds of successful implementations
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-full w-20 h-20 flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                500+
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Projects Completed</h3>
              <p className="text-gray-300">Successful AI implementations across industries</p>
            </div>

            <div className="text-center">
              <div className="bg-gradient-to-r from-green-600 to-teal-600 text-white rounded-full w-20 h-20 flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                98%
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Success Rate</h3>
              <p className="text-gray-300">Projects delivered on time and within budget</p>
            </div>

            <div className="text-center">
              <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full w-20 h-20 flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                15K%
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Average ROI</h3>
              <p className="text-gray-300">Return on investment for our AI solutions</p>
            </div>

            <div className="text-center">
              <div className="bg-gradient-to-r from-orange-600 to-red-600 text-white rounded-full w-20 h-20 flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                24/7
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Support</h3>
              <p className="text-gray-300">Round-the-clock technical support</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-white/5">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Transform Your Business with AI?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Join hundreds of companies already achieving unprecedented results with our comprehensive AI services.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/contact"
              className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-lg font-semibold transition-all hover:from-blue-700 hover:to-purple-700"
            >
              Start Your AI Journey
            </Link>
            <Link 
              href="/case-studies"
              className="bg-white/10 hover:bg-white/20 text-white px-8 py-3 rounded-lg font-semibold transition-colors border border-white/30"
            >
              View Case Studies
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AI Services Comprehensive Showcase;