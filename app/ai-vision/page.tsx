'use client';
import React from 'react';
import { Eye, Camera, Target, Zap, TrendingUp, Users, Award, BarChart } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import SEOOptimizer from '../components/SEOOptimizer';

const AIVisionPage: React.FC = () => {
  const features = [
    {
      title: 'Object Detection',
      description: 'Identify and locate objects in images and videos with high accuracy',
      icon: Target,
      benefits: ['Real-time detection', 'Multiple object types', 'High accuracy']
    },
    {
      title: 'Image Classification',
      description: 'Automatically categorize and classify images based on content',
      icon: Camera,
      benefits: ['Automated categorization', 'Custom categories', 'Batch processing']
    },
    {
      title: 'Video Analysis',
      description: 'Analyze video content for insights and automated processing',
      icon: BarChart,
      benefits: ['Motion detection', 'Activity recognition', 'Content analysis']
    },
    {
      title: 'Facial Recognition',
      description: 'Advanced facial recognition and identity verification systems',
      icon: Users,
      benefits: ['Identity verification', 'Access control', 'Privacy protection']
    }
  ];

  return (
    <>
      <SEOOptimizer
        title="Computer Vision Solutions - Zion Tech Group"
        description="Advanced computer vision solutions for object detection, image classification, video analysis, and facial recognition. Transform visual data into actionable insights."
        keywords={['computer vision', 'object detection', 'image classification', 'video analysis', 'facial recognition', 'visual AI']}
        canonicalUrl="https://ziontechgroup.com/ai-vision"
      />
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <Navigation />
        
        <main className="container mx-auto px-4 py-16 pt-24">
          <section className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Computer Vision Solutions
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Transform visual data into actionable insights with our advanced computer vision solutions. 
              From object detection to facial recognition, we help machines see and understand the world.
            </p>
            <div className="text-2xl font-bold text-cyan-400 mb-4">$1,800/month</div>
            <p className="text-gray-300">Advanced computer vision development and deployment</p>
          </section>

          <section className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-8 text-center">Vision Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="cyber-card p-6 hover:scale-105 transition-all duration-300">
                  <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl flex items-center justify-center mb-6 mx-auto">
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3 text-center">{feature.title}</h3>
                  <p className="text-gray-300 mb-4 text-center text-sm leading-relaxed">
                    {feature.description}
                  </p>
                  <ul className="space-y-1">
                    {feature.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="flex items-center text-xs text-gray-300">
                        <div className="w-1 h-1 bg-green-400 rounded-full mr-2 flex-shrink-0" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          <section className="text-center">
            <div className="cyber-card p-8">
              <h2 className="text-3xl font-bold text-white mb-4">See the Future with Computer Vision</h2>
              <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
                Our computer vision solutions achieve 99% accuracy and process millions of images daily. 
                Let's help you unlock the power of visual intelligence.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="cyber-button px-8 py-4 text-lg font-semibold hover:scale-105 transition-all duration-300"
                >
                  Start Your Vision Journey
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

export default AIVisionPage;