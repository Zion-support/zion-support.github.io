'use client';

import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Calendar, Clock, User, CheckCircle, ArrowRight, Phone, Mail, MessageCircle } from 'lucide-react';

interface ConsultationSlot {
  id: string;
  date: string;
  time: string;
  duration: string;
  type: 'Video Call' | 'Phone Call' | 'In-Person';
  available: boolean;
}

const ConsultationPage: React.FC = () => {
  const [selectedSlot, setSelectedSlot] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: '',
    message: ''
  });

  const consultationSlots: ConsultationSlot[] = [
    {
      id: '1',
      date: '2024-01-20',
      time: '10:00 AM',
      duration: '30 minutes',
      type: 'Video Call',
      available: true
    },
    {
      id: '2',
      date: '2024-01-20',
      time: '2:00 PM',
      duration: '30 minutes',
      type: 'Phone Call',
      available: true
    },
    {
      id: '3',
      date: '2024-01-21',
      time: '9:00 AM',
      duration: '30 minutes',
      type: 'Video Call',
      available: true
    },
    {
      id: '4',
      date: '2024-01-21',
      time: '3:00 PM',
      duration: '30 minutes',
      type: 'In-Person',
      available: false
    },
    {
      id: '5',
      date: '2024-01-22',
      time: '11:00 AM',
      duration: '30 minutes',
      type: 'Video Call',
      available: true
    },
    {
      id: '6',
      date: '2024-01-22',
      time: '4:00 PM',
      duration: '30 minutes',
      type: 'Phone Call',
      available: true
    }
  ];

  const services = [
    'AI & Machine Learning',
    'Cloud Computing',
    'Cybersecurity',
    'DevOps & CI/CD',
    'Data Analytics',
    'Digital Transformation',
    'Custom Development',
    'Other'
  ];

  const consultationBenefits = [
    {
      icon: User,
      title: 'Expert Guidance',
      description: 'Get advice from our experienced technology consultants'
    },
    {
      icon: CheckCircle,
      title: 'Customized Solutions',
      description: 'Tailored recommendations based on your specific needs'
    },
    {
      icon: Clock,
      title: 'Quick Turnaround',
      description: 'Fast response and implementation of solutions'
    },
    {
      icon: ArrowRight,
      title: 'Clear Roadmap',
      description: 'Step-by-step plan to achieve your technology goals'
    }
  ];

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
    console.log('Form submitted:', formData, selectedSlot);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Free Consultation - Zion Tech Group | Expert Technology Guidance</title>
        <meta name="description" content="Get a free consultation with our technology experts. Personalized guidance for AI, cloud computing, cybersecurity, and digital transformation." />
        <meta name="keywords" content="free consultation, technology consulting, AI consulting, cloud consulting, cybersecurity consulting, digital transformation" />
        <meta property="og:title" content="Free Consultation - Zion Tech Group" />
        <meta property="og:description" content="Get personalized guidance from our technology experts" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ziontechgroup.com/consultation" />
      </Helmet>

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Free <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">Consultation</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Get personalized guidance from our technology experts to transform your business with AI, cloud computing, and digital solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center gap-2">
                Schedule Now
                <Calendar className="w-5 h-5" />
              </button>
              <button className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-slate-900 transition-all duration-300">
                Learn More
              </button>
            </div>
          </div>

          {/* Benefits */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {consultationBenefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <benefit.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{benefit.title}</h3>
                <p className="text-gray-300">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Consultation Form */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-white mb-4">Schedule Your Free Consultation</h2>
              <p className="text-xl text-gray-300">
                Fill out the form below and we'll get back to you within 24 hours
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-white mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-colors"
                    placeholder="Enter your full name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-white mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-colors"
                    placeholder="Enter your email"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-white mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-colors"
                    placeholder="Enter your phone number"
                  />
                </div>
                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-white mb-2">
                    Company Name
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-colors"
                    placeholder="Enter your company name"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="service" className="block text-sm font-medium text-white mb-2">
                  Service Interest *
                </label>
                <select
                  id="service"
                  name="service"
                  value={formData.service}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-colors"
                >
                  <option value="">Select a service</option>
                  {services.map((service) => (
                    <option key={service} value={service}>
                      {service}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-white mb-2">
                  Tell us about your project or requirements
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={4}
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-colors"
                  placeholder="Describe your project, challenges, or what you'd like to achieve..."
                />
              </div>

              {/* Available Time Slots */}
              <div>
                <label className="block text-sm font-medium text-white mb-4">
                  Preferred Consultation Time
                </label>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {consultationSlots.map((slot) => (
                    <button
                      key={slot.id}
                      type="button"
                      onClick={() => setSelectedSlot(slot.id)}
                      disabled={!slot.available}
                      className={`p-4 rounded-lg border text-left transition-all duration-300 ${
                        selectedSlot === slot.id
                          ? 'border-cyan-400 bg-cyan-400/20'
                          : slot.available
                          ? 'border-white/20 bg-white/5 hover:border-cyan-400/50 hover:bg-white/10'
                          : 'border-gray-600 bg-gray-600/20 cursor-not-allowed'
                      }`}
                    >
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-white font-medium">{slot.date}</span>
                        <span className={`text-xs px-2 py-1 rounded-full ${
                          slot.available ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'
                        }`}>
                          {slot.available ? 'Available' : 'Booked'}
                        </span>
                      </div>
                      <div className="text-cyan-400 font-semibold">{slot.time}</div>
                      <div className="text-gray-300 text-sm">{slot.duration} • {slot.type}</div>
                    </button>
                  ))}
                </div>
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center gap-2"
              >
                Schedule Free Consultation
                <ArrowRight className="w-5 h-5" />
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Other Ways to Reach Us</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Prefer to contact us directly? We're here to help through multiple channels.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Call Us</h3>
              <p className="text-cyan-400 font-semibold mb-2">+1 (302) 464-0950</p>
              <p className="text-gray-300 text-sm">Mon-Fri: 9AM-6PM EST</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Mail className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Email Us</h3>
              <p className="text-cyan-400 font-semibold mb-2">consultation@ziontechgroup.com</p>
              <p className="text-gray-300 text-sm">Response within 2 hours</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <MessageCircle className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Live Chat</h3>
              <p className="text-cyan-400 font-semibold mb-2">Available on website</p>
              <p className="text-gray-300 text-sm">Mon-Fri: 9AM-6PM EST</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ConsultationPage;