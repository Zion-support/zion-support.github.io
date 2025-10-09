'use client';
import React from 'react';
import { Eye, Camera, CheckCircle, ArrowRight, Phone } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import SEOEnhancer from '../components/SEOEnhancer';

const ComputerVisionPage: React.FC = () => {
  const cvServices = [
    {
      title: 'Object Detection',
      description: 'Identify and locate objects in images and videos',
      features: ['Real-time Detection', 'Multi-class Recognition', 'Bounding Box Detection', 'Confidence Scoring']
    },
    {
      title: 'Image Classification',
      description: 'Categorize images into predefined classes',
      features: ['Custom Model Training', 'High Accuracy Classification', 'Batch Processing', 'API Integration']
    },
    {
      title: 'Facial Recognition',
      description: 'Identify and verify individuals from facial features',
      features: ['Face Detection', 'Identity Verification', 'Emotion Recognition', 'Age Estimation']
    },
    {
      title: 'Medical Imaging',
      description: 'Analyze medical images for diagnostic assistance',
      features: ['X-ray Analysis', 'MRI Processing', 'CT Scan Analysis', 'Diagnostic Support']
    }
  ];

  return (
    <>
      <SEOEnhancer
        title="Computer Vision Solutions - Zion Tech Group"
        description="Advanced computer vision solutions including object detection, image classification, facial recognition, and medical imaging. Transform visual data into actionable insights."
        keywords={['computer vision', 'object detection', 'image classification', 'facial recognition', 'medical imaging', 'AI vision']}
        canonicalUrl="https://ziontechgroup.com/computer-vision"
      />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <Navigation />
        
        <main className="container mx-auto px-4 py-16 pt-24">
          <section className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 neon-text">
              Computer Vision Solutions
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Enable machines to see and understand the visual world with our computer vision solutions.
            </p>
          </section>

          <section className="mb-16">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {cvServices.map((service, index) => (
                <div key={index} className="cyber-card p-6">
                  <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
                  <p className="text-gray-300 mb-4">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-gray-300">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          <section className="cyber-card p-8 text-center">
            <h2 className="text-2xl font-bold text-white mb-4">Ready to Get Started?</h2>
            <p className="text-gray-300 mb-6">Let's discuss your computer vision needs.</p>
            <a href="/contact" className="cyber-button px-8 py-4 text-lg font-semibold">
              Contact Us
            </a>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default ComputerVisionPage;