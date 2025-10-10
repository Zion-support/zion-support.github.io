'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Eye, Camera, Brain, Zap, CheckCircle, ArrowRight, Phone, Mail, MapPin, Shield, Cpu, Database } from 'lucide-react';

const AIComputerVisionPage: React.FC = () => {
  const features = [
    {
      icon: Eye,
      title: 'Object Detection',
      description: 'Advanced object detection and recognition using state-of-the-art computer vision algorithms',
      color: 'text-blue-400'
    },
    {
      icon: Camera,
      title: 'Image Analysis',
      description: 'Comprehensive image analysis including classification, segmentation, and feature extraction',
      color: 'text-purple-400'
    },
    {
      icon: Brain,
      title: 'Deep Learning Models',
      description: 'Custom deep learning models trained for specific computer vision tasks and applications',
      color: 'text-green-400'
    },
    {
      icon: Zap,
      title: 'Real-time Processing',
      description: 'High-performance real-time image and video processing for live applications',
      color: 'text-orange-400'
    }
  ];

  const benefits = [
    'Advanced object detection and recognition',
    'Real-time image and video processing',
    'Custom deep learning model development',
    'Integration with existing systems',
    'High accuracy and performance',
    'Scalable cloud-based solutions',
    'Support for multiple image formats',
    'API and SDK for easy integration'
  ];

  const useCases = [
    {
      title: 'Autonomous Vehicles',
      description: 'Computer vision for self-driving cars, obstacle detection, and navigation',
      icon: Camera
    },
    {
      title: 'Medical Imaging',
      description: 'AI-powered medical image analysis for diagnosis and treatment planning',
      icon: Eye
    },
    {
      title: 'Quality Control',
      description: 'Automated quality inspection in manufacturing and production lines',
      icon: Shield
    },
    {
      title: 'Security Systems',
      description: 'Facial recognition and surveillance systems for enhanced security',
      icon: Brain
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>AI Computer Vision | Zion Tech Group</title>
        <meta name="description" content="Advanced AI computer vision solutions for object detection, image analysis, and real-time processing. Transform your business with cutting-edge computer vision technology." />
        <meta name="keywords" content="AI computer vision, object detection, image analysis, deep learning, computer vision solutions, AI vision" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                AI Computer Vision
              </span>
              <br />
              <span className="text-white">Solutions</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Transform your business with advanced AI computer vision technology. 
              Object detection, image analysis, and real-time processing powered by cutting-edge AI.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-purple-500 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-purple-600 hover:to-blue-700 transition-all duration-300 flex items-center">
                Get Started
                <ArrowRight className="ml-2 h-5 w-5" />
              </button>
              <button className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300">
                Learn More
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
              Advanced Computer Vision Features
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our AI computer vision solutions provide powerful capabilities for image and video analysis.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
                <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-600 rounded-lg mb-4">
                  <feature.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Key Benefits
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Experience the power of AI-driven computer vision for your business applications.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-start space-x-3">
                <CheckCircle className="h-6 w-6 text-purple-400 mt-1 flex-shrink-0" />
                <p className="text-gray-300 text-lg">{benefit}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Use Cases
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Discover how AI computer vision can transform your industry and business operations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {useCases.map((useCase, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
                <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg mb-4">
                  <useCase.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{useCase.title}</h3>
                <p className="text-gray-300">{useCase.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-8 md:p-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to See with AI?
            </h2>
            <p className="text-xl text-purple-100 mb-8">
              Contact our experts to discuss your computer vision needs and get a customized solution.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 flex items-center justify-center">
                <Phone className="mr-2 h-5 w-5" />
                Call Now
              </button>
              <button className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-all duration-300 flex items-center justify-center">
                <Mail className="mr-2 h-5 w-5" />
                Email Us
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AIComputerVisionPage;