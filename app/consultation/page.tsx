'use client';

import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Calendar, Clock, Users, CheckCircle, ArrowRight, Phone, Mail, MapPin } from 'lucide-react';

interface ConsultationType {
  id: string;
  name: string;
  description: string;
  duration: string;
  price: string;
  features: string[];
  popular: boolean;
}

const ConsultationPage: React.FC = () => {
  const [selectedType, setSelectedType] = useState<string>('');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    message: ''
  });

  const consultationTypes: ConsultationType[] = [
    {
      id: 'basic',
      name: 'Basic Consultation',
      description: 'Perfect for small businesses exploring AI solutions',
      duration: '30 minutes',
      price: 'Free',
      features: [
        'Needs assessment',
        'Solution recommendations',
        'Implementation roadmap',
        'Q&A session'
      ],
      popular: false
    },
    {
      id: 'standard',
      name: 'Standard Consultation',
      description: 'Comprehensive analysis for growing businesses',
      duration: '60 minutes',
      price: '$299',
      features: [
        'Detailed needs analysis',
        'Custom solution design',
        'ROI projections',
        'Implementation timeline',
        'Follow-up support'
      ],
      popular: true
    },
    {
      id: 'premium',
      name: 'Premium Consultation',
      description: 'In-depth strategic planning for enterprise clients',
      duration: '2 hours',
      price: '$799',
      features: [
        'Comprehensive business analysis',
        'Custom AI strategy development',
        'Detailed technical specifications',
        'Project timeline and milestones',
        'Ongoing consultation support',
        'Priority implementation'
      ],
      popular: false
    }
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', { selectedType, formData });
  };

  return (
    <>
      <Helmet>
        <title>Free Consultation - Zion Tech Group | Get Expert AI Advice</title>
        <meta name="description" content="Get a free consultation with our AI experts. Discover how AI can transform your business with personalized recommendations and implementation strategies." />
        <meta name="keywords" content="AI consultation, free consultation, AI strategy, business transformation, expert advice" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Free AI Consultation
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Get expert advice on how AI can transform your business. Our consultants will analyze 
              your needs and provide personalized recommendations for your AI journey.
            </p>
          </div>
        </section>

        {/* Consultation Types */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-white text-center mb-12">
              Choose Your Consultation Type
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {consultationTypes.map((type) => (
                <div
                  key={type.id}
                  className={`relative bg-slate-800/50 backdrop-blur-sm border rounded-lg p-8 cursor-pointer transition-all duration-300 ${
                    selectedType === type.id
                      ? 'border-cyan-500 ring-2 ring-cyan-500/20'
                      : 'border-slate-700 hover:border-cyan-500'
                  } ${type.popular ? 'ring-2 ring-cyan-500/20' : ''}`}
                  onClick={() => setSelectedType(type.id)}
                >
                  {type.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
                        Most Popular
                      </span>
                    </div>
                  )}
                  
                  <div className="text-center mb-6">
                    <h3 className="text-2xl font-bold text-white mb-2">{type.name}</h3>
                    <p className="text-gray-300 mb-4">{type.description}</p>
                    <div className="flex items-center justify-center space-x-4 mb-4">
                      <div className="flex items-center text-sm text-gray-400">
                        <Clock className="w-4 h-4 mr-1" />
                        <span>{type.duration}</span>
                      </div>
                      <div className="text-2xl font-bold text-cyan-400">{type.price}</div>
                    </div>
                  </div>

                  <ul className="space-y-3 mb-6">
                    {type.features.map((feature, index) => (
                      <li key={index} className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-green-400 mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-300 text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <button
                    className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                      selectedType === type.id
                        ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white'
                        : 'bg-slate-700 text-white hover:bg-slate-600'
                    }`}
                  >
                    {selectedType === type.id ? 'Selected' : 'Select This Option'}
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Form */}
        <section className="py-16 bg-slate-800/50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-white text-center mb-12">
                Schedule Your Consultation
              </h2>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                {/* Form */}
                <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-lg p-8">
                  <form onSubmit={handleSubmit} className="space-y-6">
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
                        className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-colors"
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
                        className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-colors"
                        placeholder="Enter your email"
                      />
                    </div>

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
                        className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-colors"
                        placeholder="Enter your company name"
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
                        className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-colors"
                        placeholder="Enter your phone number"
                      />
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                        Tell us about your project
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        rows={4}
                        className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-colors"
                        placeholder="Describe your business needs and goals..."
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300"
                    >
                      Schedule Consultation
                    </button>
                  </form>
                </div>

                {/* Contact Info */}
                <div className="space-y-8">
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-6">Why Choose Our Consultation?</h3>
                    <ul className="space-y-4">
                      <li className="flex items-start">
                        <CheckCircle className="w-6 h-6 text-green-400 mr-3 mt-0.5 flex-shrink-0" />
                        <div>
                          <h4 className="text-lg font-semibold text-white mb-1">Expert Analysis</h4>
                          <p className="text-gray-300 text-sm">Our AI experts will analyze your current systems and identify opportunities for improvement.</p>
                        </div>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="w-6 h-6 text-green-400 mr-3 mt-0.5 flex-shrink-0" />
                        <div>
                          <h4 className="text-lg font-semibold text-white mb-1">Custom Recommendations</h4>
                          <p className="text-gray-300 text-sm">Get personalized AI solutions tailored to your specific business needs and goals.</p>
                        </div>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="w-6 h-6 text-green-400 mr-3 mt-0.5 flex-shrink-0" />
                        <div>
                          <h4 className="text-lg font-semibold text-white mb-1">Implementation Roadmap</h4>
                          <p className="text-gray-300 text-sm">Receive a detailed plan for implementing AI solutions in your organization.</p>
                        </div>
                      </li>
                    </ul>
                  </div>

                  <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-lg p-6">
                    <h4 className="text-lg font-semibold text-white mb-4">Contact Information</h4>
                    <div className="space-y-3">
                      <div className="flex items-center text-gray-300">
                        <Phone className="w-5 h-5 mr-3 text-cyan-400" />
                        <a href="tel:+13024640950" className="hover:text-cyan-400 transition-colors">
                          +1 (302) 464-0950
                        </a>
                      </div>
                      <div className="flex items-center text-gray-300">
                        <Mail className="w-5 h-5 mr-3 text-cyan-400" />
                        <a href="mailto:kleber@ziontechgroup.com" className="hover:text-cyan-400 transition-colors">
                          kleber@ziontechgroup.com
                        </a>
                      </div>
                      <div className="flex items-center text-gray-300">
                        <MapPin className="w-5 h-5 mr-3 text-cyan-400" />
                        <span>364 E Main St STE 1008, Middletown, DE 19709</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
              Don't wait to get started with AI. Schedule your free consultation today 
              and discover how we can help you achieve your business goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+13024640950"
                className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300"
              >
                Call Now: (302) 464-0950
              </a>
              <Link
                to="/contact"
                className="border-2 border-cyan-400 text-cyan-400 px-8 py-3 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default ConsultationPage;