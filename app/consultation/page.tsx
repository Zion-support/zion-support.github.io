'use client';
import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Calendar, Clock, Users, CheckCircle, ArrowRight, Phone, Mail, MapPin, Zap, Target, Award } from 'lucide-react';

interface ConsultationType {id: string;}
  name: string;
  description: string;
  duration: string;
  price: string;
  features: string[];
  popular: boolean;
}

const ConsultationPage: React.FC = () => {const [formData, setFormData] = useState({}
    name: '',
    email: '',
    company: '',
    phone: '',
    message: '',
    consultationType: '',
    urgency: 'medium'
  });

  const consultationTypes: ConsultationType[] = []
    {id: 'strategy',}
      name: 'AI Strategy Consultation',
      description: 'Comprehensive AI strategy development and implementation planning',
      duration: '2 hours',
      price: 'Free',
      features: []
        'AI readiness assessment',
        'Technology roadmap development',
        'ROI analysis and projections',
        'Implementation timeline',
        'Resource planning'
      ],
      popular: true
    },
    {id: 'technical',}
      name: 'Technical Deep Dive',
      description: 'Detailed technical analysis and solution architecture design',
      duration: '3 hours',
      price: '$500',
      features: []
        'Technical architecture review',
        'Integration planning',
        'Security assessment',
        'Performance optimization',
        'Scalability planning'
      ],
      popular: false
    },
    {id: 'security',}
      name: 'Security & Compliance',
      description: 'Cybersecurity assessment and compliance strategy development',
      duration: '2 hours',
      price: 'Free',
      features: []
        'Security vulnerability assessment',
        'Compliance gap analysis',
        'Security framework implementation',
        'Incident response planning',
        'Training recommendations'
      ],
      popular: false
    }
  ];

  const services = []
    {icon: Zap,}
      title: 'AI & Machine Learning',
      description: 'Transform your business with intelligent automation and data-driven insights'
    },
    {icon: Target,}
      title: 'Cloud Solutions',
      description: 'Scale your infrastructure with secure, reliable cloud computing solutions'
    },
    {icon: Award,}
      title: 'Cybersecurity',
      description: 'Protect your business with comprehensive security solutions and compliance'
    }
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {}
    const { name, value } = e.target;
    setFormData(prev => ({...prev,}
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {e.preventDefault();}
    // In a real app, this would submit the form data
    alert('Thank you for your interest! We will contact you within 24 hours.');
  };

  return ()
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Free Consultation - Zion Tech Group | Expert Technology Consulting</title>
        <meta name="description" content="Get a free consultation with our technology experts. Discuss your AI, cloud, and digital transformation needs with Zion Tech Group." />
        <meta name="keywords" content="free consultation, technology consulting, AI consultation, cloud consulting, digital transformation" />
      </Helmet>

      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
            Free
            <span className="block bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
              Consultation
            </span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Get expert advice on your technology needs. Our consultants will help you identify opportunities and create a roadmap for success.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-semibold py-3 px-8 rounded-lg hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 flex items-center justify-center space-x-2"
            >
              <span>Schedule Now</span>
              <Calendar className="w-5 h-5" />
            </Link>
            <Link
              to="/services"
              className="border border-cyan-500 text-cyan-400 font-semibold py-3 px-8 rounded-lg hover:bg-cyan-500 hover:text-white transition-all duration-300 flex items-center justify-center space-x-2"
            >
              <span>Our Services</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-6">What We Consult On</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our experts provide strategic guidance across all areas of technology and digital transformation.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (}
              <div key={index} className="bg-slate-800/50 rounded-2xl p-8 border border-cyan-500/20 hover:border-cyan-500/40 transition-all duration-300 text-center">
                <div className="flex justify-center mb-6">
                  <div className="w-16 h-16 bg-cyan-500/10 rounded-full flex items-center justify-center">
                    <service.icon className="w-8 h-8 text-cyan-400" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">{service.title}</h3>
                <p className="text-gray-300">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Consultation Types */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-6">Consultation Types</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose the consultation type that best fits your needs and schedule.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {consultationTypes.map((type) => (}
              <div key={type.id} className={`relative bg-slate-800/50 rounded-2xl p-8 border transition-all duration-300 ${}
                type.popular ? 'border-cyan-500' : 'border-cyan-500/20 hover:border-cyan-500/40'
              }`}>
                {type.popular && (}
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                      Most Popular
                    </div>
                  </div>
                )}
                
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-white mb-2">{type.name}</h3>
                  <p className="text-gray-300 mb-4">{type.description}</p>
                  <div className="flex items-center justify-center space-x-4 text-sm text-gray-400">
                    <span className="flex items-center">
                      <Clock className="w-4 h-4 mr-1" />
                      {type.duration}
                    </span>
                  </div>
                  <div className="text-3xl font-bold text-cyan-400 mt-4">{type.price}</div>
                </div>
                
                <ul className="space-y-3 mb-8">
                  {type.features.map((feature, index) => (}
                    <li key={index} className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <button className="w-full bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-semibold py-3 px-6 rounded-lg hover:from-cyan-600 hover:to-purple-600 transition-all duration-300">
                  Book Consultation
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-6">Request a Consultation</h2>
            <p className="text-xl text-gray-300">
              Fill out the form below and we'll get back to you within 24 hours to schedule your consultation.
            </p>
          </div>
          
          <div className="bg-slate-800/50 rounded-2xl p-8 border border-cyan-500/20">
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
                    className="w-full px-4 py-3 bg-slate-700/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20"
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
                    className="w-full px-4 py-3 bg-slate-700/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20"
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
                    className="w-full px-4 py-3 bg-slate-700/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20"
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
                    className="w-full px-4 py-3 bg-slate-700/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20"
                    placeholder="+1 (555) 123-4567"
                  />
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="consultationType" className="block text-sm font-medium text-gray-300 mb-2">
                    Consultation Type
                  </label>
                  <select
                    id="consultationType"
                    name="consultationType"
                    value={formData.consultationType}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-slate-700/50 border border-gray-600 rounded-lg text-white focus:outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20"
                  >
                    <option value="">Select consultation type</option>
                    <option value="strategy">AI Strategy Consultation</option>
                    <option value="technical">Technical Deep Dive</option>
                    <option value="security">Security & Compliance</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="urgency" className="block text-sm font-medium text-gray-300 mb-2">
                    Urgency
                  </label>
                  <select
                    id="urgency"
                    name="urgency"
                    value={formData.urgency}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-slate-700/50 border border-gray-600 rounded-lg text-white focus:outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20"
                  >
                    <option value="low">Low - Within 2 weeks</option>
                    <option value="medium">Medium - Within 1 week</option>
                    <option value="high">High - Within 2-3 days</option>
                  </select>
                </div>
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
                  rows={5}
                  className="w-full px-4 py-3 bg-slate-700/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20"
                  placeholder="Tell us about your project and what you'd like to discuss..."
                />
              </div>
              
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-semibold py-4 px-8 rounded-lg hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 flex items-center justify-center space-x-2"
              >
                <span>Request Consultation</span>
                <ArrowRight className="w-5 h-5" />
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-12">
            <h2 className="text-3xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Don't wait to start your digital transformation journey. Schedule your free consultation today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-semibold py-3 px-8 rounded-lg hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 flex items-center justify-center space-x-2"
              >
                <span>Contact Us</span>
                <Phone className="w-5 h-5" />
              </Link>
              <Link
                to="/services"
                className="border border-cyan-500 text-cyan-400 font-semibold py-3 px-8 rounded-lg hover:bg-cyan-500 hover:text-white transition-all duration-300 flex items-center justify-center space-x-2"
              >
                <span>View Services</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ConsultationPage