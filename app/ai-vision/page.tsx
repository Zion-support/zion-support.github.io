'use client';
import React from 'react';
import { Eye, ArrowRight, CheckCircle, Star, Zap, Camera, Video, Search } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import SEOOptimizer from '../components/SEOOptimizer';

const AIVisionPage: React.FC = () => {
  const visionServices = [
    {
      title: 'Object Detection',
      description: 'Identify and locate objects in images and videos with high precision',
      icon: Search,
      features: ['Real-time Detection', 'Multi-class Recognition', 'Bounding Box Localization', 'Confidence Scoring']
    },
    {
      title: 'Image Classification',
      description: 'Automatically categorize and classify images based on content',
      icon: Camera,
      features: ['Custom Categories', 'Batch Processing', 'API Integration', 'Confidence Metrics']
    },
    {
      title: 'Video Analysis',
      description: 'Process and analyze video content for insights and automation',
      icon: Video,
      features: ['Motion Detection', 'Scene Recognition', 'Activity Analysis', 'Real-time Processing']
    },
    {
      title: 'Facial Recognition',
      description: 'Identify and verify individuals using advanced facial recognition technology',
      icon: Eye,
      features: ['Identity Verification', 'Emotion Detection', 'Age Estimation', 'Privacy Protection']
    }
  ];

  return (
    <>
      <SEOOptimizer
        title="Computer Vision Solutions - Zion Tech Group"
        description="Advanced computer vision solutions including object detection, image classification, video analysis, and facial recognition. Transform visual data into actionable insights."
        keywords={['computer vision', 'object detection', 'image classification', 'video analysis', 'facial recognition']}
        canonicalUrl="https://ziontechgroup.com/ai-vision"
      />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <Navigation />
        
        <main className="container mx-auto px-4 py-24">
          {/* Hero Section */}
          <section className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 cyber-text-3d neon-pulse">
              Computer Vision Solutions
            </h1>
            <p className="text-xl text-green-400 mb-8 font-medium neon-pulse">
              See and Understand Visual Data with AI
            </p>
            <p className="text-lg text-gray-300 max-w-4xl mx-auto mb-12 leading-relaxed">
              Our computer vision solutions enable machines to see, understand, and analyze visual content. 
              From object detection to facial recognition, we help you extract valuable insights from images and videos.
            </p>
          </section>

          {/* Vision Services Grid */}
          <section className="mb-16">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {visionServices.map((service, index) => (
                <article key={index} className="cyber-card p-8 hover:scale-105 transition-all duration-300">
                  <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl flex items-center justify-center mb-6">
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4 neon-text">{service.title}</h3>
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  
                  <div>
                    <h4 className="text-lg font-semibold text-green-400 mb-3">Key Features:</h4>
                    <ul className="space-y-2">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-gray-300">
                          <CheckCircle className="w-4 h-4 text-green-400 mr-3 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </article>
              ))}
            </div>
          </section>

          {/* Benefits Section */}
          <section className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 text-center neon-text">
              Why Choose Our Computer Vision Solutions?
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="cyber-card p-6 text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Star className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">High Accuracy</h3>
                <p className="text-gray-300">
                  Our models achieve 95%+ accuracy rates across various computer vision tasks and datasets.
                </p>
              </div>
              
              <div className="cyber-card p-6 text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Zap className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Real-time Processing</h3>
                <p className="text-gray-300">
                  Process images and videos in real-time with optimized models for immediate results.
                </p>
              </div>
              
              <div className="cyber-card p-6 text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-green-400 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Custom Models</h3>
                <p className="text-gray-300">
                  Tailored computer vision models designed specifically for your industry and use cases.
                </p>
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 neon-text">
              Ready to See the Future with Computer Vision?
            </h2>
            <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
              Contact our computer vision experts today to discuss how visual AI can transform your business operations and unlock new possibilities.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="cyber-button px-8 py-4 text-lg font-semibold hover:scale-105 transition-all duration-300 flex items-center justify-center"
              >
                Get Started Today
                <ArrowRight className="w-5 h-5 ml-2" />
              </a>
              <a
                href="tel:+13024640950"
                className="flex items-center justify-center gap-2 border-2 border-green-400 text-green-400 px-8 py-4 rounded-lg font-semibold hover:bg-green-400 hover:text-slate-900 transition-all duration-300"
              >
                +1 302 464 0950
              </a>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default AIVisionPage;