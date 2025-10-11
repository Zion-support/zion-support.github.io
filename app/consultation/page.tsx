'use client';
import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { ArrowRight, CheckCircle, Clock, Users, Target, Phone, Mail, MapPin, Calendar, User, MessageSquare } from 'lucide-react';

const ConsultationPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    service: '',
    message: '',
    preferredDate: '',
    preferredTime: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitting(false);
    alert('Thank you for your consultation request! We will contact you within 24 hours.');
  };

  const services = [
    'AI Solutions',
    'Cloud Infrastructure',
    'Cybersecurity',
    'Software Development',
    'Data Analytics',
    'IT Consulting',
    'Digital Transformation',
    'Other'
  ];

  const timeSlots = [
    '9:00 AM - 10:00 AM',
    '10:00 AM - 11:00 AM',
    '11:00 AM - 12:00 PM',
    '1:00 PM - 2:00 PM',
    '2:00 PM - 3:00 PM',
    '3:00 PM - 4:00 PM',
    '4:00 PM - 5:00 PM'
  ];

  const benefits = [
    {
      icon: Target,
      title: 'Strategic Planning',
      description: 'Get expert advice on your technology roadmap and strategic initiatives.'
    },
    {
      icon: Users,
      title: 'Expert Team',
      description: 'Work with our experienced consultants who understand your industry.'
    },
    {
      icon: Clock,
      title: 'Quick Response',
      description: 'We respond to consultation requests within 24 hours.'
    },
    {
      icon: CheckCircle,
      title: 'Proven Results',
      description: 'Our recommendations have helped 500+ businesses achieve their goals.'
    }
  ];

  return (
    <>
      <Helmet>
        <title>Free Consultation - Zion Tech Group</title>
        <meta name="description" content="Schedule a free consultation with our experts to discuss your technology needs and get personalized recommendations." />
        <meta name="keywords" content="consultation, free consultation, technology advice, expert guidance, business solutions" />
      </Helmet>
      <Navigation />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                Free <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">Consultation</span>
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Get expert advice on your technology needs. Schedule a free consultation with our team of specialists.
              </p>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Why Choose Our Consultation?
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our expert consultants provide valuable insights to help you make informed technology decisions.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-cyan-400/30 transition-all duration-300 text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <benefit.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{benefit.title}</h3>
                  <p className="text-gray-300">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Form Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Schedule Your Consultation
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Fill out the form below and we'll get back to you within 24 hours to schedule your free consultation.
              </p>
            </div>

            <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
                      className="w-full px-4 py-3 bg-slate-700/50 border border-white/10 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400"
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
                      className="w-full px-4 py-3 bg-slate-700/50 border border-white/10 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400"
                      placeholder="Enter your email address"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
                      className="w-full px-4 py-3 bg-slate-700/50 border border-white/10 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400"
                      placeholder="Enter your company name"
                    />
                  </div>
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
                      className="w-full px-4 py-3 bg-slate-700/50 border border-white/10 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400"
                      placeholder="Enter your phone number"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="service" className="block text-sm font-medium text-white mb-2">
                      Service Interest
                    </label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-slate-700/50 border border-white/10 rounded-lg text-white focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400"
                    >
                      <option value="">Select a service</option>
                      {services.map((service) => (
                        <option key={service} value={service}>{service}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label htmlFor="preferredDate" className="block text-sm font-medium text-white mb-2">
                      Preferred Date
                    </label>
                    <input
                      type="date"
                      id="preferredDate"
                      name="preferredDate"
                      value={formData.preferredDate}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-slate-700/50 border border-white/10 rounded-lg text-white focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="preferredTime" className="block text-sm font-medium text-white mb-2">
                    Preferred Time
                  </label>
                  <select
                    id="preferredTime"
                    name="preferredTime"
                    value={formData.preferredTime}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-slate-700/50 border border-white/10 rounded-lg text-white focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400"
                  >
                    <option value="">Select a time slot</option>
                    {timeSlots.map((time) => (
                      <option key={time} value={time}>{time}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-white mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={4}
                    className="w-full px-4 py-3 bg-slate-700/50 border border-white/10 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400"
                    placeholder="Tell us about your project or specific needs..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                      Submitting...
                    </>
                  ) : (
                    <>
                      Schedule Consultation
                      <ArrowRight className="ml-2 w-5 h-5" />
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </section>

        {/* Contact Info Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Get in Touch
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Prefer to contact us directly? Here are our contact details.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-white/10 text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Phone className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Phone</h3>
                <p className="text-gray-300">+1 (555) 123-4567</p>
                <p className="text-sm text-gray-400">Mon-Fri 9AM-6PM EST</p>
              </div>

              <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-white/10 text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Mail className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Email</h3>
                <p className="text-gray-300">consultation@ziontechgroup.com</p>
                <p className="text-sm text-gray-400">We respond within 24 hours</p>
              </div>

              <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-white/10 text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <MapPin className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Office</h3>
                <p className="text-gray-300">123 Tech Street</p>
                <p className="text-sm text-gray-400">Innovation City, IC 12345</p>
              </div>
            </div>
          </div>
        </section>
      </div>
      
      <Footer />
    </>
  );
};

export default ConsultationPage;