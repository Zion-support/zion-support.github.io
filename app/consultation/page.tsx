import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight, Calendar, CheckCircle, Zap, Mail, Smartphone, Globe, Target, Shield, TrendingUp, Users } from 'lucide-react';

const ConsultationPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    service: '',
    message: ''
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
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  const consultationTypes = [
    {
      title: 'AI Strategy Consultation',
      description: 'Get expert advice on implementing AI solutions for your business',
      duration: '2 hours',
      price: '$500',
      icon: <Zap className="w-8 h-8" />,
      features: [
        'AI readiness assessment',
        'Technology recommendations',
        'Implementation roadmap',
        'ROI projections'
      ]
    },
    {
      title: 'Cloud Architecture Review',
      description: 'Comprehensive review of your cloud infrastructure and optimization',
      duration: '3 hours',
      price: '$750',
      icon: <Globe className="w-8 h-8" />,
      features: [
        'Infrastructure audit',
        'Security assessment',
        'Cost optimization',
        'Scalability planning'
      ]
    },
    {
      title: 'Cybersecurity Assessment',
      description: 'Evaluate your security posture and identify vulnerabilities',
      duration: '4 hours',
      price: '$1,000',
      icon: <Shield className="w-8 h-8" />,
      features: [
        'Security vulnerability scan',
        'Compliance review',
        'Risk assessment',
        'Remediation plan'
      ]
    },
    {
      title: 'Digital Transformation',
      description: 'Complete digital transformation strategy and planning',
      duration: '6 hours',
      price: '$1,500',
      icon: <TrendingUp className="w-8 h-8" />,
      features: [
        'Current state analysis',
        'Future state vision',
        'Technology roadmap',
        'Change management plan'
      ]
    }
  ];

  const benefits = [
    'Expert insights from industry professionals',
    'Customized recommendations for your business',
    'Actionable implementation strategies',
    'Follow-up support and guidance',
    'Access to our technology partners',
    'Priority support for future projects'
  ];

  const processSteps = [
    {
      step: '1',
      title: 'Initial Consultation',
      description: 'We discuss your business goals and challenges to understand your needs',
      icon: <Users className="w-6 h-6" />
    },
    {
      step: '2',
      title: 'Assessment & Analysis',
      description: 'Our experts analyze your current systems and identify opportunities',
      icon: <Target className="w-6 h-6" />
    },
    {
      step: '3',
      title: 'Strategy Development',
      description: 'We create a customized strategy and implementation plan for your business',
      icon: <TrendingUp className="w-6 h-6" />
    },
    {
      step: '4',
      title: 'Implementation Support',
      description: 'We provide ongoing support to ensure successful implementation',
      icon: <CheckCircle className="w-6 h-6" />
    }
  ];

  return (
    <>
      <Helmet>
        <title>Consultation - Zion Tech Group | Expert Technology Consulting</title>
        <meta
          name="description"
          content="Get expert technology consultation from Zion Tech Group. AI strategy, cloud architecture, cybersecurity assessment, and digital transformation consulting services."
        />
        <meta
          name="keywords"
          content="technology consultation, AI strategy, cloud architecture, cybersecurity assessment, digital transformation, expert consulting"
        />
        <link rel="canonical" href="https://ziontechgroup.com/consultation" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-pink-500/10 animate-pulse"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.3),transparent_50%)]"></div>
        
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-7xl mx-auto text-center">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 mb-6">
              <Users className="w-4 h-4 text-cyan-400 mr-2" />
              <span className="text-cyan-400 text-sm font-medium">Expert Consultation</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              Expert
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 animate-pulse">
                {" "}Consultation
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
              Get expert guidance from our technology professionals to transform your business 
              with cutting-edge AI, cloud, and cybersecurity solutions.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="#consultation-form"
                className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center group shadow-lg hover:shadow-cyan-500/25 hover:scale-105"
              >
                Book Consultation
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="#consultation-types"
                className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 group hover:scale-105"
              >
                View Services
              </Link>
            </div>
          </div>
        </section>

        {/* Consultation Types */}
        <section id="consultation-types" className="py-16 px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
                  Consultation Services
                </span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Choose the consultation type that best fits your business needs and goals.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {consultationTypes.map((type, index) => (
                <div
                  key={index}
                  className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10"
                >
                  <div className="text-cyan-400 mb-4 flex justify-center group-hover:scale-110 transition-transform duration-300">
                    {type.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3 text-center group-hover:text-cyan-300 transition-colors">
                    {type.title}
                  </h3>
                  <p className="text-gray-300 text-center mb-4 text-sm leading-relaxed">
                    {type.description}
                  </p>
                  
                  <div className="text-center mb-4">
                    <div className="text-2xl font-bold text-cyan-400 mb-1">{type.price}</div>
                    <div className="text-gray-400 text-sm">{type.duration}</div>
                  </div>
                  
                  <ul className="space-y-2 mb-6">
                    {type.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-gray-300 text-sm">
                        <CheckCircle className="w-4 h-4 text-cyan-400 mr-2 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <Link
                    to="#consultation-form"
                    className="w-full bg-gradient-to-r from-cyan-500 to-purple-600 text-white py-2 px-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 text-center block"
                  >
                    Book Now
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Process Steps */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 relative z-10 bg-gradient-to-r from-slate-800/50 to-purple-800/50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Our Consultation Process
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                A structured approach to understanding your needs and delivering actionable solutions.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {processSteps.map((step, index) => (
                <div key={index} className="text-center group">
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <span className="text-white font-bold text-xl">{step.step}</span>
                  </div>
                  <div className="text-cyan-400 mb-4 flex justify-center group-hover:scale-110 transition-transform duration-300">
                    {step.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-300 transition-colors">
                    {step.title}
                  </h3>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Why Choose Our Consultation?
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Get the expertise and guidance you need to make informed technology decisions.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start space-x-3 group">
                  <CheckCircle className="w-6 h-6 text-cyan-400 mt-1 flex-shrink-0 group-hover:scale-110 transition-transform duration-300" />
                  <span className="text-gray-300 group-hover:text-white transition-colors">
                    {benefit}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Consultation Form */}
        <section id="consultation-form" className="py-16 px-4 sm:px-6 lg:px-8 relative z-10 bg-gradient-to-r from-cyan-900/30 to-purple-900/30">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Book Your Consultation
              </h2>
              <p className="text-xl text-gray-300">
                Fill out the form below and we'll get back to you within 24 hours to schedule your consultation.
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
                      className="w-full px-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
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
                      className="w-full px-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
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
                      className="w-full px-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
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
                      className="w-full px-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                      placeholder="Enter your phone number"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="service" className="block text-white font-medium mb-2">
                    Consultation Type *
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                  >
                    <option value="">Select consultation type</option>
                    <option value="ai-strategy">AI Strategy Consultation</option>
                    <option value="cloud-architecture">Cloud Architecture Review</option>
                    <option value="cybersecurity">Cybersecurity Assessment</option>
                    <option value="digital-transformation">Digital Transformation</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-white font-medium mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={4}
                    className="w-full px-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                    placeholder="Tell us about your project and what you'd like to achieve..."
                  />
                </div>
                
                <div className="text-center">
                  <button
                    type="submit"
                    className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-cyan-500/25 hover:scale-105"
                  >
                    Book Consultation
                  </button>
                </div>
              </form>
            </div>
          </div>
        </section>

        {/* Contact Information */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
              Ready to Get Started?
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
              <div className="text-center">
                <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-white font-semibold mb-2">Email</h3>
                <p className="text-cyan-400">kleber@ziontechgroup.com</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <Smartphone className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-white font-semibold mb-2">Phone</h3>
                <p className="text-cyan-400">+1 302 464 0950</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <Globe className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-white font-semibold mb-2">Address</h3>
                <p className="text-cyan-400 text-sm">364 E Main St STE 1008<br />Middletown DE 19709</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default ConsultationPage;