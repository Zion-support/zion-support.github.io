import React from 'react';'';
const ConsultationPage: React.FC = () => {
  
  
  
  return (
  
    <div className="min-h-screen pt-20">""<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">""<div className="text-center">""<h1 className="text-4xl md:text-6xl font-bold text-white mb-6">""            Free <span className="text-cyan-400">Consultation</span></h1>""<p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">""            Get expert advice on how to implement AI and IT solutions for your business.
          </p></div>
</div>
'use client'';'import React, { useState } from 'react';'import Navigation from '../components/Navigation';'import Footer from '../components/Footer';'import { Calendar, Clock, CheckCircle, ArrowRight, Phone, Mail, MapPin, Users, Brain, Cloud, Shield } from 'lucide-react';';'const ConsultationPage: React.FC = () => {
  
  
  
const [formData, setFormData] = useState({
  
    name: ','''    email: ','''    company: ','''    phone: ','''    message: ','''    preferredDate: ','''    preferredTime: ''''  });
const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {;
const { name, value } = e.target
    setFormData(prev => ({
  
      ...prev,
      [name]: value
    }))
  }
const handleSubmit = (e: React.FormEvent) => {
  
    e.preventDefault()
    // Handle form submission
    console.log('Form submitted:', formData)''  }
const services = [
  
    {
  
      icon: Brain,
      title: 'AI Solutions',''      description: 'Machine learning, automation, and intelligent systems'''    },
    {
  
      icon: Cloud,
      title: 'Cloud Services',''      description: 'Migration, infrastructure, and cloud optimization'''    },
    {
  
      icon: Shield,
      title: 'Cybersecurity',''      description: 'Security assessment, implementation, and monitoring'''    }
  ];
const consultationTypes = [
  
    {
  
      title: 'Free Initial Consultation',''      duration: '30 minutes',''      price: 'Free',''      features: [
  
        'Needs assessment',''        'Solution overview',''        'Preliminary recommendations',''        'Next steps planning'''      ]
    },
    {
  
      title: 'Technical Deep Dive',''      duration: '2 hours',''      price: '$500',''      features: [
  
        'Detailed technical analysis',''        'Architecture review',''        'Implementation roadmap',''        'Resource planning',''        'Timeline estimation'''      ]
    },
    {
  
      title: 'Strategic Planning Session',''      duration: '4 hours',''      price: '$1,500',''      features: [
  
        'Comprehensive business analysis',''        'Technology strategy development',''        'ROI projections',''        'Risk assessment',''        'Detailed implementation plan'''      ]
    }
  ];
const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {;
const { name, value } = e.target;
    setFormData(prev => ({
  
      ...prev,
      [name]: value
    }));
  }

    <>
</>
<Helmet>
<title>Consultation - Zion Tech Group | Expert AI & IT Consulting</title>
<meta name="description" content="Schedule a consultation with our AI and IT experts. Get personalized advice and solutions for your business needs." />""<meta name="keywords" content="AI consultation, IT consulting, technology consulting, business transformation, expert advice" /></Helmet>""
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 to-purple-900 text-white py-20">""<div className="container mx-auto px-4">""<div className="max-w-4xl mx-auto text-center">""<h1 className="text-4xl md:text-6xl font-bold mb-6">""              Expert <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Consultation</span></h1>""<p className="text-xl md:text-2xl mb-8 text-blue-100">""              Get personalized advice from our AI and IT experts to transform your business with cutting-edge technology.
            </p>
<div className="flex flex-col sm:flex-row gap-4 justify-center">""<a
                href="#consultation-types"""                className="bg-white text-blue-900 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors"""              >
                View Consultation Options
              </a>
<a
                href="#contact"""                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-900 transition-colors"""              >
                Contact Us Directly
              </a></div>

  return (
  
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">""<Navigation />

      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">""<div className="max-w-7xl mx-auto">""<div className="text-center">""<h1 className="text-4xl md:text-6xl font-bold text-white mb-6">""              Free <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Consultation</span></h1>""<p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">""              Get expert advice on your AI and IT needs. Schedule a free consultation with our specialists.
            </p>
>>>>>>> origin/main
          </div></div>
</section>

      {/* Consultation Types */}
      <section id="consultation-types" className="py-16">""<div className="container mx-auto px-4">""<div className="max-w-6xl mx-auto">""<h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">""              Choose Your Consultation Type
            </h2>
<p className="text-xl text-gray-300">""              We provide consultation across all areas of AI and IT.
            </p></div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">""            {services.map((service, index) => (
  
              <div key={index} className="cyber-card text-center">""<div className="w-16 h-16 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-lg flex items-center justify-center mx-auto mb-4">""<service.icon className="w-8 h-8 text-white" /></div>""<h3 className="text-xl font-bold text-white mb-2">{service.title}</h3>""<p className="text-gray-300">{service.description}</p></div>""            ))}
          </div></div>
</section>

      {/* Consultation Types */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">""<div className="max-w-7xl mx-auto">""<div className="text-center mb-16">""<h2 className="text-3xl md:text-4xl font-bold text-white mb-4">""              Consultation Options
            </h2>
<p className="text-xl text-gray-300">""              Choose the consultation type that best fits your needs.
            </p></div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">""            {consultationTypes.map((type, index) => (
  
              <div key={index} className={`cyber-card ${index === 0 ? 'ring-2 ring-cyan-400' : '}`}>'''<div className="text-center mb-6">""<h3 className="text-xl font-bold text-white mb-2">{type.title}</h3>""<div className="flex items-center justify-center mb-2">""<Clock className="w-4 h-4 text-gray-400 mr-2" />""<span className="text-gray-400">{type.duration}</span></div>""<div className="text-2xl font-bold text-cyan-400">{type.price}</div></div>""<ul className="space-y-3 mb-6">""                  {type.features.map((feature, featureIndex) => (
  
                    <li key={featureIndex} className="flex items-center text-gray-300">""<CheckCircle className="w-4 h-4 text-green-400 mr-3 flex-shrink-0" />""                      {feature}
                    </li>
                  ))}
                </ul>
<button className={`w-full py-3 px-6 rounded-lg font-medium transition-all duration-300 ${
  
                  index === 0
                    ? 'cyber-button' ''                    : 'cyber-button-secondary'''                }`}>
                  {index === 0 ? 'Schedule Free Consultation' : 'Book Consultation'}''                </button></div>
            ))}
          </div></div>
</section>

      {/* Contact Form */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">""<div className="max-w-4xl mx-auto">""<div className="cyber-card">""<div className="text-center mb-8">""<h2 className="text-3xl font-bold text-white mb-4">""                Schedule Your Consultation
              </h2>
<p className="text-gray-300">""                Fill out the form below and we'll get back to you within 24 hours.''              </p></div>
<form onSubmit={handleSubmit} className="space-y-6">""<div className="grid grid-cols-1 md:grid-cols-2 gap-6">""<div>
<label className="block text-white font-medium mb-2">Name *</label>""<input
                    type="text"""                    name="name"""                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 rounded-lg bg-white/10 border border-gray-600 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500"""                    placeholder="Your full name"""                  /></div>
<div>
<label className="block text-white font-medium mb-2">Email *</label>""<input
                    type="email"""                    name="email"""                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 rounded-lg bg-white/10 border border-gray-600 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500"""                    placeholder="your@email.com"""                  /></div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">""<div>
<label className="block text-white font-medium mb-2">Company</label>""<input
                    type="text"""                    name="company"""                    value={formData.company}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-lg bg-white/10 border border-gray-600 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500"""                    placeholder="Your company name"""                  /></div>
<div>
<label className="block text-white font-medium mb-2">Phone</label>""<input
                    type="tel"""                    name="phone"""                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-lg bg-white/10 border border-gray-600 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500"""                    placeholder="Your phone number"""                  /></div>
</div>
<div>
<label className="block text-white font-medium mb-2">Service Interest</label>""<select
                  name="service"""                  value={formData.service}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 rounded-lg bg-white/10 border border-gray-600 text-white focus:outline-none focus:ring-2 focus:ring-cyan-500"""                >
      {/* Booking Form */}
      <section className="py-16 bg-white">""<div className="container mx-auto px-4">""<div className="max-w-4xl mx-auto">""<h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">""              Schedule Your Consultation
            </h2>
<form onSubmit={handleSubmit} className="bg-gray-50 rounded-lg p-8">""<div className="grid md:grid-cols-2 gap-6 mb-6">""<div>
<label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">""                    Full Name *
                  </label>
<input
                    type="text"""                    id="name"""                    name="name"""                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"""                    placeholder="Enter your full name"""                  /></div>
<div>
<label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">""                    Email Address *
                  </label>
<input
                    type="email"""                    id="email"""                    name="email"""                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"""                    placeholder="Enter your email"""                  /></div>
</div>
<div>
<label className="block text-white font-medium mb-2">Message</label>""<textarea
                  name="message"""                  value={formData.message}
                  onChange={handleInputChange}
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg bg-white/10 border border-gray-600 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500"""                  placeholder="Tell us about your project or requirements..."""                /></div>
<button type="submit" className="cyber-button w-full">""<ArrowRight className="w-5 h-5 mr-2" />""                Schedule Consultation
              </button></form>
</div></div>
</section>

      {/* Contact Info */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">""<div className="max-w-4xl mx-auto">""<div className="grid grid-cols-1 md:grid-cols-3 gap-8">""<div className="text-center">""<Phone className="w-8 h-8 text-cyan-400 mx-auto mb-4" />""<h3 className="text-lg font-semibold text-white mb-2">Phone</h3>""<p className="text-gray-300">+1 302 464 0950</p></div>""<div className="text-center">""<Mail className="w-8 h-8 text-cyan-400 mx-auto mb-4" />""<h3 className="text-lg font-semibold text-white mb-2">Email</h3>""<p className="text-gray-300">kleber@ziontechgroup.com</p></div>""<div className="text-center">""<MapPin className="w-8 h-8 text-cyan-400 mx-auto mb-4" />""<h3 className="text-lg font-semibold text-white mb-2">Address</h3>""<p className="text-gray-300">364 E Main St STE 1008<br />Middletown DE 19709</p></div>""</div></div>
</section></section>
</div></div>
>>>>>>> origin/main
  );
}
export default ConsultationPage;
      <Footer /></div>
  )
}
export default ConsultationPage;
>>>>>>> origin/main
>>>>>>> origin/main
>>>>>>> cursor/delete-records-a75e
