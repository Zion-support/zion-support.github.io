'use client';
import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Calendar, Clock, User, Mail, Phone, CheckCircle, ArrowRight, Star, Users, Target, Zap, Shield } from 'lucide-react';

const ConsultationPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    role: '',
    projectType: '',
    budget: '',
    timeline: '',
    description: '',
    goals: '',
    challenges: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: '',
        email: '',
        company: '',
        phone: '',
        role: '',
        projectType: '',
        budget: '',
        timeline: '',
        description: '',
        goals: '',
        challenges: ''
      });
    }, 3000);
  };

  const projectTypes = [
    'AI Development',
    'Quantum Computing',
    'Cloud Migration',
    'Cybersecurity',
    'Data Analytics',
    'Custom Software',
    'IoT Solutions',
    'Other'
  ];

  const budgetRanges = [
    'Under $10,000',
    '$10,000 - $50,000',
    '$50,000 - $100,000',
    '$100,000 - $500,000',
    'Over $500,000',
    'Not sure yet'
  ];

  const timelines = [
    'ASAP',
    'Within 1 month',
    '1-3 months',
    '3-6 months',
    '6-12 months',
    'Over 12 months'
  ];

  const benefits = [
    {
      icon: Target,
      title: 'Strategic Planning',
      description: 'Get a clear roadmap for your technology transformation'
    },
    {
      icon: Users,
      title: 'Expert Guidance',
      description: 'Work with our experienced technology consultants'
    },
    {
      icon: Zap,
      title: 'Proven Solutions',
      description: 'Leverage battle-tested technologies and methodologies'
    },
    {
      icon: Shield,
      title: 'Risk Mitigation',
      description: 'Identify and address potential challenges early'
    }
  ];

  const processSteps = [
    {
      step: '1',
      title: 'Initial Consultation',
      description: 'We discuss your goals, challenges, and requirements'
    },
    {
      step: '2',
      title: 'Assessment & Analysis',
      description: 'We analyze your current systems and identify opportunities'
    },
    {
      step: '3',
      title: 'Solution Design',
      description: 'We create a customized solution architecture for your needs'
    },
    {
      step: '4',
      title: 'Implementation Plan',
      description: 'We provide a detailed roadmap with timelines and milestones'
    }
  ];

  return (
    <>
      <Helmet>
        <title>Free Consultation - Zion Tech Group | Expert Technology Consulting</title>
        <meta name="description" content="Get a free consultation with our technology experts. Discuss your project goals and discover how our AI, quantum computing, and IT solutions can help your business." />
        <meta name="keywords" content="free consultation, technology consulting, AI consulting, quantum computing, IT solutions, project planning" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h1 className="text-5xl lg:text-7xl font-bold text-white mb-6">
                Free
                <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
                  Consultation
                </span>
              </h1>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
                Get expert advice on your technology project. Our consultants will help you 
                identify opportunities, plan your strategy, and choose the right solutions.
              </p>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 bg-slate-800/50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">Why Choose Our Consultation?</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Get personalized guidance from our technology experts
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg mx-auto mb-4 flex items-center justify-center">
                    <benefit.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{benefit.title}</h3>
                  <p className="text-gray-300">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">Our Consultation Process</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                A structured approach to understanding your needs and providing expert guidance
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {processSteps.map((step, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <span className="text-2xl font-bold text-white">{step.step}</span>
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">{step.title}</h3>
                  <p className="text-gray-300 text-sm">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Consultation Form */}
        <section className="py-20 bg-slate-800/50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-4xl font-bold text-white mb-4">Schedule Your Free Consultation</h2>
                <p className="text-xl text-gray-300">
                  Fill out the form below and we'll get back to you within 24 hours
                </p>
              </div>

              {isSubmitted ? (
                <div className="bg-green-500/20 border border-green-500/50 rounded-lg p-8 text-center">
                  <CheckCircle className="w-16 h-16 text-green-400 mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-white mb-2">Consultation Requested!</h3>
                  <p className="text-gray-300">Thank you for your interest. We'll contact you soon to schedule your free consultation.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <label htmlFor="name" className="block text-white font-semibold mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                        placeholder="Your full name"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-white font-semibold mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                        placeholder="your.email@example.com"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <label htmlFor="company" className="block text-white font-semibold mb-2">
                        Company Name
                      </label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                        placeholder="Your company name"
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-white font-semibold mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                        placeholder="+1 (555) 123-4567"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <label htmlFor="role" className="block text-white font-semibold mb-2">
                        Your Role
                      </label>
                      <input
                        type="text"
                        id="role"
                        name="role"
                        value={formData.role}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                        placeholder="e.g., CTO, Project Manager, Business Owner"
                      />
                    </div>
                    <div>
                      <label htmlFor="projectType" className="block text-white font-semibold mb-2">
                        Project Type
                      </label>
                      <select
                        id="projectType"
                        name="projectType"
                        value={formData.projectType}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                      >
                        <option value="">Select project type</option>
                        {projectTypes.map((type, index) => (
                          <option key={index} value={type} className="bg-gray-800">
                            {type}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <label htmlFor="budget" className="block text-white font-semibold mb-2">
                        Budget Range
                      </label>
                      <select
                        id="budget"
                        name="budget"
                        value={formData.budget}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                      >
                        <option value="">Select budget range</option>
                        {budgetRanges.map((range, index) => (
                          <option key={index} value={range} className="bg-gray-800">
                            {range}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label htmlFor="timeline" className="block text-white font-semibold mb-2">
                        Project Timeline
                      </label>
                      <select
                        id="timeline"
                        name="timeline"
                        value={formData.timeline}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                      >
                        <option value="">Select timeline</option>
                        {timelines.map((timeline, index) => (
                          <option key={index} value={timeline} className="bg-gray-800">
                            {timeline}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div className="mb-6">
                    <label htmlFor="description" className="block text-white font-semibold mb-2">
                      Project Description *
                    </label>
                    <textarea
                      id="description"
                      name="description"
                      value={formData.description}
                      onChange={handleChange}
                      required
                      rows={4}
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent resize-none"
                      placeholder="Tell us about your project in detail..."
                    />
                  </div>

                  <div className="mb-6">
                    <label htmlFor="goals" className="block text-white font-semibold mb-2">
                      Project Goals
                    </label>
                    <textarea
                      id="goals"
                      name="goals"
                      value={formData.goals}
                      onChange={handleChange}
                      rows={3}
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent resize-none"
                      placeholder="What do you hope to achieve with this project?"
                    />
                  </div>

                  <div className="mb-8">
                    <label htmlFor="challenges" className="block text-white font-semibold mb-2">
                      Current Challenges
                    </label>
                    <textarea
                      id="challenges"
                      name="challenges"
                      value={formData.challenges}
                      onChange={handleChange}
                      rows={3}
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent resize-none"
                      placeholder="What challenges are you currently facing?"
                    />
                  </div>

                  <div className="text-center">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center space-x-2 mx-auto disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                          <span>Submitting...</span>
                        </>
                      ) : (
                        <>
                          <Calendar className="w-5 h-5" />
                          <span>Schedule Free Consultation</span>
                        </>
                      )}
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold text-white mb-6">Ready to Transform Your Business?</h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Don't wait to get started. Schedule your free consultation today and take the first step towards your technology transformation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center space-x-2"
              >
                <span>Contact Us Directly</span>
                <ArrowRight className="w-5 h-5" />
              </a>
              <a
                href="/services"
                className="border border-white/20 text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-all duration-300 flex items-center justify-center space-x-2"
              >
                <span>View Our Services</span>
              </a>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default ConsultationPage;