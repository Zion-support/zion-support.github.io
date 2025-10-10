'use client';

import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { 
  Calendar, 
  Clock, 
  Users, 
  CheckCircle, 
  ArrowRight,
  Brain,
  Cloud,
  Shield,
  Zap,
  Star,
  Phone,
  Mail,
  Video
} from 'lucide-react';

const ConsultationPage: React.FC = () => {
  const [selectedService, setSelectedService] = useState('');
  const [selectedDuration, setSelectedDuration] = useState('');

  const consultationTypes = [
    {
      id: 'ai-strategy',
      title: 'AI Strategy Consultation',
      description: 'Develop a comprehensive AI strategy for your business',
      duration: '2-4 hours',
      price: '$2,500',
      icon: Brain,
      features: [
        'AI readiness assessment',
        'Technology roadmap',
        'ROI analysis',
        'Implementation timeline',
        'Risk assessment'
      ],
      popular: true
    },
    {
      id: 'cloud-migration',
      title: 'Cloud Migration Planning',
      description: 'Plan and execute your cloud migration strategy',
      duration: '4-6 hours',
      price: '$3,500',
      icon: Cloud,
      features: [
        'Current infrastructure audit',
        'Cloud platform selection',
        'Migration strategy',
        'Cost optimization',
        'Security planning'
      ],
      popular: false
    },
    {
      id: 'cybersecurity-audit',
      title: 'Cybersecurity Assessment',
      description: 'Comprehensive security audit and recommendations',
      duration: '3-5 hours',
      price: '$2,800',
      icon: Shield,
      features: [
        'Security vulnerability assessment',
        'Compliance review',
        'Threat analysis',
        'Security recommendations',
        'Implementation plan'
      ],
      popular: false
    },
    {
      id: 'digital-transformation',
      title: 'Digital Transformation',
      description: 'Complete digital transformation strategy',
      duration: '6-8 hours',
      price: '$5,000',
      icon: Zap,
      features: [
        'Current state analysis',
        'Future state vision',
        'Technology roadmap',
        'Change management plan',
        'Success metrics'
      ],
      popular: true
    }
  ];

  const consultationSteps = [
    {
      step: 1,
      title: 'Initial Assessment',
      description: 'We analyze your current technology stack and business requirements',
      duration: '30 minutes',
      icon: Users
    },
    {
      step: 2,
      title: 'Strategy Development',
      description: 'Create a customized strategy based on your specific needs',
      duration: '2-4 hours',
      icon: Brain
    },
    {
      step: 3,
      title: 'Implementation Plan',
      description: 'Develop a detailed roadmap for implementation',
      duration: '1-2 hours',
      icon: CheckCircle
    },
    {
      step: 4,
      title: 'Follow-up Support',
      description: 'Ongoing support and guidance throughout implementation',
      duration: 'Ongoing',
      icon: ArrowRight
    }
  ];

  const benefits = [
    'Expert guidance from certified professionals',
    'Customized solutions for your business',
    'Detailed implementation roadmap',
    'Ongoing support and guidance',
    'Proven methodologies and best practices',
    'ROI analysis and business case development'
  ];

  const testimonials = [
    {
      name: 'Sarah Johnson',
      company: 'TechCorp Solutions',
      role: 'CTO',
      content: 'The AI strategy consultation was incredibly valuable. We now have a clear roadmap for implementing AI across our organization.',
      rating: 5
    },
    {
      name: 'Michael Chen',
      company: 'FinanceFirst',
      role: 'IT Director',
      content: 'Their cloud migration planning saved us months of work and helped us avoid costly mistakes.',
      rating: 5
    },
    {
      name: 'Emily Rodriguez',
      company: 'HealthTech Inc',
      role: 'CEO',
      content: 'The cybersecurity assessment identified critical vulnerabilities we weren\'t aware of. Highly recommended!',
      rating: 5
    }
  ];

  return (
    <>
      <Helmet>
        <title>Consultation - Zion Tech Group | Expert IT Consulting</title>
        <meta name="description" content="Get expert consultation on AI, cloud computing, cybersecurity, and IT strategy. Book a consultation with our experienced team." />
        <meta name="keywords" content="IT consultation, AI consulting, cloud consulting, cybersecurity consulting, technology strategy" />
        <link rel="canonical" href="https://ziontechgroup.com/consultation" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 neural-network-bg matrix-rain">
        {/* Hero Section */}
        <section className="relative py-20 px-4 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(147,51,234,0.3)_0%,transparent_50%)] animate-pulse" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.3)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }} />
          <div className="relative max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 holographic-text cyber-scan-line">
              Expert Consultation
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Get expert guidance on AI, cloud computing, cybersecurity, and digital transformation. 
              Transform your business with strategic technology consulting.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="cyber-button text-center"
              >
                Book Consultation
              </Link>
              <Link
                to="#services"
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-indigo-600 transition-all duration-300"
              >
                View Services
              </Link>
            </div>
          </div>
        </section>

        {/* Consultation Types */}
        <section id="services" className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-8 text-center neon-text">
              Consultation Services
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {consultationTypes.map((consultation) => (
                <div
                  key={consultation.id}
                  className={`quantum-card p-8 hover:scale-105 transition-all duration-300 group relative ${
                    consultation.popular ? 'ring-2 ring-cyan-500' : ''
                  }`}
                >
                  {consultation.popular && (
                    <div className="absolute -top-3 left-6 bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                      Popular
                    </div>
                  )}
                  
                  <div className="text-center mb-6">
                    <div className="w-16 h-16 bg-cyan-500/20 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:bg-cyan-500/30 transition-colors">
                      <consultation.icon className="w-8 h-8 text-cyan-400" />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                      {consultation.title}
                    </h3>
                    <p className="text-gray-300 mb-4">{consultation.description}</p>
                    <div className="flex items-center justify-center space-x-4 mb-4">
                      <div className="flex items-center space-x-1">
                        <Clock className="w-4 h-4 text-gray-400" />
                        <span className="text-gray-300">{consultation.duration}</span>
                      </div>
                      <div className="text-2xl font-bold text-cyan-400">{consultation.price}</div>
                    </div>
                  </div>
                  
                  <ul className="space-y-3 mb-6">
                    {consultation.features.map((feature, index) => (
                      <li key={index} className="flex items-center text-gray-300">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <Link
                    to="/contact"
                    className="w-full block text-center py-3 px-6 rounded-lg font-semibold border-2 border-cyan-500 text-cyan-400 hover:bg-cyan-500 hover:text-white transition-all duration-300 group-hover:translate-y-1"
                  >
                    Book This Consultation
                    <ArrowRight className="w-4 h-4 ml-2 inline" />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Consultation Process */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-8 text-center neon-text">
              Our Consultation Process
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {consultationSteps.map((step) => (
                <div key={step.step} className="cyber-card p-6 text-center hover:scale-105 transition-all duration-300 group">
                  <div className="w-16 h-16 bg-cyan-500/20 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:bg-cyan-500/30 transition-colors">
                    <step.icon className="w-8 h-8 text-cyan-400" />
                  </div>
                  <div className="text-2xl font-bold text-cyan-400 mb-2">Step {step.step}</div>
                  <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                    {step.title}
                  </h3>
                  <p className="text-gray-300 text-sm mb-2">{step.description}</p>
                  <p className="text-cyan-400 text-sm font-medium">{step.duration}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-8 text-center neon-text">
              Why Choose Our Consultation?
            </h2>
            <div className="cyber-card p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                    <span className="text-gray-300">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-8 text-center neon-text">
              What Our Clients Say
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="quantum-card p-6 hover:scale-105 transition-all duration-300 group">
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-300 mb-4 italic">"{testimonial.content}"</p>
                  <div className="border-t border-white/10 pt-4">
                    <p className="text-white font-semibold">{testimonial.name}</p>
                    <p className="text-cyan-400 text-sm">{testimonial.role}</p>
                    <p className="text-gray-400 text-sm">{testimonial.company}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Methods */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-8 text-center neon-text">
              Get in Touch
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="cyber-card p-6 text-center hover:scale-105 transition-all duration-300 group">
                <div className="w-16 h-16 bg-green-500/20 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:bg-green-500/30 transition-colors">
                  <Phone className="w-8 h-8 text-green-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                  Call Us
                </h3>
                <p className="text-gray-300 mb-4">Speak directly with our experts</p>
                <a href="tel:+13024640950" className="text-cyan-400 font-medium hover:text-cyan-300 transition-colors">
                  +1 (302) 464-0950
                </a>
              </div>
              
              <div className="cyber-card p-6 text-center hover:scale-105 transition-all duration-300 group">
                <div className="w-16 h-16 bg-blue-500/20 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-500/30 transition-colors">
                  <Mail className="w-8 h-8 text-blue-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                  Email Us
                </h3>
                <p className="text-gray-300 mb-4">Send us your requirements</p>
                <a href="mailto:kleber@ziontechgroup.com" className="text-cyan-400 font-medium hover:text-cyan-300 transition-colors">
                  kleber@ziontechgroup.com
                </a>
              </div>
              
              <div className="cyber-card p-6 text-center hover:scale-105 transition-all duration-300 group">
                <div className="w-16 h-16 bg-purple-500/20 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:bg-purple-500/30 transition-colors">
                  <Video className="w-8 h-8 text-purple-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                  Video Call
                </h3>
                <p className="text-gray-300 mb-4">Schedule a video consultation</p>
                <Link to="/contact" className="text-cyan-400 font-medium hover:text-cyan-300 transition-colors">
                  Schedule Meeting
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="quantum-card p-12">
              <h2 className="text-4xl font-bold text-white mb-4 holographic-text">
                Ready to Transform Your Business?
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Book a consultation with our experts and discover how we can help you achieve your technology goals.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="cyber-button text-center"
                >
                  Book Free Consultation
                </Link>
                <Link
                  to="/pricing"
                  className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors duration-200"
                >
                  View Pricing
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default ConsultationPage;