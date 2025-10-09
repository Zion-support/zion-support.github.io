'use client';
import React from 'react';
import { Eye, Camera, Target, Zap, CheckCircle, ArrowRight, Phone, Mail, MapPin, Cpu, Database, TrendingUp, Shield, Users, Award } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import SEOOptimizer from '../components/SEOOptimizer';
import PerformanceOptimizer from '../components/PerformanceOptimizer';
import AccessibilityEnhancer from '../components/AccessibilityEnhancer';
import Analytics from '../components/Analytics';
import SecurityEnhancer from '../components/SecurityEnhancer';

const ComputerVisionPage: React.FC = () => {
  const services = [
    {
      icon: Eye,
      title: 'Object Detection & Recognition',
      description: 'Identify and locate objects in images and videos with high accuracy and real-time processing.',
      features: ['Real-time Detection', 'Multi-class Recognition', 'Custom Model Training', 'API Integration'],
      price: 'Starting at $2,000/month'
    },
    {
      icon: Camera,
      title: 'Facial Recognition',
      description: 'Advanced facial recognition systems for security, authentication, and user identification.',
      features: ['Face Detection', 'Identity Verification', 'Emotion Analysis', 'Age/Gender Detection'],
      price: 'Starting at $2,500/month'
    },
    {
      icon: Target,
      title: 'Image Classification',
      description: 'Automatically categorize and classify images based on content, quality, and characteristics.',
      features: ['Content Classification', 'Quality Assessment', 'Custom Categories', 'Batch Processing'],
      price: 'Starting at $1,800/month'
    },
    {
      icon: Zap,
      title: 'Video Analysis',
      description: 'Process and analyze video content for insights, monitoring, and automated decision making.',
      features: ['Motion Detection', 'Activity Recognition', 'Scene Analysis', 'Real-time Processing'],
      price: 'Starting at $3,000/month'
    }
  ];

  const industries = [
    { name: 'Healthcare', applications: ['Medical Imaging', 'Diagnosis Support', 'Surgery Assistance', 'Patient Monitoring'] },
    { name: 'Retail', applications: ['Inventory Management', 'Customer Analytics', 'Loss Prevention', 'Visual Search'] },
    { name: 'Manufacturing', applications: ['Quality Control', 'Defect Detection', 'Assembly Verification', 'Safety Monitoring'] },
    { name: 'Security', applications: ['Surveillance', 'Access Control', 'Threat Detection', 'Behavior Analysis'] }
  ];

  return (
    <>
      <SEOOptimizer
        title="Computer Vision Solutions - Zion Tech Group"
        description="Transform visual data with advanced computer vision solutions. Object detection, facial recognition, image classification, and video analysis for enterprise applications."
        keywords={['computer vision', 'object detection', 'facial recognition', 'image classification', 'video analysis', 'visual AI']}
        canonicalUrl="https://ziontechgroup.com/computer-vision"
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
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
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
            <p className="text-lg text-gray-300 max-w-4xl mx-auto leading-relaxed mb-8">
              Transform visual data into actionable insights with our advanced computer vision solutions. 
              From object detection to facial recognition, we help you see and understand the world like never before.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="cyber-button px-8 py-4 text-lg font-semibold hover:scale-105 transition-all duration-300"
              >
                Get Started Today
              </a>
              <a
                href="tel:+13024640950"
                className="flex items-center gap-2 border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
              >
                <Phone className="w-5 h-5" />
                +1 302 464 0950
              </a>
            </div>
          </section>

          {/* Key Benefits */}
          <section className="mb-16">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              <div className="cyber-card p-6 text-center hover:scale-105 transition-all duration-300">
                <div className="text-4xl mb-4">🎯</div>
                <h3 className="text-xl font-bold text-white mb-3 neon-text">98% Accuracy</h3>
                <p className="text-gray-300">Industry-leading accuracy in object detection and image recognition tasks.</p>
              </div>
              <div className="cyber-card p-6 text-center hover:scale-105 transition-all duration-300">
                <div className="text-4xl mb-4">⚡</div>
                <h3 className="text-xl font-bold text-white mb-3 neon-text">Real-time Processing</h3>
                <p className="text-gray-300">Process images and videos in real-time for instant insights and decisions.</p>
              </div>
              <div className="cyber-card p-6 text-center hover:scale-105 transition-all duration-300">
                <div className="text-4xl mb-4">🔧</div>
                <h3 className="text-xl font-bold text-white mb-3 neon-text">Custom Solutions</h3>
                <p className="text-gray-300">Tailored computer vision models for your specific business requirements.</p>
              </div>
            </div>
          </section>

          {/* Services */}
          <section className="mb-16">
            <h2 className="text-4xl font-bold text-white text-center mb-12 neon-text">Our CV Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {services.map((service, index) => (
                <div key={index} className="cyber-card p-8 hover:scale-105 transition-all duration-300">
                  <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl flex items-center justify-center mb-6">
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4 neon-text">{service.title}</h3>
                  <p className="text-gray-300 mb-6 leading-relaxed">{service.description}</p>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-300">
                        <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <div className="text-cyan-400 font-bold text-lg mb-4">{service.price}</div>
                  <a
                    href="/contact"
                    className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 font-medium transition-colors"
                  >
                    Learn More <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              ))}
            </div>
          </section>

          {/* Industries */}
          <section className="mb-16">
            <h2 className="text-4xl font-bold text-white text-center mb-12 neon-text">Industry Applications</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {industries.map((industry, index) => (
                <div key={index} className="cyber-card p-6 hover:scale-105 transition-all duration-300">
                  <h3 className="text-xl font-bold text-white mb-4 neon-text">{industry.name}</h3>
                  <ul className="space-y-2">
                    {industry.applications.map((application, appIndex) => (
                      <li key={appIndex} className="flex items-center text-gray-300 text-sm">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                        {application}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          {/* Case Study */}
          <section className="mb-16">
            <div className="cyber-card p-8">
              <h2 className="text-3xl font-bold text-white mb-8 neon-text text-center">Success Story</h2>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-2xl font-bold text-white mb-4">Manufacturing Quality Control</h3>
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    We implemented a computer vision system for a major manufacturer that detects defects 
                    in real-time with 99.2% accuracy. The system reduced quality control costs by 60% and 
                    increased production efficiency by 25% while maintaining zero false positives.
                  </p>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-cyan-400">99.2%</div>
                      <div className="text-gray-300 text-sm">Detection Accuracy</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-green-400">60%</div>
                      <div className="text-gray-300 text-sm">Cost Reduction</div>
                    </div>
                  </div>
                </div>
                <div className="bg-gradient-to-br from-slate-800 to-slate-900 p-6 rounded-lg">
                  <h4 className="text-lg font-bold text-white mb-4">Key Features</h4>
                  <ul className="space-y-3">
                    <li className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                      Real-time defect detection
                    </li>
                    <li className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                      Automated quality scoring
                    </li>
                    <li className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                      Production line integration
                    </li>
                    <li className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                      Detailed analytics dashboard
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Contact CTA */}
          <section className="text-center">
            <div className="cyber-card p-8 max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-white mb-4 neon-text">Ready to See the Future?</h2>
              <p className="text-gray-300 mb-8 text-lg">
                Let's discuss how computer vision can transform your visual data into powerful business insights.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="cyber-button px-8 py-4 text-lg font-semibold hover:scale-105 transition-all duration-300"
                >
                  Start Your CV Journey
                </a>
                <a
                  href="tel:+13024640950"
                  className="flex items-center justify-center gap-2 border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
                >
                  <Phone className="w-5 h-5" />
                  +1 302 464 0950
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