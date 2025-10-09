import React from 'react';
import { Helmet } from 'react-helmet-async';
import { CheckCircle, TrendingUp, Phone, Mail, Eye, Brain, Target, Shield, Clock, Users, ArrowRight } from 'lucide-react';
import Navigation from '../../components/Navigation';
import Footer from '../../components/Footer';

const AIImageRecognitionPage: React.FC = () => {
  const recognitionServices = [
    {
      title: 'Object Detection & Classification',
      description: 'Advanced computer vision solutions for real-time object detection, classification, and tracking across various industries.',
      icon: '👁️',
      price: '$1,800/month',
      features: [
        'Real-time Object Detection',
        'Multi-class Classification',
        'Bounding Box Detection',
        'Object Tracking',
        'Custom Model Training',
        'API Integration'
      ],
      benefits: [
        'Achieve 95%+ accuracy',
        'Process 1000+ images/second',
        'Reduce manual inspection by 90%',
        'Enable 24/7 monitoring'
      ],
      marketPrice: '$3,500-7,000/month',
      category: 'Computer Vision',
      technologies: ['YOLO', 'R-CNN', 'TensorFlow', 'OpenCV', 'Python', 'Cloud Computing'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
    },
    {
      title: 'Facial Recognition System',
      description: 'Secure and accurate facial recognition for authentication, access control, and identity verification.',
      icon: '👤',
      price: '$2,200/month',
      features: [
        'Face Detection & Recognition',
        'Liveness Detection',
        'Anti-spoofing Protection',
        'Multi-face Processing',
        'Real-time Matching',
        'Privacy Compliance'
      ],
      benefits: [
        '99.9% recognition accuracy',
        'Sub-second response time',
        'Prevent unauthorized access',
        'Comply with privacy regulations'
      ],
      marketPrice: '$4,000-8,000/month',
      category: 'Biometric Security',
      technologies: ['FaceNet', 'DeepFace', 'OpenCV', 'TensorFlow', 'Privacy Tools', 'Security APIs'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
    },
    {
      title: 'Medical Image Analysis',
      description: 'AI-powered medical image analysis for diagnosis assistance, anomaly detection, and treatment planning.',
      icon: '🏥',
      price: '$3,000/month',
      features: [
        'X-ray Analysis',
        'MRI/CT Scan Processing',
        'Tumor Detection',
        'Anomaly Classification',
        'Diagnostic Assistance',
        'Report Generation'
      ],
      benefits: [
        'Improve diagnostic accuracy by 40%',
        'Reduce analysis time by 70%',
        'Detect early-stage conditions',
        'Support radiologist decisions'
      ],
      marketPrice: '$6,000-12,000/month',
      category: 'Medical AI',
      technologies: ['Deep Learning', 'Medical Imaging', 'DICOM Processing', 'CNN Models', 'HIPAA Compliance', 'Cloud Infrastructure'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
    }
  ];

  const applications = [
    {
      title: 'Retail & E-commerce',
      description: 'Product recognition, inventory management, and customer behavior analysis',
      icon: '🛒',
      results: ['95% product accuracy', '60% inventory efficiency', '40% sales increase']
    },
    {
      title: 'Security & Surveillance',
      description: 'Intruder detection, access control, and threat identification',
      icon: '🔒',
      results: ['99% threat detection', '90% false alarm reduction', '24/7 monitoring']
    },
    {
      title: 'Manufacturing',
      description: 'Quality control, defect detection, and process monitoring',
      icon: '🏭',
      results: ['80% defect reduction', '50% quality improvement', '30% cost savings']
    },
    {
      title: 'Healthcare',
      description: 'Medical diagnosis, patient monitoring, and treatment planning',
      icon: '🏥',
      results: ['40% faster diagnosis', '35% accuracy improvement', '60% time savings']
    }
  ];

  return (
    <>
      <Helmet>
        <title>AI Image Recognition - Zion Tech Group</title>
        <meta name="description" content="Advanced AI image recognition solutions for object detection, facial recognition, and medical image analysis. Achieve 95%+ accuracy with real-time processing." />
        <meta name="keywords" content="image recognition, computer vision, object detection, facial recognition, medical imaging, AI vision" />
        <link rel="canonical" href="https://ziontechgroup.com/ai-image-recognition" />
      </Helmet>
      
      <Navigation />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <div className="relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
            <div className="text-center">
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                AI <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">Image Recognition</span>
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Transform visual data into actionable insights with advanced AI image recognition solutions for object detection, facial recognition, and medical imaging.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="tel:+13024640950"
                  className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 flex items-center justify-center"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  (302) 464-0950
                </a>
                <a
                  href="mailto:kleber@ziontechgroup.com"
                  className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-white transition-all duration-300 flex items-center justify-center"
                >
                  <Mail className="w-5 h-5 mr-2" />
                  Get Quote
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Services Section */}
        <div className="py-16 bg-slate-800/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">Image Recognition Services</h2>
              <p className="text-xl text-gray-300">Advanced computer vision solutions powered by artificial intelligence</p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {recognitionServices.map((service, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 hover:border-cyan-400/50 transition-all duration-300">
                  <div className="text-4xl mb-4">{service.icon}</div>
                  <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
                  <p className="text-gray-300 mb-6">{service.description}</p>
                  
                  <div className="mb-6">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-3xl font-bold text-cyan-400">${service.price.replace('$', '').replace('/month', '')}</span>
                      <span className="text-sm text-gray-400">/month</span>
                    </div>
                    <div className="text-sm text-gray-400 line-through">Market: {service.marketPrice}</div>
                  </div>

                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-white mb-3">Key Features:</h4>
                    <ul className="space-y-2">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-gray-300">
                          <CheckCircle className="w-4 h-4 text-cyan-400 mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-white mb-3">Benefits:</h4>
                    <ul className="space-y-2">
                      {service.benefits.map((benefit, benefitIndex) => (
                        <li key={benefitIndex} className="flex items-center text-gray-300">
                          <TrendingUp className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="pt-4 border-t border-white/20">
                    <p className="text-sm text-gray-400 mb-4">{service.contactInfo}</p>
                    <a
                      href="tel:+13024640950"
                      className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 text-center block"
                    >
                      Get Started Now
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Applications Section */}
        <div className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">Industry Applications</h2>
              <p className="text-xl text-gray-300">See how image recognition transforms different industries</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {applications.map((application, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:border-cyan-400/50 transition-all duration-300">
                  <div className="text-3xl mb-4">{application.icon}</div>
                  <h3 className="text-xl font-bold text-white mb-3">{application.title}</h3>
                  <p className="text-gray-300 mb-4">{application.description}</p>
                  <ul className="space-y-2">
                    {application.results.map((result, resultIndex) => (
                      <li key={resultIndex} className="text-sm text-cyan-400 flex items-center">
                        <ArrowRight className="w-3 h-3 mr-2" />
                        {result}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="py-16 bg-gradient-to-r from-cyan-600/20 to-purple-600/20">
          <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to See the Future with AI Vision?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Transform your visual data into powerful insights with our advanced AI image recognition solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+13024640950"
                className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 flex items-center justify-center"
              >
                <Phone className="w-5 h-5 mr-2" />
                Call (302) 464-0950
              </a>
              <a
                href="mailto:kleber@ziontechgroup.com"
                className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-white transition-all duration-300 flex items-center justify-center"
              >
                <Mail className="w-5 h-5 mr-2" />
                Email Us
              </a>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </>
  );
};

export default AIImageRecognitionPage;