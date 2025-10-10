'use client';
import React, { useState } from 'react';
import { Calendar, Phone, Mail, CheckCircle, ArrowRight, Star, Users, Clock, Shield, Brain, Cloud, Zap, Globe, Settings, Database, Eye, Sparkles, BookOpen, FileText, Download } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const ConsultationPage: React.FC = () => {
  const [selectedService, setSelectedService] = useState('ai-services');

  const services = [
    {
      id: 'ai-services',
      title: 'AI Services Consultation',
      description: 'Get expert advice on AI implementation, strategy, and optimization',
      icon: Brain,
      duration: '60 minutes',
      price: 'Free',
      features: [
        'AI Strategy Assessment',
        'Technology Recommendations',
        'Implementation Roadmap',
        'ROI Analysis'
      ]
    },
    {
      id: 'cloud-migration',
      title: 'Cloud Migration Consultation',
      description: 'Expert guidance on migrating your infrastructure to the cloud',
      icon: Cloud,
      duration: '90 minutes',
      price: 'Free',
      features: [
        'Migration Strategy',
        'Cost Optimization',
        'Security Assessment',
        'Timeline Planning'
      ]
    },
    {
      id: 'data-analytics',
      title: 'Data Analytics Consultation',
      description: 'Transform your data into actionable business insights',
      icon: Database,
      duration: '75 minutes',
      price: 'Free',
      features: [
        'Data Assessment',
        'Analytics Strategy',
        'Tool Recommendations',
        'Implementation Plan'
      ]
    },
    {
      id: 'security-audit',
      title: 'Security Audit Consultation',
      description: 'Comprehensive security assessment and recommendations',
      icon: Shield,
      duration: '120 minutes',
      price: 'Free',
      features: [
        'Security Assessment',
        'Vulnerability Analysis',
        'Compliance Review',
        'Remediation Plan'
      ]
    }
  ];

  const benefits = [
    'Expert guidance from industry professionals',
    'Personalized recommendations for your business',
    'No obligation or commitment required',
    'Actionable insights and next steps',
    'Free of charge consultation',
    'Follow-up support available'
  ];

  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'CTO, TechCorp',
      quote: 'The AI consultation was incredibly valuable. We got clear direction on our AI strategy and saved months of research.',
      rating: 5
    },
    {
      name: 'Michael Chen',
      role: 'VP Engineering, DataFlow',
      quote: 'The cloud migration consultation helped us avoid costly mistakes and optimize our infrastructure costs.',
      rating: 5
    },
    {
      name: 'Emily Rodriguez',
      role: 'Director of Operations, InnovateLabs',
      quote: 'The security audit consultation identified critical vulnerabilities we weren\'t aware of. Highly recommended!',
      rating: 5
    }
  ];

  const stats = [
    { number: '500+', label: 'Consultations Completed', icon: Users },
    { number: '98%', label: 'Client Satisfaction', icon: Star },
    { number: '60min', label: 'Average Duration', icon: Clock },
    { number: '24/7', label: 'Available', icon: Shield }
  ];

  const selectedServiceData = services.find(service => service.id === selectedService);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
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
            Get expert advice from our team of professionals. Book a free consultation to discuss your project 
            and discover how we can help you achieve your goals.
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="flex justify-center mb-4">
                  <stat.icon className="w-12 h-12 text-purple-400" />
                </div>
                <div className="text-3xl font-bold text-white mb-2">{stat.number}</div>
                <div className="text-gray-300 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Selection */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Choose Your Consultation</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Select the type of consultation that best matches your needs and business requirements.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {services.map((service) => (
              <div
                key={service.id}
                onClick={() => setSelectedService(service.id)}
                className={`cursor-pointer rounded-xl p-6 transition-all duration-300 ${
                  selectedService === service.id
                    ? 'bg-purple-500/20 border-2 border-purple-400'
                    : 'bg-white/5 border border-white/10 hover:bg-white/10'
                }`}
              >
                <div className="flex items-center mb-4">
                  <service.icon className="w-8 h-8 text-purple-400 mr-3" />
                  <h3 className="text-lg font-semibold text-white">{service.title}</h3>
                </div>
                <p className="text-gray-300 text-sm mb-4">{service.description}</p>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-400">{service.duration}</span>
                  <span className="text-purple-400 font-semibold">{service.price}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Selected Service Details */}
          {selectedServiceData && (
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-2xl font-bold text-white mb-4">{selectedServiceData.title}</h3>
                  <p className="text-gray-300 mb-6">{selectedServiceData.description}</p>
                  
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-white mb-3">What's Included:</h4>
                    <ul className="space-y-2">
                      {selectedServiceData.features.map((feature, index) => (
                        <li key={index} className="flex items-center text-gray-300">
                          <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex items-center text-gray-300 mb-4">
                    <Clock className="w-5 h-5 mr-2" />
                    Duration: {selectedServiceData.duration}
                  </div>
                  <div className="flex items-center text-gray-300">
                    <span className="text-2xl font-bold text-purple-400">{selectedServiceData.price}</span>
                  </div>
                </div>

                <div className="bg-white/5 rounded-xl p-6">
                  <h4 className="text-lg font-semibold text-white mb-4">Book Your Consultation</h4>
                  <form className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                        placeholder="Your full name"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                        placeholder="your.email@example.com"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        Company
                      </label>
                      <input
                        type="text"
                        className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                        placeholder="Your company name"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                        placeholder="+1 (555) 123-4567"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        Preferred Date
                      </label>
                      <input
                        type="date"
                        className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        Message (Optional)
                      </label>
                      <textarea
                        rows={3}
                        className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent resize-none"
                        placeholder="Tell us about your project or specific questions..."
                      />
                    </div>
                    <button
                      type="submit"
                      className="w-full bg-gradient-to-r from-purple-500 to-blue-600 hover:from-purple-600 hover:to-blue-700 text-white font-bold py-3 px-6 rounded-lg transition-all duration-300"
                    >
                      Book Free Consultation
                      <Calendar className="inline-block ml-2 w-5 h-5" />
                    </button>
                  </form>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-white mb-6">Why Choose Our Consultation?</h2>
              <p className="text-xl text-gray-300 mb-8">
                Our expert consultants bring years of industry experience and deep technical knowledge 
                to help you make informed decisions about your technology investments.
              </p>
              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start">
                    <CheckCircle className="w-6 h-6 text-green-400 mr-3 mt-1" />
                    <span className="text-gray-300">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-8">
              <h3 className="text-2xl font-bold text-white mb-6">Ready to Get Started?</h3>
              <p className="text-gray-300 mb-6">
                Book your free consultation today and take the first step towards transforming your business.
              </p>
              <div className="space-y-4">
                <button className="w-full bg-gradient-to-r from-purple-500 to-blue-600 hover:from-purple-600 hover:to-blue-700 text-white font-bold py-3 px-6 rounded-lg transition-all duration-300">
                  Book Now
                </button>
                <button className="w-full border border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white font-bold py-3 px-6 rounded-lg transition-all duration-300">
                  Contact Us
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">What Our Clients Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-300 italic mb-4">"{testimonial.quote}"</p>
                <div>
                  <div className="text-white font-semibold">{testimonial.name}</div>
                  <div className="text-gray-400 text-sm">{testimonial.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Book your free consultation today and discover how our expert guidance can help you achieve your goals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-purple-500 to-blue-600 hover:from-purple-600 hover:to-blue-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">
              Book Free Consultation
              <Calendar className="inline-block ml-2 w-5 h-5" />
            </button>
            <button className="border border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300">
              Contact Us
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ConsultationPage;