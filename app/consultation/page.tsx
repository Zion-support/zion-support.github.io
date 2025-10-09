'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import { CheckCircle, ArrowRight, Phone, Mail, Calendar, Clock, Users, Brain, Cloud, Shield, Zap, Star, Award } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const ConsultationPage: React.FC = () => {
  const [selectedService, setSelectedService] = useState('ai-strategy');

  const services = [
    {
      id: 'ai-strategy',
      title: 'AI Strategy Consultation',
      description: 'Develop a comprehensive AI roadmap for your business',
      duration: '60 minutes',
      icon: Brain,
      features: [
        'AI readiness assessment',
        'Technology roadmap',
        'ROI projections',
        'Implementation timeline'
      ]
    },
    {
      id: 'it-optimization',
      title: 'IT Infrastructure Review',
      description: 'Optimize your current IT infrastructure and systems',
      duration: '45 minutes',
      icon: Cloud,
      features: [
        'Infrastructure audit',
        'Performance analysis',
        'Security assessment',
        'Cost optimization'
      ]
    },
    {
      id: 'digital-transformation',
      title: 'Digital Transformation',
      description: 'Plan your complete digital transformation journey',
      duration: '90 minutes',
      icon: Zap,
      features: [
        'Current state analysis',
        'Future state vision',
        'Change management plan',
        'Technology selection'
      ]
    },
    {
      id: 'security-audit',
      title: 'Cybersecurity Assessment',
      description: 'Evaluate and strengthen your security posture',
      duration: '75 minutes',
      icon: Shield,
      features: [
        'Vulnerability assessment',
        'Compliance review',
        'Security recommendations',
        'Incident response planning'
      ]
    }
  ];

  const benefits = [
    {
      icon: CheckCircle,
      title: 'Free Consultation',
      description: 'No cost, no obligation assessment'
    },
    {
      icon: Users,
      title: 'Expert Team',
      description: 'Work with certified professionals'
    },
    {
      icon: Clock,
      title: 'Quick Response',
      description: 'Schedule within 24 hours'
    },
    {
      icon: Award,
      title: 'Actionable Insights',
      description: 'Get a detailed report with recommendations'
    }
  ];

  const testimonials = [
    {
      name: 'Sarah Johnson',
      company: 'TechCorp Inc.',
      role: 'CTO',
      content: 'The AI strategy consultation helped us identify opportunities we never knew existed. ROI increased by 300% in 6 months.',
      rating: 5
    },
    {
      name: 'Michael Chen',
      company: 'DataFlow Systems',
      role: 'CEO',
      content: 'Their IT optimization review saved us $50K annually while improving performance. Highly recommended!',
      rating: 5
    },
    {
      name: 'Emily Rodriguez',
      company: 'SecureNet LLC',
      role: 'Security Director',
      content: 'The cybersecurity assessment was thorough and helped us achieve compliance. Our security posture is now enterprise-grade.',
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 neon-text">
            Free Consultation
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Get expert advice on your AI and IT challenges. Our free consultation will help you identify opportunities and create a roadmap for success.
          </p>
          <div className="flex items-center justify-center space-x-4 text-cyan-400">
            <CheckCircle className="w-5 h-5" />
            <span>100% Free & No Obligation</span>
            <Clock className="w-5 h-5 ml-4" />
            <span>Schedule in 24 hours</span>
          </div>
        </div>
      </section>

      {/* Service Selection */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">Choose Your Consultation Type</h2>
            <p className="text-gray-300 text-xl">Select the area where you need expert guidance</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {services.map((service) => (
              <div
                key={service.id}
                onClick={() => setSelectedService(service.id)}
                className={`cursor-pointer p-6 rounded-xl border-2 transition-all duration-300 ${
                  selectedService === service.id
                    ? 'border-cyan-500 bg-cyan-500/10'
                    : 'border-gray-700 bg-slate-800/50 hover:border-cyan-400'
                }`}
              >
                <service.icon className="w-8 h-8 text-cyan-400 mb-4" />
                <h3 className="text-lg font-semibold text-white mb-2">{service.title}</h3>
                <p className="text-gray-300 text-sm mb-3">{service.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-cyan-400 text-sm font-medium">Free</span>
                  <span className="text-gray-400 text-sm">{service.duration}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Selected Service Details */}
          {selectedService && (
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-cyan-500/20">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-2xl font-bold text-white mb-4">
                    {services.find(s => s.id === selectedService)?.title}
                  </h3>
                  <p className="text-gray-300 mb-6">
                    {services.find(s => s.id === selectedService)?.description}
                  </p>
                  <div className="space-y-3">
                    <h4 className="text-lg font-semibold text-white">What you'll get:</h4>
                    <ul className="space-y-2">
                      {services.find(s => s.id === selectedService)?.features.map((feature, index) => (
                        <li key={index} className="flex items-center text-gray-300">
                          <CheckCircle className="w-4 h-4 text-cyan-400 mr-3" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className="bg-gradient-to-br from-cyan-500/10 to-blue-600/10 rounded-xl p-6">
                  <h4 className="text-lg font-semibold text-white mb-4">Consultation Details</h4>
                  <div className="space-y-4">
                    <div className="flex items-center">
                      <Clock className="w-5 h-5 text-cyan-400 mr-3" />
                      <span className="text-gray-300">
                        Duration: {services.find(s => s.id === selectedService)?.duration}
                      </span>
                    </div>
                    <div className="flex items-center">
                      <Users className="w-5 h-5 text-cyan-400 mr-3" />
                      <span className="text-gray-300">Up to 5 participants</span>
                    </div>
                    <div className="flex items-center">
                      <Calendar className="w-5 h-5 text-cyan-400 mr-3" />
                      <span className="text-gray-300">Available weekdays 9AM-6PM EST</span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-cyan-400 mr-3" />
                      <span className="text-gray-300">Follow-up report included</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 px-4 bg-slate-800/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">Why Choose Our Consultation?</h2>
            <p className="text-gray-300 text-xl">Get the most value from your free consultation</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-cyan-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <benefit.icon className="w-8 h-8 text-cyan-400" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{benefit.title}</h3>
                <p className="text-gray-300">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">What Our Clients Say</h2>
            <p className="text-gray-300 text-xl">Real results from real consultations</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-300 mb-4 italic">"{testimonial.content}"</p>
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
      <section className="py-16 px-4 bg-gradient-to-r from-purple-600/20 to-blue-600/20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Ready to Get Started?</h2>
          <p className="text-xl text-gray-300 mb-8">
            Schedule your free consultation today and take the first step towards transforming your business.
          </p>
          
          <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-cyan-500/20">
            <h3 className="text-2xl font-bold text-white mb-6">Schedule Your Free Consultation</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Link
                href="/contact"
                className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 inline-flex items-center justify-center"
              >
                <Calendar className="w-5 h-5 mr-2" />
                Schedule Online
              </Link>
              <Link
                href="tel:+13024640950"
                className="bg-slate-700 text-white px-8 py-4 rounded-lg font-semibold hover:bg-cyan-600 transition-all duration-300 inline-flex items-center justify-center"
              >
                <Phone className="w-5 h-5 mr-2" />
                Call (302) 464-0950
              </Link>
              <Link
                href="mailto:kleber@ziontechgroup.com"
                className="bg-slate-700 text-white px-8 py-4 rounded-lg font-semibold hover:bg-cyan-600 transition-all duration-300 inline-flex items-center justify-center"
              >
                <Mail className="w-5 h-5 mr-2" />
                Email Us
              </Link>
            </div>
          </div>

          <div className="mt-8 text-gray-400">
            <p>Questions? Contact us at <a href="mailto:kleber@ziontechgroup.com" className="text-cyan-400 hover:text-cyan-300">kleber@ziontechgroup.com</a></p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ConsultationPage;
