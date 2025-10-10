'use client';
import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Calendar, Clock, Users, CheckCircle, Star, ArrowRight } from 'lucide-react';

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

  const services = [
    {
      title: 'AI Strategy & Implementation',
      description: 'Develop a comprehensive AI strategy tailored to your business needs',
      duration: '2-4 hours',
      price: 'Starting at $500/hour'
    },
    {
      title: 'Cloud Migration Planning',
      description: 'Plan and execute a seamless migration to cloud infrastructure',
      duration: '3-6 hours',
      price: 'Starting at $400/hour'
    },
    {
      title: 'Cybersecurity Assessment',
      description: 'Evaluate your current security posture and recommend improvements',
      duration: '4-8 hours',
      price: 'Starting at $600/hour'
    },
    {
      title: 'Digital Transformation',
      description: 'Guide your organization through comprehensive digital transformation',
      duration: '6-12 hours',
      price: 'Starting at $350/hour'
    }
  ];

  const benefits = [
    'Expert guidance from industry professionals',
    'Personalized recommendations for your business',
    'Actionable insights and implementation roadmap',
    'Follow-up support and ongoing consultation',
    'Access to our network of technology partners',
    'Comprehensive documentation and reports'
  ];

  const consultants = [
    {
      name: 'Dr. Sarah Johnson',
      title: 'Chief AI Officer',
      experience: '15+ years',
      expertise: ['AI/ML', 'Machine Learning', 'Data Science'],
      rating: 5,
      image: '/api/placeholder/200/200'
    },
    {
      name: 'Michael Chen',
      title: 'Cloud Solutions Architect',
      experience: '12+ years',
      expertise: ['Cloud Computing', 'AWS', 'Azure'],
      rating: 5,
      image: '/api/placeholder/200/200'
    },
    {
      name: 'Alex Rodriguez',
      title: 'Cybersecurity Expert',
      experience: '10+ years',
      expertise: ['Cybersecurity', 'Risk Assessment', 'Compliance'],
      rating: 5,
      image: '/api/placeholder/200/200'
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
    console.log('Form submitted:', formData);
  };

  return (
    <>
      <Helmet>
        <title>Consultation | Zion Tech Group - Expert IT Consulting</title>
        <meta name="description" content="Get expert consultation on AI, cloud computing, cybersecurity, and IT strategy. Book a consultation with our experienced team." />
        <meta name="keywords" content="IT consultation, AI consulting, cloud consulting, cybersecurity consulting, technology strategy" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="container mx-auto px-4 py-16">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Expert Consultation
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Get personalized guidance from our industry experts to accelerate your digital transformation and maximize your technology investments
            </p>
          </div>

          {/* Services */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-white text-center mb-12">Consultation Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {services.map((service, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
                  <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
                  <p className="text-gray-300 mb-4">{service.description}</p>
                  <div className="flex items-center justify-between text-sm text-gray-400 mb-4">
                    <div className="flex items-center space-x-1">
                      <Clock className="w-4 h-4" />
                      <span>{service.duration}</span>
                    </div>
                    <span className="text-green-400 font-semibold">{service.price}</span>
                  </div>
                  <button className="w-full bg-gradient-to-r from-purple-500 to-blue-500 text-white py-2 px-4 rounded-lg font-semibold hover:from-purple-600 hover:to-blue-600 transition-all duration-300">
                    Book Consultation
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* Benefits */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-white text-center mb-12">Why Choose Our Consultation</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-green-400 mt-1 flex-shrink-0" />
                  <span className="text-gray-300">{benefit}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Our Consultants */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-white text-center mb-12">Meet Our Experts</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {consultants.map((consultant, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 text-center">
                  <div className="w-24 h-24 bg-gradient-to-br from-purple-500 to-blue-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <span className="text-white font-bold text-xl">{consultant.name.charAt(0)}</span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-1">{consultant.name}</h3>
                  <p className="text-gray-300 mb-2">{consultant.title}</p>
                  <p className="text-sm text-gray-400 mb-4">{consultant.experience} experience</p>
                  <div className="flex justify-center mb-4">
                    {[...Array(consultant.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <div className="flex flex-wrap justify-center gap-2">
                    {consultant.expertise.map((skill, idx) => (
                      <span key={idx} className="bg-purple-500/20 text-purple-300 px-2 py-1 rounded text-xs">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Contact Form */}
          <div className="max-w-4xl mx-auto">
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
              <h2 className="text-3xl font-bold text-white text-center mb-8">Book Your Consultation</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-white font-semibold mb-2">Full Name *</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
                      placeholder="Enter your full name"
                    />
                  </div>
                  <div>
                    <label className="block text-white font-semibold mb-2">Email Address *</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
                      placeholder="Enter your email"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-white font-semibold mb-2">Company</label>
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
                      placeholder="Enter your company name"
                    />
                  </div>
                  <div>
                    <label className="block text-white font-semibold mb-2">Phone Number</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
                      placeholder="Enter your phone number"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-white font-semibold mb-2">Service Interest *</label>
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                  >
                    <option value="" className="bg-slate-800">Select a service</option>
                    <option value="ai-strategy" className="bg-slate-800">AI Strategy & Implementation</option>
                    <option value="cloud-migration" className="bg-slate-800">Cloud Migration Planning</option>
                    <option value="cybersecurity" className="bg-slate-800">Cybersecurity Assessment</option>
                    <option value="digital-transformation" className="bg-slate-800">Digital Transformation</option>
                  </select>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-white font-semibold mb-2">Preferred Date</label>
                    <input
                      type="date"
                      name="preferredDate"
                      value={formData.preferredDate}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                    />
                  </div>
                  <div>
                    <label className="block text-white font-semibold mb-2">Preferred Time</label>
                    <select
                      name="preferredTime"
                      value={formData.preferredTime}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                    >
                      <option value="" className="bg-slate-800">Select time</option>
                      <option value="9am-12pm" className="bg-slate-800">9:00 AM - 12:00 PM</option>
                      <option value="1pm-4pm" className="bg-slate-800">1:00 PM - 4:00 PM</option>
                      <option value="4pm-7pm" className="bg-slate-800">4:00 PM - 7:00 PM</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-white font-semibold mb-2">Message</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={4}
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
                    placeholder="Tell us about your project and specific needs..."
                  />
                </div>

                <div className="text-center">
                  <button
                    type="submit"
                    className="bg-gradient-to-r from-purple-500 to-blue-500 text-white py-3 px-8 rounded-lg font-semibold hover:from-purple-600 hover:to-blue-600 transition-all duration-300 flex items-center justify-center mx-auto"
                  >
                    Schedule Consultation
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ConsultationPage;