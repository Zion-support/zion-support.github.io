'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Phone, Mail, Calendar, CheckCircle, ArrowRight, Star, Clock, Users, Shield, Award } from 'lucide-react';

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
      description: 'Comprehensive cloud strategy and migration planning for your infrastructure.',
      duration: '4-8 hours',
      price: 'Starting at $400/hour',
      features: [
        'Current infrastructure analysis',
        'Cloud platform selection',
        'Migration strategy development',
        'Cost optimization recommendations'
      ]
    },
    {
      title: 'Cybersecurity Audit',
      description: 'Complete security assessment and recommendations for your digital infrastructure.',
      duration: '6-12 hours',
      price: 'Starting at $600/hour',
      features: [
        'Security vulnerability assessment',
        'Compliance review',
        'Security policy development',
        'Incident response planning'
      ]
    }
  ];

  const process = [
    {
      step: '1',
      title: 'Initial Assessment',
      description: 'We analyze your current technology landscape and business objectives.',
      icon: Star
    },
    {
      step: '2',
      title: 'Strategy Development',
      description: 'Create a customized strategy based on your specific needs and goals.',
      icon: Users
    },
    {
      step: '3',
      title: 'Implementation Plan',
      description: 'Develop a detailed roadmap with timelines and milestones.',
      icon: Clock
    },
    {
      step: '4',
      title: 'Ongoing Support',
      description: 'Provide continuous guidance and support throughout implementation.',
      icon: Shield
    }
  ];

  const benefits = [
    'Expert guidance from industry professionals',
    'Customized solutions for your business',
    'Proven methodologies and best practices',
    'Clear roadmap and implementation plan',
    'Ongoing support and optimization',
    'ROI-focused recommendations'
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Consultation - Zion Tech Group | Expert IT Consulting</title>
        <meta name="description" content="Get expert consultation on AI, cloud computing, cybersecurity, and IT strategy from Zion Tech Group's experienced professionals." />
        <meta name="keywords" content="IT consultation, AI consulting, cloud consulting, cybersecurity audit, technology strategy" />
      </Helmet>

      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Expert IT Consultation
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Get personalized guidance from our experts to transform your business with cutting-edge AI and IT solutions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {consultationTypes.map((type, index) => (
              <div
                key={index}
                className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 hover:border-cyan-400/50 transition-all duration-300"
              >
                <h3 className="text-2xl font-bold text-white mb-4">{type.title}</h3>
                <p className="text-gray-300 mb-6">{type.description}</p>
                
                <div className="mb-6">
                  <div className="flex items-center justify-between text-sm text-gray-400 mb-2">
                    <span>Duration</span>
                    <span className="text-cyan-400 font-medium">{type.duration}</span>
                  </div>
                  <div className="flex items-center justify-between text-sm text-gray-400">
                    <span>Price</span>
                    <span className="text-cyan-400 font-medium">{type.price}</span>
                  </div>
                </div>

                <ul className="space-y-2 mb-6">
                  {type.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-300 text-sm">
                      <CheckCircle className="w-4 h-4 text-cyan-400 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <button className="w-full bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-semibold py-3 rounded-lg hover:from-cyan-600 hover:to-purple-600 transition-all duration-300">
                  Schedule Consultation
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-4">Our Consultation Process</h2>
            <p className="text-gray-300 max-w-3xl mx-auto">
              A structured approach to delivering the best consultation experience.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <step.icon className="w-8 h-8 text-white" />
                </div>
                <div className="bg-purple-600 w-8 h-8 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-lg font-bold text-white">{step.step}</span>
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{step.title}</h3>
                <p className="text-gray-300">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Why Choose Our Consultation?</h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Our expert consultants bring years of experience and proven methodologies to help you succeed.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                <span className="text-gray-300">{benefit}</span>
              </div>
            ))}
          </div>

          <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-white mb-4">Ready to Get Started?</h2>
              <p className="text-gray-300 mb-8">
                Contact our experts to discuss your specific needs and schedule a consultation.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-cyan-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Phone className="w-8 h-8 text-cyan-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Call Us</h3>
                <p className="text-gray-300 mb-2">(302) 464-0950</p>
                <p className="text-sm text-gray-400">Mon-Fri: 9AM-6PM EST</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-cyan-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Mail className="w-8 h-8 text-cyan-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Email Us</h3>
                <p className="text-gray-300 mb-2">kleber@ziontechgroup.com</p>
                <p className="text-sm text-gray-400">We'll respond within 24 hours</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-cyan-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Calendar className="w-8 h-8 text-cyan-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Schedule Online</h3>
                <p className="text-gray-300 mb-2">Book a consultation</p>
                <p className="text-sm text-gray-400">Available 24/7</p>
              </div>
            </div>

            <div className="text-center mt-8">
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-semibold rounded-full hover:from-cyan-600 hover:to-purple-600 transition-all duration-300"
              >
                Schedule Your Consultation
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ConsultationPage;