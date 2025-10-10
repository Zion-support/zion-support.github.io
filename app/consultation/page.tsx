'use client';
import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Calendar, Clock, User, Mail, Phone, CheckCircle, ArrowRight } from 'lucide-react';

const ConsultationPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    service: '',
    budget: '',
    timeline: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Consultation form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const consultationTypes = [
    {
      title: 'Free Initial Consultation',
      duration: '30 minutes',
      price: 'Free',
      description: 'Discuss your needs and explore how we can help',
      features: ['Needs assessment', 'Solution overview', 'Next steps planning']
    },
    {
      title: 'Technical Deep Dive',
      duration: '60 minutes',
      price: '$299',
      description: 'Detailed technical analysis and solution design',
      features: ['Technical requirements', 'Architecture design', 'Implementation roadmap', 'Cost estimation']
    },
    {
      title: 'Strategic Planning Session',
      duration: '90 minutes',
      price: '$499',
      description: 'Comprehensive business strategy and technology roadmap',
      features: ['Business analysis', 'Technology strategy', 'ROI projections', 'Implementation timeline', 'Ongoing support plan']
    }
  ];

  return (
    <>
      <Helmet>
        <title>Free Consultation - Zion Tech Group | AI & IT Solutions</title>
        <meta name="description" content="Get a free consultation with our AI and IT experts. Discuss your project needs and discover how we can help transform your business." />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Free Consultation
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Discuss your project with our AI and IT experts. Get personalized recommendations and a clear roadmap for your success.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-white mb-6">Schedule Your Consultation</h2>
              <p className="text-gray-300 mb-8">
                Fill out the form below and we'll get back to you within 24 hours to schedule your free consultation.
              </p>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-white font-medium mb-2">Name *</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500"
                      placeholder="Your full name"
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-white font-medium mb-2">Email *</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500"
                      placeholder="your@email.com"
                      required
                    />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="company" className="block text-white font-medium mb-2">Company</label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500"
                      placeholder="Your company name"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="phone" className="block text-white font-medium mb-2">Phone</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500"
                      placeholder="(555) 123-4567"
                    />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="service" className="block text-white font-medium mb-2">Service Interest</label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-500"
                    >
                      <option value="">Select a service</option>
                      <option value="ai-solutions">AI Solutions</option>
                      <option value="cloud-infrastructure">Cloud Infrastructure</option>
                      <option value="cybersecurity">Cybersecurity</option>
                      <option value="data-analytics">Data Analytics</option>
                      <option value="automation">Automation</option>
                      <option value="custom-development">Custom Development</option>
                    </select>
                  </div>
                  
                  <div>
                    <label htmlFor="budget" className="block text-white font-medium mb-2">Budget Range</label>
                    <select
                      id="budget"
                      name="budget"
                      value={formData.budget}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-500"
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
                  <label htmlFor="timeline" className="block text-white font-medium mb-2">Project Timeline</label>
                  <select
                    id="timeline"
                    name="timeline"
                    value={formData.timeline}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-500"
                  >
                    <option value="">Select timeline</option>
                    <option value="asap">ASAP</option>
                    <option value="1-3-months">1-3 months</option>
                    <option value="3-6-months">3-6 months</option>
                    <option value="6-12-months">6-12 months</option>
                    <option value="over-12-months">Over 12 months</option>
                  </select>
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-white font-medium mb-2">Project Details</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500"
                    placeholder="Tell us about your project, goals, and any specific requirements..."
                  />
                </div>
                
                <button
                  type="submit"
                  className="w-full px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-purple-600 transition-all duration-300"
                >
                  Request Free Consultation
                </button>
              </form>
            </div>
            
            <div>
              <h2 className="text-3xl font-bold text-white mb-6">Consultation Types</h2>
              <div className="space-y-6">
                {consultationTypes.map((type, index) => (
                  <div
                    key={index}
                    className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10 hover:border-cyan-400/30 transition-all duration-300"
                  >
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-xl font-bold text-white">{type.title}</h3>
                      <span className="text-2xl font-bold text-cyan-400">{type.price}</span>
                    </div>
                    
                    <div className="flex items-center text-gray-400 mb-4">
                      <Clock className="w-4 h-4 mr-2" />
                      <span>{type.duration}</span>
                    </div>
                    
                    <p className="text-gray-300 mb-4">{type.description}</p>
                    
                    <ul className="space-y-2">
                      {type.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-sm text-gray-300">
                          <CheckCircle className="w-4 h-4 text-cyan-400 mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
              
              <div className="mt-8 bg-cyan-500/10 border border-cyan-500/20 rounded-2xl p-6">
                <h3 className="text-lg font-bold text-white mb-4">Why Choose Our Consultation?</h3>
                <ul className="space-y-3">
                  <li className="flex items-center text-gray-300">
                    <ArrowRight className="w-4 h-4 text-cyan-400 mr-3 flex-shrink-0" />
                    Expert insights from industry professionals
                  </li>
                  <li className="flex items-center text-gray-300">
                    <ArrowRight className="w-4 h-4 text-cyan-400 mr-3 flex-shrink-0" />
                    Personalized recommendations for your business
                  </li>
                  <li className="flex items-center text-gray-300">
                    <ArrowRight className="w-4 h-4 text-cyan-400 mr-3 flex-shrink-0" />
                    Clear roadmap and implementation plan
                  </li>
                  <li className="flex items-center text-gray-300">
                    <ArrowRight className="w-4 h-4 text-cyan-400 mr-3 flex-shrink-0" />
                    No obligation to proceed with our services
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ConsultationPage;