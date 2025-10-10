'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { CheckCircle, ArrowRight, Star, Clock, Zap, Shield, Brain, BarChart, Target, TrendingUp, Globe, Database, Users, Settings } from 'lucide-react';

const AiComputerVisionPage: React.FC = () => {
  const features = [
    {
      icon: Brain,
      title: 'AI-Powered Computer Vision',
      description: 'Advanced AI algorithms that provide intelligent image and video analysis.',
      benefits: ['Object detection', 'Image recognition', 'Video analysis', 'Pattern recognition']
    },
    {
      icon: Eye,
      title: 'Real-Time Processing',
      description: 'Process images and videos in real-time with high accuracy.',
      benefits: ['Live streaming', 'Real-time analysis', 'Low latency', 'High throughput']
    },
    {
      icon: Shield,
      title: 'Privacy Protection',
      description: 'Advanced privacy protection for sensitive image and video data.',
      benefits: ['Data encryption', 'Privacy filters', 'Secure processing', 'Compliance support']
    },
    {
      icon: Settings,
      title: 'Easy Integration',
      description: 'Simple integration with existing applications and workflows.',
      benefits: ['API access', 'SDK support', 'Cloud deployment', 'Edge computing']
    },
    {
      icon: Target,
      title: 'High Accuracy',
      description: 'Achieve high accuracy with advanced machine learning models.',
      benefits: ['Pre-trained models', 'Custom training', 'Model optimization', 'Performance tuning']
    },
    {
      icon: Globe,
      title: 'Scalable Solutions',
      description: 'Scale your computer vision applications from prototype to production.',
      benefits: ['Auto-scaling', 'Load balancing', 'Global deployment', 'High availability']
    }
  ];

  const benefits = [
    'Extract insights from images and videos automatically',
    'Improve accuracy with advanced AI models',
    'Process large volumes of visual data efficiently',
    'Integrate with existing applications seamlessly',
    'Scale solutions from prototype to production',
    'Ensure privacy and security of visual data'
  ];

  const useCases = [
    {
      title: 'Object Detection',
      description: 'Detect and identify objects in images and videos',
      icon: Target
    },
    {
      title: 'Facial Recognition',
      description: 'Recognize and analyze faces in images and videos',
      icon: Users
    },
    {
      title: 'Quality Control',
      description: 'Automate quality control in manufacturing processes',
      icon: Shield
    },
    {
      title: 'Medical Imaging',
      description: 'Analyze medical images for diagnosis and treatment',
      icon: Database
    }
  ];

  return (
    <React.Fragment>
      <Helmet>
        <title>AI Computer Vision - Zion Tech Group</title>
        <meta name="description" content="Advanced AI-powered computer vision for modern applications. Analyze images and videos with intelligent automation." />
        <meta name="keywords" content="computer vision, AI vision, image analysis, video analysis, object detection, facial recognition" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <Navigation />
        
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                AI Computer Vision
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Unlock the power of visual data with our AI-powered computer vision platform. 
                Analyze images and videos with intelligent automation and high accuracy.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center space-x-2"
                >
                  <span>Get Started</span>
                  <ArrowRight className="w-5 h-5" />
                </a>
                <a
                  href="#features"
                  className="border border-white/20 text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition-all duration-300 flex items-center justify-center space-x-2"
                >
                  <span>Learn More</span>
                  <ArrowRight className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6">Advanced Computer Vision Features</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our computer vision platform provides everything you need to analyze and understand visual data.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-slate-800/50 rounded-xl p-8 backdrop-blur-sm border border-white/10 hover:border-cyan-500/50 transition-all duration-300">
                  <div className="bg-cyan-500/20 rounded-full w-12 h-12 flex items-center justify-center mb-6">
                    <feature.icon className="w-6 h-6 text-cyan-400" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-4">{feature.title}</h3>
                  <p className="text-gray-300 mb-6">{feature.description}</p>
                  <ul className="space-y-2">
                    {feature.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="flex items-center text-gray-300">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-3 flex-shrink-0" />
                        <span className="text-sm">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Use Cases Section */}
        <section className="py-20 bg-slate-800/50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6">Use Cases</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Discover how our computer vision platform can transform your applications across different industries.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {useCases.map((useCase, index) => (
                <div key={index} className="bg-slate-800/50 rounded-xl p-6 backdrop-blur-sm border border-white/10 text-center">
                  <div className="bg-purple-500/20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <useCase.icon className="w-8 h-8 text-purple-400" />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-3">{useCase.title}</h3>
                  <p className="text-gray-300 text-sm">{useCase.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl font-bold text-white mb-6">Why Choose Our Computer Vision?</h2>
                <p className="text-lg text-gray-300 mb-8">
                  Our AI-powered computer vision platform is designed to help you extract insights 
                  from visual data with high accuracy and efficiency.
                </p>
                <ul className="space-y-4">
                  {benefits.map((benefit, index) => (
                    <li key={index} className="flex items-start">
                      <CheckCircle className="w-6 h-6 text-green-400 mr-4 flex-shrink-0 mt-1" />
                      <span className="text-gray-300">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="relative">
                <div className="bg-gradient-to-br from-cyan-500/20 to-purple-600/20 rounded-2xl p-8 backdrop-blur-sm border border-white/10">
                  <div className="text-center">
                    <div className="bg-cyan-500/20 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6">
                      <Eye className="w-10 h-10 text-cyan-400" />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-4">Visual Intelligence</h3>
                    <p className="text-gray-300 mb-6">
                      Extract meaningful insights from visual data with advanced AI algorithms.
                    </p>
                    <div className="grid grid-cols-2 gap-4 text-center">
                      <div>
                        <div className="text-3xl font-bold text-cyan-400">95%</div>
                        <div className="text-gray-300 text-sm">Accuracy</div>
                      </div>
                      <div>
                        <div className="text-3xl font-bold text-purple-400">50ms</div>
                        <div className="text-gray-300 text-sm">Processing Time</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-slate-800/50">
          <div className="container mx-auto px-4 text-center">
            <div className="bg-gradient-to-r from-cyan-500/10 to-purple-600/10 rounded-2xl p-12 backdrop-blur-sm border border-white/10">
              <h2 className="text-4xl font-bold text-white mb-6">Ready to See the Future?</h2>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Start analyzing visual data with our AI-powered computer vision platform. 
                Get started today and see the difference intelligent visual analysis can make.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center space-x-2"
                >
                  <span>Get Started Now</span>
                  <ArrowRight className="w-5 h-5" />
                </a>
                <a
                  href="/pricing"
                  className="border border-white/20 text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-all duration-300 flex items-center justify-center space-x-2"
                >
                  <span>View Pricing</span>
                  <ArrowRight className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </React.Fragment>
  );
};

export default AiComputerVisionPage;