'use client';
import React from 'react';
import { Eye, Camera, Video, Search, Shield, Target } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import SEOOptimizer from '../components/SEOOptimizer';

const AIVisionPage: React.FC = () => {
  return (
    <>
      <SEOOptimizer
        title="Computer Vision Solutions - Zion Tech Group"
        description="Advanced computer vision solutions for object detection, image classification, facial recognition, and video analysis. AI-powered visual intelligence for enterprise."
        keywords={['computer vision', 'object detection', 'image classification', 'facial recognition', 'video analysis', 'AI vision']}
        canonicalUrl="https://ziontechgroup.com/ai-vision"
      />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-green-900 to-slate-900">
        <Navigation />
        
        <main className="container mx-auto px-4 py-16 pt-24">
          <section className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 cyber-text-3d neon-pulse">
              Computer Vision
            </h1>
            <p className="text-xl text-green-400 mb-8 font-medium">
              AI-Powered Visual Intelligence
            </p>
            <p className="text-lg text-gray-300 max-w-4xl mx-auto mb-8">
              Transform visual data into actionable insights with our advanced computer vision solutions. 
              From object detection to facial recognition, we help you see and understand the world through AI.
            </p>
          </section>

          <section className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-8 text-center neon-text">Vision Capabilities</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="cyber-card p-6 text-center hover:scale-105 transition-all duration-300">
                <Eye className="w-12 h-12 text-green-400 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-white mb-3">Object Detection</h3>
                <p className="text-gray-300">Identify and locate objects in images and videos</p>
              </div>
              <div className="cyber-card p-6 text-center hover:scale-105 transition-all duration-300">
                <Camera className="w-12 h-12 text-blue-400 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-white mb-3">Image Classification</h3>
                <p className="text-gray-300">Categorize and classify images automatically</p>
              </div>
              <div className="cyber-card p-6 text-center hover:scale-105 transition-all duration-300">
                <Video className="w-12 h-12 text-purple-400 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-white mb-3">Video Analysis</h3>
                <p className="text-gray-300">Real-time video processing and analysis</p>
              </div>
            </div>
          </section>

          <section className="text-center">
            <div className="cyber-card p-8">
              <h2 className="text-3xl font-bold text-white mb-4 neon-text">Ready to See with AI?</h2>
              <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
                Contact our computer vision experts today to discuss how visual AI can enhance your business operations.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="/contact" className="cyber-button px-8 py-4 text-lg font-semibold hover:scale-105 transition-all duration-300">
                  Get Started Today
                </a>
                <a href="tel:+13024640950" className="flex items-center justify-center gap-2 border-2 border-green-400 text-green-400 px-8 py-4 rounded-lg font-semibold hover:bg-green-400 hover:text-slate-900 transition-all duration-300">
                  Call +1 302 464 0950
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