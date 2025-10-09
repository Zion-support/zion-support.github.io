'use client';
import React from 'react';
import { Eye, Camera, Search, Shield, BarChart, Zap } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import SEOOptimizer from '../components/SEOOptimizer';
import PerformanceOptimizer from '../components/PerformanceOptimizer';
import AccessibilityEnhancer from '../components/AccessibilityEnhancer';
import SecurityEnhancer from '../components/SecurityEnhancer';
import Analytics from '../components/Analytics';

const AIVisionPage: React.FC = () => {
  const visionServices = [
    {
      title: 'Object Detection',
      description: 'Identify and locate objects in images and videos with high accuracy',
      icon: Search,
      features: ['Real-time Detection', 'Multi-class Recognition', 'Bounding Box Generation', 'Confidence Scoring'],
      benefits: ['95% accuracy', 'Real-time processing', 'Multiple object types']
    },
    {
      title: 'Image Classification',
      description: 'Automatically categorize and classify images based on content',
      icon: Camera,
      features: ['Custom Categories', 'Batch Processing', 'Confidence Levels', 'API Integration'],
      benefits: ['90% classification accuracy', 'Scalable processing', 'Custom categories']
    },
    {
      title: 'Facial Recognition',
      description: 'Advanced facial recognition for security and identification purposes',
      icon: Eye,
      features: ['Face Detection', 'Identity Matching', 'Emotion Recognition', 'Age Estimation'],
      benefits: ['99% recognition accuracy', 'Real-time processing', 'Privacy compliant']
    },
    {
      title: 'Video Analysis',
      description: 'Comprehensive analysis of video content for insights and automation',
      icon: BarChart,
      features: ['Motion Detection', 'Activity Recognition', 'Scene Analysis', 'Real-time Processing'],
      benefits: ['Automated monitoring', 'Behavioral insights', 'Security enhancement']
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
      <PerformanceOptimizer
        enableImageOptimization={true}
        enableLazyLoading={true}
        enableCodeSplitting={true}
        enablePrefetching={true}
      />
      <AccessibilityEnhancer
        enableKeyboardNavigation={true}
        enableScreenReader={true}
        enableHighContrast={true}
        enableFocusManagement={true}
      />
      <SecurityEnhancer
        enableCSP={true}
        enableHSTS={true}
        enableXSSProtection={true}
        enableClickjackingProtection={true}
      />
      <Analytics />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-green-900 to-slate-900">
        <Navigation />
        
        <main className="container mx-auto px-4 py-16 pt-24">
          {/* Hero Section */}
          <section className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 cyber-text-3d neon-pulse">
              Computer Vision Solutions
            </h1>
            <p className="text-xl text-cyan-400 mb-8 font-medium">
              See the World Through AI Eyes
            </p>
            <p className="text-lg text-gray-300 max-w-4xl mx-auto mb-8">
              Our computer vision solutions enable machines to see, understand, and analyze visual content 
              with human-level accuracy, opening new possibilities for automation and insight.
            </p>
          </section>

          {/* Vision Services Grid */}
          <section className="mb-16">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {visionServices.map((service, index) => (
                <article key={index} className="quantum-card p-8 energy-pulse hover:scale-105 transition-all duration-300">
                  <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl flex items-center justify-center mb-6 mx-auto">
                    <service.icon className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4 text-center neon-text">{service.title}</h3>
                  <p className="text-gray-300 mb-6 text-center text-lg leading-relaxed">
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
                  
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-pink-400 mb-3">Business Benefits:</h4>
                    <ul className="space-y-2">
                      {service.benefits.map((benefit, benefitIndex) => (
                        <li key={benefitIndex} className="flex items-center text-gray-300">
                          <div className="w-2 h-2 bg-pink-400 rounded-full mr-3 flex-shrink-0"></div>
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>
                </article>
              ))}
            </div>
          </section>

          {/* Contact CTA */}
          <section className="text-center">
            <div className="cyber-card p-8 max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-white mb-4 neon-text">Ready to Give Your Systems Vision?</h2>
              <p className="text-lg text-gray-300 mb-8">
                Let our computer vision experts help you build intelligent systems that can see, understand, and act on visual information.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="cyber-button px-8 py-4 text-lg font-semibold hover:scale-105 transition-all duration-300"
                >
                  Get Vision Consultation
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