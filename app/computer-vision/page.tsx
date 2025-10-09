'use client';
import React from 'react';
import { Eye, Camera, Target, Zap, CheckCircle, ArrowRight } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import SEOOptimizer from '../components/SEOOptimizer';

const ComputerVisionPage: React.FC = () => {
  const features = [
    'Object Detection & Recognition',
    'Image Classification',
    'Video Analysis',
    'Facial Recognition',
    'OCR Processing',
    'Medical Imaging'
  ];

  const benefits = [
    '95% accuracy in object detection',
    '70% faster image processing',
    'Real-time video analysis',
    'Automated quality control'
  ];

  return (
    <>
      <SEOOptimizer
        title="Computer Vision Solutions - Zion Tech Group"
        description="Advanced computer vision solutions for image and video analysis, object detection, recognition, and visual intelligence. Transform visual data into actionable insights."
        keywords={['computer vision', 'image analysis', 'object detection', 'facial recognition', 'video analysis', 'visual intelligence']}
        canonicalUrl="https://ziontechgroup.com/computer-vision"
      />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <Navigation />
        
        <main className="container mx-auto px-4 py-24">
          {/* Hero Section */}
          <section className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 neon-text">
              Computer Vision Solutions
            </h1>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Transform visual data into intelligent insights with advanced computer vision 
              solutions that see, understand, and analyze images and videos like never before.
            </p>
          </section>

          {/* Service Details */}
          <section className="mb-16">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>
                <h2 className="text-3xl font-bold text-white mb-6 neon-text">
                  Visual Intelligence Solutions
                </h2>
                <p className="text-gray-300 mb-6 leading-relaxed">
                  Our computer vision experts develop sophisticated image and video analysis 
                  systems that can detect, classify, and understand visual content with 
                  remarkable accuracy. From object detection to facial recognition, we create 
                  intelligent solutions that see the world like humans do.
                </p>
                
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-green-400 mb-3">Key Features:</h3>
                  <ul className="space-y-2">
                    {features.map((feature, index) => (
                      <li key={index} className="flex items-center text-gray-300">
                        <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              
              <div className="cyber-card p-8">
                <div className="text-center mb-6">
                  <Eye className="w-16 h-16 text-green-400 mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-white mb-2">Starting at</h3>
                  <div className="text-4xl font-bold text-green-400 mb-4">$1,800/month</div>
                  <p className="text-gray-300">Custom computer vision development</p>
                </div>
                
                <div className="space-y-4">
                  <h4 className="text-lg font-semibold text-white mb-3">What's Included:</h4>
                  <ul className="space-y-2 text-sm text-gray-300">
                    <li>• Custom model training and optimization</li>
                    <li>• Real-time image and video processing</li>
                    <li>• Object detection and classification</li>
                    <li>• API integration and deployment</li>
                    <li>• Performance monitoring and updates</li>
                    <li>• 24/7 technical support</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Benefits Section */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-white text-center mb-12 neon-text">
              Business Impact
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="cyber-card p-6 text-center hover:scale-105 transition-all duration-300">
                  <div className="text-3xl font-bold text-green-400 mb-2">
                    {benefit.split(' ')[0]}
                  </div>
                  <p className="text-gray-300 text-sm">{benefit}</p>
                </div>
              ))}
            </div>
          </section>

          {/* CTA Section */}
          <section className="text-center">
            <div className="cyber-card p-8 max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-white mb-4 neon-text">
                Ready to See the Future with Computer Vision?
              </h2>
              <p className="text-lg text-gray-300 mb-6">
                Let our computer vision experts help you build intelligent visual 
                processing solutions that transform images and videos into business insights.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="cyber-button px-8 py-4 text-lg font-semibold"
                >
                  Start Your Vision Project
                </a>
                <a
                  href="tel:+13024640950"
                  className="flex items-center justify-center gap-2 border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
                >
                  <span>+1 302 464 0950</span>
                </a>
              </div>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default ComputerVisionPage;