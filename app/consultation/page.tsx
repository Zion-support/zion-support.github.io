'use client';
import React, { useState } from 'react';
import { Calendar, Clock, User, Mail, Phone, CheckCircle, ArrowRight, Star, Award, Users, Zap } from 'lucide-react';
import SEOHead from '../components/EnhancedSEOHead';

const ConsultationPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: '',
    message: '',
    preferredTime: '',
    budget: ''
  });

  const services = [
    {
      title: 'AI Strategy & Implementation',
      description: 'Develop and implement AI strategies that drive business growth',
      icon: '🤖',
      duration: '2-4 hours',
      price: '$299/hour'
    },
    {
      title: 'Cloud Migration & Architecture',
      description: 'Plan and execute cloud migration with optimal architecture',
      icon: '☁️',
      duration: '3-6 hours',
      price: '$399/hour'
    },
    {
      title: 'Cybersecurity Assessment',
      description: 'Comprehensive security audit and risk assessment',
      icon: '🔒',
      duration: '4-8 hours',
      price: '$349/hour'
    },
    {
      title: 'Digital Transformation',
      description: 'Complete digital transformation strategy and roadmap',
      icon: '⚡',
      duration: '6-12 hours',
      price: '$449/hour'
    }
  ];

  const experts = [
    {
      name: 'Dr. Sarah Johnson',
      title: 'Chief AI Officer',
      experience: '15+ years',
      specialties: ['Machine Learning', 'AI Strategy', 'Data Science'],
      rating: 5.0,
      image: '/api/placeholder/200/200'
    },
    {
      name: 'Michael Chen',
      title: 'Cloud Solutions Architect',
      experience: '12+ years',
      specialties: ['AWS', 'Azure', 'DevOps'],
      rating: 4.9,
      image: '/api/placeholder/200/200'
    },
    {
      name: 'Lisa Rodriguez',
      title: 'Cybersecurity Expert',
      experience: '10+ years',
      specialties: ['Security Audits', 'Compliance', 'Risk Management'],
      rating: 5.0,
      image: '/api/placeholder/200/200'
    }
  ];

  const benefits = [
    'Expert guidance from industry veterans',
    'Personalized solutions for your business',
    'Actionable recommendations and roadmap',
    'Follow-up support and implementation guidance',
    'Access to our network of technology partners',
    'Comprehensive documentation and reports'
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
      <SEOHead
        title="Consultation - Zion Tech Group | Expert IT Consulting"
        description="Get expert consultation on AI, cloud computing, cybersecurity, and IT strategy. Book a consultation with our experienced team."
        keywords={['IT consultation', 'AI consulting', 'cloud consulting', 'cybersecurity consulting', 'technology strategy']}
        canonicalUrl="https://ziontechgroup.com/consultation"
      />

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 neon-text">
              Expert Consultation
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Get personalized guidance from our industry experts. Book a consultation to discuss your AI and IT needs 
              and discover how we can help transform your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#book-consultation"
                className="cyber-button text-center"
              >
                Book Free Consultation
                <ArrowRight className="w-4 h-4 ml-2 inline" />
              </a>
              <a
                href="tel:+13024640950"
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-indigo-600 transition-all duration-300"
              >
                Call: (302) 464-0950
              </a>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 neon-text">
                Consultation Services
              </h2>
              <p className="text-lg text-gray-300 max-w-3xl mx-auto">
                Choose from our range of expert consultation services tailored to your specific needs.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {services.map((service, index) => (
                <div key={index} className="cyber-card hologram-card p-6 text-center hover:scale-105 transition-all duration-300">
                  <div className="text-4xl mb-4">{service.icon}</div>
                  <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
                  <p className="text-gray-300 mb-4">{service.description}</p>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center justify-center text-cyan-400">
                      <Clock className="w-4 h-4 mr-2" />
                      {service.duration}
                    </div>
                    <div className="text-green-400 font-semibold">{service.price}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Our Experts */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 neon-text">
                Meet Our Experts
              </h2>
              <p className="text-lg text-gray-300 max-w-3xl mx-auto">
                Our team of experienced professionals brings decades of combined expertise in AI, cloud computing, and IT solutions.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {experts.map((expert, index) => (
                <div key={index} className="cyber-card hologram-card p-6 text-center hover:scale-105 transition-all duration-300">
                  <img
                    src={expert.image}
                    alt={expert.name}
                    className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
                  />
                  <h3 className="text-xl font-bold text-white mb-2">{expert.name}</h3>
                  <p className="text-cyan-400 font-semibold mb-2">{expert.title}</p>
                  <p className="text-gray-300 text-sm mb-4">{expert.experience} experience</p>
                  
                  <div className="flex items-center justify-center mb-4">
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                      ))}
                    </div>
                    <span className="ml-2 text-gray-300 text-sm">{expert.rating}</span>
                  </div>
                  
                  <div className="space-y-1">
                    {expert.specialties.map((specialty, specIndex) => (
                      <span
                        key={specIndex}
                        className="inline-block px-2 py-1 bg-gray-800 text-cyan-400 text-xs rounded-full mr-1 mb-1"
                      >
                        {specialty}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="cyber-card hologram-card p-8">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-white mb-4 neon-text">
                  Why Choose Our Consultation?
                </h2>
                <p className="text-lg text-gray-300 max-w-3xl mx-auto">
                  Our consultation services provide you with expert insights and actionable strategies to drive your business forward.
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-1" />
                    <span className="text-gray-300">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Booking Form */}
        <section id="book-consultation" className="py-16 px-4">
          <div className="max-w-4xl mx-auto">
            <div className="cyber-card hologram-card p-8">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-white mb-4 neon-text">
                  Book Your Consultation
                </h2>
                <p className="text-lg text-gray-300">
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
                      className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-colors"
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
                      className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-colors"
                      placeholder="Enter your email"
                    />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
                      className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-colors"
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
                      className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-colors"
                      placeholder="Enter your company name"
                    />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="service" className="block text-sm font-medium text-gray-300 mb-2">
                      Service Interest
                    </label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-colors"
                    >
                      <option value="">Select a service</option>
                      <option value="ai-strategy">AI Strategy & Implementation</option>
                      <option value="cloud-migration">Cloud Migration & Architecture</option>
                      <option value="cybersecurity">Cybersecurity Assessment</option>
                      <option value="digital-transformation">Digital Transformation</option>
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
                      className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-colors"
                    >
                      <option value="">Select budget range</option>
                      <option value="under-10k">Under $10,000</option>
                      <option value="10k-50k">$10,000 - $50,000</option>
                      <option value="50k-100k">$50,000 - $100,000</option>
                      <option value="100k-plus">$100,000+</option>
                    </select>
                  </div>
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                    Tell us about your project or requirements
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-colors"
                    placeholder="Describe your current challenges, goals, and what you hope to achieve..."
                  />
                </div>
                
                <div className="text-center">
                  <button
                    type="submit"
                    className="cyber-button text-center px-8 py-4"
                  >
                    Book Free Consultation
                    <ArrowRight className="w-4 h-4 ml-2 inline" />
                  </button>
                </div>
              </form>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="cyber-card hologram-card p-8">
              <h2 className="text-3xl font-bold text-white mb-4 neon-text">
                Ready to Transform Your Business?
              </h2>
              <p className="text-lg text-gray-300 mb-8">
                Don't wait to get started. Book your consultation today and take the first step towards digital transformation.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="tel:+13024640950"
                  className="cyber-button text-center"
                >
                  Call Now: (302) 464-0950
                </a>
                <a
                  href="mailto:consultation@ziontechgroup.com"
                  className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-indigo-600 transition-all duration-300"
                >
                  Email Us
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default ConsultationPage;