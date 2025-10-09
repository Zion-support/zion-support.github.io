'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Eye, Camera, Shield, Zap, Target, BarChart, CheckCircle, ArrowRight, Phone, Mail, MapPin, Star, Sparkles, Brain, Image, Search } from 'lucide-react';

const AIImageRecognitionPage: React.FC = () => {
  const features = [
    {
      icon: Eye,
      title: 'Object Detection',
      description: 'Identify and locate objects in images with 99.5% accuracy',
      benefits: ['Real-time Processing', 'Multi-object Detection', 'Bounding Boxes', 'Confidence Scores']
    },
    {
      icon: Camera,
      title: 'Facial Recognition',
      description: 'Advanced facial analysis and identity verification systems',
      benefits: ['Face Detection', 'Emotion Analysis', 'Age Estimation', 'Gender Recognition']
    },
    {
      icon: Search,
      title: 'Visual Search',
      description: 'Find similar images and products using visual similarity',
      benefits: ['Image Matching', 'Similarity Scoring', 'Reverse Image Search', 'Product Recognition']
    },
    {
      icon: Brain,
      title: 'Scene Understanding',
      description: 'Comprehensive analysis of image content and context',
      benefits: ['Scene Classification', 'Activity Recognition', 'Landmark Detection', 'Text Recognition']
    }
  ];

  const useCases = [
    {
      title: 'E-commerce Product Recognition',
      description: 'Automatically categorize and tag products in your online store',
      price: '$1,999/month',
      features: ['Product Classification', 'Attribute Extraction', 'Visual Search', 'Inventory Management']
    },
    {
      title: 'Security & Surveillance',
      description: 'Advanced security monitoring with real-time threat detection',
      price: '$2,499/month',
      features: ['Intruder Detection', 'Facial Recognition', 'Anomaly Detection', 'Alert System']
    },
    {
      title: 'Medical Image Analysis',
      description: 'AI-powered medical imaging for diagnosis and treatment planning',
      price: '$3,999/month',
      features: ['X-ray Analysis', 'MRI Interpretation', 'Disease Detection', 'Treatment Planning']
    },
    {
      title: 'Quality Control',
      description: 'Automated quality inspection for manufacturing and production',
      price: '$2,199/month',
      features: ['Defect Detection', 'Quality Scoring', 'Process Monitoring', 'Automated Sorting']
    }
  ];

  const industries = [
    { name: 'Retail & E-commerce', applications: ['Product Recognition', 'Visual Search', 'Inventory Management'] },
    { name: 'Healthcare', applications: ['Medical Imaging', 'Diagnosis Support', 'Treatment Planning'] },
    { name: 'Manufacturing', applications: ['Quality Control', 'Defect Detection', 'Process Monitoring'] },
    { name: 'Security', applications: ['Surveillance', 'Access Control', 'Threat Detection'] },
    { name: 'Automotive', applications: ['Autonomous Driving', 'Traffic Analysis', 'Safety Systems'] },
    { name: 'Agriculture', applications: ['Crop Monitoring', 'Disease Detection', 'Yield Prediction'] }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 cyber-grid neural-network-bg">
      <Helmet>
        <title>AI Image Recognition - Zion Tech Group</title>
        <meta name="description" content="Advanced AI image recognition solutions with computer vision, object detection, and facial recognition. Starting at $1,999/month." />
        <meta name="keywords" content="ai image recognition, computer vision, object detection, facial recognition, visual search, image analysis" />
      </Helmet>

      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <div className="inline-flex items-center bg-gradient-to-r from-purple-600 to-blue-600 rounded-full px-6 py-2 mb-8">
            <Sparkles className="w-5 h-5 mr-2" />
            <span className="text-white font-medium">AI-Powered Image Recognition</span>
          </div>
          
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 neon-text">
            See Beyond the
            <span className="block bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              Visible
            </span>
          </h1>
          
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Transform images into actionable insights with our advanced AI image recognition platform. 
            Detect objects, analyze faces, and understand visual content with unprecedented accuracy.
          </p>

          {/* Key Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 cyber-card">
              <div className="text-3xl font-bold text-cyan-400 mb-2">99.5%</div>
              <div className="text-gray-300">Accuracy Rate</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 cyber-card">
              <div className="text-3xl font-bold text-green-400 mb-2">50ms</div>
              <div className="text-gray-300">Processing Speed</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 cyber-card">
              <div className="text-3xl font-bold text-purple-400 mb-2">1000+</div>
              <div className="text-gray-300">Object Classes</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 cyber-card">
              <div className="text-3xl font-bold text-orange-400 mb-2">24/7</div>
              <div className="text-gray-300">API Availability</div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+13024640950"
              className="cyber-button inline-flex items-center justify-center"
            >
              <Phone className="w-5 h-5 mr-2" />
              Call (302) 464-0950
            </a>
            <a
              href="mailto:kleber@ziontechgroup.com?subject=AI Image Recognition Inquiry"
              className="bg-transparent border-2 border-cyan-400 text-cyan-400 px-8 py-3 rounded-lg font-medium hover:bg-cyan-400 hover:text-slate-900 transition-all"
            >
              <Mail className="w-5 h-5 inline mr-2" />
              Get Free Demo
            </a>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12 neon-text">
            Advanced Computer Vision Features
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-6 hover:bg-white/20 transition-all duration-300 cyber-card group">
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-300 mb-4">{feature.description}</p>
                <ul className="space-y-2">
                  {feature.benefits.map((benefit, benefitIndex) => (
                    <li key={benefitIndex} className="flex items-center text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-purple-600/20 to-blue-600/20">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12 neon-text">
            Industry Applications
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {useCases.map((useCase, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-8 hover:bg-white/20 transition-all duration-300 cyber-card">
                <h3 className="text-2xl font-bold text-white mb-4">{useCase.title}</h3>
                <p className="text-gray-300 mb-6">{useCase.description}</p>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-3xl font-bold text-cyan-400">{useCase.price}</span>
                  <a
                    href={`mailto:kleber@ziontechgroup.com?subject=Interest in ${useCase.title}`}
                    className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-6 py-2 rounded-lg font-medium hover:from-cyan-600 hover:to-blue-700 transition-all"
                  >
                    Get Started
                  </a>
                </div>
                <ul className="space-y-2">
                  {useCase.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12 neon-text">
            Industries We Serve
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industries.map((industry, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-6 hover:bg-white/20 transition-all duration-300 cyber-card">
                <h3 className="text-xl font-bold text-white mb-4">{industry.name}</h3>
                <ul className="space-y-2">
                  {industry.applications.map((application, appIndex) => (
                    <li key={appIndex} className="flex items-center text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                      {application}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* API Features Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-purple-600/20 to-blue-600/20">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12 neon-text">
            Powerful API & Integration
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Zap className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">RESTful API</h3>
              <p className="text-gray-300">Easy integration with your existing systems using our comprehensive REST API</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Enterprise Security</h3>
              <p className="text-gray-300">Bank-level encryption and compliance with industry security standards</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                <BarChart className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Analytics Dashboard</h3>
              <p className="text-gray-300">Comprehensive analytics and monitoring for all your image processing activities</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to See the Future?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Get started with AI image recognition today and unlock the power of visual intelligence.
          </p>
          <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg p-8 cyber-card">
            <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-8 mb-6">
              <div className="flex items-center space-x-2">
                <Phone className="w-5 h-5" />
                <span className="text-white font-medium">+1 302 464 0950</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-5 h-5" />
                <span className="text-white font-medium">kleber@ziontechgroup.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="w-5 h-5" />
                <span className="text-white font-medium">Middletown, DE</span>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+13024640950"
                className="bg-white text-purple-600 px-8 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors"
              >
                Call Now
              </a>
              <a
                href="mailto:kleber@ziontechgroup.com"
                className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg font-medium hover:bg-white hover:text-purple-600 transition-colors"
              >
                Email Us
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AIImageRecognitionPage;