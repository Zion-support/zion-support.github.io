'use client';

import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { CheckCircle, Clock, Users, Star, ArrowRight, Phone, Mail, MapPin } from 'lucide-react';

const ConsultationPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: '',
    budget: '',
    timeline: '',
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
      duration: '60 minutes',
      price: 'Free',
      description: 'Strategic planning for AI implementation in your business',
      features: [
        'AI readiness assessment',
        'Technology roadmap',
        'ROI analysis',
        'Implementation timeline'
      ]
    },
    {
      title: 'Cloud Migration Planning',
      duration: '90 minutes',
      price: 'Free',
      description: 'Comprehensive cloud migration strategy and planning',
      features: [
        'Current infrastructure analysis',
        'Cloud platform selection',
        'Migration strategy',
        'Cost optimization'
      ]
    },
    {
      title: 'Cybersecurity Audit',
      duration: '120 minutes',
      price: 'Free',
      description: 'Complete security assessment and recommendations',
      features: [
        'Security vulnerability assessment',
        'Compliance review',
        'Risk analysis',
        'Security roadmap'
      ]
    },
    {
      title: 'Custom Solution Design',
      duration: '2-4 hours',
      price: 'Custom',
      description: 'Tailored solution design for specific business needs',
      features: [
        'Requirements analysis',
        'Solution architecture',
        'Technology selection',
        'Implementation plan'
      ]
    }
  ];

  const benefits = [
    {
      icon: CheckCircle,
      title: 'Expert Analysis',
      description: 'Get insights from our team of certified professionals'
    },
    {
      icon: Clock,
      title: 'Quick Turnaround',
      description: 'Receive detailed recommendations within 48 hours'
    },
    {
      icon: Users,
      title: 'Dedicated Support',
      description: 'Personalized attention from our senior consultants'
    },
    {
      icon: Star,
      title: 'Proven Results',
      description: 'Based on successful implementations for 500+ clients'
    }
  ];

  return (
    <>
      <Helmet>
        <title>Free Consultation - Zion Tech Group | Expert Technology Consulting</title>
        <meta name="description" content="Get a free consultation with our technology experts. We'll analyze your needs and provide strategic recommendations for AI, cloud, and IT solutions." />
        <meta name="keywords" content="free consultation, technology consulting, AI strategy, cloud migration, cybersecurity audit, IT planning" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 neural-network-bg matrix-rain">
        {/* Hero Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 neon-text glitch-text" data-text="Free Consultation">
              Free Consultation
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Get expert advice on your technology needs. Our senior consultants will analyze your requirements 
              and provide strategic recommendations tailored to your business goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#consultation-form"
                className="cyber-button"
              >
                Book Your Consultation
                <ArrowRight className="w-5 h-5 ml-2 inline" />
              </a>
              <a
                href="tel:+13024640950"
                className="border-2 border-cyan-400 text-cyan-400 px-8 py-3 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
              >
                📞 Call: (302) 464-0950
              </a>
            </div>
          </div>
        </section>

        {/* Consultation Types */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-white mb-4 neon-text">
                Consultation Types
              </h2>
              <p className="text-gray-300 max-w-3xl mx-auto">
                Choose the consultation that best fits your needs. All consultations are free and include detailed recommendations.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {consultationTypes.map((consultation, index) => (
                <div key={index} className="quantum-card hologram-card p-6 text-center hover:scale-105 transition-all duration-300 card-hover-lift group">
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                    {consultation.title}
                  </h3>
                  <div className="flex items-center justify-center gap-4 mb-4">
                    <span className="bg-cyan-500/20 text-cyan-400 text-sm px-2 py-1 rounded-full">
                      {consultation.duration}
                    </span>
                    <span className="bg-green-500/20 text-green-400 text-sm px-2 py-1 rounded-full">
                      {consultation.price}
                    </span>
                  </div>
                  <p className="text-gray-300 text-sm mb-4">{consultation.description}</p>
                  
                  <ul className="space-y-2 text-left">
                    {consultation.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-gray-300">
                        <CheckCircle className="w-3 h-3 text-green-400 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-white mb-4 neon-text">
                Why Choose Our Consultation?
              </h2>
              <p className="text-gray-300 max-w-3xl mx-auto">
                Our consultations provide real value and actionable insights for your business.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="quantum-card hologram-card p-6 text-center hover:scale-105 transition-all duration-300">
                  <div className="w-16 h-16 bg-cyan-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <benefit.icon className="w-8 h-8 text-cyan-400" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{benefit.title}</h3>
                  <p className="text-gray-300 text-sm">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Consultation Form */}
        <section id="consultation-form" className="py-16 px-4">
          <div className="max-w-4xl mx-auto">
            <div className="cyber-card hologram-card p-8 border border-cyan-500/20">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-white mb-4 neon-text">
                  Book Your Free Consultation
                </h2>
                <p className="text-gray-300">
                  Fill out the form below and we'll get back to you within 24 hours to schedule your consultation.
                </p>
              </div>
              
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
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-colors"
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
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-colors"
                      placeholder="Enter your email"
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
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-colors"
                      placeholder="Enter your phone number"
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
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-colors"
                      placeholder="Enter your company name"
                    />
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
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-colors"
                    >
                      <option value="">Select a service</option>
                      <option value="ai-strategy">AI Strategy</option>
                      <option value="cloud-migration">Cloud Migration</option>
                      <option value="cybersecurity">Cybersecurity</option>
                      <option value="it-consulting">IT Consulting</option>
                      <option value="micro-saas">Micro SAAS</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  
                  <div>
                    <label htmlFor="budget" className="block text-sm font-medium text-gray-300 mb-2">
                      Budget Range
                    </label>
                    <select
                      id="budget"
                      name="budget"
                      value={formData.budget}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-colors"
                    >
                      <option value="">Select budget range</option>
                      <option value="under-10k">Under $10,000</option>
                      <option value="10k-50k">$10,000 - $50,000</option>
                      <option value="50k-100k">$50,000 - $100,000</option>
                      <option value="100k-500k">$100,000 - $500,000</option>
                      <option value="over-500k">Over $500,000</option>
                    </select>
                  </div>
                </div>
                
                <div>
                  <label htmlFor="timeline" className="block text-sm font-medium text-gray-300 mb-2">
                    Project Timeline
                  </label>
                  <select
                    id="timeline"
                    name="timeline"
                    value={formData.timeline}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-colors"
                  >
                    <option value="">Select timeline</option>
                    <option value="asap">ASAP</option>
                    <option value="1-month">Within 1 month</option>
                    <option value="3-months">Within 3 months</option>
                    <option value="6-months">Within 6 months</option>
                    <option value="1-year">Within 1 year</option>
                    <option value="flexible">Flexible</option>
                  </select>
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                    Additional Information
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={4}
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-colors"
                    placeholder="Tell us more about your project or specific needs..."
                  />
                </div>
                
                <div className="text-center">
                  <button
                    type="submit"
                    className="cyber-button px-8 py-4"
                  >
                    Book Free Consultation
                    <ArrowRight className="w-5 h-5 ml-2 inline" />
                  </button>
                </div>
              </form>
            </div>
          </div>
        </section>

        {/* Contact Info */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto">
            <div className="cyber-card hologram-card p-8 text-center border border-cyan-500/20">
              <h2 className="text-3xl font-bold text-white mb-6 neon-text">
                Prefer to Talk Directly?
              </h2>
              <p className="text-gray-300 mb-8">
                Our team is ready to discuss your needs and answer any questions you may have.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="flex items-center justify-center gap-3">
                  <Phone className="w-6 h-6 text-cyan-400" />
                  <div className="text-left">
                    <div className="text-gray-400 text-sm">Phone</div>
                    <a href="tel:+13024640950" className="text-white font-semibold hover:text-cyan-400 transition-colors">
                      (302) 464-0950
                    </a>
                  </div>
                </div>
                
                <div className="flex items-center justify-center gap-3">
                  <Mail className="w-6 h-6 text-cyan-400" />
                  <div className="text-left">
                    <div className="text-gray-400 text-sm">Email</div>
                    <a href="mailto:kleber@ziontechgroup.com" className="text-white font-semibold hover:text-cyan-400 transition-colors">
                      kleber@ziontechgroup.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-center justify-center gap-3">
                  <MapPin className="w-6 h-6 text-cyan-400" />
                  <div className="text-left">
                    <div className="text-gray-400 text-sm">Address</div>
                    <div className="text-white font-semibold">
                      364 E Main St STE 1008<br />
                      Middletown, DE 19709
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default ConsultationPage;