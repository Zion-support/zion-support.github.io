'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { CheckCircle, Eye, Camera, Image, Zap, Shield, ArrowRight, Brain, Target, Users, Star, Phone, Mail, MapPin } from 'lucide-react';

const AIComputerVisionPage: React.FC = () => {
  const features = [
    {
      icon: Eye,
      title: 'Object Detection',
      description: 'Advanced object detection and recognition using state-of-the-art computer vision algorithms.',
      benefits: ['Real-time detection', 'Multi-class recognition', 'High accuracy', 'Custom training']
    },
    {
      icon: Camera,
      title: 'Image Analysis',
      description: 'Comprehensive image analysis including classification, segmentation, and feature extraction.',
      benefits: ['Image classification', 'Semantic segmentation', 'Feature extraction', 'Quality assessment']
    },
    {
      icon: Brain,
      title: 'Deep Learning Models',
      description: 'Custom deep learning models trained on your specific data for optimal performance.',
      benefits: ['Custom models', 'Transfer learning', 'Model optimization', 'Continuous learning']
    },
    {
      icon: Target,
      title: 'Real-time Processing',
      description: 'Process images and videos in real-time with optimized algorithms and hardware acceleration.',
      benefits: ['Real-time processing', 'Hardware acceleration', 'Low latency', 'High throughput']
    },
    {
      icon: Shield,
      title: 'Security & Privacy',
      description: 'Secure computer vision solutions with privacy protection and data encryption.',
      benefits: ['Data encryption', 'Privacy protection', 'Secure processing', 'Compliance ready']
    },
    {
      icon: Zap,
      title: 'Edge Computing',
      description: 'Deploy computer vision models on edge devices for offline processing and reduced latency.',
      benefits: ['Edge deployment', 'Offline processing', 'Reduced latency', 'Cost optimization']
    }]
  ];

  const benefits = [
    'Improve accuracy by 95%',
    'Reduce processing time by 80%',
    'Lower operational costs by 60%',
    'Enable real-time insights',
    'Automate visual tasks',
    'Scale across devices',
    'Enhance user experience',
    'Enable new applications']
  ];

  const useCases = [
    {
      title: 'Autonomous Vehicles',
      description: 'Computer vision for self-driving cars and advanced driver assistance systems',
      icon: '🚗'
    },
    {
      title: 'Medical Imaging',
      description: 'AI-powered medical image analysis for diagnosis and treatment planning',
      icon: '🏥'
    },
    {
      title: 'Quality Control',
      description: 'Automated quality inspection and defect detection in manufacturing',
      icon: '🏭'
    },
    {
      title: 'Security & Surveillance',
      description: 'Intelligent surveillance systems with facial recognition and behavior analysis',
      icon: '🔒'
    },
    {
      title: 'Retail Analytics',
      description: 'Customer behavior analysis and inventory management in retail',
      icon: '🛒'
    },
    {
      title: 'Agriculture',
      description: 'Crop monitoring, disease detection, and yield prediction in agriculture',
      icon: '🌾'
    }]
  ];

  return (
    <>
      <Helmet>
        <title>AI Computer Vision - Zion Tech Group</title>
        <meta name="description" content="Transform your business with our AI Computer Vision solutions. Advanced object detection, image analysis, and real-time processing for better insights." />
        <meta name="keywords" content="AI computer vision, object detection, image analysis, deep learning, computer vision AI, visual recognition" />
      </Helmet>


      <main className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        </main><section className="relative py-20 px-4 sm:px-6 lg:px-8">
          </section><div className="max-w-7xl mx-auto text-center">
            </div><div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mb-8">
              <Eye className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              AI Computer Vision
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Transform your business with our AI Computer Vision solutions. Advanced object detection, 
              image analysis, and real-time processing for better insights.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-4 rounded-lg font-semibold hover:from-purple-600 hover:to-pink-600 transition-all duration-300 flex items-center justify-center">
                Start Building
                <ArrowRight className="ml-2 w-5 h-5" />
              </button>
              <button className="border border-purple-400 text-purple-300 px-8 py-4 rounded-lg font-semibold hover:bg-purple-500 hover:text-white transition-all duration-300">
                View Demo
              </button>
            </div>
          </div>
        </section>

              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default AIComputerVisionPage;
