'use client';
import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Calendar, Clock, Users, CheckCircle, ArrowRight, Phone, Mail, MessageSquare, Brain, Cloud, Shield, Zap, BarChart, Target, Globe, Database, Settings, Code, FileText, Star, Award, TrendingUp, DollarSign, Heart, Eye, Mic, Cpu, Link, Server, Package, Monitor, Search, Video, Headphones, Scale, Cookie } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const ConsultationPage: React.FC = () => {
  const [selectedConsultation, setSelectedConsultation] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    message: '',
    consultationType: '',
    budget: '',
    timeline: ''
  });

  const consultations = [
    {
      id: 'ai-strategy',
      name: 'AI Strategy Consultation',
      description: 'Comprehensive AI strategy development and implementation planning',
      duration: '2-3 hours',
      price: 'Free',
      features: ['AI readiness assessment', 'Technology roadmap', 'ROI analysis', 'Implementation plan'],
      icon: Brain,
      category: 'AI Services'
    },
    {
      id: 'it-infrastructure',
      name: 'IT Infrastructure Review',
      description: 'Complete assessment of your current IT infrastructure and optimization recommendations',
      duration: '3-4 hours',
      price: 'Free',
      features: ['Infrastructure audit', 'Security assessment', 'Performance analysis', 'Modernization plan'],
      icon: Cloud,
      category: 'IT Services'
    },
    {
      id: 'digital-transformation',
      name: 'Digital Transformation Planning',
      description: 'Strategic digital transformation roadmap and implementation guidance',
      duration: '4-6 hours',
      price: 'Free',
      features: ['Process analysis', 'Technology selection', 'Change management', 'Timeline planning'],
      icon: Zap,
      category: 'Digital Transformation'
    }
  ];

  const process = [
    {
      step: '1',
      title: 'Initial Assessment',
      description: 'We analyze your current systems, challenges, and goals to understand your needs.',
      duration: '30 minutes',
      icon: Search
    },
    {
      step: '2',
      title: 'Strategy Development',
      description: 'Our experts develop a customized strategy and solution recommendations.',
      duration: '1-2 hours',
      icon: Target
    },
    {
      step: '3',
      title: 'Implementation Planning',
      description: 'We create a detailed implementation plan with timelines and milestones.',
      duration: '1 hour',
      icon: Calendar
    },
    {
      step: '4',
      title: 'Ongoing Support',
      description: 'Continuous support and guidance throughout your transformation journey.',
      duration: 'Ongoing',
      icon: Users
    }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <>
      <Helmet>
        <title>Free Consultation - Zion Tech Group</title>
        <meta name="description" content="Get a free consultation with our AI and IT experts. Strategic planning, technology assessment, and digital transformation guidance." />
      </Helmet>
      
      <Navigation />
      
      <main className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-16">
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-6xl mx-auto">
            {/* Header */}
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Free Consultation
              </h1>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Get expert advice on AI implementation, IT strategy, and digital transformation. 
                Our consultation is completely free and tailored to your business needs.
              </p>
            </div>

            {/* Consultation Types */}
            <section className="mb-16">
              <h2 className="text-3xl font-bold text-white mb-12 text-center">Choose Your Consultation Type</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {consultations.map((consultation) => (
                  <div
                    key={consultation.id}
                    className="bg-slate-800/50 rounded-lg p-6 hover:bg-slate-800/70 transition-all duration-300 cursor-pointer group"
                    onClick={() => setSelectedConsultation(consultation)}
                  >
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center mr-4 group-hover:scale-110 transition-transform">
                        <consultation.icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-white">{consultation.name}</h3>
                        <span className="text-sm text-gray-400">{consultation.category}</span>
                      </div>
                    </div>
                    
                    <p className="text-gray-300 mb-4 leading-relaxed">
                      {consultation.description}
                    </p>
                    
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center text-cyan-400">
                        <Clock className="w-4 h-4 mr-2" />
                        <span className="text-sm">{consultation.duration}</span>
                      </div>
                      <div className="text-2xl font-bold text-green-400">{consultation.price}</div>
                    </div>

                    <ul className="space-y-2 mb-6">
                      {consultation.features.map((feature, index) => (
                        <li key={index} className="flex items-center text-sm text-gray-300">
                          <CheckCircle className="w-3 h-3 text-green-400 mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    
                    <button className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300">
                      Select This Consultation
                    </button>
                  </div>
                ))}
              </div>
            </section>

            {/* Process Section */}
            <section className="mb-16">
              <h2 className="text-3xl font-bold text-white mb-12 text-center">Our Consultation Process</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {process.map((step, index) => (
                  <div key={index} className="text-center">
                    <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-2xl font-bold text-white">{step.step}</span>
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2">{step.title}</h3>
                    <p className="text-gray-300 mb-2">{step.description}</p>
                    <div className="flex items-center justify-center text-cyan-400">
                      <Clock className="w-4 h-4 mr-2" />
                      <span className="text-sm">{step.duration}</span>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Contact Form */}
            <section className="mb-16">
              <div className="bg-slate-800/50 rounded-lg p-8">
                <h2 className="text-3xl font-bold text-white mb-8 text-center">Schedule Your Free Consultation</h2>
                <form onSubmit={handleSubmit} className="max-w-2xl mx-auto">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <label className="block text-white mb-2">Name *</label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 bg-slate-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                        placeholder="Your full name"
                      />
                    </div>
                    <div>
                      <label className="block text-white mb-2">Email *</label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 bg-slate-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                        placeholder="your.email@company.com"
                      />
                    </div>
                    <div>
                      <label className="block text-white mb-2">Company</label>
                      <input
                        type="text"
                        name="company"
                        value={formData.company}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-slate-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                        placeholder="Your company name"
                      />
                    </div>
                    <div>
                      <label className="block text-white mb-2">Phone</label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-slate-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                        placeholder="+1 (555) 123-4567"
                      />
                    </div>
                    <div>
                      <label className="block text-white mb-2">Consultation Type</label>
                      <select
                        name="consultationType"
                        value={formData.consultationType}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-slate-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                      >
                        <option value="">Select consultation type</option>
                        <option value="ai-strategy">AI Strategy Consultation</option>
                        <option value="it-infrastructure">IT Infrastructure Review</option>
                        <option value="digital-transformation">Digital Transformation Planning</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-white mb-2">Budget Range</label>
                      <select
                        name="budget"
                        value={formData.budget}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-slate-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                      >
                        <option value="">Select budget range</option>
                        <option value="under-10k">Under $10,000</option>
                        <option value="10k-50k">$10,000 - $50,000</option>
                        <option value="50k-100k">$50,000 - $100,000</option>
                        <option value="100k-plus">$100,000+</option>
                      </select>
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    <label className="block text-white mb-2">Message</label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      rows={4}
                      className="w-full px-4 py-3 bg-slate-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                      placeholder="Tell us about your project, challenges, and goals..."
                    />
                  </div>
                  
                  <div className="text-center">
                    <button
                      type="submit"
                      className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300"
                    >
                      Schedule Free Consultation
                    </button>
                  </div>
                </form>
              </div>
            </section>

            {/* Contact Information */}
            <section className="text-center">
              <div className="bg-slate-800/50 rounded-lg p-8">
                <h2 className="text-2xl font-bold text-white mb-6">Ready to Get Started?</h2>
                <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
                  Contact us directly for immediate assistance or to discuss your specific needs.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a
                    href="tel:+13024640950"
                    className="flex items-center justify-center space-x-2 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300"
                  >
                    <Phone className="w-5 h-5" />
                    <span>Call: (302) 464-0950</span>
                  </a>
                  <a
                    href="mailto:kleber@ziontechgroup.com"
                    className="flex items-center justify-center space-x-2 border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900 px-8 py-3 rounded-lg font-semibold transition-all duration-300"
                  >
                    <Mail className="w-5 h-5" />
                    <span>Email Us</span>
                  </a>
                </div>
              </div>
            </section>
          </div>
        </div>
      </main>
      
      <Footer />
    </>
  );
};

export default ConsultationPage;
