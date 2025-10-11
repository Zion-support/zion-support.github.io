'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Eye, Camera, Image, Target, Zap, CheckCircle, ArrowRight } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const ComputerVisionPage: React.FC = () => {
  const features = [
    {
      icon: Eye,
      title: 'Object Detection',
      description: 'Identify and locate objects in images and videos with high accuracy.',
      benefits: ['Real-time detection', 'Multiple object types', 'Bounding box coordinates', 'Confidence scores']
    },
    {
      icon: Camera,
      title: 'Image Classification',
      description: 'Automatically categorize and label images based on their content.',
      benefits: ['Multi-class classification', 'Custom model training', 'Batch processing', 'High accuracy']
    },
    {
      icon: Image,
      title: 'Facial Recognition',
      description: 'Detect and recognize faces in images and video streams.',
      benefits: ['Face detection', 'Identity verification', 'Emotion analysis', 'Age estimation']
    },
    {
      icon: Target,
      title: 'Visual Analytics',
      description: 'Extract meaningful insights from visual data for business intelligence.',
      benefits: ['Pattern recognition', 'Trend analysis', 'Automated reporting', 'Data visualization']
    }
  ];

  const useCases = [
    {
      title: 'Retail Analytics',
      description: 'Monitor customer behavior, inventory levels, and store performance.',
      icon: '🛒'
    },
    {
      title: 'Quality Control',
      description: 'Automate product inspection and defect detection in manufacturing.',
      icon: '🏭'
    },
    {
      title: 'Security & Surveillance',
      description: 'Enhance security with intelligent monitoring and threat detection.',
      icon: '🔒'
    },
    {
      title: 'Healthcare Imaging',
      description: 'Assist in medical diagnosis and treatment planning.',
      icon: '🏥'
    }
  ];

  return (
    <>
      <Helmet>
        <title>Computer Vision Solutions - Zion Tech Group</title>
        <meta name="description" content="Advanced computer vision solutions powered by AI for image recognition, object detection, and visual analytics." />
        <meta name="keywords" content="computer vision, AI, image recognition, object detection, visual analytics" />
      </Helmet>
      
      <Navigation />
      
      <main className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
        {/* Hero Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-6">
                <Eye className="w-8 h-8 text-blue-600" />
              </div>
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
                Computer Vision Solutions
              </h1>
              <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
                Transform your business with advanced computer vision technology that can see, understand, and analyze visual data.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                  Get Started
                </button>
                <button className="border border-blue-600 text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors">
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Advanced Computer Vision Features
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Our computer vision solutions leverage cutting-edge AI to provide accurate and reliable visual analysis.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                    <feature.icon className="w-6 h-6 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    {feature.description}
                  </p>
                  <ul className="space-y-2">
                    {feature.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="flex items-center text-sm text-gray-600">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
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
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Industry Applications
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Discover how computer vision can transform your industry and solve real-world challenges.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {useCases.map((useCase, index) => (
                <div key={index} className="text-center">
                  <div className="text-4xl mb-4">
                    {useCase.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {useCase.title}
                  </h3>
                  <p className="text-gray-600">
                    {useCase.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-blue-600">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Implement Computer Vision?
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Let us help you integrate advanced computer vision capabilities into your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                Start Your Project
              </button>
              <button className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                Contact Us
              </button>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </>
  );
};

export default ComputerVisionPage;