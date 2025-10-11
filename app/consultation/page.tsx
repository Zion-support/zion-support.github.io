<<<<<<< HEAD
import React from 'react';
<<<<<<< HEAD
import { CheckCircle, ArrowRight, Clock, Users, Award, Shield } from 'lucide-react';
=======
import React, { useState } from 'react';
import { CheckCircle, ArrowRight, Clock, Star, Phone, Mail, MapPin } from 'lucide-react';
>>>>>>> cursor/fix-errors-and-merge-to-main-371b
=======
import { CheckCircle, ArrowRight, Users, Clock, Star, Zap, Target } from 'lucide-react';
>>>>>>> cursor/fix-errors-and-merge-to-main-d296
import { Helmet } from 'react-helmet-async';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

<<<<<<< HEAD
<<<<<<< HEAD
const ConsultationPage: React.FC = () => {
  const consultationTypes = [
=======
interface ConsultationPackage {
=======
interface ConsultationService {
>>>>>>> cursor/fix-errors-and-merge-to-main-d296
  id: string;
  name: string;
  description: string;
  duration: string;
  price: string;
  features: string[];
  popular: boolean;
}

const ConsultationPage: React.FC = () => {
<<<<<<< HEAD
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    service: '',
    message: ''
  });

  const consultationPackages: ConsultationPackage[] = [
>>>>>>> cursor/fix-errors-and-merge-to-main-371b
=======
  const consultationServices: ConsultationService[] = [
>>>>>>> cursor/fix-errors-and-merge-to-main-d296
    {
      id: 'strategy',
      name: 'IT Strategy Consultation',
      description: 'Comprehensive analysis of your current IT infrastructure and strategic planning for digital transformation.',
      duration: '2-4 hours',
      price: '$500',
      features: [
        'Current IT assessment',
        'Technology roadmap development',
        'Budget planning and optimization',
        'Risk analysis and mitigation',
        'Implementation timeline'
      ],
      popular: true
    },
    {
      id: 'cloud',
      name: 'Cloud Migration Consultation',
      description: 'Expert guidance on migrating your infrastructure to the cloud with minimal disruption.',
      duration: '3-5 hours',
      price: '$750',
      features: [
        'Cloud readiness assessment',
        'Migration strategy development',
        'Cost optimization analysis',
        'Security and compliance review',
<<<<<<< HEAD
<<<<<<< HEAD
        'Implementation planning'
=======
        'Implementation roadmap'
>>>>>>> cursor/fix-errors-and-merge-to-main-371b
=======
        'Implementation roadmap'
>>>>>>> cursor/fix-errors-and-merge-to-main-d296
      ],
      popular: false
    },
    {
      id: 'ai',
      name: 'AI Implementation Consultation',
<<<<<<< HEAD
<<<<<<< HEAD
      description: 'Strategic guidance on integrating AI solutions into your business processes.',
=======
      description: 'Strategic guidance on implementing AI solutions to enhance your business operations.',
>>>>>>> cursor/fix-errors-and-merge-to-main-371b
=======
      description: 'Strategic guidance on implementing AI solutions to enhance your business operations.',
>>>>>>> cursor/fix-errors-and-merge-to-main-d296
      duration: '4-6 hours',
      price: '$1000',
      features: [
        'AI opportunity assessment',
        'Use case identification',
<<<<<<< HEAD
<<<<<<< HEAD
        'Technology selection',
        'ROI analysis',
        'Implementation roadmap'
=======
        'Technology stack selection',
        'ROI analysis and planning',
        'Implementation strategy'
>>>>>>> cursor/fix-errors-and-merge-to-main-371b
      ],
=======
        'Technology selection',
        'ROI analysis',
        'Implementation strategy'
      ],
      popular: true
    },
    {
      id: 'security',
      name: 'Cybersecurity Consultation',
      description: 'Comprehensive security assessment and recommendations to protect your digital assets.',
      duration: '3-4 hours',
      price: '$600',
      features: [
        'Security vulnerability assessment',
        'Compliance review',
        'Security policy development',
        'Incident response planning',
        'Training recommendations'
      ],
      popular: false
    },
    {
      id: 'devops',
      name: 'DevOps Transformation',
      description: 'Guidance on implementing DevOps practices to improve development and deployment processes.',
      duration: '4-5 hours',
      price: '$800',
      features: [
        'Current process analysis',
        'DevOps maturity assessment',
        'Tool selection and setup',
        'CI/CD pipeline design',
        'Team training plan'
      ],
      popular: false
    },
    {
      id: 'data',
      name: 'Data Strategy Consultation',
      description: 'Strategic planning for data management, analytics, and business intelligence solutions.',
      duration: '3-4 hours',
      price: '$650',
      features: [
        'Data architecture review',
        'Analytics strategy development',
        'Data governance planning',
        'Tool and platform selection',
        'Implementation roadmap'
      ],
>>>>>>> cursor/fix-errors-and-merge-to-main-d296
      popular: false
    }
  ];

<<<<<<< HEAD
<<<<<<< HEAD
=======
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

>>>>>>> cursor/fix-errors-and-merge-to-main-371b
=======
  const benefits = [
    {
      title: 'Expert Guidance',
      description: 'Get advice from experienced professionals with deep industry knowledge.',
      icon: Users
    },
    {
      title: 'Time Efficient',
      description: 'Quick, focused sessions that deliver actionable insights and recommendations.',
      icon: Clock
    },
    {
      title: 'Cost Effective',
      description: 'Avoid costly mistakes with expert guidance before making major investments.',
      icon: Target
    },
    {
      title: 'Customized Solutions',
      description: 'Tailored recommendations based on your specific business needs and goals.',
      icon: Zap
    }
  ];

>>>>>>> cursor/fix-errors-and-merge-to-main-d296
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
<<<<<<< HEAD
<<<<<<< HEAD
        <title>Consultation Services - Zion Tech Group</title>
        <meta name="description" content="Expert IT consultation services to help your business with strategy, cloud migration, and AI implementation." />
        <meta name="keywords" content="IT consultation, cloud migration, AI implementation, technology strategy" />
      </Helmet>
      
      <Navigation />
      
      <main className="pt-20 px-4 py-20">
        <div className="max-w-7xl mx-auto">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Expert Consultation
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Get expert guidance on your IT strategy, cloud migration, and AI implementation projects.
            </p>
          </div>

          {/* Consultation Types */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
            {consultationTypes.map((consultation) => (
              <div key={consultation.id} className={`bg-white/10 backdrop-blur-lg rounded-2xl p-8 border ${consultation.popular ? 'border-yellow-400/50' : 'border-white/20'} relative`}>
                {consultation.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-yellow-400 text-black px-4 py-1 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <h3 className="text-2xl font-bold text-white mb-4">{consultation.name}</h3>
                <p className="text-gray-300 mb-6">{consultation.description}</p>
                
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center text-gray-300">
                    <Clock className="w-5 h-5 mr-2" />
                    {consultation.duration}
                  </div>
                  <div className="text-3xl font-bold text-white">{consultation.price}</div>
                </div>

                <ul className="space-y-3 mb-8">
                  {consultation.features.map((feature, index) => (
                    <li key={index} className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <button className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                  consultation.popular 
                    ? 'bg-gradient-to-r from-yellow-400 to-orange-500 text-black hover:from-yellow-500 hover:to-orange-600' 
                    : 'bg-gradient-to-r from-blue-500 to-purple-600 text-white hover:from-blue-600 hover:to-purple-700'
                }`}>
                  Book Consultation
                  <ArrowRight className="inline-block ml-2 w-4 h-4" />
                </button>
              </div>
            ))}
          </div>

          {/* Why Choose Us Section */}
          <section className="mb-20">
            <h2 className="text-3xl font-bold text-white text-center mb-12">Why Choose Our Consultation Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-blue-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Expert Team</h3>
                <p className="text-gray-300">Certified professionals with years of industry experience</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="w-8 h-8 text-green-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Proven Results</h3>
                <p className="text-gray-300">Track record of successful implementations and transformations</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-8 h-8 text-purple-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Secure & Compliant</h3>
                <p className="text-gray-300">All recommendations follow industry best practices and compliance standards</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-yellow-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock className="w-8 h-8 text-yellow-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Flexible Scheduling</h3>
                <p className="text-gray-300">Book consultations at your convenience with flexible timing options</p>
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <div className="text-center">
            <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-3xl p-12">
              <h2 className="text-4xl font-bold text-white mb-4">Ready to Get Started?</h2>
              <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                Book a consultation today and take the first step towards transforming your business.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-white text-purple-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                  Book Now
                </button>
                <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors">
                  Contact Us
=======
        <title>Consultation | Zion Tech Group</title>
        <meta name="description" content="Professional IT consultation services by Zion Tech Group. Expert guidance for your digital transformation journey." />
        <meta name="keywords" content="IT consultation, digital transformation, cloud migration, AI implementation, Zion Tech Group" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
=======
        <title>Consultation Services | Zion Tech Group</title>
        <meta name="description" content="Professional IT consultation services by Zion Tech Group. Expert guidance for your digital transformation journey." />
        <meta name="keywords" content="IT consultation, technology consulting, digital transformation, AI consultation, cloud migration, Zion Tech Group" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
>>>>>>> cursor/fix-errors-and-merge-to-main-d296
        <Navigation />

        {/* Hero Section */}
        <section className="relative py-20 px-4 overflow-hidden">
<<<<<<< HEAD
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(147,51,234,0.3)_0%,transparent_50%)] animate-pulse" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.3)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }} />
          <div className="relative max-w-7xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              Expert
              <span className="block bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">
=======
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(59,130,246,0.3)_0%,transparent_50%)] animate-pulse" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(147,51,234,0.3)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }} />
          <div className="relative max-w-7xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              Expert
              <span className="block bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
>>>>>>> cursor/fix-errors-and-merge-to-main-d296
                Consultation
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
<<<<<<< HEAD
              Get expert guidance for your digital transformation journey. Our experienced consultants will help you make the right technology decisions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-600 hover:to-pink-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-purple-500/25">
                Book Consultation
                <ArrowRight className="inline-block ml-2 w-5 h-5" />
              </button>
              <button className="border border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300">
                View Packages
=======
              Get expert guidance for your digital transformation journey. Professional IT consultation services by Zion Tech Group.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-blue-500/25">
                Book Consultation
                <ArrowRight className="inline-block ml-2 w-5 h-5" />
              </button>
              <button className="border border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300">
                View Services
>>>>>>> cursor/fix-errors-and-merge-to-main-d296
              </button>
            </div>
          </div>
        </section>

<<<<<<< HEAD
        {/* Consultation Packages Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Consultation Packages
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Choose the consultation package that best fits your needs and budget.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
              {consultationPackages.map((pkg) => (
                <div key={pkg.id} className={`bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300 ${pkg.popular ? 'ring-2 ring-purple-400' : ''}`}>
                  {pkg.popular && (
                    <div className="flex items-center justify-center mb-4">
=======
        {/* Benefits Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
                Why Choose Our Consultation?
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Professional consultation services to help your business succeed and grow.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
              {benefits.map((benefit, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 text-center">
                  <benefit.icon className="w-12 h-12 text-blue-400 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-white mb-4">{benefit.title}</h3>
                  <p className="text-gray-300">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
                Consultation Services
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Choose from our range of professional consultation services.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
              {consultationServices.map((service) => (
                <div key={service.id} className={`bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300 ${service.popular ? 'ring-2 ring-blue-400' : ''}`}>
                  {service.popular && (
                    <div className="flex items-center mb-4">
>>>>>>> cursor/fix-errors-and-merge-to-main-d296
                      <Star className="w-5 h-5 text-yellow-400 mr-2" />
                      <span className="text-yellow-400 font-semibold">Most Popular</span>
                    </div>
                  )}
<<<<<<< HEAD
                  <h3 className="text-2xl font-bold text-white mb-4">{pkg.name}</h3>
                  <p className="text-gray-300 mb-6">{pkg.description}</p>
                  
                  <div className="mb-6">
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-3xl font-bold text-white">{pkg.price}</span>
                      <span className="flex items-center text-gray-300">
                        <Clock className="w-4 h-4 mr-1" />
                        {pkg.duration}
                      </span>
=======
                  <h3 className="text-2xl font-bold text-white mb-4">{service.name}</h3>
                  <p className="text-gray-300 mb-6">{service.description}</p>
                  
                  <div className="mb-6">
                    <div className="flex justify-between items-center mb-4">
                      <span className="text-gray-400">Duration:</span>
                      <span className="text-white font-semibold">{service.duration}</span>
                    </div>
                    <div className="flex justify-between items-center mb-4">
                      <span className="text-gray-400">Price:</span>
                      <span className="text-2xl font-bold text-blue-400">{service.price}</span>
>>>>>>> cursor/fix-errors-and-merge-to-main-d296
                    </div>
                    
                    <ul className="space-y-3">
                      {pkg.features.map((feature, index) => (
                        <li key={index} className="flex items-center text-gray-300">
                          <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
<<<<<<< HEAD
                  <button className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                    pkg.popular 
                      ? 'bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-600 hover:to-pink-700 text-white' 
                      : 'bg-white/20 text-white hover:bg-white/30'
                  }`}>
                    Book This Package
=======
                  <div className="mb-6">
                    <h4 className="text-white font-semibold mb-3">What's Included:</h4>
                    <ul className="space-y-2">
                      {service.features.map((feature, index) => (
                        <li key={index} className="flex items-center text-sm text-gray-300">
                          <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg transition-colors">
                    Book This Service
>>>>>>> cursor/fix-errors-and-merge-to-main-d296
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

<<<<<<< HEAD
        {/* Contact Form Section */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Get In Touch
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Ready to start your consultation? Fill out the form below and we'll get back to you within 24 hours.
              </p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-white font-semibold mb-2">Name *</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-white font-semibold mb-2">Email *</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="company" className="block text-white font-semibold mb-2">Company</label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
                      placeholder="Your company name"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-white font-semibold mb-2">Phone</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
                      placeholder="Your phone number"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="service" className="block text-white font-semibold mb-2">Service Interest</label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                  >
                    <option value="">Select a service</option>
                    <option value="strategy">IT Strategy Consultation</option>
                    <option value="cloud">Cloud Migration Consultation</option>
                    <option value="ai">AI Implementation Consultation</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-white font-semibold mb-2">Message *</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
                    placeholder="Tell us about your project and how we can help..."
                  />
                </div>
                
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-600 hover:to-pink-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-purple-500/25"
                >
                  Send Message
>>>>>>> cursor/fix-errors-and-merge-to-main-371b
=======
        {/* CTA Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto text-center">
            <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-3xl p-12">
              <h2 className="text-4xl font-bold text-white mb-4">Ready to Get Started?</h2>
              <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                Contact us today to schedule your consultation and start your digital transformation journey.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-white text-purple-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                  Contact Us
                </button>
                <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors">
                  Learn More
>>>>>>> cursor/fix-errors-and-merge-to-main-d296
                </button>
              </form>
            </div>
          </div>
        </section>

        {/* Contact Info Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Contact Information
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Get in touch with us through any of these channels.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
                  <Phone className="w-12 h-12 text-purple-400 mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-white mb-2">Phone</h3>
                  <p className="text-gray-300">+1 (555) 123-4567</p>
                </div>
              </div>
              <div className="text-center">
                <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
                  <Mail className="w-12 h-12 text-purple-400 mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-white mb-2">Email</h3>
                  <p className="text-gray-300">consultation@ziontech.com</p>
                </div>
              </div>
              <div className="text-center">
                <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
                  <MapPin className="w-12 h-12 text-purple-400 mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-white mb-2">Office</h3>
                  <p className="text-gray-300">123 Tech Street, San Francisco, CA</p>
                </div>
              </div>
            </div>
          </div>
        </section>
<<<<<<< HEAD

        <Footer />
      </div>
    </>
>>>>>>> cursor/fix-errors-and-merge-to-main-371b
=======
        
        <Footer />
      </div>
    </>
>>>>>>> cursor/fix-errors-and-merge-to-main-d296
  );
};

export default ConsultationPage;