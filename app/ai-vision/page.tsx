'use client';
import React from 'react';
import { Eye, Camera, Search, Shield, Brain, Zap, Target, BarChart } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import SEOOptimizer from '../components/SEOOptimizer';
import PerformanceOptimizer from '../components/PerformanceOptimizer';
import AccessibilityEnhancer from '../components/AccessibilityEnhancer';
import SecurityEnhancer from '../components/SecurityEnhancer';
import Analytics from '../components/Analytics';

const AIVisionPage: React.FC = () => {
  const features = [
    {
      title: 'Object Detection',
      description: 'Identify and locate objects in images and videos with high accuracy',
      icon: Target,
      benefits: ['Real-time detection', 'Multiple object classes', 'Bounding box coordinates', 'Confidence scoring']
    },
    {
      title: 'Image Classification',
      description: 'Automatically categorize and label images based on content',
      icon: Brain,
      benefits: ['Custom categories', 'Batch processing', 'High accuracy', 'API integration']
    },
    {
      title: 'Facial Recognition',
      description: 'Identify and verify individuals using facial biometrics',
      icon: Eye,
      benefits: ['Face detection', 'Identity verification', 'Emotion recognition', 'Privacy protection']
    },
    {
      title: 'Video Analysis',
      description: 'Process and analyze video content for insights and automation',
      icon: Camera,
      benefits: ['Motion detection', 'Activity recognition', 'Scene analysis', 'Real-time processing']
    }
  ];

  const applications = [
    {
      title: 'Security & Surveillance',
      description: 'Automated threat detection and monitoring systems',
      icon: Shield,
      impact: '99.5% accuracy in threat detection'
    },
    {
      title: 'Quality Control',
      description: 'Automated product inspection and defect detection',
      icon: Search,
      impact: '90% reduction in inspection time'
    },
    {
      title: 'Retail Analytics',
      description: 'Customer behavior analysis and inventory management',
      icon: BarChart,
      impact: 'Real-time insights and optimization'
    },
    {
      title: 'Medical Imaging',
      description: 'AI-powered diagnostic assistance and image analysis',
      icon: Brain,
      impact: '40% improvement in diagnostic accuracy'
    }
  ];

  return (
    <>
      <SEOOptimizer
        title="Computer Vision Solutions - Zion Tech Group"
        description="Advanced computer vision solutions for object detection, image classification, facial recognition, and video analysis. Transform visual data into actionable insights."
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
              Computer Vision
            </h1>
            <p className="text-xl md:text-2xl text-green-400 mb-8 font-medium">
              Advanced Image and Video Analysis Solutions
            </p>
            <p className="text-lg text-gray-300 max-w-4xl mx-auto mb-8 leading-relaxed">
              Transform visual data into actionable insights with our advanced computer vision solutions. 
              From object detection to facial recognition, we help you see and understand the world 
              through AI-powered eyes.
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
                className="flex items-center justify-center gap-2 border-2 border-green-400 text-green-400 px-8 py-4 rounded-lg font-semibold hover:bg-green-400 hover:text-slate-900 transition-all duration-300"
              >
                <span>+1 302 464 0950</span>
              </a>
            </div>
          </section>

          {/* Features Section */}
          <section className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 text-center neon-text">
              Our Computer Vision Capabilities
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="quantum-card p-6 energy-pulse hover:scale-105 transition-all duration-300">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-600 rounded-lg flex items-center justify-center flex-shrink-0">
                      <feature.icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-white mb-3 neon-text">{feature.title}</h3>
                      <p className="text-gray-300 mb-4 leading-relaxed">{feature.description}</p>
                      <ul className="space-y-2">
                        {feature.benefits.map((benefit, benefitIndex) => (
                          <li key={benefitIndex} className="flex items-center text-sm text-gray-300">
                            <div className="w-2 h-2 bg-green-400 rounded-full mr-3 flex-shrink-0"></div>
                            {benefit}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Applications Section */}
          <section className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 text-center neon-text">
              Industry Applications
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {applications.map((app, index) => (
                <div key={index} className="cyber-card p-6 text-center hover:scale-105 transition-all duration-300">
                  <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl flex items-center justify-center mb-4 mx-auto">
                    <app.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2 neon-text">{app.title}</h3>
                  <p className="text-gray-300 text-sm mb-3 leading-relaxed">{app.description}</p>
                  <div className="text-green-400 font-semibold text-sm">{app.impact}</div>
                </div>
              ))}
            </div>
          </section>

          {/* Pricing Section */}
          <section className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 text-center neon-text">
              Computer Vision Pricing
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              <div className="cyber-card p-6 text-center">
                <h3 className="text-xl font-bold text-white mb-4 neon-text">Starter</h3>
                <div className="text-3xl font-bold text-green-400 mb-4">$1,800<span className="text-lg text-gray-400">/month</span></div>
                <ul className="space-y-2 text-gray-300 mb-6">
                  <li>Basic object detection</li>
                  <li>Image classification</li>
                  <li>Simple video analysis</li>
                  <li>API access</li>
                  <li>Email support</li>
                </ul>
                <a href="/contact" className="cyber-button px-6 py-3 text-sm font-medium transition-all duration-300 hover:scale-105">
                  Get Started
                </a>
              </div>
              
              <div className="cyber-card p-6 text-center ring-2 ring-green-400">
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <div className="bg-green-400 text-slate-900 px-3 py-1 rounded-full text-xs font-semibold">
                    Popular
                  </div>
                </div>
                <h3 className="text-xl font-bold text-white mb-4 neon-text">Professional</h3>
                <div className="text-3xl font-bold text-green-400 mb-4">$3,200<span className="text-lg text-gray-400">/month</span></div>
                <ul className="space-y-2 text-gray-300 mb-6">
                  <li>Advanced object detection</li>
                  <li>Facial recognition</li>
                  <li>Real-time video processing</li>
                  <li>Custom model training</li>
                  <li>Priority support</li>
                  <li>Analytics dashboard</li>
                </ul>
                <a href="/contact" className="cyber-button px-6 py-3 text-sm font-medium transition-all duration-300 hover:scale-105">
                  Get Started
                </a>
              </div>
              
              <div className="cyber-card p-6 text-center">
                <h3 className="text-xl font-bold text-white mb-4 neon-text">Enterprise</h3>
                <div className="text-3xl font-bold text-green-400 mb-4">Custom</div>
                <ul className="space-y-2 text-gray-300 mb-6">
                  <li>Custom vision platform</li>
                  <li>Multi-camera systems</li>
                  <li>24/7 monitoring</li>
                  <li>Dedicated team</li>
                  <li>Custom integrations</li>
                  <li>White-label solutions</li>
                </ul>
                <a href="/contact" className="cyber-button px-6 py-3 text-sm font-medium transition-all duration-300 hover:scale-105">
                  Contact Sales
                </a>
              </div>
            </div>
          </section>

          {/* Contact CTA */}
          <section className="text-center">
            <div className="cyber-card p-8 max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-white mb-4 neon-text">Ready to See the Future with Computer Vision?</h2>
              <p className="text-lg text-gray-300 mb-6">
                Let our computer vision experts help you transform visual data into powerful business insights.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="cyber-button px-8 py-4 text-lg font-semibold hover:scale-105 transition-all duration-300"
                >
                  Start Your Vision Project
                </a>
                <a
                  href="tel:+13024640950"
                  className="flex items-center justify-center gap-2 border-2 border-green-400 text-green-400 px-8 py-4 rounded-lg font-semibold hover:bg-green-400 hover:text-slate-900 transition-all duration-300"
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