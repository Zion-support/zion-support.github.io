'use client';
import React, { useState } from 'react';
import { Calendar, Clock, User, Mail, Phone, CheckCircle, ArrowRight, Brain, Cloud, Shield, BarChart } from 'lucide-react';

const ConsultationPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    role: '',
    challenge: '',
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
    console.log('Consultation request submitted:', formData);
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: '',
        email: '',
        company: '',
        phone: '',
        role: '',
        challenge: '',
        budget: '',
        timeline: '',
        message: ''
      });
    }, 3000);
  };

  const consultationTypes = [
    {
      icon: Brain,
      title: 'AI Strategy Consultation',
      description: 'Get expert advice on implementing AI solutions in your business',
      duration: '60 minutes',
      includes: [
        'AI readiness assessment',
        'Technology recommendations',
        'Implementation roadmap',
        'ROI projections'
      ]
    },
    {
      icon: Cloud,
      title: 'Cloud Migration Planning',
      description: 'Plan your cloud migration with our infrastructure experts',
      duration: '90 minutes',
      includes: [
        'Current infrastructure analysis',
        'Cloud platform selection',
        'Migration strategy',
        'Cost optimization plan'
      ]
    },
    {
      icon: Shield,
      title: 'Cybersecurity Audit',
      description: 'Comprehensive security assessment and recommendations',
      duration: '120 minutes',
      includes: [
        'Security vulnerability assessment',
        'Compliance review',
        'Risk mitigation plan',
        'Security tool recommendations'
      ]
    },
    {
      icon: BarChart,
      title: 'Data Analytics Strategy',
      description: 'Develop a data-driven approach to business intelligence',
      duration: '75 minutes',
      includes: [
        'Data quality assessment',
        'Analytics tool selection',
        'Dashboard design',
        'KPI recommendations'
      ]
    }
  ];

  const benefits = [
    'Free 30-minute initial consultation',
    'Personalized recommendations',
    'No obligation to proceed',
    'Expert insights from industry leaders',
    'Custom solution roadmap'
  ];

  const roles = [
    'CEO/Founder',
    'CTO/Technical Director',
    'IT Manager',
    'Operations Manager',
    'Data Analyst',
    'Other'
  ];

  const challenges = [
    'Improving operational efficiency',
    'Implementing AI solutions',
    'Cloud migration',
    'Cybersecurity concerns',
    'Data management issues',
    'Process automation',
    'Other'
  ];

  const budgetRanges = [
    'Under $10K',
    '$10K - $50K',
    '$50K - $100K',
    '$100K - $500K',
    'Over $500K',
    'Not sure yet'
  ];

  const timelines = [
    'ASAP',
    'Within 1 month',
    'Within 3 months',
    'Within 6 months',
    'Within 1 year',
    'Just exploring'
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Hero Section */}
      <section className="relative pt-20 pb-16 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Free <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Consultation</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-4xl mx-auto">
              Get expert advice on your technology challenges. Our free consultation 
              helps you understand how AI and IT solutions can transform your business.
            </p>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Consultation Types */}
          <div className="lg:col-span-1">
            <div className="sticky top-8 space-y-8">
              <div className="cyber-card p-6">
                <h3 className="text-xl font-bold text-white mb-4">Consultation Types</h3>
                <div className="space-y-4">
                  {consultationTypes.map((type, index) => (
                    <div key={index} className="p-4 bg-gray-800/50 rounded-lg group hover:bg-gray-700/50 transition-colors">
                      <div className="flex items-start space-x-3">
                        <div className="w-10 h-10 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                          <type.icon className="w-5 h-5 text-white" />
                        </div>
                        <div className="flex-1">
                          <h4 className="text-lg font-semibold text-white mb-1">{type.title}</h4>
                          <p className="text-sm text-gray-300 mb-2">{type.description}</p>
                          <div className="flex items-center space-x-2 text-xs text-cyan-400 mb-2">
                            <Clock className="w-3 h-3" />
                            <span>{type.duration}</span>
                          </div>
                          <div className="space-y-1">
                            {type.includes.slice(0, 2).map((item, itemIndex) => (
                              <div key={itemIndex} className="text-xs text-gray-400">
                                • {item}
                              </div>
                            ))}
                            {type.includes.length > 2 && (
                              <div className="text-xs text-cyan-400">
                                +{type.includes.length - 2} more
                              </div>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="cyber-card p-6">
                <h3 className="text-xl font-bold text-white mb-4">What You Get</h3>
                <div className="space-y-3">
                  {benefits.map((benefit, index) => (
                    <div key={index} className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                      <span className="text-sm text-gray-300">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Consultation Request Form */}
          <div className="lg:col-span-2">
            <div className="cyber-card p-8">
              <h2 className="text-3xl font-bold text-white mb-6">Request Your Free Consultation</h2>
              
              {isSubmitted ? (
                <div className="text-center py-8">
                  <CheckCircle className="w-16 h-16 text-green-400 mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-white mb-2">Consultation Request Submitted!</h3>
                  <p className="text-gray-300">Thank you for your interest. We'll contact you within 24 hours to schedule your free consultation.</p>
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
                        className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-colors"
                        placeholder="Enter your full name"
                        required
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
                        className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-colors"
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
                        className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-colors"
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
                        className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-colors"
                        placeholder="Enter your phone number"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="role" className="block text-sm font-medium text-gray-300 mb-2">
                      Your Role
                    </label>
                    <select
                      id="role"
                      name="role"
                      value={formData.role}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-colors"
                    >
                      <option value="">Select your role</option>
                      {roles.map((role, index) => (
                        <option key={index} value={role}>{role}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label htmlFor="challenge" className="block text-sm font-medium text-gray-300 mb-2">
                      Main Challenge
                    </label>
                    <select
                      id="challenge"
                      name="challenge"
                      value={formData.challenge}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-colors"
                    >
                      <option value="">Select your main challenge</option>
                      {challenges.map((challenge, index) => (
                        <option key={index} value={challenge}>{challenge}</option>
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
                        className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-colors"
                      >
                        <option value="">Select budget range</option>
                        {budgetRanges.map((range, index) => (
                          <option key={index} value={range}>{range}</option>
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
                        className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-colors"
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
                      Additional Information
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      value={formData.message}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-colors"
                      placeholder="Tell us more about your specific needs, goals, or questions..."
                    />
                  </div>

                  <div className="cyber-card p-4 bg-cyan-500/10 border border-cyan-500/20">
                    <h4 className="text-lg font-semibold text-white mb-2">What Happens Next?</h4>
                    <div className="space-y-2 text-sm text-gray-300">
                      <div className="flex items-center space-x-2">
                        <span className="w-6 h-6 bg-cyan-500 text-white rounded-full flex items-center justify-center text-xs font-bold">1</span>
                        <span>We review your information and prepare personalized recommendations</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <span className="w-6 h-6 bg-cyan-500 text-white rounded-full flex items-center justify-center text-xs font-bold">2</span>
                        <span>We contact you within 24 hours to schedule your consultation</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <span className="w-6 h-6 bg-cyan-500 text-white rounded-full flex items-center justify-center text-xs font-bold">3</span>
                        <span>You receive expert advice and a custom solution roadmap</span>
                      </div>
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="w-full cyber-button text-center py-4 inline-flex items-center justify-center space-x-2 group"
                  >
                    <Calendar className="w-5 h-5" />
                    <span>Request Free Consultation</span>
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-cyan-600 to-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-cyan-100 mb-8 max-w-3xl mx-auto">
            Get expert guidance on your technology challenges. Our free consultation 
            is the first step towards digital transformation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="tel:+13024640950"
              className="bg-white text-cyan-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold text-lg transition-colors inline-flex items-center space-x-2 group"
            >
              <Phone className="w-5 h-5" />
              <span>Call (302) 464-0950</span>
            </a>
            <a
              href="mailto:consultation@ziontechgroup.com"
              className="border-2 border-white text-white hover:bg-white hover:text-cyan-600 px-8 py-4 rounded-lg font-semibold text-lg transition-colors inline-flex items-center space-x-2"
            >
              <Mail className="w-5 h-5" />
              <span>consultation@ziontechgroup.com</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ConsultationPage;