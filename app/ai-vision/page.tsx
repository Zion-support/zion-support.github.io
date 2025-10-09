'use client';
import React from 'react';
import { Eye, Camera, Target, CheckCircle, TrendingUp, Star, Users, Award, Zap, Brain, ArrowRight, Search, Shield } from 'lucide-react';
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
      features: ['Real-time Detection', 'Multi-class Recognition', 'Bounding Box Generation', 'Confidence Scoring'],
      benefits: ['99% accuracy', 'Real-time processing', 'Multiple object types']
    },
    {
      title: 'Image Classification',
      description: 'Automatically categorize and classify images based on content',
      features: ['Custom Categories', 'Batch Processing', 'API Integration', 'Confidence Metrics'],
      benefits: ['95% accuracy', 'Fast processing', 'Scalable solutions']
    },
    {
      title: 'Facial Recognition',
      description: 'Advanced facial recognition and analysis capabilities',
      features: ['Face Detection', 'Identity Verification', 'Emotion Analysis', 'Age Estimation'],
      benefits: ['99.9% accuracy', 'Privacy compliant', 'Real-time analysis']
    },
    {
      title: 'Video Analysis',
      description: 'Process and analyze video content for insights and automation',
      features: ['Motion Detection', 'Activity Recognition', 'Scene Analysis', 'Object Tracking'],
      benefits: ['Real-time analysis', 'Automated monitoring', 'Action recognition']
    }
  ];

  const useCases = [
    {
      industry: 'Retail',
      application: 'Inventory Management',
      result: '90% reduction in stock counting time',
      description: 'Automated inventory tracking using computer vision to count and categorize products'
    },
    {
      industry: 'Security',
      application: 'Surveillance Systems',
      result: '95% threat detection accuracy',
      description: 'AI-powered surveillance that detects suspicious activities and alerts security teams'
    },
    {
      industry: 'Healthcare',
      application: 'Medical Imaging',
      result: '40% faster diagnosis',
      description: 'AI-assisted analysis of medical images for faster and more accurate diagnoses'
    },
    {
      industry: 'Manufacturing',
      application: 'Quality Control',
      result: '99.5% defect detection rate',
      description: 'Automated quality inspection using computer vision to detect manufacturing defects'
    }
  ];

  const applications = [
    'Medical Imaging', 'Autonomous Vehicles', 'Security & Surveillance', 'Retail Analytics',
    'Manufacturing QC', 'Agriculture Monitoring', 'Sports Analysis', 'Content Moderation',
    'Augmented Reality', 'Robotics', 'Document Processing', 'Fashion & Beauty'
  ];

  const stats = [
    { label: 'Detection Accuracy', value: '99%', icon: Target },
    { label: 'Processing Speed', value: 'Real-time', icon: Zap },
    { label: 'Images Processed', value: '1M+', icon: Camera },
    { label: 'Cost Reduction', value: '80%', icon: TrendingUp }
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
              Computer Vision
            </h1>
            <p className="text-xl text-cyan-400 mb-8 font-medium">
              See and Understand the World with AI
            </p>
            <p className="text-lg text-gray-300 max-w-4xl mx-auto mb-12">
              Our computer vision solutions enable machines to see, understand, and analyze visual 
              content with human-level accuracy, transforming images and videos into actionable insights.
            </p>
          </section>

          {/* Stats Section */}
          <section className="mb-16">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {stats.map((stat, index) => (
                <div key={index} className="cyber-card p-6 text-center">
                  <stat.icon className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
                  <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
                  <div className="text-gray-300">{stat.label}</div>
                </div>
              ))}
            </div>
          </section>

          {/* Vision Services */}
          <section className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center neon-text">
              Our Computer Vision Services
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {visionServices.map((service, index) => (
                <article key={index} className="quantum-card p-8 hover:scale-105 transition-all duration-300">
                  <h3 className="text-2xl font-bold text-white mb-4 neon-text">{service.title}</h3>
                  <p className="text-gray-300 mb-6 text-lg">
                    {service.description}
                  </p>
                  
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-green-400 mb-3">Features:</h4>
                    <ul className="space-y-2">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-gray-300">
                          <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="text-lg font-semibold text-pink-400 mb-3">Benefits:</h4>
                    <ul className="space-y-2">
                      {service.benefits.map((benefit, benefitIndex) => (
                        <li key={benefitIndex} className="flex items-center text-gray-300">
                          <TrendingUp className="w-5 h-5 text-pink-400 mr-3 flex-shrink-0" />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>
                </article>
              ))}
            </div>
          </section>

          {/* Use Cases Section */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-12 text-center neon-text">
              Real-World Applications
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {useCases.map((useCase, index) => (
                <div key={index} className="cyber-card p-6 hover:scale-105 transition-all duration-300">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-cyan-600 rounded-lg flex items-center justify-center mr-4">
                      <Eye className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white">{useCase.industry}</h3>
                      <p className="text-cyan-400 font-medium">{useCase.application}</p>
                    </div>
                  </div>
                  <p className="text-gray-300 mb-4">{useCase.description}</p>
                  <div className="bg-green-900/30 border border-green-500/50 rounded-lg p-3">
                    <p className="text-green-400 font-semibold">Result: {useCase.result}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Applications Section */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-8 text-center neon-text">
              Industry Applications
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
              {applications.map((app, index) => (
                <div key={index} className="cyber-card p-4 text-center hover:scale-105 transition-all duration-300">
                  <span className="text-gray-300 font-medium text-sm">{app}</span>
                </div>
              ))}
            </div>
          </section>

          {/* Process Section */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-12 text-center neon-text">
              Our Vision Development Process
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {[
                { step: '1', title: 'Data Collection', description: 'Gather and prepare visual datasets', icon: Camera },
                { step: '2', title: 'Model Training', description: 'Train computer vision models', icon: Brain },
                { step: '3', title: 'Testing & Validation', description: 'Validate accuracy and performance', icon: Target },
                { step: '4', title: 'Deployment', description: 'Deploy and monitor in production', icon: Zap }
              ].map((step, index) => (
                <div key={index} className="cyber-card p-6 text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-white">{step.step}</span>
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">{step.title}</h3>
                  <p className="text-gray-300 text-sm">{step.description}</p>
                </div>
              ))}
            </div>
          </section>

          {/* CTA Section */}
          <section className="text-center">
            <div className="cyber-card p-8 max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-white mb-4">Ready to Give Your Systems Vision?</h2>
              <p className="text-lg text-gray-300 mb-8">
                Let our computer vision experts help you build intelligent visual recognition systems.
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