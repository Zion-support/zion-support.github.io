'use client';
import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { CheckCircle, ArrowRight, Star, Clock, Users, Shield, Phone, Mail, Calendar, MessageCircle } from 'lucide-react';

interface ConsultationService {
  title: string;
  description: string;
  features: string[];
  price: string;
  duration: string;
  icon: React.ComponentType<any>;
  popular?: boolean;
}

const ConsultationPage: React.FC = () => {
  const [selectedService, setSelectedService] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    service: '',
    message: ''
  });

  const services: ConsultationService[] = [
    {
      title: 'AI Strategy Consultation',
      description: 'Develop a comprehensive AI strategy tailored to your business needs.',
      features: ['AI readiness assessment', 'Technology roadmap', 'ROI analysis', 'Implementation planning'],
      price: 'Starting at $2,500',
      duration: '2-4 weeks',
      icon: Star,
      popular: true
    },
    {
      title: 'Cloud Migration Planning',
      description: 'Plan and execute a seamless migration to the cloud.',
      features: ['Infrastructure assessment', 'Migration strategy', 'Security planning', 'Cost optimization'],
      price: 'Starting at $5,000',
      duration: '4-8 weeks',
      icon: Users
    },
    {
      title: 'Cybersecurity Audit',
      description: 'Comprehensive security assessment and recommendations.',
      features: ['Vulnerability assessment', 'Compliance review', 'Security policies', 'Training recommendations'],
      price: 'Starting at $3,500',
      duration: '2-3 weeks',
      icon: Shield
    }
  ];

  const benefits = [
    {
      icon: CheckCircle,
      title: 'Expert Guidance',
      description: 'Work with certified AI and IT professionals'
    },
    {
      icon: Clock,
      title: 'Fast Turnaround',
      description: 'Quick delivery without compromising quality'
    },
    {
      icon: Users,
      title: 'Dedicated Support',
      description: 'Personalized attention throughout the process'
    },
    {
      icon: Star,
      title: 'Proven Results',
      description: 'Track record of successful implementations'
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
        <meta name="description" content="Get expert consultation for your AI and IT needs. Professional guidance to transform your business." />
        <meta name="keywords" content="consultation, AI strategy, IT consulting, business transformation" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Expert <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">Consultation</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Get professional guidance from our AI and IT experts. Transform your business with strategic insights and proven solutions.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-400">
              <span className="flex items-center">
                <CheckCircle className="w-4 h-4 mr-2 text-green-400" />
                Expert Team
              </span>
              <span className="flex items-center">
                <Clock className="w-4 h-4 mr-2 text-blue-400" />
                Fast Delivery
              </span>
              <span className="flex items-center">
                <Star className="w-4 h-4 mr-2 text-yellow-400" />
                Proven Results
              </span>
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
              Why Choose Our Consultation?
            </h2>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
              {benefits.map((benefit, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full flex items-center justify-center mx-auto mb-4">
                    <benefit.icon className="w-8 h-8 text-slate-900" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">{benefit.title}</h3>
                  <p className="text-gray-400">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Services */}
        <section className="py-16 px-4 bg-slate-800/30">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
              Our Consultation Services
            </h2>
            <div className="grid gap-8 md:grid-cols-3">
              {services.map((service, index) => (
                <div
                  key={index}
                  className={`relative bg-slate-800/50 backdrop-blur-sm border rounded-xl p-6 hover:border-cyan-400 transition-all duration-300 ${
                    service.popular ? 'border-cyan-400 shadow-lg shadow-cyan-400/20' : 'border-slate-700'
                  }`}
                >
                  {service.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-cyan-400 to-purple-400 text-slate-900 px-4 py-2 rounded-full text-sm font-semibold">
                        Most Popular
                      </span>
                    </div>
                  )}
                  
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-lg flex items-center justify-center mb-4">
                    <service.icon className="w-8 h-8 text-slate-900" />
                  </div>
                  
                  <h3 className="text-xl font-semibold text-white mb-2">{service.title}</h3>
                  <p className="text-gray-400 mb-4">{service.description}</p>
                  
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-gray-300">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-2xl font-bold text-cyan-400">{service.price}</span>
                    <span className="text-sm text-gray-400">{service.duration}</span>
                  </div>
                  
                  <button
                    onClick={() => setSelectedService(service.title)}
                    className="w-full bg-gradient-to-r from-cyan-400 to-purple-400 text-slate-900 font-semibold py-2 px-4 rounded-lg hover:from-cyan-300 hover:to-purple-300 transition-all duration-300"
                  >
                    Book Consultation
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Form */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
              Get Started Today
            </h2>
            <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid gap-6 md:grid-cols-2">
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
                      className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:border-cyan-400 focus:outline-none"
                      placeholder="Your full name"
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
                      className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:border-cyan-400 focus:outline-none"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>
                
                <div className="grid gap-6 md:grid-cols-2">
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Company
                    </label>
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:border-cyan-400 focus:outline-none"
                      placeholder="Your company name"
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
                      className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:border-cyan-400 focus:outline-none"
                      placeholder="+1 (555) 123-4567"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Service Interest
                  </label>
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white focus:border-cyan-400 focus:outline-none"
                  >
                    <option value="">Select a service</option>
                    {services.map((service, index) => (
                      <option key={index} value={service.title}>
                        {service.title}
                      </option>
                    ))}
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Message
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={4}
                    className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:border-cyan-400 focus:outline-none"
                    placeholder="Tell us about your project and requirements..."
                  />
                </div>
                
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-cyan-400 to-purple-400 text-slate-900 font-semibold py-3 px-6 rounded-lg hover:from-cyan-300 hover:to-purple-300 transition-all duration-300 flex items-center justify-center"
                >
                  <Calendar className="w-5 h-5 mr-2" />
                  Schedule Consultation
                </button>
              </form>
            </div>
          </div>
        </section>

        {/* Contact Info */}
        <section className="py-16 px-4 bg-slate-800/30">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Prefer to Talk Directly?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Our experts are ready to discuss your project and answer any questions.
            </p>
            <div className="grid gap-6 md:grid-cols-3">
              <div className="flex items-center justify-center space-x-3 text-gray-300">
                <Phone className="w-5 h-5 text-cyan-400" />
                <span>+1 (302) 464-0950</span>
              </div>
              <div className="flex items-center justify-center space-x-3 text-gray-300">
                <Mail className="w-5 h-5 text-cyan-400" />
                <span>consultation@ziontechgroup.com</span>
              </div>
              <div className="flex items-center justify-center space-x-3 text-gray-300">
                <MessageCircle className="w-5 h-5 text-cyan-400" />
                <span>Live Chat Available</span>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default ConsultationPage;