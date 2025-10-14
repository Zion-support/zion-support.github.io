      features: [
        'AI readiness assessment',
        'Technology roadmap development',
        'ROI analysis and projections',
        'Implementation planning',
        'Risk assessment',
        'Team training recommendations'
      ],
      popular: true
    },
    {
      id: 'technical',
      name: 'Technical Architecture Review',
      description: 'Deep dive into your current technical infrastructure',
      duration: '1-2 weeks',
      price: '$3,000',
      features: [
        'Infrastructure audit',
        'Security assessment',
        'Performance analysis',
        'Scalability recommendations',
        'Technology stack optimization',
        'Migration planning'
      ],
      popular: false
    },
    {
      id: 'digital',
      name: 'Digital Transformation Planning',
      description: 'Complete digital transformation strategy and roadmap',
      duration: '4-6 weeks',
      price: '$8,000',
      features: [
        'Current state analysis',
        'Future state vision',
        'Change management strategy',
        'Technology selection',
        'Implementation timeline',
        'Success metrics definition'
      ],
      popular: false
    }
  ];
  const process = [
    {
      step: '1',
    },
    {
      step: '2',
      title: 'Strategy Development',
    },
    {
      step: '3',
      title: 'Implementation Plan',
    },
    {
      step: '4',
      title: 'Ongoing Support',
    }
  ]

const ConsultationPage: React.FC  = () => {return (
    <div className="min-h-screen pt-20"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16"></div>
        <div className="text-center"></div>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6"></h1>
            Free <span className="text-cyan-400">Consultation</span>
                </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto"></p>
            Get expert advice on how to implement AI and IT solutions for your business.
          </p>
                </div>
      </section>
                {/* Consultation Types */}
                <section className="py-16 px-4"></section>
        <div className="max-w-7xl mx-auto"></div>
          <div className="text-center mb-16"></div>
            <h2 className="text-4xl font-bold text-white mb-6">Consultation Services</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto"></p>
              Choose the consultation type that best fits your needs
            </p>
                </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8"></div>
                {consultationTypes.map((type) => (
              <div
                key={type.id}
                className={`relative bg-white/5 backdrop-blur-sm rounded-2xl p-8 border transition-all duration-300 cursor-pointer hover:scale-105 ${
                  selectedType === type.id
                    ? 'border-blue-400/50 ring-2 ring-blue-400/20'
                    : 'border-white/20 hover:border-white/40'
                }`}
                onClick={() => setSelectedType(type.id)}
              >
                {type.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2"></div>
                    <div className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-semibold"></div>
                      Most Popular
                    </div>
                </div>
                )}
                <div className="text-center mb-6"></div>
                  <h3 className="text-2xl font-bold text-white mb-2"></h3>
                {type.name}
                </h3>
                  <p className="text-gray-300 mb-4"></p>
                {type.description}
                </p>
                  <div className="flex items-center justify-center gap-4 mb-4"></div>
                    <span className="text-3xl font-bold text-white"></span>
                {type.price}
                </span>
                    <span className="text-gray-400"></span>
                {type.duration}
                </span>
                </div>
                </div>

                <ul className="space-y-3"></ul>
                {type.features.map((feature, index) => (
                    <li key={index} className="flex items-center text-gray-300"></li>
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                      <span></span>
                {feature}
                </span>
                </li>
                  ))}
                </ul>
                </div>
            ))}
                </div>
                </div>
      </section>
                {/* Selected Consultation Details */}
      {selectedConsultation && (
        <section className="py-16 px-4 bg-white/5"></section>
          <div className="max-w-7xl mx-auto"></div>
            <div className="text-center mb-12"></div>
              <h2 className="text-4xl font-bold text-white mb-6"></h2>
                {selectedConsultation.name}
                </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto"></p>
                {selectedConsultation.description}
                </p>
                </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12"></div>
              <div></div>
                <h3 className="text-2xl font-bold text-white mb-6">What's Included</h3>
                <ul className="space-y-4"></ul>
                {selectedConsultation.features.map((feature, index) => (
                    <li key={index} className="flex items-start text-gray-300"></li>
                      <CheckCircle className="w-6 h-6 text-green-400 mr-3 flex-shrink-0 mt-0.5" />
                      <span></span>
                {feature}
                </span>
                </li>
                  ))}
                </ul>
                </div>

              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8"></div>
                <h3 className="text-2xl font-bold text-white mb-6">Schedule Your Consultation</h3>
                <div className="space-y-4"></div>
                  <div className="flex items-center gap-3 text-gray-300"></div>
                    <Calendar className="w-5 h-5 text-blue-400" />
                    <span>Duration: {selectedConsultation.duration}
                </span>
                </div>
                  <div className="flex items-center gap-3 text-gray-300"></div>
                    <Clock className="w-5 h-5 text-blue-400" />
                    <span>Investment: {selectedConsultation.price}
                </span>
                </div>
                  <div className="flex items-center gap-3 text-gray-300"></div>
                    <Users className="w-5 h-5 text-blue-400" />
                    <span>Team of 2-3 experts</span>
                </div>
                </div>
                <button className="w-full mt-6 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-bold py-3 px-6 rounded-lg transition-all duration-300"></button>
                  Book Now
                </button>
                </div>
            </div>
                </div>
        </section>
    </>
  );
};

      )}

      {/* Process Section */}
                <section className="py-16 px-4"></section>
        <div className="max-w-7xl mx-auto"></div>
          <div className="text-center mb-16"></div>
            <h2 className="text-4xl font-bold text-white mb-6">Our Process</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto"></p>
              A structured approach to delivering exceptional consultation services
            </p>
                </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"></div>
                {process.map((step, index) => (
              <div key={index} className="text-center"></div>
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6"></div>
                  <step.icon className="w-8 h-8 text-white" />

import React, { useState } from 'react';
import { Helmet  } from 'react-helmet-async';
import { Link  } from 'react-router-dom';
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

const ConsultationPage: React.FC  = () => {
  const [selectedType, setSelectedType] = useState<string>('');
'use client'
import React, { useState } from 'react'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import { Calendar, Clock, CheckCircle, ArrowRight, Phone, Mail, MapPin, Users, Brain, Cloud, Shield } from 'lucide-react'

const ConsultationPage: React.FC  = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    service: '',
    message: ''
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
                {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e: React.FormEvent) =>
                {
    e.preventDefault()
    // Handle form submission
    console.log('Form submitted:', formData)
  }

  const services = [
    {
      icon: Brain,
      title: 'AI Solutions',
      description: 'Machine learning, automation, and intelligent systems'
    },
    {
      icon: Cloud,
      title: 'Cloud Services',
      description: 'Migration, infrastructure, and cloud optimization'
    },
    {
      icon: Shield,
      title: 'Cybersecurity',
      description: 'Security assessment, implementation, and monitoring'
    }
  ]

  const consultationTypes = [
    {
      title: 'Free Initial Consultation',
      duration: '30 minutes',
      price: 'Free',
      features: [
        'Needs assessment',
        'Solution overview',
        'Preliminary recommendations',
        'Next steps planning'
      ]
    },
    {
      title: 'Technical Deep Dive',
      duration: '2 hours',
      price: '$500',
      features: [
        'Detailed technical analysis',
        'Architecture review',
        'Implementation roadmap',
        'Resource planning',
        'Timeline estimation'
      ]
    },
    {
      title: 'Strategic Planning Session',
      duration: '4 hours',
      price: '$1,500',
      features: [
        'Comprehensive business analysis',
        'Technology strategy development',
        'ROI projections',
        'Risk assessment',
        'Detailed implementation plan'
      ]
    }
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
                {;
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) =>
                {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', { selectedType, ...formData });
    // You can add actual form submission logic here
  };

  const contactInfo = [
    {
      icon: <Phone className="w-5 h-5" />,
      title: 'Phone',
      value: '+1 (555) 123-4567',
      description: 'Call us for immediate assistance'
    },
    {
      icon: <Mail className="w-5 h-5" />,
      title: 'Email',
      value: 'consultation@ziontechgroup.com',
      description: 'Send us your questions'
    },
    {
      icon: <MapPin className="w-5 h-5" />,
      title: 'Office',
      value: '123 Tech Street, San Francisco, CA',
      description: 'Visit our headquarters'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50"></div>
      <Helmet></Helmet>
        <title>Consultation - Zion Tech Group | Expert AI & IT Consulting</title>
        <meta name="description" content="Schedule a consultation with our AI and IT experts. Get personalized advice and solutions for your business needs." />
        <meta name="keywords" content="AI consultation, IT consulting, technology consulting, business transformation, expert advice" />
      </Helmet>
                {/* Hero Section */}
                <section className="bg-gradient-to-r from-blue-900 to-purple-900 text-white py-20"></section>
        <div className="container mx-auto px-4"></div>
          <div className="max-w-4xl mx-auto text-center"></div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6"></h1>
              Expert <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Consultation</span>
                </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100"></p>
              Get personalized advice from our AI and IT experts to transform your business with cutting-edge technology.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center"></div>
              <a
                href="#consultation-types"
                className="bg-white text-blue-900 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              ></a
>
                View Consultation Options
              </a>
              <a
                href="#contact"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-900 transition-colors"
              ></a
>
                Contact Us Directly
              </a>
                </div>
    message: ''
  })

  const handleSubmit = (e: React.FormEvent) =>
                {
    e.preventDefault()
    // Handle form submission
    console.log('Consultation form submitted:', formData)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
                {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900"></div>
      <Navigation />
                {/* Hero Section */}
                <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8"></section>
        <div className="max-w-7xl mx-auto"></div>
          <div className="text-center"></div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6"></h1>
              Free <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Consultation</span>
                </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto"></p>
              Get expert advice on your AI and IT needs. Schedule a free consultation with our specialists.
            </p>
                </div>
        </div>
                </section>
                {/* Services Section */}
                <section className="py-16 px-4 sm:px-6 lg:px-8"></section>
        <div className="max-w-7xl mx-auto"></div>
          <div className="text-center mb-16"></div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4"></h2>
              Our Expertise
            </h2>
            <p className="text-xl text-gray-300"></p>
              We provide consultation across all areas of AI and IT.
            </p>
                </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8"></div>
                {services.map((service, index) => (
              <div key={index} className="cyber-card text-center"></div>
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-lg flex items-center justify-center mx-auto mb-4"></div>
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2"></h3>
                {service.title}
                </h3>
                <p className="text-gray-300"></p>
                {service.description}
                </p>
                </div>
            ))}
                </div>
                </div>
      </section>
                {/* Consultation Types */}
                <section className="py-16 px-4 sm:px-6 lg:px-8"></section>
        <div className="max-w-7xl mx-auto"></div>
          <div className="text-center mb-16"></div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4"></h2>
              Consultation Options
            </h2>
            <p className="text-xl text-gray-300"></p>
              Choose the consultation type that best fits your needs.
            </p>
                </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8"></div>
                {consultationTypes.map((type, index) => (
              <div key={index} className={`cyber-card ${index === 0 ? 'ring-2 ring-cyan-400' : ''}`}></div>
                <div className="text-center mb-6"></div>
                  <h3 className="text-xl font-bold text-white mb-2"></h3>
                {type.title}
                </h3>
                  <div className="flex items-center justify-center mb-2"></div>
                    <Clock className="w-4 h-4 text-gray-400 mr-2" />
                    <span className="text-gray-400"></span>
                {type.duration}
                </span>
                </div>
                  <div className="text-2xl font-bold text-cyan-400"></div>
                {type.price}
                </div>
                </div>
                
                <ul className="space-y-3 mb-6"></ul>
                {type.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-300"></li>
                      <CheckCircle className="w-4 h-4 text-green-400 mr-3 flex-shrink-0" />
                {feature}
                </li>
                  ))}
                </ul>
                
                <button className={`w-full py-3 px-6 rounded-lg font-medium transition-all duration-300 ${
                  index === 0 
                    ? 'cyber-button' 
                    : 'cyber-button-secondary'
                }`}></button>
                {index === 0 ? 'Schedule Free Consultation' : 'Book Consultation'}
                </button>
                </div>
            ))}
                </div>
                </div>
      </section>
                {/* Contact Form */}
                <section className="py-16 px-4 sm:px-6 lg:px-8"></section>
        <div className="max-w-4xl mx-auto"></div>
          <div className="cyber-card"></div>
            <div className="text-center mb-8"></div>
              <h2 className="text-3xl font-bold text-white mb-4"></h2>
                Schedule Your Consultation
              </h2>
              <p className="text-gray-300"></p>
                Fill out the form below and we'll get back to you within 24 hours.
              </p>
                </div>
            
            <form onSubmit={handleSubmit} className="space-y-6"></form>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6"></div>
                <div></div>
                  <label className="block text-white font-medium mb-2">Name *</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 rounded-lg bg-white/10 border border-gray-600 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500"
                    placeholder="Your full name"
                  />
                </div>
                <div></div>
                  <label className="block text-white font-medium mb-2">Email *</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 rounded-lg bg-white/10 border border-gray-600 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500"
                    placeholder="your@email.com"
                  />
                </div>
                </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6"></div>
                <div></div>
                  <label className="block text-white font-medium mb-2">Company</label>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-lg bg-white/10 border border-gray-600 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500"
                    placeholder="Your company name"
                  />
                </div>
                <div></div>
                  <label className="block text-white font-medium mb-2">Phone</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-lg bg-white/10 border border-gray-600 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500"
                    placeholder="Your phone number"
                  />
                </div>
                </div>
              
              <div></div>
                <label className="block text-white font-medium mb-2">Service Interest</label>
                <select
                  name="service"
                  value={formData.service}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 rounded-lg bg-white/10 border border-gray-600 text-white focus:outline-none focus:ring-2 focus:ring-cyan-500"
                ></select
>
                </div>
                  <option value="">Select a service</option>
                  <option value="ai-solutions">AI Solutions</option>
                  <option value="cloud-services">Cloud Services</option>
                  <option value="cybersecurity">Cybersecurity</option>
                  <option value="data-analytics">Data Analytics</option>
                  <option value="custom-development">Custom Development</option>
                  <option value="other">Other</option>
                </select>
              </div>
              
              <div></div>
                <label className="block text-white font-medium mb-2">Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg bg-white/10 border border-gray-600 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500"
                  placeholder="Tell us about your project or requirements..."
                />
              </div>
              
              <button type="submit" className="cyber-button w-full"></button>
                <ArrowRight className="w-5 h-5 mr-2" />
                Schedule Consultation
              </button>
                </form>
          </div>
                </div>
      </section>
                {/* Contact Info */}
                <section className="py-16 px-4 sm:px-6 lg:px-8"></section>
        <div className="max-w-4xl mx-auto"></div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8"></div>
            <div className="text-center"></div>
              <Phone className="w-8 h-8 text-cyan-400 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-white mb-2">Phone</h3>
              <p className="text-gray-300">+1 302 464 0950</p>
                </div>
            <div className="text-center"></div>
              <Mail className="w-8 h-8 text-cyan-400 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-white mb-2">Email</h3>
              <p className="text-gray-300">kleber@ziontechgroup.com</p>
                </div>
            <div className="text-center"></div>
              <MapPin className="w-8 h-8 text-cyan-400 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-white mb-2">Address</h3>
              <p className="text-gray-300">364 E Main St STE 1008<br />Middletown DE 19709</p>
                </div>
          </div>
                </div>
      </section>

        <section className="py-16 px-4"></section>
          <div className="max-w-7xl mx-auto"></div>
            <h2 className="text-3xl font-bold text-white mb-12 text-center">Get in Touch</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8"></div>
              <div className="text-center"></div>
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4"></div>
                  <Phone className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Phone</h3>
                <p className="text-gray-300">+1 (302) 464-0950</p>
                </div>
              <div className="text-center"></div>
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4"></div>
                  <Mail className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Email</h3>
                <p className="text-gray-300">kleber@ziontechgroup.com</p>
                </div>
              <div className="text-center"></div>
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-teal-500 rounded-full flex items-center justify-center mx-auto mb-4"></div>
                  <MapPin className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Address</h3>
                <p className="text-gray-300">364 E Main St STE 1008<br />Middletown, DE 19709</p>
                </div>
            </div>
                </div>
        </section>
                </div>

        </div>
                </section>
    </div>
  );
};
      <Footer />
    </div>
  )
}

export default ConsultationPage
