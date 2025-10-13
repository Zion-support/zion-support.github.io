import React from 'react';
import { Helmet } from 'react-helmet-async';
import { ArrowRight, Eye, Brain, Zap, Target, BarChart, TrendingUp, Users, Clock, Star, Mic, Smartphone, Globe } from 'lucide-react';

const AiImageRecognitionProPage: React.FC = () => {
  const features = [
    {
      icon: Eye,
      title: 'Advanced Image Analysis',
      description: 'AI-powered image recognition with 99.9% accuracy for object detection and classification.',
      benefits: ['Object detection', 'Image classification', 'Facial recognition', 'Scene analysis']
    },
    {
      icon: Brain,
      title: 'Deep Learning Models',
      description: 'State-of-the-art deep learning models trained on millions of images.',
      benefits: ['CNN architectures', 'Transfer learning', 'Model optimization', 'Continuous training']
    },
    {
      icon: Zap,
      title: 'Real-time Processing',
      description: 'Process images in real-time with sub-second response times.',
      benefits: ['Live processing', 'Batch analysis', 'Stream processing', 'Edge computing']
    },
    {
      icon: Target,
      title: 'Precision Recognition',
      description: 'Identify objects, faces, and scenes with high precision and accuracy.',
      benefits: ['High accuracy', 'Low false positives', 'Multi-class detection', 'Custom models']
    },
    {
      icon: BarChart,
      title: 'Analytics Dashboard',
      description: 'Comprehensive analytics and insights on image recognition performance.',
      benefits: ['Performance metrics', 'Accuracy tracking', 'Usage analytics', 'Custom reports']
    },
    {
      icon: TrendingUp,
      title: 'Continuous Learning',
      description: 'Models continuously learn and improve from new data and feedback.',
      benefits: ['Online learning', 'Feedback loops', 'Model updates', 'Performance improvement']
    }
  ];

  const benefits = [
    '99.9% recognition accuracy',
    'Real-time image processing',
    'Advanced deep learning models',
    'Custom model training',
    'Comprehensive analytics',
    'API integration ready'
  ];

  return (
    <>
      <Helmet>
        <title>AI Image Recognition Pro - Advanced Computer Vision | Zion Tech Group</title>
        <meta name="description" content="Transform your image analysis with AI-powered recognition. Object detection, facial recognition, and scene analysis with 99.9% accuracy." />
        <meta name="keywords" content="AI image recognition, computer vision, object detection, facial recognition, image analysis, deep learning" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              AI Image Recognition
              <span className="block bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Pro
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Transform your image analysis with AI-powered recognition. 
              Object detection, facial recognition, and scene analysis with 99.9% accuracy.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-xl font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-cyan-500/25">
                Start Free Trial
                <ArrowRight className="w-5 h-5 ml-2 inline" />
              </button>
              <button className="px-8 py-4 border border-cyan-500/30 text-cyan-400 rounded-xl font-semibold hover:bg-cyan-500/10 transition-all duration-300">
                Schedule Demo
              </button>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl font-bold text-white text-center mb-16">
              Advanced Image Recognition Features
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <div key={index} className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-slate-700/50 hover:border-cyan-500/50 transition-all duration-300">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 flex items-center justify-center mb-4">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                    <p className="text-gray-300 mb-4">{feature.description}</p>
                    <ul className="space-y-2">
                      {feature.benefits.map((benefit, benefitIndex) => (
                        <li key={benefitIndex} className="flex items-center space-x-2 text-sm text-gray-400">
                          <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full"></div>
                          <span>{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 px-4 bg-slate-800/30">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl font-bold text-white text-center mb-16">
              Why Choose AI Image Recognition Pro?
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center space-x-4 bg-slate-800/30 backdrop-blur-sm rounded-xl p-6 border border-slate-700/30">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 flex items-center justify-center flex-shrink-0">
                    <Star className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-gray-300 font-medium">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Transform Your Image Analysis?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join thousands of businesses already using AI-powered image recognition 
              to automate their visual analysis and improve decision-making.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-xl font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-cyan-500/25">
                Start Free Trial
                <ArrowRight className="w-5 h-5 ml-2 inline" />
              </button>
              <button className="px-8 py-4 border border-cyan-500/30 text-cyan-400 rounded-xl font-semibold hover:bg-cyan-500/10 transition-all duration-300">
                Schedule Demo
              </button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default AiImageRecognitionProPage;