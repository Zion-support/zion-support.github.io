'use client';

import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { 
  Calendar, 
  Phone, 
  Mail, 
  CheckCircle, 
  ArrowRight, 
  Star, 
  Users, 
  Clock, 
  Shield, 
  Brain, 
  Cloud, 
  Zap,
  MessageSquare,
  Award,
  Target,
  Sparkles
} from 'lucide-react';

export default function ConsultationPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    service: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  const consultationTypes = [
    {
      title: 'AI Strategy Consultation',
      description: 'Get expert advice on implementing AI solutions in your business',
      duration: '60 minutes',
      price: '$299',
      icon: Brain,
      color: 'text-purple-400',
      bgColor: 'bg-purple-500/10'
    },
    {
      title: 'IT Infrastructure Review',
      description: 'Comprehensive analysis of your current IT setup and recommendations',
      duration: '90 minutes',
      price: '$399',
      icon: Cloud,
      color: 'text-blue-400',
      bgColor: 'bg-blue-500/10'
    },
    {
      title: 'Digital Transformation Planning',
      description: 'Strategic roadmap for your digital transformation journey',
      duration: '120 minutes',
      price: '$599',
      icon: Zap,
      color: 'text-orange-400',
      bgColor: 'bg-orange-500/10'
    }
  ];

  const benefits = [
    {
      title: 'Expert Analysis',
      description: 'Get insights from our certified AI and IT experts',
      icon: Award
    },
    {
      title: 'Customized Solutions',
      description: 'Tailored recommendations based on your specific needs',
      icon: Target
    },
    {
      title: 'Implementation Roadmap',
      description: 'Clear step-by-step plan for your technology adoption',
      icon: CheckCircle
    },
    {
      title: 'Ongoing Support',
      description: 'Continued guidance throughout your transformation journey',
      icon: Shield
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Free Consultation - AI & IT Experts | Zion Tech Group</title>
        <meta 
          name="description" 
          content="Get a free consultation with our AI and IT experts. Strategic planning, technology assessment, and implementation roadmap for your business transformation." 
        />
        <meta 
          name="keywords" 
          content="AI consultation, IT consultation, digital transformation, technology strategy, business consulting, free consultation" 
        />
      </Helmet>

      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(139,92,246,0.1)_0%,transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(0,255,255,0.1)_0%,transparent_50%)]" />
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-300 text-sm font-medium mb-6">
              <Sparkles className="w-4 h-4 mr-2" />
              Free Expert Consultation
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              Get Expert
              <span className="block bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">
                Consultation
              </span>
            </h1>
            
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              Schedule a free consultation with our AI and IT experts. Get strategic insights, 
              technology recommendations, and a clear roadmap for your business transformation.
            </p>
          </div>
        </div>
      </section>

      {/* Consultation Types */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">
              Choose Your
              <span className="block bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                Consultation Type
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Select the consultation that best fits your needs and get expert guidance 
              from our certified professionals.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {consultationTypes.map((type, index) => (
              <div key={index} className="group bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-2xl p-8 hover:border-purple-500/50 transition-all duration-300 hover:transform hover:scale-105">
                <div className="flex items-center justify-between mb-6">
                  <div className={`w-12 h-12 ${type.bgColor} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                    <type.icon className={`w-6 h-6 ${type.color}`} />
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-white">{type.price}</div>
                    <div className="text-gray-400 text-sm">{type.duration}</div>
                  </div>
                </div>
                
                <h3 className="text-xl font-bold text-white mb-3">{type.title}</h3>
                <p className="text-gray-300 mb-6 leading-relaxed">{type.description}</p>
                
                <button className="w-full bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-700 hover:to-cyan-700 text-white font-bold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105">
                  Book Now
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">
              Why Choose Our
              <span className="block bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                Consultation?
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our expert consultants provide valuable insights and strategic guidance 
              to help you make informed technology decisions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center group">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <benefit.icon className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-xl font-bold text-white mb-3">{benefit.title}</h3>
                <p className="text-gray-300 leading-relaxed">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">
              Schedule Your
              <span className="block bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                Free Consultation
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Fill out the form below and our team will contact you within 24 hours 
              to schedule your consultation.
            </p>
          </div>

          <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-2xl p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-purple-400 focus:ring-2 focus:ring-purple-400/20 transition-all duration-300"
                    placeholder="Enter your full name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-purple-400 focus:ring-2 focus:ring-purple-400/20 transition-all duration-300"
                    placeholder="Enter your email"
                  />
                </div>

                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-gray-300 mb-2">
                    Company Name
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-purple-400 focus:ring-2 focus:ring-purple-400/20 transition-all duration-300"
                    placeholder="Enter your company name"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-purple-400 focus:ring-2 focus:ring-purple-400/20 transition-all duration-300"
                    placeholder="Enter your phone number"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="service" className="block text-sm font-medium text-gray-300 mb-2">
                  Service Interest
                </label>
                <select
                  id="service"
                  name="service"
                  value={formData.service}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white focus:outline-none focus:border-purple-400 focus:ring-2 focus:ring-purple-400/20 transition-all duration-300"
                >
                  <option value="">Select a service</option>
                  <option value="ai-strategy">AI Strategy Consultation</option>
                  <option value="it-infrastructure">IT Infrastructure Review</option>
                  <option value="digital-transformation">Digital Transformation Planning</option>
                  <option value="custom">Custom Consultation</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={4}
                  className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-purple-400 focus:ring-2 focus:ring-purple-400/20 transition-all duration-300"
                  placeholder="Tell us about your project and specific needs..."
                />
              </div>

              <div className="text-center">
                <button
                  type="submit"
                  className="group bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-700 hover:to-cyan-700 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-purple-500/25 flex items-center mx-auto"
                >
                  <MessageSquare className="w-5 h-5 mr-2" />
                  Schedule Consultation
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Contact Info Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-8">
            Ready to Get Started?
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex items-center justify-center space-x-3">
              <Phone className="w-6 h-6 text-purple-400" />
              <div>
                <div className="text-white font-semibold">Call Us</div>
                <div className="text-gray-300">+1 (302) 464-0950</div>
              </div>
            </div>
            
            <div className="flex items-center justify-center space-x-3">
              <Mail className="w-6 h-6 text-purple-400" />
              <div>
                <div className="text-white font-semibold">Email Us</div>
                <div className="text-gray-300">kleber@ziontechgroup.com</div>
              </div>
            </div>
            
            <div className="flex items-center justify-center space-x-3">
              <Calendar className="w-6 h-6 text-purple-400" />
              <div>
                <div className="text-white font-semibold">Schedule</div>
                <div className="text-gray-300">Book Online</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}