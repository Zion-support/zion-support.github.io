'use client';

import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Calendar, Phone, Mail, CheckCircle, ArrowRight, Star, Users, Clock, Shield, Brain, Cloud, Zap, Globe, Settings, Database, Eye, Sparkles, BookOpen, FileText, Download, BarChart, Target, TrendingUp, Award } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import SEOOptimizer from '../components/SEOOptimizer';

const ConsultationPage: React.FC = () => {
  const [selectedService, setSelectedService] = useState('ai-services');
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);

  const services = [
    {
      id: 'ai-services',
      title: 'AI Strategy Consultation',
      description: 'Get expert advice on implementing AI solutions in your business',
      duration: '1-2 hours',
      price: 'Free',
      icon: Brain,
      features: ['AI Readiness Assessment', 'Use Case Identification', 'Implementation Roadmap', 'ROI Analysis']
    },
    {
      id: 'cloud-migration',
      title: 'Cloud Migration Planning',
      description: 'Plan your cloud migration strategy with our cloud experts',
      duration: '2-3 hours',
      price: 'Free',
      icon: Cloud,
      features: ['Current State Analysis', 'Migration Strategy', 'Cost Optimization', 'Security Planning']
    },
    {
      id: 'data-analytics',
      title: 'Data Analytics Strategy',
      description: 'Transform your data into actionable business insights',
      duration: '1-2 hours',
      price: 'Free',
      icon: BarChart,
      features: ['Data Assessment', 'Analytics Roadmap', 'Tool Recommendations', 'Implementation Plan']
    },
    {
      id: 'technology-audit',
      title: 'Technology Audit',
      description: 'Review your current technology stack and recommend optimizations',
      duration: '2-4 hours',
      price: 'Free',
      icon: Settings,
      features: ['Infrastructure Review', 'Security Assessment', 'Performance Analysis', 'Optimization Plan']
    }
  ];

  const benefits = [
    {
      icon: Users,
      title: 'Expert Guidance',
      description: 'Get advice from certified professionals with years of experience.'
    },
    {
      icon: Target,
      title: 'Customized Solutions',
      description: 'Tailored recommendations based on your specific business needs.'
    },
    {
      icon: Clock,
      title: 'Quick Turnaround',
      description: 'Get actionable insights and recommendations within days.'
    },
    {
      icon: Shield,
      title: 'No Obligation',
      description: 'Free consultations with no commitment to purchase our services.'
    }
  ];

  const process = [
    {
      step: 1,
      title: 'Initial Contact',
      description: 'Reach out to us through phone, email, or our contact form.',
      icon: Phone
    },
    {
      step: 2,
      title: 'Discovery Call',
      description: 'We discuss your business goals, challenges, and requirements.',
      icon: Users
    },
    {
      step: 3,
      title: 'Analysis & Planning',
      description: 'Our experts analyze your situation and create a customized plan.',
      icon: Brain
    },
    {
      step: 4,
      title: 'Presentation',
      description: 'We present our findings and recommendations in a detailed report.',
      icon: FileText
    }
  ];

  const testimonials = [
    {
      name: 'Sarah Johnson',
      company: 'TechCorp',
      role: 'CEO',
      content: 'The AI consultation opened our eyes to possibilities we never considered. The team was incredibly knowledgeable and helpful.',
      rating: 5
    },
    {
      name: 'Michael Chen',
      company: 'DataFlow Inc',
      role: 'CTO',
      content: 'The cloud migration consultation saved us months of planning. Their expertise and recommendations were spot-on.',
      rating: 5
    },
    {
      name: 'Emily Rodriguez',
      company: 'InnovateLabs',
      role: 'Product Manager',
      content: 'The data analytics consultation helped us understand how to leverage our data effectively. Highly recommended!',
      rating: 5
    }
  ];

  const selectedServiceData = services.find(service => service.id === selectedService);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <SEOOptimizer 
        title="Free Consultation - Expert AI & Technology Advice | Zion Tech Group"
        description="Get expert consultation on AI, cloud, data analytics, and technology solutions. Free consultations with no obligation. Schedule your session today."
        keywords="free consultation, AI consultation, technology consultation, expert advice, cloud migration, data analytics, technology audit"
      />
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(147,51,234,0.3)_0%,transparent_50%)] animate-pulse" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.3)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="relative max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Free
            <span className="block bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Consultation
            </span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            Get expert advice on AI, cloud, data analytics, and technology solutions. 
            Our certified professionals are here to help you make informed decisions.
          </p>
        </div>
      </section>

      {/* Service Selection */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Choose Your Consultation</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Select the type of consultation that best fits your needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service) => (
              <div
                key={service.id}
                onClick={() => setSelectedService(service.id)}
                className={`bg-white/5 backdrop-blur-lg rounded-xl p-6 border cursor-pointer transition-all duration-300 ${
                  selectedService === service.id
                    ? 'border-purple-500 bg-white/10'
                    : 'border-white/10 hover:bg-white/10'
                }`}
              >
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-lg flex items-center justify-center mr-4">
                    <service.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white">{service.title}</h3>
                    <div className="text-sm text-cyan-400">{service.price}</div>
                  </div>
                </div>
                
                <p className="text-gray-300 mb-4 text-sm">{service.description}</p>
                
                <div className="flex items-center justify-between text-sm text-gray-400">
                  <div className="flex items-center">
                    <Clock className="w-4 h-4 mr-2" />
                    <span>{service.duration}</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className={`w-4 h-4 mr-1 ${
                      selectedService === service.id ? 'text-purple-400' : 'text-gray-500'
                    }`} />
                    <span className={selectedService === service.id ? 'text-purple-400' : 'text-gray-500'}>
                      {selectedService === service.id ? 'Selected' : 'Select'}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Selected Service Details */}
      {selectedServiceData && (
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                <div>
                  <div className="flex items-center mb-6">
                    <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-lg flex items-center justify-center mr-6">
                      <selectedServiceData.icon className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <h3 className="text-3xl font-bold text-white">{selectedServiceData.title}</h3>
                      <div className="text-cyan-400 font-medium">{selectedServiceData.price} • {selectedServiceData.duration}</div>
                    </div>
                  </div>
                  
                  <p className="text-xl text-gray-300 mb-6 leading-relaxed">
                    {selectedServiceData.description}
                  </p>
                  
                  <div className="space-y-4 mb-8">
                    <h4 className="text-lg font-semibold text-white">What's Included:</h4>
                    {selectedServiceData.features.map((feature, index) => (
                      <div key={index} className="flex items-center">
                        <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                        <span className="text-gray-300">{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <button
                    onClick={() => setIsBookingModalOpen(true)}
                    className="w-full bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center group"
                  >
                    <Calendar className="w-5 h-5 mr-2" />
                    Schedule Consultation
                    <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
                
                <div className="bg-gradient-to-br from-purple-500/20 to-blue-500/20 rounded-xl p-8 border border-white/10">
                  <h4 className="text-2xl font-bold text-white mb-6">Why Choose Our Consultation?</h4>
                  <div className="space-y-6">
                    {benefits.map((benefit, index) => (
                      <div key={index} className="flex items-start">
                        <div className="w-10 h-10 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                          <benefit.icon className="w-5 h-5 text-white" />
                        </div>
                        <div>
                          <h5 className="text-lg font-semibold text-white mb-2">{benefit.title}</h5>
                          <p className="text-gray-300">{benefit.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Process Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Our Process</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Simple steps to get the expert advice you need.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-6">
                  <step.icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-2xl font-bold text-white mb-2">Step {step.step}</div>
                <h3 className="text-xl font-semibold text-white mb-3">{step.title}</h3>
                <p className="text-gray-300">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">What Clients Say</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Hear from clients who benefited from our consultations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-white/5 backdrop-blur-lg rounded-xl p-6 border border-white/10"
              >
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-300 mb-6 italic">"{testimonial.content}"</p>
                <div>
                  <div className="font-semibold text-white">{testimonial.name}</div>
                  <div className="text-cyan-400 text-sm">{testimonial.role}, {testimonial.company}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-8 md:p-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Get Expert Advice?
            </h2>
            <p className="text-xl text-purple-100 mb-8">
              Schedule your free consultation today and get personalized recommendations from our experts.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => setIsBookingModalOpen(true)}
                className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 flex items-center justify-center"
              >
                <Calendar className="mr-2 h-5 w-5" />
                Schedule Now
              </button>
              <button className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-all duration-300 flex items-center justify-center">
                <Phone className="mr-2 h-5 w-5" />
                Call Us
              </button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ConsultationPage;