'use client';
import React from 'react';
import { CheckCircle, Star, Heart, Brain, Shield, Zap, Target, Users } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const AIHealthcarePage: React.FC = () => {
  const aiHealthcareServices = [
    {
      title: 'AI Medical Image Analysis',
      description: 'Advanced AI-powered medical imaging analysis for radiology, pathology, and diagnostic imaging with 99.5% accuracy.',
      icon: '🩺',
      price: '$2,999/month',
      features: ['X-ray analysis', 'MRI/CT scan interpretation', 'Pathology image analysis', 'Tumor detection', 'Diagnostic reporting'],
      benefits: ['Improve diagnostic accuracy by 40%', 'Reduce reading time by 60%', 'Early disease detection'],
      category: 'Medical Imaging',
      technologies: ['TensorFlow', 'PyTorch', 'OpenCV', 'DICOM', 'Medical AI Models']
    },
    {
      title: 'AI Drug Discovery & Development',
      description: 'Machine learning models for pharmaceutical research, molecular design, and drug development optimization.',
      icon: '💊',
      price: '$4,999/month',
      features: ['Molecular design', 'Drug-target interaction', 'Clinical trial optimization', 'Side effect prediction', 'Drug repurposing'],
      benefits: ['Reduce development time by 50%', 'Lower research costs', 'Higher success rates'],
      category: 'Drug Discovery',
      technologies: ['Deep Learning', 'Molecular Dynamics', 'Quantum Chemistry', 'Bioinformatics', 'Clinical Data']
    },
    {
      title: 'AI Personalized Medicine',
      description: 'Genomic analysis and personalized treatment recommendations based on patient genetic profiles.',
      icon: '🧬',
      price: '$3,499/month',
      features: ['Genomic analysis', 'Treatment optimization', 'Risk assessment', 'Pharmacogenomics', 'Precision dosing'],
      benefits: ['Personalized treatments', 'Reduced adverse effects', 'Better outcomes'],
      category: 'Personalized Medicine',
      technologies: ['Genomics', 'Machine Learning', 'Clinical Decision Support', 'Electronic Health Records']
    },
    {
      title: 'AI Clinical Decision Support',
      description: 'Intelligent clinical decision support systems for healthcare providers with real-time recommendations.',
      icon: '🏥',
      price: '$2,499/month',
      features: ['Clinical guidelines', 'Risk stratification', 'Treatment protocols', 'Alert systems', 'Outcome prediction'],
      benefits: ['Improved patient care', 'Reduced medical errors', 'Better resource utilization'],
      category: 'Clinical Support',
      technologies: ['NLP', 'Knowledge Graphs', 'Clinical Data', 'Evidence-Based Medicine']
    },
    {
      title: 'AI Telemedicine Platform',
      description: 'Comprehensive telemedicine solution with AI-powered diagnostics and remote patient monitoring.',
      icon: '📱',
      price: '$1,999/month',
      features: ['Remote consultations', 'AI symptom checker', 'Vital signs monitoring', 'Prescription management', 'Follow-up care'],
      benefits: ['Improved access to care', 'Reduced healthcare costs', 'Better patient engagement'],
      category: 'Telemedicine',
      technologies: ['Computer Vision', 'IoT', 'Mobile Health', 'Cloud Computing', 'Real-time Analytics']
    },
    {
      title: 'AI Healthcare Analytics',
      description: 'Advanced analytics platform for healthcare data insights, population health management, and predictive modeling.',
      icon: '📊',
      price: '$3,999/month',
      features: ['Population health analytics', 'Predictive modeling', 'Cost analysis', 'Quality metrics', 'Outcome tracking'],
      benefits: ['Data-driven decisions', 'Cost optimization', 'Improved quality of care'],
      category: 'Analytics',
      technologies: ['Big Data', 'Machine Learning', 'Statistical Analysis', 'Healthcare Data Standards']
    }
  ];

  const categories = [...new Set(aiHealthcareServices.map(service => service.category))];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-green-50">
      <Navigation />
      <main className="container mx-auto px-4 py-16 pt-24">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-r from-green-600 to-teal-700 text-white py-20">
          <div className="absolute inset-0 bg-black opacity-20"></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                AI Healthcare Solutions
              </h1>
              <p className="text-xl md:text-2xl text-green-100 mb-8 max-w-4xl mx-auto">
                Revolutionizing healthcare with advanced AI technology for medical imaging, drug discovery, personalized medicine, and clinical decision support.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="/contact" 
                  className="bg-white text-green-600 px-8 py-3 rounded-lg font-semibold hover:bg-green-50 transition-all"
                >
                  Get Started
                </a>
                <a 
                  href="/case-studies" 
                  className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-green-600 transition-all"
                >
                  View Case Studies
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Our AI Healthcare Services</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Comprehensive AI solutions designed to transform healthcare delivery and improve patient outcomes.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {aiHealthcareServices.map((service, index) => (
                <div key={index} className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
                  <div className="text-4xl mb-4">{service.icon}</div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">{service.title}</h3>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  
                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-900 mb-2">Key Features:</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center">
                          <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-900 mb-2">Benefits:</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      {service.benefits.map((benefit, idx) => (
                        <li key={idx} className="flex items-center">
                          <Star className="w-4 h-4 text-yellow-500 mr-2 flex-shrink-0" />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="mb-4">
                    <div className="text-2xl font-bold text-green-600 mb-2">{service.price}</div>
                    <div className="text-sm text-gray-500">Category: {service.category}</div>
                  </div>
                  
                  <a 
                    href="/contact" 
                    className="inline-flex items-center text-green-600 hover:text-green-700 font-medium"
                  >
                    Learn More →
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Categories */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Healthcare AI Categories</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Specialized AI solutions across different areas of healthcare.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {categories.map((category, index) => (
                <div key={index} className="text-center p-6 bg-white rounded-lg shadow-md">
                  <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-teal-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Heart className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{category}</h3>
                  <p className="text-gray-600 text-sm">
                    {category === 'Medical Imaging' && 'AI-powered diagnostic imaging and analysis'}
                    {category === 'Drug Discovery' && 'Machine learning for pharmaceutical research'}
                    {category === 'Personalized Medicine' && 'Genomic analysis and personalized treatments'}
                    {category === 'Clinical Support' && 'Intelligent clinical decision support systems'}
                    {category === 'Telemedicine' && 'Remote healthcare and monitoring solutions'}
                    {category === 'Analytics' && 'Healthcare data analytics and insights'}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-green-600 to-teal-700 text-white">
          <div className="max-w-4xl mx-auto text-center px-4">
            <h2 className="text-4xl font-bold mb-6">Ready to Transform Healthcare?</h2>
            <p className="text-xl text-green-100 mb-8">
              Let's discuss how our AI healthcare solutions can improve patient outcomes and operational efficiency.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/contact" 
                className="bg-white text-green-600 px-8 py-3 rounded-lg font-semibold hover:bg-green-50 transition-all"
              >
                Schedule Consultation
              </a>
              <a 
                href="tel:+1-302-464-0950" 
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-green-600 transition-all"
              >
                Call: +1 (302) 464-0950
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default AIHealthcarePage;