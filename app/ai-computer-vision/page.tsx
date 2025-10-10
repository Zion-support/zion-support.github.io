'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { CheckCircle, Eye, Camera, Image, Zap, Shield, ArrowRight, Brain, Target, Users, Star, Phone, Mail, MapPin } from 'lucide-react';

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
    'Lower operational costs by 60%',
    'Enable real-time insights',
    'Automate visual tasks',
    'Scale across devices',
    'Enhance user experience',
    'Enable new applications'
  ];

  const useCases = [
    {
      title: 'Autonomous Vehicles',
      description: 'Computer vision for self-driving cars and advanced driver assistance systems',
      icon: '🚗'
    },
    {
      title: 'Medical Imaging',
      description: 'AI-powered medical image analysis for diagnosis and treatment planning',
      icon: '🏥'
    },
    {
      title: 'Quality Control',
      description: 'Automated quality inspection and defect detection in manufacturing',
      icon: '🏭'
    },
    {
      title: 'Security & Surveillance',
      description: 'Intelligent surveillance systems with facial recognition and behavior analysis',
      icon: '🔒'
    },
    {
      title: 'Retail Analytics',
      description: 'Customer behavior analysis and inventory management in retail',
      icon: '🛒'
    },
    {
      title: 'Agriculture',
      description: 'Crop monitoring, disease detection, and yield prediction in agriculture',
      icon: '🌾'
    }
  ];

  return (
    <>
      <Helmet>
        <title>AI Computer Vision - Zion Tech Group</title>
        <meta name="description" content="Transform your business with our AI Computer Vision solutions. Advanced object detection, image analysis, and real-time processing for better insights." />
        <meta name="keywords" content="AI computer vision, object detection, image analysis, deep learning, computer vision AI, visual recognition" />
      </Helmet>

      <Navigation />

      <main className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mb-8">
              <Eye className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              AI Computer Vision
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Transform your business with our AI Computer Vision solutions. Advanced object detection, 
              image analysis, and real-time processing for better insights.
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
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Advanced Computer Vision Features
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Our AI Computer Vision solutions combine cutting-edge technology with visual intelligence
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg mb-4">
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                  <p className="text-gray-300 mb-4">{feature.description}</p>
                  <ul className="space-y-2">
                    {feature.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="flex items-center text-sm text-gray-300">
                        <CheckCircle className="w-4 h-4 text-purple-400 mr-2 flex-shrink-0" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Use Cases Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Applications & Use Cases
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                From healthcare to manufacturing, our AI Computer Vision serves diverse industries
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {useCases.map((useCase, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 text-center">
                  <div className="text-4xl mb-4">{useCase.icon}</div>
                  <h3 className="text-xl font-semibold text-white mb-3">{useCase.title}</h3>
                  <p className="text-gray-300">{useCase.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Why Choose Our AI Computer Vision?
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
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

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl p-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Ready to See the Future?
              </h2>
              <p className="text-xl text-purple-100 mb-8">
                Join thousands of businesses who are already using our AI Computer Vision solutions
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-white text-purple-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 flex items-center justify-center">
                  Get Started Now
                  <ArrowRight className="ml-2 w-5 h-5" />
                </button>
                <button className="border border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-all duration-300">
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