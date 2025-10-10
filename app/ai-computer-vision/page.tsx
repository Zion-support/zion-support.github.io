'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { CheckCircle, Eye, Camera, Image, Zap, Shield, ArrowRight, Brain, Target, Users, Star, Phone, Mail, MapPin, Car, Building, Stethoscope } from 'lucide-react';

const AIComputerVisionPage: React.FC = () => {
  const features = [
    {
      icon: Eye,
      title: 'Object Detection',
      description: 'Advanced object detection and recognition using state-of-the-art computer vision algorithms.',
      benefits: ['Real-time detection', 'Multi-class recognition', 'High accuracy', 'Custom training']
    },
    {
      icon: Camera,
      title: 'Image Analysis',
      description: 'Comprehensive image analysis including classification, segmentation, and feature extraction.',
      benefits: ['Image classification', 'Semantic segmentation', 'Feature extraction', 'Quality assessment']
    },
    {
      icon: Brain,
      title: 'Deep Learning Models',
      description: 'Custom deep learning models trained on your specific data for optimal performance.',
      benefits: ['Custom models', 'Transfer learning', 'Model optimization', 'Continuous learning']
    },
    {
      icon: Target,
      title: 'Real-time Processing',
      description: 'Process images and videos in real-time with optimized algorithms and hardware acceleration.',
      benefits: ['Real-time processing', 'Hardware acceleration', 'Low latency', 'High throughput']
    },
    {
      icon: Shield,
      title: 'Security & Privacy',
      description: 'Secure computer vision solutions with privacy protection and data encryption.',
      benefits: ['Data encryption', 'Privacy protection', 'Secure processing', 'Compliance ready']
    },
    {
      icon: Zap,
      title: 'Edge Computing',
      description: 'Deploy computer vision models on edge devices for offline processing and reduced latency.',
      benefits: ['Edge deployment', 'Offline processing', 'Reduced latency', 'Cost optimization']
    }
  ];

  const benefits = [
    'Improve accuracy by 95%',
    'Reduce processing time by 80%',
    'Enable real-time analysis',
    'Scale to millions of images',
    'Reduce manual work by 90%',
    'Increase automation by 85%',
    'Enhance decision making',
    'Enable new applications'
  ];

  const useCases = [
    {
      title: 'Autonomous Vehicles',
      description: 'Computer vision for self-driving cars and autonomous navigation systems',
      icon: Car
    },
    {
      title: 'Smart Cities',
      description: 'Intelligent surveillance and traffic management systems',
      icon: Building
    },
    {
      title: 'Medical Imaging',
      description: 'AI-powered medical image analysis and diagnostic assistance',
      icon: Stethoscope
    },
    {
      title: 'Quality Control',
      description: 'Automated quality inspection and defect detection in manufacturing',
      icon: Target
    }
  ];

  return (
    <>
      <Helmet>
        <title>AI Computer Vision - Zion Tech Group</title>
        <meta name="description" content="Advanced AI-powered computer vision solutions. Object detection, image analysis, and real-time processing for intelligent visual applications." />
        <meta name="keywords" content="AI computer vision, object detection, image analysis, deep learning, computer vision AI, Zion Tech Group" />
      </Helmet>

      <Navigation />
      <main className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(147,51,234,0.3)_0%,transparent_50%)] animate-pulse" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.3)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }} />
          <div className="relative max-w-7xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              AI Computer
              <span className="block bg-gradient-to-r from-purple-400 via-pink-400 to-rose-400 bg-clip-text text-transparent">
                Vision
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              Advanced AI-powered computer vision solutions. Object detection, image analysis, 
              and real-time processing for intelligent visual applications.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-4 rounded-lg font-semibold hover:from-purple-600 hover:to-pink-600 transition-all duration-300 flex items-center justify-center">
                Start Building
                <ArrowRight className="ml-2 w-5 h-5" />
              </button>
              <button className="border border-purple-400 text-purple-300 px-8 py-4 rounded-lg font-semibold hover:bg-purple-500 hover:text-white transition-all duration-300">
                View Demo
              </button>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4">
          <div className="container mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Advanced Vision Features
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Cutting-edge AI technology for intelligent visual processing and analysis
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 group">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">{feature.title}</h3>
                  <p className="text-gray-300 mb-4">{feature.description}</p>
                  {feature.benefits && (
                    <ul className="space-y-2">
                      {feature.benefits.map((benefit, idx) => (
                        <li key={idx} className="flex items-center text-sm text-gray-400">
                          <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 px-4">
          <div className="container mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Why Choose Our Computer Vision?
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Experience the future of visual intelligence with our revolutionary AI technology
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 text-center">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg mb-4">
                    <CheckCircle className="w-6 h-6 text-white" />
                  </div>
                  <p className="text-white font-medium">{benefit}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Use Cases Section */}
        <section className="py-20 px-4">
          <div className="container mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Perfect for Every Application
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                From autonomous vehicles to medical imaging, our computer vision adapts to your needs
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {useCases.map((useCase, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 group text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-600 rounded-2xl flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform">
                    <useCase.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">{useCase.title}</h3>
                  <p className="text-gray-300">{useCase.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4">
          <div className="container mx-auto text-center">
            <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-12 max-w-4xl mx-auto">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Ready to See the Future?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Start building intelligent visual applications with our AI computer vision platform today.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-600 hover:to-pink-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">
                  Get Started Free
                </button>
                <button className="border border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300">
                  Schedule Demo
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default AIComputerVisionPage;