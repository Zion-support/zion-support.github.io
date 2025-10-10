'use client';

import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Zap, Shield, BarChart, CheckCircle, ArrowRight, Calendar, Clock, Users, Star, Target, Phone, Mail, MapPin } from 'lucide-react';

const ConsultationPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    consultationType: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

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

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      setIsSubmitted(true);
    } catch (error) {
      console.error('Error submitting form:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const consultationTypes = [
    {
      icon: Zap,
      title: 'AI Strategy Consultation',
      description: 'Develop a comprehensive AI strategy for your business',
      duration: '2-3 hours',
      price: 'Free',
      features: [
        'Current state assessment',
        'AI opportunity identification',
        'Implementation roadmap',
        'ROI projections',
        'Technology recommendations'
      ]
    },
    {
      icon: Shield,
      title: 'Security Assessment',
      description: 'Evaluate your current security posture and identify improvements',
      duration: '1-2 hours',
      price: 'Free',
      features: [
        'Security audit',
        'Vulnerability assessment',
        'Compliance review',
        'Risk analysis',
        'Security recommendations'
      ]
    },
    {
      icon: BarChart,
      title: 'Technology Audit',
      description: 'Review your current technology stack and recommend optimizations',
      duration: '2-4 hours',
      price: 'Free',
      features: [
        'Infrastructure review',
        'Performance analysis',
        'Cost optimization',
        'Scalability assessment',
        'Modernization roadmap'
      ]
    }
  ];

  const benefits = [
    'Free initial consultation',
    'Customized recommendations',
    'No obligation to purchase',
    'Expert insights and advice',
    'Detailed implementation plan',
    'Ongoing support available'
  ];

  const testimonials = [
    {
      name: 'Sarah Johnson',
      company: 'TechCorp Inc.',
      role: 'CTO',
      content: 'The AI strategy consultation was incredibly valuable. We now have a clear roadmap for implementing AI solutions that will transform our business.',
      rating: 5
    },
    {
      name: 'Michael Chen',
      company: 'DataFlow Systems',
      role: 'CEO',
      content: 'The security assessment helped us identify critical vulnerabilities we weren\'t aware of. Highly recommended!',
      rating: 5
    },
    {
      name: 'Emily Rodriguez',
      company: 'CloudFirst Solutions',
      role: 'VP of Engineering',
      content: 'The technology audit provided us with actionable insights that saved us thousands in unnecessary costs.',
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Free Consultation - Zion Tech Group | Get Expert Advice</title>
        <meta name="description" content="Get a free consultation with our AI and IT experts. Discover how our solutions can transform your business and drive growth." />
        <meta name="keywords" content="free consultation, AI consultation, IT consultation, business transformation, expert advice" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 py-20">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-5xl lg:text-7xl font-bold text-white mb-6">
              Free
              <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
                {' '}Consultation
              </span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Get expert advice on how AI and IT solutions can transform your business. 
              Our consultation is completely free with no obligation to purchase.
            </p>
          </div>

          {/* Consultation Types */}
          <section className="py-16">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-white mb-4">Choose Your Consultation</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Select the type of consultation that best fits your needs and schedule a free session with our experts.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {consultationTypes.map((type, index) => (
                <div
                  key={index}
                  className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 hover:bg-white/10 transition-all duration-300"
                >
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <type.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4 text-center">{type.title}</h3>
                  <p className="text-gray-300 mb-6 text-center">{type.description}</p>
                  
                  <div className="space-y-4 mb-6">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-400">Duration:</span>
                      <span className="text-white">{type.duration}</span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-400">Price:</span>
                      <span className="text-cyan-400 font-semibold">{type.price}</span>
                    </div>
                  </div>

                  <ul className="space-y-2 mb-6">
                    {type.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-gray-300">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <button
                    onClick={() => setFormData(prev => ({ ...prev, consultationType: type.title }))}
                    className="w-full bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300"
                  >
                    Select This Consultation
                  </button>
                </div>
              ))}
            </div>
          </section>

          {/* Benefits Section */}
          <section className="py-16 bg-white/5 rounded-2xl">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-4xl font-bold text-white mb-6">Why Choose Our Consultation?</h2>
              <p className="text-xl text-gray-300 mb-8">
                Our expert consultants provide valuable insights and recommendations to help your business succeed.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0" />
                    <span className="text-gray-300">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Contact Form */}
          <section className="py-16">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-4xl font-bold text-white mb-4">Schedule Your Free Consultation</h2>
                <p className="text-xl text-gray-300">
                  Fill out the form below and we'll get back to you within 24 hours to schedule your consultation.
                </p>
              </div>

              {isSubmitted ? (
                <div className="text-center py-12">
                  <CheckCircle className="w-16 h-16 text-green-400 mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-white mb-2">Consultation Request Submitted!</h3>
                  <p className="text-gray-300 mb-6">
                    Thank you for your interest. We'll contact you within 24 hours to schedule your free consultation.
                  </p>
                  <button
                    onClick={() => setIsSubmitted(false)}
                    className="bg-cyan-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-cyan-700 transition-colors"
                  >
                    Submit Another Request
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <label htmlFor="name" className="block text-white font-semibold mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500"
                        placeholder="Your full name"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-white font-semibold mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500"
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <label htmlFor="company" className="block text-white font-semibold mb-2">
                        Company
                      </label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500"
                        placeholder="Your company name"
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-white font-semibold mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500"
                        placeholder="+1 (555) 123-4567"
                      />
                    </div>
                  </div>

                  <div className="mb-6">
                    <label htmlFor="consultationType" className="block text-white font-semibold mb-2">
                      Consultation Type
                    </label>
                    <select
                      id="consultationType"
                      name="consultationType"
                      value={formData.consultationType}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-500"
                    >
                      <option value="">Select a consultation type</option>
                      {consultationTypes.map((type, index) => (
                        <option key={index} value={type.title}>{type.title}</option>
                      ))}
                    </select>
                  </div>

                  <div className="mb-6">
                    <label htmlFor="message" className="block text-white font-semibold mb-2">
                      Additional Information
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      rows={4}
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 resize-none"
                      placeholder="Tell us about your business needs and what you hope to achieve..."
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white font-semibold py-4 px-8 rounded-lg transition-all duration-300 flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                        Submitting...
                      </>
                    ) : (
                      <>
                        <Calendar className="w-5 h-5 mr-2" />
                        Schedule Free Consultation
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </section>

          {/* Testimonials */}
          <section className="py-16">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-white mb-4">What Our Clients Say</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Don't just take our word for it. Here's what our clients say about our consultation services.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300"
                >
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-300 mb-4 italic">"{testimonial.content}"</p>
                  <div>
                    <p className="text-white font-semibold">{testimonial.name}</p>
                    <p className="text-cyan-400 text-sm">{testimonial.role}</p>
                    <p className="text-gray-400 text-sm">{testimonial.company}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* CTA Section */}
          <section className="py-16 text-center">
            <h2 className="text-4xl font-bold text-white mb-6">Ready to Transform Your Business?</h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Don't wait. Schedule your free consultation today and discover how our AI and IT solutions can help your business succeed.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+13024640950"
                className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white font-semibold py-4 px-8 rounded-lg transition-all duration-300 flex items-center justify-center"
              >
                <Phone className="w-5 h-5 mr-2" />
                Call Now: (302) 464-0950
              </a>
              <a
                href="mailto:kleber@ziontechgroup.com"
                className="bg-white/10 hover:bg-white/20 text-white font-semibold py-4 px-8 rounded-lg transition-all duration-300 flex items-center justify-center"
              >
                <Mail className="w-5 h-5 mr-2" />
                Email Us
              </a>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default ConsultationPage;