'use client';
import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
<<<<<<< HEAD
import { Calendar, Phone, Mail, CheckCircle, ArrowRight, Star, Users, Clock, Shield, Brain, Cloud, Zap, Globe, Settings, Database, Eye, Sparkles, BookOpen, FileText, Download } from 'lucide-react';
=======
import { Link } from 'react-router-dom';
import { Calendar, Phone, Mail, CheckCircle, ArrowRight, Star, Users, Clock, Shield, Brain, Cloud, Zap, Globe, Settings, Database, BarChart } from 'lucide-react';
>>>>>>> cursor/fix-errors-and-merge-to-main-b629

const ConsultationPage: React.FC = () => {
  const [selectedService, setSelectedService] = useState('ai-services');
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

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const services = [
    {
      id: 'ai-services',
      title: 'AI Solutions',
      description: 'Transform your business with cutting-edge artificial intelligence',
      icon: Brain,
      features: ['Machine Learning', 'Natural Language Processing', 'Computer Vision', 'Predictive Analytics']
    },
    {
      id: 'cloud-services',
      title: 'Cloud Infrastructure',
      description: 'Scalable and secure cloud solutions for your business',
      icon: Cloud,
      features: ['AWS/Azure/GCP', 'Migration Services', 'DevOps', 'Auto-scaling']
    },
    {
      id: 'data-analytics',
      title: 'Data Analytics',
      description: 'Turn your data into actionable business insights',
      icon: Database,
      features: ['Data Visualization', 'Business Intelligence', 'ETL Processes', 'Real-time Analytics']
    },
    {
      id: 'cybersecurity',
      title: 'Cybersecurity',
      description: 'Protect your business with comprehensive security solutions',
      icon: Shield,
      features: ['Security Audits', 'Penetration Testing', 'Compliance', '24/7 Monitoring']
    }
  ];

  const consultationTypes = [
    {
<<<<<<< HEAD
      icon: Zap,
      title: 'Quick Consultation',
      duration: '30 minutes',
      description: 'Perfect for initial discussions and basic questions',
      price: 'Free'
    },
    {
      icon: Star,
      title: 'Strategic Consultation',
      duration: '1 hour',
      description: 'Comprehensive analysis and detailed recommendations',
      price: '$500'
    },
    {
      icon: Globe,
      title: 'Enterprise Consultation',
      duration: '2+ hours',
      description: 'In-depth analysis for large-scale implementations',
      price: 'Custom'
=======
      icon: Calendar,
      title: 'Free Initial Consultation',
      duration: '30 minutes',
      price: 'Free',
      description: 'Get started with a free consultation to discuss your needs',
      features: ['Needs Assessment', 'Solution Overview', 'Next Steps Planning']
    },
    {
      icon: Settings,
      title: 'Technical Deep Dive',
      duration: '60 minutes',
      price: '$200',
      description: 'Detailed technical consultation with our experts',
      features: ['Technical Analysis', 'Architecture Review', 'Implementation Plan']
    },
    {
      icon: Globe,
      title: 'Strategic Planning Session',
      duration: '90 minutes',
      price: '$500',
      description: 'Comprehensive strategic planning for your digital transformation',
      features: ['Strategic Assessment', 'Roadmap Development', 'Resource Planning']
>>>>>>> cursor/fix-errors-and-merge-to-main-b629
    }
  ];

  const benefits = [
    'Free initial consultation',
    'Customized recommendations',
    'No obligation to proceed',
    'Expert technical advice',
    'Detailed project roadmap',
    'Cost and timeline estimates'
  ];

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
    setIsSubmitted(true);
  };

  return (
    <>
      <Helmet>
        <title>Free Consultation - Zion Tech Group | Get Expert Advice</title>
        <meta name="description" content="Get a free consultation with our AI and IT experts. Discuss your project needs and get personalized recommendations for your business." />
        <meta name="keywords" content="free consultation, AI consulting, IT consulting, expert advice, project planning, Zion Tech Group" />
      </Helmet>

<<<<<<< HEAD
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(147,51,234,0.3)_0%,transparent_50%)] animate-pulse" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.3)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }} />
          <div className="relative max-w-7xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              Free
              <span className="block bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
                Consultation
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
              Get expert advice on your AI and IT projects. No obligation, just valuable insights.
=======
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900">
        <div className="container mx-auto px-4 py-16">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-white mb-6">
              Free <span className="text-cyan-400">Consultation</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Get expert advice on how to transform your business with AI and technology. 
              Schedule a free consultation with our specialists today.
>>>>>>> cursor/fix-errors-and-merge-to-main-b629
            </p>
          </div>
        </section>

<<<<<<< HEAD
        {/* Services Selection */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                What Can We Help You With?
              </h2>
              <p className="text-gray-300 max-w-3xl mx-auto">
                Select the service area you're most interested in to get personalized recommendations
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {services.map((service) => (
                <button
                  key={service.id}
                  onClick={() => setSelectedService(service.id)}
                  className={`p-6 rounded-2xl border transition-all duration-300 text-left ${
                    selectedService === service.id
                      ? 'bg-cyan-500/20 border-cyan-400 text-white'
                      : 'bg-white/5 border-white/10 text-gray-300 hover:bg-white/10 hover:border-cyan-400/50'
                  }`}
                >
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center mb-4">
                    <service.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                  <p className="text-sm opacity-90 mb-4">{service.description}</p>
                  <ul className="space-y-1">
                    {service.features.map((feature, index) => (
                      <li key={index} className="text-xs opacity-75 flex items-center">
                        <CheckCircle className="w-3 h-3 text-cyan-400 mr-2" />
=======
          {/* Services Selection */}
          <div className="mb-16">
            <h2 className="text-4xl font-bold text-white mb-8 text-center">Choose Your Focus Area</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {services.map((service) => (
                <div
                  key={service.id}
                  onClick={() => setSelectedService(service.id)}
                  className={`p-6 rounded-xl border-2 cursor-pointer transition-all duration-300 ${
                    selectedService === service.id
                      ? 'border-cyan-400 bg-cyan-400/10'
                      : 'border-white/20 bg-white/5 hover:bg-white/10'
                  }`}
                >
                  <service.icon className="w-12 h-12 text-cyan-400 mb-4" />
                  <h3 className="text-xl font-bold text-white mb-2">{service.title}</h3>
                  <p className="text-gray-300 text-sm mb-4">{service.description}</p>
                  <ul className="space-y-1">
                    {service.features.map((feature, index) => (
                      <li key={index} className="text-gray-400 text-sm flex items-center">
                        <CheckCircle className="w-3 h-3 text-cyan-400 mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Consultation Types */}
          <div className="mb-16">
            <h2 className="text-4xl font-bold text-white mb-8 text-center">Consultation Options</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {consultationTypes.map((type, index) => (
                <div
                  key={index}
                  className="bg-white/5 backdrop-blur-lg rounded-xl p-8 border border-white/10 hover:bg-white/10 transition-all duration-300"
                >
                  <type.icon className="w-12 h-12 text-cyan-400 mb-4" />
                  <h3 className="text-2xl font-bold text-white mb-2">{type.title}</h3>
                  <p className="text-gray-300 mb-4">{type.description}</p>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-2xl font-bold text-cyan-400">{type.price}</span>
                    <span className="text-gray-400">{type.duration}</span>
                  </div>
                  <ul className="space-y-2 mb-6">
                    {type.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-300">
                        <CheckCircle className="w-4 h-4 text-cyan-400 mr-2" />
>>>>>>> cursor/fix-errors-and-merge-to-main-b629
                        {feature}
                      </li>
                    ))}
                  </ul>
<<<<<<< HEAD
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Consultation Types */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Choose Your Consultation Type
              </h2>
              <p className="text-gray-300 max-w-3xl mx-auto">
                Select the consultation that best fits your needs and timeline
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {consultationTypes.map((type, index) => (
                <div
                  key={index}
                  className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 hover:border-cyan-400/50 transition-all duration-300 text-center"
                >
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <type.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">{type.title}</h3>
                  <p className="text-cyan-400 font-semibold mb-4">{type.price}</p>
                  <p className="text-gray-300 mb-4">{type.description}</p>
                  <div className="flex items-center justify-center text-gray-400 mb-6">
                    <Clock className="w-4 h-4 mr-2" />
                    <span>{type.duration}</span>
                  </div>
                  <button className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-bold py-3 px-6 rounded-lg transition-all duration-300">
=======
                  <button className="w-full bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300">
>>>>>>> cursor/fix-errors-and-merge-to-main-b629
                    Book Now
                  </button>
                </div>
              ))}
<<<<<<< HEAD
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                  Why Choose Our Consultation?
                </h2>
                <p className="text-gray-300 mb-8 text-lg">
                  Our expert consultants have years of experience helping businesses 
                  transform with AI and IT solutions. Get personalized advice tailored 
                  to your specific needs.
                </p>
                <ul className="space-y-4">
                  {benefits.map((benefit, index) => (
                    <li key={index} className="flex items-center text-gray-300">
                      <CheckCircle className="w-6 h-6 text-cyan-400 mr-3 flex-shrink-0" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
                <h3 className="text-2xl font-bold text-white mb-6">What to Expect</h3>
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="w-8 h-8 bg-cyan-500 rounded-full flex items-center justify-center mr-4 mt-1">
                      <span className="text-white font-bold text-sm">1</span>
                    </div>
                    <div>
                      <h4 className="text-white font-semibold mb-1">Initial Discussion</h4>
                      <p className="text-gray-300 text-sm">We'll discuss your current challenges and goals</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-8 h-8 bg-cyan-500 rounded-full flex items-center justify-center mr-4 mt-1">
                      <span className="text-white font-bold text-sm">2</span>
                    </div>
                    <div>
                      <h4 className="text-white font-semibold mb-1">Technical Analysis</h4>
                      <p className="text-gray-300 text-sm">We'll analyze your current systems and infrastructure</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-8 h-8 bg-cyan-500 rounded-full flex items-center justify-center mr-4 mt-1">
                      <span className="text-white font-bold text-sm">3</span>
                    </div>
                    <div>
                      <h4 className="text-white font-semibold mb-1">Recommendations</h4>
                      <p className="text-gray-300 text-sm">We'll provide detailed recommendations and next steps</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Consultation Form */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-white mb-4">
                  Schedule Your Consultation
                </h2>
                <p className="text-gray-300">
                  Fill out the form below and we'll get back to you within 24 hours
                </p>
              </div>

              {isSubmitted ? (
                <div className="text-center py-12">
                  <CheckCircle className="w-16 h-16 text-green-400 mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-white mb-2">Consultation Requested!</h3>
                  <p className="text-gray-300 mb-6">
                    Thank you for your interest. We'll contact you within 24 hours to schedule your consultation.
                  </p>
                  <button
                    onClick={() => setIsSubmitted(false)}
                    className="bg-cyan-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-cyan-700 transition-colors"
                  >
                    Request Another Consultation
                  </button>
                </div>
              ) : (
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
                        className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                        placeholder="Your full name"
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
                        className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="company" className="block text-sm font-medium text-gray-300 mb-2">
                        Company
                      </label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                        placeholder="Your company name"
                      />
                    </div>
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
                        className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                        placeholder="+1 (555) 123-4567"
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
                        className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                      >
                        <option value="">Select a service</option>
                        {services.map((service) => (
                          <option key={service.id} value={service.id} className="bg-gray-800">
                            {service.title}
                          </option>
                        ))}
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
                        className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                      >
                        <option value="">Select budget range</option>
                        <option value="under-10k" className="bg-gray-800">Under $10,000</option>
                        <option value="10k-50k" className="bg-gray-800">$10,000 - $50,000</option>
                        <option value="50k-100k" className="bg-gray-800">$50,000 - $100,000</option>
                        <option value="100k-plus" className="bg-gray-800">$100,000+</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="timeline" className="block text-sm font-medium text-gray-300 mb-2">
                      Project Timeline
                    </label>
                    <select
                      id="timeline"
                      name="timeline"
                      value={formData.timeline}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                    >
                      <option value="">Select timeline</option>
                      <option value="asap" className="bg-gray-800">ASAP</option>
                      <option value="1-3-months" className="bg-gray-800">1-3 months</option>
                      <option value="3-6-months" className="bg-gray-800">3-6 months</option>
                      <option value="6-months-plus" className="bg-gray-800">6+ months</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                      Additional Information
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      rows={6}
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent resize-none"
                      placeholder="Tell us more about your project, challenges, or specific questions..."
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 disabled:from-gray-500 disabled:to-gray-600 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 disabled:scale-100 disabled:cursor-not-allowed flex items-center justify-center"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2" />
                        Submitting...
                      </>
                    ) : (
                      <>
                        <Calendar className="w-5 h-5 mr-2" />
                        Schedule Consultation
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </section>
=======
            </div>
          </div>

          {/* Benefits */}
          <div className="mb-16">
            <h2 className="text-4xl font-bold text-white mb-8 text-center">Why Choose Our Consultation?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <div
                  key={index}
                  className="text-center"
                >
                  <benefit.icon className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-white mb-2">{benefit.title}</h3>
                  <p className="text-gray-300">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10">
            <h2 className="text-3xl font-bold text-white mb-8 text-center">Schedule Your Consultation</h2>
            <form onSubmit={handleSubmit} className="max-w-2xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block text-white mb-2">Name *</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400"
                    placeholder="Your full name"
                  />
                </div>
                <div>
                  <label className="block text-white mb-2">Email *</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400"
                    placeholder="your@email.com"
                  />
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block text-white mb-2">Company</label>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400"
                    placeholder="Your company name"
                  />
                </div>
                <div>
                  <label className="block text-white mb-2">Phone</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400"
                    placeholder="Your phone number"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block text-white mb-2">Budget Range</label>
                  <select
                    name="budget"
                    value={formData.budget}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-400"
                  >
                    <option value="">Select budget range</option>
                    <option value="under-10k">Under $10,000</option>
                    <option value="10k-50k">$10,000 - $50,000</option>
                    <option value="50k-100k">$50,000 - $100,000</option>
                    <option value="over-100k">Over $100,000</option>
                  </select>
                </div>
                <div>
                  <label className="block text-white mb-2">Timeline</label>
                  <select
                    name="timeline"
                    value={formData.timeline}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-400"
                  >
                    <option value="">Select timeline</option>
                    <option value="asap">ASAP</option>
                    <option value="1-3months">1-3 months</option>
                    <option value="3-6months">3-6 months</option>
                    <option value="6-12months">6-12 months</option>
                    <option value="flexible">Flexible</option>
                  </select>
                </div>
              </div>

              <div className="mb-6">
                <label className="block text-white mb-2">Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={4}
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400"
                  placeholder="Tell us about your project and what you'd like to discuss..."
                />
              </div>

              <div className="text-center">
                <button
                  type="submit"
                  className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center space-x-2 mx-auto"
                >
                  <Calendar className="w-5 h-5" />
                  <span>Schedule Consultation</span>
                </button>
              </div>
            </form>
          </div>
        </div>
>>>>>>> cursor/fix-errors-and-merge-to-main-b629
      </div>
    </>
  );
};

export default ConsultationPage;