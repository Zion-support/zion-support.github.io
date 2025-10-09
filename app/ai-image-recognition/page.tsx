'use client';
import React from 'react';
import { Eye, Camera, Target, Brain, ArrowRight, CheckCircle, Star, Users, Shield, Clock } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const AIImageRecognitionPage: React.FC = () => {
  const features = [
    {
      icon: Brain,
      title: 'Advanced Computer Vision',
      description: 'State-of-the-art AI algorithms that can identify, classify, and analyze images with human-level accuracy.',
      benefits: ['Object detection', 'Facial recognition', 'Scene understanding']
    },
    {
      icon: Eye,
      title: 'Real-time Processing',
      description: 'Process images and videos in real-time with lightning-fast AI models optimized for speed and accuracy.',
      benefits: ['Millisecond response times', 'Live video analysis', 'Batch processing']
    },
    {
      icon: Target,
      title: 'Custom Model Training',
      description: 'Train custom AI models tailored to your specific use case and industry requirements.',
      benefits: ['Domain-specific models', 'Custom datasets', 'Continuous learning']
    },
    {
      icon: Shield,
      title: 'Privacy & Security',
      description: 'Enterprise-grade security with privacy-preserving techniques and data protection measures.',
      benefits: ['Data encryption', 'Privacy compliance', 'Secure processing']
    }
  ];

  const useCases = [
    {
      title: 'Quality Control',
      description: 'Automated defect detection and quality assurance in manufacturing processes.',
      icon: Target
    },
    {
      title: 'Security & Surveillance',
      description: 'Intelligent monitoring and threat detection for enhanced security systems.',
      icon: Shield
    },
    {
      title: 'Medical Imaging',
      description: 'AI-powered analysis of medical images for faster and more accurate diagnoses.',
      icon: Eye
    },
    {
      title: 'Retail Analytics',
      description: 'Customer behavior analysis and inventory management through visual recognition.',
      icon: Users
    }
  ];

  const stats = [
    { number: '99.5%', label: 'Recognition Accuracy' },
    { number: '50ms', label: 'Processing Speed' },
    { number: '1000+', label: 'Object Classes' },
    { number: '24/7', label: 'Continuous Monitoring' }
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              AI Image Recognition
            </h1>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Transform your business with cutting-edge computer vision technology. Our AI image recognition solutions 
              can identify, analyze, and understand visual content with unprecedented accuracy and speed.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="cyber-button inline-flex items-center">
                Get Started <ArrowRight className="ml-2 w-4 h-4" />
              </button>
              <button className="px-8 py-3 border border-cyan-400 text-cyan-400 rounded-lg hover:bg-cyan-400 hover:text-gray-900 transition-all">
                View Demo
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl font-bold text-cyan-400 mb-2">{stat.number}</div>
                <div className="text-gray-300">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Advanced Computer Vision Features</h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Our AI image recognition platform leverages deep learning and neural networks to deliver 
              state-of-the-art visual understanding capabilities for your business.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12">
            {features.map((feature, index) => (
              <div key={index} className="cyber-card p-8">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg flex items-center justify-center mr-4">
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold">{feature.title}</h3>
                </div>
                <p className="text-gray-300 mb-6">{feature.description}</p>
                <ul className="space-y-2">
                  {feature.benefits.map((benefit, benefitIndex) => (
                    <li key={benefitIndex} className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
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
      <section className="py-20 bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Industry Applications</h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Discover how AI image recognition is revolutionizing industries with intelligent visual analysis.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {useCases.map((useCase, index) => (
              <div key={index} className="cyber-card p-6 text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-600 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <useCase.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3">{useCase.title}</h3>
                <p className="text-gray-400">{useCase.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-blue-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">See the Future with AI Vision</h2>
          <p className="text-xl mb-8 text-purple-100">
            Join forward-thinking companies using our AI image recognition to gain competitive advantages.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all">
              Start Free Trial
            </button>
            <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-all">
              Schedule Demo
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AIImageRecognitionPage;