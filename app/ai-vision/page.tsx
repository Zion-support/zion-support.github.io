'use client';
import React from 'react';
import { Eye, Camera, Search, Shield, BarChart, Zap, Brain, Target } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import SEOOptimizer from '../components/SEOOptimizer';

const AIVisionPage: React.FC = () => {
  const visionServices = [
    {
      title: 'Object Detection',
      description: 'Identify and locate objects in images and videos with high accuracy',
      icon: Target,
      features: ['Real-time Detection', 'Multi-class Recognition', 'Bounding Box Generation', 'Confidence Scoring']
    },
    {
      title: 'Image Classification',
      description: 'Categorize and classify images based on content and features',
      icon: Camera,
      features: ['Custom Categories', 'Batch Processing', 'API Integration', 'High Accuracy']
    },
    {
      title: 'Facial Recognition',
      description: 'Advanced facial recognition and analysis capabilities',
      icon: Eye,
      features: ['Face Detection', 'Identity Verification', 'Emotion Analysis', 'Age Estimation']
    },
    {
      title: 'Video Analysis',
      description: 'Process and analyze video content for insights and automation',
      icon: BarChart,
      features: ['Motion Detection', 'Activity Recognition', 'Scene Analysis', 'Real-time Processing']
    }
  ];

  return (
    <>
      <SEOOptimizer
        title="Computer Vision Solutions - Zion Tech Group"
        description="Advanced computer vision solutions including object detection, image classification, facial recognition, and video analysis. Transform visual data into actionable insights."
        keywords={['computer vision', 'object detection', 'image classification', 'facial recognition', 'video analysis', 'AI vision']}
        canonicalUrl="https://ziontechgroup.com/ai-vision"
      />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-green-900 to-slate-900">
        <Navigation />
        
        <main className="container mx-auto px-4 py-16 pt-24">
          {/* Hero Section */}
          <section className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 cyber-text-3d neon-pulse">
              Computer Vision
            </h1>
            <p className="text-xl text-green-400 mb-8 font-medium">
              See and Understand the Visual World
            </p>
            <p className="text-lg text-gray-300 max-w-4xl mx-auto mb-8">
              Transform visual data into intelligent insights with our advanced computer vision solutions. 
              From object detection to facial recognition, unlock the power of AI-powered image analysis.
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
                  <p className="text-gray-300 mb-6 text-lg leading-relaxed">
                    {service.description}
                  </p>
                  
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-green-400 mb-3">Key Features:</h4>
                    <ul className="space-y-2">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-gray-300">
                          <div className="w-2 h-2 bg-green-400 rounded-full mr-3 flex-shrink-0"></div>
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
            <h2 className="text-3xl font-bold text-white mb-8 text-center neon-text">Why Choose Our Vision Solutions?</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="cyber-card p-6 text-center">
                <div className="text-4xl mb-4">🎯</div>
                <h3 className="text-xl font-bold text-white mb-3">High Accuracy</h3>
                <p className="text-gray-300">State-of-the-art models that deliver exceptional accuracy in visual recognition tasks.</p>
              </div>
              <div className="cyber-card p-6 text-center">
                <div className="text-4xl mb-4">⚡</div>
                <h3 className="text-xl font-bold text-white mb-3">Real-Time Processing</h3>
                <p className="text-gray-300">Fast, efficient processing for real-time applications and live video streams.</p>
              </div>
              <div className="cyber-card p-6 text-center">
                <div className="text-4xl mb-4">🔧</div>
                <h3 className="text-xl font-bold text-white mb-3">Custom Solutions</h3>
                <p className="text-gray-300">Tailored computer vision models designed for your specific use cases and requirements.</p>
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="cyber-card p-8 text-center">
            <h2 className="text-3xl font-bold text-white mb-4 neon-text">Ready to See the Future?</h2>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Let our computer vision experts help you build intelligent systems that can see and understand the visual world. 
              Get a free consultation and discover the potential of AI vision for your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="cyber-button px-8 py-4 text-lg font-semibold hover:scale-105 transition-all duration-300"
              >
                Get Free Consultation
              </a>
              <a
                href="tel:+13024640950"
                className="flex items-center justify-center gap-2 border-2 border-green-400 text-green-400 px-8 py-4 rounded-lg font-semibold hover:bg-green-400 hover:text-slate-900 transition-all duration-300"
              >
                Call +1 302 464 0950
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