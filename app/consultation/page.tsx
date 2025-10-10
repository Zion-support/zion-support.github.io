'use client';
import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { 
  Calendar, 
  Clock, 
  User, 
  Mail, 
  Phone, 
  CheckCircle, 
  ArrowRight, 
  Star,
  Users,
  Target,
  Zap,
  Shield
} from 'lucide-react';

const ConsultationPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: '',
    message: '',
    preferredDate: '',
    preferredTime: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Simulate form submission
      await new Promise(resolve => setTimeout(resolve, 1000));
      setSubmitStatus('success');
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        service: '',
        message: '',
        preferredDate: '',
        preferredTime: ''
      });
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const consultationTypes = [
    {
      icon: Target,
      title: 'Strategy Consultation',
      description: 'Get expert advice on your AI and IT strategy',
      duration: '60 minutes',
      price: '$299',
      features: [
        'Business analysis',
        'Technology assessment',
        'Strategic recommendations',
        'Implementation roadmap'
      ]
    },
    {
      icon: Zap,
      title: 'Technical Consultation',
      description: 'Deep dive into technical implementation details',
      duration: '90 minutes',
      price: '$399',
      features: [
        'Technical architecture review',
        'Code analysis',
        'Performance optimization',
        'Security assessment'
      ]
    },
    {
      icon: Shield,
      title: 'Security Consultation',
      description: 'Comprehensive security assessment and recommendations',
      duration: '120 minutes',
      price: '$499',
      features: [
        'Security audit',
        'Vulnerability assessment',
        'Compliance review',
        'Security roadmap'
      ]
    }
  ];

  const benefits = [
    'Expert guidance from industry professionals',
    'Personalized recommendations for your business',
    'Detailed implementation roadmap',
    'Follow-up support and resources',
    'No obligation to purchase services',
    'Confidential and secure consultation'
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Free Consultation | Zion Tech Group</title>
        <meta name="description" content="Schedule a free consultation with our AI and IT experts. Get personalized recommendations for your business transformation." />
        <meta name="keywords" content="free consultation, AI consulting, IT consulting, business transformation, expert advice" />
      </Helmet>

      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Free <span className="text-cyan-400">Consultation</span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Get expert advice on your AI and IT transformation. Schedule a free consultation 
            with our specialists and discover how we can help your business grow.
          </p>
        </div>
      </section>

      {/* Consultation Types */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Consultation Types</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {consultationTypes.map((type, index) => (
              <div key={index} className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700 hover:border-slate-600 transition-all duration-300">
                <div className="text-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <type.icon className="w-8 h-8 text-slate-900" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">{type.title}</h3>
                  <p className="text-gray-300 mb-4">{type.description}</p>
                  <div className="flex items-center justify-center space-x-4 text-sm text-gray-400 mb-4">
                    <div className="flex items-center">
                      <Clock className="w-4 h-4 mr-1" />
                      {type.duration}
                    </div>
                    <div className="text-2xl font-bold text-cyan-400">{type.price}</div>
                  </div>
                </div>
                <ul className="space-y-3 mb-6">
                  {type.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-cyan-400 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <button className="w-full bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 text-white font-bold py-3 px-6 rounded-lg transition-all duration-300">
                  Book This Consultation
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Why Choose Our Consultation?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-4">
              {benefits.slice(0, 3).map((benefit, index) => (
                <div key={index} className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-cyan-400 mr-3 flex-shrink-0" />
                  <span className="text-gray-300">{benefit}</span>
                </div>
              ))}
            </div>
            <div className="space-y-4">
              {benefits.slice(3).map((benefit, index) => (
                <div key={index} className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-cyan-400 mr-3 flex-shrink-0" />
                  <span className="text-gray-300">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Consultation Form */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700">
            <h2 className="text-3xl font-bold text-white text-center mb-8">Schedule Your Consultation</h2>
            
            {submitStatus === 'success' && (
              <div className="mb-6 p-4 bg-green-500/20 border border-green-500 rounded-lg flex items-center">
                <CheckCircle className="w-5 h-5 text-green-400 mr-2" />
                <span className="text-green-400">Consultation request submitted successfully! We'll contact you soon.</span>
              </div>
            )}

            {submitStatus === 'error' && (
              <div className="mb-6 p-4 bg-red-500/20 border border-red-500 rounded-lg flex items-center">
                <span className="text-red-400">There was an error submitting your request. Please try again.</span>
              </div>
            )}

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
                    onChange={handleChange}
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
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-colors"
                    placeholder="Enter your email"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-colors"
                    placeholder="Enter your phone number"
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
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-colors"
                    placeholder="Enter your company name"
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
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-colors"
                  >
                    <option value="">Select a service</option>
                    <option value="ai-solutions">AI Solutions</option>
                    <option value="cloud-infrastructure">Cloud Infrastructure</option>
                    <option value="cybersecurity">Cybersecurity</option>
                    <option value="custom-development">Custom Development</option>
                    <option value="data-analytics">Data Analytics</option>
                    <option value="it-consulting">IT Consulting</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="preferredDate" className="block text-sm font-medium text-gray-300 mb-2">
                    Preferred Date
                  </label>
                  <input
                    type="date"
                    id="preferredDate"
                    name="preferredDate"
                    value={formData.preferredDate}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-colors"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="preferredTime" className="block text-sm font-medium text-gray-300 mb-2">
                  Preferred Time
                </label>
                <select
                  id="preferredTime"
                  name="preferredTime"
                  value={formData.preferredTime}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-colors"
                >
                  <option value="">Select a time</option>
                  <option value="9:00 AM">9:00 AM</option>
                  <option value="10:00 AM">10:00 AM</option>
                  <option value="11:00 AM">11:00 AM</option>
                  <option value="12:00 PM">12:00 PM</option>
                  <option value="1:00 PM">1:00 PM</option>
                  <option value="2:00 PM">2:00 PM</option>
                  <option value="3:00 PM">3:00 PM</option>
                  <option value="4:00 PM">4:00 PM</option>
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
                  onChange={handleChange}
                  rows={6}
                  className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-colors resize-none"
                  placeholder="Tell us about your project or requirements"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 disabled:opacity-50 disabled:cursor-not-allowed text-white font-bold py-4 px-6 rounded-lg transition-all duration-300 flex items-center justify-center"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
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
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-slate-800/50 backdrop-blur-sm rounded-3xl p-12 border border-slate-700">
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Don't wait to start your transformation journey. Schedule your free consultation 
              today and take the first step towards a more efficient and profitable business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300">
                Schedule Now
              </button>
              <button className="border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300">
                Call Us: (302) 464-0950
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ConsultationPage;
