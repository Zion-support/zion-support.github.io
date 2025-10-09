'use client';
import React from 'react';
import { Eye, Camera, Search, Shield, Zap, Target, BarChart, Users, Clock, CheckCircle, ArrowRight, Phone, Mail, MapPin } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const AIImageRecognitionPage: React.FC = () => {
  const features = [
    {
      icon: Eye,
      title: 'Advanced Computer Vision',
      description: 'State-of-the-art image recognition with 99.5% accuracy across all image types.'
    },
    {
      icon: Camera,
      title: 'Real-time Processing',
      description: 'Instant image analysis and recognition in real-time for immediate insights.'
    },
    {
      icon: Search,
      title: 'Object Detection & Classification',
      description: 'Identify and classify objects, people, text, and scenes with precision.'
    },
    {
      icon: Shield,
      title: 'Security & Quality Control',
      description: 'Automated quality control and security monitoring through visual analysis.'
    }
  ];

  const benefits = [
    '99.5% recognition accuracy',
    'Real-time processing',
    'Multi-format support',
    'Custom model training',
    'API integration ready',
    'Scalable cloud deployment'
  ];

  const useCases = [
    {
      title: 'Quality Control Automation',
      description: 'Automatically detect defects and quality issues in manufacturing processes.',
      icon: Shield
    },
    {
      title: 'Security & Surveillance',
      description: 'Intelligent monitoring and threat detection for enhanced security.',
      icon: Camera
    },
    {
      title: 'Medical Image Analysis',
      description: 'Assist in medical diagnosis through advanced image recognition technology.',
      icon: Eye
    },
    {
      title: 'Retail & E-commerce',
      description: 'Product recognition, inventory management, and visual search capabilities.',
      icon: Search
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 neon-text">
              AI Image Recognition
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Transform your business with advanced computer vision technology. Our AI image recognition 
              solutions deliver 99.5% accuracy for object detection, classification, and analysis.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="cyber-button inline-flex items-center justify-center px-8 py-4 text-lg"
              >
                Start Image Analysis
                <ArrowRight className="ml-2 w-5 h-5" />
              </a>
              <a
                href="tel:+13024640950"
                className="cyber-button-secondary inline-flex items-center justify-center px-8 py-4 text-lg"
              >
                <Phone className="mr-2 w-5 h-5" />
                (302) 464-0950
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Advanced Image Recognition Features</h2>
            <p className="text-xl text-gray-300">Cutting-edge computer vision technology</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="cyber-card p-6 text-center">
                <feature.icon className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 px-4 bg-slate-800/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Why Choose Our Image Recognition?</h2>
            <p className="text-xl text-gray-300">Proven technology that delivers results</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-center space-x-3">
                <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0" />
                <span className="text-gray-300 text-lg">{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Image Recognition Applications</h2>
            <p className="text-xl text-gray-300">Transform your business with visual intelligence</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {useCases.map((useCase, index) => (
              <div key={index} className="cyber-card p-8">
                <useCase.icon className="w-12 h-12 text-cyan-400 mb-4" />
                <h3 className="text-2xl font-semibold text-white mb-4">{useCase.title}</h3>
                <p className="text-gray-300 text-lg">{useCase.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-purple-600/20 to-blue-600/20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to See with AI?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Unlock the power of visual intelligence with our advanced image recognition technology.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="cyber-button inline-flex items-center justify-center px-8 py-4 text-lg"
            >
              Start Visual Analysis
              <ArrowRight className="ml-2 w-5 h-5" />
            </a>
            <a
              href="tel:+13024640950"
              className="cyber-button-secondary inline-flex items-center justify-center px-8 py-4 text-lg"
            >
              <Phone className="mr-2 w-5 h-5" />
              Call (302) 464-0950
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AIImageRecognitionPage;