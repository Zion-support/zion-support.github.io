'use client';
import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { ArrowRight, CheckCircle, Clock, Users, Award } from 'lucide-react';

const ConsultationPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    service: '',
    message: ''
  });

  const consultationTypes = [
    {
      title: 'Strategy Consultation',
      description: 'Get expert advice on your technology strategy and digital transformation roadmap.',
      duration: '2-4 hours',
      price: 'Starting at $500/hour',
      features: ['Technology Assessment', 'Strategic Planning', 'Roadmap Development', 'Implementation Guidance']
    },
    {
      title: 'Technical Review',
      description: 'Comprehensive review of your current systems and recommendations for improvement.',
      duration: '1-2 days',
      price: 'Starting at $2,000',
      features: ['System Analysis', 'Security Audit', 'Performance Review', 'Optimization Recommendations']
    },
    {
      title: 'Implementation Support',
      description: 'Hands-on support for implementing new technologies and solutions.',
      duration: '1-4 weeks',
      price: 'Starting at $150/hour',
      features: ['Project Management', 'Technical Implementation', 'Training', 'Ongoing Support']
    }
  ];

  const experts = [
    {
      name: 'Dr. Sarah Johnson',
      title: 'Chief Technology Officer',
      expertise: 'AI & Machine Learning',
      experience: '15+ years',
      image: '/images/experts/sarah-johnson.jpg'
    },
    {
      name: 'Michael Chen',
      title: 'Senior Security Architect',
      expertise: 'Cybersecurity & Compliance',
      experience: '12+ years',
      image: '/images/experts/michael-chen.jpg'
    },
    {
      name: 'Emily Rodriguez',
      title: 'Cloud Solutions Director',
      expertise: 'Cloud Infrastructure & DevOps',
      experience: '10+ years',
      image: '/images/experts/emily-rodriguez.jpg'
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
        <title>Consultation - Zion Tech Group</title>
        <meta name="description" content="Get expert consultation on AI, cybersecurity, cloud solutions, and digital transformation from our experienced team." />
        <meta name="keywords" content="consultation, technology consulting, AI consulting, cybersecurity consulting, cloud consulting" />
      </Helmet>
      
      <Navigation />
      
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-indigo-900">
        {/* Hero Section */}
        <div className="relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20"></div>
          <div className="relative container mx-auto px-4 py-24">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                Expert <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Consultation</span>
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Get personalized advice from our team of experts to accelerate your digital transformation and achieve your technology goals.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="px-8 py-4 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors">
                  Schedule Consultation
                </button>
                <button className="px-8 py-4 border border-white/30 text-white font-semibold rounded-lg hover:bg-white/10 transition-colors">
                  View Our Experts
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Consultation Types */}
        <div className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6">Consultation Services</h2>
              <p className="text-xl text-gray-300">
                Choose the consultation type that best fits your needs and budget.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {consultationTypes.map((type, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/20 transition-all duration-300">
                  <h3 className="text-2xl font-bold text-white mb-4">{type.title}</h3>
                  <p className="text-gray-300 mb-6">{type.description}</p>
                  
                  <div className="space-y-4 mb-6">
                    <div className="flex items-center text-gray-300">
                      <Clock className="w-5 h-5 mr-3 text-blue-400" />
                      {type.duration}
                    </div>
                    <div className="flex items-center text-gray-300">
                      <Award className="w-5 h-5 mr-3 text-blue-400" />
                      {type.price}
                    </div>
                  </div>
                  
                  <ul className="space-y-2 mb-8">
                    {type.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start text-gray-300">
                        <CheckCircle className="w-5 h-5 text-green-400 mr-3 mt-0.5 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <button className="w-full px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors">
                    Book Now
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Our Experts */}
        <div className="py-20 bg-white/5">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6">Meet Our Experts</h2>
              <p className="text-xl text-gray-300">
                Our team of experienced professionals is ready to help you succeed.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {experts.map((expert, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 text-center hover:bg-white/20 transition-all duration-300">
                  <div className="w-24 h-24 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Users className="w-12 h-12 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">{expert.name}</h3>
                  <div className="text-blue-400 font-semibold mb-2">{expert.title}</div>
                  <div className="text-gray-300 mb-4">{expert.expertise}</div>
                  <div className="text-sm text-gray-400">{expert.experience}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 lg:p-12">
                <div className="text-center mb-12">
                  <h2 className="text-4xl font-bold text-white mb-6">Schedule Your Consultation</h2>
                  <p className="text-xl text-gray-300">
                    Fill out the form below and we'll get back to you within 24 hours.
                  </p>
                </div>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-white font-semibold mb-2">Full Name</label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Enter your full name"
                      />
                    </div>
                    <div>
                      <label className="block text-white font-semibold mb-2">Email Address</label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
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
                        className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
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
                        className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Enter your phone number"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-white font-semibold mb-2">Service Interest</label>
                    <select
                      name="service"
                      value={formData.service}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                      <option value="">Select a service</option>
                      <option value="strategy">Strategy Consultation</option>
                      <option value="technical">Technical Review</option>
                      <option value="implementation">Implementation Support</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  
                  <div>
                    <label className="block text-white font-semibold mb-2">Message</label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      rows={4}
                      className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="Tell us about your project and how we can help"
                    />
                  </div>
                  
                  <div className="text-center">
                    <button
                      type="submit"
                      className="px-8 py-4 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors inline-flex items-center"
                    >
                      Send Message
                      <ArrowRight className="w-5 h-5 ml-2" />
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-4xl font-bold text-white mb-6">Ready to Get Started?</h2>
              <p className="text-xl text-blue-100 mb-8">
                Don't wait to transform your business. Schedule your consultation today and take the first step towards success.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="px-8 py-4 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors">
                  Schedule Now
                </button>
                <button className="px-8 py-4 border border-white/30 text-white font-semibold rounded-lg hover:bg-white/10 transition-colors">
                  Call Us: (555) 123-4567
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </>
  );
};

export default ConsultationPage;