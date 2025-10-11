'use client'
import React, { useState } from 'react'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import { Calendar, Clock, User, Mail, Phone, MessageSquare, CheckCircle, Star, Zap, ArrowRight } from 'lucide-react'

const ConsultationPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    service: '',
    message: '',
    preferredTime: '',
    budget: ''
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
      icon: <Zap className="w-8 h-8 text-cyan-400" />,
      title: 'AI Strategy Consultation',
      description: 'Get expert advice on implementing AI solutions for your business',
      duration: '60 minutes',
      price: '$500'
    },
    {
      icon: <Calendar className="w-8 h-8 text-purple-400" />,
      title: 'IT Infrastructure Review',
      description: 'Comprehensive analysis of your current IT setup and recommendations',
      duration: '90 minutes',
      price: '$750'
    },
    {
      icon: <MessageSquare className="w-8 h-8 text-green-400" />,
      title: 'Digital Transformation Planning',
      description: 'Strategic planning for your digital transformation journey',
      duration: '120 minutes',
      price: '$1,000'
    },
    {
      icon: <Star className="w-8 h-8 text-orange-400" />,
      title: 'Custom Solution Design',
      description: 'Tailored consultation for specific business challenges',
      duration: 'Variable',
      price: 'Custom'
    }
  ];

  const benefits = [
    'Expert analysis of your current setup',
    'Customized recommendations',
    'Implementation roadmap',
    'Follow-up support included',
    'No obligation to proceed'
  ];

  const testimonials = [
    {
      name: 'Sarah Johnson',
      company: 'TechCorp Solutions',
      text: 'The consultation helped us identify key areas for improvement and provided a clear roadmap for our AI implementation.',
      rating: 5
    },
    {
      name: 'Mike Chen',
      company: 'Global Finance Inc.',
      text: 'Excellent insights and practical recommendations. The team was professional and knowledgeable.',
      rating: 5
    },
    {
      name: 'Emily Davis',
      company: 'RetailMax',
      text: 'The consultation exceeded our expectations. We now have a clear understanding of our technology needs.',
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 cyber-grid-advanced">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Free <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent neon-text-advanced" data-text="Consultation">Consultation</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Get expert advice on your AI and IT needs. Schedule a free consultation with our specialists to discuss your project.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 flex items-center justify-center quantum-button">
                <Calendar className="w-5 h-5 mr-2" />
                Schedule Now
              </button>
              <button className="border-2 border-white text-white hover:bg-white hover:text-gray-900 px-8 py-4 rounded-lg font-semibold transition-all duration-300">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Consultation Types */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-4 neon-text-enhanced">
              Consultation Types
            </h2>
            <p className="text-xl text-gray-300">
              Choose the consultation that best fits your needs
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {consultationTypes.map((type, index) => (
              <div key={index} className="holographic-card-advanced cyber-card-enhanced rounded-2xl p-6 text-center hover-quantum">
                <div className="flex justify-center mb-4">
                  {type.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">
                  {type.title}
                </h3>
                <p className="text-gray-300 mb-4 text-sm">
                  {type.description}
                </p>
                <div className="space-y-2 mb-4">
                  <div className="flex items-center justify-center text-sm text-cyan-400">
                    <Clock className="w-4 h-4 mr-2" />
                    {type.duration}
                  </div>
                  <div className="text-lg font-bold text-white">
                    {type.price}
                  </div>
                </div>
                <button className="w-full bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white py-2 px-4 rounded-lg font-medium transition-all duration-300 quantum-button">
                  Book Now
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-4 neon-text-enhanced">
              What You'll Get
            </h2>
            <p className="text-xl text-gray-300">
              Our consultations provide real value and actionable insights
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-8 h-8 text-white" />
                </div>
                <p className="text-gray-300">{benefit}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="holographic-card-advanced cyber-card-enhanced rounded-2xl p-8">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-white mb-4 neon-text-enhanced">
                Schedule Your Consultation
              </h2>
              <p className="text-xl text-gray-300">
                Fill out the form below and we'll get back to you within 24 hours
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-slate-800/50 border border-cyan-500/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-transparent futuristic-input"
                    placeholder="Enter your full name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-slate-800/50 border border-cyan-500/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-transparent futuristic-input"
                    placeholder="Enter your email"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Company Name
                  </label>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-slate-800/50 border border-cyan-500/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-transparent futuristic-input"
                    placeholder="Enter your company name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-slate-800/50 border border-cyan-500/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-transparent futuristic-input"
                    placeholder="Enter your phone number"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Service Interest
                  </label>
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-slate-800/50 border border-cyan-500/30 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-transparent futuristic-input"
                  >
                    <option value="">Select a service</option>
                    <option value="ai-consultation">AI Strategy Consultation</option>
                    <option value="it-review">IT Infrastructure Review</option>
                    <option value="digital-transformation">Digital Transformation Planning</option>
                    <option value="custom-solution">Custom Solution Design</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Preferred Time
                  </label>
                  <select
                    name="preferredTime"
                    value={formData.preferredTime}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-slate-800/50 border border-cyan-500/30 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-transparent futuristic-input"
                  >
                    <option value="">Select preferred time</option>
                    <option value="morning">Morning (9 AM - 12 PM)</option>
                    <option value="afternoon">Afternoon (12 PM - 5 PM)</option>
                    <option value="evening">Evening (5 PM - 8 PM)</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Project Description
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={4}
                  className="w-full px-4 py-3 bg-slate-800/50 border border-cyan-500/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-transparent futuristic-input"
                  placeholder="Tell us about your project and what you hope to achieve..."
                />
              </div>

              <div className="text-center">
                <button
                  type="submit"
                  className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 flex items-center justify-center mx-auto quantum-button"
                >
                  <Calendar className="w-5 h-5 mr-2" />
                  Schedule Consultation
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-4 neon-text-enhanced">
              What Our Clients Say
            </h2>
            <p className="text-xl text-gray-300">
              Don't just take our word for it
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="holographic-card-advanced cyber-card-enhanced rounded-2xl p-6 hover-quantum">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-300 mb-4 italic">
                  "{testimonial.text}"
                </p>
                <div>
                  <p className="text-white font-semibold">{testimonial.name}</p>
                  <p className="text-cyan-400 text-sm">{testimonial.company}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-6 neon-text-enhanced">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Schedule your free consultation today and take the first step towards digital transformation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 flex items-center justify-center quantum-button">
              <Zap className="w-5 h-5 mr-2" />
              Get Started Today
            </button>
            <button className="border-2 border-white text-white hover:bg-white hover:text-gray-900 px-8 py-4 rounded-lg font-semibold transition-all duration-300">
              <Phone className="w-5 h-5 mr-2 inline" />
              Call: (302) 464-0950
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default ConsultationPage