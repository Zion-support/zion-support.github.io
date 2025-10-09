'use client';
import React, { useState } from 'react';
import { Calendar, Clock, Users, CheckCircle, ArrowRight, Phone, Mail, MapPin, Star, Award, Zap, Brain, Shield } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import SEOOptimizer from '../components/SEOOptimizer';

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

  const [isSubmitted, setIsSubmitted] = useState(false);

  const consultationTypes = [
    {
      title: 'AI Strategy Consultation',
      duration: '60 minutes',
      price: 'Free',
      description: 'Comprehensive analysis of your AI readiness and strategic roadmap',
      features: [
        'Current state assessment',
        'AI opportunity identification',
        'Technology stack evaluation',
        'Implementation timeline',
        'ROI projections'
      ],
      icon: Brain,
      color: 'from-purple-500 to-pink-500'
    },
    {
      title: 'IT Infrastructure Review',
      duration: '90 minutes',
      price: 'Free',
      description: 'Complete evaluation of your IT infrastructure and optimization opportunities',
      features: [
        'Infrastructure audit',
        'Security assessment',
        'Performance analysis',
        'Cloud migration planning',
        'Cost optimization'
      ],
      icon: Shield,
      color: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'Digital Transformation Planning',
      duration: '120 minutes',
      price: 'Free',
      description: 'Strategic planning for comprehensive digital transformation',
      features: [
        'Business process analysis',
        'Technology roadmap',
        'Change management strategy',
        'Risk assessment',
        'Success metrics definition'
      ],
      icon: Zap,
      color: 'from-orange-500 to-red-500'
    }
  ];

  const experts = [
    {
      name: 'Dr. Sarah Chen',
      role: 'Chief AI Strategist',
      experience: '15+ years',
      specialties: ['Machine Learning', 'AI Strategy', 'Data Science'],
      image: '/api/placeholder/150/150'
    },
    {
      name: 'Michael Rodriguez',
      role: 'IT Infrastructure Director',
      experience: '12+ years',
      specialties: ['Cloud Architecture', 'DevOps', 'Security'],
      image: '/api/placeholder/150/150'
    },
    {
      name: 'Emily Johnson',
      role: 'Digital Transformation Lead',
      experience: '10+ years',
      specialties: ['Process Optimization', 'Change Management', 'Business Analysis'],
      image: '/api/placeholder/150/150'
    }
  ];

  const benefits = [
    {
      icon: CheckCircle,
      title: 'Expert Analysis',
      description: 'Get insights from industry-leading experts with decades of experience'
    },
    {
      icon: Award,
      title: 'Customized Solutions',
      description: 'Receive tailored recommendations based on your specific business needs'
    },
    {
      icon: Users,
      title: 'No Obligation',
      description: 'Free consultation with no pressure to purchase our services'
    },
    {
      icon: Clock,
      title: 'Quick Turnaround',
      description: 'Get your consultation scheduled within 24-48 hours'
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
    // Handle form submission here
    setIsSubmitted(true);
  };

  return (
    <>
      <SEOOptimizer
        title="Free Consultation - Zion Tech Group AI Solutions"
        description="Get expert advice on AI implementation, IT infrastructure, and digital transformation. Free consultation with our technology experts."
        keywords={['AI consultation', 'IT consultation', 'digital transformation consultation', 'free tech consultation', 'AI strategy planning']}
        canonicalUrl="https://ziontechgroup.com/consultation"
      />
      <Navigation />
      
      <main className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="pt-24 pb-16 px-4">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 neon-text">
              Free <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">Expert Consultation</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Get personalized advice from our technology experts. Discover how AI and digital transformation 
              can accelerate your business growth and solve your biggest challenges.
            </p>
            <div className="flex items-center justify-center space-x-6 text-sm text-gray-400">
              <div className="flex items-center">
                <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                <span>100% Free</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                <span>No Obligation</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                <span>Expert Insights</span>
              </div>
            </div>
          </div>
        </section>

        {/* Consultation Types */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-white mb-4">Choose Your Consultation</h2>
              <p className="text-gray-400">Select the type of consultation that best fits your needs</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {consultationTypes.map((consultation, index) => (
                <div key={index} className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700 hover:border-cyan-500 transition-all duration-300 hover:scale-105">
                  <div className="text-center mb-6">
                    <div className={`w-16 h-16 bg-gradient-to-r ${consultation.color} rounded-full flex items-center justify-center mx-auto mb-4`}>
                      <consultation.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-2">{consultation.title}</h3>
                    <div className="flex items-center justify-center space-x-4 text-sm text-gray-400 mb-4">
                      <div className="flex items-center">
                        <Clock className="w-4 h-4 mr-1" />
                        <span>{consultation.duration}</span>
                      </div>
                      <div className="flex items-center">
                        <span className="text-green-400 font-semibold">{consultation.price}</span>
                      </div>
                    </div>
                    <p className="text-gray-300">{consultation.description}</p>
                  </div>
                  
                  <ul className="space-y-3 mb-6">
                    {consultation.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-green-400 mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <button className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all">
                    Book This Consultation
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Our Experts */}
        <section className="py-16 px-4 bg-slate-800/30">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-white mb-4">Meet Our Experts</h2>
              <p className="text-gray-400">Learn from industry leaders with proven track records</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {experts.map((expert, index) => (
                <div key={index} className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 text-center border border-gray-700">
                  <div className="w-24 h-24 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <Users className="w-12 h-12 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-1">{expert.name}</h3>
                  <p className="text-cyan-400 mb-2">{expert.role}</p>
                  <p className="text-gray-400 text-sm mb-4">{expert.experience} experience</p>
                  <div className="flex flex-wrap justify-center gap-2">
                    {expert.specialties.map((specialty, specIndex) => (
                      <span key={specIndex} className="text-xs bg-slate-700 text-gray-300 px-2 py-1 rounded">
                        {specialty}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-white mb-4">Why Choose Our Consultation?</h2>
              <p className="text-gray-400">Get the most value from your consultation experience</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <benefit.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">{benefit.title}</h3>
                  <p className="text-gray-400">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Form */}
        <section className="py-16 px-4 bg-slate-800/30">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-white mb-4">Schedule Your Free Consultation</h2>
              <p className="text-gray-400">Fill out the form below and we'll get back to you within 24 hours</p>
            </div>
            
            {!isSubmitted ? (
              <form onSubmit={handleSubmit} className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label className="block text-white font-semibold mb-2">Full Name *</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-slate-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:border-cyan-500"
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
                      className="w-full px-4 py-3 bg-slate-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:border-cyan-500"
                      placeholder="Enter your email"
                    />
                  </div>
                  <div>
                    <label className="block text-white font-semibold mb-2">Company Name</label>
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-slate-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:border-cyan-500"
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
                      className="w-full px-4 py-3 bg-slate-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:border-cyan-500"
                      placeholder="Enter your phone number"
                    />
                  </div>
                  <div>
                    <label className="block text-white font-semibold mb-2">Service Interest</label>
                    <select
                      name="service"
                      value={formData.service}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-slate-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:border-cyan-500"
                    >
                      <option value="">Select a service</option>
                      <option value="ai-strategy">AI Strategy Consultation</option>
                      <option value="it-infrastructure">IT Infrastructure Review</option>
                      <option value="digital-transformation">Digital Transformation Planning</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-white font-semibold mb-2">Preferred Time</label>
                    <select
                      name="preferredTime"
                      value={formData.preferredTime}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-slate-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:border-cyan-500"
                    >
                      <option value="">Select preferred time</option>
                      <option value="morning">Morning (9 AM - 12 PM)</option>
                      <option value="afternoon">Afternoon (12 PM - 5 PM)</option>
                      <option value="evening">Evening (5 PM - 8 PM)</option>
                    </select>
                  </div>
                </div>
                
                <div className="mb-6">
                  <label className="block text-white font-semibold mb-2">Tell us about your challenges</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={4}
                    className="w-full px-4 py-3 bg-slate-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:border-cyan-500"
                    placeholder="Describe your current challenges and what you hope to achieve..."
                  />
                </div>
                
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white py-4 px-8 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all text-lg"
                >
                  Schedule Free Consultation
                  <ArrowRight className="w-5 h-5 ml-2 inline" />
                </button>
              </form>
            ) : (
              <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700 text-center">
                <CheckCircle className="w-16 h-16 text-green-400 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-white mb-4">Thank You!</h3>
                <p className="text-gray-300 mb-6">
                  Your consultation request has been submitted successfully. We'll contact you within 24 hours to schedule your free consultation.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a
                    href="/contact"
                    className="inline-flex items-center bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all"
                  >
                    <Phone className="w-5 h-5 mr-2" />
                    Call Us Now
                  </a>
                  <a
                    href="mailto:kleber@ziontechgroup.com"
                    className="inline-flex items-center bg-slate-700 text-white px-6 py-3 rounded-lg font-semibold hover:bg-slate-600 transition-all border border-gray-600"
                  >
                    <Mail className="w-5 h-5 mr-2" />
                    Email Us
                  </a>
                </div>
              </div>
            )}
          </div>
        </section>

        {/* Contact Info */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-white mb-8">Get in Touch</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="flex items-center justify-center space-x-3">
                <Phone className="w-6 h-6 text-cyan-400" />
                <div>
                  <p className="text-white font-semibold">(302) 464-0950</p>
                  <p className="text-gray-400 text-sm">Call us anytime</p>
                </div>
              </div>
              <div className="flex items-center justify-center space-x-3">
                <Mail className="w-6 h-6 text-cyan-400" />
                <div>
                  <p className="text-white font-semibold">kleber@ziontechgroup.com</p>
                  <p className="text-gray-400 text-sm">Email us</p>
                </div>
              </div>
              <div className="flex items-center justify-center space-x-3">
                <MapPin className="w-6 h-6 text-cyan-400" />
                <div>
                  <p className="text-white font-semibold">Middletown, DE</p>
                  <p className="text-gray-400 text-sm">Our location</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default ConsultationPage;