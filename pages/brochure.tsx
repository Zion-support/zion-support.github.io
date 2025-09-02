import React, { useState } from 'react';
import Head from 'next/head';
import { motion } from 'framer-motion';
import { 
  Download, 
  FileText, 
  CheckCircle, 
  ArrowRight,
  Mail,
  Phone,
  MapPin,
  Star,
  Users,
  Zap,
  Shield,
  Brain,
  Code,
  Cloud
} from 'lucide-react';

export default function Brochure() {
  const [isDownloading, setIsDownloading] = useState(false);
  const [isDownloaded, setIsDownloaded] = useState(false);

  const brochures = [
    {
      id: 'comprehensive',
      title: 'Comprehensive Services Brochure',
      description: 'Complete overview of all our technology solutions and services',
      size: '2.4 MB',
      pages: '24 pages',
      icon: FileText,
      color: 'from-blue-500 to-cyan-500',
      features: [
        'AI & Machine Learning Services',
        'Micro SAAS Solutions',
        'IT Infrastructure Management',
        'Digital Transformation',
        'Cybersecurity Solutions',
        'Cloud Computing Services'
      ]
    },
    {
      id: 'ai-services',
      title: 'AI Services Portfolio',
      description: 'Detailed guide to our artificial intelligence and machine learning solutions',
      size: '1.8 MB',
      pages: '18 pages',
      icon: Brain,
      color: 'from-purple-500 to-pink-500',
      features: [
        'AI Consciousness Simulator',
        'Quantum Emotion Processor',
        'Predictive Analytics',
        'Natural Language Processing',
        'Computer Vision',
        'AI Ethics Framework'
      ]
    },
    {
      id: 'micro-saas',
      title: 'Micro SAAS Solutions',
      description: 'Complete catalog of our micro SAAS platforms and business automation tools',
      size: '2.1 MB',
      pages: '20 pages',
      icon: Code,
      color: 'from-green-500 to-emerald-500',
      features: [
        'Business Intelligence Platform',
        'Customer Experience Hub',
        'Supply Chain Optimizer',
        'HR Management Suite',
        'Cybersecurity Platform',
        'IoT Edge Computing'
      ]
    },
    {
      id: 'it-services',
      title: 'IT Services Guide',
      description: 'Comprehensive guide to our IT infrastructure and support services',
      size: '1.9 MB',
      pages: '19 pages',
      icon: Cloud,
      color: 'from-orange-500 to-red-500',
      features: [
        'Infrastructure Management',
        'Digital Transformation',
        'IT Consulting',
        'Onsite Support',
        'Green IT Solutions',
        '5G Network Solutions'
      ]
    }
  ];

  const benefits = [
    {
      icon: FileText,
      title: 'Detailed Information',
      description: 'Comprehensive details about our services and solutions'
    },
    {
      icon: Users,
      title: 'Expert Insights',
      description: 'Insights from our certified professionals'
    },
    {
      icon: Star,
      title: 'Case Studies',
      description: 'Real-world examples and success stories'
    },
    {
      icon: Shield,
      title: 'Security Focus',
      description: 'Learn about our security-first approach'
    }
  ];

  const handleDownload = async (brochureId: string) => {
    setIsDownloading(true);
    
    // Simulate download process
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsDownloading(false);
    setIsDownloaded(true);
    
    // In a real application, this would trigger an actual download
    // For now, we'll just show the success message
  };

  if (isDownloaded) {
    return (
      <>
        <Head>
          <title>Brochure Downloaded - Zion Tech Group</title>
          <meta name="description" content="Thank you for downloading our brochure. We hope you find the information valuable." />
        </Head>
        
        <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="max-w-2xl w-full bg-white rounded-2xl shadow-2xl p-8 text-center"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
              className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6"
            >
              <CheckCircle className="w-10 h-10 text-green-600" />
            </motion.div>
            
            <h1 className="text-3xl font-bold text-gray-900 mb-4">
              Brochure Downloaded!
            </h1>
            
            <p className="text-lg text-gray-600 mb-8">
              Thank you for downloading our brochure. We hope you find the information valuable and it helps you understand how Zion Tech Group can support your business needs.
            </p>
            
            <div className="bg-blue-50 rounded-lg p-6 mb-8">
              <h3 className="font-semibold text-blue-900 mb-2">What's next?</h3>
              <ul className="text-left text-blue-800 space-y-2">
                <li>• Review the brochure at your convenience</li>
                <li>• Contact us if you have any questions</li>
                <li>• Schedule a demo to see our solutions in action</li>
                <li>• Request a personalized quote for your project</li>
              </ul>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              >
                Contact Us
                <ArrowRight className="ml-2 w-4 h-4" />
              </a>
              <a
                href="/demo"
                className="inline-flex items-center px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
              >
                Book Demo
              </a>
            </div>
          </motion.div>
        </div>
      </>
    );
  }

  return (
    <>
      <Head>
        <title>Download Brochure - Zion Tech Group</title>
        <meta name="description" content="Download our comprehensive brochures to learn more about our technology solutions and services." />
      </Head>

      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center"
            >
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Download Our Brochures
              </h1>
              <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto">
                Get detailed information about our technology solutions, services, and how we can help transform your business.
              </p>
            </motion.div>
          </div>
        </div>

        {/* Benefits Section */}
        <div className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Why Download Our Brochures?
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Our brochures provide comprehensive information about our services, case studies, and success stories
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <benefit.icon className="w-8 h-8 text-blue-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-600">
                    {benefit.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Brochure Options */}
        <div className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Choose Your Brochure
              </h2>
              <p className="text-lg text-gray-600">
                Select the brochure that best matches your interests
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {brochures.map((brochure, index) => (
                <motion.div
                  key={brochure.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-shadow duration-300"
                >
                  <div className="flex items-center mb-6">
                    <div className={`w-16 h-16 bg-gradient-to-r ${brochure.color} rounded-xl flex items-center justify-center mr-4`}>
                      <brochure.icon className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900">
                        {brochure.title}
                      </h3>
                      <div className="flex items-center text-gray-500 space-x-4">
                        <span className="text-sm">{brochure.size}</span>
                        <span className="text-sm">{brochure.pages}</span>
                      </div>
                    </div>
                  </div>

                  <p className="text-gray-600 mb-6">
                    {brochure.description}
                  </p>

                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-3">Includes:</h4>
                    <ul className="space-y-2">
                      {brochure.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-gray-600">
                          <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <button
                    onClick={() => handleDownload(brochure.id)}
                    disabled={isDownloading}
                    className={`w-full py-3 px-6 bg-gradient-to-r ${brochure.color} text-white font-semibold rounded-lg hover:opacity-90 transition-opacity duration-200 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center`}
                  >
                    {isDownloading ? (
                      <>
                        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                        Downloading...
                      </>
                    ) : (
                      <>
                        <Download className="w-5 h-5 mr-2" />
                        Download Brochure
                      </>
                    )}
                  </button>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Contact Section */}
        <div className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Need More Information?
              </h2>
              <p className="text-lg text-gray-600">
                Our team is here to help you understand our solutions better
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Phone className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Call Us</h3>
                <p className="text-gray-600">+1 302 464 0950</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Mail className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Email Us</h3>
                <p className="text-gray-600">kleber@ziontechgroup.com</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MapPin className="w-8 h-8 text-purple-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Visit Us</h3>
                <p className="text-gray-600">364 E Main St STE 1008<br />Middletown DE 19709</p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="py-16 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <h2 className="text-3xl font-bold mb-4">
                Ready to Get Started?
              </h2>
              <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
                Download our brochures and discover how our technology solutions can transform your business.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/demo"
                  className="inline-flex items-center px-8 py-4 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors"
                >
                  Book Demo
                  <ArrowRight className="ml-2 w-5 h-5" />
                </a>
                <a
                  href="/request-quote"
                  className="inline-flex items-center px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-blue-600 transition-colors"
                >
                  Get Quote
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </>
  );
}