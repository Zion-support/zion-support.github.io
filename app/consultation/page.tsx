'use client';
import React, { useState } from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import SEOOptimizer from '../components/SEOOptimizer';
import { User, Mail, Phone, Building, MessageSquare, CheckCircle, Star, ArrowRight, Brain, Zap, Cloud, Code, Shield, Clock, Award } from 'lucide-react';

const ConsultationPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    role: '',
    companySize: '',
    currentChallenges: '',
    goals: '',
    timeline: '',
    budget: '',
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
    const subject = `Free Consultation Request from ${formData.name}`;
    const body = `Name: ${formData.name}
Email: ${formData.email}
Company: ${formData.company}
Phone: ${formData.phone}
Role: ${formData.role}
Company Size: ${formData.companySize}
Current Challenges: ${formData.currentChallenges}
Goals: ${formData.goals}
Timeline: ${formData.timeline}
Budget: ${formData.budget}
Message: ${formData.message}`;
    
    window.location.href = `mailto:kleber@ziontechgroup.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  const consultationTypes = [
    {
      title: 'AI Strategy Consultation',
      description: 'Develop a comprehensive AI strategy for your business',
      icon: Brain,
      duration: '60 minutes',
      includes: [
        'AI readiness assessment',
        'Technology roadmap',
        'ROI projections',
        'Implementation timeline'
      ]
    },
    {
      title: 'IT Infrastructure Review',
      description: 'Evaluate and optimize your current IT infrastructure',
      icon: Cloud,
      duration: '90 minutes',
      includes: [
        'Infrastructure audit',
        'Security assessment',
        'Performance optimization',
        'Cloud migration strategy'
      ]
    },
    {
      title: 'Digital Transformation Planning',
      description: 'Plan your complete digital transformation journey',
      icon: Zap,
      duration: '120 minutes',
      includes: [
        'Current state analysis',
        'Future state vision',
        'Gap analysis',
        'Transformation roadmap'
      ]
    }
  ];

  const benefits = [
    {
      icon: Clock,
      title: 'No Obligation',
      description: 'Free consultation with no strings attached'
    },
    {
      icon: Award,
      title: 'Expert Insights',
      description: 'Get advice from certified AI and IT professionals'
    },
    {
      icon: Star,
      title: 'Customized Solutions',
      description: 'Tailored recommendations for your specific needs'
    },
    {
      icon: ArrowRight,
      title: 'Clear Action Plan',
      description: 'Leave with a concrete roadmap for implementation'
    }
  ];

  return (
    <>
      <SEOOptimizer
        title="Free Consultation - Zion Tech Group"
        description="Get a free consultation with our AI and IT experts. Discover how to transform your business with cutting-edge technology solutions."
        keywords={['free consultation', 'AI consultation', 'IT consultation', 'business technology advice']}
        canonicalUrl="https://ziontechgroup.com/consultation"
      />
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <Navigation />
        <main className="pt-16">
          {/* Hero Section */}
          <section className="container mx-auto px-4 py-16 text-center">
            <div className="max-w-4xl mx-auto">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 neon-text">
                Free Expert Consultation
              </h1>
              <p className="text-xl md:text-2xl text-cyan-400 mb-8">
                Get personalized advice from our AI and IT experts. Discover how to transform your business with the right technology solutions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="#consultation-form"
                  className="cyber-button inline-flex items-center text-lg px-8 py-4"
                >
                  <MessageSquare className="w-5 h-5 mr-2" />
                  Book Free Consultation
                </a>
                <a
                  href="tel:+13024640950"
                  className="cyber-button-outline inline-flex items-center text-lg px-8 py-4"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Call (302) 464-0950
                </a>
              </div>
            </div>
          </section>

          {/* Consultation Types */}
          <section className="container mx-auto px-4 py-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12 neon-text">
              Choose Your Consultation Type
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {consultationTypes.map((type, index) => (
                <div key={index} className="cyber-card p-8">
                  <type.icon className="w-12 h-12 text-cyan-400 mb-4" />
                  <h3 className="text-2xl font-bold text-white mb-3">{type.title}</h3>
                  <p className="text-gray-400 mb-4">{type.description}</p>
                  <div className="flex items-center text-cyan-400 mb-6">
                    <Clock className="w-4 h-4 mr-2" />
                    <span className="font-medium">{type.duration}</span>
                  </div>
                  <h4 className="text-lg font-semibold text-white mb-3">What's Included:</h4>
                  <ul className="space-y-2 mb-6">
                    {type.includes.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-center">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                        <span className="text-gray-300 text-sm">{item}</span>
                      </li>
                    ))}
                  </ul>
                  <a
                    href="#consultation-form"
                    className="cyber-button w-full text-center block"
                  >
                    Book This Consultation
                  </a>
                </div>
              ))}
            </div>
          </section>

          {/* Benefits Section */}
          <section className="container mx-auto px-4 py-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12 neon-text">
              Why Choose Our Consultation?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
              {benefits.map((benefit, index) => (
                <div key={index} className="cyber-card p-6 text-center">
                  <benefit.icon className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-white mb-3">{benefit.title}</h3>
                  <p className="text-gray-300">{benefit.description}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Consultation Form */}
          <section id="consultation-form" className="container mx-auto px-4 py-16">
            <div className="max-w-4xl mx-auto">
              <div className="cyber-card p-8">
                <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-8 neon-text">
                  Book Your Free Consultation
                </h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-white font-medium mb-2">
                        <User className="w-4 h-4 inline mr-2" />
                        Full Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 bg-slate-800 border border-gray-600 rounded-lg text-white focus:outline-none focus:border-cyan-400"
                        placeholder="Your full name"
                      />
                    </div>
                    <div>
                      <label className="block text-white font-medium mb-2">
                        <Mail className="w-4 h-4 inline mr-2" />
                        Email Address *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 bg-slate-800 border border-gray-600 rounded-lg text-white focus:outline-none focus:border-cyan-400"
                        placeholder="your@email.com"
                      />
                    </div>
                    <div>
                      <label className="block text-white font-medium mb-2">
                        <Building className="w-4 h-4 inline mr-2" />
                        Company Name *
                      </label>
                      <input
                        type="text"
                        name="company"
                        value={formData.company}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 bg-slate-800 border border-gray-600 rounded-lg text-white focus:outline-none focus:border-cyan-400"
                        placeholder="Your company name"
                      />
                    </div>
                    <div>
                      <label className="block text-white font-medium mb-2">
                        <Phone className="w-4 h-4 inline mr-2" />
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-slate-800 border border-gray-600 rounded-lg text-white focus:outline-none focus:border-cyan-400"
                        placeholder="(555) 123-4567"
                      />
                    </div>
                    <div>
                      <label className="block text-white font-medium mb-2">
                        Your Role *
                      </label>
                      <select
                        name="role"
                        value={formData.role}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 bg-slate-800 border border-gray-600 rounded-lg text-white focus:outline-none focus:border-cyan-400"
                      >
                        <option value="">Select your role</option>
                        <option value="CEO">CEO</option>
                        <option value="CTO">CTO</option>
                        <option value="IT Director">IT Director</option>
                        <option value="Operations Manager">Operations Manager</option>
                        <option value="Business Owner">Business Owner</option>
                        <option value="Other">Other</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-white font-medium mb-2">
                        Company Size *
                      </label>
                      <select
                        name="companySize"
                        value={formData.companySize}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 bg-slate-800 border border-gray-600 rounded-lg text-white focus:outline-none focus:border-cyan-400"
                      >
                        <option value="">Select company size</option>
                        <option value="1-10">1-10 employees</option>
                        <option value="11-50">11-50 employees</option>
                        <option value="51-200">51-200 employees</option>
                        <option value="201-1000">201-1000 employees</option>
                        <option value="1000+">1000+ employees</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-white font-medium mb-2">
                      Current Challenges *
                    </label>
                    <textarea
                      name="currentChallenges"
                      value={formData.currentChallenges}
                      onChange={handleInputChange}
                      required
                      rows={3}
                      className="w-full px-4 py-3 bg-slate-800 border border-gray-600 rounded-lg text-white focus:outline-none focus:border-cyan-400"
                      placeholder="What are your current business or technology challenges?"
                    />
                  </div>

                  <div>
                    <label className="block text-white font-medium mb-2">
                      Goals and Objectives *
                    </label>
                    <textarea
                      name="goals"
                      value={formData.goals}
                      onChange={handleInputChange}
                      required
                      rows={3}
                      className="w-full px-4 py-3 bg-slate-800 border border-gray-600 rounded-lg text-white focus:outline-none focus:border-cyan-400"
                      placeholder="What do you hope to achieve with our solutions?"
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-white font-medium mb-2">
                        Timeline
                      </label>
                      <select
                        name="timeline"
                        value={formData.timeline}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-slate-800 border border-gray-600 rounded-lg text-white focus:outline-none focus:border-cyan-400"
                      >
                        <option value="">Select timeline</option>
                        <option value="ASAP">ASAP</option>
                        <option value="1-3 months">1-3 months</option>
                        <option value="3-6 months">3-6 months</option>
                        <option value="6-12 months">6-12 months</option>
                        <option value="1+ years">1+ years</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-white font-medium mb-2">
                        Budget Range
                      </label>
                      <select
                        name="budget"
                        value={formData.budget}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-slate-800 border border-gray-600 rounded-lg text-white focus:outline-none focus:border-cyan-400"
                      >
                        <option value="">Select budget range</option>
                        <option value="Under $10K">Under $10K</option>
                        <option value="$10K - $50K">$10K - $50K</option>
                        <option value="$50K - $100K">$50K - $100K</option>
                        <option value="$100K - $500K">$100K - $500K</option>
                        <option value="$500K+">$500K+</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-white font-medium mb-2">
                      Additional Information
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      rows={4}
                      className="w-full px-4 py-3 bg-slate-800 border border-gray-600 rounded-lg text-white focus:outline-none focus:border-cyan-400"
                      placeholder="Any additional information you'd like to share..."
                    />
                  </div>

                  <div className="text-center">
                    <button
                      type="submit"
                      className="cyber-button inline-flex items-center text-lg px-8 py-4"
                    >
                      <MessageSquare className="w-5 h-5 mr-2" />
                      Book Free Consultation
                    </button>
                    <p className="text-gray-400 text-sm mt-4">
                      We'll contact you within 24 hours to schedule your consultation
                    </p>
                  </div>
                </form>
              </div>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default ConsultationPage;