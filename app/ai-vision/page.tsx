'use client';
import React from 'react';
import { Eye, Camera, Search, Shield, Stethoscope, Car } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import SEOOptimizer from '../components/SEOOptimizer';

const AIVisionPage: React.FC = () => {
  return (
    <>
      <SEOOptimizer
        title="Computer Vision Solutions - Zion Tech Group"
        description="Advanced computer vision solutions for image analysis, object detection, and visual intelligence. Transform visual data into actionable insights with our CV expertise."
        keywords={['computer vision', 'image analysis', 'object detection', 'visual AI', 'image recognition', 'CV consulting']}
        canonicalUrl="https://ziontechgroup.com/ai-vision"
      />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-green-900 to-slate-900">
        <Navigation />
        
        <main className="container mx-auto px-4 py-16 pt-24">
          <section className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 cyber-text-3d neon-pulse">
              Computer Vision Solutions
            </h1>
            <p className="text-xl text-green-400 mb-8 font-medium neon-pulse">
              See the World Through AI Eyes
            </p>
            <p className="text-lg text-gray-300 max-w-4xl mx-auto mb-8 leading-relaxed">
              Our computer vision solutions enable machines to interpret and understand visual information, 
              from object detection and facial recognition to medical imaging and autonomous systems.
            </p>
          </section>

          <section className="mb-16">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="cyber-card p-6 text-center">
                <Eye className="w-12 h-12 text-green-400 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-white mb-3">Object Detection</h3>
                <p className="text-gray-300">Identify and locate objects in images and videos with high accuracy and speed</p>
              </div>
              <div className="cyber-card p-6 text-center">
                <Camera className="w-12 h-12 text-blue-400 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-white mb-3">Image Classification</h3>
                <p className="text-gray-300">Automatically categorize and tag images based on their content and features</p>
              </div>
              <div className="cyber-card p-6 text-center">
                <Search className="w-12 h-12 text-purple-400 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-white mb-3">Visual Search</h3>
                <p className="text-gray-300">Enable users to search using images instead of text queries</p>
              </div>
            </div>
          </section>

          <section className="text-center">
            <div className="cyber-card p-8 max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-white mb-4 neon-text">Ready to Give Your Systems Vision?</h2>
              <p className="text-gray-300 mb-6 text-lg">
                Let our computer vision experts help you build intelligent visual processing systems for your business.
              </p>
              <a
                href="/contact"
                className="cyber-button px-8 py-4 text-lg font-semibold hover:scale-105 transition-all duration-300"
              >
                Get CV Consultation
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