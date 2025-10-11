'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Eye, Camera, Image, Brain, Target, CheckCircle, ArrowRight, Zap, Shield, BarChart } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const ComputerVisionPage: React.FC = () => {
  const features = [
    {
      icon: Eye,
      title: 'Object Detection',
      description: 'Advanced object detection and recognition capabilities for real-time analysis and classification.',
      benefits: ['Real-time detection', 'Multi-class recognition', 'High accuracy', 'Edge computing support']
    },
    {
      icon: Camera,
      title: 'Image Processing',
      description: 'Comprehensive image processing solutions including enhancement, filtering, and transformation.',
      benefits: ['Image enhancement', 'Noise reduction', 'Color correction', 'Format conversion']
    },
    {
      icon: Brain,
      title: 'Deep Learning',
      description: 'State-of-the-art deep learning models for complex computer vision tasks and pattern recognition.',
      benefits: ['CNN architectures', 'Transfer learning', 'Model optimization', 'Custom training']
    },
    {
      icon: Target,
      title: 'Precision Analysis',
      description: 'High-precision analysis tools for detailed visual inspection and quality assessment.',
      benefits: ['Pixel-level accuracy', 'Quality metrics', 'Defect detection', 'Measurement tools']
    }
  ];

  const applications = [
    'Medical imaging and diagnostics',
    'Autonomous vehicle systems',
    'Security and surveillance',
    'Manufacturing quality control',
    'Retail analytics and inventory',
    'Agricultural monitoring',
    'Augmented reality applications',
    'Document processing and OCR'
  ];

  return (
    <>
      <Helmet>
        <title>Computer Vision - Zion Tech Group</title>
        <meta name="description" content="Advanced computer vision solutions powered by AI and machine learning for real-world applications." />
        <meta name="keywords" content="computer vision, AI, machine learning, image processing, object detection, deep learning" />
      </Helmet>
      <Navigation />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                Computer <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">Vision</span>
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Transform visual data into actionable insights with our cutting-edge computer vision solutions powered by advanced AI and machine learning.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center">
                  Get Started
                  <ArrowRight className="ml-2 h-5 w-5" />
                </button>
                <button className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-white transition-all duration-300">
                  View Demo
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Our Computer Vision Capabilities
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Comprehensive computer vision solutions designed to meet your specific needs
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => {
                const Icon = feature.icon
                return (
                  <div key={index} className="bg-white/5 backdrop-blur-lg rounded-xl p-6 border border-white/20 hover:border-cyan-400/50 transition-all duration-300">
                    <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full flex items-center justify-center mb-6">
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-4">{feature.title}</h3>
                    <p className="text-gray-300 mb-4">{feature.description}</p>
                    <ul className="space-y-2">
                      {feature.benefits.map((benefit, benefitIndex) => (
                        <li key={benefitIndex} className="flex items-center text-sm text-gray-300">
                          <CheckCircle className="w-4 h-4 text-cyan-400 mr-2 flex-shrink-0" />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* Applications Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Industry Applications
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Our computer vision solutions are transforming industries across the globe
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {applications.map((application, index) => (
                <div key={index} className="flex items-center bg-white/5 backdrop-blur-lg rounded-lg p-4 border border-white/20">
                  <CheckCircle className="w-6 h-6 text-cyan-400 mr-4 flex-shrink-0" />
                  <span className="text-white">{application}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-white mb-6">Ready to Transform Your Visual Data?</h2>
            <p className="text-xl text-gray-300 mb-8">
              Let's discuss how our computer vision solutions can revolutionize your business processes.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center">
                Start Your Project
                <ArrowRight className="ml-2 h-5 w-5" />
              </button>
              <button className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-white transition-all duration-300">
                Schedule Consultation
              </button>
            </div>
          </div>
        </section>
      </div>
      
      <Footer />
    </>
  );
};

export default ComputerVisionPage;