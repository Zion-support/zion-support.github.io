'use client';
import React, { useState } from 'react';
import { Calendar, Clock, User, Mail, Phone, CheckCircle, Star, Award, Zap, Brain, Cloud, Shield } from 'lucide-react';

const ConsultationPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    service: '',
    budget: '',
    timeline: '',
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
    console.log('Consultation form submitted:', formData);
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: '',
        email: '',
        company: '',
        phone: '',
        service: '',
        budget: '',
        timeline: '',
        message: ''
      });
    }, 3000);
  };

  const services = [
    'AI Services',
    'AI Marketing',
    'AI Automation',
    'AI Healthcare',
    'AI Fintech',
    'Cloud Migration',
    'Cybersecurity',
    'DevOps & CI/CD',
    'Database Management',
    'IT Consulting',
    'Custom Development',
    'Other'
  ];

  const budgets = [
    'Under $10K',
    '$10K - $50K',
    '$50K - $100K',
    '$100K - $500K',
    '$500K+',
    'Not sure'
  ];

  const timelines = [
    'ASAP',
    'Within 1 month',
    '1-3 months',
    '3-6 months',
    '6+ months',
    'Just exploring'
  ];

  const benefits = [
    {
      icon: Brain,
      title: 'Expert AI Consultation',
      description: 'Get insights from our AI specialists with years of experience in enterprise implementations.'
    },
    {
      icon: Cloud,
      title: 'Technology Assessment',
      description: 'Comprehensive evaluation of your current technology stack and recommendations for improvement.'
    },
    {
      icon: Shield,
      title: 'Security Review',
      description: 'Identify potential security vulnerabilities and get recommendations for enterprise-grade protection.'
    },
    {
      icon: Zap,
      title: 'ROI Analysis',
      description: 'Understand the potential return on investment for your AI and IT initiatives.'
    }
  ];

  const testimonials = [
    {
      name: 'Sarah Johnson',
      company: 'TechStart Inc.',
      content: 'The free consultation helped us identify exactly what we needed. The team was incredibly knowledgeable and provided valuable insights.',
      rating: 5
    },
    {
      name: 'Michael Chen',
      company: 'GrowthCorp',
      content: 'Best consultation I\'ve ever had. They understood our challenges and provided a clear roadmap for our AI transformation.',
      rating: 5
    },
    {
      name: 'Emily Rodriguez',
      company: 'ScaleUp Solutions',
      content: 'The consultation was thorough and professional. We got actionable recommendations that we could implement immediately.',
      rating: 5
    }
  ];

  return (
    <>
      <SEOOptimizer
        title="Free Consultation - Zion Tech Group"
        description="Get a free consultation with our AI and IT experts. Discover how our solutions can transform your business. No obligation, just expert advice."
        keywords={['free consultation', 'AI consultation', 'IT consultation', 'expert advice', 'business transformation', 'technology assessment']}
        canonicalUrl="https://ziontechgroup.com/consultation"
      />
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <Navigation />
        
        <main className="pt-16">
          {/* Hero Section */}
          <section className="container mx-auto px-4 py-16 text-center">
            <div className="max-w-4xl mx-auto">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 neon-text">
                Free Expert Consultation
              </h1>
              <p className="text-xl md:text-2xl text-cyan-400 mb-8">
                Discover How AI Can Transform Your Business
              </p>
              <p className="text-lg text-gray-300 mb-12 max-w-3xl mx-auto">
                Get personalized insights from our AI and IT experts. No obligation, 
                just expert advice to help you make informed decisions about your technology future.
              </p>
            </div>
          </section>

          {/* Benefits Section */}
          <section className="container mx-auto px-4 py-16">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12 neon-text">
                What You'll Get
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {benefits.map((benefit, index) => (
                  <div key={index} className="cyber-card p-6 text-center hover:scale-105 transition-all duration-300">
                    <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-purple-600 rounded-xl flex items-center justify-center mb-6 mx-auto">
                      <benefit.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-4 neon-text">{benefit.title}</h3>
                    <p className="text-gray-300 text-sm leading-relaxed">{benefit.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Consultation Form Section */}
          <section className="container mx-auto px-4 py-16">
            <div className="max-w-4xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                {/* Form */}
                <div className="cyber-card p-8">
                  <h2 className="text-2xl md:text-3xl font-bold text-white mb-6 neon-text">
                    Schedule Your Free Consultation
                  </h2>
                  {isSubmitted ? (
                    <div className="text-center py-8">
                      <CheckCircle className="w-16 h-16 text-green-400 mx-auto mb-4" />
                      <h3 className="text-xl font-bold text-white mb-2">Consultation Scheduled!</h3>
                      <p className="text-gray-300">We'll contact you within 24 hours to confirm your consultation time.</p>
                    </div>
                  ) : (
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
                            className="w-full px-4 py-3 bg-slate-800 border border-gray-600 rounded-lg text-white focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400"
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
                            className="w-full px-4 py-3 bg-slate-800 border border-gray-600 rounded-lg text-white focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400"
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
                            className="w-full px-4 py-3 bg-slate-800 border border-gray-600 rounded-lg text-white focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400"
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
                            className="w-full px-4 py-3 bg-slate-800 border border-gray-600 rounded-lg text-white focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400"
                            placeholder="+1 (555) 123-4567"
                          />
                        </div>
                      </div>

                      <div>
                        <label htmlFor="service" className="block text-sm font-medium text-gray-300 mb-2">
                          Service Interest
                        </label>
                        <select
                          id="service"
                          name="service"
                          value={formData.service}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 bg-slate-800 border border-gray-600 rounded-lg text-white focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400"
                        >
                          <option value="">Select a service</option>
                          {services.map((service, index) => (
                            <option key={index} value={service}>{service}</option>
                          ))}
                        </select>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <label htmlFor="budget" className="block text-sm font-medium text-gray-300 mb-2">
                            Budget Range
                          </label>
                          <select
                            id="budget"
                            name="budget"
                            value={formData.budget}
                            onChange={handleInputChange}
                            className="w-full px-4 py-3 bg-slate-800 border border-gray-600 rounded-lg text-white focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400"
                          >
                            <option value="">Select budget range</option>
                            {budgets.map((budget, index) => (
                              <option key={index} value={budget}>{budget}</option>
                            ))}
                          </select>
                        </div>
                        <div>
                          <label htmlFor="timeline" className="block text-sm font-medium text-gray-300 mb-2">
                            Timeline
                          </label>
                          <select
                            id="timeline"
                            name="timeline"
                            value={formData.timeline}
                            onChange={handleInputChange}
                            className="w-full px-4 py-3 bg-slate-800 border border-gray-600 rounded-lg text-white focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400"
                          >
                            <option value="">Select timeline</option>
                            {timelines.map((timeline, index) => (
                              <option key={index} value={timeline}>{timeline}</option>
                            ))}
                          </select>
                        </div>
                      </div>

                      <div>
                        <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                          Tell us about your project *
                        </label>
                        <textarea
                          id="message"
                          name="message"
                          value={formData.message}
                          onChange={handleInputChange}
                          required
                          rows={6}
                          className="w-full px-4 py-3 bg-slate-800 border border-gray-600 rounded-lg text-white focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400"
                          placeholder="Describe your current challenges, goals, and what you hope to achieve with AI and IT solutions..."
                        />
                      </div>

                      <button
                        type="submit"
                        className="w-full cyber-button flex items-center justify-center space-x-2 py-4"
                      >
                        <Calendar className="w-5 h-5" />
                        <span>Schedule Free Consultation</span>
                      </button>
                    </form>
                  )}
                </div>

                {/* Info Sidebar */}
                <div className="space-y-8">
                  <div className="cyber-card p-6">
                    <h3 className="text-xl font-bold text-white mb-4 neon-text">Why Choose Our Consultation?</h3>
                    <div className="space-y-4">
                      <div className="flex items-center space-x-3">
                        <CheckCircle className="w-5 h-5 text-green-400" />
                        <span className="text-gray-300 text-sm">100% Free - No hidden costs</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <CheckCircle className="w-5 h-5 text-green-400" />
                        <span className="text-gray-300 text-sm">Expert AI and IT specialists</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <CheckCircle className="w-5 h-5 text-green-400" />
                        <span className="text-gray-300 text-sm">Personalized recommendations</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <CheckCircle className="w-5 h-5 text-green-400" />
                        <span className="text-gray-300 text-sm">No obligation to purchase</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <CheckCircle className="w-5 h-5 text-green-400" />
                        <span className="text-gray-300 text-sm">Follow-up support included</span>
                      </div>
                    </div>
                  </div>

                  <div className="cyber-card p-6">
                    <h3 className="text-xl font-bold text-white mb-4 neon-text">What to Expect</h3>
                    <div className="space-y-3">
                      <div className="flex items-start space-x-3">
                        <Clock className="w-5 h-5 text-cyan-400 mt-1" />
                        <div>
                          <div className="text-white font-medium">30-60 minutes</div>
                          <div className="text-gray-300 text-sm">Comprehensive discussion about your needs</div>
                        </div>
                      </div>
                      <div className="flex items-start space-x-3">
                        <User className="w-5 h-5 text-cyan-400 mt-1" />
                        <div>
                          <div className="text-white font-medium">Expert Team</div>
                          <div className="text-gray-300 text-sm">AI specialists and IT architects</div>
                        </div>
                      </div>
                      <div className="flex items-start space-x-3">
                        <Award className="w-5 h-5 text-cyan-400 mt-1" />
                        <div>
                          <div className="text-white font-medium">Actionable Plan</div>
                          <div className="text-gray-300 text-sm">Clear next steps and recommendations</div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="cyber-card p-6">
                    <h3 className="text-xl font-bold text-white mb-4 neon-text">Quick Contact</h3>
                    <div className="space-y-4">
                      <a
                        href="tel:+13024640950"
                        className="flex items-center space-x-3 p-3 bg-slate-800 rounded-lg hover:bg-slate-700 transition-colors duration-300"
                      >
                        <Phone className="w-5 h-5 text-cyan-400" />
                        <div>
                          <div className="text-white font-medium">Call Now</div>
                          <div className="text-gray-400 text-sm">+1 (302) 464-0950</div>
                        </div>
                      </a>
                      <a
                        href="mailto:kleber@ziontechgroup.com"
                        className="flex items-center space-x-3 p-3 bg-slate-800 rounded-lg hover:bg-slate-700 transition-colors duration-300"
                      >
                        <Mail className="w-5 h-5 text-cyan-400" />
                        <div>
                          <div className="text-white font-medium">Email Us</div>
                          <div className="text-gray-400 text-sm">kleber@ziontechgroup.com</div>
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Testimonials Section */}
          <section className="container mx-auto px-4 py-16">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12 neon-text">
                What Our Clients Say
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {testimonials.map((testimonial, index) => (
                  <div key={index} className="cyber-card p-6">
                    <div className="flex items-center mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                      ))}
                    </div>
                    <p className="text-gray-300 mb-4 italic">"{testimonial.content}"</p>
                    <div>
                      <div className="font-semibold text-white">{testimonial.name}</div>
                      <div className="text-sm text-gray-400">{testimonial.company}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </main>
        
        <Footer />
      </div>
    </>
  );
};

export default ConsultationPage;
