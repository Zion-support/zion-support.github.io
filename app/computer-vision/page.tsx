'use client';
import React from 'react';
import { Eye, Camera, Search, Shield, CheckCircle, Phone } from 'lucide-react';;
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import SEOOptimizer from '../components/SEOOptimizer';
import PerformanceOptimizer from '../components/PerformanceOptimizer';
import AccessibilityEnhancer from '../components/AccessibilityEnhancer';
import SecurityEnhancer from '../components/SecurityEnhancer';
import Analytics from '../components/Analytics';

const ComputerVisionPage: React.FC = () => {
  const services = [
    {
      title: 'Object Detection',
      description: 'Identify and locate objects in images and videos with high precision',
      features: ['Real-time Detection', 'Multi-class Recognition', 'Bounding Box Localization', 'Confidence Scoring'],
      icon: Search,
      color: 'text-blue-400'
    },
    {
      title: 'Image Classification',
      description: 'Automatically categorize images into predefined classes or categories',
      features: ['Custom Categories', 'High Accuracy', 'Batch Processing', 'API Integration'],
      icon: Eye,
      color: 'text-green-400'
    },
    {
      title: 'Facial Recognition',
      description: 'Identify and verify individuals using facial biometrics',
      features: ['Face Detection', 'Identity Verification', 'Emotion Recognition', 'Privacy Protection'],
      icon: Camera,
      color: 'text-purple-400'
    },
    {
      title: 'Video Analysis',
      description: 'Extract insights from video content using advanced computer vision',
      features: ['Motion Detection', 'Activity Recognition', 'Scene Analysis', 'Real-time Processing'],
      icon: Shield,
      color: 'text-cyan-400'
    }
  ];

  const benefits = [
    'Process 1000+ images per second',
    'Achieve 99% accuracy in object detection',
    'Reduce manual inspection by 90%',
    'Enable real-time video analysis',
    'Support multiple image formats'
  ];

  return (
    <>
      <SEOOptimizer
        title="Computer Vision Solutions - Zion Tech Group"
        description="Advanced computer vision solutions including object detection, image classification, facial recognition, and video analysis. Transform visual data into actionable insights."
        keywords={['computer vision', 'object detection', 'image classification', 'facial recognition', 'video analysis', 'visual AI']
        canonicalUrl="https://ziontechgroup.com/computer-vision"
      />
      <PerformanceOptimizer
        enableImageOptimization={true}
        enableLazyLoading={true}
        enableCodeSplitting={true}
        enablePreloading={true}
      />
      <AccessibilityEnhancer
        enableKeyboardNavigation={true}
        enableScreenReaderSupport={true}
        enableHighContrast={true}
        enableFocusManagement={true}
      />
      <SecurityEnhancer
        enableCSP={true}
        enableHTTPSRedirect={true}
        enableXSSProtection={true}
        enableClickjackingProtection={true}
      />
      <Analytics />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 cyber-grid neural-network-bg matrix-rain particle-field">
        <Navigation />
        
        <main className="container mx-auto px-4 py-16 pt-24">
          {/* Hero Section */}
          <section className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 cyber-text-3d neon-pulse glitch" data-text="Computer Vision">
              Computer Vision
            </h1>
            <p className="text-xl text-cyan-400 mb-8 font-medium">
              Advanced Visual Intelligence Solutions
            </p>
            <p className="text-lg text-gray-300 max-w-4xl mx-auto mb-8">
              Transform visual data into actionable insights with our advanced computer vision solutions. 
              From object detection to facial recognition, we help you understand and process 
              images and videos at scale.
            </p>
          </section>

          {/* Services */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-8 text-center neon-text">Our Computer Vision Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {services.map((service, index) => (
                <div key={index} className="cyber-card p-6 hover:scale-105 transition-all duration-300">
                  <service.icon className={`w-16 h-16 ${service.color} mx-auto mb-4`} />
                  <h3 className="text-xl font-bold text-white mb-3 neon-text text-center">{service.title}</h3>
                  <p className="text-gray-300 mb-4 text-sm text-center leading-relaxed">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-xs text-gray-300">
                        <CheckCircle className="w-3 h-3 text-green-400 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          {/* Benefits */}
          <section className="mb-16">
            <div className="cyber-card p-8 max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-white mb-6 text-center neon-text">Why Choose Our Computer Vision Solutions?</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-xl font-bold text-cyan-400 mb-4">Key Benefits</h3>
                  <ul className="space-y-3">
                    {benefits.map((benefit, index) => (
                      <li key={index} className="flex items-center text-gray-300">
                        <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-purple-400 mb-4">Our Process</h3>
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <div className="w-8 h-8 bg-cyan-400 text-slate-900 rounded-full flex items-center justify-center text-sm font-bold mr-3 flex-shrink-0">1</div>
                      <div>
                        <h4 className="font-semibold text-white">Data Collection</h4>
                        <p className="text-sm text-gray-300">Gather and prepare visual data</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="w-8 h-8 bg-purple-400 text-white rounded-full flex items-center justify-center text-sm font-bold mr-3 flex-shrink-0">2</div>
                      <div>
                        <h4 className="font-semibold text-white">Model Training</h4>
                        <p className="text-sm text-gray-300">Train custom vision models</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="w-8 h-8 bg-green-400 text-white rounded-full flex items-center justify-center text-sm font-bold mr-3 flex-shrink-0">3</div>
                      <div>
                        <h4 className="font-semibold text-white">Deployment</h4>
                        <p className="text-sm text-gray-300">Deploy and integrate solutions</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="w-8 h-8 bg-yellow-400 text-slate-900 rounded-full flex items-center justify-center text-sm font-bold mr-3 flex-shrink-0">4</div>
                      <div>
                        <h4 className="font-semibold text-white">Optimization</h4>
                        <p className="text-sm text-gray-300">Continuous monitoring and improvement</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="text-center">
            <div className="cyber-card p-8 max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-white mb-4 neon-text">
                Ready to See the Future with Computer Vision?
              </h2>
              <p className="text-lg text-gray-300 mb-8">
                Our computer vision experts are ready to help you extract valuable insights from your visual data. 
                Contact us today for a free consultation and discover the potential of visual intelligence.
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
                  className="flex items-center justify-center gap-2 border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
                >
                  <Phone className="w-5 h-5" />
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

export default ComputerVisionPage;