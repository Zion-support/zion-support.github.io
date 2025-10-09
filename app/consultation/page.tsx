'use client';
import React, { useState } from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import SEOOptimizer from '../components/SEOOptimizer';
import { Calendar, Clock, Users, CheckCircle, Star, ArrowRight, Phone, Mail, MapPin, Brain, Zap, Shield, BarChart, Target, Lightbulb } from 'lucide-react';

const ConsultationPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    role: '',
    companySize: '',
    currentChallenges: '',
    goals: '',
    timeline: '',
    budget: '',
    interests: [] as string[],
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

  const handleCheckboxChange = (interest: string) => {
    setFormData(prev => ({
      ...prev,
      interests: prev.interests.includes(interest)
        ? prev.interests.filter(i => i !== interest)
        : [...prev.interests, interest]
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    setIsSubmitted(true);
  };

  const consultationTypes = [
    {
      icon: Brain,
      title: 'AI Strategy Consultation',
      description: 'Develop a comprehensive AI strategy for your business',
      duration: '2-3 hours',
      price: 'Free'
    },
    {
      icon: Target,
      title: 'Technology Assessment',
      description: 'Evaluate your current technology stack and identify opportunities',
      duration: '1-2 hours',
      price: 'Free'
    },
    {
      icon: Lightbulb,
      title: 'Innovation Workshop',
      description: 'Brainstorm and plan innovative solutions for your challenges',
      duration: '4-6 hours',
      price: '$500'
    },
    {
      icon: BarChart,
      title: 'ROI Analysis',
      description: 'Calculate potential returns on AI investments',
      duration: '1-2 hours',
      price: 'Free'
    }
  ];

  const benefits = [
    {
      icon: CheckCircle,
      title: 'Expert Guidance',
      description: 'Get advice from our team of AI and technology experts'
    },
    {
      icon: Target,
      title: 'Customized Solutions',
      description: 'Receive recommendations tailored to your specific needs'
    },
    {
      icon: Shield,
      title: 'Risk Assessment',
      description: 'Understand potential risks and how to mitigate them'
    },
    {
      icon: Zap,
      title: 'Implementation Plan',
      description: 'Get a clear roadmap for implementing AI solutions'
    }
  ];

  const companySizes = [
    '1-10 employees',
    '11-50 employees',
    '51-200 employees',
    '201-500 employees',
    '500+ employees'
  ];

  const roles = [
    'CEO/Founder',
    'CTO/Technical Director',
    'IT Manager',
    'Operations Manager',
    'Marketing Manager',
    'Finance Manager',
    'Other'
  ];

  const timelines = [
    'Immediate (within 1 month)',
    'Short-term (1-3 months)',
    'Medium-term (3-6 months)',
    'Long-term (6+ months)',
    'Just exploring'
  ];

  const budgets = [
    'Under $10,000',
    '$10,000 - $50,000',
    '$50,000 - $100,000',
    '$100,000 - $500,000',
    '$500,000+',
    'Not sure yet'
  ];

  const interests = [
    'AI Solutions',
    'IT Infrastructure',
    'Micro SAAS Tools',
    'Quantum Computing',
    'Autonomous Systems',
    'Blockchain & Web3',
    'IoT & Edge Computing',
    'Business Intelligence',
    'Robotics',
    'Custom Development',
    'Digital Transformation',
    'Process Automation'
  ];

  if (isSubmitted) {
    return (
      <>
        <SEOOptimizer
          title="Consultation Request Submitted - Zion Tech Group"
          description="Thank you for requesting a consultation. We'll contact you soon to schedule your free consultation session."
          canonicalUrl="https://ziontechgroup.com/consultation"
        />
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
          <Navigation />
          <main className="pt-16">
            <section className="container mx-auto px-4 py-16 text-center">
              <div className="max-w-2xl mx-auto">
                <div className="w-20 h-20 mx-auto mb-8 bg-green-500 rounded-full flex items-center justify-center">
                  <CheckCircle className="w-10 h-10 text-white" />
                </div>
                <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                  Consultation Request Submitted!
                </h1>
                <p className="text-xl text-gray-300 mb-8">
                  Thank you for your interest in our consultation services. Our team will contact you within 24 hours to schedule your free consultation session.
                </p>
                <div className="bg-gray-900/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700">
                  <h3 className="text-lg font-semibold text-white mb-4">What happens next?</h3>
                  <div className="space-y-3 text-left">
                    <div className="flex items-center space-x-3">
                      <div className="w-6 h-6 bg-cyan-500 rounded-full flex items-center justify-center text-sm font-bold text-white">1</div>
                      <span className="text-gray-300">We'll review your requirements and prepare for the consultation</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-6 h-6 bg-cyan-500 rounded-full flex items-center justify-center text-sm font-bold text-white">2</div>
                      <span className="text-gray-300">Our expert will contact you to schedule the best time</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-6 h-6 bg-cyan-500 rounded-full flex items-center justify-center text-sm font-bold text-white">3</div>
                      <span className="text-gray-300">We'll conduct a detailed consultation session</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-6 h-6 bg-cyan-500 rounded-full flex items-center justify-center text-sm font-bold text-white">4</div>
                      <span className="text-gray-300">You'll receive a comprehensive report with recommendations</span>
                    </div>
                  </div>
                </div>
                <div className="mt-8">
                  <button
                    onClick={() => setIsSubmitted(false)}
                    className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 mr-4"
                  >
                    Request Another Consultation
                  </button>
                  <a
                    href="/contact"
                    className="border border-cyan-400 text-cyan-400 px-8 py-3 rounded-lg font-semibold hover:bg-cyan-400 hover:text-white transition-all duration-300"
                  >
                    Contact Us
                  </a>
                </div>
              </div>
            </section>
          </main>
          <Footer />
        </div>
      </>
    );
  }

  return (
    <>
      <SEOOptimizer
        title="Free AI Consultation - Zion Tech Group"
        description="Get a free consultation with our AI experts. Discover how AI can transform your business. No obligation, expert guidance, customized recommendations."
        keywords={['AI consultation', 'free AI consultation', 'AI strategy', 'AI expert advice', 'AI business consultation']}
        canonicalUrl="https://ziontechgroup.com/consultation"
      />
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <Navigation />
        <main className="pt-16">
          {/* Hero Section */}
          <section className="container mx-auto px-4 py-16 text-center">
            <div className="max-w-4xl mx-auto">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 neon-text">
                Free AI Consultation
              </h1>
              <p className="text-xl md:text-2xl text-cyan-400 mb-8">
                Get expert guidance on how AI can transform your business
              </p>
              <div className="flex items-center justify-center space-x-6 text-gray-300">
                <div className="flex items-center space-x-2">
                  <Clock className="w-5 h-5 text-cyan-400" />
                  <span>1-3 hours</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Users className="w-5 h-5 text-cyan-400" />
                  <span>Expert guidance</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-cyan-400" />
                  <span>100% Free</span>
                </div>
              </div>
            </div>
          </section>

          {/* Consultation Types */}
          <section className="container mx-auto px-4 py-16">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Consultation Types
              </h2>
              <p className="text-xl text-gray-400">
                Choose the consultation that best fits your needs
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
              {consultationTypes.map((type, index) => (
                <div
                  key={index}
                  className="bg-gray-900/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700 hover:border-cyan-400 transition-all duration-300 text-center"
                >
                  <div className="w-12 h-12 mx-auto mb-4 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center">
                    <type.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">{type.title}</h3>
                  <p className="text-gray-400 mb-4">{type.description}</p>
                  <div className="space-y-2">
                    <div className="flex items-center justify-center space-x-2">
                      <Clock className="w-4 h-4 text-cyan-400" />
                      <span className="text-sm text-gray-300">{type.duration}</span>
                    </div>
                    <div className="text-lg font-bold text-cyan-400">{type.price}</div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Benefits */}
          <section className="container mx-auto px-4 py-16">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                What You'll Get
              </h2>
              <p className="text-xl text-gray-400">
                Our consultation provides real value for your business
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
              {benefits.map((benefit, index) => (
                <div
                  key={index}
                  className="bg-gray-900/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700 hover:border-cyan-400 transition-all duration-300 text-center"
                >
                  <div className="w-12 h-12 mx-auto mb-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                    <benefit.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">{benefit.title}</h3>
                  <p className="text-gray-400">{benefit.description}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Consultation Form */}
          <section className="container mx-auto px-4 py-16">
            <div className="max-w-4xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                {/* Form */}
                <div className="bg-gray-900/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700">
                  <h2 className="text-2xl font-bold text-white mb-6">Request Your Free Consultation</h2>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-300 mb-2">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white focus:outline-none focus:border-cyan-400"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-300 mb-2">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white focus:outline-none focus:border-cyan-400"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-300 mb-2">
                          Company
                        </label>
                        <input
                          type="text"
                          name="company"
                          value={formData.company}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white focus:outline-none focus:border-cyan-400"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-300 mb-2">
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white focus:outline-none focus:border-cyan-400"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-300 mb-2">
                          Your Role
                        </label>
                        <select
                          name="role"
                          value={formData.role}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white focus:outline-none focus:border-cyan-400"
                        >
                          <option value="">Select your role</option>
                          {roles.map((role, index) => (
                            <option key={index} value={role}>{role}</option>
                          ))}
                        </select>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-300 mb-2">
                          Company Size
                        </label>
                        <select
                          name="companySize"
                          value={formData.companySize}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white focus:outline-none focus:border-cyan-400"
                        >
                          <option value="">Select company size</option>
                          {companySizes.map((size, index) => (
                            <option key={index} value={size}>{size}</option>
                          ))}
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        Current Challenges
                      </label>
                      <textarea
                        name="currentChallenges"
                        value={formData.currentChallenges}
                        onChange={handleInputChange}
                        rows={3}
                        className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white focus:outline-none focus:border-cyan-400"
                        placeholder="What challenges is your business currently facing?"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        Goals & Objectives
                      </label>
                      <textarea
                        name="goals"
                        value={formData.goals}
                        onChange={handleInputChange}
                        rows={3}
                        className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white focus:outline-none focus:border-cyan-400"
                        placeholder="What are your main business goals?"
                      />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-300 mb-2">
                          Timeline
                        </label>
                        <select
                          name="timeline"
                          value={formData.timeline}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white focus:outline-none focus:border-cyan-400"
                        >
                          <option value="">Select timeline</option>
                          {timelines.map((timeline, index) => (
                            <option key={index} value={timeline}>{timeline}</option>
                          ))}
                        </select>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-300 mb-2">
                          Budget Range
                        </label>
                        <select
                          name="budget"
                          value={formData.budget}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white focus:outline-none focus:border-cyan-400"
                        >
                          <option value="">Select budget range</option>
                          {budgets.map((budget, index) => (
                            <option key={index} value={budget}>{budget}</option>
                          ))}
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-3">
                        Areas of Interest (Select all that apply)
                      </label>
                      <div className="grid grid-cols-2 gap-3">
                        {interests.map((interest, index) => (
                          <label key={index} className="flex items-center space-x-2">
                            <input
                              type="checkbox"
                              checked={formData.interests.includes(interest)}
                              onChange={() => handleCheckboxChange(interest)}
                              className="w-4 h-4 text-cyan-500 bg-gray-800 border-gray-600 rounded focus:ring-cyan-400"
                            />
                            <span className="text-sm text-gray-300">{interest}</span>
                          </label>
                        ))}
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        Additional Information
                      </label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        rows={4}
                        className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white focus:outline-none focus:border-cyan-400"
                        placeholder="Tell us anything else that would help us prepare for your consultation..."
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300"
                    >
                      Request Free Consultation
                    </button>
                  </form>
                </div>

                {/* Info */}
                <div className="space-y-8">
                  <div className="bg-gray-900/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700">
                    <h3 className="text-xl font-semibold text-white mb-4">Why Get a Consultation?</h3>
                    <ul className="space-y-3">
                      <li className="flex items-start space-x-3">
                        <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-300">Get expert advice tailored to your business</span>
                      </li>
                      <li className="flex items-start space-x-3">
                        <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-300">Understand the potential of AI for your industry</span>
                      </li>
                      <li className="flex items-start space-x-3">
                        <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-300">Identify opportunities for improvement</span>
                      </li>
                      <li className="flex items-start space-x-3">
                        <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-300">Receive a customized roadmap</span>
                      </li>
                    </ul>
                  </div>

                  <div className="bg-gray-900/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700">
                    <h3 className="text-xl font-semibold text-white mb-4">Our Experts</h3>
                    <div className="space-y-4">
                      <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full flex items-center justify-center">
                          <Brain className="w-5 h-5 text-white" />
                        </div>
                        <div>
                          <div className="text-white font-medium">AI Specialists</div>
                          <div className="text-gray-400 text-sm">Machine Learning & AI Experts</div>
                        </div>
                      </div>
                      <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
                          <Shield className="w-5 h-5 text-white" />
                        </div>
                        <div>
                          <div className="text-white font-medium">Technology Architects</div>
                          <div className="text-gray-400 text-sm">System Design & Implementation</div>
                        </div>
                      </div>
                      <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center">
                          <BarChart className="w-5 h-5 text-white" />
                        </div>
                        <div>
                          <div className="text-white font-medium">Business Analysts</div>
                          <div className="text-gray-400 text-sm">ROI & Strategy Experts</div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-gradient-to-r from-purple-600/20 to-blue-600/20 rounded-xl p-6 border border-purple-500/30">
                    <h3 className="text-xl font-semibold text-white mb-4">Ready to Transform Your Business?</h3>
                    <p className="text-gray-300 mb-4">
                      Don't miss out on the opportunity to get expert guidance on how AI can revolutionize your business processes.
                    </p>
                    <a
                      href="/contact"
                      className="inline-flex items-center text-cyan-400 hover:text-cyan-300 transition-colors"
                    >
                      Contact us directly
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </a>
                  </div>
                </div>
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