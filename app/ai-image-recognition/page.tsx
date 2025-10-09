import React from 'react';
import { Helmet } from 'react-helmet-async';
import { CheckCircle, TrendingUp, Phone, Mail, MapPin, Eye, Target, Zap, Shield, Camera } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const AIImageRecognitionPage: React.FC = () => {
  const imageServices = [
    {
      title: 'Object Detection & Recognition',
      description: 'Advanced computer vision for identifying and classifying objects in images',
      icon: Eye,
      features: ['Real-time Detection', 'Multi-class Classification', 'Bounding Box Detection', 'Confidence Scoring'],
      benefits: ['99.5% Accuracy Rate', 'Process 1000+ Images/Minute', 'Real-time Processing', 'Custom Model Training'],
      price: 'Starting at $1,200/month'
    },
    {
      title: 'Facial Recognition Systems',
      description: 'Secure and accurate facial recognition for authentication and identification',
      icon: Target,
      features: ['Face Detection', 'Identity Verification', 'Emotion Analysis', 'Age Estimation'],
      benefits: ['99.9% Recognition Accuracy', 'Anti-spoofing Protection', 'Real-time Processing', 'Privacy Compliant'],
      price: 'Starting at $1,800/month'
    },
    {
      title: 'Quality Control Automation',
      description: 'Automated visual inspection for manufacturing and quality assurance',
      icon: Shield,
      features: ['Defect Detection', 'Dimensional Analysis', 'Surface Inspection', 'Color Verification'],
      benefits: ['Reduce Inspection Time by 90%', 'Improve Quality by 95%', '24/7 Monitoring', 'Cost Reduction'],
      price: 'Starting at $2,000/month'
    },
    {
      title: 'Medical Image Analysis',
      description: 'AI-powered analysis of medical images for diagnosis and treatment planning',
      icon: Camera,
      features: ['X-ray Analysis', 'MRI Interpretation', 'CT Scan Processing', 'Pathology Detection'],
      benefits: ['Improve Diagnosis Accuracy', 'Reduce Analysis Time', 'Early Disease Detection', 'Radiologist Support'],
      price: 'Starting at $2,500/month'
    },
    {
      title: 'Retail Visual Search',
      description: 'Visual search technology for e-commerce and retail applications',
      icon: Zap,
      features: ['Product Recognition', 'Similar Item Search', 'Visual Recommendations', 'Inventory Management'],
      benefits: ['Increase Sales by 30%', 'Improve User Experience', 'Reduce Search Time', 'Boost Conversion'],
      price: 'Starting at $1,500/month'
    },
    {
      title: 'Security & Surveillance',
      description: 'Intelligent video surveillance and security monitoring systems',
      icon: Shield,
      features: ['Intrusion Detection', 'Behavior Analysis', 'Crowd Monitoring', 'Alert Generation'],
      benefits: ['24/7 Security Monitoring', 'Reduce False Alarms', 'Improve Response Time', 'Cost-effective Security'],
      price: 'Starting at $1,600/month'
    }
  ];

  return (
    <>
      <Helmet>
        <title>AI Image Recognition - Zion Tech Group</title>
        <meta name="description" content="Advanced AI image recognition and computer vision solutions. Object detection, facial recognition, quality control, and medical image analysis." />
        <meta name="keywords" content="image recognition, computer vision, object detection, facial recognition, quality control, medical imaging" />
      </Helmet>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <Navigation />
        
        {/* Hero Section */}
        <section className="pt-24 pb-16 px-4">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">
              AI Image Recognition
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Advanced computer vision solutions that can see, understand, and analyze images with human-level accuracy
            </p>
            
            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                <div className="text-3xl font-bold text-cyan-400 mb-2">99.5%</div>
                <div className="text-gray-300">Accuracy Rate</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                <div className="text-3xl font-bold text-green-400 mb-2">1000+</div>
                <div className="text-gray-300">Images/Minute</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                <div className="text-3xl font-bold text-purple-400 mb-2">90%</div>
                <div className="text-gray-300">Time Reduction</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                <div className="text-3xl font-bold text-orange-400 mb-2">24/7</div>
                <div className="text-gray-300">Monitoring</div>
              </div>
            </div>

            {/* Contact Info */}
            <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg p-6 mb-12">
              <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-8">
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
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-white text-center mb-12">
              Our Image Recognition Solutions
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {imageServices.map((service, index) => (
                <div key={index} className="bg-white rounded-xl shadow-lg p-6 hover:shadow-2xl transition-all duration-300 hover:scale-105">
                  <div className="text-center mb-6">
                    <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                      <service.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{service.title}</h3>
                    <p className="text-gray-600 text-sm">{service.description}</p>
                  </div>
                  
                  <div className="mb-6">
                    <div className="text-2xl font-bold text-green-600 mb-4">{service.price}</div>
                  </div>

                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-3">Key Features:</h4>
                    <ul className="space-y-2">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                          <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-3">Benefits:</h4>
                    <ul className="space-y-1">
                      {service.benefits.map((benefit, benefitIndex) => (
                        <li key={benefitIndex} className="text-sm text-gray-600 flex items-center">
                          <TrendingUp className="w-3 h-3 text-blue-500 mr-2 flex-shrink-0" />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="text-center">
                    <a
                      href={`mailto:kleber@ziontechgroup.com?subject=Interest in ${service.title}`}
                      className="w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white py-2 px-4 rounded-lg font-medium hover:from-purple-700 hover:to-blue-700 transition-all inline-block"
                    >
                      Get Started Now
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4 bg-gradient-to-r from-purple-600 to-blue-600">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-white mb-6">
              Ready to See the Future with AI Vision?
            </h2>
            <p className="text-xl text-purple-100 mb-8">
              Let our computer vision experts help you implement cutting-edge image recognition technology.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+13024640950"
                className="bg-white text-purple-600 px-8 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors"
              >
                Call (302) 464-0950
              </a>
              <a
                href="mailto:kleber@ziontechgroup.com"
                className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg font-medium hover:bg-white hover:text-purple-600 transition-colors"
              >
                Email Us
              </a>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default AIImageRecognitionPage;