'use client';
import React from 'react';
import { Eye, Target, BarChart, Zap, CheckCircle, ArrowRight, Phone, Mail, MapPin } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import SEOEnhancer from '../components/SEOEnhancer';

const ComputerVisionPage: React.FC = () => {
  const cvServices = [
    {
      title: 'Object Detection',
      description: 'Identify and locate objects in images and videos with high accuracy using state-of-the-art deep learning models.',
      features: ['Real-time Detection', 'Multi-class Recognition', 'Bounding Box Generation', 'Confidence Scoring', 'Custom Training'],
      benefits: ['Automated surveillance', 'Quality control', 'Inventory management', 'Safety monitoring']
    },
    {
      title: 'Image Classification',
      description: 'Automatically categorize images into predefined classes with advanced CNN models and transfer learning.',
      features: ['Multi-class Classification', 'Transfer Learning', 'Custom Categories', 'Batch Processing', 'API Integration'],
      benefits: ['Content organization', 'Automated tagging', 'Search optimization', 'Process automation']
    },
    {
      title: 'Facial Recognition',
      description: 'Build secure facial recognition systems for authentication, access control, and identity verification.',
      features: ['Face Detection', 'Identity Matching', 'Liveness Detection', 'Anti-spoofing', 'Privacy Protection'],
      benefits: ['Enhanced security', 'Contactless authentication', 'Access control', 'User verification']
    },
    {
      title: 'OCR Processing',
      description: 'Extract text from images, documents, and handwritten notes with advanced optical character recognition.',
      features: ['Multi-language OCR', 'Handwriting Recognition', 'Document Analysis', 'Text Extraction', 'Format Preservation'],
      benefits: ['Document digitization', 'Data extraction', 'Process automation', 'Accessibility improvement']
    },
    {
      title: 'Video Analysis',
      description: 'Analyze video content for motion detection, activity recognition, and real-time monitoring applications.',
      features: ['Motion Detection', 'Activity Recognition', 'Real-time Processing', 'Event Detection', 'Analytics Dashboard'],
      benefits: ['Security monitoring', 'Behavior analysis', 'Automated alerts', 'Performance tracking']
    },
    {
      title: 'Medical Imaging',
      description: 'Develop AI-powered medical imaging solutions for diagnosis, treatment planning, and patient care.',
      features: ['X-ray Analysis', 'MRI Processing', 'CT Scan Analysis', 'Pathology Detection', 'Diagnostic Support'],
      benefits: ['Improved diagnosis', 'Faster analysis', 'Early detection', 'Treatment optimization']
    }
  ];

  return (
    <>
      <SEOEnhancer
        title="Computer Vision Solutions - AI Image & Video Analysis | Zion Tech Group"
        description="Advanced computer vision services including object detection, image classification, facial recognition, OCR, and medical imaging. Transform visual data into actionable insights."
        keywords={['computer vision', 'image analysis', 'object detection', 'facial recognition', 'OCR', 'video analysis', 'medical imaging']}
        canonicalUrl="https://ziontechgroup.com/computer-vision"
      />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <Navigation />
        
        <main className="container mx-auto px-4 py-24">
          {/* Hero Section */}
          <section className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 neon-text">
              Computer Vision Solutions
            </h1>
            <p className="text-xl text-cyan-400 mb-8 max-w-3xl mx-auto">
              Transform visual data into intelligent insights with cutting-edge computer vision technology
            </p>
            <p className="text-lg text-gray-300 max-w-4xl mx-auto">
              Our computer vision experts build sophisticated image and video analysis systems that extract meaningful 
              information, automate visual tasks, and enable new possibilities across industries.
            </p>
          </section>

          {/* Services Grid */}
          <section className="mb-16">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {cvServices.map((service, index) => (
                <div key={index} className="cyber-card p-6 hover:scale-105 transition-all duration-300">
                  <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl flex items-center justify-center mb-6 mx-auto">
                    <Eye className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3 text-center neon-text">{service.title}</h3>
                  <p className="text-gray-300 mb-4 text-center text-sm leading-relaxed">
                    {service.description}
                  </p>
                  
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-green-400 mb-2">Key Features:</h4>
                    <ul className="space-y-1">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-xs text-gray-300">
                          <CheckCircle className="w-3 h-3 text-green-400 mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-emerald-400 mb-2">Benefits:</h4>
                    <ul className="space-y-1">
                      {service.benefits.map((benefit, benefitIndex) => (
                        <li key={benefitIndex} className="flex items-center text-xs text-gray-300">
                          <ArrowRight className="w-3 h-3 text-emerald-400 mr-2 flex-shrink-0" />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Industries */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-white text-center mb-12 neon-text">Industry Applications</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="cyber-card p-6 text-center">
                <div className="text-4xl mb-4">🏥</div>
                <h3 className="text-xl font-bold text-white mb-3">Healthcare</h3>
                <p className="text-gray-300 text-sm">
                  Medical imaging analysis, diagnostic support, and treatment planning with AI-powered computer vision.
                </p>
              </div>
              <div className="cyber-card p-6 text-center">
                <div className="text-4xl mb-4">🏭</div>
                <h3 className="text-xl font-bold text-white mb-3">Manufacturing</h3>
                <p className="text-gray-300 text-sm">
                  Quality control, defect detection, and automated inspection systems for production lines.
                </p>
              </div>
              <div className="cyber-card p-6 text-center">
                <div className="text-4xl mb-4">🚗</div>
                <h3 className="text-xl font-bold text-white mb-3">Automotive</h3>
                <p className="text-gray-300 text-sm">
                  Autonomous vehicle systems, driver monitoring, and advanced driver assistance features.
                </p>
              </div>
              <div className="cyber-card p-6 text-center">
                <div className="text-4xl mb-4">🛒</div>
                <h3 className="text-xl font-bold text-white mb-3">Retail</h3>
                <p className="text-gray-300 text-sm">
                  Inventory management, customer analytics, and automated checkout systems.
                </p>
              </div>
              <div className="cyber-card p-6 text-center">
                <div className="text-4xl mb-4">🔒</div>
                <h3 className="text-xl font-bold text-white mb-3">Security</h3>
                <p className="text-gray-300 text-sm">
                  Surveillance systems, access control, and threat detection with facial recognition.
                </p>
              </div>
              <div className="cyber-card p-6 text-center">
                <div className="text-4xl mb-4">📱</div>
                <h3 className="text-xl font-bold text-white mb-3">Mobile Apps</h3>
                <p className="text-gray-300 text-sm">
                  AR filters, photo editing, and mobile vision features for enhanced user experiences.
                </p>
              </div>
            </div>
          </section>

          {/* Technologies */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-white text-center mb-12 neon-text">Computer Vision Technologies</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
              {['OpenCV', 'TensorFlow', 'PyTorch', 'YOLO', 'R-CNN', 'ResNet', 'MobileNet', 'EfficientNet', 'Detectron2', 'MediaPipe', 'CUDA', 'OpenVINO'].map((tech, index) => (
                <div key={index} className="cyber-card p-4 text-center hover:scale-105 transition-all duration-300">
                  <div className="text-2xl mb-2">👁️</div>
                  <div className="text-sm font-medium text-white">{tech}</div>
                </div>
              ))}
            </div>
          </section>

          {/* Contact CTA */}
          <section className="text-center">
            <div className="cyber-card p-8 max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-white mb-4 neon-text">Ready to See the Future?</h2>
              <p className="text-gray-300 mb-8 text-lg">
                Let's discuss how computer vision can transform your visual data into intelligent insights.
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