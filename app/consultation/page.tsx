'use client';

import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
<<<<<<< HEAD
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

  const consultationTypes: ConsultationType[] = [
    {
      id: 'strategy',
      name: 'IT Strategy Consultation',
      description: 'Comprehensive analysis of your current IT infrastructure and strategic planning for digital transformation.',
      duration: '2-4 hours',
      price: '$500',
      features: [
        'Current IT assessment',
        'Technology roadmap',
        'Budget planning',
        'Risk analysis',
        'Implementation timeline'
      ],
      popular: true
    },
    {
      id: 'ai',
      name: 'AI Implementation Consultation',
      description: 'Expert guidance on integrating AI solutions into your business processes and workflows.',
      duration: '3-5 hours',
      price: '$750',
      features: [
        'AI readiness assessment',
        'Use case identification',
        'Technology selection',
        'ROI analysis',
        'Implementation strategy'
      ],
      popular: false
    },
    {
      id: 'security',
      name: 'Cybersecurity Audit',
      description: 'Comprehensive security assessment and recommendations to protect your digital assets.',
      duration: '4-6 hours',
      price: '$1,000',
      features: [
        'Security vulnerability assessment',
        'Compliance review',
        'Penetration testing',
        'Security policy development',
        'Incident response planning'
      ],
      popular: true
    },
    {
      id: 'cloud',
      name: 'Cloud Migration Consultation',
      description: 'Strategic planning and execution guidance for migrating your infrastructure to the cloud.',
      duration: '2-3 hours',
      price: '$400',
      features: [
        'Cloud readiness assessment',
        'Migration strategy',
        'Cost optimization',
        'Security considerations',
        'Timeline planning'
      ],
      popular: false
    }
  ];

  const benefits = [
    {
      icon: <Users className="w-8 h-8 text-blue-600" />,
      title: 'Expert Guidance',
      description: 'Get advice from certified professionals with years of industry experience'
    },
    {
      icon: <CheckCircle className="w-8 h-8 text-blue-600" />,
      title: 'Proven Methodologies',
      description: 'Benefit from tested frameworks and best practices used by leading organizations'
    },
    {
      icon: <Clock className="w-8 h-8 text-blue-600" />,
      title: 'Time-Saving',
      description: 'Avoid costly mistakes and accelerate your project timeline with expert insights'
    },
    {
      icon: <ArrowRight className="w-8 h-8 text-blue-600" />,
      title: 'Actionable Results',
      description: 'Receive concrete recommendations and implementation plans you can execute immediately'
    }
  ];

  const contactInfo = [
    {
      icon: <Phone className="w-6 h-6 text-blue-600" />,
      title: 'Phone',
      details: '+1 (555) 123-4567',
      description: 'Call us for immediate assistance'
    },
    {
      icon: <Mail className="w-6 h-6 text-blue-600" />,
      title: 'Email',
      details: 'consultation@ziontechgroup.com',
      description: 'Send us your requirements'
    },
    {
      icon: <MapPin className="w-6 h-6 text-blue-600" />,
      title: 'Office',
      details: '123 Tech Street, San Francisco, CA',
      description: 'Visit our headquarters'
    }
  ];
=======
import { CheckCircle, Clock, Users, Award, Star, ArrowRight, Phone, Mail, MapPin } from 'lucide-react';

const ConsultationPage: React.FC = () => {
  const [selectedType, setSelectedType] = useState('ai-strategy');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    message: '',
    consultationType: 'ai-strategy'
  });

  const consultationTypes = [
    {
      id: 'ai-strategy',
      title: 'AI Strategy Consultation',
      description: 'Develop a comprehensive AI strategy for your business',
      duration: '2-4 hours',
      price: '$500',
      features: [
        'AI readiness assessment',
        'Technology roadmap development',
        'ROI analysis and projections',
        'Implementation timeline',
        'Risk assessment and mitigation'
      ]
    },
    {
      id: 'cloud-migration',
      title: 'Cloud Migration Planning',
      description: 'Plan and execute your cloud migration strategy',
      duration: '4-8 hours',
      price: '$800',
      features: [
        'Current infrastructure analysis',
        'Cloud platform selection',
        'Migration strategy development',
        'Cost optimization planning',
        'Security and compliance review'
      ]
    },
    {
      id: 'digital-transformation',
      title: 'Digital Transformation',
      description: 'Transform your business with digital technologies',
      duration: '6-12 hours',
      price: '$1,200',
      features: [
        'Digital maturity assessment',
        'Technology stack evaluation',
        'Process optimization',
        'Change management planning',
        'Success metrics definition'
      ]
    },
    {
      id: 'cybersecurity-audit',
      title: 'Cybersecurity Audit',
      description: 'Comprehensive security assessment and recommendations',
      duration: '3-6 hours',
      price: '$600',
      features: [
        'Security vulnerability assessment',
        'Compliance review',
        'Incident response planning',
        'Security training recommendations',
        'Ongoing monitoring strategy'
      ]
    }
  ];

  const statistics = [
    { icon: Users, value: '500+', label: 'Successful Consultations' },
    { icon: Award, value: '98%', label: 'Client Satisfaction' },
    { icon: Clock, value: '24/7', label: 'Support Available' },
    { icon: Star, value: '5.0', label: 'Average Rating' }
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
>>>>>>> cursor/analyze-improve-and-deploy-application-975f

  return (
    <>
  </>
      <Helmet>
<<<<<<< HEAD
        <title>Consultation Services - Zion Tech Group</title>
        <meta name="description" content="Get expert consultation on IT strategy, AI implementation, cybersecurity, and cloud migration. Professional guidance to accelerate your digital transformation." />
        <meta name="keywords" content="IT consultation, AI consulting, cybersecurity audit, cloud migration, technology strategy, digital transformation" />
=======
        <title>Consultation - Zion Tech Group | Expert Technology Consulting</title>
        <meta name="description" content="Get expert technology consulting from Zion Tech Group. AI strategy, cloud migration, digital transformation, and cybersecurity consulting services." />
        <meta name="keywords" content="technology consulting, AI strategy, cloud migration, digital transformation, cybersecurity consulting" />
>>>>>>> cursor/analyze-improve-and-deploy-application-975f
      </Helmet>

      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
<<<<<<< HEAD
        <section className="bg-gradient-to-r from-blue-900 to-purple-900 text-white py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Expert Consultation
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-blue-100">
                Get professional guidance to accelerate your digital transformation and maximize your technology investments
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-white text-blue-900 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-colors">
                  Schedule Consultation
                </button>
                <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-900 transition-colors">
                  View Services
                </button>
              </div>
=======
        <section className="relative py-20 px-4">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Expert Technology Consulting
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Get personalized guidance from our technology experts to transform your business with AI, cloud computing, and digital solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white font-semibold py-3 px-8 rounded-lg transition-all duration-300">
                Schedule Consultation
              </button>
              <button className="border-2 border-white text-white hover:bg-white hover:text-slate-900 font-semibold py-3 px-8 rounded-lg transition-all duration-300">
                View Our Experts
              </button>
>>>>>>> cursor/analyze-improve-and-deploy-application-975f
            </div>
          </div>
        </section>

<<<<<<< HEAD
        {/* Benefits Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose Our Consultation Services?</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Our expert consultants bring years of experience and proven methodologies to help you succeed
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="text-center">
                  <div className="flex justify-center mb-4">
                    {benefit.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{benefit.title}</h3>
                  <p className="text-gray-600">{benefit.description}</p>
=======
        {/* Statistics */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {statistics.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <stat.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
                  <div className="text-gray-400">{stat.label}</div>
>>>>>>> cursor/analyze-improve-and-deploy-application-975f
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Consultation Types */}
<<<<<<< HEAD
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Consultation Services</h2>
              <p className="text-xl text-gray-600">Choose the consultation type that best fits your needs</p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {consultationTypes.map((type) => (
                <div
                  key={type.id}
                  className={`bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow cursor-pointer ${
                    selectedType === type.id ? 'ring-2 ring-blue-500' : ''
                  } ${type.popular ? 'border-2 border-blue-200' : ''}`}
                  onClick={() => setSelectedType(type.id)}
                >
                  {type.popular && (
                    <div className="bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1 rounded-full text-center mb-4">
                      Most Popular
                    </div>
                  )}
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{type.name}</h3>
                  <p className="text-gray-600 mb-4">{type.description}</p>
                  <div className="space-y-2 mb-6">
                    {type.features.map((feature, index) => (
                      <div key={index} className="flex items-center text-sm text-gray-600">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <span className="text-2xl font-bold text-gray-900">{type.price}</span>
                      <div className="flex items-center text-sm text-gray-500 mt-1">
                        <Clock className="w-4 h-4 mr-1" />
                        <span>{type.duration}</span>
                      </div>
                    </div>
                  </div>
                  <button className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                    Select This Service
                  </button>
                </div>
              ))}
=======
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-12 text-center">Consultation Types</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {consultationTypes.map((type) => (
                <div
                  key={type.id}
                  className={`bg-white/10 backdrop-blur-lg rounded-2xl p-8 border transition-all duration-300 cursor-pointer ${
                    selectedType === type.id
                      ? 'border-cyan-400 bg-cyan-500/20'
                      : 'border-white/20 hover:border-purple-400'
                  }`}
                  onClick={() => setSelectedType(type.id)}
                >
                  <h3 className="text-xl font-bold text-white mb-3">{type.title}</h3>
                  <p className="text-gray-300 mb-4 text-sm">{type.description}</p>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-cyan-400 font-semibold">{type.price}</span>
                    <span className="text-gray-400 text-sm">{type.duration}</span>
                  </div>
                  <ul className="space-y-2">
                    {type.features.map((feature, index) => (
                      <li key={index} className="flex items-center gap-2 text-gray-300 text-sm">
                        <CheckCircle className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Form */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-12 border border-white/20">
              <h2 className="text-3xl font-bold text-white mb-8 text-center">Schedule Your Consultation</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-colors"
                      placeholder="Enter your full name"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-colors"
                      placeholder="Enter your email"
                      required
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
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-colors"
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
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-colors"
                      placeholder="Enter your phone number"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="consultationType" className="block text-sm font-medium text-gray-300 mb-2">
                    Consultation Type
                  </label>
                  <select
                    id="consultationType"
                    name="consultationType"
                    value={formData.consultationType}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-colors"
                  >
                    {consultationTypes.map((type) => (
                      <option key={type.id} value={type.id}>
                        {type.title} - {type.price}
                      </option>
                    ))}
                  </select>
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={4}
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-colors"
                    placeholder="Tell us about your project or requirements"
                  />
                </div>
                
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white font-semibold py-4 px-8 rounded-lg transition-all duration-300"
                >
                  Schedule Consultation
                </button>
              </form>
>>>>>>> cursor/analyze-improve-and-deploy-application-975f
            </div>
          </div>
        </section>

        {/* Contact Information */}
<<<<<<< HEAD
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Get in Touch</h2>
              <p className="text-xl text-gray-600">Ready to schedule your consultation? Contact us today</p>
            </div>
            <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              {contactInfo.map((contact, index) => (
                <div key={index} className="text-center">
                  <div className="flex justify-center mb-4">
                    <div className="bg-blue-100 p-3 rounded-full">
                      {contact.icon}
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{contact.title}</h3>
                  <p className="text-blue-600 font-medium mb-2">{contact.details}</p>
                  <p className="text-gray-600">{contact.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-blue-900 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
            <p className="text-xl mb-8 text-blue-100 max-w-3xl mx-auto">
              Schedule your consultation today and take the first step towards digital transformation
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-blue-900 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-colors">
                Schedule Now
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-900 transition-colors">
                Download Brochure
              </button>
            </div>
          </div>
        </section>
=======
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-12 text-center">Get in Touch</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Phone className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Phone</h3>
                <p className="text-gray-300">+1 (302) 464-0950</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Mail className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Email</h3>
                <p className="text-gray-300">kleber@ziontechgroup.com</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-teal-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MapPin className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Address</h3>
                <p className="text-gray-300">364 E Main St STE 1008<br />Middletown, DE 19709</p>
              </div>
            </div>
          </div>
        </section>
>>>>>>> cursor/analyze-improve-and-deploy-application-975f
      </div>

  );
};

export default ConsultationPage;