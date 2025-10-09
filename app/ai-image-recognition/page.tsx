import React from 'react';
import { Helmet } from 'react-helmet-async';
import { CheckCircle, TrendingUp, Phone, Mail, MapPin, Eye, Camera, Search, Shield } from 'lucide-react';

const AIImageRecognitionPage: React.FC = () => {
  const imageServices = [
    {
      title: 'Computer Vision Solutions',
      description: 'Advanced image recognition and computer vision systems for object detection, classification, and analysis.',
      icon: '👁️',
      price: '$1,900/month',
      features: [
        'Object Detection & Classification',
        'Facial Recognition',
        'OCR & Text Extraction',
        'Image Quality Analysis',
        'Real-time Processing',
        'Custom Model Training'
      ],
      benefits: [
        'Achieve 95%+ accuracy rates',
        'Process images in milliseconds',
        'Reduce manual inspection by 90%',
        'Enable automated quality control'
      ],
      marketPrice: '$4,000-8,000/month',
      category: 'Computer Vision',
      technologies: ['OpenCV', 'TensorFlow', 'PyTorch', 'YOLO', 'ResNet', 'Cloud Vision APIs'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
    },
    {
      title: 'Medical Image Analysis',
      description: 'AI-powered medical imaging solutions for diagnosis, screening, and treatment planning.',
      icon: '🏥',
      price: '$2,500/month',
      features: [
        'X-ray Analysis',
        'MRI/CT Scan Processing',
        'Tumor Detection',
        'Disease Classification',
        'Treatment Planning',
        'Regulatory Compliance'
      ],
      benefits: [
        'Improve diagnostic accuracy by 30%',
        'Reduce analysis time by 70%',
        'Enable early disease detection',
        'Support clinical decision making'
      ],
      marketPrice: '$6,000-15,000/month',
      category: 'Medical AI',
      technologies: ['DICOM', 'Medical Imaging', 'Deep Learning', 'Radiology AI', 'HIPAA Compliance'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
    },
    {
      title: 'Security & Surveillance',
      description: 'Intelligent surveillance systems with real-time threat detection and monitoring capabilities.',
      icon: '🔒',
      price: '$1,600/month',
      features: [
        'Intrusion Detection',
        'Person Tracking',
        'Behavior Analysis',
        'License Plate Recognition',
        'Crowd Monitoring',
        'Alert Management'
      ],
      benefits: [
        'Reduce false alarms by 80%',
        'Enable 24/7 automated monitoring',
        'Improve security response time',
        'Scale across multiple locations'
      ],
      marketPrice: '$3,500-7,000/month',
      category: 'Security AI',
      technologies: ['Video Analytics', 'Edge Computing', 'Real-time Processing', 'IoT Integration'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
    }
  ];

  return (
    <>
      <Helmet>
        <title>AI Image Recognition - Zion Tech Group</title>
        <meta name="description" content="Advanced AI image recognition and computer vision solutions. Object detection, medical imaging, security surveillance, and automated visual analysis." />
        <meta name="keywords" content="image recognition, computer vision, AI vision, object detection, medical imaging, surveillance AI" />
        <link rel="canonical" href="https://ziontechgroup.com/ai-image-recognition" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-green-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                AI <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-400">Image Recognition</span>
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Transform visual data into actionable insights with our advanced AI image recognition and computer vision solutions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="bg-gradient-to-r from-green-500 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-green-600 hover:to-blue-700 transition-all duration-300"
                >
                  Get Started
                </a>
                <a
                  href="/demo"
                  className="border border-green-400 text-green-400 px-8 py-3 rounded-lg font-semibold hover:bg-green-400 hover:text-slate-900 transition-all duration-300"
                >
                  View Demo
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Vision Solutions
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Choose from our comprehensive suite of AI-powered image recognition services designed for various industries and use cases.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {imageServices.map((service, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 hover:border-green-400/50 transition-all duration-300">
                  <div className="text-4xl mb-4">{service.icon}</div>
                  <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
                  <p className="text-gray-300 mb-6">{service.description}</p>
                  
                  <div className="mb-6">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-2xl font-bold text-green-400">{service.price}</span>
                      <span className="text-sm text-gray-400 line-through">{service.marketPrice}</span>
                    </div>
                    <span className="text-sm text-green-400 bg-green-400/20 px-2 py-1 rounded">
                      {service.category}
                    </span>
                  </div>

                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-white mb-3">Key Features:</h4>
                    <ul className="space-y-2">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-gray-300">
                          <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
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
                          <TrendingUp className="w-4 h-4 text-blue-400 mr-2 flex-shrink-0" />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-white mb-3">Technologies:</h4>
                    <div className="flex flex-wrap gap-2">
                      {service.technologies.map((tech, techIndex) => (
                        <span key={techIndex} className="bg-green-500/20 text-green-300 px-3 py-1 rounded-full text-sm">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="pt-4 border-t border-white/20">
                    <p className="text-sm text-gray-400 mb-4">{service.contactInfo}</p>
                    <a
                      href="/contact"
                      className="w-full bg-gradient-to-r from-green-500 to-blue-600 text-white py-3 rounded-lg font-semibold text-center block hover:from-green-600 hover:to-blue-700 transition-all duration-300"
                    >
                      Get Started
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-green-500/20 to-blue-500/20">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to See the Future?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join forward-thinking companies using our AI image recognition to automate visual processes and gain competitive advantages.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="bg-gradient-to-r from-green-500 to-blue-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-green-600 hover:to-blue-700 transition-all duration-300"
              >
                Start Your Vision Journey
              </a>
              <a
                href="tel:+13024640950"
                className="border border-green-400 text-green-400 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-green-400 hover:text-slate-900 transition-all duration-300 flex items-center justify-center"
              >
                <Phone className="w-5 h-5 mr-2" />
                (302) 464-0950
              </a>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default AIImageRecognitionPage;