<<<<<<< HEAD
'use client'
import React, { useState } from 'react'
import { ArrowRight, Calendar, Clock, User, Mail, Phone, Building, CheckCircle } from 'lucide-react'

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
  }))
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    })))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault())
    if (process.env.NODE_ENV === 'development') {
      console.log('Consultation form submitted:', formData))
    }
  }

  const services = [
    'AI Solutions',
    'Cloud Infrastructure',
    'Cybersecurity',
    'Custom Development',
    'Data Analytics',
    'DevOps & Automation',
    'IT Support',
    'Other'
  ]

  const timeSlots = [
    '9:00 AM - 10:00 AM',
    '10:00 AM - 11:00 AM',
    '11:00 AM - 12:00 PM',
    '1:00 PM - 2:00 PM',
    '2:00 PM - 3:00 PM',
    '3:00 PM - 4:00 PM',
    '4:00 PM - 5:00 PM'
  ]

  const benefits = [
    'Free initial consultation',
    'Customized solution recommendations',
    'No obligation to proceed',
    'Expert technical advice',
    'Detailed project roadmap',
    'Competitive pricing'
  ]

  return (
    <div>
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900"></div>
        <section className="relative py-20 px-4 overflow-hidden"></section>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.3)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }} /></div>
        <div className="relative max-w-7xl mx-auto text-center"></div>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Free <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Consultation</span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Get expert advice on your technology needs. Schedule a free consultation with our team to discuss AI solutions, 
            cloud infrastructure, and digital transformation.
          </p>
        </div>
      </section>

      {/* Consultation Form Section */}
      <section className="py-20 bg-gray-900/50"></section>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8"></div>
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8"></div>
              <h2 className="text-2xl font-bold text-white mb-6">Schedule Your Consultation</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6"></div>
                  <div></div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
const required = null;
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
                      placeholder="Your full name"
                    />
                  </div>
                  <div></div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
const required = null;
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6"></div>
                  <div></div>
                    <label htmlFor="company" className="block text-sm font-medium text-gray-300 mb-2">
const Company = null;
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
                      placeholder="Your company name"
                    />
                  </div>
                  <div></div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
                      placeholder="+1 (555) 123-4567"
                    />
                  </div>
                </div>

                <div></div>
                  <label htmlFor="service" className="block text-sm font-medium text-gray-300 mb-2">
                    Service Interest *
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleInputChange}
const required = null;
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                  >
                    <option value="">Select a service</option>
                    {services.map((service) => (
                      <option key={service} value={service} className="bg-gray-800">
                        {service}
                      </option>
                    ))}
                  </select>
                </div>

                <div></div>
                  <label htmlFor="preferredTime" className="block text-sm font-medium text-gray-300 mb-2">
                    Preferred Time
                  </label>
                  <select
                    id="preferredTime"
                    name="preferredTime"
                    value={formData.preferredTime}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                  >
                    <option value="">Select preferred time</option>
                    {timeSlots.map((time) => (
                      <option key={time} value={time} className="bg-gray-800">
                        {time}
                      </option>
                    ))}
                  </select>
                </div>

                <div></div>
                  <label htmlFor="budget" className="block text-sm font-medium text-gray-300 mb-2">
                    Project Budget
                  </label>
                  <select
                    id="budget"
                    name="budget"
                    value={formData.budget}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                  >
                    <option value="">Select budget range</option>
                    <option value="under-10k" className="bg-gray-800">Under $10,000</option>
                    <option value="10k-50k" className="bg-gray-800">$10,000 - $50,000</option>
                    <option value="50k-100k" className="bg-gray-800">$50,000 - $100,000</option>
                    <option value="100k-plus" className="bg-gray-800">$100,000+</option>
                  </select>
                </div>

                <div></div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                    Project Details
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={4}
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
                    placeholder="Tell us about your project requirements, challenges, and goals..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-purple-700 hover:to-blue-700 transition-all duration-300 flex items-center justify-center"
                >
                  Schedule Consultation
                  <ArrowRight className="w-5 h-5 ml-2" />
                </button>
              </form>
            </div>


            <div className="space-y-8"></div>
              <div></div>
                <h2 className="text-2xl font-bold text-white mb-6">Why Choose Our Consultation?</h2>
                <div className="space-y-4"></div>
                  {benefits.map((benefit, index) => (
                    <div key={index} className="flex items-start"></div>
                      <CheckCircle className="w-6 h-6 text-purple-400 mr-3 flex-shrink-0 mt-1" />
                      <span className="text-gray-300">{benefit}</span>
        {/* Hero Section */}
        <section className="relative py-20 px-4 overflow-hidden"></section>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.3)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }} /></div>
          <div className="relative max-w-7xl mx-auto text-center"></div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Free <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Consultation</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Get expert advice on your technology needs. Schedule a free consultation with our team to discuss AI solutions, 
              cloud infrastructure, and digital transformation.
=======
'use client';
import React, { useState } from 'react';
import { Calendar, Phone, Mail, CheckCircle, ArrowRight, Star, Users, Clock, Shield, Brain, Cloud, Zap } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import SEOOptimizer from '../components/SEOOptimizer';

const ConsultationPage: React.FC = () => {
  const [selectedService, setSelectedService] = useState('ai-services');

  const services = [
    {
      id: 'ai-services',
      title: 'AI Services Consultation',
      description: 'Get expert advice on AI implementation, strategy, and optimization',
      icon: Brain,
      duration: '60 minutes',
      price: 'Free',
      features: [
        'AI strategy assessment',
        'Implementation roadmap',
        'Technology recommendations',
        'ROI analysis'
      ]
    },
    {
      id: 'cloud-solutions',
      title: 'Cloud Solutions Consultation',
      description: 'Expert guidance on cloud migration, architecture, and optimization',
      icon: Cloud,
      duration: '90 minutes',
      price: 'Free',
      features: [
        'Cloud readiness assessment',
        'Migration planning',
        'Cost optimization',
        'Security recommendations'
      ]
    },
    {
      id: 'cybersecurity',
      title: 'Cybersecurity Consultation',
      description: 'Comprehensive security assessment and strategy development',
      icon: Shield,
      duration: '120 minutes',
      price: 'Free',
      features: [
        'Security audit',
        'Threat assessment',
        'Compliance review',
        'Security roadmap'
      ]
    },
    {
      id: 'custom',
      title: 'Custom Consultation',
      description: 'Tailored consultation for your specific business needs and challenges',
      icon: Zap,
      duration: 'Custom',
      price: 'Free',
      features: [
        'Custom analysis',
        'Bespoke solutions',
        'Strategic planning',
        'Ongoing support'
      ]
    }
  ];

  const consultationSteps = [
    {
      step: 1,
      title: 'Schedule Consultation',
      description: 'Choose your preferred time and consultation type',
      icon: Calendar
    },
    {
      step: 2,
      title: 'Initial Assessment',
      description: 'We analyze your current situation and requirements',
      icon: Users
    },
    {
      step: 3,
      title: 'Expert Consultation',
      description: 'Meet with our experts for personalized advice',
      icon: Clock
    },
    {
      step: 4,
      title: 'Action Plan',
      description: 'Receive a detailed roadmap and next steps',
      icon: CheckCircle
    }
  ];

  const benefits = [
    {
      icon: Star,
      title: 'Expert Guidance',
      description: 'Get advice from industry-leading experts with years of experience'
    },
    {
      icon: CheckCircle,
      title: 'No Obligation',
      description: 'Free consultation with no commitment required'
    },
    {
      icon: Users,
      title: 'Personalized Solutions',
      description: 'Tailored recommendations based on your specific needs'
    }
  ];

  const selectedServiceData = services.find(service => service.id === selectedService);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <SEOOptimizer
        title="Free Consultation - Zion Tech Group"
        description="Get expert advice on AI, cloud, and cybersecurity solutions. Schedule a free consultation with our technical experts."
        keywords={["free consultation","AI consultation","cloud consultation","cybersecurity consultation","expert advice"]}
        canonicalUrl="https://ziontechgroup.com/consultation"
      />

      <Navigation />

      <main className="container mx-auto px-4 py-16 pt-24">
        {/* Hero Section */}
        <section className="text-center mb-16">
          <div className="max-w-4xl mx-auto">
            <div className="w-20 h-20 bg-gradient-to-br from-cyan-400 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Users className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              Free Consultation
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Get expert advice on AI, cloud, and cybersecurity solutions. Schedule a free consultation with our technical experts.
>>>>>>> main
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href="#schedule"
                className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-600 transition-all duration-300">
                Schedule Now
              </a>
              <a
                href="tel:+1-302-464-0950"
                className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-white transition-all duration-300">
                Call Us
              </a>
            </div>
          </div>
        </section>

<<<<<<< HEAD
        {/* Consultation Form */}
        <section className="py-20 px-4"></section>
          <div className="max-w-4xl mx-auto"></div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12"></div>
              {/* Form */}
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8"></div>
                <h2 className="text-2xl font-bold text-white mb-6">Schedule Your Consultation</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6"></div>
                    <div></div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
const required = null;
                        className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
                        placeholder="Your full name"
                      />
                    </div>
                    <div></div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
const required = null;
                        className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6"></div>
                    <div></div>
                      <label htmlFor="company" className="block text-sm font-medium text-gray-300 mb-2">
const Company = null;
                      </label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
                        placeholder="Your company name"
                      />
                    </div>
                    <div></div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
                        placeholder="+1 (555) 123-4567"
                      />
                    </div>
                  </div>

                  <div></div>
                    <label htmlFor="service" className="block text-sm font-medium text-gray-300 mb-2">
                      Service Interest *
                    </label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleInputChange}
const required = null;
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                    >
                      <option value="">Select a service</option>
                      {services.map((service) => (
                        <option key={service} value={service} className="bg-gray-800">
                          {service}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div></div>
                    <label htmlFor="preferredTime" className="block text-sm font-medium text-gray-300 mb-2">
                      Preferred Time
                    </label>
                    <select
                      id="preferredTime"
                      name="preferredTime"
                      value={formData.preferredTime}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                    >
                      <option value="">Select preferred time</option>
                      {timeSlots.map((time) => (
                        <option key={time} value={time} className="bg-gray-800">
                          {time}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div></div>
                    <label htmlFor="budget" className="block text-sm font-medium text-gray-300 mb-2">
                      Project Budget
                    </label>
                    <select
                      id="budget"
                      name="budget"
                      value={formData.budget}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                    >
                      <option value="">Select budget range</option>
                      <option value="under-10k" className="bg-gray-800">Under $10,000</option>
                      <option value="10k-50k" className="bg-gray-800">$10,000 - $50,000</option>
                      <option value="50k-100k" className="bg-gray-800">$50,000 - $100,000</option>
                      <option value="100k-plus" className="bg-gray-800">$100,000+</option>
                    </select>
                  </div>

                  <div></div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                      Project Details
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      rows={4}
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
                      placeholder="Tell us about your project requirements, challenges, and goals..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-purple-700 hover:to-blue-700 transition-all duration-300 flex items-center justify-center"
                  >
                    Schedule Consultation
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </button>
                </form>
              </div>

              {/* Benefits & Info */}
              <div className="space-y-8"></div>
                <div></div>
                  <h2 className="text-2xl font-bold text-white mb-6">Why Choose Our Consultation?</h2>
                  <div className="space-y-4"></div>
                    {benefits.map((benefit, index) => (
                      <div key={index} className="flex items-start"></div>
                        <CheckCircle className="w-6 h-6 text-purple-400 mr-3 flex-shrink-0 mt-1" />
                        <span className="text-gray-300">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6"></div>
                  <h3 className="text-xl font-bold text-white mb-4">What to Expect</h3>
                  <ul className="space-y-3 text-gray-300">
                    <li className="flex items-start">
                      <Calendar className="w-5 h-5 text-purple-400 mr-3 flex-shrink-0 mt-1" />
                      <span>30-60 minute consultation call</span>
                    </li>
                    <li className="flex items-start">
                      <User className="w-5 h-5 text-purple-400 mr-3 flex-shrink-0 mt-1" />
                      <span>Direct access to our technical experts</span>
                    </li>
                    <li className="flex items-start">
                      <Clock className="w-5 h-5 text-purple-400 mr-3 flex-shrink-0 mt-1" />
                      <span>Detailed project timeline and roadmap</span>
                    </li>
                    <li className="flex items-start">
                      <Mail className="w-5 h-5 text-purple-400 mr-3 flex-shrink-0 mt-1" />
                      <span>Follow-up with detailed proposal</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-gradient-to-br from-purple-500/20 to-blue-600/20 rounded-xl p-6"></div>
                  <h3 className="text-xl font-bold text-white mb-4">Contact Information</h3>
                  <div className="space-y-3 text-gray-300"></div>
                    <div className="flex items-center"></div>
                      <Mail className="w-5 h-5 text-purple-400 mr-3" />
                      <span>consultation@ziontechgroup.com</span>
                    </div>
                    <div className="flex items-center"></div>
                      <Phone className="w-5 h-5 text-purple-400 mr-3" />
                      <span>+1 (555) 123-4567</span>
                    </div>
                    <div className="flex items-center"></div>
                      <Building className="w-5 h-5 text-purple-400 mr-3" />
                      <span>Available Monday - Friday, 9 AM - 6 PM EST</span>
                    </div>
=======
        {/* Consultation Types */}
        <section className="mb-16">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-2xl font-bold text-white mb-8 text-center">Choose Your Consultation Type</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {services.map((service) => (
                <div
                  key={service.id}
                  onClick={() => setSelectedService(service.id)}
                  className={`cursor-pointer bg-white/5 backdrop-blur-sm rounded-xl p-6 border transition-all duration-300 hover:scale-105 ${
                    selectedService === service.id
                      ? 'border-cyan-400/50 ring-2 ring-cyan-400/20'
                      : 'border-white/10 hover:border-white/20'
                  }`}
                >
                  <div className="text-center">
                    <div className="w-12 h-12 bg-gradient-to-br from-cyan-400 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                      <service.icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-lg font-semibold text-white mb-2">{service.title}</h3>
                    <p className="text-gray-300 text-sm mb-4">{service.description}</p>
                    <div className="text-cyan-400 font-medium text-sm mb-2">{service.duration}</div>
                    <div className="text-green-400 font-medium text-sm">{service.price}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Selected Service Details */}
        {selectedServiceData && (
          <section className="mb-16">
            <div className="max-w-4xl mx-auto">
              <div className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10">
                <div className="text-center mb-8">
                  <div className="w-16 h-16 bg-gradient-to-br from-cyan-400 to-purple-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <selectedServiceData.icon className="w-8 h-8 text-white" />
                  </div>
                  <h2 className="text-2xl font-bold text-white mb-4">{selectedServiceData.title}</h2>
                  <p className="text-gray-300 mb-6">{selectedServiceData.description}</p>
                  <div className="flex items-center justify-center gap-4 text-sm">
                    <div className="text-cyan-400 font-medium">{selectedServiceData.duration}</div>
                    <div className="text-green-400 font-medium">{selectedServiceData.price}</div>
                  </div>
                </div>
                
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-4">What's Included:</h3>
                    <ul className="space-y-3">
                      {selectedServiceData.features.map((feature, index) => (
                        <li key={index} className="flex items-center gap-3">
                          <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                          <span className="text-gray-300">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-4">Why Choose This Consultation?</h3>
                    <ul className="space-y-3">
                      <li className="flex items-center gap-3">
                        <Star className="w-5 h-5 text-yellow-400 flex-shrink-0" />
                        <span className="text-gray-300">Expert guidance from industry professionals</span>
                      </li>
                      <li className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                        <span className="text-gray-300">No obligation or commitment required</span>
                      </li>
                      <li className="flex items-center gap-3">
                        <Users className="w-5 h-5 text-blue-400 flex-shrink-0" />
                        <span className="text-gray-300">Personalized recommendations for your business</span>
                      </li>
                    </ul>
>>>>>>> main
                  </div>
                </div>
              </div>
            </div>
<<<<<<< HEAD
          </div>
        </section>
      </div>
    </div>
  ))
}

export default ConsultationPage
=======
          </section>
        )}

        {/* Consultation Process */}
        <section className="mb-16">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-2xl font-bold text-white mb-8 text-center">How It Works</h2>
            <div className="grid md:grid-cols-4 gap-6">
              {consultationSteps.map((step) => (
                <div key={step.step} className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 text-center">
                  <div className="w-12 h-12 bg-gradient-to-br from-cyan-400 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <step.icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="text-cyan-400 font-bold text-lg mb-2">Step {step.step}</div>
                  <h3 className="text-lg font-semibold text-white mb-2">{step.title}</h3>
                  <p className="text-gray-300 text-sm">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="mb-16">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-2xl font-bold text-white mb-8 text-center">Why Choose Our Consultation?</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 text-center">
                  <div className="w-12 h-12 bg-gradient-to-br from-cyan-400 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <benefit.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-3">{benefit.title}</h3>
                  <p className="text-gray-300 text-sm">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Schedule Section */}
        <section id="schedule" className="text-center">
          <div className="max-w-2xl mx-auto">
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <h2 className="text-2xl font-bold text-white mb-4">
                Ready to Get Started?
              </h2>
              <p className="text-gray-300 mb-8">
                Schedule your free consultation today and take the first step towards transforming your business.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <a
                  href="mailto:consultation@ziontechgroup.com"
                  className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 flex items-center gap-2">
                  <Mail className="w-5 h-5" />
                  Email Us
                </a>
                <a
                  href="tel:+1-302-464-0950"
                  className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-white transition-all duration-300 flex items-center gap-2">
                  <Phone className="w-5 h-5" />
                  Call Us
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default ConsultationPage;
>>>>>>> main
