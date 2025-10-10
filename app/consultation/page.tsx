'use client';

import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { CheckCircle, ArrowRight, Star, Clock, Users, Shield, Phone, Mail, Calendar } from 'lucide-react';

const ConsultationPage: React.FC = () => {
  const consultationTypes = [
    {
      title: 'AI Strategy Consultation',
      description: 'Get expert guidance on implementing AI solutions that align with your business goals.',
      duration: '2-4 hours',
      price: 'Starting at $500/hour',
      features: [
        'AI readiness assessment',
        'Technology roadmap development',
        'ROI analysis and projections',
        'Implementation timeline planning'
      ]
    },
    {
      title: 'Cloud Migration Planning',
      description: 'Plan and execute a seamless migration to the cloud with minimal downtime.',
      duration: '4-8 hours',
      price: 'Starting at $400/hour',
      features: [
        'Infrastructure assessment',
        'Migration strategy development',
        'Security and compliance planning',
        'Cost optimization recommendations'
      ]
    },
    {
      title: 'Cybersecurity Audit',
      description: 'Comprehensive security assessment and recommendations to protect your business.',
      duration: '3-6 hours',
      price: 'Starting at $600/hour',
      features: [
        'Vulnerability assessment',
        'Compliance review',
        'Security policy development',
        'Training recommendations'
      ]
    },
    {
      title: 'Digital Transformation',
      description: 'Complete digital transformation strategy to modernize your business operations.',
      duration: '6-12 hours',
      price: 'Starting at $450/hour',
      features: [
        'Current state analysis',
        'Future state vision',
        'Technology stack recommendations',
        'Change management planning'
      ]
    }
  ];

  const benefits = [
    'Expert guidance from certified professionals',
    'Customized solutions for your business',
    'Proven methodologies and best practices',
    'Clear roadmap for implementation',
    'Ongoing support and follow-up',
    'ROI-focused recommendations'
  ];

  const process = [
    {
      step: 1,
      title: 'Initial Consultation',
      description: 'We discuss your business goals, challenges, and current technology stack.',
      duration: '30 minutes'
    },
    {
      step: 2,
      title: 'Assessment & Analysis',
      description: 'We analyze your current situation and identify opportunities for improvement.',
      duration: '1-2 hours'
    },
    {
      step: 3,
      title: 'Strategy Development',
      description: 'We develop a customized strategy and implementation plan for your business.',
      duration: '2-4 hours'
    },
    {
      step: 4,
      title: 'Presentation & Discussion',
      description: 'We present our findings and recommendations with detailed explanations.',
      duration: '1 hour'
    }
  ];

  return (
    <>
      <Helmet>
        <title>Free Consultation - Zion Tech Group | Expert AI & IT Consulting</title>
        <meta name="description" content="Get a free consultation with our AI and IT experts. Discover how we can help transform your business with cutting-edge technology solutions." />
        <meta name="keywords" content="free consultation, AI consulting, IT consulting, technology strategy, business transformation" />
      </Helmet>

      <Navigation />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="py-20 px-4 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-pink-500/10"></div>
          <div className="max-w-7xl mx-auto relative z-10">
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                Free Consultation
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Get expert guidance on AI and IT solutions that can transform your business. 
                Our certified professionals are ready to help you succeed.
              </p>
              <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-400">
                <div className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                  <span>Free Initial Consultation</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                  <span>Expert Guidance</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                  <span>Custom Solutions</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                  <span>No Obligation</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Consultation Types */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-white mb-4">Consultation Services</h2>
              <p className="text-gray-300 max-w-2xl mx-auto">
                Choose the consultation type that best fits your needs. All consultations include 
                detailed analysis and actionable recommendations.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {consultationTypes.map((consultation, index) => (
                <div
                  key={index}
                  className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10 hover:border-cyan-400/30 transition-all duration-300 group"
                >
                  <div className="text-center">
                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                      {consultation.title}
                    </h3>
                    <p className="text-gray-300 text-sm mb-4">{consultation.description}</p>
                    
                    <div className="space-y-2 mb-6">
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-gray-400">Duration:</span>
                        <span className="text-cyan-400">{consultation.duration}</span>
                      </div>
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-gray-400">Price:</span>
                        <span className="text-green-400">{consultation.price}</span>
                      </div>
                    </div>

                    <div className="space-y-2 mb-6">
                      {consultation.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-start">
                          <CheckCircle className="w-4 h-4 text-green-400 mr-2 mt-0.5 flex-shrink-0" />
                          <span className="text-xs text-gray-300">{feature}</span>
                        </div>
                      ))}
                    </div>

                    <button className="w-full py-2 px-4 bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-medium rounded-lg hover:from-cyan-600 hover:to-purple-600 transition-all duration-300">
                      Schedule Consultation
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 px-4 bg-white/5">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-white mb-4">Why Choose Our Consultation?</h2>
              <p className="text-gray-300 max-w-2xl mx-auto">
                Our expert consultants bring years of experience and proven methodologies to help you succeed.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {benefits.map((benefit, index) => (
                <div
                  key={index}
                  className="flex items-start space-x-3 p-4 bg-white/5 rounded-xl border border-white/10"
                >
                  <CheckCircle className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                  <span className="text-gray-300">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-white mb-4">Our Consultation Process</h2>
              <p className="text-gray-300 max-w-2xl mx-auto">
                We follow a structured approach to ensure you get the most value from your consultation.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {process.map((step, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-white">{step.step}</span>
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">{step.title}</h3>
                  <p className="text-gray-300 text-sm mb-2">{step.description}</p>
                  <div className="text-cyan-400 text-xs font-medium">{step.duration}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Schedule your free consultation today and discover how AI and IT solutions can drive your success.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105">
                Schedule Free Consultation
              </button>
              <button className="px-8 py-4 border border-cyan-400 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-400/10 transition-all duration-300">
                Contact Us Directly
              </button>
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </>
  );
};

export default ConsultationPage;