import { ArrowRight, Calendar, CheckCircle, Zap, Mail, Smartphone, Globe } from "lucide-react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { useState } from "react";

export default function Consultation() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    industry: '',
    projectSize: '',
    timeline: '',
    message: '',
    consultationType: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    // Handle form submission logic here
  };

  const consultationTypes = [
    {
      title: "AI Strategy",
      description: "Strategic planning for AI implementation and digital transformation.",
      price: "Free",
      duration: "30 min",
      color: "from-blue-500 to-cyan-500",
      icon: <Zap className="w-8 h-8 text-white" />,
      features: [
        "AI readiness assessment",
        "Technology roadmap",
        "ROI analysis",
        "Implementation timeline"
      ]
    },
    {
      title: "Cloud Migration",
      description: "Expert guidance on cloud infrastructure and migration strategies.",
      price: "Free",
      duration: "45 min",
      color: "from-purple-500 to-pink-500",
      icon: <Globe className="w-8 h-8 text-white" />,
      features: [
        "Infrastructure audit",
        "Migration strategy",
        "Cost optimization",
        "Security assessment"
      ]
    },
    {
      title: "Cybersecurity",
      description: "Comprehensive security audit and protection strategy.",
      price: "Free",
      duration: "60 min",
      color: "from-red-500 to-orange-500",
      icon: <CheckCircle className="w-8 h-8 text-white" />,
      features: [
        "Security assessment",
        "Vulnerability analysis",
        "Compliance review",
        "Protection strategy"
      ]
    },
    {
      title: "Digital Transformation",
      description: "Complete digital strategy and modernization planning.",
      price: "Free",
      duration: "90 min",
      color: "from-green-500 to-teal-500",
      icon: <Calendar className="w-8 h-8 text-white" />,
      features: [
        "Digital audit",
        "Technology stack review",
        "Process optimization",
        "Change management"
      ]
    }
  ];

  const benefits = [
    {
      title: "Expert Guidance",
      description: "Get insights from certified technology professionals with years of experience.",
      icon: <CheckCircle className="w-8 h-8 text-cyan-400" />
    },
    {
      title: "No Obligation",
      description: "Completely free consultation with no strings attached or hidden costs.",
      icon: <Zap className="w-8 h-8 text-purple-400" />
    },
    {
      title: "Actionable Insights",
      description: "Receive practical recommendations you can implement immediately.",
      icon: <ArrowRight className="w-8 h-8 text-green-400" />
    },
    {
      title: "Customized Solutions",
      description: "Tailored advice based on your specific business needs and challenges.",
      icon: <Globe className="w-8 h-8 text-blue-400" />
    }
  ];

  const industries = [
    "Technology", "Healthcare", "Finance", "Manufacturing", "Retail", "Education", "Government", "Other"
  ];

  const projectSizes = [
    "Small (1-10 employees)", "Medium (11-100 employees)", "Large (101-1000 employees)", "Enterprise (1000+ employees)"
  ];

  const timelines = [
    "Immediate (1-3 months)", "Short-term (3-6 months)", "Medium-term (6-12 months)", "Long-term (12+ months)"
  ];
=======
import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight, Calendar, Clock, User, Mail, Phone, CheckCircle, Star, Zap } from 'lucide-react';

export default function Consultation() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    service: '',
    message: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

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

  const services = [
    'AI Solutions & Machine Learning',
    'Cybersecurity Services',
    'Cloud Infrastructure',
    'Web Development',
    'Mobile App Development',
    'Data Analytics',
    '5G Solutions',
    'Custom Software Development',
    'IT Consulting',
    'Digital Transformation'
  ];

  const consultationTypes = [
    {
      name: 'Free Discovery Call',
      duration: '30 minutes',
      price: 'Free',
      description: 'Initial consultation to understand your needs and challenges',
      features: ['Needs assessment', 'Solution overview', 'Next steps planning'],
      icon: <Calendar className="w-6 h-6" />,
      color: 'from-blue-500 to-cyan-500'
    },
    {
      name: 'Technical Consultation',
      duration: '60 minutes',
      price: '$299',
      description: 'Deep dive into your technical requirements and architecture',
      features: ['Technical analysis', 'Architecture review', 'Implementation roadmap', 'Resource planning'],
      icon: <Zap className="w-6 h-6" />,
      color: 'from-purple-500 to-pink-500'
    },
    {
      name: 'Strategic Planning',
      duration: '2 hours',
      price: '$799',
      description: 'Comprehensive business and technology strategy session',
      features: ['Business analysis', 'Technology audit', 'Strategic roadmap', 'ROI projections', 'Implementation timeline'],
      icon: <Star className="w-6 h-6" />,
      color: 'from-green-500 to-emerald-500'
    }
  ];

  const benefits = [
    {
      title: 'Expert Guidance',
      description: 'Get insights from our experienced team of technology experts',
      icon: <User className="w-6 h-6" />
    },
    {
      title: 'Custom Solutions',
      description: 'Tailored recommendations based on your specific business needs',
      icon: <Zap className="w-6 h-6" />
    },
    {
      title: 'No Obligation',
      description: 'Free initial consultation with no commitment required',
      icon: <CheckCircle className="w-6 h-6" />
    },
    {
      title: 'Quick Response',
      description: 'We typically respond within 24 hours to schedule your consultation',
      icon: <Clock className="w-6 h-6" />
    }
  ];

  if (isSubmitted) {
    return (
      <>
        <Helmet>
          <title>Consultation Request Submitted - Zion Tech Group</title>
          <meta name="description" content="Thank you for your consultation request. We'll be in touch soon to schedule your free consultation." />
        </Helmet>
        
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center px-4">
          <div className="max-w-md mx-auto text-center">
            <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-3xl font-bold text-white mb-4">Request Submitted!</h1>
            <p className="text-gray-300 mb-6">
              Thank you for your consultation request. Our team will review your information and contact you within 24 hours to schedule your free consultation.
            </p>
            <Link
              to="/"
              className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 inline-flex items-center group"
            >
              Return Home
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      <Helmet>
        <title>Free Consultation - Zion Tech Group | Expert Technology Guidance</title>
        <meta name="description" content="Get expert technology consultation from Zion Tech Group. Free initial consultation to help you choose the right solutions for your business." />
        <meta name="keywords" content="technology consultation, free consultation, IT consulting, business technology, digital transformation" />
        <meta property="og:title" content="Free Consultation - Zion Tech Group | Expert Technology Guidance" />
        <meta property="og:description" content="Get expert technology consultation from Zion Tech Group. Free initial consultation to help you choose the right solutions." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ziontechgroup.com/consultation" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 mb-6">
              <Calendar className="w-4 h-4 text-cyan-400 mr-2" />
              <span className="text-cyan-400 text-sm font-medium">Free Consultation</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Get Expert <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">Technology Guidance</span>
            </h1>
            
            <p className="text-xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
              Schedule a free consultation with our technology experts. We'll help you identify the best solutions 
              for your business needs and create a roadmap for digital transformation.
            </p>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Why Choose Our Consultation?
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our expert team provides personalized guidance to help you make informed technology decisions.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 text-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center text-white mx-auto mb-4 group-hover:scale-110 transition-transform">
                    {benefit.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-300 leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Consultation Types */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800/50 to-purple-800/50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Choose Your Consultation Type
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Select the consultation that best fits your needs and budget.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {consultationTypes.map((type, index) => (
                <div key={index} className="group bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105">
                  <div className={`w-16 h-16 rounded-lg bg-gradient-to-r ${type.color} flex items-center justify-center text-white mx-auto mb-6 group-hover:scale-110 transition-transform`}>
                    {type.icon}
                  </div>
                  <h3 className="text-2xl font-semibold text-white mb-2 text-center">{type.name}</h3>
                  <div className="text-center mb-4">
                    <span className="text-3xl font-bold text-cyan-400">{type.price}</span>
                    <span className="text-gray-400 ml-2">({type.duration})</span>
                  </div>
                  <p className="text-gray-300 mb-6 text-center">{type.description}</p>
                  <ul className="space-y-2 mb-6">
                    {type.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-300">
                        <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Form */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Schedule Your Free Consultation
              </h2>
              <p className="text-xl text-gray-300">
                Fill out the form below and we'll contact you within 24 hours to schedule your consultation.
              </p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-white font-medium mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                      placeholder="Enter your full name"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-white font-medium mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                      placeholder="Enter your email"
                    />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="company" className="block text-white font-medium mb-2">
                      Company Name
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                      placeholder="Enter your company name"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="phone" className="block text-white font-medium mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                      placeholder="Enter your phone number"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="service" className="block text-white font-medium mb-2">
                    Service Interest
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                  >
                    <option value="">Select a service</option>
                    {services.map((service, index) => (
                      <option key={index} value={service} className="bg-slate-800 text-white">
                        {service}
                      </option>
                    ))}
                  </select>
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-white font-medium mb-2">
                    Tell us about your project
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={4}
                    className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent resize-none"
                    placeholder="Describe your project, challenges, or questions..."
                  />
                </div>
                
                <div className="text-center">
                  <button
                    type="submit"
                    className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center group mx-auto shadow-lg hover:shadow-cyan-500/25 hover:scale-105"
                  >
                    Schedule Free Consultation
                    <Calendar className="w-5 h-5 ml-2 group-hover:scale-110 transition-transform" />
                  </button>
                </div>
              </form>
            </div>
          </div>
        </section>

        {/* Contact Info */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-cyan-900/30 to-purple-900/30">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-white mb-8">
              Prefer to Contact Us Directly?
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-white font-semibold mb-2">Email Us</h3>
                <p className="text-cyan-400">kleber@ziontechgroup.com</p>
              </div>
              
              <div className="text-center">
                <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-white font-semibold mb-2">Call Us</h3>
                <p className="text-cyan-400">+1 302 464 0950</p>
              </div>
              
              <div className="text-center">
                <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Clock className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-white font-semibold mb-2">Business Hours</h3>
                <p className="text-cyan-400">Mon-Fri 9AM-6PM EST</p>
              </div>
            </div>
          </div>
        </section>
>>>>>>> cursor/website-audit-and-update-with-deployment-3531
      </div>
    </>
  );
}