'use client';
import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { Eye, Camera, Search, Shield, CheckCircle, ArrowRight, Star, Users, Award, Zap } from 'lucide-react';

const AIImageRecognitionPage: React.FC = () => {
  const features = [
    {
      icon: Eye,
      title: 'Advanced Computer Vision',
      description: 'State-of-the-art image recognition powered by deep learning neural networks.'
    },
    {
      icon: Camera,
      title: 'Real-time Processing',
      description: 'Process images and videos in real-time with millisecond response times.'
    },
    {
      icon: Search,
      title: 'Object Detection',
      description: 'Identify and locate objects, people, and text within images with high accuracy.'
    },
    {
      icon: Shield,
      title: 'Secure & Private',
      description: 'Enterprise-grade security with on-premise deployment options available.'
    }
  ];

  const applications = [
    {
      title: 'Quality Control',
      description: 'Automated defect detection in manufacturing with 99.5% accuracy.',
      accuracy: '99.5%',
      icon: '🏭'
    },
    {
      title: 'Security & Surveillance',
      description: 'Facial recognition and threat detection for enhanced security.',
      accuracy: '98%',
      icon: '🔒'
    },
    {
      title: 'Medical Imaging',
      description: 'AI-assisted diagnosis and medical image analysis.',
      accuracy: '96%',
      icon: '🏥'
    },
    {
      title: 'Retail Analytics',
      description: 'Customer behavior analysis and inventory management.',
      accuracy: '94%',
      icon: '🛒'
    },
    {
      title: 'Autonomous Vehicles',
      description: 'Object detection and scene understanding for self-driving cars.',
      accuracy: '97%',
      icon: '🚗'
    },
    {
      title: 'Content Moderation',
      description: 'Automated content filtering and inappropriate image detection.',
      accuracy: '95%',
      icon: '🛡️'
    }
  ];

  const benefits = [
    'Reduce manual inspection time by 90%',
    'Improve accuracy and consistency in visual tasks',
    'Enable 24/7 automated monitoring and analysis',
    'Scale visual processing without additional staff',
    'Integrate seamlessly with existing systems',
    'Support multiple image formats and video streams'
  ];

  return (
    <>
      <Navigation />
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4">
          <div className="container mx-auto max-w-7xl">
            <div className="text-center mb-16">
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 neon-text">
                AI Image Recognition
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Transform visual data into actionable insights with our advanced AI image recognition platform. 
                See what others miss with computer vision that understands context and meaning.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="cyber-button px-8 py-4 text-lg">
                  Start Recognizing
                  <ArrowRight className="w-5 h-5 ml-2" />
                </button>
                <button className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg hover:bg-cyan-400/10 transition-colors">
                  View Demo
                </button>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
              <div className="text-center">
                <div className="text-4xl font-bold text-cyan-400 mb-2">99.5%</div>
                <div className="text-gray-300">Recognition Accuracy</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-cyan-400 mb-2">90%</div>
                <div className="text-gray-300">Time Reduction</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-cyan-400 mb-2">1000+</div>
                <div className="text-gray-300">Object Classes</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-cyan-400 mb-2">24/7</div>
                <div className="text-gray-300">Processing</div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4">
          <div className="container mx-auto max-w-7xl">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6">Powerful Image Recognition Features</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our AI image recognition platform combines computer vision, machine learning, 
                and deep neural networks to deliver unmatched accuracy and performance.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-slate-800/50 rounded-xl p-6 hover:bg-slate-800/70 transition-colors">
                  <div className="w-12 h-12 bg-cyan-500/20 rounded-lg flex items-center justify-center mb-4">
                    <feature.icon className="w-6 h-6 text-cyan-400" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                  <p className="text-gray-300">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Applications Section */}
        <section className="py-20 px-4 bg-slate-800/30">
          <div className="container mx-auto max-w-7xl">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6">Industry Applications</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                From manufacturing to healthcare, our AI image recognition solutions 
                are transforming industries across the globe.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {applications.map((app, index) => (
                <div key={index} className="bg-slate-900/50 rounded-xl p-6 hover:bg-slate-900/70 transition-colors">
                  <div className="flex items-center justify-between mb-4">
                    <div className="text-4xl">{app.icon}</div>
                    <div className="bg-green-500/20 text-green-400 px-3 py-1 rounded-full text-sm font-semibold">
                      {app.accuracy} accuracy
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{app.title}</h3>
                  <p className="text-gray-300">{app.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 px-4">
          <div className="container mx-auto max-w-7xl">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-4xl font-bold text-white mb-6">Why Choose Our Image Recognition?</h2>
                <p className="text-xl text-gray-300 mb-8">
                  Our AI image recognition platform delivers enterprise-grade performance 
                  with the accuracy and reliability your business demands.
                </p>
                <div className="space-y-4">
                  {benefits.map((benefit, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <CheckCircle className="w-6 h-6 text-cyan-400 flex-shrink-0" />
                      <span className="text-gray-300">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="bg-gradient-to-br from-cyan-500/20 to-purple-500/20 rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-white mb-6">Performance Metrics</h3>
                <div className="space-y-4">
                  <div className="flex justify-between">
                    <span className="text-gray-300">Object Detection:</span>
                    <span className="text-green-400 font-semibold">99.5%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-300">Facial Recognition:</span>
                    <span className="text-green-400 font-semibold">98%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-300">Text Recognition:</span>
                    <span className="text-green-400 font-semibold">97%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-300">Processing Speed:</span>
                    <span className="text-green-400 font-semibold">&lt;100ms</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 bg-gradient-to-r from-cyan-600/20 to-purple-600/20">
          <div className="container mx-auto max-w-4xl text-center">
            <h2 className="text-4xl font-bold text-white mb-6">See the Future with AI Vision</h2>
            <p className="text-xl text-gray-300 mb-8">
              Transform your visual data into actionable insights with our advanced AI image recognition platform.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="cyber-button px-8 py-4 text-lg">
                Get Started
                <ArrowRight className="w-5 h-5 ml-2" />
              </button>
              <button className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg hover:bg-cyan-400/10 transition-colors">
                Request Demo
              </button>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default AIImageRecognitionPage;